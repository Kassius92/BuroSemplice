import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { tools, calculators } from '@/components/categoriesData';
import './strumenti.css';

export const metadata = {
  title: 'Strumenti gratuiti \u2014 ZeroBurocrazia',
  description: 'Calcolatori, checklist e tracker interattivi per gestire le tue pratiche burocratiche. Gratis.',
  alternates: { canonical: 'https://zeroburocrazia.it/strumenti' },
};

export default function StrumentiPage() {
  return (
    <>
      <Nav variant="home" />
      <section className="str-page">
        <h1 className="str-title">Strumenti</h1>
        <p className="str-sub">Calcolatori e tool interattivi per le tue pratiche</p>

        {/* Main tools */}
        <div className="str-grid">
          {tools.map((t, i) => (
            <Link key={i} href={t.href} className="str-card" style={{ '--str-c': t.color }}>
              <span className="str-emoji">{t.emoji}</span>
              <div className="str-name">{t.title}</div>
              <div className="str-desc">{t.desc}</div>
              <span className="str-cta">Apri strumento &rarr;</span>
            </Link>
          ))}
        </div>

        {/* Calculators inside guides */}
        <h2 className="str-h2">Calcolatori nelle guide</h2>
        <p className="str-sub2">Ogni guida ha il suo calcolatore integrato con numeri reali.</p>
        <div className="calc-grid">
          {calculators.map((c, i) => (
            <Link key={i} href={c.href} className="calc-card">
              <span className="calc-emoji">{c.emoji}</span>
              <div className="calc-info">
                <div className="calc-name">{c.title}</div>
                <div className="calc-guide">Dentro la guida {c.guide}</div>
              </div>
              <svg className="calc-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
