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
  title: "Assegno di Inclusione 2026 (ex RdC): requisiti, importi e come fare domanda",
  description: "Assegno di Inclusione 2026: chi ne ha diritto, quanto spetta, requisiti ISEE, come fare domanda INPS e novità della Legge di Bilancio.",
  keywords: ["assegno di inclusione","assegno inclusione 2026","ADI 2026","ex reddito di cittadinanza","assegno inclusione requisiti","assegno inclusione importi","assegno inclusione ISEE","assegno inclusione domanda"],
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-inclusione' },
  openGraph: {
    title: "Assegno di Inclusione 2026 (ex RdC): requisiti, importi e come fare domanda",
    description: "Assegno di Inclusione 2026: chi ne ha diritto, quanto spetta, requisiti ISEE, come fare domanda INPS e novità della Legge di Bilancio.",
    url: 'https://zeroburocrazia.it/assegno-inclusione',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogassegnoinclusione.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogassegnoinclusione.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'chi', label: "Chi ne ha diritto" },
  { id: 'importi', label: "Quanto spetta" },
  { id: 'domanda', label: "Come fare domanda" },
  { id: 'novita', label: "Novità 2026", bh: true },
  { id: 'obblighi', label: "Obblighi", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "L'Assegno di Inclusione ha sostituito il Reddito di Cittadinanza?", a: "<strong>Sì.</strong> Dal 1° gennaio 2024 il Reddito di Cittadinanza non esiste più. L'ADI è la misura che lo ha sostituito, ma con requisiti più stretti: serve almeno un componente fragile nel nucleo (disabile, minore, over 60)." },
  { q: "Sono disoccupato senza figli. Ho diritto all'ADI?", a: "<strong>No</strong>, a meno che tu non abbia almeno 60 anni, una disabilità o sia in un programma di cura certificato. Se sei un adulto abile senza componenti fragili nel nucleo, puoi richiedere il <strong>Supporto Formazione e Lavoro (SFL)</strong> da 350€/mese." },
  { q: "Quanto tempo ci vuole per ricevere il primo pagamento?", a: "L'INPS ha 30 giorni per verificare la domanda. Poi devi firmare il PAD su SIISL. Il primo pagamento arriva il mese successivo alla firma. In totale: <strong>circa 2-3 mesi</strong> dalla domanda." },
  { q: "Posso lavorare mentre ricevo l'ADI?", a: "<strong>Sì.</strong> I primi 3.000€ lordi annui di reddito da lavoro non riducono l'assegno. Oltre questa soglia, l'importo viene ricalcolato trimestralmente. Devi comunicare l'avvio del lavoro entro il giorno prima dell'inizio." },
  { q: "La Carta ADI funziona come il bancomat?", a: "Sì, ma con limiti. Puoi fare spesa nei negozi, pagare bollette alle Poste, fare un bonifico per l'affitto. Puoi prelevare contante fino a un limite mensile. <strong>Non puoi</strong> usarla per giochi, scommesse, acquisti online di beni non essenziali." },
  { q: "Devo rinnovare la domanda dopo 18 mesi?", a: "<strong>Sì.</strong> L'ADI dura massimo 18 mesi. Puoi rinnovarlo per altri 12 mesi presentando una nuova domanda. Dal 2026 non c'è più il mese di sospensione tra un ciclo e l'altro, ma la prima mensilità del rinnovo è ridotta al 50%." },
  { q: "L'ISEE per l'ADI è quello normale?", a: "No, si usa l'<strong>ISEE per prestazioni familiari e per l'inclusione</strong>. Viene calcolato con le stesse regole dell'ordinario ma dal 2026 ha franchigie più alte sulla prima casa (91.500€). Chiedi al CAF di specificare questa tipologia." },
  { q: "Cosa succede se mi dimetto dal lavoro?", a: "Se ti dimetti <strong>volontariamente</strong> (senza giusta causa), perdi il diritto all'ADI per i 12 mesi successivi. Le dimissioni per giusta causa e le risoluzioni consensuali non comportano la perdita." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Assegno di Inclusione 2026 (ex RdC): requisiti, importi e come fare domanda",
      description: "Assegno di Inclusione 2026: chi ne ha diritto, quanto spetta, requisiti ISEE, come fare domanda INPS e novità della Legge di Bilancio.",
      url: '/assegno-inclusione',
      image: 'ogassegnoinclusione.png',
      datePublished: '2026-03-20',
      dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
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
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Assegno di <em>Inclusione</em></h1>
            <p className="hero-sub">Ha sostituito il Reddito di Cittadinanza. Chi ne ha diritto, quanto spetta, come fare domanda. Aggiornato con le novit&agrave; 2026.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 10 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCB0'} Fino a 500€/mese + affitto</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS &middot; Ministero del Lavoro &middot; D.L. 48/2023 &middot; Legge di Bilancio 2026 (L. 199/2025)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">500&euro;</div><div className="hl">integrazione max/mese<br/>(630&euro; per over 67)</div></div>
            <div className="hstat"><div className="hn">10.140&euro;</div><div className="hl">soglia ISEE<br/>per accedere</div></div>
            <div className="hstat"><div className="hn">18 mesi</div><div className="hl">durata massima<br/>rinnovabile 12 mesi</div></div>
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
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-di-inclusione-adi.html" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE6'} INPS &mdash; Domanda ADI</a>
              <a href="https://www.lavoro.gov.it/temi-e-priorita/decreto-lavoro/Pagine/assegno-di-inclusione" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFDB\uFE0F'} Min. Lavoro &mdash; ADI</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>ADI</strong> &mdash; Assegno di Inclusione &mdash; la misura che dal 2024 ha sostituito il Reddito di Cittadinanza.</div>
              <div className="gl-item r d2"><strong>Scala di equivalenza</strong> &mdash; un moltiplicatore che aumenta la soglia di reddito in base ai componenti del nucleo (disabili, minori, over 60). Pi&ugrave; componenti fragili hai, pi&ugrave; la soglia sale.</div>
              <div className="gl-item r d3"><strong>PAD</strong> &mdash; Patto di Attivazione Digitale &mdash; va sottoscritto sulla piattaforma SIISL dopo la domanda. Senza PAD l&apos;assegno non parte.</div>
              <div className="gl-item r d4"><strong>SIISL</strong> &mdash; Sistema Informativo per l&apos;Inclusione Sociale e Lavorativa &mdash; la piattaforma dove ti registri dopo la domanda ADI.</div>
              <div className="gl-item r d1"><strong>Carta ADI</strong> &mdash; la carta di pagamento (emessa da Poste Italiane) su cui viene caricato l&apos;assegno ogni mese. Funziona per spesa, bollette, affitto.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">500&euro;</div><div className="sl">integrazione max/mese<br/>(630&euro; per over 67)</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">10.140&euro;</div><div className="sl">soglia ISEE<br/>massima</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83C\uDFE0'}</div><div className="sn">+303&euro;</div><div className="sl">contributo affitto<br/>se sei in locazione</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">18 mesi</div><div className="sl">durata massima<br/>poi rinnovo 12 mesi</div></div>
                <div className="sc r d1"><div className="si">{'\uD83D\uDCB3'}</div><div className="sn">Carta ADI</div><div className="sl">di Poste Italiane<br/>spesa, bollette, affitto</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">per fare domanda<br/>su INPS o al CAF</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;Assegno di Inclusione</h2>
            <p>L&apos;Assegno di Inclusione (ADI) &egrave; la misura che dal <strong>1&deg; gennaio 2024</strong> ha sostituito il Reddito di Cittadinanza. &Egrave; un sostegno economico mensile per le famiglie in difficolt&agrave; che hanno almeno un componente <strong>disabile, minorenne, over 60 o in condizione di svantaggio</strong> certificata.</p>

            <p>Non &egrave; un assegno per tutti i disoccupati &mdash; &egrave; riservato ai nuclei familiari fragili. L&apos;importo viene caricato ogni mese sulla <strong>Carta ADI</strong> (emessa da Poste Italiane) e pu&ograve; essere usato per spesa, bollette, affitto e servizi.</p>

            <p>La misura &egrave; <strong>condizionata</strong>: chi la riceve deve aderire a un percorso di inclusione sociale e lavorativa, iscriversi sulla piattaforma SIISL e rispettare gli obblighi previsti, pena la decadenza.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Non confonderlo con il Supporto Formazione Lavoro</div>
              <p>Il <strong>Supporto Formazione e Lavoro (SFL)</strong> &egrave; un&apos;altra misura per chi non rientra nell&apos;ADI (perch&eacute; non ha componenti fragili nel nucleo). Vale 350&euro;/mese per 12 mesi ed &egrave; legato alla partecipazione a corsi di formazione. Sono due cose diverse.</p>
            </div>
          </div>

          {/* CHI */}
          <div className="sec r" id="chi">
            <div className="sec-tag">Requisiti</div>
            <h2>Chi ne ha diritto</h2>
            <p>Servono <strong>tre categorie di requisiti</strong> contemporaneamente: soggettivi, economici e di residenza.</p>

            <h3>1. Requisiti soggettivi (chi deve essere nel nucleo)</h3>
            <p>Il nucleo familiare deve avere <strong>almeno un componente</strong> che rientri in una di queste categorie:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u267F'}</div><div className="clb"><strong>Persona con disabilit&agrave;</strong><span className="note">Certificata ai sensi della normativa ISEE.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Minorenne</strong><span className="note">Figlio sotto i 18 anni nel nucleo familiare.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83E\uDDD3'}</div><div className="clb"><strong>Persona con almeno 60 anni</strong><span className="note">Over 60 nel nucleo familiare.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE5'}</div><div className="clb"><strong>Persona in condizione di svantaggio</strong><span className="note">Inserita in programma di cura dei servizi sociosanitari certificato dalla PA (es. dipendenze, violenza, psichiatria).</span></div></li>
            </ul>

            <h3>2. Requisiti economici</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Requisito</th><th>Soglia</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">ISEE</td><td className="cv cfr">Non superiore a 10.140&euro;</td></tr>
                  <tr><td>Reddito familiare</td><td className="cv">Inferiore a 6.500&euro;/anno &times; scala di equivalenza (8.190&euro; per nuclei di soli over 67/disabili gravi)</td></tr>
                  <tr><td>Patrimonio immobiliare</td><td className="cv">Max 30.000&euro; (esclusa prima casa fino a 150.000&euro; IMU)</td></tr>
                  <tr><td>Patrimonio mobiliare</td><td className="cv">Max 6.000&euro; (sale con componenti e disabilit&agrave;, fino a 10.000&euro;)</td></tr>
                </tbody>
              </table>
            </div>

            <h3>3. Requisiti di residenza e cittadinanza</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDDEE\uD83C\uDDF9'}</div><div className="clb"><strong>Residente in Italia da almeno 5 anni</strong><span className="note">Di cui gli ultimi 2 in modo continuativo.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Cittadino UE o extra-UE con permesso di soggiorno</strong><span className="note">Permesso UE per soggiornanti di lungo periodo, o protezione internazionale.</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Chi NON ha diritto</div>
              <p>Non ha diritto chi si &egrave; dimesso volontariamente dal lavoro nei 12 mesi precedenti (salvo dimissioni per giusta causa). Non ha diritto chi ha condanne definitive nei 10 anni precedenti la domanda.</p>
            </div>

            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Serve un ISEE valido sotto 10.140&euro;. Fallo subito, gratis al CAF.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* IMPORTI */}
          <div className="sec r" id="importi">
            <div className="sec-tag">Quanto spetta</div>
            <h2>Quanto spetta</h2>
            <p>L&apos;importo <strong>non &egrave; fisso</strong>: dipende dal reddito gi&agrave; presente nel nucleo e dalla composizione familiare. &Egrave; composto da due parti:</p>

            <h3>Parte 1: Integrazione al reddito</h3>
            <p>Lo Stato integra il tuo reddito familiare fino a una soglia di <strong>6.500&euro;/anno</strong> (circa 500&euro;/mese), moltiplicata per la scala di equivalenza del tuo nucleo. Per i nuclei composti da soli over 67 o disabili gravi, la soglia sale a <strong>8.190&euro;/anno</strong> (circa 630&euro;/mese).</p>
            <p>In pratica: se il tuo nucleo ha reddito zero, ricevi il massimo. Se ha gi&agrave; un reddito, l&apos;assegno copre la differenza.</p>

            <h3>Parte 2: Contributo affitto</h3>
            <p>Se il nucleo vive in affitto, si aggiunge un contributo fino a <strong>303&euro;/mese</strong> (3.640&euro;/anno). Per i nuclei di soli over 67 o disabili gravi, il contributo affitto arriva a <strong>162,50&euro;/mese</strong> (1.950&euro;/anno).</p>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: la famiglia di Ahmed</h3>
              <p>Ahmed vive a <strong>Napoli</strong> con la moglie e un figlio di 4 anni. Reddito familiare: <strong>zero</strong>. ISEE: <strong>3.200&euro;</strong>. Vivono in affitto (500&euro;/mese).</p>
              <p>Scala di equivalenza: 1,00 + 0,40 (moglie) + 0,15 (figlio minore) = <strong>1,55</strong></p>
              <p>Soglia reddito: 6.500&euro; &times; 1,55 = 10.075&euro;/anno &rarr; <strong>circa 840&euro;/mese</strong></p>
              <p>Integrazione reddito (reddito zero): <strong>~500&euro;/mese</strong> (tetto massimo)</p>
              <p>Contributo affitto: <strong>303&euro;/mese</strong></p>
              <div className="db-row db-total"><span className="db-label">Totale mensile</span><span className="db-val">~803&euro;/mese</span></div>
              <p>Caricati ogni mese sulla <strong>Carta ADI</strong>. Ahmed pu&ograve; usarli per spesa, bollette e pagare l&apos;affitto con bonifico dall&apos;ufficio postale.</p>
            </div>
          </div>

          {/* DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">Procedura</div>
            <h2>Come fare domanda</h2>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Fai l&apos;ISEE</strong>
                  <p>Devi avere un ISEE valido non superiore a 10.140&euro;. Fallo al CAF (gratis) o online con SPID. &Egrave; il prerequisito: senza ISEE, la domanda non parte.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Presenta la domanda all&apos;INPS</strong>
                  <p>Online su inps.it con SPID/CIE/CNS, oppure tramite CAF o patronato. L&apos;INPS ha 30 giorni per verificare i requisiti e comunicare l&apos;esito.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Iscriviti a SIISL e firma il PAD</strong>
                  <p>Dopo la domanda, registrati sulla piattaforma SIISL e sottoscrivi il Patto di Attivazione Digitale (PAD). <strong>Senza PAD l&apos;assegno non viene erogato.</strong></p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Ricevi la Carta ADI</strong>
                  <p>Se la domanda &egrave; accolta, Poste Italiane ti invia la Carta ADI. L&apos;importo viene caricato mensilmente dal mese successivo alla firma del PAD, di norma entro il 27 del mese.</p>
                </div>
              </div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Vai al CAF o al patronato.</strong> La domanda ADI &egrave; pi&ugrave; complessa del bonus bollette &mdash; ci sono requisiti incrociati, scale di equivalenza, obblighi post-domanda. Il CAF ti aiuta gratuitamente e verifica che tu abbia tutti i requisiti prima di inviare, evitando rigetti.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Serve per la domanda online e per SIISL.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* NOVITA */}
          <div className="sec breve-hide r" id="novita">
            <div className="sec-tag">Aggiornamento</div>
            <h2>Novit&agrave; 2026</h2>
            <p>La Legge di Bilancio 2026 ha introdotto modifiche importanti:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Niente pi&ugrave; mese di sospensione al rinnovo</strong><span className="note">Prima, tra un ciclo di 18 mesi e il rinnovo, c&apos;era 1 mese di stop senza assegno. Dal 2026 il rinnovo &egrave; senza interruzioni.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u26A0\uFE0F'}</div><div className="clb"><strong>Prima mensilit&agrave; del rinnovo tagliata al 50%</strong><span className="note">Il primo mese del nuovo ciclo di 12 mesi si riceve met&agrave; dell&apos;importo.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>ISEE pi&ugrave; favorevole</strong><span className="note">La franchigia sulla prima casa sale a 91.500&euro; (120.000&euro; nelle citt&agrave; metropolitane). Maggiorazioni scala di equivalenza potenziate per nuclei con figli.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCB0'}</div><div className="clb"><strong>Reddito da lavoro parzialmente escluso</strong><span className="note">Se trovi lavoro, i primi 3.000&euro; lordi annui non riducono l&apos;assegno. Incentivo a lavorare senza perdere il sostegno.</span></div></li>
            </ul>
          </div>

          {/* OBBLIGHI */}
          <div className="sec breve-hide r" id="obblighi">
            <div className="sec-tag">Cosa devi fare</div>
            <h2>Obblighi dei beneficiari</h2>
            <p>L&apos;ADI non &egrave; un assegno passivo. Chi lo riceve deve rispettare una serie di obblighi:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCDD'}</div><div className="clb"><strong>Iscriversi a SIISL e firmare il PAD</strong><span className="note">Obbligatorio entro 120 giorni dalla domanda. Senza PAD, niente pagamento.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFEB'}</div><div className="clb"><strong>Obbligo scolastico per 18-29enni</strong><span className="note">Chi non ha adempiuto l&apos;obbligo di istruzione deve iscriversi a percorsi di istruzione per adulti.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC94'}</div><div className="clb"><strong>Non rifiutare offerte di lavoro congrue</strong><span className="note">Un rifiuto senza giustificazione pu&ograve; portare alla decadenza.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCE2'}</div><div className="clb"><strong>Comunicare variazioni</strong><span className="note">Qualsiasi cambio di reddito, composizione nucleo, o avvio di attivit&agrave; lavorativa va comunicato tempestivamente.</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} La decadenza &egrave; reale</div>
              <p>Chi non firma il PAD, non si presenta ai servizi sociali, rifiuta offerte di lavoro o non comunica variazioni <strong>perde l&apos;assegno</strong>. Non sono minacce teoriche: l&apos;INPS effettua controlli incrociati e le decadenze sono frequenti.</p>
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
              <a href="/isee" className="rc r d1"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Serve ISEE sotto 10.140€. Come farlo gratis.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/bonus-bollette" className="rc r d2"><span className="rc-e">{'\uD83D\uDCA1'}</span><div className="rc-t">Bonus bollette</div><div className="rc-d">Con ISEE basso hai diritto anche a questo.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/naspi" className="rc r d3"><span className="rc-e">{'\uD83D\uDCC9'}</span><div className="rc-t">NASpI</div><div className="rc-d">Se hai perso il lavoro, potresti avere diritto anche alla disoccupazione.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-di-inclusione-adi.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Domanda ADI online</div></div></a>
            <a href="https://www.lavoro.gov.it/temi-e-priorita/decreto-lavoro/Pagine/assegno-di-inclusione" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFDB\uFE0F'}</span><div><div className="sbtool-n">Min. Lavoro</div><div className="sbtool-d">Informazioni ufficiali ADI</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/bonus-bollette" className="sbguide">{'\uD83D\uDCA1'} Bonus bollette<span className="sbg-ar">&rarr;</span></a>
            <a href="/naspi" className="sbguide">{'\uD83D\uDCC9'} NASpI<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
