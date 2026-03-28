import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import CalcTfr from '@/components/CalcTfr';
import GuideClient from './Guide730Client';

export const metadata = {
  title: 'Come Calcolare il TFR nel 2026: Tassazione, Anticipo e Quando Spetta',
  description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
  keywords: ['TFR','trattamento fine rapporto','liquidazione','calcolo TFR','TFR tassazione','anticipo TFR','fondo pensione','TFR in busta paga','quando arriva TFR','TFR dimissioni'],
  alternates: { canonical: 'https://zeroburocrazia.it/tfr' },
  openGraph: { title: 'Come Calcolare il TFR nel 2026: Tassazione, Anticipo e Quando Spetta', description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.', url: 'https://zeroburocrazia.it/tfr', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogtfr.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogtfr.png'] },
};

const faqItems = [
  { q: "Il TFR spetta anche se mi dimetto?", a: "<strong>S\u00ec, sempre.</strong> Il TFR ti spetta indipendentemente dal motivo: dimissioni volontarie, licenziamento, fine contratto, pensionamento, e anche licenziamento per giusta causa. \u00c8 un tuo diritto maturato \u2014 non pu\u00f2 essere negato." },
  { q: "Quanto tempo ha il datore per pagare il TFR?", a: "La legge non fissa un termine preciso. La prassi \u00e8 <strong>30-45 giorni</strong> dalla cessazione. Molti CCNL lo specificano. Se il datore ritarda, manda un sollecito formale (PEC) e, se serve, rivolgiti a un sindacato o avvocato del lavoro." },
  { q: "Il TFR si prescrive?", a: "<strong>S\u00ec, in 5 anni.</strong> Se il datore non ti paga il TFR, hai 5 anni dalla cessazione per richiederlo legalmente. Dopo, il diritto si prescrive e perdi tutto." },
  { q: "Posso chiedere un anticipo del TFR?", a: "S\u00ec, dopo <strong>8 anni di servizio</strong> continuativo presso lo stesso datore. Puoi chiedere fino al <strong>70% del TFR maturato</strong>, ma solo per: acquisto prima casa, spese sanitarie gravi, o congedi parentali/formativi. L\u2019anticipo si pu\u00f2 chiedere <strong>una sola volta</strong>." },
  { q: "Conviene lasciare il TFR in azienda o metterlo nel fondo pensione?", a: "Dipende. Il <strong>fondo pensione</strong> ha tassazione dal 15% al 9% (contro ~23% in azienda), deducibilit\u00e0 dei contributi aggiuntivi e rendimenti potenzialmente superiori. Il TFR <strong>in azienda</strong> \u00e8 pi\u00f9 accessibile e non ha rischio di mercato. Se sei giovane e hai 20+ anni alla pensione, il fondo conviene quasi sempre." },
  { q: "Cosa succede al TFR se l\u2019azienda fallisce?", a: "Interviene il <strong>Fondo di Garanzia INPS</strong>. Puoi fare domanda all\u2019INPS per recuperare il TFR non pagato. Le aziende con pi\u00f9 di 50 dipendenti versano gi\u00e0 il TFR al Fondo Tesoreria INPS, quindi il pagamento \u00e8 comunque garantito." },
  { q: "Come si legge il TFR in busta paga?", a: "Cerca le voci \u2018TFR maturato\u2019, \u2018Fondo TFR\u2019 o \u2018Accantonamento TFR\u2019. Trovi la <strong>quota maturata nel mese</strong>, il <strong>totale accantonato</strong> e la <strong>rivalutazione</strong>. Se non le trovi, chiedi all\u2019ufficio paghe." },
  { q: "Il TFR va dichiarato nel 730?", a: "<strong>No.</strong> Il TFR ha una tassazione separata, applicata direttamente dal datore di lavoro (o dall\u2019INPS). Non va inserito nel 730. Per\u00f2 compare nella CU (Certificazione Unica) che ricevi a marzo." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'TFR 2026: calcolo, tassazione, anticipo e quando spetta', description: 'TFR 2026: come si calcola la liquidazione, tassazione, anticipo e confronto azienda vs fondo pensione.', url: '/tfr', image: 'ogtfr.png', datePublished: '2026-03-07', dateModified: '2026-03-28' }),
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
          <h1 className="rv rv-d1">Il mio <em>TFR</em></h1>
          <p className="v8-ghero-sub rv rv-d2">La liquidazione spiegata come te la spiegherebbe un amico. Quanto ti spetta, come si calcola, tassazione e la scelta tra azienda e fondo pensione.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>6,91%</strong><span>della RAL ogni anno</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>5 anni</strong><span>per richiederlo</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>Sempre</strong><span>anche se ti dimetti</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cos&apos;&egrave; il TFR <em>spiegato semplice</em></h2></div>
          <div className="v8-prose rv">
            <p>Immagina che ogni mese il tuo datore di lavoro, invece di darti tutto lo stipendio, ne metta un pezzetto da parte in un salvadanaio. Mese dopo mese, anno dopo anno, quel salvadanaio cresce. Quando il rapporto di lavoro finisce &mdash; per qualsiasi motivo &mdash; il datore rompe il salvadanaio e ti d&agrave; tutto quello che c&apos;&egrave; dentro. Quello &egrave; il TFR.</p>
            <p>In numeri: ogni anno il datore accantona circa il <strong>6,91%</strong> della tua <Tip t="Retribuzione Annua Lorda. &Egrave; lo stipendio totale annuo prima delle tasse e dei contributi. Se prendi 1.500&euro; netti al mese, la tua RAL &egrave; circa 25.000-28.000&euro;.">RAL</Tip> &mdash; che corrisponde pi&ugrave; o meno a <strong>una mensilit&agrave; di stipendio</strong>. Dopo 10 anni hai accumulato circa 10 mensilit&agrave;. E quel gruzzolo nel frattempo cresce un po&apos; grazie alla <Tip t="Ogni anno il TFR accantonato viene aumentato del 75% dell&apos;inflazione ISTAT pi&ugrave; un 1,5% fisso. Con inflazione al 2%, il TFR cresce del 3% all&apos;anno.">rivalutazione</Tip>.</p>
            <div className="v8-info tip" style={{maxWidth:'700px',margin:'28px auto'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <div><p><strong>Non &egrave; un regalo del datore.</strong> Il TFR &egrave; retribuzione differita &mdash; sono soldi tuoi, guadagnati mese per mese, semplicemente pagati dopo invece che subito. Ti spettano <strong>sempre</strong>: dimissioni, licenziamento, pensione, fine contratto. Anche in caso di morte del lavoratore, il TFR va agli eredi.</p></div>
            </div>
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>TFR (Trattamento di Fine Rapporto)</strong> &mdash; Il nome ufficiale della &ldquo;liquidazione&rdquo;. Regolato dall&apos;art. 2120 del Codice Civile.</p>
            <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il TFR si calcola sulla RAL: ogni anno viene accantonato il 6,91% (RAL &divide; 13,5).</p>
            <p><strong>Rivalutazione</strong> &mdash; L&apos;aumento annuo del TFR: 75% inflazione + 1,5% fisso. Sulla rivalutazione si paga il 17% di imposta.</p>
            <p><strong>Tassazione separata</strong> &mdash; Il TFR non si somma al reddito dell&apos;anno. Viene tassato con un&apos;aliquota media calcolata sugli ultimi anni. Evita di finire in scaglioni IRPEF altissimi.</p>
            <p><strong>Fondo pensione</strong> &mdash; Alternativa all&apos;azienda per il TFR. Tassazione pi&ugrave; bassa (15-9% contro ~23%) ma i soldi sono bloccati fino alla pensione (con eccezioni).</p>
            <p><strong>Fondo di Garanzia INPS</strong> &mdash; Se l&apos;azienda fallisce e non pu&ograve; pagarti il TFR, interviene questo fondo. Fai domanda online e recuperi i soldi.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="calcolo">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come si <em>calcola</em> il TFR</h2><p className="rv rv-d1">La formula dell&apos;art. 2120 Codice Civile: RAL &divide; 13,5 ogni anno.</p></div>
          <div className="v8-prose rv">
            <p>Ogni anno si accantona: <strong><Tip t="La Retribuzione Annua Lorda, comprensiva di tredicesima e quattordicesima se previste dal tuo contratto.">RAL</Tip> &divide; 13,5</strong>. Con una RAL di 25.000&euro;, la quota &egrave; circa 1.851&euro;/anno. A questa si sottrae il contributo INPS dello 0,5% (125&euro;), quindi la quota netta accantonata &egrave; circa 1.726&euro;.</p>
            <p>Il TFR gi&agrave; accantonato viene rivalutato ogni anno del <strong>75% dell&apos;inflazione ISTAT + 1,5% fisso</strong>. Con inflazione al 2%, la rivalutazione &egrave; del 3%. Questo protegge il tuo TFR dalla perdita di potere d&apos;acquisto. Sulla rivalutazione si paga il 17% di imposta ogni anno.</p>
          </div>
          <div style={{maxWidth:'700px',margin:'32px auto 0'}}>
            <CalcTfr />
          </div>
        </div>
      </section>

      <section className="v8-section" id="tassazione">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come viene <em>tassato</em> il TFR</h2><p className="rv rv-d1">Il TFR non si somma al reddito dell&apos;anno &mdash; ha una tassazione separata pi&ugrave; vantaggiosa.</p></div>
          <div className="v8-prose rv">
            <p>Se il TFR fosse tassato insieme al reddito dell&apos;anno, finiresti in uno scaglione altissimo (ricevi in un colpo anni di stipendio). La <Tip t="Un sistema dove l&apos;importo viene tassato con un&apos;aliquota calcolata sulla media dei redditi degli ultimi anni, non aggiunto al reddito dell&apos;anno corrente.">tassazione separata</Tip> evita questo problema.</p>
          </div>
          <div className="v8-table-wrap rv" style={{maxWidth:'700px',margin:'24px auto'}}>
            <table className="v8-table">
              <thead><tr><th>Dove va il TFR</th><th>Tassazione</th><th>Note</th></tr></thead>
              <tbody>
                <tr><td>In azienda</td><td>~23% (tassazione separata)</td><td>Aliquota media ultimi 5 anni</td></tr>
                <tr><td>Fondo pensione</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>Dal 15% al 9%</td><td>Scende di 0,3% per ogni anno dopo il 15&deg;</td></tr>
                <tr><td>Rivalutazione annua</td><td>17% fisso</td><td>Si paga ogni anno, non alla cessazione</td></tr>
              </tbody>
            </table>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'0 auto'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p>La differenza tra 23% e 9-15% sembra poca, ma su un TFR di 20.000&euro; lordi parliamo di <strong>1.600-2.800&euro; in pi&ugrave; in tasca</strong> se scegli il fondo pensione. Su 40.000&euro; il risparmio raddoppia. Sono soldi veri.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="quando">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Quando ricevi <em>il TFR</em></h2><p className="rv rv-d1">I tempi cambiano parecchio tra settore privato e pubblico.</p></div>
          <div className="v8-table-wrap rv" style={{maxWidth:'600px',margin:'0 auto 24px'}}>
            <table className="v8-table">
              <thead><tr><th>Settore</th><th>Tempi di pagamento</th></tr></thead>
              <tbody>
                <tr><td>Privato</td><td><strong>30-45 giorni</strong> dalla cessazione (prassi)</td></tr>
                <tr><td>Pubblico &mdash; pensione</td><td>12 mesi + 90 giorni</td></tr>
                <tr><td>Pubblico &mdash; dimissioni</td><td>24 mesi + 90 giorni</td></tr>
                <tr><td>Pubblico &mdash; inabilit&agrave;/decesso</td><td>105 giorni</td></tr>
              </tbody>
            </table>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'0 auto 32px'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Se il datore non paga:</strong> manda una diffida scritta (raccomandata o PEC). Hai <strong>5 anni</strong> dalla cessazione per far valere il diritto. Se l&apos;azienda &egrave; insolvente o fallita, interviene il <strong>Fondo di Garanzia INPS</strong> &mdash; fai domanda online con il modulo SR52.</p></div>
          </div>

          <div className="v8-section-head" style={{marginTop:'40px'}}><h3 className="rv" style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'28px'}}>Anticipo del TFR</h3><p className="rv rv-d1">Non devi aspettare la fine del rapporto &mdash; ma ci sono condizioni precise.</p></div>
          <div className="v8-steps" style={{marginTop:'20px'}}>
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>8 anni di servizio</h3><p>Devi aver lavorato almeno 8 anni continuativi presso lo <strong>stesso datore</strong>.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Max 70% del maturato</h3><p>Non puoi chiedere tutto &mdash; solo fino al <strong>70%</strong> del TFR accantonato fino a quel momento.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Una sola volta</h3><p>L&apos;anticipo si pu&ograve; chiedere <strong>una sola volta</strong> durante tutto il rapporto di lavoro.</p></div>
          </div>
          <div className="v8-prose rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <p>Motivi ammessi: <strong>acquisto prima casa</strong> (per te o i tuoi figli), <strong>spese sanitarie straordinarie</strong> (interventi chirurgici, terapie gravi per te o familiari a carico), <strong>congedi parentali o formativi</strong> previsti dalla legge.</p>
          </div>
        </div>
      </section>

      <section className="v8-section" id="fondo">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">TFR in azienda <em>o fondo pensione</em>?</h2><p className="rv rv-d1">La scelta pi&ugrave; importante che fai nei primi 60 giorni dall&apos;assunzione.</p></div>
          <div className="v8-prose rv">
            <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove mandare il TFR. Se non scegli, scatta il <Tip t="Il TFR va automaticamente al fondo pensione di categoria. Non &egrave; una truffa, &egrave; previsto dalla legge. Puoi cambiare idea dopo.">silenzio-assenso</Tip>: il TFR va automaticamente al fondo pensione di categoria.</p>
          </div>
          <div className="v8-table-wrap rv" style={{maxWidth:'750px',margin:'20px auto'}}>
            <table className="v8-table">
              <thead><tr><th></th><th>In azienda</th><th>Fondo pensione</th></tr></thead>
              <tbody>
                <tr><td><strong>Tassazione finale</strong></td><td>~23% (media IRPEF)</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>Dal 15% al 9%</td></tr>
                <tr><td><strong>Rivalutazione</strong></td><td>75% inflazione + 1,5%</td><td>Dipende dal fondo</td></tr>
                <tr><td><strong>Anticipo</strong></td><td>Dopo 8 anni, max 70%</td><td style={{color:'var(--v8-green)'}}>Dopo 8 anni, fino al 75%</td></tr>
                <tr><td><strong>Rischio</strong></td><td>Azienda insolvente (c&apos;&egrave; fondo garanzia)</td><td>Oscillazioni di mercato</td></tr>
                <tr><td><strong>Deducibilit&agrave; extra</strong></td><td>No</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>S&igrave;, fino a 5.300&euro;/anno</td></tr>
              </tbody>
            </table>
          </div>
          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'0 auto'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p>Se sei <strong>giovane e hai un orizzonte lungo</strong> (20+ anni alla pensione), il fondo pensione conviene quasi sempre &mdash; risparmi dal 6% al 14% di tasse e accumuli una pensione integrativa. Se sei <strong>vicino alla pensione o cambi spesso lavoro</strong>, il TFR in azienda ti d&agrave; pi&ugrave; liquidit&agrave; immediata.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Davide</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Davide ha 38 anni</strong>, lavora come tecnico informatico a Milano da 12 anni nella stessa azienda. RAL 32.000&euro;. Ha deciso di cambiare lavoro &mdash; si &egrave; gi&agrave; dimesso. Il TFR non &egrave; mai stato spostato nel fondo pensione. Non ha idea di quanto sia &mdash; pensa &ldquo;saranno un paio di migliaia di euro&rdquo;.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>TFR accantonato (12 anni, RAL media 28.000&euro;)</span><span>~23.200&euro;</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Rivalutazione accumulata</span><span>+2.900&euro;</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Imposta rivalutazione (17%)</span><span>-493&euro;</span></div>
            <div className="v8-esempio-line rv rv-d4"><span>Tassazione separata (~23%)</span><span>-5.336&euro;</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>TFR netto in tasca</span><span>~20.271&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Davide non ci credeva: oltre ventimila euro. Se avesse scelto il fondo pensione all&apos;inizio, con tassazione al 12% invece del 23%, avrebbe avuto circa <strong style={{color:'#E4F3ED'}}>2.500&euro; in pi&ugrave;</strong>. Ma nessuno glielo aveva spiegato prima.</p>
        </div>
      </section>

      <section className="v8-section warm" id="faq">
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

      <section className="v8-section" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related">
            <a href="/dimissioni" className="v8-related-card rv rv-d1"><h4>Dimissioni volontarie</h4><p>Come dimettersi online, preavviso e cosa ti spetta.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/naspi" className="v8-related-card rv rv-d2"><h4>NASpI</h4><p>Se hai perso il lavoro, quanto ti spetta di disoccupazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/busta-paga" className="v8-related-card rv rv-d3"><h4>Busta paga</h4><p>Dove trovare il TFR accantonato ogni mese nel cedolino.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
          </div>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
