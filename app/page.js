import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import HeroSearch from '@/components/redesign/HeroSearch';
import SchemaOrg from '@/components/SchemaOrg';
import { categoriesGuide, totalGuides } from '@/components/categoriesData';
import icons from '@/components/redesign/guideIcons';
import HomeAnimations from './HomeAnimations';

export const metadata = {
  title: 'ZeroBurocrazia \u2014 La burocrazia italiana, finalmente comprensibile.',
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
    email: 'info.zeroburocrazia@gmail.com',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zeroburocrazia.it/guide?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

/* V8 Category color mapping */
const catV8 = {
  fisco:     { pill: 'v8-pill-coral', ic: 'v8-ic-coral', stroke: '#E8724A' },
  casa:      { pill: 'v8-pill-green', ic: 'v8-ic-green', stroke: '#2D8A6E' },
  famiglia:  { pill: 'v8-pill-violet', ic: 'v8-ic-violet', stroke: '#8B6CC1' },
  documenti: { pill: 'v8-pill-blue', ic: 'v8-ic-blue', stroke: '#5B7EC5' },
  lavoro:    { pill: 'v8-pill-gold', ic: 'v8-ic-gold', stroke: '#C49A2A' },
  salute:    { pill: 'v8-pill-green', ic: 'v8-ic-green', stroke: '#2D8A6E' },
  auto:      { pill: 'v8-pill-blue', ic: 'v8-ic-blue', stroke: '#5B7EC5' },
  pensione:  { pill: 'v8-pill-violet', ic: 'v8-ic-violet', stroke: '#8B6CC1' },
};

/* Top guides by search volume */
const topGuides = [
  { href: '/730',            name: 'Come fare il 730',         desc: 'Detrazioni, precompilato, scadenze e rimborso in busta paga.',   cat: 'fisco',     catLabel: 'Fisco',     time: '12 min' },
  { href: '/spid',           name: 'Come fare lo SPID',        desc: 'Provider, costi 2026, riconoscimento gratis con CIE.',           cat: 'documenti', catLabel: 'Documenti', time: '8 min'  },
  { href: '/isee',           name: "Come fare l\u2019ISEE",    desc: 'Documenti, procedura al CAF, simulazione online.',                cat: 'fisco',     catLabel: 'Fisco',     time: '10 min' },
  { href: '/legge-104',      name: 'Legge 104',                desc: 'Permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali.', cat: 'salute',    catLabel: 'Salute',    time: '15 min' },
  { href: '/naspi',          name: 'NASpI: la disoccupazione', desc: 'Quanto spetta, calcolo, domanda INPS entro 68 giorni.',           cat: 'lavoro',    catLabel: 'Lavoro',    time: '10 min' },
  { href: '/bonus-bollette', name: 'Bonus bollette',           desc: "Luce, gas, TARI. Decreto 115\u20AC extra. Automatico con ISEE.",  cat: 'fisco',     catLabel: 'Fisco',     time: '8 min'  },
];

/* Hero quick tags */
const heroTags = [
  { label: '730', href: '/730' },
  { label: 'SPID', href: '/spid' },
  { label: 'ISEE', href: '/isee' },
  { label: 'NASpI', href: '/naspi' },
  { label: 'Legge 104', href: '/legge-104' },
  { label: 'Bollette', href: '/bonus-bollette' },
  { label: 'Mutuo', href: '/mutuo' },
  { label: 'Dimissioni', href: '/dimissioni' },
];

/* Arrow SVG reused in cards */
const ArrowSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="v8">
      <SchemaOrg schemas={[websiteSchema]} />
      <HomeAnimations />

      <NavV8 />

      {/* HERO */}
      <section className="v8-hero">
        <div className="v8-hero-badge rv">
          <span className="v8-hero-badge-dot" />
          {totalGuides} guide gratuite &mdash; aggiornate 2026
        </div>
        <h1 className="rv rv-d1">
          La burocrazia italiana,<br />finalmente <em>comprensibile</em>
        </h1>
        <p className="v8-hero-sub rv rv-d2">
          Traduciamo decreti e circolari in guide semplici. Gratis, aggiornate, senza paroloni. Come un amico che ci &egrave; gi&agrave; passato.
        </p>
        <HeroSearch tags={heroTags} />
      </section>

      {/* TOP GUIDES GRID */}
      <section className="v8-guides" id="guide">
        <div className="v8-guides-head">
          <h2 className="rv-left">Le guide pi&ugrave; <em>cercate</em></h2>
          <p className="v8-guides-sub rv-left rv-d1">Ogni guida &egrave; scritta per essere capita da chiunque. Zero gergo, solo risposte.</p>
        </div>
        <div className="v8-g-grid">
          {topGuides.map((g, i) => {
            const colors = catV8[g.cat] || catV8.fisco;
            const icon = icons[g.href];
            return (
              <Link key={g.href} href={g.href} className={`v8-g-card rv-scale rv-d${i + 1}`}>
                <div className="v8-g-card-top">
                  <div className={`v8-g-card-icon ${colors.ic}`} style={{ color: colors.stroke }}>
                    {icon || null}
                  </div>
                  <div className="v8-g-card-arrow"><ArrowSvg /></div>
                </div>
                <div className="v8-g-card-body">
                  <h3>{g.name}</h3>
                  <p>{g.desc}</p>
                </div>
                <div className="v8-g-card-foot">
                  <span className={`v8-g-pill ${colors.pill}`}>{g.catLabel}</span>
                  <span className="v8-g-pill v8-pill-muted">{g.time}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* COME FUNZIONA */}
      <div className="v8-how" id="come">
        <div className="v8-how-inner">
          <div className="v8-how-head">
            <h2 className="rv-left">Come <em>funziona</em></h2>
            <p className="rv rv-d1">Tre passi e hai risolto il problema. Sul serio.</p>
          </div>
          <div className="v8-how-grid">
            <div className="v8-how-card rv-tilt rv-d1">
              <div className="v8-how-num">1</div>
              <h3>Cerca il tuo problema</h3>
              <p>730, ISEE, SPID, bonus, dimissioni&hellip; qualsiasi pratica burocratica italiana.</p>
            </div>
            <div className="v8-how-card rv-tilt rv-d2">
              <div className="v8-how-num">2</div>
              <h3>Leggi la guida</h3>
              <p>Scritta in italiano vero. Passo per passo, con esempi concreti e link ufficiali.</p>
            </div>
            <div className="v8-how-card rv-tilt rv-d3">
              <div className="v8-how-num">3</div>
              <h3>Risolvi il problema</h3>
              <p>Calcolatori, checklist, link diretti. Fai tutto senza impazzire.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE PREVIEW */}
      <section className="v8-preview">
        <div className="v8-pv-left rv-left">
          <h2>L&apos;Assegno di <em>Inclusione,</em> in 2 minuti</h2>
          <p>Ha sostituito il Reddito di Cittadinanza. Sostegno mensile per famiglie con un componente disabile, minorenne o over 60. Fino a 500&euro;/mese pi&ugrave; 303&euro; di affitto.</p>
          <Link href="/assegno-inclusione">Leggi la guida completa &rarr;</Link>
        </div>
        <div className="v8-pv-right rv-right rv-d2">
          <div className="v8-pv-step">
            <div className="v8-pv-step-n">1</div>
            <div><h4>Fai l&apos;ISEE</h4><p>Sotto 10.140&euro;. Al CAF &egrave; gratis.</p></div>
          </div>
          <div className="v8-pv-step">
            <div className="v8-pv-step-n">2</div>
            <div><h4>Domanda all&apos;INPS</h4><p>Online con SPID o al CAF. Risposta in 30gg.</p></div>
          </div>
          <div className="v8-pv-step">
            <div className="v8-pv-step-n">3</div>
            <div><h4>Firma il PAD</h4><p>Su SIISL. Obbligatorio per il pagamento.</p></div>
          </div>
          <div className="v8-pv-step">
            <div className="v8-pv-step-n">4</div>
            <div><h4>Ricevi la Carta ADI</h4><p>Poste la spedisce. Importo entro il 27.</p></div>
          </div>
          <div className="v8-pv-result">
            <span>Ahmed, Napoli &mdash; moglie + figlio</span>
            <span>~803&euro;</span>
          </div>
        </div>
      </section>

      {/* TUTTE LE GUIDE PER CATEGORIA */}
      <section className="v8-cats" id="categorie">
        <div className="v8-cats-head">
          <h2 className="rv">Tutte le guide per <em>categoria</em></h2>
          <p className="rv rv-d1">{totalGuides} guide gratuite, organizzate per situazione di vita.</p>
        </div>

        {categoriesGuide.filter(cat => cat.guides.length > 0).map(cat => {
          const colors = catV8[cat.slug] || catV8.fisco;
          return (
            <div key={cat.slug} className="v8-cat-group rv">
              <div className="v8-cat-group-title" style={{ color: colors.stroke }}>
                {cat.title}
                <span className={`v8-g-pill ${colors.pill}`}>{cat.guides.length}</span>
              </div>
              <div className="v8-cat-guide-list">
                {cat.guides.map(g => (
                  <Link key={g.href} href={g.href} className="v8-cat-guide">
                    <div className={`v8-cat-guide-icon ${colors.ic}`} style={{ color: colors.stroke }}>
                      {icons[g.href] || null}
                    </div>
                    <div className="v8-cat-guide-info">
                      <div className="v8-cat-guide-name">{g.name}</div>
                      <div className="v8-cat-guide-desc">{g.desc}</div>
                    </div>
                    <svg className="v8-cat-guide-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="v8-cta">
        <div className="v8-cta-box rv-scale">
          <h2>{totalGuides} guide. Zero costi.<br /><em>Zero paroloni.</em></h2>
          <p>La burocrazia non deve essere un incubo. Trova la guida e risolvi il problema.</p>
          <a href="#guide" className="v8-cta-btn">Esplora tutte le guide</a>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
