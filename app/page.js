import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import OpenMenuButton from '@/components/OpenMenuButton';
import BrevoForm from '@/components/BrevoForm';
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

const guides = [
  { emoji: '\u{1F9FE}', title: 'Faccio il 730', desc: 'Detrazioni, documenti, scadenze e come massimizzare il rimborso. Con calcolatore.', tag: '\u{1F4C5} Scadenza settembre', href: '/730' },
  { emoji: '\u{1F4CB}', title: "Faccio l\u2019ISEE", desc: 'Dove farlo, documenti, nucleo familiare. Senza ISEE niente bonus.', tag: '\u2726 Guida base', href: '/isee' },
  { emoji: '\u{1FAAA}', title: 'Faccio lo SPID', desc: 'Serve per tutto. Come farlo gratis in 15 minuti, quale provider scegliere.', tag: '\u{1F680} 15 minuti', href: '/spid' },
];

const marqueeItems = [
  '730 PRECOMPILATO', 'CEDOLARE SECCA', 'NASPI', 'SPID IN 15 MINUTI',
  'IMU SECONDA CASA', 'PASSAPORTO', 'BONUS MOBILI', 'MUTUO PRIMA CASA',
  'BUSTA PAGA', 'ASSEGNO UNICO',
];

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />
      <ScrollReveal />
      <SchemaOrg schemas={[websiteSchema]} />

      {/* HERO */}
      <section className="h-hero">
        <div className="hero-eyebrow">Guide gratuite &middot; aggiornate al 2026</div>
        <h1>La burocrazia italiana, <span className="hero-hl">finalmente</span> semplice.</h1>
        <p className="hero-sub">Guide gratuite su 730, ISEE, mutui, bonus e molto altro. Scritte come te le spiegherebbe un amico &mdash; non un avvocato.</p>
        <div className="hero-ctas">
          <a href="#guide" className="btn-primary">Scegli la tua guida &darr;</a>
          <a href="#newsletter" className="btn-ghost">Newsletter gratis &rarr;</a>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="home-divider"></div>

      {/* FEATURES */}
      <div className="features-strip">
        <div className="feat">
          <div className="feat-emoji">{'\u23F1\uFE0F'}</div>
          <h3>Risparmi tempo</h3>
          <p>Guide dritte al punto. Niente burocratese, niente giri di parole. 10 minuti e sai tutto.</p>
        </div>
        <div className="feat">
          <div className="feat-emoji">{'\uD83C\uDFAF'}</div>
          <h3>Non sbagli niente</h3>
          <p>Errori comuni, scadenze, documenti esatti. Ti diciamo cosa fare e in che ordine.</p>
        </div>
        <div className="feat">
          <div className="feat-emoji">{'\uD83D\uDCB6'}</div>
          <h3>Recuperi soldi</h3>
          <p>Detrazioni, bonus, agevolazioni che non sapevi di avere. Con calcolatori inclusi.</p>
        </div>
      </div>

      <div className="scroll-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{i > 0 && i % 1 === 0 ? <><span className="dot">{'\u25CF'}</span>{item}</> : item}</span>
          ))}
        </div>
      </div>

      {/* GUIDE CARDS */}
      <section className="guides-section" id="guide">
        <div className="sec-eyebrow">Le pi&ugrave; cercate</div>
        <div className="sec-title">Cosa devi <em>fare?</em></div>
        <div className="sec-sub">Scegli la tua situazione. Tutto il resto &mdash; documenti, scadenze, costi, errori &mdash; te lo spieghiamo noi.</div>
        <div className="cards-grid">
          {guides.map((g, i) => (
            <Link key={i} href={g.href} className="guide-card">
              <span className="gc-emoji">{g.emoji}</span>
              <div className="gc-title">{g.title}</div>
              <div className="gc-desc">{g.desc}</div>
              <span className="gc-tag">{g.tag}</span>
              <div className="gc-arrow">Leggi la guida &rarr;</div>
            </Link>
          ))}
        </div>
        <div className="open-all">
          <OpenMenuButton />
        </div>
      </section>

      <div className="scroll-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>

      {/* DEMO CARDS — dentro le guide */}
      <section className="demo-section">
        <div className="sec-eyebrow">Dentro le guide</div>
        <div className="sec-title">Non solo testo.<br/>Numeri veri, <em>passi concreti.</em></div>
        <div className="sec-sub">Ogni guida ha calcolatori, confronti, checklist e procedure passo per passo.</div>
        <div className="demo-grid">
          {/* Card 1 — calcolo */}
          <div className="demo-card demo-c1">
            <div className="demo-text">
              <span className="demo-label">IL CALCOLO</span>
              <h3>Ti mostriamo quanto recuperi.</h3>
              <p>Numeri reali: le tue spese, il tuo reddito, il rimborso che ti arriva in busta paga a luglio.</p>
            </div>
            <div className="demo-visual">
              <div className="demo-flow">
                <div className="demo-flow-row"><span>Spese mediche</span><strong>1.810&euro;</strong></div>
                <div className="demo-flow-row"><span>&minus; Franchigia</span><strong>&minus;129&euro;</strong></div>
                <div className="demo-flow-row"><span>Detrazione 19%</span><strong>319&euro;</strong></div>
                <div className="demo-flow-total"><span>Rimborso &rarr;</span><span className="amount">+319&euro;</span></div>
              </div>
            </div>
          </div>

          {/* Card 2 — procedura */}
          <div className="demo-card demo-c2">
            <div className="demo-text">
              <span className="demo-label">LA PROCEDURA</span>
              <h3>Passo per passo, senza sorprese.</h3>
              <p>Cosa fare, in che ordine, e cosa portare. Come una checklist a occhi chiusi.</p>
            </div>
            <div className="demo-visual">
              <div className="step-flow">
                <div className="sf-item"><div className="sf-num">1</div><div className="sf-text">Scegli il provider</div></div>
                <div className="sf-arrow">&darr;</div>
                <div className="sf-item"><div className="sf-num">2</div><div className="sf-text">Registrati online</div></div>
                <div className="sf-arrow">&darr;</div>
                <div className="sf-item"><div className="sf-num">3</div><div className="sf-text">Verifica identit&agrave;</div></div>
                <div className="sf-arrow">&darr;</div>
                <div className="sf-done">Pronto! {'\u2713'}</div>
              </div>
            </div>
          </div>

          {/* Card 3 — checklist */}
          <div className="demo-card demo-c3">
            <div className="demo-text">
              <span className="demo-label">LA CHECKLIST</span>
              <h3>Documenti pronti, zero sorprese.</h3>
              <p>La lista esatta di cosa portare. Cos&igrave; non ti rimandano a casa.</p>
            </div>
            <div className="demo-visual">
              <div className="checklist">
                <div className="cl-item done"><span className="cl-check">{'\u2713'}</span> Carta d&apos;identit&agrave;</div>
                <div className="cl-item done"><span className="cl-check">{'\u2713'}</span> Codice fiscale</div>
                <div className="cl-item done"><span className="cl-check">{'\u2713'}</span> 2 fototessera ICAO</div>
                <div className="cl-item done"><span className="cl-check">{'\u2713'}</span> Marca da bollo 73,50&euro;</div>
                <div className="cl-item done"><span className="cl-check">{'\u2713'}</span> Ricevuta PagoPA</div>
                <div className="cl-item cl-miss"><span className="cl-check">{'\u25CB'}</span> Consenso genitore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-arrow-dark" style={{ background: 'var(--navy)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>

      <section className="how-section">
        <div className="how-inner">
          <div className="sec-eyebrow">Come funziona</div>
          <div className="sec-title">Tre passi.<br/>Nessun giro di <em>parole.</em></div>
          <div className="sec-sub">Non serve registrarsi. Non serve pagare. Non serve un commercialista.</div>
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

      <div className="scroll-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>

      {/* NEWSLETTER (DARK) */}
      <BrevoForm pageName="home" id="newsletter" />

      <Footer variant="home" />
    </>
  );
}
