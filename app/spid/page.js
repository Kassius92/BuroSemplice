import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizSpid from '@/components/QuizSpid';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore',
  description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni. Guida gratuita passo per passo.',
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
  { id: 'cose', label: "Cos'è" },
  { id: 'serve', label: 'A cosa serve' },
  { id: 'come-si-fa', label: 'Come si fa' },
  { id: 'provider', label: 'Provider', bh: true },
  { id: 'documenti', label: 'Documenti' },
  { id: 'livelli', label: 'Livelli', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Lo SPID è obbligatorio?", a: "<strong>Tecnicamente no.</strong> Puoi ancora andare agli uffici di persona per molte cose. Ma nella pratica, nel 2026, senza SPID (o CIE) non puoi accedere a quasi nessun servizio online della PA: precompilata, bonus, ISEE, certificati, fascicolo sanitario. Sempre più servizi sono disponibili <em>solo</em> online. Farlo costa 0\u20AC e ci metti 15 minuti \u2014 non c\u2019è un motivo reale per non farlo." },
  { q: "Lo SPID scade?", a: "<strong>Lo SPID in sé non scade.</strong> Quello che può scadere è la password (ogni 6\u201312 mesi, dipende dal provider \u2014 te lo dice lui). Quando succede, la cambi in 2 minuti dall\u2019app o dal sito del provider. Il tuo account SPID resta attivo per sempre, finché il provider esiste. Se un giorno il provider chiudesse, puoi trasferire lo SPID a un altro provider gratuitamente." },
  { q: "Posso avere più SPID con provider diversi?", a: "<strong>Sì.</strong> Puoi avere SPID con Poste, Aruba e Lepida contemporaneamente. Sono indipendenti l\u2019uno dall\u2019altro. L\u2019unica cosa che non puoi avere è due SPID con lo stesso provider. Avere due provider diversi può essere utile come backup \u2014 se uno ha problemi, usi l\u2019altro." },
  { q: "Ho perso la password / non accedo più, che faccio?", a: "Niente panico. Vai sul sito del tuo provider e clicca <strong>\u201CPassword dimenticata\u201D</strong>. Ti manderanno un link via email per resetlarla. Se non hai più accesso neanche all\u2019email, dovrai contattare il servizio clienti del provider. Con PosteID puoi anche andare all\u2019ufficio postale con un documento per recuperare l\u2019accesso." },
  { q: "SPID e CIE sono la stessa cosa?", a: "<strong>No, ma fanno quasi le stesse cose.</strong> Lo SPID è un\u2019identità digitale basata su username e password + app. La CIE è la carta d\u2019identità fisica con chip NFC. Entrambi ti permettono di accedere ai servizi della PA online. Lo SPID è più pratico (non devi cercare la carta ogni volta), la CIE è più sicura. Il consiglio: fatti lo SPID per l\u2019uso quotidiano e tieni la CIE come backup." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come fare lo SPID nel 2026: guida completa e gratuita',
      description: 'Come fare lo SPID nel 2026: quale provider scegliere, come fare il riconoscimento, quanto costa. Guida passo passo gratuita.',
      url: '/spid',
      image: 'og-spid.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-05',
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
            <h1>Faccio lo <em>SPID</em></h1>
            <p className="hero-sub">La tua identità digitale, spiegata semplice. Come ottenerla in 15 minuti, quale provider scegliere e perché nel 2026 non puoi farne a meno.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 8 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> AgID (Agenzia per l&apos;Italia Digitale) · SPID.gov.it · Provider ufficiali accreditati</div>
            <PrintButton />
          </div>

          {/* Floating stat cards */}
          <div className="hero-right">
            <div className="hstat">
              <div className="hn">0€</div>
              <div className="hl">costo con CIE<br/>o ufficio postale</div>
            </div>
            <div className="hstat">
              <div className="hn">15&apos;</div>
              <div className="hl">tempo medio<br/>per ottenerlo</div>
            </div>
            <div className="hstat">
              <div className="hn">∞</div>
              <div className="hl">non scade mai<br/>vale per sempre</div>
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
              <a href="/spid" className="ps active">🔐 SPID</a><span className="pa">›</span>
              <a href="/isee" className="ps">ISEE</a><span className="pa">›</span>
              <a href="/compro-casa" className="ps">Compro casa</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">🔐</div><div className="sn">Gratis</div><div className="sl">con CIE o ufficio postale</div></div>
                <div className="sc sg r d2"><div className="si">⏱</div><div className="sn">5–20&apos;</div><div className="sl">minuti per ottenerlo</div></div>
                <div className="sc    r d3"><div className="si">📱</div><div className="sn">Online</div><div className="sl">tutto da casa con la CIE</div></div>
                <div className="sc    r d1"><div className="si">♾️</div><div className="sn">∞</div><div className="sl">non scade, vale per sempre</div></div>
                <div className="sc    r d2"><div className="si">📋</div><div className="sn">3 doc</div><div className="sl">documento, tessera sanitaria, telefono</div></div>
                <div className="sc bl r d3"><div className="si">🏛</div><div className="sn">5.300+</div><div className="sl">servizi PA accessibili</div></div>
              </div>
            </div>
            <QuizSpid />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è lo SPID</h2>
            <p>SPID sta per <strong>Sistema Pubblico di Identità Digitale</strong>. In pratica è il tuo documento d&apos;identità online. Ti serve per accedere ai siti della pubblica amministrazione — INPS, Agenzia delle Entrate, INAIL, il tuo Comune — e a centinaia di servizi privati.</p>
            <p>Funziona con un nome utente e una password (più una conferma dal telefono). Una volta che ce l&apos;hai, lo usi per sempre. <strong>Non scade, non costa nulla</strong>, e ti evita code, raccomandate e viaggi all&apos;ufficio.</p>
            <div className="ib tip r">
              <div className="ib-t">💡 SPID vs CIE: qual è la differenza?</div>
              <p>La <strong>CIE</strong> (Carta d&apos;Identità Elettronica) fa molte delle stesse cose — puoi accedere ai siti della PA anche con quella. La differenza: la CIE la devi avvicinare al telefono ogni volta (serve NFC), e non tutti i servizi la accettano ancora. Lo SPID è più pratico per l&apos;uso quotidiano. Il consiglio: <strong>fatti entrambi</strong>. La CIE ce l&apos;hai già se hai rinnovato la carta d&apos;identità dopo il 2017.</p>
            </div>
          </div>

          {/* A COSA SERVE */}
          <div className="sec r" id="serve">
            <div className="sec-tag">Utilizzo</div>
            <h2>A cosa serve (in concreto)</h2>
            <p>Nel 2026 senza SPID non puoi fare quasi nulla online con la PA. Ecco le cose più comuni per cui ti serve:</p>

            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">🧾</div><div className="uc-n">Fare il 730</div><div className="uc-d">Accedi alla precompilata su agenziaentrate.gov.it</div></div>
              <div className="uc r d2"><div className="uc-e">📋</div><div className="uc-n">Fare l&apos;ISEE</div><div className="uc-d">Serve per bonus, agevolazioni, rette università</div></div>
              <div className="uc r d3"><div className="uc-e">💰</div><div className="uc-n">Chiedere bonus</div><div className="uc-d">Assegno unico, bonus nido, bonus trasporti, bonus psicologo</div></div>
              <div className="uc r d4"><div className="uc-e">🏥</div><div className="uc-n">Fascicolo Sanitario</div><div className="uc-d">Referti, ricette, certificati vaccinali</div></div>
              <div className="uc r d1"><div className="uc-e">🏠</div><div className="uc-n">Cambio residenza</div><div className="uc-d">Online in 10 minuti invece di fare la coda all&apos;anagrafe</div></div>
              <div className="uc r d2"><div className="uc-e">📄</div><div className="uc-n">Certificati e visure</div><div className="uc-d">Stato di famiglia, certificato di residenza, visure catastali</div></div>
            </div>

            <p>E poi: iscriversi all&apos;università, accedere al portale NoiPA (dipendenti pubblici), consultare i contributi INPS, prenotare visite mediche, firmare digitalmente, accedere a servizi regionali e comunali.</p>

            <div className="ib warn r">
              <div className="ib-t">⚠️ Senza SPID non puoi fare il 730 da solo</div>
              <p>Se vuoi usare la precompilata online (gratis), devi avere lo SPID o la CIE. Senza, l&apos;unica alternativa è andare al CAF e pagare 30–80€. Fai prima lo SPID — ti serve per tutto il resto.</p>
            </div>

            <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
              <a href="/730" className="xlink r"><span className="xlink-em">🧾</span><div className="xlink-t"><strong>Faccio il 730</strong> — Guida completa alla dichiarazione.</div><span className="xlink-ar">→</span></a>
              <a href="/isee" className="xlink r"><span className="xlink-em">📋</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Serve lo SPID per farlo online.</div><span className="xlink-ar">→</span></a>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come-si-fa">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa lo SPID</h2>
            <p>Fare lo SPID richiede 10–20 minuti. Il processo ha 3 fasi: scegli il provider, registrati online, verifica la tua identità.</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Scegli il provider</strong>
                  <p>Lo SPID lo rilasciano aziende autorizzate dallo Stato (i &quot;provider&quot;). I più usati sono PosteID, Aruba, Lepida, InfoCert, Sielte. Scegli in base a costo e metodo di riconoscimento (vedi la tabella sotto).</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Registrati sul sito del provider</strong>
                  <p>Vai sul sito del provider scelto, clicca &quot;Richiedi SPID&quot; e compila i tuoi dati: nome, cognome, codice fiscale, email, numero di telefono. Ti servirà un documento d&apos;identità valido e la tessera sanitaria.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Verifica la tua identità</strong>
                  <p>Il provider deve verificare che tu sia davvero tu. Ci sono diversi modi: di persona all&apos;ufficio postale, con la CIE dal telefono, con una videochiamata, o con la firma digitale. Il metodo più facile dipende da cosa hai già.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Imposta la password e scarica l&apos;app</strong>
                  <p>Dopo la verifica, scegli la password e scarica l&apos;app del provider sul telefono (es. PosteID, Aruba OTP). L&apos;app ti serve per confermare l&apos;accesso ogni volta che usi lo SPID — è come il codice della banca.</p>
                </div>
              </div>
              <div className="step r">
                <div className="stepn">5</div>
                <div className="stepb">
                  <strong>Fatto! Prova subito</strong>
                  <p>Vai su un sito qualsiasi della PA (es. inps.it) e clicca &quot;Accedi con SPID&quot;. Scegli il tuo provider, metti la password, conferma dall&apos;app. Se funziona, hai finito. Per sempre.</p>
                </div>
              </div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Il metodo più veloce in assoluto</div>
              <p>Se hai una <strong>CIE</strong> (carta d&apos;identità elettronica, quella con il chip) e un telefono con NFC: scegli un provider che supporta il riconoscimento via CIE (Poste, Lepida, InfoCert). Avvicini la carta al telefono, confermi il PIN, e lo SPID è attivo in 5 minuti. Senza uscire di casa.</p>
            </div>
          </div>

          {/* PROVIDER */}
          <div className="sec breve-hide r" id="provider">
            <div className="sec-tag">Confronto</div>
            <h2>Quale provider scegliere</h2>
            <p>Tutti i provider rilasciano lo stesso identico SPID — funziona allo stesso modo ovunque. La differenza sta nel costo e nel metodo di riconoscimento.</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Provider</th><th>Costo</th><th>Riconoscimento</th><th>Note</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>PosteID</strong> <span className="badge">Scelta ZeroBurocrazia</span></td><td className="cfr">Gratis</td><td>Di persona in ufficio postale, CIE, o con carta Bancoposte</td><td>Il più usato in Italia. Code possibili. Puoi anche farlo online con CIE.</td></tr>
                  <tr><td><strong>Lepida</strong></td><td className="cfr">Gratis</td><td>CIE, oppure di persona (solo Emilia-Romagna e poche altre regioni)</td><td>Ottimo se hai la CIE — tutto online in 5 minuti.</td></tr>
                  <tr><td><strong>Aruba</strong></td><td className="cv">Gratis o 9,90€</td><td>CIE o firma digitale (gratis). Videochiamata (9,90€).</td><td>Se hai la CIE o la firma digitale: gratis e velocissimo.</td></tr>
                  <tr><td><strong>InfoCert</strong></td><td className="cv">Gratis o 14,90€</td><td>CIE (gratis). Videochiamata (14,90€). Sportello (gratis, poche sedi).</td><td>Affidabile ma la videochiamata è la più cara.</td></tr>
                  <tr><td><strong>Sielte</strong></td><td className="cfr">Gratis</td><td>CIE o webcam con operatore</td><td>Tutto online e gratuito, ma tempi di attesa possibili.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib mon r">
              <div className="ib-t">💶 Il consiglio onesto di ZeroBurocrazia</div>
              <p><strong>Hai la CIE?</strong> Scegli Lepida o Aruba. Tutto gratis, tutto online, 5 minuti da casa.<br/><strong>Non hai la CIE?</strong> Scegli PosteID. È gratis, vai all&apos;ufficio postale con documento e tessera sanitaria, e in 15 minuti hai lo SPID.<br/><strong>Vuoi farlo dal divano senza CIE?</strong> Aruba con videochiamata a 9,90€. Ti chiamano in giornata e risolvi tutto in 10 minuti.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            {/* BLOCCO AFFILIAZIONE: SPID ONLINE */}
            <div className="aff-block r">
              <div className="aff-label">Strumento consigliato</div>
              <div className="aff-body">
                <div className="aff-left">
                  <div className="aff-title">Fai lo SPID da casa in 10 minuti con Aruba</div>
                  <div className="aff-text">Riconoscimento via CIE o webcam, senza andare alle Poste. A 9,90€ (una tantum) hai lo SPID attivo in giornata.</div>
                  <div className="aff-note">* Link in partnership — se attivi lo SPID, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
                </div>
                <a href="QUI_LINK_AFFILIATO_SPID" target="_blank" rel="noopener sponsored" className="aff-btn">
                  Attiva SPID con Aruba →
                </a>
              </div>
            </div>

            <h2>Cosa ti serve</h2>
            <p>Prima di iniziare, prepara questi documenti. Cambiano leggermente in base al metodo scelto.</p>

            <h3>Per tutti i metodi</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">🪪</div><div className="clb"><strong>Documento d&apos;identità valido</strong><span className="note">Carta d&apos;identità o passaporto — deve essere in corso di validità</span></div></li>
              <li className="cli r d2"><div className="ci">💳</div><div className="clb"><strong>Tessera sanitaria / codice fiscale</strong><span className="note">Serve il codice fiscale. La tessera sanitaria è il modo più rapido per averlo a portata di mano</span></div></li>
              <li className="cli r d3"><div className="ci">📱</div><div className="clb"><strong>Telefono cellulare</strong><span className="note">Ti servirà per ricevere l&apos;SMS di verifica e per l&apos;app di conferma accesso</span></div></li>
              <li className="cli r d4"><div className="ci">📧</div><div className="clb"><strong>Indirizzo email personale</strong><span className="note">Un&apos;email a cui hai accesso — ti servirà per confermare la registrazione</span></div></li>
            </ul>

            <h3>Se usi la CIE (metodo più veloce)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">💳</div><div className="clb"><strong>Carta d&apos;Identità Elettronica (CIE)</strong><span className="note">Quella con il chip NFC. Se l&apos;hai fatta dopo il 2017, ce l&apos;hai.</span></div></li>
              <li className="cli r d2"><div className="ci">🔢</div><div className="clb"><strong>PIN della CIE</strong><span className="note">Le 8 cifre: le prime 4 nella ricevuta, le ultime 4 nella lettera a casa. Se non le trovi, resettalo sull&apos;app CieID.</span></div></li>
              <li className="cli r d3"><div className="ci">📡</div><div className="clb"><strong>Telefono con NFC</strong><span className="note">La maggior parte degli smartphone dal 2018 in poi ha l&apos;NFC. Controlla nelle impostazioni.</span></div></li>
            </ul>
          </div>

          {/* LIVELLI */}
          <div className="sec breve-hide r" id="livelli">
            <div className="sec-tag">Approfondimento</div>
            <h2>I 3 livelli dello SPID</h2>
            <p>Lo SPID ha 3 livelli di sicurezza. Non devi sceglierne uno — li hai tutti, e il sito a cui accedi decide quale livello richiedere.</p>

            <div className="lvgrid r">
              <div className="lv r d1">
                <div className="lv-e">1️⃣</div>
                <div className="lv-n">Livello 1</div>
                <div className="lv-d">Username + password. Usato dai siti meno sensibili.</div>
              </div>
              <div className="lv active r d2">
                <div className="lv-e">2️⃣</div>
                <div className="lv-n">Livello 2 ⭐</div>
                <div className="lv-d">Password + conferma dall&apos;app. <strong>È quello che usi nel 99% dei casi</strong> (INPS, Agenzia Entrate, Comune).</div>
              </div>
              <div className="lv r d3">
                <div className="lv-e">3️⃣</div>
                <div className="lv-n">Livello 3</div>
                <div className="lv-d">Serve un dispositivo fisico aggiuntivo. Rarissimo — solo per cose molto sensibili.</div>
              </div>
            </div>

            <p>In pratica: quando fai lo SPID ottieni automaticamente il livello 1 e il livello 2. Il livello 3 è disponibile solo con alcuni provider e non ti servirà quasi mai. Non ci pensare.</p>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* CTA FINALE */}
          <div className="ctabanner r">
            <h3>Vuoi sapere tutti i bonus a cui hai diritto?</h3>
            <p>Ti facciamo un elenco personalizzato dei bonus e agevolazioni che puoi richiedere con lo SPID nella tua situazione.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Il passo successivo: serve lo SPID per farlo online.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">La dichiarazione dei redditi online, passo per passo.</div><span className="rc-ar">→</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">🏠</span><div className="rc-t">Compro casa</div><div className="rc-d">Imposte, mutuo, documenti e i costi che nessuno ti dice.</div><span className="rc-ar">→</span></a>
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
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri se ti serve</div></div></a>
            <a href="#provider" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Confronto provider</div><div className="sbtool-d">Costi e metodi</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">📍</span><div><div className="sbtool-n">Trova ufficio postale</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/isee" className="sbguide">📋 Faccio l&apos;ISEE<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
            <a href="/compro-casa" className="sbguide">🏠 Compro casa<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      {/* PROMEMORIA SCADENZE */}
      <BrevoForm pageName="spid" />
      <Footer variant="scheda" />
    </>
  );
}
