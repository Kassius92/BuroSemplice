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
  title: 'Mutuo Prima Casa 2026: Come Funziona, Requisiti, Garanzia Consap e Tassi',
  description: 'Mutuo prima casa 2026: come funziona, requisiti, garanzia Consap under 36, documenti necessari, tassi fisso e variabile, quanto puoi chiedere. Guida gratuita.',
  keywords: ["mutuo prima casa", "mutuo 2026", "mutuo under 36", "mutuo Consap", "garanzia mutuo", "mutuo tasso fisso", "come chiedere mutuo", "requisiti mutuo", "mutuo 100%", "mutuo giovani"],
  alternates: { canonical: 'https://zeroburocrazia.it/mutuo' },
  openGraph: {
    type: 'article',
    title: 'Mutuo Prima Casa 2026: Come Funziona, Requisiti, Garanzia Consap e Tassi',
    description: 'Mutuo prima casa 2026: come funziona, requisiti, garanzia Consap under 36, documenti necessari, tassi fisso e variabile, quanto puoi chiedere. Guida gratuita.',
    url: 'https://zeroburocrazia.it/mutuo',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogmutuo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutuo Prima Casa 2026: Come Funziona, Requisiti, Garanzia Consap e Tassi',
    description: 'Mutuo prima casa 2026: come funziona, requisiti, garanzia Consap under 36, documenti, tassi. Guida gratuita.',
    images: ['https://zeroburocrazia.it/ogmutuo.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019è" },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'consap', label: 'Garanzia Consap', bh: true },
  { id: 'tassi', label: 'Tasso fisso vs variabile' },
  { id: 'come', label: 'Come richiederlo' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto anticipo serve per un mutuo prima casa?", a: "Di solito le banche finanziano l\u2019<strong>80% del valore</strong> dell\u2019immobile, quindi devi avere il 20% come anticipo. Se hai meno di 36 anni e ISEE sotto 40.000\u20AC, con la garanzia Consap puoi arrivare al <strong>100% senza anticipo</strong>. Però ricorda: oltre al prezzo della casa, servono soldi per notaio, imposta, perizia e agenzia (circa 8\u201312% in più)." },
  { q: "Posso ottenere un mutuo con contratto a tempo determinato?", a: "È <strong>più difficile</strong>, ma non impossibile. Con la garanzia Consap diventa più fattibile perché lo Stato copre parte del rischio. Alcune banche accettano anche co-obbligati (es. un genitore con reddito stabile) o valutano la continuità lavorativa anche con contratti a termine ripetuti." },
  { q: "Tasso fisso o variabile: quale scelgo?", a: "Nel 2026, con tassi fissi attorno al <strong>2,8\u20133,1%</strong>, il fisso è la scelta più popolare: sai esattamente quanto paghi per tutta la durata. Il variabile può partire più basso ma sale se i tassi di mercato salgono. Regola pratica: se non puoi permetterti aumenti della rata, vai sul fisso." },
  { q: "Posso detrarre gli interessi del mutuo?", a: "<strong>Sì.</strong> Gli interessi passivi del mutuo prima casa sono detraibili al 19% nel 730, fino a un massimo di <strong>4.000\u20AC all\u2019anno</strong>. Su 4.000\u20AC di interessi, recuperi 760\u20AC. Condizione: devi essere proprietario dell\u2019immobile e averci la residenza." },
  { q: "Quanto tempo ci vuole per ottenere il mutuo?", a: "In media <strong>30\u201360 giorni</strong> dalla domanda all\u2019erogazione. I tempi variano: la banca fa l\u2019istruttoria (1\u20132 settimane), manda il perito (1 settimana), poi delibera. Con Consap servono fino a 20 giorni in più per l\u2019esame della garanzia. Il consiglio: inizia la pratica appena trovi casa, non dopo il compromesso." },
  { q: "Cosa succede se non riesco a pagare le rate?", a: "La banca prima ti contatta e cerca una soluzione (rinegoziazione, sospensione temporanea). Se continui a non pagare, può avviare la <strong>procedura di pignoramento</strong> e vendita all\u2019asta dell\u2019immobile. Con la garanzia Consap, lo Stato copre la sua quota ma poi si rivale su di te. Il mutuo è un impegno serio \u2014 calcola bene la rata prima di firmare." },
  { q: "Cos\u2019è la surroga e quando conviene?", a: "La <Tip t=\"Trasferimento del mutuo da una banca a un\u2019altra per ottenere condizioni migliori (tasso più basso, rata più leggera). È gratuita per legge: nessun costo di notaio, perizia o istruttoria.\">surroga</Tip> è il trasferimento del mutuo a un\u2019altra banca con condizioni migliori. È <strong>gratuita per legge</strong>. Conviene se il tuo tasso attuale è significativamente più alto di quelli di mercato (almeno 0,5\u20131% di differenza). Puoi farla in qualsiasi momento, senza penali." },
  { q: "Posso comprare casa senza mutuo?", a: "Certo, se hai i soldi. In Italia circa il <strong>53% delle compravendite</strong> avviene senza mutuo. Ma per la maggior parte delle persone il mutuo è l\u2019unica via. L\u2019importante è che la rata non superi il 30\u201335% del tuo reddito netto mensile." },
];

export default function PaginaMutuo() {
  const schemas = [
    articleSchema({
      title: 'Mutuo prima casa 2026: come funziona, requisiti, Consap e tassi',
      description: 'Come ottenere un mutuo prima casa nel 2026: requisiti, garanzia Consap, tasso fisso o variabile, documenti, detrazioni. Guida gratuita aggiornata.',
      url: '/mutuo',
      image: 'ogmutuo.png',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-casa">
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
            <div className="cat-badge">🏠 Casa</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Mutuo <em>prima casa</em></h1>
            <p className="hero-sub">Come funziona un mutuo nel 2026: requisiti, garanzia Consap per under 36, tasso fisso o variabile, documenti, e come capire quanto puoi chiedere.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 15 min di lettura</span>
              <span className="pill pill-o">🏦 Fondo Consap fino al 2027</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Consap · Banca d&apos;Italia · Agenzia delle Entrate · Legge di Bilancio 2025 (L. 207/2024)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">250k</div><div className="hl">importo massimo<br/>con garanzia Consap</div></div>
            <div className="hstat"><div className="hn">~2,9%</div><div className="hl">tasso fisso medio<br/>marzo 2026</div></div>
            <div className="hstat"><div className="hn">80%</div><div className="hl">garanzia statale<br/>per under 36</div></div>
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
              <a href="/compro-casa" className="ps">🏠 Compro casa</a>
              <a href="/isee" className="ps">📋 Faccio l&apos;ISEE</a>
              <a href="/cambio-residenza" className="ps">📄 Cambio residenza</a>
            </div>
          </div>

<div className="related r">
            <h2>Link utili</h2>
            <div className="rg">
              <a href="https://www.consap.it/fondo-prima-casa/" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">🏛</span><div className="rc-t">Consap — Fondo Prima Casa</div><div className="rc-d">Requisiti e modulo domanda</div><span className="rc-ar">→</span></a>
              <a href="https://www.bancaditalia.it/compiti/vigilanza/avvisi-pub/avvisi-crif/" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">📊</span><div className="rc-t">Banca d&apos;Italia</div><div className="rc-d">Centrale rischi e trasparenza</div><span className="rc-ar">→</span></a>
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/agevolprima-casa" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">📋</span><div className="rc-t">Agenzia Entrate</div><div className="rc-d">Agevolazioni prima casa</div><span className="rc-ar">→</span></a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🏦</div><div className="sn">Prestito</div><div className="sl">la banca ti presta i soldi, tu li restituisci con interessi</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">80% LTV</div><div className="sl">la banca copre l&apos;80%, tu metti il 20%</div></div>
                <div className="sc r d3"><div className="si">🛡</div><div className="sn">Consap</div><div className="sl">garanzia statale fino all&apos;80% per under 36</div></div>
                <div className="sc r d1"><div className="si">📊</div><div className="sn">~2,9%</div><div className="sl">tasso fisso medio a marzo 2026</div></div>
                <div className="sc bl-bg r d2"><div className="si">⏱</div><div className="sn">30-60 gg</div><div className="sl">dall&apos;istruttoria all&apos;erogazione</div></div>
                <div className="sc r d3"><div className="si">💸</div><div className="sn">19%</div><div className="sl">detrazione interessi fino a 4.000€/anno</div></div>
              </div>
            </div>
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è un mutuo, in parole semplici</h2>
            <p>Un mutuo è un <strong>prestito a lungo termine</strong> che la banca ti dà per comprare casa. Tu restituisci i soldi un po&apos; alla volta, ogni mese, per 15, 20, 25 o 30 anni. Ogni rata che paghi è composta da due parti: una quota di capitale (il debito vero e proprio) e una quota di <Tip t="Il costo del prestito. È la percentuale annua che la banca ti addebita per averti prestato i soldi. Un tasso del 3% su 100.000€ significa circa 3.000€ di interessi all'anno.">interessi</Tip> (il costo del prestito).</p>
            <p>Per proteggersi, la banca mette un&apos;<Tip t="Un vincolo legale sull'immobile. Se non paghi il mutuo, la banca può prendere la casa e venderla per recuperare il credito. L'ipoteca dura quanto il mutuo e viene cancellata quando finisci di pagare.">ipoteca</Tip> sulla casa: se non paghi, può prenderla e venderla. Per questo si chiama &quot;mutuo ipotecario&quot;.</p>
            <p>Il mutuo &quot;prima casa&quot; è quello per l&apos;abitazione dove vivrai. Ha vantaggi fiscali importanti: imposta di registro ridotta al 2%, detrazione degli interessi al 19%, e accesso alla garanzia statale Consap.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>LTV (Loan to Value)</strong> — il rapporto tra l&apos;importo del mutuo e il valore della casa. Se la casa vale 200.000€ e chiedi 160.000€, il tuo LTV è 80%. Più è alto, più rischio per la banca, più alto il tasso.</p>
              <p><strong>TAN</strong> — Tasso Annuo Nominale. È il tasso di interesse &quot;puro&quot; del mutuo, senza contare i costi accessori.</p>
              <p><strong>TAEG</strong> — Tasso Annuo Effettivo Globale. Include il TAN più tutti i costi: perizia, istruttoria, assicurazioni obbligatorie. È il numero vero da confrontare tra le offerte.</p>
              <p><strong>Spread</strong> — il margine che la banca aggiunge al tasso di riferimento (Euribor per il variabile, IRS per il fisso). È il guadagno della banca.</p>
              <p><strong>Consap</strong> — Concessionaria Servizi Assicurativi Pubblici. Gestisce il Fondo di Garanzia Prima Casa dello Stato.</p>
              <p><strong>Surroga</strong> — trasferimento del mutuo a un&apos;altra banca per ottenere condizioni migliori. Gratuita per legge.</p>
              <p><strong>Perizia</strong> — la valutazione dell&apos;immobile fatta da un tecnico inviato dalla banca. Serve per confermare che la casa vale quanto dichiarato. Costa 200-400€.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi può chiederlo</div>
            <h2>Requisiti per ottenere un mutuo</h2>
            <p>Le banche valutano tre cose: chi sei, quanto guadagni e quanto vale la casa.</p>

            <div className="ib tip r"><div className="ib-t">👤 Requisiti personali</div>
              <p><strong>Reddito dimostrabile</strong> — serve un lavoro stabile. L&apos;ideale è un contratto a tempo indeterminato, ma anche i determinati funzionano (soprattutto con Consap). Ti chiederanno le ultime 2-3 buste paga e le dichiarazioni dei redditi.</p>
              <p><strong>Rata sostenibile</strong> — la regola d&apos;oro: la rata del mutuo non deve superare il <strong>30-35% del tuo reddito netto</strong>. Se guadagni 1.800€ al mese, la rata massima è circa 540-630€.</p>
              <p><strong>Nessuna segnalazione</strong> — se sei stato segnalato come cattivo pagatore in CRIF o altre centrali rischi, la banca probabilmente dirà no. Controlla la tua posizione prima di fare domanda.</p>
              <p><strong>Non possedere altre case</strong> — per le agevolazioni prima casa, non devi essere proprietario di altri immobili abitativi (quelli ereditati e ceduti ai familiari non contano).</p>
            </div>

            <div className="ib tip r"><div className="ib-t">🏠 Requisiti dell&apos;immobile</div>
              <p>La casa deve essere adibita ad <strong>abitazione principale</strong> (ci devi vivere). Non deve essere di lusso: sono escluse le categorie catastali A1 (signorili), A8 (ville) e A9 (castelli). L&apos;importo massimo con garanzia Consap è <strong>250.000€</strong>.</p>
            </div>
          </div>

          {/* CONSAP */}
          <div className="sec bh r" id="consap">
            <div className="sec-tag">Il vantaggio più grande</div>
            <h2>Garanzia Consap: il mutuo con lo Stato garante</h2>
            <p>Il <Tip t="Fondo di Garanzia per la Prima Casa, gestito da Consap per conto del Ministero dell'Economia. Lo Stato garantisce alla banca una parte del tuo mutuo, così la banca rischia meno e ti dà condizioni migliori.">Fondo di Garanzia Prima Casa</Tip> è lo strumento che cambia tutto per chi non ha un grande anticipo. Lo Stato si mette in mezzo tra te e la banca e dice: &quot;Se lui non paga, copro io una parte&quot;. Risultato: la banca rischia meno, ti dà il mutuo più facilmente e a tassi migliori.</p>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>CHI PUÒ ACCEDERE E QUANTA GARANZIA RICEVE</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Tutti i cittadini senza altra casa</div><div className="dcard-v">Garanzia 50% · max 250.000€</div></div>
                <div className="dcard"><div className="dcard-l">Under 36 con ISEE ≤ 40.000€</div><div className="dcard-v">Garanzia 80% · mutuo fino al 100%</div></div>
                <div className="dcard"><div className="dcard-l">Giovani coppie (almeno uno under 36)</div><div className="dcard-v">Garanzia 80% · con ISEE ≤ 40.000€</div></div>
                <div className="dcard"><div className="dcard-l">Genitori single con figli minori</div><div className="dcard-v">Garanzia 80% · con ISEE ≤ 40.000€</div></div>
                <div className="dcard"><div className="dcard-l">Famiglie con 3 figli + ISEE ≤ 40.000€</div><div className="dcard-v">Garanzia 80%</div></div>
                <div className="dcard"><div className="dcard-l">Famiglie con 4 figli + ISEE ≤ 40.000€</div><div className="dcard-v">Garanzia 85%</div></div>
                <div className="dcard"><div className="dcard-l">Famiglie con 5+ figli + ISEE ≤ 50.000€</div><div className="dcard-v">Garanzia 90%</div></div>
              </div>
            </div>

            <div className="ib warn r" style={{ marginTop: '24px' }}><div className="ib-t">⚠️ Garanzia ≠ regalo</div>
              <p>La garanzia Consap <strong>non è un contributo a fondo perduto</strong>. Se non paghi il mutuo, Consap copre la banca per la quota garantita, ma poi si rivale su di te. Sei comunque responsabile al 100% del debito. La garanzia serve a farti ottenere il mutuo, non a eliminare il rischio.</p>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Prorogato fino al 31 dicembre 2027</div>
              <p>La Legge di Bilancio 2025 ha rifinanziato il Fondo con <strong>670 milioni di euro</strong> per il triennio 2025-2027. Le agevolazioni fiscali extra per under 36 (esenzione registro, ipotecaria, catastale) <strong>non sono più in vigore dal 2025</strong>, ma restano le agevolazioni &quot;prima casa&quot; ordinarie: imposta di registro al 2% anziché 9%.</p>
            </div>
          </div>

          {/* TASSI */}
          <div className="sec r" id="tassi">
            <div className="sec-tag">La scelta più importante</div>
            <h2>Tasso fisso o variabile?</h2>
            <p>Questa è la decisione che influenza di più quanto pagherai. Ecco come funzionano.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>TASSO FISSO — La rata non cambia mai</div>
              <div className="db-row"><span>Come funziona</span><span>La rata resta uguale per tutta la durata del mutuo</span></div>
              <div className="db-row"><span>Riferimento</span><span>IRS (Interest Rate Swap) + spread della banca</span></div>
              <div className="db-row"><span>Tasso medio mar 2026</span><span>~2,8 – 3,1% (TAEG ~3,0 – 3,3%)</span></div>
              <div className="db-row"><span>Pro</span><span>Certezza totale: sai quanto paghi per 20-30 anni</span></div>
              <div className="db-row"><span>Contro</span><span>Parti un po&apos; più alto rispetto al variabile</span></div>
              <div className="db-row db-total"><span>Per chi è</span><span>Chi vuole dormire tranquillo</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>TASSO VARIABILE — La rata cambia nel tempo</div>
              <div className="db-row"><span>Come funziona</span><span>La rata sale o scende seguendo i tassi di mercato</span></div>
              <div className="db-row"><span>Riferimento</span><span>Euribor (3 o 6 mesi) + spread della banca</span></div>
              <div className="db-row"><span>Tasso medio mar 2026</span><span>~3,2 – 3,6% (ma fluttua)</span></div>
              <div className="db-row"><span>Pro</span><span>Può scendere se i tassi calano</span></div>
              <div className="db-row"><span>Contro</span><span>Può salire molto (nel 2023 Euribor era al 4%)</span></div>
              <div className="db-row db-total"><span>Per chi è</span><span>Chi ha margine economico per gestire aumenti</span></div>
            </div>

            <div className="ib tip r" style={{ marginTop: '20px' }}><div className="ib-t">💡 E il variabile con cap?</div>
              <p>Alcune banche offrono il <Tip t="Un tasso variabile con un tetto massimo (cap). La rata può scendere se i tassi calano, ma non può mai superare il cap. È un compromesso tra fisso e variabile, ma il tasso di partenza è un po' più alto del variabile puro.">variabile con cap</Tip>: un variabile con un tetto massimo. La rata può scendere ma non può mai superare un certo limite. Costa un po&apos; più del variabile puro, ma ti protegge dai rialzi estremi.</p>
            </div>
          </div>

          {/* COME RICHIEDERLO */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come richiedere il mutuo, passo per passo</h2>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Calcola quanto puoi permetterti</div><p>Prima di tutto: la rata non deve superare il 30-35% del tuo stipendio netto. Se guadagni 1.800€/mese, la rata massima è ~600€. Con un tasso al 3% su 25 anni, 600€/mese corrispondono a circa <strong>140.000€ di mutuo</strong>. Aggiungi il tuo anticipo e hai il budget massimo per la casa.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Confronta le offerte</div><p>Non andare dalla prima banca che trovi. Usa i comparatori online (MutuiOnline, Facile.it, MutuiSupermarket) per confrontare TAEG, costi di istruttoria e perizia. La differenza tra un tasso del 2,8% e del 3,2% su 150.000€ in 25 anni è circa <strong>12.000€ in più di interessi</strong>.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Prepara i documenti</div><p>Ti serviranno: <strong>documento d&apos;identità</strong> e codice fiscale, <strong>ultime 2-3 buste paga</strong>, <strong>ultima dichiarazione dei redditi</strong> (730 o CU), <strong>estratto conto</strong> degli ultimi 3-6 mesi, <strong>compromesso</strong> o proposta d&apos;acquisto. Se chiedi la garanzia Consap: anche l&apos;<strong>ISEE</strong> in corso di validità.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Presenta la domanda</div><p>Vai in banca (o fai domanda online) con tutti i documenti. Se chiedi la garanzia Consap, compila il <strong>modulo di accesso al Fondo</strong> (lo trovi in banca o sul sito Consap). La banca avvia l&apos;istruttoria: verifica reddito, controlla la centrale rischi, e manda un <strong>perito</strong> a valutare l&apos;immobile.</p></div></div>
              <div className="step r"><div className="step-n">5</div><div className="step-body"><div className="step-title">Attendi la delibera</div><p>La banca decide se concedere il mutuo. Con Consap, la banca invia la pratica e Consap ha <strong>20 giorni</strong> per rispondere. In totale, dall&apos;invio della domanda alla delibera passano <strong>2-4 settimane</strong>.</p></div></div>
              <div className="step r"><div className="step-n">6</div><div className="step-body"><div className="step-title">Rogito e erogazione</div><p>Se il mutuo è approvato, si va dal <strong>notaio</strong> per il rogito. Il mutuo viene erogato contestualmente all&apos;atto di compravendita. Da quel momento parti con le rate. Ricordati di spostare la <strong>residenza entro 18 mesi</strong> per mantenere le agevolazioni prima casa.</p></div></div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Marco, 29 anni, primo mutuo</h2>
            <p>Marco lavora come impiegato a Torino, guadagna 1.700€ netti al mese. Ha trovato un bilocale da 150.000€ e ha 15.000€ di risparmi. Ha meno di 36 anni e ISEE di 22.000€.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>LA SITUAZIONE DI MARCO</div>
              <div className="db-row"><span>Prezzo casa</span><span>150.000€</span></div>
              <div className="db-row"><span>Risparmi disponibili</span><span>15.000€</span></div>
              <div className="db-row"><span>Mutuo richiesto</span><span>150.000€ (100% con Consap)</span></div>
              <div className="db-row"><span>Garanzia Consap</span><span>80% (under 36, ISEE &lt; 40.000€)</span></div>
              <div className="db-row"><span>Durata</span><span>30 anni, tasso fisso 2,90%</span></div>
              <div className="db-row"><span>Rata mensile</span><span>~623€/mese</span></div>
              <div className="db-row"><span>Rapporto rata/stipendio</span><span>37% — al limite, ma fattibile</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>COSTI DA METTERE IN CONTO (OLTRE AL PREZZO)</div>
              <div className="db-row"><span>Notaio (rogito + mutuo)</span><span>~3.000 – 4.000€</span></div>
              <div className="db-row"><span>Imposta di registro (2%)</span><span>~1.700€ (sul valore catastale)</span></div>
              <div className="db-row"><span>Istruttoria banca</span><span>~600€</span></div>
              <div className="db-row"><span>Perizia</span><span>~350€</span></div>
              <div className="db-row"><span>Agenzia immobiliare (3%+IVA)</span><span>~5.500€</span></div>
              <div className="db-row db-total"><span>Totale costi extra</span><span>~11.000 – 12.000€</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>QUANTO RISPARMIA CON LE AGEVOLAZIONI</div>
              <div className="db-row"><span>Imposta registro (2% vs 9%)</span><span>Risparmio ~5.900€</span></div>
              <div className="db-row"><span>Detrazione interessi 730 (primo anno)</span><span>~760€ di rimborso</span></div>
              <div className="db-row"><span>Tassi Consap più bassi</span><span>~50-60 punti base sotto mercato</span></div>
              <div className="db-row db-total"><span>Marco usa i 15.000€</span><span>Per notaio, agenzia e costi extra</span></div>
            </div>
          </div>

          {/* ERRORI COMUNI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Guardare solo la rata, non il TAEG</div><p>Due mutui con la stessa rata possono costarti cifre molto diverse. Il TAEG include tutti i costi (istruttoria, perizia, assicurazioni). Confronta sempre il TAEG, non il TAN. La differenza può valere <strong>migliaia di euro</strong> in 25-30 anni.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Non calcolare i costi extra</div><p>Il prezzo della casa è solo l&apos;inizio. Notaio, imposte, agenzia, perizia, istruttoria: metti in conto un <strong>8-12% in più</strong> del prezzo. Se la casa costa 150.000€, servono almeno 12.000-18.000€ per le spese accessorie. Se non li hai, il mutuo al 100% non basta.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Firmare senza confrontare</div><p>La prima banca che ti propone il mutuo quasi mai è la migliore. Confronta almeno <strong>3-4 offerte</strong>. Anche 0,3% di differenza sul tasso, su 150.000€ in 25 anni, fa <strong>~8.000€ di interessi in più</strong>. Usa un comparatore online e poi negozia in filiale.</p></div>
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
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Tutta la procedura di acquisto dall&apos;inizio alla fine.</div><span className="rc-ar">→</span></a>
              <a href="/cambio-residenza" className="rc"><span className="rc-e">📄</span><div className="rc-t">Cambio residenza</div><div className="rc-d">Entro 18 mesi dal rogito per le agevolazioni.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Detrai il 19% degli interessi del mutuo.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.consap.it/fondo-prima-casa/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Consap — Fondo Prima Casa</div><div className="sbtool-d">Requisiti e modulo domanda</div></div></a>
            <a href="https://www.bancaditalia.it/compiti/vigilanza/avvisi-pub/avvisi-crif/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Banca d&apos;Italia</div><div className="sbtool-d">Centrale rischi e trasparenza</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/agevolprima-casa" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Agevolazioni prima casa</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
            <a href="/cambio-residenza" className="sbguide">📄 Cambio residenza<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="mutuo" />
      <Footer />
    </>
    </div>
  );
}
