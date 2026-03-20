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
  title: "Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura",
  description: "Dichiarazione di successione 2026: quando farla, documenti necessari, imposte, franchigie, costi del CAF e procedura telematica passo per passo.",
  keywords: ["successione","dichiarazione di successione","successione 2026","eredità","successione ereditaria","imposte successione","successione costi","successione documenti","franchigia successione"],
  alternates: { canonical: 'https://zeroburocrazia.it/successione' },
  openGraph: {
    title: "Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura",
    description: "Dichiarazione di successione 2026: quando farla, documenti necessari, imposte, franchigie, costi del CAF e procedura telematica passo per passo.",
    url: 'https://zeroburocrazia.it/successione',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogsuccessione.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogsuccessione.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'quando', label: "Quando farla" },
  { id: 'imposte', label: "Imposte e franchigie" },
  { id: 'documenti', label: "Documenti" },
  { id: 'procedura', label: "Procedura" },
  { id: 'costi', label: "Costi", bh: true },
  { id: 'errori', label: "Errori comuni", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "Entro quanto tempo va fatta la successione?", a: "Entro <strong>12 mesi</strong> dalla data del decesso. Dopo scattano sanzioni dal 120% al 240% dell'imposta dovuta, più interessi." },
  { q: "Quanto costa fare la successione al CAF?", a: "Per una successione standard (coniuge + figli, qualche immobile): <strong>500-800€</strong> di parcella + imposte. Il notaio costa 1.000-3.000€+." },
  { q: "Se eredito meno di 1 milione di euro pago qualcosa?", a: "Se sei <strong>figlio o coniuge</strong>, l'imposta di successione è zero sotto la franchigia di 1.000.000€. Però se ci sono immobili, paghi comunque le imposte ipotecarie e catastali (200+200€ se è prima casa)." },
  { q: "Posso rinunciare all'eredità?", a: "<strong>Sì.</strong> Se i debiti superano i beni, puoi rinunciare con dichiarazione in Tribunale o dal notaio. Se sei nel possesso dei beni del defunto (es. convivi), hai 3 mesi per rinunciare. Altrimenti 10 anni." },
  { q: "La dichiarazione di successione la posso fare da solo?", a: "<strong>No.</strong> Dal 2017 va presentata in via telematica tramite il software SuccessioniOnLine. Serve un intermediario abilitato: CAF, commercialista o notaio." },
  { q: "Le polizze vita rientrano nella successione?", a: "Le polizze vita con <strong>beneficiario designato</strong> sono escluse dalla successione e non pagano imposta. Vengono pagate direttamente al beneficiario dall'assicurazione." },
  { q: "Se il defunto aveva solo un conto corrente sotto 100.000€?", a: "Se l'eredità va a coniuge/figli e il valore totale è <strong>sotto 100.000€ senza immobili</strong>, la dichiarazione non è obbligatoria. Però la banca potrebbe chiederla comunque per sbloccare il conto." },
  { q: "Cosa cambia dal 2025 nella successione?", a: "Il sistema di <strong>autoliquidazione</strong>: le imposte si calcolano e pagano al momento della dichiarazione, senza aspettare l'avviso dall'Agenzia. Più veloce ma serve più precisione nel calcolo." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Come Fare la Successione nel 2026: Documenti, Costi, Imposte e Procedura",
      description: "Dichiarazione di successione 2026: quando farla, documenti necessari, imposte, franchigie, costi del CAF e procedura telematica passo per passo.",
      url: '/successione',
      image: 'ogsuccessione.png',
      datePublished: '2026-03-20',
      dateModified: '2026-03-20',
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
            <div className="cat-badge">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Successione<br/>ed <em>eredit&agrave;</em></h1>
            <p className="hero-sub">Qualcuno &egrave; mancato e devi gestire l&apos;eredit&agrave;. Dichiarazione di successione, documenti, imposte, franchigie e costi. Tutto quello che devi sapere, senza panico.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 12 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCC5'} Entro 12 mesi dal decesso</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; D.Lgs. 346/1990 &middot; D.Lgs. 139/2024 &middot; D.Lgs. 123/2025</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">12 mesi</div><div className="hl">termine per presentare<br/>la dichiarazione</div></div>
            <div className="hstat"><div className="hn">1M&euro;</div><div className="hl">franchigia figli/coniuge<br/>sotto = zero imposte</div></div>
            <div className="hstat"><div className="hn">500-800&euro;</div><div className="hl">costo medio al CAF<br/>per successione standard</div></div>
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
              <a href="/compro-casa" className="ps">{'\uD83C\uDFE1'} Compro casa</a>
              <a href="/730" className="ps">{'\uD83E\uDDFE'} 730</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFDB\uFE0F'} Agenzia Entrate &mdash; Successione</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Dichiarazione di successione</strong> &mdash; il documento che trasferisce ufficialmente i beni del defunto agli eredi. Si presenta all&apos;Agenzia delle Entrate entro 12 mesi.</div>
              <div className="gl-item r d2"><strong>De cuius</strong> &mdash; termine giuridico per indicare la persona deceduta, colui &ldquo;della cui eredit&agrave;&rdquo; si tratta.</div>
              <div className="gl-item r d3"><strong>Franchigia</strong> &mdash; la soglia sotto la quale non si paga l&apos;imposta di successione. Per figli e coniuge &egrave; 1.000.000&euro; ciascuno.</div>
              <div className="gl-item r d4"><strong>Voltura catastale</strong> &mdash; l&apos;aggiornamento dell&apos;intestazione degli immobili al catasto &mdash; serve per trasferire la propriet&agrave; agli eredi.</div>
              <div className="gl-item r d1"><strong>Autoliquidazione</strong> &mdash; dal 2025, sei tu (o il CAF) a calcolare e pagare le imposte al momento della dichiarazione, senza aspettare l&apos;avviso dell&apos;Agenzia.</div>
              <div className="gl-item r d2"><strong>Glifo</strong> &mdash; l&apos;attestazione digitale che l&apos;Agenzia rilascia dopo la dichiarazione. Conferma che la successione &egrave; stata presentata correttamente.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">12 mesi</div><div className="sl">termine per presentare<br/>dal decesso</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">1M&euro;</div><div className="sl">franchigia figli/coniuge<br/>sotto = 0 imposte</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83D\uDCBB'}</div><div className="sn">Online</div><div className="sl">dichiarazione telematica<br/>tramite CAF o commercialista</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDCB3'}</div><div className="sn">4%</div><div className="sl">aliquota figli/coniuge<br/>sopra la franchigia</div></div>
                <div className="sc r d1"><div className="si">{'\uD83C\uDFE0'}</div><div className="sn">200&euro;</div><div className="sl">imposte fisse<br/>se &egrave; prima casa</div></div>
                <div className="sc r d2"><div className="si">{'\u26A0\uFE0F'}</div><div className="sn">Sanzioni</div><div className="sl">se non la presenti<br/>dal 120% al 240%</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la dichiarazione di successione</h2>
            <p>Quando una persona muore, i suoi beni (casa, soldi, investimenti) devono essere trasferiti agli eredi. La <strong>dichiarazione di successione</strong> &egrave; il documento fiscale che rende ufficiale questo passaggio davanti allo Stato.</p>

            <p>Non &egrave; un atto notarile: &egrave; una dichiarazione all&apos;Agenzia delle Entrate che elenca chi sono gli eredi, quali beni ci sono e quanto valgono. Serve per <strong>sbloccare i conti correnti</strong>, <strong>trasferire la propriet&agrave; degli immobili</strong> e pagare le eventuali imposte.</p>

            <p>Dal 2025, la dichiarazione funziona con il sistema di <strong>autoliquidazione</strong>: sei tu (o il professionista a cui ti rivolgi) a calcolare e pagare le imposte al momento dell&apos;invio, senza aspettare un avviso dall&apos;Agenzia.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Non sempre serve la dichiarazione</div>
              <p>Se l&apos;eredit&agrave; va al <strong>coniuge e/o ai parenti in linea retta</strong> (figli, nipoti) e il valore complessivo &egrave; <strong>sotto 100.000&euro;</strong> e <strong>non include immobili</strong>, la dichiarazione non &egrave; obbligatoria. Esempio: un genitore lascia solo un conto corrente da 50.000&euro; ai figli &rarr; non serve la dichiarazione.</p>
            </div>
          </div>

          {/* QUANDO */}
          <div className="sec r" id="quando">
            <div className="sec-tag">Scadenze</div>
            <h2>Quando va presentata</h2>
            <p>Entro <strong>12 mesi dalla data del decesso</strong>. Se la presenti in ritardo, scattano sanzioni (dal 120% al 240% dell&apos;imposta dovuta). Se non la presenti affatto, il problema si trasferisce ai figli e ai nipoti, creando blocchi patrimoniali molto costosi da risolvere.</p>

            <p>Sono obbligati a presentarla: gli eredi, i legatari, gli esecutori testamentari, i curatori dell&apos;eredit&agrave;. <strong>Se la presenta uno degli eredi, gli altri sono esonerati.</strong></p>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Non rimandare</div>
              <p>Finch&eacute; non presenti la dichiarazione: la banca <strong>non sblocca il conto</strong> del defunto, non puoi <strong>vendere o affittare</strong> gli immobili ereditati, non puoi fare la <strong>voltura delle utenze</strong>. Pi&ugrave; aspetti, pi&ugrave; si complica.</p>
            </div>
          </div>

          {/* IMPOSTE */}
          <div className="sec r" id="imposte">
            <div className="sec-tag">Quanto si paga</div>
            <h2>Imposte e franchigie</h2>
            <p>Le imposte dipendono dal <strong>grado di parentela</strong> con il defunto e dal <strong>valore dei beni ereditati</strong>. La buona notizia: per figli e coniuge, sotto 1 milione di euro <strong>non si paga nulla</strong>.</p>

            <h3>Imposta di successione</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Grado di parentela</th><th>Aliquota</th><th>Franchigia</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Coniuge e figli</td><td className="cv">4%</td><td className="cv cfr">1.000.000&euro; ciascuno <span className="badge">La pi&ugrave; alta</span></td></tr>
                  <tr><td>Fratelli e sorelle</td><td className="cv">6%</td><td className="cv">100.000&euro; ciascuno</td></tr>
                  <tr><td>Altri parenti fino al 4&deg; grado</td><td className="cv">6%</td><td>Nessuna</td></tr>
                  <tr><td>Tutti gli altri (non parenti)</td><td className="cv">8%</td><td>Nessuna</td></tr>
                </tbody>
              </table>
            </div>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: Marco eredita dal padre</h3>
              <p>Il padre di Marco muore. Marco &egrave; figlio unico. Eredita: un appartamento (valore catastale <strong>120.000&euro;</strong>) + conto corrente <strong>35.000&euro;</strong>. Totale: <strong>155.000&euro;</strong>.</p>
              <p>Franchigia per i figli: 1.000.000&euro;. Marco &egrave; <strong>ampiamente sotto</strong>.</p>
              <p>Imposta di successione: <strong>0&euro;</strong></p>
              <p>Imposte fisse (prima casa): ipotecaria 200&euro; + catastale 200&euro; = <strong>400&euro;</strong></p>
              <p>Costo CAF: circa <strong>600&euro;</strong></p>
              <div className="db-row db-total"><span className="db-label">Costo totale per Marco</span><span className="db-val">~1.000&euro;</span></div>
            </div>

            <h3>Imposte sugli immobili (se presenti)</h3>
            <p>Se nell&apos;eredit&agrave; ci sono immobili, si aggiungono:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Imposta ipotecaria: 2% del valore catastale</strong><span className="note">Minimo 200&euro;. Se &egrave; prima casa per l&apos;erede: importo fisso 200&euro;.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Imposta catastale: 1% del valore catastale</strong><span className="note">Minimo 200&euro;. Se &egrave; prima casa per l&apos;erede: importo fisso 200&euro;.</span></div></li>
            </ul>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Certificato di morte</strong><span className="note">O autocertificazione. Lo rilascia il Comune.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'}</div><div className="clb"><strong>Stato di famiglia storico del defunto + attuale degli eredi</strong><span className="note">Serve per identificare tutti gli eredi.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Visure catastali degli immobili</strong><span className="note">Per ogni immobile del defunto: visura aggiornata + atto di provenienza (rogito, donazione precedente).</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>Saldi conti correnti alla data del decesso</strong><span className="note">La banca rilascia una dichiarazione con saldo e giacenza alla data della morte.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB0'}</div><div className="clb"><strong>Titoli, investimenti, polizze</strong><span className="note">Estratti conto titoli, obbligazioni, fondi. Le polizze vita con beneficiario designato sono escluse dalla successione.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDDFE'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; e codice fiscale di tutti gli eredi</strong><span className="note">Pi&ugrave; il codice fiscale del defunto.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCDC'}</div><div className="clb"><strong>Testamento (se presente)</strong><span className="note">Copia autentica del verbale di pubblicazione. Se non c&apos;&egrave; testamento, si applica la successione legittima.</span></div></li>
            </ul>
          </div>

          {/* PROCEDURA */}
          <div className="sec r" id="procedura">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa</h2>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Raccogli i documenti</strong>
                  <p>Certificato di morte, stato di famiglia, visure catastali, saldi bancari, testamento (se c&apos;&egrave;). La raccolta pu&ograve; richiedere 1-2 settimane.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Rivolgiti a un CAF o commercialista</strong>
                  <p>La dichiarazione va presentata in via telematica tramite il software SuccessioniOnLine dell&apos;Agenzia delle Entrate. I privati non possono farlo da soli &mdash; serve un intermediario abilitato.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Il professionista compila, calcola e invia</strong>
                  <p>Inserisce i dati nel software, calcola le imposte in autoliquidazione, allega i documenti in PDF, appone la firma digitale e invia all&apos;Agenzia delle Entrate.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Pagamento imposte + voltura catastale</strong>
                  <p>Le imposte vengono addebitate entro 90 giorni sull&apos;IBAN indicato. L&apos;Agenzia rilascia il Glifo (attestazione) in 10-14 giorni. Con il Glifo puoi fare la voltura catastale e sbloccare i conti.</p>
                </div>
              </div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} CAF o notaio?</div>
              <p><strong>Per la maggior parte delle successioni il CAF basta</strong> (e costa molto meno: 500-800&euro; vs 1.000-3.000&euro; del notaio). Il notaio serve solo in casi particolari: testamenti complessi, contenziosi tra eredi, trust. Se la successione &egrave; &ldquo;standard&rdquo; (coniuge + figli, qualche immobile, un conto corrente), il CAF &egrave; la scelta migliore.</p>
            </div>
          </div>

          {/* COSTI */}
          <div className="sec breve-hide r" id="costi">
            <div className="sec-tag">Quanto costa</div>
            <h2>Costi della successione</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Voce</th><th>Costo indicativo</th></tr></thead>
                <tbody>
                  <tr><td>Parcella CAF (successione standard)</td><td className="cv">500-800&euro;</td></tr>
                  <tr><td>Parcella notaio</td><td className="cv">1.000-3.000&euro;+</td></tr>
                  <tr><td>Imposta ipotecaria (con prima casa)</td><td className="cv">200&euro; fissi</td></tr>
                  <tr><td>Imposta catastale (con prima casa)</td><td className="cv">200&euro; fissi</td></tr>
                  <tr><td>Imposta ipotecaria (senza prima casa)</td><td className="cv">2% valore catastale (min 200&euro;)</td></tr>
                  <tr><td>Imposta catastale (senza prima casa)</td><td className="cv">1% valore catastale (min 200&euro;)</td></tr>
                  <tr><td>Imposta di bollo</td><td className="cv">85&euro;</td></tr>
                  <tr><td>Tassa ipotecaria</td><td className="cv">90&euro;</td></tr>
                  <tr><td>Tributi speciali</td><td className="cv">variabili</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Spese funerarie detraibili</div>
              <p>Le spese per il funerale sono detraibili al 19% nel 730, fino a un tetto di 1.550&euro; (detrazione massima: 294,50&euro;). Le spese devono essere documentate con fattura e vanno detratte dall&apos;erede che le ha sostenute.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori comuni</h2>
            <div className="ib warn r"><div className="ib-t">{'⚠️'} Non fare la successione</div><p>L&apos;errore pi&ugrave; grave. Senza dichiarazione i beni restano &ldquo;congelati&rdquo;: conti bloccati, immobili non vendibili. Il problema si trasferisce ai figli e nipoti, creando situazioni sempre pi&ugrave; costose da risolvere.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'⚠️'} Dimenticare un immobile o un conto</div><p>Se dimentichi un bene nella dichiarazione, dovrai presentare una <strong>successione integrativa</strong> &mdash; con ulteriori costi e perdite di tempo. Controlla tutto prima di inviare: visure catastali, conti in tutte le banche, eventuali cassette di sicurezza.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'⚠️'} Accettare un&apos;eredit&agrave; con debiti</div><p>Se il defunto aveva debiti superiori ai beni, puoi <strong>rinunciare all&apos;eredit&agrave;</strong> (entro 3 mesi se sei nel possesso dei beni, 10 anni altrimenti) oppure accettare con <strong>beneficio d&apos;inventario</strong> &mdash; cos&igrave; rispondi dei debiti solo fino al valore dei beni ereditati.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'⚠️'} Fare il fai-da-te</div><p>La dichiarazione va presentata in via telematica tramite software. Un errore nelle quote, nelle imposte o nei codici catastali obbliga a una successione integrativa. Meglio spendere 600&euro; al CAF che rischiare migliaia di euro di correzioni.</p></div>
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
              <a href="/compro-casa" className="rc r d1"><span className="rc-e">{'\uD83C\uDFE1'}</span><div className="rc-t">Compro casa</div><div className="rc-d">Se hai ereditato un immobile e vuoi venderlo o tenerlo.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730" className="rc r d2"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Le spese funerarie si detraggono. I redditi dell'eredità vanno dichiarati.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/imu" className="rc r d3"><span className="rc-e">{'\uD83C\uDFDB\uFE0F'}</span><div className="rc-t">IMU</div><div className="rc-d">Se hai ereditato un immobile, potresti dover pagare l'IMU.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFDB\uFE0F'}</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Dichiarazione di successione</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/compro-casa" className="sbguide">{'\uD83C\uDFE1'} Compro casa<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} 730<span className="sbg-ar">&rarr;</span></a>
            <a href="/imu" className="sbguide">{'\uD83C\uDFDB\uFE0F'} IMU<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
