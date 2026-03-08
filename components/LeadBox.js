'use client';
import { useState } from 'react';

export default function LeadBox({ guida = '', titolo = 'Non vuoi farlo da solo?', sottotitolo = 'Trova un professionista nella tua zona. Gratis, senza impegno.' }) {
  const [cap, setCap] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!cap || cap.replace(/\D/g, '').length < 4) {
      setError('Inserisci un CAP valido.');
      return;
    }
    if (!telefono || telefono.replace(/\D/g, '').length < 8) {
      setError('Inserisci un numero di telefono valido.');
      return;
    }
    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guida,
          cap: cap.trim(),
          telefono: telefono.trim(),
          email: email.trim() || '',
        }),
      });
    } catch {
      // silent fail
    }
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="lead-box lead-box-done" id="trova-professionista">
        <div className="lead-icon">✅</div>
        <div className="lead-done-title">Richiesta ricevuta!</div>
        <p>Un professionista della tua zona ti contatterà entro 24 ore. Nessun obbligo, nessun costo per te.</p>
      </div>
    );
  }

  return (
    <div className="lead-box" id="trova-professionista">
      <div className="lead-header">
        <div className="lead-icon">📍</div>
        <div>
          <div className="lead-title">{titolo}</div>
          <div className="lead-sub">{sottotitolo}</div>
        </div>
      </div>
      {error && <div className="lead-error">{error}</div>}
      <div className="lead-fields">
        <div className="lead-field">
          <label htmlFor={`cap-${guida}`}>Il tuo CAP *</label>
          <input
            type="text"
            id={`cap-${guida}`}
            placeholder="Es. 20100"
            maxLength={5}
            value={cap}
            onChange={e => setCap(e.target.value)}
          />
        </div>
        <div className="lead-field">
          <label htmlFor={`tel-${guida}`}>Telefono *</label>
          <input
            type="tel"
            id={`tel-${guida}`}
            placeholder="Es. 333 123 4567"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>
        <div className="lead-field">
          <label htmlFor={`email-${guida}`}>Email <span style={{opacity:.5}}>(facoltativa)</span></label>
          <input
            type="email"
            id={`email-${guida}`}
            placeholder="Es. mario@email.it"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button className="lead-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Invio…' : 'Trova professionista →'}
        </button>
      </div>
      <div className="lead-privacy">
        🔒 Nessun costo per te. Ti chiamano entro 24h. <a href="/privacy">Privacy policy</a>
      </div>
    </div>
  );
}
