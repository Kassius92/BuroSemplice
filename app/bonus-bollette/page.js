import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import DotNav from '@/components/redesign/DotNav';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: 'Come Ottenere il Bonus Bollette nel 2026: Requisiti ISEE e Importi',
  description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene. Guida completa con importi ARERA e soglie ISEE.',
  keywords: ['bonus bollette 2026','bonus luce e gas','bonus sociale elettrico','bonus sociale gas','ISEE bollette','sconto bollette','ARERA bonus'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette' },
  openGraph: { title: 'Bonus Bollette Luce e Gas 2026: requisiti ISEE e importi', url: 'https://zeroburocrazia.it/bonus-bollette', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbonusbollette.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonusbollette.png'] },
};

const faqItems = [
  { q: "Come si richiede il bonus bollette 2026?", a: "<strong>Non serve fare nessuna domanda.</strong> Il bonus bollette \u00e8 completamente automatico dal 2021. L\u2019unica cosa che devi fare \u00e8 presentare la DSU per il calcolo dell\u2019ISEE, al CAF (gratis) o online su inps.it con SPID. Se il tuo ISEE risulta sotto la soglia (9.796 euro per famiglie con massimo 3 figli a carico, oppure 20.000 euro per famiglie con almeno 4 figli), il sistema fa tutto da solo: l\u2019INPS trasmette i tuoi dati all\u2019ARERA, l\u2019ARERA li incrocia con le bollette intestate a te tramite il Sistema Informativo Integrato, e il tuo fornitore applica lo sconto in bolletta. Il tutto impiega circa 3-4 mesi dalla presentazione dell\u2019ISEE." },
  { q: "Quanto vale il bonus bollette luce nel 2026?", a: "Il bonus elettrico ordinario vale circa <strong>168\u20ac/anno</strong> per famiglie di 1-2 persone, <strong>219\u20ac</strong> per 3-4 persone, e <strong>241\u20ac</strong> per oltre 4 componenti. A questi si aggiunge un contributo straordinario di 115\u20ac dal decreto bollette 2026. Il totale pu\u00f2 arrivare a circa 315\u20ac di risparmio sulla luce." },
  { q: "Qual \u00e8 il limite ISEE per il bonus bollette 2026?", a: "La soglia ISEE \u00e8 di <strong>9.796\u20ac</strong> per famiglie con massimo 3 figli a carico (salita da 9.530\u20ac nel 2025). Per famiglie numerose con almeno 4 figli, la soglia sale a <strong>20.000\u20ac</strong>." },
  { q: "Il bonus si perde se cambio fornitore di luce o gas?", a: "<strong>No.</strong> Il Sistema Informativo Integrato trasferisce automaticamente i dati al nuovo fornitore, che continuer\u00e0 ad applicare lo sconto dalla prima bolletta utile. Non devi fare nulla." },
  { q: "Vivo in affitto, ho diritto al bonus bollette?", a: "S\u00ec, ma solo se la bolletta \u00e8 intestata a te o a un componente del tuo nucleo familiare ISEE. Se il contratto \u00e8 intestato al proprietario della casa, <strong>non puoi ricevere il bonus</strong>. La soluzione: fai la voltura (cambio intestazione) della bolletta a tuo nome." },
  { q: "Il bonus bollette \u00e8 retroattivo?", a: "<strong>S\u00ec, \u00e8 retroattivo al 1\u00b0 gennaio.</strong> Se presenti l\u2019ISEE a giugno 2026, ricevi lo sconto anche per i mesi precedenti (da gennaio a maggio) in un\u2019unica soluzione nella prima bolletta utile dopo l\u2019attivazione del bonus. Questo significa che non perdi i mesi passati, ma devi comunque aspettare i tempi tecnici di attivazione (3-4 mesi dalla presentazione dell\u2019ISEE). Per questo conviene farlo il prima possibile: prima presenti l\u2019ISEE, prima inizi a vedere lo sconto in bolletta." },
  { q: "Come faccio a sapere se ho ricevuto il bonus?", a: "Controlla in bolletta la voce <strong>\u201cCompensazione Bonus Sociale\u201d</strong>. Puoi anche verificare online sul portale SGAte (sportellotelematicosgate.it) con SPID oppure chiamare il numero verde ARERA <strong>800.166.654</strong> gratuito da fisso e da mobile." },
  { q: "Il bonus bollette \u00e8 cumulabile con altri bonus?", a: "<strong>S\u00ec, tutti i bonus sociali sono cumulabili tra loro.</strong> Con un unico ISEE sotto soglia puoi ricevere contemporaneamente: il bonus elettrico (fino a ~315\u20ac/anno con contributo straordinario), il bonus gas (da 60 a 200\u20ac/anno a seconda della zona e dell\u2019uso), il bonus acqua (50 litri gratis al giorno per persona), e il nuovo bonus TARI 2026 (25% di sconto sulla tassa rifiuti). Si attivano tutti automaticamente senza fare domande separate. Il bonus bollette \u00e8 inoltre cumulabile con l\u2019Assegno Unico, la social card e tutte le altre agevolazioni ISEE." },
];

export default function BonusBollettePage() {
  const schemas = [
    articleSchema({ title: 'Bonus Bollette 2026: requisiti ISEE, importi e come ottenerlo', description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene.', url: '/bonus-bollette', image: 'ogbonusbollette.png', datePublished: '2026-03-20', dateModified: '2026-03-27' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "importi", "label": "Importi"}, {"id": "come", "label": "Come ottenerlo"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      <NavV8 />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(232,114,74,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Bonus <em>Bollette</em> 2026</h1>
          <p className="v8-ghero-sub rv rv-d2">Luce, gas, acqua e TARI: come ottenere lo sconto automatico in bolletta. Non serve fare domanda &mdash; basta l&apos;ISEE.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>~315&euro;</strong><span>Risparmio luce/anno</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>9.796&euro;</strong><span>Soglia ISEE</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>Auto</strong><span>Non serve domanda</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; il <em>bonus bollette</em></h2></div>
          <div className="v8-prose rv">
            <p>Il bonus bollette (ufficialmente <strong>bonus sociale elettrico e gas</strong>) &egrave; uno sconto che lo Stato ti applica direttamente in bolletta se la tua famiglia ha un reddito basso. Non &egrave; un rimborso, non &egrave; un voucher &mdash; &egrave; uno sconto automatico che vedi in bolletta alla voce &ldquo;Compensazione Bonus Sociale&rdquo;.</p>
            <p>Dal 2021 funziona in modo completamente diverso rispetto al passato: <strong>non devi pi&ugrave; fare domanda</strong>. Se fai l&apos;<Tip t="L&apos;Indicatore della Situazione Economica Equivalente. Un numero che misura la ricchezza del tuo nucleo familiare.">ISEE</Tip> e rientri nelle soglie, il bonus si attiva da solo. L&apos;INPS manda i tuoi dati all&apos;<Tip t="Autorit&agrave; di Regolazione per Energia Reti e Ambiente. L&apos;ente che stabilisce le regole del mercato energetico e gli importi dei bonus.">ARERA</Tip>, l&apos;ARERA li incrocia con le tue utenze e dice al fornitore di applicare lo sconto.</p>
            <p>Il bonus copre quattro servizi: <strong>luce, gas, acqua e rifiuti (TARI)</strong>. Si attivano tutti insieme con un unico ISEE sotto soglia. Puoi cumularli tutti senza fare domande separate. In totale, una famiglia di 4 persone con ISEE basso può risparmiare oltre 600 euro all'anno sulle bollette.</p>
            <p>Il bonus viene erogato in bolletta come sconto: non ricevi soldi sul conto corrente, ma paghi meno. Lo sconto viene suddiviso proporzionalmente nelle bollette dell'anno. Per il gas, l'importo è più alto nelle bollette invernali (quando consumi di più per il riscaldamento) e più basso in estate.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>ARERA</strong> &mdash; l&apos;Autorit&agrave; che regola energia, gas e acqua in Italia. Decide importi e regole dei bonus sociali ogni anno.</p>
            <p><strong>DSU</strong> &mdash; Dichiarazione Sostitutiva Unica, il modulo che compili per ottenere l&apos;ISEE. Si fa gratis al CAF o online su inps.it con SPID.</p>
            <p><strong>SII</strong> &mdash; Sistema Informativo Integrato, la banca dati che incrocia i tuoi dati INPS con le tue utenze di luce e gas per attivare il bonus automaticamente.</p>
            <p><strong>PDR</strong> &mdash; Punto di Riconsegna, il codice che identifica la tua utenza gas. Lo trovi in bolletta. Serve solo se hai il riscaldamento condominiale centralizzato.</p>
            <p><strong>Zona climatica</strong> &mdash; l&apos;Italia &egrave; divisa in zone (da A a F) in base al clima. Pi&ugrave; fa freddo nella tua zona, pi&ugrave; alto sar&agrave; il tuo bonus gas.</p>
            <p><strong>SGAte</strong> &mdash; il portale online dove verificare se il bonus &egrave; stato attivato (sportellotelematicosgate.it). Puoi accedere con SPID o chiamare il numero verde ARERA 800.166.654.</p>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Senza ISEE non c&apos;&egrave; bonus.</strong> Non importa quanto guadagni poco: se non presenti la DSU, il sistema non sa che esisti e non ti applica nessuno sconto. L&apos;ISEE si fa gratis al CAF o online con SPID in 15 minuti. Ogni mese che passa senza ISEE &egrave; un mese di bonus perso.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="chi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Chi ne ha <em>diritto</em></h2><p className="rv rv-d1">Servono due cose: ISEE sotto soglia e bolletta intestata a te.</p></div>
          <div className="v8-prose rv">
            <p><strong>Soglia ISEE 2026:</strong> fino a <strong>9.796&euro;</strong> per famiglie con massimo 3 figli a carico (salita da 9.530&euro; nel 2025). Per famiglie numerose con almeno 4 figli, la soglia sale a <strong>20.000&euro;</strong>.</p>
            <p><strong>Bolletta intestata a te:</strong> il contratto di luce e gas deve essere intestato a te o a un componente del tuo nucleo familiare ISEE. Se sei in affitto e la bolletta &egrave; intestata al proprietario, non hai diritto al bonus. La soluzione: fai la voltura della bolletta a tuo nome. L&apos;utenza deve essere a uso domestico (non commerciale) e la fornitura deve essere attiva.</p>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Attenzione all&apos;intestatario.</strong> Questo &egrave; l&apos;errore pi&ugrave; comune. Se vivi in affitto e la bolletta &egrave; intestata al padrone di casa, non ricevi il bonus anche se il tuo ISEE &egrave; bassissimo. Fai la voltura: costa poco e ti sblocca il bonus per sempre.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="quanto">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quanto <em>vale</em></h2></div>
          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Bonus elettrico (importi annuali 2026)</h3>
            <p>1&ndash;2 persone: circa <strong>168&euro;/anno</strong>. 3&ndash;4 persone: circa <strong>219&euro;/anno</strong> (fascia pi&ugrave; comune). Oltre 4 persone: circa <strong>241&euro;/anno</strong>. A questi si aggiunge il contributo straordinario del decreto bollette 2026: fino a <strong>115&euro;</strong>. Totale possibile: circa <strong>315&euro; di risparmio sulla luce</strong>.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Bonus gas</h3>
            <p>L&apos;importo dipende da quante persone siete, per cosa usate il gas (cucina, riscaldamento, o entrambi) e in quale <Tip t="L&apos;Italia &egrave; divisa in 6 zone climatiche. Zona A/B: Sicilia, Sardegna. Zona C: centro-sud. Zona D: centro. Zona E: nord (Milano, Torino). Zona F: montagna.">zona climatica</Tip> vivete. In media, una famiglia di 3-4 persone in zona E (Milano, Torino) che usa il gas per riscaldamento e cucina riceve circa <strong>140&ndash;200&euro;/anno</strong>. Lo sconto &egrave; pi&ugrave; alto nelle bollette invernali.</p>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Bonus acqua e TARI</h3>
            <p>Con lo stesso ISEE ricevi anche il <strong>bonus idrico</strong>: 50 litri gratuiti al giorno per componente (200 litri/giorno per famiglia di 4). Dal 2026 &egrave; attivo anche il <strong>bonus TARI</strong>: 25% di sconto sulla tassa rifiuti, automatico con lo stesso ISEE.</p>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Marco</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Marco vive a Bari</strong> (zona climatica C) con la moglie e due figli. ISEE di <strong style={{color:'var(--v8-bg)'}}>8.500&euro;</strong>. Usano il gas per cucina e riscaldamento. Non ha fatto nessuna domanda: ha solo presentato l&apos;ISEE al CAF a gennaio.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Bonus luce ordinario (4 persone)</span><span>&euro; 219/anno</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Contributo extra decreto bollette</span><span>&euro; 115</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Bonus gas (zona C, risc.+cucina)</span><span>~&euro; 150/anno</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>Bonus acqua + TARI</span><span>~&euro; 130/anno</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Risparmio annuo totale</span><span>~&euro; 614</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Marco non ha fatto <strong style={{color:'#E4F3ED'}}>nessuna domanda</strong>. Ha solo presentato l&apos;ISEE al CAF a gennaio. Tutto il resto &egrave; stato automatico.</p>
        </div>
      </section>

      <section className="v8-section warm" id="come">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si <em>ottiene</em></h2><p className="rv rv-d1">Il bonus &egrave; automatico. Devi solo fare l&apos;ISEE.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Presenta la DSU</h3><p>Online su inps.it con SPID (15 min) o gratis al CAF. Fallo il prima possibile: ogni mese di ritardo &egrave; un mese di bonus perso.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>L&apos;INPS calcola il tuo ISEE</h3><p>Entro 3-5 giorni. Se &egrave; sotto soglia, invia automaticamente i dati ad ARERA e al SII.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Il SII trova le tue utenze</h3><p>Incrocia i tuoi dati con le bollette intestate a te. Quando trova un match, comunica al fornitore di applicare lo sconto.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Lo sconto compare in bolletta</h3><p>Entro 3-4 mesi. Il bonus &egrave; retroattivo: se presenti l&apos;ISEE a marzo, recuperi anche gennaio e febbraio.</p></div>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>Fai l&apos;ISEE a gennaio.</strong> Pi&ugrave; aspetti, pi&ugrave; mesi di bonus perdi nei tempi tecnici. Se lo fai a gennaio, ricevi il primo sconto ad aprile. Se lo fai a giugno, aspetti settembre. Al CAF &egrave; gratis e ci metti mezz&apos;ora.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="decreto">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Decreto bollette <em>2026</em></h2><p className="rv rv-d1">Il 18 febbraio 2026 il Governo ha approvato un intervento da 5 miliardi di euro.</p></div>
          <div className="v8-docs-grid rv">
            <div className="v8-doc-group">
              <h3>Per chi ha il bonus sociale</h3>
              <div className="v8-doc"><strong>Contributo straordinario 115&euro;</strong> &mdash; si aggiunge al bonus ordinario sulla bolletta elettrica. Si attiva automaticamente.</div>
              <div className="v8-doc"><strong>Bonus TARI 25%</strong> &mdash; sconto sulla tassa rifiuti, automatico con lo stesso ISEE sotto soglia.</div>
            </div>
            <div className="v8-doc-group">
              <h3>Per tutti (ISEE fino a 25.000&euro;)</h3>
              <div className="v8-doc"><strong>Sconto volontario fornitori fino a 60&euro;</strong> &mdash; i fornitori possono offrire uno sconto ai clienti con ISEE fino a 25.000&euro;. Non &egrave; automatico: dipende dal fornitore.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="casi">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Casi <em>particolari</em></h2></div>
          <div className="v8-prose rv">
            <p><strong>Gas condominiale centralizzato:</strong> se il riscaldamento &egrave; centralizzato, il sistema non trova la tua utenza gas. Riceverai una lettera dall&apos;INPS per comunicare il codice PDR condominiale. Il bonus gas arriva poi come bonifico domiciliato (ritiri i soldi alle Poste).</p>
            <p><strong>Bonus disagio fisico:</strong> chi usa apparecchiature elettromedicali salvavita (ventilatori, dialisi domiciliare) ha diritto a un bonus separato <strong>senza limiti di ISEE</strong>. L&apos;importo pu&ograve; superare i 500&euro;/anno. Si richiede al Comune o al CAF con certificato ASL.</p>
            <p><strong>Se perdi il lavoro a met&agrave; anno:</strong> se il tuo ISEE ordinario &egrave; troppo alto perch&eacute; basato sui redditi del 2024, ma nel frattempo il tuo reddito &egrave; calato di almeno il 25%, puoi fare l&apos;ISEE corrente. Aggiorna i redditi alla situazione attuale e ti permette di rientrare nelle soglie per il bonus.</p>
          </div>
        </div>
      </section>

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

      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related-grid rv">
            <Link href="/bonus-bollette/decreto-2026" className="v8-related-card"><h4>Decreto Bollette 2026</h4><p>Bonus extra 115&euro; per chi ha il bonus sociale.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/isee" className="v8-related-card"><h4>Faccio l&apos;ISEE</h4><p>Senza ISEE niente bonus. Come farlo gratis in 15 minuti.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/spid" className="v8-related-card"><h4>SPID</h4><p>Serve per fare l&apos;ISEE online su inps.it.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
            <Link href="/730" className="v8-related-card"><h4>730</h4><p>Detrazioni e rimborsi fiscali.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          </div>
        </div>
      </section>

      <section className="v8-cta"><div className="v8-cta-box rv-scale"><h2>Ti &egrave; stata <em>utile?</em></h2><p>Ne abbiamo molte altre. Trova quella che ti serve.</p><Link href="/guide" className="v8-cta-btn">Esplora tutte le guide</Link></div></section>
      <FooterV8 />
    </div>
  );
}
