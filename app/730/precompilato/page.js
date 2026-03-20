import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import Tip from '@/components/Tip';
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare il 730 Precompilato nel 2026: Guida Passo per Passo',
  description: '730 precompilato 2026: come accedere, controllare, modificare e inviare. Guida passo per passo con scadenze, errori da evitare e quando conviene.',
  keywords: ['730 precompilato', '730 precompilato 2026', 'come fare 730 precompilato', '730 online', 'agenzia entrate 730', '730 fai da te'],
  alternates: { canonical: 'https://zeroburocrazia.it/730/precompilato' },
  openGraph: {
    title: 'Come Fare il 730 Precompilato nel 2026: Guida Passo per Passo',
    description: '730 precompilato 2026: come accedere, controllare, modificare e inviare.',
    url: 'https://zeroburocrazia.it/730/precompilato',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/og730.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Il 730 precompilato \u00e8 gi\u00e0 pronto o devo compilarlo io?", a: "L\u2019Agenzia delle Entrate lo prepara con i dati che ha (CU, spese sanitarie, mutui, assicurazioni). Tu devi <strong>controllare che sia tutto corretto</strong> e aggiungere quello che manca (es. spese non tracciate, detrazioni per figli, affitto). Se accetti senza modifiche, non rischi controlli." },
  { q: "Quando \u00e8 disponibile il 730 precompilato 2026?", a: "Di solito dal <strong>30 aprile</strong>. Da quella data puoi accedervi sul sito dell\u2019Agenzia delle Entrate. L\u2019invio \u00e8 possibile dal 20 maggio fino al <strong>30 settembre 2026</strong>." },
  { q: "Se accetto il 730 senza modifiche, evito i controlli?", a: "<strong>S\u00ec.</strong> Se accetti il precompilato cos\u00ec com\u2019\u00e8, l\u2019Agenzia non effettua controlli documentali sulle spese gi\u00e0 inserite. Se invece lo modifichi, i controlli restano possibili (ma solo sulle voci modificate)." },
  { q: "Posso fare il 730 precompilato dal telefono?", a: "S\u00ec, ma \u00e8 scomodo. Il sito dell\u2019Agenzia delle Entrate funziona da mobile ma \u00e8 pensato per desktop. Meglio usare un computer per controllare bene tutti i dati." },
  { q: "Se trovo errori nel precompilato, cosa faccio?", a: "Lo <strong>modifichi direttamente online</strong>: aggiungi spese mancanti, correggi importi sbagliati, togli voci che non ti spettano. Poi invii la versione corretta. Se hai dubbi, il CAF pu\u00f2 farlo per te." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come Fare il 730 Precompilato nel 2026',
      description: '730 precompilato 2026: accesso, controllo, modifica e invio. Guida passo per passo.',
      url: '/730/precompilato',
      image: 'og730.png',
      datePublished: '2026-03-20',
      dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
    howToSchema({
      name: 'Come fare il 730 precompilato nel 2026',
      description: 'Procedura per accedere, controllare, modificare e inviare il 730 precompilato.',
      totalTime: 'PT30M',
      image: 'og730.png',
      steps: [
        { name: 'Accedi al sito dell\u2019Agenzia delle Entrate', text: 'Vai su agenziaentrate.gov.it e accedi con SPID, CIE o CNS. Cerca "730 precompilato" e apri il servizio.' },
        { name: 'Controlla i dati precompilati', text: 'L\u2019Agenzia ha gi\u00e0 inserito: redditi (dalla CU), spese sanitarie, interessi mutuo, premi assicurativi. Verifica che siano corretti.' },
        { name: 'Aggiungi le spese mancanti', text: 'Inserisci quello che manca: affitto, spese veterinarie, bonus mobili, contributi colf/badanti, erogazioni liberali.' },
        { name: 'Invia il 730', text: 'Controlla il riepilogo, verifica il risultato (a credito o a debito) e clicca Invia. Il rimborso arriva in busta paga o pensione entro 2-3 mesi.' },
      ],
    }),
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
              <a href="/730/precompilato" className="ps">{'\uD83D\uDCBB'} Precompilato</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Come fare il 730 <em>precompilato</em> nel 2026</h1>

            <p>Il <strong>730 precompilato</strong> &egrave; la dichiarazione dei redditi che l&apos;Agenzia delle Entrate prepara per te, con i dati che ha gi&agrave;: redditi dalla CU del datore di lavoro, spese sanitarie dalla tessera sanitaria, interessi del mutuo dalla banca, premi assicurativi. Tu devi solo <strong>controllare, eventualmente correggere, e inviare</strong>.</p>

            <p>&Egrave; il modo pi&ugrave; semplice per fare il 730 da solo, senza CAF e senza commercialista. E se lo accetti senza modifiche, <strong>eviti i controlli documentali</strong> dell&apos;Agenzia.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Conviene accettare senza modifiche?</div>
              <p>Solo se i dati sono <strong>gi&agrave; completi e corretti</strong>. Se mancano spese (affitto, veterinario, bonus mobili), ti conviene aggiungerle anche se perdi il vantaggio &ldquo;niente controlli&rdquo;. Il risparmio fiscale delle detrazioni vale molto di pi&ugrave; del rischio (basso) di un controllo.</p>
            </div>
          </div>

          <div className="sec r" id="quando">
            <div className="sec-tag">Scadenze</div>
            <h2>Quando &egrave; disponibile</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Data</th><th>Cosa succede</th></tr></thead>
                <tbody>
                  <tr><td className="cv">16 marzo</td><td>I datori di lavoro inviano le CU all&apos;Agenzia</td></tr>
                  <tr className="hl"><td className="cv cfr">30 aprile</td><td><strong>Il 730 precompilato &egrave; disponibile online</strong></td></tr>
                  <tr><td className="cv">20 maggio</td><td>Si pu&ograve; iniziare a modificare e inviare</td></tr>
                  <tr><td className="cv">30 settembre</td><td><strong>Scadenza invio</strong> (ultimo giorno)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="sec r" id="come">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa</h2>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Accedi al sito dell&apos;Agenzia delle Entrate</strong>
                  <p>Vai su <strong>agenziaentrate.gov.it</strong>, clicca &ldquo;Area riservata&rdquo; e accedi con SPID, CIE o CNS. Nella dashboard cerca &ldquo;Dichiarazione precompilata&rdquo; o &ldquo;730 precompilato&rdquo;.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Controlla i dati precompilati</strong>
                  <p>L&apos;Agenzia ha gi&agrave; inserito: redditi (dalla CU), spese sanitarie (dalla tessera sanitaria), interessi sul mutuo (dalla banca), premi assicurativi, contributi previdenziali. <strong>Controlla ogni voce</strong> &mdash; non fidarti ciecamente.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Aggiungi quello che manca</strong>
                  <p>Le spese che l&apos;Agenzia di solito <strong>non</strong> ha: affitto (se non comunicato dal proprietario), spese veterinarie, contributi colf/badanti, erogazioni liberali, spese funebri, bonus mobili. Se le aggiungi, il rimborso aumenta.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Verifica il risultato e invia</strong>
                  <p>Il sistema ti mostra se sei <strong>a credito</strong> (ricevi un rimborso) o <strong>a debito</strong> (devi pagare). Se &egrave; a credito, il rimborso arriva in busta paga o pensione entro 2-3 mesi dall&apos;invio.</p>
                </div>
              </div>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Come fare lo SPID</strong> &mdash; Ti serve per accedere al 730 precompilato. Gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          <div className="sec r" id="errori">
            <div className="sec-tag">Da controllare</div>
            <h2>Cosa controllare prima di inviare</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDFE5'}</div><div className="clb"><strong>Spese sanitarie</strong><span className="note">Verifica che ci siano tutte. Le spese pagate in contanti dal medico privato potrebbero mancare. Aggiungi manualmente con lo scontrino.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>Affitto</strong><span className="note">Se paghi un affitto con contratto registrato, la detrazione potrebbe non essere inserita. Aggiungila: vale fino a 495&euro; di rimborso.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Figli a carico</strong><span className="note">Controlla che i figli siano indicati correttamente e nella percentuale giusta (100% o 50%).</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE6'}</div><div className="clb"><strong>Conto corrente per il rimborso</strong><span className="note">Verifica che l&apos;IBAN sia corretto. Se manca, il rimborso viene trattenuto finch&eacute; non lo comunichi.</span></div></li>
            </ul>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Come Fare il 730</div><div className="rc-d">Guida completa: detrazioni, scadenze, rimborso.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/730/detrazioni-affitto" className="rc"><span className="rc-e">{'\uD83C\uDFE0'}</span><div className="rc-t">Detrazioni affitto nel 730</div><div className="rc-d">Quanto puoi recuperare e come inserirle.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Come fare lo SPID</div><div className="rc-d">Serve per accedere al precompilato.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
