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

export const metadata = {
  title: 'Bonus Mobili 2026: Come Funziona, Cosa Si Pu\u00f2 Comprare, Detrazione 50%',
  description: 'Bonus mobili 2026: detrazione 50% fino a 5.000\u20ac per mobili ed elettrodomestici con ristrutturazione. Cosa si pu\u00f2 comprare, come pagare, come detrarre. Guida gratuita.',
  keywords: ["bonus mobili", "bonus mobili 2026", "detrazione mobili", "bonus elettrodomestici", "bonus mobili ristrutturazione", "bonus mobili come funziona", "bonus arredi", "detrazione 50% mobili", "bonus mobili 5000 euro", "bonus mobili 730"],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-mobili' },
  openGraph: {
    type: 'article',
    title: 'Bonus Mobili 2026: Come Funziona, Cosa Si Pu\u00f2 Comprare, Detrazione 50%',
    description: 'Bonus mobili 2026: detrazione 50% fino a 5.000\u20ac per mobili ed elettrodomestici. Guida gratuita.',
    url: 'https://zeroburocrazia.it/bonus-mobili',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogbonusmobili.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonus Mobili 2026: Come Funziona, Detrazione 50%',
    images: ['https://zeroburocrazia.it/ogbonusmobili.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'cosa-compro', label: 'Cosa puoi comprare', bh: true },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'come-pagare', label: 'Come pagare' },
  { id: 'come-detrarre', label: 'Come detrarre nel 730' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso avere il bonus mobili senza ristrutturazione?", a: "<strong>No.</strong> Il bonus mobili esiste solo se hai fatto (o stai facendo) lavori di ristrutturazione sull\u2019immobile. Senza ristrutturazione, niente bonus. Deve essere almeno manutenzione straordinaria." },
  { q: "La manutenzione ordinaria conta?", a: "<strong>No per le singole unit\u00e0 abitative.</strong> Tinteggiare le pareti, cambiare i pavimenti o sostituire gli infissi (senza opere murarie) non basta. Serve manutenzione straordinaria, restauro, risanamento o ristrutturazione vera e propria. Eccezione: la manutenzione ordinaria sulle parti comuni condominiali d\u00e0 diritto al bonus per gli arredi delle parti comuni." },
  { q: "Posso comprare i mobili prima di iniziare i lavori?", a: "<strong>No.</strong> La data di inizio lavori deve essere anteriore a quella dell\u2019acquisto dei mobili. Se compri il divano il 10 marzo e i lavori iniziano il 15 marzo, perdi il bonus. Prima i lavori, poi i mobili." },
  { q: "Devo usare il bonifico parlante?", a: "<strong>No, non serve.</strong> A differenza del bonus ristrutturazione, per il bonus mobili va bene un bonifico ordinario, una carta di credito o una carta di debito. L\u2019importante \u00e8 che il pagamento sia tracciabile: niente contanti, assegni o altri mezzi." },
  { q: "Se ristruttura uno e compra l\u2019altro?", a: "Il bonus spetta a <strong>chi sostiene effettivamente la spesa</strong>. Se il coniuge paga i mobili ma la ristrutturazione \u00e8 intestata all\u2019altro, il bonus spetta a chi ha pagato i mobili, purch\u00e9 sia convivente o familiare del titolare della ristrutturazione." },
  { q: "Posso comprare mobili per una stanza diversa da quella ristrutturata?", a: "<strong>S\u00ec.</strong> I mobili possono essere destinati a qualsiasi ambiente dell\u2019immobile ristrutturato, non per forza alla stanza dove sono stati fatti i lavori. Ristrutturi il bagno? Puoi comprare il divano per il soggiorno." },
  { q: "Il bonus vale anche per le seconde case?", a: "<strong>S\u00ec.</strong> A differenza di altri bonus casa, il bonus mobili si applica ugualmente a prima e seconda casa, con la stessa aliquota del 50% e lo stesso tetto di 5.000\u20ac." },
  { q: "Devo comunicare qualcosa all\u2019ENEA?", a: "Solo per alcuni elettrodomestici: forni, frigoriferi, lavatrici, lavastoviglie, piani cottura elettrici, lavasciuga. Ma la mancata comunicazione <strong>non fa perdere la detrazione</strong> (risoluzione Agenzia Entrate 46/E del 2019)." },
];

export default function PaginaBonusMobili() {
  const schemas = [
    articleSchema({
      title: 'Bonus mobili 2026: come funziona, cosa comprare, come detrarre',
      description: 'Bonus mobili 2026: detrazione 50% fino a 5.000\u20ac per mobili ed elettrodomestici con ristrutturazione. Guida gratuita aggiornata.',
      url: '/bonus-mobili',
      image: 'ogbonusmobili.png',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-casa">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
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
            <h1>Bonus <em>mobili</em></h1>
            <p className="hero-sub">Come funziona il bonus mobili nel 2026: detrazione 50% fino a 5.000&euro; per mobili ed elettrodomestici se hai ristrutturato. Cosa puoi comprare, come pagare, come detrarre.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-o">🪑 Tetto 5.000&euro; per il 2026</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · Legge di Bilancio 2026 (L. 199/2025) · Art. 16 D.L. 63/2013</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">50%</div><div className="hl">detrazione IRPEF<br/>su mobili e elettrodomestici</div></div>
            <div className="hstat"><div className="hn">5.000&euro;</div><div className="hl">tetto massimo<br/>di spesa per il 2026</div></div>
            <div className="hstat"><div className="hn">2.500&euro;</div><div className="hl">risparmio massimo<br/>in 10 rate annuali</div></div>
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
              <a href="/ristrutturare" className="ps">🔨 Ristrutturare casa</a>
              <a href="/730" className="ps">🧾 Faccio il 730</a>
              <a href="/compro-casa" className="ps">🏠 Compro casa</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Agenzia Entrate</a>
              <a href="https://detrazionifiscali.enea.it/" target="_blank" rel="noopener noreferrer" className="ps">🌿 Portale ENEA</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Guida ufficiale</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🪑</div><div className="sn">50%</div><div className="sl">detrazione su mobili e grandi elettrodomestici</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">5.000&euro;</div><div className="sl">tetto massimo di spesa nel 2026</div></div>
                <div className="sc r d3"><div className="si">🔨</div><div className="sn">Ristrutturazione</div><div className="sl">obbligatoria per accedere al bonus</div></div>
                <div className="sc r d1"><div className="si">💳</div><div className="sn">Carta o bonifico</div><div className="sl">niente contanti, niente assegni</div></div>
                <div className="sc bl-bg r d2"><div className="si">📅</div><div className="sn">10 rate</div><div className="sl">rimborso in 10 anni nel 730</div></div>
                <div className="sc r d3"><div className="si">🏠</div><div className="sn">Anche 2&ordf; casa</div><div className="sl">stesso bonus, stessa aliquota</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il bonus mobili</h2>
            <p>Il bonus mobili &egrave; una <Tip t="Uno sconto sulle tasse che paghi (IRPEF). Non ti danno soldi in mano: paghi meno tasse nella dichiarazione dei redditi. Se hai diritto a 250&euro; di detrazione, paghi 250&euro; in meno di IRPEF.">detrazione IRPEF</Tip> del <strong>50%</strong> su quello che spendi per comprare mobili e grandi elettrodomestici nuovi. Il tetto massimo di spesa &egrave; <strong>5.000&euro;</strong>, quindi il risparmio massimo &egrave; di 2.500&euro;, spalmato in 10 rate annuali da 250&euro; nel 730.</p>
            <p>Il punto fondamentale: questo bonus <strong>non &egrave; autonomo</strong>. Funziona solo se hai fatto (o stai facendo) lavori di ristrutturazione sull&apos;immobile dove metterai i mobili. Senza ristrutturazione, il bonus non esiste. &Egrave; un &quot;bonus agganciato&quot; al <Link href="/ristrutturare">bonus ristrutturazione</Link>.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Detrazione IRPEF</strong> &mdash; uno sconto sulle tasse che paghi. Lo recuperi nella dichiarazione dei redditi (730), non come rimborso diretto.</p>
              <p><strong>Manutenzione straordinaria</strong> &mdash; lavori che modificano struttura o impianti: rifacimento bagno, sostituzione impianto elettrico/idraulico, apertura di porte interne. &Egrave; il requisito minimo per il bonus.</p>
              <p><strong>Classe energetica</strong> &mdash; l&apos;etichetta che indica quanto consuma un elettrodomestico. Per il bonus servono classi specifiche: A per forni, E per lavatrici, F per frigoriferi.</p>
              <p><strong>Bonifico parlante</strong> &mdash; il bonifico speciale per le ristrutturazioni con causale, codice fiscale e P.IVA. Per il bonus mobili <strong>non serve</strong>: basta un bonifico ordinario o carta.</p>
              <p><strong>ENEA</strong> &mdash; Agenzia Nazionale per le Nuove Tecnologie, l&apos;Energia e lo Sviluppo Economico Sostenibile. Per alcuni elettrodomestici va fatta una comunicazione (ma non &egrave; obbligatoria a pena di decadenza).</p>
            </div>
          </div>

          {/* COSA PUOI COMPRARE */}
          <div className="sec bh r" id="cosa-compro">
            <div className="sec-tag">La lista</div>
            <h2>Cosa puoi comprare con il bonus</h2>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>✅ MOBILI AMMESSI</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Cucine</div><div className="dcard-v">Complete o componibili</div></div>
                <div className="dcard"><div className="dcard-l">Letti e materassi</div><div className="dcard-v">Matrimoniali, singoli, reti</div></div>
                <div className="dcard"><div className="dcard-l">Armadi e cassettiere</div><div className="dcard-v">Anche su misura</div></div>
                <div className="dcard"><div className="dcard-l">Divani e poltrone</div><div className="dcard-v">Anche divani letto</div></div>
                <div className="dcard"><div className="dcard-l">Tavoli, sedie, librerie</div><div className="dcard-v">Credenze, comodini</div></div>
                <div className="dcard"><div className="dcard-l">Mobili bagno</div><div className="dcard-v">Arredo bagno nuovo</div></div>
                <div className="dcard"><div className="dcard-l">Lampadari</div><div className="dcard-v">Illuminazione d&apos;arredo</div></div>
                <div className="dcard"><div className="dcard-l">Trasporto e montaggio</div><div className="dcard-v">Inclusi nel tetto di 5.000&euro;</div></div>
              </div>
            </div>

            <div className="dblock" style={{ marginTop: '24px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>✅ ELETTRODOMESTICI AMMESSI (con classe minima)</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Forni</div><div className="dcard-v">Classe A o superiore</div></div>
                <div className="dcard"><div className="dcard-l">Frigoriferi e congelatori</div><div className="dcard-v">Classe F o superiore</div></div>
                <div className="dcard"><div className="dcard-l">Lavatrici e lavasciuga</div><div className="dcard-v">Classe E o superiore</div></div>
                <div className="dcard"><div className="dcard-l">Lavastoviglie</div><div className="dcard-v">Classe E o superiore</div></div>
                <div className="dcard"><div className="dcard-l">Asciugatrici</div><div className="dcard-v">Se prevista etichetta</div></div>
                <div className="dcard"><div className="dcard-l">Condizionatori</div><div className="dcard-v">Apparecchi climatizzazione</div></div>
                <div className="dcard"><div className="dcard-l">Piani cottura elettrici</div><div className="dcard-v">Induzione o vetroceramica</div></div>
                <div className="dcard"><div className="dcard-l">Stufe e radiatori elettrici</div><div className="dcard-v">Se prevista etichetta</div></div>
              </div>
            </div>

            <div className="ib warn r" style={{ marginTop: '24px' }}><div className="ib-t">❌ Non rientrano nel bonus</div>
              <p>Porte e portoni, pavimenti e parquet, tende e tendaggi, complementi d&apos;arredo decorativi, mobili usati o rigenerati. Questi sono esclusi anche se li compri durante una ristrutturazione.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Condizioni</div>
            <h2>Requisiti per accedere al bonus</h2>
            <p>Tre condizioni, tutte obbligatorie:</p>
            <div className="ib tip r"><div className="ib-t">1. Ristrutturazione in corso o recente</div>
              <p>Devi aver avviato lavori di <strong>manutenzione straordinaria, restauro, risanamento conservativo o ristrutturazione</strong> sull&apos;immobile. Per acquisti nel 2026, i lavori devono essere iniziati dal <strong>1&deg; gennaio 2025</strong>. La data di inizio lavori deve essere <strong>precedente</strong> alla data di acquisto dei mobili.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">2. Pagamento tracciabile</div>
              <p>Devi pagare con <strong>bonifico bancario/postale, carta di credito o carta di debito</strong>. Niente contanti, niente assegni. Non serve il &quot;bonifico parlante&quot; delle ristrutturazioni: va bene un bonifico ordinario.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">3. Conservare i documenti</div>
              <p>Tieni: la <strong>fattura</strong> (o scontrino parlante) con natura, qualit&agrave; e quantit&agrave; dei beni, la <strong>ricevuta del pagamento</strong> (bonifico, estratto conto carta), e la <strong>prova dell&apos;inizio lavori</strong> (titolo abilitativo, comunicazione ASL, o dichiarazione sostitutiva).</p>
            </div>
          </div>

          {/* COME PAGARE */}
          <div className="sec r" id="come-pagare">
            <div className="sec-tag">Pagamento</div>
            <h2>Come pagare per non perdere il bonus</h2>
            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>METODI DI PAGAMENTO</div>
              <div className="db-row"><span>✅ Carta di credito</span><span>Il pi&ugrave; semplice</span></div>
              <div className="db-row"><span>✅ Carta di debito (bancomat)</span><span>OK anche contactless</span></div>
              <div className="db-row"><span>✅ Bonifico ordinario</span><span>Non serve il &quot;parlante&quot;</span></div>
              <div className="db-row"><span>✅ Finanziamento a rate</span><span>Se la finanziaria paga tracciabile</span></div>
              <div className="db-row"><span>❌ Contanti</span><span>Mai ammessi</span></div>
              <div className="db-row"><span>❌ Assegni</span><span>Mai ammessi</span></div>
              <div className="db-row db-total"><span>Data che conta</span><span>La data di addebito della carta o del bonifico</span></div>
            </div>
          </div>

          {/* COME DETRARRE */}
          <div className="sec r" id="come-detrarre">
            <div className="sec-tag">Dichiarazione</div>
            <h2>Come detrarre nel 730</h2>
            <p>Il bonus mobili si recupera nella <strong>dichiarazione dei redditi</strong> (730 o Modello Redditi). Non &egrave; un rimborso immediato: &egrave; uno sconto sulle tasse che paghi, spalmato in 10 anni.</p>
            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Raccogli i documenti</div><p>Fattura dei mobili/elettrodomestici + ricevuta del pagamento + prova inizio lavori di ristrutturazione.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Compila il 730</div><p>Indica le spese nel <strong>Quadro E, Sezione III-A</strong>. Se usi la precompilata, verifica che i dati siano corretti. Inserisci anche i dati della ristrutturazione collegata.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Ricevi il rimborso in 10 rate</div><p>Se hai speso 5.000&euro;, recuperi 250&euro;/anno per 10 anni come sconto sulle tasse. Il primo rimborso arriva con il 730 dell&apos;anno successivo alla spesa.</p></div></div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Valentina ristruttura il bagno</h2>
            <p>Valentina ha rifatto il bagno del suo appartamento a febbraio 2025 (manutenzione straordinaria: impianto idraulico e piastrelle). A marzo 2026 compra mobili nuovi.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>GLI ACQUISTI DI VALENTINA</div>
              <div className="db-row"><span>Divano nuovo</span><span>1.200&euro;</span></div>
              <div className="db-row"><span>Letto matrimoniale + materasso</span><span>1.800&euro;</span></div>
              <div className="db-row"><span>Lavatrice classe E</span><span>650&euro;</span></div>
              <div className="db-row"><span>Tavolo e 4 sedie</span><span>900&euro;</span></div>
              <div className="db-row"><span>Trasporto e montaggio</span><span>250&euro;</span></div>
              <div className="db-row db-total"><span>Totale speso</span><span>4.800&euro; (sotto il tetto di 5.000&euro;)</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>QUANTO RISPARMIA</div>
              <div className="db-row"><span>Detrazione 50%</span><span>2.400&euro;</span></div>
              <div className="db-row"><span>Rimborso annuale (x 10 anni)</span><span>240&euro;/anno</span></div>
              <div className="db-row"><span>Pagamento</span><span>Carta di credito ✓</span></div>
              <div className="db-row"><span>Documenti</span><span>4 fatture + estratto conto carta ✓</span></div>
              <div className="db-row db-total"><span>Dove lo mette nel 730</span><span>Quadro E, Sezione III-A (dal 730/2027)</span></div>
            </div>
          </div>

          {/* ERRORI COMUNI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Comprare i mobili prima di iniziare i lavori</div><p>La data di inizio lavori deve essere <strong>precedente</strong> alla data di acquisto. Se compri il divano a gennaio e i lavori iniziano a febbraio, perdi il bonus su quel divano.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Pagare in contanti &quot;tanto ho la fattura&quot;</div><p>La fattura non basta. Serve il pagamento tracciabile: carta o bonifico. Se paghi in contanti, anche con fattura regolare, <strong>perdi la detrazione</strong>.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Pensare che basti la tinteggiatura</div><p>La manutenzione ordinaria (tinteggiare, cambiare le piastrelle senza toccare gli impianti) <strong>non d&agrave; diritto</strong> al bonus mobili. Servono lavori pi&ugrave; importanti: almeno manutenzione straordinaria.</p></div>
          </div>

          {/* CASI PARTICOLARI */}
          <div className="sec r">
            <div className="sec-tag">Situazioni frequenti</div>
            <h2>Casi particolari</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Due lavori nello stesso anno</strong> &mdash; se fai due interventi di ristrutturazione distinti sullo stesso immobile, il tetto di 5.000&euro; resta unico per l&apos;anno. Non si raddoppia.</div>
              <div className="gl-item"><strong>Due immobili diversi</strong> &mdash; se ristrutturi due appartamenti, hai <strong>due bonus distinti</strong>, ciascuno con il tetto di 5.000&euro;. Il bonus &egrave; legato all&apos;intervento edilizio, non alla persona.</div>
              <div className="gl-item"><strong>Convivente o coniuge</strong> &mdash; anche chi non &egrave; proprietario ma convive nell&apos;immobile ristrutturato pu&ograve; usufruire del bonus, purch&eacute; sia lui/lei a sostenere le spese per mobili ed elettrodomestici con pagamento tracciabile a proprio nome.</div>
              <div className="gl-item"><strong>Mobili per una stanza diversa da quella ristrutturata</strong> &mdash; s&igrave;, si pu&ograve; fare. Se ristrutturi il bagno, puoi comprare un divano per il soggiorno con il bonus. L&apos;importante &egrave; che i lavori siano stati fatti sullo stesso immobile.</div>
              <div className="gl-item"><strong>Acquisti online</strong> &mdash; il bonus vale anche per gli acquisti su siti e-commerce, purch&eacute; paghi con carta di credito/debito o bonifico e conservi la <strong>fattura</strong> (non basta la conferma d&apos;ordine) e la <strong>ricevuta del pagamento</strong>.</div>
              <div className="gl-item"><strong>Cucina su misura</strong> &mdash; detraibile al 100%, compresi i lavori di installazione. La cucina &egrave; tra gli acquisti pi&ugrave; comuni con il bonus mobili. Anche gli elettrodomestici inclusi (forno, piano cottura) rientrano, se di classe energetica adeguata.</div>
            </div>
          </div>

          {/* DOCUMENTI DA CONSERVARE */}
          <div className="sec r">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti da conservare (per 15 anni)</h2>
            <p>L&apos;Agenzia delle Entrate pu&ograve; chiederti i documenti fino a 5 anni dopo la dichiarazione, ma la detrazione si spalma su 10 anni &mdash; quindi conserva tutto per almeno <strong>15 anni</strong>:</p>
            <div className="glossary">
              <div className="gl-item"><strong>Fattura o scontrino parlante</strong> &mdash; deve riportare la natura, qualit&agrave; e quantit&agrave; dei beni acquistati e il codice fiscale dell&apos;acquirente.</div>
              <div className="gl-item"><strong>Ricevuta del pagamento tracciabile</strong> &mdash; estratto conto della carta, ricevuta del bonifico o del pagamento a rate.</div>
              <div className="gl-item"><strong>Comunicazione all&apos;ENEA</strong> &mdash; obbligatoria solo per gli <strong>elettrodomestici</strong> (forni, lavatrici, lavastoviglie, ecc.). Va fatta online su enea.it entro 90 giorni dalla data di acquisto.</div>
              <div className="gl-item"><strong>Titolo abilitativo della ristrutturazione</strong> &mdash; CILA, SCIA, o permesso di costruire. Oppure autocertificazione con data di inizio lavori per la manutenzione straordinaria.</div>
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
              <a href="/ristrutturare" className="rc"><span className="rc-e">🔨</span><div className="rc-t">Ristrutturare casa</div><div className="rc-d">Il bonus ristrutturazione da cui dipende il bonus mobili.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">&Egrave; qui che recuperi la detrazione del 50%.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Se compri e ristrutturi, doppio bonus.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Guida ufficiale bonus mobili</div></div></a>
            <a href="https://detrazionifiscali.enea.it/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🌿</span><div><div className="sbtool-n">Portale ENEA</div><div className="sbtool-d">Comunicazione elettrodomestici</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Guida ufficiale</div><div className="sbtool-d">PDF bonus mobili Ag. Entrate</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/ristrutturare" className="sbguide">🔨 Ristrutturare casa<span className="sbg-ar">&rarr;</span></a>
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
