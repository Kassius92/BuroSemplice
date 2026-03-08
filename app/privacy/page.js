import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Privacy Policy — ZeroBurocrazia',
  description: 'Privacy Policy di ZeroBurocrazia: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
  alternates: { canonical: 'https://zeroburocrazia.it/privacy' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Privacy Policy — ZeroBurocrazia',
    description: 'Privacy Policy di ZeroBurocrazia: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
    url: 'https://zeroburocrazia.it/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Documento legale</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-sub">Ultimo aggiornamento: marzo 2026 · Titolare: ZeroBurocrazia</p>

        <div className="box-info">
          <p>Versione breve: le guide sono gratuite e non richiedono dati. Se richiedi la scheda personalizzata, ti chiediamo alcuni dati per prepararla e, con il tuo consenso esplicito, per metterti in contatto con professionisti della tua zona. Puoi revocare il consenso in qualsiasi momento.</p>
        </div>

        <div className="prose">
          <h2>1. Chi siamo</h2>
          <p>ZeroBurocrazia è un servizio informativo che aiuta i cittadini italiani a orientarsi nella burocrazia e nelle pratiche della vita quotidiana. Il titolare del trattamento dei dati è ZeroBurocrazia (<a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>).</p>

          <h2>2. Quali dati raccogliamo</h2>

          <h3>a) Dati di navigazione (automatici)</h3>
          <p>Come qualsiasi sito web, i nostri server registrano automaticamente alcune informazioni tecniche quando lo visiti:</p>
          <ul>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e tempo di permanenza</li>
            <li>Sito da cui provieni (referrer)</li>
          </ul>
          <p>Questi dati vengono usati esclusivamente per statistiche aggregate e non vengono mai associati alla tua identità.</p>

          <h3>b) Dati forniti con il form di personalizzazione</h3>
          <p>Se richiedi una scheda personalizzata gratuita, ti chiediamo:</p>
          <ul>
            <li><strong>Dati di contatto:</strong> nome (facoltativo), email, numero di telefono</li>
            <li><strong>Dati anagrafici:</strong> età, città o CAP, situazione lavorativa, nucleo familiare</li>
            <li><strong>Dati economici indicativi:</strong> fascia di reddito annuo lordo</li>
            <li><strong>Dati specifici per la scheda:</strong> informazioni relative alla tua pratica (es. tipo di lavori per ristrutturazione, fase di acquisto casa, situazione gravidanza, ecc.)</li>
            <li><strong>Note libere:</strong> qualsiasi dettaglio aggiuntivo che scegli di fornirci</li>
          </ul>

          <h3>c) Dati raccolti tramite il form promemoria scadenze</h3>
          <p>Se ti iscrivi al promemoria scadenze, raccogliamo solo il tuo indirizzo email per inviarti comunicazioni informative relative alla scheda di riferimento.</p>

          <h3>d) Cookie</h3>
          <p>Utilizziamo esclusivamente cookie tecnici, necessari al funzionamento del sito (es. preferenza visualizzazione breve/completa). Non utilizziamo cookie di profilazione o di tracciamento pubblicitario. Non è necessario il consenso per i cookie tecnici ai sensi dell&apos;art. 122 del Codice Privacy.</p>

          <h2>3. Per cosa usiamo i dati</h2>
          <p>I dati vengono trattati per le seguenti finalità:</p>
          <ul>
            <li><strong>Generazione della scheda personalizzata</strong> (base giuridica: esecuzione di un servizio richiesto dall&apos;utente, art. 6.1.b GDPR) — Usiamo i dati del form per generare una scheda con importi, bonus, uffici e scadenze calcolati sulla tua situazione. La scheda viene inviata all&apos;email indicata.</li>
            <li><strong>Contatto con professionisti selezionati</strong> (base giuridica: consenso esplicito, art. 6.1.a GDPR) — Solo se hai dato il consenso specifico nel form, i tuoi dati di contatto e la tua situazione potranno essere condivisi con professionisti qualificati (commercialisti, consulenti fiscali, mediatori creditizi, geometri, consulenti del lavoro) della tua zona, affinché possano contattarti con proposte pertinenti alla tua esigenza.</li>
            <li><strong>Comunicazioni commerciali da ZeroBurocrazia</strong> (base giuridica: consenso esplicito, art. 6.1.a GDPR) — Solo se hai dato il consenso specifico, potremmo inviarti comunicazioni relative a servizi, guide o novità di ZeroBurocrazia.</li>
            <li><strong>Statistiche aggregate</strong> (base giuridica: legittimo interesse, art. 6.1.f GDPR) — Dati di navigazione anonimizzati per capire quali guide sono più utili e migliorare il sito.</li>
          </ul>

          <h2>4. Con chi condividiamo i dati</h2>

          <h3>a) Professionisti terzi</h3>
          <p>Solo se hai prestato il consenso esplicito tramite il form di personalizzazione, i tuoi dati potranno essere condivisi con le seguenti categorie di professionisti:</p>
          <ul>
            <li>Commercialisti e consulenti fiscali</li>
            <li>Mediatori creditizi e consulenti mutui</li>
            <li>Geometri, architetti e imprese edili</li>
            <li>Consulenti del lavoro e patronati</li>
            <li>Agenti immobiliari</li>
          </ul>
          <p>I professionisti ricevono esclusivamente i dati pertinenti alla tua richiesta (es. un commercialista riceverà i dati relativi al 730, non quelli relativi a una ristrutturazione). I professionisti sono tenuti a trattare i tuoi dati nel rispetto del GDPR e a contattarti solo in relazione alla tua esigenza specifica.</p>

          <h3>b) Fornitori tecnici</h3>
          <ul>
            <li><strong>Vercel</strong> — hosting del sito</li>
            <li><strong>Brevo</strong> — invio email promemoria scadenze</li>
            <li><strong>Google Sheets</strong> — registrazione temporanea dei dati del form per la generazione della scheda</li>
          </ul>
          <p>Tutti i fornitori sono selezionati per la conformità al GDPR.</p>

          <h3>c) Dati che non condividiamo mai</h3>
          <p>Non vendiamo i tuoi dati a broker di dati, piattaforme pubblicitarie o soggetti non indicati in questa policy. Non utilizziamo i dati per pubblicità programmatica o profilazione a fini pubblicitari.</p>

          <h2>5. Conservazione dei dati</h2>
          <ul>
            <li><strong>Dati del form:</strong> conservati per un massimo di 24 mesi dalla compilazione, poi eliminati. Se revochi il consenso prima, vengono eliminati entro 30 giorni.</li>
            <li><strong>Email promemoria:</strong> conservate fino a cancellazione dell&apos;iscrizione (possibile con un clic da ogni email).</li>
            <li><strong>Log tecnici:</strong> conservati per un massimo di 30 giorni.</li>
          </ul>

          <h2>6. I tuoi diritti (GDPR)</h2>
          <p>In base al Regolamento Europeo 2016/679 (GDPR), hai il diritto di:</p>
          <ul>
            <li><strong>Accesso</strong> — sapere quali dati abbiamo su di te e come vengono usati</li>
            <li><strong>Rettifica</strong> — correggere dati inesatti</li>
            <li><strong>Cancellazione</strong> — chiedere l&apos;eliminazione dei tuoi dati</li>
            <li><strong>Portabilità</strong> — ricevere i tuoi dati in formato leggibile</li>
            <li><strong>Opposizione</strong> — opporti al trattamento per finalità di marketing</li>
            <li><strong>Revoca del consenso</strong> — ritirare il consenso al contatto da parte di professionisti terzi o alle comunicazioni commerciali, in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca</li>
          </ul>
          <p>Per esercitare questi diritti scrivi a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>. Risponderemo entro 30 giorni.</p>
          <p>Se ritieni che i tuoi diritti siano stati violati, puoi presentare reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>).</p>

          <h2>7. Minori</h2>
          <p>ZeroBurocrazia non raccoglie consapevolmente dati da minori di 14 anni. Il form di personalizzazione è riservato a maggiorenni. Se ritieni che un minore ci abbia fornito dati personali, contattaci a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>.</p>

          <h2>8. Modifiche a questa policy</h2>
          <p>Possiamo aggiornare questa Privacy Policy in caso di modifiche al servizio o alla normativa. La data di &quot;ultimo aggiornamento&quot; in cima alla pagina indica quando è stata modificata l&apos;ultima volta. Per modifiche sostanziali, ti avviseremo con un avviso visibile sul sito.</p>

          <h2>9. Contatti</h2>
          <p>Per qualsiasi domanda sulla privacy scrivi a: <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a></p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
