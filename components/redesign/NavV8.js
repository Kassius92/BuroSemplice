'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MegaMenu from '@/components/MegaMenu';

/**
 * NavV8 \u2014 navigazione V8 per homepage e pagine redesign
 * Logo ZB + link centrali + CTA + hamburger MegaMenu
 */
export default function NavV8() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.body.classList.toggle('mega-open', menuOpen);
    return () => { document.body.style.overflow = ''; document.body.classList.remove('mega-open'); };
  }, [menuOpen]);

  return (
    <>
      <nav className={`v8-nav${scrolled ? ' v8-nav-s' : ''}`}>
        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="hamburger-lines"><span /><span /><span /></div>
        </button>

        {/* Logo */}
        <Link href="/" className="v8-nav-logo">
          <img src="/logo-z.webp" alt="ZeroBurocrazia" className="v8-nav-logo-img" width="32" height="32" />
          ZeroBurocrazia
        </Link>

        {/* Center links (desktop) */}
        <div className="v8-nav-links">
          <Link href="/guide">Guide</Link>
          <Link href="/novita">Novit\u00e0</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
        </div>

        {/* CTA (desktop) */}
        <Link href="/guide" className="v8-nav-cta">Cerca una guida</Link>
      </nav>

      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} variant="home" />
    </>
  );
}
