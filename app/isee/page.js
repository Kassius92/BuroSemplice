import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizIsee from '@/components/QuizIsee';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
  description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
  keywords: ["ISEE", "ISEE 2026", "come fare ISEE", "ISEE online", "DSU", "documenti ISEE", "ISEE precompilato", "calcolo ISEE", "CAF ISEE gratis", "ISEE corrente"],
  alternates: { canonical: 'https://zeroburocrazia.it/isee' },
  openGraph: {
    title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
    description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
    url: 'https://zeroburocrazia.it/isee',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-isee.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    images: ['https://zeroburocrazia.it/og-isee.png'],
    title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
    description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'serve', label: 'A cosa serve' },
  { id: 'come-si-fa', label: 'Come si fa' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto dura l'ISEE?", a: "<strong>Dal giorno in cui lo fai fino al 31 dicembre dello stesso anno.</strong> Quindi se lo fai a gennaio vale 12 mesi, se lo fai a ottobre vale solo 3. Per questo conviene farlo il prima possibile. Dal 1\u00B0 gennaio serve un ISEE nuovo." },
  { q: "Vivo con i miei genitori, il mio ISEE include i loro redditi?", a: "<strong>S\u00EC, se risulti nel loro stato di famiglia.</strong> Il nucleo familiare ISEE coincide con chi \u00E8 nello stato di famiglia anagrafico. Per avere un ISEE indipendente devi cambiare residenza e avere un tuo stato di famiglia. Attenzione: per l\u2019universit\u00E0 i genitori contano anche se non convivi con loro, a meno che tu non sia economicamente indipendente da almeno 2 anni." },
  { q: "Sono separato/divorziato, come funziona il nucleo?", a: "Se sei <strong>legalmente separato o divorziato</strong> e hai residenza diversa dal tuo ex, siete in due nuclei separati. I figli vanno nel nucleo del genitore con cui vivono. Se invece siete separati di fatto ma sullo stesso stato di famiglia, risultate nello stesso nucleo ISEE." },
  { q: "Ho risparmi che non uso, mi alzano l'ISEE?", a: "<strong>S\u00EC.</strong> L\u2019ISEE conta anche il patrimonio mobiliare \u2014 cio\u00E8 i soldi che hai in banca, nei fondi, negli investimenti. C\u2019\u00E8 una franchigia (circa 6.000\u20AC + 2.000\u20AC per ogni figlio) sotto cui non conta, ma sopra quella soglia ogni euro in pi\u00F9 alza l\u2019ISEE." },
  { q: "Posso fare l'ISEE da solo senza CAF?", a: "<strong>S\u00EC, dal sito dell\u2019INPS.</strong> La DSU precompilata ha gi\u00E0 quasi tutti i dati dentro. Tu devi solo controllare, aggiungere quello che manca, e confermare. Serve lo SPID. Se la tua situazione \u00E8 semplice (stipendio fisso, un conto, nessun immobile), ci metti 15 minuti." },
  { q: "Ho sbagliato qualcosa nell'ISEE, posso correggerlo?", a: "<strong>S\u00EC.</strong> Puoi presentare una nuova DSU quando vuoi \u2014 la nuova sostituisce la vecchia. Attenzione: se hai gi\u00E0 ricevuto bonus sulla base di un ISEE sbagliato, potresti dover restituire i soldi in eccesso." },
  { q: "Cos'\u00E8 l'ISEE corrente?", a: "\u00C8 un ISEE aggiornato alla tua situazione di oggi. Serve se il tuo reddito \u00E8 calato almeno del 25% o il patrimonio \u00E8 sceso del 20% rispetto a quello dichiarato (es. hai perso il lavoro). Si fa come l\u2019ISEE normale ma va rinnovato ogni 6 mesi." },
  { q: "ISEE e 730 sono la stessa cosa?", a: "<strong>No.</strong> Il 730 \u00E8 la dichiarazione dei redditi \u2014 serve a pagare le tasse e a recuperare soldi (detrazioni). L\u2019ISEE \u00E8 la fotografia della situazione economica della famiglia \u2014 serve a chiedere bonus e agevolazioni. Sono indipendenti. Puoi fare l\u2019ISEE senza aver fatto il 730. Per\u00F2 i redditi del 730 sono tra i dati che l\u2019ISEE usa per il calcolo." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: "Guida completa all'ISEE 2026: come farlo e a cosa serve",
      description: "Come fare l'ISEE nel 2026: documenti necessari, dove farlo, quanto vale e a cosa serve. Guida gratuita e aggiornata.",
      url: '/isee',
      image: 'og-isee.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-09',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90"  stroke="#E36414" strokeWidth=".8"/>
          <line x1="10"  y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10"  x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60"  y1="60"  x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <line x1="300" y1="60"  x2="60"  y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Faccio l&apos;<em>ISEE</em></h1>
            <p className="hero-sub">Cos&apos;&egrave;, a cosa serve, come si fa, quali documenti servono. Se devi chiedere un bonus o un&apos;agevolazione, parti da qui.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 10 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCC5'} Validit&agrave;: 1 gen — 31 dic 2026</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · Agenzia delle Entrate · Ministero del Lavoro e delle Politiche Sociali</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0€</div><div className="hl">online con SPID<br/>o gratis al CAF</div></div>
            <div className="hstat"><div className="hn">15&apos;</div><div className="hl">con la precompilata<br/>INPS online</div></div>
            <div className="hstat"><div className="hn">31/12</div><div className="hl">scadenza annuale<br/>vale tutto l&apos;anno</div></div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* CONTENT */}
      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/assegno-unico" className="ps">👶 Assegno unico</a>
              <span className="ps ps-soon">🏫 Bonus nido <span className="ps-tag">Presto</span></span>
              <span className="ps ps-soon">⚡ Bonus bollette <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 ISEE online</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Info ISEE</a>
              <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="ps">💳 Bonus e social card</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">1 numero</div><div className="sl">misura la ricchezza del nucleo familiare</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">0€</div><div className="sl">online o al CAF, gratis</div></div>
                <div className="sc    r d3"><div className="si">{'\u23F1'}</div><div className="sn">15–20&apos;</div><div className="sl">con la precompilata INPS</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">31/12</div><div className="sl">scade il 31 dicembre di ogni anno</div></div>
                <div className="sc tc r d2"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">ti serve per farlo online</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83C\uDFAF'}</div><div className="sn">Bonus</div><div className="sl">senza ISEE perdi agevolazioni</div></div>
              </div>
            </div>
            <QuizIsee />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;ISEE (spiegato semplice)</h2>

            <p>Immagina che lo Stato voglia sapere quanto &egrave; &quot;ricca&quot; la tua famiglia, per decidere se aiutarti o no. Non guarda solo lo stipendio — guarda <strong>tutto</strong>: quanto guadagnate, quanto avete in banca, se avete una casa di propriet&agrave;. Mette insieme tutti questi numeri, fa un calcolo, e tira fuori <strong>un solo numero in euro</strong>. Quello &egrave; il tuo ISEE.</p>

            <p>Funziona come un punteggio: pi&ugrave; &egrave; basso, pi&ugrave; bonus puoi ottenere. Con un ISEE di 15.000€ hai diritto a quasi tutto. Con 45.000€ ti escludono dalla maggior parte delle agevolazioni. &Egrave; la &quot;chiave&quot; che apre (o chiude) le porte dei bonus.</p>

            <p>Per ottenere il tuo ISEE devi compilare un modulo chiamato <Tip t="È il modulo dove metti i dati della famiglia: redditi, conti, immobili. Lo compili tu o lo fa il CAF per te. L'INPS lo usa per calcolare il tuo ISEE.">DSU</Tip> (Dichiarazione Sostitutiva Unica). Lo mandi all&apos;INPS, che fa il calcolo e ti restituisce un documento chiamato <Tip t="Il foglio ufficiale con il tuo numero ISEE. Ti serve per chiedere qualsiasi bonus o agevolazione. Lo trovi nella tua area INPS.">attestazione ISEE</Tip>. L&apos;ISEE vale <strong>dal giorno in cui lo fai fino al 31 dicembre</strong> dello stesso anno — poi ne serve uno nuovo.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>DSU</strong> — Dichiarazione Sostitutiva Unica. Il modulo dove inserisci tutti i dati della famiglia. Lo compili online sul sito INPS o lo fa il CAF per te.</div>
              <div className="gl-item r d2"><strong>Nucleo familiare</strong> — Le persone che risultano nel tuo <Tip t="Un documento del Comune che elenca chi abita con te alla stessa residenza. Lo scarichi online con SPID.">stato di famiglia</Tip> anagrafico. Di solito: tu, il tuo partner (se convivete), i figli. L&apos;ISEE si calcola su tutti loro, non solo su di te.</div>
              <div className="gl-item r d3"><strong>Patrimonio mobiliare</strong> — Tutto quello che hai &quot;in forma liquida&quot;: soldi sul conto corrente, risparmi, investimenti, azioni, fondi, buoni postali, crypto. Anche la PostePay Evolution conta.</div>
              <div className="gl-item r d4"><strong>Giacenza media</strong> — La media dei soldi che hai avuto sul conto durante l&apos;anno. La banca te la d&agrave; insieme al saldo. Per l&apos;ISEE serve il pi&ugrave; alto tra saldo e giacenza media.</div>
              <div className="gl-item r d1"><strong>Patrimonio immobiliare</strong> — Case, terreni, garage di propriet&agrave;. Il valore si calcola dalla <Tip t="Un numero che il catasto assegna a ogni immobile. Serve a calcolare quanto vale ai fini fiscali. La trovi sulla visura catastale (scaricabile gratis con SPID).">rendita catastale</Tip>, non dal prezzo di mercato.</div>
              <div className="gl-item r d2"><strong>ISEE corrente</strong> — Una versione aggiornata dell&apos;ISEE per chi ha avuto un cambiamento importante (perso il lavoro, calo di reddito). Vale 6 mesi.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} ISEE e 730: non sono la stessa cosa</div>
              <p>Il <strong>730</strong> serve a pagare le tasse e recuperare detrazioni (soldi indietro). L&apos;<strong>ISEE</strong> serve a chiedere bonus e agevolazioni. Sono due cose diverse. Puoi fare l&apos;ISEE anche se non hai fatto il 730. Per&ograve; i redditi che dichiari nel 730 sono tra i dati che l&apos;ISEE usa per il calcolo.</p>
            </div>
            <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Detrazioni, rimborso, come massimizzare.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* A COSA SERVE */}
          <div className="sec r" id="serve">
            <div className="sec-tag">Utilizzo</div>
            <h2>A cosa serve (in concreto)</h2>
            <p>In Italia, quasi tutti i bonus e le agevolazioni pubbliche richiedono l&apos;ISEE. &Egrave; il biglietto d&apos;ingresso. Se non ce l&apos;hai, non puoi nemmeno fare domanda — anche se quei soldi ti spetterebbero.</p>
            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">{'\uD83D\uDC76'}</div><div className="uc-n">Assegno unico figli</div><div className="uc-d">Da 58€ a 204€ al mese per figlio. Senza ISEE ricevi il minimo.</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83C\uDFEB'}</div><div className="uc-n">Rette universitarie</div><div className="uc-d">Esonero totale sotto i 22.000€. Riduzioni fino a 30.000€.</div></div>
              <div className="uc r d3"><div className="uc-e">{'\uD83C\uDF7D\uFE0F'}</div><div className="uc-n">Mensa scolastica</div><div className="uc-d">Il costo cambia in base all&apos;ISEE. Si va da 0€ a tariffa piena.</div></div>
              <div className="uc r d4"><div className="uc-e">{'\uD83C\uDFE0'}</div><div className="uc-n">Bonus affitto</div><div className="uc-d">Contributi comunali per l&apos;affitto. Servono ISEE basso + requisiti del tuo Comune.</div></div>
              <div className="uc r d1"><div className="uc-e">{'\uD83D\uDC8A'}</div><div className="uc-n">Ticket sanitari</div><div className="uc-d">Esenzione dal ticket per visite ed esami con reddito basso.</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83E\uDDD2'}</div><div className="uc-n">Bonus nido</div><div className="uc-d">Fino a 3.600€/anno per l&apos;asilo nido. L&apos;importo dipende dall&apos;ISEE.</div></div>
            </div>
            <p>E poi: bonus trasporti (60€), bonus psicologo (fino a 1.500€), <Tip t="Una carta prepagata da 460€ per famiglie con ISEE sotto 15.000€. Serve per spese alimentari, carburante e trasporti.">social card</Tip> (460€), case popolari, agevolazioni TARI, bonus bollette luce e gas.</p>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Senza ISEE stai regalando soldi — ecco quanto</div>
              <p>Hai un figlio e non hai fatto l&apos;ISEE? Ricevi l&apos;assegno unico al minimo: <strong>58€ al mese</strong>. Ma se il tuo ISEE &egrave; sotto i 17.500€, ti spettano <strong>204€ al mese</strong>. Differenza: <strong>1.752€ all&apos;anno buttati via</strong>. Per un modulo che si compila in 15 minuti. E questo &egrave; solo l&apos;assegno unico — senza contare nido, mensa, bollette, universit&agrave;.</p>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come-si-fa">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa l&apos;ISEE</h2>
            <p>Hai 3 strade. Due sono completamente gratuite.</p>

            <h3>{'\uD83D\uDFE2'} Passo zero: hai lo SPID?</h3>
            <p>Per fare l&apos;ISEE online ti serve lo <Tip t="L'identità digitale che ti permette di accedere a tutti i servizi della Pubblica Amministrazione online: INPS, Agenzia delle Entrate, Comune, ecc.">SPID</Tip>. Se non ce l&apos;hai, fallo prima — ci vogliono 15 minuti e non costa niente. Senza SPID puoi comunque andare al CAF, ma online non entri.</p>
            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Come farlo gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>

            <h3>Opzione 1: Online da solo (la pi&ugrave; veloce)</h3>
            <p>Dal 2024 l&apos;INPS ti mette a disposizione la <Tip t="Un modulo già compilato dall'INPS con i tuoi dati (redditi, conti, immobili). Tu devi solo controllare che sia tutto giusto e premere 'conferma'.">DSU precompilata</Tip> — un modulo che ha gi&agrave; dentro quasi tutto: redditi, conti, immobili. Tu controlli, aggiungi quello che manca e confermi. Fine.</p>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Vai su inps.it e accedi con SPID</strong><p>Cerca &quot;ISEE precompilato&quot; nella barra di ricerca. Se ti perdi, c&apos;&egrave; anche un link diretto: <em>servizi.inps.it → ISEE precompilato</em>.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Controlla i dati che l&apos;INPS ha gi&agrave; inserito</strong><p>Troverai i tuoi redditi, i conti correnti e gli immobili gi&agrave; compilati. L&apos;INPS prende questi dati dalle banche e dall&apos;Agenzia delle Entrate. Verifica che siano giusti. Se manca qualcosa (tipo un conto all&apos;estero, una carta prepagata con IBAN, o un immobile non censito), aggiungilo tu.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Completa i dati del <Tip t="Le persone nel tuo stato di famiglia + il coniuge anche se vive altrove. I dati di tutti vanno inseriti.">nucleo familiare</Tip></strong><p>Il nucleo &egrave; chi risulta nel tuo stato di famiglia, pi&ugrave; il coniuge (anche se non convivente). Per ognuno servono i dati economici. Se vivi da solo, &egrave; velocissimo. Se vivi con i genitori, servono anche i loro.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Conferma e aspetta il risultato</strong><p>L&apos;INPS calcola il tuo ISEE in pochi giorni (spesso in poche ore). L&apos;<Tip t="Il documento ufficiale con il tuo numero ISEE. Lo scarichi dall'area riservata INPS. È quello che ti chiedono quando fai domanda per un bonus.">attestazione</Tip> compare nella tua area riservata su inps.it — la scarichi in PDF.</p></div></div>
            </div>

            <h3>Opzione 2: Al CAF (gratis, lo fanno loro)</h3>
            <p>Vai a un <Tip t="Centro di Assistenza Fiscale. Un ufficio dove ti aiutano gratis con ISEE, 730 e altre pratiche fiscali. Li trovi ovunque: CGIL, CISL, UIL, ACLI, MCL ne hanno uno.">CAF</Tip> con i documenti (lista pi&ugrave; sotto). Compilano tutto loro e mandano la DSU all&apos;INPS. <strong>&Egrave; gratis al 100%</strong> — i CAF vengono pagati dallo Stato per questo servizio. Unico problema: nei primi mesi dell&apos;anno c&apos;&egrave; la fila, quindi prenota con anticipo (meglio a gennaio).</p>

            <h3>Opzione 3: Dal commercialista (a pagamento)</h3>
            <p>Il commercialista pu&ograve; farlo, ma <strong>ti chiede 30–80€</strong> per qualcosa che al CAF &egrave; gratis. Ha senso solo se la tua situazione &egrave; molto complicata: immobili in pi&ugrave; regioni, conti all&apos;estero, trust, separazione in corso con figli.</p>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio onesto</div>
              <p><strong>Sai usare il computer e hai lo SPID?</strong> → Fallo online. 15 minuti, zero euro, niente code.<br/><strong>Preferisci che qualcuno ti aiuti?</strong> → Vai al CAF. Gratis, mezz&apos;ora, e fanno tutto loro. Prenota a gennaio.<br/><strong>Situazione complicata?</strong> (conti esteri, separazione, eredit&agrave; recenti) → Commercialista. Paghi, ma eviti errori costosi.</p>
            </div>

            <div className="tw r">
              <table>
                <thead><tr><th>Metodo</th><th>Costo</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Online (precompilata INPS)</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">Gratis</td><td>15–20 min compilazione. Attestazione in 1–3 giorni lavorativi.</td></tr>
                  <tr><td><strong>CAF / Patronato</strong></td><td className="cfr">Gratis</td><td>30 min di appuntamento. Attestazione in 3–10 giorni. Attesa appuntamento: da 1 giorno a 3 settimane.</td></tr>
                  <tr><td><strong>Commercialista</strong></td><td className="cv">30–80€</td><td>15 min tu, il resto lo fa lui. Attestazione in 3–7 giorni.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Quando conviene farlo</div>
              <p>L&apos;ISEE vale tutto l&apos;anno, quindi fallo <strong>il prima possibile</strong> — idealmente a gennaio o febbraio. Molti bonus hanno fondi limitati e scadenze: chi arriva prima prende di pi&ugrave;. Al CAF le code sono pi&ugrave; corte a inizio anno.</p>
            </div>
          </div>

          {/* BLOCCO AFFILIAZIONE */}


          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>
            <p>Questi servono per <strong>tutti i componenti del nucleo familiare</strong> — non solo per te. Se vivi con i genitori, servono anche i loro dati. Se fai la precompilata online, la maggior parte &egrave; gi&agrave; inserita dall&apos;INPS — ma meglio averli sotto mano per controllare.</p>

            <h3>Documenti di identit&agrave;</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; e codice fiscale</strong><span className="note">Di ogni componente del nucleo familiare</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'}</div><div className="clb"><strong>Stato di famiglia</strong><span className="note">Lo scarichi online con lo SPID dal sito del tuo Comune in 2 minuti</span></div></li>
            </ul>

            <h3>Redditi (anno 2024)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDDFE'}</div><div className="clb"><strong>Ultima dichiarazione dei redditi (730 o Modello Redditi)</strong><span className="note">Quella fatta nel 2025 sui redditi 2024. Se non l&apos;hai fatta, bastano le CU.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong><Tip t="Il documento che il datore di lavoro ti dà ogni anno con il riepilogo di quanto hai guadagnato e quante tasse ti ha trattenuto.">CU</Tip> 2025 (Certificazione Unica)</strong><span className="note">Te la d&agrave; il datore di lavoro entro marzo. Se hai la pensione, te la d&agrave; l&apos;INPS.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Redditi esenti (se ne hai)</strong><span className="note">Borse di studio, assegni di mantenimento, pensioni di invalidit&agrave;, indennit&agrave; di accompagnamento</span></div></li>
            </ul>

            <h3>Patrimonio (saldo al 31 dicembre 2024)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>Saldo e <Tip t="La media dei soldi che hai avuto sul conto durante tutto l'anno. Non è il saldo di fine anno: è la media giornaliera. La trovi nell'home banking o la chiedi alla banca.">giacenza media</Tip> di tutti i conti</strong><span className="note">Servono sia il saldo al 31/12/2024 sia la giacenza media annua. Li trovi nell&apos;home banking o li chiedi in banca.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Carte prepagate con IBAN</strong><span className="note">PostePay Evolution, Hype, Revolut, N26 — tutte quelle con IBAN contano come conti correnti e vanno dichiarate</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCCA'}</div><div className="clb"><strong>Titoli, azioni, obbligazioni, fondi</strong><span className="note">Valore al 31/12/2024. Se hai un deposito titoli, la banca ti d&agrave; il documento.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Valore immobili (<Tip t="Un valore che il catasto assegna a ogni immobile. Non è il prezzo di mercato: è molto più basso. Si usa per calcolare tasse e ISEE. La trovi sulla visura catastale.">rendita catastale</Tip>)</strong><span className="note">La trovi nella visura catastale, scaricabile gratis dal sito dell&apos;Agenzia delle Entrate con SPID</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFD7'}</div><div className="clb"><strong>Mutuo residuo</strong><span className="note">Se hai un mutuo, il debito che resta al 31/12/2024 abbassa il patrimonio immobiliare (e quindi l&apos;ISEE)</span></div></li>
            </ul>

            <h3>Veicoli</h3>
            <ul className="cl">
              <li className="cli r"><div className="ci">{'\uD83D\uDE97'}</div><div className="clb"><strong>Targa di auto e moto</strong><span className="note">Di tutti i veicoli intestati ai componenti del nucleo</span></div></li>
            </ul>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che fanno tutti (e come evitarli)</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Dimenticare un conto corrente</div><p>Hai una PostePay Evolution che usi poco? Un conto Revolut aperto per curiosit&agrave;? <strong>Va dichiarato.</strong> L&apos;INPS incrocia i dati con le banche. Se scopre un conto che hai &quot;dimenticato&quot;, annulla l&apos;ISEE e perdi tutte le agevolazioni retroattivamente. Non ne vale la pena.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Sbagliare il nucleo familiare</div><p>Il nucleo ISEE non &egrave; sempre chi vive con te fisicamente. Esempio: sei separato di fatto ma non legalmente? Il tuo ex &egrave; ancora nel tuo nucleo. Convivi con il tuo partner senza essere sposati? Siete nello stesso nucleo se avete la stessa residenza. Questi errori cambiano tutto il calcolo — se hai dubbi, chiedi al CAF.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Mettere solo il saldo e non la giacenza media</div><p>La banca ti d&agrave; due numeri: il <strong>saldo al 31/12</strong> e la <strong><Tip t="La media giornaliera dei soldi che hai avuto sul conto durante l'anno. Se a luglio avevi 20.000€ e a dicembre 500€, la giacenza media sarà circa 10.000€.">giacenza media</Tip></strong>. Nell&apos;ISEE va il pi&ugrave; alto dei due. Se a dicembre avevi 500€ ma la giacenza media era 8.000€, nell&apos;ISEE entra 8.000€. Molti mettono solo il saldo e poi si stupiscono del risultato.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Non fare l&apos;ISEE corrente quando serve</div><p>Hai perso il lavoro? Il tuo reddito &egrave; calato di almeno il 25%? Puoi fare l&apos;<strong>ISEE corrente</strong> che fotografa la tua situazione di adesso, non di due anni fa. Se non lo fai, il tuo ISEE resta alto e perdi agevolazioni che ti spetterebbero. Costa zero e si fa come l&apos;ISEE normale.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Laura recupera 4.500€</h2>

            <p><strong>Laura ha 32 anni</strong>, vive a Padova con il compagno Marco e il loro figlio Tommaso di 4 anni. Laura lavora part-time come segretaria (1.200€ al mese), Marco &egrave; magazziniere (1.500€ al mese). Hanno un conto in banca con 8.000€ di risparmi e vivono in affitto.</p>

            <p>Tommaso va all&apos;asilo nido comunale — <strong>380€ al mese</strong>. Laura riceve l&apos;assegno unico per Tommaso, ma siccome non ha mai fatto l&apos;ISEE, prende il minimo: <strong>58€ al mese</strong>. Alla mensa dell&apos;asilo paga la tariffa piena: <strong>7€ al giorno</strong>.</p>

            <p>Un&apos;amica le dice: <em>&quot;Ma hai fatto l&apos;ISEE? Io con l&apos;ISEE pago la met&agrave; del nido.&quot;</em></p>

            <h3>Laura fa l&apos;ISEE</h3>
            <p>Va sul sito dell&apos;INPS con lo SPID (che gi&agrave; aveva per il Fascicolo Sanitario). Apre la DSU precompilata. I redditi suoi e di Marco sono gi&agrave; dentro. I conti anche. Controlla, conferma. <strong>Tempo totale: 20 minuti.</strong></p>

            <p>Dopo 2 giorni, l&apos;attestazione compare nell&apos;area riservata. Il risultato: <strong>ISEE 16.800€</strong>.</p>

            <h3>Cosa cambia</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Assegno unico</span><span className="db-old">58€/mese</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">189€/mese</span></div>
              <div className="db-row"><span className="db-label">Bonus nido</span><span className="db-old">0€/anno</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">2.500€/anno</span></div>
              <div className="db-row"><span className="db-label">Mensa</span><span className="db-old">7€/giorno</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">3€/giorno</span></div>
              <div className="db-row db-total"><span className="db-label">Risparmio annuo</span><span className="db-val">+4.572€</span></div>
            </div>

            <p>Laura non ci credeva. <strong>4.572€ in pi&ugrave; all&apos;anno</strong> — soldi che le spettavano da sempre ma che non ha mai chiesto perch&eacute; non aveva un pezzo di carta. E quell&apos;anno prima senza ISEE? Perso. Non si recupera.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>L&apos;ISEE &egrave; gratis, si fa in 20 minuti, e vale migliaia di euro. Se non lo fai, non &egrave; che non hai diritto ai bonus — &egrave; che lo Stato non sa che ne hai diritto. Nessuno ti avvisa. Devi farlo tu.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/figlio" className="rc"><span className="rc-e">👶</span><div className="rc-t">Aspetto un figlio</div><div className="rc-d">Assegno unico, bonus nido: servono l'ISEE.</div><span className="rc-ar">→</span></a>
              <a href="/spid" className="rc"><span className="rc-e">🔐</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Per fare l'ISEE online ti serve lo SPID.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">I redditi del 730 sono tra i dati dell'ISEE.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">ISEE online</div><div className="sbtool-d">Compila l’ISEE online</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Info ISEE</div><div className="sbtool-d">Info ufficiali e requisiti</div></div></a>
            <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">💳</span><div><div className="sbtool-n">Bonus e social card</div><div className="sbtool-d">Bonus e social card con ISEE</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/assegno-unico" className="sbguide">👶 Assegno unico<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">🏫 Bonus nido<span className="sbg-soon">Presto</span></span>
            <span className="sbguide sbguide-soon">⚡ Bonus bollette<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="isee" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
