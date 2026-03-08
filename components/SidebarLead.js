'use client';
import { useState } from 'react';

export default function SidebarLead({ guida = '' }) {
  const [cap, setCap] = useState('');
  const [telefono, setTelefono] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!cap || cap.replace(/\D/g, '').length < 4) { setError('CAP non valido'); return; }
    if (!telefono || telefono.replace(/\D/g, '').length < 8) { setError('Telefono non valido'); return; }
    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guida, cap: cap.trim(), telefono: telefono.trim(), email: '' }),
      });
    } catch {}
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="sb-lead sb-lead-done">
        <div style={{fontSize:'24px',marginBottom:'8px'}}>✅</div>
        <div className="sb-lead-t">Ti richiamiamo entro 24h!</div>
      </div>
    );
  }

  return (
    <div className="sb-lead">
      <div className="sb-lead-t">📍 Trova professionista</div>
      <div className="sb-lead-d">CAF, commercialista o consulente nella tua zona.</div>
      {error && <div className="sb-lead-err">{error}</div>}
      <input type="text" placeholder="Il tuo CAP" maxLength={5} value={cap} onChange={e => setCap(e.target.value)} className="sb-lead-input" />
      <input type="tel" placeholder="Telefono" value={telefono} onChange={e => setTelefono(e.target.value)} className="sb-lead-input" />
      <button className="sb-lead-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Invio…' : 'Trova →'}
      </button>
      <div className="sb-lead-note">Gratis e senza impegno</div>
    </div>
  );
}
