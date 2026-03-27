'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { allGuides } from '@/components/categoriesData';

/**
 * HeroSearch \u2014 search box + tag pills nella hero V8
 * @param {Array<{label: string, href: string}>} [props.tags] - Tag rapidi
 */
export default function HeroSearch({ tags = [] }) {
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
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <div className="v8-hero-search rv rv-d3" ref={ref}>
        <svg className="v8-hero-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Cosa devi fare? (es. SPID, 730, bonus bollette\u2026)"
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
        />
        {q && (
          <button className="v8-hero-search-clear" onClick={() => { setQ(''); setOpen(false); }} aria-label="Cancella">
            &times;
          </button>
        )}
        {open && q.length > 1 && (
          <div className="v8-hero-dropdown">
            {results.length > 0 ? results.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                className="v8-hero-result"
                onClick={() => { setQ(''); setOpen(false); }}
              >
                <div className="v8-hero-result-info">
                  <div className="v8-hero-result-name">{g.name}</div>
                  <div className="v8-hero-result-cat">{g.cat}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </Link>
            )) : (
              <div className="v8-hero-empty">
                Nessun risultato per &ldquo;{q}&rdquo;
              </div>
            )}
            {results.length > 0 && (
              <Link href="/guide" className="v8-hero-all" onClick={() => { setQ(''); setOpen(false); }}>
                Vedi tutte le guide &rarr;
              </Link>
            )}
          </div>
        )}
      </div>

      {tags.length > 0 && (
        <div className="v8-hero-tags rv rv-d4">
          {tags.map((t, i) => (
            <Link key={i} href={t.href} className="v8-hero-tag">{t.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
