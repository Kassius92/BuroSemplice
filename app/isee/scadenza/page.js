import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Quando Scade l\u2019ISEE nel 2026 e Come Rinnovarlo: Guida Rapida',
  description: 'ISEE scadenza 2026: quando scade, come rinnovarlo, cosa succede se non lo rinnovi. Procedura CAF e online, documenti e tempistiche.',
  keywords: ['ISEE scadenza', 'ISEE scadenza 2026', 'quando scade ISEE', 'rinnovo ISEE', 'ISEE scaduto', 'ISEE 31 dicembre', 'rinnovare ISEE'],
  alternates: { canonical: 'https://zeroburocrazia.it/isee/scadenza' },
  openGraph: {
    title: 'Quando Scade l\u2019ISEE nel 2026 e Come Rinnovarlo',
    description: 'ISEE scadenza 2026: quando scade, come rinnovarlo, documenti e procedura.',
    url: 'https://zeroburocrazia.it/isee/scadenza',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogisee.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "Quando scade l\u2019ISEE?", a: "L\u2019ISEE ordinario scade il <strong>31 dicembre</strong> di ogni anno. Quello fatto nel 2026 (con redditi e patrimoni 2024) vale fino al 31 dicembre 2026. Dal 1\u00b0 gennaio 2027 serve un nuovo ISEE." },
  { q: "Se l\u2019ISEE scade perdo i bonus?", a: "<strong>Dipende dal bonus.</strong> L\u2019assegno unico continua con l\u2019importo minimo in attesa del rinnovo. Il bonus bollette si sospende finch\u00e9 non rinnovi. L\u2019ADI richiede un ISEE valido: senza, il pagamento si blocca." },
  { q: "Posso fare l\u2019ISEE a gennaio per tutto l\u2019anno?", a: "<strong>S\u00ec.</strong> Puoi fare l\u2019ISEE dal 1\u00b0 gennaio e vale fino al 31 dicembre dello stesso anno. Prima lo fai, prima accedi ai bonus. Non c\u2019\u00e8 motivo di aspettare." },
  { q: "Quanto tempo ci vuole per rinnovare l\u2019ISEE?", a: "Al CAF: <strong>15-20 minuti</strong> di appuntamento, poi l\u2019attestazione INPS arriva in <strong>4-10 giorni lavorativi</strong>. Online su INPS: l\u2019attestazione arriva in 4-10 giorni." },
  { q: "Devo portare gli stessi documenti dell\u2019anno scorso?", a: "No, i documenti devono essere <strong>aggiornati</strong>: giacenza media e saldo al 31/12/2024 (non 2023), patrimonio immobiliare aggiornato, eventuali nuovi redditi. Il CAF ti d\u00e0 la lista esatta." },
  { q: "L\u2019ISEE corrente ha una scadenza diversa?", a: "<strong>S\u00ec.</strong> L\u2019ISEE corrente dura 6 mesi (solo redditi) o 2 mesi (anche patrimoni). Alla scadenza va rinnovato separatamente dall\u2019ordinario." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Quando Scade l\u2019ISEE nel 2026 e Come Rinnovarlo',
      description: 'ISEE scadenza e rinnovo: date, procedura e cosa succede ai bonus.',
      url: '/isee/scadenza', image: 'ogisee.png',
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
              <a href="/isee" className="ps active">{'\uD83D\uDCCB'} Come Fare l&apos;ISEE</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/isee/scadenza" className="ps">{'\uD83D\uDCC5'} Scadenza e rinnovo</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>Quando scade l&apos;ISEE e come <em>rinnovarlo</em></h1>

            <p>L&apos;ISEE <strong>scade il 31 dicembre</strong> di ogni anno. Quello che fai nel 2026 vale fino al 31/12/2026. Dal 1&deg; gennaio 2027 serve un ISEE nuovo, con i dati aggiornati (redditi e patrimoni 2025).</p>

            <p>Se non lo rinnovi in tempo, i bonus che dipendono dall&apos;ISEE <strong>si bloccano o si riducono</strong>. L&apos;assegno unico scende al minimo, il bonus bollette si sospende, l&apos;ADI non viene pagato.</p>
          </div>

          <div className="sec r" id="scadenze">
            <div className="sec-tag">Date chiave</div>
            <h2>Calendario ISEE 2026</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Data</th><th>Cosa succede</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv cfr">1&deg; gennaio 2026</td><td><strong>L&apos;ISEE 2025 scade.</strong> Puoi gi&agrave; fare il nuovo ISEE 2026.</td></tr>
                  <tr><td className="cv">Entro 28 febbraio</td><td>Consigliato rinnovare per non perdere mensilit&agrave; di bonus.</td></tr>
                  <tr><td className="cv">1&deg; marzo</td><td>L&apos;assegno unico di marzo viene calcolato con l&apos;ISEE in corso. Senza ISEE &rarr; importo minimo.</td></tr>
                  <tr><td className="cv">30 giugno</td><td>Chi rinnova entro questa data recupera le mensilit&agrave; arretrate dell&apos;assegno unico con conguaglio.</td></tr>
                  <tr><td className="cv">31 dicembre 2026</td><td><strong>Scade l&apos;ISEE 2026.</strong> Tutto ricomincia.</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Non aspettare giugno</div>
              <p>Se rinnovi l&apos;ISEE dopo il 30 giugno, <strong>perdi i mesi arretrati</strong> dell&apos;assegno unico con importo pieno. L&apos;INPS fa il conguaglio solo fino a giugno. Fallo a gennaio e non ci pensi pi&ugrave;.</p>
            </div>
          </div>

          <div className="sec r" id="bonus">
            <div className="sec-tag">Cosa succede ai bonus</div>
            <h2>Se non rinnovi l&apos;ISEE</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC76'}</div><div className="clb"><strong>Assegno unico</strong><span className="note">Continua ma scende all&apos;importo minimo (57&euro;/figlio). Se rinnovi entro giugno, recuperi la differenza con conguaglio.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCA1'}</div><div className="clb"><strong>Bonus bollette</strong><span className="note">Si sospende. Lo sconto non viene applicato finch&eacute; non presenti un ISEE valido.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83E\uDD1D'}</div><div className="clb"><strong>Assegno di Inclusione (ADI)</strong><span className="note">Il pagamento si blocca. Devi rinnovare l&apos;ISEE e, se necessario, ripresentare la domanda.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDF93'}</div><div className="clb"><strong>Bonus nido e agevolazioni universit&agrave;</strong><span className="note">Non puoi fare domanda senza ISEE valido. Le graduatorie usano l&apos;ISEE in corso.</span></div></li>
            </ul>
          </div>

          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come rinnovare l&apos;ISEE</h2>
            <div className="steps r">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Raccogli i documenti aggiornati</strong><p>Giacenza media e saldo al 31/12/2024 di tutti i conti (chiedi alla banca), patrimonio immobiliare, eventuali redditi diversi dalla CU, targa veicoli.</p></div></div>
              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Vai al CAF o fallo online</strong><p>Al CAF &egrave; gratis e ci mettono 15-20 minuti. Online: accedi su inps.it con SPID, compila la DSU (Dichiarazione Sostitutiva Unica).</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Aspetta l&apos;attestazione INPS</strong><p>L&apos;INPS calcola l&apos;ISEE e rilascia l&apos;attestazione in <strong>4-10 giorni lavorativi</strong>. La trovi nel tuo cassetto INPS online.</p></div></div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p>Fai l&apos;ISEE <strong>nella prima settimana di gennaio</strong>. Costa zero, ci metti 20 minuti al CAF, e non rischi di perdere neanche un mese di bonus. Poi non ci pensi pi&ugrave; per tutto l&apos;anno.</p>
            </div>

            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Come fare l&apos;ISEE</strong> &mdash; Guida completa con tutti i documenti necessari.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Come Fare l&apos;ISEE</div><div className="rc-d">Guida completa: documenti, costi e simulazione.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/isee/isee-corrente" className="rc"><span className="rc-e">{'\u26A1'}</span><div className="rc-t">ISEE Corrente</div><div className="rc-d">Se il reddito &egrave; cambiato rispetto a 2 anni fa.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/assegno-unico" className="rc"><span className="rc-e">{'\uD83D\uDC68\u200D\uD83D\uDC67'}</span><div className="rc-t">Assegno Unico</div><div className="rc-d">L&apos;ISEE determina l&apos;importo per figlio.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
