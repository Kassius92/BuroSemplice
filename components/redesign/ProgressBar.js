'use client';
import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      if (!barRef.current) return;
      const pct = Math.min(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
        100
      );
      barRef.current.style.width = pct + '%';
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return <div className="v8-prog" ref={barRef} />;
}
