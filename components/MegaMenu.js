'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { categories } from './megaMenuData';

export default function MegaMenu({ isOpen, onClose, variant = 'scheda' }) {
  const [search, setSearch] = useState('');
  const [openSubs, setOpenSubs] = useState({});
  const menuRef = useRef(null);
  const navHeight = variant === 'home' ? 68 : 62;

  useEffect(() => {
    if (!isOpen) { setSearch(''); setOpenSubs({}); }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const toggleSub = (key) => {
    setOpenSubs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const q = search.toLowerCase().trim();
  const filtered = categories.map(cat => ({
    ...cat,
    subs: cat.subs.map(sub => ({
      ...sub,
      links: sub.links.filter(l => !q || l.name.toLowerCase().includes(q)),
    })).filter(sub => sub.links.length > 0),
  })).filter(cat => cat.subs.length > 0);

  const isSearching = q.length > 0;

  return (
    <>
      <div className={`mega-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`mega-menu${isOpen ? ' open' : ''}`} ref={menuRef} style={{ top: navHeight, maxHeight: `calc(100vh - ${navHeight}px)` }}>
        <div className="mega-inner">
          <div className="mega-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="text"
              placeholder="Cerca tra tutte le guide…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mega-grid">
            {filtered.map((cat, ci) => (
              <div key={ci}>
                <div className="mega-cat">
                  <span className="mega-cat-emoji">{cat.emoji}</span>
                  {cat.title}
                </div>
                {cat.subs.map((sub, si) => {
                  const key = `${ci}-${si}`;
                  const isSubOpen = isSearching || openSubs[key];
                  return (
                    <div key={si} className={`mega-sub${isSubOpen ? ' open' : ''}`}>
                      <div className="mega-sub-title" onClick={() => toggleSub(key)}>
                        {sub.title}
                      </div>
                      <div className="mega-sub-links" style={isSubOpen ? { maxHeight: '400px', paddingBottom: '8px' } : {}}>
                        {sub.links.map((link, li) => (
                          link.soon ? (
                            <span key={li} className="mega-link soon">
                              {link.name} <span className="mtag">Presto</span>
                            </span>
                          ) : (
                            <Link key={li} href={link.href} className="mega-link" onClick={onClose}>
                              {link.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mega-foot">
            <div className="mega-foot-left">
              <strong>11</strong> guide pronte · 40+ in arrivo
            </div>
            <div className="mega-foot-right">
              <Link href="/contatti" className="mega-btn mega-btn-primary" onClick={onClose}>Suggerisci una guida</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
