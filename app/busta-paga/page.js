import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import CalcBustaPaga from '@/components/CalcBustaPaga';
import GuideClient from './Guide730Client';

export const metadata = {
  title: 'Come Leggere la Busta Paga nel 2026: Voci, Lordo al Netto e Calcolo',
  description: 'Busta paga 2026: come leggerla voce per voce, dal lordo al netto, trattenute IRPEF, contributi INPS, detrazioni, TFR, ferie e nuove aliquote. Guida gratuita.',
  keywords: ['busta paga','come leggere busta paga','busta paga 2026','lordo netto','stipendio netto','trattenute busta paga','IRPEF busta paga','contributi INPS','calcolo stipendio netto','cedolino'],
  alternates: { canonical: 'https://zeroburocrazia.it/busta-paga' },
  openGraph: { title: 'Busta Paga 2026: Come Leggerla, Voci, Dal Lordo al Netto', description: 'Busta paga 2026: come leggerla, dal lordo al netto, IRPEF, INPS, detrazioni. Guida gratuita.', url: 'https://zeroburocrazia.it/busta-paga', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbustapaga.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbustapaga.png'] },
};

const faqItems = [
  { q: "Perch\u00e9 il mio netto \u00e8 cos\u00ec diverso dal lordo?", a: "Perch\u00e9 dal lordo vengono tolti: <strong>contributi INPS</strong> (~9,19%), <strong>IRPEF</strong> (dal 23% al 43% a scaglioni), <strong>addizionali regionali e comunali</strong>. In pratica, su 2.000\u20ac lordi restano circa 1.500-1.600\u20ac netti. Le detrazioni e il trattamento integrativo riducono un po\u2019 il peso." },
  { q: "Cos\u2019\u00e8 la RAL?", a: "La <strong>Retribuzione Annua Lorda</strong>: \u00e8 il tuo stipendio lordo annuo, comprese tredicesima e quattordicesima (se prevista). \u00c8 il numero che trovi nei contratti di lavoro e che le banche ti chiedono per il mutuo." },
  { q: "Cosa sono gli scatti di anzianit\u00e0?", a: "Sono <strong>aumenti automatici</strong> del tuo stipendio base che maturano ogni 2-3 anni di lavoro nella stessa azienda (la cadenza dipende dal CCNL). Non sono enormi (20-30\u20ac lordi), ma si accumulano nel tempo." },
  { q: "Perch\u00e9 a dicembre il netto \u00e8 pi\u00f9 basso?", a: "Per il <strong>conguaglio fiscale</strong>. A dicembre il datore ricalcola le tasse sull\u2019intero anno. Se durante l\u2019anno hai pagato poca IRPEF (es. perch\u00e9 hai avuto un aumento), a dicembre ti trattengono la differenza. Pu\u00f2 funzionare anche al contrario: se hai pagato troppo, ricevi un rimborso." },
  { q: "Dove trovo ferie e permessi residui?", a: "Di solito nella <strong>parte bassa della busta paga</strong>, in una sezione dedicata. Trovi: ferie maturate, ferie godute, ferie residue. Stessa cosa per ROL (permessi), ex festivit\u00e0 e banca ore. Controlla ogni mese." },
  { q: "Il TFR dove lo vedo?", a: "Nella <strong>terza parte della busta paga</strong>, tra i dati riepilogativi. Trovi il TFR maturato nel mese e il totale accantonato. Se lo destini a un fondo pensione, vedrai il versamento al fondo invece dell\u2019accantonamento." },
  { q: "Cos\u2019\u00e8 il trattamento integrativo?", a: "\u00c8 l\u2019ex \u201cbonus Renzi\u201d. Per redditi fino a 15.000\u20ac spettano <strong>fino a 1.200\u20ac/anno</strong> (100\u20ac/mese). Per redditi tra 15.000\u20ac e 28.000\u20ac spetta in misura ridotta. Lo trovi come voce a parte nella busta paga, erogato mensilmente dal datore di lavoro." },
  { q: "Posso chiedere al datore di lavoro di spiegarmi la busta paga?", a: "<strong>S\u00ec, \u00e8 un tuo diritto.</strong> Il datore \u00e8 obbligato a consegnarti la busta paga e a spiegarti le voci se lo chiedi. Se non riesci a ottenere chiarimenti, puoi rivolgerti a un consulente del lavoro o al tuo sindacato." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Busta paga 2026: come leggerla, dal lordo al netto', description: 'Come leggere la busta paga nel 2026: voci, trattenute IRPEF, contributi INPS, detrazioni, TFR.', url: '/busta-paga', image: 'ogbustapaga.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <NavV8 />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(196,154,42,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat lavoro rv">Lavoro &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">La mia <em>busta paga</em></h1>
          <p className="v8-ghero-sub rv rv-d2">Come leggere il cedolino nel 2026: tutte le voci spiegate in modo semplice, dal lordo al netto, trattenute, contributi, detrazioni e novit&agrave;.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>~35%</strong><span>quanto &ldquo;perdi&rdquo; dal lordo al netto</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>33%</strong><span>nuovo 2&deg; scaglione IRPEF 2026</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>3 parti</strong><span>struttura del cedolino</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; la busta paga <em>e come leggerla</em></h2></div>
          <div className="v8-prose rv">
            <p>La busta paga (o <Tip t="Il nome tecnico della busta paga. Cedolino, prospetto paga, busta paga: sono la stessa cosa.">cedolino</Tip>) &egrave; il documento che il tuo datore di lavoro ti d&agrave; ogni mese insieme allo stipendio. Spiega, voce per voce, come si arriva dal tuo stipendio <strong>lordo</strong> (quello scritto nel contratto) al <strong>netto</strong> (quello che trovi sul conto).</p>
            <p>Sembra un foglio pieno di numeri incomprensibili, ma segue una logica semplice: <strong>Lordo &minus; Contributi INPS &minus; IRPEF &minus; Addizionali + Detrazioni = Netto</strong>.</p>
            <p>&Egrave; un documento <strong>obbligatorio per legge</strong>: il datore deve consegnartelo ogni mese. Conservalo: ti serve per il 730, per chiedere un mutuo, per l&apos;ISEE e per verificare che tutto sia corretto.</p>

            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il tuo stipendio annuo lordo, comprensivo di tredicesima/quattordicesima.</p>
            <p><strong>IRPEF</strong> &mdash; L&apos;imposta sui redditi. &Egrave; progressiva: pi&ugrave; guadagni, pi&ugrave; paghi. Nel 2026: 23% fino a 28.000&euro;, 33% fino a 50.000&euro;, 43% oltre.</p>
            <p><strong>Contributi INPS</strong> &mdash; La quota che paghi per la pensione e le tutele (malattia, NASpI, maternit&agrave;). Circa il 9,19% del lordo.</p>
            <p><strong>Imponibile fiscale</strong> &mdash; Il lordo meno i contributi INPS. &Egrave; la base su cui si calcola l&apos;IRPEF.</p>
            <p><strong>Detrazioni</strong> &mdash; Sconti sull&apos;IRPEF per lavoro dipendente e familiari a carico. Riducono le tasse che paghi.</p>
            <p><strong>Conguaglio</strong> &mdash; Il ricalcolo di fine anno. A dicembre il datore verifica se hai pagato la giusta quantit&agrave; di tasse e contributi durante l&apos;anno.</p>
            <p><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto. Una quota accantonata ogni mese che ricevi quando lasci il lavoro.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="parti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Le 3 parti <em>della busta paga</em></h2></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Intestazione</h3><p>In alto: <strong>dati dell&apos;azienda</strong> (nome, P.IVA, posizione INPS/INAIL) e <strong>tuoi dati</strong> (nome, codice fiscale, data assunzione, qualifica, livello, CCNL). Controlla che siano corretti: un livello sbagliato significa uno stipendio sbagliato.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Competenze (il lordo)</h3><p>Tutte le <strong>voci che formano il lordo</strong>: paga base, contingenza, scatti di anzianit&agrave;, superminimo, straordinari, indennit&agrave;, premi, ferie godute, malattia, permessi. La somma di tutto &egrave; il <strong>totale lordo del mese</strong>.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Trattenute e netto</h3><p>Qui si passa dal lordo al netto: <strong>contributi INPS</strong> (~9,19%), <strong>IRPEF</strong>, <strong>addizionali regionali e comunali</strong>, eventuali <strong>detrazioni</strong> e il <strong>trattamento integrativo</strong>. In fondo: il <strong>netto in busta</strong> e i dati riepilogativi (TFR, ferie residue).</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="lordo-netto">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Dal lordo <em>al netto</em></h2><p className="rv rv-d1">La formula semplificata per capire quanto &ldquo;perdi&rdquo; ogni mese.</p></div>

          <div className="v8-table-wrap rv" style={{maxWidth:'600px',margin:'0 auto 24px'}}>
            <table className="v8-table">
              <thead><tr><th>Passaggio</th><th>Importo (es. lordo 2.000&euro;)</th></tr></thead>
              <tbody>
                <tr><td>1. Stipendio lordo mensile</td><td>2.000&euro;</td></tr>
                <tr><td>2. &minus; Contributi INPS (~9,19%)</td><td>&minus;184&euro;</td></tr>
                <tr><td>3. = Imponibile fiscale</td><td>1.816&euro;</td></tr>
                <tr><td>4. &minus; IRPEF lorda (per scaglioni)</td><td>&minus;~365&euro;</td></tr>
                <tr><td>5. + Detrazioni lavoro dipendente</td><td>+~130&euro;</td></tr>
                <tr><td>6. &minus; Addizionali reg./com.</td><td>&minus;~30&euro;</td></tr>
                <tr><td style={{fontWeight:'600'}}>Netto in busta</td><td style={{fontWeight:'700',color:'var(--v8-green)'}}>~1.551&euro;</td></tr>
              </tbody>
            </table>
          </div>

          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'0 auto'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Aliquote IRPEF 2026 (3 scaglioni):</strong> 23% fino a 28.000&euro; &mdash; <strong style={{color:'var(--v8-green)'}}>33%</strong> da 28.001&euro; a 50.000&euro; (era 35% nel 2024) &mdash; 43% oltre 50.000&euro;. La riduzione dal 35% al 33% del secondo scaglione &egrave; la novit&agrave; 2026: qualche euro in pi&ugrave; in busta per chi guadagna tra 28.000 e 50.000&euro;.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="novita">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Novit&agrave; <em>in busta paga 2026</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info tip rv" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <div><p><strong>2&deg; scaglione IRPEF: dal 35% al 33%.</strong> Per i redditi tra 28.001&euro; e 50.000&euro;, l&apos;aliquota scende di 2 punti. Impatto concreto: circa <strong>20-40&euro; in pi&ugrave; al mese</strong> per chi ricade in quella fascia.</p></div>
            </div>
            <div className="v8-info tip rv rv-d1" style={{marginBottom:'16px'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <div><p><strong>Taglio del cuneo fiscale strutturale.</strong> Lo sgravio contributivo diventa strutturale. Per redditi fino a ~35.000&euro;, i contributi INPS a carico del lavoratore sono ridotti, aumentando il netto.</p></div>
            </div>
            <div className="v8-info tip rv rv-d2">
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <div><p><strong>Bonus fino a 960&euro; per redditi sotto 20.000&euro;.</strong> Per i lavoratori dipendenti con reddito fino a 20.000&euro;, importo variabile fino a 960&euro;/anno escluso dalla base imponibile. Lo troverai come voce specifica nel cedolino.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="calcolatore">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Calcola il tuo <em>netto in busta</em></h2><p className="rv rv-d1">Inserisci la tua RAL per avere una stima del netto mensile, con il dettaglio di INPS, IRPEF e addizionali.</p></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <CalcBustaPaga />
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="voci">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Le voci pi&ugrave; importanti <em>da controllare</em></h2></div>
          <div className="v8-prose rv">
            <p><strong>Paga base + contingenza</strong> &mdash; Il minimo previsto dal tuo CCNL per il tuo livello. Se il tuo stipendio &egrave; sotto questo importo, c&apos;&egrave; un problema.</p>
            <p><strong>Superminimo</strong> &mdash; La parte in pi&ugrave; rispetto al minimo contrattuale, concordata individualmente. Pu&ograve; essere &ldquo;assorbibile&rdquo; (sparisce con gli aumenti CCNL) o &ldquo;non assorbibile&rdquo; (resta fisso).</p>
            <p><strong>Straordinari</strong> &mdash; Le ore lavorate oltre l&apos;orario contrattuale. Sono maggiorate: +15% a +50% a seconda del CCNL, dell&apos;ora e del giorno (feriale, notturno, festivo).</p>
            <p><strong>Ferie e ROL</strong> &mdash; Ferie maturate, godute e residue. I ROL (Riduzione Orario di Lavoro) sono i permessi retribuiti. Controlla che siano corretti ogni mese.</p>
            <p><strong>Trattamento integrativo</strong> &mdash; L&apos;ex &ldquo;bonus Renzi&rdquo;. Fino a 100&euro;/mese per redditi sotto 15.000&euro;, in misura ridotta fino a 28.000&euro;.</p>
            <p><strong>TFR maturato</strong> &mdash; La quota accantonata nel mese (circa 1/13,5 del lordo). Si accumula e lo ricevi quando lasci il lavoro o lo versi a un fondo pensione.</p>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Laura</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Laura lavora come impiegata</strong> con CCNL Commercio, livello 4. RAL 28.000&euro;, 14 mensilit&agrave;. Single, nessun figlio a carico. Ecco la sua busta paga tipo.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Paga base + contingenza</span><span>1.618&euro;</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Scatti anzianit&agrave; + superminimo</span><span>382&euro;</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Totale lordo mensile</span><span>2.000&euro;</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>Contributi INPS (9,19%) + IRPEF &minus; detrazioni + addizionali</span><span>&minus;449&euro;</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Netto in busta</span><span>~1.551&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>TFR maturato nel mese: ~148&euro; &mdash; Ferie residue: 12 giorni &mdash; Stipendio annuo netto (14 mensilit&agrave;): <strong style={{color:'#E4F3ED'}}>~21.700&euro;</strong></p>
        </div>
      </section>

      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cosa controllare <em>ogni mese</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Controlla il livello e il CCNL.</strong> Se il livello non corrisponde al contratto, lo stipendio base &egrave; sbagliato. &Egrave; l&apos;errore pi&ugrave; costoso e pi&ugrave; frequente.</p></div></div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Verifica ore e straordinari.</strong> Confronta le ore lavorate con le tue timbrature. Gli straordinari devono essere pagati con la maggiorazione prevista dal CCNL.</p></div></div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Tieni d&apos;occhio ferie e permessi.</strong> Le ferie maturano e si accumulano. I ROL non goduti vengono pagati a fine anno o a fine rapporto.</p></div></div>
            <div className="v8-info warn rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Conserva tutte le buste paga.</strong> Tieni una copia digitale di ogni cedolino, almeno per 5 anni. Ti serviranno per il 730, per il CU e in caso di contenzioso. Molte aziende usano portali online: salvali regolarmente.</p></div></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="faq">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Domande <em>frequenti</em></h2></div>
          <div className="v8-faq" style={{maxWidth:'700px',margin:'0 auto'}}>
            {faqItems.map((item, i) => (
              <div key={i} className="v8-faq-item" data-faq>
                <button className="v8-faq-q rv">{item.q}</button>
                <div className="v8-faq-a" dangerouslySetInnerHTML={{__html: item.a}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related">
            <a href="/730" className="v8-related-card rv rv-d1"><h4>Faccio il 730</h4><p>Recupera le detrazioni che non vedi in busta paga.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/tfr" className="v8-related-card rv rv-d2"><h4>TFR</h4><p>Quanto hai accantonato e come funziona la liquidazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/dimissioni" className="v8-related-card rv rv-d3"><h4>Dimissioni</h4><p>Cosa succede alla busta paga quando te ne vai.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
          </div>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
