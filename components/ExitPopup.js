'use client';
import { useState, useEffect, useRef } from 'react';

export default function ExitPopup({ scheda = '' }) {
  const [show, setShow] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    if (shown.current) return;

    // Desktop: mouse leaves viewport
    const onMouseLeave = (e) => {
      if (e.clientY < 10 && !shown.current) {
        shown.current = true;
        setShow(true);
      }
    };

    // Mobile: after 45s + scroll up
    let timer = null;
    let canShowMobile = false;
    timer = setTimeout(() => { canShowMobile = true; }, 45000);

    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (canShowMobile && y < lastY - 80 && !shown.current) {
        shown.current = true;
        setShow(true);
      }
      lastY = y;
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  const href = scheda ? `/ordina?scheda=${scheda}` : '/ordina';

  return (
    <div className="exit-overlay" onClick={() => setShow(false)}>
      <div className="exit-card" onClick={e => e.stopPropagation()}>
        <button className="exit-close" onClick={() => setShow(false)}>✕</button>
        <div className="exit-emoji">👋</div>
        <h3>Aspetta — la scheda è gratis</h3>
        <p>Abbiamo già calcolato tutto per <strong>centinaia di persone</strong> questa settimana. Ci vogliono 2 minuti e ricevi i tuoi numeri esatti via email.</p>
        <a href={href} className="exit-btn">Personalizza ora — è gratis →</a>
        <div className="exit-skip" onClick={() => setShow(false)}>No grazie, ho già le informazioni che mi servono</div>
      </div>
    </div>
  );
}
