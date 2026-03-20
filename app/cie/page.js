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
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare la CIE nel 2026: Carta d\u2019Identit\u00e0 Elettronica, Costi e Tempi',
  description: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica, documenti, costi (22,21\u20ac), tempi, app CieID e scadenza cartacea 3 agosto 2026. Guida gratuita.',
  keywords: ["carta identit\u00e0 elettronica", "CIE", "CIE 2026", "come richiedere CIE", "costo carta identit\u00e0", "rinnovo carta identit\u00e0", "CIE documenti", "carta identit\u00e0 scaduta", "prenotazione CIE", "CieID app"],
  alternates: { canonical: 'https://zeroburocrazia.it/cie' },
  openGraph: {
    type: 'article',
    title: 'Carta d\u2019Identit\u00e0 Elettronica (CIE) 2026: Come Richiederla, Costi e Tempi',
    description: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica, costi 22,21\u20ac, tempi 6 giorni, scadenza cartacea agosto 2026. Guida gratuita.',
    url: 'https://zeroburocrazia.it/cie',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogcie.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CIE 2026: Come Richiedere la Carta d\u2019Identit\u00e0 Elettronica',
    images: ['https://zeroburocrazia.it/ogcie.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'scadenza', label: 'Scadenza cartacea agosto 2026' },
  { id: 'come', label: 'Come richiederla' },
  { id: 'digitale', label: 'Identit\u00e0 digitale', bh: true },
  { id: 'validita', label: 'Validit\u00e0 e rinnovo' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto costa la CIE?", a: "Il costo \u00e8 di <strong>22,21\u20ac</strong> (16,79\u20ac di diritti statali + 5,42\u20ac di diritti comunali). Alcuni Comuni arrotondano a 22\u20ac. Si paga allo sportello, in contanti o con carta." },
  { q: "Quanto tempo ci vuole per riceverla?", a: "La CIE viene prodotta dal Poligrafico dello Stato e spedita a casa entro <strong>6 giorni lavorativi</strong>. In alternativa puoi ritirarla in Comune dal 7\u00b0 giorno lavorativo. Nel frattempo hai il foglio sostitutivo." },
  { q: "La carta cartacea \u00e8 ancora valida?", a: "Solo fino al <strong>2 agosto 2026</strong>. Dal 3 agosto 2026, per il Regolamento UE 2019/1157, le carte cartacee non saranno pi\u00f9 valide per l\u2019espatrio. Per viaggiare in UE servir\u00e0 la CIE o il passaporto." },
  { q: "Posso usare la CIE al posto dello SPID?", a: "<strong>S\u00ec.</strong> La CIE funziona come identit\u00e0 digitale per accedere a tutti i servizi della PA: INPS, Agenzia Entrate, ANPR, e migliaia di altri. Ti serve l\u2019app <strong>CieID</strong> e il PIN ricevuto al rilascio. A differenza dello SPID, non ha costi annuali." },
  { q: "Ho perso il PIN della CIE, come faccio?", a: "Puoi recuperare met\u00e0 del PIN dalla <strong>lettera consegnata al rilascio</strong> e l\u2019altra met\u00e0 \u00e8 nella busta che arriva con la CIE. Se hai perso entrambi, puoi <strong>sbloccare il PIN</strong> dall\u2019app CieID usando il PUK. Se hai perso anche il PUK, devi tornare in Comune." },
  { q: "Posso prenotare l\u2019appuntamento online?", a: "<strong>S\u00ec, nella maggior parte dei Comuni.</strong> Usa la piattaforma <strong>Agenda CIE</strong> del Ministero dell\u2019Interno. Puoi scegliere giorno e ora, e caricare la foto in anticipo. Alcuni Comuni hanno anche il loro portale di prenotazione." },
  { q: "Serve la CIE per i minorenni?", a: "S\u00ec, anche i minorenni possono avere la CIE (fin dalla nascita). Servono <strong>entrambi i genitori</strong> presenti alla richiesta. La validit\u00e0 \u00e8 ridotta: 3 anni sotto i 3 anni, 5 anni tra 3 e 18 anni." },
  { q: "La CIE vale per andare all\u2019estero?", a: "S\u00ec, nei <strong>Paesi UE</strong> e in alcuni extra-UE (Svizzera, UK, Turchia, Egitto, ecc.), a patto che non riporti la dicitura \u201cNon valida per l\u2019espatrio\u201d. Controlla sempre su <strong>viaggiaresicuri.it</strong> prima di partire." },
];

export default function PaginaCie() {
  const schemas = [
    articleSchema({
      title: 'CIE 2026: come richiedere la carta d\u2019identit\u00e0 elettronica',
      description: 'Come richiedere la CIE nel 2026: costi, tempi, documenti, app CieID e scadenza carta cartacea. Guida gratuita.',
      url: '/cie',
      image: 'ogcie.png',
      datePublished: '2026-03-11',
      dateModified: '2026-03-11',
    }),
    faqSchema(faqItems),
    howToSchema({
      name: 'Come richiedere la Carta d\'Identità Elettronica (CIE)',
      description: 'Procedura per richiedere la CIE: prenotazione, documenti, costo e ritiro.',
      totalTime: 'P10D',
      image: 'ogcie.png',
      steps: [
        { name: 'Prenota l\'appuntamento', text: 'Vai su Agenda CIE (prenotazionicie.interno.gov.it) e prenota un appuntamento al tuo Comune. Puoi anche caricare la fototessera online.' },
        { name: 'Presentati allo sportello', text: 'Porta documento di identità scaduto o in scadenza, codice fiscale e fototessera (se non caricata online). Paga 22,21\u20ac. Ti rilasciano metà PIN e metà PUK.' },
        { name: 'Ricevi la CIE', text: 'La CIE arriva a casa per posta in circa 6 giorni lavorativi, con l\'altra metà del PIN e del PUK. Conserva entrambi i codici.' },
        { name: 'Attiva CieID', text: 'Scarica l\'app CieID, avvicina la CIE al telefono NFC, inserisci il PIN completo. Ora puoi usare la CIE per accedere ai servizi della PA.' },
      ],
    }),
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
            <div className="cat-badge">📄 Documenti e identit&agrave;</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Carta d&apos;Identit&agrave; <em>Elettronica</em></h1>
            <p className="hero-sub">Come richiedere la CIE nel 2026: prenotazione, documenti, costo, tempi di consegna, app CieID e perch&eacute; dal 3 agosto la carta cartacea non sar&agrave; pi&ugrave; valida.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-o">⚠️ Cartacea scade il 3 agosto 2026</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Ministero dell&apos;Interno · Regolamento UE 2019/1157 · D.L. 19/2026</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">22&euro;</div><div className="hl">costo totale<br/>della CIE</div></div>
            <div className="hstat"><div className="hn">6gg</div><div className="hl">consegna a casa<br/>dal Poligrafico</div></div>
            <div className="hstat"><div className="hn">10</div><div className="hl">anni di validit&agrave;<br/>per i maggiorenni</div></div>
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
              <a href="/spid" className="ps">🪪 Faccio lo SPID</a>
              <a href="/cambio-residenza" className="ps">📄 Cambio residenza</a>
              <a href="/isee" className="ps">📋 Faccio l&apos;ISEE</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.cartaidentita.interno.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Sito ufficiale CIE</a>
              <a href="https://www.prenotazionicie.interno.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📅 Prenota appuntamento</a>
              <a href="https://www.anagrafenazionale.interno.it" target="_blank" rel="noopener noreferrer" className="ps">📄 Portale ANPR</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🪪</div><div className="sn">CIE</div><div className="sl">la nuova carta d&apos;identit&agrave; in formato elettronico</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">22,21&euro;</div><div className="sl">costo fisso (diritti statali + comunali)</div></div>
                <div className="sc r d3"><div className="si">📅</div><div className="sn">6 giorni</div><div className="sl">spedita a casa dal Poligrafico</div></div>
                <div className="sc r d1"><div className="si">📱</div><div className="sn">CieID</div><div className="sl">app per usarla come identit&agrave; digitale</div></div>
                <div className="sc bl-bg r d2"><div className="si">⚠️</div><div className="sn">3 agosto 2026</div><div className="sl">la carta cartacea non sar&agrave; pi&ugrave; valida</div></div>
                <div className="sc r d3"><div className="si">🌍</div><div className="sn">Espatrio</div><div className="sl">valida per viaggiare in UE e oltre</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la CIE</h2>
            <p>La Carta d&apos;Identit&agrave; Elettronica &egrave; il tuo documento di identit&agrave; in formato tessera plastificata, con un <Tip t="Un piccolo chip a radiofrequenza (NFC) integrato nella carta. Contiene i tuoi dati anagrafici, la foto, le impronte digitali e il codice fiscale. Serve per l'identit&agrave; digitale e i controlli di sicurezza.">microchip NFC</Tip> dentro. Sembra una carta di credito, ma &egrave; molto di pi&ugrave;: &egrave; il tuo documento di riconoscimento, il tuo codice fiscale (stampato come codice a barre sul retro), la tua identit&agrave; digitale per accedere ai servizi online della PA, e il tuo documento per viaggiare in Europa.</p>
            <p>Ha sostituito la vecchia carta cartacea, che <strong>dal 3 agosto 2026 non sar&agrave; pi&ugrave; valida per l&apos;espatrio</strong>. Se hai ancora quella cartacea, ti conviene richiedere la CIE adesso &mdash; tra qualche mese ci sar&agrave; la corsa.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>CIE</strong> &mdash; Carta d&apos;Identit&agrave; Elettronica. Il documento fisico con il chip.</p>
              <p><strong>CieID</strong> &mdash; l&apos;app gratuita che trasforma la CIE in identit&agrave; digitale. La scarichi sullo smartphone e la usi per accedere a INPS, Agenzia Entrate, ANPR e tutti i servizi della PA.</p>
              <p><strong>PIN</strong> &mdash; il codice personale della CIE. Met&agrave; te lo danno quando la richiedi, l&apos;altra met&agrave; arriva con la carta. Serve per l&apos;identit&agrave; digitale. Non perderlo.</p>
              <p><strong>PUK</strong> &mdash; il codice di sblocco. Se sbagli il PIN 3 volte, la CIE si blocca. Il PUK la sblocca. Arriva insieme alla carta.</p>
              <p><strong>NFC</strong> &mdash; Near Field Communication. La tecnologia che permette al tuo smartphone di &quot;leggere&quot; il chip della CIE avvicinando la carta al telefono.</p>
              <p><strong>Agenda CIE</strong> &mdash; la piattaforma online del Ministero dell&apos;Interno per prenotare l&apos;appuntamento in Comune.</p>
            </div>
          </div>

          {/* SCADENZA CARTACEA */}
          <div className="sec r" id="scadenza">
            <div className="sec-tag">Urgente</div>
            <h2>3 agosto 2026: addio carta cartacea</h2>
            <div className="ib warn r"><div className="ib-t">⚠️ Dal 3 agosto 2026 la carta d&apos;identit&agrave; cartacea non sar&agrave; pi&ugrave; valida per l&apos;espatrio</div>
              <p>Il Regolamento UE 2019/1157 stabilisce che tutte le carte d&apos;identit&agrave; cartacee cessano la validit&agrave; per i viaggi all&apos;estero dal <strong>3 agosto 2026</strong>. Per uscire dall&apos;Italia servir&agrave; la CIE o il passaporto. Se hai ancora la cartacea e viaggi in Europa, <strong>prenota adesso</strong> &mdash; quando si avviciner&agrave; la scadenza, i Comuni saranno sommersi di richieste e i tempi si allungheranno.</p>
            </div>
            <p>In Italia la carta cartacea rester&agrave; utilizzabile come documento di riconoscimento fino alla sua naturale scadenza. Ma per viaggiare all&apos;estero, dal 3 agosto servir&agrave; la CIE.</p>
          </div>

          {/* COME RICHIEDERLA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come richiedere la CIE</h2>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Prenota l&apos;appuntamento</div><p>Vai su <strong>prenotazionicie.interno.gov.it</strong> (Agenda CIE), scegli il tuo Comune, giorno e ora. Puoi anche caricare la fototessera in formato digitale direttamente dalla piattaforma. Se il tuo Comune non &egrave; sulla piattaforma, prenota per telefono o sul sito del Comune.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Presenta i documenti allo sportello</div><p>Il giorno dell&apos;appuntamento porta: <strong>1 fototessera</strong> (formato passaporto, 35&times;45mm) se non l&apos;hai caricata online, la <strong>tessera sanitaria</strong> (codice fiscale), la <strong>vecchia carta d&apos;identit&agrave;</strong> se la rinnovi. In caso di smarrimento o furto: la <strong>denuncia</strong> + un altro documento valido (patente, passaporto). Primo rilascio senza altri documenti: servono <strong>2 testimoni</strong> con documento.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Rilascio impronte e firma</div><p>L&apos;operatore acquisisce le <strong>impronte digitali</strong> di entrambi gli indici, ti fa firmare il modulo e ti chiede se vuoi esprimere la volont&agrave; sulla <strong>donazione organi</strong>. Poi paghi i 22,21&euro;.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Ricevi ricevuta + met&agrave; PIN</div><p>Ti danno un <strong>foglio sostitutivo</strong> (vale come documento provvisorio) e la prima met&agrave; del <strong>PIN</strong>. La seconda met&agrave; arriver&agrave; con la CIE. <strong>Conserva entrambi.</strong></p></div></div>
              <div className="step r"><div className="step-n">5</div><div className="step-body"><div className="step-title">Ricevi la CIE a casa</div><p>La CIE arriva per <strong>posta raccomandata</strong> entro 6 giorni lavorativi, con la seconda met&agrave; del PIN e il PUK. In alternativa puoi ritirarla in Comune dal 7&deg; giorno.</p></div></div>
            </div>
          </div>

          {/* IDENTITÀ DIGITALE */}
          <div className="sec bh r" id="digitale">
            <div className="sec-tag">Servizi online</div>
            <h2>La CIE come identit&agrave; digitale (alternativa allo SPID)</h2>
            <p>La CIE non &egrave; solo un documento fisico: con l&apos;app <strong>CieID</strong> diventa la tua identit&agrave; digitale. Puoi accedere a tutti i servizi della PA senza SPID: INPS, Agenzia delle Entrate, ANPR, Comuni, fascicolo sanitario, e migliaia di altri.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>CIE vs SPID: CONFRONTO</div>
              <div className="db-row"><span>Costo</span><span>CIE: 0&euro;/anno · SPID: 6&euro;/anno (alcuni provider)</span></div>
              <div className="db-row"><span>Come funziona</span><span>CIE: avvicini la carta al telefono · SPID: username + password + OTP</span></div>
              <div className="db-row"><span>Serve lo smartphone?</span><span>CIE: s&igrave; (con NFC) · SPID: s&igrave; (per l&apos;OTP)</span></div>
              <div className="db-row"><span>Servizi accessibili</span><span>Identici: tutti i servizi PA</span></div>
              <div className="db-row"><span>Anche documento fisico?</span><span>CIE: s&igrave; · SPID: no</span></div>
              <div className="db-row db-total"><span>Consiglio</span><span>Avere entrambi &mdash; la CIE come backup</span></div>
            </div>

            <div className="ib tip r" style={{ marginTop: '20px' }}><div className="ib-t">💡 Come attivare CieID</div>
              <p>Scarica l&apos;app <strong>CieID</strong> (iOS o Android), registra la tua CIE avvicinandola al telefono, inserisci il PIN completo (le due met&agrave; unite). Fatto: da quel momento puoi accedere ai servizi PA con la CIE.</p>
            </div>
          </div>

          {/* VALIDITÀ */}
          <div className="sec r" id="validita">
            <div className="sec-tag">Durata</div>
            <h2>Validit&agrave; e quando rinnovare</h2>
            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>VALIDIT&Agrave; PER ET&Agrave;</div>
              <div className="db-row"><span>Maggiorenni</span><span>10 anni</span></div>
              <div className="db-row"><span>Minorenni 3&ndash;18 anni</span><span>5 anni</span></div>
              <div className="db-row"><span>Minorenni sotto 3 anni</span><span>3 anni</span></div>
              <div className="db-row"><span>Over 70 (dal 30 luglio 2026)</span><span>Durata illimitata</span></div>
              <div className="db-row db-total"><span>Rinnovo anticipato</span><span>Da 180 giorni (6 mesi) prima della scadenza</span></div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Sara, carta cartacea in scadenza</h2>
            <p>Sara ha 32 anni e ha ancora la carta d&apos;identit&agrave; cartacea, che scade a ottobre 2026. Vuole andare in Grecia ad agosto. Ecco cosa fa.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>COSA FA SARA</div>
              <div className="db-row"><span>Marzo 2026</span><span>Prenota su Agenda CIE, carica la foto</span></div>
              <div className="db-row"><span>Appuntamento in Comune</span><span>Porta vecchia carta + tessera sanitaria</span></div>
              <div className="db-row"><span>Paga</span><span>22,21&euro; allo sportello con carta</span></div>
              <div className="db-row"><span>Riceve ricevuta</span><span>Foglio sostitutivo + prima met&agrave; PIN</span></div>
              <div className="db-row"><span>Dopo 5 giorni</span><span>Arriva la CIE a casa con PIN + PUK</span></div>
              <div className="db-row"><span>Scarica CieID</span><span>Registra la CIE, accede a INPS e ANPR</span></div>
              <div className="db-row db-total"><span>Agosto 2026</span><span>Parte per la Grecia con la CIE ✓</span></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Aspettare luglio-agosto 2026 per richiedere la CIE</div><p>Milioni di italiani hanno ancora la cartacea. Quando si avviciner&agrave; la scadenza del 3 agosto, i Comuni saranno sommersi. Prenota <strong>adesso</strong>, ad aprile-maggio: tempi brevi e nessuna fila.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Perdere il PIN e il PUK</div><p>Te li danno in due momenti diversi: met&agrave; allo sportello, met&agrave; con la carta. <strong>Fotografali e salvali</strong> in un posto sicuro. Senza PIN non puoi usare la CIE come identit&agrave; digitale.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Presentarsi senza fototessera</div><p>Se non hai caricato la foto su Agenda CIE, devi portare una <strong>fototessera cartacea formato passaporto</strong> (35&times;45mm). Se arrivi senza, l&apos;appuntamento salta e devi riprogrammare.</p></div>
          </div>

          {/* CIE PER MINORI */}
          <div className="sec r">
            <div className="sec-tag">Bambini e ragazzi</div>
            <h2>CIE per minori (0-17 anni)</h2>
            <p>Anche i minori possono (e dal 3 agosto 2026 <strong>devono</strong>, per l&apos;espatrio) avere la CIE. Ecco le differenze rispetto agli adulti:</p>

            <div className="glossary">
              <div className="gl-item"><strong>Validit&agrave; ridotta</strong> &mdash; 0-3 anni: vale <strong>3 anni</strong>. 3-18 anni: vale <strong>5 anni</strong>. La motivazione &egrave; la stessa del passaporto: i tratti del viso cambiano rapidamente.</div>
              <div className="gl-item"><strong>Servono entrambi i genitori</strong> &mdash; il minore deve essere accompagnato da <strong>entrambi i genitori</strong> (o da chi ne fa le veci). Se un genitore non pu&ograve; venire, deve presentare un atto di assenso con copia del documento.</div>
              <div className="gl-item"><strong>Impronte digitali</strong> &mdash; dai 12 anni in su vengono acquisite le impronte. Sotto i 12 anni, la CIE viene rilasciata senza impronte.</div>
              <div className="gl-item"><strong>CieID per minori</strong> &mdash; il PIN e il PUK vengono consegnati ma l&apos;uso come identit&agrave; digitale &egrave; limitato: il minore non pu&ograve; accedere autonomamente ai servizi della PA.</div>
            </div>
          </div>

          {/* SMARRIMENTO */}
          <div className="sec r">
            <div className="sec-tag">Situazioni particolari</div>
            <h2>Smarrimento, furto e deterioramento</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Smarrimento</strong> &mdash; presenta <strong>denuncia di smarrimento</strong> ai Carabinieri o alla Polizia. Poi prenota un appuntamento al Comune per richiedere una nuova CIE. Costo: 22,21&euro; (come il primo rilascio). Porta la copia della denuncia.</div>
              <div className="gl-item"><strong>Furto</strong> &mdash; stessa procedura: denuncia + nuova richiesta. Se sei all&apos;estero, rivolgiti al Consolato per un documento di viaggio temporaneo.</div>
              <div className="gl-item"><strong>CIE deteriorata</strong> &mdash; se la carta &egrave; danneggiata (chip illeggibile, foto non riconoscibile, piegata), puoi richiederne una nuova senza aspettare la scadenza. Porta la vecchia CIE allo sportello.</div>
              <div className="gl-item"><strong>Cambio residenza o dati</strong> &mdash; se cambi residenza, la CIE resta valida (l&apos;indirizzo non &egrave; sulla carta). Se per&ograve; cambi cognome (matrimonio, divorzio), devi richiedere una nuova CIE.</div>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec bh r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* RELATED */}
          
          <div className="related r" style={{marginBottom: '32px'}}>
            <h2>{'\uD83D\uDCDA'} Approfondimenti</h2>
            <div className="rg">
              <a href="/cie/scadenza-cartacea" className="rc"><span className="rc-e">{'⏰'}</span><div className="rc-t">Scadenza carta cartacea</div><div className="rc-d">Dal 3 agosto 2026 non vale più per l’espatrio.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

<div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/spid" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">L&apos;altra identit&agrave; digitale &mdash; complementare alla CIE.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cambio-residenza" className="rc"><span className="rc-e">📄</span><div className="rc-t">Cambio residenza</div><div className="rc-d">Non devi rifare la CIE se cambi indirizzo.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Accedi con CIE al precompilato INPS.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.cartaidentita.interno.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Sito ufficiale CIE</div><div className="sbtool-d">Tutte le info dal Ministero</div></div></a>
            <a href="https://www.prenotazionicie.interno.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📅</span><div><div className="sbtool-n">Prenota appuntamento</div><div className="sbtool-d">Agenda CIE online</div></div></a>
            <a href="https://www.anagrafenazionale.interno.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Portale ANPR</div><div className="sbtool-d">Certificati e servizi anagrafe</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/spid" className="sbguide">🪪 Faccio lo SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/cambio-residenza" className="sbguide">📄 Cambio residenza<span className="sbg-ar">&rarr;</span></a>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
