import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import QuizFiglio from '@/components/QuizFiglio';
import Tip from '@/components/Tip';

export const metadata = {
  title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
  description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
  keywords: ["aspetto un figlio", "bonus nascita 2026", "congedo maternità", "congedo paternità", "assegno unico", "bonus nido", "bonus nuovi nati", "documenti neonato", "congedo parentale", "ISEE figlio"],
  alternates: { canonical: 'https://zeroburocrazia.it/figlio' },
  openGraph: {
    title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
    description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/figlio',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogfiglio.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary',
    title: 'Aspetto un Figlio nel 2026: Bonus, Congedo, Assegno Unico e Documenti',
    description: 'Aspetti un figlio nel 2026? Congedo maternità e paternità, assegno unico, bonus nuovi nati, bonus nido e tutti i documenti da fare. Guida gratuita aggiornata.',
    images: ['https://zeroburocrazia.it/ogfiglio.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'Sintesi' },
  { id: 'quadro', label: 'Il quadro' },
  { id: 'congedi', label: 'Congedi' },
  { id: 'bonus', label: 'Bonus' },
  { id: 'documenti', label: 'Documenti', bh: true },
  { id: 'ospedale', label: 'Ospedale', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Sono lavoratrice autonoma \u2014 ho diritto al congedo?", a: "<strong>S\u00EC, ma con regole diverse.</strong> Le lavoratrici in gestione separata INPS hanno diritto a 5 mesi di indennit\u00E0 all\u201980% del reddito, con almeno 1 mese di contributi nei 12 mesi precedenti. Le libere professioniste con cassa propria (avvocate, mediche) ricevono l\u2019indennit\u00E0 dalla loro cassa. In tutti i casi, non c\u2019\u00E8 un divieto di lavorare, ma l\u2019indennit\u00E0 copre i 5 mesi." },
  { q: "L\u2019assegno unico spetta anche ai disoccupati?", a: "<strong>S\u00EC, spetta a tutti.</strong> L\u2019assegno unico \u00E8 davvero universale: dipendenti, autonomi, pensionati, disoccupati. L\u2019unica cosa che cambia \u00E8 l\u2019importo, che dipende dall\u2019ISEE. Senza ISEE ricevi il minimo (~58\u20AC/mese)." },
  { q: "Il pap\u00E0 pu\u00F2 prendere il congedo parentale al posto della mamma?", a: "<strong>S\u00EC.</strong> Gli 11 mesi di congedo parentale si dividono tra i due genitori come preferiscono. I 3 mesi all\u201980% spettano a ciascun genitore individualmente \u2014 in teoria la coppia pu\u00F2 avere 6 mesi totali all\u201980%." },
  { q: "Posso lavorare durante il congedo parentale?", a: "<strong>No.</strong> Durante il congedo parentale non puoi lavorare. Se lo fai, perdi l\u2019indennit\u00E0 per quei giorni. Per\u00F2 puoi prendere il congedo anche a ore o a giorni \u2014 non deve essere per forza continuativo." },
  { q: "Serve il matrimonio per i diritti del padre?", a: "<strong>No.</strong> Congedo di paternit\u00E0, congedo parentale e assegno unico spettano al padre indipendentemente dal matrimonio, purch\u00E9 il figlio sia riconosciuto. Per la dichiarazione di nascita, se non siete sposati, entrambi i genitori devono presentarsi." },
  { q: "Sono straniera residente in Italia \u2014 ho diritto ai bonus?", a: "<strong>S\u00EC, nella maggior parte dei casi.</strong> L\u2019assegno unico richiede residenza in Italia e cittadinanza UE (o permesso di soggiorno di lungo periodo per extracomunitari). Bonus nuovi nati e bonus nido seguono le stesse regole. Per l\u2019assegno di maternit\u00E0 dei Comuni le regole possono variare." },
  { q: "Posso essere licenziata durante la gravidanza?", a: "<strong>No, salvo eccezioni rarissime.</strong> Il divieto di licenziamento copre tutta la gravidanza fino al compimento di 1 anno del bambino. Le eccezioni: colpa grave, cessazione dell\u2019attivit\u00E0 dell\u2019azienda, scadenza del contratto a termine. Un licenziamento in violazione \u00E8 nullo." },
  { q: "L\u2019assegno unico va dichiarato nel 730?", a: "<strong>No, \u00E8 esente.</strong> L\u2019assegno unico non fa reddito e non va dichiarato. Anche il bonus nuovi nati e il bonus nido sono esenti da IRPEF." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Aspetto un figlio nel 2026: tutti i bonus e le pratiche', description: 'Aspetti un figlio nel 2026? Guida completa su congedo maternità e paternità, assegno unico, bonus nido e tutti i documenti. Gratuita e aggiornata.', url: '/figlio', image: 'ogfiglio.png', datePublished: '2026-03-04', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-famiglia">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67'} Famiglia</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Aspetto un <em>figlio</em></h1>
            <p className="hero-sub">Congedi, bonus, assegno unico, documenti del neonato — tutto quello che devi fare e chiedere, mese per mese, spiegato come si deve.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 18 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS · D.Lgs. 151/2001 · Legge di Bilancio 2026 (L. 199/2025)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">5 mesi</div><div className="hl">congedo maternit&agrave;<br/>obbligatorio all&apos;80%</div></div>
            <div className="hstat"><div className="hn">~200€</div><div className="hl">assegno unico mensile<br/>per figlio (ISEE basso)</div></div>
            <div className="hstat"><div className="hn">1.000€</div><div className="hl">bonus nuovi nati<br/>una tantum</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/assegno-unico" className="ps">💰 Assegno unico</a>
              <a href="/mi-sposo" className="ps">💍 Mi sposo</a>
              <span className="ps ps-soon">🏫 Bonus nido <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Assegno unico</a>
              <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="ps">👶 Congedo INPS</a>
              <a href="https://www.salute.gov.it" target="_blank" rel="noopener noreferrer" className="ps">🏥 Salute e gravidanza</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83E\uDD30'}</div><div className="sn">5 mesi</div><div className="sl">congedo maternit&agrave;<br/>obbligatorio</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">80%</div><div className="sl">dello stipendio<br/>durante il congedo</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDC68'}</div><div className="sn">10 gg</div><div className="sl">congedo paternit&agrave;<br/>obbligatorio</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">~204€</div><div className="sl">assegno unico max<br/>al mese per figlio</div></div>
                <div className="sc    r d2"><div className="si">{'\uD83C\uDF81'}</div><div className="sn">1.000€</div><div className="sl">bonus nuovi nati<br/>una tantum</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83C\uDFEB'}</div><div className="sn">3.600€</div><div className="sl">bonus nido max<br/>annuo</div></div>
              </div>
            </div>
            <QuizFiglio />
          </div>


          {/* IL QUADRO */}
          <div className="sec r" id="quadro">
            <div className="sec-tag">Panoramica</div>
            <h2>Il quadro completo: cosa ti spetta</h2>
            <p>Quando aspetti un figlio in Italia, hai diritto a una serie di tutele e aiuti economici. Il problema &egrave; che <strong>nessuno te li spiega tutti insieme</strong>. Sono sparsi tra INPS, Comune, datore di lavoro e Agenzia delle Entrate. Questa guida li mette in fila.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Congedo di maternit&agrave;</strong> — I 5 mesi in cui la mamma sta a casa dal lavoro per obbligo di legge (2 prima del parto + 3 dopo, ma puoi scegliere anche 1+4 o 0+5). Pagato all&apos;80% dello stipendio dall&apos;INPS.</div>
              <div className="gl-item r d2"><strong>Congedo parentale</strong> — I mesi <em>facoltativi</em> che entrambi i genitori possono prendere dopo il congedo obbligatorio. Fino a 11 mesi in due. I primi 3 mesi dal 2026 sono pagati all&apos;80%.</div>
              <div className="gl-item r d3"><strong>Assegno unico</strong> — Un contributo mensile dell&apos;INPS per ogni figlio a carico, dal 7° mese di gravidanza fino ai 21 anni. L&apos;importo dipende dall&apos;<Tip t="L'indicatore della situazione economica della famiglia. Più è basso, più bonus ricevi. Fallo il prima possibile — è gratis.">ISEE</Tip>: da ~58€ (senza ISEE) a ~204€ al mese.</div>
              <div className="gl-item r d4"><strong>Bonus nuovi nati</strong> — 1.000€ una tantum per ogni figlio nato nel 2026. Serve ISEE sotto 40.000€ e va chiesto entro 120 giorni dalla nascita. Se non lo chiedi in tempo, lo perdi.</div>
              <div className="gl-item r d1"><strong>Bonus nido</strong> — Fino a 3.600€/anno per pagare l&apos;asilo nido (pubblico o privato). L&apos;importo dipende dall&apos;ISEE. Si chiede all&apos;INPS con le ricevute di pagamento del nido.</div>
            </div>

            <div className="dblock r">
              <div className="dblock-tag">Quanto puoi ricevere in un anno</div>
              <h3>Il pacchetto completo per un figlio nel 2026</h3>
              <div className="dblock-grid">
                <div className="dblock-item"><span className="dblock-label"><Tip t="Contributo mensile INPS per ogni figlio. L'importo dipende dall'ISEE. Si chiede dal 7° mese di gravidanza.">Assegno unico</Tip> (12 mesi)</span><span className="dblock-val">~2.445€</span></div>
                <div className="dblock-item"><span className="dblock-label">Bonus nuovi nati</span><span className="dblock-val">1.000€</span></div>
                <div className="dblock-item"><span className="dblock-label">Bonus nido (ISEE basso)</span><span className="dblock-val">fino a 3.600€</span></div>
                <div className="dblock-item"><span className="dblock-label">Congedo 5 mesi all&apos;80%</span><span className="dblock-val">~6.000€</span></div>
              </div>
              <div className="dblock-total">
                <span className="dblock-label">Valore potenziale primo anno</span>
                <span className="dblock-val">~13.000€</span>
              </div>
              <div className="dblock-note">Esempio con ISEE sotto 17.000€ e stipendio medio. Gli importi reali variano.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La cosa pi&ugrave; importante: fai l&apos;ISEE prima</div>
              <p>Quasi tutti i bonus dipendono dall&apos;<Tip t="L'indicatore della situazione economica della famiglia. Senza ISEE, ricevi il minimo di tutto. Si fa gratis al CAF o online con SPID.">ISEE</Tip>. Pi&ugrave; &egrave; basso, pi&ugrave; ricevi. Senza ISEE, l&apos;assegno unico scende a soli 58€ al mese. Fai la <Tip t="Dichiarazione Sostitutiva Unica: il modulo che compili per ottenere l'ISEE. Lo fai online su inps.it o gratis al CAF.">DSU</Tip> il prima possibile — &egrave; gratuita.</p>
            </div>
            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> — Come farlo, dove e quali documenti servono. Il primo passo per tutti i bonus.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* CONGEDI */}
          <div className="sec r" id="congedi">
            <div className="sec-tag">Lavoro e tutele</div>
            <h2>Congedi: quanto puoi stare a casa</h2>
            <p>I congedi si dividono in <strong>obbligatori</strong> (devi prenderli per legge) e <strong>facoltativi</strong> (scegli tu quando). Entrambi sono retribuiti.</p>

            <h3>Congedo di maternit&agrave; obbligatorio</h3>
            <p><strong>5 mesi totali</strong>, pagati all&apos;80% dello stipendio dall&apos;INPS. La formula standard &egrave; 2 mesi prima del parto e 3 dopo, ma puoi scegliere 1+4 o, con certificato medico, 0+5 (lavori fino all&apos;ultimo giorno). Spetta a tutte le lavoratrici dipendenti, pubbliche e private.</p>

            <h3>Congedo di paternit&agrave; obbligatorio</h3>
            <p>Il pap&agrave; ha diritto a <strong>10 giorni retribuiti al 100%</strong>, da usare entro i 5 mesi dalla nascita. Sono <strong>obbligatori</strong> — il datore di lavoro non pu&ograve; rifiutarli. Si possono prendere anche non consecutivi.</p>

            <h3><Tip t="Il periodo facoltativo in cui entrambi i genitori possono stare a casa dal lavoro per prendersi cura del figlio. Fino a 11 mesi totali tra i due.">Congedo parentale</Tip> facoltativo</h3>
            <p>Dopo il congedo obbligatorio, entrambi i genitori possono prendere un periodo aggiuntivo. Novit&agrave; 2026:</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Periodo</th><th>Retribuzione</th><th>Fino a quando</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Primi 3 mesi</strong> <span className="badge">Novit&agrave; 2026</span></td><td className="cv cfr">80% dello stipendio</td><td>6 anni del bambino</td></tr>
                  <tr><td>Successivi 6 mesi</td><td className="cv">30% dello stipendio</td><td>14 anni del bambino</td></tr>
                  <tr><td>Ultimi 2 mesi</td><td>Non retribuiti</td><td>14 anni del bambino</td></tr>
                  <tr><td><strong>Totale massimo</strong></td><td className="cv">11 mesi tra i 2 genitori</td><td>{'\u2014'}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCCA'} Congedo malattia del figlio: raddoppiano i giorni</div>
              <p>Dal 2026, i giorni di permesso per malattia del figlio passano da 5 a <strong>10 giorni all&apos;anno</strong> per figli fino a 14 anni. Non sono retribuiti dal datore ma coperti da <Tip t="L'INPS ti accredita i contributi per la pensione anche se non lavori in quei giorni. Non perdi nulla ai fini pensionistici.">contribuzione figurativa</Tip> INPS.</p>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Non perdere i 3 mesi all&apos;80%</div>
              <p>I 3 mesi di congedo parentale all&apos;80% si applicano solo a chi termina il congedo di maternit&agrave; obbligatorio <strong>dal 1° gennaio 2025 in poi</strong>. Chi lo ha terminato prima ha condizioni diverse. Usali il prima possibile — sono soldi che perdi se non li prendi.</p>
            </div>
          </div>

          {/* BONUS */}
          <div className="sec r" id="bonus">
            <div className="sec-tag">Soldi e aiuti</div>
            <h2>Tutti i bonus per chi diventa genitore nel 2026</h2>
            <p>Ci sono almeno 5 misure economiche diverse. Alcune le chiedi all&apos;INPS, altre al Comune. <strong>Sono tutte cumulabili</strong> — puoi riceverle tutte, ma devi fare domanda per ognuna separatamente.</p>

            <h3>1. Assegno unico universale</h3>
            <p>&Egrave; il contributo principale: un assegno mensile per ogni figlio a carico, <strong>dal 7° mese di gravidanza fino ai 21 anni</strong>. L&apos;importo dipende dall&apos;ISEE.</p>

            <div className="tw r">
              <table>
                <thead><tr><th>ISEE</th><th>Importo mensile per figlio</th><th>All&apos;anno</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Fino a ~17.000€</td><td className="cv cfr">~204€ <span className="badge">Max</span></td><td>~2.445€</td></tr>
                  <tr><td>~20.000€</td><td className="cv">~172€</td><td>~2.060€</td></tr>
                  <tr><td>~30.000€</td><td className="cv">~130€</td><td>~1.560€</td></tr>
                  <tr><td>~40.000€</td><td className="cv">~85€</td><td>~1.020€</td></tr>
                  <tr><td>Oltre ~46.500€ o assente</td><td>~58€</td><td>~700€</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Maggiorazioni importanti:</strong> +50% per i figli sotto 1 anno, +50% per figli 1-3 anni con almeno 3 figli. Per figli con disabilit&agrave; l&apos;importo aumenta senza limiti di et&agrave;.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Chiedi l&apos;assegno unico dal 7° mese</div>
              <p>Non aspettare che nasca il bambino. Se fai domanda dal 7° mese di gravidanza, le mensilit&agrave; arretrate ti vengono pagate con i primi versamenti dopo la nascita. &Egrave; come un piccolo premio alla nascita incluso.</p>
            </div>

            <h3>2. Bonus nuovi nati (1.000€)</h3>
            <p>Un contributo <strong>una tantum di 1.000€</strong> per ogni figlio nato o adottato nel 2026.</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE massimo: 40.000€</strong><span className="note">Serve un ISEE valido per il 2026 — fai la DSU prima della nascita</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u23F0'}</div><div className="clb"><strong>Entro 120 giorni dalla nascita</strong><span className="note">Termine perentorio — dopo lo perdi, senza possibilit&agrave; di recupero</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCF1'}</div><div className="clb"><strong>Si chiede all&apos;INPS</strong><span className="note">Online con SPID, al patronato, o chiamando 803 164</span></div></li>
            </ul>

            <h3>3. Bonus asilo nido</h3>
            <p>Un contributo annuale per pagare il nido (pubblico o privato) per figli <strong>sotto i 3 anni</strong>.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>ISEE</th><th>Bonus annuo</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Fino a 25.000€</td><td className="cv cfr">fino a 3.600€ <span className="badge">Max</span></td></tr>
                  <tr><td>Da 25.001€ a 40.000€</td><td className="cv">fino a 2.500€</td></tr>
                  <tr><td>Oltre 40.000€</td><td>fino a 1.500€</td></tr>
                </tbody>
              </table>
            </div>

            <h3>4. Assegno di maternit&agrave; dei Comuni</h3>
            <p>Per le mamme <strong>disoccupate</strong> o senza altra indennit&agrave; di maternit&agrave;: <strong>5 mensilit&agrave; da 413€</strong>, totale circa 2.066€. Serve ISEE sotto 20.668€. Si chiede al Comune.</p>

            <h3>5. Bonus mamme lavoratrici</h3>
            <p>Per le mamme che lavorano con almeno 2 figli (il pi&ugrave; piccolo sotto 10 anni): <strong>60€ al mese in busta paga</strong>, fino a 720€/anno. ISEE sotto 40.000€. &Egrave; automatico — lo calcola il datore di lavoro.</p>

            <h3>6. Carta acquisti</h3>
            <p>Per genitori di bambini sotto 3 anni: una card da <strong>40€ al mese</strong> per spesa, bollette e farmacia. Si chiede alle Poste.</p>

            <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Molte spese legate ai figli si detraggono. Non lasciare soldi sul tavolo.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* AFFILIAZIONE */}


          {/* DOCUMENTI NEONATO */}
          <div className="sec breve-hide r" id="documenti">
            <div className="sec-tag">Dopo la nascita</div>
            <h2>Documenti da fare per il neonato</h2>
            <p>Quando nasce un bambino, hai una serie di cose da fare — quasi tutte entro i primi 10 giorni. Ecco la lista in ordine.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Dichiarazione di nascita (entro 10 giorni)</strong><p>La fai in ospedale o all&apos;Ufficio di Stato Civile del Comune. L&apos;ospedale ti aiuta a compilarla — servono i documenti d&apos;identit&agrave; di entrambi i genitori.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Codice fiscale</strong><p>Lo richiedi all&apos;Agenzia delle Entrate col certificato di nascita. Molti ospedali lo fanno direttamente — chiedi prima del parto se &egrave; previsto.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Iscrizione al Servizio Sanitario</strong><p>Col codice fiscale, vai all&apos;ASL per iscrivere il bambino e scegliere il <Tip t="Il medico di riferimento per il bambino, fino ai 14 anni. Visite gratuite, vaccinazioni, certificati. Lo scegli tu dalla lista dell'ASL.">pediatra di base</Tip>. Gratuito.</p></div></div>
              <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong>Carta d&apos;identit&agrave; (CIE)</strong><p>Non obbligatoria subito, ma serve per viaggiare fuori dall&apos;Italia. Si fa al Comune. Per volare fuori dall&apos;UE serve il passaporto (firmato da entrambi i genitori).</p></div></div>
              <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Domanda assegno unico + bonus nuovi nati</strong><p>Con SPID e ISEE pronti, fai domanda all&apos;INPS online. Per l&apos;assegno unico puoi aver gi&agrave; fatto domanda dal 7° mese. Il bonus nuovi nati va chiesto <strong>entro 120 giorni</strong>.</p></div></div>
            </div>
            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Ti serve per tutte le pratiche INPS. Se non ce l&apos;hai, fallo prima del parto.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* OSPEDALE */}
          <div className="sec breve-hide r" id="ospedale">
            <div className="sec-tag">Preparazione</div>
            <h2>Cosa portare in ospedale</h2>
            <p>Prepara la borsa dal 7°-8° mese. Ecco la checklist.</p>
            <h3>Documenti (fondamentale)</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83E\uDEAA'}</div><div className="clb"><strong>Carta d&apos;identit&agrave; di entrambi i genitori</strong><span className="note">Serve per la dichiarazione di nascita</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Tessera sanitaria</strong><span className="note">La tua — serve per il ricovero</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Cartella clinica della gravidanza</strong><span className="note">Esami, ecografie, gruppo sanguigno, piano del parto</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDC8D'}</div><div className="clb"><strong>Certificato di matrimonio o stato di famiglia</strong><span className="note">Se non siete sposati, entrambi i genitori devono presentarsi per il riconoscimento</span></div></li>
            </ul>
            <h3>Per la mamma</h3>
            <ul className="cl">
              <li className="cli r"><div className="ci">{'\uD83D\uDC55'}</div><div className="clb"><strong>Camicia da notte aperta sul davanti (x2)</strong><span className="note">Serve per l&apos;allattamento — bottoni o zip</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83E\uDE74'}</div><div className="clb"><strong>Ciabatte, vestaglia, biancheria comoda</strong><span className="note">Mutandine a rete/usa e getta sono le pi&ugrave; pratiche post-parto</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDDF4'}</div><div className="clb"><strong>Prodotti igiene personale</strong><span className="note">Assorbenti post-parto (quelli normali non bastano), sapone, spazzolino</span></div></li>
            </ul>
            <h3>Per il neonato</h3>
            <ul className="cl">
              <li className="cli r"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Body, tutine, calzini, cappellino (x3-4)</strong><span className="note">Taglia 0-1 mese. L&apos;ospedale spesso fornisce il primo cambio</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDE97'}</div><div className="clb"><strong>Seggiolino auto (ovetto)</strong><span className="note">Obbligatorio per legge per portarlo a casa. Deve essere omologato e gi&agrave; montato in auto</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDDF7'}</div><div className="clb"><strong>Pannolini taglia 1 e salviettine</strong><span className="note">L&apos;ospedale di solito ne fornisce per la degenza, ma portane un pacchetto di riserva</span></div></li>
            </ul>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Chiara e Andrea ricevono 12.700€</h2>

            <p><strong>Chiara (30 anni) e Andrea (32 anni)</strong> vivono a Verona. Lei &egrave; impiegata (1.500€ netti/mese), lui &egrave; tecnico informatico (1.700€ netti/mese). Aspettano il primo figlio, nascita prevista a maggio 2026. ISEE familiare: <strong>22.000€</strong>.</p>

            <p>Chiara ha sentito parlare di &quot;bonus beb&egrave;&quot; ma non sa dove iniziare. Un&apos;amica le dice di questo sito. Ecco cosa scoprono.</p>

            <h3>La timeline di Chiara e Andrea</h3>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Gennaio (6° mese) — ISEE + SPID</strong><p>Chiara e Andrea fanno l&apos;ISEE online con la DSU precompilata (20 minuti). Andrea non aveva lo SPID: lo fa con Lepida in 10 minuti.</p></div></div>
              <div className="step r d2"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Febbraio (7° mese) — Assegno unico</strong><p>Chiara fa domanda per l&apos;assegno unico dal sito INPS. Lo chiede dal 7° mese: le mensilit&agrave; arretrate verranno pagate dopo la nascita.</p></div></div>
              <div className="step r d3"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Marzo (8° mese) — Congedo e borsa</strong><p>Chiara inizia il congedo di maternit&agrave; obbligatorio (2 mesi prima del parto). Prepara la borsa per l&apos;ospedale.</p></div></div>
              <div className="step r d4"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Maggio — Nasce il bambino!</strong><p>Andrea prende i 10 giorni di paternit&agrave; obbligatoria. In ospedale fanno la dichiarazione di nascita e il codice fiscale.</p></div></div>
              <div className="step r d1"><div className="stepn">{'\uD83D\uDCC5'}</div><div className="stepb"><strong>Giugno — Bonus nuovi nati + pediatra</strong><p>Chiedono il bonus nuovi nati (1.000€) entro i 120 giorni. Iscrivono il bambino all&apos;ASL e scelgono il pediatra.</p></div></div>
            </div>

            <h3>Quanto ricevono nel primo anno</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Congedo maternit&agrave; (5 mesi all&apos;80%)</span><span className="db-new">~6.000€</span></div>
              <div className="db-row"><span className="db-label">Assegno unico (12 mesi, ISEE 22k)</span><span className="db-new">~1.920€</span></div>
              <div className="db-row"><span className="db-label">Bonus nuovi nati</span><span className="db-new">1.000€</span></div>
              <div className="db-row"><span className="db-label">Bonus nido (se iscrivono)</span><span className="db-new">~2.500€</span></div>
              <div className="db-row"><span className="db-label">Congedo parentale (3 mesi all&apos;80%)</span><span className="db-new">~3.600€</span></div>
              <div className="db-row db-total"><span className="db-label">Totale primo anno</span><span className="db-val">~15.000€</span></div>
            </div>

            <p>Se Chiara non avesse fatto l&apos;ISEE? L&apos;assegno unico sarebbe sceso a 700€/anno (invece di 1.920€). Il bonus nido a 1.500€ (invece di 2.500€). <strong>Solo l&apos;ISEE le ha fatto guadagnare ~2.200€ in pi&ugrave;.</strong></p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Quasi tutti i bonus per i figli esistono gi&agrave; — il problema &egrave; che nessuno te li dice. La chiave: <strong>ISEE + SPID prima della nascita</strong>, assegno unico dal 7° mese, bonus nuovi nati entro 120 giorni. Chi si organizza in anticipo prende tutto. Chi aspetta, perde migliaia di euro.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da non fare</div>
            <h2>Errori che fanno quasi tutti</h2>
            <div className="icgrid r">
              <div className="ic r d1"><div className="ic-n">{'\u274C'} Non fare l&apos;ISEE in tempo</div><div className="ic-d">Senza ISEE aggiornato, l&apos;assegno unico scende a 58€/mese. Puoi recuperare gli arretrati solo con DSU entro il 30 giugno. Dopo, perdi mesi di differenza.</div></div>
              <div className="ic r d2"><div className="ic-n">{'\u274C'} Non chiedere il bonus entro 120 giorni</div><div className="ic-d">Il bonus nuovi nati da 1.000€ ha un termine perentorio. Dopo 120 giorni dalla nascita, il diritto decade e non c&apos;&egrave; modo di recuperarlo.</div></div>
              <div className="ic r d3"><div className="ic-n">{'\u274C'} Aspettare la nascita per tutto</div><div className="ic-d">L&apos;assegno unico si chiede dal 7° mese. Lo SPID puoi farlo mesi prima. L&apos;ISEE anche. Se aspetti che nasca il bambino, non hai tempo per nulla.</div></div>
              <div className="ic r d4"><div className="ic-n">{'\u274C'} Non sapere del congedo parentale all&apos;80%</div><div className="ic-d">Molte famiglie non sanno che i primi 3 mesi di congedo facoltativo dal 2026 sono pagati all&apos;80%. Li perdono o li prendono tardi, quando l&apos;indennit&agrave; &egrave; scesa al 30%.</div></div>
            </div>
            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} L&apos;errore pi&ugrave; costoso: non combinare tutti i bonus</div>
              <p>Assegno unico, bonus nido, bonus nuovi nati, carta acquisti e bonus mamme sono <strong>tutti cumulabili</strong>. Non &egrave; uno o l&apos;altro — puoi riceverli tutti. Ma devi fare domanda per ognuno separatamente. Chi non lo sa, perde migliaia di euro.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/assegno-unico" className="rc"><span className="rc-e">💰</span><div className="rc-t">Assegno unico</div><div className="rc-d">Quanto prendi per ogni figlio e come fare domanda.</div><span className="rc-ar">→</span></a>
              <a href="/isee" className="rc"><span className="rc-e">📋</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Senza ISEE perdi assegno unico e bonus nido.</div><span className="rc-ar">→</span></a>
              <a href="/mi-sposo" className="rc"><span className="rc-e">💍</span><div className="rc-t">Mi sposo</div><div className="rc-d">Documenti, costi e regime patrimoniale.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Domanda INPS</div><div className="sbtool-d">Domanda e stato pagamenti</div></div></a>
            <a href="https://www.inps.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">👶</span><div><div className="sbtool-n">Congedo INPS</div><div className="sbtool-d">Domanda e requisiti</div></div></a>
            <a href="https://www.salute.gov.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏥</span><div><div className="sbtool-n">Salute e gravidanza</div><div className="sbtool-d">Gravidanza e maternità</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/assegno-unico" className="sbguide">💰 Assegno unico<span className="sbg-ar">→</span></a>
            <a href="/mi-sposo" className="sbguide">💍 Mi sposo<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">🏫 Bonus nido<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="figlio" />
      <Footer />
    </>
    </div>
  );
}
