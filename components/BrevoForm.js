'use client';
import { useState, useEffect } from 'react';

export default function BrevoForm({ pageName = 'default', id = null }) {
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = `zb_news_${pageName}`;
      if (localStorage.getItem(key)) setSent(true);
    }
  }, [pageName]);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setMsg({ type: 'err', text: 'Inserisci un indirizzo email valido.' });
      return;
    }
    if (!privacy) {
      setMsg({ type: 'err', text: 'Devi accettare la privacy policy per iscriverti.' });
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pagina: pageName }),
      });

      if (res.ok) {
        setMsg({ type: 'ok', text: 'Iscritto! Riceverai aggiornamenti su scadenze e nuove guide.' });
        setSent(true);
        localStorage.setItem(`zb_news_${pageName}`, '1');
      } else {
        setMsg({ type: 'err', text: 'Qualcosa non ha funzionato. Riprova.' });
      }
    } catch {
      setMsg({ type: 'err', text: 'Errore di rete. Riprova tra qualche secondo.' });
    }
    setLoading(false);
  };

  return (
    <section className="final-section" id={id}>
      <div className="sec-title">Resta aggiornato.<br/>Senza <em>impazzire.</em></div>
      <div className="final-sub">Scadenze, bonus e novit&agrave; che ti riguardano. Una email quando serve. Ti cancelli in un click.</div>
      {msg && <div className={`final-msg final-msg--${msg.type}`}>{msg.text}</div>}
      {!sent ? (
        <>
          <div className="final-form">
            <input
              type="email"
              placeholder="la-tua@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? 'Invio...' : 'Iscriviti gratis \u2192'}
            </button>
          </div>
          <label className="final-check">
            <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
            <span>Accetto la <a href="/privacy" target="_blank" rel="noopener">privacy policy</a></span>
          </label>
          <div className="final-trust">
            <span>Gratis, per sempre</span>
            <span>Solo cose utili</span>
            <span>Via in 1 click</span>
          </div>
        </>
      ) : (
        <div className="final-done">{'\u2705'} Sei iscritto! Ti avviseremo sulle prossime scadenze.</div>
      )}
    </section>
  );
}
