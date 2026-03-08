import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import QuizFiglio from '@/components/QuizFiglio';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
  description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
  alternates: { canonical: 'https://zeroburocrazia.it/figlio' },
  openGraph: {
    title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
    description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/figlio',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogfiglio.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
    description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
    images: ['https://zeroburocrazia.it/ogfiglio.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'Sintesi' },
  { id: 'quadro', label: 'Il quadro' },
  { id: 'congedi', label: 'Congedi' },
  { id: 'bonus', label: 'Bonus' },
  { id: 'documenti', label: 'Documenti', bh: true },
  { id: 'ospedale', label: 'Ospedale', bh: true },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Sono lavoratrice autonoma — ho diritto al congedo?", a: "<strong>Sì, ma con regole diverse.</strong> Le lavoratrici iscritte alla gestione separata INPS hanno diritto a 5 mesi di indennità di maternità all\'80% del reddito, a patto di avere almeno 1 mese di contributi nei 12 mesi precedenti. Le libere professioniste con cassa previdenziale propria (avvocate, mediche, ecc.) ricevono l\'indennità dalla loro cassa — gli importi variano. In tutti i casi, non c\'è un divieto di lavorare, ma l\'indennità copre i 5 mesi." },
  { q: "L\'assegno unico spetta anche ai disoccupati?", a: "<strong>Sì, spetta a tutti.</strong> L\'assegno unico universale è davvero universale — spetta a dipendenti, autonomi, pensionati, disoccupati e inoccupati. L\'unica cosa che cambia è l\'importo, che dipende dall\'ISEE. Senza ISEE ricevi il minimo (circa 58€/mese)." },
  { q: "Il papà può prendere il congedo parentale al posto della mamma?", a: "<strong>Sì, i mesi facoltativi sono condivisi.</strong> Gli 11 mesi di congedo parentale si dividono tra i due genitori come preferiscono. Il padre può prenderne fino a 7 (se la madre ne prende almeno 3, e viceversa). I 3 mesi all\'80% spettano a ciascun genitore individualmente — quindi in teoria la coppia può avere 6 mesi totali all\'80%." },
  { q: "Posso lavorare durante il congedo parentale?", a: "<strong>No.</strong> Durante il congedo parentale non puoi svolgere attività lavorativa. Se lavori, perdi il diritto all\'indennità per i giorni in questione. Il congedo si può però prendere anche a ore o a giorni — non è obbligatorio che sia continuativo." },
  { q: "Serve il matrimonio per i diritti del padre?", a: "<strong>No.</strong> Il congedo di paternità obbligatorio, il congedo parentale e l\'assegno unico spettano al padre indipendentemente dal matrimonio, purché il figlio sia riconosciuto. Per la dichiarazione di nascita, se non siete sposati, entrambi i genitori devono presentarsi." },
  { q: "Sono straniera residente in Italia — ho diritto ai bonus?", a: "<strong>Sì, nella maggior parte dei casi.</strong> L\'assegno unico richiede residenza in Italia e cittadinanza UE con diritto di soggiorno, oppure permesso di soggiorno di lungo periodo per extracomunitari. Per l\'assegno di maternità dei Comuni le regole possono variare — verifica nel tuo Comune. Il bonus nuovi nati e il bonus nido seguono le stesse regole dell\'assegno unico." },
  { q: "Posso essere licenziata durante la gravidanza?", a: "<strong>No, salvo eccezioni molto rare.</strong> Il divieto di licenziamento copre tutto il periodo della gravidanza fino al compimento di 1 anno di vita del bambino. Le eccezioni sono: colpa grave, cessazione dell\'attività dell\'azienda, o scadenza del contratto a termine. Il licenziamento intimato in violazione di questo divieto è nullo." },
  { q: "L\'assegno unico va dichiarato nel 730?", a: "<strong>No, è esente.</strong> L\'assegno unico non fa reddito e non va dichiarato nella dichiarazione dei redditi. Anche il bonus nuovi nati e il bonus nido sono esenti da IRPEF." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Aspetto un figlio nel 2026: tutti i bonus e le pratiche', description: 'Aspetti un figlio nel 2026? Guida completa su congedo maternità e paternità, assegno unico, bonus nido e tutti i documenti. Gratuita e aggiornata.', url: '/figlio', image: 'ogfiglio.png', datePublished: '2026-03-04', dateModified: '2026-03-04' }),
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
      <h1>Aspetto un <em>figlio</em></h1>
      <p className="hero-sub">Congedi, bonus, assegno unico, documenti del neonato — tutto quello che devi fare e chiedere, mese per mese, spiegato come si deve.</p>
      <div className="hero-pills">
        <span className="pill pill-g">✦ 100% gratuita</span>
        <span className="pill pill-b">🕐 18 min di lettura</span>
        <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
      </div>
      <div className="hero-source"><strong>Fonti:</strong> INPS · D.Lgs. 151/2001 · Legge di Bilancio 2026 (L. 199/2025)</div>
      <PrintButton />
    </div>

    <div className="hero-right">
      <div className="hstat">
        <div className="hn">5 mesi</div>
        <div className="hl">congedo maternità<br />obbligatorio all'80%</div>
      </div>
      <div className="hstat">
        <div className="hn">~200€</div>
        <div className="hl">assegno unico mensile<br />per figlio (ISEE basso)</div>
      </div>
      <div className="hstat">
        <div className="hn">1.000€</div>
        <div className="hl">bonus nuovi nati<br />una tantum</div>
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
      <a href="/spid" className="ps done">✓ SPID</a><span className="pa">›</span>
      <a href="/isee" className="ps done">✓ ISEE</a><span className="pa">›</span>
      <a href="/figlio" className="ps active">👶 Aspetto un figlio</a><span className="pa">›</span>
      <a href="/730" className="ps">730</a>
    </div>
  </div>

  {/* SINTESI */}
  <div className="sec r" id="sintesi">
    <div className="sintesi">
      <div className="sintesi-label">⚡ In sintesi</div>
      <div className="scards">
        <div className="sc tc r d1"><div className="si">🤰</div><div className="sn">5 mesi</div><div className="sl">congedo maternità<br />obbligatorio</div></div>
        <div className="sc sg r d2"><div className="si">💰</div><div className="sn">80%</div><div className="sl">dello stipendio<br />durante il congedo</div></div>
        <div className="sc    r d3"><div className="si">👨</div><div className="sn">10 gg</div><div className="sl">congedo paternità<br />obbligatorio</div></div>
        <div className="sc    r d1"><div className="si">📋</div><div className="sn">~204€</div><div className="sl">assegno unico max<br />al mese per figlio</div></div>
        <div className="sc    r d2"><div className="si">🎁</div><div className="sn">1.000€</div><div className="sl">bonus nuovi nati<br />una tantum</div></div>
        <div className="sc bl r d3"><div className="si">🏫</div><div className="sn">3.600€</div><div className="sl">bonus nido max<br />annuo</div></div>
      </div>
    </div>
    <QuizFiglio />
  </div>

  {/* IL QUADRO */}
  <div className="sec r" id="quadro">
    <div className="sec-tag">Panoramica</div>
    <h2>Il quadro completo: cosa ti spetta</h2>
    <p>Quando aspetti un figlio in Italia, hai diritto a una serie di tutele e aiuti economici. Il problema è che <strong>nessuno te li spiega tutti insieme</strong>. Sono sparsi tra INPS, Comune, datore di lavoro e Agenzia delle Entrate. Questa guida li mette in fila.</p>
    <p>In sintesi, ecco cosa puoi ottenere:</p>

    <div className="dblock r">
      <div className="dblock-tag">Quanto puoi ricevere in un anno</div>
      <h3>Il pacchetto completo per un figlio nel 2026</h3>
      <div className="dblock-grid">
        <div className="dblock-item"><span className="dblock-label">Assegno unico (12 mesi)</span><span className="dblock-val">~2.445€</span></div>
        <div className="dblock-item"><span className="dblock-label">Bonus nuovi nati</span><span className="dblock-val">1.000€</span></div>
        <div className="dblock-item"><span className="dblock-label">Bonus nido (ISEE basso)</span><span className="dblock-val">fino a 3.600€</span></div>
        <div className="dblock-item"><span className="dblock-label">Congedo 5 mesi all'80%</span><span className="dblock-val">~6.000€</span></div>
      </div>
      <div className="dblock-total">
        <span className="dblock-label">Valore potenziale primo anno</span>
        <span className="dblock-val">~13.000€</span>
      </div>
      <div className="dblock-note">Esempio con ISEE sotto 17.000€ e stipendio medio. Gli importi reali variano.</div>
    </div>

    <div className="ib tip r">
      <div className="ib-t">💡 La cosa più importante: fai l'ISEE prima</div>
      <p>Quasi tutti i bonus dipendono dall'ISEE. Più è basso, più ricevi. Senza ISEE, l'assegno unico scende a soli 58€ al mese. Fai la DSU il prima possibile — è gratuita al CAF o online con SPID.</p>
    </div>

    <a href="/isee" className="xlink r"><span className="xlink-em">📋</span><div className="xlink-t"><strong>Faccio l'ISEE</strong> — Scopri come farlo, dove e quali documenti servono. È il primo passo per tutti i bonus.</div><span className="xlink-ar">→</span></a>
  </div>

  {/* CONGEDI */}
  <div className="sec r" id="congedi">
    <div className="sec-tag">Lavoro e tutele</div>
    <h2>Congedi: quanto puoi stare a casa</h2>
    <p>I congedi si dividono in due categorie: quelli <strong>obbligatori</strong> (devi prenderli per legge) e quelli <strong>facoltativi</strong> (puoi scegliere se e quando usarli). Entrambi sono retribuiti.</p>

    <h3>Congedo di maternità obbligatorio</h3>
    <p>Sono <strong>5 mesi totali</strong>, pagati all'80% dello stipendio dall'INPS. La formula standard è 2 mesi prima del parto e 3 dopo, ma puoi scegliere anche 1+4 o, con certificato medico, 0+5 (lavori fino all'ultimo giorno).</p>
    <p>Il congedo obbligatorio spetta a tutte le lavoratrici dipendenti, pubbliche e private. Per le autonome e le libere professioniste le regole cambiano (vedi FAQ).</p>

    <h3>Congedo di paternità obbligatorio</h3>
    <p>Il papà ha diritto a <strong>10 giorni di congedo retribuito al 100%</strong>, da usare entro i 5 mesi dalla nascita. Sono obbligatori — il datore di lavoro non può rifiutarli. Si possono prendere anche non consecutivi.</p>

    <h3>Congedo parentale facoltativo</h3>
    <p>Dopo il congedo obbligatorio, entrambi i genitori possono prendere il <strong>congedo parentale</strong> — un periodo aggiuntivo per stare con il figlio. Novità 2026:</p>

    <div className="tw r">
      <table>
        <thead><tr><th>Periodo</th><th>Retribuzione</th><th>Fino a quando</th></tr></thead>
        <tbody>
          <tr className="hl"><td data-label="Periodo"><strong>Primi 3 mesi</strong> <span className="badge">Novità 2026</span></td><td data-label="Retribuzione" className="cv cfr">80% dello stipendio</td><td data-label="Fino a quando">6 anni del bambino</td></tr>
          <tr><td data-label="Periodo">Successivi 6 mesi</td><td data-label="Retribuzione" className="cv">30% dello stipendio</td><td data-label="Fino a quando">14 anni del bambino</td></tr>
          <tr><td data-label="Periodo">Ultimi 2 mesi</td><td data-label="Retribuzione">Non retribuiti</td><td data-label="Fino a quando">14 anni del bambino</td></tr>
          <tr><td data-label="Periodo"><strong>Totale massimo</strong></td><td data-label="Retribuzione" className="cv">11 mesi tra i 2 genitori</td><td data-label="Fino a quando">—</td></tr>
        </tbody>
      </table>
    </div>

    <div className="ib mon r">
      <div className="ib-t">📊 Congedo malattia del figlio: raddoppiano i giorni</div>
      <p>Dal 2026, i giorni di permesso per malattia del figlio passano da 5 a <strong>10 giorni all'anno</strong> per figli fino a 14 anni. Non sono retribuiti dal datore ma coperti da contribuzione figurativa INPS.</p>
    </div>

    <div className="ib warn r">
      <div className="ib-t">⚠️ Non perdere i 3 mesi all'80%</div>
      <p>I 3 mesi di congedo parentale retribuiti all'80% si applicano solo a chi termina il congedo di maternità obbligatorio <strong>dal 1° gennaio 2025 in poi</strong>. Chi lo ha terminato prima ha condizioni diverse (2 mesi all'80% se terminato nel 2024, 1 mese se nel 2023).</p>
    </div>
  </div>

  {/* BONUS */}
  <div className="sec r" id="bonus">
    <div className="sec-tag">Soldi e aiuti</div>
    <h2>Tutti i bonus per chi diventa genitore nel 2026</h2>
    <p>Ci sono almeno 5 misure economiche diverse. Alcune le chiedi all'INPS, altre al Comune. Ecco la mappa completa.</p>

    <h3>1. Assegno unico universale</h3>
    <p>È il contributo principale: un assegno mensile per ogni figlio a carico, <strong>dal 7° mese di gravidanza fino ai 21 anni</strong>. L'importo dipende dall'ISEE.</p>

    <div className="tw r">
      <table>
        <thead><tr><th>ISEE</th><th>Importo mensile per figlio</th><th>All'anno</th></tr></thead>
        <tbody>
          <tr className="hl"><td data-label="ISEE" className="cv">Fino a ~17.000€</td><td data-label="Mensile" className="cv cfr">~204€ <span className="badge">Max</span></td><td data-label="Annuo">~2.445€</td></tr>
          <tr><td data-label="ISEE">~20.000€</td><td data-label="Mensile" className="cv">~172€</td><td data-label="Annuo">~2.060€</td></tr>
          <tr><td data-label="ISEE">~30.000€</td><td data-label="Mensile" className="cv">~130€</td><td data-label="Annuo">~1.560€</td></tr>
          <tr><td data-label="ISEE">~40.000€</td><td data-label="Mensile" className="cv">~85€</td><td data-label="Annuo">~1.020€</td></tr>
          <tr><td data-label="ISEE">Oltre ~46.500€ o assente</td><td data-label="Mensile">~58€</td><td data-label="Annuo">~700€</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>Maggiorazioni importanti:</strong> +50% per i figli sotto 1 anno di età, +50% per figli 1-3 anni se hai almeno 3 figli. Per figli con disabilità l'importo aumenta ulteriormente senza limiti di età.</p>

    <div className="ib tip r">
      <div className="ib-t">💡 L'assegno unico si chiede dal 7° mese di gravidanza</div>
      <p>Non aspettare che nasca il bambino. Se fai domanda dal 7° mese, le mensilità arretrate (dal 7° mese in poi) ti vengono pagate con i primi versamenti dopo la nascita. È come un piccolo premio alla nascita incluso.</p>
    </div>

    <h3>2. Bonus nuovi nati (1.000€)</h3>
    <p>Un contributo <strong>una tantum di 1.000€</strong> per ogni figlio nato o adottato nel 2026. Confermato dalla Legge di Bilancio 2026.</p>
    <ul className="cl">
      <li className="cli r d1"><div className="ci">📋</div><div className="clb"><strong>ISEE massimo: 40.000€</strong><span className="note">Serve un ISEE valido per il 2026 — fai la DSU prima della nascita</span></div></li>
      <li className="cli r d2"><div className="ci">⏰</div><div className="clb"><strong>Entro 120 giorni dalla nascita</strong><span className="note">La domanda va fatta entro questo termine — dopo perdi il diritto, senza possibilità di recupero</span></div></li>
      <li className="cli r d3"><div className="ci">📱</div><div className="clb"><strong>Si chiede all'INPS</strong><span className="note">Online con SPID, al patronato, o chiamando il numero verde 803 164</span></div></li>
    </ul>

    <h3>3. Bonus asilo nido</h3>
    <p>Un contributo annuale per pagare il nido (pubblico o privato) per i figli <strong>sotto i 3 anni</strong>. L'importo dipende dall'ISEE:</p>

    <div className="tw r">
      <table>
        <thead><tr><th>ISEE</th><th>Bonus annuo</th></tr></thead>
        <tbody>
          <tr className="hl"><td data-label="ISEE" className="cv">Fino a 25.000€</td><td data-label="Bonus" className="cv cfr">fino a 3.600€ <span className="badge">Max</span></td></tr>
          <tr><td data-label="ISEE">Da 25.001€ a 40.000€</td><td data-label="Bonus" className="cv">fino a 2.500€</td></tr>
          <tr><td data-label="ISEE">Oltre 40.000€</td><td data-label="Bonus">fino a 1.500€</td></tr>
        </tbody>
      </table>
    </div>

    <h3>4. Assegno di maternità dei Comuni</h3>
    <p>Per le mamme <strong>disoccupate</strong> o senza altra indennità di maternità: <strong>5 mensilità da 413€</strong> ciascuna, per un totale di circa 2.066€. Serve un ISEE sotto 20.668€. Si chiede al Comune di residenza.</p>

    <h3>5. Bonus mamme lavoratrici</h3>
    <p>Per le mamme che lavorano con almeno 2 figli (il più piccolo sotto 10 anni): <strong>60€ al mese in busta paga</strong>, fino a 720€ l'anno. Serve un ISEE sotto 40.000€. È automatico — lo calcola il datore di lavoro a dicembre.</p>

    <h3>6. Carta acquisti</h3>
    <p>Per i genitori di bambini sotto 3 anni: una card da <strong>40€ al mese</strong> (accreditati ogni 2 mesi) per spesa, bollette e farmacia. Si chiede alle Poste.</p>

    <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Molte spese legate ai figli si detraggono. Non lasciare soldi sul tavolo.</div><span className="xlink-ar">→</span></a>
  </div>

  {/* DOCUMENTI NEONATO */}
    {/* BLOCCO AFFILIAZIONE: PRODOTTI NEONATO */}
  <div className="aff-block r">
    <div className="aff-label">Strumento consigliato</div>
    <div className="aff-body">
      <div className="aff-left">
        <div className="aff-title">Lista nascita: risparmia su passeggino, seggiolino e tutto il necessario</div>
        <div className="aff-text">Crea la tua lista nascita online: confronta prezzi su migliaia di prodotti per neonato, con recensioni verificate e spedizione gratuita.</div>
        <div className="aff-note">* Link in partnership — se acquisti tramite questo link, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
      </div>
      <a href="QUI_LINK_AFFILIATO_FIGLIO" target="_blank" rel="noopener sponsored" className="aff-btn">
        Crea la lista nascita →
      </a>
    </div>
  </div>

<div className="sec breve-hide r" id="documenti">
    <div className="sec-tag">Dopo la nascita</div>
    <h2>Documenti da fare per il neonato</h2>
    <p>Quando nasce un bambino, hai una serie di adempimenti da fare — quasi tutti entro i primi 10 giorni. Ecco la lista in ordine.</p>

    <div className="steps">
      <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Dichiarazione di nascita (entro 10 giorni)</strong><p>La fai direttamente in ospedale, oppure all'Ufficio di Stato Civile del Comune. L'ospedale di solito ti aiuta a compilarla — servono documenti d'identità di entrambi i genitori.</p></div></div>
      <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Codice fiscale</strong><p>Lo richiedi all'Agenzia delle Entrate con il certificato di nascita. In molti ospedali lo fanno direttamente loro — chiedi prima del parto se è previsto.</p></div></div>
      <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Iscrizione al Servizio Sanitario Nazionale</strong><p>Con il codice fiscale, vai all'ASL del tuo Comune per iscrivere il bambino e scegliere il pediatra di base. È gratuito e dà accesso a tutte le cure.</p></div></div>
      <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong>Carta d'identità (CIE)</strong><p>Non è obbligatoria subito, ma serve per viaggiare fuori dall'Italia. Si fa al Comune. Per volare fuori dall'UE serve il passaporto (firmato da entrambi i genitori).</p></div></div>
      <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Domanda assegno unico + bonus nuovi nati</strong><p>Con SPID e ISEE pronti, fai domanda all'INPS online. Per l'assegno unico puoi aver già fatto domanda dal 7° mese. Il bonus nuovi nati va chiesto entro 120 giorni.</p></div></div>
    </div>

    <a href="/spid" className="xlink r"><span className="xlink-em">🪪</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Ti serve per tutte le pratiche INPS. Se non ce l'hai ancora, fallo prima del parto.</div><span className="xlink-ar">→</span></a>
  </div>

  {/* OSPEDALE */}
  <div className="sec breve-hide r" id="ospedale">
    <div className="sec-tag">Preparazione</div>
    <h2>Cosa portare in ospedale</h2>
    <p>Prepara la borsa con anticipo — dal 7°-8° mese è meglio averla pronta. Ecco la checklist divisa per categorie.</p>

    <h3>Documenti (fondamentale)</h3>
    <ul className="cl">
      <li className="cli r d1"><div className="ci">🪪</div><div className="clb"><strong>Carta d'identità di entrambi i genitori</strong><span className="note">Serve per la dichiarazione di nascita</span></div></li>
      <li className="cli r d2"><div className="ci">💳</div><div className="clb"><strong>Tessera sanitaria</strong><span className="note">La tua — serve per il ricovero</span></div></li>
      <li className="cli r d3"><div className="ci">📋</div><div className="clb"><strong>Cartella clinica della gravidanza</strong><span className="note">Esami, ecografie, gruppo sanguigno, piano del parto se l'hai fatto</span></div></li>
      <li className="cli r d4"><div className="ci">💍</div><div className="clb"><strong>Certificato di matrimonio o stato di famiglia</strong><span className="note">Se non siete sposati, entrambi i genitori devono presentarsi per il riconoscimento</span></div></li>
    </ul>

    <h3>Per la mamma</h3>
    <ul className="cl">
      <li className="cli r"><div className="ci">👕</div><div className="clb"><strong>Camicia da notte aperta sul davanti (x2)</strong><span className="note">Serve per l'allattamento — preferisci bottoni o zip</span></div></li>
      <li className="cli r d1"><div className="ci">🩴</div><div className="clb"><strong>Ciabatte, vestaglia, biancheria comoda</strong><span className="note">Mutandine a rete/usa e getta sono le più pratiche post-parto</span></div></li>
      <li className="cli r d2"><div className="ci">🧴</div><div className="clb"><strong>Prodotti igiene personale</strong><span className="note">Assorbenti post-parto (quelli normali non bastano), sapone, spazzolino</span></div></li>
    </ul>

    <h3>Per il neonato</h3>
    <ul className="cl">
      <li className="cli r"><div className="ci">👶</div><div className="clb"><strong>Body, tutine, calzini, cappellino (x3-4)</strong><span className="note">Taglia 0-1 mese. L'ospedale spesso fornisce il primo cambio, ma meglio averne di scorta</span></div></li>
      <li className="cli r d1"><div className="ci">🚗</div><div className="clb"><strong>Seggiolino auto (ovetto)</strong><span className="note">Obbligatorio per legge per portarlo a casa. Deve essere omologato e già montato in auto</span></div></li>
      <li className="cli r d2"><div className="ci">🧷</div><div className="clb"><strong>Pannolini taglia 1 e salviettine</strong><span className="note">L'ospedale di solito ne fornisce per la degenza, ma portane un pacchetto di riserva</span></div></li>
    </ul>
  </div>

  {/* ERRORI */}
  <div className="sec breve-hide r" id="errori">
    <div className="sec-tag">Da non fare</div>
    <h2>Errori che fanno quasi tutti</h2>

    <div className="icgrid r">
      <div className="ic r d1">
        <div className="ic-n">❌ Non fare l'ISEE in tempo</div>
        <div className="ic-d">Senza ISEE aggiornato al 2026, l'assegno unico scende a soli 58€/mese. Puoi recuperare gli arretrati solo se presenti la DSU entro il 30 giugno. Dopo, perdi mesi di differenza.</div>
      </div>
      <div className="ic r d2">
        <div className="ic-n">❌ Non chiedere il bonus entro 120 giorni</div>
        <div className="ic-d">Il bonus nuovi nati da 1.000€ ha un termine perentorio. Dopo 120 giorni dalla nascita il diritto decade — non c'è modo di recuperarlo.</div>
      </div>
      <div className="ic r d3">
        <div className="ic-n">❌ Aspettare la nascita per tutto</div>
        <div className="ic-d">L'assegno unico si chiede dal 7° mese di gravidanza. Lo SPID puoi farlo mesi prima. L'ISEE anche. Se aspetti che nasca il bambino, poi non hai tempo per nulla.</div>
      </div>
      <div className="ic r d4">
        <div className="ic-n">❌ Non sapere del congedo parentale all'80%</div>
        <div className="ic-d">Molte famiglie non sanno che i primi 3 mesi di congedo facoltativo dal 2026 sono pagati all'80%. Li perdono o li prendono dopo, quando l'indennità è scesa al 30%.</div>
      </div>
    </div>

    <div className="ib warn r">
      <div className="ib-t">⚠️ L'errore più costoso: non combinare tutti i bonus</div>
      <p>Assegno unico, bonus nido, bonus nuovi nati, carta acquisti e bonus mamme sono <strong>tutti cumulabili</strong>. Non è uno o l'altro — puoi riceverli tutti. Ma devi fare domanda per ognuno separatamente. Chi non lo sa, perde migliaia di euro.</p>
    </div>
  </div>

  {/* FAQ */}
  <div className="sec breve-hide r" id="faq">
    <div className="sec-tag">Risposte rapide</div>
    <h2>Domande frequenti</h2>
    <FAQ items={faqItems} />
  </div>

  {/* CTA BANNER */}
  <div className="ctabanner r">
    <h3>Hai la testa piena di scadenze?</h3>
    <p>Ti prepariamo un promemoria personalizzato: tutti i bonus, le date e i documenti che servono alla tua famiglia — con il tuo ISEE e la tua situazione.</p>
    <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
  </div>

  <LeadBox guida="figlio" />

          {/* RELATED */}
  <div className="related r">
    <h2>Guide correlate</h2>
    <div className="rg">
      <a href="/isee" className="rc r d1">
        <span className="rc-e">📋</span>
        <div className="rc-t">Faccio l'ISEE</div>
        <div className="rc-d">Il primo passo per accedere a tutti i bonus.</div>
        <span className="rc-ar">→</span>
      </a>
      <a href="/spid" className="rc r d2">
        <span className="rc-e">🪪</span>
        <div className="rc-t">Faccio lo SPID</div>
        <div className="rc-d">Serve per tutte le pratiche INPS online.</div>
        <span className="rc-ar">→</span>
      </a>
      <a href="/730" className="rc r d3">
        <span className="rc-e">🧾</span>
        <div className="rc-t">Faccio il 730</div>
        <div className="rc-d">Le spese mediche e del nido si detraggono.</div>
        <span className="rc-ar">→</span>
      </a>
      <a href="/compro-casa" className="rc r d4">
        <span className="rc-e">🏠</span>
        <div className="rc-t">Compro casa</div>
        <div className="rc-d">Per chi sta pensando anche a un posto più grande.</div>
        <span className="rc-ar">→</span>
      </a>
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
            <div className="sbsec-t">🛠 Strumenti utili</div>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz: serve a me?</div><div className="sbtool-d">Scopri se questa guida fa per te</div></div></a>
            <a href="#bonus" className="sbtool"><span className="sbtool-i">💰</span><div><div className="sbtool-n">Tabella bonus</div><div className="sbtool-d">Tutti gli importi 2026</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">🧮</span><div><div className="sbtool-n">Calcolatore bonus</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🪪 Faccio lo SPID<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
</div>

{/* PROMEMORIA SCADENZE */}

      <BrevoForm pageName="figlio" />
      <Footer />
    </>
  );
}
