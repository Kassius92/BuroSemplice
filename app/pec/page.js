import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'PEC 2026: Cos\u2019\u00e8, Come Attivarla, Costi e Quando \u00e8 Obbligatoria',
  description: 'PEC 2026: cos\u2019\u00e8 la posta elettronica certificata, come attivarla, quanto costa, quando \u00e8 obbligatoria e come usarla come domicilio digitale. Guida gratuita.',
  keywords: ["PEC", "posta elettronica certificata", "PEC 2026", "come attivare PEC", "PEC obbligatoria", "PEC gratuita", "domicilio digitale", "INAD", "PEC costo", "PEC Poste"],
  alternates: { canonical: 'https://zeroburocrazia.it/pec' },
  openGraph: {
    type: 'article',
    title: 'PEC 2026: Cos\u2019\u00e8, Come Attivarla, Costi e Quando \u00e8 Obbligatoria',
    description: 'PEC 2026: come attivare la posta certificata, costi, obbligo e domicilio digitale. Guida gratuita.',
    url: 'https://zeroburocrazia.it/pec',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogpec.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpec.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'obbligo', label: 'Chi \u00e8 obbligato' },
  { id: 'come', label: 'Come attivarla' },
  { id: 'domicilio', label: 'Domicilio digitale', bh: true },
  { id: 'quando', label: 'Quando serve' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto costa una PEC?", a: "Dipende dal provider. Si parte da circa <strong>5-7\u20ac/anno</strong> per i piani base (es. Poste Italiane a 5,50\u20ac+IVA). Esistono anche soluzioni gratuite con formula &quot;pay per email&quot;: non paghi l\u2019abbonamento ma paghi ogni singola PEC inviata. Per un uso sporadico, pu\u00f2 bastare." },
  { q: "Un privato cittadino \u00e8 obbligato ad avere la PEC?", a: "<strong>No.</strong> La PEC \u00e8 obbligatoria solo per imprese, professionisti iscritti ad albi e PA. Per i privati \u00e8 facoltativa ma molto utile: puoi inviare raccomandate digitali, comunicare con la PA e registrare il tuo domicilio digitale su INAD." },
  { q: "Posso usare la PEC per inviare a un\u2019email normale?", a: "S\u00ec, puoi inviare da PEC a email normale, ma <strong>perdi il valore legale</strong>. La certificazione funziona solo quando sia il mittente che il destinatario usano la PEC. Se invii a un\u2019email normale, hai solo la ricevuta di accettazione, non quella di consegna." },
  { q: "Cos\u2019\u00e8 il domicilio digitale INAD?", a: "\u00c8 l\u2019indirizzo PEC che registri volontariamente sul portale <strong>INAD</strong> (Indice Nazionale dei Domicili Digitali). Una volta registrato, la PA pu\u00f2 inviarti comunicazioni ufficiali l\u00ec invece che per posta cartacea. \u00c8 gratuito, ma devi gi\u00e0 avere una PEC." },
  { q: "Quanto dura una PEC?", a: "L\u2019abbonamento \u00e8 <strong>annuale</strong>. Se non lo rinnovi, la casella viene disattivata e dopo un periodo perdi i messaggi. Alcuni provider offrono anche piani biennali o triennali con sconto." },
  { q: "La PEC sostituisce la raccomandata?", a: "<strong>S\u00ec, ha lo stesso valore legale.</strong> Una PEC inviata da casella PEC a casella PEC equivale a una raccomandata con ricevuta di ritorno. Con un vantaggio: \u00e8 istantanea e costa molto meno (pochi centesimi vs 5-8\u20ac di una raccomandata)." },
  { q: "Come faccio a trovare la PEC di un\u2019azienda o di un professionista?", a: "Cerca su <strong>INI-PEC</strong> (inipec.gov.it): \u00e8 l\u2019elenco ufficiale di tutte le PEC di imprese e professionisti italiani. Basta inserire nome, codice fiscale o partita IVA." },
  { q: "Cosa succede se non leggo una PEC ricevuta?", a: "La PEC si considera <strong>consegnata nel momento in cui arriva</strong> nella tua casella, anche se non la leggi. \u00c8 come una raccomandata depositata in cassetta: il postino l\u2019ha consegnata, che tu la apra o no. Per questo \u00e8 importante controllare la PEC regolarmente." },
];

export default function PaginaPec() {
  const schemas = [
    articleSchema({
      title: 'PEC 2026: cos\u2019\u00e8, come attivarla, costi e quando \u00e8 obbligatoria',
      description: 'Guida completa alla PEC: come attivarla, quanto costa, chi \u00e8 obbligato e come usarla come domicilio digitale.',
      url: '/pec',
      image: 'ogpec.png',
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
            <h1>PEC: <em>Posta Certificata</em></h1>
            <p className="hero-sub">Cos&apos;&egrave; la PEC, come attivarla, quanto costa, quando &egrave; obbligatoria e come usarla come domicilio digitale per ricevere comunicazioni dalla PA.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 10 min di lettura</span>
              <span className="pill pill-o">✉️ Da ~5&euro;/anno</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> AgID &middot; CAD (D.Lgs. 82/2005) &middot; DPR 68/2005 &middot; INAD</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">~5&euro;</div><div className="hl">costo annuo<br/>piani base</div></div>
            <div className="hstat"><div className="hn">= R/R</div><div className="hl">stesso valore<br/>di una raccomandata</div></div>
            <div className="hstat"><div className="hn">5 min</div><div className="hl">per attivarla<br/>online con SPID</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/spid" className="ps">🪪 Faccio lo SPID</a>
              <a href="/cie" className="ps">🪪 Carta d&apos;identit&agrave; (CIE)</a>
              <a href="/piva" className="ps">💼 Apro partita IVA</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata" target="_blank" rel="noopener noreferrer" className="ps">🏛 AgID &mdash; PEC</a>
              <a href="https://www.inipec.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🔍 Cerca PEC (INI-PEC)</a>
              <a href="https://domiciliodigitale.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 INAD domicilio</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">✉️</div><div className="sn">PEC</div><div className="sl">email con valore legale di raccomandata</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">~5&euro;/anno</div><div className="sl">piani base, esistono opzioni gratuite</div></div>
                <div className="sc r d3"><div className="si">⏱</div><div className="sn">5 minuti</div><div className="sl">attivazione online con SPID o CIE</div></div>
                <div className="sc r d1"><div className="si">⚖️</div><div className="sn">Obbligatoria</div><div className="sl">per imprese, professionisti e PA</div></div>
                <div className="sc bl-bg r d2"><div className="si">📋</div><div className="sn">INAD</div><div className="sl">registra il tuo domicilio digitale</div></div>
                <div className="sc r d3"><div className="si">🔍</div><div className="sn">INI-PEC</div><div className="sl">cerca la PEC di qualsiasi azienda</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la PEC</h2>
            <p>La PEC &egrave; un&apos;email speciale che ha lo <strong>stesso valore legale di una raccomandata con ricevuta di ritorno</strong>. Quando invii una PEC, ricevi una <Tip t="Un documento digitale che certifica che il tuo messaggio &egrave; stato preso in carico dal gestore. Contiene data, ora e riferimento al messaggio.">ricevuta di accettazione</Tip> (il tuo gestore conferma l&apos;invio) e una <Tip t="Certifica che il messaggio &egrave; arrivato nella casella PEC del destinatario. Ha valore legale: prova che il destinatario ha ricevuto la comunicazione.">ricevuta di consegna</Tip> (il gestore del destinatario conferma che &egrave; arrivata). Queste ricevute sono prove legali opponibili in tribunale.</p>
            <p>In pratica: invece di andare in posta, fare la fila, pagare 5-8&euro; e aspettare giorni, mandi un&apos;email certificata in 30 secondi per pochi centesimi. E hai la prova legale che &egrave; arrivata.</p>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>PEC</strong> &mdash; Posta Elettronica Certificata. Un sistema di email con valore legale, regolato dal DPR 68/2005.</p>
              <p><strong>Gestore PEC</strong> &mdash; l&apos;azienda autorizzata da AgID a fornire il servizio. Sono i &quot;provider&quot; certificati: Poste, Aruba, Legalmail, Register.it, ecc.</p>
              <p><strong>AgID</strong> &mdash; Agenzia per l&apos;Italia Digitale. L&apos;ente che autorizza e vigila sui gestori PEC.</p>
              <p><strong>INAD</strong> &mdash; Indice Nazionale dei Domicili Digitali. Il registro dove puoi iscrivere la tua PEC come &quot;indirizzo ufficiale&quot; per ricevere comunicazioni dalla PA.</p>
              <p><strong>INI-PEC</strong> &mdash; Indice Nazionale degli Indirizzi PEC. L&apos;elenco pubblico dove trovi la PEC di qualsiasi azienda o professionista italiano.</p>
              <p><strong>Domicilio digitale</strong> &mdash; l&apos;indirizzo PEC registrato su INAD dove la PA ti invia le comunicazioni ufficiali al posto della posta cartacea.</p>
            </div>
          </div>

          {/* CHI È OBBLIGATO */}
          <div className="sec r" id="obbligo">
            <div className="sec-tag">Obblighi</div>
            <h2>Chi &egrave; obbligato ad avere la PEC</h2>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>OBBLIGO PEC PER CATEGORIA</div>
              <div className="db-row"><span>Societ&agrave; e ditte individuali</span><span>Obbligatoria &mdash; va comunicata al Registro Imprese</span></div>
              <div className="db-row"><span>Professionisti con albo</span><span>Obbligatoria &mdash; avvocati, commercialisti, ingegneri, ecc.</span></div>
              <div className="db-row"><span>Amministratori di societ&agrave;</span><span>Obbligatoria dal 2025 &mdash; PEC personale al Registro Imprese</span></div>
              <div className="db-row"><span>Pubbliche Amministrazioni</span><span>Obbligatoria &mdash; per ogni registro di protocollo</span></div>
              <div className="db-row"><span>P.IVA forfettari/minimi</span><span>Non obbligatoria ma fortemente consigliata</span></div>
              <div className="db-row db-total"><span>Privati cittadini</span><span>Facoltativa &mdash; ma utilissima</span></div>
            </div>
          </div>

          {/* COME ATTIVARLA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come attivare una PEC</h2>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Scegli il gestore</div><p>Vai sul sito di uno dei gestori autorizzati da AgID. I pi&ugrave; usati: <strong>Poste Italiane</strong> (da 5,50&euro;+IVA/anno), <strong>Aruba</strong> (da 7,90&euro;+IVA/anno), <strong>Register.it</strong> (6 mesi gratis), <strong>Legalmail</strong>. Per un uso base e sporadico, i piani economici vanno benissimo.</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Registrati e identificati</div><p>Compila il modulo con i tuoi dati personali. La maggior parte dei gestori ti identifica tramite <strong>SPID o CIE</strong> &mdash; in pochi minuti la casella &egrave; attiva. Alcuni accettano anche la firma digitale o l&apos;identificazione in ufficio postale.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Paga e attiva</div><p>Paga il canone annuale (carta di credito, PayPal o bonifico). Riceverai le <strong>credenziali di accesso</strong> via email: username e password per la webmail. La casella &egrave; subito attiva.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Registra su INAD (facoltativo ma consigliato)</div><p>Vai su <strong>domiciliodigitale.gov.it</strong>, accedi con SPID o CIE, e registra il tuo indirizzo PEC come domicilio digitale. Da quel momento la PA ti invier&agrave; le comunicazioni ufficiali sulla PEC invece che per posta.</p></div></div>
            </div>
          </div>

          {/* DOMICILIO DIGITALE */}
          <div className="sec bh r" id="domicilio">
            <div className="sec-tag">Novit&agrave;</div>
            <h2>Domicilio digitale: cos&apos;&egrave; e perch&eacute; registrarlo</h2>
            <p>Dal 2023, ogni cittadino pu&ograve; registrare un <Tip t="L'indirizzo PEC che scegli come punto di contatto ufficiale con la Pubblica Amministrazione. Una volta registrato, la PA ti invia comunicazioni l&igrave; invece che per lettera.">domicilio digitale</Tip> sul portale INAD. &Egrave; come dare allo Stato il tuo &quot;indirizzo email ufficiale&quot;. Vantaggi:</p>
            <div className="ib tip r"><div className="ib-t">✅ Perch&eacute; conviene</div>
              <p><strong>Ricevi tutto subito</strong> &mdash; niente pi&ugrave; raccomandate perse, lettere arrivate quando eri in vacanza, o &quot;non mi &egrave; mai arrivata&quot;. Le comunicazioni della PA (cartelle, avvisi, convocazioni) arrivano istantaneamente nella tua PEC.</p>
              <p><strong>&Egrave; gratuito</strong> &mdash; la registrazione su INAD &egrave; gratis. Devi solo avere una PEC attiva.</p>
              <p><strong>Controllo totale</strong> &mdash; sai sempre cosa ti arriva e quando. Niente pi&ugrave; &quot;la raccomandata &egrave; stata notificata al vecchio indirizzo&quot;.</p>
            </div>
            <div className="ib warn r"><div className="ib-t">⚠️ Attenzione: la PEC si considera consegnata anche se non la leggi</div>
              <p>Una volta che una PEC arriva nella tua casella, <strong>&egrave; legalmente consegnata</strong>. Non vale dire &quot;non l&apos;ho vista&quot;. Se registri il domicilio digitale, devi controllare la PEC regolarmente &mdash; almeno una volta a settimana.</p>
            </div>
          </div>

          {/* QUANDO SERVE */}
          <div className="sec r" id="quando">
            <div className="sec-tag">Quando usarla</div>
            <h2>Quando serve la PEC nella vita reale</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Disdette e recessi</strong> &mdash; disdire contratti (telefono, palestra, abbonamenti) con valore legale, senza raccomandata cartacea.</div>
              <div className="gl-item"><strong>Comunicazioni al datore di lavoro</strong> &mdash; dimissioni, richieste formali, contestazioni. La PEC certifica data e ricezione.</div>
              <div className="gl-item"><strong>Corrispondenza con la PA</strong> &mdash; Comuni, INPS, Agenzia Entrate, ASL. Molti enti rispondono pi&ugrave; velocemente via PEC.</div>
              <div className="gl-item"><strong>Concorsi pubblici</strong> &mdash; molti bandi richiedono l&apos;invio della domanda via PEC.</div>
              <div className="gl-item"><strong>Invio fatture e documenti</strong> &mdash; per professionisti e aziende, &egrave; il canale ufficiale.</div>
              <div className="gl-item"><strong>Messa in mora</strong> &mdash; se qualcuno ti deve dei soldi, la PEC &egrave; il modo pi&ugrave; veloce e provato per sollecitare il pagamento.</div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Davide disdice il contratto telefonico</h2>
            <p>Davide vuole cambiare operatore telefonico. Invece di inviare una raccomandata (costo ~6&euro;, tempi 3-5 giorni, fila in posta), usa la PEC.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>RACCOMANDATA vs PEC</div>
              <div className="db-row"><span>Costo raccomandata</span><span>~6&euro;</span></div>
              <div className="db-row"><span>Costo PEC</span><span>~0,50&euro; (o inclusa nell&apos;abbonamento)</span></div>
              <div className="db-row"><span>Tempo raccomandata</span><span>3-5 giorni lavorativi</span></div>
              <div className="db-row"><span>Tempo PEC</span><span>Istantaneo</span></div>
              <div className="db-row"><span>Fila in posta?</span><span>Raccomandata: s&igrave; &middot; PEC: no</span></div>
              <div className="db-row"><span>Valore legale</span><span>Identico</span></div>
              <div className="db-row db-total"><span>Risparmio di Davide</span><span>~5,50&euro; + 30 minuti di tempo</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>COME HA TROVATO LA PEC DELL&apos;OPERATORE</div>
              <div className="db-row"><span>Passo 1</span><span>Va su inipec.gov.it</span></div>
              <div className="db-row"><span>Passo 2</span><span>Cerca il nome dell&apos;operatore</span></div>
              <div className="db-row"><span>Passo 3</span><span>Copia l&apos;indirizzo PEC ufficiale</span></div>
              <div className="db-row"><span>Passo 4</span><span>Invia la disdetta dalla sua PEC</span></div>
              <div className="db-row db-total"><span>Ricevuta di consegna</span><span>Arriva in 2 minuti &mdash; prova legale ✓</span></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Non controllare la PEC per mesi</div><p>La PEC si considera consegnata quando arriva, non quando la leggi. Se ti arriva una cartella esattoriale e non la vedi per 3 mesi, i termini per impugnare scadono comunque. <strong>Controlla almeno una volta a settimana.</strong></p></div>
            <div className="ib warn r"><div className="ib-t">❌ Inviare PEC a email normali pensando di avere valore legale</div><p>Il valore legale pieno c&apos;&egrave; solo quando <strong>entrambe le caselle sono PEC</strong>. Se invii da PEC a email normale, hai solo la prova dell&apos;invio, non della consegna.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Lasciare scadere l&apos;abbonamento senza salvare i messaggi</div><p>Se non rinnovi, dopo un periodo la casella viene <strong>disattivata e i messaggi cancellati</strong>. Se hai PEC importanti (contratti, disdette, comunicazioni legali), scaricale prima della scadenza.</p></div>
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
              <a href="/spid" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per attivare la PEC con molti provider.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cie" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Carta d&apos;identit&agrave; (CIE)</div><div className="rc-d">Alternativa allo SPID per l&apos;attivazione.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/piva" className="rc"><span className="rc-e">💼</span><div className="rc-t">Apro partita IVA</div><div className="rc-d">La PEC &egrave; obbligatoria per molti professionisti.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">AgID &mdash; PEC</div><div className="sbtool-d">Regole e gestori autorizzati</div></div></a>
            <a href="https://www.inipec.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🔍</span><div><div className="sbtool-n">Cerca PEC (INI-PEC)</div><div className="sbtool-d">Trova la PEC di aziende e professionisti</div></div></a>
            <a href="https://domiciliodigitale.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">INAD domicilio</div><div className="sbtool-d">Registra il tuo domicilio digitale</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/spid" className="sbguide">🪪 Faccio lo SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/cie" className="sbguide">🪪 Carta d&apos;identit&agrave; (CIE)<span className="sbg-ar">&rarr;</span></a>
            <a href="/piva" className="sbguide">💼 Apro partita IVA<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="pec" />
      <Footer />
    </>
    </div>
  );
}
