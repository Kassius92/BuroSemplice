import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';
import { FiscozenBanner, FiscozenSticky } from '@/components/redesign/FiscozenBanner';

export const metadata = {
  title: 'Fattura Elettronica 2026: Come Fare, Software e Obblighi',
  description: 'Come fare la fattura elettronica nel 2026: obblighi, software gratuiti e a pagamento, dati obbligatori, scadenze e conservazione. Guida gratuita.',
  keywords: ['fattura elettronica','fattura elettronica 2026','come fare fattura','SDI','fatturazione elettronica','XML fattura','forfettario fattura'],
  alternates: { canonical: 'https://zeroburocrazia.it/fattura-elettronica' },
  openGraph: { title: 'Fattura Elettronica 2026: Come Fare e Software', url: 'https://zeroburocrazia.it/fattura-elettronica', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogfattura.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogfattura.png'] },
};

const faqItems = [
  { q: "Devo fare la fattura elettronica anche se sono forfettario?", a: "<strong>S\u00ec, dal 2024 \u00e8 obbligatoria per tutti</strong>, compresi i forfettari. Non ci sono pi\u00f9 esenzioni legate al fatturato. Ogni fattura deve essere in formato XML e inviata al Sistema di Interscambio (SdI)." },
  { q: "Posso fare la fattura elettronica gratis?", a: "<strong>S\u00ec.</strong> L\u2019Agenzia delle Entrate offre un servizio gratuito (Fatture e Corrispettivi) per creare, inviare e conservare le fatture. Funziona bene per chi fa poche fatture al mese. Per volumi pi\u00f9 alti, un software dedicato \u00e8 pi\u00f9 pratico." },
  { q: "Quanto tempo ho per emettere la fattura?", a: "Per le fatture <strong>immediate</strong>: 12 giorni dalla data dell\u2019operazione. Per le fatture <strong>differite</strong>: entro il 15 del mese successivo. Se fatturo a fine mese, ho fino al 15 del mese dopo." },
  { q: "La marca da bollo da 2\u20ac: quando serve?", a: "Serve sulle fatture <strong>esenti IVA superiori a 77,47\u20ac</strong>. Se sei forfettario, tutte le tue fatture sopra 77,47\u20ac la richiedono. Il bollo \u00e8 virtuale: lo paghi a fine trimestre tramite F24 sul sito dell\u2019Agenzia delle Entrate." },
  { q: "Devo conservare le fatture? Per quanto?", a: "<strong>S\u00ec, per 10 anni.</strong> La conservazione deve essere digitale a norma. Il servizio gratuito dell\u2019Agenzia delle Entrate include la conservazione automatica. Se usi un software, verifica che includa la conservazione sostitutiva." },
  { q: "Cosa succede se sbaglio una fattura?", a: "Emetti una <strong>nota di credito</strong> per annullare la fattura errata, poi rifai la fattura corretta. Se l\u2019errore \u00e8 solo formale (indirizzo sbagliato), puoi emettere una fattura rettificativa. Il SdI non permette di cancellare fatture gi\u00e0 inviate." },
  { q: "Il cliente privato senza P.IVA: come fatturo?", a: "Inserisci il codice fiscale del cliente e come codice destinatario metti <strong>0000000</strong> (sette zeri). La fattura finir\u00e0 nel cassetto fiscale del cliente sul sito dell\u2019Agenzia delle Entrate. Puoi anche inviargli una copia PDF per cortesia." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Fattura Elettronica 2026: come fare e software', description: 'Come fare la fattura elettronica, obblighi, software e scadenze.', url: '/fattura-elettronica', image: 'ogfattura.png', datePublished: '2026-03-07', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "come", "label": "Come si fa"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />
      <FiscozenSticky />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Fattura <em>elettronica</em> 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Come fare una fattura elettronica, quali software usare, dati obbligatori e scadenze. Anche per forfettari.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>XML</strong><span>Formato obbligatorio</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>12 gg</strong><span>Per emettere</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>10 anni</strong><span>Conservazione</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; la <em>fattura elettronica</em></h2></div>
          <div className="v8-prose rv">
            <p>La fattura elettronica &egrave; una fattura in formato <strong>XML</strong> che viene inviata al cliente attraverso il <Tip t="Sistema di Interscambio: il sistema informatico dell&apos;Agenzia delle Entrate che riceve, controlla e recapita tutte le fatture elettroniche in Italia.">Sistema di Interscambio (SdI)</Tip> dell&apos;Agenzia delle Entrate. Non &egrave; un PDF: &egrave; un file strutturato che il sistema legge automaticamente. Tu lo crei con un software, il software lo invia al SdI, il SdI lo controlla e lo recapita al destinatario.</p>
            <p>Dal 2024 &egrave; <strong>obbligatoria per tutti</strong>, compresi i forfettari. Non ci sono pi&ugrave; esenzioni. Ogni volta che vendi un prodotto o un servizio e devi emettere fattura, quella fattura deve essere elettronica e passare dal SdI.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>SdI</strong> &mdash; Sistema di Interscambio. Il sistema dell&apos;Agenzia delle Entrate che riceve, controlla e recapita le fatture elettroniche. &Egrave; l&apos;intermediario obbligatorio tra te e il tuo cliente.</p>
            <p><strong>XML</strong> &mdash; il formato tecnico della fattura. Non lo vedi mai: il software lo genera automaticamente. Tu compili i dati in un&apos;interfaccia normale e il software crea il file XML per il SdI.</p>
            <p><strong>Codice destinatario</strong> &mdash; il codice di 7 cifre che identifica il software di fatturazione del tuo cliente. Se il cliente &egrave; un privato senza P.IVA, metti 0000000 (sette zeri).</p>
            <p><strong>PEC</strong> &mdash; Posta Elettronica Certificata. Se il cliente non ha un codice destinatario, puoi indicare la sua PEC come canale di ricezione della fattura.</p>
            <p><strong>Conservazione sostitutiva</strong> &mdash; l&apos;obbligo di conservare le fatture in formato digitale per 10 anni. Il servizio gratuito dell&apos;Agenzia delle Entrate la include automaticamente.</p>
            <p><strong>Marca da bollo virtuale</strong> &mdash; per i forfettari, tutte le fatture sopra 77,47&euro; richiedono una marca da bollo di 2&euro;. Non si applica fisicamente: si paga a fine trimestre tramite F24.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="come">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si fa <em>una fattura</em></h2><p className="rv rv-d1">4 passaggi, da zero alla fattura inviata.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Scegli lo strumento</h3><p>Portale gratuito dell&apos;Agenzia delle Entrate (Fatture e Corrispettivi) oppure un software/commercialista online. Il portale va bene per poche fatture al mese.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Inserisci i dati</h3><p>I tuoi dati (P.IVA, regime fiscale), i dati del cliente (P.IVA o codice fiscale, codice destinatario o PEC), la descrizione del servizio e l&apos;importo.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Il software genera l&apos;XML e lo invia al SdI</h3><p>Il SdI controlla il file (formato, coerenza dati) e lo recapita al destinatario. Se c&apos;&egrave; un errore, ti manda una notifica di scarto.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Conserva la fattura</h3><p>La fattura va conservata 10 anni in formato digitale. Con il portale dell&apos;AE la conservazione &egrave; automatica e gratuita.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="strumenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quale software <em>usare</em></h2></div>
          <div className="v8-cost-grid">
            <div className="v8-cost-card"><div className="v8-cost-method">Portale AE (gratuito)</div><div className="v8-cost-price">0&euro;</div><div className="v8-cost-time">Poche fatture al mese, interfaccia basica.</div></div>
            <div className="v8-cost-card hl"><div className="v8-cost-method">Commercialista online</div><div className="v8-cost-price">Da 19&euro;/mese</div><div className="v8-cost-time">Fatturazione + commercialista + dichiarazione. Tutto incluso.</div></div>
            <div className="v8-cost-card"><div className="v8-cost-method">Software autonomo</div><div className="v8-cost-price">5&ndash;25&euro;/mese</div><div className="v8-cost-time">Solo fatturazione, senza commercialista.</div></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Consiglio onesto:</strong> se sei forfettario con pochi clienti, il portale gratuito dell&apos;Agenzia funziona. Se fai pi&ugrave; di 10 fatture al mese o vuoi la gestione automatica (scadenze, incassi, F24), un servizio come Fiscozen ti semplifica la vita e include anche il commercialista.</p></div>
          </div>
          <div style={{marginTop:'32px'}}>
            <FiscozenBanner />
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="dati">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Dati <em>obbligatori</em> in fattura</h2></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>I tuoi dati</h3>
              <div className="v8-doc"><strong>Ragione sociale o nome/cognome</strong></div>
              <div className="v8-doc"><strong>Numero di partita IVA</strong></div>
              <div className="v8-doc"><strong>Indirizzo sede legale</strong></div>
              <div className="v8-doc"><strong>Regime fiscale</strong> (forfettario: RF19)</div>
            </div>
            <div className="v8-doc-group">
              <h3>Dati del cliente + fattura</h3>
              <div className="v8-doc"><strong>P.IVA o codice fiscale</strong> del cliente</div>
              <div className="v8-doc"><strong>Codice destinatario</strong> o PEC</div>
              <div className="v8-doc"><strong>Numero e data fattura</strong> (progressivo)</div>
              <div className="v8-doc"><strong>Descrizione</strong> del servizio/prodotto</div>
              <div className="v8-doc"><strong>Importo</strong> + eventuale marca da bollo</div>
            </div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'24px'}}>
            <p>Se sei forfettario, in fattura devi inserire la dicitura: <em>&ldquo;Operazione effettuata ai sensi dell&apos;art. 1, commi 54-89, L. 190/2014&rdquo;</em>. Non devi applicare l&apos;IVA (metti N2.2 come codice natura). Per fatture sopra 77,47&euro; indica la marca da bollo di 2&euro;.</p>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Luca</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Luca &egrave; un web designer forfettario.</strong> All&apos;inizio usava il portale gratuito dell&apos;Agenzia delle Entrate. Funzionava, ma ogni fattura gli costava 15 minuti: doveva cercare i codici fiscali, riscrivere le descrizioni, calcolare la marca da bollo a mano. Dopo 6 mesi, passa a un commercialista online: ora la fattura la crea in <strong style={{color:'var(--v8-bg)'}}>30 secondi</strong>. Il software ha gi&agrave; i dati dei clienti abituali, calcola il bollo automaticamente e invia al SdI con un click.</p>
          </div>
        </div>
      </section>

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

      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/piva" className="v8-related-card"><h4>Aprire P.IVA</h4><p>Come aprire la partita IVA: costi, tasse, procedura.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/regime-forfettario" className="v8-related-card"><h4>Regime Forfettario</h4><p>Requisiti, tetto 85k, coefficienti e obblighi.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>SPID</h4><p>Serve per accedere al portale dell&apos;Agenzia delle Entrate.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
