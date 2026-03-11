import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Cambio di Residenza 2026: Come Farlo Online, Documenti e Tempi',
  description: 'Cambio di residenza 2026: come farlo online su ANPR con SPID, documenti necessari, tempi, cosa aggiornare dopo e sanzioni. Guida gratuita passo per passo.',
  keywords: ["cambio residenza", "cambio residenza online", "cambio residenza ANPR", "come cambiare residenza", "cambio residenza documenti", "cambio residenza tempi", "cambio residenza 2026", "dichiarazione cambio residenza", "cambio residenza stesso comune", "cambio residenza auto"],
  alternates: { canonical: 'https://zeroburocrazia.it/cambio-residenza' },
  openGraph: {
    type: 'article',
    title: 'Cambio di Residenza 2026: Come Farlo Online, Documenti e Tempi',
    description: 'Cambio di residenza 2026: come farlo online su ANPR con SPID, documenti necessari, tempi, cosa aggiornare dopo e sanzioni. Guida gratuita passo per passo.',
    url: 'https://zeroburocrazia.it/cambio-residenza',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogcambioresidenza.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cambio di Residenza 2026: Come Farlo Online, Documenti e Tempi',
    description: 'Cambio di residenza 2026: come farlo online su ANPR con SPID, documenti necessari, tempi, cosa aggiornare dopo e sanzioni. Guida gratuita passo per passo.',
    images: ['https://zeroburocrazia.it/ogcambioresidenza.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019è" },
  { id: 'quando', label: 'Quando farlo' },
  { id: 'come', label: 'Come si fa online' },
  { id: 'sportello', label: 'Allo sportello' },
  { id: 'dopo', label: 'Cosa aggiornare dopo', bh: true },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto costa il cambio di residenza?", a: "<strong>Zero.</strong> La dichiarazione di cambio di residenza è completamente gratuita, sia online su ANPR che allo sportello del Comune. Nessun bollo, nessun diritto di segreteria. Se qualcuno ti chiede soldi per farlo, stai pagando un servizio di intermediazione (CAF, patronato), non il cambio in sé." },
  { q: "Da quando decorre la nuova residenza?", a: "La residenza decorre <strong>dalla data in cui presenti la dichiarazione</strong>, non dalla data in cui il Comune la accetta. Questo è importante: se presenti la domanda il 10 marzo, la tua residenza ufficiale è dal 10 marzo, anche se il Comune la conferma settimane dopo." },
  { q: "Posso fare il cambio di residenza senza contratto di affitto?", a: "Sì, puoi dichiarare la residenza anche se non hai un contratto formale. Però il Comune invierà i vigili per verificare che tu abiti effettivamente lì. Se la verifica fallisce, la pratica viene annullata. Allegare il contratto velocizza tutto perché riduce i dubbi." },
  { q: "Se non faccio il cambio, cosa rischio?", a: "<strong>Dichiarare il falso sulla residenza è reato</strong> (falso in atto pubblico). In pratica, le conseguenze più comuni sono: multe per il mancato aggiornamento dei documenti auto, problemi con le agevolazioni prima casa, e il rischio di non ricevere comunicazioni importanti (multe, cartelle, raccomandate)." },
  { q: "La patente si aggiorna da sola?", a: "<strong>Sì.</strong> Dal momento in cui il Comune registra il cambio, la patente si aggiorna automaticamente negli archivi della Motorizzazione. Non devi fare nulla. Il documento fisico resta valido fino alla scadenza — non serve ristamparlo." },
  { q: "Devo aggiornare il libretto dell\u2019auto?", a: "Con le nuove regole, non ricevi più il tagliandino adesivo. L\u2019aggiornamento avviene <strong>automaticamente negli archivi digitali</strong> (ANV e PRA) quando il Comune comunica il cambio alla Motorizzazione. Puoi scaricare un\u2019attestazione aggiornata dal Portale dell\u2019Automobilista." },
  { q: "Cambio residenza nello stesso comune: stessa procedura?", a: "<strong>Sì, identica.</strong> Sia il cambio tra comuni diversi che il cambio di indirizzo nello stesso comune si fanno con la stessa procedura su ANPR. L\u2019unica differenza è che nel secondo caso non cambia il tuo Comune di iscrizione." },
  { q: "Posso delegare qualcuno a fare il cambio per me?", a: "Sì, ma <strong>solo allo sportello</strong>. Online su ANPR devi accedere tu con il tuo SPID o CIE. Per lo sportello, serve una delega scritta con la tua firma, copia del tuo documento e documento del delegato." },
];

export default function PaginaCambioResidenza() {
  const schemas = [
    articleSchema({
      title: 'Cambio di residenza 2026: come farlo online, documenti e tempi',
      description: 'Come cambiare residenza nel 2026: procedura online su ANPR, documenti, tempi, cosa aggiornare dopo e sanzioni. Guida gratuita aggiornata.',
      url: '/cambio-residenza',
      image: 'ogcambioresidenza.png',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-documenti">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">📄 Documenti e identità</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Cambio di <em>residenza</em></h1>
            <p className="hero-sub">Come cambiare residenza nel 2026: la procedura online su ANPR, i documenti necessari, i tempi reali e tutto quello che devi aggiornare dopo.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuito</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-o">💻 Si fa online da casa</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Ministero dell&apos;Interno · ANPR · Codice Civile art. 43 · Codice della Strada art. 94</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0€</div><div className="hl">la procedura è<br/>completamente gratuita</div></div>
            <div className="hstat"><div className="hn">2gg</div><div className="hl">il Comune registra<br/>entro 2 giorni lavorativi</div></div>
            <div className="hstat"><div className="hn">45gg</div><div className="hl">per l&apos;accertamento<br/>e conferma definitiva</div></div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* LAYOUT */}
      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/spid" className="ps">🪪 Faccio lo SPID</a>
              <a href="/compro-casa" className="ps">🏠 Compro casa</a>
              <a href="/isee" className="ps">📋 Faccio l&apos;ISEE</a>
            </div>
          </div>

<div className="related r">
            <h2>Link utili</h2>
            <div className="rg">
              <a href="https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">🏛</span><div className="rc-t">Portale ANPR</div><div className="rc-d">Fai il cambio online</div><span className="rc-ar">→</span></a>
              <a href="https://www.anagrafenazionale.interno.it/area-cittadino/" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">📄</span><div className="rc-t">Certificati anagrafici</div><div className="rc-d">Scarica gratis da ANPR</div><span className="rc-ar">→</span></a>
              <a href="https://www.ilportaledellautomobilista.it" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">🚗</span><div className="rc-t">Portale Automobilista</div><div className="rc-d">Attestazione residenza veicolo</div><span className="rc-ar">→</span></a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">📄</div><div className="sn">Dichiarazione</div><div className="sl">comunichi al Comune dove vivi adesso</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">Gratis</div><div className="sl">nessun costo, né online né allo sportello</div></div>
                <div className="sc r d3"><div className="si">💻</div><div className="sn">Online</div><div className="sl">su ANPR con SPID, CIE o CNS</div></div>
                <div className="sc r d1"><div className="si">⏱</div><div className="sn">10 min</div><div className="sl">la procedura online è velocissima</div></div>
                <div className="sc bl-bg r d2"><div className="si">📅</div><div className="sn">20 giorni</div><div className="sl">obbligo entro 20 gg dal trasferimento</div></div>
                <div className="sc r d3"><div className="si">✅</div><div className="sn">Automatico</div><div className="sl">patente e auto si aggiornano da soli</div></div>
              </div>
            </div>
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è il cambio di residenza</h2>
            <p>La <Tip t="Il luogo in cui vivi abitualmente, dove sei iscritto all'anagrafe del Comune. È diverso dal domicilio, che è dove lavori o studi.">residenza</Tip> è il posto dove vivi stabilmente. Quando ti trasferisci — in un altro comune o anche solo in un altro indirizzo nello stesso comune — devi comunicarlo. Questa comunicazione si chiama <strong>dichiarazione di cambio di residenza</strong>.</p>
            <p>Non è una scelta: è un <strong>obbligo di legge</strong>. L&apos;articolo 43 del Codice Civile definisce la residenza come &quot;il luogo in cui la persona ha la dimora abituale&quot;. Se il tuo indirizzo ufficiale non corrisponde a dove vivi davvero, stai dichiarando il falso in atto pubblico.</p>
            <p>La buona notizia? Dal 2022, grazie all&apos;<Tip t="Anagrafe Nazionale della Popolazione Residente: il database unico che collega tutti i 7.903 comuni italiani. Prima ogni comune aveva il suo archivio separato.">ANPR</Tip>, puoi fare tutto online in 10 minuti dal divano. Niente code, niente fotocopie, niente bollini.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Residenza</strong> — il luogo dove vivi abitualmente ed è registrato in anagrafe. È diverso dal domicilio (dove lavori o studi) e dalla dimora (dove ti trovi temporaneamente).</p>
              <p><strong>ANPR</strong> — Anagrafe Nazionale della Popolazione Residente. Il portale unico del Ministero dell&apos;Interno dove puoi fare il cambio online, scaricare certificati e controllare i tuoi dati anagrafici.</p>
              <p><strong>Dichiarazione anagrafica</strong> — il modulo (cartaceo o digitale) con cui comunichi al Comune che hai cambiato indirizzo. Non è una &quot;richiesta&quot;: è una dichiarazione, quindi la residenza decorre da quando la presenti.</p>
              <p><strong>Accoglimento con riserva</strong> — entro 2 giorni lavorativi il Comune registra il tuo cambio, ma &quot;con riserva&quot;: ha poi 45 giorni per verificare che tu abiti davvero lì (di solito mandano i vigili).</p>
              <p><strong>Famiglia anagrafica</strong> — le persone che vivono nello stesso indirizzo e sono legate da vincoli di parentela, affettività o convivenza. Anche un coinquilino può far parte della tua famiglia anagrafica.</p>
              <p><strong>AIRE</strong> — Anagrafe degli Italiani Residenti all&apos;Estero. Se torni dall&apos;estero, il &quot;rimpatrio&quot; è un tipo speciale di cambio di residenza.</p>
            </div>
          </div>

          {/* QUANDO */}
          <div className="sec r" id="quando">
            <div className="sec-tag">Tempistiche</div>
            <h2>Quando devi fare il cambio di residenza</h2>
            <p>La legge dice: <strong>entro 20 giorni</strong> dal trasferimento effettivo. In pratica, appena ti sei stabilito nella nuova casa e hai le chiavi in mano, dovresti fare la dichiarazione.</p>

            <div className="ib tip r"><div className="ib-t">🏠 Casi in cui è obbligatorio</div>
              <p>Ti trasferisci in un <strong>altro comune</strong> — il caso classico. Devi comunicare sia al vecchio che al nuovo Comune, ma con ANPR basta una sola dichiarazione online e il sistema avvisa entrambi.</p>
              <p>Cambi <strong>indirizzo nello stesso comune</strong> — hai cambiato casa ma sei rimasto nello stesso paese o città. Stessa procedura identica.</p>
              <p><strong>Rientri dall&apos;estero</strong> — eri iscritto all&apos;AIRE e torni in Italia. Su ANPR c&apos;è l&apos;opzione specifica &quot;rimpatrio&quot;.</p>
              <p>Ti trasferisci in una <strong>famiglia già esistente</strong> — vai a vivere con il partner, un genitore, un coinquilino già residente a quell&apos;indirizzo. Su ANPR scegli &quot;accorpamento in famiglia esistente&quot; e inserisci il codice fiscale di chi è già residente lì.</p>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Hai comprato casa? Attenzione ai 18 mesi</div>
              <p>Se hai acquistato con le <Tip t="Sconti fiscali sull'imposta di registro e IVA per chi compra la prima abitazione. Richiedono che il compratore trasferisca la residenza nel Comune dell'immobile entro 18 mesi dal rogito.">agevolazioni prima casa</Tip>, devi trasferire la residenza nel Comune dell&apos;immobile <strong>entro 18 mesi dal rogito</strong>. Se non lo fai, perdi le agevolazioni e devi restituire la differenza di tasse con sanzioni e interessi. Non è una scadenza da dimenticare.</p>
            </div>
          </div>

          {/* COME SI FA ONLINE */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come fare il cambio di residenza online (ANPR)</h2>
            <p>Questa è la via più veloce e comoda. Serve solo una cosa: un&apos;identità digitale (<Tip t="Sistema Pubblico di Identità Digitale. Se non ce l'hai, segui la nostra guida SPID — si fa in 15 minuti.">SPID</Tip>, <Tip t="Carta d'Identità Elettronica. Se ce l'hai, puoi usarla al posto dello SPID per accedere ai servizi online della PA.">CIE</Tip> o CNS).</p>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Accedi al portale ANPR</div><p>Vai su <strong>anagrafenazionale.interno.it</strong>, clicca &quot;Accedi ai servizi&quot; e autenticati con SPID o CIE. Una volta dentro, scegli la sezione <strong>&quot;Residenza&quot;</strong>.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Scegli il tipo di cambio</div><p>Clicca &quot;Richiedi un cambio di residenza&quot; → &quot;Registra una dichiarazione&quot;. Ti verrà chiesto se è una <strong>nuova residenza</strong> (da un altro comune o dall&apos;estero), un <strong>cambio di abitazione</strong> (stesso comune) o un <strong>accorpamento</strong> (entri in una famiglia già residente lì).</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Inserisci i dati della famiglia</div><p>Indica chi si trasferisce. Se sei solo tu, vai avanti. Se si trasferisce tutta la famiglia o parte di essa, aggiungi i componenti. I <strong>maggiorenni dovranno confermare</strong> la dichiarazione accedendo con il loro SPID o CIE.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Compila la sezione &quot;Residenza&quot;</div><p>Inserisci il <strong>nuovo indirizzo</strong> completo: via, numero civico, scala, piano, interno. Per un accorpamento, dovrai anche inserire il codice fiscale di chi è già residente e fare la &quot;verifica soggetto&quot;.</p></div></div>
              <div className="step r"><div className="step-n">5</div><div className="step-body"><div className="step-title">Compila la sezione &quot;Immobile&quot;</div><p>Indica il <strong>titolo di occupazione</strong>: proprietario, inquilino con contratto, ospite. Se sei in affitto, conviene allegare una copia del contratto di locazione — non è obbligatorio, ma velocizza la pratica.</p></div></div>
              <div className="step r"><div className="step-n">6</div><div className="step-body"><div className="step-title">Allega documenti (facoltativo)</div><p>Puoi caricare contratto di affitto, atto di proprietà, o altri documenti utili. L&apos;unico caso in cui un allegato è <strong>obbligatorio</strong> è per i cittadini extracomunitari: serve il permesso di soggiorno.</p></div></div>
              <div className="step r"><div className="step-n">7</div><div className="step-body"><div className="step-title">Controlla e invia</div><p>Rivedi il riepilogo, accetta l&apos;informativa e invia. Riceverai una <strong>ricevuta con numero di protocollo</strong> — salvala. Se ci sono altri maggiorenni nella famiglia, ognuno dovrà entrare su ANPR con il proprio SPID e confermare.</p></div></div>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Cosa succede dopo l&apos;invio</div>
              <p>Il Comune ha <strong>2 giorni lavorativi</strong> per registrare la tua dichiarazione &quot;con riserva&quot;. Da quel momento la tua residenza è già ufficialmente cambiata (decorre dalla data di invio). Poi parte una fase di <strong>accertamento di 45 giorni</strong>: di solito i vigili passano a verificare che tu abiti davvero lì. Se tutto è ok, la pratica viene accolta definitivamente. Puoi seguire lo stato nella sezione &quot;Le tue richieste&quot; su ANPR.</p>
            </div>
          </div>

          {/* ALLO SPORTELLO */}
          <div className="sec r" id="sportello">
            <div className="sec-tag">Alternativa</div>
            <h2>Come farlo allo sportello del Comune</h2>
            <p>Se non hai SPID o CIE, puoi ancora fare il cambio di persona. Ecco cosa ti serve:</p>
            <div className="glossary">
              <div className="gl-item"><strong>Documento di identità</strong> — carta d&apos;identità o passaporto in corso di validità, di tutti i maggiorenni che si trasferiscono.</div>
              <div className="gl-item"><strong>Codice fiscale</strong> — di tutti i componenti della famiglia che cambiano residenza, compresi i minorenni.</div>
              <div className="gl-item"><strong>Contratto di affitto</strong> — se sei in affitto. Non è obbligatorio ma lo chiedono quasi sempre.</div>
              <div className="gl-item"><strong>Dati catastali dell&apos;immobile</strong> — li trovi sul contratto di affitto o sull&apos;atto di acquisto. Servono per identificare l&apos;appartamento.</div>
              <div className="gl-item"><strong>Permesso di soggiorno</strong> — obbligatorio solo per cittadini extracomunitari.</div>
            </div>
            <p>In molti comuni serve prendere <strong>appuntamento</strong>. Controlla il sito del tuo Comune prima di presentarti.</p>
          </div>

          {/* COSA AGGIORNARE DOPO */}
          <div className="sec bh r" id="dopo">
            <div className="sec-tag">Dopo il cambio</div>
            <h2>Cosa devi aggiornare dopo il cambio</h2>
            <p>Cambiare residenza è solo il primo passo. Ecco tutto quello che si aggiorna automaticamente e quello che devi fare tu.</p>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>✅ SI AGGIORNA DA SOLO</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Patente di guida</div><div className="dcard-v">Automatico tramite Motorizzazione</div></div>
                <div className="dcard"><div className="dcard-l">Archivio auto (ANV/PRA)</div><div className="dcard-v">Il Comune comunica alla Motorizzazione</div></div>
                <div className="dcard"><div className="dcard-l">Liste elettorali</div><div className="dcard-v">Automatico, nuovo seggio assegnato</div></div>
                <div className="dcard"><div className="dcard-l">Agenzia delle Entrate</div><div className="dcard-v">Aggiornata automaticamente via ANPR</div></div>
              </div>
            </div>

            <div className="dblock" style={{ marginTop: '24px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>⚡ DEVI FARLO TU</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Medico di base</div><div className="dcard-v">Nuovo medico nella ASL del nuovo comune</div></div>
                <div className="dcard"><div className="dcard-l">Utenze (luce, gas, acqua)</div><div className="dcard-v">Voltura o nuovo contratto</div></div>
                <div className="dcard"><div className="dcard-l">Banca e Poste</div><div className="dcard-v">Aggiorna indirizzo per corrispondenza</div></div>
                <div className="dcard"><div className="dcard-l">Assicurazione auto</div><div className="dcard-v">Comunica il cambio — può cambiare il premio</div></div>
                <div className="dcard"><div className="dcard-l">INPS / datore di lavoro</div><div className="dcard-v">Aggiorna per buste paga e comunicazioni</div></div>
                <div className="dcard"><div className="dcard-l">Carta d&apos;identità</div><div className="dcard-v">Aggiorna alla prossima scadenza (non urgente)</div></div>
              </div>
            </div>

            <div className="ib warn r" style={{ marginTop: '24px' }}><div className="ib-t">⚠️ Il medico di base è la priorità</div>
              <p>Se cambi Comune, perdi automaticamente il medico di base. Devi scegliere un nuovo medico nella <Tip t="Azienda Sanitaria Locale. Ogni territorio ha la sua. Puoi trovare quella del tuo nuovo comune cercando 'ASL + nome comune' su Google.">ASL</Tip> del nuovo Comune. Fino a quando non lo fai, non puoi farti prescrivere ricette o visite. Fallo <strong>subito</strong> dopo il cambio — puoi farlo online sul sito della tua ASL o di persona.</p>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Giulia, da Milano a Bologna</h2>
            <p>Giulia ha 27 anni, lavora come grafica e ha trovato un appartamento in affitto a Bologna. Vive a Milano con i genitori. Ecco come ha fatto il cambio di residenza.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>PRIMA — Situazione di partenza</div>
              <div className="db-row"><span>Residenza attuale</span><span>Milano, Via Padova 42 (casa dei genitori)</span></div>
              <div className="db-row"><span>Nuova casa</span><span>Bologna, Via Zamboni 18 (affitto)</span></div>
              <div className="db-row"><span>Contratto di affitto</span><span>Registrato, decorrenza 1° marzo 2026</span></div>
              <div className="db-row"><span>Ha lo SPID?</span><span>Sì (PosteID)</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>DURANTE — Cosa ha fatto Giulia</div>
              <div className="db-row"><span>5 marzo</span><span>Accede ad ANPR con SPID, sceglie &quot;nuova residenza&quot;</span></div>
              <div className="db-row"><span>5 marzo</span><span>Inserisce indirizzo Bologna, allega contratto di affitto</span></div>
              <div className="db-row"><span>5 marzo</span><span>Invia la dichiarazione — riceve protocollo via email</span></div>
              <div className="db-row"><span>7 marzo</span><span>Comune di Bologna registra con riserva</span></div>
              <div className="db-row"><span>20 marzo</span><span>Vigili passano a verificare — Giulia è a casa, tutto ok</span></div>
              <div className="db-row"><span>7 aprile</span><span>Pratica accolta definitivamente</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>DOPO — Cosa ha aggiornato</div>
              <div className="db-row"><span>Medico di base</span><span>Nuovo medico scelto online sul sito dell&apos;ASL Bologna</span></div>
              <div className="db-row"><span>Banca</span><span>Aggiornato indirizzo dall&apos;app in 2 minuti</span></div>
              <div className="db-row"><span>Datore di lavoro</span><span>Comunicato al reparto HR per la busta paga</span></div>
              <div className="db-row"><span>Assicurazione auto</span><span>Non ha la macchina — niente da fare</span></div>
              <div className="db-row"><span>Patente</span><span>Aggiornata automaticamente — non ha fatto nulla</span></div>
              <div className="db-row db-total"><span>Costo totale</span><span>0€</span></div>
              <div className="db-row db-total"><span>Tempo totale</span><span>10 minuti online + 5 minuti per medico e banca</span></div>
            </div>
          </div>

          {/* ERRORI COMUNI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Rimandare &quot;tanto non succede nulla&quot;</div><p>Succede eccome. Se compri casa con agevolazioni prima casa e non trasferisci la residenza entro 18 mesi, perdi migliaia di euro. Se ti fermano e il libretto non è aggiornato, rischi una multa da 727 a 3.629€. E se ricevi una cartella esattoriale al vecchio indirizzo, risulta &quot;notificata&quot; anche se non l&apos;hai mai vista.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Dichiarare una residenza fittizia</div><p>Dichiarare di vivere dove non vivi è <strong>falso in atto pubblico</strong> (art. 483 del Codice Penale). Il Comune manda i vigili a verificare: se non ti trovano, la pratica viene annullata. Se lo fai per ottenere agevolazioni fiscali, rischi anche accuse di frode.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Dimenticare il medico di base</div><p>Se cambi Comune e non scegli un nuovo medico, resti senza copertura. Niente ricette, niente visite, niente impegnative. Fallo il giorno stesso del cambio.</p></div>
          </div>

          {/* FAQ */}
          <div className="sec bh r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/spid" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Ti serve per fare il cambio online su ANPR.</div><span className="rc-ar">→</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Residenza entro 18 mesi per le agevolazioni.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">La residenza influenza il nucleo familiare ISEE.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Portale ANPR</div><div className="sbtool-d">Fai il cambio online</div></div></a>
            <a href="https://www.anagrafenazionale.interno.it/area-cittadino/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Certificati anagrafici</div><div className="sbtool-d">Scarica gratis da ANPR</div></div></a>
            <a href="https://www.ilportaledellautomobilista.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🚗</span><div><div className="sbtool-n">Portale Automobilista</div><div className="sbtool-d">Attestazione residenza veicolo</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/spid" className="sbguide">🪪 Faccio lo SPID<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="cambio-residenza" />
      <Footer />
    </>
    </div>
  );
}
