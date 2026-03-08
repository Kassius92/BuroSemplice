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
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import LeadBox from '@/components/LeadBox';

export const metadata = {
  title: 'TFR 2026: Calcolo, Tassazione, Anticipo e Quando Spetta',
  description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
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
  { id: 'cose', label: "Cos'è" },
  { id: 'calcolo', label: 'Come si calcola' },
  { id: 'tassazione', label: 'Tassazione' },
  { id: 'quando', label: 'Quando lo ricevi' },
  { id: 'anticipo', label: 'Anticipo TFR', bh: true },
  { id: 'fondo', label: 'TFR vs fondo pensione', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Il TFR spetta anche se mi dimetto?", a: "<strong>Sì, sempre.</strong> Il TFR ti spetta indipendentemente dal motivo della cessazione: dimissioni volontarie, licenziamento, fine contratto a termine, pensionamento, e anche licenziamento per giusta causa. È un tuo diritto maturato — non può essere negato." },
  { q: "Quanto tempo ha il datore per pagare il TFR?", a: "La legge non fissa un termine preciso. La prassi è <strong>30-45 giorni</strong> dalla cessazione. Molti CCNL lo specificano. Se il datore ritarda oltre i tempi ragionevoli, puoi mandare un sollecito formale e, se necessario, rivolgerti a un sindacato o avvocato." },
  { q: "Il TFR si prescrive?", a: "<strong>Sì, in 5 anni.</strong> Se il datore non ti paga il TFR, hai 5 anni di tempo dalla cessazione del rapporto per richiederlo legalmente. Dopo, il diritto si prescrive." },
  { q: "Posso chiedere un anticipo del TFR?", a: "Sì, dopo <strong>8 anni di servizio</strong> continuativo presso lo stesso datore. Puoi chiedere fino al <strong>70% del TFR maturato</strong>, ma solo per motivi specifici: acquisto prima casa, spese sanitarie gravi, o congedi parentali/formativi. L'anticipo si può chiedere <strong>una sola volta</strong>." },
  { q: "Conviene lasciare il TFR in azienda o metterlo nel fondo pensione?", a: "Dipende dalla tua situazione. Il <strong>fondo pensione</strong> ha vantaggi fiscali importanti: tassazione dal 15% al 9% (contro il ~23% in azienda), deducibilità dei contributi aggiuntivi, e rendimenti potenzialmente superiori. Il TFR <strong>in azienda</strong> è più accessibile (puoi chiedere l'anticipo) e non hai rischio di mercato. Se sei giovane e hai un orizzonte lungo, il fondo pensione conviene quasi sempre." },
  { q: "Cosa succede al TFR se l'azienda fallisce?", a: "C'è il <strong>Fondo di Garanzia INPS</strong> che interviene quando il datore di lavoro è insolvente. Puoi fare domanda all'INPS per recuperare il TFR non pagato. Le aziende con più di 50 dipendenti versano il TFR al Fondo Tesoreria INPS, quindi in quel caso il pagamento è garantito." },
  { q: "Come si legge il TFR in busta paga?", a: "In busta paga c'è una sezione dedicata al TFR con l'indicazione della <strong>quota maturata nel mese</strong>, il <strong>totale accantonato</strong> e la <strong>rivalutazione</strong>. Cerca le voci 'TFR maturato', 'Fondo TFR' o 'Accantonamento TFR'. Se non le trovi, chiedi all'ufficio paghe." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'TFR 2026: calcolo, tassazione, anticipo e quando spetta',
      description: 'TFR 2026: come si calcola la liquidazione, tassazione, anticipo e confronto azienda vs fondo pensione.',
      url: '/tfr',
      image: 'ogtfr.png',
      datePublished: '2026-03-07',
      dateModified: '2026-03-07',
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
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
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Il mio <em>TFR</em></h1>
            <p className="hero-sub">La liquidazione spiegata semplice. Quanto ti spetta, come si calcola, come viene tassata e la scelta tra azienda e fondo pensione.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 9 min di lettura</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Art. 2120 Codice Civile · INPS · Legge di Bilancio 2026 · Agenzia delle Entrate</div>
            <PrintButton />
          </div>
          <div className="hero-right">
            <div className="hstat">
              <div className="hn">~1 mese</div>
              <div className="hl">di stipendio<br/>per ogni anno</div>
            </div>
            <div className="hstat">
              <div className="hn">5 anni</div>
              <div className="hl">prescrizione<br/>per richiederlo</div>
            </div>
            <div className="hstat">
              <div className="hn">Sempre</div>
              <div className="hl">ti spetta anche<br/>se ti dimetti</div>
            </div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/dimissioni" className="ps">✍️ Dimissioni</a><span className="pa">›</span>
              <a href="/tfr" className="ps active">💰 TFR</a><span className="pa">›</span>
              <a href="/naspi" className="ps">NASpI</a><span className="pa">›</span>
              <a href="/730" className="ps">730</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">💰</div><div className="sn">~1 mese/anno</div><div className="sl">di stipendio accantonato</div></div>
                <div className="sc sg r d2"><div className="si">📊</div><div className="sn">6,91%</div><div className="sl">della RAL accantonato ogni anno</div></div>
                <div className="sc    r d3"><div className="si">📈</div><div className="sn">Rivalutato</div><div className="sl">ogni anno con inflazione +1,5%</div></div>
                <div className="sc    r d1"><div className="si">✅</div><div className="sn">Sempre tuo</div><div className="sl">spetta a dimissioni, licenziamento, pensione</div></div>
                <div className="sc    r d2"><div className="si">⏱</div><div className="sn">30-45 gg</div><div className="sl">tempi di pagamento dalla cessazione</div></div>
                <div className="sc bl r d3"><div className="si">🏦</div><div className="sn">Anticipo</div><div className="sl">fino al 70% dopo 8 anni di servizio</div></div>
              </div>
            </div>
            <QuizTfr />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;è il TFR (la liquidazione)</h2>
            <p>Il TFR — <strong>Trattamento di Fine Rapporto</strong> — è una parte del tuo stipendio che il datore di lavoro mette da parte ogni mese, anziché pagarla subito. La ricevi tutta insieme quando finisce il rapporto di lavoro.</p>
            <p>In pratica è un <strong>risparmio forzoso</strong>: ogni anno il datore accantona circa il 6,91% della tua retribuzione lorda — che equivale più o meno a <strong>una mensilità</strong>. Dopo 10 anni di lavoro, hai accumulato circa 10 mensilità di stipendio. Questo gruzzolo ti viene pagato quando te ne vai.</p>
            <div className="ib tip r">
              <div className="ib-t">💡 Non è un regalo del datore</div>
              <p>Il TFR è <strong>retribuzione differita</strong> — sono soldi tuoi, guadagnati mese per mese, che invece di arrivare in busta paga vengono accantonati. Ti spettano <strong>sempre</strong>, qualunque sia il motivo della cessazione: dimissioni, licenziamento (anche per giusta causa), pensione, o anche in caso di decesso (va agli eredi).</p>
            </div>
          </div>

          {/* COME SI CALCOLA */}
          <div className="sec r" id="calcolo">
            <div className="sec-tag">I numeri</div>
            <h2>Come si calcola il TFR</h2>
            <p>La formula è stabilita dall&apos;articolo 2120 del Codice Civile. Non è complicata:</p>

            <div className="ib tip r d1">
              <div className="ib-t">La quota annua</div>
              <p>Ogni anno si accantona: <strong>retribuzione annua lorda ÷ 13,5</strong>. Con una RAL di 25.000€, la quota è circa 1.851€/anno. A questa si sottrae il contributo INPS dello 0,5% (125€), quindi la quota netta è ~1.726€.</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">La rivalutazione</div>
              <p>Il TFR accantonato viene rivalutato ogni anno del <strong>75% dell&apos;inflazione ISTAT + 1,5% fisso</strong>. Con un&apos;inflazione al 2%, la rivalutazione è del 3%. Questo protegge il tuo TFR dalla perdita di potere d&apos;acquisto. Sulla rivalutazione si paga un&apos;imposta del 17%.</p>
            </div>

            <CalcTfr />

            <h3>Esempio concreto</h3>
            <div className="ib tip r">
              <div className="ib-t">📋 Marco, 30.000€ di RAL, 8 anni di lavoro</div>
              <p>Quota annua: 30.000 ÷ 13,5 = 2.222€ (meno contributo INPS 0,5% = ~2.072€ netti). In 8 anni: ~16.578€ lordi + rivalutazione ~1.660€ = <strong>~18.238€ lordi</strong>. Dopo la tassazione separata (~23%): <strong>TFR netto circa 14.500€</strong>.</p>
            </div>
          </div>

          {/* TASSAZIONE */}
          <div className="sec r" id="tassazione">
            <div className="sec-tag">Le tasse</div>
            <h2>Come viene tassato il TFR</h2>
            <p>Il TFR <strong>non si somma al reddito dell&apos;anno</strong> in cui lo ricevi. Ha una tassazione separata, più vantaggiosa rispetto all&apos;IRPEF ordinaria. L&apos;aliquota dipende dal reddito medio degli ultimi anni.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Dove va il TFR</th><th>Tassazione</th><th>Note</th></tr></thead>
                <tbody>
                  <tr><td>In azienda</td><td>Tassazione separata (~23%)</td><td>Aliquota media calcolata sugli ultimi 5 anni</td></tr>
                  <tr><td>Fondo pensione</td><td>Dal 15% al 9%</td><td>Scende di 0,3% per ogni anno di adesione dopo il 15°</td></tr>
                  <tr><td>Rivalutazione annua</td><td>17% fisso</td><td>Si paga ogni anno, non alla cessazione</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 La tassazione separata è un vantaggio</div>
              <p>Se il TFR fosse tassato insieme al reddito dell&apos;anno, finiresti in uno scaglione IRPEF altissimo (perché ricevi in un colpo solo anni di stipendio). La tassazione separata evita questo problema calcolando un&apos;aliquota media più bassa.</p>
            </div>
          </div>

          {/* QUANDO LO RICEVI */}
          <div className="sec r" id="quando">
            <div className="sec-tag">I tempi</div>
            <h2>Quando ricevi il TFR</h2>
            <p>Il TFR viene pagato alla <strong>cessazione del rapporto di lavoro</strong>, qualunque ne sia il motivo. I tempi:</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Settore</th><th>Tempi pagamento</th></tr></thead>
                <tbody>
                  <tr><td>Privato</td><td>30-45 giorni dalla cessazione (prassi)</td></tr>
                  <tr><td>Pubblico — pensione per limiti</td><td>12 mesi + 90 giorni (dal 2027: anticipato di 3 mesi)</td></tr>
                  <tr><td>Pubblico — dimissioni</td><td>24 mesi + 90 giorni</td></tr>
                  <tr><td>Pubblico — inabilità/decesso</td><td>105 giorni</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">⚠️ Se il datore non paga</div>
              <p>Se il TFR non arriva entro tempi ragionevoli, manda una <strong>diffida scritta</strong> (raccomandata o PEC). Se non basta, rivolgiti a un sindacato o avvocato del lavoro. Hai <strong>5 anni</strong> dalla cessazione per far valere il tuo diritto. Se l&apos;azienda è insolvente o fallita, interviene il <strong>Fondo di Garanzia INPS</strong>.</p>
            </div>
          </div>

          {/* ANTICIPO */}
          <div className="sec breve-hide r" id="anticipo">
            <div className="sec-tag">In anticipo</div>
            <h2>Anticipo del TFR: quando e come richiederlo</h2>
            <p>Puoi chiedere un anticipo del TFR senza dover aspettare la fine del rapporto. Ma ci sono condizioni precise:</p>

            <div className="icgrid r">
              <div className="ic r d1">
                <div className="ic-n">Almeno 8 anni di servizio</div>
                <div className="ic-d">Devi aver lavorato almeno 8 anni continuativi presso lo <strong>stesso datore</strong>.</div>
              </div>
              <div className="ic r d2">
                <div className="ic-n">Massimo 70% del maturato</div>
                <div className="ic-d">Non puoi chiedere tutto — solo fino al <strong>70%</strong> del TFR accantonato fino a quel momento.</div>
              </div>
              <div className="ic r d3">
                <div className="ic-n">Una sola volta</div>
                <div className="ic-d">L&apos;anticipo si può chiedere <strong>una sola volta</strong> durante tutto il rapporto di lavoro.</div>
              </div>
            </div>

            <h3>Per quali motivi puoi chiederlo</h3>
            <div className="ib tip r d1">
              <div className="ib-t">🏠 Acquisto prima casa</div>
              <p>Per te o per i tuoi figli. Serve documentazione (compromesso, atto notarile).</p>
            </div>
            <div className="ib tip r d2">
              <div className="ib-t">🏥 Spese sanitarie straordinarie</div>
              <p>Interventi chirurgici, terapie, spese mediche importanti — per te o per i familiari a carico.</p>
            </div>
            <div className="ib tip r d3">
              <div className="ib-t">👶 Congedi parentali o formativi</div>
              <p>Per finanziare periodi di congedo dal lavoro previsti dalla legge.</p>
            </div>
          </div>

          {/* TFR VS FONDO */}
          <div className="sec breve-hide r" id="fondo">
            <div className="sec-tag">La scelta</div>
            <h2>TFR in azienda o fondo pensione?</h2>
            <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove destinare il TFR. Se non scegli, scatta il <strong>silenzio-assenso</strong>: il TFR va automaticamente al fondo pensione di categoria.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th></th><th>In azienda</th><th>Fondo pensione</th></tr></thead>
                <tbody>
                  <tr><td><strong>Tassazione finale</strong></td><td>~23% (media IRPEF)</td><td className="tg">Dal 15% al 9%</td></tr>
                  <tr><td><strong>Rivalutazione</strong></td><td>75% inflazione + 1,5%</td><td>Dipende dal fondo (potenzialmente superiore)</td></tr>
                  <tr><td><strong>Anticipo</strong></td><td>Dopo 8 anni, max 70%</td><td className="tg">Dopo 8 anni, fino al 75% (più flessibile)</td></tr>
                  <tr><td><strong>Rischio</strong></td><td>Azienda insolvente (c&apos;è fondo garanzia)</td><td>Oscillazioni di mercato</td></tr>
                  <tr><td><strong>Quando lo ricevi</strong></td><td>Alla cessazione</td><td>Alla pensione (o prima con limiti)</td></tr>
                  <tr><td><strong>Deducibilità extra</strong></td><td>No</td><td className="tg">Sì, fino a 5.300€/anno (2026)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">💡 Il consiglio pratico</div>
              <p>Se sei <strong>giovane e hai un orizzonte lungo</strong> (20+ anni alla pensione), il fondo pensione conviene quasi sempre — risparmi dal 6% al 14% di tasse sul TFR e accumuli una pensione integrativa. Se sei <strong>vicino alla pensione o pensi di cambiare spesso lavoro</strong>, il TFR in azienda ti dà più liquidità immediata.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="ctabanner r">
            <h3>Vuoi sapere esattamente quanto TFR ti spetta?</h3>
            <p>Ti calcoliamo il TFR netto nella tua situazione, con la tassazione corretta e il confronto azienda vs fondo pensione.</p>
            <a href="#trova-professionista" className="btnc">Trova professionista nella tua zona →</a>
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/dimissioni" className="rc"><span className="rc-e">✍️</span><div className="rc-t">Dimissioni volontarie</div><div className="rc-d">Come dimettersi online, preavviso e cosa ti spetta.</div><span className="rc-ar">→</span></a>
              <a href="/naspi" className="rc"><span className="rc-e">💼</span><div className="rc-t">NASpI — Disoccupazione</div><div className="rc-d">Se hai perso il lavoro, quanto ti spetta e come fare domanda.</div><span className="rc-ar">→</span></a>
              <a href="/730" className="rc"><span className="rc-e">🧾</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Il TFR va nella CU. Fai il 730 per non perdere detrazioni.</div><span className="rc-ar">→</span></a>
            </div>
          </div>

        </main>

        <aside className="aside">
          <div className="sb-cta">
            <div className="sb-ct">Ti serve un professionista?</div>
            <div className="sb-cd">Trova chi ti aiuta nella tua zona. Gratis.</div>
            <a href="#trova-professionista" className="sb-cb">Trova professionista →</a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">🛠 Strumenti</div>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">✅</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Verifica la tua situazione</div></div></a>
            <a href="#calcolo" className="sbtool"><span className="sbtool-i">📊</span><div><div className="sbtool-n">Calcolatore TFR</div><div className="sbtool-d">Stima lordo e netto</div></div></a>
            <a href="#fondo" className="sbtool"><span className="sbtool-i">⚖️</span><div><div className="sbtool-n">Azienda vs Fondo</div><div className="sbtool-d">Confronto fiscale</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/dimissioni" className="sbguide">✍️ Dimissioni<span className="sbg-ar">→</span></a>
            <a href="/naspi" className="sbguide">💼 NASpI<span className="sbg-ar">→</span></a>
            <a href="/730" className="sbguide">🧾 Faccio il 730<span className="sbg-ar">→</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="tfr" />
      <Footer variant="scheda" />
    </>
  );
}
