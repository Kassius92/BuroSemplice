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
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

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
  twitter: {
    card: 'summary_large_image',
    images: ['https://zeroburocrazia.it/og-compro-casa.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'iter', label: 'Come funziona' },
  { id: 'prima-casa', label: 'Prima casa' },
  { id: 'costi', label: 'Costi', bh: true },
  { id: 'mutuo', label: 'Mutuo' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'calcolatore', label: 'Calcolatore', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso avere le agevolazioni prima casa se ho gi\u00E0 un immobile?", a: "<strong>Dipende da come hai acquistato quell\u2019immobile.</strong> Se lo hai ereditato o ricevuto in donazione, puoi usare le agevolazioni. Se lo hai comprato senza agevolazioni prima casa, puoi usarle. Se le hai gi\u00E0 usate e non hai ancora venduto quell\u2019immobile, non puoi \u2014 a meno che tu non venda entro un anno dal rogito del nuovo acquisto." },
  { q: "Quanto tempo ho per trasferire la residenza?", a: "<strong>18 mesi dal rogito.</strong> Se non lo fai, perdi le agevolazioni e ricevi un avviso di accertamento con la differenza d\u2019imposta, sanzioni (30%) e interessi." },
  { q: "Chi sceglie il notaio?", a: "<strong>Di norma l\u2019acquirente, che \u00E8 anche chi lo paga.</strong> Hai il diritto di sceglierlo. Se compri tramite agenzia, ti proporranno il loro notaio \u2014 non sei obbligato ad accettarlo." },
  { q: "Cosa succede se il venditore si tira indietro dopo il compromesso?", a: "<strong>Ti deve restituire il doppio della caparra confirmatoria.</strong> Se hai versato 20.000 \u20AC, il venditore che si ritira deve restituirti 40.000 \u20AC. Questo vale solo se nel compromesso \u00E8 esplicitamente indicata come \u201Ccaparra confirmatoria\u201D." },
  { q: "Posso detrarre i costi del notaio dal 730?", a: "<strong>No, i costi notarili per la compravendita non sono detraibili.</strong> La parte dell\u2019atto di mutuo potrebbe parzialmente rientrare tra gli oneri detraibili. Chiedi sempre una fattura separata per i due atti." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Comprare casa nel 2026: guida completa e gratuita',
      description: 'Comprare casa in Italia nel 2026: mutuo, notaio, imposte, bonus prima casa e costi nascosti. Tutto quello che devi sapere prima di firmare.',
      url: '/compro-casa',
      image: 'og-compro-casa.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-05',
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
            <h1>Compro <em>casa</em></h1>
            <p className="hero-sub">Tutto quello che devi sapere per comprare casa senza sorprese: iter, imposte, mutuo, documenti e i costi che nessuno ti dice in anticipo.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 12 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · Banca d&apos;Italia · Consiglio Nazionale del Notariato</div>
            <PrintButton />
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
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/spid" className="ps done">✓ SPID</a><span className="pa">›</span>
              <a href="/isee" className="ps done">✓ ISEE</a><span className="pa">›</span>
              <a href="/compro-casa" className="ps active">🏠 Compro casa</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💰</div><div className="sn">4–8%</div><div className="sl">del prezzo in costi aggiuntivi</div></div>
                <div className="sc sg r d2"><div className="si">🏠</div><div className="sn">2%</div><div className="sl">imposta prima casa</div></div>
                <div className="sc    r d3"><div className="si">📑</div><div className="sn">9%</div><div className="sl">imposta seconda casa</div></div>
                <div className="sc    r d1"><div className="si">⏱</div><div className="sn">2–6</div><div className="sl">mesi dal compromesso al rogito</div></div>
                <div className="sc    r d2"><div className="si">⚖️</div><div className="sn">~2k€</div><div className="sl">costo medio notaio</div></div>
                <div className="sc bl r d3"><div className="si">📊</div><div className="sn">19%</div><div className="sl">detrazione interessi mutuo</div></div>
              </div>
            </div>
            <QuizComproCasa />
          </div>

          {/* ITER */}
          <div className="sec r" id="iter">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come funziona, dall&apos;inizio alla fine</h2>
            <p>Comprare casa non &egrave; come comprare un&apos;auto. Ci sono pi&ugrave; passaggi, ognuno con le sue scadenze e i suoi documenti.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Proposta d&apos;acquisto</strong><p>Fai una proposta scritta con un assegno a titolo di caparra (1–2% del prezzo). Se il venditore accetta diventa vincolante. Se ci ripensa lui ti restituisce il doppio. Se ci ripensi tu, perdi la caparra.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Preliminare di compravendita (compromesso)</strong><p>Il contratto vero, anche se non ancora definitivo. Si versa una caparra pi&ugrave; consistente (10–20%). Da questo momento &egrave; molto difficile tornare indietro senza perdere soldi.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Istruttoria del mutuo</strong><p>La banca analizza reddito e risparmi, e manda un perito a valutare l&apos;immobile. I tempi vanno da 2 a 8 settimane. <strong>Non firmare il compromesso prima di avere almeno una pre-approvazione.</strong></p></div></div>
              <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong>Rogito notarile</strong><p>L&apos;atto definitivo. Si firma dal notaio con venditore e acquirente presenti. Paghi il saldo del prezzo, le imposte e il notaio. Le chiavi le ricevi lo stesso giorno.</p></div></div>
              <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Trascrizione e voltura catastale</strong><p>Ci pensa il notaio. Registra il passaggio di propriet&agrave; nei registri immobiliari e all&apos;Agenzia delle Entrate. Da quel momento sei ufficialmente proprietario.</p></div></div>
            </div>
            <div className="ib tip r">
              <div className="ib-t">💡 Il momento critico &egrave; il compromesso</div>
              <p>Molte persone firmano il compromesso prima di aver verificato la situazione ipotecaria o di aver avuto risposta dalla banca. Aspetta di avere tutto chiaro — perdere la caparra &egrave; meglio che legarsi a un acquisto problematico.</p>
            </div>
          </div>

          {/* PRIMA CASA */}
          <div className="sec r" id="prima-casa">
            <div className="sec-tag">Agevolazioni fiscali</div>
            <h2>Prima casa: le agevolazioni che ti spettano</h2>
            <p>Se compri la prima casa, lo Stato ti fa pagare meno. Le agevolazioni sono significative, ma devi rispettare condizioni precise.</p>
            <h3>Chi pu&ograve; usufruirne</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">📍</div><div className="clb"><strong>Residenza nel Comune</strong><span className="note">L&apos;immobile si trova dove risiedi o lavori — o ti impegni a trasferirti entro 18 mesi dal rogito</span></div></li>
              <li className="cli r d2"><div className="ci">🔑</div><div className="clb"><strong>Nessun altro immobile con agevolazioni</strong><span className="note">Non sei proprietario di un altro immobile acquistato con le stesse agevolazioni e non ancora venduto</span></div></li>
              <li className="cli r d3"><div className="ci">🏗</div><div className="clb"><strong>Immobile non di lusso</strong><span className="note">Categorie catastali A/1, A/8, A/9 escluse dalle agevolazioni</span></div></li>
            </ul>
            <div className="ib warn r">
              <div className="ib-t">⚠️ I 18 mesi sono vincolanti</div>
              <p>Se ti impegni a trasferire la residenza e poi non lo fai, perdi tutte le agevolazioni e paghi la differenza con sanzioni e interessi. L&apos;Agenzia delle Entrate controlla.</p>
            </div>
            <h3>Quanto risparmi</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Imposta</th><th>Prima casa</th><th>Seconda casa</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Imposta di registro</strong> <span className="badge">Principale</span></td><td className="cv">2% (min. 1.000 €)</td><td>9% (min. 1.000 €)</td></tr>
                  <tr><td>Imp. ipotecaria + catastale</td><td className="cfr">50 € + 50 € (fisse)</td><td>50 € + 50 € (fisse)</td></tr>
                  <tr><td><strong>Esempio casa da 200.000 €</strong></td><td className="cv" style={{color:'var(--accent-sage)'}}>~4.100 €</td><td className="cv">~18.100 €</td></tr>
                </tbody>
              </table>
            </div>
            <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Gli interessi del mutuo si detraggono dalla dichiarazione. Scopri come.</div><span className="xlink-ar">→</span></a>
          </div>

          {/* COSTI */}
          <div className="sec breve-hide r" id="costi">
            <div className="sec-tag">Costi reali</div>
            <h2>Tutti i costi da mettere in conto</h2>
            <p>Il prezzo dell&apos;immobile &egrave; solo la parte visibile. In media, metti in conto <strong>4–8% del prezzo in pi&ugrave;</strong>.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Voce</th><th>Quanto</th><th>Note</th></tr></thead>
                <tbody>
                  <tr><td><strong>Imposta di registro</strong></td><td className="cv">2% o 9%</td><td>Sul valore catastale rivalutato</td></tr>
                  <tr><td>Imp. ipotecaria + catastale</td><td className="cv">50 € + 50 €</td><td>Fisse, da privato</td></tr>
                  <tr className="hl"><td><strong>Notaio</strong></td><td className="cv">~1.500–3.000 €</td><td>Varia con valore dell&apos;atto e citt&agrave;</td></tr>
                  <tr><td>Agenzia immobiliare</td><td className="cv">2–4% del prezzo</td><td>A carico acquirente E venditore</td></tr>
                  <tr><td>Perizia bancaria</td><td className="cv">200–400 €</td><td>Obbligatoria con mutuo, a tuo carico</td></tr>
                  <tr><td>Istruttoria mutuo</td><td className="cv">0–1.500 €</td><td>Alcune banche la azzerano</td></tr>
                  <tr><td>Assicurazione incendio</td><td className="cv">100–300 €/anno</td><td>Obbligatoria con mutuo</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib mon r">
              <div className="ib-t">💰 Il trucco del valore catastale</div>
              <p>L&apos;imposta di registro si calcola sul valore catastale rivalutato, non sul prezzo pagato. Il valore catastale &egrave; quasi sempre molto inferiore al prezzo di mercato — le imposte effettive sono spesso inferiori alle aspettative.</p>
            </div>
          </div>

          {/* MUTUO */}
          <div className="sec r" id="mutuo">
            <div className="sec-tag">Finanziamento</div>
            <h2>Il mutuo: quello che devi sapere prima di firmarlo</h2>
            <p>Se hai bisogno di un mutuo, ecco le cose fondamentali da capire prima di sederti in banca.</p>
            <div className="ib warn r">
              <div className="ib-t">⚠️ Attenzione alla rata mensile</div>
              <p>La rata non dovrebbe superare il 30–35% del tuo reddito netto mensile. Se hai gi&agrave; altri finanziamenti, li somma. Supera quella soglia e le banche iniziano a diventare difficili.</p>
            </div>
            <h3>Tasso fisso o variabile?</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Tipo</th><th>Come funziona</th><th>Meglio se</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Fisso</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td>La rata rimane sempre uguale</td><td>Vuoi certezza e dormire tranquillo</td></tr>
                  <tr><td><strong>Variabile</strong></td><td>La rata cambia con l&apos;Euribor</td><td>Prevedi di estinguerlo presto</td></tr>
                  <tr><td>Misto / Cap</td><td>Variabile con tetto massimo</td><td>Vuoi un compromesso con limite di rischio</td></tr>
                </tbody>
              </table>
            </div>
            <p>Gli interessi sul mutuo prima casa si detraggono al <strong>19%</strong> fino a 4.000 € di interessi/anno. Risparmio massimo: <strong>760 € all&apos;anno</strong>.</p>
            <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Come inserire gli interessi del mutuo nella dichiarazione.</div><span className="xlink-ar">→</span></a>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti da richiedere al venditore</h2>
            <p>Prima di firmare qualsiasi cosa, verifica questi documenti.</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">📋</div><div className="clb"><strong>Visura catastale</strong><span className="note">Conferma che l&apos;immobile sia intestato al venditore e che i dati corrispondano</span></div></li>
              <li className="cli r d2"><div className="ci">📐</div><div className="clb"><strong>Planimetria catastale</strong><span className="note">Verifica che la pianta corrisponda allo stato reale — difformit&agrave; non sanate sono un problema</span></div></li>
              <li className="cli r d3"><div className="ci">🔍</div><div className="clb"><strong>Visura ipotecaria</strong><span className="note">Verifica che non ci siano ipoteche o pignoramenti sull&apos;immobile</span></div></li>
              <li className="cli r d1"><div className="ci">⚡</div><div className="clb"><strong>APE — Attestato di Prestazione Energetica</strong><span className="note">Obbligatorio per legge. Indica la classe energetica (A4 migliore, G peggiore)</span></div></li>
              <li className="cli r d2"><div className="ci">🏛</div><div className="clb"><strong>Conformit&agrave; urbanistica e catastale</strong><span className="note">Conferma che l&apos;immobile sia stato costruito con i permessi in regola</span></div></li>
            </ul>
            <div className="ib tip r">
              <div className="ib-t">💡 Fai fare tutto al notaio</div>
              <p>Il notaio &egrave; pagato da te. Chiedigli esplicitamente di verificare la situazione ipotecaria e le conformit&agrave;. Non dare nulla per scontato.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che costano caro</h2>
            <div className="ib warn r"><div className="ib-t">⚠️ Firmare il compromesso prima dell&apos;ok della banca</div><p>Se firmi il compromesso e poi la banca non ti concede il mutuo, hai gi&agrave; versato la caparra e sei legato contrattualmente. Ottieni sempre almeno una pre-delibera scritta prima.</p></div>
            <div className="ib warn r d1"><div className="ib-t">⚠️ Non verificare le difformit&agrave; catastali</div><p>Un balcone chiuso, un muro spostato, un locale trasformato: se non sono stati sanati, sono un tuo problema dal rogito in poi.</p></div>
            <div className="ib warn r d2"><div className="ib-t">⚠️ Dimenticarsi i costi accessori nel budget</div><p>Notaio, imposte, agenzia e perizia bancaria possono aggiungere facilmente 15–20.000 € al conto totale. Pianifica includendo tutto.</p></div>
            <div className="ib warn r d3"><div className="ib-t">⚠️ Non confrontare almeno 3 banche per il mutuo</div><p>Su 150.000 € a 25 anni, una differenza dello 0,5% sul tasso vale circa 10.000 € in meno di interessi. Vale la pena confrontare.</p></div>
          </div>

          {/* BLOCCO AFFILIAZIONE MUTUI */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Confronta i tassi mutuo in 2 minuti</div>
                <div className="aff-text">Inserisci importo, durata e tipo di immobile: vedi le offerte disponibili oggi da decine di banche, senza impegno e senza che nessuno ti chiami.</div>
                <div className="aff-note">* Link in partnership — se richiedi un preventivo, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te: il servizio &egrave; gratuito.</div>
              </div>
              <a href="QUI_IL_TUO_LINK_AFFILIATO" target="_blank" rel="noopener sponsored" className="aff-btn">Confronta i mutui →</a>
            </div>
          </div>

          {/* BLOCCO AFFILIAZIONE: ASSICURAZIONE CASA */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Confronta le assicurazioni casa: da 8€/mese</div>
                <div className="aff-text">Incendio, furto, danni da acqua, responsabilit&agrave; civile. Confronta le migliori polizze per la tua nuova casa in 2 minuti.</div>
                <div className="aff-note">* Link in partnership — se richiedi un preventivo, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="QUI_LINK_AFFILIATO_CASA_ASSICURAZIONE" target="_blank" rel="noopener sponsored" className="aff-btn">Confronta polizze →</a>
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

          {/* CTA FINALE */}
          <div className="ctabanner r">
            <h3>Vuoi una guida personalizzata per la tua casa?</h3>
            <p>Ti calcoliamo le imposte esatte, i costi del mutuo, le detrazioni disponibili e le scadenze nel tuo Comune.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Detrazioni mutuo e bonus casa nella dichiarazione.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">L&apos;immobile entra nell&apos;ISEE. Scopri come viene calcolato.</div><span className="rc-ar">→</span></a>
              <a href="/ristrutturare" className="rc"><span className="rc-e">🔨</span><div className="rc-t">Ristrutturare casa</div><div className="rc-d">Ecobonus e bonus ristrutturazione: come funzionano.</div><span className="rc-ar">→</span></a>
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
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">🧮</span><div><div className="sbtool-n">Calcolatore costi</div><div className="sbtool-d">Stima imposte e spese</div></div></a>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri il tuo caso</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova notaio</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/ristrutturare" className="sbguide">🔨 Ristrutturare casa<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="compro-casa" />
      <Footer variant="scheda" />
    </>
  );
}
