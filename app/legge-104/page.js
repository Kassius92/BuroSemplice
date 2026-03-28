import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: "Come Richiedere la Legge 104 nel 2026: Permessi, Agevolazioni e Procedura",
  description: "Legge 104/1992: come richiederla, chi ne ha diritto, permessi 3 giorni, congedo 2 anni, agevolazioni auto e fiscali. Guida gratuita aggiornata 2026.",
  keywords: ["legge 104","legge 104 2026","permessi legge 104","come richiedere legge 104","agevolazioni legge 104","104 disabilit\u00e0","congedo straordinario 104"],
  alternates: { canonical: 'https://zeroburocrazia.it/legge-104' },
  openGraph: { title: "Legge 104 nel 2026: Permessi, Agevolazioni e Procedura", url: 'https://zeroburocrazia.it/legge-104', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/oglegge104.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/oglegge104.png'] },
};

const faqItems = [
  { q: "Quanto tempo ci vuole per ottenere la Legge 104?", a: "Dal certificato medico alla visita: di solito <strong>30-90 giorni</strong>. Per patologie oncologiche o gravissime la visita \u00e8 entro <strong>15 giorni</strong>. Il verbale arriva 1-2 settimane dopo la visita. In totale, dall\u2019inizio alla fine, servono mediamente 2-4 mesi. Il consiglio \u00e8 iniziare la procedura il prima possibile, perch\u00e9 i tempi dipendono anche dalla ASL della tua zona." },
  { q: "La Legge 104 scade?", a: "Dipende dalla patologia. Se la disabilit\u00e0 \u00e8 <strong>stabilizzata o ingravescente</strong> (ad esempio una malattia degenerativa), il verbale \u00e8 definitivo e non scade mai. Se invece la condizione \u00e8 rivedibile, nel verbale viene indicata una data di revisione. L\u2019INPS ti convocher\u00e0 per una nuova visita prima della scadenza. Nel frattempo i benefici restano attivi." },
  { q: "I permessi 104 si pagano meno dello stipendio?", a: "<strong>No, sono retribuiti al 100%.</strong> I 3 giorni di permesso mensili vengono pagati interamente dall\u2019INPS (che rimborsa il datore di lavoro). Non perdi un centesimo di stipendio e non devi recuperare le ore." },
  { q: "Posso usare i permessi 104 per me stesso?", a: "<strong>S\u00ec.</strong> Se sei un lavoratore dipendente con riconoscimento di handicap grave (art. 3 comma 3), hai diritto ai 3 giorni al mese per te stesso, senza bisogno di un referente. Puoi usarli per visite mediche, riabilitazione, riposo o qualsiasi necessit\u00e0 legata alla tua condizione." },
  { q: "Se lavoro part-time ho diritto ai permessi?", a: "<strong>S\u00ec</strong>, ma in misura proporzionale all\u2019orario di lavoro. Con un part-time al 50%, hai diritto a 1,5 giorni al mese (arrotondati per eccesso) oppure a 1 ora al giorno invece di 2. Il diritto resta, viene solo riproporzionato." },
  { q: "Il mio datore pu\u00f2 rifiutare i permessi 104?", a: "<strong>No, \u00e8 illegale.</strong> I permessi 104 sono un diritto previsto dalla legge. Il datore di lavoro non pu\u00f2 rifiutarli, condizionarli o penalizzarti per averli usati. Pu\u00f2 solo chiederti una programmazione preventiva (non vincolante) per organizzare il lavoro, ma non pu\u00f2 negarti il permesso." },
  { q: "Posso avere la 104 per un genitore anziano?", a: "<strong>S\u00ec</strong>, se il genitore ha una disabilit\u00e0 che la commissione riconosce come handicap grave. L\u2019et\u00e0 avanzata da sola non basta: serve una minorazione certificata come demenza senile, non autosufficienza totale, gravi patologie invalidanti. La commissione valuta caso per caso." },
  { q: "La 104 d\u00e0 diritto a soldi dall\u2019INPS?", a: "La 104 di per s\u00e9 <strong>non \u00e8 una prestazione economica</strong>. D\u00e0 diritto a permessi dal lavoro e agevolazioni fiscali, ma non a un assegno mensile. Per avere un assegno (pensione di invalidit\u00e0, indennit\u00e0 di accompagnamento) serve il riconoscimento dell\u2019<strong>invalidit\u00e0 civile</strong>, che \u00e8 una procedura parallela spesso fatta insieme alla 104." },
];

export default function GuidePage() {
  const schemas = [
    articleSchema({ title: "Legge 104 nel 2026: Permessi, Agevolazioni e Procedura", description: "Come richiedere la Legge 104, chi ne ha diritto, permessi, congedo e agevolazioni.", url: '/legge-104', image: 'oglegge104.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <NavV8 />

      {/* HERO */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(139,92,246,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat salute rv">Salute &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Legge <em>104</em></h1>
          <p className="v8-ghero-sub rv rv-d2">Riconoscimento della disabilit&agrave;, permessi dal lavoro, congedo straordinario, agevolazioni auto e fiscali. Tutto quello che devi sapere.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>3 giorni</strong><span>Permessi al mese</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>2 anni</strong><span>Congedo retribuito</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>IVA 4%</strong><span>Agevolazione auto</span></div>
          </div>
        </div>
      </section>

      {/* COS'&Egrave; */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; la <em>Legge 104</em></h2></div>
          <div className="v8-prose rv">
            <p>La <strong>Legge 104/1992</strong> &egrave; la legge che tutela le persone con disabilit&agrave; e i familiari che le assistono. Non &egrave; un bonus: &egrave; un <strong>pacchetto di diritti</strong> che comprende permessi dal lavoro retribuiti al 100%, congedi fino a 2 anni, agevolazioni fiscali e priorit&agrave; nella scelta della sede lavorativa.</p>
            <p>Il requisito fondamentale &egrave; il riconoscimento dell&apos;<strong>handicap grave</strong> (articolo 3, comma 3). Questo riconoscimento avviene tramite una visita della commissione medica ASL, dopo aver presentato domanda all&apos;INPS. Senza il verbale che certifica l&apos;handicap grave, i benefici principali non spettano. L&apos;handicap semplice (art. 3 comma 1) d&agrave; diritto solo ad agevolazioni limitate come l&apos;IVA ridotta sugli ausili.</p>
            <p>La 104 non riguarda solo le disabilit&agrave; fisiche evidenti. Possono essere riconosciute anche le disabilit&agrave; psichiche (depressione grave, disturbo bipolare, schizofrenia), le disabilit&agrave; sensoriali (sordit&agrave;, cecit&agrave;, ipovisione grave), le malattie degenerative (sclerosi multipla, SLA, Parkinson, Alzheimer), le patologie oncologiche (con procedura accelerata), il diabete di tipo 1 insulino-dipendente, le cardiopatie gravi, le malattie rare e le disabilit&agrave; intellettive. La commissione valuta caso per caso in base alla documentazione medica presentata.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>Legge 104/92</strong> &mdash; la legge quadro che tutela i diritti delle persone con disabilit&agrave; e dei loro familiari. Prevede permessi lavorativi, congedi retribuiti e agevolazioni fiscali.</p>
            <p><strong>Handicap grave (art. 3 comma 3)</strong> &mdash; la condizione riconosciuta dalla commissione medica ASL quando la disabilit&agrave; riduce l&apos;autonomia personale in modo da richiedere assistenza permanente, continuativa e globale. D&agrave; accesso a tutti i permessi e le agevolazioni. &Egrave; il riconoscimento che fa la differenza.</p>
            <p><strong>Commissione medica ASL</strong> &mdash; l&apos;organo che valuta la disabilit&agrave;. La visita viene richiesta tramite l&apos;INPS ma &egrave; svolta dalla ASL con un medico INPS presente. Porta tutta la documentazione medica: referti, cartelle cliniche, certificati specialistici.</p>
            <p><strong>Verbale di handicap</strong> &mdash; il documento ufficiale che certifica il grado di disabilit&agrave;. Pu&ograve; riconoscere: handicap semplice (art. 3 comma 1) oppure handicap grave (art. 3 comma 3). Solo il comma 3 d&agrave; diritto ai permessi lavorativi e al congedo straordinario.</p>
            <p><strong>Referente unico</strong> &mdash; dal 2022, un solo lavoratore pu&ograve; usufruire dei permessi 104 per assistere lo stesso familiare disabile. Non possono pi&ugrave; alternarsi pi&ugrave; familiari. Eccezione: i genitori di figli disabili possono alternarsi tra loro.</p>
            <p><strong>Congedo straordinario</strong> &mdash; fino a 2 anni di congedo retribuito al 100% dello stipendio (con tetto massimo) per assistere un familiare con handicap grave. Spetta in ordine di priorit&agrave;: coniuge, genitori, figli, fratelli, parenti entro il 3&deg; grado.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Handicap semplice vs handicap grave:</strong> con il comma 1 (semplice) hai diritto solo ad agevolazioni fiscali su ausili e protesi. Con il comma 3 (grave) hai diritto a tutto: 3 giorni di permesso al mese, congedo 2 anni, IVA 4% auto, esenzione bollo, priorit&agrave; sede di lavoro. La differenza &egrave; enorme e dipende dalla valutazione della commissione.</p></div>
          </div>
        </div>
      </section>

      {/* CHI NE HA DIRITTO */}
      <section className="v8-section warm" id="chi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Chi ne ha <em>diritto</em></h2></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>La persona con disabilit&agrave;</h3>
            <p>Qualsiasi persona con una minorazione fisica, psichica o sensoriale che provoca difficolt&agrave; nell&apos;apprendimento, nella vita di relazione o nell&apos;integrazione lavorativa pu&ograve; richiedere il riconoscimento. Non serve una percentuale di invalidit&agrave; specifica: conta la valutazione complessiva della commissione medica.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>I familiari che assistono (caregiver)</h3>
            <p>I permessi lavorativi spettano al familiare lavoratore dipendente che assiste la persona con handicap grave. L&apos;ordine di priorit&agrave; &egrave;: coniuge o parte dell&apos;unione civile (dal 2023 anche il convivente di fatto), genitori (anche adottivi), figli, fratelli o sorelle, parenti e affini entro il 3&deg; grado. Si passa al successivo solo se il precedente non pu&ograve; assistere per motivi documentati (decesso, patologie invalidanti, et&agrave; superiore a 65 anni). Questo aspetto viene valutato dall&apos;INPS al momento della domanda dei permessi.</p>
            <p>Una precisazione importante: i permessi 104 spettano solo ai <strong>lavoratori dipendenti</strong>. Chi ha la partita IVA, chi &egrave; lavoratore autonomo o chi ha un contratto di collaborazione non ha diritto ai permessi retribuiti. Pu&ograve; per&ograve; beneficiare delle agevolazioni fiscali (auto, ausili, detrazioni).</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Referente unico dal 2022.</strong> Dal 13 agosto 2022, un solo lavoratore pu&ograve; essere il referente per l&apos;assistenza a un familiare con 104. Non possono pi&ugrave; alternarsi pi&ugrave; familiari sullo stesso disabile. Eccezione: i genitori di figli disabili possono alternarsi tra loro.</p></div>
          </div>
        </div>
      </section>

      {/* COME RICHIEDERE */}
      <section className="v8-section" id="domanda">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come <em>richiederla</em></h2><p className="rv rv-d1">La procedura ha 4 passaggi. Dal primo appuntamento con il medico di base al verbale finale passano mediamente 2-4 mesi, a seconda della ASL della tua zona.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Vai dal medico di base</h3><p>Il medico compila il certificato medico introduttivo online sul sito INPS. Ti rilascia il numero di certificato. Il servizio &egrave; gratuito o costa pochi euro a seconda del medico.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Presenta la domanda INPS</h3><p>Entro 90 giorni dal certificato: online su inps.it con SPID, oppure tramite patronato (CGIL, CISL, UIL &mdash; gratis). Indica il numero del certificato medico.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Visita commissione ASL</h3><p>La convocazione arriva in 30-90 giorni (15 giorni per patologie oncologiche o gravissime). Porta tutta la documentazione medica: referti, cartelle cliniche, certificati specialistici.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Ricevi il verbale</h3><p>Arriva via raccomandata o online nel cassetto INPS. Indica se &egrave; riconosciuto handicap semplice (comma 1) o grave (comma 3). Con il comma 3 accedi a tutti i benefici.</p></div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'32px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Documenti per la visita</h3>
            <p>Alla visita della commissione medica porta tutta la documentazione che dimostra la gravit&agrave; della condizione. Pi&ugrave; documentazione porti, pi&ugrave; possibilit&agrave; hai di ottenere il comma 3. Servono: certificati medici recenti del medico curante e degli specialisti, cartelle cliniche di ricoveri o interventi, referti di esami diagnostici (risonanze, TAC, ecografie, esami del sangue), certificazioni di terapie in corso (fisioterapia, chemioterapia, dialisi), eventuali verbali di precedenti visite di invalidit&agrave; civile. Se il paziente &egrave; un anziano non autosufficiente, porta anche la certificazione del geriatra o del neurologo.</p>
            <p>La visita dura circa 15-30 minuti. La commissione &egrave; composta da un medico legale (presidente), due medici specialisti e un medico INPS. Pu&ograve; essere presente anche un medico di parte (il tuo medico di fiducia) e un rappresentante di un&apos;associazione di categoria.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Vai al patronato.</strong> La domanda 104 &egrave; delicata: il certificato medico deve essere compilato bene, la documentazione alla visita fa la differenza tra un comma 1 e un comma 3. Il patronato ti guida gratuitamente in tutto il processo e ti aiuta a preparare la visita nel modo migliore.</p></div>
          </div>
        </div>
      </section>

      {/* PERMESSI */}
      <section className="v8-section warm" id="permessi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Permessi <em>lavorativi</em></h2><p className="rv rv-d1">3 giorni al mese, retribuiti al 100%. Oppure 2 ore al giorno.</p></div>
          <div className="v8-prose rv">
            <p>Con l&apos;handicap grave (art. 3 comma 3), il lavoratore dipendente che assiste il familiare disabile ha diritto a <strong>3 giorni di permesso retribuito al mese</strong>, oppure pu&ograve; frazionarli in ore (2 ore al giorno per contratti full-time, 1 ora per part-time). I permessi sono retribuiti al 100% dall&apos;INPS, che rimborsa il datore di lavoro. Non si accumulano da un mese all&apos;altro e non si pagano se non goduti: a fine mese, i giorni non usati si perdono.</p>
            <p>I permessi si cumulano con ferie, permessi sindacali e altri permessi previsti dal contratto. Il preavviso al datore non &egrave; obbligatorio per legge, ma &egrave; buona pratica concordare una programmazione preventiva dove possibile (per esempio, scegliere sempre lo stesso giorno della settimana). Il datore di lavoro non pu&ograve; rifiutarli, condizionarli o penalizzarti per averli usati. Se il tuo datore ti crea problemi, rivolgiti al patronato o all&apos;Ispettorato del Lavoro.</p>
          </div>
          <section className="v8-section dark" style={{margin:'32px 0',borderRadius:'20px'}}>
            <div className="v8-esempio-inner">
              <h2 className="rv">L&apos;esempio di <em>Anna</em></h2>
              <div className="v8-esempio-story">
                <p className="rv rv-d1">Anna lavora full-time in un&apos;azienda. Sua madre ha la <strong style={{color:'var(--v8-bg)'}}>104 comma 3</strong>. Anna &egrave; il referente unico. Ogni mese prende 3 giorni di permesso retribuito per accompagnare la madre a visite, gestire pratiche, assisterla a casa. Lo stipendio non cambia di un centesimo. Se preferisce, pu&ograve; frazionare: 2 ore al giorno (esce prima o entra dopo). Non deve recuperare le ore.</p>
              </div>
            </div>
          </section>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'0 auto'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>L&apos;abuso &egrave; sanzionabile.</strong> I permessi 104 sono per assistere il familiare disabile. L&apos;INPS e i datori di lavoro possono fare controlli. Usarli per andare in vacanza o per altri scopi &egrave; un illecito che pu&ograve; portare al licenziamento per giusta causa e alla restituzione degli importi.</p></div>
          </div>
        </div>
      </section>

      {/* CONGEDO */}
      <section className="v8-section" id="congedo">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Congedo straordinario <em>(2 anni)</em></h2><p className="rv rv-d1">Per chi deve dedicarsi all&apos;assistenza a tempo pieno.</p></div>
          <div className="v8-prose rv">
            <p>Il congedo straordinario retribuito permette di assentarsi dal lavoro fino a <strong>2 anni nell&apos;arco della vita lavorativa</strong>, con stipendio pagato al 100% (tetto 2026: circa 40.000&euro;/anno lordi, aggiornato ISTAT). Lo stipendio viene anticipato dal datore e rimborsato dall&apos;INPS. I 2 anni possono essere frazionati: puoi prendere 6 mesi, tornare al lavoro, poi altri 6 mesi.</p>
            <p>Requisiti: serve il verbale con <strong>art. 3 comma 3</strong> (non basta il comma 1) e l&apos;<strong>obbligo di convivenza</strong> con il familiare disabile. La convivenza pu&ograve; essere instaurata anche dopo la richiesta del congedo: basta cambiare la residenza prima dell&apos;inizio del congedo. L&apos;ordine di priorit&agrave; &egrave;: coniuge/convivente, genitori, figli, fratelli/sorelle, parenti entro il 3&deg; grado. Si passa al successivo solo se il precedente &egrave; mancante, deceduto, affetto da patologie invalidanti, o ha pi&ugrave; di 65 anni.</p>
            <p>Il congedo straordinario &egrave; compatibile con la pensione di invalidit&agrave; e con l&apos;indennit&agrave; di accompagnamento dell&apos;assistito. Non &egrave; compatibile con i permessi 104 nello stesso periodo: se sei in congedo straordinario, non puoi prendere anche i 3 giorni di permesso per lo stesso familiare. Durante il congedo maturano i contributi figurativi per la pensione.</p>
          </div>
        </div>
      </section>

      {/* AGEVOLAZIONI */}
      <section className="v8-section warm" id="agevolazioni">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Agevolazioni <em>fiscali e auto</em></h2></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Agevolazioni auto</h3>
            <p>Con handicap grave: <strong>IVA al 4%</strong> invece del 22% su auto nuove o usate (fino a 2.000 cc benzina o 2.800 cc diesel, 1 auto ogni 4 anni). <strong>Detrazione IRPEF 19%</strong> su un tetto di 18.075,99&euro; (recuperi fino a ~3.434&euro; nel 730). <strong>Esenzione bollo auto</strong> permanente. <strong>Esenzione passaggio di propriet&agrave;</strong> al PRA. Dal 2026 l&apos;agevolazione &egrave; confermata anche su auto ibride ed elettriche.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Altre agevolazioni fiscali</h3>
            <p><strong>Esenzione ticket sanitario:</strong> chi ha la 104 comma 3 ha diritto all&apos;esenzione dal ticket per visite specialistiche, esami diagnostici e prestazioni sanitarie. I codici di esenzione sono C03 (invalidit&agrave; al 100% senza indennit&agrave; di accompagnamento) e C06 (con accompagnamento). L&apos;esenzione si attiva automaticamente tramite il sistema sanitario regionale una volta che il verbale viene registrato.</p>
            <p><strong>IVA 4%</strong> su ausili informatici (computer, tablet, telefoni) se prescritti per la disabilit&agrave;. <strong>Detrazione spese mediche</strong> senza franchigia dei 129&euro; per alcune categorie. <strong>Detrazione 75%</strong> su interventi di eliminazione barriere architettoniche fino a 50.000&euro;. <strong>Scelta prioritaria della sede di lavoro</strong>: il lavoratore con 104 o che assiste un familiare con 104 ha diritto alla sede pi&ugrave; vicina e non pu&ograve; essere trasferito senza consenso. <strong>Priorit&agrave; smart working</strong> per chi assiste familiari con comma 3 (novit&agrave; 2026).</p>
          </div>
        </div>
      </section>

      {/* INVALIDITÀ CIVILE */}
      <section className="v8-section" id="invalidita">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">104 e invalidit&agrave; <em>civile</em></h2><p className="rv rv-d1">Sono due cose diverse ma spesso si richiedono insieme.</p></div>
          <div className="v8-prose rv">
            <p>La Legge 104 riconosce l&apos;handicap e d&agrave; diritto a permessi e agevolazioni. L&apos;invalidit&agrave; civile riconosce una percentuale di riduzione della capacit&agrave; lavorativa e d&agrave; diritto a prestazioni economiche (pensione di invalidit&agrave;, assegno di invalidit&agrave;, indennit&agrave; di accompagnamento). Sono due procedure distinte, ma nella pratica si fanno spesso insieme: quando presenti la domanda all&apos;INPS, puoi chiedere contemporaneamente sia il riconoscimento dell&apos;handicap (Legge 104) sia quello dell&apos;invalidit&agrave; civile.</p>
            <p>Con l&apos;invalidit&agrave; civile al 100% puoi avere diritto alla pensione di invalidit&agrave; (~319&euro;/mese nel 2026) e, se non sei autosufficiente, all&apos;indennit&agrave; di accompagnamento (~531&euro;/mese). Questi importi si sommano ai benefici della 104. Per questo &egrave; sempre consigliabile richiedere entrambi i riconoscimenti nella stessa domanda.</p>
          </div>
        </div>
      </section>

      {/* NOVIT&Agrave; 2026 */}
      <section className="v8-section" id="novita">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Novit&agrave; <em>2026</em></h2></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Lavoro</h3>
              <div className="v8-doc"><strong>Congedo parentale potenziato</strong> &mdash; Legge di Bilancio 2026: congedo all&apos;80% fino a 3 mesi per genitori di figli con disabilit&agrave; grave</div>
              <div className="v8-doc"><strong>Smart working prioritario</strong> &mdash; I lavoratori che assistono familiari con 104 comma 3 hanno priorit&agrave; nell&apos;accesso al lavoro agile</div>
            </div>
            <div className="v8-doc-group">
              <h3>Burocrazia e fiscale</h3>
              <div className="v8-doc"><strong>Revisione INPS pi&ugrave; rapida</strong> &mdash; Per patologie stabilizzate, il verbale resta valido senza rivisitazione periodica</div>
              <div className="v8-doc"><strong>Auto ibride/elettriche</strong> &mdash; Confermata IVA al 4% senza limitazioni di potenza (ambiguit&agrave; normativa risolta)</div>
            </div>
          </div>
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

      {/* CORRELATE */}
      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/esenzione-ticket" className="v8-related-card"><h4>Esenzione ticket</h4><p>Con la 104 accedi ai codici C03-C06. Visite ed esami gratis.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/isee" className="v8-related-card"><h4>ISEE</h4><p>Serve per molte agevolazioni legate alla disabilit&agrave;.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/congedo-parentale" className="v8-related-card"><h4>Congedo parentale</h4><p>Potenziato per genitori di figli disabili.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>SPID</h4><p>Per la domanda online INPS serve lo SPID.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
