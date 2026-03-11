import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import QuizTfr from '@/components/QuizTfr';
import CalcTfr from '@/components/CalcTfr';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'TFR 2026: Calcolo, Tassazione, Anticipo e Quando Spetta',
  description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
  keywords: ["TFR", "trattamento fine rapporto", "liquidazione", "calcolo TFR", "TFR tassazione", "anticipo TFR", "fondo pensione", "TFR in busta paga", "quando arriva TFR", "TFR dimissioni"],
  alternates: { canonical: 'https://zeroburocrazia.it/tfr' },
  openGraph: {
    title: 'TFR 2026: Calcolo, Tassazione, Anticipo e Quando Spetta',
    description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
    url: 'https://zeroburocrazia.it/tfr',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogtfr.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TFR 2026: Calcolo, Tassazione, Anticipo e Quando Spetta',
    description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
    images: ['https://zeroburocrazia.it/ogtfr.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'calcolo', label: 'Come si calcola' },
  { id: 'tassazione', label: 'Tassazione' },
  { id: 'quando', label: 'Quando lo ricevi' },
  { id: 'fondo', label: 'Azienda vs fondo pensione' },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Il TFR spetta anche se mi dimetto?", a: "<strong>S\u00EC, sempre.</strong> Il TFR ti spetta indipendentemente dal motivo: dimissioni volontarie, licenziamento, fine contratto, pensionamento, e anche licenziamento per giusta causa. \u00C8 un tuo diritto maturato \u2014 non pu\u00F2 essere negato." },
  { q: "Quanto tempo ha il datore per pagare il TFR?", a: "La legge non fissa un termine preciso. La prassi \u00E8 <strong>30-45 giorni</strong> dalla cessazione. Molti CCNL lo specificano. Se il datore ritarda, manda un sollecito formale (PEC) e, se serve, rivolgiti a un sindacato o avvocato del lavoro." },
  { q: "Il TFR si prescrive?", a: "<strong>S\u00EC, in 5 anni.</strong> Se il datore non ti paga il TFR, hai 5 anni dalla cessazione per richiederlo legalmente. Dopo, il diritto si prescrive e perdi tutto." },
  { q: "Posso chiedere un anticipo del TFR?", a: "S\u00EC, dopo <strong>8 anni di servizio</strong> continuativo presso lo stesso datore. Puoi chiedere fino al <strong>70% del TFR maturato</strong>, ma solo per: acquisto prima casa, spese sanitarie gravi, o congedi parentali/formativi. L\u2019anticipo si pu\u00F2 chiedere <strong>una sola volta</strong>." },
  { q: "Conviene lasciare il TFR in azienda o metterlo nel fondo pensione?", a: "Dipende. Il <strong>fondo pensione</strong> ha tassazione dal 15% al 9% (contro ~23% in azienda), deducibilit\u00E0 dei contributi aggiuntivi e rendimenti potenzialmente superiori. Il TFR <strong>in azienda</strong> \u00E8 pi\u00F9 accessibile e non ha rischio di mercato. Se sei giovane e hai 20+ anni alla pensione, il fondo conviene quasi sempre." },
  { q: "Cosa succede al TFR se l'azienda fallisce?", a: "Interviene il <strong>Fondo di Garanzia INPS</strong>. Puoi fare domanda all\u2019INPS per recuperare il TFR non pagato. Le aziende con pi\u00F9 di 50 dipendenti versano gi\u00E0 il TFR al Fondo Tesoreria INPS, quindi il pagamento \u00E8 comunque garantito." },
  { q: "Come si legge il TFR in busta paga?", a: "Cerca le voci \u2018TFR maturato\u2019, \u2018Fondo TFR\u2019 o \u2018Accantonamento TFR\u2019. Trovi la <strong>quota maturata nel mese</strong>, il <strong>totale accantonato</strong> e la <strong>rivalutazione</strong>. Se non le trovi, chiedi all\u2019ufficio paghe." },
  { q: "Il TFR va dichiarato nel 730?", a: "<strong>No.</strong> Il TFR ha una tassazione separata, applicata direttamente dal datore di lavoro (o dall\u2019INPS). Non va inserito nel 730. Per\u00F2 compare nella CU (Certificazione Unica) che ricevi a marzo." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'TFR 2026: calcolo, tassazione, anticipo e quando spetta',
      description: 'TFR 2026: come si calcola la liquidazione, tassazione, anticipo e confronto azienda vs fondo pensione.',
      url: '/tfr',
      image: 'ogtfr.png',
      datePublished: '2026-03-07',
      dateModified: '2026-03-09',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-lavoro">
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
            <div className="cat-badge">{'\uD83D\uDCBC'} Lavoro</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Il mio <em>TFR</em></h1>
            <p className="hero-sub">La liquidazione spiegata come te la spiegherebbe un amico. Quanto ti spetta, come si calcola, come viene tassata e la scelta tra azienda e fondo pensione.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 9 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Art. 2120 Codice Civile &middot; INPS &middot; Legge di Bilancio 2026 &middot; Agenzia delle Entrate</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">~1 mese</div><div className="hl">di stipendio<br/>per ogni anno</div></div>
            <div className="hstat"><div className="hn">5 anni</div><div className="hl">prescrizione<br/>per richiederlo</div></div>
            <div className="hstat"><div className="hn">Sempre</div><div className="hl">ti spetta anche<br/>se ti dimetti</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/dimissioni" className="ps">✍️ Dimissioni</a>
              <span className="ps ps-soon">📈 Fondo pensione <span className="ps-tag">Presto</span></span>
              <span className="ps ps-soon">🧓 Quando vado in pensione <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.prospetto-informativo-fondo-di-tesoreria-702.prospetto-informativo-fondo-di-tesoreria.html" target="_blank" rel="noopener noreferrer" className="ps">🏛 TFR su INPS</a>
              <a href="https://www.covip.it/" target="_blank" rel="noopener noreferrer" className="ps">📊 COVIP</a>
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/dichiarazioni/modello-730" target="_blank" rel="noopener noreferrer" className="ps">📋 Detrazione 730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">~1 mese/anno</div><div className="sl">di stipendio accantonato</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83D\uDCCA'}</div><div className="sn">6,91%</div><div className="sl">della RAL accantonato ogni anno</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCC8'}</div><div className="sn">Rivalutato</div><div className="sl">ogni anno con inflazione +1,5%</div></div>
                <div className="sc    r d1"><div className="si">{'\u2705'}</div><div className="sn">Sempre tuo</div><div className="sl">spetta a dimissioni, licenziamento, pensione</div></div>
                <div className="sc    r d2"><div className="si">{'\u23F1'}</div><div className="sn">30-45 gg</div><div className="sl">tempi di pagamento dalla cessazione</div></div>
                <div className="sc bl r d3"><div className="si">{'\uD83C\uDFE6'}</div><div className="sn">Anticipo</div><div className="sl">fino al 70% dopo 8 anni di servizio</div></div>
              </div>
            </div>
            <QuizTfr />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il TFR (spiegato semplice)</h2>

            <p>Immagina che ogni mese il tuo datore di lavoro, invece di darti tutto lo stipendio, ne metta un pezzetto da parte in un salvadanaio. Mese dopo mese, anno dopo anno, quel salvadanaio cresce. Quando il rapporto di lavoro finisce &mdash; per qualsiasi motivo &mdash; il datore rompe il salvadanaio e ti d&agrave; tutto quello che c&apos;&egrave; dentro. Quello &egrave; il TFR.</p>

            <p>In numeri: ogni anno il datore accantona circa il <strong>6,91%</strong> della tua <Tip t="Retribuzione Annua Lorda. &Egrave; lo stipendio totale annuo prima delle tasse e dei contributi. Lo trovi sul contratto o sulla busta paga. Se prendi 1.500&euro; netti al mese, la tua RAL &egrave; circa 25.000-28.000&euro;.">RAL</Tip> &mdash; che corrisponde pi&ugrave; o meno a <strong>una mensilit&agrave; di stipendio</strong>. Dopo 10 anni hai accumulato circa 10 mensilit&agrave;. Dopo 20 ne hai 20. E quel gruzzolo nel frattempo cresce un po&apos; grazie alla <Tip t="Ogni anno il TFR accantonato viene aumentato del 75% dell'inflazione ISTAT pi&ugrave; un 1,5% fisso. Con inflazione al 2%, il TFR cresce del 3% all'anno. Sulla rivalutazione si paga il 17% di imposta.">rivalutazione</Tip>.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Non &egrave; un regalo del datore</div>
              <p>Il TFR &egrave; <strong><Tip t="Significa che sono soldi che ti spettano per il lavoro che hai fatto, ma invece di pagarli subito te li mettono da parte. Come se il datore ti 'dovesse' quei soldi dal primo giorno.">retribuzione differita</Tip></strong> &mdash; sono soldi tuoi, guadagnati mese per mese, semplicemente pagati dopo invece che subito. Ti spettano <strong>sempre</strong>: dimissioni, licenziamento (anche per giusta causa), pensione, fine contratto. Anche in caso di morte del lavoratore, il TFR va agli eredi.</p>
            </div>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto. Il nome ufficiale della &quot;liquidazione&quot;. &Egrave; la somma che il datore ti paga quando finisce il rapporto di lavoro. Regolato dall&apos;art. 2120 del Codice Civile.</div>
              <div className="gl-item r d2"><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Lo stipendio totale annuo prima di tasse e contributi. Il TFR si calcola sulla RAL: ogni anno viene accantonato il 6,91% (RAL &divide; 13,5).</div>
              <div className="gl-item r d3"><strong>Rivalutazione</strong> &mdash; L&apos;aumento che il TFR riceve ogni anno: 75% dell&apos;inflazione + 1,5% fisso. Protegge i tuoi soldi dalla perdita di valore. Sulla rivalutazione si paga un&apos;imposta del 17%.</div>
              <div className="gl-item r d4"><strong>Tassazione separata</strong> &mdash; Il TFR non si somma al reddito dell&apos;anno, ma viene tassato con un&apos;aliquota media calcolata sugli ultimi anni. Questo evita di finire in scaglioni IRPEF altissimi.</div>
              <div className="gl-item r d1"><strong>Fondo pensione</strong> &mdash; Un &quot;contenitore&quot; dove puoi far confluire il TFR al posto dell&apos;azienda. Tassazione pi&ugrave; bassa (15-9% contro ~23%) ma i soldi sono bloccati fino alla pensione (con eccezioni).</div>
              <div className="gl-item r d2"><strong>Fondo di Garanzia INPS</strong> &mdash; Se l&apos;azienda fallisce e non pu&ograve; pagarti il TFR, interviene questo fondo dell&apos;INPS. Fai domanda online e recuperi i soldi. Esiste proprio per questo.</div>
            </div>

            <a href="/dimissioni" className="xlink r"><span className="xlink-em">{'\u270D\uFE0F'}</span><div className="xlink-t"><strong>Dimissioni volontarie</strong> &mdash; Come dimettersi online, preavviso e cosa ti spetta.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* COME SI CALCOLA */}
          <div className="sec r" id="calcolo">
            <div className="sec-tag">I numeri</div>
            <h2>Come si calcola il TFR</h2>
            <p>La formula &egrave; stabilita dall&apos;articolo 2120 del Codice Civile. Sembra complicata ma non lo &egrave;:</p>

            <div className="ib tip r d1">
              <div className="ib-t">{'\uD83D\uDCCA'} La quota annua</div>
              <p>Ogni anno si accantona: <strong><Tip t="La Retribuzione Annua Lorda. Lo stipendio totale annuo prima di tasse e contributi INPS. Include tredicesima e quattordicesima se previste dal tuo contratto.">RAL</Tip> &divide; 13,5</strong>. Con una RAL di 25.000&euro;, la quota &egrave; circa 1.851&euro;/anno. A questa si sottrae il contributo INPS dello 0,5% (125&euro;), quindi la quota netta accantonata &egrave; ~1.726&euro;.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">{'\uD83D\uDCC8'} La <Tip t="Ogni anno il TFR gi&agrave; accantonato cresce: 75% dell'inflazione ISTAT + 1,5% fisso. Se l'inflazione &egrave; al 2%, il TFR cresce del 3%. Sulla rivalutazione si paga il 17% di imposta ogni anno.">rivalutazione</Tip></div>
              <p>Il TFR accantonato viene rivalutato ogni anno del <strong>75% dell&apos;inflazione ISTAT + 1,5% fisso</strong>. Con un&apos;inflazione al 2%, la rivalutazione &egrave; del 3%. Questo protegge il tuo TFR dalla perdita di potere d&apos;acquisto. Sulla rivalutazione si paga un&apos;imposta del 17%.</p>
            </div>

            <CalcTfr />
          </div>

          {/* TASSAZIONE */}
          <div className="sec r" id="tassazione">
            <div className="sec-tag">Le tasse</div>
            <h2>Come viene tassato il TFR</h2>
            <p>Il TFR <strong>non si somma al reddito dell&apos;anno</strong> in cui lo ricevi. Ha una <Tip t="Un sistema fiscale dove l'importo viene tassato con un'aliquota calcolata sulla media dei redditi degli ultimi anni, non aggiunto al reddito dell'anno corrente. Evita di pagare un'IRPEF altissima in quell'anno.">tassazione separata</Tip>, pi&ugrave; vantaggiosa rispetto all&apos;IRPEF ordinaria. Perch&eacute;? Perch&eacute; se il TFR fosse tassato insieme al reddito dell&apos;anno, finiresti in uno scaglione altissimo (ricevi in un colpo anni di stipendio). La tassazione separata evita questo problema.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Dove va il TFR</th><th>Tassazione</th><th>Note</th></tr></thead>
                <tbody>
                  <tr><td>In azienda</td><td><Tip t="L'aliquota media IRPEF calcolata sui redditi degli ultimi 5 anni. Non &egrave; l'IRPEF dell'anno corrente.">Tassazione separata</Tip> (~23%)</td><td>Aliquota media calcolata sugli ultimi 5 anni</td></tr>
                  <tr><td><Tip t="Un fondo di investimento dove puoi far confluire il TFR. Ha tassazione agevolata e genera una pensione integrativa. I soldi per&ograve; sono bloccati fino alla pensione (con alcune eccezioni).">Fondo pensione</Tip></td><td className="tg">Dal 15% al 9%</td><td>Scende di 0,3% per ogni anno dopo il 15&deg;</td></tr>
                  <tr><td>Rivalutazione annua</td><td>17% fisso</td><td>Si paga ogni anno, non alla cessazione</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Attenzione alla differenza</div>
              <p>La differenza tra 23% e 9-15% sembra poca, ma su un TFR di 20.000&euro; lordi parliamo di <strong>1.600-2.800&euro; in pi&ugrave; in tasca</strong> se scegli il fondo pensione. Su 40.000&euro; il risparmio raddoppia. Sono soldi veri che cambiano il conto finale.</p>
            </div>
          </div>

          {/* QUANDO LO RICEVI */}
          <div className="sec r" id="quando">
            <div className="sec-tag">I tempi</div>
            <h2>Quando ricevi il TFR</h2>
            <p>Il TFR viene pagato alla <strong>cessazione del rapporto di lavoro</strong>, qualunque sia il motivo. I tempi cambiano parecchio tra privato e pubblico:</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Settore</th><th>Tempi pagamento</th></tr></thead>
                <tbody>
                  <tr><td>Privato</td><td><strong>30-45 giorni</strong> dalla cessazione (prassi)</td></tr>
                  <tr><td>Pubblico &mdash; pensione</td><td>12 mesi + 90 giorni</td></tr>
                  <tr><td>Pubblico &mdash; dimissioni</td><td>24 mesi + 90 giorni</td></tr>
                  <tr><td>Pubblico &mdash; inabilit&agrave;/decesso</td><td>105 giorni</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} Se il datore non paga</div>
              <p>Se il TFR non arriva entro tempi ragionevoli, manda una <strong>diffida scritta</strong> (raccomandata o <Tip t="Posta Elettronica Certificata. Ha lo stesso valore legale di una raccomandata. Se non ce l'hai, puoi mandarla tramite un servizio online o un patronato.">PEC</Tip>). Se non basta, rivolgiti a un sindacato o avvocato del lavoro. Hai <strong>5 anni</strong> dalla cessazione per far valere il diritto. Se l&apos;azienda &egrave; insolvente o fallita, interviene il <strong><Tip t="Un fondo gestito dall'INPS che paga il TFR quando l'azienda non pu&ograve; farlo (fallimento, insolvenza). Fai domanda online all'INPS con il modulo SR52.">Fondo di Garanzia INPS</Tip></strong>.</p>
            </div>

            <h3>Anticipo del TFR</h3>
            <p>Non devi per forza aspettare la fine del rapporto. Puoi chiedere un anticipo, ma ci sono condizioni precise:</p>

            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">Almeno 8 anni di servizio</div>
                <div className="ic-d">Devi aver lavorato almeno 8 anni continuativi presso lo <strong>stesso datore</strong>.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">Massimo 70% del maturato</div>
                <div className="ic-d">Non puoi chiedere tutto &mdash; solo fino al <strong>70%</strong> del TFR accantonato fino a quel momento.</div>
              </div>
              <div className="ic r d3">
                <div className="ic-n">Una sola volta</div>
                <div className="ic-d">L&apos;anticipo si pu&ograve; chiedere <strong>una sola volta</strong> durante tutto il rapporto di lavoro.</div>
              </div>
            </div>

            <h3>Per quali motivi puoi chiederlo</h3>
            <div className="ib tip r d1">
              <div className="ib-t">{'\uD83C\uDFE0'} Acquisto prima casa</div>
              <p>Per te o per i tuoi figli. Serve documentazione (compromesso, atto notarile).</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">{'\uD83C\uDFE5'} Spese sanitarie straordinarie</div>
              <p>Interventi chirurgici, terapie, spese mediche importanti &mdash; per te o per i familiari a carico.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">{'\uD83D\uDC76'} Congedi parentali o formativi</div>
              <p>Per finanziare periodi di congedo dal lavoro previsti dalla legge.</p>
            </div>
          </div>

          {/* TFR VS FONDO */}
          <div className="sec r" id="fondo">
            <div className="sec-tag">La scelta</div>
            <h2>TFR in azienda o fondo pensione?</h2>
            <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove mandare il TFR. Se non scegli, scatta il <Tip t="Se non comunichi nulla entro 60 giorni dall'assunzione, il TFR va automaticamente al fondo pensione di categoria. Non &egrave; una truffa &mdash; &egrave; previsto dalla legge. Puoi cambiare idea dopo.">silenzio-assenso</Tip>: il TFR va automaticamente al fondo pensione di categoria.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th></th><th>In azienda</th><th>Fondo pensione</th></tr></thead>
                <tbody>
                  <tr><td><strong>Tassazione finale</strong></td><td>~23% (media IRPEF)</td><td className="tg">Dal 15% al 9%</td></tr>
                  <tr><td><strong>Rivalutazione</strong></td><td>75% inflazione + 1,5%</td><td>Dipende dal fondo (potenzialmente migliore)</td></tr>
                  <tr><td><strong>Anticipo</strong></td><td>Dopo 8 anni, max 70%</td><td className="tg">Dopo 8 anni, fino al 75% (pi&ugrave; flessibile)</td></tr>
                  <tr><td><strong>Rischio</strong></td><td>Azienda insolvente (c&apos;&egrave; fondo garanzia)</td><td>Oscillazioni di mercato</td></tr>
                  <tr><td><strong>Quando lo ricevi</strong></td><td>Alla cessazione</td><td>Alla pensione (o prima con limiti)</td></tr>
                  <tr><td><strong>Deducibilit&agrave; extra</strong></td><td>No</td><td className="tg">S&igrave;, fino a 5.300&euro;/anno (2026)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Il consiglio pratico</div>
              <p>Se sei <strong>giovane e hai un orizzonte lungo</strong> (20+ anni alla pensione), il <Tip t="Il fondo pensione di categoria &egrave; quello legato al tuo contratto collettivo (es. Cometa per i metalmeccanici, Fonchim per i chimici). Ha costi bassi e spesso il datore aggiunge un contributo extra se aderisci.">fondo pensione</Tip> conviene quasi sempre &mdash; risparmi dal 6% al 14% di tasse e accumuli una pensione integrativa. Se sei <strong>vicino alla pensione o cambi spesso lavoro</strong>, il TFR in azienda ti d&agrave; pi&ugrave; liquidit&agrave; immediata.</p>
            </div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Davide se ne va dopo 12 anni</h2>

            <p><strong>Davide ha 38 anni</strong>, lavora come tecnico informatico a Milano da 12 anni nella stessa azienda. RAL attuale: <strong>32.000&euro;</strong> (circa 1.750&euro; netti al mese). Ha deciso di cambiare lavoro &mdash; si &egrave; gi&agrave; <a href="/dimissioni">dimesso online</a>. Non ha mai spostato il TFR nel fondo pensione, &egrave; rimasto tutto in azienda.</p>

            <p>Davide non ha mai guardato il TFR in busta paga. Sa che gli spetta &quot;la liquidazione&quot; ma non ha idea di quanto sia. Pensa &quot;saranno un paio di migliaia di euro&quot;.</p>

            <h3>Il calcolo</h3>
            <p>RAL media negli ultimi 12 anni: circa 28.000&euro; (ha avuto aumenti nel tempo). Quota annua media: 28.000 &divide; 13,5 = ~2.074&euro;. Meno il contributo INPS 0,5% = ~1.934&euro; netti/anno.</p>

            <div className="dark-block r">
              <div className="db-row"><span className="db-label">TFR accantonato (12 anni)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~23.200&euro;</span></div>
              <div className="db-row"><span className="db-label">Rivalutazione accumulata</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~2.900&euro;</span></div>
              <div className="db-row"><span className="db-label">Imposta rivalutazione (17%)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">-493&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">TFR lordo</span><span className="db-val">~25.607&euro;</span></div>
            </div>

            <h3>Tassazione separata (~23%)</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">TFR lordo (senza rivalutazione)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">~23.200&euro;</span></div>
              <div className="db-row"><span className="db-label">Tassazione separata (~23%)</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">-5.336&euro;</span></div>
              <div className="db-row"><span className="db-label">Rivalutazione netta</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">+2.407&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">TFR netto in tasca</span><span className="db-val">~20.271&euro;</span></div>
            </div>

            <p>Davide non ci credeva. <strong>Oltre ventimila euro</strong>. Se avesse scelto il fondo pensione all&apos;inizio, con una tassazione al 12% (invece del 23%) avrebbe avuto circa <strong>2.500&euro; in pi&ugrave;</strong>. Ma non lo sapeva &mdash; nessuno glielo aveva spiegato.</p>

            <h3>Se avesse scelto il fondo pensione</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">TFR netto (in azienda)</span><span className="db-old">~20.271&euro;</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">TFR netto (fondo pensione)</span></div>
              <div className="db-row"><span className="db-label">Tassazione</span><span className="db-old">~23%</span><span className="db-arrow">{'\u2192'}</span><span className="db-new">~12%</span></div>
              <div className="db-row db-total"><span className="db-label">Differenza</span><span className="db-val">+2.552&euro;</span></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Il TFR &egrave; molto pi&ugrave; di quello che pensi. Dopo 12 anni sono pi&ugrave; di <strong>20.000&euro;</strong>. E la scelta tra azienda e fondo pensione pu&ograve; valere migliaia di euro di differenza solo in tasse. Informati <strong>appena vieni assunto</strong>, non quando te ne vai &mdash; a quel punto &egrave; tardi per recuperare.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/dimissioni" className="rc"><span className="rc-e">✍️</span><div className="rc-t">Dimissioni volontarie</div><div className="rc-d">Come dimettersi online e cosa ti spetta.</div><span className="rc-ar">→</span></a>
              <a href="/naspi" className="rc"><span className="rc-e">💼</span><div className="rc-t">NASpI</div><div className="rc-d">Se hai perso il lavoro, quanto ti spetta.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Il TFR compare nella CU. Fai il 730.</div><span className="rc-ar">→</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.prospetto-informativo-fondo-di-tesoreria-702.prospetto-informativo-fondo-di-tesoreria.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">TFR su INPS</div><div className="sbtool-d">TFR nel fondo INPS</div></div></a>
            <a href="https://www.covip.it/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">COVIP</div><div className="sbtool-d">Autorità di vigilanza fondi pensione</div></div></a>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/dichiarazioni/modello-730" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Detrazione 730</div><div className="sbtool-d">Tassazione TFR e dichiarazione</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/dimissioni" className="sbguide">✍️ Dimissioni<span className="sbg-ar">→</span></a>
            <span className="sbguide sbguide-soon">📈 Fondo pensione<span className="sbg-soon">Presto</span></span>
            <span className="sbguide sbguide-soon">🧓 Quando vado in pensione<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="tfr" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
