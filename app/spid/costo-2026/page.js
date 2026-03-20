import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Quanto Costa lo SPID nel 2026: Poste 6\u20ac/anno, Alternative Gratis',
  description: 'SPID costo 2026: Poste Italiane costa 6\u20ac/anno, ma ci sono provider ancora gratis. Confronto prezzi, chi \u00e8 esente e alternative gratuite.',
  keywords: ['SPID costo', 'SPID costo 2026', 'SPID gratis 2026', 'SPID Poste pagamento', 'SPID 6 euro', 'SPID gratuito', 'SPID prezzo', 'PosteID costo'],
  alternates: { canonical: 'https://zeroburocrazia.it/spid/costo-2026' },
  openGraph: {
    title: 'Quanto Costa lo SPID nel 2026: Poste 6\u20ac/anno e Alternative Gratis',
    description: 'SPID costo 2026: confronto prezzi provider, chi \u00e8 esente e come averlo gratis.',
    url: 'https://zeroburocrazia.it/spid/costo-2026',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogspid.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Lo SPID di Poste \u00e8 diventato a pagamento?", a: "<strong>S\u00ec.</strong> Dal 1\u00b0 gennaio 2026, PosteID costa <strong>6\u20ac/anno</strong> a partire dal secondo anno. Il primo anno resta gratuito. Sono esenti: minorenni, over 75, residenti all\u2019estero e uso professionale." },
  { q: "Posso avere lo SPID gratis nel 2026?", a: "<strong>S\u00ec.</strong> Provider come Lepida, InfoCamere e Namirial offrono ancora lo SPID senza canone annuale. Il costo \u00e8 solo per l\u2019eventuale riconoscimento (gratuito se usi CIE o firma digitale)." },
  { q: "Se non pago i 6\u20ac di Poste perdo lo SPID?", a: "<strong>Non subito.</strong> Lo SPID viene sospeso (non puoi accedere ai servizi), ma hai 24 mesi per pagare e riattivarlo. Dopo 24 mesi senza pagamento, l\u2019identit\u00e0 viene revocata." },
  { q: "Posso passare da Poste a un provider gratuito?", a: "<strong>S\u00ec.</strong> Puoi avere pi\u00f9 SPID con provider diversi contemporaneamente. Attiva lo SPID con un provider gratuito, poi disattiva quello di Poste. Non c\u2019\u00e8 bisogno di \u201ctrasferire\u201d nulla." },
  { q: "La CIE \u00e8 un\u2019alternativa allo SPID?", a: "<strong>S\u00ec.</strong> La CIE (Carta d\u2019Identit\u00e0 Elettronica) permette di accedere a tutti gli stessi servizi dello SPID. Costa 22,21\u20ac una tantum (dura 10 anni), nessun canone annuale. Serve l\u2019app CieID e un telefono con NFC." },
  { q: "Costa anche l\u2019attivazione dello SPID?", a: "L\u2019attivazione \u00e8 <strong>gratuita</strong> con tutti i provider se fai il riconoscimento con CIE o firma digitale. Se vai in ufficio postale \u00e8 gratis con Poste. Il riconoscimento via webcam pu\u00f2 costare 10-25\u20ac." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Quanto Costa lo SPID nel 2026',
      description: 'SPID costo 2026: Poste 6\u20ac/anno, provider gratis, chi \u00e8 esente.',
      url: '/spid/costo-2026', image: 'ogspid.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-documenti">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      <div className="layout" style={{paddingTop: '120px'}}>
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guida principale</span>
            <div className="perc-steps">
              <a href="/spid" className="ps active">{'\uD83D\uDD10'} Come Fare lo SPID</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/spid/costo-2026" className="ps">{'\uD83D\uDCB0'} Costo 2026</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Quanto costa lo SPID <em>nel 2026</em></h1>

            <p>La grande novit&agrave; del 2026: <strong>lo SPID di Poste Italiane non &egrave; pi&ugrave; gratis per tutti</strong>. Dal 1&deg; gennaio 2026, PosteID prevede un canone di 6&euro;/anno a partire dal secondo anno di utilizzo. Ma ci sono ancora <strong>provider che lo offrono senza canone</strong>, e ci sono categorie esentate.</p>
          </div>

          <div className="sec r" id="confronto">
            <div className="sec-tag">Confronto prezzi</div>
            <h2>Quanto costa per provider</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Provider</th><th>Canone annuo</th><th>Attivazione</th><th>Note</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Poste Italiane (PosteID)</td><td className="cv cfr">6&euro;/anno <span className="badge">Novit&agrave;</span></td><td>Gratuita</td><td>1&deg; anno gratis. Esenti: minori, over 75, residenti estero</td></tr>
                  <tr><td className="cv">Lepida</td><td className="cv" style={{color: '#16a34a', fontWeight: 700}}>Gratis</td><td>Gratuita con CIE</td><td>Emilia-Romagna ma disponibile a tutti</td></tr>
                  <tr><td className="cv">InfoCamere (ID InfoCamere)</td><td className="cv" style={{color: '#16a34a', fontWeight: 700}}>Gratis</td><td>Gratuita con CIE/CNS</td><td>Collegato alle Camere di Commercio</td></tr>
                  <tr><td className="cv">Namirial</td><td className="cv" style={{color: '#16a34a', fontWeight: 700}}>Gratis</td><td>Gratuita con CIE</td><td>Riconoscimento via webcam a pagamento</td></tr>
                  <tr><td className="cv">Aruba</td><td className="cv">Verifica sul sito</td><td>Varia</td><td>Condizioni aggiornate frequentemente</td></tr>
                  <tr><td className="cv">InfoCert</td><td className="cv">Verifica sul sito</td><td>Varia</td><td>Offre anche SPID professionale</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Come risparmiare: attiva con CIE</div>
              <p>Se hai gi&agrave; la <strong>CIE</strong> (Carta d&apos;Identit&agrave; Elettronica), puoi attivare lo SPID con qualsiasi provider <strong>senza costi di riconoscimento</strong>. Apri l&apos;app del provider, inquadra la CIE con il telefono (NFC) e l&apos;identit&agrave; viene verificata in automatico. Zero code, zero costi.</p>
            </div>
          </div>

          <div className="sec r" id="esenti">
            <div className="sec-tag">Chi non paga</div>
            <h2>Categorie esenti dal canone Poste</h2>
            <p>Anche con PosteID, il canone di 6&euro;/anno <strong>non si applica</strong> a:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC66'}</div><div className="clb"><strong>Minorenni</strong><span className="note">Lo SPID per minori &egrave; sempre gratuito.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDDD3'}</div><div className="clb"><strong>Over 75</strong><span className="note">Nessun canone per chi ha compiuto 75 anni.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83C\uDF0D'}</div><div className="clb"><strong>Residenti all&apos;estero (AIRE)</strong><span className="note">Iscritti all&apos;anagrafe degli italiani residenti all&apos;estero.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCBC'}</div><div className="clb"><strong>Uso professionale</strong><span className="note">Chi usa PosteID per scopi professionali (accesso a servizi aziendali/PA).</span></div></li>
            </ul>
          </div>

          <div className="sec r" id="alternativa">
            <div className="sec-tag">Alternativa</div>
            <h2>La CIE come alternativa gratuita</h2>

            <p>Se non vuoi pagare il canone e non vuoi cambiare provider, c&apos;&egrave; un&apos;alternativa concreta: <strong>usa la CIE</strong>. La Carta d&apos;Identit&agrave; Elettronica permette di accedere a tutti gli stessi servizi dello SPID (INPS, Agenzia Entrate, fascicolo sanitario, ecc.).</p>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} SPID vs CIE: il confronto</h3>
              <p><strong>SPID</strong>: username + password + app. Pi&ugrave; comodo per l&apos;uso quotidiano. Alcuni provider ora a pagamento.</p>
              <p><strong>CIE</strong>: carta fisica + app CieID + NFC. Costo una tantum 22,21&euro; (dura 10 anni). Nessun canone. Pi&ugrave; sicura.</p>
              <div className="db-row db-total"><span className="db-label">Consiglio ZeroBurocrazia</span><span className="db-val">Tieni entrambi. SPID per l&apos;uso quotidiano (gratis con Lepida), CIE come backup.</span></div>
            </div>

            <a href="/cie" className="xlink r"><span className="xlink-em">{'\uD83D\uDCB3'}</span><div className="xlink-t"><strong>Come fare la CIE</strong> &mdash; 22,21&euro; una tantum, dura 10 anni, zero canoni.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Come Fare lo SPID</div><div className="rc-d">Guida completa: provider, attivazione e tempi.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid/non-funziona" className="rc"><span className="rc-e">{'\u26A0\uFE0F'}</span><div className="rc-t">SPID non funziona</div><div className="rc-d">Problemi comuni e come risolverli.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cie" className="rc"><span className="rc-e">{'\uD83D\uDCB3'}</span><div className="rc-t">CIE</div><div className="rc-d">L&apos;alternativa gratuita allo SPID.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
