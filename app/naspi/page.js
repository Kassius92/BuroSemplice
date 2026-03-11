import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizNaspi from '@/components/QuizNaspi';
import CalcNaspi from '@/components/CalcNaspi';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda',
  description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.',
  keywords: ["NASpI", "NASpI 2026", "disoccupazione", "indennità disoccupazione", "come richiedere NASpI", "NASpI importo", "NASpI durata", "NASpI requisiti", "NASpI anticipata", "licenziamento"],
  alternates: { canonical: 'https://zeroburocrazia.it/naspi' },
  openGraph: {
    title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda',
    description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/naspi',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'NASpI 2026: Requisiti, Importo, Durata e Come Fare Domanda', description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni e novità sulla NASpI anticipata. Guida gratuita aggiornata.', images: ['https://zeroburocrazia.it/ognaspi.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'requisiti', label: 'Requisiti' },
  { id: 'quanto-spetta', label: 'Quanto spetta' },
  { id: 'domanda', label: 'Come fare domanda' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Ho dato le dimissioni: ho diritto alla NASpI?", a: "<strong>Dipende.</strong> Dimissioni volontarie normali: no. Dimissioni per <strong>giusta causa</strong> (stipendio non pagato, mobbing, molestie): s\u00EC. Dimissioni durante maternit\u00E0/paternit\u00E0: s\u00EC. In tutti gli altri casi, niente." },
  { q: "Quanto tempo ho per fare domanda?", a: "<strong>68 giorni</strong> dalla cessazione del rapporto. Se superi il termine, perdi tutto. Il consiglio: fai domanda il prima possibile \u2014 se la presenti entro 8 giorni, la NASpI parte dall\u20198\u00B0 giorno. Se aspetti, perdi giorni di pagamento." },
  { q: "Quanto ci mette l'INPS a pagare?", a: "Il primo pagamento arriva in <strong>30-45 giorni</strong> dalla domanda. I successivi sono mensili. Controlli lo stato su MyINPS." },
  { q: "La NASpI si paga l'IRPEF?", a: "<strong>S\u00EC.</strong> La NASpI \u00E8 tassata come reddito da lavoro dipendente. L\u2019INPS trattiene l\u2019IRPEF prima di pagarti. A fine anno ricevi la CU dall\u2019INPS." },
  { q: "Posso lavorare mentre prendo la NASpI?", a: "<strong>S\u00EC, con limiti.</strong> Lavoro dipendente: reddito annuo massimo 8.500\u20AC. Autonomo/P.IVA: massimo 5.500\u20AC. In entrambi i casi devi comunicarlo all\u2019INPS con il NASpI-COM entro 30 giorni, altrimenti perdi tutto." },
  { q: "Se trovo lavoro e poi lo riperdo?", a: "Contratto nuovo dura meno di 6 mesi: la NASpI precedente viene <strong>sospesa</strong> e poi riprende. Pi\u00F9 di 6 mesi: puoi fare una nuova domanda. Dal 2025, se ti eri dimesso dal lavoro precedente, devi aver lavorato almeno 13 settimane nel nuovo rapporto." },
  { q: "La NASpI conta per la pensione?", a: "<strong>S\u00EC.</strong> Il periodo coperto dalla NASpI viene accreditato con contribuzione figurativa \u2014 gratis, automaticamente. Questi contributi valgono per la pensione." },
  { q: "Quanto dura la NASpI?", a: "La met\u00E0 delle settimane lavorate negli ultimi 4 anni. Se hai lavorato 4 anni pieni (208 settimane), dura il massimo: 24 mesi. Se hai lavorato 1 anno, dura 6 mesi. Le settimane gi\u00E0 usate per una NASpI precedente non contano." },
  { q: "Cos'\u00E8 la NASpI anticipata?", a: "Se vuoi aprire un\u2019attivit\u00E0 autonoma, puoi chiedere di ricevere tutta la NASpI residua in anticipo come capitale. Dal 2026: 70% subito, 30% dopo. Attenzione: se chiudi l\u2019attivit\u00E0 entro 6 mesi, l\u2019INPS pu\u00F2 chiederti di restituire i soldi." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'NASpI 2026: requisiti, importo, durata e come fare domanda', description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS e novità sulla NASpI anticipata.', url: '/naspi', image: 'ognaspi.png', datePublished: '2026-03-07', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-lavoro">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCBC'} Lavoro</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Ho perso il <em>lavoro</em></h1>
            <p className="hero-sub">NASpI: la disoccupazione spiegata semplice. Quanto ti spetta, come fare domanda, le scadenze da non perdere e gli errori che ti fanno perdere soldi.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 10 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · Circolare n. 4/2026 · Legge di Bilancio 2026 · D.Lgs. 22/2015</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">1.584€</div><div className="hl">massimo mensile<br/>lordo 2026</div></div>
            <div className="hstat"><div className="hn">68gg</div><div className="hl">tempo massimo<br/>per fare domanda</div></div>
            <div className="hstat"><div className="hn">24</div><div className="hl">mesi di durata<br/>massima</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/dimissioni" className="ps">✍️ Dimissioni</a>
              <a href="/tfr" className="ps">💰 TFR</a>
              <span className="ps ps-soon">💼 Primo lavoro <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="related r">
            <h2>Link utili</h2>
            <div className="rg">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.naspi-702.naspi.html" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">🏛</span><div className="rc-t">INPS — Domanda NASpI</div><div className="rc-d">Presenta la domanda online</div><span className="rc-ar">→</span></a>
              <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.consultazione-domande-di-disoccupazione-702.consultazione-domande-di-disoccupazione.html" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">📋</span><div className="rc-t">INPS — Stato domanda</div><div className="rc-d">Controlla lo stato della pratica</div><span className="rc-ar">→</span></a>
              <a href="https://www.anpal.gov.it/" target="_blank" rel="noopener noreferrer" className="rc"><span className="rc-e">💼</span><div className="rc-t">ANPAL</div><div className="rc-d">Agenzia Nazionale Politiche Attive Lavoro</div><span className="rc-ar">→</span></a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">Fino a 1.584€</div><div className="sl">lordi al mese (2026)</div></div>
                <div className="sc sg r d2"><div className="si">{'\u23F1'}</div><div className="sn">68 giorni</div><div className="sl">tempo massimo per la domanda</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">Max 24 mesi</div><div className="sl">di durata (met&agrave; settimane lavorate)</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDCF1'}</div><div className="sn">Online</div><div className="sl">domanda su INPS con SPID/CIE</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83D\uDCC9'}</div><div className="sn">-3%/mese</div><div className="sl">riduzione dal 6° mese</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83C\uDFDB'}</div><div className="sn">Gratis</div><div className="sl">anche tramite patronato</div></div>
              </div>
            </div>
            <QuizNaspi />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la NASpI (spiegato semplice)</h2>

            <p>Hai perso il lavoro e non &egrave; stata colpa tua? Lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione. Si chiama <strong>NASpI</strong> (Nuova Assicurazione Sociale per l&apos;Impiego) — in parole povere, &egrave; la disoccupazione.</p>

            <p>Non &egrave; un regalo: &egrave; un&apos;assicurazione che <strong>hai gi&agrave; pagato</strong> con i contributi versati durante il lavoro. Se hai lavorato come dipendente e hai versato contributi, hai diritto a riaverli indietro quando ne hai bisogno.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>NASpI</strong> — L&apos;assegno di disoccupazione per chi perde il lavoro involontariamente. L&apos;importo dipende da quanto guadagnavi, dura in proporzione a quanto hai lavorato (max 24 mesi).</div>
              <div className="gl-item r d2"><strong>Disoccupazione involontaria</strong> — Hai perso il lavoro senza volerlo: licenziamento, fine contratto a termine, dimissioni per <Tip t="Hai diritto a dimetterti 'per giusta causa' quando il datore viola gravemente i suoi obblighi: non ti paga lo stipendio, ti fa mobbing, ti trasferisce senza motivo. In questi casi hai diritto alla NASpI come se fossi stato licenziato.">giusta causa</Tip>. Le dimissioni volontarie normali NON danno diritto alla NASpI.</div>
              <div className="gl-item r d3"><strong>D&eacute;calage</strong> — La riduzione progressiva dell&apos;importo: dal 6° mese la NASpI cala del 3% ogni mese. I primi mesi sono i pi&ugrave; &quot;ricchi&quot;.</div>
              <div className="gl-item r d4"><strong>NASpI-COM</strong> — Il modulo che <strong>devi</strong> inviare all&apos;INPS se inizi qualsiasi lavoretto mentre prendi la NASpI. Se non lo fai entro 30 giorni, perdi tutto.</div>
              <div className="gl-item r d1"><strong>Contribuzione figurativa</strong> — Durante la NASpI, l&apos;INPS ti accredita i contributi per la pensione gratis. Non perdi nulla ai fini pensionistici.</div>
              <div className="gl-item r d2"><strong>NASpI anticipata</strong> — Se vuoi aprire un&apos;attivit&agrave; in proprio, puoi chiedere di ricevere tutta la NASpI residua in una volta sola come capitale iniziale. Dal 2026: 70% subito, 30% dopo.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Non &egrave; solo per i licenziati</div>
              <p>La NASpI spetta anche a chi ha un <strong>contratto a termine scaduto</strong>, a chi si &egrave; dimesso per <Tip t="Stipendio non pagato, mobbing, molestie, trasferimento immotivato. In questi casi le dimissioni sono 'per giusta causa' e danno diritto alla NASpI.">giusta causa</Tip>, e alle <strong>mamme/pap&agrave; che si dimettono</strong> durante il primo anno di vita del figlio.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi ne ha diritto</div>
            <h2>Requisiti per la NASpI nel 2026</h2>
            <p>Per avere la NASpI devi soddisfare <strong>tutti e tre</strong> questi requisiti:</p>

            <div className="icgrid r">
              <div className="ic r d1"><div className="ic-n">1. Disoccupazione involontaria</div><div className="ic-d">Hai perso il lavoro e non &egrave; stata una tua scelta. Rientrano: licenziamento, fine contratto a termine, dimissioni per giusta causa, risoluzione consensuale in sede protetta.</div></div>
              <div className="ic r d2"><div className="ic-n">2. Almeno 13 settimane di contributi</div><div className="ic-d">Devi aver versato almeno 13 settimane di contributi nei 4 anni prima della cessazione. Circa 3 mesi di lavoro dipendente.</div></div>
              <div className="ic r d3"><div className="ic-n">3. Domanda entro 68 giorni</div><div className="ic-d">Devi fare domanda all&apos;INPS entro 68 giorni dalla fine del rapporto. Dopo, il diritto decade — niente proroghe.</div></div>
            </div>

            <div className="ib warn r d2">
              <div className="ib-t">{'\u26A0\uFE0F'} Dimissioni volontarie = niente NASpI</div>
              <p>Se ti sei dimesso di tua volont&agrave; (senza giusta causa), <strong>non hai diritto alla NASpI</strong>. Dal 2025, se ti dimetti e poi trovi un nuovo lavoro che perdi involontariamente, devi aver lavorato <strong>almeno 13 settimane nel nuovo rapporto</strong> per avere diritto alla NASpI. E l&apos;assenza ingiustificata prolungata &egrave; ora equiparata a dimissioni volontarie.</p>
            </div>

            <h3>Chi ha diritto, in dettaglio</h3>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Situazione</th><th>NASpI?</th></tr></thead>
                <tbody>
                  <tr><td>Licenziamento (qualsiasi motivo)</td><td className="tg">{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Fine contratto a tempo determinato</td><td className="tg">{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Dimissioni per giusta causa</td><td className="tg">{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Dimissioni durante maternit&agrave;/paternit&agrave;</td><td className="tg">{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Risoluzione consensuale (sede protetta)</td><td className="tg">{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Dimissioni volontarie</td><td className="tr">{'\u274C'} No</td></tr>
                  <tr><td>Assenza ingiustificata prolungata</td><td className="tr">{'\u274C'} No</td></tr>
                  <tr><td>Dipendenti PA a tempo indeterminato</td><td className="tr">{'\u274C'} No</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* QUANTO SPETTA */}
          <div className="sec r" id="quanto-spetta">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto spetta di NASpI nel 2026</h2>
            <p>L&apos;importo si calcola sulla <strong>retribuzione media <Tip t="L'importo su cui si calcolano i contributi. Non è il netto in busta: è più alto del netto ma più basso del lordo totale.">imponibile</Tip> degli ultimi 4 anni</strong>. Non &egrave; il tuo ultimo stipendio — &egrave; una media di tutto quello che hai guadagnato come dipendente nei 4 anni prima di perdere il lavoro.</p>

            <h3>Il calcolo</h3>
            <div className="icgrid r">
              <div className="ic r d1"><div className="ic-n">Se la media &egrave; {'\u2264'} 1.456,72€/mese</div><div className="ic-d">La NASpI &egrave; il <strong>75%</strong> della retribuzione media. Esempio: media 1.200€ {'\u2192'} NASpI 900€ lordi.</div></div>
              <div className="ic r d2"><div className="ic-n">Se la media &egrave; &gt; 1.456,72€/mese</div><div className="ic-d">NASpI = 75% di 1.456,72€ (cio&egrave; 1.092,54€) <strong>+</strong> 25% della parte che supera la soglia. Esempio: media 1.800€ {'\u2192'} 1.092,54 + 85,82 = 1.178,36€ lordi.</div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il tetto massimo 2026</div>
              <p>Qualunque sia il tuo stipendio, la NASpI non pu&ograve; superare <strong>1.584,70€ lordi al mese</strong> (circa 1.200-1.250€ netti). Dal 6° mese cala del 3% ogni mese (<Tip t="La riduzione progressiva dell'importo NASpI. Dal 6° mese (151° giorno) l'importo scende del 3% al mese. Se hai più di 55 anni, parte dall'8° mese.">d&eacute;calage</Tip>).</p>
            </div>

            <CalcNaspi />

            <h3>Durata</h3>
            <p>La regola &egrave; semplice: <strong>dura la met&agrave; delle settimane lavorate negli ultimi 4 anni</strong>. Massimo 24 mesi.</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Settimane lavorate (ultimi 4 anni)</th><th>Durata NASpI</th></tr></thead>
                <tbody>
                  <tr><td>26 settimane (~6 mesi)</td><td>13 settimane (~3 mesi)</td></tr>
                  <tr><td>52 settimane (~1 anno)</td><td>26 settimane (~6 mesi)</td></tr>
                  <tr><td>104 settimane (~2 anni)</td><td>52 settimane (~12 mesi)</td></tr>
                  <tr><td>208 settimane (4 anni pieni)</td><td>104 settimane (24 mesi max)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* COME FARE DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">La pratica</div>
            <h2>Come fare domanda di NASpI</h2>
            <p>La domanda si fa <strong>solo online</strong>. Hai tre modi:</p>

            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Dal sito INPS (fai da te)</strong><p>Accedi con <Tip t="L'identità digitale per accedere ai servizi della PA online. Se non ce l'hai, fallo subito — ci vogliono 15 minuti.">SPID</Tip> o CIE. Vai su Prestazioni e servizi {'\u2192'} NASpI {'\u2192'} Nuova domanda. La procedura &egrave; guidata.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Tramite <Tip t="CGIL, CISL, UIL, ACLI e altri. Fanno la domanda per te, gratis per legge. È il metodo più sicuro se non ti senti a tuo agio con il sito INPS.">patronato</Tip> (gratis)</strong><p>Vai a un patronato con i documenti. Fanno tutto loro, gratis per legge.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Contact Center INPS</strong><p>Chiama il <strong>803 164</strong> (gratis da fisso) o <strong>06 164 164</strong> (da cellulare). Un operatore ti aiuta per telefono.</p></div></div>
            </div>

            <h3>Cosa ti serve</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDD10'}</div><div className="clb"><strong>SPID o CIE</strong><span className="note">Per accedere al portale INPS. Se non ce l&apos;hai, <a href="/spid">fallo subito</a>.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Ultima busta paga</strong><span className="note">Non obbligatoria (dati precompilati), ma utile per verificare</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>IBAN</strong><span className="note">Il conto deve essere intestato o cointestato a te</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Quando parte il pagamento</div>
              <p>Se fai domanda <strong>entro 8 giorni</strong> dalla cessazione, la NASpI parte dall&apos;8° giorno. Se aspetti, parte dal giorno dopo la domanda — perdi i giorni in mezzo. Il primo accredito arriva in <strong>30-45 giorni</strong>.</p>
            </div>

            <h3>Dopo la domanda</h3>
            <p>Entro <strong>15 giorni</strong>, vai al Centro per l&apos;Impiego per firmare il <Tip t="Un accordo tra te e il Centro per l'Impiego che definisce le attività di ricerca di lavoro e formazione. Se non ti presenti, l'INPS può sospendere la NASpI.">Patto di Servizio Personalizzato</Tip>. Verrai iscritto al <Tip t="Sistema Informativo per l'Inclusione Sociale e Lavorativa. La piattaforma digitale per la ricerca di lavoro, formazione e offerte.">SIISL</Tip>. Se non ti presenti, la NASpI pu&ograve; essere sospesa.</p>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>I 5 errori che fanno perdere la NASpI</h2>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Fare domanda dopo 68 giorni</div><p>Il termine &egrave; <strong>tassativo</strong>. Non ci sono proroghe. Se lo superi, perdi tutto — anche se avevi tutti i requisiti. Segna la data sul calendario il giorno stesso in cui perdi il lavoro.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non comunicare un nuovo lavoro</div><p>Se inizi un lavoretto (anche part-time o autonomo) e non lo comunichi con il <Tip t="Il modulo obbligatorio per comunicare all'INPS che stai lavorando mentre prendi la NASpI. Va inviato entro 30 giorni dall'inizio del lavoro.">NASpI-COM</Tip> entro 30 giorni, la NASpI <strong>decade completamente</strong>. Non rischiare.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Saltare il Centro per l&apos;Impiego</div><p>Hai 15 giorni dalla domanda per firmare il Patto di Servizio. Se non ti presenti, la NASpI pu&ograve; essere sospesa.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non aggiornare l&apos;ISEE</div><p>La NASpI abbassa il tuo reddito. Fai l&apos;<a href="/isee">ISEE corrente</a> per sbloccare bonus e agevolazioni che prima non ti spettavano. Potresti avere diritto a bonus bollette, social card, agevolazioni TARI.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Non fare il 730</div><p>Anche con la NASpI devi fare la <a href="/730">dichiarazione dei redditi</a>. L&apos;INPS rilascia la <Tip t="Certificazione Unica: il documento con il riepilogo di quanto hai ricevuto e quante tasse ti hanno trattenuto. Lo trovi su MyINPS.">CU</Tip>: se non la dichiari, rischi problemi con il fisco.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Davide perde il lavoro e prende 14.400€</h2>

            <p><strong>Davide ha 34 anni</strong>, vive a Milano e lavorava come magazziniere con contratto a tempo indeterminato. Stipendio: 1.400€ netti al mese (circa 1.800€ lordi). L&apos;azienda chiude il reparto e lo licenzia per motivi economici dopo 3 anni e mezzo di lavoro.</p>

            <p>Davide &egrave; spaesato. Non sa quanto gli spetta, n&eacute; come muoversi. Un amico gli dice: &quot;Hai 68 giorni per fare domanda, muoviti.&quot;</p>

            <h3>Cosa fa Davide</h3>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Giorno 2: fa domanda NASpI</strong><p>Va al patronato CGIL con la busta paga e il documento. Fanno tutto loro, gratis. La domanda parte entro 8 giorni dalla cessazione.</p></div></div>
              <div className="step r d2"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Giorno 10: Centro per l&apos;Impiego</strong><p>Firma il Patto di Servizio. Si iscrive al SIISL.</p></div></div>
              <div className="step r d3"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Giorno 15: aggiorna l&apos;ISEE</strong><p>Fa l&apos;ISEE corrente perch&eacute; il suo reddito &egrave; calato. Risultato: ISEE scende da 24.000€ a 14.000€. Si sbloccano bonus bollette e agevolazioni TARI.</p></div></div>
            </div>

            <h3>I numeri di Davide</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Retribuzione media (ultimi 4 anni)</span><span className="db-new">~1.750€/mese lordi</span></div>
              <div className="db-row"><span className="db-label">NASpI mensile lorda</span><span className="db-new">~1.166€</span></div>
              <div className="db-row"><span className="db-label">NASpI mensile netta (dopo IRPEF)</span><span className="db-new">~960€</span></div>
              <div className="db-row"><span className="db-label">Durata (3,5 anni = 182 settimane {'\u00F7'} 2)</span><span className="db-new">91 settimane (~21 mesi)</span></div>
              <div className="db-row"><span className="db-label">Riduzione dal 6° mese</span><span className="db-old">-3%/mese</span></div>
              <div className="db-row db-total"><span className="db-label">Totale stimato (21 mesi)</span><span className="db-val">~17.500€ netti</span></div>
            </div>

            <p>Davide ha 21 mesi di respiro per trovare un nuovo lavoro. I primi 5 mesi prende ~960€ netti, poi l&apos;importo cala gradualmente. In tutto riceve circa <strong>17.500€ netti</strong>.</p>

            <p>In pi&ugrave;, grazie all&apos;ISEE corrente aggiornato, ottiene: bonus bollette luce e gas (~600€/anno), riduzione TARI, e accesso a tariffe agevolate per i trasporti. <strong>Valore extra: ~1.000€/anno.</strong></p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Se perdi il lavoro, le prime 3 cose da fare sono: <strong>1) domanda NASpI entro 8 giorni</strong> (meglio al patronato), <strong>2) Centro per l&apos;Impiego entro 15 giorni</strong>, <strong>3) ISEE corrente subito</strong> per sbloccare i bonus. Chi si muove in fretta prende tutto. Chi aspetta, perde soldi ogni giorno.</p>
            </div>
          </div>

          {/* LAVORARE DURANTE NASpI */}
          <div className="sec breve-hide r" id="lavorare">
            <div className="sec-tag">Compatibilit&agrave;</div>
            <h2>Lavorare mentre prendi la NASpI</h2>
            <p>S&igrave;, puoi lavorare — ma con regole precise. Se le rispetti, la NASpI viene solo <strong>ridotta</strong>. Se le violi, la <strong>perdi del tutto</strong>.</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Tipo di lavoro</th><th>Limite reddito annuo</th><th>Cosa succede</th></tr></thead>
                <tbody>
                  <tr><td>Dipendente</td><td>{'\u2264'} 8.500€</td><td>NASpI ridotta dell&apos;80% del reddito</td></tr>
                  <tr><td>Autonomo / P.IVA</td><td>{'\u2264'} 5.500€</td><td>NASpI ridotta dell&apos;80% del reddito</td></tr>
                  <tr><td>Qualsiasi tipo</td><td>Sopra i limiti</td><td className="tr">NASpI decade</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} Obbligo di comunicazione</div>
              <p>Qualsiasi lavoro inizi — anche con reddito zero — devi comunicarlo con il <strong><Tip t="Il modulo obbligatorio per dire all'INPS che stai lavorando. Va inviato entro 30 giorni. Se non lo fai, la NASpI decade.">NASpI-COM</Tip> entro 30 giorni</strong>. Se hai la P.IVA aperta (anche senza fatturare), devi comunicare il reddito presunto entro il 31 gennaio di ogni anno.</p>
            </div>
          </div>

          {/* NASpI ANTICIPATA */}
          <div className="sec breve-hide r" id="anticipata">
            <div className="sec-tag">Novit&agrave; 2026</div>
            <h2>NASpI anticipata: tutta in una volta per metterti in proprio</h2>
            <p>Vuoi aprire un&apos;attivit&agrave; autonoma? Puoi chiedere di ricevere tutta la NASpI residua in anticipo come capitale per partire.</p>
            <p>Dal 2026, la NASpI anticipata viene pagata in <strong>due rate</strong>:</p>
            <div className="icgrid r">
              <div className="ic r d1"><div className="ic-n">70% subito</div><div className="ic-d">Dopo l&apos;accoglimento della domanda.</div></div>
              <div className="ic r d2"><div className="ic-n">30% dopo</div><div className="ic-d">Al termine della durata teorica della NASpI, o entro 6 mesi dalla domanda.</div></div>
            </div>
            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} Se chiudi entro 6 mesi</div>
              <p>Novit&agrave; 2026: se chiudi l&apos;attivit&agrave; entro 6 mesi dall&apos;inizio, l&apos;INPS pu&ograve; <strong>chiederti di restituire</strong> tutta o parte della NASpI anticipata. Pensaci bene prima di chiedere l&apos;anticipo.</p>
            </div>
            <a href="/piva" className="xlink r"><span className="xlink-em">{'\uD83D\uDCBC'}</span><div className="xlink-t"><strong>Apro partita IVA</strong> — Forfettario, costi, tasse: la guida completa per metterti in proprio.</div><span className="xlink-ar">{'\u2192'}</span></a>
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
              <a href="/dimissioni" className="rc"><span className="rc-e">✍️</span><div className="rc-t">Dimissioni volontarie</div><div className="rc-d">Come dimettersi correttamente online.</div><span className="rc-ar">→</span></a>
              <a href="/tfr" className="rc"><span className="rc-e">💰</span><div className="rc-t">TFR</div><div className="rc-d">Quando te ne vai, ti spetta anche la liquidazione.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Con la NASpI il reddito cala: fai l'ISEE corrente.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.naspi-702.naspi.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">INPS — Domanda NASpI</div><div className="sbtool-d">Presenta la domanda online</div></div></a>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.consultazione-domande-di-disoccupazione-702.consultazione-domande-di-disoccupazione.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">INPS — Stato domanda</div><div className="sbtool-d">Controlla lo stato della pratica</div></div></a>
            <a href="https://www.anpal.gov.it/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">💼</span><div><div className="sbtool-n">ANPAL</div><div className="sbtool-d">Agenzia Nazionale Politiche Attive Lavoro</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/dimissioni" className="sbguide">✍️ Dimissioni<span className="sbg-ar">→</span></a>
            <a href="/tfr" className="sbguide">💰 TFR<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">💼 Primo lavoro<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="naspi" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
