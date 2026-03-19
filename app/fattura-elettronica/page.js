import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import VersionToggle from '@/components/VersionToggle';
import QuizFatturaE from '@/components/QuizFatturaE';
import Tip from '@/components/Tip';
import SidebarFiscozen from '@/components/SidebarFiscozen';
import StickyFiscozen from '@/components/StickyFiscozen';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Fattura Elettronica 2026: Come Farla, Obblighi, Software Gratis e Guida Completa',
  description: 'Fattura elettronica 2026: chi deve farla, come funziona il Sistema di Interscambio, software gratuito dell\'Agenzia delle Entrate, scadenze e errori da evitare.',
  keywords: ["fattura elettronica", "come fare fattura elettronica", "SDI", "codice destinatario", "fattura XML", "fatturazione elettronica 2026", "FatturAE", "nota di credito", "cassetto fiscale", "marca da bollo fattura"],
  alternates: { canonical: 'https://zeroburocrazia.it/fattura-elettronica' },
  openGraph: {
    title: 'Fattura Elettronica 2026: Come Farla, Obblighi e Software Gratis',
    description: 'Guida completa alla fattura elettronica: come funziona, chi deve farla, strumenti gratuiti e a pagamento.',
    url: 'https://zeroburocrazia.it/fattura-elettronica',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogfatturaelettronica.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Fattura Elettronica 2026: Guida Completa', description: 'Come fare la fattura elettronica, chi deve farla, software gratis e errori da evitare.', images: ['https://zeroburocrazia.it/ogfatturaelettronica.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'chi', label: 'Chi deve farla' },
  { id: 'come', label: 'Come si fa' },
  { id: 'strumenti', label: 'Strumenti' },
  { id: 'dati', label: 'Dati obbligatori' },
  { id: 'scadenze', label: 'Scadenze e conservazione' },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ' },
];

const faqItems = [
  { q: "Quanto tempo ho per inviare la fattura?", a: "<strong>12 giorni</strong> dalla data dell'operazione per le fatture immediate. Per le fatture differite, entro il <strong>15 del mese successivo</strong>. Se sforai, rischi sanzioni dal 5% al 10% dell'importo." },
  { q: "La fattura elettronica va conservata?", a: "<strong>S\u00EC, per 10 anni</strong> in formato digitale. Puoi usare il servizio gratuito di conservazione dell'Agenzia delle Entrate (va attivato una volta sul portale Fatture e Corrispettivi) oppure il sistema del tuo software di fatturazione." },
  { q: "I forfettari devono fare fattura elettronica?", a: "<strong>S\u00EC, dal 1\u00B0 gennaio 2024.</strong> L'obbligo \u00E8 stato esteso a tutti i forfettari indipendentemente dal fatturato. Non ci sono pi\u00F9 esenzioni." },
  { q: "Posso fare fattura elettronica gratis?", a: "<strong>S\u00EC.</strong> L'Agenzia delle Entrate mette a disposizione un portale web gratuito e un'app (FatturAE). Funziona bene se fai poche fatture al mese. Per volumi pi\u00F9 alti conviene un software dedicato." },
  { q: "Cosa succede se sbaglio una fattura?", a: "Devi emettere una <strong>nota di credito</strong> (per annullare o correggere) entro i termini previsti. Non puoi semplicemente cancellare una fattura gi\u00E0 inviata al SDI. Se l'errore \u00E8 sul codice destinatario, il SDI la scarta e devi reinviarla corretta." },
  { q: "Cos'\u00E8 il codice destinatario?", a: "\u00C8 un codice di <strong>7 caratteri</strong> che identifica il canale di ricezione del cliente. Se il cliente \u00E8 un privato o non ha un codice, usi <strong>0000000</strong> (sette zeri) e inserisci la PEC o il codice fiscale." },
  { q: "La fattura verso un privato (B2C) come funziona?", a: "Stesse regole, ma il codice destinatario \u00E8 <strong>0000000</strong>. La fattura viene depositata nel cassetto fiscale del cliente (area riservata Agenzia Entrate). Tu devi comunque consegnare una copia (cartacea o PDF) al cliente." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Fattura elettronica 2026: come farla, obblighi e software gratis', description: 'Guida completa alla fattura elettronica 2026.', url: '/fattura-elettronica', image: 'ogfatturaelettronica.png', datePublished: '2026-03-09', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/><line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/><circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Fattura <em>elettronica</em></h1>
            <p className="hero-sub">Come funziona, chi deve farla, quali strumenti usare (anche gratis) e gli errori che costano caro. Spiegata come te la spiegherebbe un amico.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; D.Lgs. 127/2015 &middot; Provvedimento 89757/2018</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">XML</div><div className="hl">formato obbligatorio<br/>per tutte le fatture</div></div>
            <div className="hstat"><div className="hn">SDI</div><div className="hl">il postino digitale<br/>dell&apos;Agenzia Entrate</div></div>
            <div className="hstat"><div className="hn">12 gg</div><div className="hl">tempo massimo<br/>per l&apos;invio</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/piva" className="ps">{'\uD83D\uDCBC'} Apro partita IVA</a>
              <a href="/regime-forfettario" className="ps">{'\uD83D\uDCCA'} Regime forfettario</a>
              <a href="/730" className="ps">{'\uD83E\uDDFE'} Faccio il 730</a>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Fatture online</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📋 Regole fattura</a>
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="ps">📄 Portale SDI</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc r d1"><div className="si">{'\uD83D\uDCC4'}</div><div className="sn">XML</div><div className="sl">formato unico obbligatorio</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCE8'}</div><div className="sn">SDI</div><div className="sl">Sistema di Interscambio</div></div>
                <div className="sc r d3"><div className="si">{'\u23F1'}</div><div className="sn">12 giorni</div><div className="sl">per inviare la fattura</div></div>
                <div className="sc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">Gratis</div><div className="sl">portale Agenzia Entrate</div></div>
                <div className="sc r d2"><div className="si">{'\uD83D\uDCBC'}</div><div className="sn">Tutti</div><div className="sl">anche forfettari dal 2024</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDDD3'}</div><div className="sn">10 anni</div><div className="sl">conservazione obbligatoria</div></div>
              </div>
            </div>
            <QuizFatturaE />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; la fattura elettronica (spiegato semplice)</h2>
            <p>&Egrave; una fattura come quella di sempre &mdash; con i tuoi dati, quelli del cliente, l&apos;importo e l&apos;<Tip t="Imposta sul Valore Aggiunto. La tassa che aggiungi al prezzo quando vendi un prodotto o un servizio. L'aliquota standard &egrave; il 22%. I forfettari non la applicano.">IVA</Tip>. La differenza? Invece di farla in PDF o su carta, la crei in un formato speciale (<Tip t="eXtensible Markup Language. Un formato di file che i computer leggono facilmente. La fattura XML ha tutti i dati strutturati in campi predefiniti, cos&igrave; l'Agenzia delle Entrate li pu&ograve; elaborare automaticamente.">XML</Tip>) e la invii attraverso un sistema dell&apos;Agenzia delle Entrate chiamato <Tip t="Sistema di Interscambio. Il 'postino digitale' dell'Agenzia delle Entrate. Riceve la tua fattura, controlla che sia corretta, e la consegna al tuo cliente. In pi&ugrave;, informa il Fisco di ogni transazione.">SDI</Tip> (Sistema di Interscambio).</p>
            <p>Lo SDI funziona come un postino digitale: tu invii la fattura, lui controlla che sia corretta (dati obbligatori, formato giusto), la consegna al cliente e ne tiene una copia per il Fisco. Se qualcosa non va, te la rimanda indietro con un messaggio di errore.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>SDI</strong> &mdash; Sistema di Interscambio. Il sistema dell&apos;Agenzia delle Entrate che riceve, controlla e consegna tutte le fatture elettroniche in Italia. Ogni fattura passa da qui.</div>
              <div className="gl-item r d2"><strong>XML</strong> &mdash; Il formato obbligatorio della fattura elettronica. Non devi crearlo a mano: lo genera il software o il portale che usi. Tu compili i campi, il sistema crea l&apos;XML.</div>
              <div className="gl-item r d3"><strong>Codice destinatario</strong> &mdash; Un codice di 7 caratteri che dice al SDI dove consegnare la fattura. Se il cliente non ne ha uno, usi 0000000 (sette zeri) e inserisci la sua PEC.</div>
              <div className="gl-item r d4"><strong>Nota di credito</strong> &mdash; Il documento per annullare o correggere una fattura gi&agrave; inviata. Non puoi &quot;cancellare&quot; una fattura elettronica: devi emetterne una di segno opposto.</div>
              <div className="gl-item r d1"><strong>Cassetto fiscale</strong> &mdash; L&apos;area riservata dell&apos;Agenzia delle Entrate dove vengono depositate le fatture elettroniche. Sia le tue che quelle che ricevi. Accedi con <a href="/spid">SPID</a> o <a href="/cie">CIE</a>.</div>
              <div className="gl-item r d2"><strong>FatturAE</strong> &mdash; L&apos;app gratuita dell&apos;Agenzia delle Entrate per creare e inviare fatture elettroniche dal telefono. Funzionale ma basica.</div>
            </div>
          </div>

          {/* CHI DEVE FARLA */}
          <div className="sec r" id="chi">
            <div className="sec-tag">Chi &egrave; obbligato</div>
            <h2>Chi deve fare la fattura elettronica</h2>
            <p>Dal 2024 l&apos;obbligo &egrave; praticamente universale. Ecco chi deve farla:</p>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Soggetto</th><th>Obbligo</th></tr></thead>
                <tbody>
                  <tr><td>P.IVA regime ordinario</td><td className="tg"><strong>S&igrave;</strong> &mdash; dal 2019</td></tr>
                  <tr><td>P.IVA <Tip t="Il regime fiscale agevolato per chi fattura meno di 85.000&euro;/anno. Tassazione al 15% (o 5% per i primi 5 anni). Non si applica l'IVA.">forfettario</Tip></td><td className="tg"><strong>S&igrave;</strong> &mdash; dal 2024 per tutti</td></tr>
                  <tr><td>Associazioni sportive dilettantistiche</td><td><strong>S&igrave;</strong> &mdash; se superano 25.000&euro;</td></tr>
                  <tr><td>Operatori sanitari verso privati</td><td><strong>No</strong> &mdash; esenzione per tutela privacy dati sanitari</td></tr>
                  <tr><td>Privati senza P.IVA</td><td><strong>No</strong> &mdash; ma le ricevono nel cassetto fiscale</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* COME SI FA */}
          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa una fattura elettronica</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Compila i dati</strong><p>I tuoi dati (P.IVA, ragione sociale), quelli del cliente (<Tip t="Il codice di 7 caratteri che identifica dove il SDI deve consegnare la fattura. Se il cliente non ne ha uno, usa 0000000 e inserisci la sua PEC.">codice destinatario</Tip> o PEC), descrizione, importo e IVA.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Il software genera l&apos;XML</strong><p>Non devi farlo a mano. Il portale dell&apos;Agenzia o il tuo software creano il file automaticamente.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Invio al <Tip t="Sistema di Interscambio. Controlla la fattura (formato, dati obbligatori) e se &egrave; corretta la consegna al cliente.">SDI</Tip></strong><p>Con un click il software invia la fattura. Il SDI la controlla in pochi secondi o minuti.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Consegna e notifica</strong><p>Se tutto &egrave; ok, il SDI consegna la fattura al cliente e ti manda una <strong>ricevuta di consegna</strong>. Se c&apos;&egrave; un errore, ti manda una notifica di scarto con il motivo.</p></div></div>
            </div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Hai 12 giorni di tempo</div><p>La fattura immediata va inviata entro <strong>12 giorni</strong> dalla data dell&apos;operazione. La <Tip t="Una fattura che raggruppa pi&ugrave; operazioni dello stesso mese verso lo stesso cliente. Va emessa entro il 15 del mese successivo.">fattura differita</Tip> entro il 15 del mese successivo. Se sforai, sanzione dal 5% al 10% dell&apos;importo.</p></div>
          </div>

          {/* STRUMENTI */}
          <div className="sec r" id="strumenti">
            <div className="sec-tag">Cosa usare</div>
            <h2>Strumenti per fare la fattura elettronica</h2>
            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Strumento</th><th>Costo</th><th>Per chi</th></tr></thead>
                <tbody>
                  <tr><td><strong>Portale Agenzia Entrate</strong><br/>(Fatture e Corrispettivi)</td><td className="tg">Gratis</td><td>Poche fatture/mese, non serve gestione automatica</td></tr>
                  <tr><td><strong>App FatturAE</strong></td><td className="tg">Gratis</td><td>Fatture semplici dal telefono</td></tr>
                  <tr><td><strong>Software commercialista online</strong><br/>(es. Fiscozen, Fatture in Cloud)</td><td>Da 19&euro;/mese</td><td>Forfettari e piccole P.IVA, gestione completa</td></tr>
                  <tr><td><strong>Gestionali</strong><br/>(es. Aruba, TeamSystem)</td><td>Da 25&euro;/anno</td><td>Chi ha gi&agrave; un gestionale e vuole integrare</td></tr>
                </tbody>
              </table>
            </div>
            <div className="ib tip r"><div className="ib-t">{'\uD83D\uDCA1'} Il consiglio onesto</div><p>Se sei un <strong>forfettario con pochi clienti</strong>, il portale gratuito dell&apos;Agenzia funziona. Se fai pi&ugrave; di 10 fatture al mese o vuoi la gestione automatica (scadenze, incassi, F24), un servizio come <strong>Fiscozen</strong> ti semplifica la vita e include anche il commercialista.</p></div>

            <div className="aff-block r">
              <img src="/fiscozen-logo.png" alt="Fiscozen" className="aff-logo" width="120" height="24" />
            <div className="aff-label">Partner ufficiale ZeroBurocrazia</div>
              <div className="aff-body">
                <div className="aff-left">
                  <div className="aff-title">Fiscozen &mdash; Servizio online per la gestione della partita IVA</div>
                  <div className="aff-text">Apertura P.IVA inclusa nell&apos;abbonamento, commercialista dedicato, fatturazione elettronica inclusa, dichiarazione dei redditi. Gestisce forfettario e ordinario semplificato.</div>
                  <div className="aff-discount">Consulenza fiscale gratuita e 50&euro; di sconto per i lettori</div><div className="aff-note">* Link in partnership &mdash; a te non cambia nulla sul prezzo, anzi risparmi.</div>
                </div>
                <a href="https://fiscozen.it/invitoZEROBUROCRAZIA50A" target="_blank" rel="noopener sponsored" className="aff-btn">Ottieni lo sconto di 50&euro; {'\u2192'}</a>
              </div>
            </div>
          </div>

          {/* DATI OBBLIGATORI */}
          <div className="sec r" id="dati">
            <div className="sec-tag">Checklist</div>
            <h2>Dati obbligatori in fattura</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE2'}</div><div className="clb"><strong>Dati del cedente (tu)</strong><span className="note">P.IVA, denominazione/nome, indirizzo, regime fiscale</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDC64'}</div><div className="clb"><strong>Dati del cliente</strong><span className="note">P.IVA o codice fiscale, denominazione/nome, indirizzo, codice destinatario o PEC</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCC5'}</div><div className="clb"><strong>Numero e data fattura</strong><span className="note">Numerazione progressiva, data operazione</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCDD'}</div><div className="clb"><strong>Descrizione beni/servizi</strong><span className="note">Cosa hai venduto o quale servizio hai reso</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCB0'}</div><div className="clb"><strong>Importo, aliquota IVA, totale</strong><span className="note">Forfettari: indicare &quot;Operazione in franchigia da IVA art. 1 c. 54-89 L. 190/2014&quot;</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Modalit&agrave; di pagamento</strong><span className="note">Bonifico, contanti, carta, ecc.</span></div></li>
            </ul>
          </div>

          {/* SCADENZE E CONSERVAZIONE */}
          <div className="sec r" id="scadenze">
            <div className="sec-tag">Tempistiche</div>
            <h2>Scadenze e conservazione</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Fattura immediata</strong> &mdash; va emessa entro <strong>12 giorni</strong> dalla data dell&apos;operazione (cessione del bene o completamento del servizio). Se la emetti lo stesso giorno, data operazione e data emissione coincidono.</div>
              <div className="gl-item"><strong>Fattura differita</strong> &mdash; per le cessioni di beni con DDT (documento di trasporto), puoi emettere la fattura entro il <strong>15 del mese successivo</strong> alla consegna. Per i servizi, entro 12 giorni.</div>
              <div className="gl-item"><strong>Marca da bollo digitale</strong> &mdash; sulle fatture <strong>sopra i 77,47&euro;</strong> non soggette a IVA (es. forfettari), devi applicare una marca da bollo da 2&euro;. Con la fattura elettronica si indica nel file XML e si versa trimestralmente all&apos;Agenzia delle Entrate, entro il 20 del mese successivo al trimestre.</div>
              <div className="gl-item"><strong>Conservazione digitale</strong> &mdash; le fatture elettroniche vanno conservate per <strong>10 anni</strong>. Il servizio gratuito dell&apos;Agenzia delle Entrate fa la conservazione a norma automatica (se attivato). Altrimenti, servono provider certificati.</div>
            </div>

            <div className="ib tip r"><div className="ib-t">💡 Attiva la conservazione gratuita dell&apos;Agenzia</div>
              <p>Accedi a &quot;Fatture e Corrispettivi&quot; con SPID/CIE, vai su &quot;Fatturazione elettronica&quot; &rarr; &quot;Adesione al servizio di conservazione&quot;. &Egrave; gratis e automatico. Se non lo attivi, rischi di perdere le fatture dopo qualche anno.</p>
            </div>
          </div>

          {/* ERRORI COMUNI */}
          <div className="sec r">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Codice destinatario sbagliato</strong> &mdash; se sbagli il codice SDI del cliente, la fattura va a finire in un limbo. Il cliente non la riceve e potrebbe non pagarti. Verifica sempre il <Tip t="Codice destinatario: codice alfanumerico di 7 caratteri assegnato al sistema di interscambio del destinatario. Se il cliente è un privato o non lo conosce, usa '0000000' (7 zeri) e indica la PEC.">codice destinatario</Tip> o la PEC del cliente prima di inviare.</div>
              <div className="gl-item"><strong>Numerazione non progressiva</strong> &mdash; le fatture devono avere una numerazione <strong>univoca e crescente</strong> nell&apos;anno. Se salti un numero, non &egrave; un dramma fiscale, ma pu&ograve; generare segnalazioni. Non duplicare mai un numero.</div>
              <div className="gl-item"><strong>Dimenticare la marca da bollo</strong> &mdash; per i forfettari &egrave; l&apos;errore pi&ugrave; diffuso. Se emetti fatture sopra 77,47&euro; senza indicare la marca da bollo da 2&euro;, riceverai un avviso dall&apos;Agenzia con sanzione. Il software di fatturazione la inserisce automaticamente, ma controlla.</div>
              <div className="gl-item"><strong>Scarto dal SDI</strong> &mdash; se il file XML ha errori (P.IVA cessata, formato sbagliato), il SDI &quot;scarta&quot; la fattura e hai <strong>5 giorni</strong> per correggerla e reinviarla con la stessa data e numero. Dopo 5 giorni, devi emettere una nuova fattura con nuovo numero.</div>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Andrea, freelance forfettario</h2>
            <p><strong>Andrea ha 30 anni</strong>, &egrave; un web designer freelance con <a href="/piva">P.IVA forfettaria</a>. Fa circa 8 fatture al mese ai suoi clienti. Prima usava il portale gratuito dell&apos;Agenzia, ma perdeva 15 minuti a fattura.</p>
            <p>Passa a Fiscozen: ora la fattura la crea in <strong>30 secondi</strong>. Il software ha gi&agrave; i dati dei suoi clienti abituali, calcola la marca da bollo di 2&euro; automaticamente e invia al SDI con un click. Il commercialista dedicato gli prepara anche le scadenze trimestrali dei contributi.</p>

            <h3>Prima e dopo</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Tempo per fattura</span><span className="db-old">15 minuti</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">30 secondi</span></div>
              <div className="db-row"><span className="db-label">Scadenze fiscali</span><span className="db-old">Le dimenticava</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">Notifiche automatiche</span></div>
              <div className="db-row"><span className="db-label">Costo commercialista</span><span className="db-old">Separato e caro</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">Tutto incluso</span></div>
              <div className="db-row db-total"><span className="db-label">Risparmio annuo</span><span className="db-val">~200&euro; + ore di tempo</span></div>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/piva" className="rc"><span className="rc-e">{'\uD83D\uDCBC'}</span><div className="rc-t">Apro partita IVA</div><div className="rc-d">Forfettario o ordinario, costi veri, INPS e fatturazione.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/regime-forfettario" className="rc"><span className="rc-e">{'\uD83D\uDCCA'}</span><div className="rc-t">Regime forfettario</div><div className="rc-d">Requisiti, tassazione al 5-15%, come funziona davvero.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Faccio il 730</div><div className="rc-d">I forfettari non fanno il 730, ma l'ordinario s&igrave;.</div><span className="rc-ar">{'\u2192'}</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
          <SidebarFiscozen />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Fatture online</div><div className="sbtool-d">Portale gratuito Agenzia Entrate</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Regole fattura</div><div className="sbtool-d">Regole e specifiche tecniche</div></div></a>
            <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📄</span><div><div className="sbtool-n">Portale SDI</div><div className="sbtool-d">Sistema di Interscambio</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/piva" className="sbguide">{'\uD83D\uDCBC'} Apro partita IVA<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/regime-forfettario" className="sbguide">{'\uD83D\uDCCA'} Regime forfettario<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} Faccio il 730<span className="sbg-ar">{'\u2192'}</span></a>
          </div>
        </aside>
      </div>

      <StickyFiscozen />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
