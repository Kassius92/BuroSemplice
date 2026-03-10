'use client';
import { useState, useEffect } from 'react';

export default function BrevoForm({ pageName = 'default' }) {
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
    <div className="remind-box">
      <div className="remind-inner">
        <div className="remind-icon">{'\uD83D\uDD14'}</div>
        <div className="remind-title">Resta aggiornato</div>
        <div className="remind-desc">Scadenze, nuove guide e consigli utili. Gratis, niente spam, cancelli quando vuoi.</div>
        {msg && <div className={`remind-msg remind-msg--${msg.type}`}>{msg.text}</div>}
        {!sent && (
          <>
            <div className="remind-row">
              <input
                className="remind-input"
                type="email"
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
              />
              <button className="remind-btn" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Invio...' : 'Iscriviti'}
              </button>
            </div>
            <label className="remind-check">
              <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
              <span>Accetto la <a href="/privacy" target="_blank" rel="noopener">privacy policy</a></span>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
