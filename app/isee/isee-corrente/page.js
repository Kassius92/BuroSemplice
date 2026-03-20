import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare l\u2019ISEE Corrente nel 2026: Quando Serve e Procedura',
  description: 'ISEE corrente 2026: cos\u2019\u00e8, quando richiederlo, requisiti (calo reddito 25%), documenti e procedura al CAF o online. Guida pratica.',
  keywords: ['ISEE corrente', 'ISEE corrente 2026', 'come fare ISEE corrente', 'ISEE aggiornato', 'ISEE perdita lavoro', 'ISEE corrente requisiti'],
  alternates: { canonical: 'https://zeroburocrazia.it/isee/isee-corrente' },
  openGraph: {
    title: 'Come Fare l\u2019ISEE Corrente nel 2026: Quando Serve e Procedura',
    description: 'ISEE corrente 2026: quando richiederlo, requisiti e procedura.',
    url: 'https://zeroburocrazia.it/isee/isee-corrente',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogisee.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Quando conviene fare l\u2019ISEE corrente?", a: "Quando la tua situazione economica <strong>\u00e8 peggiorata rispetto a 2 anni fa</strong>: hai perso il lavoro, il reddito \u00e8 calato di almeno il 25%, hai perso un trattamento assistenziale. L\u2019ISEE ordinario usa i dati del 2024 \u2014 se nel 2026 la tua situazione \u00e8 molto diversa, l\u2019ISEE corrente la riflette meglio." },
  { q: "Quanto dura l\u2019ISEE corrente?", a: "<strong>6 mesi</strong> se aggiorna solo i redditi. <strong>2 mesi</strong> se aggiorna anche i patrimoni. Poi va rinnovato se le condizioni persistono." },
  { q: "L\u2019ISEE corrente sostituisce quello ordinario?", a: "<strong>S\u00ec</strong>, per il periodo di validit\u00e0. Viene usato al posto dell\u2019ISEE ordinario per tutte le prestazioni che lo richiedono (bonus, ADI, bonus bollette, ecc.)." },
  { q: "Posso fare l\u2019ISEE corrente online?", a: "S\u00ec, tramite il sito INPS con SPID. Per\u00f2 \u00e8 pi\u00f9 complesso dell\u2019ISEE ordinario perch\u00e9 devi dimostrare il calo di reddito con documenti. Il CAF \u00e8 la scelta pi\u00f9 sicura." },
  { q: "Serve prima l\u2019ISEE ordinario?", a: "<strong>S\u00ec.</strong> L\u2019ISEE corrente si basa sull\u2019ISEE ordinario gi\u00e0 in corso. Prima fai l\u2019ordinario, poi, se serve, richiedi il corrente." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Come Fare l\u2019ISEE Corrente nel 2026',
      description: 'ISEE corrente 2026: quando serve, requisiti e procedura.',
      url: '/isee/isee-corrente', image: 'ogisee.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
    howToSchema({
      name: 'Come fare l\u2019ISEE corrente nel 2026',
      description: 'Procedura per richiedere l\u2019ISEE corrente quando il reddito \u00e8 cambiato.',
      totalTime: 'PT45M', image: 'ogisee.png',
      steps: [
        { name: 'Verifica di avere l\u2019ISEE ordinario', text: 'L\u2019ISEE corrente si pu\u00f2 fare solo se hai gi\u00e0 un ISEE ordinario in corso di validit\u00e0. Se non ce l\u2019hai, fallo prima.' },
        { name: 'Verifica il requisito del calo', text: 'Il reddito deve essere calato di almeno il 25% rispetto a quello usato per l\u2019ISEE ordinario, oppure devi aver perso il lavoro o un trattamento assistenziale.' },
        { name: 'Raccogli i documenti', text: 'Ultima busta paga, lettera di licenziamento o cessazione contratto, estratto conto degli ultimi 2 mesi, documenti dei redditi attuali.' },
        { name: 'Presenta la richiesta al CAF o su INPS', text: 'Al CAF (gratis) o online su inps.it con SPID. Il CAF compila il modulo sostitutivo MS e lo invia all\u2019INPS.' },
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
              <a href="/isee" className="ps active">{'\uD83D\uDCCB'} Come Fare l&apos;ISEE</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/isee/isee-corrente" className="ps">{'\u26A1'} ISEE Corrente</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Come fare l&apos;ISEE <em>corrente</em> nel 2026</h1>

            <p>L&apos;ISEE ordinario usa i dati di <strong>2 anni fa</strong> (redditi e patrimoni del 2024). Ma se nel frattempo hai <strong>perso il lavoro, il reddito &egrave; crollato, o hai perso un trattamento assistenziale</strong>, quei numeri non riflettono pi&ugrave; la tua situazione reale.</p>

            <p>L&apos;ISEE corrente risolve questo problema: <strong>aggiorna i dati alla situazione attuale</strong> (ultimi 12 mesi per i redditi, ultimi 2 mesi per i patrimoni). Il risultato &egrave; un ISEE pi&ugrave; basso, che ti permette di accedere a bonus e agevolazioni che con l&apos;ordinario non avresti.</p>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Senza ISEE corrente perdi soldi &mdash; esempio concreto</div>
              <p>Mario nel 2024 guadagnava 30.000&euro;. Nel 2025 ha perso il lavoro e ora prende la NASpI (15.000&euro;). Il suo ISEE ordinario 2026 &egrave; calcolato sui redditi 2024 &rarr; risulta alto. Con l&apos;ISEE corrente usa i redditi attuali &rarr; <strong>l&apos;ISEE scende e Mario accede a bonus bollette, ADI, e riduzioni mensa</strong>. Senza ISEE corrente perde migliaia di euro di agevolazioni.</p>
            </div>
          </div>

          <div className="sec r" id="quando">
            <div className="sec-tag">Quando serve</div>
            <h2>Quando puoi richiederlo</h2>
            <p>L&apos;ISEE corrente si pu&ograve; fare quando si verifica <strong>almeno una</strong> di queste condizioni:</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCC9'}</div><div className="clb"><strong>Calo del reddito di almeno il 25%</strong><span className="note">Rispetto a quello usato per l&apos;ISEE ordinario (redditi 2024). Confronta il reddito attuale con quello di 2 anni fa.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCBC'}</div><div className="clb"><strong>Perdita del lavoro</strong><span className="note">Licenziamento, fine contratto, dimissioni per giusta causa. Serve documentazione (lettera, NASpI).</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u274C'}</div><div className="clb"><strong>Perdita di un trattamento assistenziale</strong><span className="note">Se hai perso un bonus, una pensione di invalidit&agrave; o un&apos;altra prestazione che contribuiva al reddito.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83D\uDCB0'}</div><div className="clb"><strong>Calo del patrimonio di almeno il 20%</strong><span className="note">In questo caso l&apos;ISEE corrente aggiorna anche i patrimoni (conti, investimenti). Dura solo 2 mesi.</span></div></li>
            </ul>
          </div>

          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come si fa</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Fai prima l&apos;ISEE ordinario</strong><p>L&apos;ISEE corrente &egrave; una &ldquo;correzione&rdquo; dell&apos;ordinario. Senza ordinario in corso, non puoi fare il corrente.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Raccogli i documenti</strong><p>Ultime buste paga, lettera di licenziamento o cessazione, NASpI, estratti conto degli ultimi 2 mesi, qualsiasi documento che prova il calo.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Vai al CAF (consigliato)</strong><p>Il CAF compila il Modulo Sostitutivo (MS) e lo invia all&apos;INPS. L&apos;ISEE corrente viene calcolato in pochi giorni. &Egrave; gratis.</p></div></div>
              <div className="step r d4"><div className="stepn">4</div><div className="stepb"><strong>Usalo per i bonus</strong><p>Una volta pronto, l&apos;ISEE corrente sostituisce l&apos;ordinario per tutte le prestazioni: bonus bollette, ADI, mensa scolastica, ecc.</p></div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Durata dell&apos;ISEE corrente</div>
              <p><strong>6 mesi</strong> se aggiorna solo i redditi. <strong>2 mesi</strong> se aggiorna anche i patrimoni. Alla scadenza, se la situazione non &egrave; migliorata, puoi rinnovarlo.</p>
            </div>

            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Come fare l&apos;ISEE ordinario</strong> &mdash; Serve come base per l&apos;ISEE corrente. Guida completa.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Come Fare l&apos;ISEE</div><div className="rc-d">Guida completa all&apos;ISEE ordinario.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/bonus-bollette" className="rc"><span className="rc-e">{'\uD83D\uDCA1'}</span><div className="rc-t">Bonus Bollette</div><div className="rc-d">Con ISEE corrente basso potresti averne diritto.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/naspi" className="rc"><span className="rc-e">{'\uD83D\uDCC9'}</span><div className="rc-t">NASpI</div><div className="rc-d">Se hai perso il lavoro, richiedi anche la disoccupazione.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
