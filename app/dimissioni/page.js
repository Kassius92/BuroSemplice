import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizDimissioni from '@/components/QuizDimissioni';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Dimissioni Volontarie Online 2026: Procedura, Preavviso e TFR',
  description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica INPS, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga. Guida gratuita.',
  alternates: { canonical: 'https://zeroburocrazia.it/dimissioni' },
  openGraph: {
    title: 'Dimissioni Volontarie Online 2026: Procedura, Preavviso e TFR',
    description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica INPS, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga. Guida gratuita.',
    url: 'https://zeroburocrazia.it/dimissioni',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogdimissioni.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimissioni Volontarie Online 2026: Procedura, Preavviso e TFR',
    description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica INPS, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga. Guida gratuita.',
    images: ['https://zeroburocrazia.it/ogdimissioni.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: 'Come funziona' },
  { id: 'procedura', label: 'Procedura online' },
  { id: 'preavviso', label: 'Preavviso' },
  { id: 'soldi', label: 'TFR e soldi' },
  { id: 'giusta-causa', label: 'Giusta causa', bh: true },
  { id: 'errori', label: 'Errori da evitare', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso revocare le dimissioni?", a: "<strong>Sì, entro 7 giorni</strong> dalla data di invio del modulo telematico. Basta accedere di nuovo al portale e revocare la comunicazione. Dopo i 7 giorni non è più possibile — a meno che il datore di lavoro non accetti di riprenderti." },
  { q: "Cosa succede se non rispetto il preavviso?", a: "Il datore di lavoro può <strong>trattenere dalla tua ultima busta paga</strong> l'indennità sostitutiva del preavviso — in pratica ti scala lo stipendio dei giorni che non hai lavorato. In alternativa, puoi accordarti con il datore per rinunciare al preavviso: se lui è d'accordo, nessuna trattenuta." },
  { q: "Le ferie non godute vengono pagate?", a: "<strong>Sì.</strong> Nell'ultima busta paga ricevi: stipendio dei giorni lavorati, ferie e permessi non goduti, ratei di tredicesima (e quattordicesima se prevista), e il TFR. Il TFR può arrivare anche qualche settimana dopo l'ultima busta paga." },
  { q: "Le dimissioni durante il periodo di prova?", a: "Durante il <strong>periodo di prova</strong> non serve la procedura telematica. Puoi dimetterti (e il datore può licenziarti) liberamente, senza preavviso e senza motivazione. Basta una comunicazione scritta — anche una email." },
  { q: "Devo dare le dimissioni se sono un collaboratore domestico (colf/badante)?", a: "<strong>No</strong>, il lavoro domestico è escluso dalla procedura telematica. In questo caso le dimissioni si comunicano con una lettera scritta al datore di lavoro, rispettando il preavviso previsto dal contratto." },
  { q: "Posso dimettermi se sono in malattia?", a: "<strong>Sì</strong>, puoi inviare le dimissioni anche durante la malattia. Però attenzione: la malattia <strong>sospende il preavviso</strong>. Questo significa che la data di fine rapporto slitta in avanti di tanti giorni quanti sono quelli di malattia." },
  { q: "Ho diritto alla NASpI se mi dimetto?", a: "<strong>No</strong>, le dimissioni volontarie non danno diritto alla NASpI. Fanno eccezione le dimissioni per <strong>giusta causa</strong> e quelle durante il <strong>periodo di maternità/paternità</strong> (primo anno di vita del figlio). In questi casi puoi chiedere la <a href='/naspi'>NASpI</a>." },
  { q: "Devo comunicare le dimissioni al datore di lavoro prima di fare la procedura online?", a: "Non sei obbligato per legge, ma è fortemente consigliato. Avvisare il tuo responsabile (anche a voce) prima di inviare il modulo telematico è una questione di rispetto professionale e ti aiuta a gestire meglio il preavviso e il passaggio di consegne." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Dimissioni volontarie online 2026: procedura, preavviso e TFR',
      description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica, preavviso CCNL, revoca e TFR.',
      url: '/dimissioni',
      image: 'ogdimissioni.png',
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
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Mi <em>dimetto</em></h1>
            <p className="hero-sub">Come dare le dimissioni nel modo giusto. Procedura online, preavviso, TFR e gli errori che ti costano soldi.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 8 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Ministero del Lavoro · INPS · D.Lgs. 151/2015 · CCNL Commercio e Metalmeccanici</div>
            <PrintButton />
          </div>

          <div className="hero-right">
            <div className="hstat">
              <div className="hn">Online</div>
              <div className="hl">procedura solo<br/>telematica</div>
            </div>
            <div className="hstat">
              <div className="hn">7gg</div>
              <div className="hl">tempo per<br/>revocare</div>
            </div>
            <div className="hstat">
              <div className="hn">SPID</div>
              <div className="hl">serve per<br/>accedere</div>
            </div>
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
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/dimissioni" className="ps active">✍️ Dimissioni</a><span className="pa">›</span>
              <a href="/naspi" className="ps">NASpI</a><span className="pa">›</span>
              <a href="/piva" className="ps">Partita IVA</a><span className="pa">›</span>
              <a href="/spid" className="ps">SPID</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💻</div><div className="sn">Solo online</div><div className="sl">procedura telematica obbligatoria</div></div>
                <div className="sc sg r d2"><div className="si">🔐</div><div className="sn">SPID / CIE</div><div className="sl">per accedere al portale</div></div>
                <div className="sc    r d3"><div className="si">⏱</div><div className="sn">5 minuti</div><div className="sl">per completare la procedura</div></div>
                <div className="sc    r d1"><div className="si">↩️</div><div className="sn">7 giorni</div><div className="sl">per revocare le dimissioni</div></div>
                <div className="sc    r d2"><div className="si">📋</div><div className="sn">Preavviso</div><div className="sl">dipende da CCNL e anzianità</div></div>
                <div className="sc bl r d3"><div className="si">💰</div><div className="sn">TFR</div><div className="sl">ti spetta sempre, in ogni caso</div></div>
              </div>
            </div>
            <QuizDimissioni />
          </div>

          {/* COME FUNZIONA */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Come funzionano le dimissioni nel 2026</h2>
            <p>Dal 2016, le dimissioni nel settore privato si fanno <strong>solo online</strong>. Niente più lettere cartacee — devi usare il portale del Ministero del Lavoro (che passa dall&apos;INPS per l&apos;autenticazione). Il modulo viene inviato automaticamente al datore di lavoro e all&apos;Ispettorato del Lavoro.</p>
            <p>Questa procedura è stata introdotta per combattere le &quot;dimissioni in bianco&quot; — fogli firmati in anticipo che i datori usavano per licenziare le persone (soprattutto donne) fingendo che si fossero dimesse.</p>

            <div className="ib tip r">
              <div className="ib-t">💡 Chi è escluso dalla procedura telematica</div>
              <p>Non tutti devono fare le dimissioni online. Sono esclusi: <strong>dipendenti pubblici</strong>, <strong>lavoratori domestici</strong> (colf, badanti), chi è in <strong>periodo di prova</strong>, e chi si dimette nelle <strong>sedi conciliative</strong> (sindacato, Ispettorato). In questi casi basta una comunicazione scritta. Anche i <strong>genitori con figli sotto i 3 anni</strong> hanno una procedura diversa: devono convalidare le dimissioni all&apos;Ispettorato Territoriale del Lavoro.</p>
            </div>
          </div>

          {/* PROCEDURA ONLINE */}
          <div className="sec r" id="procedura">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come dare le dimissioni online</h2>
            <p>Puoi farlo da solo in 5 minuti oppure farti aiutare gratis. Ecco le due strade:</p>

            <div className="ib tip r d1">
              <div className="ib-t">Opzione 1: Fai da te (5 minuti)</div>
              <p>Vai su <strong>servizi.lavoro.gov.it</strong> e accedi con SPID, CIE o CNS. Seleziona &quot;Dimissioni volontarie&quot;, verifica i dati del rapporto di lavoro (il sistema li precompila), indica la <strong>data di decorrenza</strong> (il giorno dopo il tuo ultimo giorno di lavoro) e invia. Ricevi una ricevuta con codice identificativo — <strong>conservala</strong>.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">Opzione 2: Patronato o sindacato (gratis)</div>
              <p>Vai a un patronato (CGIL, CISL, UIL, ACLI) o da un consulente del lavoro. Fanno tutto loro: verificano i dati, calcolano il preavviso corretto e inviano il modulo. È gratis per legge. <strong>Consigliato</strong> se non sei sicuro della data di decorrenza o del preavviso.</p>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ La data di decorrenza NON è il giorno in cui invii il modulo</div>
              <p>Errore classico. La &quot;data di decorrenza&quot; nel modulo è il <strong>giorno successivo al tuo ultimo giorno di lavoro</strong>. Se il tuo ultimo giorno è il 31 marzo, la data di decorrenza è il 1° aprile. Sbagliare questa data può creare problemi con il preavviso e le competenze di fine rapporto.</p>
            </div>

            <h3>Cosa ti serve</h3>
            <div className="ib tip r d1">
              <div className="ib-t">📱 SPID o CIE</div>
              <p>Per accedere al portale. Se non ce l&apos;hai, <a href="/spid">fallo in 15 minuti — è gratis</a>.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">📄 Dati del rapporto di lavoro</div>
              <p>Codice fiscale del datore, data di assunzione, tipo di contratto. Li trovi nella busta paga o nel contratto. Il portale precompila quasi tutto, ma è meglio averli pronti per verificare.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">📅 La data giusta di decorrenza</div>
              <p>Calcola il preavviso prima di compilare il modulo. Sbagliare la data è l&apos;errore più comune — leggi la sezione preavviso qui sotto.</p>
            </div>
          </div>

          {/* PREAVVISO */}
          <div className="sec r" id="preavviso">
            <div className="sec-tag">Le tempistiche</div>
            <h2>Il preavviso: quanti giorni devi dare</h2>
            <p>Il preavviso è il periodo tra quando comunichi le dimissioni e il tuo ultimo giorno effettivo di lavoro. La durata dipende da tre cose: il tuo <strong>CCNL</strong> (contratto collettivo), il tuo <strong>livello di inquadramento</strong> e la tua <strong>anzianità</strong>.</p>

            <h3>CCNL Commercio e Terziario</h3>
            <p>Attenzione: nel Commercio il preavviso <strong>non parte dal giorno dopo le dimissioni</strong> ma dal 1° o dal 16° del mese. Se invii le dimissioni il 5, il preavviso parte dal 16. Se le invii il 20, parte dal 1° del mese dopo.</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Livello</th><th>Fino a 5 anni</th><th>5-10 anni</th><th>Oltre 10 anni</th></tr></thead>
                <tbody>
                  <tr><td>Quadri / I livello</td><td>45 giorni</td><td>60 giorni</td><td>90 giorni</td></tr>
                  <tr><td>II e III livello</td><td>20 giorni</td><td>30 giorni</td><td>45 giorni</td></tr>
                  <tr><td>IV e V livello</td><td>15 giorni</td><td>20 giorni</td><td>30 giorni</td></tr>
                  <tr><td>VI e VII livello</td><td>10 giorni</td><td>15 giorni</td><td>20 giorni</td></tr>
                </tbody>
              </table>
            </div>

            <h3>CCNL Metalmeccanici (Industria)</h3>
            <p>Nei Metalmeccanici Federmeccanica il preavviso parte dal <strong>giorno successivo</strong> alla comunicazione. I giorni sono di calendario (inclusi weekend e festivi).</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Area</th><th>Fino a 5 anni</th><th>5-10 anni</th><th>Oltre 10 anni</th></tr></thead>
                <tbody>
                  <tr><td>A1 (ex dirigenti tecnici)</td><td>2 mesi</td><td>3 mesi</td><td>4 mesi</td></tr>
                  <tr><td>B / C (ex 5°-7° livello)</td><td>1 mese</td><td>1,5 mesi</td><td>2 mesi</td></tr>
                  <tr><td>D (ex 1°-3° livello)</td><td>10 giorni</td><td>15 giorni</td><td>20 giorni</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Dove trovo il mio livello?</div>
              <p>Guarda la <strong>busta paga</strong>: c&apos;è scritto il livello di inquadramento e il CCNL applicato. Se non lo trovi, chiedi all&apos;ufficio risorse umane. Conoscere il livello è fondamentale per calcolare i giorni di preavviso corretti.</p>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Se non rispetti il preavviso</div>
              <p>Il datore di lavoro può <strong>trattenerti l&apos;indennità sostitutiva</strong> dall&apos;ultima busta paga — in pratica ti scala lo stipendio dei giorni non lavorati. Puoi evitarlo accordandoti con il datore per la rinuncia al preavviso: se accetta, nessuna trattenuta.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Ferie e malattia sospendono il preavviso</div>
              <p>Se vai in malattia durante il preavviso, il conteggio si ferma e la data di uscita slitta in avanti. Stesso discorso per le ferie — a meno che non ci sia un accordo scritto con il datore.</p>
            </div>
          </div>

          {/* TFR E SOLDI */}
          <div className="sec r" id="soldi">
            <div className="sec-tag">I soldi</div>
            <h2>TFR, ultima busta paga e competenze</h2>
            <p>Quando ti dimetti, il datore di lavoro deve pagarti tutto quello che ti spetta. Non è un favore — è un obbligo di legge.</p>

            <div className="ib tip r d1">
              <div className="ib-t">💰 Cosa ricevi nell&apos;ultima busta paga</div>
              <p><strong>Stipendio</strong> dei giorni lavorati nell&apos;ultimo mese, <strong>ferie e permessi non goduti</strong> (monetizzati), <strong>ratei di tredicesima</strong> (e quattordicesima se prevista dal CCNL). Tutto questo arriva con l&apos;ultima busta paga, entro i tempi normali di pagamento.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">💰 TFR (liquidazione)</div>
              <p>Il TFR ti spetta <strong>sempre</strong>, anche se ti dimetti volontariamente. L&apos;importo è circa <strong>una mensilità per ogni anno di lavoro</strong>. I tempi di pagamento variano: alcuni datori lo pagano con l&apos;ultima busta, altri entro 30-45 giorni dalla cessazione. Se il TFR è in un fondo pensione, segui le regole del fondo.</p>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Controlla l&apos;ultima busta paga</div>
              <p>Verifica che siano incluse tutte le voci: ferie residue, permessi, ratei, eventuale indennità sostitutiva del preavviso. Se manca qualcosa, hai tempo per contestare. In caso di dubbio, fatti controllare la busta da un patronato o sindacato.</p>
            </div>
          </div>

          {/* GIUSTA CAUSA */}
          <div className="sec breve-hide r" id="giusta-causa">
            <div className="sec-tag">Caso speciale</div>
            <h2>Dimissioni per giusta causa</h2>
            <p>Se il tuo datore di lavoro ha commesso violazioni gravi, puoi dimetterti <strong>senza preavviso</strong> e hai diritto alla <strong>NASpI</strong> (disoccupazione). È l&apos;unico tipo di dimissione che ti dà accesso alla NASpI.</p>

            <h3>Quando si parla di giusta causa</h3>
            <div className="ib warn r d1">
              <div className="ib-t">Mancato pagamento dello stipendio</div>
              <p>Se il datore non ti paga lo stipendio (o lo paga sistematicamente in ritardo), è giusta causa.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">Mobbing o molestie</div>
              <p>Comportamenti persecutori, molestie sessuali o psicologiche sul luogo di lavoro.</p>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">Mancato versamento dei contributi</div>
              <p>Se il datore non versa i contributi previdenziali all&apos;INPS.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">Variazioni peggiorative</div>
              <p>Demansionamento, trasferimento immotivato, modifica sostanziale delle condizioni contrattuali senza il tuo consenso.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Conserva le prove</div>
              <p>Per le dimissioni per giusta causa, devi poter <strong>dimostrare</strong> la violazione del datore (email, buste paga incomplete, testimonianze, diffide). Senza prove, l&apos;INPS potrebbe non riconoscerti la NASpI. Rivolgiti a un sindacato o avvocato prima di procedere.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>I 5 errori più comuni</h2>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Sbagliare la data di decorrenza</div>
              <p>La data di decorrenza è il giorno <strong>dopo</strong> il tuo ultimo giorno di lavoro, non il giorno in cui invii il modulo. Se la sbagli, rischi trattenute in busta paga o contestazioni dal datore.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">⚠️ Non calcolare il preavviso prima di inviare</div>
              <p>Prima di compilare il modulo online, calcola esattamente quanti giorni di preavviso devi dare. Conta il CCNL, il livello e l&apos;anzianità. Nel dubbio, vai al patronato.</p>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Dimenticare la revoca entro 7 giorni</div>
              <p>Se cambi idea, hai <strong>solo 7 giorni</strong> per revocare. Dopo, le dimissioni sono definitive. Se hai dubbi, meglio aspettare prima di inviare.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">⚠️ Non controllare l&apos;ultima busta paga</div>
              <p>Molti non verificano: ferie non pagate, ratei mancanti, TFR errato. Controlla tutto e, se qualcosa non torna, fatti aiutare da un sindacato.</p>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Pensare di avere diritto alla NASpI</div>
              <p>Le dimissioni volontarie <strong>non</strong> danno diritto alla NASpI. Solo quelle per giusta causa o durante la maternità/paternità. Se ti dimetti e basta, niente disoccupazione.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CTA FINALE */}
          <div className="ctabanner r">
            <h3>Vuoi sapere esattamente il tuo preavviso e il TFR?</h3>
            <p>Ti calcoliamo i giorni di preavviso per il tuo CCNL e una stima del TFR spettante.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/naspi" className="rc"><span className="rc-e">💼</span><div className="rc-t">NASpI — Disoccupazione</div><div className="rc-d">Se ti dimetti per giusta causa, hai diritto alla disoccupazione.</div><span className="rc-ar">→</span></a>
              <a href="/piva" className="rc"><span className="rc-e">📂</span><div className="rc-t">Apro partita IVA</div><div className="rc-d">Ti metti in proprio? Leggi prima questa guida su costi e tasse reali.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">La CU dell&apos;ultimo datore va dichiarata. Non perdere detrazioni.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <div className="sb-cta">
            <div className="sb-ct">Ti serve un professionista?</div>
            <div className="sb-cd">Trova chi ti aiuta nella tua zona. Gratis.</div>
            <a href="#trova-professionista" className="sb-cb">Trova professionista →</a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">🛠 Strumenti</div>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Verifica la procedura</div></div></a>
            <a href="#preavviso" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Tabelle preavviso</div><div className="sbtool-d">Commercio e Metalmeccanici</div></div></a>
            <a href="#procedura" className="sbtool"><span className="sbtool-i">📝</span><div><div className="sbtool-n">Procedura online</div><div className="sbtool-d">Passo per passo</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/naspi" className="sbguide">💼 NASpI<span className="sbg-ar">→</span></a>
            <a href="/piva" className="sbguide">📂 Apro partita IVA<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="dimissioni" />
      <Footer variant="scheda" />
    </>
  );
}
