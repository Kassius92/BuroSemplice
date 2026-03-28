import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';
import { FiscozenBanner, FiscozenSticky } from '@/components/redesign/FiscozenBanner';

export const metadata = {
  title: 'Regime Forfettario 2026: Requisiti, Tasse e Coefficienti',
  description: 'Regime forfettario 2026: requisiti, tetto 85.000 euro, aliquota 5% o 15%, coefficienti di redditivit&agrave; per attivit&agrave;, obblighi e quando conviene. Guida gratuita.',
  keywords: ['regime forfettario','forfettario 2026','requisiti forfettario','tasse forfettario','coefficiente redditivit&agrave;','aliquota 5%','85000 euro'],
  alternates: { canonical: 'https://zeroburocrazia.it/regime-forfettario' },
  openGraph: { title: 'Regime Forfettario 2026: Requisiti, Tasse e Coefficienti', url: 'https://zeroburocrazia.it/regime-forfettario', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogforfettario.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogforfettario.png'] },
};

const faqItems = [
  { q: "Quanto si paga di tasse in forfettario?", a: "<strong>5% per i primi 5 anni</strong> se apri una nuova attivit\u00e0, poi <strong>15%</strong>. Questa imposta sostitutiva sostituisce IRPEF, addizionali regionali e comunali, e IRAP. A queste si aggiungono i contributi INPS (dal 26% per professionisti, dal 24% per artigiani/commercianti)." },
  { q: "Qual \u00e8 il tetto di fatturato per il forfettario?", a: "<strong>85.000\u20ac di ricavi annui.</strong> Se fatturi tra 85.000 e 100.000\u20ac, esci dal forfettario dall\u2019anno successivo. Se superi i 100.000\u20ac, esci immediatamente e devi applicare l\u2019IVA da quel momento." },
  { q: "Posso scaricare le spese in forfettario?", a: "<strong>No.</strong> Nel forfettario non scarichi spese reali. Il reddito si calcola applicando un coefficiente forfettario ai ricavi. L\u2019unica deduzione ammessa sono i contributi INPS versati. Se hai molte spese, l\u2019ordinario potrebbe convenirti di pi\u00f9." },
  { q: "Devo gestire l\u2019IVA in forfettario?", a: "<strong>No.</strong> I forfettari non applicano l\u2019IVA sulle fatture e non la detraggono sugli acquisti. In fattura va indicato il codice natura N2.2 (non soggetto IVA). Questo semplifica enormemente la gestione contabile." },
  { q: "Posso essere forfettario e dipendente?", a: "<strong>S\u00ec</strong>, se il reddito da lavoro dipendente non supera 35.000\u20ac annui. Non puoi fatturare pi\u00f9 del 50% allo stesso datore da cui sei dipendente. Le due attivit\u00e0 sono indipendenti ai fini fiscali." },
  { q: "Il coefficiente di redditivit\u00e0: cos\u2019\u00e8?", a: "\u00c8 la percentuale del fatturato su cui paghi le tasse. Ogni codice ATECO ha un coefficiente diverso. Per i consulenti \u00e8 il 78%, per i commercianti di alimentari il 40%, per le costruzioni il 86%. Significa che se fatturo 30.000\u20ac con coefficiente 78%, pago le tasse su 23.400\u20ac." },
  { q: "Quando conviene l\u2019ordinario?", a: "Se hai molti costi reali deducibili (ufficio, attrezzature, dipendenti, materie prime) che superano la percentuale forfettaria, l\u2019ordinario potrebbe farti pagare meno tasse. Anche se fatturo prevalentemente a soggetti con P.IVA (che possono detrarre l\u2019IVA), l\u2019ordinario pu\u00f2 essere vantaggioso." },
  { q: "Devo fare la fattura elettronica?", a: "<strong>S\u00ec, dal 2024 \u00e8 obbligatoria per tutti i forfettari.</strong> Devi emettere fatture XML tramite il SdI. Puoi usare il portale gratuito dell\u2019Agenzia delle Entrate o un software come Fiscozen." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Regime Forfettario 2026: requisiti, tasse e coefficienti', description: 'Regime forfettario 2026: requisiti, aliquota 5-15%, coefficienti, obblighi.', url: '/regime-forfettario', image: 'ogforfettario.png', datePublished: '2026-03-07', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "requisiti", "label": "Requisiti"}, {"id": "calcolo", "label": "Calcolo tasse"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />
      <FiscozenSticky />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Regime <em>Forfettario</em> 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Requisiti, tetto 85.000&euro;, aliquota 5% o 15%, coefficienti per attivit&agrave;, obblighi e quando conviene rispetto all&apos;ordinario.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>5%</strong><span>Tasse (primi 5 anni)</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>85k&euro;</strong><span>Tetto ricavi</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>No IVA</strong><span>Non la gestisci</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; il regime <em>forfettario</em></h2></div>
          <div className="v8-prose rv">
            <p>Il regime forfettario &egrave; il regime fiscale agevolato per le partite IVA che fatturano fino a 85.000&euro;/anno. &ldquo;Forfettario&rdquo; perch&eacute; le tasse non si calcolano sulle spese reali ma applicando un <Tip t="La percentuale del fatturato su cui paghi le tasse. Cambia in base al tipo di attivit&agrave; (codice ATECO). Per i consulenti &egrave; il 78%, per i commercianti di alimentari il 40%.">coefficiente forfettario</Tip> ai ricavi. Questo rende la gestione fiscale molto pi&ugrave; semplice.</p>
            <p>I vantaggi sono enormi: paghi un&apos;imposta sostitutiva del <strong>5% per i primi 5 anni</strong> (poi 15%), non devi gestire l&apos;IVA (non la applichi e non la detrai), e la contabilit&agrave; &egrave; minima. Per la grande maggioranza di chi apre partita IVA in Italia, il forfettario &egrave; la scelta migliore.</p>
            <p>Lo svantaggio principale &egrave; che non puoi dedurre le spese reali (tranne i contributi INPS). Se hai molti costi (ufficio, dipendenti, attrezzature, materie prime), l&apos;ordinario potrebbe convenirti di pi&ugrave;. Ma per freelance, consulenti, professionisti e artigiani con poche spese, il forfettario &egrave; imbattibile.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="requisiti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">I 7 requisiti <em>nel 2026</em></h2></div>
          <div className="v8-prose rv">
            <p>Per accedere al regime forfettario nel 2026 devi soddisfare tutti questi requisiti contemporaneamente:</p>
            <p><strong>1. Ricavi sotto 85.000&euro;/anno.</strong> Se superi questa soglia ma resti sotto 100.000&euro;, esci dal forfettario dall&apos;anno successivo. Se superi 100.000&euro;, esci immediatamente.</p>
            <p><strong>2. Spese per dipendenti sotto 20.000&euro;/anno.</strong> Compensi per collaboratori e dipendenti non devono superare questa cifra.</p>
            <p><strong>3. Redditi da lavoro dipendente sotto 35.000&euro;/anno</strong> (se hai anche un lavoro dipendente).</p>
            <p><strong>4. Non fatturare pi&ugrave; del 50% al tuo ex datore</strong> di lavoro (se eri dipendente nei 2 anni precedenti l&apos;apertura).</p>
            <p><strong>5. Non avere partecipazioni in societ&agrave; di persone</strong> (SNC, SAS) o in SRL che svolgono attivit&agrave; correlata alla tua.</p>
            <p><strong>6. Non avere prevalenza di redditi di capitale</strong> rispetto ai redditi di lavoro autonomo.</p>
            <p><strong>7. Non operare in regime speciale IVA</strong> (tabaccherie, editoria, ecc.).</p>
          </div>
        </div>
      </section>

      <section className="v8-section" id="quanto-paghi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quanto paghi <em>davvero</em></h2></div>
          <div className="v8-prose rv">
            <p>Il reddito imponibile si calcola cos&igrave;: <strong>ricavi &times; coefficiente di redditivit&agrave;</strong>. Il coefficiente dipende dal codice ATECO della tua attivit&agrave;. Su quel reddito paghi l&apos;imposta sostitutiva (5% o 15%) e i contributi INPS.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Coefficienti per attivit&agrave; comuni</h3>
            <p><strong>Consulenti, designer, sviluppatori</strong> (codici 70-74): coefficiente 78%. <strong>Commercio al dettaglio</strong>: 40%. <strong>Commercio all&apos;ingrosso</strong>: 40%. <strong>Costruzioni</strong>: 86%. <strong>Alloggio e ristorazione</strong>: 40%. <strong>Attivit&agrave; professionali</strong> (avvocati, ingegneri, architetti con cassa): 78%. <strong>Intermediari del commercio</strong>: 62%. <strong>Altre attivit&agrave; economiche</strong>: 67%.</p>
            <p>Il coefficiente determina quanta parte del fatturato &egrave; considerata &ldquo;reddito&rdquo; ai fini fiscali. Con coefficiente 78%, su 30.000&euro; di ricavi paghi le tasse su 23.400&euro;. Con coefficiente 40%, su 30.000&euro; paghi le tasse su soli 12.000&euro;.</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Non indovinare il codice ATECO.</strong> Un codice sbagliato pu&ograve; significare un coefficiente pi&ugrave; alto (= pi&ugrave; tasse) o un inquadramento INPS errato con contributi minimi da 4.500&euro;/anno. Un commercialista per questa scelta costa 50-100&euro; e te ne risparmia migliaia.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="obblighi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Obblighi e <em>adempimenti</em></h2></div>
          <div className="v8-prose rv">
            <p><strong>Fatturazione elettronica:</strong> obbligatoria dal 2024 per tutti i forfettari. Devi emettere fatture in formato XML tramite il SdI. In fattura scrivi la dicitura: &ldquo;Operazione effettuata ai sensi dell&apos;art. 1, commi 54-89, L. 190/2014&rdquo;. Non applichi l&apos;IVA (codice N2.2).</p>
            <p><strong>Marca da bollo:</strong> obbligatoria su tutte le fatture sopra 77,47&euro;. Il bollo &egrave; virtuale (2&euro;): lo paghi a fine trimestre tramite F24 sul sito dell&apos;Agenzia delle Entrate.</p>
            <p><strong>Dichiarazione dei redditi:</strong> una volta all&apos;anno, con il Modello Redditi PF (non il 730). Il commercialista la compila per te.</p>
            <p><strong>Contributi INPS:</strong> pagamento in 4 rate trimestrali (giugno, settembre, novembre, gennaio) + saldo a giugno. Per artigiani/commercianti c&apos;&egrave; il minimale fisso anche a reddito zero.</p>
            <p><strong>Cosa NON devi fare:</strong> niente registri IVA, niente liquidazioni IVA trimestrali, niente IRAP, niente studi di settore, niente certificazione dei corrispettivi (se non hai un negozio fisico).</p>
          </div>
        </div>
      </section>

      <section className="v8-section" id="conviene">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quando <em>conviene</em></h2></div>
          <div className="v8-detr-grid" id="convGrid">
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-green)'}}>S&igrave;</div><h4>Forfettario conviene se</h4><p>Fatturi sotto 85k/anno</p><div className="v8-detr-detail">Hai poche spese deducibili, lavori da solo, sei freelance, consulente, professionista o artigiano con pochi costi. Il 5-15% di tasse &egrave; imbattibile.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-coral)'}}>No</div><h4>Meglio l&apos;ordinario se</h4><p>Tanti costi deducibili</p><div className="v8-detr-detail">Hai un ufficio in affitto, dipendenti, attrezzature costose, materie prime. I costi reali superano quello che il coefficiente forfettario ti riconosce. Anche se fatturo principalmente a soggetti con P.IVA, l&apos;IVA in detrazione pu&ograve; essere un vantaggio.</div></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="fiscozen">
        <div className="v8-section-inner">
          <div className="v8-prose rv" style={{marginBottom:'24px'}}>
            <p>Il forfettario &egrave; semplice ma non banale. Un commercialista online ti aiuta con codice ATECO, scadenze, contributi e dichiarazione &mdash; e costa meno di un commercialista tradizionale.</p>
          </div>
          <FiscozenBanner />
        </div>
      </section>

      <section className="v8-section" id="uscita">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quando esci dal <em>forfettario</em></h2></div>
          <div className="v8-prose rv">
            <p>Se i tuoi ricavi superano <strong>85.000&euro; ma restano sotto 100.000&euro;</strong>, esci dal forfettario dall&apos;anno successivo. Hai tempo per prepararti al passaggio all&apos;ordinario.</p>
            <p>Se i tuoi ricavi superano <strong>100.000&euro;</strong>, esci <strong>immediatamente</strong>: devi applicare l&apos;IVA sulle fatture da quel momento in poi. Questo &egrave; il caso pi&ugrave; critico: se non ti sei preparato, pu&ograve; creare problemi seri con i clienti e con la gestione fiscale.</p>
            <p>Per rientrare nel forfettario dopo esserne uscito, devi stare sotto la soglia di 85.000&euro; per <strong>due anni consecutivi</strong>.</p>
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
            <Link href="/piva" className="v8-related-card"><h4>Aprire P.IVA</h4><p>Come aprire la partita IVA: procedura, costi e tasse.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/fattura-elettronica" className="v8-related-card"><h4>Fattura elettronica</h4><p>Come fare la fattura elettronica: obblighi, software e dati.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/naspi" className="v8-related-card"><h4>NASpI anticipata</h4><p>Usa la NASpI come capitale per aprire la tua attivit&agrave;.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>SPID</h4><p>Serve per la fatturazione sul portale dell&apos;Agenzia delle Entrate.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
