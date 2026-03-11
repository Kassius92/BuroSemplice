import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import VersionToggle from '@/components/VersionToggle';
import QuizForfettario from '@/components/QuizForfettario';
import Tip from '@/components/Tip';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Regime Forfettario 2026: Requisiti, Tassazione, Limiti e Quanto Paghi Davvero',
  description: 'Regime forfettario 2026: requisiti, tassazione al 5% o 15%, limite 85.000\u20AC, coefficienti di redditivit\u00E0, INPS, cosa puoi e non puoi fare. Guida gratuita completa.',
  keywords: ["regime forfettario", "forfettario 2026", "flat tax", "imposta sostitutiva 5%", "imposta sostitutiva 15%", "coefficiente redditività", "limite 85000", "codice ATECO forfettario", "contributi INPS forfettario", "partita IVA forfettario"],
  alternates: { canonical: 'https://zeroburocrazia.it/regime-forfettario' },
  openGraph: {
    title: 'Regime Forfettario 2026: Requisiti, Tassazione e Come Funziona',
    description: 'Tutto sul forfettario: requisiti, tasse al 5-15%, INPS, coefficienti. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/regime-forfettario',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogregimeforfettario.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Regime Forfettario 2026: Guida Completa', description: 'Requisiti, tasse, INPS, coefficienti, vantaggi e svantaggi del forfettario.', images: ['https://zeroburocrazia.it/ogregimeforfettario.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'tasse', label: 'Quanto paghi' },
  { id: 'coefficienti', label: 'Coefficienti' },
  { id: 'limiti', label: 'Pro e contro' },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Qual \u00E8 il limite di fatturato per il forfettario?", a: "<strong>85.000\u20AC lordi all'anno.</strong> Se lo superi durante l'anno ma resti sotto i 100.000\u20AC, esci dal forfettario dall'anno successivo. Se superi i 100.000\u20AC, esci immediatamente e devi applicare l'IVA da quel momento." },
  { q: "Quanto pago di tasse nel forfettario?", a: "L'<strong>imposta sostitutiva</strong> \u00E8 del 15% sul reddito imponibile. Per i primi 5 anni di attivit\u00E0 (se non hai mai avuto P.IVA) scende al <strong>5%</strong>. Il reddito imponibile non \u00E8 tutto il fatturato: si calcola applicando il coefficiente di redditivit\u00E0 del tuo codice ATECO." },
  { q: "Nel forfettario devo pagare l'IVA?", a: "<strong>No.</strong> Non addebiti l'IVA ai clienti e non la detrai sugli acquisti. In fattura scrivi 'Operazione in franchigia da IVA'. Questo \u00E8 un vantaggio per i clienti privati (prezzi pi\u00F9 bassi) ma uno svantaggio con clienti aziendali (loro non possono detrarre l'IVA che ti pagano)." },
  { q: "Posso detrarre spese nel forfettario?", a: "<strong>No, nessuna deduzione o detrazione</strong> sui costi dell'attivit\u00E0. Il reddito si calcola a forfait (da qui il nome) con il coefficiente. Se hai molti costi reali (materie prime, affitto, dipendenti), il forfettario potrebbe non convenirti." },
  { q: "Posso essere dipendente e avere P.IVA forfettaria?", a: "<strong>S\u00EC</strong>, purch\u00E9 il rapporto di lavoro dipendente non sia con lo stesso soggetto per cui fatturi (o soggetti riconducibili). Il reddito da lavoro dipendente non deve superare <strong>30.000\u20AC lordi</strong> nell'anno precedente." },
  { q: "Cosa succede se supero gli 85.000\u20AC?", a: "Se resti <strong>sotto i 100.000\u20AC</strong>: esci dal forfettario dal 1\u00B0 gennaio dell'anno successivo. Se superi i <strong>100.000\u20AC</strong>: esci immediatamente e devi applicare l'IVA da quel momento in poi, anche sulle fatture precedenti dell'anno." },
  { q: "Devo fare il 730 se sono forfettario?", a: "<strong>No.</strong> Il forfettario non fa il 730 ma il <strong>modello Redditi PF</strong> (ex Unico). La scadenza \u00E8 il 30 novembre. Se per\u00F2 hai anche redditi da lavoro dipendente, devi fare sia il 730 che il modello Redditi." },
  { q: "Conviene il forfettario o l'ordinario?", a: "Dipende. Il forfettario conviene se: fatturi sotto 85k\u20AC, hai pochi costi, lavori con privati. L'ordinario conviene se: hai molti costi deducibili (ufficio, dipendenti, materie prime), lavori con aziende che vogliono detrarre l'IVA, o guadagni pi\u00F9 di 85k\u20AC." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Regime forfettario 2026: requisiti, tassazione e come funziona', description: 'Guida completa al regime forfettario 2026.', url: '/regime-forfettario', image: 'ogregimeforfettario.png', datePublished: '2026-03-09', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/><line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/><circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Regime <em>forfettario</em></h1>
            <p className="hero-sub">Come funziona davvero il forfettario: requisiti, quanto paghi di tasse, coefficienti, INPS, e quando conviene (e quando no). Zero burocratese.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 9 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Legge 190/2014 &middot; Legge di Bilancio 2026 &middot; Agenzia delle Entrate</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">5-15%</div><div className="hl">imposta sostitutiva<br/>(no IRPEF, no IRAP)</div></div>
            <div className="hstat"><div className="hn">85k&euro;</div><div className="hl">limite fatturato<br/>annuo lordo</div></div>
            <div className="hstat"><div className="hn">No IVA</div><div className="hl">non la addebiti<br/>e non la detrai</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/piva" className="ps">{'\uD83D\uDCBC'} Apro partita IVA</a>
              <a href="/fattura-elettronica" className="ps">{'\uD83D\uDCE8'} Fattura elettronica</a>
              <a href="/730" className="ps">{'\uD83E\uDDFE'} Faccio il 730</a>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/regime-forfetario" target="_blank" rel="noopener noreferrer" className="ps">🏛 Regole forfettario</a>
              <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.iscrizione-alla-gestione-artigiani-e-commercianti-50498.iscrizione-alla-gestione-artigiani-e-commercianti.html" target="_blank" rel="noopener noreferrer" className="ps">📋 Contributi INPS</a>
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/comunicazioni/fatture-e-corrispettivi" target="_blank" rel="noopener noreferrer" className="ps">📄 Fatture online</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">5-15%</div><div className="sl">imposta sostitutiva unica</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCC8'}</div><div className="sn">85.000&euro;</div><div className="sl">limite fatturato annuo</div></div>
                <div className="sc r d3"><div className="si">{'\u274C'}</div><div className="sn">No IVA</div><div className="sl">non la addebiti n&eacute; la detrai</div></div>
                <div className="sc r d1"><div className="si">{'\u274C'}</div><div className="sn">No deduzioni</div><div className="sl">costi calcolati a forfait</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">INPS</div><div className="sl">contributi obbligatori separati</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">30 nov</div><div className="sl">scadenza dichiarazione redditi</div></div>
              </div>
            </div>
            <QuizForfettario />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il regime forfettario (spiegato semplice)</h2>
            <p>Il forfettario &egrave; un regime fiscale <strong>semplificato e agevolato</strong> per le piccole partite IVA. Invece di calcolare le tasse su quanto guadagni realmente (ricavi meno costi), lo Stato dice: &quot;Ok, tu fai il consulente? Allora il 78% di quello che fatturi &egrave; il tuo reddito, e le tasse le paghi su quello.&quot; Quel 78% &egrave; il <Tip t="La percentuale del fatturato che lo Stato considera come tuo reddito. Varia in base all'attivit&agrave; (codice ATECO): 78% per consulenti, 67% per istruttori, 40% per commercio. Pi&ugrave; &egrave; basso, meno tasse paghi.">coefficiente di redditivit&agrave;</Tip>.</p>
            <p>Le tasse? Un&apos;unica <Tip t="Un'imposta che sostituisce IRPEF, IRAP e addizionali regionali/comunali. Paghi solo questa: 15% (o 5% per i primi 5 anni se non hai mai avuto P.IVA). Molto pi&ugrave; semplice dell'ordinario.">imposta sostitutiva</Tip> del <strong>15%</strong> (che scende al <strong>5%</strong> per i primi 5 anni se non hai mai avuto P.IVA). Niente <Tip t="Imposta sul Reddito delle Persone Fisiche. Nel regime ordinario le aliquote vanno dal 23% al 43%. Nel forfettario non la paghi: &egrave; sostituita dall'imposta sostitutiva del 5-15%.">IRPEF</Tip>, niente <Tip t="Imposta Regionale sulle Attivit&agrave; Produttive. Nel forfettario non la paghi. Nell'ordinario s&igrave;.">IRAP</Tip>, niente addizionali.</p>
            <p>Il prezzo? Non puoi detrarre i costi reali, non addebiti l&apos;<Tip t="Imposta sul Valore Aggiunto. Nel forfettario non la applichi ai clienti e non puoi detrarla sugli acquisti. Questo semplifica tutto ma pu&ograve; essere uno svantaggio con clienti aziendali.">IVA</Tip>, e ci sono requisiti da rispettare.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Imposta sostitutiva</strong> &mdash; L&apos;unica tassa che paghi nel forfettario. Sostituisce IRPEF, IRAP e addizionali. Aliquota: 15% (5% per le nuove attivit&agrave; nei primi 5 anni).</div>
              <div className="gl-item r d2"><strong>Coefficiente di redditivit&agrave;</strong> &mdash; La percentuale del fatturato su cui paghi le tasse. Dipende dal <Tip t="Il codice di 6 cifre che classifica la tua attivit&agrave;. Determina il coefficiente di redditivit&agrave; (e quindi quante tasse paghi). Sbagliare codice ATECO = pagare pi&ugrave; tasse del dovuto.">codice ATECO</Tip>: 78% per consulenti, 67% per servizi, 40% per commercio.</div>
              <div className="gl-item r d3"><strong>Contributi INPS</strong> &mdash; I versamenti obbligatori per la pensione. Sono separati dall&apos;imposta e vanno pagati comunque. Per la <Tip t="Il fondo INPS dove versano i professionisti senza cassa previdenziale propria. Aliquota: 26,07% sul reddito imponibile.">gestione separata</Tip> l&apos;aliquota &egrave; del 26,07% sul reddito.</div>
              <div className="gl-item r d4"><strong>Flat tax</strong> &mdash; Un altro nome per l&apos;imposta sostitutiva del forfettario. &quot;Flat&quot; perch&eacute; l&apos;aliquota &egrave; fissa (15% o 5%), non cresce con il reddito come l&apos;IRPEF.</div>
              <div className="gl-item r d1"><strong>Codice ATECO</strong> &mdash; Il codice che classifica la tua attivit&agrave;. Determina il coefficiente di redditivit&agrave; e l&apos;inquadramento INPS. Sbagliarlo significa pagare pi&ugrave; tasse.</div>
              <div className="gl-item r d2"><strong>Marca da bollo</strong> &mdash; Nelle fatture forfettarie sopra i 77,47&euro; devi applicare una marca da bollo da 2&euro; (fisica o virtuale). &Egrave; un costo del forfettario che in ordinario non c&apos;&egrave;.</div>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi pu&ograve; accedere</div>
            <h2>Requisiti per il forfettario 2026</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Fatturato sotto 85.000&euro; lordi/anno</strong><span className="note">Riferito all&apos;anno precedente. Se apri ora, nessun limite il primo anno (proporzionato ai giorni)</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Reddito da lavoro dipendente sotto 30.000&euro;</strong><span className="note">Se hai anche un lavoro dipendente. Se ti sei licenziato nell&apos;anno precedente, non conta</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u274C'}</div><div className="clb"><strong>Non fatturare al tuo ex datore di lavoro</strong><span className="note">N&eacute; a soggetti riconducibili. Regola per evitare le &quot;finte P.IVA&quot;</span></div></li>
              <li className="cli r d4"><div className="ci">{'\u274C'}</div><div className="clb"><strong>Non avere partecipazioni in societ&agrave; di persone</strong><span className="note">O in SRL con attivit&agrave; connessa alla tua</span></div></li>
            </ul>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} La regola del 5%</div><p>Per pagare solo il <strong>5%</strong> (invece del 15%) i primi 5 anni, non devi aver avuto una P.IVA con la stessa attivit&agrave; nei 3 anni precedenti. Se hai avuto una P.IVA come programmatore e ne apri una come consulente marketing, il 5% spetta.</p></div>
          </div>

          {/* QUANTO PAGHI */}
          <div className="sec r" id="tasse">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto paghi davvero</h2>
            <p>Nel forfettario paghi due cose: l&apos;<Tip t="L'unica tassa del forfettario. 15% sul reddito imponibile (5% per i primi 5 anni). Sostituisce IRPEF, IRAP e addizionali.">imposta sostitutiva</Tip> e i <Tip t="I versamenti obbligatori per la pensione. Per la gestione separata INPS: 26,07% sul reddito imponibile. Per artigiani/commercianti: circa 4.500&euro;/anno di minimo.">contributi INPS</Tip>. Il calcolo funziona cos&igrave;:</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Fatturato lordo</strong><p>Tutto quello che hai incassato nell&apos;anno. Es: 40.000&euro;.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>&times; Coefficiente di redditivit&agrave;</strong><p>Es: 78% (consulente). Reddito imponibile: 40.000 &times; 78% = 31.200&euro;.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Imposta sostitutiva</strong><p>15% di 31.200&euro; = <strong>4.680&euro;</strong> (o 1.560&euro; se al 5%).</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Contributi INPS</strong><p>26,07% di 31.200&euro; = <strong>8.134&euro;</strong> (gestione separata). Deducibili l&apos;anno dopo.</p></div></div>
            </div>

            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} I contributi INPS pesano pi&ugrave; delle tasse</div><p>Nel forfettario la sorpresa pi&ugrave; grande sono i <strong>contributi INPS</strong>, non le tasse. Su un fatturato di 40.000&euro;, paghi ~4.700&euro; di imposta ma ~8.100&euro; di INPS. <strong>Totale: circa 12.800&euro;</strong>. Netto in tasca: ~27.200&euro;. Importante saperlo prima di aprire.</p></div>
          </div>

          {/* COEFFICIENTI */}
          <div className="sec r" id="coefficienti">
            <div className="sec-tag">Tabella</div>
            <h2>Coefficienti di redditivit&agrave; per attivit&agrave;</h2>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Attivit&agrave;</th><th>Coeff.</th><th>Su 40k&euro; fatturi, paghi tasse su</th></tr></thead>
                <tbody>
                  <tr><td>Consulenti, professionisti, freelance</td><td><strong>78%</strong></td><td>31.200&euro;</td></tr>
                  <tr><td>Istruttori, guide, formatori</td><td><strong>67%</strong></td><td>26.800&euro;</td></tr>
                  <tr><td>Servizi di alloggio e ristorazione</td><td><strong>40%</strong></td><td>16.000&euro;</td></tr>
                  <tr><td>Commercio all&apos;ingrosso e al dettaglio</td><td><strong>40%</strong></td><td>16.000&euro;</td></tr>
                  <tr><td>Costruzioni e attivit&agrave; immobiliari</td><td><strong>86%</strong></td><td>34.400&euro;</td></tr>
                  <tr><td>Agenti e intermediari di commercio</td><td><strong>62%</strong></td><td>24.800&euro;</td></tr>
                  <tr><td>Attivit&agrave; dei servizi di ristorazione</td><td><strong>40%</strong></td><td>16.000&euro;</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Il coefficiente dipende dal codice ATECO</div><p>Scegliere il <Tip t="Il codice di 6 cifre che identifica la tua attivit&agrave;. Determina il coefficiente e l'inquadramento INPS. Un commercialista ti aiuta a sceglierlo correttamente.">codice ATECO</Tip> giusto &egrave; fondamentale. Due attivit&agrave; simili possono avere coefficienti diversi. Un errore qui significa pagare pi&ugrave; tasse per tutta la vita della P.IVA.</p></div>
          </div>

          {/* PRO E CONTRO */}
          <div className="sec r" id="limiti">
            <div className="sec-tag">Vantaggi e limiti</div>
            <h2>Quando conviene (e quando no)</h2>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th></th><th>Forfettario</th><th>Ordinario</th></tr></thead>
                <tbody>
                  <tr><td><strong>Tassazione</strong></td><td className="tg">5-15% (flat)</td><td>23-43% (IRPEF scaglioni)</td></tr>
                  <tr><td><strong>IVA</strong></td><td>Non la addebiti</td><td className="tg">La addebiti e la detrai</td></tr>
                  <tr><td><strong>Costi</strong></td><td>A forfait (coefficiente)</td><td className="tg">Deduci i costi reali</td></tr>
                  <tr><td><strong>Contabilit&agrave;</strong></td><td className="tg">Semplicissima</td><td>Registri IVA, F24 mensili</td></tr>
                  <tr><td><strong>Limite fatturato</strong></td><td>85.000&euro;</td><td className="tg">Nessuno</td></tr>
                  <tr><td><strong>Per chi conviene</strong></td><td className="tg">Pochi costi, clienti privati</td><td>Molti costi, clienti aziendali</td></tr>
                </tbody>
              </table>
            </div>

            <div className="aff-block r">
              <div className="aff-label">Strumento consigliato</div>
              <div className="aff-body">
                <div className="aff-left">
                  <div className="aff-title">Fiscozen &mdash; Commercialista online per forfettari</div>
                  <div className="aff-text">Apertura P.IVA gratuita, fatturazione elettronica, scadenze, F24, dichiarazione dei redditi. Commercialista dedicato. Tutto incluso.</div>
                  <div className="aff-note">* Link in partnership &mdash; se ti iscrivi, ZeroBurocrazia riceve una piccola commissione. A te non cambia nulla sul prezzo.</div>
                </div>
                <a href="FISCOZEN_LINK" target="_blank" rel="noopener sponsored" className="aff-btn">Prova Fiscozen gratis {'\u2192'}</a>
              </div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Chiara, consulente marketing</h2>
            <p><strong>Chiara ha 28 anni</strong>, si &egrave; <a href="/dimissioni">dimessa</a> dal suo lavoro da dipendente (1.400&euro; netti/mese, RAL 24.000&euro;) per aprire <a href="/piva">partita IVA</a> come consulente marketing freelance. Ha scelto il forfettario con il 5% per i primi 5 anni.</p>
            <p>Il primo anno fattura <strong>35.000&euro;</strong>. Ecco quanto le resta in tasca:</p>

            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Fatturato lordo</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">35.000&euro;</span></div>
              <div className="db-row"><span className="db-label">Coefficiente redditivit&agrave; (78%)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">27.300&euro; imponibile</span></div>
              <div className="db-row"><span className="db-label">Imposta sostitutiva (5%)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">-1.365&euro;</span></div>
              <div className="db-row"><span className="db-label">INPS gestione separata (26,07%)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">-7.117&euro;</span></div>
              <div className="db-row"><span className="db-label">Commercialista online</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">incluso</span></div>
              <div className="db-row db-total"><span className="db-label">Netto in tasca</span><span className="db-val">~26.219&euro;</span></div>
            </div>

            <p>Da dipendente prendeva 16.800&euro; netti/anno. Da forfettaria con lo stesso impegno ne porta a casa <strong>26.200&euro;</strong>. Il salto &egrave; di quasi <strong>10.000&euro;</strong> in pi&ugrave; &mdash; e lavora per s&eacute; stessa.</p>

            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} La morale</div><p>Il forfettario &egrave; un&apos;arma potente per chi inizia. Tassazione bassa, contabilit&agrave; semplice, zero IVA. Ma devi sapere quanto INPS pagherai (pi&ugrave; delle tasse!) e scegliere il codice ATECO giusto dal primo giorno.</p></div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/piva" className="rc"><span className="rc-e">{'\uD83D\uDCBC'}</span><div className="rc-t">Apro partita IVA</div><div className="rc-d">La guida completa: come aprirla, costi, INPS e regime fiscale.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/fattura-elettronica" className="rc"><span className="rc-e">{'\uD83D\uDCE8'}</span><div className="rc-t">Fattura elettronica</div><div className="rc-d">Come fare la fattura elettronica, obblighi e strumenti gratis.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/dimissioni" className="rc"><span className="rc-e">{'\u270D\uFE0F'}</span><div className="rc-t">Dimissioni volontarie</div><div className="rc-d">Ti dimetti per metterti in proprio? Leggi prima questa.</div><span className="rc-ar">{'\u2192'}</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/regime-forfetario" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Regole forfettario</div><div className="sbtool-d">Requisiti e limiti ufficiali</div></div></a>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.iscrizione-alla-gestione-artigiani-e-commercianti-50498.iscrizione-alla-gestione-artigiani-e-commercianti.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Contributi INPS</div><div className="sbtool-d">Gestione separata e artigiani</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/comunicazioni/fatture-e-corrispettivi" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Fatture online</div><div className="sbtool-d">Portale gratuito Agenzia Entrate</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/piva" className="sbguide">{'\uD83D\uDCBC'} Apro partita IVA<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/fattura-elettronica" className="sbguide">{'\uD83D\uDCE8'} Fattura elettronica<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/dimissioni" className="sbguide">{'\u270D\uFE0F'} Dimissioni<span className="sbg-ar">{'\u2192'}</span></a>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="regime-forfettario" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
