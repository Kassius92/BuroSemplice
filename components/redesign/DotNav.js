'use client';
import { useEffect, useState } from 'react';

/**
 * DotNav — pallini laterali fissi per navigazione sezioni
 * @param {Object} props
 * @param {Array<{id: string, label: string}>} props.sections - Array di {id, label}
 */
export default function DotNav({ sections = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = () => {
      let cur = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 300) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!sections.length) return null;

  return (
    <div className="v8-dots">
      {sections.map((s, i) => (
        <button
          key={s.id}
          className={`v8-dot${i === active ? ' on' : ''}`}
          title={s.label}
          onClick={() => scrollTo(s.id)}
          aria-label={s.label}
        />
      ))}
    </div>
  );
}
