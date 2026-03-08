import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Contatti — ZeroBurocrazia',
  description: 'Contatta ZeroBurocrazia: hai trovato un errore, vuoi suggerire una guida o hai una domanda? Rispondiamo entro 24 ore.',
  alternates: { canonical: 'https://zeroburocrazia.it/contatti' },
  openGraph: {
    title: 'Contatti — ZeroBurocrazia',
    description: 'Contatta ZeroBurocrazia: hai trovato un errore, vuoi suggerire una guida o hai una domanda? Rispondiamo entro 24 ore.',
    url: 'https://zeroburocrazia.it/contatti',
  },
};

export default function ContattiPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Parliamo</div>
        <h1 className="page-title">Contatti</h1>
        <p className="page-lead">Hai trovato un errore in una guida? Vuoi suggerire un argomento? Hai una domanda? Scrivi — rispondiamo a tutto, di solito entro 24 ore.</p>

        <div className="contact-grid">
          <a href="mailto:info@zeroburocrazia.it" className="contact-card">
            <div className="contact-icon">✉️</div>
            <div className="contact-type">Email generale</div>
            <div className="contact-value">info@zeroburocrazia.it</div>
            <div className="contact-desc">Per domande, suggerimenti e feedback sul sito e sui contenuti.</div>
          </a>
          <a href="mailto:info@zeroburocrazia.it" className="contact-card">
            <div className="contact-icon">🔒</div>
            <div className="contact-type">Privacy e dati</div>
            <div className="contact-value">info@zeroburocrazia.it</div>
            <div className="contact-desc">Per richieste legate al trattamento dei dati personali (GDPR).</div>
          </a>
          <a href="mailto:info@zeroburocrazia.it" className="contact-card">
            <div className="contact-icon">🔍</div>
            <div className="contact-type">Segnala un errore</div>
            <div className="contact-value">info@zeroburocrazia.it</div>
            <div className="contact-desc">Hai trovato un&apos;informazione sbagliata o non aggiornata? Dimmelo — la correggo entro 24 ore.</div>
          </a>
          <a href="mailto:info@zeroburocrazia.it" className="contact-card">
            <div className="contact-icon">💡</div>
            <div className="contact-type">Suggerisci una guida</div>
            <div className="contact-value">info@zeroburocrazia.it</div>
            <div className="contact-desc">Manca una situazione di vita che ti ha creato problemi? Scrivimi qual è e la scrivo.</div>
          </a>
        </div>

        <div className="faq-section">
          <h2>Domande frequenti su ZeroBurocrazia</h2>

          <div className="faq-item">
            <div className="faq-q">Posso fidarmi delle informazioni di ZeroBurocrazia?</div>
            <div className="faq-a">Le guide sono scritte a partire da fonti ufficiali (Agenzia delle Entrate, INPS, testi di legge) e aggiornate quando cambia la normativa. Ogni scheda indica le fonti di riferimento. Detto questo, ZeroBurocrazia non è un consulente professionale: per decisioni importanti, verifica sempre con un commercialista o un CAF.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Le guide sono davvero gratuite? Cosa c&apos;è a pagamento?</div>
            <div className="faq-a">Tutto è gratuito. Le guide sono complete e le schede personalizzate anche. Compilando il form ricevi gratis i tuoi numeri specifici, i tuoi uffici e i tuoi bonus. In cambio ti chiediamo solo il consenso a essere eventualmente contattato da professionisti qualificati della tua zona.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Ho trovato un&apos;informazione sbagliata. Cosa faccio?</div>
            <div className="faq-a">Scrivici a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a> indicando la scheda, la sezione e l&apos;errore che hai trovato. Verifichiamo e correggiamo entro 24 ore. Grazie — ci aiuti a tenere le guide accurate.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Posso usare il contenuto di ZeroBurocrazia sul mio sito?</div>
            <div className="faq-a">Puoi citare brevi estratti con link alla fonte. Non è consentita la riproduzione integrale dei testi. Per usi editoriali o collaborazioni scrivi a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a>.</div>
          </div>

          <div className="faq-item">
            <div className="faq-q">ZeroBurocrazia può rispondere a domande sulla mia situazione specifica?</div>
            <div className="faq-a">Al momento no — siamo un servizio informativo, non un consulente. Le guide coprono le situazioni più comuni in modo approfondito. Per domande molto specifiche ti consigliamo un CAF, un patronato o un commercialista.</div>
          </div>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
