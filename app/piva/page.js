import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';
import { FiscozenBanner, FiscozenSticky } from '@/components/redesign/FiscozenBanner';

export const metadata = {
  title: 'Come Aprire la Partita IVA nel 2026: Costi, Tasse e Forfettario',
  description: 'Come aprire partita IVA nel 2026: regime forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO e procedura online. Guida gratuita.',
  keywords: ['partita IVA','aprire partita IVA','partita IVA 2026','regime forfettario','codice ATECO','contributi INPS','P.IVA costi','commercialista'],
  alternates: { canonical: 'https://zeroburocrazia.it/piva' },
  openGraph: { title: 'Come Aprire la Partita IVA nel 2026: Costi, Tasse e Forfettario', url: 'https://zeroburocrazia.it/piva', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogpiva.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpiva.png'] },
};

const faqItems = [
  { q: "Posso avere partita IVA e lavoro dipendente?", a: "S\u00ec. Il tuo reddito da dipendente non deve superare 35.000\u20ac annui per restare nel forfettario. Non serve il permesso del datore (salvo clausole nel contratto), ma non puoi fatturare pi\u00f9 del 50% allo stesso datore di lavoro da cui sei dipendente." },
  { q: "Quanto costa aprire la partita IVA?", a: "<strong>Zero.</strong> L\u2019apertura \u00e8 gratuita se fai tutto dal sito dell\u2019Agenzia delle Entrate con SPID. Con un commercialista online il costo \u00e8 spesso incluso nell\u2019abbonamento annuale (200-500\u20ac). Se sei artigiano o commerciante, c\u2019\u00e8 il diritto annuale Camera di Commercio di circa 50-100\u20ac." },
  { q: "Devo per forza avere un commercialista?", a: "No, non \u00e8 obbligatorio per legge. In regime forfettario la contabilit\u00e0 \u00e8 semplice. Per\u00f2 un commercialista (anche online, 200-500\u20ac/anno) ti evita errori che costano molto di pi\u00f9: codice ATECO sbagliato, scadenze mancate, contributi calcolati male. <strong>Per chi inizia, \u00e8 un investimento che si ripaga.</strong>" },
  { q: "Cosa succede se supero gli 85.000\u20ac?", a: "Tra 85.000 e 100.000\u20ac esci dal forfettario <strong>dall\u2019anno successivo</strong>. Sopra i 100.000\u20ac esci <strong>immediatamente</strong> e devi applicare l\u2019IVA sulle fatture da quel momento. Per rientrare nel forfettario devi stare sotto soglia per due anni consecutivi." },
  { q: "Posso scaricare le spese in forfettario?", a: "No. Nel forfettario non scarichi spese reali. Il reddito si calcola in modo forfettario: ricavi \u00d7 coefficiente di redditivit\u00e0. <strong>L\u2019unica deduzione possibile</strong> sono i contributi INPS versati. Se hai molte spese reali, valuta l\u2019ordinario." },
  { q: "Forfettario o ordinario?", a: "Per la grande maggioranza di chi inizia, il <strong>forfettario \u00e8 meglio</strong>: tasse pi\u00f9 basse (5-15% vs 23-43%), niente IVA da gestire, contabilit\u00e0 semplice. L\u2019ordinario conviene solo se hai molti costi deducibili (ufficio, dipendenti, attrezzature) o fatturo oltre 85.000\u20ac." },
  { q: "Devo aprire un conto corrente business?", a: "Non \u00e8 obbligatorio per legge. Ma \u00e8 <strong>fortemente consigliato</strong>: separa le spese personali da quelle professionali e ti aiuta a mettere da parte il 30% per le tasse. Molti conti business per forfettari sono gratuiti o costano pochissimo." },
  { q: "Come chiudo la partita IVA?", a: "Con il modello AA9/12 di cessazione all\u2019Agenzia delle Entrate, gratuito. Devi comunicarlo entro 30 giorni dalla fine dell\u2019attivit\u00e0. Restano da pagare saldo tasse e contributi sull\u2019ultimo anno di attivit\u00e0." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come aprire Partita IVA nel 2026', description: 'Costi, tasse, forfettario, contributi INPS, codice ATECO e procedura.', url: '/piva', image: 'ogpiva.png', datePublished: '2026-03-04', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <NavV8 />
      <FiscozenSticky />

      {/* HERO */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(196,154,42,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat lavoro rv">Lavoro &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Aprire <em>Partita IVA</em> nel 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Forfettario o ordinario, costi reali, tasse, contributi INPS, codice ATECO. Tutto quello che devi sapere prima di metterti in proprio.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>5%</strong><span>Tasse forfettario (primi 5 anni)</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>85k&euro;</strong><span>Tetto forfettario</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>0&euro;</strong><span>Costo apertura</span></div>
          </div>
        </div>
      </section>

      {/* COS'&Egrave; */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; la <em>partita IVA</em></h2></div>
          <div className="v8-prose rv">
            <p>La partita IVA &egrave; un numero di 11 cifre che ti identifica come lavoratore autonomo davanti allo Stato. Se vuoi lavorare in proprio &mdash; freelance, consulente, artigiano, commerciante &mdash; ti serve per emettere fatture, pagare le tasse e versare i contributi INPS. Senza P.IVA non puoi fatturare e qualsiasi compenso che ricevi &egrave; irregolare.</p>
            <p>La paura della partita IVA &egrave; spesso ingiustificata. Con il <strong>regime forfettario</strong> paghi tra il 5% e il 15% di tasse (contro il 23-43% dell&apos;IRPEF da dipendente), non devi gestire l&apos;IVA, e la contabilit&agrave; &egrave; minima. Un freelance con 30.000&euro; di ricavi tiene in tasca circa il 75% di quello che fattura.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>Regime forfettario</strong> &mdash; il regime fiscale agevolato per chi fattura fino a 85.000&euro;/anno. Tassa sostitutiva al 5% per i primi 5 anni (poi 15%), niente IVA, contabilit&agrave; semplificata. La scelta giusta per la grande maggioranza di chi inizia.</p>
            <p><strong>Codice ATECO</strong> &mdash; il codice numerico che identifica la tua attivit&agrave;. Determina il <Tip t="La percentuale del fatturato su cui paghi le tasse. Ogni codice ATECO ha un coefficiente diverso: 78% per i consulenti, 67% per i commercianti, 40% per i commercianti di alimenti.">coefficiente di redditivit&agrave;</Tip> (quante tasse paghi) e l&apos;ente previdenziale (INPS Gestione Separata o INPS Artigiani/Commercianti). Sceglierlo male pu&ograve; costarti migliaia di euro.</p>
            <p><strong>Coefficiente di redditivit&agrave;</strong> &mdash; la percentuale del fatturato su cui paghi le tasse nel forfettario. Se il tuo coefficiente &egrave; 78% e fatturi 30.000&euro;, paghi le tasse su 23.400&euro; (non sull&apos;intero fatturato).</p>
            <p><strong>Contributi INPS</strong> &mdash; i contributi pensionistici obbligatori. Per i professionisti in Gestione Separata sono il 26,23% del reddito. Per artigiani e commercianti c&apos;&egrave; un minimale fisso di circa 4.500&euro;/anno anche a reddito zero.</p>
            <p><strong>Imposta sostitutiva</strong> &mdash; nel forfettario, al posto dell&apos;IRPEF paghi un&apos;imposta unica del 5% (primi 5 anni) o del 15% (dopo). Sostituisce IRPEF, addizionali regionali e comunali, IRAP.</p>
            <p><strong>Fatturazione elettronica</strong> &mdash; obbligatoria per tutti dal 2024. Le fatture vanno emesse in formato XML e inviate al Sistema di Interscambio (SdI) dell&apos;Agenzia delle Entrate. Si pu&ograve; usare il servizio gratuito dell&apos;AE o un software come Fiscozen.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Quando serve davvero la P.IVA:</strong> serve se la tua attivit&agrave; &egrave; continuativa e abituale. Se fai un lavoro una tantum (un sito web per un amico, una consulenza isolata), puoi usare la prestazione occasionale fino a 5.000&euro; annui. Oltre, o se lavori regolarmente, ti serve la P.IVA.</p></div>
          </div>
        </div>
      </section>

      {/* QUANTO PAGHI */}
      <section className="v8-section warm" id="quanto-paghi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quanto paghi <em>davvero</em></h2><p className="rv rv-d1">Ecco i numeri reali con un esempio concreto.</p></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Sara, graphic designer, 30.000&euro; di ricavi</h3>
            <p>Sara fattura 30.000&euro;/anno. Regime forfettario, primi 5 anni, Gestione Separata INPS, coefficiente 78%.</p>
          </div>
          <div style={{maxWidth:'600px',margin:'0 auto'}}>
            <div className="v8-esempio-inner" style={{background:'var(--v8-dark)',borderRadius:'20px',padding:'32px 28px'}}>
              <div className="v8-esempio-math" style={{margin:0}}>
                <div className="v8-esempio-line rv"><span>Ricavi annui</span><span>30.000&euro;</span></div>
                <div className="v8-esempio-line rv rv-d1"><span>Reddito imponibile (78%)</span><span>23.400&euro;</span></div>
                <div className="v8-esempio-line rv rv-d2"><span>Contributi INPS (26,23%)</span><span>&minus;6.138&euro;</span></div>
                <div className="v8-esempio-line rv rv-d3"><span>Imposta sostitutiva (5%)</span><span>&minus;863&euro;</span></div>
                <div className="v8-esempio-line rv rv-d4"><span>Commercialista online</span><span>&minus;400&euro;</span></div>
                <div className="v8-esempio-line v8-esempio-total rv"><span>Netto in tasca</span><span>~22.600&euro;</span></div>
              </div>
            </div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'24px'}}>
            <p>Sara tiene in tasca il <strong>75% di quello che fattura</strong>. Il 25% va in contributi (che sono la sua pensione) e tasse. La regola d&apos;oro: <strong>metti da parte il 30% di ogni incasso</strong> fin dal primo giorno. Il secondo anno paghi saldo + primo acconto insieme.</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Attenzione al secondo anno.</strong> Il primo anno paghi poco: solo il saldo delle tasse. Ma a giugno dell&apos;anno dopo arrivano saldo + primo acconto insieme: per Sara sarebbero circa 12.000&euro; in un colpo. Metti da parte il 30% dal giorno uno.</p></div>
          </div>
        </div>
      </section>

      {/* FORFETTARIO vs ORDINARIO */}
      <section className="v8-section" id="forfettario">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Forfettario o <em>ordinario?</em></h2><p className="rv rv-d1">Per la grande maggioranza di chi inizia, il forfettario &egrave; imbattibile.</p></div>
          <div className="v8-detr-grid" id="regimeGrid">
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-green)'}}>5-15%</div><h4>Forfettario</h4><p>Fino a 85.000&euro;/anno</p><div className="v8-detr-detail">Tassa sostitutiva 5% (primi 5 anni) poi 15%. Niente IVA. Contabilit&agrave; minima. Non scarichi spese reali ma paghi meno tasse. Ideale per freelance, consulenti, artigiani.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct" style={{color:'var(--v8-coral)'}}>23-43%</div><h4>Ordinario</h4><p>Senza limiti di fatturato</p><div className="v8-detr-detail">IRPEF a scaglioni (23-43%) + IVA da gestire + contabilit&agrave; complessa. Per&ograve; scarichi tutte le spese reali (ufficio, attrezzature, dipendenti). Conviene solo con molti costi o fatturato sopra 85k&euro;.</div></div>
          </div>
          <div className="v8-prose rv" style={{marginTop:'32px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>I 7 requisiti per il forfettario nel 2026</h3>
            <p>Ricavi sotto 85.000&euro;/anno. Spese per dipendenti sotto 20.000&euro;. Redditi da lavoro dipendente sotto 35.000&euro; (se hai anche un lavoro da dipendente). Non fatturare pi&ugrave; del 50% all&apos;ex datore (se eri dipendente nei 2 anni precedenti). Non avere partecipazioni in societ&agrave; di persone. Non avere prevalenza di redditi di capitale. Non operare in regime speciale IVA.</p>
          </div>
        </div>
      </section>

      {/* COME APRIRE */}
      <section className="v8-section warm" id="come-aprire">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si apre, <em>in pratica</em></h2></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Scegli il codice ATECO</h3><p>Il codice che identifica la tua attivit&agrave;. Determina quanto paghi di tasse. Non indovinare: un commercialista per questa scelta costa 50-100&euro; e te ne risparmia migliaia.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Scegli il regime fiscale</h3><p>Forfettario (5-15%, semplice) o ordinario (23-43%, complesso). Per la maggior parte: forfettario.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Compila il modello AA9/12</h3><p>Online su agenziaentrate.gov.it con SPID, oppure il commercialista lo fa per te. Il numero P.IVA arriva in poche ore.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Iscrizione INPS e Camera di Commercio</h3><p>Se sei professionista: Gestione Separata (online, gratis). Se sei artigiano/commerciante: iscrizione Camera di Commercio + INPS artigiani/commercianti.</p></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Quanto tempo ci vuole?</strong> Con un commercialista online, in 24-48 ore sei operativo. Il numero di partita IVA viene rilasciato in poche ore dalla presentazione del modello AA9/12.</p></div>
          </div>
        </div>
      </section>

      {/* COSTI + FISCOZEN */}
      <section className="v8-section" id="costi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Costi di <em>gestione</em></h2><p className="rv rv-d1">Aprire la P.IVA &egrave; gratis. Gestirla costa qualcosa. Ecco le opzioni.</p></div>
          <div className="v8-cost-grid">
            <div className="v8-cost-card"><div className="v8-cost-method">Da solo (servizi AE)</div><div className="v8-cost-price">0&euro;</div><div className="v8-cost-time">Fatturazione gratuita AE, dichiarazione fai-da-te.</div></div>
            <div className="v8-cost-card hl"><div className="v8-cost-method">Commercialista online</div><div className="v8-cost-price">200&ndash;500&euro;</div><div className="v8-cost-time">Apertura, dichiarazione, F24, fatturazione, assistenza.</div></div>
            <div className="v8-cost-card"><div className="v8-cost-method">Commercialista tradizionale</div><div className="v8-cost-price">800&ndash;2.000&euro;</div><div className="v8-cost-time">Tutto + consulenza in studio, rapporto personale.</div></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Consiglio onesto:</strong> se sei in forfettario con un&apos;attivit&agrave; semplice (freelance, consulente, artigiano), un commercialista online basta e avanza. Paghi 200-500&euro;/anno, hai tutto gestito e non devi pensare a scadenze e moduli.</p></div>
          </div>
          <div style={{marginTop:'32px'}}>
            <FiscozenBanner />
          </div>
        </div>
      </section>

      {/* CONTRIBUTI INPS */}
      <section className="v8-section warm" id="contributi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Contributi <em>INPS</em></h2><p className="rv rv-d1">Quanto paghi dipende dal tipo di attivit&agrave;.</p></div>
          <div className="v8-prose rv">
            <p><strong>Professionisti (Gestione Separata):</strong> 26,23% del reddito imponibile. Nessun contributo minimo: se non fatturi, non paghi. Nessuna possibilit&agrave; di riduzione. Tipico per consulenti, designer, sviluppatori, formatori.</p>
            <p><strong>Artigiani e commercianti:</strong> circa 24-24,48% del reddito, ma con un contributo minimo fisso di circa 4.500&euro;/anno anche a reddito zero. Se sei in forfettario, puoi chiedere la riduzione del 35% (contributo minimo scende a ~3.100&euro;/anno) ma devi fare domanda all&apos;INPS entro il 28 febbraio. Non &egrave; automatica.</p>
            <p><strong>Professionisti con cassa:</strong> avvocati, medici, ingegneri, architetti versano alla propria cassa professionale. Le aliquote variano per cassa.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTI */}
      <section className="v8-section" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Documenti <em>necessari</em></h2></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Per l&apos;apertura</h3>
              <div className="v8-doc"><strong>Documento d&apos;identit&agrave;</strong> valido + codice fiscale</div>
              <div className="v8-doc"><strong>SPID</strong> &mdash; per aprire online tramite il sito dell&apos;Agenzia delle Entrate</div>
              <div className="v8-doc"><strong>Codice ATECO scelto</strong> &mdash; meglio se validato da un commercialista</div>
              <div className="v8-doc"><strong>Indirizzo attivit&agrave;</strong> &mdash; pu&ograve; essere casa tua, non serve un ufficio</div>
            </div>
            <div className="v8-doc-group">
              <h3>Per la gestione</h3>
              <div className="v8-doc"><strong>IBAN</strong> per rimborsi &mdash; consigliato un conto business separato</div>
              <div className="v8-doc"><strong>Software fatturazione</strong> &mdash; gratuito AE o incluso nel commercialista online</div>
              <div className="v8-doc"><strong>PEC</strong> (Posta Elettronica Certificata) &mdash; obbligatoria per le P.IVA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ESEMPIO */}
      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Giulia</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Giulia ha 27 anni</strong>, vive a Bologna, lavorava come social media manager da dipendente a 1.400&euro; netti al mese. Un&apos;azienda le offre un progetto freelance da 2.500&euro;/mese, poi un&apos;altra 1.500&euro;/mese. Totale potenziale: <strong style={{color:'var(--v8-bg)'}}>4.000&euro;/mese di ricavi</strong>.</p>
            <p className="rv rv-d2" style={{fontSize:'15px'}}>Ha usato un commercialista online (350&euro;/anno tutto incluso). In 48 ore aveva il numero di partita IVA e poteva fatturare. Codice ATECO: 73.11.02 (consulenza pubblicitaria).</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Ricavi annui</span><span>48.000&euro;</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Reddito imponibile (78%)</span><span>37.440&euro;</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Contributi INPS + tasse</span><span>&minus;11.203&euro;</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>Commercialista online</span><span>&minus;400&euro;</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Netto in tasca</span><span>~36.400&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Da dipendente: <strong style={{color:'#E4F3ED'}}>16.800&euro;/anno</strong>. Con la P.IVA forfettaria: <strong style={{color:'#E4F3ED'}}>36.400&euro;/anno</strong> &mdash; pi&ugrave; del doppio. E lavora da casa, sceglie i suoi orari.</p>
        </div>
      </section>

      {/* ERRORI */}
      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Errori che <em>costano caro</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Non mettere da parte i soldi per le tasse.</strong> Il primo anno sembra tutto gratis. Poi a giugno del secondo anno arriva saldo + acconto insieme. Apri un conto separato e versa il 30% ad ogni fattura incassata. Non toccarli mai.</p></div>
            </div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Scegliere il codice ATECO a caso.</strong> Un codice sbagliato pu&ograve; significare un coefficiente di redditivit&agrave; pi&ugrave; alto (= pi&ugrave; tasse) o un inquadramento previdenziale errato con contributi minimi da 4.500&euro;/anno. Un commercialista per questa scelta costa 50-100&euro;.</p></div>
            </div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Fatturare pi&ugrave; del 50% al tuo ex datore.</strong> Se hai aperto P.IVA dopo essere stato dipendente e fatturi pi&ugrave; della met&agrave; al tuo ex capo nei primi 2 anni, perdi il diritto al 5% e passi al 15%. Triplichi le tasse.</p></div>
            </div>
            <div className="v8-info warn rv rv-d3">
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Non chiedere la riduzione INPS.</strong> Se sei artigiano/commerciante in forfettario, la riduzione 35% sui contributi non &egrave; automatica. Devi fare domanda all&apos;INPS entro il 28 febbraio. Senza: 4.500&euro;/anno. Con: 3.100&euro;/anno.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="v8-section" id="faq">
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
      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/regime-forfettario" className="v8-related-card"><h4>Regime Forfettario</h4><p>Requisiti 2026, tetto 85k, coefficienti e limiti.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/fattura-elettronica" className="v8-related-card"><h4>Fattura elettronica</h4><p>Come emettere, software e obblighi.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/naspi" className="v8-related-card"><h4>NASpI anticipata</h4><p>Usa la NASpI come capitale per aprire la tua attivit&agrave;.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>SPID</h4><p>Serve per aprire la P.IVA online.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
