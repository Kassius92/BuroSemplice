'use client';
import { useEffect, useState } from 'react';

/**
 * DotNav — pallini laterali fissi con etichetta al hover/attivo
 * @param {Array<{id: string, label: string}>} sections
 */
export default function DotNav({ sections = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      let cur = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 200) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!sections.length) return null;

  return (
    <div className="v8-dots">
      {sections.map((s, i) => (
        <button
          key={s.id}
          className={`v8-dot${i === active ? ' on' : ''}`}
          onClick={() => scrollTo(s.id)}
          aria-label={s.label}
        >
          <span className="v8-dot-label">{s.label}</span>
          <span className="v8-dot-circle" />
        </button>
      ))}
    </div>
  );
}
