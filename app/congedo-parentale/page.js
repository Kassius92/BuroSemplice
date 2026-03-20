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
  title: 'Come Richiedere il Congedo Parentale nel 2026: Mesi, 80% e Domanda INPS',
  description: 'Congedo parentale 2026: quanti mesi spettano, indennit\u00e0 80% e 30%, novit\u00e0 fino a 14 anni, come fare domanda INPS. Guida gratuita per mamme e pap\u00e0.',
  keywords: ["congedo parentale", "congedo parentale 2026", "congedo parentale INPS", "indennit\u00e0 congedo parentale", "congedo parentale 80%", "congedo facoltativo", "mesi congedo parentale", "domanda congedo parentale", "congedo parentale padre", "congedo maternit\u00e0 facoltativo"],
  alternates: { canonical: 'https://zeroburocrazia.it/congedo-parentale' },
  openGraph: {
    type: 'article',
    title: 'Congedo Parentale 2026: Mesi, Indennit\u00e0 80%, Come Fare Domanda INPS',
    description: 'Congedo parentale 2026: quanti mesi spettano, indennit\u00e0 80% e 30%, novit\u00e0 14 anni, domanda INPS. Guida gratuita.',
    url: 'https://zeroburocrazia.it/congedo-parentale',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogcongedoparentale.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Congedo Parentale 2026: Mesi, Indennit\u00e0 80%, Come Fare Domanda INPS',
    description: 'Congedo parentale 2026: quanti mesi, indennit\u00e0 80%, domanda INPS. Guida gratuita.',
    images: ['https://zeroburocrazia.it/ogcongedoparentale.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'durata', label: 'Quanti mesi spettano' },
  { id: 'indennita', label: 'Quanto ti pagano', bh: true },
  { id: 'novita', label: 'Novit\u00e0 2026' },
  { id: 'come', label: 'Come fare domanda' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Il congedo parentale \u00e8 obbligatorio?", a: "<strong>No, \u00e8 facoltativo.</strong> Quello obbligatorio \u00e8 il congedo di maternit\u00e0 (5 mesi per la mamma) e il congedo di paternit\u00e0 (10 giorni per il pap\u00e0). Il congedo parentale \u00e8 un diritto che puoi scegliere di usare o no." },
  { q: "Posso prenderlo a ore invece che a giorni?", a: "<strong>S\u00ec.</strong> Il congedo parentale pu\u00f2 essere fruito a giornate intere oppure a ore. La modalit\u00e0 oraria ti permette di lavorare mezza giornata e stare con il bambino l\u2019altra met\u00e0. Verifica con il tuo datore di lavoro le modalit\u00e0 specifiche del tuo CCNL." },
  { q: "Mamma e pap\u00e0 possono prendere il congedo nello stesso periodo?", a: "<strong>S\u00ec.</strong> Entrambi i genitori possono assentarsi contemporaneamente. I mesi si contano separatamente: se la mamma prende 1 mese e il pap\u00e0 1 mese nello stesso periodo, ne hanno usati 2 in totale." },
  { q: "Ho un contratto a tempo determinato, mi spetta?", a: "S\u00ec, ti spetta <strong>durante la validit\u00e0 del contratto</strong>. Per\u00f2 l\u2019indennit\u00e0 non viene anticipata dal datore di lavoro: devi chiederla direttamente all\u2019INPS." },
  { q: "Quanto preavviso devo dare al datore di lavoro?", a: "<strong>Almeno 5 giorni</strong> prima dell\u2019inizio del congedo (2 giorni se lo prendi a ore). Comunica le date per iscritto, via email o PEC." },
  { q: "Il congedo parentale incide sulla pensione?", a: "I periodi di congedo sono coperti da <strong>contribuzione figurativa</strong>. Significa che ai fini della pensione \u00e8 come se avessi lavorato: non perdi anzianit\u00e0 contributiva." },
  { q: "Sono un genitore single, quanti mesi ho?", a: "Se sei genitore <strong>unico o affidatario esclusivo</strong>, hai diritto fino a <strong>11 mesi</strong> di congedo parentale, di cui 9 indennizzati. \u00c8 un mese in pi\u00f9 rispetto alla coppia (che ha 10 mesi totali)." },
  { q: "E se il bambino si ammala? \u00c8 la stessa cosa?", a: "<strong>No, sono due cose diverse.</strong> Il congedo per malattia del figlio \u00e8 un diritto separato. Dal 2026: illimitato sotto i 3 anni, 10 giorni/anno per genitore tra 3 e 14 anni. Non \u00e8 retribuito ma \u00e8 coperto da contributi figurativi." },
];

export default function PaginaCongedoParentale() {
  const schemas = [
    articleSchema({
      title: 'Congedo parentale 2026: mesi, indennit\u00e0, domanda INPS',
      description: 'Come funziona il congedo parentale nel 2026: durata, indennit\u00e0 80% e 30%, novit\u00e0 14 anni, come fare domanda INPS. Guida gratuita.',
      url: '/congedo-parentale',
      image: 'ogcongedoparentale.png',
      datePublished: '2026-03-11',
      dateModified: '2026-03-11',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-famiglia">
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
            <div className="cat-badge">👨‍👩‍👧 Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Congedo <em>parentale</em></h1>
            <p className="hero-sub">Quanti mesi spettano a mamma e pap&agrave;, quanto ti pagano (80% o 30%), le novit&agrave; 2026 fino a 14 anni e come fare domanda all&apos;INPS.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 12 min di lettura</span>
              <span className="pill pill-o">🆕 Novit&agrave;: esteso fino a 14 anni</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · D.Lgs. 151/2001 · Legge di Bilancio 2025 (L. 207/2024) · Legge di Bilancio 2026 (L. 199/2025)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">10</div><div className="hl">mesi totali<br/>per la coppia (11 se pap&agrave; ne fa 3)</div></div>
            <div className="hstat"><div className="hn">80%</div><div className="hl">dello stipendio<br/>per i primi 3 mesi</div></div>
            <div className="hstat"><div className="hn">14</div><div className="hl">anni del figlio<br/>limite dal 2026</div></div>
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
              <a href="/figlio" className="ps">👶 Aspetto un figlio</a>
              <a href="/assegno-unico" className="ps">💰 Assegno unico</a>
              <a href="/naspi" className="ps">💼 NASpI</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 INPS domanda</a>
              <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Min. Lavoro</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">📊 Simulazione INPS</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">👶</div><div className="sn">Facoltativo</div><div className="sl">dopo il congedo obbligatorio di maternit&agrave;/paternit&agrave;</div></div>
                <div className="sc sg-bg r d2"><div className="si">📅</div><div className="sn">10 mesi</div><div className="sl">per la coppia (11 se il pap&agrave; ne fa almeno 3)</div></div>
                <div className="sc r d3"><div className="si">💰</div><div className="sn">80%</div><div className="sl">dello stipendio per i primi 3 mesi</div></div>
                <div className="sc r d1"><div className="si">📊</div><div className="sn">30%</div><div className="sl">dello stipendio per i successivi 6 mesi</div></div>
                <div className="sc bl-bg r d2"><div className="si">🆕</div><div className="sn">14 anni</div><div className="sl">nuovo limite di et&agrave; dal 2026</div></div>
                <div className="sc r d3"><div className="si">💻</div><div className="sn">Online</div><div className="sl">domanda su INPS con SPID</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il congedo parentale</h2>
            <p>Quando nasce un figlio, la mamma ha 5 mesi di <Tip t="Il periodo obbligatorio di astensione dal lavoro: di solito 2 mesi prima del parto e 3 dopo. Pagato all'80% dello stipendio dall'INPS.">congedo di maternit&agrave;</Tip> obbligatorio e il pap&agrave; ha 10 giorni di <Tip t="10 giorni lavorativi obbligatori per il padre, pagati al 100% dello stipendio. Si possono prendere dai 2 mesi prima del parto fino ai 5 mesi dopo.">congedo di paternit&agrave;</Tip> obbligatorio. Fin qui &egrave; tutto obbligatorio.</p>
            <p>Il <strong>congedo parentale</strong> &egrave; quello che viene dopo: un periodo <strong>facoltativo</strong> in cui mamma o pap&agrave; (o entrambi) possono assentarsi dal lavoro per stare con il bambino. Lo Stato ti paga una parte dello stipendio e il tuo posto di lavoro &egrave; protetto.</p>
            <p>Non &egrave; un lusso: &egrave; un diritto previsto dal <Tip t="Decreto Legislativo 151/2001: la legge che regola tutti i congedi legati a maternit&agrave;, paternit&agrave; e genitorialit&agrave;. &Egrave; stato aggiornato pi&ugrave; volte, l'ultima con la Legge di Bilancio 2026.">Testo Unico sulla maternit&agrave;</Tip>. E dal 2026 &egrave; ancora pi&ugrave; flessibile.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Congedo obbligatorio</strong> &mdash; maternit&agrave; (5 mesi, 80%) e paternit&agrave; (10 giorni, 100%). Non puoi rinunciarci.</p>
              <p><strong>Congedo parentale</strong> &mdash; l&apos;astensione facoltativa dopo quello obbligatorio. Fino a 10-11 mesi per la coppia, pagata dal 30% all&apos;80%.</p>
              <p><strong>Indennit&agrave;</strong> &mdash; la percentuale dello stipendio che l&apos;INPS ti paga durante il congedo. Varia dal 30% all&apos;80% a seconda dei mesi.</p>
              <p><strong>Contribuzione figurativa</strong> &mdash; durante il congedo, l&apos;INPS &quot;finge&quot; che tu stia lavorando ai fini della pensione. Non perdi anzianit&agrave;.</p>
              <p><strong>Retribuzione media giornaliera</strong> &mdash; la base su cui si calcola l&apos;indennit&agrave;. &Egrave; la media dello stipendio del mese prima del congedo.</p>
              <p><strong>CCNL</strong> &mdash; Contratto Collettivo Nazionale di Lavoro. Alcuni contratti prevedono condizioni migliorative rispetto alla legge.</p>
            </div>
          </div>

          {/* DURATA */}
          <div className="sec r" id="durata">
            <div className="sec-tag">Quanto dura</div>
            <h2>Quanti mesi spettano</h2>
            <p>Il congedo parentale spetta a <strong>entrambi i genitori</strong>, ognuno con i suoi mesi. Ecco come funziona la divisione.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>MESI PER GENITORE</div>
              <div className="db-row"><span>Mamma</span><span>Fino a 6 mesi</span></div>
              <div className="db-row"><span>Pap&agrave;</span><span>Fino a 6 mesi (7 se ne usa almeno 3)</span></div>
              <div className="db-row"><span>Totale coppia</span><span>10 mesi (11 se il pap&agrave; ne fa almeno 3)</span></div>
              <div className="db-row"><span>Genitore solo</span><span>Fino a 11 mesi</span></div>
              <div className="db-row db-total"><span>Et&agrave; limite figlio</span><span>14 anni (novit&agrave; 2026)</span></div>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Il &quot;bonus&quot; per il pap&agrave;</div>
              <p>Se il pap&agrave; prende almeno 3 mesi di congedo, il suo limite individuale sale da 6 a <strong>7 mesi</strong> e il totale della coppia sale da 10 a <strong>11 mesi</strong>. &Egrave; un incentivo per dividere il congedo in modo pi&ugrave; equilibrato.</p>
            </div>
          </div>

          {/* INDENNITÀ */}
          <div className="sec bh r" id="indennita">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto ti pagano: la tabella</h2>
            <p>L&apos;indennit&agrave; non &egrave; uguale per tutti i mesi. I primi 3 sono pagati molto meglio grazie alle novit&agrave; introdotte tra 2024 e 2025.</p>

            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>INDENNIT&Agrave; PER MESE DI CONGEDO</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Mese 1 (ciascun genitore)</div><div className="dcard-v">80% dello stipendio (entro 6 anni)</div></div>
                <div className="dcard"><div className="dcard-l">Mese 2 (ciascun genitore)</div><div className="dcard-v">80% dello stipendio (entro 6 anni)</div></div>
                <div className="dcard"><div className="dcard-l">Mese 3 (uno dei due)</div><div className="dcard-v">80% dello stipendio (entro 6 anni)</div></div>
                <div className="dcard"><div className="dcard-l">Mesi 4–9</div><div className="dcard-v">30% dello stipendio (entro 14 anni)</div></div>
                <div className="dcard"><div className="dcard-l">Mesi 10–11</div><div className="dcard-v">Non indennizzati (salvo reddito basso)</div></div>
              </div>
            </div>

            <div className="ib warn r" style={{ marginTop: '24px' }}><div className="ib-t">⚠️ L&apos;80% vale solo entro i 6 anni</div>
              <p>I 3 mesi all&apos;80% si possono usare solo se il figlio ha <strong>meno di 6 anni</strong> (o entro 6 anni dall&apos;ingresso in famiglia per adozione/affido). Se il figlio ha pi&ugrave; di 6 anni, quei mesi diventano al 30%. Pianifica bene.</p>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Condizione per l&apos;80%</div>
              <p>Per avere diritto ai mesi all&apos;80%, il congedo di maternit&agrave; o paternit&agrave; obbligatorio deve essere terminato dopo il 31 dicembre 2023 (per il primo mese) e dopo il 31 dicembre 2024 (per il secondo e terzo mese). Se il tuo congedo obbligatorio &egrave; finito prima, i mesi restano al 30%.</p>
            </div>
          </div>

          {/* NOVITÀ 2026 */}
          <div className="sec r" id="novita">
            <div className="sec-tag">Cosa cambia</div>
            <h2>Novit&agrave; dal 2026</h2>
            <p>La Legge di Bilancio 2026 ha introdotto due cambiamenti importanti.</p>
            <div className="ib tip r"><div className="ib-t">🆕 Congedo parentale fino a 14 anni</div>
              <p>Prima il limite era 12 anni. Dal 1&deg; gennaio 2026, il congedo parentale si pu&ograve; usare <strong>fino ai 14 anni del figlio</strong>. Questo vale per i lavoratori dipendenti, sia pubblici che privati. Per le adozioni, si conta dall&apos;ingresso in famiglia.</p>
            </div>
            <div className="ib tip r"><div className="ib-t">🆕 Congedo per malattia del figlio: da 5 a 10 giorni</div>
              <p>Per i figli tra 3 e 14 anni (prima il limite era 8 anni), ogni genitore ha ora <strong>10 giorni lavorativi all&apos;anno</strong> di congedo per malattia del figlio (prima erano 5). Non sono retribuiti, ma sono coperti da contributi figurativi e non serve la visita fiscale.</p>
            </div>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come fare domanda all&apos;INPS</h2>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Avvisa il datore di lavoro</div><p>Comunica per iscritto (email o PEC) le date del congedo con almeno <strong>5 giorni di preavviso</strong> (2 giorni se a ore). Il datore non pu&ograve; rifiutare: &egrave; un tuo diritto.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Accedi al portale INPS</div><p>Vai su <strong>www.inps.it</strong>, accedi con SPID o CIE, e cerca il servizio &quot;Domande di maternit&agrave; e paternit&agrave;&quot;. Puoi anche usare l&apos;app INPS Mobile o passare da un patronato.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Compila la domanda</div><p>Inserisci i dati del figlio, le date del congedo che vuoi prendere e il tipo di fruizione (giornate intere o ore). Controlla quanti mesi hai gi&agrave; usato e quanti ne ha usati l&apos;altro genitore.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Invia e conserva la ricevuta</div><p>Dopo l&apos;invio ricevi un numero di protocollo. <strong>Salva la ricevuta</strong> e mandala al datore di lavoro. L&apos;INPS eroga l&apos;indennit&agrave; di solito entro il 15 del mese successivo a quello del congedo.</p></div></div>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Fai la domanda PRIMA di iniziare il congedo</div>
              <p>La domanda all&apos;INPS va presentata <strong>prima dell&apos;inizio del periodo</strong> di congedo. Se la fai dopo, rischi di non ricevere l&apos;indennit&agrave; per i giorni precedenti alla domanda. Non aspettare.</p>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Anna e Luca, figlio di 1 anno</h2>
            <p>Anna e Luca lavorano entrambi come dipendenti. Il loro bambino ha 1 anno. Anna guadagna 1.600&euro; netti, Luca 1.800&euro;. Il congedo obbligatorio di Anna &egrave; finito a marzo 2025.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>COME SI DIVIDONO IL CONGEDO</div>
              <div className="db-row"><span>Anna &mdash; mese 1</span><span>80% &rarr; ~1.280&euro;/mese</span></div>
              <div className="db-row"><span>Anna &mdash; mese 2</span><span>80% &rarr; ~1.280&euro;/mese</span></div>
              <div className="db-row"><span>Luca &mdash; mese 1</span><span>80% &rarr; ~1.440&euro;/mese</span></div>
              <div className="db-row"><span>Luca &mdash; mese 2 (il 3&deg; all&apos;80%)</span><span>80% &rarr; ~1.440&euro;/mese</span></div>
              <div className="db-row"><span>Anna &mdash; mese 3</span><span>30% &rarr; ~480&euro;/mese</span></div>
              <div className="db-row"><span>Luca &mdash; mese 3</span><span>30% &rarr; ~540&euro;/mese</span></div>
              <div className="db-row db-total"><span>Totale usato</span><span>6 mesi su 10 disponibili</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>STRATEGIA OTTIMALE</div>
              <div className="db-row"><span>Mesi all&apos;80% usati</span><span>3 su 3 (massimo possibile) ✓</span></div>
              <div className="db-row"><span>Se Luca fa 3 mesi totali</span><span>Il tetto coppia sale a 11 mesi</span></div>
              <div className="db-row"><span>Mesi restanti</span><span>4-5 al 30%, usabili fino ai 14 anni</span></div>
              <div className="db-row db-total"><span>Consiglio</span><span>Usare i mesi all&apos;80% subito, il 30% pu&ograve; aspettare</span></div>
            </div>
          </div>

          {/* ERRORI COMUNI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Aspettare troppo per i mesi all&apos;80%</div><p>I 3 mesi all&apos;80% valgono solo entro i <strong>6 anni del figlio</strong>. Se aspetti, diventano al 30%. Usali appena puoi: la differenza tra 80% e 30% su 3 mesi &egrave; migliaia di euro.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Non coordinare con l&apos;altro genitore</div><p>I mesi sono divisi tra i due genitori con regole precise. Se non vi coordinate, rischiate di &quot;sprecare&quot; il terzo mese all&apos;80% o di superare il tetto. Fate i conti insieme prima di fare domanda.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Dimenticare di fare domanda INPS</div><p>Avvisare il datore di lavoro <strong>non basta</strong>. Devi anche fare la domanda all&apos;INPS, altrimenti non ricevi l&apos;indennit&agrave;. Sono due cose separate.</p></div>
          </div>

          {/* CASI PARTICOLARI */}
          <div className="sec r">
            <div className="sec-tag">Situazioni frequenti</div>
            <h2>Casi particolari</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Genitore solo</strong> &mdash; se sei l&apos;unico genitore (decesso, abbandono, affidamento esclusivo), hai diritto a <strong>tutti gli 11 mesi</strong> complessivi, di cui 3 all&apos;80% e 6 al 30%. Il tetto massimo sale perch&eacute; non c&apos;&egrave; l&apos;altro genitore con cui dividere.</div>
              <div className="gl-item"><strong>Gemelli</strong> &mdash; i mesi di congedo si <strong>raddoppiano</strong> (o triplicano). Per ogni figlio nato/adottato nello stesso parto hai diritto a un periodo autonomo. In pratica, con due gemelli hai il doppio dei mesi disponibili.</div>
              <div className="gl-item"><strong>Lavoratori autonomi</strong> &mdash; dal 2007, anche i lavoratori iscritti alla gestione separata INPS hanno diritto al congedo parentale: <strong>3 mesi</strong> entro i primi 12 mesi del figlio, indennit&agrave; al 30%. Non &egrave; previsto per le partite IVA senza contribuzione INPS.</div>
              <div className="gl-item"><strong>Frazionamento</strong> &mdash; puoi prendere il congedo a mesi, settimane, giorni o persino ore. La flessibilit&agrave; &egrave; massima. Se lo prendi a ore, l&apos;indennit&agrave; si calcola proporzionalmente. Devi comunicare le modalit&agrave; al datore con <strong>5 giorni di preavviso</strong> (2 giorni in caso di urgenza).</div>
              <div className="gl-item"><strong>Malattia del figlio</strong> &mdash; diversa dal congedo parentale. Fino ai 3 anni del figlio: assenza illimitata (non retribuita). Dai 3 ai 10 anni: 5 giorni/anno per genitore (10 dal 2026). Non serve usare i mesi di congedo parentale.</div>
              <div className="gl-item"><strong>Adozione e affidamento</strong> &mdash; stesse regole dei genitori biologici. I mesi decorrono dalla data di ingresso del minore in famiglia (non dalla nascita). Vale anche per le adozioni internazionali.</div>
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
              <a href="/figlio" className="rc"><span className="rc-e">👶</span><div className="rc-t">Aspetto un figlio</div><div className="rc-d">Bonus, documenti e congedi dalla gravidanza.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/assegno-unico" className="rc"><span className="rc-e">💰</span><div className="rc-t">Assegno unico</div><div className="rc-d">Fino a 200&euro;/mese per figlio con ISEE.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Serve per l&apos;assegno unico e molti bonus.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">INPS domanda</div><div className="sbtool-d">Presenta domanda congedo</div></div></a>
            <a href="https://www.lavoro.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Min. Lavoro</div><div className="sbtool-d">Normativa congedi</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Simulazione INPS</div><div className="sbtool-d">Calcola la tua indennit&agrave;</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/figlio" className="sbguide">👶 Aspetto un figlio<span className="sbg-ar">&rarr;</span></a>
            <a href="/assegno-unico" className="sbguide">💰 Assegno unico<span className="sbg-ar">&rarr;</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
