import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizSposo from '@/components/QuizSposo';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Sposarsi nel 2026: Documenti, Costi, Procedura e Regime Patrimoniale',
  description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
  alternates: { canonical: 'https://zeroburocrazia.it/mi-sposo' },
  openGraph: {
    title: 'Sposarsi nel 2026: Documenti, Costi, Procedura e Regime Patrimoniale',
    description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
    url: 'https://zeroburocrazia.it/mi-sposo',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogmisposo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sposarsi nel 2026: Documenti, Costi, Procedura e Regime Patrimoniale',
    description: 'Come sposarsi nel 2026: documenti necessari, pubblicazioni, costi del matrimonio civile e religioso, regime patrimoniale, congedo e bonus. Guida gratuita completa.',
    images: ['https://zeroburocrazia.it/ogmisposo.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'tipi', label: 'Tipi di matrimonio' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'pubblicazioni', label: 'Pubblicazioni' },
  { id: 'costi', label: 'Costi reali' },
  { id: 'regime', label: 'Regime patrimoniale' },
  { id: 'congedo', label: 'Congedo e bonus', bh: true },
  { id: 'dopo', label: 'Dopo le nozze', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto tempo prima devo iniziare le pratiche?", a: "<strong>Almeno 2-3 mesi prima</strong> della data desiderata. Le pubblicazioni richiedono 8 giorni di affissione + 3 giorni di attesa, e prima ancora devi raccogliere i documenti e fissare l'appuntamento all'Ufficio Stato Civile. Se uno dei due sposi è straniero, i tempi si allungano per il nulla osta." },
  { q: "Posso sposarmi in un Comune diverso da quello di residenza?", a: "<strong>Sì.</strong> Le pubblicazioni si fanno nel Comune di residenza (di uno dei due sposi), ma la cerimonia può essere celebrata in qualsiasi Comune d'Italia. Serve una delega dal Comune di residenza a quello dove ti sposerai." },
  { q: "Quanti testimoni servono?", a: "<strong>Due testimoni</strong>, maggiorenni e muniti di documento d'identità valido. Possono essere amici, parenti, o chiunque tu voglia. Non c'è un limite massimo ufficiale, ma il Comune accetta solo 2 firme sull'atto." },
  { q: "Posso revocare le pubblicazioni?", a: "<strong>Sì</strong>, in qualsiasi momento prima della celebrazione. Basta comunicarlo all'Ufficio Stato Civile. Le pubblicazioni scadono automaticamente dopo 180 giorni se il matrimonio non viene celebrato." },
  { q: "Il matrimonio religioso ha valore civile?", a: "<strong>Sì, se è concordatario.</strong> Il matrimonio cattolico celebrato secondo gli accordi tra Stato e Chiesa (Concordato) ha automaticamente effetti civili. Il parroco trasmette l'atto al Comune. Anche i matrimoni di alcune confessioni riconosciute (valdesi, ebrei, ecc.) hanno effetti civili. Il matrimonio solo religioso, senza trascrizione, non ha valore legale." },
  { q: "Cosa cambia tra comunione e separazione dei beni?", a: "<strong>In comunione dei beni</strong> (regime legale, quello di default): tutto ciò che acquistate dopo il matrimonio è di entrambi al 50%, anche se lo compra solo uno dei due. <strong>In separazione dei beni</strong>: ognuno resta proprietario di quello che compra. La scelta si fa al momento del matrimonio e si può cambiare dopo, dal notaio." },
  { q: "Ho diritto al congedo matrimoniale dal lavoro?", a: "<strong>Sì, 15 giorni di calendario</strong> retribuiti al 100%. Devi usarli entro 30 giorni dal matrimonio. Per gli operai, 7 giorni sono a carico INPS e il resto a carico del datore. Per gli impiegati è tutto a carico del datore. Spetta anche per le unioni civili." },
  { q: "Devo aggiornare i documenti dopo il matrimonio?", a: "<strong>Sì.</strong> Devi aggiornare: carta d'identità (se cambi cognome), codice fiscale (all'Agenzia delle Entrate), tessera sanitaria, eventuale patente, e comunicare il cambio di stato civile al datore di lavoro e alla banca. Il Comune aggiorna automaticamente lo stato civile e il nucleo familiare." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Sposarsi nel 2026: documenti, costi, procedura e regime patrimoniale',
      description: 'Come sposarsi nel 2026: documenti, pubblicazioni, costi, regime patrimoniale, congedo e bonus.',
      url: '/mi-sposo',
      image: 'ogmisposo.png',
      datePublished: '2026-03-07',
      dateModified: '2026-03-07',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
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
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Mi <em>sposo</em></h1>
            <p className="hero-sub">Tutta la burocrazia del matrimonio, spiegata semplice. Documenti, pubblicazioni, costi, regime patrimoniale e cosa fare dopo le nozze.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Codice Civile · Ministero dell&apos;Interno · INPS · Comuni d&apos;Italia</div>
            <PrintButton />
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">16€</div><div className="hl">costo minimo<br/>per le pubblicazioni</div></div>
            <div className="hstat"><div className="hn">11 gg</div><div className="hl">tempo minimo<br/>per le pratiche</div></div>
            <div className="hstat"><div className="hn">15 gg</div><div className="hl">congedo retribuito<br/>dal lavoro</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/mi-sposo" className="ps active">💍 Mi sposo</a><span className="pa">›</span>
              <a href="/compro-casa" className="ps">Compro casa</a><span className="pa">›</span>
              <a href="/isee" className="ps">ISEE</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💰</div><div className="sn">Da 16€</div><div className="sl">costo base del matrimonio civile</div></div>
                <div className="sc sg r d2"><div className="si">📋</div><div className="sn">3 documenti</div><div className="sl">identità, codice fiscale, stato libero</div></div>
                <div className="sc    r d3"><div className="si">📢</div><div className="sn">8+3 giorni</div><div className="sl">per le pubblicazioni</div></div>
                <div className="sc    r d1"><div className="si">⏳</div><div className="sn">180 giorni</div><div className="sl">validità pubblicazioni</div></div>
                <div className="sc    r d2"><div className="si">🏖</div><div className="sn">15 giorni</div><div className="sl">congedo matrimoniale retribuito</div></div>
                <div className="sc bl r d3"><div className="si">⚖️</div><div className="sn">Comunione</div><div className="sl">regime patrimoniale di default</div></div>
              </div>
            </div>
            <QuizSposo />
          </div>

          {/* TIPI DI MATRIMONIO */}
          <div className="sec r" id="tipi">
            <div className="sec-tag">Le basi</div>
            <h2>I tre tipi di matrimonio in Italia</h2>
            <div className="ib tip r d1">
              <div className="ib-t">🏛 Matrimonio civile</div>
              <p>Celebrato in Comune dal Sindaco (o un delegato). È l&apos;unico con valore legale automatico. Puoi farlo in sala comunale o in una location autorizzata. Costo minimo: da 16€ per le pubblicazioni.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">⛪ Matrimonio religioso concordatario</div>
              <p>Celebrato in chiesa (o altro luogo di culto riconosciuto). Ha effetti civili automatici — il parroco trasmette l&apos;atto al Comune. Servono le stesse pubblicazioni del matrimonio civile + il corso prematrimoniale richiesto dalla diocesi.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">✨ Matrimonio simbolico</div>
              <p><strong>Non ha valore legale.</strong> Puoi celebrarlo ovunque, con qualsiasi rito personalizzato. Serve solo se hai già fatto il matrimonio civile o religioso e vuoi una cerimonia in più. Sempre più scelto per matrimoni &quot;scenografici&quot; in location particolari.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa serve</div>
            <h2>Documenti necessari</h2>
            <p>Per avviare la pratica, entrambi gli sposi devono presentarsi all&apos;Ufficio Stato Civile del Comune di residenza (basta il Comune di uno dei due). Il Comune acquisisce d&apos;ufficio quasi tutto — voi portate solo:</p>

            <div className="ib tip r d1">
              <div className="ib-t">📱 Documento d&apos;identità valido</div>
              <p>Carta d&apos;identità o passaporto di entrambi.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">💳 Codice fiscale</div>
              <p>Tessera sanitaria o tesserino del codice fiscale di entrambi.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">📄 Marca da bollo</div>
              <p><strong>16€</strong> se risiedete nello stesso Comune, <strong>32€</strong> (due marche) se risiedete in Comuni diversi.</p>
            </div>

            <p>Il Comune richiede d&apos;ufficio: certificato di nascita, certificato di stato libero e certificato contestuale. Non dovete portarli voi.</p>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Casi particolari: documenti aggiuntivi</div>
              <p><strong>Divorziati:</strong> copia integrale dell&apos;atto di matrimonio precedente con annotazione del divorzio. <strong>Vedovi:</strong> atto di morte del coniuge. <strong>Sposi stranieri:</strong> nulla osta al matrimonio rilasciato dal proprio Consolato in Italia + traduzione legalizzata. <strong>Minorenni</strong> (16-17 anni): autorizzazione del Tribunale dei Minori.</p>
            </div>
          </div>

          {/* PUBBLICAZIONI */}
          <div className="sec r" id="pubblicazioni">
            <div className="sec-tag">La procedura</div>
            <h2>Le pubblicazioni di matrimonio</h2>
            <p>Le pubblicazioni sono l&apos;annuncio ufficiale che vi state per sposare. Vengono affisse sull&apos;albo pretorio online del Comune per <strong>8 giorni consecutivi</strong>. Servono a permettere eventuali opposizioni (succede quasi mai, ma è previsto dalla legge).</p>

            <h3>Come funziona, passo per passo</h3>
            <div className="ib tip r d1">
              <div className="ib-t">1. Appuntamento in Comune</div>
              <p>Presentatevi entrambi (o uno con delega dell&apos;altro) all&apos;Ufficio Stato Civile. Portate i documenti e la marca da bollo. Compilate il modulo di richiesta pubblicazioni.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">2. Affissione (8 giorni)</div>
              <p>Il Comune pubblica i vostri nomi sull&apos;albo online. Se risiedete in Comuni diversi, la pubblicazione avviene in entrambi.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">3. Certificato (3 giorni dopo)</div>
              <p>Dopo gli 8 giorni + 3 giorni di attesa, il Comune rilascia il <strong>certificato di eseguite pubblicazioni</strong>. Da quel momento avete <strong>180 giorni</strong> (6 mesi) per celebrare il matrimonio.</p>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Se scadono i 180 giorni</div>
              <p>Le pubblicazioni decadono e dovete rifare tutto da capo. Non è automatico — semplicemente non potete più sposarvi con quel certificato. Pianificate bene la data.</p>
            </div>
          </div>

          {/* COSTI REALI */}
          <div className="sec r" id="costi">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto costa sposarsi (la parte burocratica)</h2>
            <p>Qui parliamo solo dei costi burocratici, non del ricevimento o degli abiti.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Voce</th><th>Costo</th></tr></thead>
                <tbody>
                  <tr><td>Marca da bollo pubblicazioni (stesso Comune)</td><td>16€</td></tr>
                  <tr><td>Marca da bollo pubblicazioni (Comuni diversi)</td><td>32€</td></tr>
                  <tr><td>Uso sala comunale (se richiesta sala speciale)</td><td>100-500€+</td></tr>
                  <tr><td>Celebrazione fuori orario o sede distaccata</td><td>Variabile (delibera comunale)</td></tr>
                  <tr><td>Corso prematrimoniale (solo rito religioso)</td><td>Gratuito o offerta libera</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Il matrimonio civile in sala comunale è quasi gratis</div>
              <p>Se vi sposate nella sala del Comune, in orario d&apos;ufficio, il costo totale è solo la marca da bollo (16-32€). Le tariffe salgono se scegliete location comunali di pregio, orari serali/weekend, o sale esterne convenzionate.</p>
            </div>
          </div>

          {/* REGIME PATRIMONIALE */}
          <div className="sec r" id="regime">
            <div className="sec-tag">La scelta importante</div>
            <h2>Comunione o separazione dei beni?</h2>
            <p>Questa è una delle decisioni più importanti che prenderete. La scelta va fatta <strong>al momento del matrimonio</strong> — l&apos;ufficiale vi chiederà prima di celebrare.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th></th><th>Comunione dei beni</th><th>Separazione dei beni</th></tr></thead>
                <tbody>
                  <tr><td><strong>Default</strong></td><td className="tg">Sì (se non dite nulla)</td><td>Devi dichiararla</td></tr>
                  <tr><td><strong>Cosa compri dopo</strong></td><td>È al 50% di entrambi</td><td className="tg">Resta solo tuo</td></tr>
                  <tr><td><strong>Stipendio</strong></td><td>Resta personale</td><td>Resta personale</td></tr>
                  <tr><td><strong>Debiti dopo</strong></td><td>Rispondono entrambi (su beni comuni)</td><td className="tg">Risponde solo chi li ha fatti</td></tr>
                  <tr><td><strong>Mutuo casa</strong></td><td>La casa è di entrambi anche se paga uno</td><td>La casa è di chi la compra</td></tr>
                  <tr><td><strong>Cambiare idea</strong></td><td>Sì, dal notaio</td><td>Sì, dal notaio</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Il consiglio pratico</div>
              <p>La <strong>separazione dei beni</strong> è la scelta più comune oggi, soprattutto se uno dei due è imprenditore, libero professionista, o ha patrimoni preesistenti. Protegge meglio in caso di debiti o problemi economici di uno dei due. Se non avete situazioni particolari e vi fidate, la comunione va benissimo. In ogni caso, <strong>potete cambiare idea dopo</strong> — ma serve un atto notarile (costo: 500-1.000€).</p>
            </div>
          </div>

          {/* CONGEDO E BONUS */}
          <div className="sec breve-hide r" id="congedo">
            <div className="sec-tag">Dal lavoro</div>
            <h2>Congedo matrimoniale e bonus</h2>
            <h3>Congedo matrimoniale</h3>
            <p>Se sei un dipendente, hai diritto a <strong>15 giorni di calendario</strong> di congedo retribuito al 100%. Devi usarlo entro 30 giorni dalla data del matrimonio. Spetta anche per le unioni civili.</p>

            <div className="ib tip r d1">
              <div className="ib-t">Come funziona il pagamento</div>
              <p><strong>Impiegati e quadri:</strong> il congedo è interamente a carico del datore di lavoro. <strong>Operai e apprendisti:</strong> 7 giorni sono a carico INPS (assegno per congedo matrimoniale), il resto a carico del datore. In entrambi i casi, ricevi lo stipendio pieno per 15 giorni.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">Come richiederlo</div>
              <p>Avvisa il datore di lavoro con almeno <strong>6 giorni di preavviso</strong> (nella pratica, avvisa il prima possibile). Dopo le nozze, consegna il certificato di matrimonio all&apos;ufficio risorse umane.</p>
            </div>

            <h3>Bonus matrimonio 2026?</h3>
            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Non esiste un bonus matrimonio statale</div>
              <p>Nel 2026 non c&apos;è un bonus nazionale per chi si sposa. L&apos;unico &quot;bonus&quot; è il congedo retribuito INPS. Alcune Regioni hanno avuto iniziative locali in passato (es. Lazio nel 2022), ma al momento non ci sono contributi attivi. Verifica sul sito della tua Regione per eventuali novità.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Le agevolazioni indirette</div>
              <p>Sposarsi ti apre le porte ad altre agevolazioni: il <a href="/compro-casa">bonus prima casa</a> (se comprate insieme), la possibilità di fare il 730 congiunto, l&apos;ISEE familiare che può sbloccare bonus, e la detrazione per il coniuge a carico se uno dei due non lavora.</p>
            </div>
          </div>

          {/* DOPO LE NOZZE */}
          <div className="sec breve-hide r" id="dopo">
            <div className="sec-tag">Dopo il sì</div>
            <h2>Cosa fare dopo il matrimonio</h2>
            <p>Il Comune aggiorna automaticamente lo stato civile e il nucleo familiare. Ma ci sono alcune cose che dovete fare voi:</p>

            <div className="ib tip r d1">
              <div className="ib-t">📋 Comunicare al datore di lavoro</div>
              <p>Consegna il certificato di matrimonio per il congedo e per aggiornare i dati fiscali (detrazioni coniuge a carico, TFR, ecc.).</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">🏦 Aggiornare la banca</div>
              <p>Se avete conti cointestati o mutui, comunicate il cambio di stato civile. Utile anche per aggiornare le polizze assicurative.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">📄 Aggiornare i documenti</div>
              <p>Se cambi cognome: carta d&apos;identità, codice fiscale (Agenzia delle Entrate), tessera sanitaria, patente. Se non cambi cognome, non serve aggiornare quasi nulla.</p>
            </div>
            <div className="ib tip r d1">
              <div className="ib-t">📊 Rifare l&apos;ISEE</div>
              <p>Dopo il matrimonio il nucleo familiare cambia. Se avevi un ISEE in corso, <a href="/isee">rifai l&apos;ISEE</a> per aggiornare la situazione — potresti accedere a nuovi bonus o perderli, a seconda del reddito del coniuge.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="ctabanner r">
            <h3>Vuoi una checklist personalizzata per il tuo matrimonio?</h3>
            <p>Ti prepariamo la lista completa dei documenti e delle scadenze per la tua situazione specifica.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Sposati e pronti a comprare? Mutuo, bonus prima casa e costi.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Dopo il matrimonio il nucleo cambia. Aggiorna l&apos;ISEE.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Da sposati potete fare il 730 congiunto e risparmiare.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        <aside className="aside">
          <div className="sb-cta">
            <div className="sb-ct">Ti serve un professionista?</div>
            <div className="sb-cd">Trova chi ti aiuta nella tua zona. Gratis.</div>
            <a href="#trova-professionista" className="sb-cb">Trova professionista →</a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">🛠 Strumenti</div>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Quale procedura seguire</div></div></a>
            <a href="#regime" className="sbtool"><span className="sbtool-i">⚖️</span><div><div className="sbtool-n">Comunione vs separazione</div><div className="sbtool-d">Tabella comparativa</div></div></a>
            <a href="#costi" className="sbtool"><span className="sbtool-i">💰</span><div><div className="sbtool-n">Tabella costi</div><div className="sbtool-d">Spese burocratiche reali</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/figlio" className="sbguide">👶 Aspetto un figlio<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="mi-sposo" />
      <Footer variant="scheda" />
    </>
  );
}
