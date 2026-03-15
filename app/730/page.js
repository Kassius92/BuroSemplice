import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import GuideExpand from '@/components/GuideExpand';
import FAQ from '@/components/FAQ';
import Calculator730 from '@/components/Calculator730';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import '@/app/guide.css';

/* ── METADATA ── */
export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: 'Guida completa al 730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze aggiornate e come ottenere il massimo rimborso. Gratis.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730', 'modello 730', '730 online', 'CAF 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa Gratuita', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e come ottenere il massimo rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og-730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: '730 Precompilato 2026: Guida Completa', description: 'Detrazioni, documenti, scadenze e rimborso. Tutto sul 730 in una guida gratuita.', images: ['https://zeroburocrazia.it/og-730.png'] },
};

/* ── DATA ── */
const faqItems = [
  {
    q: "Se non faccio il 730, cosa succede?",
    a: "<strong>Non vai in prigione.</strong> Per\u00f2 perdi tutte le detrazioni a cui avresti diritto: centinaia o migliaia di euro ogni anno. Se eri obbligato a farlo (ad esempio perch\u00e9 hai avuto due datori di lavoro) e non lo fai, l\u2019Agenzia delle Entrate pu\u00f2 inviarti un avviso di accertamento con sanzioni dal 120% al 240% delle imposte dovute. Conviene sempre farlo."
  },
  {
    q: "Posso scaricare Netflix o la palestra?",
    a: "<strong>Netflix no.</strong> I servizi di streaming non rientrano tra le spese detraibili. La palestra per te personalmente nemmeno, a meno che non sia prescritta dal medico come attivit\u00e0 riabilitativa. Per\u00f2 le <strong>attivit\u00e0 sportive dei figli tra 5 e 18 anni s\u00ec</strong>: sono detraibili al 19% fino a un massimo di 210\u20ac per figlio. Quindi nuoto, calcio, danza, arti marziali di tuo figlio li puoi scaricare."
  },
  {
    q: "Il CU non mi arriva, che faccio?",
    a: "Il datore di lavoro \u00e8 <strong>obbligato per legge</strong> a consegnare la Certificazione Unica entro il 16 marzo. Se non la ricevi, sollecita per iscritto (email o PEC). Se il datore \u00e8 irreperibile, puoi scaricare la CU direttamente dal sito dell\u2019Agenzia delle Entrate accedendo con SPID alla tua area riservata, oppure richiederla all\u2019INPS se hai ricevuto prestazioni come NASpI o cassa integrazione."
  },
  {
    q: "Ho pagato in contanti, perdo la detrazione?",
    a: "<strong>Dipende dalla spesa.</strong> Dal 1\u00b0 gennaio 2025, tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili: carta di credito, bancomat, bonifico, assegno. Fanno eccezione i <strong>farmaci con ricetta medica</strong> e le <strong>prestazioni sanitarie presso strutture pubbliche o private accreditate al SSN</strong>, che possono ancora essere pagati in contanti."
  },
  {
    q: "Ho cambiato lavoro, devo fare due 730?",
    a: "<strong>No, fai un solo 730</strong> in cui inserisci entrambe le Certificazioni Uniche. Attenzione per\u00f2: \u00e8 molto probabile che dovrai pagare un conguaglio. Questo perch\u00e9 ogni datore di lavoro ha calcolato le tasse come se tu fossi stato da lui per tutto l\u2019anno, applicando detrazioni e aliquote pi\u00f9 basse del dovuto. La somma dei due redditi ti porta probabilmente in uno scaglione IRPEF superiore."
  },
  {
    q: "Posso fare il 730 congiunto con il mio partner?",
    a: "<strong>Solo se siete sposati o uniti civilmente.</strong> I conviventi, anche se con figli in comune, non possono presentare il 730 congiunto. Il vantaggio principale del congiunto \u00e8 che crediti e debiti si compensano: se uno dei due ha un rimborso e l\u2019altro deve pagare, la differenza viene calcolata automaticamente."
  },
  {
    q: "Ho fatto un errore nel 730, posso correggerlo?",
    a: "<strong>S\u00ec, in diversi modi.</strong> Entro il 30 settembre puoi inviare un nuovo 730 che sostituisce quello precedente. Entro il 25 ottobre puoi presentare un 730 integrativo (solo se il nuovo \u00e8 pi\u00f9 favorevole per te). Dopo questa data, devi usare il Modello Redditi correttivo entro il 30 novembre. Oltre il 30 novembre, puoi presentare una dichiarazione integrativa entro 5 anni dall\u2019anno di presentazione."
  },
  {
    q: "Ho ricevuto la NASpI o la cassa integrazione, devo fare il 730?",
    a: "<strong>S\u00ec, e ti conviene.</strong> La NASpI (indennit\u00e0 di disoccupazione) e la cassa integrazione sono redditi a tutti gli effetti, tassati dall\u2019INPS. Se nello stesso anno hai avuto sia uno stipendio che la NASpI, hai avuto di fatto due sostituti d\u2019imposta (il datore e l\u2019INPS), e il 730 \u00e8 praticamente obbligatorio per ricalcolare correttamente le imposte."
  },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({
      title: 'Guida completa al Modello 730 2026',
      description: 'Come fare il 730 nel 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.',
      url: '/730',
      image: 'og730.png',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco page-guida">
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* ════════════════════════════════════════════ */}
      {/* HERO                                        */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--hero">
        <div className="cat-badge" style={{ background: 'rgba(255,255,255,.12)', marginBottom: 14 }}>
          {"\uD83D\uDCB0"} Fisco e soldi
        </div>
        <h1 style={{
          fontSize: 'clamp(28px, 7vw, 42px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.15,
          marginBottom: 12,
          fontFamily: 'var(--font-playfair), serif',
        }}>
          Faccio il <em style={{ color: '#fff', opacity: 0.7 }}>730</em>
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.65, marginBottom: 18, maxWidth: 500 }}>
          Tutto sulla dichiarazione dei redditi: chi deve farla, quanto costa, quali spese puoi scaricare e come ottenere il rimborso pi&ugrave; alto possibile. Guida gratuita con informazioni verificate dalle fonti ufficiali.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            "\uD83D\uDD50 15 min di lettura",
            "\u23F0 Scadenza: 30 settembre 2026",
            "\u2713 Aggiornata a marzo 2026",
          ].map((pill, i) => (
            <span key={i} style={{
              fontSize: 11, fontWeight: 600, padding: '5px 12px',
              borderRadius: 100, background: 'rgba(255,255,255,.12)',
              color: 'rgba(255,255,255,.85)',
            }}>{pill}</span>
          ))}
        </div>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', marginTop: 18 }}>
          Fonti: Agenzia delle Entrate &middot; INPS &middot; Legge di Bilancio 2026 (L. 207/2024) &middot; D.Lgs. 216/2023
        </p>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* NUMERI CHIAVE                               */}
      {/* ════════════════════════════════════════════ */}
      <div className="g-stats">
        <div>
          <div className="g-stat-num" style={{ color: 'var(--sage)' }}>0&euro;</div>
          <div className="g-stat-label">con la precompilata</div>
        </div>
        <div>
          <div className="g-stat-num" style={{ color: 'var(--cat)' }}>30/9</div>
          <div className="g-stat-label">scadenza invio</div>
        </div>
        <div>
          <div className="g-stat-num" style={{ color: 'var(--teal)' }}>~760&euro;</div>
          <div className="g-stat-label">rimborso medio*</div>
        </div>
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* COS'È IL 730                                */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="cose">
        <div className="g-eyebrow">Le basi</div>
        <h2>Cos&apos;&egrave; il 730</h2>
        <p className="g-sub">In 30 secondi</p>
        <GuideExpand
          visual={<>
            <div className="g-grid">
              <div className="g-card">
                <div className="g-card-emoji">{"\uD83D\uDCBC"}</div>
                <div className="g-card-title">Tu lavori</div>
                <div className="g-card-note">Il datore ti toglie le tasse ogni mese, ma non sa quali spese hai sostenuto</div>
              </div>
              <div className="g-card">
                <div className="g-card-emoji">{"\uD83E\uDDFE"}</div>
                <div className="g-card-title">Fai il 730</div>
                <div className="g-card-note">Dichiari le spese sostenute nell&apos;anno e lo Stato ricalcola le tasse</div>
              </div>
            </div>
            <div className="g-arrow">{"\u2193"}</div>
            <div className="g-result">
              <strong>{"\uD83D\uDCB8"} Ottieni il rimborso</strong>
              <span>Direttamente in busta paga, tra luglio e agosto</span>
            </div>
          </>}
          detail={<>
            <p>Ogni mese il tuo datore di lavoro trattiene una parte del tuo stipendio per pagare le tasse al posto tuo. Questo meccanismo si chiama <strong>ritenuta alla fonte</strong>, e il datore &egrave; il tuo <strong>sostituto d&apos;imposta</strong>. Il problema &egrave; che lui calcola le tasse basandosi solo sullo stipendio, senza sapere nulla della tua vita privata: non sa se paghi un affitto, se hai il mutuo, se vai dal dentista, se i tuoi figli fanno sport.</p>
            <p>Il Modello 730 serve esattamente a questo: &egrave; il documento con cui comunichi all&apos;Agenzia delle Entrate tutte le spese sostenute durante l&apos;anno che ti danno diritto a <strong>detrazioni</strong> (rimborsi parziali) o <strong>deduzioni</strong> (riduzioni del reddito imponibile). Nella stragrande maggioranza dei casi, il risultato &egrave; che hai pagato pi&ugrave; tasse del dovuto e ti spetta un rimborso.</p>
            <p>Il rimborso arriva direttamente in busta paga &mdash; di solito tra luglio e agosto se presenti il 730 entro giugno. Se sei pensionato, il rimborso arriva con la pensione di agosto o settembre.</p>
            <p>Si chiama &quot;730&quot; perch&eacute; &egrave; il codice identificativo del modello fiscale introdotto nel 1993. Non c&apos;&egrave; un motivo pi&ugrave; profondo &mdash; &egrave; burocrazia italiana.</p>
            <div className="g-box g-box--tip">
              <div className="g-box-title">{"\uD83D\uDCA1"} Perch&eacute; conviene anche se non sei obbligato</div>
              <p>Molte persone non sono tecnicamente obbligate a fare il 730 (ad esempio chi ha un solo datore di lavoro e nessuna spesa da scaricare). Ma nella pratica quasi tutti hanno almeno qualche spesa detraibile: una visita medica, un abbonamento ai trasporti, una spesa scolastica. Sommando tutto, anche un caso semplice pu&ograve; generare 200&ndash;500&euro; di rimborso. Chi ha mutuo, affitto o figli arriva facilmente a 1.000&ndash;3.000&euro;. Ogni anno che non fai il 730, quei soldi li perdi definitivamente.</p>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 10 }}>{"\uD83D\uDCD6"} Parole che incontrerai in questa guida</p>
            <div className="g-glossary">
              <div className="g-gl"><b>CU (Certificazione Unica)</b> &mdash; il documento che il datore di lavoro o l&apos;INPS ti consegna entro il 16 marzo. Riporta quanto hai guadagnato nell&apos;anno e quante tasse sono gi&agrave; state versate. &Egrave; indispensabile per fare il 730.</div>
              <div className="g-gl"><b>IRPEF</b> &mdash; l&apos;Imposta sul Reddito delle Persone Fisiche, ovvero la tassa principale che paghi sui tuoi guadagni. Si calcola per scaglioni: pi&ugrave; guadagni, pi&ugrave; alta &egrave; la percentuale.</div>
              <div className="g-gl"><b>Detrazione</b> &mdash; una riduzione dell&apos;imposta che devi pagare. Se hai diritto a una detrazione del 19% su 1.000&euro; di spese mediche, paghi 190&euro; di tasse in meno (o ti vengono rimborsati 190&euro;).</div>
              <div className="g-gl"><b>Deduzione</b> &mdash; una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000&euro; e hai 3.000&euro; di deduzioni, le tasse si calcolano su 22.000&euro;.</div>
              <div className="g-gl"><b>Franchigia</b> &mdash; la soglia sotto la quale non hai diritto al rimborso. Per le spese mediche &egrave; 129,11&euro;: se nell&apos;anno spendi meno di questa cifra dal medico, non recuperi nulla.</div>
              <div className="g-gl"><b>Precompilata</b> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato con i dati in suo possesso (stipendio, spese mediche trasmesse dalle farmacie, interessi del mutuo). Devi controllarlo e integrarlo con quello che manca.</div>
              <div className="g-gl"><b>Sostituto d&apos;imposta</b> &mdash; il soggetto che paga le tasse al posto tuo: il tuo datore di lavoro o l&apos;INPS. &Egrave; lui che ti versa il rimborso in busta paga o nella pensione.</div>
              <div className="g-gl"><b>Conguaglio</b> &mdash; il calcolo finale tra tasse dovute e tasse gi&agrave; versate. Se hai pagato troppo, ricevi un rimborso. Se hai pagato poco (tipico di chi ha cambiato lavoro), devi versare la differenza.</div>
            </div>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* QUANTO PERDI SENZA IL 730                   */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--dark" id="quanto-perdi">
        <div className="g-eyebrow">Il conto che nessuno ti fa</div>
        <h2>Quanto perdi senza il 730</h2>
        <div className="g-bignum">
          <strong>1.178&euro;</strong>
          <span>persi ogni anno da Marco, 28 anni, dipendente con 14.000&euro; lordi</span>
        </div>
        <GuideExpand
          visual={
            <div className="g-grid">
              <div className="g-card"><div className="g-card-emoji">{"\uD83E\uDDB7"}</div><div className="g-card-value">+89&euro;</div><div className="g-card-title">Dentista</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83D\uDE87"}</div><div className="g-card-value">+47&euro;</div><div className="g-card-title">Metro</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83C\uDFE0"}</div><div className="g-card-value">+991&euro;</div><div className="g-card-title">Affitto</div></div>
              <div className="g-card"><div className="g-card-emoji">{"\uD83D\uDC15"}</div><div className="g-card-value">+51&euro;</div><div className="g-card-title">Veterinario</div></div>
            </div>
          }
          label="Vedi il calcolo completo"
          detail={<>
            <p>Marco ha 28 anni, vive in affitto a Milano e lavora come impiegato con uno stipendio lordo di 14.000&euro; annui. Non ha mai fatto il 730. Ecco cosa perde ogni anno:</p>
            <p><strong>Spese mediche (dentista + visite):</strong> ha speso 600&euro; nell&apos;anno. Si sottrae la franchigia di 129,11&euro;, e sul restante (470,89&euro;) si calcola il 19%. Risultato: <strong>89&euro; di rimborso</strong>. Fonte: art. 15, comma 1, lettera c) del TUIR.</p>
            <p><strong>Abbonamento trasporti:</strong> 250&euro; per l&apos;abbonamento annuale della metro. Il 19% di 250&euro; = <strong>47&euro; di rimborso</strong>. Nessuna franchigia, tetto massimo 250&euro;. Fonte: art. 15, comma 1, lettera i-decies) del TUIR.</p>
            <p><strong>Affitto (under 31):</strong> Marco ha meno di 31 anni e un reddito complessivo sotto i 15.493,71&euro;. Ha diritto alla detrazione speciale per giovani inquilini: <strong>fino a 991,60&euro;</strong>. Fonte: art. 16, comma 01, del TUIR come modificato dalla Legge di Bilancio 2022.</p>
            <p><strong>Spese veterinarie:</strong> 400&euro; per il cane. Si sottrae la franchigia di 129,11&euro;, sul restante (270,89&euro;) si calcola il 19%. Risultato: <strong>51&euro;</strong>. Tetto massimo di spesa: 550&euro;. Fonte: art. 15, comma 1, lettera c-bis) del TUIR.</p>
            <p>Totale: <strong>1.178&euro; all&apos;anno</strong>. In 5 anni di lavoro senza 730: quasi <strong>6.000&euro; regalati allo Stato</strong>. E Marco ha una situazione semplice. Chi ha un mutuo prima casa pu&ograve; recuperare fino a 760&euro; in pi&ugrave;; chi ha figli, tra assegno unico e spese scolastiche, aggiunge altri 200&ndash;800&euro;; chi ha fatto lavori in casa pu&ograve; recuperare il 50% della spesa in 10 anni.</p>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* NOVITÀ 2026                                 */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--gray" id="novita">
        <div className="g-eyebrow">Aggiornamenti</div>
        <h2>Novit&agrave; 2026</h2>
        <p className="g-sub">Le regole cambiano ogni anno. Ecco le modifiche che impattano sul tuo 730.</p>
        <div className="g-box g-box--tip">
          <div className="g-box-title">{"\uD83D\uDCA1"} Tre scaglioni IRPEF confermati a regime</div>
          <p>Il D.Lgs. 216/2023, inizialmente provvisorio, &egrave; stato reso strutturale dalla Legge di Bilancio 2026. I tre scaglioni: fino a 28.000&euro; si paga il 23%, da 28.001 a 50.000&euro; il 33% (prima era il 35%), oltre 50.000&euro; il 43%. Per chi guadagna tra 28.000 e 50.000&euro; il risparmio &egrave; di circa 260&ndash;440&euro; rispetto alle vecchie aliquote.</p>
        </div>
        <div className="g-box g-box--warn">
          <div className="g-box-title">{"\u26A0\uFE0F"} Redditi sopra 75.000&euro;: detrazioni al 19% ridotte</div>
          <p>Novit&agrave; introdotta dall&apos;art. 1, commi 10-11 della Legge di Bilancio 2025: per chi ha un reddito complessivo superiore a 75.000&euro;, le detrazioni al 19% (spese mediche escluse) vengono progressivamente ridotte fino ad azzerarsi per redditi sopra i 100.000&euro;. Restano invariate: spese sanitarie, interessi su mutui prima casa stipulati entro il 31 dicembre 2024, e rate di bonus edilizi gi&agrave; in corso.</p>
        </div>
        <div className="g-box g-box--warn">
          <div className="g-box-title">{"\u26A0\uFE0F"} Figli a carico: limite massimo di 30 anni</div>
          <p>Dal 2026 i figli possono essere considerati fiscalmente a carico solo fino al compimento dei 30 anni (prima non esisteva limite di et&agrave;). Unica eccezione: figli con disabilit&agrave; certificata ai sensi della Legge 104/1992. Fonte: art. 1, comma 11-bis della Legge di Bilancio 2025.</p>
        </div>
        <div className="g-box g-box--money">
          <div className="g-box-title">{"\uD83D\uDCB6"} Detrazione per lavoro dipendente aumentata</div>
          <p>Per i redditi fino a 15.000&euro; annui, la detrazione base per lavoro dipendente sale da 1.880&euro; a 1.955&euro;, con un incremento netto di 75&euro;. Fonte: modifica all&apos;art. 13 del TUIR.</p>
        </div>
        <div className="g-box g-box--tip">
          <div className="g-box-title">{"\uD83D\uDCA1"} Spese scolastiche: il tetto sale a 1.000&euro;</div>
          <p>Il tetto massimo detraibile per le spese di frequenza scolastica passa da 800&euro; a 1.000&euro; per studente, portando il risparmio massimo da 152&euro; a 190&euro; per figlio. Sono incluse: rette scolastiche, mensa, gite, trasporto scolastico, contributi volontari. Fonte: modifica all&apos;art. 15, comma 1, lettera e-bis) del TUIR.</p>
        </div>
        <div className="g-box g-box--tip">
          <div className="g-box-title">{"\uD83D\uDCA1"} Bonus affitto per neoassunti trasferiti</div>
          <p>Se sei stato assunto a tempo indeterminato nel 2025 e ti sei trasferito per lavoro a pi&ugrave; di 100 km dalla residenza precedente, i rimborsi del datore di lavoro per affitto e alloggio non fanno reddito per i primi due anni, fino a un massimo di 5.000&euro;/anno. Requisito: reddito nell&apos;anno precedente non superiore a 35.000&euro;.</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* DETRAZIONI                                  */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="detrazioni">
        <div className="g-eyebrow">Rimborsi</div>
        <h2>Quanto puoi recuperare</h2>
        <p className="g-sub">Lo Stato rimborsa una percentuale delle spese sostenute. Ecco quanto con esempi concreti.</p>
        <GuideExpand
          visual={
            <div className="g-grid">
              {[
                ["\uD83E\uDDB7", "Dentista",    "+127\u20ac", "su 800\u20ac spesi"],
                ["\uD83C\uDFE0", "Mutuo",       "+760\u20ac", "su 4.000\u20ac interessi"],
                ["\uD83D\uDE87", "Trasporti",   "+47\u20ac",  "su 250\u20ac abbonamento"],
                ["\uD83D\uDC76", "Sport figli",  "+40\u20ac",  "su 500\u20ac palestra"],
                ["\uD83D\uDC15", "Veterinario", "+51\u20ac",  "su 400\u20ac visite"],
                ["\uD83C\uDFEB", "Scuola",      "+190\u20ac", "su 1.000\u20ac rette"],
              ].map((d, i) => (
                <div className="g-card" key={i}>
                  <div className="g-card-emoji">{d[0]}</div>
                  <div className="g-card-title">{d[1]}</div>
                  <div className="g-card-value">{d[2]}</div>
                  <div className="g-card-note">{d[3]}</div>
                </div>
              ))}
            </div>
          }
          detail={<>
            <p>Le detrazioni funzionano cos&igrave;: hai sostenuto una spesa, lo Stato te ne rimborsa una percentuale. Per la maggior parte delle spese la percentuale &egrave; il <strong>19%</strong>, ma ci sono eccezioni importanti (ristrutturazioni al 50%, ecobonus al 50&ndash;65%, donazioni al 26%).</p>
            <p>Una singola voce sembra poca cosa. Ma il trucco &egrave; <strong>sommare tutto</strong>: dentista + trasporti + sport dei figli + veterinario + affitto = facilmente 500&ndash;1.500&euro; di rimborso. Chi ha il mutuo prima casa aggiunge fino a 760&euro;. Chi ha ristrutturato casa recupera il 50% della spesa in 10 rate annuali.</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--t1)', marginBottom: 10 }}>Tabella completa delle detrazioni principali</p>
            <div className="g-table">
              {[
                ["Spese mediche e sanitarie", "19%"],
                ["Interessi passivi mutuo prima casa", "19%"],
                ["Canone di locazione (affitto)", "300\u2013991\u20ac"],
                ["Spese di istruzione scolastica", "19%"],
                ["Attivit\u00e0 sportive figli 5\u201318 anni", "19%"],
                ["Abbonamento trasporto pubblico", "19%"],
                ["Spese veterinarie", "19%"],
                ["Premi assicurazione vita e infortuni", "19%"],
                ["Spese funebri", "19%"],
                ["Erogazioni liberali a ONLUS", "26%"],
                ["Interventi di ristrutturazione", "50%"],
                ["Interventi di risparmio energetico", "50\u201365%"],
                ["Bonus mobili (con ristrutturazione)", "50%"],
                ["Spese per addetti assistenza personale", "19%"],
              ].map((r, i) => (
                <div className="g-row" key={i}>
                  <div className="g-row-name">{r[0]}</div>
                  <div className="g-row-val">{r[1]}</div>
                </div>
              ))}
            </div>
            <div className="g-box g-box--warn">
              <div className="g-box-title">{"\u26A0\uFE0F"} Le detrazioni che la gente dimentica sempre</div>
              <p>Abbonamento ai trasporti pubblici (anche treno per i pendolari), spese veterinarie, sport dei figli, spese funebri, donazioni a ONLUS e partiti politici, spese per assistenti personali (badanti). Se non le inserisci nel 730, quei soldi li perdi per sempre: non puoi recuperarli negli anni successivi.</p>
            </div>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CHI DEVE FARLO                              */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--gray" id="chi-deve">
        <div className="g-eyebrow">Obblighi</div>
        <h2>Chi deve fare il 730</h2>
        <p className="g-sub">Quattro situazioni, quattro risposte diverse</p>
        <GuideExpand
          visual={
            <div className="g-status">
              <div className="g-status-card" style={{ background: '#f0f8f5', border: '1px solid rgba(42,157,143,.2)' }}>
                <div className="g-status-title" style={{ color: 'var(--sage)' }}>{"\u2705"} Devi farlo se</div>
                <div className="g-status-desc">Sei un lavoratore dipendente o pensionato che ha percepito redditi nel 2025. In pratica: se hai ricevuto uno stipendio o una pensione, il 730 &egrave; il modello pensato per te.</div>
              </div>
              <div className="g-status-card" style={{ background: '#FFF0E0', border: '1px solid rgba(227,100,20,.15)' }}>
                <div className="g-status-title" style={{ color: '#b34e0e' }}>{"\u26A0\uFE0F"} &Egrave; praticamente obbligatorio se</div>
                <div className="g-status-desc">Hai cambiato lavoro nel 2025 (due CU), hai percepito sia stipendio che NASpI o cassa integrazione, oppure hai redditi da pi&ugrave; fonti. In questi casi le tasse non sono state calcolate correttamente e devi ricalcolarle.</div>
              </div>
              <div className="g-status-card" style={{ background: '#f3f7fb', border: '1px solid rgba(15,76,92,.12)' }}>
                <div className="g-status-title" style={{ color: 'var(--teal)' }}>{"\uD83D\uDCA1"} Non sei obbligato, ma ti conviene se</div>
                <div className="g-status-desc">Hai un solo lavoro e almeno una spesa da scaricare: dentista, affitto, mutuo, trasporti, sport dei figli, veterinario. Fai il 730 e recuperi soldi.</div>
              </div>
              <div className="g-status-card" style={{ background: '#f5f5f2' }}>
                <div className="g-status-title" style={{ color: 'var(--t3)' }}>{"\uD83D\uDEAB"} Non puoi fare il 730 se</div>
                <div className="g-status-desc">Hai la partita IVA (devi usare il Modello Redditi PF), oppure hai redditi d&apos;impresa. Il 730 &egrave; riservato a dipendenti, pensionati e assimilati.</div>
              </div>
            </div>
          }
          detail={<>
            <p><strong>Il caso pi&ugrave; insidioso: due datori di lavoro nello stesso anno.</strong> Se hai cambiato lavoro, ogni datore ti ha applicato le detrazioni come se tu fossi stato da lui per 12 mesi, e ha calcolato l&apos;IRPEF sulla sua sola parte di stipendio. Risultato: la somma dei due redditi ti porta probabilmente in uno scaglione IRPEF superiore, e le detrazioni sono state applicate in eccesso. Senza il 730, l&apos;Agenzia delle Entrate se ne accorger&agrave; e ti invier&agrave; un avviso bonario con la richiesta di pagare la differenza, pi&ugrave; interessi e sanzioni ridotte (se paghi entro 30 giorni) o piene (se non paghi).</p>
            <div className="g-box g-box--tip">
              <div className="g-box-title">{"\uD83D\uDCA1"} La regola pratica</div>
              <p>Se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso. L&apos;unico motivo valido per non farlo &egrave; se hai avuto un solo datore di lavoro e zero spese detraibili nell&apos;intero anno.</p>
            </div>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* COME SI FA                                  */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="come">
        <div className="g-eyebrow">Passo per passo</div>
        <h2>Come si fa il 730</h2>
        <p className="g-sub">Il percorso completo, dal primo giorno all&apos;ultimo</p>
        <GuideExpand
          visual={
            <div className="g-flow">
              {[
                ["\uD83D\uDD10", "Fai lo SPID", "15 minuti, gratuito"],
                ["\uD83D\uDCC4", "Raccogli i documenti", "CU + tutte le ricevute delle spese"],
                ["\uD83D\uDCBB", "Apri la precompilata", "Dal 30 aprile su agenziaentrate.gov.it"],
                ["\u2705",       "Controlla, integra e invia", "Verifica ogni voce prima di confermare"],
                ["\uD83D\uDCB8", "Ricevi il rimborso", "In busta paga tra luglio e agosto"],
              ].map((s, i) => (
                <div key={i}>
                  <div className="g-step">
                    <div className="g-step-icon">{s[0]}</div>
                    <div className="g-step-text"><strong>{s[1]}</strong><span>{s[2]}</span></div>
                    <div className="g-step-num">{i + 1}</div>
                  </div>
                  {i < 4 && <div className="g-step-line" />}
                </div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>Passo 1 &mdash; Attiva lo SPID.</strong> Per accedere alla precompilata online ti serve l&apos;identit&agrave; digitale SPID. Se non ce l&apos;hai, puoi attivarlo gratuitamente in circa 15 minuti con un documento d&apos;identit&agrave;, la tessera sanitaria e uno smartphone. I provider pi&ugrave; usati sono Poste Italiane, Aruba e InfoCert. <Link href="/spid" style={{ color: 'var(--cat)', fontWeight: 600 }}>Leggi la nostra guida SPID</Link>. Se scegli di andare al CAF, lo SPID non ti serve.</p>
            <p><strong>Passo 2 &mdash; Raccogli i documenti.</strong> Il documento fondamentale &egrave; la <strong>CU (Certificazione Unica)</strong>: la ricevi dal datore di lavoro o dall&apos;INPS entro il 16 marzo. Poi raccogli tutte le ricevute delle spese sostenute nell&apos;anno: mediche, affitto, mutuo, scuola, trasporti, veterinario, ristrutturazioni. La lista completa &egrave; nella sezione Documenti qui sotto.</p>
            <p><strong>Passo 3 &mdash; Apri la precompilata.</strong> Dal 30 aprile l&apos;Agenzia delle Entrate pubblica il tuo 730 gi&agrave; parzialmente compilato. Vai su agenziaentrate.gov.it, accedi con SPID, e troverai i dati gi&agrave; inseriti: redditi, spese mediche trasmesse dalle farmacie, interessi del mutuo, premi assicurativi.</p>
            <p><strong>Passo 4 &mdash; Controlla e integra.</strong> Questo &egrave; il passaggio pi&ugrave; importante. <strong>Non accettare la precompilata senza controllare.</strong> Le voci che mancano pi&ugrave; spesso: sport dei figli, spese mediche pagate privatamente, abbonamenti ai trasporti, affitto (se il proprietario non ha comunicato il contratto). Se mancano, aggiungile tu manualmente.</p>
            <p><strong>Passo 5 &mdash; Invia e aspetta il rimborso.</strong> Se fai da solo, lo invii direttamente dal sito dell&apos;Agenzia. Se vai al CAF o dal commercialista, lo inviano loro. Il rimborso arriva in busta paga: se invii entro giugno, lo ricevi a luglio. Se invii a settembre, lo ricevi a fine anno o l&apos;anno dopo.</p>
            <div className="g-box g-box--money">
              <div className="g-box-title">{"\uD83D\uDCB6"} Consiglio pratico</div>
              <p>Fallo tra maggio e giugno. Tre vantaggi: al CAF ci sono meno code, il rimborso arriva gi&agrave; a luglio, e se commetti un errore hai tutto il tempo per correggerlo prima della scadenza del 30 settembre.</p>
            </div>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* QUANTO COSTA                                */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--gray" id="costi">
        <div className="g-eyebrow">Confronto</div>
        <h2>Quanto costa farlo</h2>
        <p className="g-sub">Tre strade, una gratis. Ecco quale scegliere.</p>
        <div className="g-compare">
          <div className="g-cmp g-cmp--best">
            <div className="g-cmp-badge">Consigliato</div>
            <div className="g-cmp-info">
              <div className="g-cmp-name">Da solo con la precompilata</div>
              <div className="g-cmp-sub">1&ndash;2 ore &middot; Serve SPID &middot; Ideale se hai un solo lavoro e poche spese</div>
            </div>
            <div className="g-cmp-price">0&euro;</div>
          </div>
          <div className="g-cmp">
            <div className="g-cmp-info">
              <div className="g-cmp-name">Al CAF o Patronato</div>
              <div className="g-cmp-sub">30 min + eventuale attesa &middot; Chi ha cambiato lavoro, ha l&apos;affitto o il mutuo</div>
            </div>
            <div className="g-cmp-price">30&ndash;80&euro;</div>
          </div>
          <div className="g-cmp">
            <div className="g-cmp-info">
              <div className="g-cmp-name">Commercialista</div>
              <div className="g-cmp-sub">15 min dal tuo lato &middot; Situazioni complesse: immobili, cripto, redditi esteri</div>
            </div>
            <div className="g-cmp-price">80&ndash;200&euro;</div>
          </div>
        </div>
        <div className="g-box g-box--money">
          <div className="g-box-title">{"\uD83D\uDCB6"} Il consiglio di ZeroBurocrazia</div>
          <p><strong>Un lavoro + poche spese</strong> &rarr; fallo da solo: risparmi 50&ndash;80&euro; e impari a farlo (il prossimo anno sar&agrave; pi&ugrave; veloce). <strong>Mutuo, cambio lavoro, figli</strong> &rarr; vai al CAF: miglior rapporto qualit&agrave;-prezzo. Se sei iscritto al sindacato, spesso &egrave; gratuito. <strong>Immobili in affitto a terzi, criptovalute, redditi esteri, eredit&agrave;</strong> &rarr; commercialista: costa di pi&ugrave; ma sa ottimizzare e si assume la responsabilit&agrave;.</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* DOCUMENTI                                   */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="documenti">
        <div className="g-eyebrow">Checklist</div>
        <h2>I documenti che ti servono</h2>
        <GuideExpand
          visual={
            <div className="g-checks">
              <div className="g-check-label">Sempre necessari</div>
              {[
                ["\uD83D\uDCC4", "CU 2026 (Certificazione Unica)"],
                ["\uD83E\uDEAA", "Documento d'identit\u00e0 valido + codice fiscale"],
                ["\uD83C\uDFE6", "IBAN del conto corrente"],
                ["\uD83D\uDCCB", "730 dell'anno precedente (se disponibile)"],
              ].map((d, i) => (
                <div className="g-check" key={i}>
                  <span className="g-check-emoji">{d[0]}</span>
                  <span className="g-check-text">{d[1]}</span>
                  <span className="g-check-ok">{"\u2713"}</span>
                </div>
              ))}
              <div className="g-check-label">Per le detrazioni (porta quelli che hai)</div>
              {[
                ["\uD83E\uDDB7", "Ricevute spese mediche e sanitarie"],
                ["\uD83C\uDFE0", "Contratto d'affitto registrato"],
                ["\uD83C\uDFE6", "Certificazione interessi passivi mutuo"],
                ["\uD83C\uDFEB", "Ricevute spese scolastiche e universitarie"],
                ["\u26BD",       "Ricevute attivit\u00e0 sportive figli (5\u201318 anni)"],
                ["\uD83D\uDE87", "Ricevuta abbonamento trasporto pubblico"],
                ["\uD83D\uDC15", "Ricevute spese veterinarie"],
                ["\uD83D\uDD28", "Fatture ristrutturazione + bonifici parlanti"],
                ["\uD83D\uDC9A", "Ricevute donazioni a ONLUS"],
                ["\uD83D\uDD12", "Quietanze premi assicurativi"],
              ].map((d, i) => (
                <div className="g-check" key={i}>
                  <span className="g-check-emoji">{d[0]}</span>
                  <span className="g-check-text">{d[1]}</span>
                  <span className="g-check-empty" />
                </div>
              ))}
            </div>
          }
          detail={<>
            <p><strong>CU (Certificazione Unica) 2026</strong> &mdash; il documento pi&ugrave; importante. Lo ricevi dal datore di lavoro (via email o cartaceo) entro il 16 marzo. Riporta il reddito lordo, le ritenute IRPEF gi&agrave; versate e le addizionali regionali e comunali. Se hai avuto pi&ugrave; datori, avrai pi&ugrave; CU. Se non arriva, puoi scaricarla dal sito dell&apos;Agenzia delle Entrate o dell&apos;INPS con SPID.</p>
            <p><strong>Ricevute spese mediche</strong> &mdash; conserva tutto: scontrini farmacia, fatture del dentista, ricevute di visite specialistiche, esami del sangue, psicologo, fisioterapista, occhiali, apparecchi acustici. Le farmacie trasmettono automaticamente i dati all&apos;Agenzia, ma le spese mediche private (dentista, psicologo, oculista) spesso non vengono trasmesse e devi inserirle tu.</p>
            <p><strong>Contratto d&apos;affitto</strong> &mdash; deve essere registrato all&apos;Agenzia delle Entrate. Senza registrazione, niente detrazione. Porta copia del contratto e delle ricevute di pagamento.</p>
            <p><strong>Interessi mutuo</strong> &mdash; la banca ti invia ogni anno (di solito tra febbraio e marzo) una certificazione con l&apos;importo degli interessi passivi pagati nell&apos;anno. Massimo detraibile: 4.000&euro; di interessi, che equivalgono a un rimborso massimo di 760&euro;.</p>
            <p><strong>Fatture ristrutturazione</strong> &mdash; attenzione: per avere la detrazione del 50%, i pagamenti devono essere stati effettuati con <strong>bonifico parlante</strong> (un bonifico speciale che riporta causale, codice fiscale e partita IVA del destinatario). I pagamenti con bonifico ordinario, carta di credito o contanti non danno diritto alla detrazione.</p>
            <div className="g-box g-box--tip">
              <div className="g-box-title">{"\uD83D\uDCA1"} Il metodo della cartellina</div>
              <p>Crea una cartellina (fisica o digitale) chiamata &quot;730 2026&quot;. Ogni volta che ricevi una ricevuta, uno scontrino o una fattura detraibile, mettila dentro. A maggio, quando aprirai la precompilata, avrai tutto pronto in 5 minuti invece di impazzire a cercare scontrini vecchi di mesi.</p>
            </div>
          </>}
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* ERRORI DA EVITARE                           */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--warm" id="errori">
        <div className="g-eyebrow">Attenzione</div>
        <h2>Gli errori pi&ugrave; comuni</h2>
        <p className="g-sub">Quelli che fanno perdere soldi a milioni di italiani ogni anno</p>
        <div className="g-warnings">
          <div className="g-wcard">
            <span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span>
            <div><div className="g-wcard-title">Accettare la precompilata senza controllarla</div><div className="g-wcard-desc">L&apos;Agenzia delle Entrate non ha tutti i dati. Le spese sportive dei figli, l&apos;affitto, le spese mediche private, gli abbonamenti ai trasporti: spesso mancano. Se accetti senza controllare, perdi quei rimborsi.</div></div>
          </div>
          <div className="g-wcard">
            <span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span>
            <div><div className="g-wcard-title">Non fare il 730 perch&eacute; &quot;tanto non cambia nulla&quot;</div><div className="g-wcard-desc">Anche una situazione semplice (un po&apos; di dentista, un abbonamento al bus, lo sport di un figlio) genera 200&ndash;400&euro; di rimborso. Ogni anno. Per tutta la vita lavorativa. &Egrave; denaro che stai letteralmente regalando.</div></div>
          </div>
          <div className="g-wcard">
            <span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span>
            <div><div className="g-wcard-title">Pagare spese detraibili in contanti</div><div className="g-wcard-desc">Dal 2025 tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili (carta, bancomat, bonifico). Paghi in contanti? Perdi la detrazione. Uniche eccezioni: farmaci con ricetta medica e prestazioni sanitarie al SSN.</div></div>
          </div>
          <div className="g-wcard">
            <span className="g-wcard-emoji">{"\u26A0\uFE0F"}</span>
            <div><div className="g-wcard-title">Andare al CAF all&apos;ultimo momento</div><div className="g-wcard-desc">A settembre i CAF sono sommersi. Le code sono lunghe, gli operatori sotto pressione, gli errori pi&ugrave; probabili. Vai tra maggio e giugno: zero stress, rimborso anticipato, e tempo per correggere eventuali errori.</div></div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CALENDARIO                                  */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="calendario">
        <div className="g-eyebrow">Scadenze</div>
        <h2>Il calendario 2026</h2>
        <p className="g-sub">Le date da segnare</p>
        <div className="g-timeline">
          <div className="g-tl g-tl--on">
            <div className="g-tl-dot" />
            <div className="g-tl-date">Entro il 16 marzo</div>
            <div className="g-tl-title">Il datore ti consegna la CU</div>
            <div className="g-tl-desc">Certificazione Unica 2026 relativa ai redditi 2025. Se non arriva, sollecita.</div>
          </div>
          <div className="g-tl">
            <div className="g-tl-dot" />
            <div className="g-tl-date">30 aprile</div>
            <div className="g-tl-title">Online la precompilata</div>
            <div className="g-tl-desc">Accedi con SPID su agenziaentrate.gov.it e controlla i dati pre-inseriti.</div>
          </div>
          <div className="g-tl">
            <div className="g-tl-dot" />
            <div className="g-tl-date">Maggio &ndash; Giugno</div>
            <div className="g-tl-title">Il periodo ideale per presentare il 730</div>
            <div className="g-tl-desc">Meno code al CAF, rimborso gi&agrave; nella busta paga di luglio, tempo per eventuali correzioni.</div>
          </div>
          <div className="g-tl">
            <div className="g-tl-dot" />
            <div className="g-tl-date">Luglio &ndash; Agosto</div>
            <div className="g-tl-title">Rimborso in busta paga</div>
            <div className="g-tl-desc">Se hai presentato il 730 entro giugno. Pensionati: con la pensione di agosto o settembre.</div>
          </div>
          <div className="g-tl">
            <div className="g-tl-dot" />
            <div className="g-tl-date">30 settembre 2026</div>
            <div className="g-tl-title">Scadenza ultima per l&apos;invio</div>
            <div className="g-tl-desc">Dopo questa data il 730 non si pu&ograve; pi&ugrave; presentare. Serve il Modello Redditi PF (pi&ugrave; complicato).</div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CALCOLATORE                                 */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--gray" id="calcolatore">
        <div className="g-eyebrow">Stimatore interattivo</div>
        <h2>Calcola il tuo rimborso</h2>
        <p className="g-sub">Una stima indicativa basata sulle detrazioni principali. Per i numeri esatti serve la dichiarazione completa.</p>
        <Calculator730 />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* ESEMPIO PRATICO                             */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" id="esempio">
        <div className="g-eyebrow">Caso reale</div>
        <h2>Maria fa il 730 per la prima volta</h2>
        <p className="g-sub">26 anni, impiegata a Torino, 22.000&euro; lordi annui. Non ha mai fatto il 730.</p>
        <div className="g-flow">
          {[
            ["\uD83D\uDCC4", "Marzo: raccoglie i documenti", "Riceve la CU via email. Raccoglie: ricevute dentista (320\u20ac), abbonamento GTT annuale (350\u20ac), contratto d'affitto (500\u20ac/mese). Mette tutto in una cartellina."],
            ["\uD83D\uDCBB", "Maggio: apre la precompilata", "Accede su agenziaentrate.gov.it con lo SPID. Il dentista risulta gi\u00e0 inserito (la struttura aveva trasmesso i dati). Manca l'abbonamento GTT: lo aggiunge manualmente."],
            ["\uD83D\uDD0D", "Controlla ogni voce", "Verifica l'affitto: c'\u00e8, il proprietario l'aveva registrato. Spese mediche: 320\u20ac \u2212 129\u20ac franchigia = 191\u20ac \u00d7 19% = 36\u20ac. Affitto under 31: 991\u20ac. Trasporti: 350\u20ac \u00d7 19% = 66\u20ac. Totale: 1.093\u20ac."],
            ["\u2705", "Invia e riceve il rimborso", "Clicca 'Invia'. Nella busta paga di luglio trova 1.093\u20ac in pi\u00f9. Il tutto le \u00e8 costato zero euro e circa un'ora e mezza."],
          ].map((s, i) => (
            <div key={i}>
              <div className="g-step">
                <div className="g-step-icon">{s[0]}</div>
                <div className="g-step-text"><strong>{s[1]}</strong><span>{s[2]}</span></div>
              </div>
              {i < 3 && <div className="g-step-line" />}
            </div>
          ))}
        </div>
        <div className="g-box g-box--money">
          <div className="g-box-title">{"\uD83D\uDCB6"} Morale della storia</div>
          <p>Maria per 4 anni non ha fatto il 730. Ha perso circa <strong>4.000&euro;</strong>. Quest&apos;anno ci ha messo un&apos;ora e mezza e ha recuperato 1.093&euro;. Il prossimo anno sar&agrave; ancora pi&ugrave; veloce perch&eacute; sa gi&agrave; cosa fare.</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* SE SEI IN RITARDO                           */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--warm" id="ritardo">
        <div className="g-eyebrow">Ritardi e sanzioni</div>
        <h2>Se hai saltato la scadenza</h2>
        <p className="g-sub">La scadenza &egrave; il 30 settembre, ma ci sono rimedi per ogni situazione.</p>
        <GuideExpand
          visual={
            <div className="g-warnings">
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Entro il 25 ottobre</div><div className="g-wcard-desc">Puoi presentare un 730 integrativo se il nuovo &egrave; pi&ugrave; favorevole per te. Nessuna sanzione.</div></div></div>
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Entro il 30 novembre</div><div className="g-wcard-desc">Puoi presentare un Modello Redditi correttivo. Pi&ugrave; complicato del 730, meglio farlo con l&apos;aiuto di un CAF o commercialista.</div></div></div>
              <div className="g-wcard"><span className="g-wcard-emoji">{"\uD83D\uDCC5"}</span><div><div className="g-wcard-title">Entro 90 giorni dalla scadenza</div><div className="g-wcard-desc">Dichiarazione tardiva. La sanzione &egrave; ridotta: 25&euro; se non devi pagare nulla, oppure dall&apos;1% al 10% dell&apos;imposta dovuta.</div></div></div>
            </div>
          }
          detail={
            <div className="g-box g-box--tip">
              <div className="g-box-title">{"\uD83D\uDCA1"} Hai dimenticato di fare il 730 negli anni passati?</div>
              <p>Puoi presentare una dichiarazione integrativa entro 5 anni dall&apos;anno di presentazione originale. Se ti spettava un rimborso, puoi ancora recuperarlo. Se dovevi pagare, le sanzioni sono ridotte se ti presenti spontaneamente: si chiama &quot;ravvedimento operoso&quot; (art. 13 del D.Lgs. 472/1997) e pi&ugrave; ti sbrighi, meno paghi. In ogni caso, &egrave; sempre meglio regolarizzarsi che ignorare il problema.</p>
            </div>
          }
        />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* FAQ                                         */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--dark" id="faq">
        <div className="g-eyebrow">FAQ</div>
        <h2>Domande frequenti</h2>
        <FAQ items={faqItems} />
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CTA NEWSLETTER                              */}
      {/* ════════════════════════════════════════════ */}
      <section className="g-sec g-sec--white" style={{ paddingBottom: 48 }}>
        <div className="g-cta">
          <div style={{ fontSize: 28, marginBottom: 8 }}>{"\uD83D\uDCEC"}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--t1)', marginBottom: 6 }}>Non perderti la scadenza del 730</div>
          <div style={{ fontSize: 13, color: 'var(--t3)', marginBottom: 16 }}>Ti mandiamo un promemoria a maggio con tutto quello che ti serve per fare il 730. Niente spam, solo informazioni utili.</div>
        </div>
        <BrevoForm pageName="730" />
      </section>

      <Footer />
    </div>
  );
}
