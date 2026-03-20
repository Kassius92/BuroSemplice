import Link from 'next/link';
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
import CalcIMU from '@/components/CalcIMU';

export const metadata = {
  title: 'Come Calcolare e Pagare l\u2019IMU nel 2026: Aliquote, Esenzioni e Scadenze',
  description: 'IMU 2026: chi paga, chi \u00e8 esente, come si calcola, aliquote, scadenze 16 giugno e 16 dicembre, F24. Prima casa esente, seconda casa, comodato. Guida gratuita.',
  keywords: ["IMU", "IMU 2026", "calcolo IMU", "IMU prima casa", "IMU seconda casa", "esenzione IMU", "aliquote IMU", "scadenze IMU", "F24 IMU", "rendita catastale"],
  alternates: { canonical: 'https://zeroburocrazia.it/imu' },
  openGraph: {
    type: 'article',
    title: 'IMU 2026: Calcolo, Aliquote, Esenzioni e Scadenze',
    description: 'IMU 2026: chi paga, esenzioni, calcolo, aliquote, scadenze. Guida gratuita.',
    url: 'https://zeroburocrazia.it/imu',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogimu.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogimu.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8 e chi paga" },
  { id: 'esenzioni', label: 'Chi NON paga (esenzioni)' },
  { id: 'calcolo', label: 'Come si calcola', bh: true },
  { id: 'scadenze', label: 'Scadenze e come pagare' },
  { id: 'agevolazioni', label: 'Agevolazioni e riduzioni' },
  { id: 'casi', label: 'Casi particolari' },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "La prima casa paga l\u2019IMU?", a: "<strong>No, se ci abiti.</strong> L\u2019abitazione principale (dove hai residenza anagrafica e dimora abituale) \u00e8 esente dall\u2019IMU, tranne se \u00e8 di lusso (categorie A/1, A/8, A/9). L\u2019esenzione vale anche per una pertinenza per tipo (un garage C/6, una cantina C/2, una tettoia C/7)." },
  { q: "Come trovo la rendita catastale del mio immobile?", a: "Nella <strong>visura catastale</strong>, che puoi richiedere gratis online sul sito dell\u2019Agenzia delle Entrate con SPID/CIE. La trovi anche nell\u2019atto di compravendita o nelle bollette IMU degli anni precedenti." },
  { q: "Cosa succede se non pago l\u2019IMU?", a: "Puoi usare il <strong>ravvedimento operoso</strong>: paghi con una sanzione ridotta che cresce col ritardo. Entro 14 giorni: 0,1%/giorno. Entro 30 giorni: 1,25%. Entro 90 giorni: 1,67%. Oltre 1 anno: 3,75%. Dopo il ravvedimento, il Comune pu\u00f2 emettere un avviso di accertamento con sanzione piena del 30%." },
  { q: "Ho una sola casa ma non ci abito: pago l\u2019IMU?", a: "<strong>S\u00ec.</strong> L\u2019esenzione prima casa richiede residenza + dimora abituale. Se possiedi una casa ma vivi altrove (in affitto, dal partner, ecc.), quella casa \u00e8 tassata come seconda casa, anche se \u00e8 l\u2019unica che hai." },
  { q: "Due coniugi con due case diverse: pagano?", a: "Dopo la sentenza della Corte Costituzionale 209/2022, <strong>ognuno pu\u00f2 avere la propria abitazione principale esente</strong>, a patto che ci risieda e dimori. Non conta pi\u00f9 il vincolo del nucleo familiare." },
  { q: "Come funziona il comodato al figlio?", a: "Se presti la casa a un figlio (o genitore) che la usa come abitazione principale, la <strong>base imponibile si riduce del 50%</strong>. Condizioni: contratto di comodato registrato, proprietario residente nello stesso Comune, non devi possedere altri immobili in Italia (tranne la tua abitazione principale)." },
  { q: "Le aliquote sono uguali in tutta Italia?", a: "<strong>No, ogni Comune decide le proprie aliquote</strong> entro limiti di legge. L\u2019aliquota base per la seconda casa \u00e8 8,6\u2030, ma il Comune pu\u00f2 portarla fino al 10,6\u2030 (o 11,4\u2030 con maggiorazione). Controlla sempre le delibere del tuo Comune sul Portale del Federalismo Fiscale." },
  { q: "L\u2019IMU si pu\u00f2 detrarre dal 730?", a: "<strong>S\u00ec, ma solo per gli immobili a uso produttivo (categoria D).</strong> Per le abitazioni no. Tuttavia, se affitti l\u2019immobile e dichiari il reddito, l\u2019IMU pagata riduce la base imponibile ai fini IRPEF in certi casi." },
];

export default function PaginaIMU() {
  const schemas = [
    articleSchema({
      title: 'IMU 2026: calcolo, aliquote, esenzioni e scadenze',
      description: 'Come calcolare l\u2019IMU nel 2026: chi paga, chi \u00e8 esente, formula, aliquote, scadenze e F24.',
      url: '/imu',
      image: 'ogimu.png',
      datePublished: '2026-03-11',
      dateModified: '2026-03-11',
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

      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/><line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/><circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">💶 Fisco e tasse</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Pago l&apos;<em>IMU</em></h1>
            <p className="hero-sub">IMU 2026: chi paga, chi &egrave; esente, come si calcola con la formula, aliquote comunali, scadenze acconto e saldo, e come compilare l&apos;F24.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-o">📅 Scadenze: 16/6 e 16/12</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> MEF &middot; Agenzia delle Entrate &middot; L. 160/2019 &middot; DM 6/11/2025</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0&euro;</div><div className="hl">prima casa<br/>(non di lusso)</div></div>
            <div className="hstat"><div className="hn">8,6&permil;</div><div className="hl">aliquota base<br/>seconda casa</div></div>
            <div className="hstat"><div className="hn">16/6</div><div className="hl">acconto 2026<br/>(50% dell&apos;imposta)</div></div>
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
              <a href="/730" className="ps">🧾 Faccio il 730</a>
              <a href="/ristrutturare" className="ps">🔨 Ristrutturare</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.finanze.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 MEF</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Agenzia Entrate</a>
              <a href="https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/Imposta-municipale-propria-IMU/" target="_blank" rel="noopener noreferrer" className="ps">📊 Aliquote IMU</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🏠</div><div className="sn">Prima casa</div><div className="sl">esente se ci abiti (residenza + dimora)</div></div>
                <div className="sc sg-bg r d2"><div className="si">🏢</div><div className="sn">Seconda casa</div><div className="sl">sempre tassata, aliquota comunale</div></div>
                <div className="sc r d3"><div className="si">📐</div><div className="sn">Formula</div><div className="sl">rendita &times; 1,05 &times; 160 &times; aliquota</div></div>
                <div className="sc r d1"><div className="si">📅</div><div className="sn">2 rate</div><div className="sl">acconto 16/6, saldo 16/12</div></div>
                <div className="sc bl-bg r d2"><div className="si">📄</div><div className="sn">F24</div><div className="sl">si paga con modello F24</div></div>
                <div className="sc r d3"><div className="si">🏘</div><div className="sn">Comodato</div><div className="sl">&minus;50% se presti casa a figlio/genitore</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;IMU e chi la paga</h2>
            <p>L&apos;IMU (<Tip t="Imposta Municipale Propria. È la tassa sulla casa che si paga al Comune. Ha sostituito la vecchia ICI nel 2012.">Imposta Municipale Propria</Tip>) &egrave; la tassa che paghi al Comune per possedere un immobile: case, terreni, negozi, uffici, capannoni. &Egrave; dovuta da chi &egrave; <strong>proprietario</strong> o titolare di un diritto reale (usufrutto, uso, abitazione).</p>
            <p>La buona notizia: <strong>se abiti nella tua unica casa, non paghi nulla</strong>. L&apos;abitazione principale (non di lusso) &egrave; completamente esente.</p>
            <p>Paga l&apos;IMU chi possiede: seconde case, case sfitte, immobili commerciali, terreni edificabili, abitazioni di lusso (categorie A/1, A/8, A/9). L&apos;importo dipende dalla <Tip t="Un valore attribuito dall'Agenzia del Territorio a ogni immobile in base a tipo, dimensione e zona. È la base per calcolare l'IMU. La trovi nella visura catastale.">rendita catastale</Tip> e dall&apos;aliquota del tuo Comune.</p>

            <p>Un chiarimento importante: l&apos;IMU <strong>non ha nulla a che fare con il 730</strong>. Il 730 serve a dichiarare i redditi e ottenere rimborsi, l&apos;IMU &egrave; una tassa patrimoniale che paghi per il semplice fatto di possedere un immobile. Si paga con F24 in due rate (giugno e dicembre), indipendentemente dalla dichiarazione dei redditi. Per&ograve;, se affitti l&apos;immobile, dovrai sia pagare l&apos;IMU sia dichiarare il reddito da affitto nel 730 (o scegliere la <a href="/cedolare-secca">cedolare secca</a>).</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Rendita catastale</strong> &mdash; il valore fiscale del tuo immobile, assegnato dall&apos;Agenzia del Territorio. Lo trovi nella visura catastale.</p>
              <p><strong>Categoria catastale</strong> &mdash; la classificazione dell&apos;immobile (A/2 = appartamento civile, A/3 = economico, C/6 = garage, ecc.).</p>
              <p><strong>Aliquota</strong> &mdash; la percentuale che il Comune applica sulla base imponibile. Si esprime in &quot;per mille&quot; (&permil;).</p>
              <p><strong>F24</strong> &mdash; il modello di pagamento per tasse e imposte. Si compila con i codici tributo specifici dell&apos;IMU.</p>
              <p><strong>Abitazione principale</strong> &mdash; l&apos;immobile dove hai residenza anagrafica E dimora abituale. Servono entrambi i requisiti.</p>
              <p><strong>Pertinenza</strong> &mdash; garage (C/6), cantina (C/2), tettoia (C/7). Una per tipo &egrave; esente insieme alla prima casa.</p>
            </div>
          </div>

          {/* ESENZIONI */}
          <div className="sec r" id="esenzioni">
            <div className="sec-tag">Chi non paga</div>
            <h2>Chi NON paga l&apos;IMU (esenzioni)</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Abitazione principale</strong> &mdash; se ci vivi (residenza + dimora) ed &egrave; di categoria A/2, A/3, A/4, A/5, A/6 o A/7. Esente al 100%. Dopo la sentenza Corte Cost. 209/2022: l&apos;esenzione vale per persona, non per nucleo familiare.</div>
              <div className="gl-item"><strong>Pertinenze</strong> &mdash; una per tipo: un garage (C/6), una cantina (C/2), una tettoia (C/7). Esenti come la prima casa.</div>
              <div className="gl-item"><strong>Terreni agricoli montani</strong> &mdash; terreni in comuni classificati come montani o parzialmente montani. Esenti al 100%.</div>
              <div className="gl-item"><strong>Coltivatori diretti</strong> &mdash; terreni posseduti e condotti da coltivatori diretti o IAP iscritti alla previdenza agricola.</div>
              <div className="gl-item"><strong>Immobili merce</strong> &mdash; fabbricati costruiti per la vendita dall&apos;impresa costruttrice, non ancora venduti e non affittati.</div>
            </div>
            <div className="ib warn r"><div className="ib-t">⚠️ Attenzione: &quot;prima casa&quot; ≠ &quot;abitazione principale&quot;</div>
              <p>Nell&apos;uso comune si dice &quot;prima casa&quot;, ma ai fini IMU conta <strong>dove vivi davvero</strong>. Se possiedi una sola casa ma non ci abiti (sei in affitto altrove, vivi dal partner), quella casa paga l&apos;IMU come seconda casa. L&apos;esenzione richiede residenza anagrafica + dimora effettiva.</p>
            </div>
          </div>

          {/* CALCOLO */}
          <div className="sec bh r" id="calcolo">
            <div className="sec-tag">La formula</div>
            <h2>Come si calcola l&apos;IMU</h2>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>FORMULA IMU</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">1. Rendita catastale</div><div className="dcard-v">Es. 800&euro;</div></div>
                <div className="dcard"><div className="dcard-l">2. &times; rivalutazione 5%</div><div className="dcard-v">800 &times; 1,05 = 840&euro;</div></div>
                <div className="dcard"><div className="dcard-l">3. &times; moltiplicatore (160 per abitazioni)</div><div className="dcard-v">840 &times; 160 = 134.400&euro;</div></div>
                <div className="dcard"><div className="dcard-l">4. &times; aliquota comunale</div><div className="dcard-v">134.400 &times; 10,6&permil; = 1.424,64&euro;</div></div>
              </div>
              <div className="dtotals" style={{ marginTop: '16px' }}>
                <div className="dt-col"><div className="dt-l" style={{ color: 'var(--blue)' }}>Acconto (16 giugno)</div><div className="dt-n" style={{ color: 'var(--cream)' }}>712&euro;</div></div>
                <div className="dt-col"><div className="dt-l" style={{ color: 'rgba(251,248,241,.5)' }}>Saldo (16 dicembre)</div><div className="dt-n" style={{ color: 'var(--blue)' }}>712&euro;</div></div>
              </div>
            </div>

            <div className="ib tip r" style={{ marginTop: '24px' }}><div className="ib-t">📊 Moltiplicatori per categoria</div>
              <p><strong>160</strong> per abitazioni (A, escluso A/10) e pertinenze (C/2, C/6, C/7) &mdash; <strong>80</strong> per uffici (A/10) &mdash; <strong>55</strong> per negozi (C/1) &mdash; <strong>140</strong> per laboratori e collegi (B, C/3-C/5) &mdash; <strong>65</strong> per immobili produttivi (D, escluso D/5) &mdash; <strong>135</strong> per terreni agricoli (110 per coltivatori diretti).</p>
            </div>

            <div className="ib tip r"><div className="ib-t">🔍 Come trovo l&apos;aliquota del mio Comune?</div>
              <p>Sul <strong>Portale del Federalismo Fiscale</strong> del MEF, dove ogni Comune pubblica le proprie delibere. In alternativa, sul sito del tuo Comune alla sezione &quot;Tributi&quot; o &quot;IMU&quot;. Se il Comune non ha deliberato nuove aliquote, si applicano quelle dell&apos;anno precedente.</p>
            </div>
          </div>

          {/* SCADENZE */}
          <div className="sec r" id="scadenze">
            <div className="sec-tag">Quando e come</div>
            <h2>Scadenze e come pagare</h2>
            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>SCADENZE IMU 2026</div>
              <div className="db-row"><span>Acconto (1&ordf; rata)</span><span><strong>16 giugno 2026</strong></span></div>
              <div className="db-row"><span>Saldo (2&ordf; rata + conguaglio)</span><span><strong>16 dicembre 2026</strong></span></div>
              <div className="db-row"><span>Rata unica (facoltativa)</span><span>Entro il 16 giugno 2026</span></div>
              <div className="db-row db-total"><span>Se cade di sabato/festivo</span><span>Slitta al luned&igrave; successivo</span></div>
            </div>

            <p style={{ marginTop: '20px' }}>Si paga con il <strong>Modello F24</strong> (sezione &quot;IMU e altri tributi locali&quot;). I codici tributo pi&ugrave; comuni:</p>
            <div className="glossary" style={{ marginTop: '12px' }}>
              <div className="gl-item"><strong>3912</strong> &mdash; abitazione principale di lusso (A/1, A/8, A/9) &rarr; quota Comune</div>
              <div className="gl-item"><strong>3918</strong> &mdash; altri fabbricati (seconda casa, ecc.) &rarr; quota Comune</div>
              <div className="gl-item"><strong>3916</strong> &mdash; aree fabbricabili &rarr; quota Comune</div>
              <div className="gl-item"><strong>3914</strong> &mdash; terreni &rarr; quota Comune</div>
            </div>
          </div>

          {/* AGEVOLAZIONI */}
          <div className="sec r" id="agevolazioni">
            <div className="sec-tag">Riduzioni</div>
            <h2>Agevolazioni e riduzioni IMU</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Comodato a figli/genitori (&minus;50%)</strong> &mdash; se presti la casa (con contratto registrato) a un figlio o genitore che ci vive come abitazione principale. Devi risiedere nello stesso Comune e non possedere altri immobili in Italia (tranne la tua prima casa).</div>
              <div className="gl-item"><strong>Canone concordato (&minus;25%)</strong> &mdash; se affitti a canone concordato (L. 431/1998), l&apos;IMU calcolata si riduce del 25%. Si applica su qualsiasi aliquota deliberata dal Comune.</div>
              <div className="gl-item"><strong>Pensionati AIRE (&minus;50%)</strong> &mdash; pensionati residenti all&apos;estero, iscritti AIRE, titolari di pensione con convenzione: riduzione del 50% su un immobile non affittato.</div>
              <div className="gl-item"><strong>Immobili inagibili (&minus;50%)</strong> &mdash; fabbricati dichiarati inagibili o inabitabili e di fatto non utilizzati. Serve perizia o autocertificazione.</div>
            </div>
          </div>

          {/* CASI PARTICOLARI */}
          <div className="sec r" id="casi">
            <div className="sec-tag">Situazioni frequenti</div>
            <h2>Casi particolari: chi paga quanto</h2>
            <p>L&apos;IMU genera confusione soprattutto in queste situazioni. Ecco come funziona caso per caso:</p>

            <div className="glossary">
              <div className="gl-item"><strong>Casa ereditata</strong> &mdash; se erediti un immobile e ci vai a vivere (residenza + dimora), &egrave; la tua abitazione principale: <strong>esente</strong>. Se non ci vai a vivere, paga come seconda casa. In caso di pi&ugrave; eredi, ognuno paga la propria quota di IMU (es. 50% se siete in due).</div>
              <div className="gl-item"><strong>Separazione e divorzio</strong> &mdash; il coniuge a cui il giudice assegna la casa coniugale &egrave; considerato titolare del diritto di abitazione: paga l&apos;IMU lui (ma &egrave; esente se ci vive). L&apos;altro coniuge, anche se comproprietario, non paga nulla su quella casa.</div>
              <div className="gl-item"><strong>Nuda propriet&agrave;</strong> &mdash; se hai la nuda propriet&agrave; e un altro ha l&apos;<Tip t="Usufrutto: diritto reale di godere dell'immobile altrui. L'usufruttuario può abitarci o affittarlo. È lui a pagare l'IMU, non il nudo proprietario.">usufrutto</Tip>, l&apos;IMU la paga l&apos;usufruttuario. Tu, nudo proprietario, non devi versare nulla.</div>
              <div className="gl-item"><strong>Casa in ristrutturazione</strong> &mdash; durante i lavori continui a pagare l&apos;IMU normalmente. Se per&ograve; l&apos;immobile &egrave; dichiarato <strong>inagibile/inabitabile</strong> (perizia o autocertificazione) e non &egrave; usato, hai diritto alla riduzione del 50%.</div>
              <div className="gl-item"><strong>Immobile occupato abusivamente</strong> &mdash; dal 2023, gli immobili occupati abusivamente sono <strong>esenti dall&apos;IMU</strong>, a condizione che il proprietario abbia presentato denuncia e comunicato il fatto al Comune.</div>
              <div className="gl-item"><strong>Garage o cantina senza casa</strong> &mdash; se possiedi solo un garage (C/6) senza un&apos;abitazione principale, il garage paga l&apos;IMU come &quot;altro fabbricato&quot;. L&apos;esenzione pertinenza funziona solo se &egrave; collegata all&apos;abitazione principale esente.</div>
              <div className="gl-item"><strong>Casa affittata</strong> &mdash; paghi l&apos;IMU normalmente, ma se il contratto &egrave; a <Tip t="Canone concordato: affitto calcolato secondo accordi territoriali tra proprietari e inquilini. Dà diritto a riduzione IMU del 25% e cedolare secca al 10%.">canone concordato</Tip> ottieni il 25% di sconto. Attenzione: l&apos;IMU &egrave; sempre a carico del proprietario, mai dell&apos;inquilino.</div>
              <div className="gl-item"><strong>Due case, lavoro in un&apos;altra citt&agrave;</strong> &mdash; se vivi in una casa ma possiedi anche la casa nella tua citt&agrave; d&apos;origine, la seconda paga l&apos;IMU come &quot;altro fabbricato&quot;. L&apos;esenzione vale solo dove hai residenza + dimora abituale.</div>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Residenza &quot;finta&quot; = rischio accertamento</div>
              <p>Alcuni proprietari spostano la residenza in un immobile solo per non pagare l&apos;IMU, senza viverci davvero. I Comuni effettuano controlli incrociati (utenze, consumi, vigili). Se scoprono che la dimora abituale &egrave; altrove, dovrai pagare l&apos;IMU arretrata come seconda casa, pi&ugrave; sanzioni del 30% e interessi.</p>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec bh r" id="calcolatore">
            <div className="sec-tag">Strumento</div>
            <h2>Calcola la tua IMU</h2>
            <p>Inserisci la rendita catastale e l&apos;aliquota del tuo Comune per avere una stima dell&apos;IMU annua.</p>
            <CalcIMU />
          </div>

          {/* ESEMPIO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio: Sergio, seconda casa al mare</h2>
            <p>Sergio, 45 anni, vive a Milano nella sua abitazione principale (IMU esente). Possiede anche un appartamento al mare in Liguria, categoria A/3, rendita catastale 600&euro;. Il Comune ha deliberato un&apos;aliquota del 10,6&permil;.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>CALCOLO IMU DI SERGIO</div>
              <div className="db-row"><span>Rendita catastale</span><span>600&euro;</span></div>
              <div className="db-row"><span>Rivalutazione 5%</span><span>600 &times; 1,05 = 630&euro;</span></div>
              <div className="db-row"><span>Base imponibile</span><span>630 &times; 160 = 100.800&euro;</span></div>
              <div className="db-row"><span>Aliquota comunale</span><span>10,6&permil;</span></div>
              <div className="db-row db-total"><span>IMU annua</span><span>1.068,48&euro;</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>RATE DI SERGIO</div>
              <div className="db-row"><span>Acconto (16 giugno)</span><span>534&euro;</span></div>
              <div className="db-row"><span>Saldo (16 dicembre)</span><span>534&euro;</span></div>
              <div className="db-row db-total"><span>Codice tributo F24</span><span>3918 (altri fabbricati)</span></div>
            </div>

            <div className="ib tip r" style={{ marginTop: '16px' }}><div className="ib-t">💡 E se Sergio affittasse a canone concordato?</div>
              <p>L&apos;IMU si ridurrebbe del 25%: 1.068,48 &times; 75% = <strong>801,36&euro;</strong> (400,68&euro; per rata). Affittare a canone concordato conviene anche fiscalmente. Bonus: con il canone concordato puoi usare anche la <a href="/cedolare-secca">cedolare secca al 10%</a>, risparmiando sia sull&apos;IMU che sull&apos;IRPEF.</p>
            </div>

            <div className="ib tip r" style={{ marginTop: '16px' }}><div className="ib-t">📝 Come compilare l&apos;F24 per l&apos;IMU</div>
              <p>Nella sezione &quot;IMU e altri tributi locali&quot; indica: il <strong>codice catastale del Comune</strong> (lo trovi sul sito dell&apos;Agenzia delle Entrate), spunta &quot;Acconto&quot; o &quot;Saldo&quot;, inserisci il <strong>numero di immobili</strong> per cui paghi, l&apos;anno di riferimento (2026) e l&apos;importo. Puoi pagare online con home banking, sul sito dell&apos;Agenzia delle Entrate o in banca/posta.</p>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Ravvedimento operoso: se hai dimenticato di pagare</div>
              <p>Puoi metterti in regola pagando l&apos;IMU in ritardo con una sanzione ridotta. Quanto prima lo fai, meno paghi: <strong>entro 14 giorni</strong> la sanzione &egrave; dello 0,1% al giorno (massimo 1,4%), <strong>entro 30 giorni</strong> sale all&apos;1,25%, <strong>entro 90 giorni</strong> all&apos;1,67%, <strong>entro 1 anno</strong> al 3,75%. Oltre l&apos;anno, il ravvedimento costa il 4,29%. Se non ti ravvedi, il Comune pu&ograve; emettere un accertamento con sanzione piena del 30% pi&ugrave; interessi. Usa il Modello F24 con il codice tributo normale, aggiungendo il codice degli interessi (es. 3923 per i fabbricati).</p>
            </div>
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
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Tutto sull&apos;acquisto della prima casa.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Dichiarazione dei redditi e detrazioni.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/ristrutturare" className="rc"><span className="rc-e">🔨</span><div className="rc-t">Ristrutturare casa</div><div className="rc-d">Bonus e detrazioni per i lavori.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.finanze.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">MEF</div><div className="sbtool-d">Disciplina IMU ufficiale</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Visure catastali e F24</div></div></a>
            <a href="https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/Imposta-municipale-propria-IMU/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Aliquote IMU</div><div className="sbtool-d">Portale Federalismo Fiscale</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">&rarr;</span></a>
            <a href="/ristrutturare" className="sbguide">🔨 Ristrutturare casa<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
