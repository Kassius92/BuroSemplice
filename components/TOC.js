'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import VersionToggle from './VersionToggle';

export default function TOC({ items }) {
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);
  const scrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingRef.current) return;
      const threshold = 160;
      let currentId = '';
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) currentId = item.id;
      }
      setActive(currentId);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    setActive(id);
    scrollingRef.current = true;

    const offset = 118;

    // First scroll to get close
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });

    // Correction after layout settles (TOC sticky state may have changed)
    const correct = () => {
      const diff = target.getBoundingClientRect().top - offset;
      if (Math.abs(diff) > 2) {
        window.scrollTo({
          top: window.scrollY + diff,
          behavior: 'smooth',
        });
      }
      setTimeout(() => { scrollingRef.current = false; }, 300);
    };

    setTimeout(correct, 450);
  }, []);

  return (
    <div className="toc">
      <div className="toc-sc">
        <div className="toc-i">
          {items.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`ta${active === item.id ? ' on' : ''}${item.bh ? ' bh' : ''}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <VersionToggle />
        </div>
      </div>
      <div className="toc-prog">
        <div className="toc-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
