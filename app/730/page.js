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
import Calculator730 from '@/components/Calculator730';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: 'Guida completa al 730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze aggiornate e come ottenere il massimo rimborso. Gratis.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730', 'modello 730', '730 online', 'CAF 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa Gratuita', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e come ottenere il massimo rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: '730 Precompilato 2026: Guida Completa', description: 'Detrazioni, documenti, scadenze e rimborso. Tutto sul 730 in una guida gratuita.', images: ['https://zeroburocrazia.it/og730.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00E8" },
  { id: 'detrazioni', label: 'Detrazioni' },
  { id: 'chi-deve', label: 'Chi deve farlo' },
  { id: 'come', label: 'Come si fa' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Per\u00f2 perdi tutte le detrazioni a cui avresti diritto: centinaia o migliaia di euro ogni anno. Se eri obbligato a farlo (ad esempio perch\u00e9 hai avuto due datori di lavoro) e non lo fai, l\u2019Agenzia delle Entrate pu\u00f2 inviarti un avviso di accertamento con sanzioni dal 120% al 240% delle imposte dovute. Conviene sempre farlo." },
  { q: "Posso scaricare Netflix o la palestra?", a: "<strong>Netflix no.</strong> I servizi di streaming non rientrano tra le spese detraibili. La palestra per te personalmente nemmeno, a meno che non sia prescritta dal medico come attivit\u00e0 riabilitativa. Per\u00f2 le <strong>attivit\u00e0 sportive dei figli tra 5 e 18 anni s\u00ec</strong>: sono detraibili al 19% fino a un massimo di 210\u20ac per figlio." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore di lavoro \u00e8 <strong>obbligato per legge</strong> a consegnare la Certificazione Unica entro il 16 marzo. Se non la ricevi, sollecita per iscritto (email o PEC). Se il datore \u00e8 irreperibile, puoi scaricare la CU direttamente dal sito dell\u2019Agenzia delle Entrate accedendo con SPID alla tua area riservata." },
  { q: "Ho pagato in contanti, perdo la detrazione?", a: "<strong>Dipende dalla spesa.</strong> Dal 1\u00b0 gennaio 2025, tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili: carta, bancomat, bonifico, assegno. Fanno eccezione i <strong>farmaci con ricetta medica</strong> e le <strong>prestazioni sanitarie presso strutture pubbliche o accreditate SSN</strong>." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, fai un solo 730</strong> in cui inserisci entrambe le Certificazioni Uniche. Attenzione: \u00e8 molto probabile che dovrai pagare un conguaglio perch\u00e9 ogni datore ha calcolato le tasse come se fossi stato da lui per tutto l\u2019anno." },
  { q: "Posso fare il 730 congiunto con il mio partner?", a: "<strong>Solo se siete sposati o uniti civilmente.</strong> I conviventi non possono presentare il 730 congiunto. Il vantaggio principale: crediti e debiti si compensano automaticamente." },
  { q: "Ho fatto un errore nel 730, posso correggerlo?", a: "<strong>S\u00ec, in diversi modi.</strong> Entro il 30 settembre puoi inviare un nuovo 730 che sostituisce il precedente. Entro il 25 ottobre puoi presentare un 730 integrativo (solo se pi\u00f9 favorevole). Dopo, devi usare il Modello Redditi correttivo entro il 30 novembre. Oltre, dichiarazione integrativa entro 5 anni." },
  { q: "Ho ricevuto la NASpI o la cassa integrazione, devo fare il 730?", a: "<strong>S\u00ec, e ti conviene.</strong> La NASpI e la cassa integrazione sono redditi a tutti gli effetti. Se nello stesso anno hai avuto sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio per ricalcolare correttamente le imposte." },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({
      title: 'Guida completa al Modello 730 2026',
      description: 'Come fare il 730 nel 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.',
      url: '/730',
      image: 'og730.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-15',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
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
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Faccio il <em>730</em></h1>
            <p className="hero-sub">Tutto sulla dichiarazione dei redditi: chi deve farla, quanto costa, quali spese puoi scaricare e come ottenere il rimborso pi&ugrave; alto possibile. Guida gratuita con informazioni verificate dalle fonti ufficiali.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 15 min di lettura</span>
              <span className="pill pill-w">{'\u23F0'} Scadenza: 30 settembre 2026</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; INPS &middot; Legge di Bilancio 2026 (L. 207/2024) &middot; D.Lgs. 216/2023</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0&euro;</div><div className="hl">con la precompilata<br/>online gratis</div></div>
            <div className="hstat"><div className="hn">30/9</div><div className="hl">scadenza invio<br/>dichiarazione</div></div>
            <div className="hstat"><div className="hn">~760&euro;</div><div className="hl">rimborso medio<br/>per chi lo fa*</div></div>
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
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} ISEE</a>
              <a href="/spid" className="ps">{'\uD83D\uDD10'} SPID</a>
              <a href="/spese-mediche" className="ps">{'\uD83E\uDE7A'} Spese mediche</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFDB\uFE0F'} Agenzia delle Entrate</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE6'} INPS</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83E\uDDFE'}</div><div className="sn">730</div><div className="sl">la dichiarazione dei redditi per dipendenti e pensionati</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">0&euro;</div><div className="sl">con la precompilata online</div></div>
                <div className="sc    r d3"><div className="si">{'\u23F1'}</div><div className="sn">1&ndash;2 ore</div><div className="sl">per compilare da solo</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">30/9</div><div className="sl">scadenza invio 2026</div></div>
                <div className="sc tc r d2"><div className="si">{'\uD83D\uDCB8'}</div><div className="sn">~760&euro;</div><div className="sl">rimborso medio</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">ti serve per farlo online</div></div>
              </div>
            </div>
          </div>

          {/* COS'È IL 730 */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il 730</h2>

            <p>Ogni mese il tuo datore di lavoro trattiene una parte del tuo stipendio per pagare le tasse al posto tuo. Questo meccanismo si chiama <Tip t="Il meccanismo con cui il datore di lavoro trattiene le tasse dal tuo stipendio e le versa allo Stato al posto tuo.">ritenuta alla fonte</Tip>, e il datore &egrave; il tuo <Tip t="Il soggetto che paga le tasse al posto tuo: il datore di lavoro o l&apos;INPS. È lui che ti versa il rimborso in busta paga.">sostituto d&apos;imposta</Tip>. Il problema &egrave; che lui calcola le tasse basandosi solo sullo stipendio, senza sapere nulla della tua vita privata: non sa se paghi un affitto, se hai il mutuo, se vai dal dentista, se i tuoi figli fanno sport.</p>

            <p>Il Modello 730 serve esattamente a questo: &egrave; il documento con cui comunichi all&apos;Agenzia delle Entrate tutte le spese sostenute durante l&apos;anno che ti danno diritto a <Tip t="Una riduzione dell&apos;imposta. Se hai diritto a una detrazione del 19% su 1.000€ di spese mediche, paghi 190€ di tasse in meno.">detrazioni</Tip> (rimborsi parziali) o <Tip t="Una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000€ e hai 3.000€ di deduzioni, le tasse si calcolano su 22.000€.">deduzioni</Tip> (riduzioni del reddito imponibile). Nella stragrande maggioranza dei casi, il risultato &egrave; che hai pagato pi&ugrave; tasse del dovuto e ti spetta un rimborso.</p>

            <p>Il rimborso arriva direttamente in busta paga &mdash; di solito tra luglio e agosto se presenti il 730 entro giugno. Se sei pensionato, il rimborso arriva con la pensione di agosto o settembre.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>CU (Certificazione Unica)</strong> &mdash; il documento che il datore di lavoro o l&apos;INPS ti consegna entro il 16 marzo. Riporta quanto hai guadagnato nell&apos;anno e quante tasse sono gi&agrave; state versate.</div>
              <div className="gl-item r d2"><strong>IRPEF</strong> &mdash; l&apos;Imposta sul Reddito delle Persone Fisiche, la tassa principale che paghi sui tuoi guadagni. Si calcola per scaglioni: pi&ugrave; guadagni, pi&ugrave; alta &egrave; la percentuale.</div>
              <div className="gl-item r d3"><strong>Detrazione</strong> &mdash; una riduzione dell&apos;imposta che devi pagare. Se hai diritto a una detrazione del 19% su 1.000&euro; di spese mediche, paghi 190&euro; di tasse in meno.</div>
              <div className="gl-item r d4"><strong>Deduzione</strong> &mdash; una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000&euro; e hai 3.000&euro; di deduzioni, le tasse si calcolano su 22.000&euro;.</div>
              <div className="gl-item r d1"><strong>Franchigia</strong> &mdash; la soglia sotto la quale non hai diritto al rimborso. Per le spese mediche &egrave; 129,11&euro;: sotto quella cifra non recuperi nulla.</div>
              <div className="gl-item r d2"><strong>Precompilata</strong> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato con i dati in suo possesso. Devi controllarlo e integrarlo.</div>
              <div className="gl-item r d3"><strong>Sostituto d&apos;imposta</strong> &mdash; il soggetto che paga le tasse al posto tuo: il datore di lavoro o l&apos;INPS.</div>
              <div className="gl-item r d4"><strong>Conguaglio</strong> &mdash; il calcolo finale tra tasse dovute e gi&agrave; versate. Se hai pagato troppo, ricevi un rimborso. Se hai pagato poco, devi versare la differenza.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Perch&eacute; conviene anche se non sei obbligato</div>
              <p>Quasi tutti hanno almeno qualche spesa detraibile: una visita medica, un abbonamento ai trasporti, una spesa scolastica. Anche un caso semplice pu&ograve; generare 200&ndash;500&euro; di rimborso. Chi ha mutuo, affitto o figli arriva facilmente a 1.000&ndash;3.000&euro;. Ogni anno che non fai il 730, quei soldi li perdi definitivamente.</p>
            </div>
            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Bonus e agevolazioni: servono l&apos;ISEE.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DETRAZIONI */}
          <div className="sec r" id="detrazioni">
            <div className="sec-tag">Rimborsi</div>
            <h2>Quanto puoi recuperare</h2>
            <p>Lo Stato rimborsa una percentuale delle spese sostenute. Per la maggior parte &egrave; il <strong>19%</strong>, ma ci sono eccezioni importanti (ristrutturazioni al 50%, ecobonus al 50&ndash;65%, donazioni al 26%).</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Spesa</th><th>Detrazione</th><th>Esempio</th></tr></thead>
                <tbody>
                  <tr><td><strong>Spese mediche e sanitarie</strong></td><td className="cfr">19%</td><td>800&euro; spesi &rarr; +127&euro; di rimborso</td></tr>
                  <tr><td><strong>Interessi passivi mutuo prima casa</strong></td><td className="cfr">19%</td><td>4.000&euro; interessi &rarr; +760&euro;</td></tr>
                  <tr><td><strong>Canone di locazione (affitto)</strong></td><td className="cfr">300&ndash;991&euro;</td><td>Detrazione fissa in base al reddito</td></tr>
                  <tr><td><strong>Spese istruzione scolastica</strong></td><td className="cfr">19%</td><td>1.000&euro; rette &rarr; +190&euro;</td></tr>
                  <tr><td><strong>Sport figli 5&ndash;18 anni</strong></td><td className="cfr">19%</td><td>500&euro; palestra &rarr; +40&euro;</td></tr>
                  <tr><td><strong>Abbonamento trasporti</strong></td><td className="cfr">19%</td><td>250&euro; metro &rarr; +47&euro;</td></tr>
                  <tr><td><strong>Spese veterinarie</strong></td><td className="cfr">19%</td><td>400&euro; visite &rarr; +51&euro;</td></tr>
                  <tr><td><strong>Ristrutturazione</strong></td><td className="cfr">50%</td><td>In 10 rate annuali</td></tr>
                  <tr><td><strong>Risparmio energetico</strong></td><td className="cfr">50&ndash;65%</td><td>In 10 rate annuali</td></tr>
                  <tr><td><strong>Donazioni ONLUS</strong></td><td className="cfr">26%</td><td>500&euro; donati &rarr; +130&euro;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Le detrazioni che la gente dimentica sempre</div>
              <p>Abbonamento ai trasporti pubblici (anche treno per pendolari), spese veterinarie, sport dei figli, spese funebri, donazioni a ONLUS e partiti politici, spese per assistenti personali (badanti). Se non le inserisci nel 730, quei soldi li perdi per sempre.</p>
            </div>

            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Marco, 28 anni, dipendente</span><span className="db-old">Non fa il 730</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">Fa il 730</span></div>
              <div className="db-row"><span className="db-label">Dentista</span><span className="db-old">0&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">+89&euro;</span></div>
              <div className="db-row"><span className="db-label">Metro</span><span className="db-old">0&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">+47&euro;</span></div>
              <div className="db-row"><span className="db-label">Affitto under 31</span><span className="db-old">0&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">+991&euro;</span></div>
              <div className="db-row"><span className="db-label">Veterinario</span><span className="db-old">0&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">+51&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">Rimborso annuo</span><span className="db-val">+1.178&euro;</span></div>
            </div>
          </div>

          {/* CHI DEVE FARLO */}
          <div className="sec r" id="chi-deve">
            <div className="sec-tag">Obblighi</div>
            <h2>Chi deve fare il 730</h2>

            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">{'\u2705'}</div><div className="uc-n">Devi farlo se</div><div className="uc-d">Sei un lavoratore dipendente o pensionato che ha percepito redditi nel 2025.</div></div>
              <div className="uc r d2"><div className="uc-e">{'\u26A0\uFE0F'}</div><div className="uc-n">&Egrave; obbligatorio se</div><div className="uc-d">Hai cambiato lavoro nel 2025 (due CU), hai percepito sia stipendio che NASpI, oppure hai redditi da pi&ugrave; fonti.</div></div>
              <div className="uc r d3"><div className="uc-e">{'\uD83D\uDCA1'}</div><div className="uc-n">Ti conviene se</div><div className="uc-d">Hai un solo lavoro e almeno una spesa da scaricare: dentista, affitto, mutuo, trasporti, sport dei figli.</div></div>
              <div className="uc r d4"><div className="uc-e">{'\uD83D\uDEAB'}</div><div className="uc-n">Non puoi farlo se</div><div className="uc-d">Hai la partita IVA (devi usare il Modello Redditi PF) oppure hai redditi d&apos;impresa.</div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La regola pratica</div>
              <p>Se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso. L&apos;unico motivo valido per non farlo &egrave; se hai avuto un solo datore di lavoro e zero spese detraibili nell&apos;intero anno.</p>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa il 730</h2>
            <p>Hai tre strade. Una &egrave; completamente gratuita.</p>

            <h3>{'\uD83D\uDFE2'} Passo zero: hai lo SPID?</h3>
            <p>Per accedere alla <Tip t="Il 730 che l&apos;Agenzia delle Entrate prepara per te, già parzialmente compilato con i dati in suo possesso: stipendio, spese mediche trasmesse dalle farmacie, interessi del mutuo.">precompilata</Tip> online ti serve lo <Tip t="L&apos;identità digitale per accedere a tutti i servizi della Pubblica Amministrazione online: INPS, Agenzia delle Entrate, Comune.">SPID</Tip>. Se non ce l&apos;hai, fallo prima &mdash; ci vogliono 15 minuti e non costa niente.</p>
            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Come farlo gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>

            <h3>Il percorso completo</h3>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Fai lo SPID</strong><p>15 minuti, gratuito. Servono un documento d&apos;identit&agrave;, la tessera sanitaria e uno smartphone.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Raccogli i documenti</strong><p><Tip t="Il documento che il datore di lavoro ti dà ogni anno con il riepilogo di quanto hai guadagnato e quante tasse ti ha trattenuto.">CU</Tip> + tutte le ricevute delle spese detraibili dell&apos;anno.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Apri la precompilata (dal 30 aprile)</strong><p>Vai su agenziaentrate.gov.it, accedi con SPID. Troverai i dati gi&agrave; inseriti: redditi, spese mediche trasmesse dalle farmacie, interessi del mutuo.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Controlla, integra e invia</strong><p><strong>Non accettare la precompilata senza controllare.</strong> Le voci che mancano pi&ugrave; spesso: sport dei figli, spese mediche private, abbonamenti ai trasporti, affitto.</p></div></div>
              <div className="step r d1"><div className="stepn">5</div><div className="stepb"><strong>Ricevi il rimborso</strong><p>In busta paga tra luglio e agosto (se invii entro giugno). Pensionati: con la pensione di agosto o settembre.</p></div></div>
            </div>

            <h3>Quanto costa</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Metodo</th><th>Costo</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Da solo (precompilata)</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">Gratis</td><td>1&ndash;2 ore. Serve SPID.</td></tr>
                  <tr><td><strong>CAF / Patronato</strong></td><td className="cv">30&ndash;80&euro;</td><td>30 min + eventuale attesa.</td></tr>
                  <tr><td><strong>Commercialista</strong></td><td className="cv">80&ndash;200&euro;</td><td>15 min dal tuo lato.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Un lavoro + poche spese</strong> &rarr; fallo da solo: risparmi e impari.<br/><strong>Mutuo, cambio lavoro, figli</strong> &rarr; vai al CAF: miglior rapporto qualit&agrave;-prezzo. Se sei iscritto al sindacato, spesso &egrave; gratuito.<br/><strong>Cripto, redditi esteri, immobili in affitto</strong> &rarr; commercialista: costa di pi&ugrave; ma sa ottimizzare.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>

            <h3>Sempre necessari</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>CU 2026 (Certificazione Unica)</strong><span className="note">La ricevi dal datore di lavoro entro il 16 marzo. Se non arriva, la scarichi dal sito AdE con SPID.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; + codice fiscale</strong><span className="note">Validi e leggibili.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN del conto corrente</strong><span className="note">Per ricevere l&apos;eventuale rimborso.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>730 dell&apos;anno precedente</strong><span className="note">Se disponibile, aiuta a non dimenticare voci.</span></div></li>
            </ul>

            <h3>Per le detrazioni (porta quelli che hai)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDDB7'}</div><div className="clb"><strong>Ricevute spese mediche e sanitarie</strong><span className="note">Dentista, visite specialistiche, farmaci, psicologo, fisioterapista, occhiali.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Contratto d&apos;affitto registrato</strong><span className="note">Deve essere registrato all&apos;Agenzia delle Entrate. Senza registrazione, niente detrazione.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>Certificazione interessi passivi mutuo</strong><span className="note">La banca te la invia ogni anno. Massimo detraibile: 4.000&euro; di interessi = rimborso max 760&euro;.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFEB'}</div><div className="clb"><strong>Ricevute spese scolastiche e universitarie</strong><span className="note">Rette, mensa, gite, trasporto scolastico, contributi volontari. Tetto: 1.000&euro; per studente.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\u26BD'}</div><div className="clb"><strong>Attivit&agrave; sportive figli (5&ndash;18 anni)</strong><span className="note">Nuoto, calcio, danza. Detraibili al 19%, max 210&euro; per figlio.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDE87'}</div><div className="clb"><strong>Abbonamento trasporto pubblico</strong><span className="note">Metro, bus, treno. Tetto 250&euro;.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC15'}</div><div className="clb"><strong>Ricevute spese veterinarie</strong><span className="note">Tetto di spesa: 550&euro;.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDD28'}</div><div className="clb"><strong>Fatture ristrutturazione + bonifici parlanti</strong><span className="note">Il pagamento deve essere con <Tip t="Un bonifico speciale che riporta causale, codice fiscale e partita IVA del destinatario. Senza questo, niente detrazione 50%.">bonifico parlante</Tip>, non ordinario.</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC9A'}</div><div className="clb"><strong>Ricevute donazioni a ONLUS</strong><span className="note">Detraibili al 26%.</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il metodo della cartellina</div>
              <p>Crea una cartellina (fisica o digitale) chiamata &quot;730 2026&quot;. Ogni volta che ricevi una ricevuta o fattura detraibile, mettila dentro. A maggio avrai tutto pronto in 5 minuti.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori pi&ugrave; comuni</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Accettare la precompilata senza controllarla</div><p>L&apos;Agenzia delle Entrate non ha tutti i dati. Le spese sportive dei figli, l&apos;affitto, le spese mediche private, gli abbonamenti ai trasporti: spesso mancano. Se accetti senza controllare, perdi quei rimborsi.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Non fare il 730 perch&eacute; &quot;tanto non cambia nulla&quot;</div><p>Anche una situazione semplice (dentista, bus, sport di un figlio) genera 200&ndash;400&euro; di rimborso. Ogni anno. Per tutta la vita lavorativa. &Egrave; denaro che stai letteralmente regalando.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Pagare spese detraibili in contanti</div><p>Dal 2025 tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili (carta, bancomat, bonifico). Paghi in contanti? Perdi la detrazione. Eccezioni: farmaci con ricetta e prestazioni SSN.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Andare al CAF all&apos;ultimo momento</div><p>A settembre i CAF sono sommersi. Le code sono lunghe, gli errori pi&ugrave; probabili. Vai tra maggio e giugno: zero stress, rimborso anticipato, tempo per correggere eventuali errori.</p></div>
          </div>

          {/* SCADENZE */}
          <div className="sec breve-hide r" id="calendario">
            <div className="sec-tag">Calendario</div>
            <h2>Le scadenze 2026</h2>
            <div className="timeline r">
              <div className="tli r d1"><strong>Entro il 16 marzo</strong> &mdash; Il datore ti consegna la CU (Certificazione Unica 2026). Se non arriva, sollecita.</div>
              <div className="tli r d2"><strong>30 aprile</strong> &mdash; L&apos;Agenzia delle Entrate pubblica la precompilata online. Accedi con SPID su agenziaentrate.gov.it.</div>
              <div className="tli r d3"><strong>Maggio &ndash; Giugno</strong> &mdash; Il periodo ideale per presentare il 730. Meno code al CAF, rimborso gi&agrave; a luglio, tempo per correzioni.</div>
              <div className="tli r d4"><strong>Luglio &ndash; Agosto</strong> &mdash; Rimborso in busta paga (se hai inviato entro giugno). Pensionati: pensione di agosto/settembre.</div>
              <div className="tli r d1"><strong>30 settembre 2026</strong> &mdash; Scadenza ultima per l&apos;invio. Dopo questa data serve il Modello Redditi PF.</div>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec breve-hide r" id="calcolatore">
            <div className="sec-tag">Stimatore</div>
            <h2>Calcola il tuo rimborso</h2>
            <p>Una stima indicativa basata sulle detrazioni principali. Per i numeri esatti serve la dichiarazione completa.</p>
            <Calculator730 />
          </div>

          {/* ESEMPIO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Maria fa il 730 per la prima volta</h2>

            <p><strong>Maria ha 26 anni</strong>, impiegata a Torino, 22.000&euro; lordi annui. Non ha mai fatto il 730.</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Marzo: raccoglie i documenti</strong><p>Riceve la CU via email. Raccoglie: ricevute dentista (320&euro;), abbonamento GTT annuale (350&euro;), contratto d&apos;affitto (500&euro;/mese). Mette tutto in una cartellina.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Maggio: apre la precompilata</strong><p>Accede con SPID. Il dentista risulta gi&agrave; inserito. Manca l&apos;abbonamento GTT: lo aggiunge manualmente.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Controlla ogni voce</strong><p>Spese mediche: 320&euro; &minus; 129&euro; franchigia = 191&euro; &times; 19% = 36&euro;. Affitto under 31: 991&euro;. Trasporti: 350&euro; &times; 19% = 66&euro;. Totale: 1.093&euro;.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Invia e riceve il rimborso</strong><p>Nella busta paga di luglio trova 1.093&euro; in pi&ugrave;. Zero euro di costo, circa un&apos;ora e mezza di tempo.</p></div></div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Morale della storia</div>
              <p>Maria per 4 anni non ha fatto il 730. Ha perso circa <strong>4.000&euro;</strong>. Quest&apos;anno ci ha messo un&apos;ora e mezza e ha recuperato 1.093&euro;. Il prossimo anno sar&agrave; ancora pi&ugrave; veloce.</p>
            </div>
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
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Bonus e agevolazioni: ti serve l&apos;ISEE.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Per la precompilata online ti serve lo SPID.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spese-mediche" className="rc"><span className="rc-e">{'\uD83E\uDE7A'}</span><div className="rc-t">Spese mediche</div><div className="rc-d">Come scaricare le spese sanitarie dal 730.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFDB\uFE0F'}</span><div><div className="sbtool-n">Agenzia delle Entrate</div><div className="sbtool-d">Precompilata e info ufficiali</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">CU e prestazioni</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/spese-mediche" className="sbguide">{'\uD83E\uDE7A'} Spese mediche<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
