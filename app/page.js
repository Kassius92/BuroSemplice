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
        <div className="hero-badge">100% gratuito per iniziare</div>
        <h1>La burocrazia italiana, <em>finalmente</em> semplice.</h1>
        <p>Scegli la tua situazione, leggi la guida completa, scopri quanto ti costa e cosa ti spetta. Senza giri di parole.</p>
        <div className="hero-cta-group">
          <a href="#situazioni" className="btn-primary">Esplora le guide</a>
          <a href="#come-funziona" className="btn-secondary">Come funziona?</a>
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
              <p>Tutto quello che devi sapere: costi, documenti, bonus, errori da evitare. Gratis al 100%.</p>
            </div>
            <div className="step r">
              <div className="step-number">3</div>
              <h3>Trova chi ti aiuta</h3>
              <p>Se ti serve un professionista, te lo troviamo nella tua zona. Commercialisti, CAF, broker — già informati sulla tua pratica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="preview" id="esempio">
        <div className="container">
          <div className="preview-container">
            <div className="preview-content r">
              <div className="section-label">Come ti aiutiamo</div>
              <h2 className="section-title">Dalla guida al <em>professionista</em> giusto</h2>
              <p className="section-subtitle">La guida gratuita ti spiega tutto. Quando ti serve un professionista, te lo troviamo nella tua zona — già informato sulla tua pratica.</p>
              <Link href="/730" className="btn-primary" style={{ display: 'inline-block', marginTop: 8 }}>Prova con il 730</Link>
            </div>
            <div className="preview-card r">
              <div className="preview-card-header">
                <span>Come funziona</span>
                <h3>Leggi → Chiedi → Ricevi aiuto</h3>
              </div>
              <div className="preview-card-body">
                <div className="preview-item"><div className="preview-icon green">📖</div><div className="preview-item-text"><h4>Leggi la guida completa</h4><p>Capisci cosa ti serve, quanto costa, quali documenti preparare.</p></div></div>
                <div className="preview-item"><div className="preview-icon orange">📍</div><div className="preview-item-text"><h4>Inserisci il tuo CAP</h4><p>Quando vuoi un professionista, basta il CAP e un contatto.</p></div></div>
                <div className="preview-item"><div className="preview-icon brown">👤</div><div className="preview-item-text"><h4>Ti ricontattiamo entro 24h</h4><p>Un professionista della tua zona, verificato, ti contatta direttamente.</p></div></div>
                <div className="preview-item"><div className="preview-icon green">✅</div><div className="preview-item-text"><h4>Zero costi per te</h4><p>Il servizio è completamente gratuito per il cittadino. Sempre.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="perche-gratis">
        <div className="container">
          <div className="pricing-header r">
            <div className="section-label">Perché è gratis</div>
            <h2 className="section-title">Per te, è tutto gratis. Davvero.</h2>
            <p className="section-subtitle">Le guide sono gratuite. Il collegamento con il professionista è gratuito. Nessun costo nascosto, mai.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card r">
              <div className="pricing-label">Le guide</div>
              <div className="pricing-price">0€</div>
              <p className="pricing-desc">Tutto quello che devi sapere, per sempre.</p>
              <ul className="pricing-features">
                <li>Tutte le guide complete</li>
                <li>Costi, documenti, bonus</li>
                <li>Errori da evitare</li>
                <li>Aggiornate ogni anno</li>
              </ul>
              <a href="#situazioni" className="btn-secondary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Leggi gratis</a>
            </div>
            <div className="pricing-card featured r">
              <div className="pricing-label">Professionista</div>
              <div className="pricing-price">0€</div>
              <p className="pricing-desc">Trova chi ti aiuta nella tua zona.</p>
              <ul className="pricing-features">
                <li>Professionisti verificati</li>
                <li>Filtrati per la tua zona</li>
                <li>Ti contattano entro 24h</li>
                <li>Nessun obbligo</li>
                <li>Gratis per sempre</li>
              </ul>
              <a href="#situazioni" className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Inizia dalla guida</a>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/professionisti" style={{ color: 'var(--text-3)', fontSize: '14px', textDecoration: 'underline' }}>Sei un professionista? Scopri come ricevere clienti →</Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>La burocrazia non dovrebbe essere<br />un lavoro a tempo pieno.</h2>
        <p>Inizia gratis. Nessuna registrazione, nessun vincolo.</p>
        <a href="#situazioni" className="btn-light">Esplora le guide</a>
      </section>

      <Footer variant="home" />
    </>
  );
}
