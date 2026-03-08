import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import QuizRistrutturare from '@/components/QuizRistrutturare';
import CalcRistrutturare from '@/components/CalcRistrutturare';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi',
  description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.',
  alternates: { canonical: 'https://zeroburocrazia.it/ristrutturare' },
  openGraph: {
    title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi',
    description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.',
    url: 'https://zeroburocrazia.it/ristrutturare',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogristrutturare.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi',
    description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.',
    images: ['https://zeroburocrazia.it/ogristrutturare.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'quanto-risparmi', label: 'Quanto risparmi', bh: true },
  { id: 'bonus', label: 'Bonus 2026' },
  { id: 'permessi', label: 'Permessi' },
  { id: 'come-fare', label: 'Come fare' },
  { id: 'documenti', label: 'Documenti', bh: true },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso detrarre la ristrutturazione se sono in affitto?", a: "<strong>Sì, ma con l\'aliquota ridotta.</strong> Gli inquilini e i comodatari possono detrarre al 36% (non al 50%), a condizione di avere il consenso del proprietario e di pagare direttamente le fatture con bonifico parlante." },
  { q: "Il bonus mobili è indipendente dal bonus ristrutturazione?", a: "<strong>No, è collegato.</strong> Puoi accedere al bonus mobili (50% fino a 5.000 €) solo se hai in corso lavori di ristrutturazione con regolare pratica edilizia. La data di inizio lavori deve precedere la data di acquisto dei mobili." },
  { q: "Se vendo la casa, perdo le detrazioni residue?", a: "<strong>Di default le rate non ancora detratte passano al nuovo proprietario.</strong> Però puoi accordarti nell\'atto di vendita per mantenerle tu. Mettilo per iscritto dal notaio, altrimenti le perdi automaticamente." },
  { q: "Posso cumulare bonus ristrutturazione ed Ecobonus?", a: "<strong>Sì, ma non sullo stesso intervento.</strong> Per esempio, puoi usare il bonus ristrutturazione per rifare il bagno e l\'Ecobonus per cambiare gli infissi. Per lo stesso lavoro devi scegliere un solo bonus." },
  { q: "Posso sostituire la caldaia a gas e detrarre?", a: "<strong>No, dal 2025 è esclusa.</strong> La sostituzione di caldaie a combustibili fossili non è più agevolabile né con l\'Ecobonus né con il bonus ristrutturazione. Puoi detrarre pompe di calore, caldaie ibride o sistemi a biomassa." },
  { q: "Se guadagno più di 75.000 € le detrazioni si riducono?", a: "<strong>Sì, dal 2025 ci sono limiti alla detrazione per redditi alti.</strong> L\'art. 16-ter del TUIR prevede un tetto alle detrazioni per chi ha redditi sopra i 75.000 €, con riduzione progressiva fino ai 100.000 €. Fanno eccezione le spese sanitarie e gli interessi del mutuo prima casa." },
  { q: "Quanto costa ristrutturare casa al metro quadro?", a: "<strong>Tra 500 e 1.600 €/mq per una ristrutturazione completa</strong>, a seconda della città e del livello di finiture. Un rifacimento parziale (bagno + cucina + impianti) si aggira intorno ai 15.000–35.000 € per un appartamento di 80 mq. Chiedi sempre un computo metrico dettagliato, non un prezzo \"a corpo\"." },
  { q: "Superbonus 110%: è ancora attivo?", a: "<strong>No, il Superbonus è terminato.</strong> Dal 2025 non è più disponibile, salvo casi residuali legati a ricostruzioni post-sisma. I lavori che prima rientravano nel Superbonus ora rientrano nelle aliquote ordinarie (50%/36%)." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Ristrutturare Casa — Guida Completa 2026 | ZeroBurocrazia', description: 'Ristrutturare casa nel 2026: bonus ristrutturazione, ecobonus, superbonus, permessi e preventivi. Guida gratuita su detrazioni e pratiche.', url: '/ristrutturare', image: 'ogristrutturare.png', datePublished: '2026-03-04', dateModified: '2026-03-05' }),
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
      <h1>Ristrutturare <em>casa</em></h1>
      <p className="hero-sub">Bonus, permessi, preventivi e IVA agevolata: tutto quello che devi sapere prima di iniziare i lavori, spiegato come si deve.</p>
      <div className="hero-pills">
        <span className="pill pill-g">✦ 100% gratuita</span>
        <span className="pill pill-b">🕐 14 min di lettura</span>
        <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
      </div>
      <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · ENEA · DPR 380/2001 · Legge di Bilancio 2026</div>
      <PrintButton />
    </div>

    <div className="hero-right">
      <div className="hstat">
        <div className="hn">50%</div>
        <div className="hl">detrazione bonus<br />prima casa 2026</div>
      </div>
      <div className="hstat">
        <div className="hn">96k€</div>
        <div className="hl">tetto massimo<br />di spesa</div>
      </div>
      <div className="hstat">
        <div className="hn">10%</div>
        <div className="hl">IVA agevolata<br />su lavori e materiali</div>
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
      <a href="/730" className="ps done">✓ 730</a><span className="pa">›</span>
      <a href="/ristrutturare" className="ps active">🔨 Ristrutturare casa</a>
    </div>
  </div>

  {/* SINTESI */}
  <div className="sec r" id="sintesi">
    <div className="sintesi">
      <div className="sintesi-label">⚡ In sintesi</div>
      <div className="scards">
        <div className="sc tc r d1"><div className="si">💰</div><div className="sn">50%</div><div className="sl">detrazione prima casa 2026</div></div>
        <div className="sc sg r d2"><div className="si">🏠</div><div className="sn">36%</div><div className="sl">detrazione seconde case</div></div>
        <div className="sc    r d3"><div className="si">📑</div><div className="sn">96k€</div><div className="sl">tetto massimo di spesa</div></div>
        <div className="sc    r d1"><div className="si">📆</div><div className="sn">10</div><div className="sl">rate annuali di detrazione</div></div>
        <div className="sc bl r d2"><div className="si">🧾</div><div className="sn">10%</div><div className="sl">IVA agevolata sui lavori</div></div>
        <div className="sc    r d3"><div className="si">🪑</div><div className="sn">5k€</div><div className="sl">tetto bonus mobili (50%)</div></div>
      </div>
    </div>
    <QuizRistrutturare />
  </div>

  {/* COS'È */}
  <div className="sec r" id="cose">
    <div className="sec-tag">Le basi</div>
    <h2>Cos'è il bonus ristrutturazione</h2>
    <p>Il bonus ristrutturazione è una <strong>detrazione IRPEF</strong> che ti permette di recuperare una parte delle spese sostenute per lavori di ristrutturazione edilizia. Non è uno sconto immediato: lo Stato ti restituisce i soldi in <strong>10 rate annuali uguali</strong> sulla dichiarazione dei redditi.</p>
    <p>In pratica: se spendi 50.000 € per ristrutturare la tua prima casa, lo Stato ti restituisce 25.000 € in 10 anni (2.500 € all'anno, come riduzione delle tasse che paghi). Se non paghi abbastanza IRPEF, perdi la parte che non riesci a detrarre.</p>

    <div className="ib mon r">
      <div className="ib-t">💰 Non è uno sconto in fattura</div>
      <p>Dal 2025 lo sconto in fattura e la cessione del credito non sono più disponibili (salvo rarissime eccezioni per condomini con delibere pre-2024). Oggi puoi usare solo la detrazione in dichiarazione dei redditi. Tradotto: devi avere i soldi per pagare tutto, e li recuperi un po' alla volta.</p>
    </div>
  </div>

  {/* QUANTO RISPARMI — DARK BLOCK */}
  <div className="sec bh r" id="quanto-risparmi">
    <div className="dblock">
      <div className="sec-tag">⚡ Il conto che nessuno ti fa</div>
      <h2>Quanto <em>risparmi</em> con il bonus</h2>
      <p>Vediamo un esempio concreto per capire quanto puoi recuperare davvero.</p>
      <div style={{'background':'rgba(251,248,241,.06)','border':'1px solid rgba(251,248,241,.1)','borderRadius':'14px','padding':'24px','marginBottom':'20px'}}>
        <div style={{'fontSize':'14px','color':'rgba(251,248,241,.5)','fontWeight':'600','marginBottom':'12px'}}>ESEMPIO: LAURA, 38 ANNI, RISTRUTTURA IL BAGNO E LA CUCINA</div>
        <div className="dgrid">
          <div className="dcard"><div className="dcard-l">Lavori edili e impianti</div><div className="dcard-v">28.000 €</div></div>
          <div className="dcard"><div className="dcard-l">Materiali con IVA 10%</div><div className="dcard-v">12.000 €</div></div>
          <div className="dcard"><div className="dcard-l">Spese tecniche (CILA, progetto)</div><div className="dcard-v">2.500 €</div></div>
          <div className="dcard"><div className="dcard-l">Mobili cucina + elettrodomestici</div><div className="dcard-v">5.000 €</div></div>
        </div>
      </div>
      <div className="dtotals">
        <div className="dt-col"><div className="dt-l" style={{'color':'var(--blue)'}}>Totale che Laura recupera</div><div className="dt-n" style={{'color':'var(--cream)'}}>23.750€</div></div>
        <div className="dt-col"><div className="dt-l" style={{'color':'rgba(251,248,241,.5)'}}>Cioè ogni anno per 10 anni</div><div className="dt-n" style={{'color':'var(--blue)'}}>2.375€</div></div>
      </div>
      <p style={{'marginBottom':'0'}}>Laura recupera il <strong style={{'color':'var(--cream)'}}>50% dei lavori</strong> (21.250 €) più il <strong style={{'color':'var(--cream)'}}>50% dei mobili</strong> (2.500 €). In tutto, su 47.500 € spesi, ne recupera quasi la metà.</p>
    </div>
  </div>

  {/* BONUS 2026 */}
  <div className="sec r" id="bonus">
    <div className="sec-tag">Agevolazioni 2026</div>
    <h2>Tutti i bonus per ristrutturare nel 2026</h2>
    <p>Nel 2026 il sistema dei bonus è più semplice rispetto al passato. Le aliquote sono due: <strong>50% per la prima casa</strong> e <strong>36% per tutti gli altri immobili</strong>. Valgono per tutti i principali bonus edilizi.</p>

    <div className="tw r">
      <table>
        <thead><tr><th>Bonus</th><th>Prima casa</th><th>Altre</th><th>Tetto spesa</th></tr></thead>
        <tbody>
          <tr className="hl"><td><strong>Bonus Ristrutturazione</strong> <span className="badge">Principale</span></td><td className="cv">50%</td><td>36%</td><td className="cv">96.000 €</td></tr>
          <tr><td><strong>Ecobonus</strong> (efficienza energetica)</td><td className="cv">50%</td><td>36%</td><td className="cv">30.000–100.000 €*</td></tr>
          <tr><td><strong>Sismabonus</strong> (antisismico)</td><td className="cv">50%</td><td>36%</td><td className="cv">96.000 €</td></tr>
          <tr><td><strong>Bonus Mobili</strong></td><td className="cv" colspan="2" style={{'textAlign':'center'}}>50%</td><td className="cv">5.000 €</td></tr>
        </tbody>
      </table>
    </div>
    <p style={{'fontSize':'13px','color':'var(--t3)'}}>* Il tetto dell'Ecobonus varia in base al tipo di intervento (es. 30.000 € per caldaie, 60.000 € per cappotto, 100.000 € per riqualificazione globale).</p>

    <div className="ib warn r">
      <div className="ib-t">⚠️ Dal 2027 le aliquote calano</div>
      <p>Nel 2027 si scende al <strong>36% per la prima casa</strong> e al <strong>30% per le altre</strong>. Dal 2028 si va al 30% per tutti. Se puoi, conviene sostenere le spese entro il 31 dicembre 2026.</p>
    </div>

    <h3>Chi può chiedere il 50%</h3>
    <p>Per avere l'aliquota massima del 50% servono due condizioni contemporaneamente:</p>
    <ul className="cl">
      <li className="cli r d1"><div className="ci">🔑</div><div className="clb"><strong>Proprietario o titolare di diritto reale</strong><span className="note">Proprietà, usufrutto, uso, abitazione. L'inquilino ha diritto solo al 36%.</span></div></li>
      <li className="cli r d2"><div className="ci">🏠</div><div className="clb"><strong>L'immobile è la tua abitazione principale</strong><span className="note">Devi viverci. Se ristrutturi una seconda casa o un immobile che affitti, hai il 36%.</span></div></li>
    </ul>

    <h3>Cosa puoi detrarre</h3>
    <div className="ucgrid r">
      <div className="uc r d1"><div className="uc-e">🔧</div><div className="uc-n">Manutenzione straordinaria</div><div className="uc-d">Rifacimento bagno, impianti, tramezzi, pavimenti, infissi.</div></div>
      <div className="uc r d2"><div className="uc-e">🏗</div><div className="uc-n">Ristrutturazione edilizia</div><div className="uc-d">Demolizione e ricostruzione, ampliamenti, cambio destinazione d'uso.</div></div>
      <div className="uc r d3"><div className="uc-e">🌡</div><div className="uc-n">Efficienza energetica</div><div className="uc-d">Cappotto termico, sostituzione caldaia (no gas fossile), pompa di calore, infissi.</div></div>
      <div className="uc r d4"><div className="uc-e">🛡</div><div className="uc-n">Sicurezza antisismica</div><div className="uc-d">Consolidamento strutturale, adeguamento antisismico, diagnosi sismica.</div></div>
      <div className="uc r d1"><div className="uc-e">♿</div><div className="uc-n">Barriere architettoniche</div><div className="uc-d">Ascensori, rampe, automazione porte. Nel 2026 rientrano nel bonus ordinario.</div></div>
      <div className="uc r d2"><div className="uc-e">🪑</div><div className="uc-n">Mobili ed elettrodomestici</div><div className="uc-d">Solo se collegati a lavori di ristrutturazione. Classe A per forni, E per lavatrici.</div></div>
    </div>

    <div className="ib tip r">
      <div className="ib-t">💡 La manutenzione ordinaria non basta</div>
      <p>Tinteggiare le pareti, sostituire le piastrelle senza toccare gli impianti o cambiare una porta interna <strong>non dà diritto al bonus</strong> su un singolo appartamento. La manutenzione ordinaria è detraibile solo per le parti comuni condominiali.</p>
    </div>

    <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Nella dichiarazione dei redditi inserisci le rate annuali della detrazione. Scopri come.</div><span className="xlink-ar">→</span></a>
  </div>

  {/* PERMESSI */}
  <div className="sec r" id="permessi">
    <div className="sec-tag">Burocrazia</div>
    <h2>Quale permesso ti serve</h2>
    <p>Il permesso dipende dal tipo di lavoro. Sbagliare significa rischiare sanzioni e perdere il diritto al bonus.</p>

    <div className="tw r">
      <table>
        <thead><tr><th>Tipo di lavoro</th><th>Permesso</th><th>Serve un tecnico?</th></tr></thead>
        <tbody>
          <tr><td>Tinteggiatura, pavimenti, infissi (stesse dimensioni)</td><td className="cv">Nessuno (edilizia libera)</td><td>No</td></tr>
          <tr className="hl"><td><strong>Rifacimento bagno, impianti, tramezzi non portanti</strong></td><td className="cv">CILA</td><td className="cfr">Sì (geometra/architetto)</td></tr>
          <tr><td>Lavori su muri portanti, tetto, solai</td><td className="cv">SCIA</td><td className="cfr">Sì (ingegnere)</td></tr>
          <tr><td>Ampliamento, demolizione e ricostruzione pesante</td><td className="cv">Permesso di costruire</td><td className="cfr">Sì (ingegnere/architetto)</td></tr>
        </tbody>
      </table>
    </div>

    <div className="ib warn r">
      <div className="ib-t">⚠️ La CILA costa, ma non averla costa di più</div>
      <p>Una CILA costa in media 500–1.500 € (tecnico incluso). Ma fare lavori senza il permesso giusto comporta una sanzione di 1.000 € e, soprattutto, può far perdere il diritto al bonus fiscale. Il risparmio di 1.000 € può costartene 20.000.</p>
    </div>

    <div className="ib tip r">
      <div className="ib-t">💡 IVA agevolata al 10%</div>
      <p>Per i lavori di manutenzione straordinaria e ristrutturazione, l'IVA è al <strong>10%</strong> invece del 22%. Vale sia sulla manodopera che sui materiali forniti dall'impresa (con alcune limitazioni per i "beni significativi" come caldaie e infissi, dove l'IVA al 10% si applica solo fino a concorrenza del valore della manodopera).</p>
    </div>
  </div>

  {/* COME FARE */}
  <div className="sec r" id="come-fare">
    <div className="sec-tag">Passo per passo</div>
    <h2>Come si fa, dall'inizio alla fine</h2>
    <p>Ristrutturare casa senza perdere il bonus richiede di seguire un ordine preciso. Ecco i passaggi.</p>
    <div className="steps">
      <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Chiedi almeno 3 preventivi</strong><p>Confronta sempre più imprese. Il preventivo deve dettagliare ogni voce: manodopera, materiali, smaltimento, spese tecniche. Diffida di chi ti dà un prezzo "a corpo" senza voci.</p></div></div>

  {/* BLOCCO AFFILIAZIONE: PREVENTIVI ONLINE */}
  <div className="aff-block r">
    <div className="aff-label">Strumento consigliato</div>
    <div className="aff-body">
      <div className="aff-left">
        <div className="aff-title">Ricevi fino a 4 preventivi gratuiti da imprese della tua zona</div>
        <div className="aff-text">Descrivi i lavori, ricevi preventivi dettagliati da professionisti verificati. Confronti comodamente e scegli senza impegno.</div>
        <div className="aff-note">* Link in partnership — se richiedi preventivi, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
      </div>
      <a href="QUI_LINK_AFFILIATO_RISTRUTTURARE_PREV" target="_blank" rel="noopener sponsored" className="aff-btn">
        Chiedi preventivi →
      </a>
    </div>
  </div>
      <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Incarica un tecnico abilitato</strong><p>Geometra, architetto o ingegnere. Ti prepara la pratica edilizia (CILA o SCIA), il progetto e, se necessario, l'asseverazione per l'Ecobonus. Il suo compenso è detraibile.</p></div></div>
      <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Presenta la pratica in Comune</strong><p>Il tecnico deposita la CILA o SCIA al Comune. Per la CILA i lavori possono iniziare subito dopo la presentazione. Per la SCIA anche, ma il Comune ha 30 giorni per bloccarli.</p></div></div>
      <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong>Paga sempre con bonifico parlante</strong><p>Il bonifico deve riportare: causale con riferimento di legge (art. 16-bis DPR 917/86), tuo codice fiscale e partita IVA dell'impresa. <strong>Senza bonifico parlante, niente detrazione.</strong></p></div></div>
      <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Comunica all'ENEA (se richiesto)</strong><p>Per lavori di efficienza energetica (Ecobonus) devi inviare la comunicazione ad ENEA entro 90 giorni dalla fine lavori. Per il bonus ristrutturazione "puro" non serve.</p></div></div>
      <div className="step r d3"><div className="stepn">6</div><div className="stepb"><strong>Inserisci la detrazione nel 730</strong><p>Ogni anno per 10 anni, nella dichiarazione dei redditi, indichi la quota annuale. La prima rata parte dall'anno successivo al pagamento.</p></div></div>
    </div>

    <a href="/spid" className="xlink r"><span className="xlink-em">🔐</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Serve per accedere al portale ENEA e al precompilato dell'Agenzia delle Entrate.</div><span className="xlink-ar">→</span></a>
  </div>

  {/* DOCUMENTI */}
  <div className="sec bh r" id="documenti">
    <div className="sec-tag">Checklist</div>
    <h2>Documenti da conservare</h2>
    <p>L'Agenzia delle Entrate può chiederti tutto per 10 anni dopo l'ultima rata. Non buttare niente.</p>
    <ul className="cl">
      <li className="cli r d1"><div className="ci">📋</div><div className="clb"><strong>Pratica edilizia (CILA/SCIA/PdC)</strong><span className="note">Copia della comunicazione presentata al Comune con ricevuta di deposito</span></div></li>
      <li className="cli r d2"><div className="ci">💳</div><div className="clb"><strong>Bonifici parlanti</strong><span className="note">Tutti i pagamenti devono essere tracciabili con la causale corretta (art. 16-bis)</span></div></li>
      <li className="cli r d3"><div className="ci">🧾</div><div className="clb"><strong>Fatture dell'impresa</strong><span className="note">Devono corrispondere ai lavori autorizzati e ai bonifici effettuati</span></div></li>
      <li className="cli r d1"><div className="ci">📐</div><div className="clb"><strong>Asseverazione del tecnico</strong><span className="note">Per Ecobonus: attestazione dei requisiti tecnici. Per Sismabonus: progetto strutturale</span></div></li>
      <li className="cli r d2"><div className="ci">📊</div><div className="clb"><strong>APE post-lavori</strong><span className="note">Attestato di Prestazione Energetica aggiornato dopo interventi di efficienza energetica</span></div></li>
      <li className="cli r d3"><div className="ci">📨</div><div className="clb"><strong>Ricevuta ENEA</strong><span className="note">Per interventi di riqualificazione energetica: invio entro 90 giorni dalla fine lavori</span></div></li>
      <li className="cli r d4"><div className="ci">🏢</div><div className="clb"><strong>Delibera e ripartizione spese (condominio)</strong><span className="note">Se i lavori sono su parti comuni, serve la delibera assembleare e la tabella millesimale</span></div></li>
    </ul>
  </div>

  {/* ERRORI */}
  <div className="sec bh r" id="errori">
    <div className="sec-tag">Da evitare</div>
    <h2>Errori che fanno perdere il bonus</h2>
    <div className="ib warn r"><div className="ib-t">⚠️ Pagare senza bonifico parlante</div><p>Un bonifico ordinario, un assegno o un pagamento in contanti ti fanno perdere l'intera detrazione su quella fattura. La banca ha un modulo apposito: usalo sempre.</p></div>
    <div className="ib warn r d1"><div className="ib-t">⚠️ Fare lavori senza pratica edilizia</div><p>Se l'Agenzia delle Entrate verifica e non trovi la CILA o SCIA, perdi il bonus e prendi una sanzione. Anche un "semplice" rifacimento del bagno richiede la CILA.</p></div>
    <div className="ib warn r d2"><div className="ib-t">⚠️ Non comunicare all'ENEA entro 90 giorni</div><p>Per l'Ecobonus, se non invii la comunicazione ENEA entro 90 giorni dalla fine lavori, perdi la detrazione. Il termine è tassativo.</p></div>
    <div className="ib warn r d3"><div className="ib-t">⚠️ Comprare i mobili prima di iniziare i lavori</div><p>Il bonus mobili è collegato a una ristrutturazione. La data di inizio lavori (sulla pratica edilizia) deve essere anteriore alla data di acquisto dei mobili.</p></div>
    <div className="ib warn r"><div className="ib-t">⚠️ Intestare il bonifico a una persona diversa</div><p>Chi detrae deve essere chi paga. Se il mutuo è di tuo marito ma il bonifico parte dal tuo conto, hai un problema. Verifica prima la coerenza tra pagante e detentore.</p></div>
  </div>

  {/* CALCOLATORE */}
  <div className="sec bh r" id="calcolatore">
    <div className="sec-tag">Strumento interattivo</div>
    <h2>Stima la tua detrazione</h2>
    <CalcRistrutturare />
  </div>

    {/* BLOCCO AFFILIAZIONE: MOBILI E ARREDO */}
  <div className="aff-block r">
    <div className="aff-label">Strumento consigliato</div>
    <div className="aff-body">
      <div className="aff-left">
        <div className="aff-title">Arreda casa nuova con il bonus mobili: fino a 2.500€ di detrazione</div>
        <div className="aff-text">Mobili, divani, letti, elettrodomestici classe A+. Paga con bonifico o carta e detrai il 50% in 10 rate. Scegli tra migliaia di prodotti.</div>
        <div className="aff-note">* Link in partnership — se acquisti, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
      </div>
      <a href="QUI_LINK_AFFILIATO_RISTRUTTURARE_MOBILI" target="_blank" rel="noopener sponsored" className="aff-btn">
        Scopri l'arredamento →
      </a>
    </div>
  </div>

{/* FAQ */}
  <div className="sec bh r" id="faq">
    <div className="sec-tag">Risposte rapide</div>
    <h2>Domande frequenti</h2>
    <FAQ items={faqItems} />
  </div>

  {/* CTA FINALE */}
  <LeadBox guida="ristrutturare" />

  {/* GUIDE CORRELATE */}
  <div className="related r">
    <h2>Guide correlate</h2>
    <div className="rg">
      <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Come inserire le rate di detrazione nella dichiarazione.</div><span className="rc-ar">→</span></a>
      <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Imposte, mutuo e bonus prima casa: la guida completa.</div><span className="rc-ar">→</span></a>
      <a href="/spid" className="rc"><span className="rc-e">🔐</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per ENEA e la dichiarazione precompilata.</div><span className="rc-ar">→</span></a>
      <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">L'immobile ristrutturato può cambiare il tuo ISEE.</div><span className="rc-ar">→</span></a>
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
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">🧮</span><div><div className="sbtool-n">Calcolatore detrazione</div><div className="sbtool-d">Stima il tuo bonus</div></div></a>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri il tuo caso</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova tecnico</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
</div>

{/* PROMEMORIA SCADENZE */}

      <BrevoForm pageName="ristrutturare" />
      <Footer />
    </>
  );
}
