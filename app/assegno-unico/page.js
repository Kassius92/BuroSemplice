import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: "Assegno Unico Figli 2026: Importi, Requisiti e Come Fare Domanda",
  description: "Assegno Unico 2026: importi aggiornati per fascia ISEE, maggiorazioni, come fare domanda e novit\u00e0. Guida completa e gratuita.",
  keywords: ["assegno unico 2026","assegno unico figli","importi assegno unico","ISEE assegno unico","domanda assegno unico INPS","maggiorazioni assegno unico"],
  alternates: { canonical: 'https://zeroburocrazia.it/assegno-unico' },
  openGraph: { title: "Assegno Unico Figli 2026: Importi e Come Fare Domanda", url: 'https://zeroburocrazia.it/assegno-unico', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogassegnounico.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogassegnounico.png'] },
};

const faqItems = [
  { q: "Quanto prendo di Assegno Unico con ISEE basso?", a: "Con <strong>ISEE fino a 17.468,51\u20ac</strong> prendi l\u2019importo massimo: <strong>203,80\u20ac al mese per ogni figlio minorenne</strong>. Con 2 figli sono 407,60\u20ac al mese, quasi 4.900\u20ac all\u2019anno. A questo si aggiungono eventuali maggiorazioni per figli piccoli, disabilit\u00e0 o famiglie numerose che possono aumentare significativamente l\u2019importo." },
  { q: "E se non ho l\u2019ISEE?", a: "Ricevi comunque l\u2019Assegno Unico, ma <strong>al minimo</strong>: 58,30\u20ac al mese per ogni figlio minorenne. \u00c8 molto meno del possibile. Per questo conviene quasi sempre fare l\u2019ISEE \u2014 \u00e8 gratuito al CAF. Se lo presenti entro il <strong>30 giugno 2026</strong>, ricevi anche gli arretrati da marzo." },
  { q: "Devo rifare la domanda ogni anno?", a: "<strong>No.</strong> Se hai gi\u00e0 una domanda attiva, si rinnova in automatico ogni anno. Devi solo aggiornare l\u2019ISEE (entro febbraio per avere subito l\u2019importo corretto, entro giugno per gli arretrati). Devi rifare la domanda solo se \u00e8 stata respinta, revocata o rinunciata." },
  { q: "Quando arriva il pagamento a marzo 2026?", a: "L\u2019INPS paga tra il <strong>19 e il 20 marzo</strong> per chi gi\u00e0 riceveva l\u2019assegno a febbraio. Per le nuove domande presentate a febbraio, il primo pagamento arriva a <strong>fine marzo</strong> (30-31). Da marzo gli importi sono ricalcolati con l\u2019ISEE 2026." },
  { q: "Posso riceverlo dal 7\u00b0 mese di gravidanza?", a: "<strong>S\u00ec.</strong> L\u2019Assegno Unico spetta anche per i nascituri a partire dal settimo mese di gravidanza. Serve presentare la domanda con il certificato medico che attesta la gravidanza e la data presunta del parto." },
  { q: "Spetta anche ai genitori separati o divorziati?", a: "<strong>S\u00ec.</strong> In caso di affido condiviso, l\u2019assegno viene diviso al 50% tra i due genitori (oppure 100% a uno dei due su accordo o decisione del giudice). Chi fa la domanda pu\u00f2 indicare l\u2019altro genitore per la ripartizione dell\u2019importo." },
  { q: "L\u2019Assegno Unico fa reddito? Si paga l\u2019IRPEF?", a: "<strong>No.</strong> L\u2019Assegno Unico non concorre alla formazione del reddito ai fini IRPEF. Non lo dichiari nel 730 e non ci paghi le tasse. Dal 2026 \u00e8 inoltre <strong>escluso dal calcolo dell\u2019ISEE</strong>, quindi riceverlo non ti fa perdere altri bonus." },
  { q: "Fino a che et\u00e0 spetta?", a: "Fino ai <strong>21 anni</strong> se il figlio studia, lavora con reddito sotto 8.000\u20ac annui, \u00e8 disoccupato in cerca di lavoro o svolge il servizio civile. Per i <strong>figli con disabilit\u00e0</strong> certificata ai sensi della Legge 104 non c\u2019\u00e8 limite di et\u00e0." },
];

export default function AssegnoUnicoPage() {
  const schemas = [
    articleSchema({ title: 'Assegno Unico Figli 2026: importi, requisiti e domanda', description: 'Assegno Unico 2026: importi per fascia ISEE, maggiorazioni, come fare domanda.', url: '/assegno-unico', image: 'ogassegnounico.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "importi", "label": "Importi"}, {"id": "come", "label": "Come si fa"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(139,92,246,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat famiglia rv">Famiglia &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Assegno Unico <em>Figli</em> 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Quanto ti spetta per ogni figlio, come fare domanda e le novit&agrave; 2026. Spetta a tutti &mdash; anche senza ISEE.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>203,80&euro;</strong><span>Max per figlio/mese</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>0&ndash;21</strong><span>Et&agrave; dei figli</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>30 giu</strong><span>Per gli arretrati</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come funziona <em>l&apos;Assegno Unico</em></h2></div>
          <div className="v8-prose rv">
            <p>L&apos;Assegno Unico e Universale &egrave; un contributo mensile che lo Stato paga a tutte le famiglie con figli a carico. &ldquo;Unico&rdquo; perch&eacute; ha sostituito tutti i vecchi bonus (assegni familiari, detrazioni per figli, bonus beb&egrave;). &ldquo;Universale&rdquo; perch&eacute; spetta a tutti &mdash; dipendenti, autonomi, disoccupati, incapienti. Nessuno escluso.</p>
            <p>Lo Stato ti accredita ogni mese un importo per ogni figlio a carico, direttamente sul conto corrente tramite l&apos;INPS. Quanto prendi dipende da due cose: il tuo <Link href="/isee">ISEE</Link> e l&apos;et&agrave; dei figli. Pi&ugrave; l&apos;ISEE &egrave; basso, pi&ugrave; alto &egrave; l&apos;importo. Ma anche con ISEE alto (o senza ISEE) ricevi comunque un importo minimo garantito di 58,30&euro; al mese per ogni figlio minorenne. La differenza tra minimo e massimo &egrave; enorme: con ISEE sotto 17.468&euro; prendi 203,80&euro; al mese per figlio, quasi 4 volte tanto.</p>
            <p>L&apos;Assegno Unico non &egrave; tassato: non fa reddito ai fini IRPEF e non devi dichiararlo nel 730. Dal 2026 &egrave; escluso dal calcolo dell&apos;ISEE, quindi riceverlo non ti fa perdere altri bonus. L&apos;assegno viene pagato dall&apos;INPS di solito tra il 17 e il 20 di ogni mese. In caso di genitori separati con affido condiviso, l&apos;importo viene diviso al 50% oppure erogato al 100% a uno dei due su accordo.</p>
            <p>L&apos;assegno parte dal <strong>7&deg; mese di gravidanza</strong> e dura fino ai <strong>21 anni</strong> del figlio (con condizioni dopo i 18 anni). Per i figli con <Tip t="La disabilit&agrave; deve essere certificata ai sensi della Legge 104/92. Con disabilit&agrave; certificata l&apos;assegno spetta senza limiti di et&agrave; e con maggiorazioni significative.">disabilit&agrave;</Tip> non c&apos;&egrave; limite di et&agrave;.</p>

            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>Assegno Unico Universale (AUU)</strong> &mdash; il contributo mensile per figli a carico. Ha sostituito dal marzo 2022 i vecchi assegni familiari, le detrazioni per figli e il bonus beb&egrave;. Si chiede all&apos;INPS online o tramite patronato.</p>
            <p><strong>ISEE</strong> &mdash; l&apos;indicatore che determina l&apos;importo dell&apos;assegno: ISEE basso = importo alto. Si fa al CAF gratuitamente. Senza ISEE prendi il minimo.</p>
            <p><strong>DSU</strong> &mdash; il modulo che compili per ottenere l&apos;ISEE. Va rifatta ogni anno, idealmente entro febbraio.</p>
            <p><strong>Maggiorazione</strong> &mdash; un importo aggiuntivo che si somma all&apos;assegno base in situazioni particolari: figli piccoli, disabilit&agrave;, famiglie numerose, genitori giovani o entrambi lavoratori.</p>
            <p><strong>Figlio a carico</strong> &mdash; sotto i 18 anni &egrave; sempre a carico. Tra 18 e 21 deve studiare, cercare lavoro o guadagnare meno di 8.000&euro;/anno.</p>
            <p><strong>Conguaglio</strong> &mdash; il ricalcolo che l&apos;INPS fa quando arriva il tuo ISEE aggiornato. Se nei primi mesi hai preso il minimo e poi presenti un ISEE basso, ti pagano la differenza arretrata.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Novit&agrave; 2026:</strong> l&apos;Assegno Unico &egrave; <strong>escluso dal calcolo dell&apos;ISEE</strong>. Riceverlo non alza pi&ugrave; il tuo ISEE e non ti fa perdere altri bonus. Inoltre la franchigia sulla prima casa &egrave; salita a 91.500&euro; di valore catastale &mdash; molte famiglie avranno un ISEE pi&ugrave; basso e quindi un assegno pi&ugrave; alto.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="importi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Importi <em>2026</em></h2><p className="rv rv-d1">Rivalutati del +1,4% rispetto al 2025 per adeguamento all&apos;inflazione.</p></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Figli minorenni (0&ndash;17 anni)</h3>
            <p>ISEE fino a 17.468,51&euro;: <strong>203,80&euro; al mese</strong> per figlio (importo massimo). ISEE tra 17.468 e 46.582&euro;: scala gradualmente. Con ISEE 25.000&euro; circa 150&euro;, con ISEE 35.000&euro; circa 100&euro;. ISEE oltre 46.582&euro; o senza ISEE: <strong>58,30&euro;/mese</strong> (minimo garantito).</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Figli maggiorenni (18&ndash;21 anni)</h3>
            <p>ISEE fino a 17.468,51&euro;: <strong>99,10&euro;/mese</strong> per figlio (massimo). ISEE oltre 46.582&euro;: 29,10&euro;/mese (minimo). Il figlio deve studiare, cercare lavoro, fare servizio civile o guadagnare meno di 8.000&euro;/anno.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Maggiorazioni (si sommano all&apos;importo base)</h3>
            <p>Figlio sotto 1 anno: <strong>+50%</strong> dell&apos;importo base. Figlio 1&ndash;3 anni (ISEE sotto 45.574&euro;): <strong>+88,80&euro;</strong>. Nucleo con 3 figli: +96,90&euro;. Nucleo con 4+ figli: <strong>+153&euro;</strong>. Madre sotto 21 anni: +20&euro; per figlio. Entrambi i genitori lavoratori: +30&euro; per figlio. Figlio con disabilit&agrave;: da +96,90&euro; a +122,80&euro; in base alla gravit&agrave;.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Le maggiorazioni si cumulano tutte.</strong> Un neonato in una famiglia con 3 figli dove entrambi i genitori lavorano prende: importo base + 50% neonato + 88,80&euro; under 3 + 96,90&euro; terzo figlio + 30&euro; entrambi lavoratori. I numeri si sommano tutti.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Sara e Luca</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Sara e Luca</strong> vivono a Roma con 2 figli: Giulia (5 anni) e Matteo (2 anni). Sara lavora part-time (1.100&euro;/mese), Luca &egrave; impiegato (1.600&euro;/mese). Il loro <strong style={{color:'var(--v8-bg)'}}>ISEE &egrave; 19.000&euro;</strong>. Entrambi lavorano.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Base Giulia (5 anni, ISEE 19k)</span><span>~180&euro;/mese</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Base Matteo (2 anni, ISEE 19k)</span><span>~180&euro;/mese</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Maggiorazione Matteo under 3</span><span>+88,80&euro;/mese</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>Maggiorazione entrambi lavoratori (&times;2)</span><span>+60&euro;/mese</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Totale mensile</span><span>~508&euro;/mese</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Sara e Luca ricevono circa <strong style={{color:'#E4F3ED'}}>6.100&euro; all&apos;anno</strong> di Assegno Unico. Se non avessero presentato l&apos;ISEE, prenderebbero solo 116,60&euro;/mese (il minimo per 2 figli): una differenza di quasi <strong style={{color:'#E4F3ED'}}>4.700&euro; all&apos;anno</strong>.</p>
        </div>
      </section>

      <section className="v8-section" id="domanda">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come fare <em>domanda</em></h2><p className="rv rv-d1">Se hai gi&agrave; una domanda attiva, si rinnova in automatico. Devi solo aggiornare l&apos;ISEE.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Fai l&apos;ISEE</h3><p>Al CAF (gratis) o online su inps.it con SPID. Senza ISEE prendi il minimo: 58,30&euro;/mese per figlio invece di 203,80&euro;.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Accedi al portale INPS</h3><p>Con SPID, CIE o CNS. Cerca &ldquo;Assegno unico e universale&rdquo;.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Compila la domanda</h3><p>Inserisci codice fiscale e data di nascita di ogni figlio. Per nascituri dal 7&deg; mese, allega il certificato medico. Indica l&apos;IBAN.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Aspetta il pagamento</h3><p>L&apos;INPS accredita ogni mese, di solito tra il 17 e il 20. Per le nuove domande il primo pagamento arriva entro fine mese.</p></div>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Scadenza 30 giugno 2026.</strong> Se presenti la domanda entro il 30 giugno 2026, hai diritto agli arretrati da marzo. Dopo il 30 giugno, l&apos;assegno parte dal mese della domanda e perdi i mesi precedenti. Non aspettare.</p></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'16px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Non riesci col sito?</strong> Puoi fare domanda al patronato (ACLI, CGIL, CISL &mdash; gratis) oppure chiamando il contact center INPS al numero 803.164 (da fisso, gratuito) o 06.164.164 (da cellulare).</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Documenti <em>necessari</em></h2></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Per la domanda</h3>
              <div className="v8-doc"><strong>SPID, CIE o CNS</strong> &mdash; per accedere al portale INPS</div>
              <div className="v8-doc"><strong>ISEE 2026</strong> in corso di validit&agrave; &mdash; senza ISEE prendi il minimo</div>
              <div className="v8-doc"><strong>Codice fiscale di ogni figlio</strong> &mdash; anche dei nascituri con certificato medico</div>
            </div>
            <div className="v8-doc-group">
              <h3>Per il pagamento</h3>
              <div className="v8-doc"><strong>IBAN del conto corrente</strong> &mdash; intestato al richiedente</div>
              <div className="v8-doc"><strong>Certificato di disabilit&agrave;</strong> &mdash; solo se applicabile (Legge 104/92)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Errori da <em>evitare</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Non presentare l'ISEE.</strong> Senza ISEE prendi il minimo: 58,30€ al mese per figlio. Con un ISEE sotto 17.468€ prenderesti 203,80€. La differenza su un anno per un figlio è di 1.746€. Per due figli, 3.492€. L'ISEE si fa gratis al CAF in 30 minuti. Non c'è motivo per non farlo.</p></div>
            </div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Aggiornare l'ISEE in ritardo.</strong> Se presenti l'ISEE dopo febbraio, per i mesi senza ISEE aggiornato ricevi il minimo. Puoi recuperare gli arretrati solo se presenti l'ISEE entro il 30 giugno. Dopo il 30 giugno, i mesi persi sono persi. Il consiglio: aggiorna l'ISEE a gennaio, ogni anno.</p></div>
            </div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Non sapere che spetta anche in gravidanza.</strong> Dal 7° mese di gravidanza hai già diritto all'assegno. Molti genitori lo scoprono solo dopo la nascita e perdono 2-3 mesi di pagamento. Se sei incinta, fai domanda appena entri nel settimo mese con il certificato medico.</p></div>
            </div>
            <div className="v8-info warn rv rv-d3">
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><p><strong>Dimenticare le maggiorazioni.</strong> Molte famiglie non sanno che le maggiorazioni si cumulano. Se hai un figlio sotto i 3 anni, entrambi i genitori lavorano e siete una famiglia con 3+ figli, potresti ricevere oltre 100€ in più al mese solo di maggiorazioni. Verifica nella tua area INPS che tutte le maggiorazioni siano state applicate.</p></div>
            </div>
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

      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/isee" className="v8-related-card"><h4>Faccio l&apos;ISEE</h4><p>Senza ISEE prendi il minimo. Come farlo gratis in 15 minuti.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/bonus-nido" className="v8-related-card"><h4>Bonus Nido</h4><p>Fino a 3.600&euro;/anno per l&apos;asilo nido. Si somma all&apos;assegno.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/congedo-parentale" className="v8-related-card"><h4>Congedo parentale</h4><p>Fino a 9 mesi retribuiti per stare col figlio.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/figlio" className="v8-related-card"><h4>Aspetto un figlio</h4><p>Tutti i bonus e le agevolazioni per i genitori.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
