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
  title: "Codice Fiscale: cos'è, come richiederlo, duplicato online e neonati",
  description: "Codice fiscale: come richiederlo per la prima volta, duplicato online, neonati, stranieri. Procedura Agenzia delle Entrate e tessera sanitaria.",
  keywords: ["codice fiscale","codice fiscale online","richiesta codice fiscale","duplicato codice fiscale","codice fiscale neonato","codice fiscale stranieri","tessera sanitaria","codice fiscale smarrito"],
  alternates: { canonical: 'https://zeroburocrazia.it/codice-fiscale' },
  openGraph: {
    title: "Codice Fiscale: cos'è, come richiederlo, duplicato online e neonati",
    description: "Codice fiscale: come richiederlo per la prima volta, duplicato online, neonati, stranieri. Procedura Agenzia delle Entrate e tessera sanitaria.",
    url: 'https://zeroburocrazia.it/codice-fiscale',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogcodicefiscale.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogcodicefiscale.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'neonati', label: "Neonati" },
  { id: 'duplicato', label: "Duplicato" },
  { id: 'stranieri', label: "Stranieri" },
  { id: 'tessera', label: "Tessera sanitaria", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "Come faccio a sapere qual è il mio codice fiscale?", a: "È stampato sulla <strong>tessera sanitaria</strong> (la tessera plastificata del SSN). Se non ce l'hai, puoi calcolarlo online con un generatore di codici fiscali, oppure accedere all'area riservata dell'Agenzia delle Entrate con SPID." },
  { q: "Posso calcolare il codice fiscale online?", a: "Sì, ci sono molti siti che lo calcolano partendo dai tuoi dati anagrafici. Però il risultato è indicativo — in caso di omocodia (due persone con lo stesso codice), l'Agenzia assegna un codice diverso. Per quello ufficiale, verifica con l'Agenzia delle Entrate." },
  { q: "Il codice fiscale cambia se cambio residenza?", a: "<strong>No.</strong> Il codice fiscale è legato ai dati di nascita (luogo e data) e non cambia mai, neanche se ti trasferisci all'estero." },
  { q: "Quanto tempo ci vuole per ricevere il duplicato?", a: "Il numero della nuova tessera è disponibile online entro <strong>24-48 ore</strong>. La tessera fisica arriva per posta entro <strong>15-20 giorni</strong>." },
  { q: "Il codice fiscale per i neonati arriva automaticamente?", a: "<strong>Sì.</strong> Il Comune lo assegna al momento dell'iscrizione all'anagrafe. La prima tessera sanitaria (1 anno di validità) arriva a casa. Se hai urgenza, puoi richiederlo online con SPID sul sito dell'Agenzia delle Entrate." },
  { q: "Sono straniero e non ho il codice fiscale. Cosa faccio?", a: "Se stai richiedendo il permesso di soggiorno, il codice ti viene assegnato dalla <strong>Questura</strong>. Se hai una domanda di lavoro in corso, lo assegna lo Sportello Unico per l'Immigrazione. Non devi andare all'Agenzia delle Entrate." },
  { q: "Codice fiscale e tessera sanitaria sono la stessa cosa?", a: "No. Il <strong>codice fiscale</strong> è il numero di 16 caratteri. La <strong>tessera sanitaria</strong> è la tessera fisica che lo contiene e dà accesso al SSN. Il codice è stampato sulla tessera, ma puoi avere il codice anche senza tessera." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Codice Fiscale: cos'è, come richiederlo, duplicato online e neonati",
      description: "Codice fiscale: come richiederlo per la prima volta, duplicato online, neonati, stranieri. Procedura Agenzia delle Entrate e tessera sanitaria.",
      url: '/codice-fiscale',
      image: 'ogcodicefiscale.png',
      datePublished: '2026-03-20',
      dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-documenti">
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
            <div className="cat-badge">{'\uD83E\uDEAA'} Documenti</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Codice <em>Fiscale</em></h1>
            <p className="hero-sub">Cos&apos;&egrave;, come richiederlo per la prima volta, come ottenere il duplicato se l&apos;hai perso. Neonati, stranieri e tessera sanitaria.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 5 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCB0'} Gratis</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; Ministero della Salute</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0&euro;</div><div className="hl">costo<br/>sempre gratuito</div></div>
            <div className="hstat"><div className="hn">Online</div><div className="hl">duplicato<br/>con SPID dal sito AdE</div></div>
            <div className="hstat"><div className="hn">Auto</div><div className="hl">per i neonati<br/>lo assegna il Comune</div></div>
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
              <a href="/spid" className="ps">{'\uD83D\uDD10'} SPID</a>
              <a href="/cie" className="ps">{'\uD83D\uDCB3'} CIE</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it/portale/codice-fiscale-tessera-sanitaria-partita-iva" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFDB\uFE0F'} Agenzia Entrate &mdash; Codice fiscale</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Codice fiscale</strong> &mdash; codice alfanumerico di 16 caratteri che identifica ogni persona ai fini fiscali, sanitari e amministrativi in Italia.</div>
              <div className="gl-item r d2"><strong>Tessera sanitaria (TS)</strong> &mdash; la tessera plastificata che contiene il codice fiscale e d&agrave; accesso al SSN. Funziona anche come Carta Nazionale dei Servizi (CNS) se ha il microchip.</div>
              <div className="gl-item r d3"><strong>CNS</strong> &mdash; Carta Nazionale dei Servizi &mdash; la tessera sanitaria con microchip attivato. Permette di accedere ai servizi online della PA.</div>
              <div className="gl-item r d4"><strong>Modello AA4/8</strong> &mdash; il modulo dell&apos;Agenzia delle Entrate per richiedere l&apos;attribuzione del codice fiscale o comunicare variazioni di dati.</div>
              <div className="gl-item r d1"><strong>ANPR</strong> &mdash; Anagrafe Nazionale Popolazione Residente &mdash; il sistema che collega tutti i Comuni d&apos;Italia. Assegna il codice fiscale ai neonati.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCB3'}</div><div className="sn">16 chr</div><div className="sl">codice alfanumerico<br/>univoco per persona</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">Gratis</div><div className="sl">sempre gratuito<br/>prima volta e duplicato</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83D\uDC76'}</div><div className="sn">Auto</div><div className="sl">per neonati<br/>lo assegna il Comune</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDCBB'}</div><div className="sn">Online</div><div className="sl">duplicato con SPID<br/>sul sito Agenzia Entrate</div></div>
                <div className="sc r d1"><div className="si">{'\uD83C\uDF0D'}</div><div className="sn">Stranieri</div><div className="sl">assegnato da Questura<br/>o Sportello Immigrazione</div></div>
                <div className="sc r d2"><div className="si">{'\uD83C\uDFE5'}</div><div className="sn">TS</div><div className="sl">tessera sanitaria<br/>include il codice fiscale</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il codice fiscale</h2>
            <p>Il codice fiscale &egrave; un <strong>codice di 16 caratteri</strong> (lettere e numeri) che ti identifica in modo univoco davanti allo Stato italiano. Lo usi per tutto: dichiarazione dei redditi, contratti, apertura conti correnti, visite mediche, iscrizioni scolastiche, richiesta bonus.</p>

            <p>Viene generato automaticamente dai tuoi dati anagrafici: <strong>nome, cognome, data e luogo di nascita, sesso</strong>. Non cambia mai (salvo rarissimi casi di omocodia). &Egrave; stampato sulla <strong>tessera sanitaria</strong>, che &egrave; il documento fisico pi&ugrave; comune che lo contiene.</p>

            <p>Non confonderlo con la partita IVA (che serve per l&apos;attivit&agrave; professionale) o con l&apos;ISEE (che misura la ricchezza familiare). Il codice fiscale &egrave; il tuo &ldquo;nome&rdquo; per lo Stato &mdash; senza non puoi fare praticamente nulla.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Come si legge il codice fiscale</div>
              <p>Le prime 3 lettere vengono dal <strong>cognome</strong>, le successive 3 dal <strong>nome</strong>. Poi: 2 cifre per l&apos;anno di nascita, 1 lettera per il mese, 2 cifre per il giorno (per le donne: giorno + 40). Le ultime 4 sono il codice del Comune di nascita + 1 carattere di controllo.</p>
            </div>
          </div>

          {/* NEONATI */}
          <div className="sec r" id="neonati">
            <div className="sec-tag">Per i genitori</div>
            <h2>Codice fiscale per neonati</h2>
            <p>Se sei appena diventato genitore, <strong>non devi fare nulla</strong>. Il codice fiscale del neonato viene assegnato <strong>automaticamente dal Comune</strong> al momento della prima iscrizione all&apos;anagrafe (tramite il sistema ANPR). La tessera sanitaria arriva a casa entro 60 giorni.</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Dichiarazione di nascita</strong>
                  <p>La fai in ospedale (la maggior parte dei casi) o al Comune di residenza entro 10 giorni dalla nascita.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Il Comune assegna il codice fiscale</strong>
                  <p>Tramite il collegamento telematico con l&apos;Anagrafe tributaria, il codice viene generato automaticamente.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>La tessera sanitaria arriva a casa</strong>
                  <p>La prima tessera (validit&agrave; 1 anno) viene spedita all&apos;indirizzo di residenza. Dopo l&apos;iscrizione alla ASL e la scelta del pediatra, arriva quella con validit&agrave; 6 anni.</p>
                </div>
              </div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Se hai urgenza (es. scelta pediatra)</div>
              <p>Se il Comune non ha ancora comunicato il codice fiscale e ti serve subito (per scegliere il pediatra, ad esempio), puoi richiederlo <strong>online con SPID</strong> nell&apos;area riservata dell&apos;Agenzia delle Entrate, tramite il servizio &ldquo;Richiesta attribuzione codice fiscale al neonato&rdquo;. Oppure vai di persona a un ufficio dell&apos;Agenzia delle Entrate con il modello AA4/8 e il certificato di nascita.</p>
            </div>
          </div>

          {/* DUPLICATO */}
          <div className="sec r" id="duplicato">
            <div className="sec-tag">Se l&apos;hai perso</div>
            <h2>Richiedere il duplicato</h2>
            <p>Hai smarrito la tessera sanitaria o il tesserino del codice fiscale? Niente panico &mdash; il duplicato si richiede in 2 minuti online.</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Vai sul sito dell&apos;Agenzia delle Entrate</strong>
                  <p>Accedi all&apos;area riservata con SPID, CIE o CNS. Cerca &ldquo;Richiesta di riemissione della Tessera Sanitaria&rdquo;.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Indica il motivo</strong>
                  <p>Smarrimento, furto, deterioramento o mancato recapito. Per sicurezza ti chiede alcuni dati della tua ultima dichiarazione dei redditi.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Ricevi la nuova tessera</strong>
                  <p>Il numero della nuova tessera &egrave; disponibile nel portale entro <strong>24-48 ore</strong>. La tessera fisica arriva per posta entro <strong>15-20 giorni</strong>.</p>
                </div>
              </div>
            </div>

            <p>Se non puoi usare il servizio online, puoi inviare il <strong>modello AA4/8</strong> + copia del documento d&apos;identit&agrave; via PEC a un ufficio dell&apos;Agenzia delle Entrate.</p>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Serve per richiedere il duplicato online. Come farlo gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* STRANIERI */}
          <div className="sec r" id="stranieri">
            <div className="sec-tag">Cittadini stranieri</div>
            <h2>Codice fiscale per stranieri</h2>
            <p>Se sei un cittadino straniero, il codice fiscale ti viene assegnato automaticamente in queste situazioni:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDDC2\uFE0F'}</div><div className="clb"><strong>Domanda di ingresso per lavoro o ricongiungimento</strong><span className="note">Lo assegna lo Sportello Unico per l&apos;Immigrazione.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDEAA'}</div><div className="clb"><strong>Rilascio o rinnovo permesso di soggiorno</strong><span className="note">Lo assegna la Questura se non ce l&apos;hai gi&agrave;.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDF0D'}</div><div className="clb"><strong>Residenti all&apos;estero</strong><span className="note">Lo richiedi al Consolato italiano nel tuo Paese.</span></div></li>
            </ul>

            <p><strong>Non devi andare all&apos;Agenzia delle Entrate</strong> &mdash; il codice viene assegnato direttamente dagli enti sopra indicati. Solo in casi eccezionali (es. omocodia) la Questura pu&ograve; inviarti all&apos;Agenzia per la risoluzione.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Mini guida in 17 lingue</div>
              <p>L&apos;Agenzia delle Entrate pubblica una guida al codice fiscale per stranieri disponibile in <strong>17 lingue</strong> sul suo sito ufficiale. Cercala nella sezione &ldquo;Codice fiscale e tessera sanitaria&rdquo;.</p>
            </div>
          </div>

          {/* TESSERA */}
          <div className="sec breve-hide r" id="tessera">
            <div className="sec-tag">Documento fisico</div>
            <h2>Tessera sanitaria e CNS</h2>
            <p>Il codice fiscale &egrave; stampato sulla <strong>tessera sanitaria</strong> &mdash; la tessera plastificata che usi dal medico e in farmacia. Se ha il <strong>microchip</strong>, funziona anche come Carta Nazionale dei Servizi (CNS) e ti permette di accedere ai servizi online della PA.</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>La tessera si rinnova automaticamente</strong><span className="note">Alla scadenza (6 anni), se risulti iscritto al SSN, la nuova tessera arriva a casa senza richiederla.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCF1'}</div><div className="clb"><strong>Copia digitale nell&apos;area riservata</strong><span className="note">Dal 2026 puoi visualizzare e stampare la copia della tessera sanitaria nell&apos;area riservata dell&apos;Agenzia delle Entrate, con SPID.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE5'}</div><div className="clb"><strong>Per gli stranieri non iscritti al SSN</strong><span className="note">L&apos;Agenzia delle Entrate rilascia un tesserino di codice fiscale (senza le funzionalit&agrave; sanitarie).</span></div></li>
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
              <a href="/spid" className="rc r d1"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per richiedere il duplicato online.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cie" className="rc r d2"><span className="rc-e">{'\uD83D\uDCB3'}</span><div className="rc-t">CIE</div><div className="rc-d">La carta d'identità elettronica, l'altro documento digitale.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee" className="rc r d3"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Il codice fiscale è il primo dato che serve per l'ISEE.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.agenziaentrate.gov.it/portale/codice-fiscale-tessera-sanitaria-partita-iva" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFDB\uFE0F'}</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Codice fiscale e tessera sanitaria</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/cie" className="sbguide">{'\uD83D\uDCB3'} CIE<span className="sbg-ar">&rarr;</span></a>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
