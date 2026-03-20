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
import CalcCedolare from '@/components/CalcCedolare';

export const metadata = {
  title: 'Come Funziona la Cedolare Secca nel 2026: Aliquote, Calcolo e Quando Conviene',
  description: 'Cedolare secca 2026: cos\u2019è, come funziona, aliquote 21% e 10%, quando conviene rispetto all\u2019IRPEF, come si paga con F24, novità affitti brevi. Guida gratuita.',
  keywords: ["cedolare secca", "cedolare secca 2026", "cedolare secca cos'è", "cedolare secca calcolo", "cedolare secca aliquota", "cedolare secca affitti brevi", "cedolare secca canone concordato", "cedolare secca F24", "cedolare secca quando conviene", "cedolare secca 10%"],
  alternates: { canonical: 'https://zeroburocrazia.it/cedolare-secca' },
  openGraph: {
    type: 'article',
    title: 'Cedolare Secca 2026: Aliquote, Calcolo e Quando Conviene',
    description: 'Cedolare secca 2026: aliquote 21% e 10%, calcolo, F24, affitti brevi. Guida gratuita.',
    url: 'https://zeroburocrazia.it/cedolare-secca',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogcedolaresecca.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcedolaresecca.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019è e come funziona" },
  { id: 'chi-puo', label: 'Chi può (e chi no)' },
  { id: 'aliquote', label: 'Aliquote: 21%, 10% e 26%' },
  { id: 'conviene', label: 'Quando conviene (confronto)', bh: true },
  { id: 'come-si-sceglie', label: 'Come si sceglie e si paga' },
  { id: 'affitti-brevi', label: 'Affitti brevi: novità 2026' },
  { id: 'errori', label: 'Errori da evitare' },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'esempio', label: 'Esempi pratici', bh: true },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  { q: "Cos\u2019è la cedolare secca in parole semplici?", a: "È una <strong>tassa piatta sugli affitti</strong>. Invece di sommare il canone al tuo reddito e pagare l\u2019IRPEF con le aliquote progressive (23-43%), paghi un\u2019imposta fissa del 21% o del 10% sul canone. In più non paghi imposta di registro e bollo sul contratto." },
  { q: "Chi può scegliere la cedolare secca?", a: "<strong>Solo le persone fisiche</strong> che affittano un immobile a uso abitativo, fuori dall\u2019attività d\u2019impresa. Funziona anche se l\u2019inquilino è una società, purché l\u2019immobile resti ad uso abitativo (Cassazione 12395/2024)." },
  { q: "La cedolare secca conviene sempre?", a: "<strong>No, dipende dal tuo reddito.</strong> Conviene quasi sempre a chi ha un reddito complessivo superiore a 28.000\u20AC, perché l\u2019aliquota IRPEF su quella fascia è 33%. Con redditi bassi (sotto i 15.000\u20AC), l\u2019IRPEF al 23% con la deduzione forfettaria del 5% potrebbe costare meno del 21%." },
  { q: "Posso passare alla cedolare secca su un contratto già in corso?", a: "<strong>Sì.</strong> Puoi optare nelle annualità successive alla registrazione, entro 30 giorni dalla scadenza dell\u2019annualità. Devi comunicarlo all\u2019inquilino con raccomandata e presentare il modello RLI." },
  { q: "Come faccio a rinunciare alla cedolare secca?", a: "Puoi revocarla a ogni annualità successiva, sempre entro 30 giorni dalla scadenza. La revoca vale dalla nuova annualità e da quel momento torni a pagare IRPEF, imposta di registro e bollo." },
  { q: "La cedolare secca influisce sull\u2019ISEE?", a: "<strong>Sì.</strong> Il reddito tassato con cedolare secca viene comunque conteggiato nel calcolo dell\u2019ISEE e per determinare se un familiare è a carico. Non sfugge al conteggio, anche se non entra nel reddito complessivo IRPEF." },
  { q: "Quanti appartamenti posso affittare in affitto breve con cedolare secca?", a: "Dal 2026, massimo <strong>2 appartamenti</strong> (prima erano 4). Dal terzo, l\u2019attività è considerata imprenditoriale e serve la partita IVA." },
  { q: "Devo comunicare all\u2019inquilino che scelgo la cedolare secca?", a: "<strong>Sì, con raccomandata</strong> (anche A/R). Con la cedolare rinunci ad aggiornare il canone (incluso adeguamento ISTAT), e l\u2019inquilino deve saperlo. L\u2019unica eccezione: contratti sotto 30 giorni o contratti che già prevedono la rinuncia agli aggiornamenti." },
];

export default function PaginaCedolareSecca() {
  const schemas = [
    articleSchema({
      title: 'Cedolare Secca 2026: cos\u2019è, aliquote, calcolo e quando conviene',
      description: 'Guida completa alla cedolare secca: aliquote 21% e 10%, confronto IRPEF, affitti brevi 2026, F24 e scadenze.',
      url: '/cedolare-secca',
      image: 'ogcedolaresecca.png',
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
            <h1>La <em>cedolare secca</em></h1>
            <p className="hero-sub">Cedolare secca 2026: cos&apos;&egrave;, come funziona, aliquote 21% e 10%, quando conviene rispetto all&apos;IRPEF, come si sceglie, come si paga con F24, novit&agrave; sugli affitti brevi.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 12 min di lettura</span>
              <span className="pill pill-o">📅 Acconto: 30/6 &middot; Saldo: 30/11</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; D.Lgs. 23/2011 &middot; L. 199/2025 (Bilancio 2026)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">21%</div><div className="hl">aliquota ordinaria<br/>(canone libero)</div></div>
            <div className="hstat"><div className="hn">10%</div><div className="hl">canone concordato<br/>(3+2)</div></div>
            <div className="hstat"><div className="hn">3M+</div><div className="hl">proprietari italiani<br/>la usano</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/imu" className="ps">💶 IMU</a>
              <a href="/730" className="ps">🧾 Faccio il 730</a>
              <a href="/compro-casa" className="ps">🏠 Compro casa</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Agenzia Entrate</a>
              <a href="https://www.agenziaentrate.gov.it/portale/aree-tematiche/casa/affitto/cedolare-secca" target="_blank" rel="noopener noreferrer" className="ps">🏠 Cedolare secca</a>
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/registrazione-contratti-locazione" target="_blank" rel="noopener noreferrer" className="ps">📄 Modello RLI</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">💶</div><div className="sn">Tassa piatta</div><div className="sl">sostituisce IRPEF, registro e bollo</div></div>
                <div className="sc sg-bg r d2"><div className="si">📊</div><div className="sn">21% o 10%</div><div className="sl">libero mercato o canone concordato</div></div>
                <div className="sc r d3"><div className="si">🏠</div><div className="sn">Solo abitazioni</div><div className="sl">affittate tra persone fisiche</div></div>
                <div className="sc r d1"><div className="si">📝</div><div className="sn">Modello RLI</div><div className="sl">si sceglie alla registrazione</div></div>
                <div className="sc bl-bg r d2"><div className="si">📅</div><div className="sn">Acconto + saldo</div><div className="sl">stesse scadenze dell&apos;IRPEF</div></div>
                <div className="sc r d3"><div className="si">🔒</div><div className="sn">Niente ISTAT</div><div className="sl">rinunci ad aggiornare il canone</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la cedolare secca e come funziona</h2>
            <p>La <Tip t="Regime fiscale opzionale che sostituisce l'IRPEF, l'imposta di registro e il bollo con un'unica imposta fissa sul canone di affitto. Introdotta dal D.Lgs. 23/2011.">cedolare secca</Tip> &egrave; un modo alternativo di pagare le tasse sull&apos;affitto. Invece di sommare il canone al tuo reddito e pagare l&apos;IRPEF a scaglioni (dal 23% al 43%), paghi un&apos;imposta fissa &mdash; il <strong>21%</strong> o il <strong>10%</strong> &mdash; direttamente sul canone. Fine.</p>
            <p>In cambio, tre cose smettono di esistere: l&apos;<Tip t="Imposta di registro: tassa del 2% sul canone annuo (minimo 67€) che normalmente si paga alla registrazione del contratto e a ogni rinnovo.">imposta di registro</Tip> (normalmente il 2% del canone annuo), l&apos;imposta di bollo e gli aggiornamenti ISTAT del canone. Il tuo inquilino paga lo stesso importo per tutta la durata del contratto.</p>
            <p>Pu&ograve; sceglierla solo chi affitta come <strong>persona fisica</strong> (non societ&agrave;, non partita IVA) un immobile <strong>a uso abitativo</strong>. L&apos;inquilino pu&ograve; anche essere una societ&agrave;, purch&eacute; usi l&apos;immobile come abitazione (Cassazione 12395/2024).</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Cedolare secca</strong> &mdash; imposta sostitutiva fissa (21% o 10%) sul canone di affitto. Sostituisce IRPEF, registro e bollo.</p>
              <p><strong>Canone concordato</strong> &mdash; affitto calcolato secondo accordi territoriali tra associazioni di inquilini e proprietari. D&agrave; accesso all&apos;aliquota ridotta del 10%.</p>
              <p><strong>Modello RLI</strong> &mdash; il modulo dell&apos;Agenzia delle Entrate per registrare, prorogare o risolvere contratti di locazione. Si usa anche per scegliere la cedolare.</p>
              <p><strong>Locazione breve</strong> &mdash; affitto di durata non superiore a 30 giorni, stipulato tra privati. Non richiede registrazione obbligatoria.</p>
              <p><strong>Imposta di registro</strong> &mdash; tassa del 2% sul canone annuo (minimo 67&euro;) dovuta alla registrazione del contratto. Con la cedolare non si paga.</p>
              <p><strong>F24</strong> &mdash; modello per il pagamento di tasse e imposte. La cedolare si versa con specifici codici tributo.</p>
            </div>
          </div>

          {/* ALIQUOTE */}
          <div className="sec r" id="chi-puo">
            <div className="sec-tag">Requisiti</div>
            <h2>Chi pu&ograve; scegliere la cedolare (e chi no)</h2>
            <p>La cedolare secca non &egrave; per tutti. Ecco i requisiti e i casi particolari che generano pi&ugrave; dubbi:</p>

            <div className="glossary">
              <div className="gl-item"><strong>✅ Persona fisica che affitta</strong> &mdash; sei proprietario (o usufruttuario) di un appartamento e lo affitti a uso abitativo. Non importa se hai uno o pi&ugrave; immobili, purch&eacute; tu non agisca come impresa.</div>
              <div className="gl-item"><strong>✅ Inquilino societ&agrave;</strong> &mdash; dal 2024 (Cassazione 12395/2024) puoi usare la cedolare anche se l&apos;inquilino &egrave; un&apos;azienda, purch&eacute; l&apos;immobile sia usato come abitazione (es. per un dipendente).</div>
              <div className="gl-item"><strong>✅ Pi&ugrave; comproprietari</strong> &mdash; ogni comproprietario sceglie in modo indipendente. Se tu e tuo fratello possedete un appartamento 50/50, tu puoi optare per la cedolare e lui restare in IRPEF. Ognuno paga la propria quota.</div>
              <div className="gl-item"><strong>✅ Immobile ereditato</strong> &mdash; se hai ereditato un appartamento e lo affitti, puoi usare la cedolare normalmente. L&apos;erede &egrave; il nuovo locatore e sceglie il regime che preferisce.</div>
              <div className="gl-item"><strong>✅ Pertinenze affittate insieme</strong> &mdash; se affitti l&apos;appartamento con garage o cantina, la cedolare si applica anche alle pertinenze. Non serve un contratto separato.</div>
              <div className="gl-item"><strong>❌ Societ&agrave; o imprese</strong> &mdash; se possiedi l&apos;immobile tramite una SRL, SAS o altra societ&agrave;, la cedolare non &egrave; disponibile. Vale solo per le persone fisiche.</div>
              <div className="gl-item"><strong>❌ Immobili commerciali</strong> &mdash; negozi (C/1), uffici (A/10), capannoni: la cedolare non si applica. Eccezione storica: nel 2019 fu prevista per i negozi C/1, ma solo per quell&apos;anno.</div>
              <div className="gl-item"><strong>❌ Sublocazione</strong> &mdash; se sei inquilino e subaffitti una stanza, non sei proprietario: non puoi usare la cedolare. Per&ograve; per gli <strong>affitti brevi</strong> il sublocatore pu&ograve; optare per la cedolare in dichiarazione dei redditi.</div>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Coniugi separati: caso particolare</div>
              <p>Se il giudice assegna la casa coniugale a uno dei coniugi, l&apos;altro (proprietario) non pu&ograve; affittarla e quindi non pu&ograve; usare la cedolare. Se per&ograve; il proprietario ha <strong>un altro immobile</strong> che affitta, su quello pu&ograve; tranquillamente scegliere la cedolare secca.</p>
            </div>
          </div>

          {/* ALIQUOTE */}
          <div className="sec r" id="aliquote">
            <div className="sec-tag">Le percentuali</div>
            <h2>Aliquote cedolare secca: 21%, 10% e 26%</h2>

            <div className="glossary">
              <div className="gl-item"><strong>21% &mdash; Canone libero (4+4, transitorio, ecc.)</strong> &mdash; l&apos;aliquota standard. Si applica sull&apos;intero canone annuo, senza la deduzione forfettaria del 5% prevista in regime IRPEF.</div>
              <div className="gl-item"><strong>10% &mdash; Canone concordato (3+2)</strong> &mdash; l&apos;aliquota agevolata per i contratti a <Tip t="Contratto in cui il canone è calcolato secondo parametri definiti da accordi locali tra associazioni di proprietari e inquilini. Richiede l'attestazione di conformità.">canone concordato</Tip>, contratti per studenti universitari fuori sede e contratti transitori nei Comuni ad alta tensione abitativa. Si applica anche in Comuni con stato di emergenza.</div>
              <div className="gl-item"><strong>26% &mdash; Affitti brevi (dal 2&deg; immobile)</strong> &mdash; introdotta nel 2024 per le locazioni brevi (max 30 giorni). Si applica dal secondo immobile in poi. Sul primo immobile (a scelta del contribuente in dichiarazione) resta il 21%.</div>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ La cedolare si calcola sul 100% del canone</div>
              <p>In regime IRPEF normale, paghi le tasse sul 95% del canone (c&apos;&egrave; una deduzione forfettaria del 5%). Con la cedolare, invece, l&apos;imposta si calcola sul <strong>100% del canone</strong>. Sembra un dettaglio, ma conta nel confronto: il 21% del 100% va confrontato con la tua aliquota IRPEF sul 95%.</p>
            </div>
          </div>

          {/* QUANDO CONVIENE */}
          <div className="sec bh r" id="conviene">
            <div className="sec-tag">Il confronto decisivo</div>
            <h2>Quando conviene la cedolare secca (e quando no)</h2>
            <p>La regola pratica: la cedolare conviene quasi sempre a chi ha un <strong>reddito complessivo sopra i 28.000&euro;</strong>. Ecco le aliquote IRPEF 2026 a confronto:</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>IRPEF 2026 vs CEDOLARE SECCA</div>
              <div className="db-row"><span>Fino a 28.000&euro;</span><span>IRPEF <strong>23%</strong> (sul 95% del canone)</span></div>
              <div className="db-row"><span>28.001 &ndash; 50.000&euro;</span><span>IRPEF <strong>33%</strong> (sul 95% del canone)</span></div>
              <div className="db-row"><span>Oltre 50.000&euro;</span><span>IRPEF <strong>43%</strong> (sul 95% del canone)</span></div>
              <div className="db-row db-total"><span>Cedolare secca</span><span><strong>21%</strong> o <strong>10%</strong> (sul 100% del canone)</span></div>
            </div>

            <p style={{ marginTop: '20px' }}>In pratica: il 23% IRPEF applicato al 95% del canone equivale a un&apos;aliquota effettiva del <strong>21,85%</strong>. Molto vicino al 21% della cedolare. Ma con la cedolare risparmi anche l&apos;imposta di registro (2% annuo) e il bollo, che compensano ampiamente quel piccolo scarto.</p>

            <div className="ib tip r"><div className="ib-t">💡 Regola veloce</div>
              <p><strong>Canone concordato al 10%?</strong> Conviene praticamente sempre, a qualsiasi reddito.<br/><strong>Canone libero al 21%?</strong> Conviene se il tuo reddito complessivo (stipendio + affitto + altro) supera i ~15.000&euro;. Sotto quella soglia, fai i conti con un commercialista perch&eacute; potresti perdere detrazioni utili (come il bonus 100&euro;/mese).</p>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Attenzione alle detrazioni</div>
              <p>Il reddito con cedolare <strong>non entra nel reddito complessivo</strong> ai fini IRPEF. Questo pu&ograve; far perdere detrazioni per familiari a carico, bonus ristrutturazioni o altre agevolazioni che dipendono dal reddito. Se hai molte detrazioni da sfruttare e reddito basso, la cedolare potrebbe non convenire.</p>
            </div>
          </div>

          {/* COME SI SCEGLIE */}
          <div className="sec r" id="come-si-sceglie">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si sceglie e come si paga</h2>

            <p><strong>Per scegliere</strong> la cedolare secca hai due momenti:</p>

            <div className="glossary">
              <div className="gl-item"><strong>1. Alla registrazione del contratto</strong> &mdash; compili il <Tip t="Modulo telematico dell'Agenzia delle Entrate per la registrazione dei contratti di locazione e affitto. Si compila online o tramite intermediario.">Modello RLI</Tip> e selezioni l&apos;opzione &quot;cedolare secca&quot;. Non paghi imposta di registro n&eacute; bollo. Devi aver inviato la raccomandata all&apos;inquilino prima della registrazione.</div>
              <div className="gl-item"><strong>2. Nelle annualit&agrave; successive</strong> &mdash; puoi optare per la cedolare anche su un contratto gi&agrave; registrato in regime IRPEF. Hai 30 giorni dalla scadenza dell&apos;annualit&agrave;. Presenti il Modello RLI.</div>
              <div className="gl-item"><strong>3. Solo per affitti brevi (&le;30 gg)</strong> &mdash; non serve registrare il contratto. L&apos;opzione si esercita direttamente in dichiarazione dei redditi (<a href="/730">730</a> o Redditi PF).</div>
            </div>

            <p style={{ marginTop: '20px' }}><strong>Per pagare</strong> la cedolare usi il <strong>Modello F24</strong>, con le stesse scadenze dell&apos;IRPEF:</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>SCADENZE CEDOLARE SECCA 2026</div>
              <div className="db-row"><span>Acconto 1&ordf; rata (40%)</span><span><strong>30 giugno 2026</strong></span></div>
              <div className="db-row"><span>Acconto 2&ordf; rata (60%)</span><span><strong>30 novembre 2026</strong></span></div>
              <div className="db-row"><span>Saldo</span><span>30 giugno dell&apos;anno dopo</span></div>
              <div className="db-row"><span>Se importo &lt; 257,52&euro;</span><span>Rata unica entro 30 novembre</span></div>
              <div className="db-row db-total"><span>Acconto totale</span><span>100% della cedolare dell&apos;anno prima</span></div>
            </div>

            <div className="ib tip r" style={{ marginTop: '16px' }}><div className="ib-t">📝 Codici tributo F24</div>
              <p><strong>1840</strong> &mdash; acconto 1&ordf; rata &bull; <strong>1841</strong> &mdash; acconto 2&ordf; rata &bull; <strong>1842</strong> &mdash; saldo. Il periodo di riferimento da indicare &egrave; l&apos;anno d&apos;imposta (es. 2026). Sezione &quot;Erario&quot; del modello F24.</p>
            </div>
          </div>

          {/* AFFITTI BREVI */}
          <div className="sec r" id="affitti-brevi">
            <div className="sec-tag">Novit&agrave; 2026</div>
            <h2>Affitti brevi: cosa cambia nel 2026</h2>
            <p>Le locazioni brevi (fino a 30 giorni, tipo Airbnb o Booking) seguono regole specifiche. La Legge di Bilancio 2026 ha introdotto un cambiamento importante:</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>AFFITTI BREVI: PRIMA E DOPO</div>
              <div className="db-row"><span>Fino al 2025</span><span>Max <strong>4 appartamenti</strong> con cedolare</span></div>
              <div className="db-row db-total"><span>Dal 2026</span><span>Max <strong>2 appartamenti</strong> con cedolare</span></div>
            </div>

            <p style={{ marginTop: '20px' }}>Le aliquote per gli affitti brevi:</p>
            <div className="glossary" style={{ marginTop: '12px' }}>
              <div className="gl-item"><strong>21% sul 1&deg; immobile</strong> &mdash; il contribuente sceglie quale immobile in dichiarazione dei redditi.</div>
              <div className="gl-item"><strong>26% dal 2&deg; immobile</strong> &mdash; qualsiasi altro immobile locato in forma breve.</div>
              <div className="gl-item"><strong>Dal 3&deg; immobile: partita IVA</strong> &mdash; dal 2026 scatta la presunzione di attivit&agrave; imprenditoriale. Devi aprire P.IVA, gestire IVA e contributi.</div>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Piattaforme come Airbnb sono sostituti d&apos;imposta</div>
              <p>Dal 2024, le piattaforme di prenotazione trattengono direttamente la <Tip t="Ritenuta d'acconto: l'intermediario trattiene il 21% del canone e lo versa all'Agenzia delle Entrate per conto del proprietario. In dichiarazione dei redditi si scomputa dalla cedolare dovuta.">ritenuta del 21%</Tip> sul canone e la versano all&apos;Erario. In dichiarazione dei redditi, scomputi questa ritenuta dalla cedolare dovuta. Se hai diritto al 21%, il saldo sar&agrave; zero. Se la tua aliquota &egrave; 26% (2&deg; immobile), paghi il 5% residuo.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>5 errori da evitare con la cedolare secca</h2>

            <div className="glossary">
              <div className="gl-item"><strong>1. Dimenticare la raccomandata all&apos;inquilino</strong> &mdash; prima di registrare il contratto con la cedolare, devi inviare una raccomandata all&apos;inquilino in cui comunichi la scelta e la rinuncia agli aggiornamenti ISTAT. Senza questa comunicazione, l&apos;opzione pu&ograve; essere contestata.</div>
              <div className="gl-item"><strong>2. Non considerare le detrazioni che perdi</strong> &mdash; il reddito con cedolare non entra nel reddito complessivo IRPEF. Questo pu&ograve; farti perdere il <Tip t="Trattamento integrativo: bonus di 100€/mese per redditi da lavoro dipendente fino a 28.000€. Se il reddito da affitto non è nel complessivo, potresti non raggiungere la soglia minima per averne diritto.">trattamento integrativo</Tip> (ex bonus Renzi), le detrazioni per familiari a carico o le detrazioni per ristrutturazioni se non hai abbastanza &quot;capienza fiscale&quot;.</div>
              <div className="gl-item"><strong>3. Confondere le aliquote degli affitti brevi</strong> &mdash; il 21% vale solo sul primo immobile (a tua scelta in dichiarazione). Dal secondo &egrave; 26%. E dal 2026, dal terzo immobile in poi serve la partita IVA. Errore frequente: pensare che il 21% valga su tutti gli appartamenti.</div>
              <div className="gl-item"><strong>4. Dimenticare l&apos;acconto</strong> &mdash; la cedolare si paga con acconto (come l&apos;IRPEF). Se &egrave; il primo anno, l&apos;acconto non &egrave; dovuto. Ma dal secondo anno in poi: 100% dell&apos;importo dell&apos;anno prima, in una o due rate. Se non paghi, scattano sanzioni e interessi.</div>
              <div className="gl-item"><strong>5. Non revocare in tempo</strong> &mdash; se vuoi tornare all&apos;IRPEF, hai 30 giorni dalla scadenza dell&apos;annualit&agrave; per revocare con il Modello RLI. Se dimentichi, resti in cedolare per un altro anno.</div>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec bh r" id="calcolatore">
            <div className="sec-tag">Strumento</div>
            <h2>Calcola se ti conviene la cedolare secca</h2>
            <p>Inserisci il tuo canone mensile e il tuo reddito: il calcolatore ti mostra subito se risparmi con la cedolare secca rispetto all&apos;IRPEF.</p>
            <CalcCedolare />
          </div>

          {/* ESEMPIO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio 1: Marta affitta &mdash; conviene</h2>
            <p>Marta, 38 anni, impiegata con <Tip t="RAL = Retribuzione Annua Lorda. È lo stipendio lordo annuo, prima di tasse e contributi.">RAL</Tip> di 32.000&euro;. Possiede un appartamento a Roma che affitta a canone libero (4+4) a 800&euro;/mese &mdash; canone annuo 9.600&euro;. Conviene la cedolare secca?</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>CONFRONTO: IRPEF vs CEDOLARE SECCA</div>
              <div className="db-row"><span>Canone annuo</span><span>9.600&euro;</span></div>
              <div className="db-row" style={{ borderTop: '1px solid rgba(251,248,241,.08)', paddingTop: '12px' }}><span style={{ color: 'rgba(251,248,241,.5)' }}>CON IRPEF</span><span></span></div>
              <div className="db-row"><span>Base imponibile (95%)</span><span>9.120&euro;</span></div>
              <div className="db-row"><span>Aliquota marginale (reddito 32K+9.6K)</span><span>33%</span></div>
              <div className="db-row"><span>IRPEF sul canone</span><span>9.120 &times; 33% = <strong>3.010&euro;</strong></span></div>
              <div className="db-row"><span>+ Imposta registro (2% di 9.600, met&agrave; a carico)</span><span>+96&euro;</span></div>
              <div className="db-row"><span>+ Addizionali regionali/comunali (~2%)</span><span>+~192&euro;</span></div>
              <div className="db-row"><span>Totale stimato IRPEF</span><span className="cfr"><strong>~3.298&euro;</strong></span></div>
              <div className="db-row" style={{ borderTop: '1px solid rgba(251,248,241,.08)', paddingTop: '12px' }}><span style={{ color: 'rgba(251,248,241,.5)' }}>CON CEDOLARE SECCA</span><span></span></div>
              <div className="db-row"><span>Base imponibile (100%)</span><span>9.600&euro;</span></div>
              <div className="db-row"><span>Aliquota cedolare</span><span>21%</span></div>
              <div className="db-row"><span>Cedolare dovuta</span><span>9.600 &times; 21% = <strong>2.016&euro;</strong></span></div>
              <div className="db-row"><span>Imposta registro</span><span>0&euro;</span></div>
              <div className="db-row"><span>Addizionali</span><span>0&euro;</span></div>
              <div className="db-row db-total"><span>Risparmio annuo con cedolare</span><span className="cfr"><strong>~1.282&euro;</strong></span></div>
            </div>

            <p style={{ marginTop: '16px' }}>Per Marta la cedolare secca conviene nettamente: risparmia circa <strong>1.280&euro; all&apos;anno</strong>. Il suo reddito complessivo (32.000&euro;) fa s&igrave; che il canone sarebbe tassato al 33% in IRPEF, mentre con la cedolare paga solo il 21%.</p>

            <div className="ib tip r" style={{ marginTop: '16px' }}><div className="ib-t">💡 E se Marta scegliesse il canone concordato?</div>
              <p>Con canone concordato (es. 650&euro;/mese = 7.800&euro;/anno) pagherebbe: 7.800 &times; 10% = <strong>780&euro;</strong>. Un risparmio ancora maggiore &mdash; anche se il canone &egrave; pi&ugrave; basso, il vantaggio fiscale pu&ograve; compensare.</p>
            </div>
          </div>

          {/* ESEMPIO 2 */}
          <div className="sec r">
            <div className="sec-tag">Quando non conviene</div>
            <h2>Esempio 2: Paolo, reddito basso &mdash; meglio l&apos;IRPEF</h2>
            <p>Paolo, 26 anni, ha appena iniziato a lavorare. RAL 18.000&euro;, ha ereditato un monolocale che affitta a 400&euro;/mese (4.800&euro;/anno). Ha anche spese di ristrutturazione detraibili per 3.000&euro;.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>CONFRONTO PER PAOLO</div>
              <div className="db-row"><span>Canone annuo</span><span>4.800&euro;</span></div>
              <div className="db-row" style={{ borderTop: '1px solid rgba(251,248,241,.08)', paddingTop: '12px' }}><span style={{ color: 'rgba(251,248,241,.5)' }}>CON IRPEF</span><span></span></div>
              <div className="db-row"><span>Base imponibile (95%)</span><span>4.560&euro;</span></div>
              <div className="db-row"><span>Aliquota marginale</span><span>23% (reddito sotto 28K)</span></div>
              <div className="db-row"><span>IRPEF lorda sul canone</span><span>4.560 &times; 23% = 1.049&euro;</span></div>
              <div className="db-row"><span>&minus; Detrazioni ristrutturazione usabili</span><span>&minus;300&euro;</span></div>
              <div className="db-row"><span>IRPEF netta + registro (48&euro;)</span><span className="cfr"><strong>~797&euro;</strong></span></div>
              <div className="db-row" style={{ borderTop: '1px solid rgba(251,248,241,.08)', paddingTop: '12px' }}><span style={{ color: 'rgba(251,248,241,.5)' }}>CON CEDOLARE SECCA</span><span></span></div>
              <div className="db-row"><span>Base imponibile (100%)</span><span>4.800&euro;</span></div>
              <div className="db-row"><span>Cedolare 21%</span><span>4.800 &times; 21% = <strong>1.008&euro;</strong></span></div>
              <div className="db-row"><span>Detrazioni ristrutturazione</span><span>non utilizzabili (reddito basso)</span></div>
              <div className="db-row db-total"><span>Risultato</span><span>Cedolare costa <strong>211&euro; in pi&ugrave;</strong></span></div>
            </div>

            <p style={{ marginTop: '16px' }}>Per Paolo la cedolare <strong>non conviene</strong>. Il suo reddito basso lo tiene nell&apos;aliquota IRPEF al 23% (molto vicina al 21%), e con la cedolare perderebbe la possibilit&agrave; di sfruttare le detrazioni per ristrutturazione. In pi&ugrave;, il reddito da affitto non entrerebbe nel complessivo, rischiando di fargli perdere il trattamento integrativo da 100&euro;/mese.</p>

            <div className="ib warn r"><div className="ib-t">⚠️ Morale dei due esempi</div>
              <p>Non esiste una risposta universale. La cedolare conviene nella maggioranza dei casi (soprattutto con redditi medi e alti), ma con <strong>redditi bassi + detrazioni da sfruttare</strong>, l&apos;IRPEF ordinaria pu&ograve; costare meno. In caso di dubbio, un commercialista pu&ograve; fare il confronto in 5 minuti con i tuoi numeri reali.</p>
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
              <a href="/imu" className="rc"><span className="rc-e">💶</span><div className="rc-t">Pago l&apos;IMU</div><div className="rc-d">Calcolo, aliquote, esenzioni e scadenze.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Dichiarazione dei redditi e detrazioni.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Tutto sull&apos;acquisto della prima casa.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Registrazione contratti e RLI</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/aree-tematiche/casa/affitto/cedolare-secca" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏠</span><div><div className="sbtool-n">Cedolare secca</div><div className="sbtool-d">Pagina ufficiale AdE</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/registrazione-contratti-locazione" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Modello RLI</div><div className="sbtool-d">Registrazione contratti</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/imu" className="sbguide">💶 Pago l&apos;IMU<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">&rarr;</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
