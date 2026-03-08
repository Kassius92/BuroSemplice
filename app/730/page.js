import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import VersionToggle from '@/components/VersionToggle';
import FAQ from '@/components/FAQ';
import Quiz from '@/components/Quiz';
import Calculator730 from '@/components/Calculator730';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: {
    type: 'article',
    title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
    description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
    url: 'https://zeroburocrazia.it/730',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-730.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
    description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
    images: ['https://zeroburocrazia.it/og-730.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'è" },
  { id: 'quanto-perdi', label: 'Quanto perdi', bh: true },
  { id: 'novita', label: 'Novità 2026', bh: true },
  { id: 'detrazioni', label: 'Detrazioni', bh: true },
  { id: 'chi-deve', label: 'Chi deve farlo' },
  { id: 'come', label: 'Come si fa' },
  { id: 'costi', label: 'Costi', bh: true },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'calendario', label: 'Calendario' },
  { id: 'dove', label: 'Dove andare' },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const quizQuestions = [
  'Hai lavorato come dipendente o sei pensionato nel 2025?',
  'Hai avuto spese mediche, affitto, mutuo, figli o abbonamenti?',
];
const quizResults = {
  pos: '✅ Il 730 fa per te — e probabilmente ti spetta un rimborso. Continua a leggere per scoprire come farlo.',
  neu: '🤔 Potresti comunque avere diritto a detrazioni. Leggi la sezione "Chi deve farlo" per capire meglio.',
  neg: '📋 Il 730 potrebbe non essere obbligatorio per te, ma farlo potrebbe comunque farti recuperare soldi.',
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Ma perdi le detrazioni: centinaia o migliaia di euro ogni anno. Se eri obbligato e non lo fai, rischi sanzioni dal 120% al 240% delle imposte dovute. In pratica, conviene sempre farlo." },
  { q: "Posso scaricare Netflix, palestra?", a: "<strong>Netflix no.</strong> La palestra per te no, <strong>per i tuoi figli sì</strong>: sport dei figli 5–18 anni detraibili al 19% fino a 210€. Per adulti: solo se prescritta dal medico come riabilitativa." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore è <strong>obbligato per legge</strong> a consegnartela entro il 16 marzo. Se non arriva, sollecita per iscritto. Puoi anche scaricarla dal sito dell'Agenzia delle Entrate con SPID." },
  { q: "Ho pagato in contanti, è tutto perso?", a: "<strong>Dipende dalla spesa.</strong> Dal 2025 anche i farmaci da banco senza ricetta richiedono pagamento tracciabile. Restano detraibili in contanti: farmaci <strong>con ricetta</strong> e visite mediche. Per tutto il resto: carta, bancomat o bonifico." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, fai un solo 730</strong> con entrambe le CU. Probabilmente dovrai pagare un conguaglio perché ogni datore ha applicato le detrazioni come se fossi stato lì tutto l'anno." },
  { q: "730 congiunto con il partner?", a: "<strong>Solo se sposati o uniti civilmente.</strong> Il vantaggio: crediti e debiti si compensano. Conviventi non possono farlo." },
  { q: "Ho fatto un errore, posso correggerlo?", a: "<strong>Sì.</strong> Entro il 30 settembre: 730 integrativo. Dopo: Modello Redditi correttivo entro il 30 novembre, o dichiarazione integrativa entro 5 anni. Se ti correggi spontaneamente, le sanzioni sono ridotte." },
  { q: "Cassa integrazione o NASpI, devo farlo?", a: "<strong>Sì, e ti conviene.</strong> Sono redditi a tutti gli effetti. Se hai ricevuto sia stipendio che NASpI, hai avuto due \"datori di lavoro\" e il 730 è praticamente obbligatorio." },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({
      title: 'Guida completa al 730: detrazioni, rimborso e scadenze 2026',
      description: 'Come fare il 730 nel 2026: chi deve farlo, detrazioni, documenti, scadenze e come massimizzare il rimborso. Guida gratuita aggiornata alle novità 2026.',
      url: '/730',
      image: 'og730.png',
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
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Faccio il <em>730</em></h1>
            <p className="hero-sub">Tutto quello che devi sapere sulla dichiarazione dei redditi: chi deve farla, quando, quanto costa, e come ottenere il rimborso più alto possibile.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 15 min di lettura</span>
              <span className="pill pill-o">⏰ Scadenza: 30 settembre 2026</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · INPS · Ministero dell&apos;Economia e delle Finanze · Legge di Bilancio 2026</div>
            <PrintButton />
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0€</div><div className="hl">con la precompilata<br/>fai da solo gratis</div></div>
            <div className="hstat"><div className="hn">30/9</div><div className="hl">scadenza invio<br/>settembre 2026</div></div>
            <div className="hstat"><div className="hn">~760€</div><div className="hl">rimborso medio<br/>per chi ha il mutuo</div></div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* LAYOUT */}
      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-l">Percorso</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/spid" className="ps done">✓ SPID</Link><span className="pa">›</span>
              <Link href="/isee" className="ps done">✓ ISEE</Link><span className="pa">›</span>
              <span className="ps active">🧾 730</span>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🧾</div><div className="sn">Redditi</div><div className="sl">dichiarazione per dipendenti e pensionati</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">0–200€</div><div className="sl">da solo gratis, CAF 30–80€, commercialista 80–200€</div></div>
                <div className="sc r d3"><div className="si">⏰</div><div className="sn">30/9</div><div className="sl">scadenza 30 settembre 2026</div></div>
                <div className="sc r d1"><div className="si">⏱</div><div className="sn">1–3h</div><div className="sl">da solo online, 30 min al CAF</div></div>
                <div className="sc bl-bg r d2"><div className="si">🔐</div><div className="sn">SPID</div><div className="sl">serve per la precompilata online</div></div>
                <div className="sc r d3"><div className="si">💸</div><div className="sn">Rimborso</div><div className="sl">da luglio in busta paga</div></div>
              </div>
            </div>
            <Quiz questions={quizQuestions} results={quizResults} />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è il 730, in parole semplici</h2>
            <p>Il 730 è il modulo con cui dici allo Stato italiano quanto hai guadagnato nell&apos;anno precedente. Lo Stato usa queste informazioni per calcolare quante tasse devi pagare. Se durante l&apos;anno hai già pagato troppo (e nella maggior parte dei casi è così), <span className="hl-text">ti restituisce la differenza</span>. Quel rimborso arriva direttamente in busta paga o nella pensione.</p>
            <p>Si chiama &quot;730&quot; perché è il numero del modello fiscale. Non c&apos;è un motivo poetico — è burocrazia italiana allo stato puro.</p>
            <div className="ib tip r"><div className="ib-t">💡 Perché conviene farlo anche se non sei obbligato</div><p>Molte persone non sono tecnicamente obbligate a fare il 730. Ma farlo ti permette di recuperare soldi: spese mediche, affitto, mutuo, spese scolastiche, abbonamenti ai trasporti... Se non fai il 730, quei soldi li regali allo Stato.</p></div>
          </div>

          {/* QUANTO PERDI */}
          <div className="sec bh r" id="quanto-perdi">
            <div className="dblock">
              <div className="sec-tag">⚡ Il conto che nessuno ti fa</div>
              <h2>Quanto perdi se <em>non</em> fai il 730</h2>
              <p>La maggior parte degli italiani che non fa il 730 non sa quanto sta regalando allo Stato. Facciamo due conti con una situazione comune.</p>
              <div style={{ background: 'rgba(251,248,241,.06)', border: '1px solid rgba(251,248,241,.1)', borderRadius: '14px', padding: '24px', marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '12px' }}>ESEMPIO: MARCO, 28 ANNI, DIPENDENTE, 14.000€ LORDI</div>
                <div className="dgrid">
                  <div className="dcard"><div className="dcard-l">Spese mediche</div><div className="dcard-v">600€ spesi → recupera 89€</div></div>
                  <div className="dcard"><div className="dcard-l">Abbonamento metro</div><div className="dcard-v">250€ spesi → recupera 47€</div></div>
                  <div className="dcard"><div className="dcard-l">Affitto (under 31)</div><div className="dcard-v">detrazione fissa → recupera 991€</div></div>
                  <div className="dcard"><div className="dcard-l">Spese veterinario</div><div className="dcard-v">400€ spesi → recupera 51€</div></div>
                </div>
              </div>
              <div className="dtotals">
                <div className="dt-col"><div className="dt-l" style={{ color: 'var(--blue)' }}>Totale che Marco perde ogni anno</div><div className="dt-n" style={{ color: 'var(--cream)' }}>1.178€</div></div>
                <div className="dt-col"><div className="dt-l" style={{ color: 'rgba(251,248,241,.5)' }}>In 5 anni di lavoro</div><div className="dt-n" style={{ color: 'var(--blue)' }}>5.890€</div></div>
              </div>
              <p style={{ marginBottom: 0 }}>E Marco ha una situazione semplice. Chi ha un mutuo, figli, o ha fatto lavori in casa può recuperare <strong style={{ color: 'var(--cream)' }}>2.000–4.000€ all&apos;anno</strong>.</p>
            </div>
          </div>

          {/* NOVITÀ 2026 */}
          <div className="sec bh r" id="novita">
            <div className="sec-tag">Aggiornamenti</div>
            <h2>Cosa cambia nel 2026</h2>
            <p>Ogni anno le regole cambiano un po&apos;. Ecco le novità più importanti.</p>
            <div className="ib tip r"><div className="ib-t">💡 Tre scaglioni IRPEF definitivi</div><p>Fino a 28.000€ paghi il 23%, da 28.001€ a 50.000€ paghi il 33% (prima era 35%), oltre i 50.000€ paghi il 43%. Chi guadagna tra 28.000€ e 50.000€ risparmia circa 440€.</p></div>
            <div className="ib warn r d1"><div className="ib-t">⚠️ Reddito sopra 75.000€? Detrazioni ridotte</div><p>Novità 2026: se guadagni più di 75.000€, le detrazioni al 19% vengono tagliate progressivamente fino ad azzerarsi a 100.000€. Le eccezioni sono spese sanitarie, interessi su mutui prima casa stipulati entro il 2024 e rate di ristrutturazioni già iniziate — quelle restano intere.</p></div>
            <div className="ib warn r d2"><div className="ib-t">⚠️ Figli a carico: limite dei 30 anni</div><p>Grande novità: i figli possono essere considerati fiscalmente a carico <span className="hl-text">solo fino ai 30 anni</span> (prima non c&apos;era limite di età). Se tuo figlio ha più di 30 anni e non è disabile, non puoi più detrarlo.</p></div>
            <div className="ib mon r d2"><div className="ib-t">💶 Detrazione lavoro dipendente aumentata</div><p>Se guadagni meno di 15.000€ all&apos;anno, la detrazione per lavoro dipendente sale da 1.880€ a 1.955€.</p></div>
            <div className="ib tip r d3"><div className="ib-t">💡 Bonus affitto per neoassunti</div><p>Se sei stato assunto a tempo indeterminato nel 2025 e ti sei trasferito per lavoro, i rimborsi del datore per affitto e alloggio <span className="hl-text">non fanno reddito per i primi due anni, fino a 5.000€/anno</span>.</p></div>
            <div className="ib tip r"><div className="ib-t">💡 Spese scolastiche: sale il tetto</div><p>Il tetto massimo per le spese di istruzione sale da 800€ a 1.000€ per studente. Il risparmio massimo passa da 152€ a 190€ per figlio.</p></div>
            <div className="ib warn r d1"><div className="ib-t">⚠️ Redditi alti: meno detrazioni</div><p>Se guadagni più di 75.000€ le detrazioni si riducono progressivamente, fino ad annullarsi oltre i 100.000€. Fanno eccezione le spese mediche e gli interessi del mutuo.</p></div>
          </div>

          {/* DETRAZIONI */}
          <div className="sec bh r" id="detrazioni">
            <div className="sec-tag">Rimborsi</div>
            <h2>Quanto puoi recuperare: le detrazioni</h2>
            <p>Le detrazioni sono spese che lo Stato ti &quot;rimborsa&quot; in parte. Nella maggior parte dei casi <span className="hl-text">ti restituiscono il 19%</span>. Sembra poco? Ecco i conti concreti.</p>
            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">🦷</div><div className="uc-n">800€ dal dentista?</div><div className="uc-d">Ti tornano <strong style={{ color: 'var(--blue)' }}>127€</strong>. 800€ − 129€ franchigia = 671€ × 19%.</div></div>
              <div className="uc r d2"><div className="uc-e">🏠</div><div className="uc-n">3.000€ di interessi mutuo?</div><div className="uc-d">Ti tornano <strong style={{ color: 'var(--blue)' }}>570€</strong>. Massimo 760€ con 4.000€ di interessi.</div></div>
              <div className="uc r d3"><div className="uc-e">🚇</div><div className="uc-n">Abbonamento metro 250€?</div><div className="uc-d">Ti tornano <strong style={{ color: 'var(--blue)' }}>47€</strong>. Sommala alle altre voci.</div></div>
              <div className="uc r d4"><div className="uc-e">👶</div><div className="uc-n">Figlio fa nuoto, 500€?</div><div className="uc-d">Ti tornano <strong style={{ color: 'var(--blue)' }}>40€</strong>. Qualsiasi sport, dai 5 ai 18 anni.</div></div>
              <div className="uc r d1"><div className="uc-e">🐕</div><div className="uc-n">Veterinario 400€?</div><div className="uc-d">Ti tornano <strong style={{ color: 'var(--blue)' }}>51€</strong>. La maggior parte non lo sa.</div></div>
              <div className="uc r d2"><div className="uc-e">🏫</div><div className="uc-n">Rette scolastiche?</div><div className="uc-d">Fino a <strong style={{ color: 'var(--blue)' }}>190€ per figlio</strong>. Mensa, gite, trasporto: conta tutto.</div></div>
            </div>
            <div className="ib tip r"><div className="ib-t">💡 Il trucco è sommare tutto</div><p>Una singola detrazione sembra poco. Ma dentista + metro + sport + veterinario + affitto fanno facilmente <span className="hl-text">500–1.500€ di rimborso</span>. Ogni anno.</p></div>
            <h3>Tabella completa detrazioni</h3>
            <div className="tw r">
              <table><thead><tr><th>Spesa</th><th>Recupero</th><th>Dettaglio</th></tr></thead>
              <tbody>
                <tr><td><strong>Spese mediche</strong></td><td className="cv">19%</td><td>Sopra la franchigia di 129,11€. Visite, farmaci, occhiali, dentista, psicologo.</td></tr>
                <tr><td><strong>Interessi mutuo</strong></td><td className="cv">19%</td><td>Fino a 4.000€ di interessi all&apos;anno. Rimborso max: 760€.</td></tr>
                <tr><td><strong>Affitto</strong></td><td className="cv">300–991€</td><td>Importo fisso in base al reddito. Under 31: fino a 2.000€.</td></tr>
                <tr><td><strong>Spese scolastiche</strong></td><td className="cv">19%</td><td>Fino a 1.000€ per figlio. <strong>Tetto alzato nel 2026!</strong></td></tr>
                <tr><td><strong>Sport figli</strong></td><td className="cv">19%</td><td>Fino a 210€ per figlio (5–18 anni).</td></tr>
                <tr><td><strong>Trasporto pubblico</strong></td><td className="cv">19%</td><td>Fino a 250€.</td></tr>
                <tr><td><strong>Assicurazione vita</strong></td><td className="cv">19%</td><td>Fino a 530€ di premio annuo.</td></tr>
                <tr><td><strong>Veterinario</strong></td><td className="cv">19%</td><td>Da 129€ a 550€.</td></tr>
                <tr><td><strong>Spese funebri</strong></td><td className="cv">19%</td><td>Fino a 1.550€ per evento.</td></tr>
                <tr><td><strong>Donazioni ONLUS</strong></td><td className="cv">26%</td><td>Detrazione maggiorata. Nessun tetto.</td></tr>
                <tr><td><strong>Badanti</strong></td><td className="cv">19%</td><td>Fino a 2.100€, se reddito sotto 40.000€.</td></tr>
                <tr><td><strong>Ristrutturazione</strong></td><td className="cv">50%</td><td>Su 10 anni. Fino a 96.000€ di lavori.</td></tr>
                <tr><td><strong>Ecobonus</strong></td><td className="cv">50–65%</td><td>Caldaia, infissi, cappotto termico. Su 10 anni.</td></tr>
                <tr><td><strong>Bonus mobili</strong></td><td className="cv">50%</td><td>Fino a 5.000€, solo con ristrutturazione.</td></tr>
              </tbody></table>
            </div>
            <div className="ib warn r"><div className="ib-t">⚠️ Le detrazioni che la gente dimentica sempre</div><p>Abbonamento trasporti, veterinario, sport dei figli, spese funebri, donazioni ONLUS, badanti, bonus mobili. <span className="hl-text">Se non le inserisci, quei soldi li perdi per sempre.</span></p></div>
          </div>

          {/* CHI DEVE FARLO */}
          <div className="sec r" id="chi-deve">
            <div className="sec-tag">Obblighi</div>
            <h2>Chi deve fare il 730</h2>
            <p><strong>Devi farlo se:</strong> sei un lavoratore dipendente o un pensionato e hai avuto redditi nel 2025.</p>
            <p><strong>Non devi farlo se:</strong> hai solo redditi da lavoro dipendente con un unico datore di lavoro, nessuna spesa da detrarre, e le tasse sono state calcolate correttamente.</p>
            <p><strong>Non puoi fare il 730 se:</strong> hai la partita IVA. In quel caso devi fare il Modello Redditi (ex Unico).</p>
            <div className="ib warn r"><div className="ib-t">⚠️ Due datori di lavoro = 730 obbligatorio</div><p>Se hai cambiato lavoro nello stesso anno, il 730 è praticamente obbligatorio. Senza, rischi un conguaglio salato a fine anno.</p></div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Raccogli i documenti</strong><p>CU dal datore di lavoro, ricevute spese mediche, affitto, mutuo, scuola, trasporti, veterinario. Lista completa più avanti.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Scegli come farlo</strong><p>Da solo online (precompilata), al CAF, o dal commercialista. Pro e contro nella sezione costi.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Controlla la precompilata</strong><p>Dal 30 aprile sul sito dell&apos;Agenzia delle Entrate. Ha già molti dati ma non tutti — controlla e aggiungi quello che manca.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Invia</strong><p>Online dal sito dell&apos;Agenzia o tramite CAF/commercialista. Scadenza: 30 settembre 2026.</p></div></div>
              <div className="step r"><div className="stepn">5</div><div className="stepb"><strong>Ricevi il rimborso</strong><p>Se ti spetta un rimborso, <span className="hl-text">lo trovi in busta paga tra luglio e agosto</span>. Pensionati: agosto o settembre.</p></div></div>
            </div>
          </div>

          {/* COSTI */}
          <div className="sec bh r" id="costi">
            <div className="sec-tag">Confronto</div>
            <h2>Quanto costa</h2>
            <div className="tw r"><table><thead><tr><th>Metodo</th><th>Costo</th><th>Tempo</th><th>Ideale per</th></tr></thead><tbody>
              <tr className="rec"><td><strong>Precompilata da solo</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">0€</td><td>1–2 ore</td><td>Un lavoro, poche spese. Serve SPID.</td></tr>
              <tr><td><strong>CAF / Patronato</strong></td><td className="cv">30–80€</td><td>30 min + attesa</td><td>Chi ha cambiato lavoro o ha l&apos;affitto.</td></tr>
              <tr><td><strong>Commercialista</strong></td><td className="cv">80–200€</td><td>15 min tu</td><td>Immobili in affitto, redditi esteri, cripto.</td></tr>
            </tbody></table></div>
            <div className="ib mon r"><div className="ib-t">💶 Il consiglio onesto di ZeroBurocrazia</div><p><strong>Un solo lavoro + poche spese</strong> → fallo da solo con la precompilata. Risparmi 50–80€.<br/><strong>Hai cambiato lavoro, mutuo, figli</strong> → vai al CAF. Miglior rapporto qualità-prezzo.<br/><strong>Immobili, redditi esteri, cripto, eredità</strong> → commercialista. Costa di più ma ottimizza di più.</p></div>
            <Link href="/isee" className="xlink r"><span className="xlink-em">📋</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Molti documenti sono gli stessi. Fai entrambi.</div><span className="xlink-ar">→</span></Link>
          </div>

          {/* AFFILIAZIONE */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Fai il 730 online con un commercialista dedicato</div>
                <div className="aff-text">Carichi i documenti, un commercialista controlla tutto e massimizza il rimborso. Da 29€. Risparmi tempo e non rischi errori.</div>
                <div className="aff-note">* Link in partnership — se ti iscrivi, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="#" target="_blank" rel="noopener sponsored" className="aff-btn btn-soon">Prossimamente</a>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>I documenti che ti servono</h2>
            <h3>Sempre necessari</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">📄</div><div className="clb"><strong>CU (Certificazione Unica) 2026</strong><span className="note">Te la dà il datore di lavoro o l&apos;INPS entro il 16 marzo</span></div></li>
              <li className="cli r d2"><div className="ci">🪪</div><div className="clb"><strong>Documento d&apos;identità e codice fiscale</strong><span className="note">Il tuo e quello del coniuge se fai il 730 congiunto</span></div></li>
              <li className="cli r d3"><div className="ci">🏦</div><div className="clb"><strong>IBAN del tuo conto corrente</strong><span className="note">Per ricevere il rimborso se non hai un sostituto d&apos;imposta</span></div></li>
              <li className="cli r d4"><div className="ci">📋</div><div className="clb"><strong>730 dell&apos;anno precedente</strong><span className="note">Utile per verificare crediti residui da riportare</span></div></li>
            </ul>
            <h3>Per le detrazioni</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">🦷</div><div className="clb"><strong>Ricevute spese mediche</strong><span className="note">Farmaci, visite, esami, dentista, psicologo, occhiali</span></div></li>
              <li className="cli r d2"><div className="ci">🏠</div><div className="clb"><strong>Contratto d&apos;affitto registrato</strong><span className="note">Se sei in affitto e vuoi la detrazione</span></div></li>
              <li className="cli r d3"><div className="ci">🏦</div><div className="clb"><strong>Certificazione interessi mutuo</strong><span className="note">Te la manda la banca tra febbraio e marzo</span></div></li>
              <li className="cli r d4"><div className="ci">🏫</div><div className="clb"><strong>Ricevute spese scolastiche / universitarie</strong><span className="note">Rette, mensa, gite, trasporto scolastico</span></div></li>
              <li className="cli r d1"><div className="ci">⚽</div><div className="clb"><strong>Ricevute spese sportive figli</strong><span className="note">Palestra, piscina, corsi sportivi (figli 5–18 anni)</span></div></li>
              <li className="cli r d2"><div className="ci">🚇</div><div className="clb"><strong>Abbonamento trasporto pubblico</strong><span className="note">Ricevuta annuale o mensile di metro, bus, treno</span></div></li>
              <li className="cli r d3"><div className="ci">🐕</div><div className="clb"><strong>Ricevute spese veterinarie</strong><span className="note">Visite, interventi, farmaci per animali domestici</span></div></li>
              <li className="cli r d4"><div className="ci">🔨</div><div className="clb"><strong>Fatture ristrutturazione + bonifici parlanti</strong><span className="note">Solo se hai fatto lavori in casa con il bonus</span></div></li>
            </ul>
          </div>

          {/* ERRORI */}
          <div className="sec bh r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che fanno tutti</h2>
            <div className="ib warn r"><div className="ib-t">⚠️ Accettare la precompilata senza controllarla</div><p>L&apos;Agenzia delle Entrate non ha tutto. Le spese sportive dei figli, l&apos;affitto, le spese mediche private — spesso mancano. Se accetti senza controllare, perdi soldi.</p></div>
            <div className="ib warn r d1"><div className="ib-t">⚠️ Non fare il 730 perché &quot;tanto non cambia nulla&quot;</div><p>Anche con poche spese mediche e un abbonamento ai trasporti <span className="hl-text">puoi recuperare 200–400€. Ogni anno. Per sempre.</span></p></div>
            <div className="ib warn r d2"><div className="ib-t">⚠️ Pagare spese detraibili in contanti</div><p>Le spese detraibili al 19% <span className="hl-text">devono essere pagate con metodi tracciabili</span>. Dal 2025 anche i farmaci da banco senza ricetta rientrano in questa regola. Puoi ancora pagare in contanti: farmaci <strong>con ricetta medica</strong> e visite mediche.</p></div>
            <div className="ib warn r d3"><div className="ib-t">⚠️ Andare al CAF all&apos;ultimo momento</div><p>A settembre i CAF sono in ginocchio. Vai tra maggio e giugno: zero stress, e se c&apos;è un errore hai tempo per correggerlo.</p></div>
          </div>

          {/* CALENDARIO */}
          <div className="sec r" id="calendario">
            <div className="sec-tag">Scadenze</div>
            <h2>Il calendario 2026</h2>
            <div className="timeline r">
              <div className="tli act"><div className="tl-d">Entro il 16 marzo</div><div className="tl-t">Ricevi il CU dal datore di lavoro</div><div className="tl-p">Se non ti arriva, chiedi alle risorse umane. Ti serve per tutto il resto.</div></div>
              <div className="tli"><div className="tl-d">30 aprile</div><div className="tl-t">Online la precompilata</div><div className="tl-p">Vai su agenziaentrate.gov.it, accedi con SPID, e controlla cosa c&apos;è dentro.</div></div>
              <div className="tli"><div className="tl-d">Maggio — Giugno</div><div className="tl-t">Il periodo ideale per fare il 730</div><div className="tl-p">Prima lo fai, prima arriva il rimborso. Al CAF le code sono più corte.</div></div>
              <div className="tli"><div className="tl-d">Luglio — Agosto</div><div className="tl-t">Arriva il rimborso in busta paga</div><div className="tl-p">Se hai inviato entro giugno, il rimborso arriva con la busta di luglio.</div></div>
              <div className="tli"><div className="tl-d">30 settembre 2026</div><div className="tl-t">Scadenza invio 730</div><div className="tl-p">Ultimo giorno. Dopo questa data devi fare il Modello Redditi (più complicato).</div></div>
            </div>
          </div>

          {/* DOVE */}
          <div className="sec r" id="dove">
            <div className="sec-tag">Punti di servizio</div>
            <h2>Dove andare</h2>
            <h3>Da solo (precompilata online)</h3>
            <p>Vai su <strong>agenziaentrate.gov.it</strong> → area riservata → accedi con SPID → sezione &quot;730 precompilato&quot;.</p>
            <Link href="/spid" className="xlink r"><span className="xlink-em">🔐</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Come farlo gratis in 15 minuti.</div><span className="xlink-ar">→</span></Link>
            <h3>Al CAF</h3>
            <p>I CAF più diffusi: <strong>CAF CGIL, CISL, UIL, ACLI</strong>. Cerca &quot;CAF + la tua città&quot;. Costo: 30–80€. Molti sono gratuiti per gli iscritti al sindacato.</p>
            <h3>Dal commercialista</h3>
            <p>Conviene per situazioni complesse: più immobili, redditi esteri, eredità, plusvalenze. Costo: 80–200€.</p>
          </div>

          {/* CALCOLATORE */}
          <div className="sec bh r" id="calcolatore">
            <div className="sec-tag">Stimatore</div>
            <h2>Calcola il tuo rimborso (stima)</h2>
            <p>Muovi i cursori per avvicinarti alla tua situazione. È una stima indicativa — per i numeri esatti serve la dichiarazione completa.</p>
            <Calculator730 />
          </div>

          {/* FAQ */}
          <div className="sec bh r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CTA BANNER */}
          <LeadBox guida="730" />

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <Link href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Ti serve per accedere a bonus. Spesso lo fai prima del 730.</div><span className="rc-ar">→</span></Link>
              <Link href="/spid" className="rc"><span className="rc-e">🔐</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per la precompilata online. Come farlo in 15 minuti.</div><span className="rc-ar">→</span></Link>
              <Link href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Se hai comprato casa, ci sono detrazioni importanti nel 730.</div><span className="rc-ar">→</span></Link>
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
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">🎯</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri se devi farlo</div></div></a>
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">🧮</span><div><div className="sbtool-n">Calcolatore rimborso</div><div className="sbtool-d">Stima quanto recuperi</div></div></a>
            <a href="#detrazioni" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Tabella detrazioni</div><div className="sbtool-d">Tutte le spese scaricabili</div></div></a>
            <div className="sbtool" style={{ opacity: '.5', cursor: 'default' }}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova CAF vicino</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <Link href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></Link>
            <Link href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></Link>
            <Link href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></Link>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="730" />
      <Footer />
    </>
  );
}
