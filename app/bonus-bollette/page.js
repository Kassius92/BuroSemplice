import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Ottenere il Bonus Bollette nel 2026: Requisiti ISEE e Importi',
  description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene. Guida completa e aggiornata con importi ARERA e soglie ISEE.',
  keywords: ['bonus bollette 2026', 'bonus luce e gas', 'bonus sociale elettrico', 'bonus sociale gas', 'ISEE bollette', 'sconto bollette', 'ARERA bonus', 'bonus energia 2026', 'bonus bollette requisiti', 'bonus bollette come ottenerlo'],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-bollette' },
  openGraph: {
    title: 'Bonus Bollette Luce e Gas 2026: requisiti ISEE, importi e come ottenerlo',
    description: 'Bonus bollette luce e gas 2026: chi ne ha diritto, quanto vale, come si ottiene. Guida completa e aggiornata.',
    url: 'https://zeroburocrazia.it/bonus-bollette',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogbonusbollette.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonusbollette.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00E8" },
  { id: 'chi', label: 'Chi ne ha diritto' },
  { id: 'quanto', label: 'Quanto vale' },
  { id: 'come', label: 'Come si ottiene' },
  { id: 'decreto', label: 'Decreto 2026', bh: true },
  { id: 'casi', label: 'Casi particolari', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Come si richiede il bonus bollette 2026?", a: "Non serve fare domanda. Basta presentare la DSU per il calcolo dell\u2019ISEE. Se il tuo ISEE \u00E8 sotto la soglia (9.796 euro o 20.000 euro con 4+ figli), il bonus si attiva automaticamente in bolletta entro 3-4 mesi." },
  { q: "Quanto vale il bonus bollette luce nel 2026?", a: "Il bonus elettrico ordinario vale circa <strong>168\u20AC/anno</strong> per famiglie di 1-2 persone, <strong>219\u20AC</strong> per 3-4 persone, e <strong>241\u20AC</strong> per oltre 4 componenti. A questi si aggiunge un contributo straordinario di 115\u20AC dal decreto bollette 2026." },
  { q: "Qual \u00E8 il limite ISEE per il bonus bollette 2026?", a: "La soglia ISEE \u00E8 di <strong>9.796\u20AC</strong> per famiglie con massimo 3 figli a carico. Per famiglie numerose con almeno 4 figli, la soglia sale a <strong>20.000\u20AC</strong>." },
  { q: "Il bonus si perde se cambio fornitore di luce o gas?", a: "<strong>No.</strong> Il Sistema Informativo Integrato trasferisce automaticamente i dati al nuovo fornitore, che continuer\u00E0 ad applicare lo sconto dalla prima bolletta utile." },
  { q: "Vivo in affitto, ho diritto al bonus bollette?", a: "S\u00EC, ma solo se la bolletta \u00E8 intestata a te o a un componente del tuo nucleo familiare. Se il contratto \u00E8 intestato al proprietario, <strong>non puoi ricevere il bonus</strong>. Soluzione: fai la voltura." },
  { q: "Il bonus bollette \u00E8 retroattivo?", a: "<strong>S\u00EC.</strong> Se presenti l\u2019ISEE a giugno, ricevi lo sconto anche per i mesi precedenti (da gennaio a maggio) in un\u2019unica soluzione nella prima bolletta utile." },
  { q: "Come faccio a sapere se ho ricevuto il bonus?", a: "Controlla in bolletta la voce <strong>\u201CCompensazione Bonus Sociale\u201D</strong>. Puoi anche verificare online sul portale SGAte (sportellotelematicosgate.it) con SPID oppure chiamare il numero verde ARERA <strong>800.166.654</strong>." },
  { q: "Il bonus bollette \u00E8 cumulabile con altri bonus?", a: "<strong>S\u00EC.</strong> Puoi avere contemporaneamente il bonus elettrico, il bonus gas, il bonus acqua e il nuovo bonus TARI (25% di sconto). Si attivano tutti con lo stesso ISEE sotto soglia." },
];

export default function BonusBollettePage() {
  const schemas = [
    articleSchema({
      title: 'Bonus Bollette Luce e Gas 2026: requisiti ISEE, importi e come ottenerlo',
      description: 'Guida completa al bonus bollette 2026: soglie ISEE, importi ARERA, decreto bollette e procedura automatica.',
      url: '/bonus-bollette',
      image: 'ogbonusbollette.png',
      datePublished: '2026-03-19',
      dateModified: '2026-03-19',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90"  stroke="#E36414" strokeWidth=".8"/>
          <line x1="10"  y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10"  x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Bonus <em>Bollette</em><br/>Luce e Gas</h1>
            <p className="hero-sub">Quanto vale, chi ne ha diritto, come si ottiene (senza fare domanda). Lo sconto che arriva direttamente in bolletta &mdash; se hai l&apos;ISEE giusto.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCB0'} Fino a 315&euro; di risparmio</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> ARERA &middot; INPS &middot; Gazzetta Ufficiale (D.L. Bollette 2026)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">315&euro;</div><div className="hl">risparmio max sulla luce<br/>bonus + decreto 2026</div></div>
            <div className="hstat"><div className="hn">0</div><div className="hl">domande da fare<br/>&egrave; tutto automatico</div></div>
            <div className="hstat"><div className="hn">9.796&euro;</div><div className="hl">soglia ISEE 2026<br/>(20.000&euro; con 4+ figli)</div></div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* CONTENT */}
      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} ISEE</a>
              <a href="/spid" className="ps">{'\uD83D\uDD10'} SPID</a>
              <a href="/730" className="ps">{'\uD83E\uDDFE'} 730</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.arera.it/consumatori/bonus-sociale" target="_blank" rel="noopener noreferrer" className="ps">{'\u26A1'} ARERA &mdash; Bonus sociale</a>
              <a href="https://www.sportellotelematicosgate.it" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83D\uDD0D'} SGAte &mdash; Verifica bonus</a>
            </div>
          </div>

          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>ARERA</strong> &mdash; l&apos;Autorit&agrave; che regola energia, gas e acqua in Italia. Decide importi e regole dei bonus sociali.</div>
              <div className="gl-item r d2"><strong>DSU</strong> &mdash; Dichiarazione Sostitutiva Unica, il modulo che compili per ottenere l&apos;ISEE. Si fa all&apos;INPS o al CAF.</div>
              <div className="gl-item r d3"><strong>SII</strong> &mdash; Sistema Informativo Integrato, la banca dati che incrocia i tuoi dati INPS con le tue utenze di luce e gas.</div>
              <div className="gl-item r d4"><strong>PDR</strong> &mdash; Punto di Riconsegna, il codice che identifica la tua utenza gas. Lo trovi in bolletta.</div>
              <div className="gl-item r d1"><strong>Zona climatica</strong> &mdash; l&apos;Italia &egrave; divisa in zone (da A a F) in base al clima. Pi&ugrave; fa freddo, pi&ugrave; alto il bonus gas.</div>
              <div className="gl-item r d2"><strong>SGAte</strong> &mdash; il portale online dove puoi verificare se il tuo bonus &egrave; stato attivato (sportellotelematicosgate.it).</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCA1'}</div><div className="sn">~168&euro;</div><div className="sl">bonus luce/anno<br/>(1-2 persone)</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDD25'}</div><div className="sn">~150&euro;</div><div className="sl">bonus gas/anno<br/>(zona E, riscaldamento)</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">9.796&euro;</div><div className="sl">soglia ISEE<br/>(20.000&euro; con 4+ figli)</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83E\uDD16'}</div><div className="sn">Auto</div><div className="sl">non serve fare domanda<br/>basta l&apos;ISEE</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">12 mesi</div><div className="sl">durata dello sconto<br/>rinnovabile ogni anno</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCA7'}</div><div className="sn">+acqua</div><div className="sl">bonus idrico e TARI<br/>inclusi automaticamente</div></div>
              </div>
            </div>
          </div>

          {/* COS'\u00C8 */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il bonus bollette</h2>

            <p>Il bonus bollette (ufficialmente <strong>bonus sociale elettrico e gas</strong>) &egrave; uno sconto che lo Stato ti applica direttamente in bolletta se la tua famiglia ha un reddito basso. Non &egrave; un rimborso, non &egrave; un voucher &mdash; &egrave; uno sconto automatico che vedi scritto in bolletta alla voce &ldquo;Compensazione Bonus Sociale&rdquo;.</p>

            <p>Esiste dal 2009, ma dal 2021 funziona in modo completamente diverso: <strong>non devi pi&ugrave; fare domanda</strong>. Se fai l&apos;<Tip t="L&apos;Indicatore della Situazione Economica Equivalente. Un numero che misura la &ldquo;ricchezza&rdquo; del tuo nucleo familiare, considerando redditi, patrimonio e composizione della famiglia. Si ottiene compilando la DSU.">ISEE</Tip> e rientri nelle soglie, il bonus si attiva da solo. L&apos;INPS manda i tuoi dati all&apos;<Tip t="Autorit&agrave; di Regolazione per Energia Reti e Ambiente. L&apos;ente pubblico che stabilisce le regole del mercato energetico italiano, compresi gli importi dei bonus sociali.">ARERA</Tip>, l&apos;ARERA li incrocia con le tue utenze e dice al tuo fornitore di applicarti lo sconto.</p>

            <p>Il bonus copre quattro servizi: <strong>luce, gas, acqua e rifiuti (TARI)</strong>. Si attivano tutti insieme con un unico ISEE sotto soglia. Puoi cumularli tutti &mdash; non devi scegliere.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Bonus bollette e ISEE: il legame &egrave; diretto</div>
              <p>Senza ISEE non c&apos;&egrave; bonus. Non importa quanto guadagni poco &mdash; se non presenti la DSU, il sistema non sa che esisti e non ti applica nessuno sconto. L&apos;ISEE si fa gratis al CAF o online con SPID. Ci vogliono 15 minuti. Se non l&apos;hai ancora fatto, <strong>ogni mese che passa &egrave; un mese di bonus perso</strong>.</p>
            </div>
            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Come farlo gratis in 15 minuti, documenti necessari.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* CHI NE HA DIRITTO */}
          <div className="sec r" id="chi">
            <div className="sec-tag">Requisiti</div>
            <h2>Chi ne ha diritto</h2>
            <p>Per ottenere il bonus bollette nel 2026 servono due cose: un ISEE sotto soglia e una bolletta intestata a te.</p>

            <h3>Requisito 1: ISEE sotto la soglia</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Situazione familiare</th><th>Soglia ISEE 2026</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Famiglie con max 3 figli a carico</td><td className="cv cfr">fino a 9.796&euro; <span className="badge">Standard</span></td></tr>
                  <tr><td>Famiglie con 4 o pi&ugrave; figli a carico</td><td className="cv">fino a 20.000&euro;</td></tr>
                </tbody>
              </table>
            </div>
            <p>La soglia &egrave; salita da 9.530&euro; a 9.796&euro; dal 1&deg; gennaio 2026, per effetto dell&apos;adeguamento all&apos;inflazione deciso dall&apos;ARERA. Per le famiglie numerose (4+ figli) resta invariata a 20.000&euro;.</p>

            <h3>Requisito 2: Bolletta intestata a te</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Il contratto luce/gas deve essere intestato a te</strong><span className="note">O a un altro componente del tuo nucleo familiare ISEE. Se sei in affitto e la bolletta &egrave; intestata al proprietario, non hai diritto al bonus.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>L&apos;utenza deve essere a uso domestico</strong><span className="note">Niente partite IVA, uffici o attivit&agrave; commerciali &mdash; solo casa.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u2705'}</div><div className="clb"><strong>La fornitura deve essere attiva</strong><span className="note">O al massimo sospesa per morosit&agrave; &mdash; in quel caso il bonus si attiva comunque.</span></div></li>
            </ul>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Attenzione all&apos;intestatario della bolletta</div>
              <p>Questo &egrave; l&apos;errore pi&ugrave; comune. Se vivi in affitto e la bolletta &egrave; intestata al padrone di casa, <strong>non ricevi il bonus</strong> anche se il tuo ISEE &egrave; bassissimo. La soluzione: fai la voltura (intestazione a tuo nome) della bolletta. Costa poco e ti sblocca il bonus per sempre.</p>
            </div>
          </div>

          {/* QUANTO VALE */}
          <div className="sec r" id="quanto">
            <div className="sec-tag">Importi</div>
            <h2>Quanto vale il bonus</h2>
            <p>Gli importi vengono stabiliti ogni anno dall&apos;ARERA. Il bonus luce &egrave; fisso per tutto l&apos;anno; il bonus gas cambia ogni trimestre ed &egrave; pi&ugrave; alto in inverno.</p>

            <h3>Bonus elettrico (importi annuali 2026)</h3>
            <div className="tw r">
              <table>
                <thead><tr><th>Componenti nucleo</th><th>Bonus annuo</th><th>Ogni 30 giorni</th></tr></thead>
                <tbody>
                  <tr><td>1&ndash;2 persone</td><td className="cv">~168&euro;</td><td>~13,80&euro;</td></tr>
                  <tr className="hl"><td className="cv">3&ndash;4 persone</td><td className="cv cfr">~219&euro; <span className="badge">Pi&ugrave; comune</span></td><td>~18,00&euro;</td></tr>
                  <tr><td>Oltre 4 persone</td><td className="cv">~241&euro;</td><td>~19,80&euro;</td></tr>
                </tbody>
              </table>
            </div>
            <p>A questi importi si aggiunge il <strong>contributo straordinario del decreto bollette 2026: fino a 115&euro;</strong> sulla bolletta elettrica (cumulabile con il bonus ordinario). Il totale pu&ograve; arrivare a circa <strong>315&euro; di risparmio sulla luce</strong>.</p>

            <h3>Bonus gas</h3>
            <p>Il bonus gas non &egrave; uguale per tutti. L&apos;importo dipende da tre fattori: quante persone siete, per cosa usate il gas (solo cucina, solo riscaldamento, o entrambi) e in quale <Tip t="L&apos;Italia &egrave; divisa in 6 zone climatiche (dalla A alla F) in base alla temperatura media. Zona A/B: Sicilia, Sardegna. Zona C: centro-sud. Zona D: centro. Zona E: nord (Milano, Torino, Bologna). Zona F: montagna (Belluno, Aosta).">zona climatica</Tip> vivete. Le zone vanno dalla A (pi&ugrave; calda) alla F (pi&ugrave; fredda). Pi&ugrave; fa freddo, pi&ugrave; alto &egrave; il bonus.</p>
            <p>In media, una famiglia di 3-4 persone in zona climatica E (Milano, Torino, Bologna) che usa il gas per riscaldamento e cucina riceve circa <strong>140-200&euro; all&apos;anno</strong> di sconto. Lo sconto &egrave; pi&ugrave; alto nelle bollette invernali e pi&ugrave; basso in estate.</p>

            <h3>Bonus acqua</h3>
            <p>Con lo stesso ISEE sotto soglia ricevi anche il <strong>bonus idrico</strong>: uno sconto che garantisce 50 litri gratuiti al giorno per ogni componente della famiglia. Per una famiglia di 4 persone sono 200 litri al giorno gratis. L&apos;importo varia in base alle tariffe del tuo gestore idrico locale.</p>

            <h3>Bonus TARI (novit&agrave; 2026)</h3>
            <p>Dal 2026 &egrave; attivo anche il <strong>bonus sociale rifiuti</strong>: uno sconto del 25% sulla TARI (la tassa sui rifiuti). Si applica automaticamente con gli stessi requisiti ISEE degli altri bonus. Non devi fare nulla di diverso.</p>

            {/* ESEMPIO PRATICO */}
            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: la famiglia di Marco</h3>
              <p>Marco vive a <strong>Bari</strong> (zona climatica C) con la moglie e due figli. Hanno un ISEE di <strong>8.500&euro;</strong>. Usano il gas per cucina e riscaldamento.</p>
              <p>Bonus luce ordinario: <strong>219&euro;/anno</strong> (nucleo di 4 persone)</p>
              <p>Contributo extra decreto bollette: <strong>115&euro;</strong></p>
              <p>Bonus gas (zona C, 4 persone, risc.+cucina): circa <strong>150&euro;/anno</strong></p>
              <p>Bonus acqua: circa <strong>60&euro;/anno</strong> (stima per Bari)</p>
              <p>Bonus TARI (25% di ~280&euro;): circa <strong>70&euro;/anno</strong></p>
              <div className="db-row db-total"><span className="db-label">Totale risparmio annuo di Marco</span><span className="db-val">~614&euro;</span></div>
              <p>E Marco non ha fatto <strong>nessuna domanda</strong>. Ha solo presentato l&apos;ISEE al CAF a gennaio. Tutto il resto &egrave; automatico.</p>
            </div>
          </div>

          {/* COME SI OTTIENE */}
          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si ottiene</h2>
            <p>Il bonus &egrave; automatico dal 2021. Non serve fare domanda, compilare moduli o contattare il fornitore. Devi solo fare una cosa: <strong>presentare l&apos;ISEE</strong>.</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Presenta la DSU per ottenere l&apos;ISEE</strong>
                  <p>Puoi farlo online su inps.it con SPID (15 minuti) oppure gratis al CAF. La DSU &egrave; il modulo che l&apos;INPS usa per calcolare il tuo ISEE. Fallo il prima possibile: ogni mese di ritardo &egrave; un mese di bonus perso.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>L&apos;INPS calcola il tuo ISEE e trasmette i dati</strong>
                  <p>Entro 3-5 giorni dalla DSU, l&apos;INPS elabora il tuo ISEE. Se risulta sotto la soglia, invia automaticamente i tuoi dati anagrafici all&apos;ARERA e al Sistema Informativo Integrato (SII).</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Il SII trova le tue utenze e attiva il bonus</strong>
                  <p>Il SII incrocia i tuoi dati con le bollette di luce, gas e acqua intestate a te o al tuo nucleo familiare. Quando trova un match, comunica al fornitore di applicare lo sconto.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Lo sconto compare in bolletta (entro 3-4 mesi)</strong>
                  <p>Dalla bolletta successiva all&apos;attivazione vedrai la voce &ldquo;Compensazione Bonus Sociale&rdquo; con lo sconto applicato. Il bonus &egrave; retroattivo: se presenti l&apos;ISEE a marzo, recuperi anche gennaio e febbraio.</p>
                </div>
              </div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Fai l&apos;ISEE a gennaio.</strong> Pi&ugrave; aspetti, pi&ugrave; mesi di bonus perdi. Anche se poi il bonus &egrave; retroattivo, il meccanismo ha dei tempi tecnici (3-4 mesi). Se lo fai a gennaio, ricevi il primo sconto gi&agrave; ad aprile. Se lo fai a giugno, aspetti settembre &mdash; e nel frattempo paghi le bollette a prezzo pieno. Al CAF &egrave; gratis e ci metti mezz&apos;ora.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Serve per fare l&apos;ISEE online. Come farlo gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DECRETO BOLLETTE 2026 */}
          <div className="sec breve-hide r" id="decreto">
            <div className="sec-tag">Novit&agrave; 2026</div>
            <h2>Il decreto bollette 2026</h2>
            <p>Il 18 febbraio 2026 il Consiglio dei Ministri ha approvato il <strong>decreto bollette</strong>, un intervento da circa 5 miliardi di euro per contenere il caro energia. Ecco cosa prevede per le famiglie:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u26A1'}</div><div className="clb"><strong>Contributo straordinario di 115&euro; sulla bolletta elettrica</strong><span className="note">Si aggiunge al bonus ordinario (max ~200&euro;). Il totale arriva a circa 315&euro; per le famiglie vulnerabili. Si attiva con la stessa procedura automatica.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDD1D'}</div><div className="clb"><strong>Sconto volontario fino a 60&euro; per ISEE fino a 25.000&euro;</strong><span className="note">I fornitori di energia possono riconoscere uno sconto volontario ai clienti con ISEE fino a 25.000&euro; &mdash; anche a chi non rientra nel bonus ordinario.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDFED'}</div><div className="clb"><strong>Aiuti anche per le imprese</strong><span className="note">Crediti d&apos;imposta e misure per le PMI energivore. Non trattati in questa guida.</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Lo sconto volontario dei fornitori</div>
              <p>Il decreto prevede che i fornitori di energia possano offrire uno <strong>sconto volontario di almeno 60&euro;</strong> ai nuclei familiari con ISEE fino a 25.000&euro;. Questo &egrave; diverso dal bonus sociale: non &egrave; automatico e dipende dalla decisione del singolo fornitore. Se il tuo ISEE &egrave; tra 9.796&euro; e 25.000&euro;, controlla se il tuo fornitore aderisce a questa iniziativa.</p>
            </div>
          </div>

          {/* CASI PARTICOLARI */}
          <div className="sec breve-hide r" id="casi">
            <div className="sec-tag">Eccezioni</div>
            <h2>Casi particolari</h2>

            <h3>Gas condominiale centralizzato</h3>
            <p>Se vivi in un condominio con riscaldamento centralizzato, non hai una bolletta gas personale. In questo caso il sistema non trova la tua utenza gas automaticamente. Riceverai una <strong>lettera dall&apos;INPS</strong> che ti chiede di comunicare il codice <Tip t="Il Punto di Riconsegna &egrave; il codice univoco che identifica la tua utenza gas. Per il gas condominiale centralizzato, &egrave; il codice della fornitura del condominio. Lo trovi sulle bollette condominiali o chiedendo all&apos;amministratore.">PDR</Tip> della fornitura condominiale. Una volta comunicato, il bonus gas viene erogato tramite <strong>bonifico domiciliato</strong> (ritiri i soldi alle Poste).</p>

            <h3>Bonus per disagio fisico</h3>
            <p>Esiste un bonus separato per chi usa <strong>apparecchiature elettromedicali salvavita</strong> (ventilatori polmonari, dialisi domiciliare, sollevatori, ecc.). Questo bonus <strong>non ha limiti di ISEE</strong> &mdash; ne hai diritto anche se guadagni molto. L&apos;unica differenza: devi <strong>fare domanda</strong> al tuo Comune o al CAF, con un certificato ASL che attesta la necessit&agrave; delle apparecchiature. L&apos;importo pu&ograve; superare i 500&euro; all&apos;anno.</p>

            <h3>Cambio fornitore</h3>
            <p>Se cambi fornitore di luce o gas mentre hai il bonus attivo, <strong>non lo perdi</strong>. Il Sistema Informativo Integrato trasferisce automaticamente l&apos;informazione al nuovo fornitore, che continuer&agrave; ad applicare lo sconto.</p>

            <h3>Se perdi il lavoro a met&agrave; anno</h3>
            <p>Se il tuo ISEE ordinario &egrave; troppo alto perch&eacute; calcolato sui redditi del 2024, ma nel frattempo hai perso il lavoro o il tuo reddito &egrave; calato di almeno il 25%, puoi chiedere l&apos;<strong>ISEE corrente</strong>. Aggiorna i redditi alla situazione attuale e ti permette di rientrare nelle soglie per il bonus.</p>
            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>ISEE corrente</strong> &mdash; Come aggiornare l&apos;ISEE se la tua situazione &egrave; cambiata.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Senza ISEE niente bonus. Come farlo gratis in 15 minuti.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per fare l&apos;ISEE online su inps.it.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Detrazioni e rimborsi fiscali.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.arera.it/consumatori/bonus-sociale" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\u26A1'}</span><div><div className="sbtool-n">ARERA</div><div className="sbtool-d">Bonus sociale ufficiale</div></div></a>
            <a href="https://www.sportellotelematicosgate.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83D\uDD0D'}</span><div><div className="sbtool-n">SGAte</div><div className="sbtool-d">Verifica il tuo bonus</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Fai l&apos;ISEE online</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} 730<span className="sbg-ar">&rarr;</span></a>
            <a href="/ristrutturare" className="sbguide">{'\uD83C\uDFE0'} Ristrutturare casa<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
