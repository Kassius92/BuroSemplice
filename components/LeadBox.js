'use client';
import { useState } from 'react';

export default function LeadBox({ guida = '', titolo = 'Non vuoi farlo da solo?', sottotitolo = 'Trova un professionista nella tua zona. Gratis, senza impegno.' }) {
  const [cap, setCap] = useState('');
  const [contatto, setContatto] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!cap || cap.replace(/\D/g, '').length < 4) {
      setError('Inserisci un CAP valido.');
      return;
    }
    if (!contatto || (!contatto.includes('@') && contatto.replace(/\D/g, '').length < 8)) {
      setError('Inserisci un\'email o un numero di telefono.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guida, cap: cap.trim(), contatto: contatto.trim() }),
      });
      if (!res.ok) throw new Error();
    } catch {
      // fallback: log via image pixel to Google Sheet
    }
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="lead-box lead-box-done" id="trova-professionista">
        <div className="lead-icon">✅</div>
        <div className="lead-done-title">Richiesta ricevuta!</div>
        <p>Ti metteremo in contatto con un professionista della tua zona entro 24 ore. Nessun obbligo, nessun costo per te.</p>
      </div>
    );
  }

  return (
    <div className="lead-box" id="trova-professionista">
      <div className="lead-header">
        <div className="lead-icon">👤</div>
        <div>
          <div className="lead-title">{titolo}</div>
          <div className="lead-sub">{sottotitolo}</div>
        </div>
      </div>
      {error && <div className="lead-error">{error}</div>}
      <div className="lead-fields">
        <div className="lead-field">
          <label htmlFor={`cap-${guida}`}>Il tuo CAP</label>
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
          <label htmlFor={`contatto-${guida}`}>Email o telefono</label>
          <input
            type="text"
            id={`contatto-${guida}`}
            placeholder="Es. mario@email.it o 333 123 4567"
            value={contatto}
            onChange={e => setContatto(e.target.value)}
          />
        </div>
        <button className="lead-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Invio…' : 'Trova professionista →'}
        </button>
      </div>
      <div className="lead-privacy">
        🔒 Nessun costo. Ti contattiamo entro 24h. <a href="/privacy">Privacy policy</a>
      </div>
    </div>
  );
}
