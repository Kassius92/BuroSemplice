import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import './tg.css';

export const metadata = {
  title: 'Questa Settimana — Notizie su Bonus, Scadenze e Novità Burocratiche',
  description: 'Ogni settimana le notizie burocratiche che ti riguardano: scadenze, bonus, circolari INPS. Spiegate come te le spiegherebbe un amico.',
  alternates: { canonical: 'https://zeroburocrazia.it/tg' },
  openGraph: {
    title: 'Questa Settimana — Notizie Settimanali',
    description: 'Ogni settimana le notizie burocratiche che ti riguardano: scadenze, bonus, circolari. Spiegate come te le spiegherebbe un amico.',
    url: 'https://zeroburocrazia.it/tg',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/oghome.png', width: 1200, height: 630 }],
  },
};

const weeks = [
  {
    num: 10,
    range: '3 — 9 marzo 2026',
    latest: true,
    news: [
      { cat: 'fisco', catLabel: 'Fisco', day: 'Lun 3 mar', tag: 'scadenza', tagLabel: '\u23F0 Scadenza', title: '730 precompilato: online dal 30 aprile', body: "L'Agenzia delle Entrate conferma la data. Quest'anno novit\u00E0 sulle <strong>detrazioni figli a carico</strong> e un nuovo tetto per le spese scolastiche (da 800\u20AC a 1.000\u20AC). Se ti prepari adesso con i documenti, il 30 aprile \u00E8 questione di 10 minuti.", link: '/730', linkText: 'Guida al 730' },
      { cat: 'famiglia', catLabel: 'Famiglia', day: 'Mar 4 mar', tag: 'bonus', tagLabel: '\uD83D\uDCB0 Bonus', title: 'Assegno unico: importi aggiornati da marzo', body: "L'INPS ha pubblicato i nuovi importi. Con ISEE sotto 17.500\u20AC salgono a <strong>204,10\u20AC per figlio</strong>. Senza ISEE ricevi il minimo (57,20\u20AC). La differenza su un anno? Quasi 1.800\u20AC buttati. Basta fare l'ISEE.", link: '/isee', linkText: "Come fare l'ISEE" },
      { cat: 'lavoro', catLabel: 'Lavoro', day: 'Gio 6 mar', tag: 'novita', tagLabel: '\u2728 Novit\u00E0', title: 'NASpI: il modulo di domanda ora \u00E8 precompilato', body: "L'INPS ha semplificato la procedura. Il modulo ha gi\u00E0 i dati dell'ultimo datore di lavoro. Tu devi solo controllare e confermare. <strong>Il termine resta 68 giorni</strong> dal licenziamento \u2014 non \u00E8 cambiato.", link: '/naspi', linkText: 'Guida alla NASpI' },
      { cat: 'documenti', catLabel: 'Documenti', day: 'Ven 7 mar', title: 'SPID con Poste: il riconoscimento in ufficio ora \u00E8 gratis', body: "Poste Italiane ha eliminato il costo di 12\u20AC per il riconoscimento di persona. <strong>Lo SPID \u00E8 gratis al 100%</strong>, anche se vai in posta. Se lo rimandavi per i 12 euro, non hai pi\u00F9 scuse.", link: '/spid', linkText: 'Come fare lo SPID' },
    ],
  },
  {
    num: 9,
    range: '24 febbraio — 2 marzo 2026',
    news: [
      { cat: 'casa', catLabel: 'Casa', day: 'Lun 24 feb', tag: 'attenzione', tagLabel: '\u26A0\uFE0F Attenzione', title: 'Bonus ristrutturazione: confermato 50% per prima casa, 36% per le altre', body: "La circolare dell'Agenzia delle Entrate chiarisce: il bonus resta al <strong>50% con tetto 96.000\u20AC</strong> per la prima casa. Per seconde case scende al 36%. Dal 2028 scende al 30% per tutti.", link: '/ristrutturare', linkText: 'Guida ristrutturazione' },
      { cat: 'fisco', catLabel: 'Fisco', day: 'Mer 26 feb', title: "ISEE precompilato: l'INPS ha corretto un bug sul patrimonio mobiliare", body: "Alcune DSU precompilate mostravano un patrimonio mobiliare sbagliato (conti doppi). L'INPS ha risolto. Se hai fatto l'ISEE tra il 15 e il 24 febbraio, <strong>controlla il risultato</strong>.", link: '/isee', linkText: "Guida all'ISEE" },
      { cat: 'lavoro', catLabel: 'Lavoro', day: 'Ven 28 feb', tag: 'novita', tagLabel: '\u2728 Novit\u00E0', title: 'TFR: aggiornati i tassi di rivalutazione 2025', body: "Per chi ha il TFR in azienda, la rivalutazione 2025 \u00E8 stata del <strong>3,2%</strong>. Nel fondo pensione il rendimento medio \u00E8 stato del 5,1%. La differenza su 10 anni \u00E8 importante.", link: '/tfr', linkText: 'Guida al TFR' },
    ],
  },
  {
    num: 8,
    range: '17 — 23 febbraio 2026',
    news: [
      { cat: 'famiglia', catLabel: 'Famiglia', day: 'Lun 17 feb', tag: 'bonus', tagLabel: '\uD83D\uDCB0 Bonus', title: 'Bonus nido 2026: confermati i nuovi importi', body: "Il bonus nido resta fino a <strong>3.600\u20AC/anno</strong> per famiglie con ISEE sotto i 25.000\u20AC e almeno un altro figlio sotto i 10 anni. La domanda si fa su inps.it con SPID.", link: '/figlio', linkText: 'Guida "aspetto un figlio"' },
      { cat: 'fisco', catLabel: 'Fisco', day: 'Gio 20 feb', tag: 'scadenza', tagLabel: '\u23F0 Scadenza', title: 'CU 2026: il datore deve consegnarla entro il 17 marzo', body: "La Certificazione Unica con i redditi del 2025 deve arrivarti <strong>entro il 17 marzo</strong>. Se non la ricevi, sollecita l'ufficio paghe. Ti serve per il 730.", link: '/730', linkText: 'Guida al 730' },
    ],
  },
];

export default function TGPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Questa Settimana',
    description: 'Notizie settimanali sulla burocrazia italiana: scadenze, bonus, circolari. Spiegate come te le spiegherebbe un amico.',
    url: 'https://zeroburocrazia.it/tg',
    publisher: { '@type': 'Organization', name: 'ZeroBurocrazia', url: 'https://zeroburocrazia.it' },
  };

  return (
    <>
      <Nav variant="home" />
      <ScrollReveal />
      <SchemaOrg schemas={[schema]} />

      <section className="tg-hero">
        <div className="tg-hero-bg"></div>
        <div className="tg-hero-c">
          <div className="tg-label"><span className="tg-dot"></span> Ogni settimana</div>
          <h1><em>Questa</em> settimana</h1>
          <p>Ogni settimana raccogliamo le notizie burocratiche che ti riguardano: scadenze, bonus, circolari. Spiegate in italiano, non in burocratese.</p>
        </div>
      </section>

      <div className="tg-content">
        {weeks.map((w) => (
          <details key={w.num} className={`tg-week${w.latest ? ' tg-latest' : ''}`} open={w.latest || undefined}>
            <summary className="tg-week-header">
              <div className="tg-week-num">{w.num}</div>
              <div className="tg-week-info">
                <div className="tg-week-label">Settimana{w.latest && <span className="tg-badge-latest">Ultima edizione</span>}</div>
                <div className="tg-week-range">{w.range}</div>
                <div className="tg-week-count">{w.news.length} notizi{w.news.length === 1 ? 'a' : 'e'}</div>
              </div>
              <span className="tg-chevron">{'\u25BC'}</span>
            </summary>
            <div className="tg-week-body">
              {w.news.map((n, i) => (
                <div key={i} className={`tg-news tg-c-${n.cat}`}>
                  <div className="tg-news-meta">
                    <span className="tg-news-cat">{n.catLabel}</span>
                    {n.tag && <span className={`tg-news-tag tg-tag-${n.tag}`}>{n.tagLabel}</span>}
                    <span className="tg-news-day">{n.day}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: n.body }} />
                  {n.link && <a href={n.link} className="tg-news-link">{n.linkText} {'\u2192'}</a>}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <BrevoForm pageName="tg" />
      <Footer variant="home" />
    </>
  );
}
