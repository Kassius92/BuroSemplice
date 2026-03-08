import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Chi siamo — ZeroBurocrazia',
  description: 'ZeroBurocrazia: chi siamo, come lavoriamo e perché abbiamo creato il sito. Guide burocratiche gratuite, verificate e scritte in italiano semplice.',
  alternates: { canonical: 'https://zeroburocrazia.it/chi-siamo' },
  openGraph: {
    title: 'Chi siamo — ZeroBurocrazia',
    description: 'ZeroBurocrazia: chi siamo, come lavoriamo e perché abbiamo creato il sito. Guide burocratiche gratuite, verificate e scritte in italiano semplice.',
    url: 'https://zeroburocrazia.it/chi-siamo',
    type: 'website',
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Il progetto</div>
        <h1 className="page-title">Chi siamo</h1>
        <p className="page-lead">ZeroBurocrazia nasce da una frustrazione personale: scoprire — spesso troppo tardi — che esistevano bonus, agevolazioni e procedure più semplici di cui nessuno aveva pensato di informarci.</p>

        <div className="prose">
          <h2>Il problema che risolviamo</h2>
          <p>Le informazioni burocratiche in Italia esistono. Sono sui siti dell&apos;Agenzia delle Entrate, dell&apos;INPS, dei Comuni. Il problema non è che mancano — è che sono scritte per chi le conosce già, disperse in centinaia di pagine, aggiornate senza preavviso, e quasi mai collegate tra loro.</p>
          <p>Il risultato: milioni di italiani perdono ogni anno migliaia di euro in bonus a cui hanno diritto, fanno pratiche nel modo sbagliato, pagano più del necessario — semplicemente perché nessuno gliel&apos;ha spiegato in modo chiaro.</p>
          <p><strong>ZeroBurocrazia è quell&apos;amico che sa sempre cosa fare.</strong> Non un chatbot generico. Non un sito istituzionale. Una guida scritta come se te la spiegasse una persona di fiducia, con i numeri reali, le scadenze vere, gli uffici giusti.</p>

          <h2>Come lavoriamo</h2>
          <p>Ogni scheda di ZeroBurocrazia è costruita a partire dalle fonti ufficiali: circolari dell&apos;Agenzia delle Entrate, messaggi INPS, testi di legge, note ministeriali. Poi viene riscritta in italiano comprensibile, con esempi concreti e numeri verificati.</p>
          <p>Le guide vengono aggiornate quando cambia la normativa — non una volta l&apos;anno. Quando pubblichiamo una scheda, indichiamo sempre la data dell&apos;ultimo aggiornamento e le fonti di riferimento.</p>
          <p>Non siamo infallibili. Se trovi un errore o un&apos;informazione non aggiornata, <Link href="/contatti">scrivici</Link>: lo correggiamo entro 24 ore.</p>

          <h2>I nostri valori</h2>
          <div className="values">
            <div className="val">
              <div className="val-icon">🎁</div>
              <div className="val-title">Gratis davvero</div>
              <div className="val-text">Le guide sono complete al 100%. Non tagliamo il contenuto e non nascondiamo nulla. Chi legge sa tutto quello che deve sapere.</div>
            </div>
            <div className="val">
              <div className="val-icon">✅</div>
              <div className="val-title">Verificato</div>
              <div className="val-text">Ogni numero, ogni scadenza, ogni requisito viene controllato sulle fonti ufficiali. Indichiamo sempre da dove viene l&apos;informazione.</div>
            </div>
            <div className="val">
              <div className="val-icon">🗣️</div>
              <div className="val-title">Semplice</div>
              <div className="val-text">Zero paroloni senza spiegazione. Se usiamo un termine tecnico, lo spieghiamo subito. Comprensibile da un quattordicenne.</div>
            </div>
            <div className="val">
              <div className="val-icon">🚫</div>
              <div className="val-title">Zero pubblicità</div>
              <div className="val-text">Non vendiamo spazi pubblicitari. Non facciamo affiliate marketing. Non suggeriamo prodotti in cambio di commissioni.</div>
            </div>
          </div>

          <div className="promise">
            <h3>La nostra promessa</h3>
            <p>Le guide gratuite non sono mai tagliate per spingerti a pagare. La versione gratuita è completa. La personalizzazione (quando sarà disponibile) aggiunge i tuoi numeri specifici, i tuoi uffici, i tuoi bonus — non toglie informazioni a chi non paga.</p>
            <p><strong>Il modello è semplice: diamo tanto gratis, chiediamo poco per il personalizzato, non operiamo mai in perdita di fiducia.</strong></p>
          </div>

          <h2>Contattaci</h2>
          <p>Hai trovato un errore? Vuoi suggerire una guida? Hai una domanda? Scrivi a <a href="mailto:info@zeroburocrazia.it">info@zeroburocrazia.it</a> o vai alla <Link href="/contatti">pagina contatti</Link>. Rispondiamo a tutto.</p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
