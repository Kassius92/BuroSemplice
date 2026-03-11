import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizSpid from '@/components/QuizSpid';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore',
  description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni. Guida gratuita passo per passo.',
  keywords: ["SPID", "come fare SPID", "SPID 2026", "SPID online", "SPID Poste", "identità digitale", "SPID CIE", "SPID gratis", "provider SPID", "SPID livello 2"],
  alternates: { canonical: 'https://zeroburocrazia.it/spid' },
  openGraph: {
    title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore',
    description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni. Guida gratuita passo per passo.',
    url: 'https://zeroburocrazia.it/spid',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og-spid.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://zeroburocrazia.it/og-spid.png'],
    title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore',
    description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni. Guida gratuita passo per passo.',
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'serve', label: 'A cosa serve' },
  { id: 'come-si-fa', label: 'Come si fa' },
  { id: 'provider', label: 'Provider' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Lo SPID \u00E8 obbligatorio?", a: "<strong>Tecnicamente no.</strong> Puoi ancora andare agli uffici di persona per molte cose. Ma nella pratica, senza SPID (o CIE) non accedi a quasi nessun servizio online della PA: precompilata, bonus, ISEE, certificati, fascicolo sanitario. Sempre pi\u00F9 servizi sono disponibili <em>solo</em> online. Costa 0\u20AC e ci metti 15 minuti \u2014 non c\u2019\u00E8 un motivo reale per non farlo." },
  { q: "Lo SPID scade?", a: "<strong>Lo SPID in s\u00E9 non scade.</strong> Quello che pu\u00F2 scadere \u00E8 la password (ogni 6\u201312 mesi, dipende dal provider). Quando succede, la cambi in 2 minuti dall\u2019app o dal sito del provider. Il tuo account SPID resta attivo finch\u00E9 il provider esiste. Se un giorno chiudesse, puoi trasferire lo SPID a un altro provider gratis." },
  { q: "Posso avere pi\u00F9 SPID con provider diversi?", a: "<strong>S\u00EC.</strong> Puoi avere SPID con Poste, Aruba e Lepida contemporaneamente. Sono indipendenti. L\u2019unica cosa che non puoi avere \u00E8 due SPID con lo stesso provider. Averne due diversi \u00E8 utile come backup \u2014 se uno ha problemi, usi l\u2019altro." },
  { q: "Ho perso la password, che faccio?", a: "Niente panico. Vai sul sito del tuo provider e clicca <strong>\u201CPassword dimenticata\u201D</strong>. Ti mandano un link via email per resettarla. Se non hai pi\u00F9 accesso neanche all\u2019email, contatta il servizio clienti del provider. Con PosteID puoi anche andare all\u2019ufficio postale con un documento." },
  { q: "SPID e CIE sono la stessa cosa?", a: "<strong>No, ma fanno quasi le stesse cose.</strong> Lo SPID \u00E8 un\u2019identit\u00E0 digitale (username + password + app). La CIE \u00E8 la carta d\u2019identit\u00E0 fisica con chip NFC. Entrambi ti permettono di accedere ai servizi della PA online. Lo SPID \u00E8 pi\u00F9 pratico (non devi cercare la carta ogni volta), la CIE \u00E8 pi\u00F9 sicura. Il consiglio: fatti lo SPID per l\u2019uso quotidiano, tieni la CIE come backup." },
  { q: "Cosa sono i 3 livelli dello SPID?", a: "Lo SPID ha 3 livelli di sicurezza. <strong>Livello 1:</strong> username + password (siti poco sensibili). <strong>Livello 2:</strong> password + conferma dall\u2019app \u2014 \u00E8 quello che usi nel 99% dei casi (INPS, Agenzia Entrate, Comune). <strong>Livello 3:</strong> serve un dispositivo fisico aggiuntivo, rarissimo. Quando fai lo SPID ottieni automaticamente livello 1 e 2. Non ci pensare." },
  { q: "Quanto costa fare lo SPID?", a: "<strong>Da 0\u20AC a 9,90\u20AC.</strong> Se hai la CIE o vai all\u2019ufficio postale: gratis. Se vuoi farlo da casa senza CIE con una videochiamata: circa 9,90\u20AC (una tantum, poi non paghi pi\u00F9 nulla). Non ci sono costi annuali o abbonamenti." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come fare lo SPID nel 2026: guida completa e gratuita',
      description: 'Come fare lo SPID nel 2026: quale provider scegliere, come fare il riconoscimento, quanto costa. Guida passo passo gratuita.',
      url: '/spid',
      image: 'og-spid.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-09',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-documenti">
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
            <div className="cat-badge">{'\uD83E\uDEAA'} Documenti</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Faccio lo <em>SPID</em></h1>
            <p className="hero-sub">La tua identit&agrave; digitale, spiegata semplice. Come ottenerla in 15 minuti, quale provider scegliere e perch&eacute; nel 2026 non puoi farne a meno.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> AgID (Agenzia per l&apos;Italia Digitale) · SPID.gov.it · Provider ufficiali accreditati</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">0€</div><div className="hl">costo con CIE<br/>o ufficio postale</div></div>
            <div className="hstat"><div className="hn">15&apos;</div><div className="hl">tempo medio<br/>per ottenerlo</div></div>
            <div className="hstat"><div className="hn">{'\u221E'}</div><div className="hl">non scade mai<br/>vale per sempre</div></div>
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
              <a href="/isee" className="ps">📋 Faccio l'ISEE</a>
              <span className="ps ps-soon">🪪 Carta identità elettronica <span className="ps-tag">Presto</span></span>
              <span className="ps ps-soon">✉️ PEC obbligatoria <span className="ps-tag">Presto</span></span>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">Gratis</div><div className="sl">con CIE o ufficio postale</div></div>
                <div className="sc sg r d2"><div className="si">{'\u23F1'}</div><div className="sn">5–20&apos;</div><div className="sl">minuti per ottenerlo</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCF1'}</div><div className="sn">Online</div><div className="sl">tutto da casa con la CIE</div></div>
                <div className="sc    r d1"><div className="si">{'\u267E\uFE0F'}</div><div className="sn">{'\u221E'}</div><div className="sl">non scade, vale per sempre</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">3 doc</div><div className="sl">documento, tessera sanitaria, telefono</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83C\uDFDB'}</div><div className="sn">5.300+</div><div className="sl">servizi PA accessibili</div></div>
              </div>
            </div>
            <QuizSpid />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; lo SPID (spiegato semplice)</h2>

            <p>Pensa allo SPID come al <strong>documento d&apos;identit&agrave; per internet</strong>. Quando vai in posta o al Comune, mostri la carta d&apos;identit&agrave; per dimostrare chi sei. Online funziona uguale: quando entri su un sito della Pubblica Amministrazione (INPS, Agenzia delle Entrate, il tuo Comune), il sito ti chiede &quot;chi sei?&quot; — e tu rispondi con lo SPID.</p>

            <p>In pratica &egrave; un nome utente + una password + una conferma dal telefono. Lo fai una volta sola, e da quel momento in poi accedi a tutto. <strong>Non scade, non costa nulla, e ti evita code e raccomandate per sempre.</strong></p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>SPID</strong> — Sistema Pubblico di Identit&agrave; Digitale. Il tuo &quot;documento d&apos;identit&agrave; online&quot; per accedere ai servizi della PA.</div>
              <div className="gl-item r d2"><strong>Provider</strong> — L&apos;azienda che ti rilascia lo SPID (es. Poste, Aruba, Lepida). Sono autorizzati dallo Stato. Lo SPID &egrave; identico qualunque provider scegli — cambia solo il metodo e il costo della registrazione.</div>
              <div className="gl-item r d3"><strong>CIE</strong> — Carta d&apos;Identit&agrave; Elettronica. La carta d&apos;identit&agrave; con il <Tip t="Near Field Communication: la tecnologia che permette al telefono di comunicare con la carta d'identità quando li avvicini. È quella che usi anche per pagare col telefono.">chip NFC</Tip>. Se l&apos;hai fatta dopo il 2017, ce l&apos;hai. Puoi usarla per fare lo SPID senza uscire di casa.</div>
              <div className="gl-item r d4"><strong>Riconoscimento</strong> — Il momento in cui il provider verifica che sei davvero tu. Pu&ograve; avvenire di persona (ufficio postale), con la CIE dal telefono, con una videochiamata, o con firma digitale.</div>
              <div className="gl-item r d1"><strong>Livello 2</strong> — Il livello di sicurezza che usi nel 99% dei casi: password + conferma dall&apos;app. Lo ottieni automaticamente quando fai lo SPID.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} SPID vs CIE: qual &egrave; la differenza?</div>
              <p>La <strong><Tip t="Carta d'Identità Elettronica. La carta d'identità con chip che ti hanno dato dal 2017 in poi. Ha un PIN di 8 cifre.">CIE</Tip></strong> fa molte delle stesse cose — puoi accedere ai siti della PA anche con quella. La differenza: la CIE la devi avvicinare al telefono ogni volta (serve <Tip t="Near Field Communication: il sensore del telefono che comunica con la carta d'identità quando li avvicini. Ce l'hanno quasi tutti gli smartphone dal 2018.">NFC</Tip>), e non tutti i servizi la accettano ancora al 100%. Lo SPID &egrave; pi&ugrave; pratico per l&apos;uso quotidiano. Il consiglio: <strong>fatti entrambi</strong>. La CIE ce l&apos;hai gi&agrave; se hai rinnovato la carta d&apos;identit&agrave; dopo il 2017.</p>
            </div>
          </div>

          {/* A COSA SERVE */}
          <div className="sec r" id="serve">
            <div className="sec-tag">Utilizzo</div>
            <h2>A cosa serve (in concreto)</h2>
            <p>Nel 2026, senza SPID non fai quasi nulla online con la PA. Ecco le cose pi&ugrave; comuni per cui ti serve:</p>

            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">{'\uD83E\uDDFE'}</div><div className="uc-n">Fare il 730</div><div className="uc-d">Accedi alla <Tip t="Il 730 già compilato dall'Agenzia delle Entrate con i tuoi dati. Tu controlli e confermi.">precompilata</Tip> su agenziaentrate.gov.it</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83D\uDCCB'}</div><div className="uc-n">Fare l&apos;ISEE</div><div className="uc-d">Serve per bonus, agevolazioni, rette universit&agrave;</div></div>
              <div className="uc r d3"><div className="uc-e">{'\uD83D\uDCB0'}</div><div className="uc-n">Chiedere bonus</div><div className="uc-d">Assegno unico, bonus nido, bonus trasporti, bonus psicologo</div></div>
              <div className="uc r d4"><div className="uc-e">{'\uD83C\uDFE5'}</div><div className="uc-n">Fascicolo Sanitario</div><div className="uc-d">Referti, ricette, certificati vaccinali</div></div>
              <div className="uc r d1"><div className="uc-e">{'\uD83C\uDFE0'}</div><div className="uc-n">Cambio residenza</div><div className="uc-d">Online in 10 minuti invece di fare la coda all&apos;anagrafe</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83D\uDCC4'}</div><div className="uc-n">Certificati e visure</div><div className="uc-d">Stato di famiglia, certificato di residenza, visure catastali</div></div>
            </div>

            <p>E poi: iscriversi all&apos;universit&agrave;, consultare i contributi INPS, prenotare visite mediche, firmare digitalmente, accedere a NoiPA (dipendenti pubblici), e a tutti i servizi regionali e comunali.</p>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Senza SPID il 730 ti costa 30–80€ in pi&ugrave;</div>
              <p>Vuoi fare il 730 da solo online? Ti serve lo SPID (o la CIE) per accedere alla precompilata gratis. Senza, l&apos;unica alternativa &egrave; andare al CAF e pagare. E il 730 &egrave; solo l&apos;inizio — ISEE, bonus, certificati: tutto passa dallo SPID.</p>
            </div>

            <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
              <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Guida completa alla dichiarazione.</div><span className="xlink-ar">{'\u2192'}</span></a>
              <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Serve lo SPID per farlo online.</div><span className="xlink-ar">{'\u2192'}</span></a>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come-si-fa">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa lo SPID</h2>
            <p>10–20 minuti in tutto. Il processo ha 3 fasi: scegli il <Tip t="L'azienda autorizzata dallo Stato che ti rilascia lo SPID. PosteID, Aruba, Lepida sono i più comuni.">provider</Tip>, registrati online, verifica la tua identit&agrave;.</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Scegli il provider</strong><p>Lo SPID lo rilasciano aziende autorizzate dallo Stato. I pi&ugrave; usati: PosteID, Aruba, Lepida, InfoCert, Sielte. Lo SPID &egrave; identico qualunque provider scegli — cambia solo come fai la verifica e quanto paghi (spesso zero). Vedi la tabella pi&ugrave; sotto per scegliere.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Registrati sul sito del provider</strong><p>Vai sul sito del provider, clicca &quot;Richiedi SPID&quot; e compila i tuoi dati: nome, cognome, codice fiscale, email, numero di telefono. Tieni a portata di mano la carta d&apos;identit&agrave; e la tessera sanitaria.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Verifica la tua identit&agrave;</strong><p>Il provider deve confermare che sei davvero tu. Ci sono 4 modi: di persona all&apos;ufficio postale (gratis), con la <Tip t="La carta d'identità elettronica con chip. La avvicini al telefono per dimostrare chi sei, senza muoverti da casa.">CIE</Tip> dal telefono (gratis, 2 minuti), con una videochiamata (circa 10€), o con la firma digitale (gratis). Il metodo migliore dipende da cosa hai gi&agrave;.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Imposta la password e scarica l&apos;app</strong><p>Dopo la verifica, scegli la password e scarica l&apos;app del provider sul telefono (PosteID, Aruba OTP, ecc.). L&apos;app ti serve per confermare l&apos;accesso ogni volta che usi lo SPID — &egrave; come il codice della banca.</p></div></div>
              <div className="step r"><div className="stepn">5</div><div className="stepb"><strong>Fatto! Prova subito</strong><p>Vai su un sito della PA (es. inps.it) e clicca &quot;Accedi con SPID&quot;. Scegli il tuo provider, metti la password, conferma dall&apos;app. Se funziona, hai finito. Per sempre.</p></div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il metodo pi&ugrave; veloce in assoluto</div>
              <p>Hai una <strong>CIE</strong> (carta d&apos;identit&agrave; con chip) e un telefono con <Tip t="Near Field Communication: il sensore del telefono che comunica con la carta quando li avvicini. Quasi tutti gli smartphone dal 2018 ce l'hanno.">NFC</Tip>? Scegli Lepida o Aruba: avvicini la carta al telefono, confermi il PIN, e lo SPID &egrave; attivo in 5 minuti. Senza uscire di casa, senza pagare nulla.</p>
            </div>
          </div>

          {/* PROVIDER */}
          <div className="sec r" id="provider">
            <div className="sec-tag">Confronto</div>
            <h2>Quale provider scegliere</h2>
            <p>Tutti i provider rilasciano lo <strong>stesso identico SPID</strong> — funziona allo stesso modo ovunque. La differenza sta nel costo e nel metodo di riconoscimento.</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Provider</th><th>Costo</th><th>Riconoscimento</th><th>Note</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>PosteID</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">Gratis</td><td>Di persona in ufficio postale, CIE, o con carta Bancoposte</td><td>Il pi&ugrave; usato in Italia. Code possibili. Puoi anche farlo online con CIE.</td></tr>
                  <tr><td><strong>Lepida</strong></td><td className="cfr">Gratis</td><td>CIE, oppure di persona (solo Emilia-Romagna e poche altre regioni)</td><td>Ottimo se hai la CIE — tutto online in 5 minuti.</td></tr>
                  <tr><td><strong>Aruba</strong></td><td className="cv">Gratis o 9,90€</td><td>CIE o firma digitale (gratis). Videochiamata (9,90€).</td><td>Se hai la CIE o la firma digitale: gratis e velocissimo.</td></tr>
                  <tr><td><strong>InfoCert</strong></td><td className="cv">Gratis o 14,90€</td><td>CIE (gratis). Videochiamata (14,90€). Sportello (gratis, poche sedi).</td><td>Affidabile ma la videochiamata &egrave; la pi&ugrave; cara.</td></tr>
                  <tr><td><strong>Sielte</strong></td><td className="cfr">Gratis</td><td>CIE o webcam con operatore</td><td>Tutto online e gratuito, ma tempi di attesa possibili.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio onesto</div>
              <p><strong>Hai la CIE?</strong> → Scegli Lepida o Aruba. Tutto gratis, tutto online, 5 minuti da casa.<br/><strong>Non hai la CIE?</strong> → Scegli PosteID. Gratis, vai all&apos;ufficio postale con documento e tessera sanitaria, 15 minuti e hai lo SPID.<br/><strong>Vuoi farlo dal divano senza CIE?</strong> → Aruba con videochiamata a 9,90€. Ti chiamano in giornata e risolvi tutto in 10 minuti.</p>
            </div>
          </div>

          {/* BLOCCO AFFILIAZIONE */}


          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Cosa ti serve</h2>
            <p>Prima di iniziare, prepara questi documenti. Cambiano leggermente in base al metodo scelto.</p>

            <h3>Per tutti i metodi</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Documento d&apos;identit&agrave; valido</strong><span className="note">Carta d&apos;identit&agrave; o passaporto — deve essere in corso di validit&agrave;</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Tessera sanitaria / codice fiscale</strong><span className="note">Serve il codice fiscale. La tessera sanitaria &egrave; il modo pi&ugrave; rapido per averlo a portata di mano</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCF1'}</div><div className="clb"><strong>Telefono cellulare</strong><span className="note">Ti servir&agrave; per ricevere l&apos;SMS di verifica e per l&apos;app di conferma accesso</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCE7'}</div><div className="clb"><strong>Indirizzo email personale</strong><span className="note">Un&apos;email a cui hai accesso — serve per confermare la registrazione</span></div></li>
            </ul>

            <h3>Se usi la CIE (metodo pi&ugrave; veloce)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Carta d&apos;Identit&agrave; Elettronica (<Tip t="La carta d'identità con chip NFC rilasciata dal 2017 in poi. Se la tua carta ha un quadratino con un chip dorato o argentato, è una CIE.">CIE</Tip>)</strong><span className="note">Quella con il chip NFC. Se l&apos;hai fatta dopo il 2017, ce l&apos;hai.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDD22'}</div><div className="clb"><strong>PIN della CIE</strong><span className="note">Le 8 cifre: le prime 4 nella ricevuta al Comune, le ultime 4 nella lettera a casa. Se non le trovi, resettalo sull&apos;app CieID.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCE1'}</div><div className="clb"><strong>Telefono con <Tip t="Il sensore che permette al telefono di comunicare con la carta d'identità avvicinandoli. Quasi tutti gli smartphone dal 2018 lo hanno. Controlla nelle impostazioni del telefono.">NFC</Tip></strong><span className="note">La maggior parte degli smartphone dal 2018 in poi ha l&apos;NFC. Controlla nelle impostazioni.</span></div></li>
            </ul>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Marco fa lo SPID in 12 minuti</h2>

            <p><strong>Marco ha 28 anni</strong>, vive a Roma e lavora come cameriere. Non ha mai fatto lo SPID perch&eacute; &quot;tanto vado di persona quando serve&quot;. Poi succedono tre cose nello stesso mese:</p>

            <p>1. Deve fare l&apos;ISEE per chiedere l&apos;esenzione del ticket sanitario. Il sito INPS chiede lo SPID.<br/>2. Vuole fare il 730 per recuperare 400€ di detrazioni. L&apos;Agenzia delle Entrate chiede lo SPID.<br/>3. Deve scaricare un certificato di residenza per il contratto d&apos;affitto. Il Comune chiede lo SPID.</p>

            <p>Marco capisce che senza SPID non pu&ograve; fare niente da solo online. L&apos;alternativa: tre appuntamenti diversi, tre code, tre mattinate perse.</p>

            <h3>Marco fa lo SPID</h3>
            <p>Marco ha la CIE (la carta d&apos;identit&agrave; nuova con il chip). Sceglie <strong>Lepida</strong> perch&eacute; &egrave; gratis e si fa tutto dal telefono.</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Minuto 0–3: registrazione</strong><p>Va su lepida.it, clicca &quot;Richiedi SPID&quot;. Inserisce nome, cognome, codice fiscale, email, telefono.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Minuto 3–5: verifica email e telefono</strong><p>Conferma il codice ricevuto via SMS e clicca il link nell&apos;email.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Minuto 5–8: riconoscimento con CIE</strong><p>L&apos;app gli chiede di avvicinare la CIE al telefono. Inserisce il PIN della CIE (8 cifre). Il telefono legge il chip. Fatto.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Minuto 8–12: password e app</strong><p>Sceglie la password, scarica l&apos;app Lepida ID. Prova ad accedere su inps.it → funziona al primo colpo.</p></div></div>
            </div>

            <h3>Cosa fa Marco nelle 2 ore dopo</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">ISEE online</span><span className="db-old">appuntamento CAF</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">fatto in 20 min</span></div>
              <div className="db-row"><span className="db-label">730 precompilata</span><span className="db-old">commercialista 50€</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">gratis, 15 min</span></div>
              <div className="db-row"><span className="db-label">Certificato residenza</span><span className="db-old">coda all&apos;anagrafe</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">scaricato in 2 min</span></div>
              <div className="db-row db-total"><span className="db-label">Tempo totale</span><span className="db-val">49 minuti</span></div>
            </div>

            <p>In 49 minuti totali (SPID incluso), Marco ha fatto quello che prima gli avrebbe richiesto <strong>3 mattinate di ferie</strong>. E da quel giorno, ogni volta che deve fare qualcosa con la PA, ci mette 2 minuti dal divano.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Lo SPID si fa una volta sola e dura per sempre. I 12 minuti che ci metti oggi te ne risparmiano centinaia nei prossimi anni. E ti sbloccano l&apos;accesso a tutto: ISEE, 730, bonus, certificati. &Egrave; il primo passo — tutto il resto diventa facile.</p>
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
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Con lo SPID fai l'ISEE online in 15 minuti.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Accedi al precompilato con SPID.</div><span className="rc-ar">→</span></a>
              <a href="/naspi" className="rc"><span className="rc-e">💼</span><div className="rc-t">NASpI</div><div className="rc-d">La domanda NASpI si fa online con SPID.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.spid.gov.it/cos-e-spid/come-attivare-spid/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">SPID.gov.it</div><div className="sbtool-d">Come attivare lo SPID</div></div></a>
            <a href="https://www.agid.gov.it/it/piattaforme/spid/identity-provider" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">AgID — Provider SPID</div><div className="sbtool-d">Elenco ufficiale provider</div></div></a>
            <a href="https://www.anagrafenazionale.interno.it/area-cittadino/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">ANPR — Servizi al cittadino</div><div className="sbtool-d">Certificati e anagrafe online</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">📋 Faccio l'ISEE<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">🪪 Carta identità elettronica<span className="sbg-soon">Presto</span></span>
            <span className="sbguide sbguide-soon">✉️ PEC obbligatoria<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="spid" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
