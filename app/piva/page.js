import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizPiva from '@/components/QuizPiva';
import CalcPiva from '@/components/CalcPiva';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Aprire Partita IVA nel 2026: Costi, Tasse, Forfettario e Procedura',
  description: 'Come aprire partita IVA nel 2026: regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. Guida gratuita.',
  alternates: { canonical: 'https://zeroburocrazia.it/piva' },
  openGraph: {
    title: 'Aprire Partita IVA nel 2026: Costi, Tasse, Forfettario e Procedura',
    description: 'Come aprire partita IVA nel 2026: regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. Guida gratuita.',
    url: 'https://zeroburocrazia.it/piva',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-piva.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/og-piva.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'Sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'quanto-paghi', label: 'Quanto paghi' },
  { id: 'forfettario', label: 'Forfettario' },
  { id: 'come-aprire', label: 'Come aprire' },
  { id: 'ateco', label: 'Codice ATECO' },
  { id: 'contributi', label: 'Contributi' },
  { id: 'costi', label: 'Costi' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori' },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  { q: "Posso avere partita IVA e lavoro dipendente?", a: "S\u00EC, puoi. A patto che il tuo reddito da dipendente non superi 35.000\u20AC annui (per restare nel forfettario). Non devi chiedere il permesso al datore di lavoro (salvo clausole contrattuali), ma non puoi fatturare pi\u00F9 del 50% allo stesso datore." },
  { q: "Quanto costa aprire la partita IVA?", a: "<strong>L\u2019apertura \u00E8 gratuita</strong> se fai tutto da solo tramite il sito dell\u2019Agenzia delle Entrate. Con un commercialista online costa circa 50-150\u20AC (spesso incluso nell\u2019abbonamento annuale). Se sei artigiano/commerciante, c\u2019\u00E8 il diritto annuale CCIAA di circa 50-100\u20AC." },
  { q: "Devo per forza avere un commercialista?", a: "No, non \u00E8 obbligatorio. In regime forfettario la contabilit\u00E0 \u00E8 molto semplice. Per\u00F2 un commercialista (anche online, 200-500\u20AC/anno) ti evita errori che costano di pi\u00F9: codice ATECO sbagliato, scadenze mancate, contributi calcolati male. <strong>Per chi inizia, \u00E8 un investimento che si ripaga.</strong>" },
  { q: "Cosa succede se supero gli 85.000\u20AC?", a: "Se resti tra 85.000\u20AC e 100.000\u20AC, esci dal forfettario <strong>dall\u2019anno successivo</strong>. Se superi i 100.000\u20AC, esci <strong>immediatamente</strong> e da quel momento devi applicare l\u2019IVA sulle fatture. Per rientrare nel forfettario dovrai aspettare due anni sotto soglia." },
  { q: "Posso scaricare le spese in forfettario?", a: "No, nel forfettario non scarichi spese reali. Il tuo reddito \u00E8 calcolato in modo forfettario (ricavi \u00D7 coefficiente di redditivit\u00E0). <strong>L\u2019unica deduzione possibile</strong> sono i contributi previdenziali versati. Se hai molte spese, valuta se l\u2019ordinario conviene di pi\u00F9." },
  { q: "Devo aprire un conto corrente business?", a: "Non \u00E8 obbligatorio per legge. Puoi usare il conto personale. Ma \u00E8 <strong>fortemente consigliato</strong> avere un conto separato: facilita la gestione, evita confusione con le spese personali e ti aiuta a mettere da parte il 30% per le tasse." },
  { q: "Posso chiudere la partita IVA quando voglio?", a: "S\u00EC, la chiusura \u00E8 gratuita e si fa con lo stesso modello dell\u2019apertura (AA9/12). Devi comunicarla entro 30 giorni dalla cessazione dell\u2019attivit\u00E0. Restano da pagare saldo tasse e contributi sull\u2019ultimo anno." },
  { q: "Ho meno di 35 anni: ci sono bonus?", a: "Il bonus principale \u00E8 l\u2019aliquota al 5% per i primi 5 anni (per tutti, non solo under 35). In pi\u00F9, se sei artigiano/commerciante e ti iscrivi per la prima volta alla Camera di Commercio, puoi chiedere la <strong>riduzione del 50% dei contributi INPS</strong> per i primi 36 mesi." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come aprire Partita IVA nel 2026: guida completa e gratuita', description: metadata.description, url: '/piva', image: 'og-piva.png', datePublished: '2026-03-04', dateModified: '2026-03-05' }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Apro <em>partita IVA</em></h1>
            <p className="hero-sub">Forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO. Tutto quello che devi sapere prima di metterti in proprio, senza paroloni.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ Gratuita</span>
              <span className="pill pill-b">💰 0€ apertura</span>
              <span className="pill pill-s">⏱ 20 min di lettura</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · INPS Circolare 14/2026 · Legge di Bilancio 2026</div>
            <PrintButton />
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0€</div><div className="hl">costo apertura<br/>all&apos;Agenzia Entrate</div></div>
            <div className="hstat"><div className="hn">5%</div><div className="hl">tasse primi 5 anni<br/>con il forfettario</div></div>
            <div className="hstat"><div className="hn">85k€</div><div className="hl">limite fatturato<br/>regime forfettario</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/spid" className="ps done">✓ SPID</a><span className="pa">›</span>
              <a href="/isee" className="ps done">✓ ISEE</a><span className="pa">›</span>
              <a href="/730" className="ps done">✓ 730</a><span className="pa">›</span>
              <a href="/piva" className="ps active">💼 Partita IVA</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💰</div><div className="sn">0€</div><div className="sl">costo apertura P.IVA</div></div>
                <div className="sc sg r d2"><div className="si">📊</div><div className="sn">5%</div><div className="sl">tasse nuove attivit&agrave;<br/>(primi 5 anni)</div></div>
                <div className="sc    r d3"><div className="si">📈</div><div className="sn">85k€</div><div className="sl">tetto ricavi<br/>regime forfettario</div></div>
                <div className="sc    r d1"><div className="si">⏱</div><div className="sn">1–2h</div><div className="sl">tempo apertura<br/>(con commercialista)</div></div>
                <div className="sc bl r d2"><div className="si">🔐</div><div className="sn">SPID</div><div className="sl">necessario per<br/>aprire online</div></div>
                <div className="sc    r d3"><div className="si">📋</div><div className="sn">15%</div><div className="sl">tasse dal 6° anno<br/>in poi</div></div>
              </div>
            </div>
            <QuizPiva />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la partita IVA</h2>
            <p>La partita IVA &egrave; un numero di 11 cifre che identifica la tua attivit&agrave; economica. &Egrave; obbligatoria per chiunque svolga un&apos;attivit&agrave; lavorativa autonoma in modo continuativo — che tu sia un freelance, un artigiano, un commerciante o un professionista.</p>
            <p><strong>Non &egrave; una societ&agrave;.</strong> Se apri una partita IVA come persona fisica (la strada pi&ugrave; comune per chi inizia), resti te stesso. Non devi creare nessuna azienda. Semplicemente, lo Stato sa che lavori in proprio e ti chiede di pagare le tasse su quello che guadagni.</p>
            <div className="ib tip r"><div className="ib-t">💡 Quando serve la partita IVA</div><p>Serve se la tua attivit&agrave; &egrave; <strong>continuativa e abituale</strong>. Se fai un lavoro una tantum (un sito web per un amico, una consulenza isolata), puoi usare la prestazione occasionale fino a 5.000€ annui. Oltre quel punto, o se lavori regolarmente, ti serve la partita IVA.</p></div>
          </div>

          {/* QUANTO PAGHI */}
          <div className="sec r" id="quanto-paghi">
            <div className="sec-tag">I numeri veri</div>
            <h2>Quanto paghi davvero il primo anno</h2>
            <p>La paura pi&ugrave; grande di chi apre partita IVA &egrave; &quot;non sapere quanto pagher&ograve;&quot;. Ecco un esempio concreto con numeri reali.</p>
          </div>
          <div className="dblock r">
            <h3>Esempio: Sara, graphic designer, 30.000€ di ricavi</h3>
            <p>Forfettario, nuova attivit&agrave;, Gestione Separata INPS. Coefficiente di redditivit&agrave; 78%.</p>
            <div className="dblock-grid">
              <div className="dblock-item"><span>Ricavi incassati</span><span>30.000€</span></div>
              <div className="dblock-item"><span>Reddito imponibile (78%)</span><span>23.400€</span></div>
              <div className="dblock-item"><span>Contributi INPS (26,23%)</span><span>6.138€</span></div>
              <div className="dblock-item"><span>Reddito netto tassabile</span><span>17.262€</span></div>
              <div className="dblock-item"><span>Imposta sostitutiva (5%)</span><span>863€</span></div>
              <div className="dblock-item"><span>Commercialista online</span><span>~400€</span></div>
            </div>
            <div className="dblock-total"><span>Totale tasse + contributi</span><span>~7.400€</span></div>
            <div style={{marginTop:'14px',position:'relative',zIndex:1}}>
              <p style={{color:'rgba(251,248,232,.8)',fontSize:'14px',fontWeight:600,margin:0}}>Le restano in tasca: <strong style={{color:'#F5D4B0',fontSize:'18px'}}>~22.600€</strong> <span style={{fontWeight:400,color:'rgba(251,248,232,.5)'}}>(75% dei ricavi)</span></p>
            </div>
          </div>
          <div className="ib mon r"><div className="ib-t">💶 Attenzione al primo anno</div><p>Il primo anno paghi solo il saldo. Ma a giugno dell&apos;anno dopo arrivano <strong>saldo + primo acconto</strong> insieme: per Sara sarebbero circa 12.000€ in un colpo. Metti da parte il 30% di ogni incasso fin dal primo giorno.</p></div>

          {/* FORFETTARIO VS ORDINARIO */}
          <div className="sec r bh" id="forfettario">
            <div className="sec-tag">La scelta chiave</div>
            <h2>Forfettario o ordinario?</h2>
            <p>Questa &egrave; la prima vera decisione da prendere. Il regime forfettario &egrave; pensato per chi inizia ed &egrave; quasi sempre la scelta migliore se fatturi sotto 85.000€.</p>
            <div className="tw r">
              <table>
                <thead><tr><th></th><th>Forfettario</th><th>Ordinario</th></tr></thead>
                <tbody>
                  <tr className="recommended"><td>Aliquota</td><td><strong>5%</strong> primi 5 anni, poi <strong>15%</strong> <span className="badge-scelta">✦ Pi&ugrave; conveniente</span></td><td>23–43% (IRPEF a scaglioni)</td></tr>
                  <tr><td>IVA</td><td>Non la applichi</td><td>La applichi e la versi</td></tr>
                  <tr><td>Contabilit&agrave;</td><td>Nessun obbligo di registri</td><td>Registri IVA, libro giornale</td></tr>
                  <tr><td>Costi scaricabili</td><td>No (tutto forfettario)</td><td>S&igrave;, tutti quelli documentati</td></tr>
                  <tr><td>Limite ricavi</td><td>85.000€ annui</td><td>Nessuno</td></tr>
                  <tr><td>Fattura elettronica</td><td>Obbligatoria</td><td>Obbligatoria</td></tr>
                  <tr><td>Ideale per</td><td>Freelance, chi inizia, bassi costi</td><td>Alti costi, fatturato &gt;85k</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">💡 Quando conviene l&apos;ordinario</div><p>Se hai molti costi deducibili (affitto ufficio, attrezzature, dipendenti) o se fatturi principalmente a partite IVA (che possono detrarre l&apos;IVA), il regime ordinario potrebbe convenirti. Ma per la maggior parte di chi inizia, il <strong>forfettario &egrave; imbattibile</strong>.</p></div>

            <h3>I 7 requisiti per il forfettario nel 2026</h3>
            <div className="cl r">
              <div className="cli"><div className="ci">1</div><div className="clb"><strong>Ricavi sotto 85.000€ annui</strong><div className="note">Se apri a met&agrave; anno, il limite &egrave; proporzionale (es. luglio = ~42.800€)</div></div></div>
              <div className="cli"><div className="ci">2</div><div className="clb"><strong>Reddito da dipendente ≤ 35.000€</strong><div className="note">Se hai anche un lavoro dipendente, il tuo stipendio 2025 non deve superare questa soglia</div></div></div>
              <div className="cli"><div className="ci">3</div><div className="clb"><strong>Spese per dipendenti ≤ 20.000€</strong><div className="note">Se assumi qualcuno o hai collaboratori</div></div></div>
              <div className="cli"><div className="ci">4</div><div className="clb"><strong>Nessuna partecipazione in societ&agrave;</strong><div className="note">Non puoi essere socio di SNC, SAS o SRL nello stesso settore</div></div></div>
              <div className="cli"><div className="ci">5</div><div className="clb"><strong>Nessun regime speciale IVA</strong><div className="note">Agricoltura, agenzie viaggio, vendita beni usati sono esclusi</div></div></div>
              <div className="cli"><div className="ci">6</div><div className="clb"><strong>Residenza fiscale in Italia</strong><div className="note">O in UE/SEE con almeno 75% del reddito prodotto in Italia</div></div></div>
              <div className="cli"><div className="ci">7</div><div className="clb"><strong>Per il 5%: attivit&agrave; davvero nuova</strong><div className="note">Non puoi essere la prosecuzione di un lavoro che facevi da dipendente presso lo stesso datore</div></div></div>
            </div>
          </div>

          {/* COME APRIRE */}
          <div className="sec r" id="come-aprire">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si apre, in pratica</h2>
            <p>Aprire la partita IVA &egrave; gratis e si pu&ograve; fare in un giorno. Ecco i passaggi.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Scegli il codice ATECO</strong><p>Il codice che identifica la tua attivit&agrave;. Determina il coefficiente di redditivit&agrave; (e quindi quanto paghi di tasse). Sbagliare codice = pagare di pi&ugrave;.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Compila il modello AA9/12</strong><p>Il modulo dell&apos;Agenzia delle Entrate per aprire la P.IVA come persona fisica. Puoi farlo online, tramite commercialista, o allo sportello.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Scegli il regime fiscale</strong><p>Forfettario o ordinario. La scelta si comunica nel modello. Se hai i requisiti, il forfettario si applica automaticamente.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Iscriviti all&apos;INPS</strong><p>Gestione Separata (professionisti senza cassa) o Gestione Artigiani/Commercianti. Se sei artigiano/commerciante, devi anche iscriverti alla Camera di Commercio.</p></div></div>
              <div className="step r d1"><div className="stepn">5</div><div className="stepb"><strong>Attiva la fatturazione elettronica</strong><p>Obbligatoria per tutti. Puoi usare il servizio gratuito dell&apos;Agenzia delle Entrate o software come Fatture in Cloud, Fiscozen, Quickfisco.</p></div></div>
            </div>
            <div className="ib tip r"><div className="ib-t">💡 Quanto tempo ci vuole?</div><p>Se vai con un commercialista online, <strong>in 24-48 ore</strong> sei operativo. Il numero di partita IVA viene rilasciato in poche ore dalla presentazione del modello.</p></div>
            <a href="/spid" className="xlink r"><span className="xlink-em">🔐</span><span className="xlink-t"><strong>Faccio lo SPID</strong> — Ti serve per aprire online. Gratis, 15 minuti.</span><span className="xlink-ar">→</span></a>
          </div>

          {/* CODICE ATECO */}
          <div className="sec r bh" id="ateco">
            <div className="sec-tag">Il codice che conta</div>
            <h2>Il codice ATECO e il coefficiente di redditivit&agrave;</h2>
            <p>Il codice ATECO &egrave; un codice di 6 cifre che classifica la tua attivit&agrave;. Nel forfettario &egrave; fondamentale perch&eacute; determina il <strong>coefficiente di redditivit&agrave;</strong> — la percentuale del fatturato su cui paghi le tasse.</p>
            <h3>Esempi di coefficienti per attivit&agrave; comuni</h3>
            <div className="ucg r">
              <div className="uc"><div className="uc-e">💻</div><div className="uc-n">78%</div><div className="uc-d">Consulenti, grafici,<br/>sviluppatori, copywriter</div></div>
              <div className="uc"><div className="uc-e">🔧</div><div className="uc-n">86%</div><div className="uc-d">Costruzioni,<br/>attivit&agrave; immobiliari</div></div>
              <div className="uc"><div className="uc-e">🛒</div><div className="uc-n">40%</div><div className="uc-d">Commercio, bar,<br/>ristoranti, e-commerce</div></div>
              <div className="uc"><div className="uc-e">🏋️</div><div className="uc-n">67%</div><div className="uc-d">Istruttori, personal<br/>trainer, videomaker</div></div>
              <div className="uc"><div className="uc-e">🏭</div><div className="uc-n">67%</div><div className="uc-d">Industrie alimentari,<br/>manifattura</div></div>
              <div className="uc"><div className="uc-e">📦</div><div className="uc-n">54%</div><div className="uc-d">Commercio<br/>ambulante non alimentare</div></div>
            </div>
            <div className="ib warn r"><div className="ib-t">⚠️ Non indovinare il codice ATECO</div><p>Scegliere il codice sbagliato significa pagare pi&ugrave; tasse del dovuto o rischiare contestazioni dall&apos;Agenzia delle Entrate. Un consulente costa 50-100€ per questa scelta — soldi spesi bene.</p></div>
          </div>

          {/* CONTRIBUTI */}
          <div className="sec r" id="contributi">
            <div className="sec-tag">I contributi</div>
            <h2>Contributi INPS: quanto si paga</h2>
            <p>Oltre alle tasse, devi versare i contributi previdenziali all&apos;INPS. Quanto paghi dipende dal tipo di attivit&agrave;.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Gestione</th><th>Chi ci va</th><th>Quanto si paga</th><th>Contributo minimo</th></tr></thead>
                <tbody>
                  <tr className="recommended"><td><strong>Separata</strong><span className="badge-scelta">✦ Pi&ugrave; comune</span></td><td>Freelance, consulenti, professionisti senza cassa</td><td>26,23% del reddito</td><td>Nessuno (paghi solo su quello che guadagni)</td></tr>
                  <tr><td><strong>Artigiani</strong></td><td>Idraulici, elettricisti, parrucchieri, falegnami</td><td>24% del reddito</td><td>~4.521€/anno (anche a reddito zero)</td></tr>
                  <tr><td><strong>Commercianti</strong></td><td>Negozianti, e-commerce, agenti</td><td>24,48% del reddito</td><td>~4.612€/anno (anche a reddito zero)</td></tr>
                  <tr><td><strong>Cassa professionale</strong></td><td>Avvocati, medici, ingegneri, architetti</td><td>Varia per cassa</td><td>Varia per cassa</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib mon r"><div className="ib-t">💶 Riduzione 35% per forfettari artigiani/commercianti</div><p>Se sei artigiano o commerciante in forfettario, puoi chiedere la riduzione del 35% sui contributi. Devi fare domanda all&apos;INPS entro il 28 febbraio. Il contributo minimo scende cos&igrave; a circa <strong>3.100€/anno</strong>.</p></div>
            <div className="ib warn r bh"><div className="ib-t">⚠️ Gestione Separata: nessuna riduzione</div><p>Per i professionisti in Gestione Separata, la riduzione del 35% <strong>non si applica</strong>. Paghi il 26,23% sul reddito effettivo, senza minimali ma anche senza sconti.</p></div>
          </div>

          {/* COSTI */}
          <div className="sec r bh" id="costi">
            <div className="sec-tag">Quanto costa gestirla</div>
            <h2>Costi di gestione: commercialista e strumenti</h2>
            <p>Aprire la P.IVA &egrave; gratis. Gestirla costa qualcosa. Ecco le opzioni.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Metodo</th><th>Costo annuo</th><th>Cosa include</th><th>Ideale per</th></tr></thead>
                <tbody>
                  <tr><td><strong>Da solo</strong> (servizi AE gratuiti)</td><td>0€</td><td>Fatturazione elettronica AE, dichiarazione fai-da-te</td><td>Chi ha dimestichezza col fisco</td></tr>
                  <tr className="recommended"><td><strong>Commercialista online</strong><span className="badge-scelta">✦ Scelta ZeroBurocrazia</span></td><td>200–500€</td><td>Apertura, dichiarazione, F24, fatturazione, assistenza</td><td>Chi vuole semplicit&agrave; e risparmio</td></tr>
                  <tr><td><strong>Commercialista tradizionale</strong></td><td>800–2.000€</td><td>Tutto + consulenza in studio, rapporto personale</td><td>Situazioni complesse, alti fatturati</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">💡 Consiglio onesto</div><p>Se sei in forfettario con un&apos;attivit&agrave; semplice (freelance, consulente, artigiano), un <strong>commercialista online</strong> basta e avanza. Paghi 200-500€/anno, hai tutto gestito e non devi pensare a nulla. &Egrave; il miglior rapporto qualit&agrave;-prezzo.</p></div>
          </div>

          {/* AFFILIAZIONI */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Apri la partita IVA e gestisci tutto online</div>
                <div className="aff-text">Apertura gratuita, fatturazione elettronica inclusa, commercialista dedicato da 200€/anno. Pensato per forfettari.</div>
                <div className="aff-note">* Link in partnership — se ti iscrivi, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="QUI_LINK_AFFILIATO_PIVA_COMM" target="_blank" rel="noopener sponsored" className="aff-btn">Scopri il servizio →</a>
            </div>
          </div>
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Apri un conto business gratuito in 5 minuti</div>
                <div className="aff-text">Conto con IBAN italiano, carta business e fatturazione integrata. Zero canone per i forfettari. Tutto da app.</div>
                <div className="aff-note">* Link in partnership — se apri il conto, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="QUI_LINK_AFFILIATO_PIVA_CONTO" target="_blank" rel="noopener sponsored" className="aff-btn">Apri il conto →</a>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa ti serve</div>
            <h2>Documenti necessari</h2>
            <div className="cl r">
              <div className="cli"><div className="ci">🪪</div><div className="clb"><strong>Documento d&apos;identit&agrave; valido</strong><div className="note">Carta d&apos;identit&agrave; o passaporto</div></div></div>
              <div className="cli"><div className="ci">💳</div><div className="clb"><strong>Codice fiscale / tessera sanitaria</strong></div></div>
              <div className="cli"><div className="ci">🔐</div><div className="clb"><strong>SPID</strong><div className="note">Per aprire online tramite il sito dell&apos;Agenzia delle Entrate</div></div></div>
              <div className="cli"><div className="ci">🏠</div><div className="clb"><strong>Indirizzo di esercizio dell&apos;attivit&agrave;</strong><div className="note">Pu&ograve; essere casa tua — non serve un ufficio</div></div></div>
              <div className="cli"><div className="ci">📋</div><div className="clb"><strong>Codice ATECO scelto</strong><div className="note">Meglio se validato da un commercialista</div></div></div>
              <div className="cli"><div className="ci">🏦</div><div className="clb"><strong>IBAN per i rimborsi</strong><div className="note">Non obbligatorio un conto business, ma consigliato</div></div></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che fanno tutti</h2>
            <div className="ib warn r"><div className="ib-t">⚠️ Non mettere da parte i soldi per le tasse</div><p>Il primo anno non paghi quasi nulla. Poi a giugno del secondo anno arriva il conto: saldo + acconto. Se non hai messo da parte almeno il <strong>30% di ogni incasso</strong>, sei nei guai.</p></div>
            <div className="ib warn r"><div className="ib-t">⚠️ Scegliere il codice ATECO a caso</div><p>Un codice sbagliato pu&ograve; significare un coefficiente di redditivit&agrave; pi&ugrave; alto, e quindi <strong>tasse pi&ugrave; alte</strong>. O peggio, un inquadramento previdenziale errato con contributi minimi da 4.500€/anno che non ti aspettavi.</p></div>
            <div className="ib warn r"><div className="ib-t">⚠️ Fatturare pi&ugrave; del 50% al tuo ex datore di lavoro</div><p>Se hai aperto P.IVA dopo essere stato dipendente, e fatturi pi&ugrave; della met&agrave; al tuo ex capo, <strong>perdi il diritto al 5%</strong>. Rischi di pagare il triplo di tasse.</p></div>
            <div className="ib warn r"><div className="ib-t">⚠️ Non chiedere la riduzione INPS</div><p>Se sei artigiano o commerciante in forfettario, la riduzione del 35% sui contributi <strong>non &egrave; automatica</strong>. Devi fare domanda all&apos;INPS entro il 28 febbraio. Altrimenti paghi il pieno.</p></div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec r bh" id="calcolatore">
            <div className="sec-tag">Strumento interattivo</div>
            <h2>Quanto pagherai? Calcolalo</h2>
            <CalcPiva />
          </div>

          {/* FAQ */}
          <div className="sec r" id="faq">
            <div className="sec-tag">Domande frequenti</div>
            <h2>FAQ</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CROSS LINKS */}
          <div className="r">
            <a href="/730" className="xlink"><span className="xlink-em">🧾</span><span className="xlink-t"><strong>Faccio il 730</strong> — Se sei dipendente e vuoi anche la P.IVA, leggi prima come funziona il 730.</span><span className="xlink-ar">→</span></a>
            <a href="/isee" className="xlink"><span className="xlink-em">📋</span><span className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Con partita IVA puoi avere diritto a bonus. L&apos;ISEE ti dice quali.</span><span className="xlink-ar">→</span></a>
          </div>

          {/* CTA BANNER */}
          <LeadBox guida="piva" />

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Detrazioni, rimborso, scadenze</div><span className="rc-ar">→</span></a>
              <a href="/spid" className="rc"><span className="rc-e">🔐</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Gratis, in 15 minuti</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Bonus, documenti, procedura</div><span className="rc-ar">→</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Mutuo, tasse, notaio</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <div className="sb-cta"><div className="sb-ct">Ti serve un professionista?</div>
            <div className="sb-cd">Trova chi ti aiuta nella tua zona. Gratis.</div><a href="#trova-professionista" className="sb-cb">Trova professionista →</a></div>
          <div className="sbsec">
            <div className="sbsec-t">🔧 Strumenti</div>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz: serve a me?</div><div className="sbtool-d">Scopri se ti serve</div></div></a>
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">🧮</span><div><div className="sbtool-n">Calcolatore tasse</div><div className="sbtool-d">Stima personalizzata</div></div></a>
            <a href="#forfettario" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Forfettario vs Ordinario</div><div className="sbtool-d">Confronto diretto</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova commercialista</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="piva" />
      <Footer variant="scheda" />
    </>
  );
}
