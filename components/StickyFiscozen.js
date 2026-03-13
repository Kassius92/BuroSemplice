'use client';
import { useState, useEffect } from 'react';

export default function StickyFiscozen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-fz">
      <div className="sticky-fz-left">
        <strong>Fiscozen &mdash; Sconto 50&euro;</strong>
        <span>Commercialista online per P.IVA</span>
      </div>
      <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="sticky-fz-btn">
        Ottieni {'\u2192'}
      </a>
    </div>
  );
}
