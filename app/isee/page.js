import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizIsee from '@/components/QuizIsee';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
  description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
  alternates: { canonical: 'https://zeroburocrazia.it/isee' },
  openGraph: {
    title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
    description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
    url: 'https://zeroburocrazia.it/isee',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-isee.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    images: ['https://zeroburocrazia.it/og-isee.png'],
    title: "ISEE 2026: Come Farlo, Documenti Necessari, Costi e Simulazione",
    description: "ISEE 2026: come si fa, documenti necessari, dove farlo gratis, quanto vale, simulazione online e a cosa serve. Guida gratuita aggiornata.",
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'serve', label: 'A cosa serve' },
  { id: 'come-si-fa', label: 'Come si fa' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'costi', label: 'Costi', bh: true },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'corrente', label: 'ISEE corrente', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto dura l'ISEE?", a: "<strong>L\u2019ISEE ordinario vale dal giorno in cui lo fai fino al 31 dicembre dello stesso anno.</strong> Quindi un ISEE fatto a gennaio vale 12 mesi, uno fatto a ottobre vale solo 3 mesi. Per questo conviene farlo il prima possibile. Dal 1\u00B0 gennaio dell\u2019anno successivo serve un ISEE nuovo." },
  { q: "Vivo con i miei genitori, il mio ISEE include i loro redditi?", a: "<strong>S\u00EC, se risulti nel loro stato di famiglia.</strong> Il nucleo familiare dell\u2019ISEE coincide con le persone presenti nello stato di famiglia anagrafico. L\u2019unico modo per avere un ISEE indipendente \u00E8 cambiare residenza e avere un tuo stato di famiglia separato. Attenzione: per alcune prestazioni (come l\u2019universit\u00E0) i genitori rientrano nel calcolo anche se non convivi con loro, a meno che non dimostri di essere economicamente indipendente da almeno 2 anni." },
  { q: "Sono separato/divorziato, come funziona il nucleo?", a: "Se sei <strong>legalmente separato o divorziato</strong> e hai una residenza diversa dal tuo ex, siete in due nuclei separati. I figli rientrano nel nucleo del genitore con cui convivono. Se invece siete separati di fatto ma ancora sullo stesso stato di famiglia, risultate nello stesso nucleo ISEE. Il consiglio: se ti stai separando e vuoi fare l\u2019ISEE, prima fai il cambio di residenza." },
  { q: "Ho dei risparmi ma non li uso, mi alzano l'ISEE?", a: "<strong>S\u00EC.</strong> L\u2019ISEE considera il patrimonio mobiliare (conti, depositi, investimenti) oltre ai redditi. C\u2019\u00E8 una franchigia (circa 6.000\u20AC + 2.000\u20AC per ogni figlio) sotto la quale il patrimonio non conta, ma sopra quella soglia ogni euro in pi\u00F9 alza l\u2019ISEE." },
  { q: "Posso fare l'ISEE da solo senza CAF?", a: "<strong>S\u00EC, dal sito dell\u2019INPS.</strong> La DSU precompilata ha gi\u00E0 quasi tutti i dati. Tu devi solo verificare, eventualmente integrare, e confermare. Serve lo SPID. Se la tua situazione \u00E8 semplice (lavoro dipendente, un conto corrente, nessun immobile di propriet\u00E0), ci metti 15 minuti." },
  { q: "Ho sbagliato qualcosa nell'ISEE, posso correggerlo?", a: "<strong>S\u00EC.</strong> Puoi presentare una nuova DSU in qualsiasi momento \u2014 la nuova sostituisce la precedente. Se hai gi\u00E0 ricevuto bonus sulla base di un ISEE errato, potresti dover restituire le somme in eccesso. Per questo vale la pena controllare bene i numeri prima di inviare." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: "Guida completa all'ISEE 2026: come farlo e a cosa serve",
      description: "Come fare l'ISEE nel 2026: documenti necessari, dove farlo, quanto vale e a cosa serve. Guida gratuita e aggiornata.",
      url: '/isee',
      image: 'og-isee.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-04',
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
            <h1>Faccio l&apos;<em>ISEE</em></h1>
            <p className="hero-sub">Cos&apos;&egrave;, a cosa serve, come si fa, quali documenti servono. Se devi chiedere un bonus o un&apos;agevolazione, parti da qui.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-w">📅 Validità: 1 gen — 31 dic 2026</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · Agenzia delle Entrate · Ministero del Lavoro e delle Politiche Sociali</div>
            <PrintButton />
          </div>

          <div className="hero-right">
            <div className="hstat">
              <div className="hn">0€</div>
              <div className="hl">online con SPID<br/>o gratis al CAF</div>
            </div>
            <div className="hstat">
              <div className="hn">15&apos;</div>
              <div className="hl">con la precompilata<br/>INPS online</div>
            </div>
            <div className="hstat">
              <div className="hn">31/12</div>
              <div className="hl">scadenza annuale<br/>vale tutto l&apos;anno</div>
            </div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* CONTENT */}
      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/spid" className="ps done">✓ SPID</a><span className="pa">›</span>
              <a href="/isee" className="ps active">📋 ISEE</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">📋</div><div className="sn">1 numero</div><div className="sl">misura la ricchezza del nucleo familiare</div></div>
                <div className="sc sg r d2"><div className="si">💰</div><div className="sn">0€</div><div className="sl">online o al CAF, gratis</div></div>
                <div className="sc    r d3"><div className="si">⏱</div><div className="sn">15–20&apos;</div><div className="sl">con la precompilata INPS</div></div>
                <div className="sc    r d1"><div className="si">📅</div><div className="sn">31/12</div><div className="sl">scade il 31 dicembre di ogni anno</div></div>
                <div className="sc tc r d2"><div className="si">🔐</div><div className="sn">SPID</div><div className="sl">ti serve per farlo online</div></div>
                <div className="sc    r d3"><div className="si">🎯</div><div className="sn">Bonus</div><div className="sl">senza ISEE perdi agevolazioni</div></div>
              </div>
            </div>
            <QuizIsee />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; l&apos;ISEE</h2>
            <p>L&apos;ISEE &egrave; un numero che dice <strong>quanto &egrave; &quot;ricca&quot; la tua famiglia</strong>. Non guarda solo il tuo stipendio — mette insieme i redditi, i risparmi, gli investimenti e gli immobili di tutto il nucleo familiare, e tira fuori un valore in euro.</p>
            <p>Pi&ugrave; basso &egrave; il tuo ISEE, pi&ugrave; agevolazioni hai diritto a ricevere. Un ISEE di 15.000€ ti apre le porte a quasi tutti i bonus. Un ISEE di 45.000€ ti esclude dalla maggior parte. &Egrave; la &quot;chiave&quot; che lo Stato usa per decidere chi aiutare e quanto.</p>
            <p>Per ottenerlo devi compilare la <strong>DSU</strong> (Dichiarazione Sostitutiva Unica) — un modulo dove inserisci i dati della famiglia. L&apos;INPS calcola il numero. L&apos;ISEE vale <strong>dal giorno in cui lo fai al 31 dicembre dello stesso anno</strong>.</p>
            <div className="ib tip r">
              <div className="ib-t">💡 ISEE e 730 non sono la stessa cosa</div>
              <p>Il <strong>730</strong> &egrave; la dichiarazione dei redditi — serve a pagare le tasse e recuperare detrazioni. L&apos;<strong>ISEE</strong> &egrave; la fotografia della situazione economica della famiglia — serve a chiedere bonus e agevolazioni. Sono due cose diverse e indipendenti. Puoi fare l&apos;ISEE senza aver fatto il 730 e viceversa. Per&ograve; i dati del 730 (redditi) sono tra quelli che servono per l&apos;ISEE.</p>
            </div>
            <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Detrazioni, rimborso, come massimizzare.</div><span className="xlink-ar">→</span></a>
          </div>

          {/* A COSA SERVE */}
          <div className="sec r" id="serve">
            <div className="sec-tag">Utilizzo</div>
            <h2>A cosa serve (in concreto)</h2>
            <p>Quasi tutti i bonus e le agevolazioni pubbliche in Italia richiedono l&apos;ISEE. Se non lo fai, non puoi chiederli — anche se ne avresti diritto.</p>
            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">👶</div><div className="uc-n">Assegno unico figli</div><div className="uc-d">Da 58€ a 204€ al mese per figlio. Senza ISEE ricevi il minimo.</div></div>
              <div className="uc r d2"><div className="uc-e">🏫</div><div className="uc-n">Rette universitarie</div><div className="uc-d">Esonero totale sotto i 22.000€. Riduzioni fino a 30.000€.</div></div>
              <div className="uc r d3"><div className="uc-e">🍽️</div><div className="uc-n">Mensa scolastica</div><div className="uc-d">Il costo varia in base all&apos;ISEE. Fasce da 0€ a tariffa piena.</div></div>
              <div className="uc r d4"><div className="uc-e">🏠</div><div className="uc-n">Bonus affitto</div><div className="uc-d">Contributi comunali per l&apos;affitto. Servono ISEE basso + requisiti locali.</div></div>
              <div className="uc r d1"><div className="uc-e">💊</div><div className="uc-n">Ticket sanitari</div><div className="uc-d">Esenzione dal ticket per visite ed esami se il reddito &egrave; basso.</div></div>
              <div className="uc r d2"><div className="uc-e">🧒</div><div className="uc-n">Bonus nido</div><div className="uc-d">Fino a 3.000€/anno per l&apos;asilo nido. L&apos;importo dipende dall&apos;ISEE.</div></div>
            </div>
            <p>E poi: bonus trasporti (60€), bonus psicologo (fino a 1.500€), social card (460€), case popolari, agevolazioni TARI, bonus bollette luce e gas.</p>
            <div className="ib warn r">
              <div className="ib-t">⚠️ Senza ISEE perdi soldi — esempio concreto</div>
              <p>Se hai un figlio e non presenti l&apos;ISEE, ricevi l&apos;assegno unico al <strong>minimo</strong>: 58€ al mese. Ma se il tuo ISEE &egrave; sotto i 17.500€, riceveresti <strong>204€ al mese</strong>. Sono <strong>1.752€ all&apos;anno che butti via</strong> solo perch&eacute; non hai compilato un modulo. E ci vogliono 15 minuti.</p>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come-si-fa">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa</h2>
            <p>Hai 3 opzioni. Tutte gratuite (tranne il commercialista).</p>

            <h3>Opzione 1: Online da solo (DSU precompilata)</h3>
            <p>Dal 2024 l&apos;INPS mette a disposizione la <strong>DSU precompilata</strong> — un modulo che ha gi&agrave; dentro quasi tutti i tuoi dati (redditi, conti, immobili). Tu devi solo controllare, aggiungere eventuali dati mancanti e confermare.</p>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Vai su inps.it e accedi con SPID</strong>
                  <p>Cerca &quot;ISEE precompilato&quot; nella barra di ricerca. Se non hai lo SPID, fallo prima — ci vogliono 15 minuti.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Controlla i dati precompilati</strong>
                  <p>L&apos;INPS ha gi&agrave; i tuoi redditi, i conti correnti e gli immobili. Verifica che siano corretti. Se manca qualcosa (es. un conto all&apos;estero o un immobile non censito), aggiungilo.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Inserisci i dati del nucleo familiare</strong>
                  <p>Il nucleo familiare per l&apos;ISEE &egrave; chi risulta nel tuo stato di famiglia + il coniuge (anche se non convivente). Devi inserire i dati di tutti i componenti.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Conferma e invia</strong>
                  <p>L&apos;INPS calcola il tuo ISEE in pochi giorni (a volte in poche ore). Ricevi l&apos;attestazione nella tua area riservata su inps.it.</p>
                </div>
              </div>
            </div>
            <a href="/spid" className="xlink r"><span className="xlink-em">🔐</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Come farlo gratis in 15 minuti.</div><span className="xlink-ar">→</span></a>

            <h3>Opzione 2: Al CAF (gratis)</h3>
            <p>Vai a un CAF con tutti i documenti (lista sotto). Compilano la DSU per te e inviano tutto all&apos;INPS. <strong>&Egrave; gratis</strong> — i CAF vengono pagati dallo Stato per questo servizio. Unico neo: nei primi mesi dell&apos;anno c&apos;&egrave; coda, prenota con anticipo.</p>

            <h3>Opzione 3: Dal commercialista</h3>
            <p>Il commercialista pu&ograve; fare l&apos;ISEE per te, ma <strong>ti far&agrave; pagare 30–80€</strong> per un servizio che al CAF &egrave; gratis. Conviene solo se hai una situazione patrimoniale molto complessa (immobili in pi&ugrave; regioni, conti esteri, trust).</p>

            <div className="ib mon r">
              <div className="ib-t">💶 Il consiglio onesto di ZeroBurocrazia</div>
              <p><strong>Se hai dimestichezza con SPID e computer</strong> → fallo online con la precompilata. Ci metti 15–20 minuti ed &egrave; tutto gratis.<br/><strong>Se non ti fidi o preferisci un aiuto</strong> → vai al CAF. &Egrave; gratis, ci metti mezz&apos;ora, e lo fanno loro. Prenota a gennaio per evitare le code.<br/><strong>Se hai situazioni complesse</strong> (immobili all&apos;estero, separazione in corso) → vai dal commercialista. Paga di pi&ugrave; ma evita errori.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>
            <p>Questi servono per <strong>tutti i componenti del nucleo familiare</strong> — non solo per te. Se vivi con i genitori, servono anche i loro dati.</p>

            <h3>Documenti di identit&agrave;</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">🪪</div><div className="clb"><strong>Documento d&apos;identit&agrave; e codice fiscale</strong><span className="note">Di ogni componente del nucleo familiare</span></div></li>
              <li className="cli r d2"><div className="ci">👨‍👩‍👧</div><div className="clb"><strong>Stato di famiglia</strong><span className="note">Lo scarichi online con lo SPID dal sito del tuo Comune in 2 minuti</span></div></li>
            </ul>

            <h3>Redditi (anno 2024)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">🧾</div><div className="clb"><strong>Ultima dichiarazione dei redditi (730 o Redditi)</strong><span className="note">Quella fatta nel 2025 sui redditi del 2024. Se non l&apos;hai fatta, servono le CU.</span></div></li>
              <li className="cli r d2"><div className="ci">📄</div><div className="clb"><strong>CU 2025 (Certificazione Unica)</strong><span className="note">Te la d&agrave; il datore di lavoro. Se hai la pensione, te la d&agrave; l&apos;INPS.</span></div></li>
              <li className="cli r d3"><div className="ci">📋</div><div className="clb"><strong>Redditi esenti (se presenti)</strong><span className="note">Borse di studio, assegni di mantenimento, pensioni di invalidit&agrave;, indennit&agrave; di accompagnamento</span></div></li>
            </ul>

            <h3>Patrimonio (saldo al 31 dicembre 2024)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">🏦</div><div className="clb"><strong>Saldo e giacenza media di tutti i conti correnti</strong><span className="note">Servono sia il saldo al 31/12/2024 sia la giacenza media annua. Lo chiedi alla banca o scarichi dall&apos;home banking.</span></div></li>
              <li className="cli r d2"><div className="ci">💳</div><div className="clb"><strong>Carte prepagate con IBAN</strong><span className="note">PostePay Evolution, Hype, Revolut, N26 — tutte quelle con IBAN vanno dichiarate come conti correnti</span></div></li>
              <li className="cli r d3"><div className="ci">📊</div><div className="clb"><strong>Titoli, azioni, obbligazioni, fondi</strong><span className="note">Valore al 31/12/2024. Se hai un deposito titoli, la banca ti d&agrave; il documento.</span></div></li>
              <li className="cli r d4"><div className="ci">🏠</div><div className="clb"><strong>Valore immobili (rendita catastale)</strong><span className="note">La trovi nella visura catastale, scaricabile gratis dal sito dell&apos;Agenzia delle Entrate con SPID</span></div></li>
              <li className="cli r d1"><div className="ci">🏗</div><div className="clb"><strong>Mutuo residuo</strong><span className="note">Se hai un mutuo, il debito residuo al 31/12/2024 abbassa il patrimonio immobiliare (e quindi l&apos;ISEE)</span></div></li>
            </ul>

            <h3>Veicoli</h3>
            <ul className="cl">
              <li className="cli r"><div className="ci">🚗</div><div className="clb"><strong>Targa di auto e moto</strong><span className="note">Di tutti i veicoli intestati ai componenti del nucleo</span></div></li>
            </ul>
          </div>

          {/* COSTI */}
          <div className="sec breve-hide r" id="costi">
            <div className="sec-tag">Confronto</div>
            <h2>Quanto costa e quanto tempo ci vuole</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Metodo</th><th>Costo</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Online (precompilata INPS)</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">Gratis</td><td>15–20 min compilazione. Attestazione in 1–3 giorni lavorativi.</td></tr>
                  <tr><td><strong>CAF / Patronato</strong></td><td className="cfr">Gratis</td><td>30 min di appuntamento. Attestazione in 3–10 giorni. Attesa appuntamento: da 1 giorno a 3 settimane.</td></tr>
                  <tr><td><strong>Commercialista</strong></td><td className="cv">30–80€</td><td>15 min tu, il resto lo fa lui. Attestazione in 3–7 giorni.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r">
              <div className="ib-t">💡 Quando conviene farlo</div>
              <p>L&apos;ISEE vale per tutto l&apos;anno, quindi fallo <strong>il prima possibile</strong> — idealmente a gennaio o febbraio. Molti bonus hanno scadenze o fondi limitati: chi arriva prima, prende di pi&ugrave;. Al CAF le code sono pi&ugrave; corte a inizio anno.</p>
            </div>
          </div>

          {/* BLOCCO AFFILIAZIONE: ISEE ONLINE */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Fai l&apos;ISEE online con un CAF a distanza</div>
                <div className="aff-text">Carichi i documenti, il CAF compila e invia la DSU per te. Niente code, niente appuntamenti. Gratis o a costo minimo.</div>
                <div className="aff-note">* Link in partnership — se usi il servizio, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="QUI_LINK_AFFILIATO_ISEE" target="_blank" rel="noopener sponsored" className="aff-btn">
                Fai l&apos;ISEE online →
              </a>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori da evitare</h2>
            <div className="ib warn r"><div className="ib-t">⚠️ Dimenticare i conti correnti</div><p>Ogni conto, anche quelli che usi poco, va dichiarato. La PostePay Evolution conta come un conto corrente. Se ometti un conto e l&apos;INPS se ne accorge (e se ne accorge, perch&eacute; incrocia i dati con le banche), l&apos;ISEE viene annullato e perdi tutte le agevolazioni retroattivamente.</p></div>
            <div className="ib warn r d1"><div className="ib-t">⚠️ Sbagliare il nucleo familiare</div><p>Il nucleo familiare dell&apos;ISEE non &egrave; sempre uguale a chi vive con te. Se sei separato ma non ancora divorziato, il tuo ex coniuge potrebbe rientrare nel nucleo. Questi casi vanno valutati con attenzione — un errore qui cambia tutto il calcolo.</p></div>
            <div className="ib warn r d2"><div className="ib-t">⚠️ Usare la giacenza media sbagliata</div><p>La banca ti d&agrave; due numeri: il <strong>saldo al 31/12</strong> e la <strong>giacenza media</strong>. Per l&apos;ISEE serve il pi&ugrave; alto dei due. Se a dicembre avevi 500€ ma la giacenza media era 8.000€, nell&apos;ISEE entra 8.000€. Molti sbagliano e mettono solo il saldo.</p></div>
            <div className="ib warn r d3"><div className="ib-t">⚠️ Non aggiornare l&apos;ISEE dopo un cambiamento importante</div><p>Hai perso il lavoro? Un familiare ha avuto un calo di reddito del 25% o pi&ugrave;? Puoi fare l&apos;<strong>ISEE corrente</strong> (vedi sotto) che riflette la situazione attuale. Se non lo fai, perdi agevolazioni che ti spetterebbero.</p></div>
          </div>

          {/* ISEE CORRENTE */}
          <div className="sec breve-hide r" id="corrente">
            <div className="sec-tag">Aggiornamento</div>
            <h2>ISEE corrente: se la tua situazione &egrave; cambiata</h2>
            <p>L&apos;ISEE ordinario fotografa i redditi di <strong>due anni fa</strong> e il patrimonio dell&apos;anno precedente. Ma se nel frattempo la tua vita &egrave; cambiata drasticamente — hai perso il lavoro, un familiare &egrave; venuto a mancare, i redditi sono crollati — quel numero non ti rappresenta pi&ugrave;.</p>
            <p>Per questo esiste l&apos;<strong>ISEE corrente</strong>: un aggiornamento che tiene conto della situazione attuale.</p>

            <h3>Quando puoi richiederlo</h3>
            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">Variazione reddito</div>
                <div className="ic-d">Se un componente ha perso il lavoro, &egrave; in cassa integrazione, o ha avuto una riduzione del reddito superiore al 25%.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">Variazione patrimonio</div>
                <div className="ic-d">Se il patrimonio mobiliare (conti, investimenti) &egrave; diminuito di oltre il 20% rispetto a quello dichiarato.</div>
              </div>
            </div>
            <p>L&apos;ISEE corrente si fa allo stesso modo dell&apos;ordinario (online o al CAF), ma va aggiornato ogni 6 mesi — non dura tutto l&apos;anno.</p>
            <div className="ib tip r">
              <div className="ib-t">💡 Un esempio pratico</div>
              <p>Mario nel 2024 guadagnava 30.000€. Nel 2025 ha perso il lavoro e ora prende la NASpI (15.000€). Il suo ISEE ordinario 2026 &egrave; calcolato sui redditi 2024 → risulta alto. Con l&apos;ISEE corrente, usa i redditi attuali → l&apos;ISEE scende e Mario accede a pi&ugrave; bonus. Se non fa l&apos;ISEE corrente, perde agevolazioni per migliaia di euro.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CTA FINALE */}
          <div className="ctabanner r">
            <h3>Vuoi sapere esattamente quanto ti spetta?</h3>
            <p>Rispondi a 5 domande sulla tua situazione e ricevi la scheda personalizzata: ISEE stimato, bonus a cui hai diritto, CAF pi&ugrave; vicino a te.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">I redditi del 730 sono tra i dati che servono per l&apos;ISEE.</div><span className="rc-ar">→</span></a>
              <a href="/spid" className="rc"><span className="rc-e">🔐</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Per fare l&apos;ISEE online ti serve lo SPID. Come farlo in 15 minuti.</div><span className="rc-ar">→</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">L&apos;immobile entra nell&apos;ISEE. Scopri come viene calcolato.</div><span className="rc-ar">→</span></a>
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
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">🎯</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri se ti serve</div></div></a>
            <a href="#costi" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Confronto metodi</div><div className="sbtool-d">Online vs CAF vs commercialista</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova CAF vicino</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      {/* PROMEMORIA SCADENZE */}
      <BrevoForm pageName="isee" />
      <Footer variant="scheda" />
    </>
  );
}
