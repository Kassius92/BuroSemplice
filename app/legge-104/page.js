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
  title: "Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura",
  description: "Legge 104/1992: come richiederla, chi ne ha diritto, permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali. Guida gratuita aggiornata 2026.",
  keywords: ["legge 104","legge 104 2026","permessi legge 104","come richiedere legge 104","agevolazioni legge 104","104 disabilità","congedo straordinario 104","legge 104 auto","legge 104 lavoro","caregiver 104"],
  alternates: { canonical: 'https://zeroburocrazia.it/legge-104' },
  openGraph: {
    title: "Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura",
    description: "Legge 104/1992: come richiederla, chi ne ha diritto, permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali. Guida gratuita aggiornata 2026.",
    url: 'https://zeroburocrazia.it/legge-104',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/oglegge104.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/oglegge104.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'chi', label: "Chi ne ha diritto" },
  { id: 'domanda', label: "Come richiederla" },
  { id: 'permessi', label: "Permessi lavorativi" },
  { id: 'congedo', label: "Congedo straordinario", bh: true },
  { id: 'agevolazioni', label: "Agevolazioni fiscali e auto", bh: true },
  { id: 'novita', label: "Novità 2026", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "Quanto tempo ci vuole per ottenere la Legge 104?", a: "Dal certificato medico alla visita: di solito <strong>30-90 giorni</strong>. Per patologie oncologiche o gravissime, la visita è entro <strong>15 giorni</strong>. Il verbale arriva 1-2 settimane dopo la visita." },
  { q: "La Legge 104 scade?", a: "Dipende. Se la disabilità è <strong>stabilizzata o ingravescente</strong>, il verbale è definitivo. Se è rivedibile, viene indicata una data di revisione. L’INPS ti convoca per una nuova visita prima della scadenza." },
  { q: "I permessi 104 si pagano meno dello stipendio?", a: "<strong>No.</strong> I 3 giorni di permesso sono retribuiti al 100%. L’INPS rimborsa il datore. Non perdi un centesimo di stipendio." },
  { q: "Posso usare i permessi 104 per me stesso (se sono io il disabile)?", a: "<strong>Sì.</strong> Se sei un lavoratore dipendente con 104 comma 3, hai diritto ai 3 giorni al mese per te stesso, senza bisogno di un referente." },
  { q: "Se lavoro part-time ho diritto ai permessi?", a: "<strong>Sì</strong>, ma in misura proporzionale. Con un part-time al 50%, hai diritto a 1,5 giorni al mese (arrotondati) o a 1 ora al giorno." },
  { q: "Il mio datore può rifiutare i permessi 104?", a: "<strong>No.</strong> I permessi 104 sono un diritto previsto dalla legge. Il datore non può rifiutarli, condizionarli o penalizzarti per averli usati. Può solo chiedere una programmazione preventiva per organizzare il lavoro." },
  { q: "Posso avere la 104 per un genitore anziano?", a: "<strong>Sì</strong>, se il genitore ha una disabilità che la commissione riconosce come handicap grave. L’età avanzata da sola non basta: serve una minorazione certificata (demenza, non autosufficienza, gravi patologie)." },
  { q: "La 104 dà diritto a soldi dall’INPS?", a: "La 104 di per sé <strong>non è una prestazione economica</strong>. Dà diritto a permessi e agevolazioni. Per avere un assegno mensile serve il riconoscimento dell’<strong>invalidità civile</strong> (procedura parallela, spesso fatta insieme alla 104)." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura",
      description: "Legge 104/1992: come richiederla, chi ne ha diritto, permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali. Guida gratuita aggiornata 2026.",
      url: '/legge-104',
      image: 'oglegge104.png',
      datePublished: '2026-03-20',
      dateModified: '2026-03-20',
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
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90"  stroke="#E36414" strokeWidth=".8"/>
          <line x1="10"  y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10"  x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Legge <em>104</em></h1>
            <p className="hero-sub">Riconoscimento della disabilit&agrave;, permessi dal lavoro, congedo straordinario, agevolazioni auto e fiscali. Tutto quello che devi sapere se assisti un familiare o se hai una disabilit&agrave;.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 15 min di lettura</span>
              <span className="pill pill-w">{'\u267F'} Permessi e agevolazioni</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Legge 5 febbraio 1992, n. 104 &middot; INPS &middot; Agenzia delle Entrate &middot; D.Lgs. 151/2001</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">3 giorni</div><div className="hl">permessi retribuiti<br/>ogni mese dal lavoro</div></div>
            <div className="hstat"><div className="hn">2 anni</div><div className="hl">congedo straordinario<br/>retribuito al 100%</div></div>
            <div className="hstat"><div className="hn">IVA 4%</div><div className="hl">agevolazione auto<br/>per disabili gravi</div></div>
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
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/esenzione-ticket" className="ps">{'\uD83D\uDC8A'} Esenzione ticket</a>
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} ISEE</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.invalidita-civile-invio-domanda-di-riconoscimento-dei-requisiti-sanitari.html" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE6'} INPS &mdash; Domanda invalidit&agrave; civile</a>
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/le-agevolazioni-per-le-persone-con-disabilit-" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFDB\uFE0F'} Agenzia Entrate &mdash; Agevolazioni disabilit&agrave;</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Legge 104/92</strong> &mdash; la legge quadro che tutela i diritti delle persone con disabilit&agrave; e dei loro familiari. Prevede permessi lavorativi, congedi e agevolazioni fiscali.</div>
              <div className="gl-item r d2"><strong>Handicap grave (art. 3 comma 3)</strong> &mdash; la condizione riconosciuta dalla commissione medica ASL quando la disabilit&agrave; riduce l&apos;autonomia personale in modo da richiedere assistenza permanente. D&agrave; accesso ai permessi e alle agevolazioni principali.</div>
              <div className="gl-item r d3"><strong>Commissione medica ASL</strong> &mdash; l&apos;organo che valuta la disabilit&agrave;. La visita viene richiesta tramite l&apos;INPS ma &egrave; svolta dalla ASL con un medico INPS presente.</div>
              <div className="gl-item r d4"><strong>Verbale di handicap</strong> &mdash; il documento che certifica il grado di disabilit&agrave;. Pu&ograve; riconoscere: handicap semplice (art. 3 c. 1) o handicap grave (art. 3 c. 3). Solo il comma 3 d&agrave; diritto ai permessi lavorativi.</div>
              <div className="gl-item r d1"><strong>Referente unico</strong> &mdash; dal 2022, un solo lavoratore pu&ograve; usufruire dei permessi 104 per assistere lo stesso familiare disabile. Eccezione: i genitori di figli disabili possono alternarsi.</div>
              <div className="gl-item r d2"><strong>Congedo straordinario</strong> &mdash; fino a 2 anni di congedo retribuito (100% dello stipendio, con tetto) per assistere un familiare con handicap grave. Spetta in ordine di priorit&agrave;: coniuge, genitori, figli, fratelli.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\u267F'}</div><div className="sn">Art. 3 c. 3</div><div className="sl">handicap grave<br/>dà diritto a tutto</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">3 giorni</div><div className="sl">permessi retribuiti<br/>al mese dal lavoro</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">2 anni</div><div className="sl">congedo straordinario<br/>retribuito 100%</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDE97'}</div><div className="sn">IVA 4%</div><div className="sl">auto per disabili<br/>+ detrazione 19%</div></div>
                <div className="sc r d1"><div className="si">{'\uD83C\uDFE5'}</div><div className="sn">Gratis</div><div className="sl">esenzione ticket<br/>con codice C03-C06</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCBB'}</div><div className="sn">Online</div><div className="sl">domanda su INPS<br/>con SPID + medico</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la Legge 104</h2>
            <p>La <strong>Legge 104/1992</strong> &egrave; la legge che tutela le persone con disabilit&agrave; e i familiari che le assistono. Non &egrave; un bonus: &egrave; un <strong>pacchetto di diritti</strong> che comprende permessi dal lavoro, congedi retribuiti, agevolazioni fiscali e priorit&agrave; nella scelta della sede lavorativa.</p>

            <p>Il requisito fondamentale &egrave; il riconoscimento dell&apos;<strong>handicap grave</strong> (articolo 3, comma 3). Questo riconoscimento avviene tramite una visita della commissione medica ASL, dopo aver presentato domanda all&apos;INPS. Senza il verbale che certifica l&apos;handicap grave, i benefici principali non spettano.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Handicap semplice vs handicap grave</div>
              <p><strong>Art. 3 comma 1</strong> (handicap semplice): riconosce la condizione di disabilit&agrave; ma d&agrave; diritto solo ad agevolazioni limitate (es. agevolazioni fiscali per ausili). <strong>Art. 3 comma 3</strong> (handicap grave): d&agrave; diritto a tutto &mdash; permessi 3 giorni, congedo 2 anni, agevolazioni auto, priorit&agrave; sede lavoro. La differenza &egrave; enorme.</p>
            </div>
          </div>

          {/* CHI */}
          <div className="sec r" id="chi">
            <div className="sec-tag">Requisiti</div>
            <h2>Chi ne ha diritto</h2>
            <h3>La persona con disabilit&agrave;</h3>
            <p>Qualsiasi persona con una <strong>minorazione fisica, psichica o sensoriale</strong> che provoca difficolt&agrave; nell&apos;apprendimento, nella vita di relazione o nell&apos;integrazione lavorativa, pu&ograve; richiedere il riconoscimento. Non serve una percentuale di invalidit&agrave; specifica: conta la valutazione della commissione.</p>

            <h3>I familiari che assistono (caregiver)</h3>
            <p>I permessi lavorativi spettano al <strong>familiare lavoratore dipendente</strong> che assiste la persona con handicap grave. L&apos;ordine di priorit&agrave; &egrave;:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC91'}</div><div className="clb"><strong>Coniuge o parte dell&apos;unione civile</strong><span className="note">Convivente di fatto equiparato dal 2023.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'}</div><div className="clb"><strong>Genitori</strong><span className="note">Anche adottivi. Per i figli disabili, entrambi i genitori possono alternarsi.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC66'}</div><div className="clb"><strong>Figli</strong><span className="note">Se coniuge e genitori non possono assistere.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1'}</div><div className="clb"><strong>Fratelli o sorelle</strong><span className="note">Se nessuno dei precedenti pu&ograve; assistere.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC65'}</div><div className="clb"><strong>Parenti/affini entro il 3&deg; grado</strong><span className="note">Ultimo livello di parentela ammesso.</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Referente unico dal 2022</div>
              <p>Dal 13 agosto 2022, <strong>un solo lavoratore</strong> pu&ograve; essere il referente unico per l&apos;assistenza a un familiare con 104. Non possono pi&ugrave; alternarsi pi&ugrave; familiari sullo stesso disabile (eccezione: genitori di figli disabili). Questo &egrave; un cambiamento importante rispetto al passato.</p>
            </div>
          </div>

          {/* DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">Procedura</div>
            <h2>Come richiedere la Legge 104</h2>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Vai dal medico di base</strong>
                  <p>Il medico di base compila il <strong>certificato medico introduttivo</strong> online sul sito INPS (servizio &ldquo;Certificato medico introduttivo SS3&rdquo;). Ti rilascia il numero di certificato. Costo: gratuito o pochi euro in base al medico.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Presenta la domanda all&apos;INPS</strong>
                  <p>Entro <strong>90 giorni</strong> dal certificato medico: online su inps.it con SPID, oppure tramite patronato (CGIL, CISL, UIL &mdash; gratis). Nella domanda indichi il numero del certificato medico.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Visita della commissione medica ASL</strong>
                  <p>Ricevi la convocazione (di solito entro <strong>30-90 giorni</strong>). La visita &egrave; presso la ASL, con un medico INPS presente. Porta tutta la documentazione medica: referti, cartelle cliniche, certificati specialistici.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Ricevi il verbale</strong>
                  <p>Il verbale arriva via raccomandata o online nel cassetto INPS. Indica se &egrave; riconosciuto l&apos;handicap semplice (art. 3 c. 1) o grave (art. 3 c. 3). Con il comma 3 accedi a tutti i benefici.</p>
                </div>
              </div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Vai al patronato.</strong> La domanda 104 &egrave; delicata: il certificato medico deve essere compilato bene, la documentazione alla visita fa la differenza tra un comma 1 e un comma 3. Il patronato ti guida in tutto il processo gratuitamente e ti aiuta a preparare la visita.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Come fare lo SPID</strong> &mdash; Serve per la domanda online su INPS.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* PERMESSI */}
          <div className="sec r" id="permessi">
            <div className="sec-tag">Dal lavoro</div>
            <h2>Permessi lavorativi (3 giorni al mese)</h2>
            <p>Con l&apos;handicap grave (art. 3 comma 3), il lavoratore dipendente che assiste il familiare disabile ha diritto a <strong>3 giorni di permesso retribuito al mese</strong>. Oppure pu&ograve; frazionarli in <strong>ore</strong> (2 ore al giorno per contratti full-time).</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Aspetto</th><th>Dettaglio</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Quanto</td><td className="cv cfr"><strong>3 giorni al mese</strong> (o 2 ore/giorno)</td></tr>
                  <tr><td>Retribuzione</td><td className="cv">100% &mdash; li paga l&apos;INPS (anticipati dal datore)</td></tr>
                  <tr><td>Chi ne ha diritto</td><td className="cv">Lavoratori dipendenti (non autonomi, non partita IVA)</td></tr>
                  <tr><td>Preavviso</td><td className="cv">Non obbligatorio per legge, ma consigliato</td></tr>
                  <tr><td>Cumulabilit&agrave;</td><td className="cv">Si cumulano con ferie e altri permessi</td></tr>
                  <tr><td>Non goduti</td><td className="cv">Si perdono &mdash; non si accumulano n&eacute; si pagano</td></tr>
                </tbody>
              </table>
            </div>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: Anna assiste la madre</h3>
              <p>Anna lavora full-time in un&apos;azienda. Sua madre ha la <strong>104 comma 3</strong>. Anna &egrave; il referente unico.</p>
              <p>Ogni mese Anna pu&ograve; prendere <strong>3 giorni di permesso retribuito</strong> per accompagnare la madre a visite, gestire pratiche, assisterla a casa. Lo stipendio non cambia.</p>
              <p>Se preferisce, pu&ograve; frazionare: <strong>2 ore al giorno</strong> (esce prima o entra dopo). Non deve recuperare le ore.</p>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Attenzione: l&apos;abuso &egrave; sanzionabile</div>
              <p>I permessi 104 sono per <strong>assistere il familiare disabile</strong>. L&apos;INPS e i datori di lavoro possono fare controlli. Usare i permessi per andare in vacanza o per altri scopi &egrave; un illecito che pu&ograve; portare al licenziamento per giusta causa.</p>
            </div>
          </div>

          {/* CONGEDO */}
          <div className="sec breve-hide r" id="congedo">
            <div className="sec-tag">Congedo lungo</div>
            <h2>Congedo straordinario (2 anni)</h2>
            <p>Per chi deve dedicarsi all&apos;assistenza a tempo pieno, esiste il <strong>congedo straordinario retribuito</strong>: fino a <strong>2 anni</strong> nell&apos;arco della vita lavorativa, con stipendio pagato al 100% (con un tetto massimo aggiornato ogni anno).</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB0'}</div><div className="clb"><strong>Retribuito al 100%</strong><span className="note">Tetto 2026: circa 40.000&euro;/anno lordi (aggiornato ISTAT). Lo stipendio viene anticipato dal datore e rimborsato dall&apos;INPS.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCC5'}</div><div className="clb"><strong>Massimo 2 anni totali</strong><span className="note">Nell&apos;arco della vita lavorativa, anche frazionati. Puoi prendere 6 mesi, tornare, poi altri 6 mesi.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Obbligo di convivenza</strong><span className="note">Per il congedo straordinario devi convivere con il familiare disabile. La convivenza pu&ograve; essere instaurata anche dopo la richiesta.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\u267F'}</div><div className="clb"><strong>Solo handicap grave (comma 3)</strong><span className="note">Non basta il comma 1. Serve il verbale con art. 3 comma 3 della Legge 104.</span></div></li>
            </ul>

            <p>L&apos;ordine di priorit&agrave; &egrave;: coniuge/convivente &rarr; genitori &rarr; figli &rarr; fratelli/sorelle &rarr; parenti entro il 3&deg; grado. Si passa al successivo solo se il precedente non pu&ograve; assistere.</p>
          </div>

          {/* AGEVOLAZIONI */}
          <div className="sec breve-hide r" id="agevolazioni">
            <div className="sec-tag">Risparmi</div>
            <h2>Agevolazioni fiscali e auto</h2>
            <h3>Agevolazioni auto (handicap grave)</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Agevolazione</th><th>Dettaglio</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv cfr">IVA al 4%</td><td>Invece del 22%. Su auto nuove o usate (fino a 2.000 cc benzina o 2.800 cc diesel). Limite: 1 auto ogni 4 anni.</td></tr>
                  <tr><td className="cv">Detrazione IRPEF 19%</td><td>Su un tetto di spesa di 18.075,99&euro;. Recuperi fino a ~3.434&euro; nel 730.</td></tr>
                  <tr><td className="cv">Esenzione bollo auto</td><td>Per sempre, sulla vettura intestata alla persona disabile (o al familiare che la ha fiscalmente a carico).</td></tr>
                  <tr><td className="cv">Esenzione passaggio propriet&agrave;</td><td>Nessuna imposta di trascrizione al PRA.</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Altre agevolazioni fiscali</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCBB'}</div><div className="clb"><strong>IVA 4% su ausili informatici</strong><span className="note">Computer, tablet, telefoni se prescritti per la disabilit&agrave;.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE5'}</div><div className="clb"><strong>Detrazione spese mediche e assistenza</strong><span className="note">Deducibili senza franchigia 129&euro; per alcune tipologie. Detrazione 19% su spese specialistiche.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Detrazione abbattimento barriere architettoniche</strong><span className="note">75% su interventi di eliminazione barriere fino a 50.000&euro;.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCBC'}</div><div className="clb"><strong>Scelta prioritaria della sede di lavoro</strong><span className="note">Il lavoratore con 104 o che assiste un familiare con 104 ha diritto alla sede pi&ugrave; vicina e non pu&ograve; essere trasferito senza consenso.</span></div></li>
            </ul>

            <a href="/esenzione-ticket" className="xlink r"><span className="xlink-em">{'\uD83D\uDC8A'}</span><div className="xlink-t"><strong>Esenzione ticket sanitario</strong> &mdash; Con la 104 hai diritto ai codici C03-C06. Visite gratis.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* NOVITA */}
          <div className="sec breve-hide r" id="novita">
            <div className="sec-tag">Aggiornamento</div>
            <h2>Novit&agrave; 2026</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Congedo parentale potenziato per genitori di figli disabili</strong><span className="note">La Legge di Bilancio 2026 ha esteso il congedo parentale all&apos;80% fino a 3 mesi per i genitori di figli con disabilit&agrave; grave.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCBB'}</div><div className="clb"><strong>Smart working prioritario</strong><span className="note">I lavoratori che assistono familiari con 104 comma 3 hanno priorit&agrave; nell&apos;accesso al lavoro agile, se compatibile con la mansione.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u26A0\uFE0F'}</div><div className="clb"><strong>Revisione INPS pi&ugrave; rapida</strong><span className="note">L&apos;INPS ha accorciato i tempi delle visite di revisione: per le patologie stabilizzate, il verbale resta valido senza rivisitazione periodica.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDE97'}</div><div className="clb"><strong>Agevolazione auto estesa</strong><span className="note">Confermata l&apos;IVA al 4% anche sulle auto ibride ed elettriche, senza limitazioni di potenza (precedente ambiguit&agrave; normativa risolta).</span></div></li>
            </ul>
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
              <a href="/esenzione-ticket" className="rc r d1"><span className="rc-e">{'\uD83D\uDC8A'}</span><div className="rc-t">Esenzione ticket</div><div className="rc-d">Con la 104 accedi ai codici C03-C06.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee" className="rc r d2"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">ISEE</div><div className="rc-d">Serve per molte agevolazioni legate alla disabilità.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/congedo-parentale" className="rc r d3"><span className="rc-e">{'\uD83D\uDC76'}</span><div className="rc-t">Congedo parentale</div><div className="rc-d">Potenziato per genitori di figli disabili.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.invalidita-civile-invio-domanda-di-riconoscimento-dei-requisiti-sanitari.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Domanda invalidità e handicap</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/le-agevolazioni-per-le-persone-con-disabilit-" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFDB\uFE0F'}</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Agevolazioni fiscali disabilità</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/esenzione-ticket" className="sbguide">{'\uD83D\uDC8A'} Esenzione ticket<span className="sbg-ar">&rarr;</span></a>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/congedo-parentale" className="sbguide">{'\uD83D\uDC76'} Congedo parentale<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
