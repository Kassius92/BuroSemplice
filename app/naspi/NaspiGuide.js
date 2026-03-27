'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CrossLink, CTABanner, Quiz
} from '@/components/redesign';
import CalcNaspi from '@/components/CalcNaspi';

const quizQuestions = [
  { text: 'Hai perso il lavoro involontariamente (licenziamento, fine contratto, giusta causa)?' },
  { text: 'Hai lavorato come dipendente almeno 13 settimane negli ultimi 4 anni?' },
  { text: 'Sono passati meno di 68 giorni dalla cessazione del rapporto?' },
];

function evaluateQuiz(answers) {
  if (answers[0] === 'n') return { type: 'neg', text: 'Se ti sei dimesso volontariamente senza giusta causa, non hai diritto alla NASpI. Fanno eccezione le dimissioni durante maternità/paternità.' };
  if (answers[1] === 'n') return { type: 'neg', text: 'Servono almeno 13 settimane di contributi negli ultimi 4 anni. Verifica con il tuo estratto contributivo INPS.' };
  if (answers[2] === 'n') return { type: 'neg', text: 'Il termine di 68 giorni è tassativo. Se lo hai superato, purtroppo hai perso il diritto.' };
  return { type: 'pos', text: 'Hai tutti i requisiti. Fai domanda subito — prima presenti, prima parte il pagamento.' };
}

export default function NaspiGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />

      <GuideHero
        category="lavoro"
        categoryLabel="Lavoro &middot; Aggiornato marzo 2026"
        title="NASpI: la disoccupazione"
        titleEm="nel 2026"
        subtitle="Quanto ti spetta, come fare domanda, le scadenze da non perdere e gli errori che ti fanno perdere soldi."
        stats={[
          { value: '1.584\u20ac', label: 'Massimo mensile lordo' },
          { value: '68 gg', label: 'Per fare domanda' },
          { value: '24 mesi', label: 'Durata massima' },
        ]}
      />

      <Section bg="warm" id="quiz" title="Hai diritto alla" titleEm="NASpI?" subtitle="Rispondi a 3 domande e lo scopri subito.">
        <Quiz questions={quizQuestions} evaluate={evaluateQuiz} />
      </Section>

      {/* COS'È */}
      <Section id="cose" title="Cos'&egrave; la" titleEm="NASpI">
        <div className="v8-prose rv">
          <p>Hai perso il lavoro e non &egrave; stata colpa tua? Lo Stato ti paga un assegno mensile mentre cerchi una nuova occupazione. Si chiama <strong>NASpI</strong> (Nuova Assicurazione Sociale per l&apos;Impiego) &mdash; in parole povere, &egrave; la disoccupazione.</p>
          <p>Non &egrave; un regalo: &egrave; un&apos;assicurazione che <strong>hai gi&agrave; pagato</strong> con i contributi versati durante il lavoro. Ogni mese il tuo datore di lavoro versa all&apos;INPS una percentuale del tuo stipendio lordo (circa l&apos;1,61%) proprio per finanziare la NASpI. Se hai lavorato come dipendente e hai versato contributi, hai diritto a riaverli indietro quando ne hai bisogno.</p>
          <p>L&apos;importo della NASpI dipende da quanto guadagnavi prima, e la durata dipende da quanto a lungo hai lavorato. Il massimo &egrave; 1.584,70&euro; lordi al mese per un massimo di 24 mesi. Dal sesto mese l&apos;importo cala progressivamente del 3% ogni mese: i primi mesi sono quelli in cui prendi di pi&ugrave;, quindi &egrave; fondamentale fare domanda subito.</p>

          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
          <p><strong>NASpI</strong> &mdash; Nuova Assicurazione Sociale per l&apos;Impiego. L&apos;assegno di disoccupazione per chi perde il lavoro involontariamente. L&apos;importo dipende da quanto guadagnavi, la durata da quanto hai lavorato (massimo 24 mesi).</p>
          <p><strong>Disoccupazione involontaria</strong> &mdash; Hai perso il lavoro senza volerlo: licenziamento (per qualsiasi motivo), fine di un contratto a tempo determinato, dimissioni per giusta causa (stipendio non pagato, mobbing, molestie). Le dimissioni volontarie normali NON danno diritto alla NASpI.</p>
          <p><strong>D&eacute;calage</strong> &mdash; La riduzione progressiva dell&apos;importo della NASpI. A partire dal 6&deg; mese (dal 151&deg; giorno) l&apos;importo scende del 3% ogni mese. Per chi ha pi&ugrave; di 55 anni la riduzione parte dall&apos;8&deg; mese. I primi 5 mesi sono quelli in cui ricevi l&apos;importo pieno.</p>
          <p><strong>NASpI-COM</strong> &mdash; Il modulo che <strong>devi obbligatoriamente</strong> inviare all&apos;INPS se inizi qualsiasi tipo di lavoro mentre percepisci la NASpI. Hai 30 giorni di tempo per comunicarlo. Se non lo fai, la NASpI decade completamente e perdi tutti i pagamenti futuri.</p>
          <p><strong>Contribuzione figurativa</strong> &mdash; Durante tutto il periodo in cui ricevi la NASpI, l&apos;INPS ti accredita automaticamente i contributi per la pensione. Sono gratuiti e non devi fare nulla: quei mesi contano come se avessi lavorato ai fini pensionistici.</p>
          <p><strong>NASpI anticipata</strong> &mdash; Se vuoi aprire un&apos;attivit&agrave; autonoma o una societ&agrave;, puoi chiedere di ricevere tutta la NASpI residua in anticipo come capitale iniziale. Dal 2026 la normativa prevede il pagamento in due tranche: 70% subito e 30% dopo.</p>
          <p><strong>Patto di Servizio Personalizzato</strong> &mdash; L&apos;accordo che firmi al Centro per l&apos;Impiego entro 15 giorni dalla domanda NASpI. Definisce le attivit&agrave; di ricerca di lavoro e formazione. Se non ti presenti, l&apos;INPS pu&ograve; sospendere la NASpI.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non &egrave; solo per i licenziati.</strong> La NASpI spetta anche a chi ha un contratto a termine scaduto e non rinnovato, a chi si &egrave; dimesso per giusta causa (stipendio non pagato, mobbing, trasferimento immotivato), e alle mamme e ai pap&agrave; che si dimettono durante il primo anno di vita del figlio. Anche chi ha un apprendistato che non viene confermato ha diritto alla NASpI.</p>
        </InfoBox>
      </Section>

      {/* REQUISITI */}
      <Section bg="warm" id="requisiti" title="I requisiti" titleEm="nel dettaglio" subtitle="Per avere la NASpI devi soddisfare tutti e tre questi requisiti contemporaneamente.">
        <StepCards steps={[
          { title: 'Disoccupazione involontaria', text: 'Hai perso il lavoro senza volerlo. Rientrano: licenziamento per qualsiasi motivo, fine contratto a termine, dimissioni per giusta causa, risoluzione consensuale in sede protetta, mancato rinnovo di apprendistato.' },
          { title: 'Almeno 13 settimane di contributi', text: 'Devi aver versato almeno 13 settimane di contributi nei 4 anni precedenti la cessazione del rapporto di lavoro. Equivale a circa 3 mesi di lavoro dipendente. Le settimane gi&agrave; utilizzate per una NASpI precedente non si contano.' },
          { title: 'Domanda entro 68 giorni', text: 'Devi presentare la domanda all&apos;INPS entro 68 giorni dalla data di cessazione del rapporto di lavoro. Il termine &egrave; tassativo e non ammette proroghe. Dopo i 68 giorni il diritto decade completamente, anche se avevi tutti gli altri requisiti.' },
        ]} />
        <div className="v8-prose rv" style={{marginTop:'32px'}}>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginBottom:'16px'}}>Chi ha diritto e chi no</h3>
          <p><strong>S&igrave;, hai diritto alla NASpI se:</strong> sei stato licenziato (per qualsiasi motivo, anche disciplinare), il tuo contratto a tempo determinato &egrave; scaduto e non &egrave; stato rinnovato, ti sei dimesso per giusta causa (stipendio non pagato per almeno 2 mesi, mobbing documentato, molestie, trasferimento senza motivo oltre 50 km), hai firmato una risoluzione consensuale in sede protetta (Ispettorato del Lavoro), ti sei dimesso o dimessa durante la maternit&agrave; o paternit&agrave; entro il primo anno di vita del figlio.</p>
          <p><strong>No, non hai diritto alla NASpI se:</strong> ti sei dimesso volontariamente senza giusta causa, sei un dipendente pubblico a tempo indeterminato, sei un lavoratore autonomo o con partita IVA, ti sei assentato dal lavoro senza giustificazione in modo prolungato (dal 2025 &egrave; equiparato a dimissioni volontarie). Attenzione alla novit&agrave; 2025: se ti dimetti volontariamente e poi trovi un nuovo lavoro che perdi involontariamente, per avere diritto alla NASpI devi aver lavorato almeno 13 settimane nel nuovo rapporto.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Dimissioni volontarie = niente NASpI.</strong> Molte persone pensano di potersi dimettere e prendere la disoccupazione. Non funziona cos&igrave;. Se vuoi lasciare il lavoro e avere diritto alla NASpI, devi avere una giusta causa documentabile. Se il datore non ti paga, non mandare email: manda una PEC e tieni le prove. Servono per dimostrare la giusta causa.</p>
        </InfoBox>
      </Section>

      {/* QUANTO SPETTA */}
      <Section id="quanto-spetta" title="Quanto spetta" titleEm="nel 2026" subtitle="L'importo si calcola sulla retribuzione media imponibile degli ultimi 4 anni di lavoro.">
        <div className="v8-prose rv">
          <p>L&apos;importo non &egrave; uguale per tutti. Si calcola sulla <strong>retribuzione media imponibile degli ultimi 4 anni</strong> &mdash; non sul tuo ultimo stipendio, ma sulla media di tutto quello che hai guadagnato come dipendente nei 4 anni prima di perdere il lavoro. Questo importo lo trovi nella busta paga alla voce &quot;imponibile previdenziale&quot;.</p>

          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>La formula del calcolo</h3>
          <p>Se la retribuzione media &egrave; <strong>uguale o inferiore a 1.456,72&euro; al mese</strong>, la NASpI &egrave; pari al 75% di quella media. Esempio pratico: se la tua media &egrave; 1.200&euro;, la NASpI sar&agrave; 900&euro; lordi al mese.</p>
          <p>Se la retribuzione media &egrave; <strong>superiore a 1.456,72&euro;</strong>, il calcolo diventa: 75% di 1.456,72&euro; (cio&egrave; 1.092,54&euro;) pi&ugrave; il 25% della differenza tra la tua media e 1.456,72&euro;. Esempio: se la tua media &egrave; 1.800&euro;, il calcolo &egrave; 1.092,54&euro; + 25% di 343,28&euro; = 1.092,54 + 85,82 = 1.178,36&euro; lordi.</p>
          <p>In ogni caso, qualunque sia il tuo stipendio, la NASpI <strong>non pu&ograve; superare 1.584,70&euro; lordi al mese</strong> nel 2026. In termini netti, dopo le trattenute IRPEF, il massimo che puoi ricevere &egrave; circa 1.200&ndash;1.250&euro; al mese.</p>

          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>La riduzione progressiva (d&eacute;calage)</h3>
          <p>L&apos;importo della NASpI non resta fisso per tutta la durata. A partire dal 6&deg; mese (dal 151&deg; giorno), si riduce del 3% ogni mese. Se hai pi&ugrave; di 55 anni, la riduzione parte dall&apos;8&deg; mese. Questo significa che i primi 5 mesi sono quelli in cui ricevi l&apos;importo pieno: &egrave; un motivo in pi&ugrave; per fare domanda il prima possibile e non sprecare giorni.</p>

          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Quanto dura</h3>
          <p>La regola &egrave; semplice: la NASpI dura la <strong>met&agrave; delle settimane lavorate negli ultimi 4 anni</strong>. Se hai lavorato 4 anni pieni (208 settimane), la NASpI dura 104 settimane, cio&egrave; il massimo di 24 mesi. Se hai lavorato solo 1 anno (52 settimane), dura 26 settimane, cio&egrave; circa 6 mesi. Le settimane gi&agrave; utilizzate per una precedente NASpI non si contano di nuovo.</p>
        </div>
        <CalcNaspi />
      </Section>

      {/* COME FARE DOMANDA */}
      <Section bg="warm" id="domanda" title="Come fare" titleEm="domanda" subtitle="La domanda si fa solo online. Hai tre modi per presentarla.">
        <StepCards steps={[
          { title: 'Dal sito INPS (fai da te)', text: 'Accedi con SPID o CIE a inps.it. Cerca &quot;NASpI&quot; o vai su Prestazioni e servizi. La procedura &egrave; guidata passo per passo.' },
          { title: 'Tramite patronato (gratis)', text: 'Vai a un patronato (CGIL, CISL, UIL, ACLI). Fanno tutto loro, &egrave; gratuito per legge. Il metodo pi&ugrave; sicuro se non ti senti a tuo agio col sito INPS.' },
          { title: 'Contact Center INPS', text: 'Chiama il numero 803 164 (gratis da telefono fisso) oppure 06 164 164 (da cellulare a pagamento). Un operatore ti guida nella compilazione.' },
        ]} />
        <div className="v8-prose rv" style={{marginTop:'32px'}}>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Documenti necessari</h3>
          <p>Per fare domanda ti servono: <strong>SPID o CIE</strong> per accedere al portale INPS (se non ce l&apos;hai, fallo subito &mdash; ci vogliono 15 minuti), l&apos;<strong>ultima busta paga</strong> (non obbligatoria perch&eacute; i dati sono precompilati, ma utile per verificare), e l&apos;<strong>IBAN</strong> di un conto corrente intestato o cointestato a te per ricevere i pagamenti.</p>

          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Dopo la domanda: cosa succede</h3>
          <p>Entro <strong>15 giorni</strong> dalla domanda, devi presentarti al Centro per l&apos;Impiego per firmare il Patto di Servizio Personalizzato. Verrai iscritto al SIISL (Sistema Informativo per l&apos;Inclusione Sociale e Lavorativa), la piattaforma per la ricerca di lavoro e la formazione professionale. Se non ti presenti entro 15 giorni, l&apos;INPS pu&ograve; sospendere la NASpI. Il primo pagamento arriva in 30&ndash;45 giorni dalla domanda. I pagamenti successivi sono mensili.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Quando parte il pagamento:</strong> se fai domanda <strong>entro 8 giorni</strong> dalla cessazione del rapporto, la NASpI parte dall&apos;8&deg; giorno. Se aspetti di pi&ugrave;, parte dal giorno dopo la presentazione della domanda &mdash; e perdi i giorni in mezzo. Ogni giorno di ritardo &egrave; un giorno di NASpI perso. Il consiglio &egrave; chiaro: fai domanda il prima possibile, idealmente il giorno dopo il licenziamento.</p>
        </InfoBox>
        <div style={{textAlign:'center',marginTop:'24px'}}>
          <CrossLink href="/spid">Fai lo SPID per accedere a INPS</CrossLink>
        </div>
      </Section>

      {/* LAVORARE DURANTE LA NASpI */}
      <Section id="lavorare" title="Lavorare mentre" titleEm="prendi la NASpI" subtitle="S&igrave;, puoi farlo &mdash; ma con regole precise. Se le violi, perdi tutto.">
        <div className="v8-prose rv">
          <p>Se trovi un lavoretto mentre prendi la NASpI, puoi continuare a percepirla a patto di rispettare i limiti di reddito. Se lavori come <strong>dipendente</strong>, il reddito annuo non deve superare 8.500&euro;. Se lavori come <strong>autonomo o con partita IVA</strong>, il limite scende a 5.500&euro;. In entrambi i casi, la NASpI viene ridotta dell&apos;80% del reddito che percepisci dal nuovo lavoro.</p>
          <p>Se superi questi limiti, la NASpI <strong>decade completamente</strong>. Se trovi un nuovo lavoro con contratto di durata inferiore a 6 mesi, la NASpI precedente viene sospesa e poi riprende alla fine del contratto. Se il nuovo contratto dura pi&ugrave; di 6 mesi, puoi presentare una nuova domanda di NASpI alla fine di quel rapporto.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Obbligo di comunicazione assoluto.</strong> Qualsiasi lavoro inizi &mdash; anche un lavoretto da 200&euro; o una collaborazione occasionale &mdash; devi comunicarlo all&apos;INPS con il modulo NASpI-COM entro 30 giorni dall&apos;inizio dell&apos;attivit&agrave;. Se hai la partita IVA aperta (anche se non fatturi nulla), devi comunicare il reddito presunto entro il 31 gennaio di ogni anno. Se non comunichi, la NASpI decade completamente e retroattivamente.</p>
        </InfoBox>
      </Section>

      {/* NASpI ANTICIPATA */}
      <Section bg="warm" id="anticipata" title="NASpI anticipata:" titleEm="mettersi in proprio" subtitle="Vuoi aprire un'attivit&agrave;? Puoi ricevere tutta la NASpI residua in anticipo.">
        <div className="v8-prose rv">
          <p>Se decidi di aprire un&apos;attivit&agrave; autonoma, una ditta individuale, o di entrare come socio in una cooperativa, puoi chiedere all&apos;INPS di ricevere tutta la NASpI che ti resterebbe da percepire in un&apos;unica soluzione, come capitale iniziale per avviare la tua attivit&agrave;.</p>
          <p>Dal 2026, la NASpI anticipata viene pagata in <strong>due tranche</strong>: il 70% subito dopo l&apos;accoglimento della domanda, e il 30% restante al termine della durata teorica della NASpI oppure entro 6 mesi dalla domanda. La domanda va presentata entro 30 giorni dall&apos;inizio dell&apos;attivit&agrave;.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Attenzione alla novit&agrave; 2026:</strong> se chiudi l&apos;attivit&agrave; entro 6 mesi dall&apos;inizio, l&apos;INPS pu&ograve; chiederti di restituire tutta o parte della NASpI anticipata che hai ricevuto. Inoltre, se ti fai assumere come dipendente entro il periodo coperto dalla NASpI, devi restituire l&apos;importo residuo. Pensaci bene prima di chiedere l&apos;anticipo: &egrave; un impegno serio.</p>
        </InfoBox>
        <div style={{textAlign:'center',marginTop:'24px'}}>
          <CrossLink href="/piva">Apro partita IVA: la guida completa</CrossLink>
        </div>
      </Section>

      {/* ESEMPIO */}
      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Davide"
          story="Davide ha 34 anni, vive a Milano e lavorava come magazziniere con contratto a tempo indeterminato. Il suo stipendio era 1.400&euro; netti al mese, circa 1.800&euro; lordi. L'azienda chiude il reparto e lo licenzia per motivi economici dopo 3 anni e mezzo di lavoro. Il giorno dopo va al patronato CGIL con la busta paga e il documento d'identit&agrave;. Fanno la domanda NASpI in 20 minuti, gratis. Dopo 15 giorni Davide firma il Patto di Servizio al Centro per l'Impiego. Poi fa l'ISEE corrente perch&eacute; il suo reddito &egrave; calato: il suo ISEE scende da 24.000&euro; a 14.000&euro;, sbloccando bonus bollette e agevolazioni TARI per circa 1.000&euro; in pi&ugrave; all'anno."
          lines={[
            { label: 'Retribuzione media (ultimi 4 anni)', value: '~1.750\u20ac/mese' },
            { label: 'NASpI mensile netta (dopo IRPEF)', value: '~960\u20ac' },
            { label: 'Durata (3,5 anni = 182 settimane \u00f7 2)', value: '~21 mesi' },
            { label: 'Riduzione dal 6\u00b0 mese', value: '-3%/mese' },
          ]}
          total={{ label: 'Totale stimato (21 mesi)', value: '~17.500\u20ac netti' }}
        />
      </Section>

      {/* ERRORI */}
      <Section id="errori" title="I 5 errori che fanno" titleEm="perdere la NASpI">
        <div style={{maxWidth:'700px',margin:'0 auto'}}>
          <InfoBox type="warn"><p><strong>Fare domanda dopo 68 giorni.</strong> Il termine &egrave; tassativo e non ammette proroghe di nessun tipo. Se lo superi anche di un solo giorno, perdi il diritto alla NASpI anche se avevi tutti i requisiti. Segna la data sul calendario il giorno stesso in cui perdi il lavoro e muoviti subito.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non comunicare un nuovo lavoro.</strong> Anche un lavoretto part-time da poche ore a settimana o una collaborazione occasionale va comunicato all&apos;INPS con il modulo NASpI-COM entro 30 giorni dall&apos;inizio dell&apos;attivit&agrave;. Se non lo fai, la NASpI decade completamente e retroattivamente. Non vale la pena rischiare.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Saltare il Centro per l&apos;Impiego.</strong> Hai 15 giorni dalla domanda NASpI per presentarti e firmare il Patto di Servizio. Se non ti presenti, la NASpI pu&ograve; essere sospesa. Se rifiuti un&apos;offerta di lavoro congrua senza motivo valido, la NASpI decade.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non aggiornare l&apos;ISEE.</strong> Quando perdi il lavoro, il tuo reddito cala drasticamente. Se fai l&apos;ISEE corrente, il tuo indicatore scender&agrave; e potrai accedere a bonus e agevolazioni che prima non ti spettavano: bonus bollette luce e gas, social card da 460&euro;, agevolazioni TARI, tariffe agevolate trasporti. Potrebbe valere 1.000&ndash;2.000&euro; in pi&ugrave; all&apos;anno.</p></InfoBox>
          <InfoBox type="warn"><p><strong>Non fare il 730.</strong> La NASpI &egrave; reddito a tutti gli effetti. L&apos;INPS ti rilascia la CU (Certificazione Unica) ogni anno. Se nello stesso anno hai avuto sia stipendio che NASpI, il 730 &egrave; praticamente obbligatorio per ricalcolare correttamente le imposte. Se non lo fai, rischi accertamenti fiscali.</p></InfoBox>
        </div>
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} schema={true} />
      </Section>

      <Section id="correlate" title="Approfondimenti e" titleEm="guide correlate">
        <div className="v8-related-grid rv">
          <Link href="/naspi/calcolo" className="v8-related-card"><h4>Calcolo NASpI</h4><p>Formula completa, massimale 1.584&euro;, d&eacute;calage ed esempi pratici di calcolo.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/naspi/domanda-inps" className="v8-related-card"><h4>Domanda NASpI INPS</h4><p>Come presentarla entro 68 giorni, passo per passo con screenshot.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/dimissioni" className="v8-related-card"><h4>Dimissioni volontarie</h4><p>Come dimettersi correttamente online. Preavviso, procedura telematica e TFR.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/tfr" className="v8-related-card"><h4>TFR &mdash; Liquidazione</h4><p>Quando perdi il lavoro ti spetta anche il TFR. Quanto e quando arriva.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
