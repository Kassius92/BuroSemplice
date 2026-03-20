import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: "Come Ottenere l\u2019Esenzione Ticket nel 2026: Requisiti, Codici e Procedura",
  description: "Esenzione ticket sanitario 2026: requisiti per reddito, età, patologia e invalidità. Codici E01-E04, come richiederla alla ASL e verificarla online.",
  keywords: ["esenzione ticket","esenzione ticket 2026","esenzione ticket sanitario","codice esenzione E01","esenzione reddito","esenzione patologia","ticket sanitario","non pagare ticket","esenzione ticket come richiederla"],
  alternates: { canonical: 'https://zeroburocrazia.it/esenzione-ticket' },
  openGraph: {
    title: "Esenzione Ticket Sanitario 2026: chi non paga, codici e come richiederla",
    description: "Esenzione ticket sanitario 2026: requisiti per reddito, età, patologia e invalidità. Codici E01-E04, come richiederla alla ASL e verificarla online.",
    url: 'https://zeroburocrazia.it/esenzione-ticket',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogesenzioneticket.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogesenzioneticket.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'reddito', label: "Per reddito" },
  { id: 'patologia', label: "Per patologia" },
  { id: 'invalidita', label: "Per invalidità" },
  { id: 'come', label: "Come richiederla" },
  { id: 'verifica', label: "Verifica online", bh: true },
  { id: 'errori', label: "Errori comuni", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "Come faccio a sapere se ho diritto all’esenzione?", a: "Il modo più veloce: <strong>chiedi al tuo medico di base</strong>. Vede i codici esenzione nel sistema quando scrive la ricetta. Oppure controlla online sul portale del Sistema Tessera Sanitaria o sul Fascicolo Sanitario Elettronico della tua Regione, con SPID." },
  { q: "L’esenzione per reddito è automatica?", a: "Per <strong>E01, E03 e E04 sì</strong> — il Sistema Tessera Sanitaria verifica i dati automaticamente. Per <strong>E02 (disoccupati) no</strong>: devi presentare un’autocertificazione alla ASL ogni anno, entro il 31 marzo." },
  { q: "Per l’esenzione serve l’ISEE?", a: "<strong>No.</strong> L’esenzione ticket si basa sul reddito complessivo lordo del nucleo familiare, non sull’ISEE. Sono due cose diverse. Però alcune Regioni prevedono esenzioni aggiuntive legate all’ISEE — verifica con la tua ASL." },
  { q: "Quanto dura l’esenzione?", a: "Dipende dal tipo. <strong>Per reddito</strong>: scade il 31 marzo di ogni anno (o il 31 dicembre per le esenzioni regionali). <strong>Per patologia cronica</strong>: dipende dalla malattia, alcune sono permanenti, altre richiedono rinnovo (vedi il decreto 23/11/2012). <strong>Per invalidità</strong>: segue la validità del verbale." },
  { q: "Ho una patologia cronica ma non ho l’esenzione. Cosa faccio?", a: "Fatti rilasciare una <strong>certificazione</strong> da un medico specialista di struttura pubblica o privata accreditata. Portala alla ASL di residenza con la tessera sanitaria. La ASL rilascia l’attestato di esenzione con il codice. Da quel momento non paghi più il ticket per le prestazioni legate alla tua patologia." },
  { q: "L’esenzione vale in tutta Italia?", a: "I codici nazionali (E01-E04 e quelli per patologia) <strong>valgono in tutta Italia</strong>. Le esenzioni regionali aggiuntive (es. E90, E91, E92 in Toscana) valgono solo nella Regione che le prevede. Se ti sposti, verifica con la nuova ASL." },
  { q: "Posso avere più esenzioni contemporaneamente?", a: "<strong>Sì.</strong> Puoi avere sia l’esenzione per reddito che quella per patologia. Il medico userà il codice più vantaggioso per ogni ricetta. Ad esempio: se hai E01 (reddito) e 013 (diabete), per gli esami del diabete usa il 013, per una visita non correlata usa l’E01." },
  { q: "Il superticket esiste ancora?", a: "<strong>No.</strong> Il superticket di 10€ sulle prestazioni specialistiche è stato eliminato dal 1° settembre 2020. Non si paga più." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Esenzione Ticket Sanitario 2026: chi non paga, codici e come richiederla",
      description: "Esenzione ticket sanitario 2026: requisiti per reddito, età, patologia e invalidità. Codici E01-E04, come richiederla alla ASL e verificarla online.",
      url: '/esenzione-ticket',
      image: 'ogesenzioneticket.png',
      datePublished: '2026-03-19',
      dateModified: '2026-03-19',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-salute">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
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
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83C\uDFE5'} Salute</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Esenzione <em>ticket</em><br/>sanitario</h1>
            <p className="hero-sub">Chi non paga il ticket su visite, esami e farmaci. Codici, requisiti, come richiederla. E come verificare online se ce l&apos;hai gi&agrave;.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDC8A'} Visite, esami, farmaci gratis</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Ministero della Salute &middot; ARERA &middot; INPS &middot; DPCM LEA 12/01/2017</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0&euro;</div><div className="hl">ticket per chi ha diritto<br/>visite, esami, farmaci</div></div>
            <div className="hstat"><div className="hn">36.152&euro;</div><div className="hl">soglia reddito E01<br/>(under 6 e over 65)</div></div>
            <div className="hstat"><div className="hn">64</div><div className="hl">patologie croniche<br/>esenti da ticket</div></div>
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
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} ISEE</a>
              <a href="/spid" className="ps">{'\uD83D\uDD10'} SPID</a>
              <a href="/bonus-bollette" className="ps">{'\uD83D\uDCA1'} Bonus bollette</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.salute.gov.it/new/it/tema/esenzioni-dal-ticket/" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE5'} Ministero della Salute</a>
              <a href="https://sistemats1.sanita.finanze.it/portale/esenzioni-da-reddito-cittadini" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83D\uDD0D'} Verifica esenzione online</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Ticket</strong> &mdash; la quota che il cittadino paga per visite specialistiche, esami e farmaci del SSN. Pu&ograve; arrivare a 36,15&euro; a ricetta pi&ugrave; il costo del farmaco.</div>
              <div className="gl-item r d2"><strong>SSN</strong> &mdash; Servizio Sanitario Nazionale &mdash; il sistema pubblico che eroga le prestazioni sanitarie in Italia.</div>
              <div className="gl-item r d3"><strong>ASL</strong> &mdash; Azienda Sanitaria Locale &mdash; l&apos;ente che gestisce i servizi sanitari nel tuo territorio. &Egrave; dove si chiede l&apos;esenzione.</div>
              <div className="gl-item r d4"><strong>Codice esenzione</strong> &mdash; un codice alfanumerico (es. E01, 013) che identifica il tipo di esenzione. Va indicato sulla ricetta dal medico.</div>
              <div className="gl-item r d1"><strong>Sistema TS</strong> &mdash; il Sistema Tessera Sanitaria del Ministero dell&apos;Economia. Verifica automaticamente i requisiti di reddito per l&apos;esenzione.</div>
              <div className="gl-item r d2"><strong>FSE</strong> &mdash; Fascicolo Sanitario Elettronico &mdash; il tuo fascicolo medico digitale. Accessibile con SPID, contiene anche i codici di esenzione attivi.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDC8A'}</div><div className="sn">0&euro;</div><div className="sl">ticket per chi ha diritto<br/>visite, esami, farmaci</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDC76'}</div><div className="sn">&lt;6 anni</div><div className="sl">esenzione automatica<br/>con reddito &lt;36.152&euro;</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83E\uDDD3'}</div><div className="sn">&gt;65 anni</div><div className="sl">esenzione automatica<br/>con reddito &lt;36.152&euro;</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">E01-E04</div><div className="sl">codici per reddito<br/>4 categorie principali</div></div>
                <div className="sc r d1"><div className="si">{'\uD83E\uDE7A'}</div><div className="sn">64</div><div className="sl">patologie croniche<br/>esenti senza limiti reddito</div></div>
                <div className="sc r d2"><div className="si">{'\uD83C\uDFE5'}</div><div className="sn">ASL</div><div className="sl">dove si richiede<br/>o online con SPID</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;esenzione ticket</h2>
            <p>Il <strong>ticket sanitario</strong> &egrave; la quota che paghi ogni volta che fai una visita specialistica, un esame o ritiri un farmaco tramite il Servizio Sanitario Nazionale. Pu&ograve; costare fino a <strong>36,15&euro; per ricetta</strong> &mdash; non poco se devi fare controlli regolari.</p>

            <p>L&apos;esenzione ticket &egrave; il <strong>diritto a non pagare</strong> questa quota, in tutto o in parte. Non &egrave; un rimborso: semplicemente, al momento della visita o in farmacia, non ti viene chiesto nulla. Il medico scrive il codice di esenzione sulla ricetta e il gioco &egrave; fatto.</p>

            <p>Ci sono <strong>quattro motivi</strong> per cui puoi essere esente: reddito basso, et&agrave; (bambini e anziani), patologia cronica certificata, o invalidit&agrave; riconosciuta. Molti italiani hanno diritto all&apos;esenzione e <strong>non lo sanno</strong> &mdash; continuano a pagare ticket che potrebbero evitare.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} L&apos;esenzione non copre tutto</div>
              <p>L&apos;esenzione per <strong>patologia</strong> copre solo le prestazioni legate a quella specifica malattia. L&apos;esenzione per <strong>reddito</strong> copre tutte le visite e gli esami specialistici (ma non i farmaci di fascia C). L&apos;esenzione per <strong>invalidit&agrave; al 100%</strong> copre tutto. Capire quale tipo hai &egrave; fondamentale per sapere cosa puoi ottenere gratis.</p>
            </div>
          </div>

          {/* REDDITO */}
          <div className="sec r" id="reddito">
            <div className="sec-tag">Per reddito ed età</div>
            <h2>Esenzione per reddito: codici E01, E02, E03, E04</h2>
            <p>La forma pi&ugrave; comune di esenzione. Si basa sul <strong>reddito complessivo del nucleo familiare</strong> (non l&apos;ISEE) e in alcuni casi sull&apos;et&agrave;. Ecco i quattro codici nazionali:</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Codice</th><th>Chi ne ha diritto</th><th>Soglia reddito</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">E01</td><td><strong>Bambini &lt;6 anni e anziani &gt;65 anni</strong> + familiari a carico</td><td className="cv cfr">36.151,98&euro; <span className="badge">Pi&ugrave; diffuso</span></td></tr>
                  <tr><td className="cv">E02</td><td><strong>Disoccupati</strong> iscritti al Centro per l&apos;Impiego + familiari a carico</td><td className="cv">8.263,31&euro; (11.362&euro; con coniuge, +516&euro; per figlio)</td></tr>
                  <tr><td className="cv">E03</td><td><strong>Titolari di assegno sociale</strong> (ex pensione sociale) + familiari a carico</td><td className="cv">Automatica</td></tr>
                  <tr><td className="cv">E04</td><td><strong>Pensionati al minimo</strong> &gt;60 anni + familiari a carico</td><td className="cv">8.263,31&euro; (stesse soglie di E02)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Reddito familiare, non ISEE</div>
              <p>Per l&apos;esenzione ticket conta il <strong>reddito complessivo lordo</strong> del nucleo familiare fiscale (quello che leggi sulla CU o sul 730), <strong>non l&apos;ISEE</strong>. Sono due numeri diversi. Un ISEE basso non ti d&agrave; automaticamente l&apos;esenzione, e viceversa. Se hai dubbi, controlla la CU dell&apos;anno precedente.</p>
            </div>

            <h3>Come funziona E01 (il pi&ugrave; comune)</h3>
            <p>Se hai <strong>meno di 6 anni o pi&ugrave; di 65 anni</strong> e il reddito del tuo nucleo familiare non supera 36.151,98&euro;, hai diritto all&apos;esenzione totale. Per i bambini e per gli over 65, nella maggior parte dei casi <strong>&egrave; automatica</strong>: il Sistema Tessera Sanitaria incrocia i dati dell&apos;Agenzia delle Entrate e attiva l&apos;esenzione. Il medico la vede direttamente quando scrive la ricetta.</p>

            <h3>Come funziona E02 (disoccupati)</h3>
            <p>Se sei <strong>disoccupato</strong> e iscritto al Centro per l&apos;Impiego, con un reddito familiare sotto 8.263,31&euro; (che sale a 11.362&euro; con il coniuge a carico), hai diritto all&apos;esenzione. Questa <strong>non &egrave; automatica</strong>: devi presentare un&apos;autocertificazione alla ASL ogni anno. Scade il 31 marzo e va rinnovata.</p>

            <h3>E03 e E04</h3>
            <p><strong>E03</strong> &egrave; per chi percepisce l&apos;assegno sociale &mdash; di solito gi&agrave; attiva automaticamente. <strong>E04</strong> &egrave; per i pensionati al minimo con pi&ugrave; di 60 anni, con le stesse soglie di reddito dell&apos;E02.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Le esenzioni E01, E03, E04 spesso sono gi&agrave; attive</div>
              <p>Il sistema Tessera Sanitaria verifica automaticamente i requisiti di reddito ed et&agrave; per E01, E03 e E04. Se ne hai diritto, il codice compare gi&agrave; quando il medico ti fa la ricetta. Se non compare, puoi presentare un&apos;autocertificazione alla ASL. L&apos;unica che richiede sempre autocertificazione &egrave; la <strong>E02</strong> (disoccupati).</p>
            </div>

            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Attenzione: per il ticket conta il reddito, non l&apos;ISEE. Ma l&apos;ISEE ti serve per altri bonus.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* PATOLOGIA */}
          <div className="sec r" id="patologia">
            <div className="sec-tag">Per malattia</div>
            <h2>Esenzione per patologia cronica</h2>
            <p>Se hai una <strong>malattia cronica certificata</strong>, hai diritto all&apos;esenzione dal ticket per tutte le prestazioni legate a quella malattia &mdash; visite specialistiche, esami, farmaci. <strong>Senza limiti di reddito</strong>: anche se guadagni molto, l&apos;esenzione spetta.</p>

            <p>Attualmente ci sono <strong>64 codici di esenzione</strong> per patologie croniche, definiti dal DPCM LEA del 2017. Le pi&ugrave; comuni:</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Codice</th><th>Patologia</th></tr></thead>
                <tbody>
                  <tr><td className="cv">013</td><td><strong>Diabete</strong> (tipo 1 e tipo 2)</td></tr>
                  <tr><td className="cv">031</td><td><strong>Ipertensione arteriosa</strong> (con danno d&apos;organo)</td></tr>
                  <tr><td className="cv">048</td><td><strong>Tumori maligni</strong> (tutte le neoplasie)</td></tr>
                  <tr><td className="cv">002</td><td><strong>Affezioni del sistema circolatorio</strong> (cardiopatie)</td></tr>
                  <tr><td className="cv">006</td><td><strong>Asma bronchiale</strong></td></tr>
                  <tr><td className="cv">012</td><td><strong>Morbo di Crohn e colite ulcerosa</strong></td></tr>
                  <tr><td className="cv">023</td><td><strong>Insufficienza renale cronica</strong></td></tr>
                  <tr><td className="cv">029</td><td><strong>Ipotiroidismo</strong> (anche tiroidite di Hashimoto)</td></tr>
                  <tr><td className="cv">035</td><td><strong>Morbo di Parkinson</strong></td></tr>
                  <tr><td className="cv">057</td><td><strong>BPCO</strong> (bronco-pneumopatia cronica ostruttiva) &mdash; nuova</td></tr>
                  <tr><td className="cv">063</td><td><strong>Endometriosi</strong> stadio III-IV &mdash; nuova</td></tr>
                </tbody>
              </table>
            </div>

            <p>L&apos;elenco completo &egrave; consultabile sulla <a href="https://www.salute.gov.it/BancheDati/anagrafi/MCR" target="_blank" rel="noopener noreferrer">banca dati del Ministero della Salute</a>.</p>

            <h3>Come si ottiene</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'🩺'}</div><div className="clb"><strong>Serve una certificazione specialistica</strong><span className="note">Rilasciata da un medico specialista di una struttura pubblica o privata accreditata. Non basta il medico di base.</span></div></li>
              <li className="cli r d2"><div className="ci">{'�\uDFE5'}</div><div className="clb"><strong>Portala alla ASL di residenza</strong><span className="note">La ASL rilascia l&apos;attestato di esenzione con il codice della patologia e l&apos;elenco delle prestazioni esenti.</span></div></li>
              <li className="cli r d3"><div className="ci">{'�\uDCC4'}</div><div className="clb"><strong>Il medico inserisce il codice sulla ricetta</strong><span className="note">Da quel momento, per le prestazioni legate alla tua patologia, non paghi pi&ugrave; il ticket.</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} L&apos;esempio di Maria (dal Ministero della Salute)</div>
              <p>Maria ha il <strong>diabete</strong>. Per anni ha pagato 36,15&euro; a ricetta per ogni esame del sangue e visita diabetologica. Dopo aver portato la certificazione alla ASL e ottenuto il codice <strong>013</strong>, tutti gli esami legati al diabete sono diventati gratuiti: glicemia, emoglobina glicata, visita oculistica per retinopatia, esame dei piedi. Risparmio: <strong>oltre 300&euro; all&apos;anno</strong>.</p>
            </div>
          </div>

          {/* INVALIDITA */}
          <div className="sec r" id="invalidita">
            <div className="sec-tag">Per invalidità</div>
            <h2>Esenzione per invalidit&agrave;</h2>
            <p>L&apos;esenzione pi&ugrave; ampia. Se hai un&apos;<strong>invalidit&agrave; civile riconosciuta</strong>, il livello di copertura dipende dalla percentuale:</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Condizione</th><th>Codice</th><th>Cosa copre</th></tr></thead>
                <tbody>
                  <tr><td>Invalidi civili &gt;2/3 (67-99%)</td><td className="cv">C03</td><td>Prestazioni correlate alla patologia invalidante</td></tr>
                  <tr className="hl"><td className="cv"><strong>Invalidi civili 100%</strong></td><td className="cv cfr">C04 <span className="badge">Totale</span></td><td><strong>Tutte le prestazioni &mdash; esenzione totale</strong></td></tr>
                  <tr><td>Invalidi 100% + accompagnamento</td><td className="cv">C05</td><td>Tutte le prestazioni &mdash; esenzione totale</td></tr>
                  <tr><td>Ciechi e sordomuti</td><td className="cv">C06</td><td>Tutte le prestazioni</td></tr>
                  <tr><td>Invalidi di guerra (cat. I-V)</td><td className="cv">G01</td><td>Tutte le prestazioni</td></tr>
                  <tr><td>Invalidi del lavoro &gt;2/3</td><td className="cv">L02</td><td>Tutte le prestazioni</td></tr>
                </tbody>
              </table>
            </div>

            <p><strong>Attenzione:</strong> con invalidit&agrave; tra il 67% e il 99% (codice C03) l&apos;esenzione copre <strong>solo</strong> le prestazioni correlate alla patologia invalidante, non tutte. Con il 100% (C04/C05) copre tutto.</p>
          </div>

          {/* COME */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come richiederla</h2>
            <p>Dipende dal tipo di esenzione. Ecco la procedura per ognuna:</p>

            <h3>Per reddito (E01, E03, E04) &mdash; spesso automatica</h3>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Il sistema verifica automaticamente</strong>
                  <p>Il Sistema Tessera Sanitaria (MEF) incrocia i dati dell&apos;Agenzia delle Entrate con la tua anagrafica. Se rientri nei requisiti, l&apos;esenzione viene attivata senza che tu faccia nulla.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Verifica se &egrave; attiva</strong>
                  <p>Chiedi al medico di base oppure controlla sul portale del Sistema TS (con SPID) o sul Fascicolo Sanitario Elettronico della tua Regione.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Se non &egrave; attiva: autocertificazione alla ASL</strong>
                  <p>Se hai diritto ma non risulti in banca dati, vai alla ASL con un documento d&apos;identit&agrave; e compila il modulo di autocertificazione. Oppure fallo online con SPID, se la tua Regione lo prevede.</p>
                </div>
              </div>
            </div>

            <h3>Per disoccupati (E02) &mdash; autocertificazione obbligatoria</h3>
            <p>L&apos;E02 non &egrave; mai automatica. Devi presentare <strong>ogni anno</strong> l&apos;autocertificazione alla ASL (o online con SPID). Scade il <strong>31 marzo</strong> e va rinnovata. Servono: documento d&apos;identit&agrave;, tessera sanitaria, dichiarazione di immediata disponibilit&agrave; (DID) del Centro per l&apos;Impiego.</p>

            <h3>Per patologia cronica</h3>
            <p>Porta la <strong>certificazione dello specialista</strong> (di struttura pubblica o privata accreditata) alla ASL. La ASL rilascia l&apos;attestato con il codice. Durata variabile in base alla patologia &mdash; alcune sono permanenti, altre richiedono rinnovo.</p>

            <h3>Per invalidit&agrave;</h3>
            <p>Se hai gi&agrave; il <strong>verbale della commissione medica</strong> che riconosce l&apos;invalidit&agrave;, portalo alla ASL. L&apos;esenzione viene registrata nel sistema.</p>

            <div className="ib mon r">
              <div className="ib-t">{'💶'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Chiedi al tuo medico di base.</strong> &Egrave; il modo pi&ugrave; veloce per sapere se hai gi&agrave; un&apos;esenzione attiva. Il medico vede il tuo codice direttamente nel sistema quando scrive la ricetta. Se non compare, ti dice esattamente cosa fare per ottenerla. Non serve andare alla ASL come prima cosa &mdash; il medico di base &egrave; il punto di partenza.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Serve per verificare l&apos;esenzione online e per accedere al Fascicolo Sanitario Elettronico.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* VERIFICA */}
          <div className="sec breve-hide r" id="verifica">
            <div className="sec-tag">Online</div>
            <h2>Come verificare l&apos;esenzione online</h2>
            <p>Puoi controllare se hai un&apos;esenzione attiva senza andare alla ASL:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDD0D'}</div><div className="clb"><strong>Portale Sistema Tessera Sanitaria</strong><span className="note">Vai su sistemats1.sanita.finanze.it/portale/esenzioni-da-reddito-cittadini, accedi con SPID o CIE. Vedi i tuoi codici esenzione attivi, la scadenza e puoi stampare l&apos;attestato. Disponibile in: Puglia, Sardegna, Sicilia, Umbria, Molise, Veneto, Marche, Abruzzo, Calabria, Bolzano.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCF1'}</div><div className="clb"><strong>Fascicolo Sanitario Elettronico (FSE)</strong><span className="note">Ogni Regione ha il suo portale FSE (es. &ldquo;Tu Salute&rdquo; in Piemonte, &ldquo;FSE&rdquo; in Lombardia). Accedi con SPID e trovi le esenzioni attive nella sezione dedicata.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC68\u200D\u2695\uFE0F'}</div><div className="clb"><strong>Chiedi al medico di base</strong><span className="note">Il medico vede i tuoi codici esenzione nel sistema quando scrive la ricetta. &Egrave; il modo pi&ugrave; semplice e immediato.</span></div></li>
            </ul>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che fanno perdere soldi</h2>
            <div className="ib warn r"><div className="ib-t">{'⚠️'} Non sapere di avere diritto all&apos;esenzione</div><p>L&apos;errore pi&ugrave; costoso. Milioni di italiani pagano ticket che potrebbero evitare. Se hai pi&ugrave; di 65 anni, meno di 6 anni, una patologia cronica, o sei disoccupato: <strong>verifica subito</strong>. Basta chiedere al medico di base.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'⚠️'} Confondere ISEE e reddito</div><p>Per l&apos;esenzione ticket serve il <strong>reddito complessivo lordo</strong> (dalla CU o dal 730), non l&apos;ISEE. Sono numeri diversi. Un ISEE basso non ti d&agrave; automaticamente l&apos;esenzione ticket, e un ISEE alto non te la toglie necessariamente.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'⚠️'} Non rinnovare l&apos;E02 entro il 31 marzo</div><p>L&apos;esenzione per disoccupati (E02) scade il 31 marzo di ogni anno. Se non la rinnovi, dal 1&deg; aprile torni a pagare il ticket. Segna la data e rinnova per tempo &mdash; si fa in 10 minuti alla ASL o online.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'⚠️'} Usare l&apos;esenzione per patologia su prestazioni non correlate</div><p>L&apos;esenzione per patologia cronica copre <strong>solo</strong> le prestazioni legate a quella specifica malattia. Se hai l&apos;esenzione per diabete (013) e fai una radiografia al ginocchio, quella la paghi. Usare il codice per prestazioni non correlate pu&ograve; portare a sanzioni.</p></div>
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
              <a href="/isee" className="rc r d1"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l’ISEE</div><div className="rc-d">L’ISEE serve per altri bonus, non per il ticket. Ma fallo comunque.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc r d2"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per verificare l’esenzione online e accedere al FSE.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/bonus-bollette" className="rc r d3"><span className="rc-e">{'\uD83D\uDCA1'}</span><div className="rc-t">Bonus bollette</div><div className="rc-d">Se hai reddito basso, probabilmente hai diritto anche a questo.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.salute.gov.it/new/it/tema/esenzioni-dal-ticket/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE5'}</span><div><div className="sbtool-n">Min. Salute</div><div className="sbtool-d">Esenzioni dal ticket</div></div></a>
            <a href="https://sistemats1.sanita.finanze.it/portale/esenzioni-da-reddito-cittadini" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83D\uDD0D'}</span><div><div className="sbtool-n">Sistema TS</div><div className="sbtool-d">Verifica esenzione online</div></div></a>
            <a href="https://www.salute.gov.it/BancheDati/anagrafi/MCR" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83D\uDCCB'}</span><div><div className="sbtool-n">Banca dati patologie</div><div className="sbtool-d">64 codici esenzione</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/bonus-bollette" className="sbguide">{'\uD83D\uDCA1'} Bonus bollette<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} 730<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
