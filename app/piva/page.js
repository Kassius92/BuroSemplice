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
import Tip from '@/components/Tip';
import SidebarFiscozen from '@/components/SidebarFiscozen';
import StickyFiscozen from '@/components/StickyFiscozen';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Aprire Partita IVA nel 2026: Costi, Tasse, Forfettario e Procedura',
  description: 'Come aprire partita IVA nel 2026: regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. Guida gratuita.',
  keywords: ["partita IVA", "aprire partita IVA", "partita IVA 2026", "regime forfettario", "codice ATECO", "contributi INPS", "P.IVA costi", "commercialista", "partita IVA online", "quanto si paga"],
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
  { id: 'come-aprire', label: 'Come aprire' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso avere partita IVA e lavoro dipendente?", a: "S\u00EC. Il tuo reddito da dipendente non deve superare 35.000\u20AC annui (per restare nel forfettario). Non serve il permesso del datore (salvo clausole nel contratto), ma non puoi fatturare pi\u00F9 del 50% allo stesso datore." },
  { q: "Quanto costa aprire la partita IVA?", a: "<strong>Zero.</strong> L\u2019apertura \u00E8 gratuita se fai tutto dal sito dell\u2019Agenzia delle Entrate. Con un commercialista online costa 50-150\u20AC (spesso incluso nell\u2019abbonamento annuale). Se sei artigiano/commerciante, c\u2019\u00E8 il diritto annuale Camera di Commercio di circa 50-100\u20AC." },
  { q: "Devo per forza avere un commercialista?", a: "No, non \u00E8 obbligatorio. In regime forfettario la contabilit\u00E0 \u00E8 semplice. Per\u00F2 un commercialista (anche online, 200-500\u20AC/anno) ti evita errori che costano molto di pi\u00F9: codice ATECO sbagliato, scadenze mancate, contributi calcolati male. <strong>Per chi inizia, \u00E8 un investimento che si ripaga.</strong>" },
  { q: "Cosa succede se supero gli 85.000\u20AC?", a: "Tra 85.000\u20AC e 100.000\u20AC esci dal forfettario <strong>dall\u2019anno successivo</strong>. Sopra i 100.000\u20AC esci <strong>immediatamente</strong> e devi applicare l\u2019IVA sulle fatture da quel momento. Per rientrare nel forfettario devi stare sotto soglia per due anni." },
  { q: "Posso scaricare le spese in forfettario?", a: "No. Nel forfettario non scarichi spese reali. Il reddito si calcola in modo forfettario: ricavi \u00D7 coefficiente di redditivit\u00E0. <strong>L\u2019unica deduzione possibile</strong> sono i contributi INPS versati. Se hai molte spese, valuta l\u2019ordinario." },
  { q: "Forfettario o ordinario?", a: "Per la grande maggioranza di chi inizia, il <strong>forfettario \u00E8 meglio</strong>: tasse pi\u00F9 basse (5-15% vs 23-43%), niente IVA, contabilit\u00E0 semplice. L\u2019ordinario conviene solo se hai molti costi deducibili (ufficio, dipendenti, attrezzature) o fatturo sopra gli 85.000\u20AC." },
  { q: "Devo aprire un conto corrente business?", a: "Non \u00E8 obbligatorio per legge. Ma \u00E8 <strong>fortemente consigliato</strong>: separa le spese personali da quelle professionali e ti aiuta a mettere da parte il 30% per le tasse. Molti conti business per forfettari sono gratuiti." },
  { q: "Come chiudo la partita IVA?", a: "Con il modello AA9/12 di cessazione all\u2019Agenzia delle Entrate, gratuito. Devi comunicarlo entro 30 giorni dalla fine dell\u2019attivit\u00E0. Restano da pagare saldo tasse e contributi sull\u2019ultimo anno." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come aprire Partita IVA nel 2026: guida completa e gratuita', description: metadata.description, url: '/piva', image: 'og-piva.png', datePublished: '2026-03-04', dateModified: '2026-03-09' }),
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
        <div className="hero-mesh"></div><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Apro <em>partita IVA</em></h1>
            <p className="hero-sub">Forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO. Tutto quello che devi sapere prima di metterti in proprio, senza paroloni.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} Gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDCB0'} 0€ apertura</span>
              <span className="pill pill-s">{'\u23F1'} 20 min di lettura</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · INPS Circolare 14/2026 · Legge di Bilancio 2026</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
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
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/fattura-elettronica" className="ps">📨 Fattura elettronica</a>
              <a href="/regime-forfettario" className="ps">📊 Regime forfettario</a>
              <a href="/730" className="ps">🧾 Faccio il 730</a>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Aprire P.IVA</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Contributi INPS</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📄 Fatture online</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">0€</div><div className="sl">costo apertura P.IVA</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCCA'}</div><div className="sn">5%</div><div className="sl">tasse nuove attivit&agrave;<br/>(primi 5 anni)</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCC8'}</div><div className="sn">85k€</div><div className="sl">tetto ricavi<br/>regime forfettario</div></div>
                <div className="sc    r d1"><div className="si">{'\u23F1'}</div><div className="sn">1–2h</div><div className="sl">tempo apertura<br/>(con commercialista)</div></div>
                <div className="sc bl r d2"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">necessario per<br/>aprire online</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">15%</div><div className="sl">tasse dal 6° anno<br/>in poi</div></div>
              </div>
            </div>
            <QuizPiva />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la partita IVA (spiegato semplice)</h2>

            <p>La partita IVA &egrave; un numero di 11 cifre che dice allo Stato: &quot;questa persona lavora in proprio&quot;. Se sei un dipendente, il tuo datore pensa a tutto — tasse, contributi, busta paga. Con la partita IVA, <strong>fai tu</strong>: emetti le fatture, paghi le tasse, versi i contributi per la pensione.</p>

            <p><strong>Non &egrave; un&apos;azienda.</strong> Se apri una partita IVA come persona fisica (la strada pi&ugrave; comune per chi inizia), resti te stesso. Non devi creare nessuna societ&agrave;. Semplicemente, hai il permesso ufficiale di lavorare in autonomia e fatturare.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Regime forfettario</strong> — Il regime fiscale semplificato per chi fattura sotto 85.000€/anno. Paghi il 5% di tasse per i primi 5 anni, poi il 15%. Non applichi l&apos;IVA. &Egrave; quasi sempre la scelta migliore per chi inizia.</div>
              <div className="gl-item r d2"><strong>Coefficiente di redditivit&agrave;</strong> — Una percentuale che dipende dal tuo <Tip t="Il codice di 6 cifre che classifica la tua attività economica. Esempio: 62.01.00 = sviluppo software. Determina quanto paghi di tasse.">codice ATECO</Tip>. Dice quanta parte del fatturato lo Stato considera &quot;guadagno&quot;. Es: se il coefficiente &egrave; 78% e fatturi 30.000€, paghi le tasse su 23.400€.</div>
              <div className="gl-item r d3"><strong>Codice ATECO</strong> — Un codice di 6 cifre che classifica la tua attivit&agrave; (es. sviluppatore, grafico, idraulico). Determina il coefficiente di redditivit&agrave; e il tipo di contributi INPS. Sbagliarlo = pagare pi&ugrave; tasse.</div>
              <div className="gl-item r d4"><strong>Gestione Separata INPS</strong> — La &quot;cassa&quot; dove versano i contributi i freelance e i professionisti senza un ordine (avvocati, medici hanno la loro). Paghi il 26,23% del reddito, ma <strong>solo su quello che guadagni</strong> — se guadagni zero, paghi zero.</div>
              <div className="gl-item r d1"><strong>Fattura elettronica</strong> — Dal 2024 &egrave; obbligatoria per tutti, anche i forfettari. Non &egrave; un PDF via email: &egrave; un file XML che va inviato al <Tip t="Sistema di Interscambio: il sistema dell'Agenzia delle Entrate che riceve, controlla e smista le fatture elettroniche.">SdI</Tip> dell&apos;Agenzia delle Entrate. Ci sono software gratuiti che lo fanno per te.</div>
              <div className="gl-item r d2"><strong>Imposta sostitutiva</strong> — La tassa unica che paghi in forfettario (5% o 15%), al posto di IRPEF, IRAP e addizionali. &quot;Sostitutiva&quot; perch&eacute; sostituisce tutte le altre.</div>
            </div>

            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Quando serve davvero la partita IVA</div><p>Serve se la tua attivit&agrave; &egrave; <strong>continuativa e abituale</strong>. Se fai un lavoro una tantum (un sito web per un amico, una consulenza isolata), puoi usare la <Tip t="Un contratto per lavori sporadici. Fino a 5.000€/anno non paghi contributi INPS. Oltre, sì. Non serve la partita IVA.">prestazione occasionale</Tip> fino a 5.000€ annui. Oltre quel punto, o se lavori regolarmente, ti serve la P.IVA.</p></div>
          </div>

          {/* QUANTO PAGHI */}
          <div className="sec r" id="quanto-paghi">
            <div className="sec-tag">I numeri veri</div>
            <h2>Quanto paghi davvero (con un esempio)</h2>
            <p>La paura pi&ugrave; grande di chi apre partita IVA: &quot;non so quanto pagher&ograve;&quot;. Ecco un esempio con numeri reali, cos&igrave; capisci il meccanismo.</p>
          </div>
          <div className="dblock r">
            <h3>Sara, graphic designer, 30.000€ di ricavi</h3>
            <p><Tip t="Il regime fiscale semplificato: 5% di tasse per 5 anni, poi 15%. Niente IVA, contabilità minima.">Forfettario</Tip>, nuova attivit&agrave;, <Tip t="La 'cassa previdenziale' per freelance e professionisti senza ordine. Paghi il 26,23% del reddito, ma solo se guadagni.">Gestione Separata</Tip> INPS. <Tip t="La percentuale del fatturato che lo Stato considera 'guadagno'. Per grafici/consulenti è 78%: su 30.000€ di fatturato, 23.400€ sono reddito tassabile.">Coefficiente 78%</Tip>.</p>
            <div className="dblock-grid">
              <div className="dblock-item"><span>Ricavi incassati</span><span>30.000€</span></div>
              <div className="dblock-item"><span>Reddito imponibile (78%)</span><span>23.400€</span></div>
              <div className="dblock-item"><span>Contributi INPS (26,23%)</span><span>6.138€</span></div>
              <div className="dblock-item"><span>Reddito netto tassabile</span><span>17.262€</span></div>
              <div className="dblock-item"><span><Tip t="La tassa unica del forfettario: 5% i primi 5 anni, 15% dopo. Sostituisce IRPEF, IRAP e addizionali.">Imposta sostitutiva</Tip> (5%)</span><span>863€</span></div>
              <div className="dblock-item"><span>Commercialista online</span><span>~400€</span></div>
            </div>
            <div className="dblock-total"><span>Totale tasse + contributi</span><span>~7.400€</span></div>
            <div style={{marginTop:'14px',position:'relative',zIndex:1}}>
              <p style={{color:'rgba(251,248,232,.8)',fontSize:'14px',fontWeight:600,margin:0}}>Le restano in tasca: <strong style={{color:'#F5D4B0',fontSize:'18px'}}>~22.600€</strong> <span style={{fontWeight:400,color:'rgba(251,248,232,.5)'}}>(75% dei ricavi)</span></p>
            </div>
          </div>
          <div className="ib mon r"><div className="ib-t">{'\uD83D\uDCB6'} Attenzione al secondo anno</div><p>Il primo anno paghi poco: solo il saldo delle tasse. Ma a giugno dell&apos;anno dopo arrivano <strong>saldo + primo acconto insieme</strong>: per Sara sarebbero circa 12.000€ in un colpo. La regola d&apos;oro: <strong>metti da parte il 30% di ogni incasso</strong> fin dal primo giorno. Non toccarli mai.</p></div>

          {/* FORFETTARIO VS ORDINARIO */}
          <div className="sec r breve-hide" id="forfettario">
            <div className="sec-tag">La scelta chiave</div>
            <h2>Forfettario o ordinario?</h2>
            <p>Questa &egrave; la prima decisione da prendere. Il <Tip t="Il regime semplificato: tasse basse, niente IVA, contabilità minima. Per chi fattura sotto 85.000€/anno.">regime forfettario</Tip> &egrave; quasi sempre la scelta migliore per chi inizia e fattura sotto 85.000€.</p>
            <div className="tw r">
              <table>
                <thead><tr><th></th><th>Forfettario</th><th>Ordinario</th></tr></thead>
                <tbody>
                  <tr className="recommended"><td>Aliquota</td><td><strong>5%</strong> primi 5 anni, poi <strong>15%</strong> <span className="badge-scelta">{'\u2726'} Pi&ugrave; conveniente</span></td><td>23–43% (IRPEF a scaglioni)</td></tr>
                  <tr><td>IVA</td><td>Non la applichi</td><td>La applichi e la versi</td></tr>
                  <tr><td>Contabilit&agrave;</td><td>Nessun obbligo di registri</td><td>Registri IVA, libro giornale</td></tr>
                  <tr><td>Costi scaricabili</td><td>No (tutto forfettario)</td><td>S&igrave;, tutti quelli documentati</td></tr>
                  <tr><td>Limite ricavi</td><td>85.000€ annui</td><td>Nessuno</td></tr>
                  <tr><td><Tip t="Un file XML che invii al Sistema di Interscambio dell'Agenzia delle Entrate. Obbligatoria per tutti dal 2024. Ci sono software gratuiti.">Fattura elettronica</Tip></td><td>Obbligatoria</td><td>Obbligatoria</td></tr>
                  <tr><td>Ideale per</td><td>Freelance, chi inizia, bassi costi</td><td>Alti costi, fatturato &gt;85k</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Quando conviene l&apos;ordinario</div><p>Se hai molti costi deducibili (affitto ufficio, attrezzature, dipendenti) o fatturo principalmente a partite IVA (che possono detrarre l&apos;IVA), l&apos;ordinario potrebbe convenirti. Ma per la grande maggioranza di chi inizia, il <strong>forfettario &egrave; imbattibile</strong>.</p></div>

            <h3>I 7 requisiti per il forfettario nel 2026</h3>
            <div className="cl r">
              <div className="cli"><div className="ci">1</div><div className="clb"><strong>Ricavi sotto 85.000€ annui</strong><div className="note">Se apri a met&agrave; anno, il limite &egrave; proporzionale (es. luglio = ~42.800€)</div></div></div>
              <div className="cli"><div className="ci">2</div><div className="clb"><strong>Reddito da dipendente {'\u2264'} 35.000€</strong><div className="note">Se hai anche un lavoro dipendente, il tuo stipendio 2025 non deve superare questa soglia</div></div></div>
              <div className="cli"><div className="ci">3</div><div className="clb"><strong>Spese per dipendenti {'\u2264'} 20.000€</strong><div className="note">Se assumi qualcuno o hai collaboratori</div></div></div>
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
            <p>Aprire la P.IVA &egrave; gratis e si fa in un giorno. Ecco cosa devi fare.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Scegli il <Tip t="Il codice di 6 cifre che classifica la tua attività. Es: 62.01.00 = sviluppo software. Determina quante tasse paghi nel forfettario.">codice ATECO</Tip></strong><p>Il codice che identifica la tua attivit&agrave;. Nel forfettario determina il <Tip t="La percentuale del fatturato su cui paghi le tasse. Es: 78% per consulenti, 40% per commercio, 67% per istruttori.">coefficiente di redditivit&agrave;</Tip> — e quindi quanto paghi di tasse. Sbagliare = pagare di pi&ugrave;. Se hai dubbi, chiedi a un commercialista (50-100€ per questa scelta, soldi spesi bene).</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Compila il modello <Tip t="Il modulo ufficiale dell'Agenzia delle Entrate per aprire o chiudere la P.IVA come persona fisica. Si compila online con SPID o tramite commercialista.">AA9/12</Tip></strong><p>Il modulo dell&apos;Agenzia delle Entrate per aprire la P.IVA. Puoi farlo online con lo SPID, tramite commercialista, o allo sportello.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Scegli il regime fiscale</strong><p>Forfettario o ordinario. La scelta si comunica nel modello. Se hai i requisiti, il forfettario si applica automaticamente.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Iscriviti all&apos;INPS</strong><p><Tip t="La 'cassa' per freelance e professionisti senza ordine. Paghi solo se guadagni, nessun contributo minimo.">Gestione Separata</Tip> (professionisti senza cassa) o Gestione Artigiani/Commercianti. Se sei artigiano/commerciante, devi anche iscriverti alla Camera di Commercio.</p></div></div>
              <div className="step r d1"><div className="stepn">5</div><div className="stepb"><strong>Attiva la <Tip t="Un file XML inviato al Sistema di Interscambio dell'Agenzia delle Entrate. Obbligatoria per tutti. Puoi usare il servizio gratuito dell'AE o software come Fatture in Cloud, Fiscozen.">fatturazione elettronica</Tip></strong><p>Obbligatoria per tutti. Puoi usare il servizio gratuito dell&apos;Agenzia delle Entrate o software come Fatture in Cloud, Fiscozen, Quickfisco.</p></div></div>
            </div>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Quanto tempo ci vuole?</div><p>Con un commercialista online, <strong>in 24-48 ore</strong> sei operativo. Il numero di partita IVA viene rilasciato in poche ore dalla presentazione del modello.</p></div>
            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><span className="xlink-t"><strong>Faccio lo SPID</strong> — Ti serve per aprire online. Gratis, 15 minuti.</span><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* CODICE ATECO */}
          <div className="sec r breve-hide" id="ateco">
            <div className="sec-tag">Il codice che conta</div>
            <h2>Il codice ATECO e quanto paghi</h2>
            <p>Il <Tip t="Classificazione delle Attività Economiche. Un codice di 6 cifre che classifica cosa fai. Lo scegli quando apri la P.IVA.">codice ATECO</Tip> nel forfettario &egrave; fondamentale perch&eacute; determina il <strong>coefficiente di redditivit&agrave;</strong> — la percentuale del fatturato su cui paghi le tasse.</p>
            <h3>Coefficienti per attivit&agrave; comuni</h3>
            <div className="ucg r">
              <div className="uc"><div className="uc-e">{'\uD83D\uDCBB'}</div><div className="uc-n">78%</div><div className="uc-d">Consulenti, grafici,<br/>sviluppatori, copywriter</div></div>
              <div className="uc"><div className="uc-e">{'\uD83D\uDD27'}</div><div className="uc-n">86%</div><div className="uc-d">Costruzioni,<br/>attivit&agrave; immobiliari</div></div>
              <div className="uc"><div className="uc-e">{'\uD83D\uDED2'}</div><div className="uc-n">40%</div><div className="uc-d">Commercio, bar,<br/>ristoranti, e-commerce</div></div>
              <div className="uc"><div className="uc-e">{'\uD83C\uDFCB\uFE0F'}</div><div className="uc-n">67%</div><div className="uc-d">Istruttori, personal<br/>trainer, videomaker</div></div>
              <div className="uc"><div className="uc-e">{'\uD83C\uDFED'}</div><div className="uc-n">67%</div><div className="uc-d">Industrie alimentari,<br/>manifattura</div></div>
              <div className="uc"><div className="uc-e">{'\uD83D\uDCE6'}</div><div className="uc-n">54%</div><div className="uc-d">Commercio<br/>ambulante non alimentare</div></div>
            </div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Non indovinare il codice ATECO</div><p>Un codice sbagliato pu&ograve; significare un coefficiente pi&ugrave; alto (= pi&ugrave; tasse) o un inquadramento INPS sbagliato (= contributi minimi da 4.500€/anno che non ti aspettavi). Un commercialista ti aiuta a sceglierlo per 50-100€ — soldi risparmiati in tasse.</p></div>
          </div>

          {/* CONTRIBUTI */}
          <div className="sec r breve-hide" id="contributi">
            <div className="sec-tag">I contributi</div>
            <h2>Contributi INPS: quanto si paga</h2>
            <p>Oltre alle tasse, devi versare i contributi per la pensione all&apos;INPS. Quanto paghi dipende dal tipo di attivit&agrave;.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Gestione</th><th>Chi ci va</th><th>Quanto si paga</th><th>Contributo minimo</th></tr></thead>
                <tbody>
                  <tr className="recommended"><td><strong>Separata</strong><span className="badge-scelta">{'\u2726'} Pi&ugrave; comune</span></td><td>Freelance, consulenti, professionisti senza cassa</td><td>26,23% del reddito</td><td>Nessuno (paghi solo su quello che guadagni)</td></tr>
                  <tr><td><strong>Artigiani</strong></td><td>Idraulici, elettricisti, parrucchieri, falegnami</td><td>24% del reddito</td><td>~4.521€/anno (anche a reddito zero)</td></tr>
                  <tr><td><strong>Commercianti</strong></td><td>Negozianti, e-commerce, agenti</td><td>24,48% del reddito</td><td>~4.612€/anno (anche a reddito zero)</td></tr>
                  <tr><td><strong>Cassa professionale</strong></td><td>Avvocati, medici, ingegneri, architetti</td><td>Varia per cassa</td><td>Varia per cassa</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib mon r"><div className="ib-t">{'\uD83D\uDCB6'} Riduzione 35% per forfettari artigiani/commercianti</div><p>Se sei artigiano o commerciante in forfettario, puoi chiedere la riduzione del 35% sui contributi. <strong>Non &egrave; automatica:</strong> devi fare domanda all&apos;INPS entro il 28 febbraio. Il contributo minimo scende a circa <strong>3.100€/anno</strong>.</p></div>
            <div className="ib warn r breve-hide"><div className="ib-t">{'\u26A0\uFE0F'} Gestione Separata: nessuna riduzione</div><p>Per i professionisti in Gestione Separata, la riduzione del 35% <strong>non si applica</strong>. Paghi il 26,23% sul reddito effettivo, senza minimali ma anche senza sconti.</p></div>
          </div>

          {/* COSTI */}
          <div className="sec r breve-hide" id="costi">
            <div className="sec-tag">Quanto costa gestirla</div>
            <h2>Costi di gestione: commercialista e strumenti</h2>
            <p>Aprire la P.IVA &egrave; gratis. Gestirla costa qualcosa. Ecco le opzioni.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Metodo</th><th>Costo annuo</th><th>Cosa include</th><th>Ideale per</th></tr></thead>
                <tbody>
                  <tr><td><strong>Da solo</strong> (servizi AE gratuiti)</td><td>0€</td><td>Fatturazione elettronica AE, dichiarazione fai-da-te</td><td>Chi ha dimestichezza col fisco</td></tr>
                  <tr className="recommended"><td><strong>Commercialista online</strong><span className="badge-scelta">{'\u2726'} Scelta ZeroBurocrazia</span></td><td>200–500€</td><td>Apertura, dichiarazione, F24, fatturazione, assistenza</td><td>Chi vuole semplicit&agrave; e risparmio</td></tr>
                  <tr><td><strong>Commercialista tradizionale</strong></td><td>800–2.000€</td><td>Tutto + consulenza in studio, rapporto personale</td><td>Situazioni complesse, alti fatturati</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Consiglio onesto</div><p>Se sei in forfettario con un&apos;attivit&agrave; semplice (freelance, consulente, artigiano), un <strong>commercialista online</strong> basta e avanza. Paghi 200-500€/anno, hai tutto gestito e non devi pensare a scadenze e moduli.</p></div>
          </div>

          {/* AFFILIAZIONI */}
          <div className="aff-block r">
            <img src="/fiscozen-logo.png" alt="Fiscozen" className="aff-logo" width="120" height="24" />
            <div className="aff-label">Partner ufficiale ZeroBurocrazia</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Fiscozen &mdash; Commercialista online per partite IVA</div>
                <div className="aff-text">Apertura P.IVA gratuita, fatturazione elettronica inclusa, commercialista dedicato. Gestisce forfettario e ordinario semplificato.</div>
                <div className="aff-discount">Sconto esclusivo di 50&euro; per i lettori di ZeroBurocrazia</div><div className="aff-note">* Link in partnership &mdash; a te non cambia nulla sul prezzo, anzi risparmi.</div>
              </div>
              <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="aff-btn">Ottieni lo sconto di 50&euro; {'\u2192'}</a>
            </div>
          </div>


          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa ti serve</div>
            <h2>Documenti necessari</h2>
            <div className="cl r">
              <div className="cli"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; valido</strong><div className="note">Carta d&apos;identit&agrave; o passaporto</div></div></div>
              <div className="cli"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Codice fiscale / tessera sanitaria</strong></div></div>
              <div className="cli"><div className="ci">{'\uD83D\uDD10'}</div><div className="clb"><strong>SPID</strong><div className="note">Per aprire online tramite il sito dell&apos;Agenzia delle Entrate</div></div></div>
              <div className="cli"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Indirizzo di esercizio dell&apos;attivit&agrave;</strong><div className="note">Pu&ograve; essere casa tua — non serve un ufficio</div></div></div>
              <div className="cli"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Codice ATECO scelto</strong><div className="note">Meglio se validato da un commercialista</div></div></div>
              <div className="cli"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN per i rimborsi</strong><div className="note">Non obbligatorio un conto business, ma consigliato</div></div></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che fanno tutti (e che costano caro)</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Non mettere da parte i soldi per le tasse</div><p>Il primo anno sembra tutto gratis — paghi pochissimo. Poi a giugno del secondo anno arriva la mazzata: saldo + acconto. Se non hai messo da parte almeno il <strong>30% di ogni incasso</strong>, sei nei guai. Apri un conto separato e versa il 30% ad ogni fattura incassata. Non toccarli.</p></div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Scegliere il codice ATECO a caso</div><p>Un codice sbagliato pu&ograve; significare un <Tip t="La percentuale del fatturato su cui paghi le tasse. Un coefficiente più alto = più tasse. La scelta dipende dal codice ATECO.">coefficiente di redditivit&agrave;</Tip> pi&ugrave; alto, e quindi <strong>tasse pi&ugrave; alte</strong>. O peggio, un inquadramento previdenziale errato con contributi minimi da 4.500€/anno che non ti aspettavi. Un commercialista per questa scelta costa 50-100€ — te ne risparmia migliaia.</p></div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Fatturare pi&ugrave; del 50% al tuo ex datore</div><p>Se hai aperto P.IVA dopo essere stato dipendente, e fatturi pi&ugrave; della met&agrave; al tuo ex capo nei primi 2 anni, <strong>perdi il diritto al 5%</strong> e passi al 15%. Rischi di pagare il triplo di tasse.</p></div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Non chiedere la riduzione INPS</div><p>Se sei artigiano o commerciante in forfettario, la riduzione del 35% sui contributi <strong>non &egrave; automatica</strong>. Devi fare domanda all&apos;INPS entro il 28 febbraio. Se non la fai, paghi il pieno: ~4.500€/anno invece di ~3.100€.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Giulia apre P.IVA e guadagna di pi&ugrave;</h2>

            <p><strong>Giulia ha 27 anni</strong>, vive a Bologna e lavora come social media manager. Da dipendente guadagnava 1.400€ netti al mese. Un&apos;azienda le offre un progetto freelance da 2.500€ al mese per gestire i loro social. Poi un&apos;altra azienda le propone lo stesso a 1.500€. Totale potenziale: <strong>4.000€ al mese di ricavi</strong>, ma deve aprire partita IVA.</p>

            <p>Giulia ha paura: &quot;E se poi devo dare tutto in tasse?&quot;</p>

            <h3>I numeri di Giulia</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Ricavi annui</span><span className="db-new">48.000€</span></div>
              <div className="db-row"><span className="db-label">Reddito imponibile (78%)</span><span className="db-new">37.440€</span></div>
              <div className="db-row"><span className="db-label">Contributi INPS (26,23%)</span><span className="db-old">&minus;9.822€</span></div>
              <div className="db-row"><span className="db-label">Imposta sostitutiva (5%)</span><span className="db-old">&minus;1.381€</span></div>
              <div className="db-row"><span className="db-label">Commercialista online</span><span className="db-old">&minus;400€</span></div>
              <div className="db-row db-total"><span className="db-label">Netto in tasca</span><span className="db-val">~36.400€</span></div>
            </div>

            <p>Da dipendente Giulia portava a casa 16.800€ netti all&apos;anno. Con la P.IVA forfettaria ne porta a casa <strong>36.400€</strong> — pi&ugrave; del doppio. E lavora da casa, sceglie i suoi orari, e ha due clienti invece di un capo solo.</p>

            <h3>Come ha fatto, in pratica</h3>
            <p>Ha usato un commercialista online (350€/anno tutto incluso). L&apos;apertura era gratuita. Il commercialista ha scelto il codice ATECO giusto (73.11.02 — attivit&agrave; di consulenza pubblicitaria), ha compilato il modello AA9/12, e in 48 ore Giulia aveva il suo numero di partita IVA e poteva fatturare.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>La partita IVA fa paura solo finch&eacute; non fai i conti. Con il forfettario al 5%, un freelance con 30-50.000€ di ricavi tiene in tasca il 75% di quello che fattura. Il segreto: scegliere il codice ATECO giusto, mettere da parte il 30%, e avere un commercialista che pensa alle scadenze.</p>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec r breve-hide" id="calcolatore">
            <div className="sec-tag">Strumento interattivo</div>
            <h2>Quanto pagherai? Calcolalo</h2>
            <CalcPiva />
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Domande frequenti</div>
            <h2>FAQ</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CROSS LINKS */}
          <div className="r">
            <a href="/730" className="xlink"><span className="xlink-em">{'\uD83E\uDDFE'}</span><span className="xlink-t"><strong>Faccio il 730</strong> — Se sei dipendente e vuoi anche la P.IVA, leggi prima come funziona il 730.</span><span className="xlink-ar">{'\u2192'}</span></a>
            <a href="/isee" className="xlink"><span className="xlink-em">{'\uD83D\uDCCB'}</span><span className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Con partita IVA puoi avere diritto a bonus. L&apos;ISEE ti dice quali.</span><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Con P.IVA forfettaria non fai il 730, ma conviene sapere perché.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Il reddito da P.IVA entra nell'ISEE.</div><span className="rc-ar">→</span></a>
              <a href="/dimissioni" className="rc"><span className="rc-e">✍️</span><div className="rc-t">Dimissioni</div><div className="rc-d">Ti dimetti per aprire P.IVA? Leggi prima questa.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <SidebarFiscozen />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Aprire P.IVA</div><div className="sbtool-d">Apertura e gestione partita IVA</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Contributi INPS</div><div className="sbtool-d">Iscrizione e contributi</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Fatture online</div><div className="sbtool-d">Portale Agenzia Entrate</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/fattura-elettronica" className="sbguide">📨 Fattura elettronica<span className="sbg-ar">→</span></a>
            <a href="/regime-forfettario" className="sbguide">📊 Regime forfettario<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
          </div>
        </aside>
      </div>

      <StickyFiscozen />
      <BrevoForm pageName="piva" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
