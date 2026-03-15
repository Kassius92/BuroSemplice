'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categoriesGuide, tools } from './categoriesData';

const topGuides = [
  { emoji: '\u{1F9FE}', title: '730', desc: 'Dichiarazione redditi', tag: '\u{1F4C5} Scade sett.', href: '/730' },
  { emoji: '\u{1F4CB}', title: 'ISEE', desc: 'Calcolo e rinnovo', tag: '\u2726 Base', href: '/isee' },
  { emoji: '\u{1FAAA}', title: 'SPID', desc: 'Identit\u00e0 digitale', tag: '\u{1F680} 15 min', href: '/spid' },
];

export default function HomeApp() {
  const [nlEmail, setNlEmail] = useState('');

  return (
    <div className="app-home">

      {/* APP HEADER */}
      <div className="app-header">
        <Link href="/" className="app-logo-row">
          <img src="/logo-z.webp" alt="ZeroBurocrazia" className="app-logo-img" width="36" height="36" />
          <div className="app-logo-text">
            Zero<span>Burocrazia</span>
            <small>Ci pensiamo noi</small>
          </div>
        </Link>
        <Link href="/novita" className="app-bell" aria-label="Novit\u00e0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          <span className="app-bell-dot" />
        </Link>
      </div>

      {/* SEARCH BAR */}
      <Link href="/guide" className="app-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Cosa devi fare? Cerca qui...</span>
      </Link>

      {/* QUICK ACTIONS — top 2 tools */}
      <div className="app-quick">
        {tools.slice(0, 2).map((t, i) => (
          <Link key={i} href={t.href} className="app-quick-card" style={{ '--qc': t.color }}>
            <span className="aq-emoji">{t.emoji}</span>
            <div className="aq-title">{t.title}</div>
            <div className="aq-desc">{t.desc}</div>
          </Link>
        ))}
      </div>

      {/* CATEGORIES — horizontal scroll */}
      <div className="app-cats-label">Esplora per categoria</div>
      <div className="app-cats-scroll">
        {categoriesGuide.map((cat, i) => (
          <Link
            key={i}
            href={cat.guides.length > 0 ? `/guide?cat=${cat.slug}` : '#'}
            className={`app-cat-item${cat.guides.length === 0 ? ' app-cat-disabled' : ''}`}
          >
            <div className="app-cat-circle" style={{ background: cat.bg, borderColor: cat.color + '33' }}>
              <span>{cat.emoji}</span>
              {cat.guides.length > 0 && (
                <span className="app-cat-badge" style={{ background: cat.color }}>{cat.guides.length}</span>
              )}
            </div>
            <span className="app-cat-name">{cat.title}</span>
          </Link>
        ))}
      </div>

      {/* TOP GUIDES */}
      <div className="app-guides-header">
        <span className="app-guides-label">Le pi&ugrave; cercate</span>
        <Link href="/guide" className="app-guides-all">Vedi tutte &rarr;</Link>
      </div>
      <div className="app-guides-list">
        {topGuides.map((g, i) => (
          <Link key={i} href={g.href} className="app-guide-row">
            <div className="agr-icon">{g.emoji}</div>
            <div className="agr-info">
              <div className="agr-title">{g.title}</div>
              <div className="agr-desc">{g.desc}</div>
            </div>
            <span className="agr-tag">{g.tag}</span>
          </Link>
        ))}
      </div>

      {/* NEWSLETTER CTA */}
      <div className="app-nl-card">
        <div className="app-nl-title">{'\u{1F4EC}'} Non perderti le scadenze</div>
        <div className="app-nl-sub">Iscriviti gratis: ti avvisiamo prima di ogni scadenza fiscale.</div>
        <div className="app-nl-form">
          <input
            type="email"
            placeholder="La tua email..."
            value={nlEmail}
            onChange={e => setNlEmail(e.target.value)}
          />
          <button type="button">Iscriviti</button>
        </div>
      </div>

    </div>
  );
}
