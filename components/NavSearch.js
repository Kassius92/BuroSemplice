'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { allGuides } from './categoriesData';

export default function NavSearch() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const results = q.length > 1
    ? allGuides.filter(g =>
        g.name.toLowerCase().includes(q.toLowerCase()) ||
        g.cat.toLowerCase().includes(q.toLowerCase()) ||
        g.desc.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="nav-search-wrap" ref={ref}>
      <div className={`nav-search-box${open && q.length > 1 ? ' active' : ''}`}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text"
          placeholder="Cerca una guida..."
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
        {q && (
          <button className="nav-search-clear" onClick={() => { setQ(''); setOpen(false); }} aria-label="Cancella ricerca">
            &times;
          </button>
        )}
      </div>
      {open && q.length > 1 && (
        <div className="nav-search-dropdown">
          {results.length > 0 ? results.map((g, i) => (
            <Link
              key={i}
              href={g.href}
              className="nav-search-result"
              onClick={() => { setQ(''); setOpen(false); }}
            >
              <span className="nsr-emoji">{g.emoji}</span>
              <div className="nsr-info">
                <div className="nsr-name">{g.name}</div>
                <div className="nsr-cat">{g.cat}</div>
              </div>
              <span className="nsr-arrow">&rarr;</span>
            </Link>
          )) : (
            <div className="nav-search-empty">
              Nessun risultato per &ldquo;{q}&rdquo;
            </div>
          )}
          {results.length > 0 && (
            <Link href="/guide" className="nav-search-all" onClick={() => { setQ(''); setOpen(false); }}>
              Vedi tutte le guide &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
