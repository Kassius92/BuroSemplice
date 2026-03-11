import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import VersionToggle from '@/components/VersionToggle';
import QuizAssegnoUnico from '@/components/QuizAssegnoUnico';
import Tip from '@/components/Tip';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Assegno Unico 2026: Importi, Tabella ISEE, Domanda e Calcolo',
  description: 'Assegno Unico Universale 2026: importi aggiornati per fascia ISEE, come fare domanda, maggiorazioni, scadenze e calcolo. Guida completa e gratuita.',
  keywords: ["assegno unico", "assegno unico 2026", "assegno unico importi", "assegno unico ISEE", "assegno universale", "domanda assegno unico", "maggiorazione figli", "INPS assegno unico", "assegno unico senza ISEE", "bonus figli 2026"],
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-unico' },
  openGraph: {
    title: 'Assegno Unico 2026: Importi, ISEE e Come Fare Domanda',
    description: 'Assegno Unico 2026: importi aggiornati, tabella ISEE, maggiorazioni, scadenze. Guida gratuita con esempio pratico.',
    url: 'https://zeroburocrazia.it/assegno-unico',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogassegnounico.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Assegno Unico 2026: Importi, ISEE e Domanda',
    description: 'Importi aggiornati Assegno Unico 2026, tabella ISEE, maggiorazioni e come fare domanda. Guida gratuita.',
    images: ['https://zeroburocrazia.it/ogassegnounico.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: 'Come funziona' },
  { id: 'importi', label: 'Importi e tabella' },
  { id: 'domanda', label: 'Come fare domanda' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto prendo di Assegno Unico con ISEE basso?", a: "Con <strong>ISEE fino a 17.468,51\u20AC</strong> prendi l\u2019importo massimo: <strong>203,80\u20AC al mese per ogni figlio minorenne</strong>. Con 2 figli sono 407,60\u20AC al mese (quasi 4.900\u20AC all\u2019anno). A questo si aggiungono eventuali maggiorazioni per figli piccoli, disabilit\u00E0 o famiglie numerose." },
  { q: "E se non ho l\u2019ISEE?", a: "Ricevi comunque l\u2019Assegno Unico, ma <strong>al minimo</strong>: 58,30\u20AC al mese per ogni figlio minorenne. \u00C8 molto meno del possibile. Per questo conviene quasi sempre fare l\u2019ISEE \u2014 \u00E8 gratuito al CAF. Se lo presenti entro il <strong>30 giugno 2026</strong>, ricevi anche gli arretrati da marzo." },
  { q: "Devo rifare la domanda ogni anno?", a: "<strong>No.</strong> Se hai gi\u00E0 una domanda attiva, si rinnova in automatico. Devi solo aggiornare l\u2019ISEE ogni anno (entro febbraio per avere subito l\u2019importo corretto, entro giugno per gli arretrati). Devi rifare la domanda solo se \u00E8 stata respinta, revocata o rinunciata." },
  { q: "Quando arriva il pagamento a marzo 2026?", a: "L\u2019INPS paga tra il <strong>19 e il 20 marzo</strong> per chi gi\u00E0 riceveva l\u2019assegno a febbraio. Per le nuove domande presentate a febbraio, il pagamento arriva a <strong>fine marzo</strong> (30-31). Da marzo gli importi sono ricalcolati con l\u2019ISEE 2026." },
  { q: "Posso riceverlo dal 7\u00B0 mese di gravidanza?", a: "<strong>S\u00EC.</strong> L\u2019Assegno Unico spetta anche per i nascituri a partire dal settimo mese di gravidanza. Serve presentare la domanda con il certificato medico che attesta la gravidanza e la data presunta del parto." },
  { q: "Spetta anche ai genitori separati o divorziati?", a: "<strong>S\u00EC.</strong> In caso di affido condiviso, l\u2019assegno viene diviso al 50% tra i due genitori (o 100% a uno dei due su accordo). Chi fa la domanda pu\u00F2 indicare l\u2019altro genitore per la ripartizione." },
  { q: "L\u2019Assegno Unico fa reddito? Si paga l\u2019IRPEF?", a: "<strong>No.</strong> L\u2019Assegno Unico non concorre alla formazione del reddito ai fini IRPEF. Non lo dichiari nel 730 e non ci paghi le tasse. Dal 2026, inoltre, \u00E8 <strong>escluso dal calcolo dell\u2019ISEE</strong>." },
  { q: "Fino a che et\u00E0 spetta?", a: "Fino ai <strong>21 anni</strong> se il figlio studia, lavora con reddito sotto 8.000\u20AC annui, \u00E8 disoccupato in cerca di lavoro o svolge il servizio civile. Per i <strong>figli con disabilit\u00E0</strong> non c\u2019\u00E8 limite di et\u00E0." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Assegno Unico 2026: importi, tabella ISEE, domanda e calcolo',
      description: 'Guida completa all\u2019Assegno Unico Universale 2026: importi aggiornati per fascia ISEE, come fare domanda, maggiorazioni, scadenze e calcolo.',
      url: '/assegno-unico',
      image: 'ogassegnounico.png',
      datePublished: '2026-03-10',
      dateModified: '2026-03-10',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-famiglia">
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
            <div className="cat-badge">{'\uD83D\uDC76'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Assegno Unico <em>2026</em></h1>
            <p className="hero-sub">Quanto ti spetta per ogni figlio, come fare domanda e quali maggiorazioni puoi ottenere. Tabella aggiornata con gli importi per fascia ISEE.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 9 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS &middot; Circolare INPS n. 7/2026 &middot; Legge di Bilancio 2026</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">203&euro;</div><div className="hl">al mese per figlio<br/>(ISEE basso)</div></div>
            <div className="hstat"><div className="hn">58&euro;</div><div className="hl">minimo garantito<br/>anche senza ISEE</div></div>
            <div className="hstat"><div className="hn">{'\uD83D\uDC76'}</div><div className="hl">dal 7&deg; mese<br/>di gravidanza</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} Faccio l&apos;ISEE</a>
              <a href="/figlio" className="ps">{'\uD83D\uDC76'} Aspetto un figlio</a>
              <span className="ps ps-soon">{'\uD83C\uDFE0'} Bonus nido <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-702.assegno-unico-e-universale-per-i-figli-a-carico.html" target="_blank" rel="noopener noreferrer" className="ps">🏛 INPS — Assegno unico</a>
              <a href="https://serviziweb2.inps.it/PassiWeb/jsp/spid/LoginSPID.jsp?uri=https%3A%2F%2Fservizi2.inps.it%2Fservizi%2FIseePost%2FHome&S=S" target="_blank" rel="noopener noreferrer" className="ps">📋 INPS — ISEE Precompilato</a>
              <a href="https://www.inps.it/it/it/it/inps-comunica/notizie/tabelle-assegno-unico-universale-2026.html" target="_blank" rel="noopener noreferrer" className="ps">📊 INPS — Tabelle importi</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">203,80&euro;</div><div className="sl">al mese per figlio (ISEE basso)</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCC9'}</div><div className="sn">58,30&euro;</div><div className="sl">minimo anche senza ISEE</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDC76'}</div><div className="sn">0&ndash;21 anni</div><div className="sl">per figli a carico</div></div>
                <div className="sc r d1"><div className="si">{'\uD83E\uDD30'}</div><div className="sn">7&deg; mese</div><div className="sl">spetta gi&agrave; in gravidanza</div></div>
                <div className="sc r d2"><div className="si">{'\u2705'}</div><div className="sn">Universale</div><div className="sl">spetta a tutti, anche senza ISEE</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">30 giugno</div><div className="sl">domanda entro qui = arretrati</div></div>
              </div>
            </div>
            <QuizAssegnoUnico />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Come funziona l&apos;Assegno Unico (spiegato semplice)</h2>

            <p>L&apos;Assegno Unico e Universale &egrave; un contributo mensile che lo Stato paga a tutte le famiglie con figli a carico. &ldquo;Unico&rdquo; perch&eacute; ha sostituito tutti i vecchi bonus (assegni familiari, detrazioni per figli, bonus beb&egrave;). &ldquo;Universale&rdquo; perch&eacute; spetta a tutti &mdash; dipendenti, autonomi, disoccupati, incapienti. Nessuno escluso.</p>

            <p>Funziona cos&igrave;: lo Stato ti accredita ogni mese un importo per ogni figlio a carico, direttamente sul conto corrente. Quanto prendi dipende da due cose: il tuo <a href="/isee">ISEE</a> e l&apos;et&agrave; dei figli. Pi&ugrave; l&apos;ISEE &egrave; basso, pi&ugrave; prendi. Ma anche con ISEE alto (o senza ISEE) ricevi comunque un importo minimo garantito.</p>

            <p>L&apos;assegno parte dal <strong>7&deg; mese di gravidanza</strong> e dura fino ai <strong>21 anni</strong> del figlio (con alcune condizioni dopo i 18). Per i figli con <Tip t="La condizione di disabilit&agrave; deve essere certificata ai sensi della Legge 104/92. Con disabilit&agrave; certificata l'assegno spetta senza limiti di et&agrave; e con maggiorazioni significative.">disabilit&agrave;</Tip> non c&apos;&egrave; limite di et&agrave;.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Assegno Unico Universale (AUU)</strong> &mdash; Il contributo mensile per figli a carico. Ha sostituito dal marzo 2022 i vecchi assegni familiari, le detrazioni per figli e il bonus beb&egrave;. Si chiede all&apos;INPS.</div>
              <div className="gl-item r d2"><strong>ISEE</strong> &mdash; L&apos;<Tip t="Indicatore della Situazione Economica Equivalente. Un numero che misura la 'ricchezza' della tua famiglia considerando redditi, patrimonio e composizione del nucleo. Si calcola al CAF gratuitamente.">Indicatore della Situazione Economica Equivalente</Tip>. Determina l&apos;importo dell&apos;assegno: ISEE basso = importo alto. Si fa al CAF gratuitamente.</div>
              <div className="gl-item r d3"><strong>DSU</strong> &mdash; La <Tip t="Dichiarazione Sostitutiva Unica. Il modulo che compili (al CAF o online) per ottenere l'ISEE. Contiene i dati su redditi, patrimonio e composizione della tua famiglia. Va aggiornata ogni anno.">Dichiarazione Sostitutiva Unica</Tip>. Il modulo che compili per ottenere l&apos;ISEE. Va rifatta ogni anno, di solito entro febbraio.</div>
              <div className="gl-item r d4"><strong>Maggiorazione</strong> &mdash; Un importo aggiuntivo che si somma all&apos;assegno base. Spetta in situazioni particolari: figli piccoli, disabilit&agrave;, famiglie numerose, genitori giovani o entrambi lavoratori.</div>
              <div className="gl-item r d1"><strong>Figlio a carico</strong> &mdash; Un figlio che dipende economicamente da te. Sotto i 18 anni &egrave; sempre a carico. Tra 18 e 21 deve studiare, cercare lavoro o guadagnare meno di 8.000&euro;/anno.</div>
              <div className="gl-item r d2"><strong>Conguaglio</strong> &mdash; Il ricalcolo che l&apos;INPS fa quando arriva il tuo ISEE aggiornato. Se a gennaio-febbraio hai preso il minimo e poi presenti un ISEE basso, ti pagano la differenza arretrata.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Novit&agrave; 2026: l&apos;Assegno Unico non pesa pi&ugrave; sull&apos;ISEE</div>
              <p>Dal 2026 l&apos;Assegno Unico &egrave; <strong>escluso dal calcolo dell&apos;ISEE</strong>. Significa che riceverlo non alza il tuo ISEE e non ti fa perdere altri bonus. Inoltre la <Tip t="La prima casa (abitazione principale) ora ha una franchigia pi&ugrave; alta nel calcolo ISEE: il valore catastale viene considerato solo per la parte che supera 91.500&euro;. Questo abbassa l'ISEE di chi ha casa di propriet&agrave;.">franchigia sulla prima casa</Tip> &egrave; salita a 91.500&euro; di valore catastale &mdash; molte famiglie avranno un ISEE pi&ugrave; basso e quindi un assegno pi&ugrave; alto, anche a parit&agrave; di reddito.</p>
            </div>
          </div>

          {/* IMPORTI */}
          <div className="sec r" id="importi">
            <div className="sec-tag">Quanto prendi</div>
            <h2>Importi 2026 per fascia ISEE</h2>

            <p>Gli importi 2026 sono stati rivalutati del <strong>+1,4%</strong> rispetto al 2025 per adeguarli all&apos;inflazione. Ecco quanto spetta per ogni figlio:</p>

            <h3>{'\uD83D\uDC76'} Figli minorenni (0&ndash;17 anni)</h3>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Fascia ISEE</th><th>Importo mensile per figlio</th></tr></thead>
                <tbody>
                  <tr><td>Fino a 17.468,51&euro;</td><td className="tg"><strong>203,80&euro;</strong> (massimo)</td></tr>
                  <tr><td>Da 17.468,51&euro; a 46.582,71&euro;</td><td>Scala gradualmente da 203,80&euro; a 58,30&euro;</td></tr>
                  <tr><td>Oltre 46.582,71&euro;</td><td>58,30&euro; (minimo)</td></tr>
                  <tr><td>Senza ISEE (nessuna DSU)</td><td>58,30&euro; (minimo)</td></tr>
                </tbody>
              </table>
            </div>

            <h3>{'\uD83C\uDF93'} Figli maggiorenni (18&ndash;21 anni)</h3>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Fascia ISEE</th><th>Importo mensile per figlio</th></tr></thead>
                <tbody>
                  <tr><td>Fino a 17.468,51&euro;</td><td className="tg"><strong>99,10&euro;</strong> (massimo)</td></tr>
                  <tr><td>Da 17.468,51&euro; a 46.582,71&euro;</td><td>Scala gradualmente da 99,10&euro; a 29,10&euro;</td></tr>
                  <tr><td>Oltre 46.582,71&euro;</td><td>29,10&euro; (minimo)</td></tr>
                </tbody>
              </table>
            </div>

            <p>Attenzione: i figli tra 18 e 21 anni devono trovarsi in almeno una di queste condizioni &mdash; frequentare un corso di studi, svolgere un <Tip t="Un periodo di formazione on the job, non &egrave; un rapporto di lavoro. Pu&ograve; essere curricolare (dentro un percorso di studi) o extracurricolare. Non basta da solo a far perdere lo status di 'a carico'.">tirocinio</Tip>, essere disoccupati in cerca di lavoro, svolgere il servizio civile, o avere un reddito sotto 8.000&euro; annui.</p>

            <h3>{'\u2795'} Maggiorazioni (si sommano all&apos;importo base)</h3>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Situazione</th><th>Maggiorazione mensile</th></tr></thead>
                <tbody>
                  <tr><td>Figlio sotto 1 anno</td><td className="tg"><strong>+50%</strong> dell&apos;importo base</td></tr>
                  <tr><td>Figlio 1&ndash;3 anni (con ISEE &le; 45.574,96&euro;)</td><td className="tg"><strong>+88,80&euro;</strong></td></tr>
                  <tr><td>Nucleo con 3 figli</td><td className="tg">+96,90&euro; per il nucleo</td></tr>
                  <tr><td>Nucleo con 4+ figli</td><td className="tg"><strong>+153&euro;</strong> per il nucleo</td></tr>
                  <tr><td>Madre sotto 21 anni</td><td>+20&euro; per figlio</td></tr>
                  <tr><td>Entrambi i genitori con reddito da lavoro</td><td>+30&euro; per figlio</td></tr>
                  <tr><td>Figlio con <Tip t="La disabilit&agrave; deve essere certificata ai sensi della Legge 104/92 o da commissione medica ASL. In base alla gravit&agrave; (media, grave, non autosufficienza) la maggiorazione varia. Con disabilit&agrave; l'assegno spetta senza limiti di et&agrave;.">disabilit&agrave;</Tip></td><td className="tg">Da +96,90&euro; a +122,80&euro;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Le maggiorazioni si cumulano</div>
              <p>Un figlio sotto 1 anno in una famiglia con 3 figli dove entrambi i genitori lavorano prende: importo base + 50% per neonato + 88,80&euro; per under 3 + 96,90&euro; per terzo figlio + 30&euro; perch&eacute; lavorano entrambi. <strong>I numeri si sommano tutti.</strong></p>
            </div>
          </div>

          {/* DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">Come fare</div>
            <h2>Come fare domanda</h2>

            <p>Se hai gi&agrave; una domanda attiva dall&apos;anno scorso, <strong>non devi fare niente</strong>: si rinnova in automatico. Devi solo aggiornare l&apos;ISEE per avere l&apos;importo corretto.</p>

            <p>Se invece &egrave; la prima volta (o la domanda precedente &egrave; stata respinta), ecco come procedere:</p>

            <div className="steps">
              <div className="step r d1">
                <div className="step-n">1</div>
                <div className="step-c">
                  <h4>Fai l&apos;ISEE</h4>
                  <p>Vai al <Tip t="Centro di Assistenza Fiscale. Un ufficio (come CAAF CGIL, CAF CISL, CAF Acli) dove compilano gratuitamente la tua DSU per ottenere l'ISEE. Porta documenti di reddito e patrimonio di tutto il nucleo familiare.">CAF</Tip> con i documenti di reddito e patrimonio e fai la <a href="/isee">DSU per l&apos;ISEE</a>. &Egrave; gratuito. Senza ISEE prendi il minimo (58,30&euro;/mese per figlio).</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="step-n">2</div>
                <div className="step-c">
                  <h4>Accedi al portale INPS</h4>
                  <p>Vai su <strong>inps.it</strong> e accedi con <a href="/spid">SPID</a>, CIE o CNS. Cerca &ldquo;Assegno unico e universale&rdquo;.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="step-n">3</div>
                <div className="step-c">
                  <h4>Compila la domanda online</h4>
                  <p>Inserisci i dati dei figli (codice fiscale, data di nascita). Se sei in gravidanza dal 7&deg; mese, allega il certificato medico. Indica l&apos;IBAN dove vuoi ricevere il pagamento.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="step-n">4</div>
                <div className="step-c">
                  <h4>Aspetta il pagamento</h4>
                  <p>L&apos;INPS accredita l&apos;assegno ogni mese, di solito tra il 17 e il 20 del mese. Per le nuove domande il primo pagamento arriva entro fine mese.</p>
                </div>
              </div>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Scadenza 30 giugno 2026</div>
              <p>Se presenti la domanda <strong>entro il 30 giugno 2026</strong>, hai diritto agli arretrati da marzo. Dopo il 30 giugno, l&apos;assegno parte dal mese della domanda e perdi i mesi precedenti. Non aspettare.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Alternativa al portale INPS</div>
              <p>Non riesci col sito? Puoi fare domanda al <strong>Patronato</strong> (ACLI, CGIL, CISL &mdash; &egrave; gratis) oppure chiamando il <strong>contact center INPS</strong> al numero 803.164 (da fisso, gratuito) o 06.164.164 (da cellulare).</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa serve</div>
            <h2>Documenti necessari</h2>
            <p>Per fare domanda o aggiornare l&apos;ISEE ti servono questi documenti. Portali tutti al CAF &mdash; &egrave; pi&ugrave; veloce e non rischi errori.</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>SPID, CIE o CNS</strong><span className="note">Per accedere al portale INPS. Se non hai lo <a href="/spid">SPID</a>, fallo prima</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE 2026 in corso di validit&agrave;</strong><span className="note">Fatto al CAF o online. Senza ISEE prendi il minimo</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Codice fiscale di ogni figlio</strong><span className="note">Anche dei nascituri (dopo il 7&deg; mese, con certificato medico)</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN del conto corrente</strong><span className="note">Dove vuoi ricevere l&apos;accredito mensile. Deve essere intestato al richiedente</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Certificato di disabilit&agrave;</strong><span className="note">Solo se applicabile. Legge 104/92 o certificazione commissione ASL</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Non hai ancora lo SPID?</div>
              <p>Per fare la domanda online ti serve un&apos;identit&agrave; digitale. La nostra <a href="/spid">guida allo SPID</a> ti spiega come ottenerlo in 15 minuti. Oppure vai al Patronato e fanno tutto loro.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che fanno tutti</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Non aggiornare l&apos;ISEE a gennaio</div><p>Se non aggiorni la <Tip t="Dichiarazione Sostitutiva Unica. Va rifatta ogni anno per avere un ISEE valido. Quella dell'anno precedente scade il 31 dicembre. Se non la rifai, a marzo l'INPS ti paga il minimo.">DSU</Tip> entro febbraio, a marzo l&apos;INPS ti paga il minimo (58,30&euro; invece che fino a 203,80&euro;). La differenza pu&ograve; essere di <strong>centinaia di euro al mese</strong>. Puoi recuperare gli arretrati presentando l&apos;ISEE entro il 30 giugno, ma intanto perdi liquidit&agrave;.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Non comunicare le variazioni</div><p>Se nasce un figlio, un figlio diventa maggiorenne, o cambia la situazione familiare, <strong>devi aggiornare la domanda</strong> sul portale INPS. Non si aggiorna da solo. Se non lo fai, perdi le maggiorazioni o rischi di dover restituire somme non dovute.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Pensare che &ldquo;non mi spetta perch&eacute; guadagno troppo&rdquo;</div><p>L&apos;Assegno Unico &egrave; <strong>universale</strong>. Anche con ISEE altissimo o senza ISEE prendi almeno 58,30&euro; al mese per figlio. Con 2 figli sono 1.400&euro;/anno che stai regalando allo Stato se non fai domanda. E non si pagano tasse.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Fare domanda dopo il 30 giugno</div><p>Chi fa domanda dopo il 30 giugno <strong>perde gli arretrati da marzo</strong>. L&apos;assegno parte dal mese della domanda. Con ISEE basso e 2 figli, aspettare da marzo a settembre pu&ograve; costarti <strong>oltre 2.400&euro;</strong> di arretrati persi.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: la famiglia di Luca e Sara</h2>

            <p><strong>Luca e Sara</strong> vivono a Torino. Luca &egrave; impiegato (RAL 26.000&euro;), Sara lavora part-time come commessa (RAL 14.000&euro;). Hanno 3 figli: Matteo (8 anni), Emma (4 anni) e il piccolo Leo (10 mesi). Il loro ISEE 2026 &egrave; di <strong>21.000&euro;</strong>.</p>

            <h3>Il calcolo</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Importo base per Matteo (8 anni, ISEE 21.000&euro;)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~175&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Importo base per Emma (4 anni)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~175&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Importo base per Leo (10 mesi)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~175&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Maggiorazione Leo: +50% (sotto 1 anno)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new" style={{color:'#2A9D8F'}}>+87,50&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Maggiorazione Leo: figlio 0&ndash;3 anni</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new" style={{color:'#2A9D8F'}}>+88,80&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Maggiorazione 3 figli (nucleo)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new" style={{color:'#2A9D8F'}}>+96,90&euro;/mese</span></div>
              <div className="db-row"><span className="db-label">Maggiorazione entrambi lavorano (&times;3 figli)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new" style={{color:'#2A9D8F'}}>+90&euro;/mese</span></div>
              <div className="db-row db-total"><span className="db-label">Totale mensile famiglia</span><span className="db-val">~888&euro;/mese</span></div>
            </div>

            <p>Luca e Sara ricevono circa <strong>888&euro; al mese</strong>, cio&egrave; oltre <strong>10.600&euro; all&apos;anno</strong>, esentasse. Quando Leo compir&agrave; 1 anno, la maggiorazione del +50% scomparir&agrave;, ma rester&agrave; quella per under 3 anni.</p>

            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Se non avessero fatto l&apos;ISEE</span><span className="db-old">888&euro;/mese</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~175&euro;/mese</span></div>
              <div className="db-row db-total"><span className="db-label">Differenza annuale</span><span className="db-val" style={{color:'#ff4444'}}>-8.560&euro; persi</span></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Fare l&apos;ISEE &egrave; gratuito e richiede un&apos;ora al CAF. In questo caso vale <strong>8.560&euro; all&apos;anno</strong> di differenza. Per Leo, il primo anno di vita da solo vale circa 2.100&euro; in pi&ugrave; grazie alle maggiorazioni per neonato. Non lasciare questi soldi sul tavolo.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">L&apos;ISEE determina l&apos;importo dell&apos;assegno. Guida completa.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/figlio" className="rc"><span className="rc-e">{'\uD83D\uDC76'}</span><div className="rc-t">Aspetto un figlio</div><div className="rc-d">Tutti i bonus e gli adempimenti per chi diventa genitore.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83E\uDEAA'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Ti serve per fare domanda sul portale INPS.</div><span className="rc-ar">{'\u2192'}</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-702.assegno-unico-e-universale-per-i-figli-a-carico.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">INPS — Assegno unico</div><div className="sbtool-d">Domanda e stato pagamenti</div></div></a>
            <a href="https://serviziweb2.inps.it/PassiWeb/jsp/spid/LoginSPID.jsp?uri=https%3A%2F%2Fservizi2.inps.it%2Fservizi%2FIseePost%2FHome&S=S" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">INPS — ISEE Precompilato</div><div className="sbtool-d">Serve per gli importi pieni</div></div></a>
            <a href="https://www.inps.it/it/it/it/inps-comunica/notizie/tabelle-assegno-unico-universale-2026.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">INPS — Tabelle importi</div><div className="sbtool-d">Importi aggiornati 2026</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} Faccio l&apos;ISEE<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/figlio" className="sbguide">{'\uD83D\uDC76'} Aspetto un figlio<span className="sbg-ar">{'\u2192'}</span></a>
            <span className="sbguide sbguide-soon">{'\uD83C\uDFE0'} Bonus nido<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="assegno-unico" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
