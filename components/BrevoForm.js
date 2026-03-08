'use client';
import { useState, useEffect } from 'react';

const BREVO_ENDPOINT = 'https://26076dda.sibforms.com/serve/MUIFAOZAUqwpuIYv9EMr7PDrkBg9trLLpxxphgHJPnt7xi4uLEdOek4cX0fA_VWcBexGXTHPGawPmISFbSdJ0rQ0-JYpten6oKYM1NQMLE2ir-9nsWRI5-GUQpeWeASE2plzbGULiFOsMQdEEG6G6EV2xjinB_MkZd-qZq4KcerJ0j1UULgIneKBhwnywCD0BIDh1d3GDFw-FR8K8Q==';

export default function BrevoForm({ pageName = 'default' }) {
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = `bs_remind_${pageName}`;
      if (localStorage.getItem(key)) setSent(true);
    }
  }, [pageName]);

  const handleSubmit = async () => {
    if (!email || !privacy) {
      setMsg({ type: 'err', text: 'Inserisci l\'email e accetta la privacy.' });
      return;
    }
    try {
      const form = new FormData();
      form.append('EMAIL', email);
      form.append('OPT_IN', '1');
      form.append('email_address_check', '');
      form.append('locale', 'it');
      await fetch(BREVO_ENDPOINT, { method: 'POST', body: form, mode: 'no-cors' });
      setMsg({ type: 'ok', text: 'Iscrizione confermata! Ti terremo aggiornato.' });
      setSent(true);
      localStorage.setItem(`bs_remind_${pageName}`, '1');
    } catch {
      setMsg({ type: 'err', text: 'Errore di rete. Riprova.' });
    }
  };

  return (
    <div className="remind-box">
      <div className="remind-inner">
        <div className="remind-icon">🔔</div>
        <div className="remind-title">Resta aggiornato</div>
        <div className="remind-desc">Novità, consigli e guide nuove direttamente nella tua inbox. Gratis, niente spam.</div>
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
              />
              <button className="remind-btn" onClick={handleSubmit}>Iscriviti</button>
            </div>
            <label className="remind-check">
              <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
              <span>Accetto la <a href="/privacy" target="_blank" rel="noopener">privacy policy</a>. Posso cancellarmi quando voglio.</span>
            </label>
          </>
        )}
        <div className="remind-note">Niente spam, cancelli quando vuoi. <a href="/privacy">Privacy policy</a></div>
      </div>
    </div>
  );
}
