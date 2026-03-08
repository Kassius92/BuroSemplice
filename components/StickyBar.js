'use client';
import { useState, useEffect } from 'react';

export default function StickyBar({ scheda = '' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(pct > 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const href = scheda ? `/ordina?scheda=${scheda}` : '/ordina';

  return (
    <div className="sticky-cta-bar">
      <div className="sticky-cta-left"><strong>Quanto spetta a te?</strong> Scoprilo in 2 minuti</div>
      <a href={href} className="sticky-cta-btn">Personalizza <span className="sticky-cta-free">Gratis</span></a>
    </div>
  );
}
