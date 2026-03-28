import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';
import { FiscozenBanner, FiscozenSticky } from '@/components/redesign/FiscozenBanner';

export const metadata = {
  title: 'Come Dare le Dimissioni nel 2026: Procedura Online, Preavviso e TFR',
  description: 'Come dare le dimissioni volontarie online nel 2026: procedura telematica, giorni di preavviso per CCNL, revoca entro 7 giorni, TFR e ultima busta paga.',
  keywords: ['dimissioni','dimissioni volontarie','dimissioni online','preavviso dimissioni','TFR dimissioni','giusta causa','ClicLavoro'],
  alternates: { canonical: 'https://zeroburocrazia.it/dimissioni' },
  openGraph: { title: 'Come Dare le Dimissioni nel 2026', url: 'https://zeroburocrazia.it/dimissioni', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogdimissioni.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogdimissioni.png'] },
};

const faqItems = [
  { q: "Posso revocare le dimissioni?", a: "<strong>S\u00ec, entro 7 giorni</strong> dall\u2019invio del modulo telematico. Accedi di nuovo al portale e revoca. Dopo i 7 giorni non \u00e8 pi\u00f9 possibile, a meno che il datore non accetti di riprenderti." },
  { q: "Cosa succede se non rispetto il preavviso?", a: "Il datore pu\u00f2 <strong>trattenerti dall\u2019ultima busta paga</strong> l\u2019indennit\u00e0 sostitutiva del preavviso: ti scala lo stipendio dei giorni non lavorati. Per\u00f2 puoi accordarti per rinunciare al preavviso: se lui accetta, nessuna trattenuta." },
  { q: "Le ferie non godute vengono pagate?", a: "<strong>S\u00ec.</strong> Nell\u2019ultima busta paga ricevi: stipendio dei giorni lavorati, ferie e permessi non goduti, ratei di tredicesima (e quattordicesima se prevista), e il TFR. Il TFR pu\u00f2 arrivare anche qualche settimana dopo." },
  { q: "Le dimissioni durante il periodo di prova?", a: "Durante il <strong>periodo di prova</strong> non serve la procedura telematica. Puoi dimetterti liberamente, senza preavviso e senza motivazione. Basta una comunicazione scritta, anche un\u2019email." },
  { q: "Posso dimettermi se sono in malattia?", a: "<strong>S\u00ec</strong>, puoi inviare le dimissioni durante la malattia. Per\u00f2 la malattia <strong>sospende il preavviso</strong>: la data di fine rapporto slitta di tanti giorni quanti sono quelli di malattia." },
  { q: "Ho diritto alla NASpI se mi dimetto?", a: "<strong>No</strong>, le dimissioni volontarie non danno diritto alla NASpI. Fanno eccezione le dimissioni per <strong>giusta causa</strong> (stipendio non pagato, mobbing) e quelle durante il <strong>primo anno di vita del figlio</strong>." },
  { q: "Chi \u00e8 escluso dalla procedura telematica?", a: "Dipendenti pubblici, lavoratori domestici (colf, badanti), chi \u00e8 in periodo di prova, chi si dimette nelle sedi conciliative. I genitori con figli sotto i 3 anni devono convalidare le dimissioni all\u2019Ispettorato del Lavoro." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Come dare le dimissioni nel 2026', description: 'Procedura online, preavviso, TFR e ultima busta paga.', url: '/dimissioni', image: 'ogdimissioni.png', datePublished: '2026-03-07', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Come funziona"}, {"id": "procedura", "label": "Procedura online"}, {"id": "preavviso", "label": "Preavviso"}, {"id": "soldi", "label": "TFR e soldi"}, {"id": "giusta-causa", "label": "Giusta causa"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />
      <FiscozenSticky />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(196,154,42,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat lavoro rv">Lavoro &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Come dare le <em>dimissioni</em></h1>
          <p className="v8-ghero-sub rv rv-d2">Procedura telematica, preavviso, TFR e ultima busta paga. Tutto quello che devi sapere per uscire pulito.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>5 min</strong><span>Procedura online</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>7 gg</strong><span>Per revocare</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>TFR</strong><span>Ti spetta sempre</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come funzionano le <em>dimissioni</em></h2></div>
          <div className="v8-prose rv">
            <p>Dal 2016 le dimissioni volontarie si danno solo in un modo: <strong>online</strong>, attraverso il portale del Ministero del Lavoro (servizi.lavoro.gov.it). La lettera di dimissioni cartacea non ha pi&ugrave; valore legale per i dipendenti privati. Questa regola serve a proteggere i lavoratori dalle &ldquo;dimissioni in bianco&rdquo; &mdash; fogli firmati in anticipo che il datore poteva usare per licenziarti senza procedura.</p>
            <p>Il processo &egrave; semplice: accedi con SPID, compili un modulo con i tuoi dati e la data di decorrenza (il giorno dopo il tuo ultimo giorno di lavoro), e invii. Ricevi una ricevuta con protocollo. Il datore riceve la comunicazione automaticamente. Hai 7 giorni per revocare se cambi idea.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>Dimissioni volontarie</strong> &mdash; ti dimetti di tua volont&agrave;. Non hai diritto alla NASpI. Devi rispettare il preavviso del tuo CCNL.</p>
            <p><strong>Dimissioni per giusta causa</strong> &mdash; ti dimetti perch&eacute; il datore ha violato gravemente i suoi obblighi (non ti paga, mobbing, molestie). Non devi dare il preavviso e hai diritto alla NASpI.</p>
            <p><strong>Preavviso</strong> &mdash; il periodo minimo tra la comunicazione delle dimissioni e l&apos;ultimo giorno di lavoro. Dipende dal CCNL, dal livello e dall&apos;anzianit&agrave;. Se non lo rispetti, il datore pu&ograve; trattenerti i giorni mancanti dalla busta paga.</p>
            <p><strong>Data di decorrenza</strong> &mdash; il giorno in cui il rapporto di lavoro cessa. &Egrave; il giorno <strong>dopo</strong> il tuo ultimo giorno di lavoro. Esempio: ultimo giorno 31 marzo = decorrenza 1&deg; aprile.</p>
            <p><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto, la &ldquo;liquidazione&rdquo;. Ti spetta sempre, anche se ti dimetti. Circa una mensilit&agrave; per ogni anno di lavoro.</p>
            <p><strong>Revoca</strong> &mdash; puoi annullare le dimissioni entro 7 giorni dall&apos;invio del modulo telematico. Dopo i 7 giorni sono definitive.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="procedura">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Procedura <em>online</em></h2><p className="rv rv-d1">5 minuti su servizi.lavoro.gov.it con SPID.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Accedi con SPID</h3><p>Vai su servizi.lavoro.gov.it, accedi con SPID. Cerca &ldquo;Dimissioni volontarie&rdquo;.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Compila il modulo</h3><p>Inserisci i dati del datore (codice fiscale azienda, email PEC), il tipo di dimissioni (volontarie o giusta causa) e la data di decorrenza.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Invia e scarica la ricevuta</h3><p>Il sistema genera un modulo con numero di protocollo. Il datore riceve la comunicazione in automatico. Conserva la ricevuta.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Lavora fino all&apos;ultimo giorno</h3><p>Rispetta il preavviso, fai il passaggio di consegne. Nell&apos;ultimo giorno il datore ti d&agrave; la busta paga finale + TFR.</p></div>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Attenzione alla data di decorrenza.</strong> &Egrave; il giorno DOPO il tuo ultimo giorno di lavoro, non il giorno in cui invii il modulo. Sbagliare crea trattenute o contestazioni.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="preavviso">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quanti giorni di <em>preavviso</em></h2><p className="rv rv-d1">Dipende dal tuo CCNL, dal livello e dall&apos;anzianit&agrave;.</p></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>CCNL Commercio e Terziario</h3>
            <p>Quadri e I livello: 45 giorni (sotto 5 anni) o 60 giorni (oltre 5 anni). II e III livello: 20 giorni (sotto 5 anni) o 30 giorni (oltre 5 anni). IV e V livello: 15 giorni (sotto 5 anni) o 20 giorni (oltre 5 anni). VI e VII livello: 10 giorni (sotto 5 anni) o 15 giorni (oltre 5 anni). Nel Commercio il preavviso decorre dal 1&deg; o dal 16 del mese.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>CCNL Metalmeccanici</h3>
            <p>Categorie 6-7 (operai): 5-10 giorni lavorativi. Categorie 5 (impiegati base): 7-15 giorni. Categorie 3-4: 15-30 giorni. Categorie 1-2 (quadri): 1-2 mesi. Nel Metalmeccanico il preavviso si conta in giorni lavorativi (non di calendario).</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Non sai il tuo CCNL o livello?</strong> Guarda la tua busta paga: in alto trovi il CCNL applicato e il tuo livello di inquadramento. Nel dubbio, chiedi al patronato &mdash; &egrave; gratis.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="soldi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">TFR, ultima busta paga <em>e soldi</em></h2></div>
          <div className="v8-prose rv">
            <p>Quando ti dimetti ti spettano: lo <strong>stipendio dei giorni lavorati</strong> nell&apos;ultimo mese, le <strong>ferie non godute</strong> (pagate), i <strong>permessi non goduti</strong>, i <strong>ratei di tredicesima</strong> (e quattordicesima se prevista dal tuo CCNL), e il <strong>TFR</strong> (circa una mensilit&agrave; per ogni anno di lavoro). Il TFR pu&ograve; arrivare anche qualche settimana dopo l&apos;ultima busta paga, su un bonifico separato.</p>
            <p>Se non rispetti il preavviso, il datore pu&ograve; trattenerti l&apos;indennit&agrave; sostitutiva (lo stipendio dei giorni di preavviso non lavorati). Per evitarlo, puoi proporre un accordo scritto di rinuncia reciproca al preavviso.</p>
          </div>
        </div>
      </section>

      <section className="v8-section" id="giusta-causa">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Dimissioni per <em>giusta causa</em></h2><p className="rv rv-d1">Non devi dare preavviso e hai diritto alla NASpI.</p></div>
          <div className="v8-prose rv">
            <p>Le dimissioni per giusta causa si danno quando il datore ha violato gravemente i suoi obblighi contrattuali. I casi pi&ugrave; comuni sono: <strong>stipendio non pagato</strong> da almeno 2-3 mesi, <strong>mobbing</strong> documentato, <strong>molestie sessuali</strong>, <strong>trasferimento immotivato</strong> oltre 50 km, <strong>demansionamento</strong> grave, mancato versamento dei contributi INPS.</p>
            <p>Con la giusta causa non devi dare il preavviso, hai diritto alla NASpI (disoccupazione), e puoi chiedere il risarcimento del danno. &Egrave; fondamentale avere <strong>prove documentali</strong>: PEC, email, SMS, testimoni, referti medici. Senza prove, l&apos;INPS pu&ograve; rifiutare la NASpI.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Vuoi dimetterti per giusta causa?</strong> Vai prima al sindacato o da un avvocato del lavoro. Ti aiutano a raccogliere le prove e a presentare correttamente le dimissioni. Non comunicare nulla al datore finch&eacute; non hai le prove documentate.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Elena</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Elena ha 29 anni</strong>, impiegata a Firenze (CCNL Commercio, IV livello, 3 anni). Stipendio 1.500&euro; netti. Ha trovato un lavoro migliore. IV livello Commercio, meno di 5 anni: <strong style={{color:'var(--v8-bg)'}}>15 giorni di preavviso</strong>. Avvisa il capo, calcola le date, invia il modulo online in 5 minuti.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Ultima busta paga (marzo)</span><span>~1.500&euro;</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Ferie non godute (8 giorni)</span><span>~550&euro;</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Ratei tredicesima (3/12)</span><span>~375&euro;</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>TFR (3 anni di lavoro)</span><span>~4.500&euro;</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Totale ricevuto</span><span>~7.200&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Elena ha fatto le cose nell&apos;ordine giusto e ha ricevuto <strong style={{color:'#E4F3ED'}}>tutto quello che le spettava</strong>, senza intoppi.</p>
        </div>
      </section>

      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">I 5 errori <em>pi&ugrave; comuni</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Sbagliare la data di decorrenza.</strong> &Egrave; il giorno DOPO il tuo ultimo giorno di lavoro. Sbagliare crea trattenute o contestazioni.</p></div></div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Non calcolare il preavviso prima di inviare.</strong> Prima di compilare il modulo, calcola esattamente quanti giorni devi dare. CCNL, livello, anzianit&agrave;. Nel dubbio, patronato.</p></div></div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Non controllare l&apos;ultima busta paga.</strong> Ferie non pagate, ratei mancanti, TFR errato: controlla tutto voce per voce. Se non torna, sindacato.</p></div></div>
            <div className="v8-info warn rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Pensare di avere diritto alla NASpI.</strong> Le dimissioni volontarie NON danno diritto alla NASpI. Solo giusta causa o maternit&agrave;/paternit&agrave;.</p></div></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="fiscozen">
        <div className="v8-section-inner">
          <div className="v8-prose rv" style={{marginBottom:'24px'}}>
            <p>Dopo le dimissioni vuoi aprire partita IVA? Un commercialista online ti accompagna dall&apos;apertura alla prima dichiarazione.</p>
          </div>
          <FiscozenBanner />
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
            <Link href="/dimissioni/preavviso" className="v8-related-card"><h4>Giorni di preavviso</h4><p>Tabella completa per CCNL, livello e anzianit&agrave;.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/naspi" className="v8-related-card"><h4>NASpI</h4><p>La disoccupazione: chi ne ha diritto e come chiederla.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/tfr" className="v8-related-card"><h4>TFR</h4><p>Quanto ti spetta di liquidazione e quando arriva.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/piva" className="v8-related-card"><h4>Aprire P.IVA</h4><p>Dopo le dimissioni vuoi metterti in proprio?</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
