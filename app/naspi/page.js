import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizNaspi from '@/components/QuizNaspi';
import CalcNaspi from '@/components/CalcNaspi';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda',
  description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.',
  alternates: { canonical: 'https://zeroburocrazia.it/naspi' },
  openGraph: {
    title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda',
    description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/naspi',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda',
    description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.',
    images: ['https://zeroburocrazia.it/ognaspi.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'è" },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'quanto-spetta', label: 'Quanto spetta' },
  { id: 'durata', label: 'Durata', bh: true },
  { id: 'domanda', label: 'Come fare domanda' },
  { id: 'errori', label: 'Errori da evitare', bh: true },
  { id: 'lavorare', label: 'Lavorare durante', bh: true },
  { id: 'anticipata', label: 'NASpI anticipata', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Ho dato le dimissioni: ho diritto alla NASpI?", a: "<strong>Dipende.</strong> Le dimissioni volontarie normali no. Ma se ti sei dimesso per <strong>giusta causa</strong> (stipendio non pagato, mobbing, molestie, trasferimento immotivato) allora sì. Anche le dimissioni durante il periodo di maternità/paternità danno diritto alla NASpI. In tutti gli altri casi, niente." },
  { q: "Quanto tempo ho per fare domanda?", a: "<strong>68 giorni</strong> dalla data di cessazione del rapporto di lavoro. Se superi questo termine, perdi il diritto. Non ci sono proroghe, salvo casi molto specifici come malattia o maternità in corso. Il consiglio: fai domanda il prima possibile — se la presenti entro 8 giorni, la NASpI parte dall'8° giorno. Se aspetti di più, perdi i giorni." },
  { q: "Quanto ci mette l'INPS a pagare?", a: "Il primo pagamento arriva generalmente in <strong>30-45 giorni</strong> dalla presentazione della domanda. I pagamenti successivi sono mensili. Puoi controllare lo stato della pratica su MyINPS." },
  { q: "La NASpI si paga l'IRPEF?", a: "<strong>Sì.</strong> La NASpI è tassata come reddito da lavoro dipendente. L'INPS trattiene l'IRPEF prima di pagarti, quindi l'importo che ricevi è già al netto. A fine anno l'INPS ti rilascia la Certificazione Unica (CU)." },
  { q: "Posso lavorare mentre prendo la NASpI?", a: "<strong>Sì, con limiti.</strong> Se fai lavoro dipendente, il reddito annuo non deve superare 8.500€. Se apri partita IVA o lavori autonomo, il limite è 5.500€. In entrambi i casi devi comunicarlo all'INPS entro 30 giorni con il modello NASpI-COM, altrimenti perdi tutto." },
  { q: "Che succede se trovo lavoro e poi lo riperdo?", a: "Se il nuovo contratto dura meno di 6 mesi, la NASpI precedente viene <strong>sospesa</strong> e poi riprende. Se dura più di 6 mesi, puoi fare una nuova domanda NASpI (se hai i requisiti). Attenzione: dal 2025, se ti eri dimesso volontariamente dal lavoro precedente, devi aver lavorato almeno 13 settimane nel nuovo rapporto per avere diritto alla NASpI." },
  { q: "La NASpI conta per la pensione?", a: "<strong>Sì.</strong> Il periodo coperto dalla NASpI viene accreditato con contribuzione figurativa — gratis, automaticamente, senza che tu debba fare nulla. Questi contributi valgono per la pensione." },
  { q: "Cos'è il SIISL?", a: "È il <strong>Sistema Informativo per l'Inclusione Sociale e Lavorativa</strong>. Dal 2024, chi percepisce la NASpI viene iscritto automaticamente. Serve per le politiche attive del lavoro: formazione, offerte di lavoro, patto di servizio con il Centro per l'Impiego." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'NASpI 2026: requisiti, importo, durata e come fare domanda',
      description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS e novità sulla NASpI anticipata.',
      url: '/naspi',
      image: 'ognaspi.png',
      datePublished: '2026-03-07',
      dateModified: '2026-03-07',
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
            <h1>Ho perso il <em>lavoro</em></h1>
            <p className="hero-sub">NASpI: la disoccupazione spiegata semplice. Quanto ti spetta, come fare domanda, le scadenze da non perdere e gli errori che ti fanno perdere soldi.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · Circolare n. 4/2026 · Legge di Bilancio 2026 · D.Lgs. 22/2015</div>
            <PrintButton />
          </div>

          {/* Floating stat cards */}
          <div className="hero-right">
            <div className="hstat">
              <div className="hn">1.584€</div>
              <div className="hl">massimo mensile<br/>lordo 2026</div>
            </div>
            <div className="hstat">
              <div className="hn">68gg</div>
              <div className="hl">tempo massimo<br/>per fare domanda</div>
            </div>
            <div className="hstat">
              <div className="hn">24</div>
              <div className="hl">mesi di durata<br/>massima</div>
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
              <a href="/naspi" className="ps active">💼 NASpI</a><span className="pa">›</span>
              <a href="/isee" className="ps">ISEE</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a><span className="pa">›</span>
              <a href="/spid" className="ps">SPID</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💰</div><div className="sn">Fino a 1.584€</div><div className="sl">lordi al mese (2026)</div></div>
                <div className="sc sg r d2"><div className="si">⏱</div><div className="sn">68 giorni</div><div className="sl">tempo massimo per la domanda</div></div>
                <div className="sc    r d3"><div className="si">📅</div><div className="sn">Max 24 mesi</div><div className="sl">di durata (metà settimane lavorate)</div></div>
                <div className="sc    r d1"><div className="si">📱</div><div className="sn">Online</div><div className="sl">domanda su INPS con SPID/CIE</div></div>
                <div className="sc    r d2"><div className="si">📉</div><div className="sn">-3%/mese</div><div className="sl">riduzione dal 6° mese</div></div>
                <div className="sc bl r d3"><div className="si">🏛</div><div className="sn">Gratis</div><div className="sl">anche tramite patronato</div></div>
              </div>
            </div>
            <QuizNaspi />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è la NASpI</h2>
            <p>NASpI sta per <strong>Nuova Assicurazione Sociale per l&apos;Impiego</strong>. In parole povere: è l&apos;assegno di disoccupazione. Se perdi il lavoro non per colpa tua, lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione.</p>
            <p>Non è un&apos;elemosina: è un&apos;assicurazione che hai già pagato con i contributi versati durante il lavoro. Se hai lavorato come dipendente e hai versato contributi, <strong>hai diritto a riaverli indietro</strong> quando ne hai bisogno.</p>
            <p>L&apos;importo dipende da quanto guadagnavi prima: più era alto lo stipendio, più alta sarà la NASpI (con un tetto massimo). Dura in proporzione a quanto hai lavorato negli ultimi 4 anni.</p>
            <div className="ib tip r">
              <div className="ib-t">💡 Non è solo per i licenziati</div>
              <p>La NASpI non spetta solo a chi viene licenziato in modo classico. Spetta anche a chi ha un <strong>contratto a termine scaduto</strong>, a chi si è dimesso per <strong>giusta causa</strong> (stipendio non pagato, mobbing), e alle <strong>mamme/papà che si dimettono</strong> durante il primo anno di vita del figlio. Se rientri in uno di questi casi, continua a leggere.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi ne ha diritto</div>
            <h2>Requisiti per la NASpI nel 2026</h2>
            <p>Per avere la NASpI devi soddisfare <strong>tutti e tre</strong> questi requisiti contemporaneamente:</p>

            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">1. Disoccupazione involontaria</div>
                <div className="ic-d">Hai perso il lavoro e non è stata una tua scelta. Rientrano: licenziamento (qualsiasi tipo), fine contratto a termine, dimissioni per giusta causa, risoluzione consensuale in sede protetta.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">2. Almeno 13 settimane di contributi</div>
                <div className="ic-d">Devi aver versato almeno 13 settimane di contributi &quot;contro la disoccupazione&quot; nei 4 anni prima della cessazione. Circa 3 mesi di lavoro dipendente.</div>
              </div>
              <div className="ic r d3">
                <div className="ic-n">3. Domanda entro 68 giorni</div>
                <div className="ic-d">Devi fare domanda all&apos;INPS entro 68 giorni dalla fine del rapporto di lavoro. Dopo questo termine, il diritto decade — niente proroghe.</div>
              </div>
            </div>

            <div className="ib warn r d2">
              <div className="ib-t">⚠️ Dimissioni volontarie = niente NASpI</div>
              <p>Se ti sei dimesso di tua volontà (senza giusta causa), <strong>non hai diritto alla NASpI</strong>. E attenzione: dal 2025, se ti dimetti e poi trovi un nuovo lavoro che perdi involontariamente, devi aver lavorato <strong>almeno 13 settimane nel nuovo rapporto</strong> per avere diritto alla NASpI. Inoltre, dal 2025, l&apos;assenza ingiustificata prolungata è equiparata a dimissioni volontarie — niente NASpI neanche in quel caso.</p>
            </div>

            <h3>Chi ha diritto, in dettaglio</h3>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Situazione</th><th>NASpI?</th></tr></thead>
                <tbody>
                  <tr><td>Licenziamento (qualsiasi motivo)</td><td className="tg">✅ Sì</td></tr>
                  <tr><td>Fine contratto a tempo determinato</td><td className="tg">✅ Sì</td></tr>
                  <tr><td>Dimissioni per giusta causa</td><td className="tg">✅ Sì</td></tr>
                  <tr><td>Dimissioni durante maternità/paternità</td><td className="tg">✅ Sì</td></tr>
                  <tr><td>Risoluzione consensuale (sede protetta)</td><td className="tg">✅ Sì</td></tr>
                  <tr><td>Dimissioni volontarie</td><td className="tr">❌ No</td></tr>
                  <tr><td>Assenza ingiustificata prolungata</td><td className="tr">❌ No</td></tr>
                  <tr><td>Dipendenti PA a tempo indeterminato</td><td className="tr">❌ No</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* QUANTO SPETTA */}
          <div className="sec r" id="quanto-spetta">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto spetta di NASpI nel 2026</h2>
            <p>L&apos;importo si calcola sulla <strong>retribuzione media imponibile degli ultimi 4 anni</strong>. Non è il tuo ultimo stipendio — è una media di tutto quello che hai guadagnato (come dipendente) nei 4 anni prima di perdere il lavoro.</p>

            <h3>Il calcolo</h3>
            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">Se la media è ≤ 1.456,72€/mese</div>
                <div className="ic-d">La NASpI è il <strong>75%</strong> della retribuzione media. Esempio: media 1.200€ → NASpI 900€ lordi.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">Se la media è &gt; 1.456,72€/mese</div>
                <div className="ic-d">NASpI = 75% di 1.456,72€ (cioè 1.092,54€) <strong>+</strong> 25% della parte che supera la soglia. Esempio: media 1.800€ → 1.092,54 + 85,82 = 1.178,36€ lordi.</div>
              </div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Il tetto massimo 2026</div>
              <p>Qualunque sia il tuo stipendio, la NASpI non può superare <strong>1.584,70€ lordi al mese</strong> (circa 1.200-1.250€ netti). Questo tetto viene aggiornato ogni anno con l&apos;inflazione — nel 2026 è salito dell&apos;1,4% rispetto al 2025.</p>
            </div>

            <CalcNaspi />

            <h3>La riduzione progressiva (décalage)</h3>
            <p>La NASpI non resta uguale per tutta la durata. Dal <strong>6° mese</strong> (151° giorno) l&apos;importo si riduce del <strong>3% ogni mese</strong>, calcolato sull&apos;importo del mese precedente. Se hai compiuto 55 anni, la riduzione parte dall&apos;8° mese — hai 2 mesi in più a importo pieno.</p>
            <p>Questo meccanismo serve a incentivare la ricerca attiva del lavoro. In pratica: i primi mesi sono i più &quot;ricchi&quot;, poi l&apos;importo cala gradualmente.</p>
          </div>

          {/* DURATA */}
          <div className="sec breve-hide r" id="durata">
            <div className="sec-tag">Quanto dura</div>
            <h2>Durata della NASpI</h2>
            <p>La regola è semplice: <strong>la NASpI dura la metà delle settimane che hai lavorato negli ultimi 4 anni</strong>. Il massimo possibile è 24 mesi (104 settimane).</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Settimane lavorate (ultimi 4 anni)</th><th>Durata NASpI</th></tr></thead>
                <tbody>
                  <tr><td>26 settimane (~6 mesi)</td><td>13 settimane (~3 mesi)</td></tr>
                  <tr><td>52 settimane (~1 anno)</td><td>26 settimane (~6 mesi)</td></tr>
                  <tr><td>104 settimane (~2 anni)</td><td>52 settimane (~12 mesi)</td></tr>
                  <tr><td>156 settimane (~3 anni)</td><td>78 settimane (~18 mesi)</td></tr>
                  <tr><td>208 settimane (4 anni pieni)</td><td>104 settimane (24 mesi max)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Le settimane &quot;già usate&quot; non contano</div>
              <p>Se hai già preso la NASpI in passato, le settimane che hai usato per quella prestazione <strong>non vengono contate di nuovo</strong>. Contano solo i contributi &quot;vergini&quot; — quelli mai utilizzati per una precedente disoccupazione.</p>
            </div>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">La pratica</div>
            <h2>Come fare domanda di NASpI</h2>
            <p>La domanda si fa <strong>solo online</strong>. Hai tre modi:</p>

            <div className="ib tip r d1">
              <div className="ib-t">1. Dal sito INPS (fai da te)</div>
              <p>Accedi con SPID, CIE o CNS. Vai su <strong>Prestazioni e servizi → NASpI → Nuova domanda</strong>. La procedura è guidata: verifichi i dati, confermi l&apos;ultimo rapporto di lavoro e invii. Ricevi la ricevuta con protocollo.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">2. Tramite patronato (gratis)</div>
              <p>Vai a un patronato (CGIL, CISL, UIL, ACLI, ecc.) con i documenti. Fanno tutto loro, gratis per legge. È il metodo più sicuro se non ti senti a tuo agio con il sito INPS.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">3. Contact Center INPS</div>
              <p>Chiama il <strong>803 164</strong> (gratuito da rete fissa) o il <strong>06 164 164</strong> (da cellulare). Un operatore può aiutarti a presentare la domanda per telefono.</p>
            </div>

            <h3>Documenti che ti servono</h3>
            <div className="ib tip r d1">
              <div className="ib-t">📱 SPID o CIE</div>
              <p>Per accedere al portale INPS. Se non ce l&apos;hai, <a href="/spid">fallo subito — ci vogliono 15 minuti</a>.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">📄 Ultima busta paga</div>
              <p>Non obbligatoria per la domanda (i dati sono precompilati), ma utile per verificare che le informazioni siano corrette.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">🏦 IBAN</div>
              <p>Il conto deve essere intestato o cointestato a te. L&apos;IBAN estero va bene solo se è area SEPA.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Quando parte il pagamento</div>
              <p>Se fai domanda <strong>entro 8 giorni</strong> dalla cessazione, la NASpI parte dall&apos;8° giorno. Se fai domanda dopo, parte dal giorno dopo la domanda — perdi i giorni in mezzo. Il primo accredito arriva in <strong>30-45 giorni</strong>.</p>
            </div>

            <h3>Dopo la domanda: cosa devi fare</h3>
            <p>Entro <strong>15 giorni</strong> dalla domanda, devi andare al Centro per l&apos;Impiego per firmare il <strong>Patto di Servizio Personalizzato</strong>. Verrai iscritto automaticamente al SIISL (la piattaforma digitale per la ricerca di lavoro). Se non ti presenti, l&apos;INPS può sospendere la NASpI.</p>
          </div>

          {/* ERRORI DA EVITARE */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>I 5 errori che fanno perdere la NASpI</h2>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Fare domanda dopo 68 giorni</div>
              <p>Il termine è <strong>tassativo</strong>. Non ci sono proroghe. Se lo superi, perdi tutto — anche se avevi tutti i requisiti. Segna la data sul calendario il giorno stesso in cui perdi il lavoro.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">⚠️ Non comunicare un nuovo lavoro</div>
              <p>Se inizi un lavoretto (anche part-time o autonomo) e non lo comunichi con il modello NASpI-COM entro 30 giorni, la NASpI <strong>decade completamente</strong>. Non rischiare.</p>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Saltare il Centro per l&apos;Impiego</div>
              <p>Hai 15 giorni dalla domanda per firmare il Patto di Servizio. Se non ti presenti e non rispondi alla convocazione, la NASpI può essere sospesa.</p>
            </div>
            <div className="ib warn r d2">
              <div className="ib-t">⚠️ Aspettare ad aggiornare l&apos;ISEE</div>
              <p>La NASpI abbassa il tuo reddito. Fai l&apos;<a href="/isee">ISEE corrente</a> per sbloccare bonus e agevolazioni che prima non ti spettavano.</p>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Non fare il 730</div>
              <p>Anche con la NASpI devi fare la <a href="/730">dichiarazione dei redditi</a>. L&apos;INPS rilascia la CU: se non la dichiari, rischi problemi con il fisco.</p>
            </div>
          </div>

          {/* LAVORARE DURANTE NASpI */}
          <div className="sec breve-hide r" id="lavorare">
            <div className="sec-tag">Compatibilità</div>
            <h2>Lavorare mentre prendi la NASpI</h2>
            <p>Sì, puoi lavorare — ma con delle regole precise. Se le rispetti, la NASpI viene solo <strong>ridotta</strong>. Se le violi, la <strong>perdi del tutto</strong>.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Tipo di lavoro</th><th>Limite reddito annuo</th><th>Cosa succede</th></tr></thead>
                <tbody>
                  <tr><td>Dipendente</td><td>≤ 8.500€</td><td>NASpI ridotta dell&apos;80% del reddito</td></tr>
                  <tr><td>Autonomo / P.IVA</td><td>≤ 5.500€</td><td>NASpI ridotta dell&apos;80% del reddito</td></tr>
                  <tr><td>Qualsiasi tipo</td><td>Sopra i limiti</td><td className="tr">NASpI decade</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Obbligo di comunicazione</div>
              <p>Qualsiasi lavoro inizi — anche con reddito zero — devi comunicarlo all&apos;INPS con il <strong>modello NASpI-COM entro 30 giorni</strong>. Se hai la partita IVA aperta (anche senza fatturare), devi comunque comunicare il reddito presunto entro il 31 gennaio di ogni anno.</p>
            </div>
          </div>

          {/* NASpI ANTICIPATA */}
          <div className="sec breve-hide r" id="anticipata">
            <div className="sec-tag">Novità 2026</div>
            <h2>NASpI anticipata: tutta in una volta per metterti in proprio</h2>
            <p>Se vuoi aprire un&apos;attività autonoma, una ditta individuale o entrare in una cooperativa, puoi chiedere di ricevere tutta la NASpI residua in anticipo — come capitale per partire.</p>

            <h3>La novità 2026</h3>
            <p>Dal 1° gennaio 2026, la NASpI anticipata <strong>non viene più pagata in un&apos;unica soluzione</strong> ma in due rate:</p>
            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">70% subito</div>
                <div className="ic-d">Dopo l&apos;accoglimento della domanda.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">30% dopo</div>
                <div className="ic-d">Al termine della durata teorica della NASpI, oppure entro 6 mesi dalla domanda di anticipazione.</div>
              </div>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Se chiudi entro 6 mesi</div>
              <p>Novità 2026: se chiudi l&apos;attività autonoma entro 6 mesi dall&apos;inizio, l&apos;INPS può <strong>richiedere la restituzione</strong> di tutta o parte della NASpI anticipata. Pensa bene prima di chiedere l&apos;anticipo.</p>
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
            <p>Ti calcoliamo l&apos;importo preciso della NASpI nella tua situazione, con le scadenze da rispettare e i bonus a cui hai diritto.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Con la NASpI il tuo reddito cala: aggiorna l&apos;ISEE per accedere a più bonus.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Anche con la NASpI devi dichiarare. E potresti avere un rimborso.</div><span className="rc-ar">→</span></a>
              <a href="/piva" className="rc"><span className="rc-e">📂</span><div className="rc-t">Apro partita IVA</div><div className="rc-d">Vuoi metterti in proprio? Puoi usare la NASpI anticipata come capitale.</div><span className="rc-ar">→</span></a>
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
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Verifica i requisiti</div></div></a>
            <a href="#quanto-spetta" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Calcolatore NASpI</div><div className="sbtool-d">Stima importo e durata</div></div></a>
            <a href="#domanda" className="sbtool"><span className="sbtool-i">📝</span><div><div className="sbtool-n">Procedura domanda</div><div className="sbtool-d">Passo per passo</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/piva" className="sbguide">📂 Apro partita IVA<span className="sbg-ar">→</span></a>
            <a href="/spid" className="sbguide">🔐 Faccio lo SPID<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      {/* PROMEMORIA SCADENZE */}
      <BrevoForm pageName="naspi" />
      <Footer variant="scheda" />
    </>
  );
}
