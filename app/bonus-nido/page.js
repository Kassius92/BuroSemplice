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
  title: 'Come Richiedere il Bonus Nido nel 2026: fino a 3.600\u20AC e Domanda INPS',
  description: 'Bonus asilo nido 2026: come richiederlo, importi per fascia ISEE (fino a 3.600\u20AC), documenti, scadenze e procedura INPS. Guida gratuita aggiornata.',
  keywords: ['bonus nido', 'bonus nido 2026', 'bonus asilo nido', 'bonus nido INPS', 'bonus nido ISEE', 'bonus nido importi', 'bonus nido domanda', 'bonus nido requisiti', 'asilo nido rimborso', 'bonus nido come richiederlo'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-nido' },
  openGraph: {
    title: 'Bonus Nido 2026: Importi fino a 3.600\u20AC e Domanda INPS',
    description: 'Come richiedere il bonus asilo nido 2026: importi per ISEE, requisiti, documenti e procedura. Guida gratuita.',
    url: 'https://zeroburocrazia.it/bonus-nido',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/oghome.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/oghome.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00E8" },
  { id: 'importi', label: 'Importi' },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'domanda', label: 'Come fare domanda' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto vale il bonus nido 2026?", a: "Dipende dall\u2019ISEE minorenni e dalla data di nascita del bambino. Il massimo \u00E8 <strong>3.600\u20AC/anno</strong> per i nati dal 2024 in poi con ISEE sotto 40.000\u20AC. Senza ISEE si riceve il minimo: 1.500\u20AC/anno." },
  { q: "Posso avere il bonus nido senza ISEE?", a: "<strong>S\u00EC, ma ricevi solo 1.500\u20AC/anno</strong> (136\u20AC/mese) invece di 3.000\u20AC o 3.600\u20AC. E se presenti l\u2019ISEE in ritardo, l\u2019adeguamento non \u00E8 retroattivo: i mesi gi\u00E0 pagati al minimo restano al minimo." },
  { q: "Il bonus nido \u00E8 compatibile con le detrazioni fiscali per l\u2019asilo?", a: "<strong>No.</strong> Il bonus nido e la detrazione IRPEF per la frequenza degli asili nido sono alternativi. Non puoi avere entrambi per lo stesso bambino nello stesso anno. Il bonus nido conviene quasi sempre perch\u00E9 vale di pi\u00F9." },
  { q: "Il bonus nido \u00E8 compatibile con l\u2019Assegno unico?", a: "<strong>S\u00EC, sono cumulabili.</strong> Puoi ricevere sia il bonus nido che l\u2019Assegno unico per lo stesso figlio. Inoltre, gli importi dell\u2019Assegno unico non vengono conteggiati nel calcolo dell\u2019ISEE per il bonus nido." },
  { q: "Devo rifare la domanda ogni anno?", a: "<strong>Dal 2026 no.</strong> Se la domanda viene accolta, resta valida fino ad agosto dell\u2019anno in cui il bambino compie 3 anni. Devi per\u00F2 ogni anno confermare le mensilit\u00E0 di frequenza e aggiornare l\u2019ISEE." },
  { q: "Vale anche per i nidi privati?", a: "<strong>S\u00EC</strong>, purch\u00E9 siano autorizzati. Funziona per asili nido pubblici, nidi privati autorizzati, micronidi, sezioni primavera e nidi in famiglia. Sono esclusi i centri ricreativi, il pre-scuola e il post-scuola." },
  { q: "Mio figlio ha una patologia cronica e non pu\u00F2 andare al nido. Posso avere il bonus?", a: "<strong>S\u00EC.</strong> Il bonus copre anche forme di assistenza domiciliare per bambini con gravi patologie croniche certificate che non possono frequentare l\u2019asilo. In questo caso l\u2019importo viene erogato in un\u2019unica soluzione." },
  { q: "Quanto tempo ci mette l\u2019INPS a pagare?", a: "Dopo la validazione della domanda e il caricamento delle ricevute, l\u2019INPS paga entro <strong>30 giorni</strong>. Il pagamento \u00E8 mensile (massimo 11 mensilit\u00E0 per anno). Pi\u00F9 carichi le ricevute velocemente, prima ricevi i soldi." },
];

export default function BonusNidoPage() {
  const schemas = [
    articleSchema({
      title: 'Bonus Nido 2026: come richiederlo, importi e requisiti ISEE',
      description: 'Guida completa al bonus asilo nido 2026: importi fino a 3.600\u20AC, requisiti, documenti e procedura INPS.',
      url: '/bonus-nido',
      image: 'oghome.png',
      datePublished: '2026-03-19',
      dateModified: '2026-03-19',
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
            <div className="cat-badge">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Bonus <em>nido</em></h1>
            <p className="hero-sub">Fino a 3.600&euro; all&apos;anno per pagare l&apos;asilo nido di tuo figlio. Come richiederlo, quanto ti spetta in base all&apos;ISEE, documenti e procedura INPS. Guida aggiornata al 2026.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCB0'} Fino a 3.600&euro;/anno</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS &middot; Legge di Bilancio 2025 (L. 207/2024) &middot; Circolare INPS n. 123/2025 &middot; D.L. 95/2025</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">3.600&euro;</div><div className="hl">importo massimo<br/>per figlio all&apos;anno</div></div>
            <div className="hstat"><div className="hn">0&ndash;3</div><div className="hl">et&agrave; del bambino<br/>per averne diritto</div></div>
            <div className="hstat"><div className="hn">ISEE</div><div className="hl">minorenni<br/>per importo massimo</div></div>
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
              <a href="/assegno-unico" className="ps">{'\uD83D\uDC76'} Assegno unico</a>
              <a href="/figlio" className="ps">{'\uD83D\uDC68\u200D\uD83D\uDC67'} Aspetto un figlio</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE6'} INPS &mdash; Domanda bonus nido</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">3.600&euro;</div><div className="sl">importo massimo per figlio all&apos;anno</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDC76'}</div><div className="sn">0&ndash;3 anni</div><div className="sl">et&agrave; del bambino</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">ISEE</div><div className="sl">minorenni obbligatorio per il massimo</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">per fare la domanda online</div></div>
                <div className="sc tc r d2"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">31/12</div><div className="sl">scadenza domanda</div></div>
                <div className="sc    r d3"><div className="si">{'\u2705'}</div><div className="sn">Cumulabile</div><div className="sl">con l&apos;Assegno unico</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il bonus nido</h2>

            <p>Il <strong>bonus nido</strong> &egrave; un contributo dell&apos;INPS che rimborsa le rette dell&apos;asilo nido &mdash; pubblico o privato autorizzato &mdash; per i bambini sotto i 3 anni. Non &egrave; un bonus che ricevi e basta: &egrave; un <strong>rimborso delle spese reali</strong>. Paghi la retta, carichi la ricevuta sul portale INPS, e l&apos;INPS ti rimborsa ogni mese.</p>

            <p>L&apos;importo dipende dall&apos;<Tip t="L&apos;ISEE calcolato specificamente per le prestazioni destinate ai minorenni. Serve per il bonus nido, il bonus mamma e altre agevolazioni per i figli. Si fa come l&apos;ISEE normale, ma tiene conto solo del nucleo familiare del minore.">ISEE minorenni</Tip>: pi&ugrave; &egrave; basso, pi&ugrave; ricevi. Il massimo &egrave; <strong>3.600&euro;/anno</strong> per i nati dal 2024 in poi con ISEE sotto i 40.000&euro;. Senza ISEE ricevi solo 1.500&euro;.</p>

            <p>Funziona anche per i <strong>micronidi</strong>, le <strong>sezioni primavera</strong> e i <strong>nidi in famiglia</strong>. Se tuo figlio ha una patologia cronica grave che gli impedisce di andare al nido, puoi usare il bonus per l&apos;assistenza domiciliare.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>ISEE minorenni</strong> &mdash; l&apos;indicatore economico specifico per le prestazioni ai minori. Serve per determinare l&apos;importo del bonus nido. Si fa come l&apos;ISEE normale ma tiene conto solo del nucleo familiare del bambino.</div>
              <div className="gl-item r d2"><strong>Nido autorizzato</strong> &mdash; un asilo nido (pubblico o privato) che ha l&apos;autorizzazione del Comune a operare. Solo i nidi autorizzati danno diritto al bonus. I centri ricreativi e il doposcuola sono esclusi.</div>
              <div className="gl-item r d3"><strong>Mensilit&agrave;</strong> &mdash; il bonus si calcola su base mensile, fino a un massimo di 11 mensilit&agrave; all&apos;anno (da gennaio a dicembre, escluso un mese). Devi prenotare le mensilit&agrave; all&apos;inizio dell&apos;anno.</div>
              <div className="gl-item r d4"><strong>Ricevuta/fattura</strong> &mdash; il documento di pagamento della retta. Deve contenere: nome del bambino, mese di riferimento, dati della struttura e importo. Senza ricevuta, niente rimborso.</div>
              <div className="gl-item r d1"><strong>Assegno unico (AUU)</strong> &mdash; il contributo mensile per i figli. &Egrave; cumulabile con il bonus nido, e i soldi dell&apos;Assegno unico non contano nel calcolo dell&apos;ISEE per il bonus nido.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Bonus nido e detrazioni: non puoi avere entrambi</div>
              <p>Ogni anno devi scegliere: o il <strong>bonus nido</strong> (rimborso INPS fino a 3.600&euro;) o la <strong>detrazione IRPEF</strong> per l&apos;asilo (19% delle rette, massimo 632&euro; di rimborso). Il bonus nido conviene quasi sempre perch&eacute; vale molto di pi&ugrave;.</p>
            </div>
            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Ti serve l&apos;ISEE minorenni per ottenere l&apos;importo massimo.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* IMPORTI */}
          <div className="sec r" id="importi">
            <div className="sec-tag">Quanto spetta</div>
            <h2>Importi 2026 per fascia ISEE</h2>

            <p>L&apos;importo del bonus nido dipende da due fattori: la <strong>data di nascita del bambino</strong> e il valore dell&apos;<strong>ISEE minorenni</strong>.</p>

            <h3>Nati dal 1&deg; gennaio 2024 in poi</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>ISEE minorenni</th><th>Importo annuo</th><th>Importo mensile</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Fino a 25.000&euro;</strong></td><td className="cfr"><strong>3.600&euro;</strong></td><td>~327&euro;/mese</td></tr>
                  <tr><td>Da 25.001&euro; a 40.000&euro;</td><td className="cfr">3.600&euro;</td><td>~327&euro;/mese</td></tr>
                  <tr><td>Oltre 40.000&euro;</td><td className="cv">1.500&euro;</td><td>~136&euro;/mese</td></tr>
                  <tr><td><strong>Senza ISEE</strong></td><td className="cv">1.500&euro;</td><td>~136&euro;/mese</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Nati prima del 2024</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>ISEE minorenni</th><th>Importo annuo</th><th>Importo mensile</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Fino a 25.000&euro;</strong></td><td className="cfr"><strong>3.000&euro;</strong></td><td>~272&euro;/mese</td></tr>
                  <tr><td>Da 25.001&euro; a 40.000&euro;</td><td className="cfr">2.500&euro;</td><td>~227&euro;/mese</td></tr>
                  <tr><td>Oltre 40.000&euro;</td><td className="cv">1.500&euro;</td><td>~136&euro;/mese</td></tr>
                  <tr><td><strong>Senza ISEE</strong></td><td className="cv">1.500&euro;</td><td>~136&euro;/mese</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Senza ISEE perdi fino a 2.100&euro;</div>
              <p>Se non presenti l&apos;ISEE minorenni, l&apos;INPS ti d&agrave; automaticamente il minimo: 1.500&euro;. <strong>E se lo presenti in ritardo, l&apos;adeguamento non &egrave; retroattivo</strong> &mdash; i mesi gi&agrave; pagati al minimo restano al minimo. Fai l&apos;ISEE <em>prima</em> di fare la domanda del bonus nido.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il rimborso non pu&ograve; superare la retta</div>
              <p>Se la retta del nido &egrave; 250&euro;/mese e hai diritto a 327&euro;/mese, l&apos;INPS ti rimborsa <strong>250&euro;</strong> (la spesa effettiva). Il bonus copre fino al 100% della retta, ma non d&agrave; pi&ugrave; di quanto spendi.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi pu&ograve; richiederlo</div>
            <h2>Requisiti</h2>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC67'}</div><div className="clb"><strong>Essere il genitore che paga la retta</strong><span className="note">La domanda va presentata dal genitore che sostiene effettivamente la spesa.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Bambino sotto i 3 anni</strong><span className="note">Il bonus copre dalla nascita fino ad agosto dell&apos;anno in cui compie 3 anni.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDDEE\uD83C\uDDF9'}</div><div className="clb"><strong>Residenza in Italia</strong><span className="note">Cittadino italiano, UE, o extracomunitario con permesso di soggiorno valido.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFEB'}</div><div className="clb"><strong>Nido autorizzato</strong><span className="note">Pubblico o privato autorizzato, micronido, sezione primavera o nido in famiglia.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Convivenza con il bambino</strong><span className="note">Obbligatoria in caso di richiesta per assistenza domiciliare.</span></div></li>
            </ul>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come fare domanda</h2>

            <p>La domanda si presenta <strong>solo online</strong> sul portale INPS. Servono lo SPID (o CIE) e l&apos;ISEE minorenni gi&agrave; pronto.</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Fai l&apos;ISEE minorenni</strong><p>Prima di tutto. Senza ISEE ricevi il minimo (1.500&euro;). Fallo online su inps.it o al CAF &mdash; &egrave; gratis.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Accedi al portale INPS con SPID</strong><p>Vai su inps.it, cerca &quot;bonus nido&quot; e accedi al servizio. In alternativa puoi rivolgerti a un patronato.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Compila la domanda</strong><p>Indica la struttura frequentata dal bambino e prenota le mensilit&agrave; (da gennaio a dicembre, massimo 11). Prenota tutte quelle previste.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Carica le ricevute ogni mese</strong><p>Dopo ogni pagamento della retta, carica la ricevuta sul portale INPS. La ricevuta deve contenere: nome del bambino, mese, dati della struttura, importo.</p></div></div>
              <div className="step r d1"><div className="stepn">5</div><div className="stepb"><strong>Ricevi il rimborso</strong><p>L&apos;INPS paga entro 30 giorni dalla validazione. Il pagamento &egrave; mensile, direttamente sul tuo IBAN.</p></div></div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Novit&agrave; 2026: domanda pluriennale</div>
              <p>Dal 2026 non devi pi&ugrave; rifare la domanda ogni anno. Se viene accolta, <strong>resta valida fino ad agosto dell&apos;anno in cui il bambino compie 3 anni</strong>. Devi solo confermare le mensilit&agrave; e aggiornare l&apos;ISEE ogni anno.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Ti serve per accedere al portale INPS. 15 minuti, gratis.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; del genitore richiedente</strong><span className="note">Valido e leggibile.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE minorenni 2026 in corso di validit&agrave;</strong><span className="note">Fondamentale per accedere agli importi maggiorati. Senza ISEE = importo minimo.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFEB'}</div><div className="clb"><strong>Attestazione di iscrizione all&apos;asilo nido</strong><span className="note">Pubblico o privato autorizzato. Serve il nome e i dati della struttura.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83E\uDDFE'}</div><div className="clb"><strong>Ricevute di pagamento delle rette mensili</strong><span className="note">Bollettini, bonifici o ricevute. Devono indicare: nome bambino, mese, importo, dati struttura.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN del genitore richiedente</strong><span className="note">L&apos;IBAN deve essere intestato al genitore che fa la domanda.</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} L&apos;IBAN deve essere del genitore richiedente</div>
              <p>Se l&apos;IBAN non corrisponde al genitore che ha fatto la domanda, il pagamento si blocca. Controlla prima di inviare.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che fanno perdere soldi</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Fare la domanda senza ISEE</div><p>L&apos;errore pi&ugrave; costoso. Senza ISEE minorenni ricevi 1.500&euro; invece di 3.600&euro;. E se presenti l&apos;ISEE dopo, <strong>non recuperi la differenza sui mesi gi&agrave; pagati</strong>. Fai l&apos;ISEE prima, sempre.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Non caricare le ricevute</div><p>Il bonus &egrave; un rimborso spese. Se non carichi la ricevuta del mese, quel mese non viene rimborsato. Carica le ricevute appena le ricevi &mdash; non aspettare fine anno.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Ricevute incomplete</div><p>La ricevuta deve contenere: nome del bambino, mese di riferimento, dati della struttura (P.IVA o CF) e codice fiscale del genitore richiedente. Se manca qualcosa, l&apos;INPS la rifiuta.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Chiedere anche la detrazione IRPEF</div><p>Il bonus nido e la detrazione fiscale per l&apos;asilo (nel 730) <strong>non sono cumulabili</strong>. Se chiedi entrambi, dovrai restituire uno dei due. Il bonus nido conviene quasi sempre.</p></div>
          </div>

          {/* ESEMPIO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Sara risparmia 3.600&euro; all&apos;anno</h2>

            <p><strong>Sara ha 34 anni</strong>, vive a Bologna con il marito e la figlia Emma di 18 mesi. Sara lavora part-time (1.300&euro;/mese), il marito &egrave; impiegato (1.800&euro;/mese). ISEE minorenni: 22.000&euro;. Emma frequenta un nido privato autorizzato, retta: 450&euro;/mese.</p>

            <p>Sara presenta l&apos;ISEE minorenni a gennaio e fa subito la domanda bonus nido sul portale INPS. Prenota tutte e 11 le mensilit&agrave;.</p>

            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Retta mensile nido</span><span className="db-old">450&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">Paga 450&euro;</span></div>
              <div className="db-row"><span className="db-label">Rimborso INPS mensile</span><span className="db-old">&mdash;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">+327&euro;</span></div>
              <div className="db-row"><span className="db-label">Costo reale mensile</span><span className="db-old">450&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">123&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">Risparmio annuo</span><span className="db-val">+3.597&euro;</span></div>
            </div>

            <p>La collega di Sara, stessa situazione, non ha fatto l&apos;ISEE e riceve solo 136&euro;/mese. Differenza: <strong>2.100&euro; in meno all&apos;anno</strong> per non aver compilato un modulo che richiede 20 minuti.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Il bonus nido &egrave; uno dei contributi pi&ugrave; generosi per le famiglie italiane. Ma funziona solo se fai le cose nell&apos;ordine giusto: prima l&apos;ISEE, poi la domanda, poi le ricevute ogni mese. Chi lo fa bene recupera quasi tutta la retta.</p>
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
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Ti serve l&apos;ISEE minorenni per il bonus nido.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/assegno-unico" className="rc"><span className="rc-e">{'\uD83D\uDC76'}</span><div className="rc-t">Assegno unico</div><div className="rc-d">Cumulabile con il bonus nido.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/figlio" className="rc"><span className="rc-e">{'\uD83D\uDC68\u200D\uD83D\uDC67'}</span><div className="rc-t">Aspetto un figlio</div><div className="rc-d">Tutti i bonus e le agevolazioni per i genitori.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Domanda bonus nido online</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/assegno-unico" className="sbguide">{'\uD83D\uDC76'} Assegno unico<span className="sbg-ar">&rarr;</span></a>
            <a href="/figlio" className="sbguide">{'\uD83D\uDC68\u200D\uD83D\uDC67'} Aspetto un figlio<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
