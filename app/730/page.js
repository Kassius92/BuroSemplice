import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Calculator730 from '@/components/Calculator730';
import Tip from '@/components/Tip';
import Guide730Client from './Guide730Client';

export const metadata = {
  title: 'Come Fare il 730 nel 2026: Detrazioni, Scadenze e Rimborso',
  description: 'Guida completa al 730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze aggiornate e come ottenere il massimo rimborso. Gratis.',
  keywords: ['730', '730 2026', 'dichiarazione redditi', '730 precompilato', 'come fare 730', 'detrazioni fiscali', 'scadenza 730', 'modello 730', '730 online', 'CAF 730'],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type: 'article', title: '730 Precompilato 2026: Guida Completa Gratuita', description: 'Come fare il 730 nel 2026: detrazioni, documenti, scadenze e come ottenere il massimo rimborso.', url: 'https://zeroburocrazia.it/730', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: '730 Precompilato 2026: Guida Completa', description: 'Detrazioni, documenti, scadenze e rimborso. Tutto sul 730 in una guida gratuita.', images: ['https://zeroburocrazia.it/og730.png'] },
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Per\u00f2 perdi tutte le detrazioni a cui avresti diritto: centinaia o migliaia di euro ogni anno. Se eri obbligato a farlo (per esempio hai avuto due datori di lavoro) e non lo fai, l\u2019Agenzia delle Entrate pu\u00f2 inviarti un avviso di accertamento con sanzioni dal 120% al 240% delle imposte dovute. Conviene sempre farlo." },
  { q: "Posso scaricare Netflix o la palestra?", a: "<strong>Netflix no.</strong> I servizi di streaming non rientrano tra le spese detraibili. La palestra per te personalmente nemmeno, a meno che non sia prescritta dal medico come attivit\u00e0 riabilitativa. Per\u00f2 le <strong>attivit\u00e0 sportive dei figli tra 5 e 18 anni s\u00ec</strong>: sono detraibili al 19% fino a un massimo di 210\u20ac per figlio." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore di lavoro \u00e8 <strong>obbligato per legge</strong> a consegnare la Certificazione Unica entro il 16 marzo. Se non la ricevi, sollecita per iscritto (email o PEC). Se il datore \u00e8 irreperibile, puoi scaricare la CU direttamente dal sito dell\u2019Agenzia delle Entrate accedendo con SPID alla tua area riservata." },
  { q: "Ho pagato in contanti, perdo la detrazione?", a: "<strong>Dipende dalla spesa.</strong> Dal 1\u00b0 gennaio 2025, tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili: carta, bancomat, bonifico, assegno. Fanno eccezione i <strong>farmaci con ricetta medica</strong> e le <strong>prestazioni sanitarie presso strutture pubbliche o accreditate SSN</strong>." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, fai un solo 730</strong> in cui inserisci entrambe le Certificazioni Uniche. Attenzione: \u00e8 molto probabile che dovrai pagare un conguaglio perch\u00e9 ogni datore ha calcolato le tasse come se fossi stato da lui per tutto l\u2019anno." },
  { q: "Posso fare il 730 congiunto con il mio partner?", a: "<strong>Solo se siete sposati o uniti civilmente.</strong> I conviventi non possono presentare il 730 congiunto. Il vantaggio principale: crediti e debiti si compensano automaticamente tra i due coniugi." },
  { q: "Ho fatto un errore nel 730, posso correggerlo?", a: "<strong>S\u00ec, in diversi modi.</strong> Entro il 30 settembre puoi inviare un nuovo 730 che sostituisce il precedente. Entro il 25 ottobre puoi presentare un 730 integrativo (solo se pi\u00f9 favorevole). Dopo, devi usare il Modello Redditi correttivo entro il 30 novembre. Oltre, dichiarazione integrativa entro 5 anni." },
  { q: "Ho ricevuto la NASpI o la cassa integrazione, devo fare il 730?", a: "<strong>S\u00ec, e ti conviene.</strong> La NASpI e la cassa integrazione sono redditi a tutti gli effetti. Se nello stesso anno hai avuto sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio per ricalcolare correttamente le imposte dovute." },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({
      title: 'Guida completa al Modello 730 2026',
      description: 'Come fare il 730 nel 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.',
      url: '/730',
      image: 'og730.png',
      datePublished: '2026-03-04',
      dateModified: '2026-03-27',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <Guide730Client />
      <DotNav sections={[{"id": "quiz", "label": "Lo devo fare?"}, {"id": "cose", "label": "Cos'è il 730"}, {"id": "chi-deve", "label": "Chi deve farlo"}, {"id": "detr", "label": "Cosa recuperi"}, {"id": "percorso", "label": "Come si fa"}, {"id": "documenti", "label": "Documenti"}, {"id": "calcolatore", "label": "Calcolatore"}, {"id": "esempio", "label": "Esempio"}, {"id": "scad", "label": "Scadenze"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />

      {/* ═══ 1. HERO ═══ */}
      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Come fare il 730 <em>nel 2026</em></h1>
          <p className="v8-ghero-sub rv rv-d2">La dichiarazione dei redditi come non te l&apos;ha mai spiegata nessuno. Detrazioni, precompilato, scadenze e rimborso. Tutto gratis.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>30 set</strong><span>Scadenza invio</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>19%</strong><span>Detrazione mediche</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>2-3 mesi</strong><span>Per il rimborso</span></div>
          </div>
        </div>
      </section>

      {/* ═══ 2. QUIZ ═══ */}
      <section className="v8-section warm" id="quiz">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Ma tu, <em>devi farlo?</em></h2>
            <p className="rv rv-d1">Rispondi a 3 domande e lo scopri subito.</p>
          </div>
          <div className="v8-quiz">
            <div className="v8-quiz-card rv-scale rv-d2" id="quizCard">
              <div className="v8-qq"><span className="v8-qq-text">Hai avuto redditi da lavoro dipendente o pensione nel 2025?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="1" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="1" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Hai spese mediche, affitto o mutuo da detrarre?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="2" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="2" data-v="n">No</button></div></div>
              <div className="v8-qq"><span className="v8-qq-text">Hai avuto pi&ugrave; di un datore di lavoro nel 2025?</span><div className="v8-qq-btns"><button className="v8-qq-btn" data-q="3" data-v="y">S&igrave;</button><button className="v8-qq-btn" data-q="3" data-v="n">No</button></div></div>
              <div className="v8-quiz-res" id="qRes"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. COS'È IL 730 ═══ */}
      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Cos&apos;&egrave; il <em>730</em></h2>
          </div>
          <div className="v8-prose rv">
            <p>Ogni mese il tuo datore di lavoro trattiene una parte del tuo stipendio per pagare le tasse al posto tuo. Questo meccanismo si chiama <Tip t="Il meccanismo con cui il datore di lavoro trattiene le tasse dal tuo stipendio e le versa allo Stato al posto tuo.">ritenuta alla fonte</Tip>, e il datore &egrave; il tuo <Tip t="Il soggetto che paga le tasse al posto tuo: il datore di lavoro o l&apos;INPS. &Egrave; lui che ti versa il rimborso in busta paga.">sostituto d&apos;imposta</Tip>. Il problema &egrave; che lui calcola le tasse basandosi solo sullo stipendio, senza sapere nulla della tua vita privata: non sa se paghi un affitto, se hai il mutuo, se vai dal dentista, se i tuoi figli fanno sport.</p>

            <p>Il Modello 730 serve esattamente a questo: &egrave; il documento con cui comunichi all&apos;Agenzia delle Entrate tutte le spese sostenute durante l&apos;anno che ti danno diritto a <Tip t="Una riduzione dell&apos;imposta. Se hai diritto a una detrazione del 19% su 1.000&euro; di spese mediche, paghi 190&euro; di tasse in meno.">detrazioni</Tip> (rimborsi parziali) o <Tip t="Una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000&euro; e hai 3.000&euro; di deduzioni, le tasse si calcolano su 22.000&euro;.">deduzioni</Tip> (riduzioni del reddito imponibile). Nella stragrande maggioranza dei casi, il risultato &egrave; che hai pagato pi&ugrave; tasse del dovuto e ti spetta un rimborso.</p>

            <p>Il rimborso arriva direttamente in busta paga &mdash; di solito tra luglio e agosto se presenti il 730 entro giugno. Se sei pensionato, il rimborso arriva con la pensione di agosto o settembre.</p>

            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>CU (Certificazione Unica)</strong> &mdash; il documento che il datore di lavoro o l&apos;INPS ti consegna entro il 16 marzo. Riporta quanto hai guadagnato nell&apos;anno e quante tasse sono gi&agrave; state versate.</p>
            <p><strong>IRPEF</strong> &mdash; l&apos;Imposta sul Reddito delle Persone Fisiche, la tassa principale che paghi sui tuoi guadagni. Si calcola per scaglioni: pi&ugrave; guadagni, pi&ugrave; alta &egrave; la percentuale.</p>
            <p><strong>Detrazione</strong> &mdash; una riduzione dell&apos;imposta che devi pagare. Se hai diritto a una detrazione del 19% su 1.000&euro; di spese mediche, paghi 190&euro; di tasse in meno.</p>
            <p><strong>Deduzione</strong> &mdash; una riduzione del reddito su cui si calcolano le tasse. Se guadagni 25.000&euro; e hai 3.000&euro; di deduzioni, le tasse si calcolano su 22.000&euro;.</p>
            <p><strong>Franchigia</strong> &mdash; la soglia sotto la quale non hai diritto al rimborso. Per le spese mediche &egrave; 129,11&euro;: sotto quella cifra non recuperi nulla.</p>
            <p><strong>Precompilata</strong> &mdash; il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato con i dati in suo possesso. Devi controllarlo e integrarlo con le spese mancanti.</p>
            <p><strong>Sostituto d&apos;imposta</strong> &mdash; il soggetto che paga le tasse al posto tuo: il datore di lavoro o l&apos;INPS. &Egrave; tramite lui che ricevi il rimborso.</p>
            <p><strong>Conguaglio</strong> &mdash; il calcolo finale tra tasse dovute e gi&agrave; versate. Se hai pagato troppo, ricevi un rimborso. Se hai pagato poco, devi versare la differenza.</p>
          </div>
          <div className="v8-info tip rv rv-d1" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Perch&eacute; conviene anche se non sei obbligato:</strong> quasi tutti hanno almeno qualche spesa detraibile: una visita medica, un abbonamento ai trasporti, una spesa scolastica. Anche un caso semplice pu&ograve; generare 200&ndash;500&euro; di rimborso. Chi ha mutuo, affitto o figli arriva facilmente a 1.000&ndash;3.000&euro;. Ogni anno che non fai il 730, quei soldi li perdi definitivamente.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 4. CHI DEVE FARLO ═══ */}
      <section className="v8-section warm" id="chi-deve">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Chi deve fare <em>il 730</em></h2>
          </div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num" style={{background:'var(--v8-green-bg)',color:'var(--v8-green)'}}>&#10003;</div><h3>Devi farlo se</h3><p>Sei un lavoratore dipendente o pensionato che ha percepito redditi nel 2025.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num" style={{background:'#FFF8E1',color:'#C49A2A'}}>!</div><h3>&Egrave; obbligatorio se</h3><p>Hai cambiato lavoro nel 2025 (due CU), hai percepito sia stipendio che NASpI, oppure hai redditi da pi&ugrave; fonti.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num" style={{background:'var(--v8-green-bg)',color:'var(--v8-green)'}}>&#9733;</div><h3>Ti conviene se</h3><p>Hai un solo lavoro e almeno una spesa da scaricare: dentista, affitto, mutuo, trasporti, sport dei figli.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num" style={{background:'var(--v8-coral-bg)',color:'var(--v8-coral)'}}>&#10007;</div><h3>Non puoi farlo se</h3><p>Hai la partita IVA (devi usare il Modello Redditi PF) oppure hai redditi d&apos;impresa.</p></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>La regola pratica:</strong> se durante l&apos;anno hai speso soldi per salute, casa, figli, trasporti o animali domestici &mdash; fai il 730. Quasi sicuramente ti spetta un rimborso. L&apos;unico motivo valido per non farlo &egrave; se hai avuto un solo datore di lavoro e zero spese detraibili nell&apos;intero anno.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 5. DETRAZIONI ═══ */}
      <section className="v8-section" id="detr">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Quanto puoi <em>recuperare</em></h2>
            <p className="rv rv-d1">Lo Stato rimborsa una percentuale delle spese sostenute. Per la maggior parte &egrave; il 19%, ma ci sono eccezioni importanti. Clicca su una voce per approfondire.</p>
          </div>
          <div className="v8-detr-grid" id="detrGrid">
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct">19%</div><h4>Spese mediche</h4><p>Oltre la franchigia di 129&euro;</p><div className="v8-detr-detail">Farmaci, visite specialistiche, interventi, ticket sanitari. Serve pagamento tracciabile (no contanti). Esempio: 800&euro; spesi in visite = 127&euro; di rimborso. Inclusi anche psicologo, fisioterapista, occhiali da vista e apparecchi acustici.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct">19%</div><h4>Interessi mutuo</h4><p>Max 4.000&euro;/anno</p><div className="v8-detr-detail">Solo prima casa. Detrai il 19% degli interessi pagati alla banca, fino a un massimo di 4.000&euro; annui. Significa un risparmio massimo di 760&euro; all&apos;anno. Serve la certificazione che la banca ti invia ogni anno.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct">991&euro;</div><h4>Affitto fuori sede</h4><p>Reddito &le; 30.987&euro;</p><div className="v8-detr-detail">Per lavoratori fuori sede o studenti fuori comune. L&apos;importo varia in base al reddito: 495&euro; se il reddito &egrave; sotto 15.493&euro;, oppure 247&euro; se il reddito &egrave; sotto 30.987&euro;. Per gli under 31 la detrazione pu&ograve; arrivare a 991&euro;.</div></div>
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct">19%</div><h4>Spese scolastiche</h4><p>Max 1.000&euro;/figlio</p><div className="v8-detr-detail">Asilo nido, scuola materna, elementari, medie, superiori, universit&agrave;. Incluse mense scolastiche, gite e trasporto scolastico. Per le rette universitarie pubbliche non c&apos;&egrave; limite; per le private il tetto &egrave; quello stabilito dal MIUR.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct">19%</div><h4>Trasporto pubblico</h4><p>Max 250&euro;</p><div className="v8-detr-detail">Abbonamenti bus, metro, treno per tragitto casa-lavoro o casa-scuola. Serve la ricevuta dell&apos;abbonamento. Include anche il treno per i pendolari.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct">50%</div><h4>Ristrutturazione</h4><p>In 10 rate annuali</p><div className="v8-detr-detail">Mobili e grandi elettrodomestici (classe A+) in caso di ristrutturazione. Serve il bonifico parlante (non il bonifico ordinario). La detrazione viene ripartita in 10 anni.</div></div>
            <div className="v8-detr rv rv-d1" data-detr><div className="v8-detr-pct">19%</div><h4>Spese veterinarie</h4><p>Max 550&euro;</p><div className="v8-detr-detail">Visite veterinarie, interventi, farmaci per animali domestici. Franchigia di 129,11&euro;. Molti la dimenticano, ma se hai un cane o un gatto &egrave; un rimborso garantito.</div></div>
            <div className="v8-detr rv rv-d2" data-detr><div className="v8-detr-pct">19%</div><h4>Sport figli 5-18 anni</h4><p>Max 210&euro;/figlio</p><div className="v8-detr-detail">Nuoto, calcio, danza, arti marziali. Qualsiasi attivit&agrave; sportiva per figli tra 5 e 18 anni. Detraibili al 19%, fino a un massimo di 210&euro; per figlio.</div></div>
            <div className="v8-detr rv rv-d3" data-detr><div className="v8-detr-pct">26%</div><h4>Donazioni ONLUS</h4><p>Nessun tetto</p><div className="v8-detr-detail">Donazioni a organizzazioni non profit, partiti politici, associazioni di promozione sociale. La percentuale pi&ugrave; alta tra le detrazioni ordinarie: 26% senza limite massimo.</div></div>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Le detrazioni dimenticate pi&ugrave; spesso:</strong> abbonamento ai trasporti pubblici (anche treno per pendolari), spese veterinarie, sport dei figli, spese funebri, donazioni a ONLUS e partiti politici, spese per assistenti personali (badanti). Se non le inserisci nel 730, quei soldi li perdi per sempre.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 6. PERCORSO ═══ */}
      <section className="v8-section warm" id="percorso">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Come si fa, <em>passo per passo</em></h2>
            <p className="rv rv-d1">Hai tre strade. Una &egrave; completamente gratuita. Ecco il percorso completo.</p>
          </div>
          <div className="v8-prose rv" style={{marginBottom:'32px'}}>
            <p>Per accedere alla <Tip t="Il 730 che l&apos;Agenzia delle Entrate prepara per te, gi&agrave; parzialmente compilato con i dati in suo possesso: stipendio, spese mediche trasmesse dalle farmacie, interessi del mutuo.">precompilata</Tip> online ti serve lo <Tip t="L&apos;identit&agrave; digitale per accedere a tutti i servizi della Pubblica Amministrazione online: INPS, Agenzia delle Entrate, Comune.">SPID</Tip>. Se non ce l&apos;hai, fallo prima &mdash; ci vogliono 15 minuti e non costa niente.</p>
          </div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Fai lo SPID</h3><p>15 minuti, gratuito. Servono un documento d&apos;identit&agrave;, la tessera sanitaria e uno smartphone.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Raccogli i documenti</h3><p>CU + tutte le ricevute delle spese detraibili dell&apos;anno. Mettile in una cartellina.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Apri la precompilata</h3><p>Dal 30 aprile su agenziaentrate.gov.it. Accedi con SPID. Troverai redditi, spese mediche e interessi mutuo gi&agrave; inseriti.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Controlla e invia</h3><p><strong>Non accettare senza controllare.</strong> Le voci che mancano pi&ugrave; spesso: sport dei figli, affitto, spese mediche private, abbonamenti trasporti.</p></div>
          </div>
          <div style={{textAlign:'center',marginTop:'24px'}}>
            <Link href="/spid" className="v8-crosslink">Fai lo SPID in 15 minuti<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{width:14,height:14}}><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
          <div className="v8-prose rv" style={{marginTop:'48px'}}>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginBottom:'16px'}}>Quanto costa farlo</h3>
            <div className="v8-cost-grid">
              <div className="v8-cost-card hl"><div className="v8-cost-method">Da solo (precompilata)</div><div className="v8-cost-price">Gratis</div><div className="v8-cost-time">1&ndash;2 ore. Serve SPID.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">CAF / Patronato</div><div className="v8-cost-price">30&ndash;80&euro;</div><div className="v8-cost-time">30 min + eventuale attesa.</div></div>
              <div className="v8-cost-card"><div className="v8-cost-method">Commercialista</div><div className="v8-cost-price">80&ndash;200&euro;</div><div className="v8-cost-time">15 min dal tuo lato.</div></div>
            </div>
            <p style={{marginTop:'24px'}}><strong>Un lavoro + poche spese</strong> &rarr; fallo da solo: risparmi e impari. <strong>Mutuo, cambio lavoro, figli</strong> &rarr; vai al CAF: miglior rapporto qualit&agrave;-prezzo. Se sei iscritto al sindacato, spesso &egrave; gratuito. <strong>Cripto, redditi esteri, immobili in affitto</strong> &rarr; commercialista: costa di pi&ugrave; ma sa ottimizzare.</p>
          </div>
        </div>
      </section>

      {/* ═══ 7. DOCUMENTI ═══ */}
      <section className="v8-section" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">I documenti <em>necessari</em></h2>
            <p className="rv rv-d1">Prepara tutto prima di sederti a compilare. Cos&igrave; finisci in met&agrave; del tempo.</p>
          </div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Sempre necessari</h3>
              <div className="v8-doc"><strong>CU 2026</strong> (Certificazione Unica) &mdash; la ricevi dal datore di lavoro entro il 16 marzo. Se non arriva, la scarichi dal sito AdE con SPID.</div>
              <div className="v8-doc"><strong>Documento d&apos;identit&agrave;</strong> + codice fiscale &mdash; validi e leggibili.</div>
              <div className="v8-doc"><strong>IBAN</strong> del conto corrente &mdash; per ricevere l&apos;eventuale rimborso.</div>
              <div className="v8-doc"><strong>730 dell&apos;anno precedente</strong> &mdash; se disponibile, aiuta a non dimenticare voci.</div>
            </div>
            <div className="v8-doc-group">
              <h3>Per le detrazioni (porta quelli che hai)</h3>
              <div className="v8-doc"><strong>Ricevute spese mediche</strong> &mdash; dentista, visite specialistiche, farmaci, psicologo, fisioterapista, occhiali.</div>
              <div className="v8-doc"><strong>Contratto d&apos;affitto</strong> registrato &mdash; deve essere registrato all&apos;Agenzia delle Entrate. Senza registrazione, niente detrazione.</div>
              <div className="v8-doc"><strong>Certificazione interessi mutuo</strong> &mdash; la banca te la invia ogni anno. Massimo detraibile: 4.000&euro; di interessi.</div>
              <div className="v8-doc"><strong>Ricevute spese scolastiche</strong> &mdash; rette, mensa, gite, trasporto scolastico. Tetto: 1.000&euro; per studente.</div>
              <div className="v8-doc"><strong>Sport figli</strong> (5&ndash;18 anni) &mdash; nuoto, calcio, danza. Max 210&euro; per figlio.</div>
              <div className="v8-doc"><strong>Abbonamento trasporto</strong> &mdash; metro, bus, treno. Tetto 250&euro;.</div>
              <div className="v8-doc"><strong>Spese veterinarie</strong> &mdash; tetto di spesa 550&euro;.</div>
              <div className="v8-doc"><strong>Fatture ristrutturazione</strong> + bonifici parlanti &mdash; il pagamento deve essere con bonifico parlante, non ordinario.</div>
              <div className="v8-doc"><strong>Donazioni ONLUS</strong> &mdash; detraibili al 26%.</div>
            </div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Il metodo della cartellina:</strong> crea una cartellina (fisica o digitale) chiamata &quot;730 2026&quot;. Ogni volta che ricevi una ricevuta o fattura detraibile durante l&apos;anno, mettila dentro. Quando arriva maggio avrai tutto pronto in 5 minuti, senza stress e senza rischiare di perdere documenti importanti.</p></div>
          </div>
        </div>
      </section>

      {/* ═══ 8. CALCOLATORE ═══ */}
      <section className="v8-section warm" id="calcolatore">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Calcola il tuo <em>rimborso</em></h2>
            <p className="rv rv-d1">Una stima indicativa basata sulle detrazioni principali. Per i numeri esatti serve la dichiarazione completa.</p>
          </div>
          <Calculator730 />
        </div>
      </section>

      {/* ═══ 9. ESEMPIO ═══ */}
      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Maria</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Maria ha 26 anni</strong>, impiegata a Torino, 22.000&euro; lordi annui. Non ha mai fatto il 730. Quest&apos;anno ha speso 320&euro; dal dentista, paga un affitto da 500&euro;/mese come lavoratrice under 31 e ha un abbonamento annuale GTT da 350&euro;.</p>
            <p className="rv rv-d2" style={{fontSize:'15px'}}>A maggio apre la precompilata con SPID. Il dentista risulta gi&agrave; inserito. Manca l&apos;abbonamento GTT: lo aggiunge manualmente. Controlla ogni voce, clicca Invia.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Spese mediche (320 - 129) &times; 19%</span><span>&euro; 36</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Affitto under 31</span><span>&euro; 991</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Trasporti 350 &times; 19%</span><span>&euro; 66</span></div>
            <div className="v8-esempio-line v8-esempio-total rv rv-d4"><span>Rimborso totale</span><span>&euro; 1.093</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Nella busta paga di luglio Maria trova <strong style={{color:'#E4F3ED'}}>1.093&euro; in pi&ugrave;</strong>. Zero euro di costo, circa un&apos;ora e mezza di tempo. Per 4 anni non ha fatto il 730 e ha perso circa <strong style={{color:'#E4F3ED'}}>4.000&euro;</strong>. Il prossimo anno sar&agrave; ancora pi&ugrave; veloce.</p>
        </div>
      </section>

      {/* ═══ 10. SCADENZE ═══ */}
      <section className="v8-section" id="scad">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Le <em>scadenze</em> 2026</h2>
          </div>
          <div className="v8-timeline">
            <div className="v8-tl-item rv"><div className="v8-tl-dot"></div><div className="v8-tl-date">Entro il 16 marzo</div><div className="v8-tl-text">Il datore di lavoro ti consegna la CU (Certificazione Unica 2026). Se non arriva, sollecita per iscritto.</div></div>
            <div className="v8-tl-item hl rv rv-d1"><div className="v8-tl-dot"></div><div className="v8-tl-date">30 aprile</div><div className="v8-tl-text">L&apos;Agenzia delle Entrate pubblica la precompilata online. Accedi con SPID su agenziaentrate.gov.it.</div></div>
            <div className="v8-tl-item rv rv-d2"><div className="v8-tl-dot"></div><div className="v8-tl-date">Maggio &ndash; Giugno</div><div className="v8-tl-text">Il periodo ideale per presentare il 730. Meno code al CAF, rimborso gi&agrave; a luglio, tempo per eventuali correzioni.</div></div>
            <div className="v8-tl-item rv rv-d3"><div className="v8-tl-dot"></div><div className="v8-tl-date">Luglio &ndash; Agosto</div><div className="v8-tl-text">Rimborso in busta paga (se hai inviato entro giugno). Pensionati: rimborso con la pensione di agosto o settembre.</div></div>
            <div className="v8-tl-item hl rv rv-d4"><div className="v8-tl-dot"></div><div className="v8-tl-date">30 settembre 2026</div><div className="v8-tl-text">Scadenza ultima per l&apos;invio del 730. Dopo questa data serve il Modello Redditi PF.</div></div>
          </div>
        </div>
      </section>

      {/* ═══ 11. ERRORI ═══ */}
      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Gli errori pi&ugrave; <em>comuni</em></h2>
          </div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Accettare la precompilata senza controllarla.</strong> L&apos;Agenzia delle Entrate non ha tutti i dati. Le spese sportive dei figli, l&apos;affitto, le spese mediche private, gli abbonamenti ai trasporti: spesso mancano. Se accetti senza controllare, perdi quei rimborsi.</p></div>
            </div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Non fare il 730 perch&eacute; &quot;tanto non cambia nulla&quot;.</strong> Anche una situazione semplice (dentista, bus, sport di un figlio) genera 200&ndash;400&euro; di rimborso. Ogni anno. Per tutta la vita lavorativa. &Egrave; denaro che stai letteralmente regalando allo Stato.</p></div>
            </div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Pagare spese detraibili in contanti.</strong> Dal 2025 tutte le spese detraibili al 19% devono essere pagate con metodi tracciabili (carta, bancomat, bonifico). Paghi in contanti? Perdi la detrazione. Eccezioni: farmaci con ricetta e prestazioni SSN.</p></div>
            </div>
            <div className="v8-info warn rv rv-d3">
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Andare al CAF all&apos;ultimo momento.</strong> A settembre i CAF sono sommersi. Le code sono lunghe, gli errori pi&ugrave; probabili. Vai tra maggio e giugno: zero stress, rimborso anticipato, tempo per correggere eventuali errori.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. FAQ ═══ */}
      <section className="v8-section" id="faq">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Domande <em>frequenti</em></h2>
          </div>
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

      {/* ═══ 13. GUIDE CORRELATE ═══ */}
      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head">
            <h2 className="rv">Approfondimenti e <em>guide correlate</em></h2>
          </div>
          <div className="v8-related-grid rv">
            <Link href="/730/precompilato" className="v8-related-card">
              <h4>730 Precompilato</h4>
              <p>Come accedere, controllare e inviare il precompilato online passo per passo.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/730/detrazioni-affitto" className="v8-related-card">
              <h4>Detrazioni affitto nel 730</h4>
              <p>Quanto recuperi e come inserirle: importi, codici e requisiti.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/isee" className="v8-related-card">
              <h4>Faccio l&apos;ISEE</h4>
              <p>Per bonus e agevolazioni ti serve l&apos;ISEE. Ecco come ottenerlo gratis.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
            <Link href="/spid" className="v8-related-card">
              <h4>Faccio lo SPID</h4>
              <p>Per la precompilata online ti serve lo SPID. Come farlo gratis in 15 minuti.</p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="v8-cta">
        <div className="v8-cta-box rv-scale">
          <h2>Ti &egrave; stata <em>utile?</em></h2>
          <p>Ne abbiamo molte altre. Trova quella che ti serve.</p>
          <Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
