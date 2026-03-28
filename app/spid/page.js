import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore',
  description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni. Guida gratuita passo per passo.',
  keywords: ["SPID", "come fare SPID", "SPID 2026", "SPID online", "SPID Poste", "identit\u00e0 digitale", "SPID CIE", "SPID gratis", "provider SPID", "SPID livello 2"],
  alternates: { canonical: 'https://zeroburocrazia.it/spid' },
  openGraph: { title: 'Come Fare lo SPID nel 2026: Costo, Tempi e Provider Migliore', description: 'Come fare lo SPID nel 2026: quale provider scegliere, costo, riconoscimento online o in ufficio, tempi e problemi comuni.', url: 'https://zeroburocrazia.it/spid', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogspid.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogspid.png'] },
};

const faqItems = [
  { q: "Lo SPID \u00e8 obbligatorio?", a: "<strong>Tecnicamente no, non esiste un obbligo di legge.</strong> Puoi ancora andare di persona agli uffici pubblici per molte pratiche. Per\u00f2 nella pratica, nel 2026 senza SPID o CIE non accedi a quasi nessun servizio online della Pubblica Amministrazione: la precompilata del 730, l\u2019ISEE, i bonus, i certificati anagrafici, il Fascicolo Sanitario Elettronico, le domande INPS. Sempre pi\u00f9 servizi sono disponibili esclusivamente online. Lo SPID costa zero euro e ci metti 15 minuti a farlo: non c\u2019\u00e8 un motivo reale per non averlo." },
  { q: "Lo SPID scade?", a: "<strong>Lo SPID in s\u00e9 non scade mai.</strong> Una volta che lo hai attivato, resta valido a tempo indeterminato. Quello che pu\u00f2 scadere \u00e8 la password: ogni 6-12 mesi (dipende dal provider) ti viene chiesto di cambiarla. La procedura richiede 2 minuti dall\u2019app o dal sito del provider. Il tuo account SPID resta attivo finch\u00e9 il provider esiste come azienda. Se un giorno il tuo provider dovesse chiudere, puoi trasferire lo SPID a un altro provider gratuitamente senza dover rifare tutta la procedura di riconoscimento." },
  { q: "Posso avere pi\u00f9 SPID con provider diversi?", a: "<strong>S\u00ec.</strong> Puoi avere SPID con Poste, Aruba e Lepida contemporaneamente. Utile come backup." },
  { q: "Ho perso la password, che faccio?", a: "Vai sul sito del provider, clicca <strong>\"Password dimenticata\"</strong>. Link via email per resettarla. Con PosteID puoi anche andare all\u2019ufficio postale." },
  { q: "SPID e CIE sono la stessa cosa?", a: "<strong>No, sono due strumenti diversi che fanno quasi le stesse cose.</strong> Lo SPID \u00e8 un\u2019identit\u00e0 digitale basata su username, password e conferma dall\u2019app del telefono. La CIE \u00e8 la carta d\u2019identit\u00e0 elettronica fisica con un chip NFC che avvicini al telefono per autenticarti. Entrambi ti permettono di accedere ai servizi online della Pubblica Amministrazione. Lo SPID \u00e8 pi\u00f9 pratico per l\u2019uso quotidiano perch\u00e9 non devi avere la carta fisica a portata di mano. La CIE \u00e8 considerata pi\u00f9 sicura. Il consiglio: fatti entrambi. Usa lo SPID tutti i giorni e tieni la CIE come backup per le occasioni in cui lo SPID non funziona o il provider ha problemi tecnici." },
  { q: "Cosa sono i 3 livelli dello SPID?", a: "<strong>Livello 1:</strong> username + password. <strong>Livello 2:</strong> password + conferma app \u2014 quello che usi nel 99% dei casi. <strong>Livello 3:</strong> dispositivo fisico, rarissimo. Quando fai lo SPID ottieni automaticamente livello 1 e 2." },
  { q: "Quanto costa fare lo SPID?", a: "<strong>Da 0\u20ac a 14,90\u20ac, una tantum.</strong> Se hai la CIE (carta d\u2019identit\u00e0 elettronica) puoi fare lo SPID gratis da casa in 5 minuti con Lepida o Aruba. Se vai all\u2019ufficio postale di persona con documento e tessera sanitaria, PosteID \u00e8 gratuito. Se vuoi farlo da casa senza CIE, la videochiamata costa circa 9,90\u20ac con Aruba o 14,90\u20ac con InfoCert \u2014 \u00e8 un pagamento una tantum, poi non paghi pi\u00f9 nulla. Non esistono costi annuali, abbonamenti o canoni. Lo SPID \u00e8 gratuito per sempre una volta attivato." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come fare lo SPID nel 2026: guida completa', description: 'Come fare lo SPID: provider, costo, riconoscimento, tempi. Guida passo passo gratuita.', url: '/spid', image: 'ogspid.png', datePublished: '2026-03-04', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
    howToSchema({ name: 'Come fare lo SPID nel 2026', description: 'Procedura completa per ottenere lo SPID: scelta provider, registrazione, riconoscimento e attivazione.', totalTime: 'P1D', image: 'ogspid.png', steps: [
      { name: 'Scegli il provider SPID', text: 'Confronta Poste, Aruba, Lepida, InfoCert. Lo SPID \u00e8 identico, cambia solo il metodo di riconoscimento.' },
      { name: 'Registrati sul sito del provider', text: 'Inserisci dati personali, codice fiscale, email, telefono.' },
      { name: 'Fai il riconoscimento', text: 'Di persona in posta (gratis), con CIE dal telefono (gratis), via videochiamata (~10\u20ac), o con firma digitale.' },
      { name: 'Attiva lo SPID', text: 'Imposta la password, scarica l\u2019app del provider, prova ad accedere su inps.it.' },
    ]}),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è lo SPID"}, {"id": "come", "label": "Come si fa"}, {"id": "provider", "label": "I provider"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />

      {/* HERO */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(91,126,197,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat documenti rv">Documenti &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Come fare lo <em>SPID</em> nel 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">La tua identit&agrave; digitale, spiegata semplice. Come ottenerla in 15 minuti, quale provider scegliere e perch&eacute; nel 2026 non puoi farne a meno.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>0&euro;</strong><span>Con CIE o in posta</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>15 min</strong><span>Tempo medio</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>&infin;</strong><span>Non scade mai</span></div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section className="v8-section warm" id="quiz">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Ti serve lo <em>SPID?</em></h2><p className="rv rv-d1">Rispondi a 3 domande.</p></div>
          <div className="v8-quiz">
            <div className="v8-quiz-card rv-scale rv-d2">
              <div className="v8-qq"><span className="v8-qq-text">Devi fare il 730, l&apos;ISEE o chiedere un bonus?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="1" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="1" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Vuoi scaricare certificati o accedere al Fascicolo Sanitario?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="2" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="2" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Vuoi evitare code in Comune, INPS o Agenzia Entrate?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="3" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="3" data-v="n">No</button></div></div>
              <div className="v8-quiz-res" id="qRes"></div>
            </div>
          </div>
        </div>
      </section>

      {/* COS'È */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; lo <em>SPID</em></h2></div>
          <div className="v8-prose rv">
            <p>Pensa allo SPID come al <strong>documento d&apos;identit&agrave; per internet</strong>. Quando vai in posta o al Comune, mostri la carta d&apos;identit&agrave;. Online funziona uguale: quando entri su un sito della PA (INPS, Agenzia delle Entrate, il tuo Comune), il sito ti chiede &quot;chi sei?&quot; &mdash; e tu rispondi con lo SPID.</p>
            <p>In pratica &egrave; un nome utente + una password + una conferma dal telefono (il cosiddetto secondo fattore di autenticazione). Lo fai una volta sola, e da quel momento accedi a tutti i servizi digitali della Pubblica Amministrazione con le stesse credenziali. <strong>Non scade, non costa nulla, e ti evita code agli sportelli e raccomandate per sempre.</strong></p>
            <p>Lo SPID &egrave; stato introdotto nel 2016 e nel 2026 &egrave; usato da oltre 35 milioni di italiani. Viene rilasciato da aziende private autorizzate dallo Stato chiamate Identity Provider (Poste Italiane, Aruba, Lepida, InfoCert, Sielte e altri). Lo SPID che ottieni &egrave; identico indipendentemente dal provider che scegli: cambia solo la procedura di registrazione e il costo del riconoscimento iniziale.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>SPID</strong> &mdash; Sistema Pubblico di Identit&agrave; Digitale. Il tuo &quot;documento d&apos;identit&agrave; online&quot; per la PA.</p>
            <p><strong>Provider</strong> &mdash; L&apos;azienda che ti rilascia lo SPID (Poste, Aruba, Lepida). Sono autorizzati dallo Stato. Lo SPID &egrave; identico qualunque provider scegli.</p>
            <p><strong>CIE</strong> &mdash; Carta d&apos;Identit&agrave; Elettronica, la nuova carta d&apos;identit&agrave; con il <Tip t="Near Field Communication: la tecnologia che permette al telefono di comunicare con la carta quando li avvicini. &Egrave; quella che usi anche per pagare col telefono.">chip NFC</Tip> integrato. Se hai rinnovato la carta d&apos;identit&agrave; dopo il 2017, ce l&apos;hai sicuramente (controlla se ha un quadratino con un chip dorato o argentato). Puoi usarla al posto dello SPID per accedere ai siti della PA, oppure puoi usarla per ottenere lo SPID senza uscire di casa in pochi minuti. Ha un PIN di 8 cifre che ti hanno consegnato in due parti: le prime 4 al Comune e le ultime 4 in una lettera a casa.</p>
            <p><strong>Riconoscimento</strong> &mdash; Il passaggio in cui il provider verifica che sei davvero tu e non qualcuno che sta usando i tuoi dati. Pu&ograve; avvenire in diversi modi: di persona all&apos;ufficio postale mostrando il documento (il modo pi&ugrave; tradizionale), avvicinando la CIE al telefono tramite il sensore NFC (il modo pi&ugrave; veloce), con una videochiamata con un operatore che ti chiede di mostrare il documento in camera, oppure usando una firma digitale o una CNS se ne hai una.</p>
            <p><strong>Livello 2</strong> &mdash; Il livello di sicurezza che usi nel 99% dei casi: password + conferma dall&apos;app del telefono. Lo ottieni automaticamente quando fai lo SPID, non devi fare nulla di extra. Esiste anche un Livello 1 (solo password, per siti poco sensibili) e un Livello 3 (serve un dispositivo fisico aggiuntivo, rarissimo). Non ci devi pensare: con lo SPID standard hai gi&agrave; tutto quello che serve.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>SPID vs CIE:</strong> la CIE fa molte delle stesse cose, ma devi avvicinarla al telefono ogni volta (NFC). Lo SPID &egrave; pi&ugrave; pratico per l&apos;uso quotidiano. Consiglio: <strong>fatti entrambi</strong>.</p></div>
          </div>
        </div>
      </section>

      {/* A COSA SERVE */}
      <section className="v8-section warm" id="serve">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">A cosa serve <em>in concreto</em></h2><p className="rv rv-d1">Nel 2026, senza SPID non fai quasi nulla online con la PA.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num" style={{background:'var(--v8-coral-bg)',color:'var(--v8-coral)',fontSize:'14px'}}>730</div><h3>Fare il 730</h3><p>Accedi alla precompilata su agenziaentrate.gov.it. Gratis.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num" style={{background:'var(--v8-coral-bg)',color:'var(--v8-coral)',fontSize:'14px'}}>ISEE</div><h3>Fare l&apos;ISEE</h3><p>Per bonus, agevolazioni, rette universit&agrave;.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num" style={{background:'var(--v8-green-bg)',color:'var(--v8-green)',fontSize:'14px'}}>&#9733;</div><h3>Chiedere bonus</h3><p>Assegno unico, bonus nido, trasporti, psicologo.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num" style={{background:'var(--v8-blue-bg)',color:'var(--v8-blue)',fontSize:'14px'}}>&#9741;</div><h3>Fascicolo Sanitario</h3><p>Referti, ricette, certificati vaccinali.</p></div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'24px'}}>
            <p>E poi: cambio di residenza online (in 10 minuti invece di fare la coda all&apos;anagrafe), certificati anagrafici e di stato civile scaricabili in PDF dal portale ANPR, visure catastali gratuite dal sito dell&apos;Agenzia delle Entrate, consultazione dei propri contributi INPS e della posizione pensionistica, prenotazione di visite mediche ed esami attraverso il Fascicolo Sanitario Elettronico regionale, iscrizione all&apos;universit&agrave; e pagamento delle tasse universitarie, accesso a NoiPA per i dipendenti pubblici, e a tutti i servizi digitali regionali e comunali.</p>
            <p>In pratica, lo SPID &egrave; il punto di accesso unico per tutta la Pubblica Amministrazione digitale italiana. Ogni volta che un sito della PA ti chiede di &quot;accedere con SPID&quot;, usi le stesse credenziali. Non devi ricordare decine di username e password diverse per ogni ente. Fai lo SPID una volta sola e da quel momento hai la chiave per tutto.</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Senza SPID il 730 ti costa 30&ndash;80&euro; in pi&ugrave; ogni anno.</strong> Vuoi fare il 730 da solo online e gratis? Ti serve lo SPID (o la CIE) per accedere alla precompilata dell&apos;Agenzia delle Entrate. Senza identit&agrave; digitale, l&apos;unica alternativa &egrave; andare al CAF e pagare 30&ndash;80&euro;, oppure dal commercialista e pagare 80&ndash;200&euro;. E il 730 &egrave; solo l&apos;inizio: anche l&apos;ISEE, i bonus, i certificati e il Fascicolo Sanitario passano tutti dallo SPID. Farlo una volta sola ti risparmia centinaia di euro e decine di ore di code negli anni a venire.</p></div>
          </div>
        </div>
      </section>

      {/* COME SI FA */}
      <section className="v8-section" id="come-si-fa">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si fa <em>lo SPID</em></h2><p className="rv rv-d1">10&ndash;20 minuti in tutto. Scegli il provider, registrati, verifica la tua identit&agrave;.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Scegli il provider</h3><p>PosteID, Aruba, Lepida, InfoCert, Sielte. Lo SPID &egrave; identico &mdash; cambia solo il metodo e il costo.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Registrati online</h3><p>Vai sul sito del provider, inserisci nome, cognome, codice fiscale, email, telefono.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Verifica identit&agrave;</h3><p>Di persona in posta (gratis), con CIE dal telefono (gratis, 2 min), videochiamata (~10&euro;), o firma digitale.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Attiva e prova</h3><p>Imposta la password, scarica l&apos;app del provider. Prova su inps.it &mdash; se funziona, hai finito. Per sempre.</p></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Il metodo pi&ugrave; veloce:</strong> hai la CIE e un telefono con NFC? Scegli Lepida o Aruba: avvicini la carta al telefono, confermi il PIN, SPID attivo in 5 minuti. Da casa, gratis.</p></div>
          </div>
        </div>
      </section>

      {/* PROVIDER */}
      <section className="v8-section warm" id="provider">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quale provider <em>scegliere</em></h2><p className="rv rv-d1">Tutti rilasciano lo stesso identico SPID. La differenza sta nel costo e nel metodo di riconoscimento.</p></div>
          <div className="v8-detr-grid" id="provGrid">
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-green)'}}>Gratis</div><h4>PosteID</h4><p>Il pi&ugrave; usato in Italia</p><div className="v8-detr-detail">Il provider pi&ugrave; diffuso in Italia. Puoi fare il riconoscimento gratis in qualsiasi ufficio postale portando documento e tessera sanitaria. Ci possono essere code, soprattutto il sabato mattina. Alternativa: se hai la CIE o una carta Bancoposta con lettore, puoi fare tutto online da casa. PosteID &egrave; la scelta migliore se non hai la CIE e vuoi spendere zero.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-green)'}}>Gratis</div><h4>Lepida</h4><p>Ottimo con CIE</p><div className="v8-detr-detail">Il provider pi&ugrave; veloce in assoluto se hai la CIE: tutto online dal telefono, 5 minuti e hai finito. Completamente gratuito. Il riconoscimento di persona &egrave; disponibile solo in Emilia-Romagna e in poche altre regioni. Se hai la CIE, Lepida &egrave; la scelta raccomandata per velocit&agrave; e semplicit&agrave;.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-gold)'}}>0&ndash;9,90&euro;</div><h4>Aruba</h4><p>CIE gratis, video 9,90&euro;</p><div className="v8-detr-detail">Se hai la CIE o la firma digitale, &egrave; gratis e velocissimo come Lepida. Se non hai n&eacute; CIE n&eacute; firma digitale, puoi fare la videochiamata con un operatore a 9,90&euro; (pagamento una tantum). Prenoti online e ti chiamano di solito in giornata o il giorno dopo. La videochiamata dura 5&ndash;10 minuti: ti chiedono di mostrare il documento e la tessera sanitaria.</div></div>
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-gold)'}}>0&ndash;14,90&euro;</div><h4>InfoCert</h4><p>Affidabile</p><div className="v8-detr-detail">CIE gratis. Videochiamata 14,90&euro; (la pi&ugrave; cara). Pochi sportelli fisici.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-green)'}}>Gratis</div><h4>Sielte</h4><p>Tutto online</p><div className="v8-detr-detail">CIE o webcam con operatore. Tutto gratis ma tempi di attesa possibili.</div></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Hai la CIE?</strong> Lepida o Aruba, gratis, 5 min da casa. <strong>Non hai la CIE?</strong> PosteID, gratis, 15 min in ufficio postale. <strong>Vuoi fare tutto dal divano?</strong> Aruba con videochiamata a 9,90&euro;.</p></div>
          </div>
        </div>
      </section>

      {/* DOCUMENTI */}
      <section className="v8-section" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cosa ti <em>serve</em></h2></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Per tutti i metodi</h3>
              <div className="v8-doc"><strong>Documento d&apos;identit&agrave; valido</strong> &mdash; carta d&apos;identit&agrave; o passaporto in corso di validit&agrave;</div>
              <div className="v8-doc"><strong>Tessera sanitaria / codice fiscale</strong> &mdash; serve il codice fiscale</div>
              <div className="v8-doc"><strong>Telefono cellulare</strong> &mdash; per SMS di verifica e app di conferma</div>
              <div className="v8-doc"><strong>Indirizzo email personale</strong> &mdash; per confermare la registrazione</div>
            </div>
            <div className="v8-doc-group">
              <h3>Se usi la CIE (metodo pi&ugrave; veloce)</h3>
              <div className="v8-doc"><strong>CIE</strong> &mdash; la carta d&apos;identit&agrave; con chip NFC (dal 2017 in poi)</div>
              <div className="v8-doc"><strong>PIN della CIE</strong> &mdash; 8 cifre: prime 4 dal Comune, ultime 4 nella lettera a casa</div>
              <div className="v8-doc"><strong>Telefono con NFC</strong> &mdash; quasi tutti gli smartphone dal 2018. Controlla nelle impostazioni del telefono cercando &quot;NFC&quot;.</div>
            </div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'32px',maxWidth:'700px',margin:'32px auto 0'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Cosa fare se non hai la CIE</h3>
            <p>Se non hai la Carta d&apos;Identit&agrave; Elettronica (la carta nuova con il chip), hai comunque diverse opzioni per fare lo SPID. La pi&ugrave; semplice &egrave; andare all&apos;ufficio postale con PosteID: porti il documento d&apos;identit&agrave; e la tessera sanitaria, un operatore verifica la tua identit&agrave; di persona, e in 15 minuti hai lo SPID. &Egrave; completamente gratuito.</p>
            <p>Se preferisci fare tutto da casa senza muoverti, puoi scegliere Aruba con videochiamata a 9,90&euro;: ti colleghi con un operatore che verifica il tuo documento in diretta, e nel giro di 10&ndash;15 minuti la procedura &egrave; completata. InfoCert offre un servizio simile a 14,90&euro;. Se hai una firma digitale o una CNS (Carta Nazionale dei Servizi), puoi usarla per il riconoscimento gratuito con qualsiasi provider.</p>
            <p>Il consiglio per il futuro: quando rinnovi la carta d&apos;identit&agrave;, chiedi la CIE. Costa circa 16&euro; e ti permetter&agrave; di fare lo SPID (e molte altre cose) istantaneamente dal telefono. Se hai gi&agrave; la CIE e non ricordi il PIN, puoi resettarlo attraverso l&apos;app CieID disponibile su tutti gli smartphone.</p>
          </div>
        </div>
      </section>

      {/* ESEMPIO */}
      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Marco</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Marco ha 28 anni</strong>, vive a Roma, fa il cameriere. Non ha mai fatto lo SPID. Poi in un mese gli servono l&apos;ISEE (esenzione ticket), il 730 (400&euro; di detrazioni) e un certificato di residenza (per l&apos;affitto). Tutti e tre chiedono lo SPID.</p>
            <p className="rv rv-d2" style={{fontSize:'15px'}}>L&apos;alternativa senza SPID sarebbero tre appuntamenti diversi, tre code diverse, tre mattinate di ferie perse dal lavoro. Marco capisce che non ha scelta e decide di farlo. Ha la CIE (la carta d&apos;identit&agrave; nuova con il chip). Sceglie Lepida perch&eacute; &egrave; gratis e si fa tutto dal telefono: registrazione 3 minuti, verifica CIE avvicinando la carta al telefono 3 minuti, impostazione password e download dell&apos;app 4 minuti. Totale: <strong style={{color:'var(--v8-bg)'}}>12 minuti</strong>. Poi prova ad accedere su inps.it: funziona al primo colpo.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>ISEE online</span><span>20 min (vs appuntamento CAF)</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>730 precompilata</span><span>Gratis (vs 50&euro; commercialista)</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Certificato residenza</span><span>2 min (vs coda all&apos;anagrafe)</span></div>
            <div className="v8-esempio-line v8-esempio-total rv rv-d4"><span>Tempo totale con SPID</span><span>49 minuti</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>In 49 minuti totali (SPID incluso), Marco ha fatto quello che prima gli avrebbe richiesto <strong style={{color:'#E4F3ED'}}>3 mattinate di ferie</strong> dal lavoro. Ha risparmiato 50&euro; di commercialista per il 730, ha evitato 3 code diverse e ha fatto tutto dal suo telefono. Da quel giorno, ogni volta che deve fare qualcosa con la Pubblica Amministrazione, ci mette 2 minuti dal divano. Non tornerebbe mai indietro.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="v8-section warm" id="faq">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Domande <em>frequenti</em></h2></div>
          <div className="v8-faq-list" id="faqList">
            {faqItems.map((item, i) => (
              <div key={i} className="v8-faq-item" data-faq>
                <button className="v8-faq-q">{item.q}<span className="v8-faq-icon">+</span></button>
                <div className="v8-faq-a"><p dangerouslySetInnerHTML={{ __html: item.a }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE CORRELATE */}
      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Approfondimenti e <em>guide correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/spid/costo-2026" className="v8-related-card"><h4>Costo SPID 2026</h4><p>Poste 6&euro;/anno e provider ancora gratis.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid/non-funziona" className="v8-related-card"><h4>SPID non funziona</h4><p>Problemi comuni e come risolverli.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/isee" className="v8-related-card"><h4>Faccio l&apos;ISEE</h4><p>Con lo SPID fai l&apos;ISEE online in 15 minuti.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/730" className="v8-related-card"><h4>Faccio il 730</h4><p>Accedi al precompilato con SPID. Gratis.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>

      <FooterV8 />
    </div>
  );
}
