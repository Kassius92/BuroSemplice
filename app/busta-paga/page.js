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
import CalcBustaPaga from '@/components/CalcBustaPaga';

export const metadata = {
  title: 'Busta Paga 2026: Come Leggerla, Voci, Dal Lordo al Netto',
  description: 'Busta paga 2026: come leggerla voce per voce, dal lordo al netto, trattenute IRPEF, contributi INPS, detrazioni, TFR, ferie e nuove aliquote. Guida gratuita.',
  keywords: ["busta paga", "come leggere busta paga", "busta paga 2026", "lordo netto", "stipendio netto", "trattenute busta paga", "IRPEF busta paga", "contributi INPS", "calcolo stipendio netto", "cedolino"],
  alternates: { canonical: 'https://zeroburocrazia.it/busta-paga' },
  openGraph: {
    type: 'article',
    title: 'Busta Paga 2026: Come Leggerla, Voci, Dal Lordo al Netto',
    description: 'Busta paga 2026: come leggerla, dal lordo al netto, IRPEF, INPS, detrazioni. Guida gratuita.',
    url: 'https://zeroburocrazia.it/busta-paga',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogbustapaga.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbustapaga.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'parti', label: 'Le 3 parti della busta paga' },
  { id: 'lordo-netto', label: 'Dal lordo al netto', bh: true },
  { id: 'voci', label: 'Le voci importanti' },
  { id: 'novita', label: 'Novit\u00e0 2026' },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Perch\u00e9 il mio netto \u00e8 cos\u00ec diverso dal lordo?", a: "Perch\u00e9 dal lordo vengono tolti: <strong>contributi INPS</strong> (~9,19%), <strong>IRPEF</strong> (dal 23% al 43% a scaglioni), <strong>addizionali regionali e comunali</strong>. In pratica, su 2.000\u20ac lordi restano circa 1.500-1.600\u20ac netti. Le detrazioni e il trattamento integrativo riducono un po\u2019 il peso." },
  { q: "Cos\u2019\u00e8 la RAL?", a: "La <strong>Retribuzione Annua Lorda</strong>: \u00e8 il tuo stipendio lordo annuo, comprese tredicesima e quattordicesima (se prevista). \u00c8 il numero che trovi nei contratti di lavoro e che le banche ti chiedono per il mutuo. Per passare dalla RAL al netto mensile, dividi per le mensilit\u00e0 e togli contributi e tasse." },
  { q: "Cosa sono gli scatti di anzianit\u00e0?", a: "Sono <strong>aumenti automatici</strong> del tuo stipendio base che maturano ogni 2-3 anni di lavoro nella stessa azienda (la cadenza dipende dal CCNL). Non sono enormi (20-30\u20ac lordi), ma si accumulano nel tempo." },
  { q: "Perch\u00e9 a dicembre il netto \u00e8 pi\u00f9 basso?", a: "Per il <strong>conguaglio fiscale</strong>. A dicembre il datore ricalcola le tasse sull\u2019intero anno. Se durante l\u2019anno hai pagato poca IRPEF (es. perch\u00e9 hai avuto un aumento), a dicembre ti trattengono la differenza. Pu\u00f2 funzionare anche al contrario: se hai pagato troppo, ricevi un rimborso." },
  { q: "Dove trovo ferie e permessi residui?", a: "Di solito nella <strong>parte bassa della busta paga</strong>, in una sezione dedicata. Trovi: ferie maturate, ferie godute, ferie residue. Stessa cosa per ROL (permessi), ex festivit\u00e0 e banca ore. Controlla ogni mese." },
  { q: "Il TFR dove lo vedo?", a: "Nella <strong>terza parte della busta paga</strong>, tra i dati riepilogativi. Trovi il TFR maturato nel mese e il totale accantonato. Se lo destini a un fondo pensione, vedrai il versamento al fondo invece dell\u2019accantonamento." },
  { q: "Cos\u2019\u00e8 il trattamento integrativo?", a: "\u00c8 l\u2019ex \u201cbonus Renzi\u201d. Per redditi fino a 15.000\u20ac spettano <strong>fino a 1.200\u20ac/anno</strong> (100\u20ac/mese). Per redditi tra 15.000\u20ac e 28.000\u20ac spetta in misura ridotta. Lo trovi come voce a parte nella busta paga, erogato mensilmente dal datore di lavoro." },
  { q: "Posso chiedere al datore di lavoro di spiegarmi la busta paga?", a: "<strong>S\u00ec, \u00e8 un tuo diritto.</strong> Il datore \u00e8 obbligato a consegnarti la busta paga e a spiegarti le voci se lo chiedi. Se non riesci a ottenere chiarimenti, puoi rivolgerti a un consulente del lavoro o al tuo sindacato." },
];

export default function PaginaBustaPaga() {
  const schemas = [
    articleSchema({
      title: 'Busta paga 2026: come leggerla, dal lordo al netto',
      description: 'Come leggere la busta paga nel 2026: voci, trattenute IRPEF, contributi INPS, detrazioni, TFR. Guida gratuita.',
      url: '/busta-paga',
      image: 'ogbustapaga.png',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-lavoro">
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
            <div className="cat-badge">💼 Lavoro</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>La <em>busta paga</em></h1>
            <p className="hero-sub">Come leggere la busta paga nel 2026: tutte le voci spiegate in modo semplice, dal lordo al netto, trattenute, contributi, detrazioni e novit&agrave;.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 12 min di lettura</span>
              <span className="pill pill-o">🆕 Nuove aliquote IRPEF 2026</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS &middot; Agenzia delle Entrate &middot; Legge di Bilancio 2026 (L. 199/2025)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">3</div><div className="hl">le parti principali<br/>della busta paga</div></div>
            <div className="hstat"><div className="hn">~35%</div><div className="hl">quanto &quot;perdi&quot;<br/>dal lordo al netto</div></div>
            <div className="hstat"><div className="hn">33%</div><div className="hl">nuova aliquota IRPEF<br/>2&deg; scaglione 2026</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/730" className="ps">🧾 Faccio il 730</a>
              <a href="/tfr" className="ps">💰 TFR</a>
              <a href="/dimissioni" className="ps">✍️ Dimissioni</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 INPS</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Agenzia Entrate</a>
              <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="ps">💼 Min. Lavoro</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">📄</div><div className="sn">Cedolino</div><div className="sl">il documento mensile del tuo stipendio</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">Lordo &rarr; Netto</div><div className="sl">il lordo meno contributi e tasse = netto</div></div>
                <div className="sc r d3"><div className="si">🏦</div><div className="sn">~9% INPS</div><div className="sl">contributi previdenziali a tuo carico</div></div>
                <div className="sc r d1"><div className="si">📊</div><div className="sn">23-43%</div><div className="sl">IRPEF progressiva per scaglioni</div></div>
                <div className="sc bl-bg r d2"><div className="si">🆕</div><div className="sn">33%</div><div className="sl">nuova aliquota 2&deg; scaglione 2026</div></div>
                <div className="sc r d3"><div className="si">📅</div><div className="sn">Ogni mese</div><div className="sl">il datore &egrave; obbligato a consegnartela</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la busta paga</h2>
            <p>La busta paga (o <Tip t="Il nome tecnico della busta paga. Cedolino, prospetto paga, busta paga: sono la stessa cosa.">cedolino</Tip>) &egrave; il documento che il tuo datore di lavoro ti d&agrave; ogni mese insieme allo stipendio. Spiega, voce per voce, come si arriva dal tuo stipendio <strong>lordo</strong> (quello scritto nel contratto) al <strong>netto</strong> (quello che trovi sul conto).</p>
            <p>Sembra un foglio pieno di numeri incomprensibili, ma segue una logica semplice: <span className="hl-text">Lordo &minus; Contributi INPS &minus; IRPEF &minus; Addizionali + Detrazioni = Netto</span>.</p>
            <p>&Egrave; un documento <strong>obbligatorio per legge</strong>: il datore deve consegnartelo ogni mese. Conservalo: ti serve per il 730, per chiedere un mutuo, per l&apos;ISEE e per verificare che tutto sia corretto.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il tuo stipendio annuo lordo, comprensivo di tredicesima/quattordicesima.</p>
              <p><strong>IRPEF</strong> &mdash; l&apos;imposta sui redditi delle persone fisiche. &Egrave; progressiva: pi&ugrave; guadagni, pi&ugrave; paghi (in percentuale).</p>
              <p><strong>Contributi INPS</strong> &mdash; la quota che paghi per la pensione e le tutele (malattia, NASpI, maternit&agrave;). Circa il 9,19% del lordo.</p>
              <p><strong>Imponibile fiscale</strong> &mdash; il lordo meno i contributi INPS. &Egrave; la base su cui si calcola l&apos;IRPEF.</p>
              <p><strong>Detrazioni</strong> &mdash; sconti sull&apos;IRPEF per lavoro dipendente e familiari a carico. Riducono le tasse che paghi.</p>
              <p><strong>Conguaglio</strong> &mdash; il ricalcolo di fine anno. A dicembre il datore verifica se hai pagato la giusta quantit&agrave; di tasse e contributi durante l&apos;anno.</p>
              <p><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto. Una quota accantonata ogni mese che ricevi quando lasci il lavoro.</p>
            </div>
          </div>

          {/* LE 3 PARTI */}
          <div className="sec r" id="parti">
            <div className="sec-tag">Struttura</div>
            <h2>Le 3 parti della busta paga</h2>

            <div className="ib tip r"><div className="ib-t">📋 Parte 1: Intestazione (chi sei e dove lavori)</div>
              <p>In alto trovi i <strong>dati dell&apos;azienda</strong> (nome, sede, P.IVA, posizione INPS/INAIL) e i <strong>tuoi dati</strong>: nome, codice fiscale, data di assunzione, qualifica, livello contrattuale, CCNL applicato. Controlla che siano corretti: un livello sbagliato significa uno stipendio sbagliato.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">💰 Parte 2: Competenze (quanto hai guadagnato)</div>
              <p>Qui trovi tutte le <strong>voci che formano il lordo</strong>: paga base, contingenza, scatti di anzianit&agrave;, superminimo, straordinari, indennit&agrave;, premi, ferie godute, malattia, permessi. La somma di tutto &egrave; il <strong>totale lordo del mese</strong>.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">📊 Parte 3: Trattenute e netto (quanto ti tolgono)</div>
              <p>Qui si passa dal lordo al netto. Trovi: <strong>contributi INPS</strong> a tuo carico (~9,19%), <strong>IRPEF</strong> (calcolata sull&apos;imponibile fiscale), <strong>addizionali regionali e comunali</strong>, eventuali <strong>detrazioni</strong> e il <strong>trattamento integrativo</strong>. In fondo: il <strong>netto in busta</strong> e i dati riepilogativi (TFR, ferie residue, progressivi annuali).</p>
            </div>
          </div>

          {/* DAL LORDO AL NETTO */}
          <div className="sec bh r" id="lordo-netto">
            <div className="sec-tag">Il calcolo</div>
            <h2>Dal lordo al netto: come funziona</h2>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>FORMULA SEMPLIFICATA</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">1. Stipendio lordo mensile</div><div className="dcard-v">Es. 2.000&euro;</div></div>
                <div className="dcard"><div className="dcard-l">2. &minus; Contributi INPS (~9,19%)</div><div className="dcard-v">&minus; 184&euro;</div></div>
                <div className="dcard"><div className="dcard-l">3. = Imponibile fiscale</div><div className="dcard-v">= 1.816&euro;</div></div>
                <div className="dcard"><div className="dcard-l">4. &minus; IRPEF lorda (per scaglioni)</div><div className="dcard-v">&minus; ~365&euro;</div></div>
                <div className="dcard"><div className="dcard-l">5. + Detrazioni lavoro dipendente</div><div className="dcard-v">+ ~130&euro;</div></div>
                <div className="dcard"><div className="dcard-l">6. &minus; Addizionali reg./com.</div><div className="dcard-v">&minus; ~30&euro;</div></div>
              </div>
              <div className="dtotals" style={{ marginTop: '16px' }}>
                <div className="dt-col"><div className="dt-l" style={{ color: 'var(--blue)' }}>Netto in busta</div><div className="dt-n" style={{ color: 'var(--cream)' }}>~1.551&euro;</div></div>
                <div className="dt-col"><div className="dt-l" style={{ color: 'rgba(251,248,241,.5)' }}>Trattenuto sul lordo</div><div className="dt-n" style={{ color: 'var(--blue)' }}>~22%</div></div>
              </div>
            </div>

            <div className="ib tip r" style={{ marginTop: '24px' }}><div className="ib-t">💡 Aliquote IRPEF 2026 (3 scaglioni)</div>
              <p><strong>23%</strong> fino a 28.000&euro; di reddito annuo &mdash; <strong>33%</strong> da 28.001&euro; a 50.000&euro; (era 35% nel 2024) &mdash; <strong>43%</strong> oltre 50.000&euro;. La riduzione dal 35% al 33% del secondo scaglione &egrave; la novit&agrave; principale del 2026: significa qualche euro in pi&ugrave; in busta per chi guadagna tra 28.000 e 50.000&euro;.</p>
            </div>
          </div>

          {/* VOCI IMPORTANTI */}
          <div className="sec r" id="voci">
            <div className="sec-tag">Dettaglio</div>
            <h2>Le voci pi&ugrave; importanti da controllare</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Paga base + contingenza</strong> &mdash; il minimo previsto dal tuo CCNL per il tuo livello. Se il tuo stipendio &egrave; sotto questo importo, c&apos;&egrave; un problema.</div>
              <div className="gl-item"><strong>Superminimo</strong> &mdash; la parte in pi&ugrave; rispetto al minimo contrattuale, concordata individualmente. Pu&ograve; essere &quot;assorbibile&quot; (sparisce con gli aumenti CCNL) o &quot;non assorbibile&quot; (resta fisso).</div>
              <div className="gl-item"><strong>Straordinari</strong> &mdash; le ore lavorate oltre l&apos;orario contrattuale. Sono maggiorate: +15% a +50% a seconda del CCNL, dell&apos;ora e del giorno (feriale, notturno, festivo).</div>
              <div className="gl-item"><strong>Ferie e ROL</strong> &mdash; ferie maturate, godute e residue. I ROL (Riduzione Orario di Lavoro) sono i permessi retribuiti. Controlla che siano corretti.</div>
              <div className="gl-item"><strong>Trattamento integrativo</strong> &mdash; l&apos;ex &quot;bonus Renzi&quot;. Fino a 100&euro;/mese per redditi sotto 15.000&euro;, in misura ridotta fino a 28.000&euro;.</div>
              <div className="gl-item"><strong>TFR maturato</strong> &mdash; la quota accantonata nel mese (circa 1/13,5 del lordo). Si accumula e lo ricevi quando lasci il lavoro o lo versi a un fondo pensione.</div>
            </div>
          </div>

          {/* NOVITÀ 2026 */}
          <div className="sec r" id="novita">
            <div className="sec-tag">Cosa cambia</div>
            <h2>Novit&agrave; in busta paga nel 2026</h2>
            <div className="ib tip r"><div className="ib-t">🆕 Secondo scaglione IRPEF: dal 35% al 33%</div>
              <p>Per i redditi tra 28.001&euro; e 50.000&euro;, l&apos;aliquota scende di 2 punti. Impatto concreto: circa <strong>20-40&euro; in pi&ugrave; al mese</strong> per chi ricade in quella fascia. Se guadagni meno di 28.000&euro; o pi&ugrave; di 50.000&euro;, l&apos;effetto &egrave; nullo o minimo.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">🆕 Taglio del cuneo fiscale strutturale</div>
              <p>Lo sgravio contributivo introdotto negli anni precedenti diventa <strong>strutturale</strong>. Per redditi fino a ~35.000&euro;, i contributi INPS a carico del lavoratore sono ridotti, aumentando il netto. L&apos;importo esatto dipende dalla fascia di reddito.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">🆕 Bonus fino a 960&euro; per redditi sotto 20.000&euro;</div>
              <p>Per i lavoratori dipendenti con reddito complessivo fino a 20.000&euro;, &egrave; previsto un importo variabile fino a <strong>960&euro;/anno</strong> escluso dalla base imponibile. Lo troverai come voce specifica nel cedolino.</p>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec bh r" id="calcolatore">
            <div className="sec-tag">Strumento</div>
            <h2>Calcola il tuo netto in busta</h2>
            <p>Inserisci la tua RAL per avere una stima del netto mensile, con il dettaglio di INPS, IRPEF e addizionali.</p>
            <CalcBustaPaga />
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio: Laura, impiegata, RAL 28.000&euro;</h2>
            <p>Laura lavora come impiegata con CCNL Commercio, livello 4. RAL 28.000&euro;, 14 mensilit&agrave;. Single, nessun figlio a carico. Ecco la sua busta paga tipo.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>BUSTA PAGA DI LAURA (mese ordinario)</div>
              <div className="db-row"><span>Paga base + contingenza</span><span>1.618&euro;</span></div>
              <div className="db-row"><span>Scatti anzianit&agrave; (2)</span><span>44&euro;</span></div>
              <div className="db-row"><span>Superminimo</span><span>338&euro;</span></div>
              <div className="db-row db-total"><span>Totale lordo</span><span>2.000&euro;</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>TRATTENUTE</div>
              <div className="db-row"><span>Contributi INPS (9,19%)</span><span>&minus;184&euro;</span></div>
              <div className="db-row"><span>IRPEF lorda</span><span>&minus;365&euro;</span></div>
              <div className="db-row"><span>Detrazioni lavoro dipendente</span><span>+130&euro;</span></div>
              <div className="db-row"><span>Addizionale regionale</span><span>&minus;22&euro;</span></div>
              <div className="db-row"><span>Addizionale comunale</span><span>&minus;8&euro;</span></div>
              <div className="db-row db-total"><span>Netto in busta</span><span>~1.551&euro;</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>DATI UTILI</div>
              <div className="db-row"><span>TFR maturato nel mese</span><span>~148&euro;</span></div>
              <div className="db-row"><span>Ferie residue</span><span>12 giorni</span></div>
              <div className="db-row"><span>ROL residui</span><span>24 ore</span></div>
              <div className="db-row db-total"><span>Stipendio annuo netto</span><span>~21.700&euro; (14 mensilit&agrave;)</span></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Cosa controllare ogni mese</h2>
            <div className="ib warn r"><div className="ib-t">✅ Controlla il livello e il CCNL</div><p>Se il livello in busta paga non corrisponde a quello del tuo contratto, lo stipendio base &egrave; sbagliato. &Egrave; l&apos;errore pi&ugrave; costoso e pi&ugrave; frequente.</p></div>
            <div className="ib warn r"><div className="ib-t">✅ Verifica ore e straordinari</div><p>Confronta le ore lavorate con le tue timbrature. Gli straordinari devono essere pagati con la maggiorazione prevista dal CCNL. Se non compaiono, segnalalo.</p></div>
            <div className="ib warn r"><div className="ib-t">✅ Tieni d&apos;occhio ferie e permessi</div><p>Le ferie maturano e si accumulano. Se a fine anno hai molte ferie non godute, il datore potrebbe obbligarti a farle. I ROL non goduti vengono pagati a fine anno o a fine rapporto.</p></div>
            <div className="ib warn r"><div className="ib-t">✅ Destinazione del TFR</div><p>Il <Tip t="Trattamento di Fine Rapporto: circa 1 mensilità per ogni anno lavorato. Puoi lasciarlo in azienda o versarlo in un fondo pensione. La scelta è fatta nei primi 6 mesi di assunzione.">TFR</Tip> pu&ograve; restare in azienda o andare a un fondo pensione. Verifica che la destinazione sia quella che hai scelto. Se non hai mai fatto una scelta esplicita, per le aziende sopra i 50 dipendenti il TFR finisce automaticamente nel fondo pensione INPS (Fondo Cometa, Fonchim, ecc.).</p></div>
            <div className="ib warn r"><div className="ib-t">✅ Detrazioni per familiari a carico</div><p>Se hai un coniuge o figli con reddito sotto 2.840,51&euro; (4.000&euro; per figli sotto 24 anni), hai diritto a detrazioni che riducono l&apos;IRPEF. Verifica che siano applicate correttamente. Per i figli sotto 21 anni, le detrazioni sono sostituite dall&apos;<a href="/assegno-unico">assegno unico</a>.</p></div>
            <div className="ib warn r"><div className="ib-t">✅ Tredicesima e quattordicesima</div><p>La <strong>tredicesima</strong> (obbligatoria per tutti) viene maturata mensilit&agrave; per mensilit&agrave; e pagata a dicembre. La <strong>quattordicesima</strong> non &egrave; per tutti: dipende dal CCNL (prevista nel Commercio e Turismo, non nel Metalmeccanico). Controlla che le mensilit&agrave; aggiuntive compaiano nel cedolino annuale.</p></div>
          </div>

          {/* COSA FARE SE È SBAGLIATA */}
          <div className="sec r">
            <div className="sec-tag">I tuoi diritti</div>
            <h2>La busta paga &egrave; sbagliata: cosa fare</h2>
            <p>Se trovi un errore nella busta paga, hai diritto a farlo correggere. Ecco i passaggi:</p>
            <div className="glossary">
              <div className="gl-item"><strong>1. Segnala per iscritto</strong> &mdash; invia un&apos;email (o PEC) all&apos;ufficio paghe o all&apos;HR con il dettaglio dell&apos;errore. Conserva sempre una copia della comunicazione.</div>
              <div className="gl-item"><strong>2. Chiedi il conguaglio</strong> &mdash; l&apos;azienda deve correggere nella busta paga successiva o emettere un cedolino di conguaglio. I tempi dipendono dalla complessit&agrave;: errori semplici si risolvono in 1 mese, differenze CCNL possono richiedere pi&ugrave; tempo.</div>
              <div className="gl-item"><strong>3. Se l&apos;azienda non corregge</strong> &mdash; puoi rivolgerti a un sindacato o a un consulente del lavoro. In ultima istanza, puoi fare causa al Giudice del Lavoro. Il termine di prescrizione per le differenze retributive &egrave; di <strong>5 anni</strong>.</div>
            </div>
            <div className="ib tip r"><div className="ib-t">💡 Conserva tutte le buste paga</div>
              <p>Tieni una copia digitale di ogni cedolino, almeno per 5 anni. Ti serviranno per verificare la correttezza del CU (Certificazione Unica) a febbraio, per il <a href="/730">730</a>, e in caso di contenzioso con il datore di lavoro. Molte aziende usano portali online dove puoi scaricare i cedolini: salvali regolarmente.</p>
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
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Recupera le detrazioni che non vedi in busta.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/tfr" className="rc"><span className="rc-e">💰</span><div className="rc-t">TFR</div><div className="rc-d">Quanto hai accantonato e come funziona.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/dimissioni" className="rc"><span className="rc-e">✍️</span><div className="rc-t">Dimissioni</div><div className="rc-d">Cosa succede alla busta paga quando te ne vai.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Contributi e previdenza</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Aliquote IRPEF e detrazioni</div></div></a>
            <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">💼</span><div><div className="sbtool-n">Min. Lavoro</div><div className="sbtool-d">Diritti dei lavoratori</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">&rarr;</span></a>
            <a href="/tfr" className="sbguide">💰 TFR<span className="sbg-ar">&rarr;</span></a>
            <a href="/dimissioni" className="sbguide">✍️ Dimissioni<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
