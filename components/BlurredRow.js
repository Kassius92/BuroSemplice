'use client';

export default function BlurredRow({ scheda = '', label = 'Il tuo importo esatto' }) {
  const href = scheda ? `/ordina?scheda=${scheda}` : '/ordina';
  
  return (
    <div className="blur-band">
      <div className="blur-fake-row">
        <span className="blur-fake-label">{label}</span>
        <span className="blur-fake-val">€ 2.187</span>
      </div>
      <a href={href} className="blur-cta-link">🔓 Scopri il tuo importo — Gratis →</a>
    </div>
  );
}
