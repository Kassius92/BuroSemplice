import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Detrarre l\u2019Affitto nel 730: Importi, Requisiti e Codici 2026',
  description: 'Detrazione affitto nel 730 2026: chi ne ha diritto, quanto si recupera, codici da usare e come inserirla nel precompilato. Guida pratica.',
  keywords: ['detrazione affitto 730', 'affitto 730 2026', 'detrazione affitto', 'scaricare affitto', 'codice detrazione affitto', 'affitto dichiarazione redditi'],
  alternates: { canonical: 'https://zeroburocrazia.it/730/detrazioni-affitto' },
  openGraph: {
    title: 'Come Detrarre l\u2019Affitto nel 730: Importi e Requisiti 2026',
    description: 'Detrazione affitto nel 730: chi ne ha diritto, quanto si recupera, come inserirla.',
    url: 'https://zeroburocrazia.it/730/detrazioni-affitto',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Quanto posso recuperare con la detrazione affitto?", a: "Dipende dalla categoria. <strong>Lavoratori dipendenti fuori sede</strong>: fino a 991\u20ac. <strong>Under 31 prima casa</strong>: fino a 991\u20ac. <strong>Redditi bassi (sotto 15.494\u20ac)</strong>: 300\u20ac. <strong>Redditi fino a 30.987\u20ac</strong>: 150\u20ac. Studenti fuori sede: fino a 2.633\u20ac di spesa detraibile al 19% = circa 500\u20ac." },
  { q: "Serve il contratto registrato per detrarre l\u2019affitto?", a: "<strong>S\u00ec, sempre.</strong> Senza un contratto regolarmente registrato all\u2019Agenzia delle Entrate, la detrazione non spetta. Vale per tutti i tipi di detrazione affitto." },
  { q: "Se pago l\u2019affitto in contanti posso detrarlo?", a: "<strong>S\u00ec.</strong> A differenza di altre detrazioni, per l\u2019affitto non \u00e8 obbligatorio il pagamento tracciabile. Puoi pagare anche in contanti, purch\u00e9 il contratto sia registrato." },
  { q: "L\u2019affitto \u00e8 gi\u00e0 nel 730 precompilato?", a: "Di solito <strong>no</strong>. L\u2019Agenzia non ha i dati dei contratti di locazione nel precompilato nella maggior parte dei casi. Devi inserirlo tu manualmente, indicando il codice del contratto e l\u2019importo." },
  { q: "Posso detrarre l\u2019affitto se vivo con i miei genitori?", a: "<strong>No</strong>, a meno che il contratto di affitto sia intestato a te. Se \u00e8 intestato ai tuoi genitori, la detrazione spetta a loro." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come Detrarre l\u2019Affitto nel 730 nel 2026',
      description: 'Detrazione affitto nel 730: importi, requisiti, codici e come inserirla.',
      url: '/730/detrazioni-affitto', image: 'og730.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      <div className="layout" style={{paddingTop: '120px'}}>
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guida principale</span>
            <div className="perc-steps">
              <a href="/730" className="ps active">{'\uD83E\uDDFE'} Come Fare il 730</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/730/detrazioni-affitto" className="ps">{'\uD83C\uDFE0'} Detrazioni affitto</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Come detrarre l&apos;<em>affitto</em> nel 730</h1>

            <p>Paghi un affitto? Puoi <strong>recuperare una parte nel 730</strong>. L&apos;importo dipende dalla tua situazione: lavoratore dipendente fuori sede, studente universitario, under 31, o semplicemente inquilino con reddito basso. In tutti i casi serve un <strong>contratto registrato</strong>.</p>

            <p>La detrazione affitto <strong>non &egrave; quasi mai inserita nel 730 precompilato</strong>. Devi aggiungerla tu. Se non lo fai, perdi fino a 991&euro; di rimborso.</p>
          </div>

          <div className="sec r" id="importi">
            <div className="sec-tag">Quanto recuperi</div>
            <h2>Importi per categoria</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Chi sei</th><th>Reddito massimo</th><th>Detrazione</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Lavoratore dipendente fuori sede</td><td className="cv">30.987&euro;</td><td className="cv cfr">991&euro; <span className="badge">Max</span></td></tr>
                  <tr><td className="cv">Under 31, prima casa</td><td className="cv">15.493&euro;</td><td className="cv">991&euro;</td></tr>
                  <tr><td>Inquilino con reddito basso</td><td className="cv">15.493&euro;</td><td className="cv">300&euro;</td></tr>
                  <tr><td>Inquilino con reddito medio</td><td className="cv">30.987&euro;</td><td className="cv">150&euro;</td></tr>
                  <tr><td className="cv">Studente universitario fuori sede</td><td>Nessun limite</td><td className="cv">19% su max 2.633&euro; = ~500&euro;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: Laura, lavoratrice fuori sede</h3>
              <p>Laura ha 27 anni, lavora a Milano ma la residenza &egrave; a Napoli. Reddito: <strong>25.000&euro;</strong>. Affitto: 750&euro;/mese. Contratto registrato a suo nome.</p>
              <p>Laura ha diritto alla detrazione per <strong>lavoratori dipendenti fuori sede</strong>: <strong>991&euro;</strong> di rimborso nel 730.</p>
              <p>Se Laura non inserisce l&apos;affitto nel precompilato (come fanno in tanti), <strong>perde 991&euro;</strong>. Ci vogliono 2 minuti per aggiungerlo.</p>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Le categorie non si cumulano</div>
              <p>Puoi scegliere <strong>una sola</strong> detrazione tra quelle disponibili. Se sei under 31 e anche lavoratore fuori sede, scegli quella che ti conviene di pi&ugrave; (di solito sono entrambe 991&euro;, ma verifica i requisiti di reddito).</p>
            </div>
          </div>

          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come inserirla nel 730</h2>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Identifica la tua categoria</strong>
                  <p>Lavoratore fuori sede, under 31, studente fuori sede, o inquilino con reddito basso? Ogni categoria ha un codice diverso nel 730.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Prepara i documenti</strong>
                  <p>Contratto di locazione registrato + ricevute dei pagamenti. Ti serve il tipo di contratto (canone libero o concordato) e gli estremi di registrazione.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Compila il Rigo E71 (Sezione V)</strong>
                  <p>Nel 730, vai alla Sezione V &ldquo;Detrazione per inquilini&rdquo;, rigo <strong>E71</strong>. Inserisci il codice (1, 2, 3 o 4 a seconda della categoria), il numero dei giorni e la percentuale.</p>
                </div>
              </div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Studenti fuori sede: rigo diverso</div>
              <p>Per gli <strong>studenti universitari fuori sede</strong> la detrazione va al rigo <strong>E8/E10 con codice 18</strong> (sezione spese per istruzione), non al rigo E71. L&apos;importo massimo detraibile &egrave; 2.633&euro;, e la detrazione &egrave; al 19% = circa 500&euro;.</p>
            </div>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Come Fare il 730</div><div className="rc-d">Guida completa a tutte le detrazioni.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730/precompilato" className="rc"><span className="rc-e">{'\uD83D\uDCBB'}</span><div className="rc-t">730 Precompilato</div><div className="rc-d">Come accedere, controllare e inviare.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spese-mediche" className="rc"><span className="rc-e">{'\uD83D\uDC8A'}</span><div className="rc-t">Spese mediche nel 730</div><div className="rc-d">Come scaricare le spese sanitarie.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
