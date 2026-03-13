'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

export default function Nav({ variant = 'scheda' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('mega-open', menuOpen);
    return () => { document.body.style.overflow = ''; document.body.classList.remove('mega-open'); };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? ' s' : ''}${(variant === 'home' || variant === 'novita') ? ' nav-home' : ''}`}>
        <div className="nav-i">

          {variant === 'home' && (
            <>
              {/* Homepage: hamburger LEFT, logo, then nav links RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <div className="nav-links">
                <div className="nav-fb-group">
                  <a href="https://www.facebook.com/groups/www.zeroburocrazia.it" target="_blank" rel="noopener noreferrer" className="nav-fb-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 10.86c0 2.75 1.36 5.21 3.5 6.82V22l3.77-2.07c1.05.29 2.17.45 3.33.45h.4c5.52 0 10-4.02 10-8.86h-.4C22.4 6.02 17.52 2 12 2zm1.09 11.93l-2.54-2.72L5.18 14l5.89-6.25 2.6 2.72L18.93 8l-5.84 5.93z"/></svg>
                    Gruppo FB
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61584999492615" target="_blank" rel="noopener noreferrer" className="nav-fb-btn nav-fb-page">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"/></svg>
                    Seguici
                  </a>
                </div>
                <Link href="/novita" className="nav-novita">
                  Novità<span className="nav-dot" />
                </Link>
                <button className="nav-cta" onClick={() => setMenuOpen(!menuOpen)}>Tutte le guide</button>
              </div>
            </>
          )}

          {variant === 'scheda' && (
            <>
              {/* Scheda: hamburger LEFT, logo, "Tutte le guide" RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <Link href="/" className="back" style={{ marginLeft: 'auto' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                Tutte le guide
              </Link>
            </>
          )}

          {variant === 'novita' && (
            <>
              {/* Novita: hamburger LEFT, logo, then Home/Chi siamo/Contatti RIGHT */}
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="hamburger-lines">
                  <span /><span /><span />
                </div>
              </button>
              <Link href="/" className="logo"><img src="/logo-z.webp" alt="ZeroBurocrazia" className="logo-mark" width="36" height="36" /><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">Burocrazia? Ci pensiamo noi.</small></div></Link>
              <div className="nav-links nav-links-novita">
                <Link href="/">Home</Link>
                <Link href="/chi-siamo">Chi siamo</Link>
                <Link href="/contatti">Contatti</Link>
              </div>
            </>
          )}

        </div>
      </nav>
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} variant={variant} />
    </>
  );
}
