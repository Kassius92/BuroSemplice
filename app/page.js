import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import { categoriesGuide, totalGuides } from '@/components/categoriesData';
import './home.css';

export const metadata = {
  title: 'ZeroBurocrazia \u2014 La burocrazia italiana, finalmente semplice.',
  description: 'Guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico. Aggiornate al 2026.',
  alternates: { canonical: 'https://zeroburocrazia.it' },
  openGraph: { url: 'https://zeroburocrazia.it', images: [{ url: '/oghome.png', width: 1200, height: 630 }] },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZeroBurocrazia',
  url: 'https://zeroburocrazia.it',
  description: 'Guide gratuite sulla burocrazia italiana: 730, ISEE, SPID, NASpI, mutui, P.IVA e molto altro.',
  inLanguage: 'it-IT',
  publisher: {
    '@type': 'Organization',
    name: 'ZeroBurocrazia',
    url: 'https://zeroburocrazia.it',
    email: 'info@zeroburocrazia.it',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zeroburocrazia.it/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg schemas={[websiteSchema]} />
      <ScrollReveal />

      <Nav variant="home" />

      {/* HERO */}
      <section className="h-hero">
        <div className="hero-row">
          <div className="hero-left">
            <div className="hero-eyebrow">Guide gratuite &middot; aggiornate al 2026</div>
            <h1>La burocrazia italiana, <span className="hero-hl">finalmente</span> semplice.</h1>
            <p className="hero-sub">Guide gratuite su 730, ISEE, mutui, bonus e molto altro. Scritte come te le spiegherebbe un amico &mdash; non un avvocato.</p>
            <div className="hero-ctas">
              <a href="#categorie" className="btn-primary">Scegli la tua guida &darr;</a>
              <Link href="/guide" className="btn-ghost">Tutte le guide &rarr;</Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hstat"><div className="hn">{totalGuides}</div><div className="hl">guide complete<br/>e ne arrivano altre</div></div>
            <div className="hstat"><div className="hn">6</div><div className="hl">calcolatori<br/>con numeri reali</div></div>
            <div className="hstat"><div className="hn">0&euro;</div><div className="hl">costo<br/>sempre gratis</div></div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="home-divider"></div>

      {/* CATEGORIES GRID */}
      <section className="cat-section" id="categorie">
        <div className="sec-eyebrow">Esplora per categoria</div>
        <div className="sec-title">Cosa devi <em>fare?</em></div>
        <div className="sec-sub">Scegli la tua situazione. Documenti, scadenze, costi e passi &mdash; te li spieghiamo noi.</div>
        <div className="cat-grid">
          {categoriesGuide.map((cat, i) => {
            const hasGuides = cat.guides.length > 0;
            const inner = (
              <div className={`cat-card${!hasGuides ? ' cat-card-soon' : ''}`} style={{ '--cat-c': cat.color, '--cat-bg': cat.bg }}>
                <div className="cat-card-top">
                  <span className="cat-emoji">{cat.emoji}</span>
                  {hasGuides ? (
                    <span className="cat-badge" style={{ background: cat.bg, color: cat.color }}>{cat.guides.length} guide</span>
                  ) : (
                    <span className="cat-badge cat-badge-soon">Prossimamente</span>
                  )}
                </div>
                <div className="cat-card-title">{cat.title}</div>
                {hasGuides && (
                  <div className="cat-card-preview">
                    {cat.guides.slice(0, 3).map(g => g.name).join(' \u00B7 ')}
                    {cat.guides.length > 3 ? ` +${cat.guides.length - 3}` : ''}
                  </div>
                )}
              </div>
            );
            return hasGuides ? (
              <Link key={i} href={`/guide?cat=${cat.slug}`} className="cat-card-link">{inner}</Link>
            ) : (
              <div key={i} className="cat-card-link cat-card-link-disabled">{inner}</div>
            );
          })}
        </div>
        <div className="open-all">
          <Link href="/guide" className="open-all-btn">Vedi tutte le {totalGuides} guide &rarr;</Link>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="how-section">
        <div className="how-inner">
          <div className="sec-eyebrow" style={{ textAlign: 'center' }}>Come funziona</div>
          <div className="sec-title" style={{ textAlign: 'center' }}>Tre passi.<br/>Nessun giro di <em>parole.</em></div>
          <div className="sec-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>Non serve registrarsi. Non serve pagare. Non serve un commercialista.</div>
          <div className="how-steps">
            <div className="how-step">
              <div className="hs-num">1</div>
              <div className="hs-title">Scegli la situazione</div>
              <div className="hs-desc">Mi sposo, compro casa, faccio il 730&hellip; Tocca quello che ti riguarda.</div>
            </div>
            <div className="how-step">
              <div className="hs-num">2</div>
              <div className="hs-title">Leggi la guida</div>
              <div className="hs-desc">Costi reali, documenti, errori da evitare, scadenze, calcolatori. Tutto incluso.</div>
            </div>
            <div className="how-step">
              <div className="hs-num">3</div>
              <div className="hs-title">Agisci</div>
              <div className="hs-desc">Sai cosa fare, in che ordine, e quanto costa. La burocrazia diventa una checklist.</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community-section">
        <div className="sec-eyebrow">Unisciti a noi</div>
        <div className="sec-title">Hai una domanda?<br/><em>Chiedi al gruppo.</em></div>
        <div className="sec-sub">Migliaia di persone come te che si aiutano su ISEE, 730, bonus, INPS e pratiche. Gratis, zero giudizi.</div>
        <div className="community-cards">
          <a href="https://www.facebook.com/groups/www.zeroburocrazia.it" target="_blank" rel="noopener noreferrer" className="community-card">
            <div className="cc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 10.86c0 2.75 1.36 5.21 3.5 6.82V22l3.77-2.07c1.05.29 2.17.45 3.33.45h.4c5.52 0 10-4.02 10-8.86h-.4C22.4 6.02 17.52 2 12 2zm1.09 11.93l-2.54-2.72L5.18 14l5.89-6.25 2.6 2.72L18.93 8l-5.84 5.93z"/></svg>
            </div>
            <div className="cc-text">
              <div className="cc-title">Entra nel gruppo Facebook</div>
              <div className="cc-desc">Fai domande e ricevi risposte gratis dalla community.</div>
            </div>
            <span className="cc-arrow">&rarr;</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61584999492615" target="_blank" rel="noopener noreferrer" className="community-card">
            <div className="cc-icon cc-icon-page">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/></svg>
            </div>
            <div className="cc-text">
              <div className="cc-title">Segui la pagina</div>
              <div className="cc-desc">Aggiornamenti su scadenze, bonus e nuove guide.</div>
            </div>
            <span className="cc-arrow">&rarr;</span>
          </a>
        </div>
      </section>

      <Footer variant="home" />
    </>
  );
}
