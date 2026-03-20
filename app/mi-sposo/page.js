import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizSposo from '@/components/QuizSposo';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa',
  description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
  keywords: ["matrimonio", "sposarsi 2026", "documenti matrimonio", "pubblicazioni matrimonio", "comunione dei beni", "separazione dei beni", "congedo matrimoniale", "matrimonio civile", "costo matrimonio", "nulla osta"],
  alternates: { canonical: 'https://zeroburocrazia.it/mi-sposo' },
  openGraph: {
    title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa',
    description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
    url: 'https://zeroburocrazia.it/mi-sposo',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogmisposo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Come Sposarsi nel 2026: Documenti, Costi e Procedura Completa',
    description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
    images: ['https://zeroburocrazia.it/ogmisposo.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'documenti', label: 'Documenti' },
  { id: 'pubblicazioni', label: 'Pubblicazioni' },
  { id: 'costi', label: 'Costi reali' },
  { id: 'regime', label: 'Regime patrimoniale' },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto tempo prima devo iniziare le pratiche?", a: "<strong>Almeno 2-3 mesi prima</strong> della data. Le pubblicazioni richiedono 8 giorni di affissione + 3 giorni di attesa, e prima ancora devi raccogliere i documenti e fissare l\u2019appuntamento in Comune. Se uno dei due \u00E8 straniero, i tempi si allungano per il nulla osta." },
  { q: "Posso sposarmi in un Comune diverso da quello di residenza?", a: "<strong>S\u00EC.</strong> Le pubblicazioni si fanno nel Comune di residenza (di uno dei due sposi), ma la cerimonia pu\u00F2 essere celebrata in qualsiasi Comune d\u2019Italia. Serve una delega dal Comune di residenza a quello della cerimonia." },
  { q: "Quanti testimoni servono?", a: "<strong>Due testimoni</strong>, maggiorenni e con documento d\u2019identit\u00E0 valido. Possono essere amici, parenti, chiunque. Non c\u2019\u00E8 un limite massimo ufficiale, ma il Comune accetta solo 2 firme sull\u2019atto." },
  { q: "Posso revocare le pubblicazioni?", a: "<strong>S\u00EC</strong>, in qualsiasi momento prima della cerimonia. Basta comunicarlo all\u2019Ufficio Stato Civile. Le pubblicazioni scadono automaticamente dopo 180 giorni se il matrimonio non viene celebrato." },
  { q: "Il matrimonio religioso ha valore civile?", a: "<strong>S\u00EC, se \u00E8 concordatario.</strong> Il matrimonio cattolico celebrato secondo il Concordato ha effetti civili automatici \u2014 il parroco trasmette l\u2019atto al Comune. Anche matrimoni di alcune confessioni riconosciute (valdesi, ebrei, ecc.) hanno effetti civili. Il matrimonio solo religioso, senza trascrizione, non ha valore legale." },
  { q: "Cosa cambia tra comunione e separazione dei beni?", a: "<strong>In comunione dei beni</strong> (il default): tutto quello che comprate dopo il matrimonio \u00E8 di entrambi al 50%, anche se paga uno solo. <strong>In separazione dei beni</strong>: ognuno resta proprietario di ci\u00F2 che compra. La scelta si fa al momento del matrimonio e si pu\u00F2 cambiare dopo, dal notaio (costa 500-1.000\u20AC)." },
  { q: "Ho diritto al congedo matrimoniale dal lavoro?", a: "<strong>S\u00EC, 15 giorni di calendario</strong> retribuiti al 100%. Li devi usare entro 30 giorni dal matrimonio. Per gli operai, 7 giorni sono a carico INPS e il resto a carico del datore. Per gli impiegati \u00E8 tutto a carico del datore. Spetta anche per le unioni civili." },
  { q: "Devo aggiornare i documenti dopo il matrimonio?", a: "<strong>S\u00EC.</strong> Devi aggiornare: carta d\u2019identit\u00E0 (se cambi cognome), codice fiscale, tessera sanitaria, eventuale patente. Comunica il cambio di stato civile al datore di lavoro e alla banca. Il Comune aggiorna automaticamente stato civile e nucleo familiare." },
  { q: "Esistono bonus per chi si sposa?", a: "Nel 2026 <strong>non esiste un bonus matrimonio statale</strong>. L\u2019unica \u201Cagevolazione\u201D diretta \u00E8 il congedo retribuito di 15 giorni. Per\u00F2 sposarsi apre la porta ad altri vantaggi: 730 congiunto, ISEE familiare, detrazioni per coniuge a carico, e mutuo prima casa insieme." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Sposarsi nel 2026: documenti, costi, procedura e regime patrimoniale',
      description: 'Come sposarsi nel 2026: documenti, pubblicazioni, costi, regime patrimoniale, congedo e bonus.',
      url: '/mi-sposo',
      image: 'ogmisposo.png',
      datePublished: '2026-03-07',
      dateModified: '2026-03-09',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-famiglia">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Mi <em>sposo</em></h1>
            <p className="hero-sub">Tutta la burocrazia del matrimonio, spiegata come te la spiegherebbe un amico. Documenti, pubblicazioni, costi, regime patrimoniale e cosa fare dopo.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 10 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Codice Civile &middot; Ministero dell&apos;Interno &middot; INPS &middot; Comuni d&apos;Italia</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">16&euro;</div><div className="hl">costo minimo<br/>per le pubblicazioni</div></div>
            <div className="hstat"><div className="hn">11 gg</div><div className="hl">tempo minimo<br/>per le pratiche</div></div>
            <div className="hstat"><div className="hn">15 gg</div><div className="hl">congedo retribuito<br/>dal lavoro</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/compro-casa" className="ps">🏠 Compro casa</a>
              <a href="/figlio" className="ps">👶 Aspetto un figlio</a>
              <span className="ps ps-soon">🏡 Cambio residenza <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.anagrafenazionale.interno.it/area-cittadino/" target="_blank" rel="noopener noreferrer" className="ps">🏛 Portale ANPR</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏠 Agevolazioni casa</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">👶 Assegno unico</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">Da 16&euro;</div><div className="sl">costo base del matrimonio civile</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">3 documenti</div><div className="sl">identit&agrave;, codice fiscale, marca da bollo</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCE2'}</div><div className="sn">8+3 giorni</div><div className="sl">per le pubblicazioni</div></div>
                <div className="sc    r d1"><div className="si">{'\u23F3'}</div><div className="sn">180 giorni</div><div className="sl">validit&agrave; pubblicazioni</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83C\uDFD6\uFE0F'}</div><div className="sn">15 giorni</div><div className="sl">congedo matrimoniale retribuito</div></div>
                <div className="sc bl r d3"><div className="si">{'\u2696\uFE0F'}</div><div className="sn">Comunione</div><div className="sl">regime patrimoniale di default</div></div>
              </div>
            </div>
            <QuizSposo />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Come funziona il matrimonio in Italia (spiegato semplice)</h2>

            <p>Sposarsi in Italia &egrave; pi&ugrave; semplice di quello che pensi. La parte burocratica si riassume cos&igrave;: andate in Comune, portate due documenti, il Comune pubblica un annuncio per 8 giorni, e dopo 11 giorni potete sposarvi. Fine. Il resto &mdash; abiti, location, catering &mdash; non c&apos;entra con la burocrazia.</p>

            <p>Per&ograve; ci sono alcune decisioni importanti da prendere <strong>prima</strong> del matrimonio, e se non le conosci rischi di fare scelte sbagliate. La pi&ugrave; importante: il <Tip t="Come vengono gestiti i soldi e i beni nella coppia dopo il matrimonio. Se non dici nulla, scatta la comunione dei beni (tutto quello che comprate dopo è al 50% di entrambi). Puoi scegliere la separazione dei beni, dove ognuno è proprietario di ciò che compra.">regime patrimoniale</Tip> &mdash; cio&egrave; come verranno gestiti i soldi e le propriet&agrave; dopo le nozze.</p>

            <h3>I tre tipi di matrimonio</h3>
            <div className="ib tip r d1">
              <div className="ib-t">{'\uD83C\uDFDB'} Matrimonio civile</div>
              <p>Celebrato in Comune dal Sindaco (o un delegato). &Egrave; l&apos;unico con valore legale automatico. Puoi farlo nella sala comunale o in una location autorizzata dal Comune. Costo burocratico: da 16&euro;.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">{'\u26EA'} Matrimonio religioso <Tip t="Un matrimonio celebrato in chiesa che ha anche valore legale per lo Stato, grazie all'accordo (Concordato) tra Italia e Vaticano del 1984. Il parroco trasmette l'atto al Comune automaticamente.">concordatario</Tip></div>
              <p>Celebrato in chiesa (o altro luogo di culto riconosciuto). Ha effetti civili automatici &mdash; il parroco trasmette l&apos;atto al Comune. Servono le stesse <Tip t="L'annuncio ufficiale che vi state per sposare, pubblicato sull'albo del Comune per 8 giorni. Serve a permettere eventuali opposizioni (succede quasi mai).">pubblicazioni</Tip> del civile + il corso prematrimoniale della diocesi.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">{'\u2728'} Matrimonio simbolico</div>
              <p><strong>Non ha valore legale.</strong> Puoi celebrarlo ovunque, con qualsiasi rito personalizzato. Ha senso solo se hai gi&agrave; fatto il civile o il religioso e vuoi una cerimonia in pi&ugrave;. Sempre pi&ugrave; scelto per matrimoni &quot;scenografici&quot; in location particolari.</p>
            </div>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Pubblicazioni</strong> &mdash; L&apos;annuncio ufficiale che vi state per sposare. Il Comune lo pubblica online per 8 giorni. Serve per legge, ma nella pratica &egrave; una formalit&agrave;: le opposizioni sono rarissime.</div>
              <div className="gl-item r d2"><strong>Stato libero</strong> &mdash; Un certificato che dice che non sei gi&agrave; sposato/a. Il Comune lo acquisisce da solo (non devi portarlo tu), ma &egrave; uno dei controlli che fa prima di autorizzare le nozze.</div>
              <div className="gl-item r d3"><strong>Regime patrimoniale</strong> &mdash; Come vengono gestiti soldi e beni nella coppia. Hai due opzioni: <Tip t="Regime legale di default. Tutto ciò che comprate dopo il matrimonio è di entrambi al 50%, anche se paga solo uno dei due. Gli stipendi restano personali.">comunione</Tip> (default) o <Tip t="Ognuno resta proprietario di ciò che compra. Se compri una casa intestata a te, è solo tua. Protegge meglio in caso di debiti di uno dei due.">separazione dei beni</Tip>.</div>
              <div className="gl-item r d4"><strong>Comunione dei beni</strong> &mdash; Il regime di default se non scegliete nulla. Tutto quello che comprate dopo le nozze &egrave; al 50% di entrambi, anche se lo paga uno solo. Gli stipendi restano personali.</div>
              <div className="gl-item r d1"><strong>Separazione dei beni</strong> &mdash; Ognuno &egrave; proprietario di quello che compra. Protegge meglio se uno dei due &egrave; imprenditore o ha debiti. La scelta pi&ugrave; diffusa oggi.</div>
              <div className="gl-item r d2"><strong>Congedo matrimoniale</strong> &mdash; 15 giorni di calendario retribuiti al 100% che il datore di lavoro deve darti quando ti sposi. Da usare entro 30 giorni dalle nozze. Spetta anche per le unioni civili.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Sposarsi apre altre porte</div>
              <p>Dopo il matrimonio potete fare il <a href="/730">730 congiunto</a>, avere un <a href="/isee">ISEE familiare</a> (utile per bonus), chiedere il <a href="/compro-casa">mutuo prima casa</a> insieme, e detrarre il coniuge a carico se uno dei due non lavora. Sono soldi veri.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa serve</div>
            <h2>Documenti necessari</h2>
            <p>Buona notizia: servono pochissimi documenti. Il Comune fa quasi tutto da solo. Entrambi gli sposi devono presentarsi all&apos;<Tip t="L'ufficio del Comune che si occupa di nascite, matrimoni, morti e tutto quello che riguarda lo 'stato' delle persone. È qui che si fanno le pubblicazioni.">Ufficio Stato Civile</Tip> del Comune di residenza (basta il Comune di uno dei due). Ecco cosa portare:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; valido</strong><span className="note">Carta d&apos;identit&agrave; o passaporto di entrambi gli sposi</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Codice fiscale</strong><span className="note">Tessera sanitaria o tesserino del codice fiscale di entrambi</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCDD'}</div><div className="clb"><strong>Marca da bollo da 16&euro;</strong><span className="note">Se risiedete nello stesso Comune. Diventano 32&euro; (due marche) se risiedete in Comuni diversi</span></div></li>
            </ul>

            <p>Il Comune acquisisce d&apos;ufficio tutto il resto: certificato di nascita, certificato di <Tip t="Un certificato che conferma che non sei già sposato/a con qualcun altro. Il Comune lo ottiene da solo dai registri.">stato libero</Tip> e certificato contestuale. Non dovete portarli voi.</p>

            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} Casi particolari: documenti extra</div>
              <p><strong>Divorziati:</strong> copia integrale dell&apos;atto di matrimonio precedente con annotazione del divorzio. <strong>Vedovi:</strong> atto di morte del coniuge. <strong>Sposi stranieri:</strong> <Tip t="Un documento rilasciato dal Consolato del tuo Paese in Italia che certifica che puoi sposarti secondo le leggi del tuo Stato d'origine. Va tradotto e legalizzato.">nulla osta al matrimonio</Tip> dal proprio Consolato in Italia + traduzione legalizzata. <strong>Minorenni</strong> (16-17 anni): autorizzazione del Tribunale dei Minori.</p>
            </div>
          </div>

          {/* PUBBLICAZIONI */}
          <div className="sec r" id="pubblicazioni">
            <div className="sec-tag">La procedura</div>
            <h2>Le pubblicazioni di matrimonio</h2>
            <p>Le <Tip t="L'annuncio ufficiale che due persone stanno per sposarsi. Il Comune lo pubblica sull'albo pretorio online per 8 giorni. È obbligatorio per legge.">pubblicazioni</Tip> sono un annuncio obbligatorio: il Comune comunica pubblicamente che voi due state per sposarvi. Vengono messe sull&apos;albo pretorio online per <strong>8 giorni consecutivi</strong>. Serve a permettere eventuali opposizioni &mdash; succede quasi mai, ma la legge lo prevede.</p>

            <h3>Passo per passo</h3>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Appuntamento in Comune</strong>
                  <p>Presentatevi entrambi (o uno con delega dell&apos;altro) all&apos;Ufficio Stato Civile. Portate i documenti e la marca da bollo. Compilate il modulo di richiesta pubblicazioni.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Affissione (8 giorni)</strong>
                  <p>Il Comune pubblica i vostri nomi sull&apos;albo online. Se risiedete in Comuni diversi, la pubblicazione avviene in entrambi.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Certificato (dopo 3 giorni)</strong>
                  <p>Passati gli 8 giorni + 3 di attesa, il Comune rilascia il certificato di eseguite pubblicazioni. Da quel momento avete <strong>180 giorni</strong> (6 mesi) per celebrare il matrimonio.</p>
                </div>
              </div>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} Se scadono i 180 giorni</div>
              <p>Le pubblicazioni decadono e bisogna rifare tutto. Non &egrave; automatico &mdash; semplicemente quel certificato non vale pi&ugrave;. Pianificate bene la data.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Tempistica realistica</div>
              <p>Dalla prima visita in Comune al &quot;s&igrave;&quot; servono <strong>almeno 11 giorni</strong> (8 affissione + 3 attesa). Nella pratica, contate <strong>2-3 mesi</strong>: tra prendere appuntamento, raccogliere documenti e trovare la data libera in Comune. Se uno degli sposi &egrave; straniero, aggiungete 1-2 mesi per il nulla osta.</p>
            </div>
          </div>

          {/* COSTI REALI */}
          <div className="sec r" id="costi">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto costa sposarsi (la parte burocratica)</h2>
            <p>Qui parliamo solo dei costi obbligatori &mdash; la burocrazia. Il ricevimento, gli abiti, i fiori? Sono affari vostri (e del vostro budget).</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Voce</th><th>Costo</th></tr></thead>
                <tbody>
                  <tr><td>Marca da bollo pubblicazioni (stesso Comune)</td><td><strong>16&euro;</strong></td></tr>
                  <tr><td>Marca da bollo pubblicazioni (Comuni diversi)</td><td><strong>32&euro;</strong></td></tr>
                  <tr><td>Uso sala comunale (sala speciale)</td><td>100-500&euro;+</td></tr>
                  <tr><td>Celebrazione fuori orario o sede distaccata</td><td>Variabile (delibera comunale)</td></tr>
                  <tr><td>Corso prematrimoniale (solo rito religioso)</td><td>Gratuito o offerta libera</td></tr>
                  <tr><td>Atto notarile separazione dei beni (se cambi idea dopo)</td><td>500-1.000&euro;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il matrimonio civile in sala comunale &egrave; quasi gratis</div>
              <p>Se vi sposate nella sala del Comune, in orario d&apos;ufficio, pagate solo la marca da bollo: <strong>16-32&euro;</strong>. Le tariffe salgono se volete location comunali di pregio, orari serali, weekend, o sale esterne convenzionate. Ogni Comune ha le sue tariffe &mdash; chiamate l&apos;Ufficio Stato Civile per sapere quanto costa da voi.</p>
            </div>
          </div>

          {/* REGIME PATRIMONIALE */}
          <div className="sec r" id="regime">
            <div className="sec-tag">La scelta importante</div>
            <h2>Comunione o separazione dei beni?</h2>
            <p>Questa &egrave; la decisione pi&ugrave; importante che prenderete il giorno del matrimonio &mdash; e la meno romantica. L&apos;ufficiale vi chieder&agrave; <strong>prima di celebrare</strong>. Se non dite nulla, scatta la <Tip t="Il regime legale di default in Italia. Tutto quello che comprate dopo il matrimonio è al 50% di entrambi, anche se paga uno solo.">comunione dei beni</Tip>.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th></th><th>Comunione dei beni</th><th>Separazione dei beni</th></tr></thead>
                <tbody>
                  <tr><td><strong>Default</strong></td><td className="tg">S&igrave; (se non dite nulla)</td><td>Devi dichiararla</td></tr>
                  <tr><td><strong>Cosa compri dopo</strong></td><td>&Egrave; al 50% di entrambi</td><td className="tg">Resta solo tuo</td></tr>
                  <tr><td><strong>Stipendio</strong></td><td>Resta personale</td><td>Resta personale</td></tr>
                  <tr><td><strong>Debiti dopo</strong></td><td>Rispondono entrambi (su beni comuni)</td><td className="tg">Risponde solo chi li ha fatti</td></tr>
                  <tr><td><strong>Mutuo casa</strong></td><td>La casa &egrave; di entrambi anche se paga uno</td><td>La casa &egrave; di chi la compra</td></tr>
                  <tr><td><strong>Cambiare idea</strong></td><td>S&igrave;, dal notaio (500-1.000&euro;)</td><td>S&igrave;, dal notaio (500-1.000&euro;)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il consiglio pratico</div>
              <p>La <strong><Tip t="Ogni coniuge resta proprietario di ciò che compra. Se uno dei due ha debiti o rischi imprenditoriali, i beni dell'altro sono protetti.">separazione dei beni</Tip></strong> &egrave; la scelta pi&ugrave; comune oggi, soprattutto se uno dei due &egrave; imprenditore, libero professionista, o ha patrimoni preesistenti. Protegge meglio in caso di debiti o problemi economici. Se non avete situazioni particolari e vi fidate, la comunione va benissimo. In ogni caso <strong>potete cambiare idea dopo</strong>, ma serve un atto notarile.</p>
            </div>

            <h3>Congedo matrimoniale</h3>
            <p>Se sei un lavoratore dipendente, hai diritto a <strong>15 giorni di calendario</strong> di <Tip t="Un periodo di assenza retribuita dal lavoro a cui hai diritto quando ti sposi. 15 giorni di calendario pagati al 100%. Da usare entro 30 giorni dal matrimonio.">congedo matrimoniale</Tip>, pagati al 100%. Devi usarli entro 30 giorni dalle nozze. Spetta anche per le unioni civili.</p>

            <div className="ib tip r d1">
              <div className="ib-t">{'\uD83D\uDCDD'} Come richiederlo</div>
              <p>Avvisa il datore di lavoro con almeno <strong>6 giorni di preavviso</strong> (nella pratica, prima avvisi meglio &egrave;). Dopo le nozze, consegna il certificato di matrimonio all&apos;ufficio risorse umane. Per gli operai 7 giorni sono a carico INPS, il resto a carico del datore. Per gli impiegati &egrave; tutto a carico del datore.</p>
            </div>

            <h3>Cosa fare dopo il matrimonio</h3>
            <p>Il Comune aggiorna automaticamente lo stato civile e il nucleo familiare. Per&ograve; ci sono alcune cose che dovete fare voi:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE2'}</div><div className="clb"><strong>Comunicare al datore di lavoro</strong><span className="note">Per il congedo, le detrazioni coniuge a carico e il TFR</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>Aggiornare la banca</strong><span className="note">Per conti cointestati, mutui e polizze assicurative</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Aggiornare i documenti (se cambi cognome)</strong><span className="note">Carta d&apos;identit&agrave;, codice fiscale, tessera sanitaria, patente</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCCA'}</div><div className="clb"><strong>Rifare l&apos;ISEE</strong><span className="note">Il nucleo familiare cambia &mdash; <a href="/isee">rifai l&apos;ISEE</a> per aggiornare bonus e agevolazioni</span></div></li>
            </ul>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Marco e Sara si sposano a Bologna</h2>

            <p><strong>Marco ha 31 anni</strong>, lavora come impiegato in un&apos;azienda di logistica (1.600&euro; al mese netti). <strong>Sara ha 29 anni</strong>, &egrave; graphic designer freelance con <a href="/piva">partita IVA</a> forfettaria (fattura circa 30.000&euro;/anno). Vivono insieme in affitto a Bologna e hanno deciso di sposarsi.</p>

            <p>Marco non sa niente di burocrazia matrimoniale. Pensa che servano &quot;mille documenti&quot; e che costi un sacco. Sara ha sentito dire che bisogna scegliere tra comunione e separazione dei beni ma non ha capito la differenza. Nessuno dei due sa che Marco ha diritto a 15 giorni pagati dal lavoro.</p>

            <h3>Cosa fanno</h3>
            <p>Leggono questa guida. Capiscono che la parte burocratica &egrave; facilissima. Vanno in Comune con carta d&apos;identit&agrave;, codice fiscale e una marca da bollo da 16&euro;. L&apos;impiegata compila tutto in 20 minuti. Le pubblicazioni escono il giorno dopo, e dopo 11 giorni hanno il certificato. <strong>Tempo totale per la burocrazia: 1 ora.</strong></p>

            <p>Scelgono la <strong>separazione dei beni</strong> perch&eacute; Sara &egrave; freelance &mdash; cos&igrave; se un cliente non la paga e finisce in contenziosi, il patrimonio di Marco &egrave; protetto. Si sposano nella sala del Comune un sabato mattina (costo sala: 200&euro;, in orario d&apos;ufficio sarebbe stato gratis).</p>

            <h3>I numeri</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Marca da bollo</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">16&euro;</span></div>
              <div className="db-row"><span className="db-label">Uso sala (sabato)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">200&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">Totale burocrazia</span><span className="db-val">216&euro;</span></div>
            </div>

            <h3>Cosa guadagnano</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Congedo Marco (15 gg retribuiti)</span><span className="db-old">0&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~1.200&euro;</span></div>
              <div className="db-row"><span className="db-label">730 congiunto (detrazioni coniuge)</span><span className="db-old">0&euro;/anno</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~690&euro;/anno</span></div>
              <div className="db-row"><span className="db-label">ISEE familiare {'\u2192'} bonus bollette</span><span className="db-old">0&euro;/anno</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~240&euro;/anno</span></div>
              <div className="db-row db-total"><span className="db-label">Vantaggio economico primo anno</span><span className="db-val">+2.130&euro;</span></div>
            </div>

            <p>Marco non ci credeva. <strong>Quindici giorni pagati di congedo</strong> che non sapeva nemmeno di avere. Sara scopre che grazie all&apos;ISEE familiare hanno diritto al bonus bollette. E col 730 congiunto recuperano quasi 700&euro; di detrazioni.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Il matrimonio civile costa quasi niente. La burocrazia si fa in un&apos;ora. E sposarsi sblocca agevolazioni che in molti non sanno nemmeno di avere: congedo retribuito, 730 congiunto, ISEE familiare, detrazione coniuge a carico. Non &egrave; romantico, ma sono soldi veri.</p>
            </div>
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
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Sposati e pronti a comprare? Mutuo e bonus.</div><span className="rc-ar">→</span></a>
              <a href="/figlio" className="rc"><span className="rc-e">👶</span><div className="rc-t">Aspetto un figlio</div><div className="rc-d">Congedi, assegno unico e bonus nido.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Dopo il matrimonio il nucleo cambia. Aggiorna l'ISEE.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.anagrafenazionale.interno.it/area-cittadino/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Portale ANPR</div><div className="sbtool-d">Certificati e stato civile online</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏠</span><div><div className="sbtool-n">Agevolazioni casa</div><div className="sbtool-d">Se comprate casa insieme</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">👶</span><div><div className="sbtool-n">Domanda INPS</div><div className="sbtool-d">Per quando arrivano i figli</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
            <a href="/figlio" className="sbguide">👶 Aspetto un figlio<span className="sbg-ar">→</span></a>
            <a href="/cambio-residenza" className="sbguide">🏡 Cambio residenza<span className="sbg-ar">→</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
