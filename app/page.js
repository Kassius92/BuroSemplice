import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import OpenMenuButton from '@/components/OpenMenuButton';
import './home.css';

export const metadata = {
  title: 'ZeroBurocrazia — La burocrazia italiana, finalmente zero',
  description: 'ZeroBurocrazia semplifica la burocrazia italiana: guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico.',
  alternates: { canonical: 'https://zeroburocrazia.it' },
  openGraph: { url: 'https://zeroburocrazia.it', images: [{ url: '/oghome.png', width: 1200, height: 630 }] },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZeroBurocrazia',
  url: 'https://zeroburocrazia.it',
  description: 'ZeroBurocrazia semplifica la burocrazia italiana: guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico.',
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
  { emoji: '\u{1F9FE}', title: 'Faccio il 730', desc: 'Come funziona, quando farlo, quali detrazioni puoi avere, e come massimizzare il rimborso.', tag: 'Scadenza: settembre 2026', href: '/730' },
  { emoji: '\u{1F4CB}', title: "Faccio l'ISEE", desc: 'A cosa serve, dove farlo, documenti necessari. Se devi chiedere un bonus, parti da qui.', tag: 'Guida base', href: '/isee' },
  { emoji: '\u{1FAAA}', title: 'Faccio lo SPID', desc: 'Serve per tutto: INPS, Agenzia Entrate, bonus. Come farlo gratis in 15 minuti.', tag: 'Primo passo', href: '/spid' },
];

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />
      <ScrollReveal />
      <SchemaOrg schemas={[websiteSchema]} />

      <section className="h-hero">
        <div className="hero-badge">100% gratuito</div>
        <h1>La burocrazia italiana, <em>finalmente</em> semplice.</h1>
        <p>Guide gratuite e complete su 730, ISEE, SPID, bonus, mutui e molto altro. Scritte come te le spiegherebbe un amico.</p>
        <div className="hero-cta-group">
          <a href="#situazioni" className="btn-primary">Scegli la tua guida</a>
        </div>
      </section>

      <div className="social-proof">
        <p>Guide verificate &middot; Aggiornate al 2026 &middot; Scritte in italiano vero</p>
      </div>

      <section className="situations" id="situazioni">
        <div className="container">
          <div className="situations-header r">
            <div className="section-label">Le guide</div>
            <h2 className="section-title">Cosa sta succedendo nella tua vita?</h2>
            <p className="section-subtitle">Tocca la tua situazione e leggi la guida completa. Gratuita, senza registrazione.</p>
          </div>
          <div className="situations-grid">
            {guides.map((g, i) => (
              <Link key={i} href={g.href} className="situation-card r">
                <span className="card-emoji">{g.emoji}</span>
                <div className="card-title">{g.title}</div>
                <div className="card-desc">{g.desc}</div>
                <span className="card-tag">{g.tag}</span>
              </Link>
            ))}
          </div>
          <OpenMenuButton />
        </div>
      </section>

      <section className="how-it-works" id="come-funziona">
        <div className="container">
          <div className="how-header r" style={{ textAlign: 'center' }}>
            <div className="section-label">Come funziona</div>
            <h2 className="section-title">Tre passi. Nessun giro di parole.</h2>
          </div>
          <div className="steps">
            <div className="step r">
              <div className="step-number">1</div>
              <h3>Scegli la situazione</h3>
              <p>Mi sposo, compro casa, faccio il 730... Tocca quello che ti riguarda.</p>
            </div>
            <div className="step r">
              <div className="step-number">2</div>
              <h3>Leggi la guida gratis</h3>
              <p>Tutto quello che devi sapere: costi reali, documenti, bonus, errori da evitare, scadenze. 100% gratuito, nessuna registrazione.</p>
            </div>
            <div className="step r">
              <div className="step-number">3</div>
              <h3>Resta aggiornato</h3>
              <p>Scadenze, bonus, novità — ti avvisiamo noi quando cambia qualcosa che ti riguarda. Iscriviti alla newsletter, è gratis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="perche-gratis">
        <div className="container">
          <div className="pricing-header r">
            <div className="section-label">Perché è gratis</div>
            <h2 className="section-title">Nessun trucco. È gratis davvero.</h2>
            <p className="section-subtitle">ZeroBurocrazia nasce per rendere la burocrazia accessibile a tutti. Le guide sono gratuite, complete e senza registrazione. Ci sosteniamo con link di affiliazione verso servizi utili — non costa nulla in più a te e ci permette di restare gratuiti.</p>
          </div>
        </div>
      </section>

      <section className="tg-preview">
        <div className="container">
          <div className="tg-preview-header r">
            <div className="section-label">Questa settimana</div>
            <h2 className="section-title">Le notizie che ti riguardano</h2>
            <p className="section-subtitle">Ogni settimana le notizie che ti riguardano: scadenze, bonus, circolari. Spiegate semplice.</p>
          </div>
          <div className="tg-preview-grid">
            <a href="/tg" className="tg-prev-card r">
              <span className="tg-prev-cat tg-prev-fisco">Fisco</span>
              <span className="tg-prev-tag tg-prev-tag-scadenza">{'\u23F0'} Scadenza</span>
              <div className="tg-prev-title">730 precompilato: online dal 30 aprile</div>
              <div className="tg-prev-body">Novit&agrave; sulle detrazioni figli a carico e nuovo tetto spese scolastiche.</div>
            </a>
            <a href="/tg" className="tg-prev-card r">
              <span className="tg-prev-cat tg-prev-famiglia">Famiglia</span>
              <span className="tg-prev-tag tg-prev-tag-bonus">{'\uD83D\uDCB0'} Bonus</span>
              <div className="tg-prev-title">Assegno unico: importi aggiornati da marzo</div>
              <div className="tg-prev-body">Con ISEE sotto 17.500&euro; salgono a 204,10&euro; per figlio.</div>
            </a>
            <a href="/tg" className="tg-prev-card r">
              <span className="tg-prev-cat tg-prev-lavoro">Lavoro</span>
              <span className="tg-prev-tag tg-prev-tag-novita">{'\u2728'} Novit&agrave;</span>
              <div className="tg-prev-title">NASpI: il modulo di domanda ora &egrave; precompilato</div>
              <div className="tg-prev-body">L&apos;INPS ha semplificato la procedura. Il termine resta 68 giorni.</div>
            </a>
          </div>
          <div className="tg-preview-cta">
            <a href="/tg" className="btn-tg">Tutte le notizie {'\u2192'}</a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>La burocrazia non dovrebbe essere<br />un lavoro a tempo pieno.</h2>
        <p>Inizia dalla guida che ti serve. Nessuna registrazione, nessun vincolo.</p>
        <a href="#situazioni" className="btn-light">Scegli la tua guida</a>
      </section>

      <Footer variant="home" />
    </>
  );
}
