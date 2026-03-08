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
              <Link href="/" className="logo"><div className="logo-mark">Z</div><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">La burocrazia, finalmente zero</small></div></Link>
              <div className="nav-links">
                <Link href="/novita" className="nav-novita">
                  Novità<span className="nav-dot" />
                </Link>
                <a href="#come-funziona">Come funziona</a>
                <a href="#perche-gratis" className="nav-cta">Inizia gratis</a>
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
              <Link href="/" className="logo"><div className="logo-mark">Z</div><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">La burocrazia, finalmente zero</small></div></Link>
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
              <Link href="/" className="logo"><div className="logo-mark">Z</div><div className="logo-text">Zero<span>Burocrazia</span><small className="logo-sub">La burocrazia, finalmente zero</small></div></Link>
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
