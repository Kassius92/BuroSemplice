import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizComproCasa from '@/components/QuizComproCasa';
import CalcComproCasa from '@/components/CalcComproCasa';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Comprare Casa nel 2026: Mutuo, Bonus Prima Casa, Costi e Documenti',
  description: 'Comprare casa nel 2026: come funziona il mutuo, bonus prima casa, imposte, notaio, costi nascosti e documenti necessari. Guida gratuita completa.',
  alternates: { canonical: 'https://zeroburocrazia.it/compro-casa' },
  openGraph: {
    title: 'Comprare Casa nel 2026: Mutuo, Bonus Prima Casa, Costi e Documenti',
    description: 'Comprare casa nel 2026: come funziona il mutuo, bonus prima casa, imposte, notaio, costi nascosti e documenti necessari. Guida gratuita completa.',
    url: 'https://zeroburocrazia.it/compro-casa',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-compro-casa.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/og-compro-casa.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'parole', label: 'Le parole' },
  { id: 'iter', label: 'Come funziona' },
  { id: 'prima-casa', label: 'Prima casa' },
  { id: 'mutuo', label: 'Mutuo' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso avere le agevolazioni prima casa se ho gi\u00E0 un immobile?", a: "<strong>Dipende.</strong> Se l\u2019hai ereditato o ricevuto in donazione, puoi usare le agevolazioni. Se l\u2019hai comprato senza agevolazioni prima casa, puoi usarle. Se le hai gi\u00E0 usate e non hai ancora venduto, non puoi \u2014 a meno che tu non venda entro un anno dal rogito del nuovo acquisto." },
  { q: "Quanto tempo ho per trasferire la residenza?", a: "<strong>18 mesi dal rogito.</strong> Se non lo fai, perdi tutte le agevolazioni e ricevi un avviso dall\u2019Agenzia delle Entrate con la differenza d\u2019imposta, sanzioni (30%) e interessi. L\u2019Agenzia controlla davvero." },
  { q: "Chi sceglie il notaio?", a: "<strong>L\u2019acquirente, che \u00E8 anche chi lo paga.</strong> Se compri tramite agenzia, ti proporranno il loro notaio \u2014 non sei obbligato ad accettarlo. Hai tutto il diritto di scegliere il tuo." },
  { q: "Cosa succede se il venditore si tira indietro dopo il compromesso?", a: "<strong>Ti deve restituire il doppio della caparra confirmatoria.</strong> Se hai versato 20.000\u20AC, il venditore deve restituirti 40.000\u20AC. Vale solo se nel compromesso \u00E8 indicata come \u201Ccaparra confirmatoria\u201D (non \u201Cacconto\u201D \u2014 sono cose diverse)." },
  { q: "Posso detrarre i costi del notaio dal 730?", a: "<strong>No, i costi notarili per la compravendita non sono detraibili.</strong> Per\u00F2 la parte dell\u2019atto di mutuo pu\u00F2 rientrare tra gli oneri detraibili. Chiedi al notaio due fatture separate: una per la compravendita, una per il mutuo." },
  { q: "Quanto anticipo devo avere?", a: "La banca finanzia massimo l\u201980% del valore dell\u2019immobile (a volte meno). Quindi devi avere almeno il <strong>20% del prezzo + i costi accessori</strong> (notaio, imposte, agenzia). Su una casa da 200.000\u20AC, servono almeno 50-55.000\u20AC di risparmi." },
  { q: "Tasso fisso o variabile?", a: "Il <strong>tasso fisso</strong> \u00E8 quasi sempre la scelta migliore per chi compra la prima casa: la rata resta uguale per tutta la durata del mutuo, e puoi pianificare con certezza. Il variabile pu\u00F2 convenire solo se prevedi di estinguere il mutuo in fretta (meno di 10 anni)." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Comprare casa nel 2026: guida completa e gratuita',
      description: 'Comprare casa in Italia nel 2026: mutuo, notaio, imposte, bonus prima casa e costi nascosti. Tutto quello che devi sapere prima di firmare.',
      url: '/compro-casa',
      image: 'og-compro-casa.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-09',
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
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83C\uDFE0'} Casa</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Compro <em>casa</em></h1>
            <p className="hero-sub">Tutto quello che devi sapere per comprare casa senza sorprese: iter, imposte, mutuo, documenti e i costi che nessuno ti dice in anticipo.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 12 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · Banca d&apos;Italia · Consiglio Nazionale del Notariato</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">2%</div><div className="hl">imposta registro<br/>prima casa</div></div>
            <div className="hstat"><div className="hn">4–8%</div><div className="hl">costi aggiuntivi<br/>sul prezzo</div></div>
            <div className="hstat"><div className="hn">760€</div><div className="hl">risparmio max detrazione<br/>interessi mutuo/anno</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <span className="ps ps-soon">🏦 Mutuo <span className="ps-tag">Presto</span></span>
              <a href="/ristrutturare" className="ps">🔨 Ristrutturare casa</a>
              <span className="ps ps-soon">🪑 Bonus mobili <span className="ps-tag">Presto</span></span>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">4–8%</div><div className="sl">del prezzo in costi aggiuntivi</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83C\uDFE0'}</div><div className="sn">2%</div><div className="sl">imposta prima casa</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCC1'}</div><div className="sn">9%</div><div className="sl">imposta seconda casa</div></div>
                <div className="sc    r d1"><div className="si">{'\u23F1'}</div><div className="sn">2–6</div><div className="sl">mesi dal compromesso al rogito</div></div>
                <div className="sc    r d2"><div className="si">{'\u2696\uFE0F'}</div><div className="sn">~2k€</div><div className="sl">costo medio notaio</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83D\uDCCA'}</div><div className="sn">19%</div><div className="sl">detrazione interessi mutuo</div></div>
              </div>
            </div>
            <QuizComproCasa />
          </div>

          {/* GLOSSARIO */}
          <div className="sec r" id="parole">
            <div className="sec-tag">Le basi</div>
            <h2>Le parole che devi conoscere</h2>
            <p>Comprare casa &egrave; pieno di parole che suonano complicate ma non lo sono. Ecco quelle che incontrerai per forza.</p>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Proposta d&apos;acquisto</strong> — Il primo passo: dici al venditore &quot;voglio comprare&quot; e versi un piccolo assegno (1-2% del prezzo). Se lui accetta, siete entrambi vincolati.</div>
              <div className="gl-item r d2"><strong>Compromesso (preliminare)</strong> — Il contratto vero e proprio, anche se non ancora definitivo. Versi una <Tip t="Una somma di denaro che conferma l'impegno di entrambe le parti. Se il venditore si ritira, ti restituisce il doppio. Se ti ritiri tu, la perdi. Attenzione: deve essere scritta come 'caparra confirmatoria', non come 'acconto'.">caparra</Tip> pi&ugrave; consistente (10-20%). Da qui &egrave; molto difficile tornare indietro senza perdere soldi.</div>
              <div className="gl-item r d3"><strong>Rogito</strong> — L&apos;atto finale dal notaio. Firmi, paghi il saldo, e la casa &egrave; tua. Le chiavi le ricevi lo stesso giorno.</div>
              <div className="gl-item r d4"><strong>Valore catastale</strong> — Il valore fiscale dell&apos;immobile secondo il catasto. &Egrave; quasi sempre <strong>molto pi&ugrave; basso</strong> del prezzo di mercato. Le imposte si calcolano su questo numero, non su quello che paghi. Buona notizia.</div>
              <div className="gl-item r d1"><strong>Pre-delibera</strong> — Un documento della banca che dice &quot;sulla base dei tuoi redditi, ti presteremmo fino a X euro&quot;. Non &egrave; vincolante, ma &egrave; il segnale verde pi&ugrave; affidabile prima di firmare il compromesso.</div>
              <div className="gl-item r d2"><strong>LTV (Loan to Value)</strong> — La percentuale del valore della casa che la banca ti finanzia. Di solito massimo 80%. Se la casa costa 200.000€ e la banca finanzia l&apos;80%, ti d&agrave; 160.000€ — il resto (40.000€) lo metti tu.</div>
              <div className="gl-item r d3"><strong>APE</strong> — Attestato di Prestazione Energetica. Un documento obbligatorio che dice quanto &egrave; efficiente la casa dal punto di vista energetico (da A4 = ottima a G = pessima). Pi&ugrave; la classe &egrave; bassa, pi&ugrave; spenderai di bollette.</div>
            </div>
          </div>

          {/* ITER */}
          <div className="sec r" id="iter">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come funziona, dall&apos;inizio alla fine</h2>
            <p>Comprare casa non &egrave; come comprare un&apos;auto. Ci sono pi&ugrave; passaggi, ognuno con i suoi tempi e le sue trappole. Ecco l&apos;ordine giusto.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Proposta d&apos;acquisto</strong><p>Fai un&apos;offerta scritta e versi un assegno a titolo di <Tip t="Una somma che conferma il tuo impegno. Se il venditore accetta e poi si ritira, ti restituisce il doppio. Se ti ritiri tu, la perdi.">caparra</Tip> (1–2% del prezzo). Se il venditore accetta, diventa vincolante per entrambi.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong><Tip t="Il contratto che fissa le condizioni dell'acquisto: prezzo, tempistiche, caparra. Non è ancora il rogito definitivo, ma è legalmente vincolante.">Compromesso</Tip> (preliminare)</strong><p>Il contratto vero. Versi una caparra pi&ugrave; consistente (10–20% del prezzo). Da questo momento tornare indietro costa molto. <strong>Non firmarlo prima di avere almeno una <Tip t="Un documento della banca che conferma che, sulla base del tuo reddito, saresti finanziabile. Non è vincolante, ma è il segnale verde più affidabile.">pre-delibera</Tip> dalla banca.</strong></p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Istruttoria del mutuo</strong><p>La banca analizza il tuo reddito e manda un <Tip t="Un esperto inviato dalla banca per verificare che il valore dell'immobile corrisponda a quello dichiarato. Costa 200-400€ a te.">perito</Tip> a valutare l&apos;immobile. Tempi: 2–8 settimane. Se tutto ok, la banca conferma il mutuo.</p></div></div>
              <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong><Tip t="L'atto definitivo firmato dal notaio. In quel momento paghi il saldo, le imposte, il notaio — e ricevi le chiavi.">Rogito</Tip> notarile</strong><p>Si firma dal notaio con venditore e acquirente. Paghi il saldo del prezzo, le imposte e il notaio. Le chiavi le ricevi lo stesso giorno. Sei proprietario.</p></div></div>
              <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Trascrizione e <Tip t="Il passaggio burocratico che aggiorna i registri del catasto al nuovo proprietario. Lo fa il notaio per te.">voltura catastale</Tip></strong><p>Ci pensa il notaio. Registra il passaggio di propriet&agrave; nei registri immobiliari. Da quel momento sei ufficialmente proprietario anche per lo Stato.</p></div></div>
            </div>
            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il momento critico &egrave; il compromesso</div>
              <p>Molte persone firmano il compromesso prima di aver verificato la situazione ipotecaria o di aver avuto risposta dalla banca. &Egrave; un errore che pu&ograve; costare decine di migliaia di euro. Aspetta di avere la pre-delibera — perdere una casa &egrave; meglio che legarsi a un acquisto problematico.</p>
            </div>
          </div>

          {/* PRIMA CASA */}
          <div className="sec r" id="prima-casa">
            <div className="sec-tag">Agevolazioni fiscali</div>
            <h2>Prima casa: le agevolazioni che ti spettano</h2>
            <p>Se compri la prima casa, lo Stato ti fa pagare meno imposte. Il risparmio &egrave; significativo, ma devi rispettare condizioni precise.</p>
            <h3>Chi pu&ograve; usufruirne</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCCD'}</div><div className="clb"><strong>Residenza nel Comune</strong><span className="note">L&apos;immobile &egrave; dove risiedi o lavori — o ti impegni a trasferirti entro 18 mesi dal rogito</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDD11'}</div><div className="clb"><strong>Nessun altro immobile con agevolazioni</strong><span className="note">Non sei proprietario di un altro immobile comprato con le stesse agevolazioni e non ancora venduto</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFD7'}</div><div className="clb"><strong>Immobile non di lusso</strong><span className="note">Categorie catastali A/1, A/8, A/9 sono escluse dalle agevolazioni</span></div></li>
            </ul>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} I 18 mesi sono vincolanti</div>
              <p>Ti impegni a spostare la residenza entro 18 mesi dal <Tip t="L'atto definitivo dal notaio. Il giorno in cui firmi, paghi e ricevi le chiavi.">rogito</Tip>. Se non lo fai, perdi <strong>tutte</strong> le agevolazioni e l&apos;Agenzia delle Entrate ti chiede la differenza d&apos;imposta + sanzioni (30%) + interessi. Controllano davvero.</p>
            </div>
            <h3>Quanto risparmi</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Imposta</th><th>Prima casa</th><th>Seconda casa</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong><Tip t="La tassa principale che paghi quando compri casa. Si calcola sul valore catastale, non sul prezzo che paghi. Il valore catastale è quasi sempre molto più basso.">Imposta di registro</Tip></strong> <span className="badge">Principale</span></td><td className="cv">2% (min. 1.000€)</td><td>9% (min. 1.000€)</td></tr>
                  <tr><td>Imp. ipotecaria + catastale</td><td className="cfr">50€ + 50€ (fisse)</td><td>50€ + 50€ (fisse)</td></tr>
                  <tr><td><strong>Esempio casa da 200.000€</strong></td><td className="cv" style={{color:'var(--accent-sage)'}}>~4.100€</td><td className="cv">~18.100€</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB0'} Il trucco del valore catastale</div>
              <p>L&apos;imposta di registro si calcola sul <Tip t="Il valore fiscale dell'immobile secondo il catasto. Si calcola: rendita catastale × 115,5 (prima casa) o × 126 (seconda casa). È quasi sempre molto inferiore al prezzo di mercato.">valore catastale</Tip> rivalutato, <strong>non sul prezzo pagato</strong>. Il valore catastale &egrave; quasi sempre molto inferiore al prezzo di mercato — quindi le imposte effettive sono spesso pi&ugrave; basse di quanto temi.</p>
            </div>
            <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Gli interessi del mutuo si detraggono dalla dichiarazione. Scopri come.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* COSTI */}
          <div className="sec breve-hide r" id="costi">
            <div className="sec-tag">Costi reali</div>
            <h2>Tutti i costi da mettere in conto</h2>
            <p>Il prezzo dell&apos;immobile &egrave; solo la parte visibile. In media, aggiungi <strong>4–8% del prezzo</strong> per tutto il resto.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Voce</th><th>Quanto</th><th>Note</th></tr></thead>
                <tbody>
                  <tr><td><strong>Imposta di registro</strong></td><td className="cv">2% o 9%</td><td>Sul valore catastale rivalutato</td></tr>
                  <tr><td>Imp. ipotecaria + catastale</td><td className="cv">50€ + 50€</td><td>Fisse, da privato</td></tr>
                  <tr className="hl"><td><strong>Notaio</strong></td><td className="cv">~1.500–3.000€</td><td>Varia con valore dell&apos;atto e citt&agrave;</td></tr>
                  <tr><td>Agenzia immobiliare</td><td className="cv">2–4% del prezzo</td><td>A carico acquirente E venditore</td></tr>
                  <tr><td><Tip t="La banca manda un esperto a controllare che il valore della casa corrisponda a quello dichiarato. Paghi tu.">Perizia bancaria</Tip></td><td className="cv">200–400€</td><td>Obbligatoria con mutuo, a tuo carico</td></tr>
                  <tr><td>Istruttoria mutuo</td><td className="cv">0–1.500€</td><td>Alcune banche la azzerano</td></tr>
                  <tr><td>Assicurazione incendio</td><td className="cv">100–300€/anno</td><td>Obbligatoria con mutuo</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MUTUO */}
          <div className="sec r" id="mutuo">
            <div className="sec-tag">Finanziamento</div>
            <h2>Il mutuo: quello che devi sapere</h2>
            <p>Se hai bisogno di un mutuo (e nella maggior parte dei casi s&igrave;), ecco le cose fondamentali da capire prima di sederti in banca.</p>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} La regola del 30%</div>
              <p>La rata non dovrebbe superare il <strong>30–35% del tuo reddito netto mensile</strong>. Se hai gi&agrave; altri finanziamenti (auto, prestiti), la banca li somma. Supera quella soglia e le banche iniziano a dire no.</p>
            </div>

            <h3>Tasso fisso o variabile?</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Tipo</th><th>Come funziona</th><th>Meglio se</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Fisso</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td>La rata resta sempre uguale per tutta la durata</td><td>Vuoi certezza e dormire tranquillo</td></tr>
                  <tr><td><strong>Variabile</strong></td><td>La rata cambia con l&apos;<Tip t="Il tasso di riferimento europeo per i mutui variabili. Quando l'Euribor sale, la tua rata sale. Quando scende, la rata scende.">Euribor</Tip></td><td>Prevedi di estinguere il mutuo in meno di 10 anni</td></tr>
                  <tr><td>Misto / Cap</td><td>Variabile con tetto massimo sulla rata</td><td>Vuoi un compromesso con limite di rischio</td></tr>
                </tbody>
              </table>
            </div>
            <p>Gli interessi sul mutuo prima casa si detraggono al <strong>19%</strong> fino a 4.000€ di interessi/anno. Risparmio massimo: <strong>760€ all&apos;anno</strong> nella dichiarazione dei redditi.</p>
            <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Come inserire gli interessi del mutuo nella dichiarazione.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti da richiedere al venditore</h2>
            <p>Prima di firmare qualsiasi cosa, verifica che il venditore ti abbia dato questi documenti. Se qualcosa non torna, fermati.</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong><Tip t="Un documento del catasto che conferma chi è il proprietario dell'immobile e i suoi dati (metratura, rendita catastale, categoria).">Visura catastale</Tip></strong><span className="note">Conferma che l&apos;immobile sia intestato al venditore e che i dati corrispondano</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCD0'}</div><div className="clb"><strong>Planimetria catastale</strong><span className="note">La pianta dell&apos;immobile. Verifica che corrisponda allo stato reale — difformit&agrave; non sanate sono un tuo problema</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDD0D'}</div><div className="clb"><strong><Tip t="Un documento che mostra se sull'immobile ci sono ipoteche, pignoramenti o altri vincoli. Se ci sono, significa che qualcuno ha un diritto su quella casa.">Visura ipotecaria</Tip></strong><span className="note">Verifica che non ci siano ipoteche o pignoramenti sull&apos;immobile</span></div></li>
              <li className="cli r d1"><div className="ci">{'\u26A1'}</div><div className="clb"><strong><Tip t="Un documento obbligatorio per legge che indica la classe energetica dell'immobile, da A4 (ottima) a G (pessima). Più è bassa la classe, più spendi di bollette.">APE</Tip> — Attestato di Prestazione Energetica</strong><span className="note">Obbligatorio per legge. Classe A4 = ottima, G = pessima</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFDB'}</div><div className="clb"><strong>Conformit&agrave; urbanistica e catastale</strong><span className="note">Conferma che l&apos;immobile sia stato costruito con i permessi in regola</span></div></li>
            </ul>
            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Fai fare tutto al notaio</div>
              <p>Il notaio &egrave; pagato da te. Chiedigli <strong>esplicitamente</strong> di verificare la situazione ipotecaria e le conformit&agrave;. Non dare nulla per scontato — &egrave; il suo lavoro e il tuo diritto.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che costano decine di migliaia di euro</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Firmare il compromesso prima dell&apos;ok della banca</div><p>Se firmi il <Tip t="Il contratto preliminare che ti vincola all'acquisto. Ci versi una caparra consistente (10-20% del prezzo).">compromesso</Tip> e poi la banca non ti concede il mutuo, hai gi&agrave; versato la caparra e sei vincolato. Ottieni <strong>sempre</strong> almeno una pre-delibera scritta prima di firmare qualsiasi cosa.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Non verificare le difformit&agrave; catastali</div><p>Un balcone chiuso, un muro spostato, un locale trasformato: se non sono stati sanati dal venditore, diventano un <strong>tuo</strong> problema dal rogito in poi. E sanarli pu&ograve; costare migliaia di euro e mesi di burocrazia.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Dimenticare i costi accessori nel budget</div><p>Notaio, imposte, agenzia e perizia bancaria possono aggiungere <strong>15–20.000€</strong> al conto totale. Se hai calcolato di poter comprare una casa da 200.000€, in realt&agrave; ne puoi comprare una da 180-185.000€. Pianifica includendo tutto.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Non confrontare almeno 3 banche</div><p>Su 150.000€ a 25 anni, una differenza dello 0,5% sul tasso vale circa <strong>10.000€ in meno di interessi</strong>. Chiedi preventivi ad almeno 3 banche. Ci vuole un&apos;ora, ne risparmi migliaia.</p></div>
          </div>

          {/* AFFILIAZIONI */}



          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Luca e Sara comprano casa</h2>

            <p><strong>Luca (31 anni) e Sara (29 anni)</strong> vivono a Torino in affitto, 750€ al mese. Lui &egrave; impiegato (1.800€ netti/mese), lei &egrave; infermiera (1.600€ netti/mese). Hanno messo da parte <strong>55.000€</strong>. Trovano un bilocale che gli piace: <strong>180.000€</strong>.</p>

            <p>La domanda: ce la facciamo?</p>

            <h3>I conti</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Prezzo casa</span><span className="db-new">180.000€</span></div>
              <div className="db-row"><span className="db-label">Mutuo (80% = LTV massimo)</span><span className="db-new">144.000€</span></div>
              <div className="db-row"><span className="db-label">Anticipo di tasca loro</span><span className="db-old">36.000€</span></div>
              <div className="db-row"><span className="db-label">Imposta registro (2% val. catastale)</span><span className="db-old">~2.100€</span></div>
              <div className="db-row"><span className="db-label">Notaio (2 atti)</span><span className="db-old">~3.500€</span></div>
              <div className="db-row"><span className="db-label">Agenzia (3%)</span><span className="db-old">~5.400€</span></div>
              <div className="db-row"><span className="db-label">Perizia + istruttoria banca</span><span className="db-old">~500€</span></div>
              <div className="db-row db-total"><span className="db-label">Totale costi extra</span><span className="db-val">~11.500€</span></div>
            </div>

            <p>Anticipo (36.000€) + costi extra (11.500€) = <strong>47.500€</strong>. Ne avevano 55.000€. Gliene restano 7.500€ di cuscinetto. Perfetto.</p>

            <h3>Il mutuo</h3>
            <p>144.000€ a tasso fisso, 25 anni, tasso 3,2%. Rata: <strong>695€/mese</strong>. Reddito netto combinato: 3.400€. La rata &egrave; il 20% del reddito — ampiamente sotto la soglia del 30%. La banca approva senza problemi.</p>

            <h3>Quanto risparmiano con la prima casa</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Imposta registro</span><span className="db-old">9% = ~9.500€</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">2% = ~2.100€</span></div>
              <div className="db-row"><span className="db-label">Detrazione interessi mutuo</span><span className="db-old">0€/anno</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~600€/anno</span></div>
              <div className="db-row db-total"><span className="db-label">Risparmio agevolazioni</span><span className="db-val">~22.000€ in 25 anni</span></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Comprare casa sembra complicato solo finch&eacute; non fai i conti. La regola: <strong>anticipo 20% + costi accessori 8% + cuscinetto</strong>. Se la rata sta sotto il 30% del reddito netto, sei in zona sicura. E le agevolazioni prima casa ti fanno risparmiare migliaia di euro.</p>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec breve-hide r" id="calcolatore">
            <div className="sec-tag">Strumento interattivo</div>
            <h2>Stima i costi del tuo acquisto</h2>
            <CalcComproCasa />
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
              <a href="/ristrutturare" className="rc"><span className="rc-e">🔨</span><div className="rc-t">Ristrutturare casa</div><div className="rc-d">Appena comprata? Il bonus ristrutturazione è al 50%.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Interessi mutuo e spese notaio si detraggono.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">L'immobile entra nell'ISEE. Scopri come.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDEE0'} Strumenti</div>
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">{'\uD83E\uDDEE'}</span><div><div className="sbtool-n">Calcolatore costi</div><div className="sbtool-d">Stima imposte e spese</div></div></a>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">{'\u2705'}</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri il tuo caso</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">{'\uD83D\uDCCD'}</span><div><div className="sbtool-n">Trova notaio</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <span className="sbguide sbguide-soon">🏦 Mutuo<span className="sbg-soon">Presto</span></span>
            <a href="/ristrutturare" className="sbguide">🔨 Ristrutturare casa<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">🪑 Bonus mobili<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="compro-casa" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
