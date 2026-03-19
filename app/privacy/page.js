import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Privacy Policy — ZeroBurocrazia',
  description: 'Privacy Policy di ZeroBurocrazia: come trattiamo i tuoi dati, cookie, pubblicità, diritti GDPR e come contattarci.',
  alternates: { canonical: 'https://zeroburocrazia.it/privacy' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Privacy Policy — ZeroBurocrazia',
    description: 'Privacy Policy di ZeroBurocrazia.',
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
        <p className="page-sub">Ultimo aggiornamento: marzo 2026 &middot; Titolare: ZeroBurocrazia</p>

        <div className="box-info">
          <p>Versione breve: le guide sono gratuite e non richiedono registrazione. Il sito mostra annunci pubblicitari tramite Google AdSense e utilizza cookie per questo scopo. Puoi gestire le tue preferenze sui cookie in qualsiasi momento. Non vendiamo i tuoi dati a nessuno.</p>
        </div>

        <div className="prose">
          <h2>1. Chi siamo</h2>
          <p>ZeroBurocrazia &egrave; un servizio informativo che aiuta i cittadini italiani a orientarsi nella burocrazia e nelle pratiche della vita quotidiana. Il titolare del trattamento dei dati &egrave; ZeroBurocrazia (<a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>).</p>

          <h2>2. Quali dati raccogliamo</h2>

          <h3>a) Dati di navigazione (automatici)</h3>
          <p>Come qualsiasi sito web, i nostri server registrano automaticamente alcune informazioni tecniche quando lo visiti:</p>
          <ul>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e tempo di permanenza</li>
            <li>Sito da cui provieni (referrer)</li>
          </ul>
          <p>Questi dati vengono usati esclusivamente per statistiche aggregate e non vengono mai associati alla tua identit&agrave;.</p>

          <h3>b) Cookie</h3>
          <p>Utilizziamo le seguenti tipologie di cookie:</p>
          <ul>
            <li><strong>Cookie tecnici</strong> &mdash; necessari al funzionamento del sito (es. preferenza di visualizzazione). Non richiedono consenso.</li>
            <li><strong>Cookie pubblicitari (Google AdSense)</strong> &mdash; utilizzati da Google per mostrare annunci pertinenti e misurare le prestazioni pubblicitarie. Questi cookie possono raccogliere informazioni sulla tua navigazione per personalizzare gli annunci. Vengono attivati solo dopo il tuo consenso esplicito tramite il banner cookie.</li>
          </ul>
          <p>Puoi modificare le tue preferenze sui cookie in qualsiasi momento cliccando su &quot;Gestisci cookie&quot; nel footer del sito.</p>

          <h2>3. Pubblicit&agrave;</h2>
          <p>ZeroBurocrazia mostra annunci pubblicitari tramite <strong>Google AdSense</strong> per finanziare le guide gratuite. Google e i suoi partner pubblicitari possono utilizzare cookie per mostrare annunci basati sulle tue visite precedenti a questo e ad altri siti. Puoi disattivare la personalizzazione degli annunci visitando le <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Impostazioni annunci di Google</a>.</p>
          <p>Per maggiori informazioni su come Google utilizza i dati, consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.</p>

          <h2>4. Partner commerciali</h2>
          <p>Alcune guide contengono link di affiliazione verso servizi che riteniamo utili (es. Fiscozen). Se clicchi su questi link e acquisti un servizio, riceviamo una commissione &mdash; senza costi aggiuntivi per te. Questi partner non ricevono tuoi dati personali da parte nostra.</p>

          <h2>5. Con chi condividiamo i dati</h2>
          <h3>a) Fornitori tecnici</h3>
          <ul>
            <li><strong>Vercel</strong> &mdash; hosting del sito</li>
            <li><strong>Google AdSense</strong> &mdash; pubblicit&agrave; (previo consenso cookie)</li>
          </ul>
          <p>Tutti i fornitori sono selezionati per la conformit&agrave; al GDPR e trattano i dati come responsabili del trattamento.</p>

          <h3>b) Dati che non condividiamo mai</h3>
          <p>Non vendiamo i tuoi dati a broker di dati o soggetti terzi non indicati in questa policy.</p>

          <h2>6. Conservazione dei dati</h2>
          <ul>
            <li><strong>Log tecnici:</strong> conservati per un massimo di 30 giorni.</li>
            <li><strong>Cookie pubblicitari:</strong> la durata dipende dal tipo di cookie. Consulta la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">pagina cookie di Google</a> per i dettagli.</li>
          </ul>

          <h2>7. I tuoi diritti (GDPR)</h2>
          <p>In base al Regolamento Europeo 2016/679 (GDPR), hai il diritto di:</p>
          <ul>
            <li><strong>Accesso</strong> &mdash; sapere quali dati abbiamo su di te</li>
            <li><strong>Rettifica</strong> &mdash; correggere dati inesatti</li>
            <li><strong>Cancellazione</strong> &mdash; chiedere l&apos;eliminazione dei tuoi dati</li>
            <li><strong>Portabilit&agrave;</strong> &mdash; ricevere i tuoi dati in formato leggibile</li>
            <li><strong>Opposizione</strong> &mdash; opporti al trattamento</li>
            <li><strong>Revoca del consenso</strong> &mdash; ritirare il consenso ai cookie in qualsiasi momento</li>
          </ul>
          <p>Per esercitare questi diritti scrivi a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>. Risponderemo entro 30 giorni.</p>
          <p>Se ritieni che i tuoi diritti siano stati violati, puoi presentare reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>).</p>

          <h2>8. Minori</h2>
          <p>ZeroBurocrazia non raccoglie consapevolmente dati da minori di 16 anni.</p>

          <h2>9. Modifiche a questa policy</h2>
          <p>Possiamo aggiornare questa Privacy Policy in caso di modifiche al servizio o alla normativa. La data di &quot;ultimo aggiornamento&quot; in cima alla pagina indica quando &egrave; stata modificata l&apos;ultima volta.</p>

          <h2>10. Contatti</h2>
          <p>Per qualsiasi domanda sulla privacy scrivi a: <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a></p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
