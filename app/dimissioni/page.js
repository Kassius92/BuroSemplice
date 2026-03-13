import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizDimissioni from '@/components/QuizDimissioni';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Dimissioni Volontarie Online 2026: Procedura, Preavviso e TFR',
  description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica INPS, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga. Guida gratuita.',
  keywords: ["dimissioni", "dimissioni volontarie", "dimissioni online", "preavviso dimissioni", "come dare dimissioni", "TFR dimissioni", "giusta causa", "ClicLavoro", "ultima busta paga", "ferie non godute"],
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
  twitter: { card: 'summary_large_image', title: 'Dimissioni Volontarie Online 2026: Procedura, Preavviso e TFR', description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica INPS, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga. Guida gratuita.', images: ['https://zeroburocrazia.it/ogdimissioni.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: 'Come funziona' },
  { id: 'procedura', label: 'Procedura online' },
  { id: 'preavviso', label: 'Preavviso' },
  { id: 'soldi', label: 'TFR e soldi' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso revocare le dimissioni?", a: "<strong>S\u00EC, entro 7 giorni</strong> dall\u2019invio del modulo telematico. Accedi di nuovo al portale e revoca. Dopo i 7 giorni non \u00E8 pi\u00F9 possibile \u2014 a meno che il datore non accetti di riprenderti." },
  { q: "Cosa succede se non rispetto il preavviso?", a: "Il datore pu\u00F2 <strong>trattenerti dall\u2019ultima busta paga</strong> l\u2019indennit\u00E0 sostitutiva del preavviso \u2014 ti scala lo stipendio dei giorni non lavorati. Per\u00F2 puoi accordarti per rinunciare al preavviso: se lui accetta, nessuna trattenuta." },
  { q: "Le ferie non godute vengono pagate?", a: "<strong>S\u00EC.</strong> Nell\u2019ultima busta paga ricevi: stipendio dei giorni lavorati, ferie e permessi non goduti, ratei di tredicesima (e quattordicesima se prevista), e il TFR. Il TFR pu\u00F2 arrivare anche qualche settimana dopo." },
  { q: "Le dimissioni durante il periodo di prova?", a: "Durante il <strong>periodo di prova</strong> non serve la procedura telematica. Puoi dimetterti liberamente, senza preavviso e senza motivazione. Basta una comunicazione scritta \u2014 anche un\u2019email." },
  { q: "Posso dimettermi se sono in malattia?", a: "<strong>S\u00EC</strong>, puoi inviare le dimissioni durante la malattia. Per\u00F2 la malattia <strong>sospende il preavviso</strong>: la data di fine rapporto slitta di tanti giorni quanti sono quelli di malattia." },
  { q: "Ho diritto alla NASpI se mi dimetto?", a: "<strong>No</strong>, le dimissioni volontarie non danno diritto alla NASpI. Fanno eccezione le dimissioni per <strong>giusta causa</strong> e quelle durante il <strong>periodo di maternit\u00E0/paternit\u00E0</strong> (primo anno di vita del figlio)." },
  { q: "Devo avvisare il datore prima di fare la procedura online?", a: "Non sei obbligato per legge, ma \u00E8 <strong>fortemente consigliato</strong>. Avvisare il responsabile prima di inviare il modulo \u00E8 una questione di rispetto professionale e ti aiuta a gestire meglio preavviso e passaggio di consegne." },
  { q: "Chi \u00E8 escluso dalla procedura telematica?", a: "Dipendenti pubblici, lavoratori domestici (colf, badanti), chi \u00E8 in periodo di prova, e chi si dimette nelle sedi conciliative. Anche i <strong>genitori con figli sotto i 3 anni</strong> devono convalidare le dimissioni all\u2019Ispettorato Territoriale del Lavoro." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Dimissioni volontarie online 2026: procedura, preavviso e TFR', description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica, preavviso CCNL, revoca e TFR.', url: '/dimissioni', image: 'ogdimissioni.png', datePublished: '2026-03-07', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-lavoro">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
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
            <div className="cat-badge">{'\uD83D\uDCBC'} Lavoro</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Mi <em>dimetto</em></h1>
            <p className="hero-sub">Come dare le dimissioni nel modo giusto. Procedura online, preavviso, TFR e gli errori che ti costano soldi.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Ministero del Lavoro · INPS · D.Lgs. 151/2015 · CCNL Commercio e Metalmeccanici</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">Online</div><div className="hl">procedura solo<br/>telematica</div></div>
            <div className="hstat"><div className="hn">7gg</div><div className="hl">tempo per<br/>revocare</div></div>
            <div className="hstat"><div className="hn">SPID</div><div className="hl">serve per<br/>accedere</div></div>
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
              <a href="/tfr" className="ps">💰 TFR</a>
              <a href="/naspi" className="ps">💼 NASpI</a>
              <span className="ps ps-soon">📄 Busta paga: come leggerla <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Invia dimissioni</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Domanda NASpI</a>
              <a href="https://www.cliclavoro.gov.it" target="_blank" rel="noopener noreferrer" className="ps">💼 ClicLavoro</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCBB'}</div><div className="sn">Solo online</div><div className="sl">procedura telematica obbligatoria</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID / CIE</div><div className="sl">per accedere al portale</div></div>
                <div className="sc    r d3"><div className="si">{'\u23F1'}</div><div className="sn">5 minuti</div><div className="sl">per completare la procedura</div></div>
                <div className="sc    r d1"><div className="si">{'\u21A9\uFE0F'}</div><div className="sn">7 giorni</div><div className="sl">per revocare le dimissioni</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">Preavviso</div><div className="sl">dipende da CCNL e anzianit&agrave;</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">TFR</div><div className="sl">ti spetta sempre, in ogni caso</div></div>
              </div>
            </div>
            <QuizDimissioni />
          </div>


          {/* COME FUNZIONA */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Come funzionano le dimissioni nel 2026</h2>
            <p>Dal 2016, le dimissioni nel settore privato si fanno <strong>solo online</strong>. Niente lettere cartacee — devi usare il portale del Ministero del Lavoro. Il modulo viene inviato automaticamente al datore e all&apos;Ispettorato del Lavoro.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Procedura telematica</strong> — L&apos;unico modo legale per dimettersi dal settore privato. Si fa online su servizi.lavoro.gov.it con <Tip t="L'identità digitale per accedere ai servizi della PA. Se non ce l'hai, fallo prima — ci vogliono 15 minuti.">SPID</Tip> o CIE. Ci vogliono 5 minuti.</div>
              <div className="gl-item r d2"><strong>Data di decorrenza</strong> — Il giorno <strong>dopo</strong> il tuo ultimo giorno di lavoro. Se il tuo ultimo giorno &egrave; il 31 marzo, la data di decorrenza &egrave; il 1° aprile. &Egrave; l&apos;errore pi&ugrave; comune nel modulo.</div>
              <div className="gl-item r d3"><strong>Preavviso</strong> — Il periodo tra quando comunichi le dimissioni e il tuo ultimo giorno effettivo. La durata dipende dal tuo <Tip t="Contratto Collettivo Nazionale di Lavoro: l'accordo che regola stipendi, ferie, preavviso e diritti per il tuo settore. Lo trovi scritto nella busta paga.">CCNL</Tip>, il tuo livello e la tua anzianit&agrave;. Se non lo rispetti, il datore ti trattiene i soldi.</div>
              <div className="gl-item r d4"><strong>TFR (liquidazione)</strong> — I soldi che il datore ha accantonato per te durante gli anni di lavoro. Ti spettano <strong>sempre</strong>, anche se ti dimetti. Circa una mensilit&agrave; per ogni anno di lavoro.</div>
              <div className="gl-item r d1"><strong>Revoca</strong> — Hai cambiato idea? Hai <strong>7 giorni</strong> dal momento in cui invii il modulo per revocare le dimissioni. Dopo, sono definitive.</div>
              <div className="gl-item r d2"><strong>Giusta causa</strong> — Se il datore viola gravemente i suoi obblighi (non ti paga, mobbing, molestie), puoi dimetterti senza preavviso e hai diritto alla <a href="/naspi">NASpI</a>. Serve dimostrare la violazione.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Chi &egrave; escluso dalla procedura online</div>
              <p><strong>Dipendenti pubblici</strong>, <strong>lavoratori domestici</strong> (colf, badanti), chi &egrave; in <strong>periodo di prova</strong>, e chi si dimette in <strong>sede conciliativa</strong> (sindacato, Ispettorato). In questi casi basta una comunicazione scritta. I <strong>genitori con figli sotto i 3 anni</strong> devono convalidare le dimissioni all&apos;Ispettorato.</p>
            </div>
          </div>

          {/* PROCEDURA ONLINE */}
          <div className="sec r" id="procedura">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come dare le dimissioni online</h2>
            <p>Puoi farlo da solo in 5 minuti o farti aiutare gratis.</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Opzione A: Fai da te (5 minuti)</strong><p>Vai su <strong>servizi.lavoro.gov.it</strong> e accedi con SPID o CIE. Seleziona &quot;Dimissioni volontarie&quot;, verifica i dati del rapporto di lavoro (precompilati), indica la <Tip t="Il giorno DOPO il tuo ultimo giorno di lavoro. Se il tuo ultimo giorno è il 31 marzo, scrivi 1° aprile. È l'errore più comune.">data di decorrenza</Tip> e invia. Conserva la ricevuta.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Opzione B: <Tip t="CGIL, CISL, UIL, ACLI. Fanno tutto gratis per legge: verificano i dati, calcolano il preavviso e inviano il modulo.">Patronato</Tip> o sindacato (gratis)</strong><p>Vai a un patronato con i documenti. Fanno tutto loro: verificano dati, calcolano il preavviso corretto, inviano il modulo. <strong>Consigliato</strong> se non sei sicuro della data o del preavviso.</p></div></div>
            </div>

            <h3>Cosa ti serve</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDD10'}</div><div className="clb"><strong>SPID o CIE</strong><span className="note">Per accedere al portale. Se non ce l&apos;hai, <a href="/spid">fallo in 15 minuti</a>.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Dati del rapporto di lavoro</strong><span className="note">Codice fiscale del datore, data di assunzione, tipo di contratto. Li trovi nella busta paga.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCC5'}</div><div className="clb"><strong>La data giusta di decorrenza</strong><span className="note">Calcola il preavviso PRIMA di compilare il modulo (vedi sezione sotto)</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} La data di decorrenza NON &egrave; il giorno in cui invii il modulo</div>
              <p>&Egrave; il <strong>giorno dopo il tuo ultimo giorno di lavoro</strong>. Se il tuo ultimo giorno &egrave; il 31 marzo, scrivi 1° aprile. Sbagliare questa data &egrave; l&apos;errore pi&ugrave; comune e crea problemi con preavviso e competenze di fine rapporto.</p>
            </div>
          </div>

          {/* PREAVVISO */}
          <div className="sec r" id="preavviso">
            <div className="sec-tag">Le tempistiche</div>
            <h2>Il preavviso: quanti giorni devi dare</h2>
            <p>La durata dipende dal tuo <Tip t="Contratto Collettivo Nazionale di Lavoro: il contratto che regola il tuo settore. Trovi il nome del CCNL sulla busta paga.">CCNL</Tip>, il tuo <Tip t="Il numero (es. IV livello, V livello) che indica il tuo inquadramento. Lo trovi sulla busta paga, di solito vicino alla voce 'livello' o 'qualifica'.">livello</Tip> e la tua anzianit&agrave;.</p>

            <h3>CCNL Commercio e Terziario</h3>
            <p>Nel Commercio il preavviso <strong>non parte dal giorno dopo le dimissioni</strong> ma dal 1° o dal 16° del mese.</p>
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
            <p>Nei Metalmeccanici il preavviso parte dal <strong>giorno successivo</strong>. Giorni di calendario (inclusi weekend).</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Area</th><th>Fino a 5 anni</th><th>5-10 anni</th><th>Oltre 10 anni</th></tr></thead>
                <tbody>
                  <tr><td>A1 (ex dirigenti tecnici)</td><td>2 mesi</td><td>3 mesi</td><td>4 mesi</td></tr>
                  <tr><td>B / C (ex 5°-7°)</td><td>1 mese</td><td>1,5 mesi</td><td>2 mesi</td></tr>
                  <tr><td>D (ex 1°-3°)</td><td>10 giorni</td><td>15 giorni</td><td>20 giorni</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Dove trovo il mio livello?</div>
              <p>Guarda la <strong>busta paga</strong>: c&apos;&egrave; scritto il livello di inquadramento e il CCNL applicato. Conoscere il livello &egrave; fondamentale per calcolare i giorni corretti.</p>
            </div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Ferie e malattia sospendono il preavviso</div><p>Se vai in malattia durante il preavviso, il conteggio si ferma e la data di uscita slitta in avanti. Stesso discorso per le ferie (salvo accordo scritto col datore).</p></div>
          </div>

          {/* TFR E SOLDI */}
          <div className="sec r" id="soldi">
            <div className="sec-tag">I soldi</div>
            <h2>TFR, ultima busta paga e competenze</h2>
            <p>Quando ti dimetti, il datore deve pagarti tutto quello che ti spetta. Non &egrave; un favore — &egrave; un obbligo di legge.</p>

            <div className="ib tip r d1">
              <div className="ib-t">{'\uD83D\uDCB0'} Cosa ricevi nell&apos;ultima busta paga</div>
              <p><strong>Stipendio</strong> dei giorni lavorati, <strong>ferie e permessi non goduti</strong> (monetizzati), <strong>ratei di tredicesima</strong> (e quattordicesima se prevista). Tutto arriva con l&apos;ultima busta paga.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">{'\uD83D\uDCB0'} <Tip t="Trattamento di Fine Rapporto: i soldi che il datore ha accantonato per te ogni mese. Circa una mensilità per ogni anno di lavoro. Ti spettano sempre, anche se ti dimetti.">TFR</Tip> (liquidazione)</div>
              <p>Il TFR ti spetta <strong>sempre</strong>, anche con dimissioni volontarie. Circa <strong>una mensilit&agrave; per ogni anno di lavoro</strong>. Tempi: alcuni datori lo pagano con l&apos;ultima busta, altri entro 30-45 giorni. Se &egrave; in un fondo pensione, segui le regole del fondo.</p>
            </div>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Controlla l&apos;ultima busta paga</div>
              <p>Verifica che ci siano tutte le voci: ferie residue, permessi, ratei, eventuale <Tip t="Se non lavori tutti i giorni di preavviso, il datore può trattenerti lo stipendio dei giorni mancanti. Si chiama 'indennità sostitutiva del preavviso'.">indennit&agrave; sostitutiva</Tip>. Se manca qualcosa, fatti controllare la busta da un patronato o sindacato.</p>
            </div>
            <a href="/tfr" className="xlink r"><span className="xlink-em">{'\uD83D\uDCB0'}</span><div className="xlink-t"><strong>TFR: cos&apos;&egrave; e quando spetta</strong> — Come si calcola, quando arriva, e come si tassa.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* GIUSTA CAUSA */}
          <div className="sec breve-hide r" id="giusta-causa">
            <div className="sec-tag">Caso speciale</div>
            <h2>Dimissioni per <Tip t="Il datore ha violato gravemente i suoi obblighi: non ti paga, mobbing, molestie, trasferimento immotivato. Puoi dimetterti senza preavviso e hai diritto alla NASpI.">giusta causa</Tip></h2>
            <p>Se il datore ha commesso violazioni gravi, puoi dimetterti <strong>senza preavviso</strong> e hai diritto alla <strong>NASpI</strong>.</p>

            <h3>Quando si parla di giusta causa</h3>
            <div className="icgrid r">
              <div className="ic r d1"><div className="ic-n">Mancato pagamento dello stipendio</div><div className="ic-d">Se il datore non ti paga (o lo paga sistematicamente in ritardo).</div></div>
              <div className="ic r d2"><div className="ic-n">Mobbing o molestie</div><div className="ic-d">Comportamenti persecutori, molestie sessuali o psicologiche.</div></div>
              <div className="ic r d3"><div className="ic-n">Mancato versamento dei contributi</div><div className="ic-d">Se il datore non versa i contributi INPS.</div></div>
              <div className="ic r d4"><div className="ic-n">Variazioni peggiorative</div><div className="ic-d">Demansionamento, trasferimento immotivato, modifica sostanziale senza consenso.</div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Conserva le prove</div>
              <p>Per la giusta causa, devi poter <strong>dimostrare</strong> la violazione (email, buste paga incomplete, testimonianze, diffide). Senza prove, l&apos;INPS potrebbe non riconoscerti la NASpI. Rivolgiti a un sindacato o avvocato prima di procedere.</p>
            </div>
            <a href="/naspi" className="xlink r"><span className="xlink-em">{'\uD83D\uDCBC'}</span><div className="xlink-t"><strong>NASpI — Disoccupazione</strong> — Se ti dimetti per giusta causa, hai diritto alla disoccupazione. Scopri quanto e come.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>I 5 errori pi&ugrave; comuni</h2>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Sbagliare la data di decorrenza</div><p>&Egrave; il giorno <strong>dopo</strong> il tuo ultimo giorno di lavoro, non il giorno in cui invii il modulo. Sbagliare crea trattenute in busta paga o contestazioni.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non calcolare il preavviso prima di inviare</div><p>Prima di compilare il modulo, calcola esattamente quanti giorni devi dare. Conta il <Tip t="Contratto Collettivo Nazionale di Lavoro. Regola preavviso, ferie, stipendi per il tuo settore.">CCNL</Tip>, il livello e l&apos;anzianit&agrave;. Nel dubbio, patronato.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Dimenticare la revoca entro 7 giorni</div><p>Se cambi idea, hai <strong>solo 7 giorni</strong>. Dopo, le dimissioni sono definitive. Se hai dubbi, meglio aspettare prima di inviare.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non controllare l&apos;ultima busta paga</div><p>Ferie non pagate, ratei mancanti, TFR errato. Controlla tutto e, se qualcosa non torna, fatti aiutare da un sindacato.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Pensare di avere diritto alla NASpI</div><p>Le dimissioni volontarie <strong>non</strong> danno diritto alla NASpI. Solo quelle per giusta causa o durante maternit&agrave;/paternit&agrave;.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Elena si dimette e riceve 8.200€</h2>

            <p><strong>Elena ha 29 anni</strong>, vive a Firenze e lavora come impiegata amministrativa (CCNL Commercio, IV livello) da 3 anni. Stipendio: 1.500€ netti. Ha trovato un lavoro migliore e vuole dimettersi.</p>

            <h3>Cosa fa Elena</h3>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Luned&igrave; 3 marzo: avvisa il capo</strong><p>Parla col responsabile, spiega la situazione. Non &egrave; obbligatorio ma &egrave; la cosa giusta da fare.</p></div></div>
              <div className="step r d2"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Marted&igrave; 4 marzo: calcola il preavviso</strong><p>IV livello Commercio, meno di 5 anni: <strong>15 giorni di calendario</strong>. Nel CCNL Commercio il preavviso parte dal 16 del mese. Quindi: preavviso dal 16 marzo, ultimo giorno di lavoro il 31 marzo. Data di decorrenza: <strong>1° aprile</strong>.</p></div></div>
              <div className="step r d3"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Marted&igrave; 4 marzo: invia il modulo online</strong><p>Va su servizi.lavoro.gov.it con lo SPID, compila il modulo, inserisce data di decorrenza 1° aprile, invia. Riceve la ricevuta con protocollo. Tempo: 5 minuti.</p></div></div>
            </div>

            <h3>Cosa riceve Elena</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Ultima busta paga (marzo)</span><span className="db-new">~1.500€</span></div>
              <div className="db-row"><span className="db-label">Ferie non godute (8 giorni)</span><span className="db-new">~550€</span></div>
              <div className="db-row"><span className="db-label">Ratei tredicesima (3/12)</span><span className="db-new">~375€</span></div>
              <div className="db-row"><span className="db-label">TFR (3 anni di lavoro)</span><span className="db-new">~4.500€</span></div>
              <div className="db-row"><span className="db-label">Permessi non goduti</span><span className="db-new">~280€</span></div>
              <div className="db-row db-total"><span className="db-label">Totale ricevuto</span><span className="db-val">~7.200€</span></div>
            </div>

            <p>Elena controlla la busta paga e verifica che tutte le voci siano corrette. Il TFR arriva 30 giorni dopo, su un bonifico separato. In totale ha ricevuto <strong>tutto quello che le spettava</strong>, senza intoppi — perch&eacute; ha fatto le cose nell&apos;ordine giusto.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Dimettersi nel modo giusto &egrave; semplice se segui 3 regole: <strong>1) calcola il preavviso prima di compilare il modulo</strong>, <strong>2) la data di decorrenza &egrave; il giorno DOPO l&apos;ultimo giorno di lavoro</strong>, <strong>3) controlla l&apos;ultima busta paga</strong> voce per voce. Chi lo fa bene, esce pulito e con tutti i soldi in tasca.</p>
            </div>
          </div>

          <div className="aff-block r">
            <div className="aff-label">Ti dimetti per metterti in proprio?</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Fiscozen &mdash; Commercialista online per partite IVA</div>
                <div className="aff-text">Se apri partita IVA, Fiscozen ti gestisce tutto: apertura gratuita, fatturazione elettronica, commercialista dedicato. Forfettario e ordinario semplificato.</div>
                <div className="aff-note">* Link in partnership &mdash; se ti iscrivi, ZeroBurocrazia riceve una piccola commissione. A te non cambia nulla sul prezzo.</div>
              </div>
              <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="aff-btn">Prova Fiscozen gratis {'\u2192'}</a>
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
              <a href="/tfr" className="rc"><span className="rc-e">💰</span><div className="rc-t">TFR</div><div className="rc-d">Dopo le dimissioni ti spetta la liquidazione.</div><span className="rc-ar">→</span></a>
              <a href="/naspi" className="rc"><span className="rc-e">💼</span><div className="rc-t">NASpI</div><div className="rc-d">Se sei stato licenziato, hai diritto alla NASpI.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Controlla la CU del vecchio datore per il 730.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Invia dimissioni</div><div className="sbtool-d">Ministero del Lavoro — invia online</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Domanda NASpI</div><div className="sbtool-d">Dopo le dimissioni per giusta causa</div></div></a>
            <a href="https://www.cliclavoro.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">💼</span><div><div className="sbtool-n">ClicLavoro</div><div className="sbtool-d">Portale pubblico del lavoro</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/tfr" className="sbguide">💰 TFR<span className="sbg-ar">→</span></a>
            <a href="/naspi" className="sbguide">💼 NASpI<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">📄 Busta paga: come leggerla<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="dimissioni" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
