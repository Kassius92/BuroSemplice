import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: "Come Fare l\u2019ISEE nel 2026: Documenti, Costi e Simulazione",
  description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
  keywords: ["ISEE", "ISEE 2026", "come fare ISEE", "ISEE online", "DSU", "documenti ISEE", "ISEE precompilato", "calcolo ISEE", "CAF ISEE gratis", "ISEE corrente"],
  alternates: { canonical: 'https://zeroburocrazia.it/isee' },
  openGraph: { title: "Come Fare l\u2019ISEE nel 2026: Documenti, Costi e Simulazione", description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve.", url: 'https://zeroburocrazia.it/isee', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogisee.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogisee.png'] },
};

const faqItems = [
  { q: "Quanto dura l\u2019ISEE?", a: "<strong>Dal giorno in cui lo fai fino al 31 dicembre dello stesso anno.</strong> Quindi se lo fai a gennaio vale 12 mesi, se lo fai a ottobre vale solo 3 mesi. Per questo conviene farlo il prima possibile, idealmente a gennaio o febbraio. Dal 1\u00b0 gennaio dell\u2019anno successivo serve un ISEE nuovo: quello vecchio scade automaticamente. Molti bonus hanno scadenze nei primi mesi dell\u2019anno, quindi chi fa l\u2019ISEE prima ha pi\u00f9 tempo per presentare le domande." },
  { q: "Vivo con i miei genitori, il mio ISEE include i loro redditi?", a: "<strong>S\u00ec, se risulti nel loro stato di famiglia.</strong> Per avere un ISEE indipendente devi cambiare residenza. Per l\u2019universit\u00e0 i genitori contano anche se non convivi, a meno che tu non sia economicamente indipendente da almeno 2 anni." },
  { q: "Sono separato/divorziato, come funziona il nucleo?", a: "Se sei <strong>legalmente separato o divorziato</strong> e hai residenza diversa dal tuo ex, siete in due nuclei familiari separati. I figli vanno nel nucleo del genitore con cui convivono. Se invece siete separati di fatto ma avete ancora la stessa residenza e lo stesso stato di famiglia, risultate nello stesso nucleo ISEE. Per avere nuclei separati serve la separazione legale e il cambio di residenza. Questo \u00e8 un punto critico: molte coppie pensano di essere in nuclei separati solo perch\u00e9 non stanno pi\u00f9 insieme, ma se la residenza \u00e8 la stessa, l\u2019ISEE li considera insieme." },
  { q: "Ho risparmi che non uso, mi alzano l\u2019ISEE?", a: "<strong>S\u00ec.</strong> L\u2019ISEE conta il patrimonio mobiliare: soldi in banca, fondi, investimenti. C\u2019\u00e8 una franchigia (~6.000\u20ac + 2.000\u20ac per figlio) sotto cui non conta, sopra ogni euro in pi\u00f9 alza l\u2019ISEE." },
  { q: "Posso fare l\u2019ISEE da solo senza CAF?", a: "<strong>S\u00ec, dal sito dell\u2019INPS.</strong> La DSU precompilata ha gi\u00e0 dentro quasi tutti i dati: redditi, conti correnti, immobili. Tu devi solo controllare che sia tutto giusto, aggiungere quello che manca (tipo una carta prepagata o un conto che l\u2019INPS non ha intercettato), e confermare. Serve lo SPID per accedere. Se la tua situazione \u00e8 semplice (uno stipendio fisso, un conto corrente, nessun immobile di propriet\u00e0), ci metti davvero 15-20 minuti. Se la situazione \u00e8 pi\u00f9 complessa (pi\u00f9 conti, immobili, investimenti), pu\u00f2 essere pi\u00f9 veloce andare al CAF dove fanno tutto loro gratuitamente." },
  { q: "Ho sbagliato qualcosa, posso correggerlo?", a: "<strong>S\u00ec.</strong> Puoi presentare una nuova DSU quando vuoi \u2014 sostituisce la vecchia. Se hai gi\u00e0 ricevuto bonus su un ISEE sbagliato, potresti dover restituire i soldi." },
  { q: "Cos\u2019\u00e8 l\u2019ISEE corrente?", a: "\u00c8 un ISEE aggiornato alla tua situazione attuale. Serve se il reddito \u00e8 calato almeno del 25% o il patrimonio del 20%. Va rinnovato ogni 6 mesi." },
  { q: "ISEE e 730 sono la stessa cosa?", a: "<strong>No, sono due cose completamente diverse.</strong> Il 730 \u00e8 la dichiarazione dei redditi: serve a pagare le tasse e a recuperare soldi tramite le detrazioni (spese mediche, affitto, mutuo). L\u2019ISEE \u00e8 la fotografia della situazione economica della famiglia: serve a chiedere bonus e agevolazioni (assegno unico, bonus nido, esenzione ticket, rette universit\u00e0 ridotte). Sono indipendenti: puoi fare l\u2019ISEE anche se non hai fatto il 730. Per\u00f2 i redditi che dichiari nel 730 sono tra i dati che l\u2019ISEE usa per il calcolo. In pratica conviene fare entrambi: il 730 per recuperare detrazioni, l\u2019ISEE per accedere ai bonus." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: "Guida completa all\u2019ISEE 2026", description: "Come fare l\u2019ISEE nel 2026: documenti, dove farlo, quanto vale e a cosa serve.", url: '/isee', image: 'ogisee.png', datePublished: '2026-03-04', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <NavV8 />

      {/* HERO */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Come fare l&apos;<em>ISEE</em> nel 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Cos&apos;&egrave;, a cosa serve, come si fa, quali documenti servono. Se devi chiedere un bonus o un&apos;agevolazione, parti da qui.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>0&euro;</strong><span>Online o al CAF</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>15 min</strong><span>Con la precompilata</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>31/12</strong><span>Scadenza annuale</span></div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section className="v8-section warm" id="quiz">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Ti serve <em>l&apos;ISEE?</em></h2><p className="rv rv-d1">Rispondi a 3 domande e lo scopri subito.</p></div>
          <div className="v8-quiz">
            <div className="v8-quiz-card rv-scale rv-d2">
              <div className="v8-qq"><span className="v8-qq-text">Hai figli, paghi l&apos;universit&agrave; o chiedi bonus statali?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="1" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="1" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Il tuo reddito familiare &egrave; sotto i 40.000&euro;?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="2" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="2" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Paghi mensa, nido, bollette o affitto?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="3" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="3" data-v="n">No</button></div></div>
              <div className="v8-quiz-res" id="qRes"></div>
            </div>
          </div>
        </div>
      </section>

      {/* COS'È */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; l&apos;<em>ISEE</em></h2></div>
          <div className="v8-prose rv">
            <p>Immagina che lo Stato voglia sapere quanto &egrave; &quot;ricca&quot; la tua famiglia, per decidere se aiutarti. Non guarda solo lo stipendio &mdash; guarda <strong>tutto</strong>: quanto guadagnate, quanto avete in banca, se avete una casa di propriet&agrave;. Mette insieme tutti questi numeri, fa un calcolo, e tira fuori <strong>un solo numero in euro</strong>. Quello &egrave; il tuo ISEE.</p>
            <p>Funziona come un punteggio: pi&ugrave; &egrave; basso, pi&ugrave; bonus puoi ottenere. Con un ISEE di 15.000&euro; hai diritto a quasi tutto. Con 45.000&euro; ti escludono dalla maggior parte delle agevolazioni. &Egrave; la &quot;chiave&quot; che apre (o chiude) le porte dei bonus.</p>
            <p>Per ottenere il tuo ISEE devi compilare un modulo chiamato <Tip t="Il modulo dove metti i dati della famiglia: redditi, conti, immobili. Lo compili tu o lo fa il CAF per te.">DSU</Tip> (Dichiarazione Sostitutiva Unica). Lo mandi all&apos;INPS, che fa il calcolo e ti restituisce l&apos;<Tip t="Il foglio ufficiale con il tuo numero ISEE. Lo scarichi dalla tua area INPS.">attestazione ISEE</Tip>. L&apos;ISEE vale <strong>dal giorno in cui lo fai fino al 31 dicembre</strong> dello stesso anno.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>DSU</strong> &mdash; Dichiarazione Sostitutiva Unica. Il modulo con tutti i dati della famiglia. Lo compili online su INPS o al CAF.</p>
            <p><strong>Nucleo familiare</strong> &mdash; Le persone nel tuo <Tip t="Un documento del Comune che elenca chi abita con te alla stessa residenza.">stato di famiglia</Tip> anagrafico: tu, partner (se convivete), figli. L&apos;ISEE si calcola su tutti loro.</p>
            <p><strong>Patrimonio mobiliare</strong> &mdash; Soldi sul conto corrente, risparmi, investimenti, azioni, fondi, buoni postali, crypto. Anche la PostePay Evolution conta.</p>
            <p><strong>Giacenza media</strong> &mdash; La media giornaliera dei soldi che hai avuto sul conto durante tutto l&apos;anno. Non &egrave; il saldo di fine anno: se a luglio avevi 20.000&euro; e a dicembre 500&euro;, la giacenza media sar&agrave; circa 10.000&euro;. La banca te la fornisce insieme al saldo. Per l&apos;ISEE serve il pi&ugrave; alto tra saldo al 31 dicembre e giacenza media annua. Molti mettono solo il saldo e poi si stupiscono del risultato.</p>
            <p><strong>Patrimonio immobiliare</strong> &mdash; Case, terreni, garage di propriet&agrave;. Il valore si calcola dalla <Tip t="Un numero che il catasto assegna a ogni immobile ai fini fiscali.">rendita catastale</Tip>, non dal prezzo di mercato.</p>
            <p><strong>ISEE corrente</strong> &mdash; Versione aggiornata per chi ha avuto un cambiamento importante (perso il lavoro, calo reddito). Vale 6 mesi.</p>
          </div>
          <div className="v8-prose rv" style={{marginTop:'32px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Come funziona il calcolo</h3>
            <p>L&apos;ISEE non &egrave; semplicemente il tuo reddito. Il calcolo tiene conto di tre fattori: i redditi di tutti i componenti del nucleo familiare (stipendi, pensioni, redditi da affitto, rendite), il patrimonio mobiliare (conti correnti, investimenti, titoli, carte prepagate con IBAN) e il patrimonio immobiliare (case, terreni, garage di propriet&agrave;, al netto del mutuo residuo). Questi tre elementi vengono combinati in una formula che produce un unico numero in euro.</p>
            <p>Il peso del patrimonio &egrave; inferiore a quello del reddito: i soldi in banca pesano per il 20%, gli immobili per il 20% della rendita catastale rivalutata. Ci sono anche delle franchigie: per il patrimonio mobiliare, i primi 6.000&euro; non contano (pi&ugrave; 2.000&euro; per ogni figlio successivo al secondo). Per la prima casa, il valore dell&apos;immobile viene ridotto e il mutuo residuo si sottrae. Il numero di componenti del nucleo influisce attraverso la scala di equivalenza: pi&ugrave; persone ci sono in famiglia, pi&ugrave; alto &egrave; il divisore, e quindi pi&ugrave; basso risulta l&apos;ISEE.</p>
            <p>Esistono diversi tipi di ISEE. L&apos;ISEE ordinario va bene per la maggior parte dei bonus. L&apos;ISEE universit&agrave; serve per le tasse universitarie e ha regole diverse per i genitori non conviventi. L&apos;ISEE sociosanitario si usa per le prestazioni sociosanitarie. L&apos;ISEE corrente &egrave; per chi ha avuto un cambiamento significativo di reddito o patrimonio rispetto all&apos;anno di riferimento.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>ISEE e 730 non sono la stessa cosa.</strong> Il 730 serve a pagare le tasse e recuperare detrazioni. L&apos;ISEE serve a chiedere bonus e agevolazioni. Sono indipendenti. Puoi fare l&apos;ISEE senza aver fatto il 730.</p></div>
          </div>
        </div>
      </section>

      {/* A COSA SERVE */}
      <section className="v8-section warm" id="serve">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">A cosa serve <em>in concreto</em></h2><p className="rv rv-d1">Quasi tutti i bonus e le agevolazioni richiedono l&apos;ISEE. Senza, non puoi nemmeno fare domanda.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num" style={{background:'var(--v8-violet-bg)',color:'var(--v8-violet)',fontSize:'16px'}}>&#128118;</div><h3>Assegno unico figli</h3><p>Da 58&euro; a 204&euro;/mese per figlio. Senza ISEE ricevi il minimo.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num" style={{background:'var(--v8-blue-bg)',color:'var(--v8-blue)',fontSize:'16px'}}>&#127979;</div><h3>Rette universit&agrave;</h3><p>Esonero totale sotto i 22.000&euro;. Riduzioni fino a 30.000&euro;.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num" style={{background:'var(--v8-green-bg)',color:'var(--v8-green)',fontSize:'16px'}}>&#127869;</div><h3>Mensa scolastica</h3><p>Il costo cambia in base all&apos;ISEE. Da 0&euro; a tariffa piena.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num" style={{background:'var(--v8-coral-bg)',color:'var(--v8-coral)',fontSize:'16px'}}>&#128138;</div><h3>Ticket sanitari</h3><p>Esenzione dal ticket per visite ed esami con reddito basso.</p></div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'32px'}}>
            <p>E poi: bonus nido (fino a 3.600&euro;/anno), bonus trasporti (60&euro;), bonus psicologo (fino a 1.500&euro;), <Tip t="Carta prepagata da 460&euro; per famiglie con ISEE sotto 15.000&euro;.">social card</Tip> (460&euro;), case popolari, agevolazioni TARI, bonus bollette luce e gas, bonus affitto comunale.</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Senza ISEE stai regalando soldi.</strong> Hai un figlio e non hai fatto l&apos;ISEE? Ricevi l&apos;assegno unico al minimo: 58&euro;/mese. Con ISEE sotto 17.500&euro; ti spettano 204&euro;/mese. Differenza: <strong>1.752&euro;/anno buttati via</strong>. Per un modulo che si compila in 15 minuti.</p></div>
          </div>
        </div>
      </section>

      {/* COME SI FA */}
      <section className="v8-section" id="come-si-fa">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si fa <em>l&apos;ISEE</em></h2><p className="rv rv-d1">Hai 3 strade. Due sono completamente gratuite.</p></div>
          <div className="v8-prose rv" style={{marginBottom:'32px'}}>
            <p>Per fare l&apos;ISEE online ti serve lo <Tip t="L&apos;identit&agrave; digitale per accedere ai servizi della PA online.">SPID</Tip>. Se non ce l&apos;hai, fallo prima &mdash; 15 minuti, zero euro.</p>
          </div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Accedi a INPS con SPID</h3><p>Vai su inps.it e accedi con SPID. Cerca &quot;ISEE precompilato&quot; nella barra di ricerca. La DSU precompilata ha gi&agrave; dentro redditi, conti correnti e immobili. L&apos;INPS prende questi dati direttamente dalle banche e dall&apos;Agenzia delle Entrate.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Controlla i dati</h3><p>Verifica che redditi, conti e immobili siano corretti. Aggiungi quello che manca (carte prepagate, conti esteri).</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Completa il nucleo familiare</h3><p>Inserisci i dati economici di tutti i componenti del tuo stato di famiglia, pi&ugrave; il coniuge anche se non convivente. Se vivi da solo &egrave; velocissimo. Se vivi con i genitori, servono anche i loro dati. Per ognuno servono redditi, conti e patrimonio.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Conferma e scarica</h3><p>L&apos;INPS calcola il tuo ISEE in poche ore. L&apos;attestazione compare nella tua area riservata in PDF.</p></div>
          </div>
          <div style={{textAlign:'center',marginTop:'24px'}}>
            <Link href="/spid" className="v8-crosslink">Fai lo SPID in 15 minuti<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{width:14,height:14}}><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
          <div className="v8-prose rv" style={{marginTop:'48px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginBottom:'16px'}}>Quanto costa</h3>
            <div className="v8-cost-grid">
              <div className="v8-cost-card hl"><div className="v8-cost-method">Online (precompilata INPS)</div><div className="v8-cost-price">Gratis</div><div className="v8-cost-time">15-20 min. Serve SPID.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">CAF / Patronato</div><div className="v8-cost-price">Gratis</div><div className="v8-cost-time">30 min + attesa appuntamento.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">Commercialista</div><div className="v8-cost-price">30&ndash;80&euro;</div><div className="v8-cost-time">15 min dal tuo lato.</div></div>
            </div>
            <p style={{marginTop:'24px'}}><strong>Sai usare il computer e hai lo SPID?</strong> Fallo online: 15 minuti, zero euro, niente code e niente appuntamenti. La DSU precompilata ha gi&agrave; dentro quasi tutto. <strong>Preferisci che qualcuno ti aiuti?</strong> Vai al CAF: &egrave; gratis al 100% (pagato dallo Stato), fanno tutto loro in mezz&apos;ora. Prenota a gennaio perch&eacute; nei primi mesi dell&apos;anno c&apos;&egrave; sempre molta richiesta. <strong>Situazione complicata?</strong> Se hai conti all&apos;estero, immobili in pi&ugrave; regioni, un trust, una separazione in corso con figli, o eredit&agrave; recenti, il commercialista costa 30&ndash;80&euro; ma ti evita errori che potrebbero costarti molto di pi&ugrave;.</p>
            <p>Un errore nell&apos;ISEE pu&ograve; avere conseguenze serie: se l&apos;INPS scopre dati omessi o errati, annulla l&apos;ISEE retroattivamente e puoi dover restituire tutti i bonus gi&agrave; ricevuti. Per questo, se la tua situazione &egrave; anche solo un po&apos; complessa, meglio farsi aiutare.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Quando conviene farlo:</strong> l&apos;ISEE vale tutto l&apos;anno, quindi fallo il prima possibile &mdash; idealmente a gennaio o febbraio. Molti bonus hanno fondi limitati e scadenze: chi arriva prima prende di pi&ugrave;.</p></div>
          </div>
        </div>
      </section>

      {/* DOCUMENTI */}
      <section className="v8-section warm" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">I documenti <em>necessari</em></h2><p className="rv rv-d1">Servono per tutti i componenti del nucleo familiare, non solo per te. Se fai la precompilata online, la maggior parte dei dati &egrave; gi&agrave; inserita dall&apos;INPS, ma &egrave; meglio avere tutto sotto mano per controllare.</p></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Identit&agrave;</h3>
              <div className="v8-doc"><strong>Documento d&apos;identit&agrave; e codice fiscale</strong> &mdash; di ogni componente del nucleo</div>
              <div className="v8-doc"><strong>Stato di famiglia</strong> &mdash; scaricabile online con SPID dal sito del Comune</div>
              <h3 style={{marginTop:'24px'}}>Redditi (anno 2024)</h3>
              <div className="v8-doc"><strong>Ultima dichiarazione dei redditi</strong> (730 o Modello Redditi)</div>
              <div className="v8-doc"><strong>CU 2025</strong> (Certificazione Unica) dal datore di lavoro</div>
              <div className="v8-doc"><strong>Redditi esenti</strong> &mdash; borse di studio, assegni mantenimento, pensioni invalidit&agrave;</div>
            </div>
            <div className="v8-doc-group">
              <h3>Patrimonio (saldo al 31/12/2024)</h3>
              <div className="v8-doc"><strong>Saldo e giacenza media</strong> di tutti i conti correnti</div>
              <div className="v8-doc"><strong>Carte prepagate con IBAN</strong> &mdash; PostePay Evolution, Hype, Revolut, N26</div>
              <div className="v8-doc"><strong>Titoli, azioni, fondi</strong> &mdash; valore al 31/12/2024</div>
              <div className="v8-doc"><strong>Rendita catastale immobili</strong> &mdash; dalla visura catastale (gratis con SPID)</div>
              <div className="v8-doc"><strong>Mutuo residuo</strong> &mdash; abbassa il patrimonio immobiliare</div>
              <h3 style={{marginTop:'24px'}}>Veicoli</h3>
              <div className="v8-doc"><strong>Targa di auto e moto</strong> intestate ai componenti del nucleo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ESEMPIO */}
      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Laura</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Laura ha 32 anni</strong>, vive a Padova con il compagno Marco e il figlio Tommaso di 4 anni. Laura lavora part-time (1.200&euro;/mese), Marco &egrave; magazziniere (1.500&euro;/mese). Hanno 8.000&euro; in banca e vivono in affitto. Tommaso va all&apos;asilo nido comunale a 380&euro;/mese.</p>
            <p className="rv rv-d2" style={{fontSize:'15px'}}>Senza ISEE, Laura riceve l&apos;assegno unico al minimo: appena 58&euro; al mese per Tommaso. Alla mensa dell&apos;asilo paga la tariffa piena: 7&euro; al giorno, 140&euro; al mese. Del bonus nido non sa nemmeno l&apos;esistenza. Un&apos;amica le dice: &quot;Ma hai fatto l&apos;ISEE? Io con l&apos;ISEE pago la met&agrave; del nido.&quot; Laura va sul sito INPS con lo SPID che aveva gi&agrave; per il Fascicolo Sanitario. Apre la DSU precompilata: i redditi suoi e di Marco sono gi&agrave; dentro, i conti anche. Controlla tutto, conferma, e dopo 2 giorni l&apos;attestazione compare nella sua area riservata. Risultato: <strong style={{color:'var(--v8-bg)'}}>ISEE 16.800&euro;</strong>.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Assegno unico: da 58 a 189&euro;/mese</span><span>+1.572&euro;/anno</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Bonus nido</span><span>+2.500&euro;/anno</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Mensa: da 7 a 3&euro;/giorno</span><span>+500&euro;/anno</span></div>
            <div className="v8-esempio-line v8-esempio-total rv rv-d4"><span>Risparmio annuo</span><span>+4.572&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Laura non ci credeva. <strong style={{color:'#E4F3ED'}}>4.572&euro; in pi&ugrave; all&apos;anno</strong> &mdash; soldi che le spettavano da sempre ma che non ha mai chiesto. 20 minuti di tempo, zero euro di costo.</p>
        </div>
      </section>

      {/* ERRORI */}
      <section className="v8-section" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Errori da <em>evitare</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Dimenticare un conto corrente.</strong> Hai una PostePay Evolution che usi poco? Un conto Revolut aperto per curiosit&agrave;? Una carta Hype o N26? Vanno tutti dichiarati, anche se ci sono pochi euro sopra. L&apos;INPS incrocia sistematicamente i dati con tutte le banche e gli istituti finanziari italiani. Se scopre un conto che hai omesso, annulla l&apos;ISEE retroattivamente e dovrai restituire tutte le agevolazioni gi&agrave; ricevute sulla base di quell&apos;ISEE. Non ne vale la pena: dichiara tutto.</p></div></div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Sbagliare il nucleo familiare.</strong> Il nucleo ISEE non &egrave; sempre chi vive con te fisicamente. Esempio: sei separato di fatto ma non legalmente? Il tuo ex &egrave; ancora nel tuo nucleo ISEE. Convivi con il partner senza essere sposati ma con la stessa residenza? Siete nello stesso nucleo. Questi errori cambiano completamente il calcolo e possono farti perdere agevolazioni o, peggio, farti risultare un ISEE pi&ugrave; basso di quello reale con conseguenze legali. Se hai dubbi, chiedi al CAF prima di compilare.</p></div></div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Mettere solo il saldo, non la giacenza media.</strong> Servono entrambi e nell&apos;ISEE va il pi&ugrave; alto dei due. Se a dicembre avevi 500&euro; ma la giacenza era 8.000&euro;, entra 8.000&euro;.</p></div></div>
            <div className="v8-info warn rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Non fare l&apos;ISEE corrente quando serve.</strong> Hai perso il lavoro? Il tuo reddito &egrave; calato di almeno il 25% rispetto a quello dichiarato? Il tuo patrimonio &egrave; sceso di almeno il 20%? Puoi fare l&apos;ISEE corrente, che fotografa la tua situazione economica di oggi anzich&eacute; quella di due anni fa. Costa zero, si fa come l&apos;ISEE normale, e pu&ograve; sbloccarti bonus e agevolazioni che con l&apos;ISEE ordinario non ti spetterebbero. Va rinnovato ogni 6 mesi.</p></div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="v8-section warm" id="faq">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Domande <em>frequenti</em></h2></div>
          <div className="v8-faq-list" id="faqList">
            {faqItems.map((item, i) => (
              <div key={i} className="v8-faq-item" data-faq>
                <button className="v8-faq-q">{item.q}<span className="v8-faq-icon">+</span></button>
                <div className="v8-faq-a"><p dangerouslySetInnerHTML={{ __html: item.a }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE CORRELATE */}
      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Approfondimenti e <em>guide correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/isee/isee-corrente" className="v8-related-card"><h4>ISEE Corrente</h4><p>Quando serve, requisiti (calo 25%) e procedura completa.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/isee/scadenza" className="v8-related-card"><h4>Scadenza e rinnovo ISEE</h4><p>Quando scade, come rinnovarlo e cosa succede ai bonus.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/730" className="v8-related-card"><h4>Faccio il 730</h4><p>I redditi del 730 sono tra i dati dell&apos;ISEE.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>Faccio lo SPID</h4><p>Per fare l&apos;ISEE online ti serve lo SPID.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>

      <FooterV8 />
    </div>
  );
}
