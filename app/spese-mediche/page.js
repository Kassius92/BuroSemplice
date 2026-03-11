import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import VersionToggle from '@/components/VersionToggle';
import QuizSpeseMediche from '@/components/QuizSpeseMediche';
import Tip from '@/components/Tip';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Spese Mediche Detraibili 2026: Elenco Completo, Calcolo e Come Scaricarle nel 730',
  description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia 129,11\u20AC, farmaci, dentista, occhiali, fisioterapia. Come pagare, cosa conservare e quanto recuperi.',
  keywords: ["spese mediche detraibili", "detrazione spese mediche", "franchigia 129 euro", "spese mediche 730", "farmaci detraibili", "dentista detraibile", "occhiali detraibili", "pagamento tracciabile", "scontrino parlante", "spese mediche 2026"],
  alternates: { canonical: 'https://zeroburocrazia.it/spese-mediche' },
  openGraph: {
    title: 'Spese Mediche Detraibili 2026: Elenco, Calcolo e 730',
    description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia, farmaci, dentista, occhiali, fisioterapia. Guida gratuita.',
    url: 'https://zeroburocrazia.it/spese-mediche',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogspesemediche.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spese Mediche Detraibili 2026: Elenco Completo e 730',
    description: 'Elenco spese mediche detraibili, franchigia 129,11\u20AC, come pagare e quanto recuperi nel 730.',
    images: ['https://zeroburocrazia.it/ogspesemediche.png'],
  },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: 'Come funziona' },
  { id: 'elenco', label: 'Cosa si detrae' },
  { id: 'pagamento', label: 'Come pagare' },
  { id: 'documenti', label: 'Documenti' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Qual \u00E8 la franchigia sulle spese mediche?", a: "<strong>129,11\u20AC.</strong> La detrazione del 19% si calcola solo sulla parte che supera questa soglia. Se spendi 500\u20AC, la detrazione si calcola su 370,89\u20AC (= 70,47\u20AC di rimborso). Se spendi meno di 129,11\u20AC non recuperi nulla." },
  { q: "Posso detrarre le spese del dentista?", a: "<strong>S\u00EC</strong>, tutte le spese odontoiatriche finalizzate alla cura sono detraibili: carie, estrazioni, protesi, apparecchi ortodontici, impianti, pulizia dei denti. Non sono detraibili i trattamenti puramente estetici (es. sbiancamento). Serve fattura e pagamento tracciabile." },
  { q: "Posso pagare in contanti?", a: "Solo in alcuni casi. <strong>In contanti</strong> puoi pagare: farmaci in farmacia (con scontrino parlante) e prestazioni in strutture pubbliche o private accreditate SSN. <strong>Tutto il resto</strong> (visite private, dentista, fisioterapista, psicologo) deve essere pagato con carta, bonifico o assegno. Se paghi in contanti una visita privata, perdi la detrazione." },
  { q: "Gli occhiali da vista sono detraibili?", a: "<strong>S\u00EC.</strong> Occhiali da vista e lenti a contatto sono detraibili come dispositivi medici, purch\u00E9 abbiano la marcatura CE. Conserva lo scontrino o la fattura con il tuo codice fiscale. Anche la soluzione per lenti a contatto \u00E8 detraibile." },
  { q: "Le spese per lo psicologo sono detraibili?", a: "<strong>S\u00EC.</strong> Le prestazioni di psicologi e psicoterapeuti iscritti all\u2019albo sono detraibili al 19%. Serve fattura con pagamento tracciabile (carta, bonifico). Dal 2026 queste spese vengono precaricate nel 730." },
  { q: "Posso detrarre le spese mediche dei miei figli?", a: "<strong>S\u00EC</strong>, se sono fiscalmente a carico (reddito annuo sotto 2.840,51\u20AC, o sotto 4.000\u20AC se hanno meno di 24 anni). Le inserisci nel tuo 730 come se fossero spese tue." },
  { q: "Cosa sono gli integratori? Sono detraibili?", a: "<strong>No.</strong> Integratori alimentari, prodotti fitoterapici, colliri e pomate non sono farmaci e non sono detraibili. Nemmeno i prodotti omeopatici che non hanno classificazione come \u201Cmedicinale\u201D." },
  { q: "E se le spese superano i 15.493\u20AC?", a: "Se il totale delle spese mediche supera <strong>15.493,71\u20AC</strong> in un anno, puoi scegliere di spalmare la detrazione in 4 anni (4 rate uguali). \u00C8 utile se non hai abbastanza IRPEF da compensare tutto in un anno." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'Spese mediche detraibili 2026: elenco completo e come scaricarle nel 730',
      description: 'Guida completa alle spese mediche detraibili nel 730 2026: elenco, franchigia, come pagare, documenti e calcolo del rimborso.',
      url: '/spese-mediche',
      image: 'ogspesemediche.png',
      datePublished: '2026-03-09',
      dateModified: '2026-03-09',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco">
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
            <div className="cat-badge">{'\uD83D\uDCB0'} Fisco e soldi</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Spese mediche <em>detraibili</em></h1>
            <p className="hero-sub">Quali spese mediche puoi scaricare nel 730, come pagarle, cosa conservare e quanto recuperi. Spiegato semplice, con l&apos;elenco completo.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 8 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate &middot; TUIR art. 15 &middot; Legge di Bilancio 2026</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">19%</div><div className="hl">detrazione<br/>sulle spese mediche</div></div>
            <div className="hstat"><div className="hn">129&euro;</div><div className="hl">franchigia<br/>sotto cui non detrai</div></div>
            <div className="hstat"><div className="hn">{'\uD83D\uDCB3'}</div><div className="hl">pagamento tracciabile<br/>quasi sempre obbligatorio</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/730" className="ps">{'\uD83E\uDDFE'} Faccio il 730</a>
              <span className="ps ps-soon">{'\uD83C\uDFE5'} Esenzione ticket <span className="ps-tag">Presto</span></span>
              <span className="ps ps-soon">{'\uD83E\uDDE0'} Bonus psicologo <span className="ps-tag">Presto</span></span>
            </div>
          </div>

<div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/spese-sanitarie" target="_blank" rel="noopener noreferrer" className="ps">🏛 Agenzia Entrate</a>
              <a href="https://sistemats1.sanita.finanze.it/portale/spese-sanitarie-cittadini" target="_blank" rel="noopener noreferrer" className="ps">📋 Tessera sanitaria</a>
              <a href="https://www.salute.gov.it/" target="_blank" rel="noopener noreferrer" className="ps">🏥 Min. Salute</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">19%</div><div className="sl">di detrazione sulle spese mediche</div></div>
                <div className="sc r d2"><div className="si">{'\u2702\uFE0F'}</div><div className="sn">129,11&euro;</div><div className="sl">franchigia: sotto non detrai</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDCB3'}</div><div className="sn">Tracciabile</div><div className="sl">carta o bonifico (quasi sempre)</div></div>
                <div className="sc r d1"><div className="si">{'\uD83D\uDC8A'}</div><div className="sn">Farmaci</div><div className="sl">con scontrino parlante</div></div>
                <div className="sc r d2"><div className="si">{'\uD83E\uDE7A'}</div><div className="sn">Tutto</div><div className="sl">visite, esami, dentista, occhiali</div></div>
                <div className="sc r d3"><div className="si">{'\uD83D\uDCC4'}</div><div className="sn">730</div><div className="sl">si scaricano nella dichiarazione</div></div>
              </div>
            </div>
            <QuizSpeseMediche />
          </div>


          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Come funziona la detrazione (spiegato semplice)</h2>

            <p>Ogni volta che vai dal dottore, compri un farmaco, fai un esame o porti i bambini dal dentista, stai spendendo soldi per la salute. Lo Stato ti permette di <strong>recuperare il 19%</strong> di queste spese nella dichiarazione dei redditi. In pratica ti restituisce quasi un quinto di quello che hai speso.</p>

            <p>Per&ograve; c&apos;&egrave; una soglia minima: i primi <strong>129,11&euro;</strong> di spese mediche dell&apos;anno restano a carico tuo. La <Tip t="Il minimo che resta a tuo carico. La detrazione del 19% si calcola solo sulla parte che supera i 129,11&euro;. Se spendi 200&euro;, detrai il 19% di 70,89&euro; (= 13,47&euro;).">franchigia</Tip> funziona cos&igrave;: se in un anno spendi 500&euro; di spese mediche, la detrazione non si calcola su 500 ma su 370,89&euro; (500 meno 129,11). Il 19% di 370,89&euro; fa circa <strong>70&euro; di rimborso</strong>.</p>

            <p>Questo rimborso ti arriva come minor <Tip t="Imposta sul Reddito delle Persone Fisiche. &Egrave; la tassa principale che paghi sui tuoi guadagni. Le detrazioni riducono l'IRPEF che devi pagare.">IRPEF</Tip> da pagare oppure come soldi in pi&ugrave; nella busta paga di luglio, quando il tuo datore di lavoro fa il <Tip t="Il ricalcolo che il datore di lavoro fa a luglio dopo aver ricevuto il risultato del tuo 730. Se hai diritto a un rimborso, te lo mette direttamente in busta paga.">conguaglio</Tip> dopo il <a href="/730">730</a>.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Detrazione</strong> &mdash; Uno sconto diretto sulle tasse. Se hai 100&euro; di detrazione, paghi 100&euro; di <Tip t="Imposta sul Reddito delle Persone Fisiche. La tassa principale che paghi sullo stipendio o la pensione. Le aliquote nel 2026: 23% fino a 28.000&euro;, 33% fino a 50.000&euro;, 43% oltre.">IRPEF</Tip> in meno. Le spese mediche danno una detrazione del 19%.</div>
              <div className="gl-item r d2"><strong>Franchigia</strong> &mdash; I primi 129,11&euro; di spese mediche restano a tuo carico. La detrazione del 19% si calcola solo sulla parte che supera questa soglia.</div>
              <div className="gl-item r d3"><strong>Scontrino parlante</strong> &mdash; Lo scontrino della farmacia che riporta: natura del prodotto (&quot;farmaco&quot; o &quot;medicinale&quot;), il codice AIC e il tuo codice fiscale. Senza queste informazioni non puoi detrarre.</div>
              <div className="gl-item r d4"><strong>Pagamento tracciabile</strong> &mdash; Carta di credito, bancomat, carta prepagata, bonifico o assegno. Tutto tranne i contanti. Obbligatorio per quasi tutte le spese mediche private dal 2020.</div>
              <div className="gl-item r d1"><strong>Dispositivo medico</strong> &mdash; Un prodotto con marcatura CE usato a scopo medico: occhiali, lenti a contatto, misuratori di pressione, plantari, aerosol. Detraibile al 19%.</div>
              <div className="gl-item r d2"><strong>Quadro E</strong> &mdash; La sezione del 730 dove inserisci le spese detraibili. Le spese mediche vanno nei righi E1 ed E2.</div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Le spese mediche sono &quot;intoccabili&quot;</div>
              <p>A differenza di altre detrazioni, le spese mediche <strong>non sono soggette al tetto per i redditi alti</strong> introdotto dalla Legge di Bilancio 2025. Anche se guadagni pi&ugrave; di 75.000&euro;, puoi detrarle per intero. Unica eccezione a questa regola.</p>
            </div>
          </div>

          {/* ELENCO */}
          <div className="sec r" id="elenco">
            <div className="sec-tag">L&apos;elenco</div>
            <h2>Cosa puoi detrarre (elenco completo)</h2>

            <h3>{'\uD83D\uDC8A'} Farmaci e medicinali</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Farmaci con ricetta medica</strong><span className="note"><Tip t="Lo scontrino della farmacia che riporta: il tipo di prodotto ('farmaco'), il codice AIC del medicinale e il tuo codice fiscale. Senza queste tre informazioni non puoi detrarre.">Scontrino parlante</Tip> con codice fiscale. Pagamento anche in contanti</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Farmaci da banco (senza ricetta)</strong><span className="note">Scontrino parlante. Dal 2025: <strong>pagamento tracciabile obbligatorio</strong></span></div></li>
              <li className="cli r d3"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Farmaci omeopatici classificati come medicinali</strong><span className="note">Con dicitura &quot;omeopatico&quot; sullo scontrino</span></div></li>
              <li className="cli r d4"><div className="ci">{'\u274C'}</div><div className="clb"><strong>Integratori, parafarmaci, fitoterapici</strong><span className="note">NON detraibili &mdash; non sono farmaci</span></div></li>
            </ul>

            <h3>{'\uD83E\uDE7A'} Visite e prestazioni</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Visite mediche generiche e specialistiche</strong><span className="note">Anche omeopatiche. Fattura + pagamento tracciabile</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Esami diagnostici e analisi</strong><span className="note">Sangue, urine, ecografie, TAC, risonanze, radiografie</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Interventi chirurgici e ricoveri</strong><span className="note">Anche in day hospital</span></div></li>
              <li className="cli r d4"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Cure odontoiatriche</strong><span className="note">Carie, estrazioni, protesi, apparecchi, pulizia. No sbiancamento estetico</span></div></li>
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Fisioterapia, logopedia, riabilitazione</strong><span className="note">Da professionisti abilitati iscritti all&apos;albo</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Psicologo e psicoterapeuta</strong><span className="note">Iscritto all&apos;albo. Dal 2026 precaricato nel 730</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Ticket <Tip t="Servizio Sanitario Nazionale. Il sistema sanitario pubblico italiano. Le strutture SSN sono ospedali pubblici e cliniche private convenzionate con lo Stato.">SSN</Tip></strong><span className="note">Per visite, esami e pronto soccorso</span></div></li>
            </ul>

            <h3>{'\uD83D\uDC53'} Dispositivi medici</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Occhiali da vista e lenti a contatto</strong><span className="note">Con <Tip t="Conformit&agrave; Europea. Un marchio che certifica che il prodotto rispetta gli standard di sicurezza europei. Lo trovi stampato sulla confezione o sul prodotto stesso.">marcatura CE</Tip>. Anche la soluzione per lenti</span></div></li>
              <li className="cli r d2"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Apparecchi acustici, misuratori di pressione, aerosol</strong><span className="note">Con marcatura CE e scontrino/fattura</span></div></li>
              <li className="cli r d3"><div className="ci">{'\u2705'}</div><div className="clb"><strong>Plantari, protesi, ausili ortopedici</strong><span className="note">Su prescrizione medica</span></div></li>
            </ul>
          </div>

          {/* PAGAMENTO */}
          <div className="sec r" id="pagamento">
            <div className="sec-tag">Come pagare</div>
            <h2>La regola del pagamento tracciabile</h2>

            <p>Dal 2020 quasi tutte le spese mediche devono essere pagate con <Tip t="Carta di credito, bancomat, carta prepagata, bonifico bancario o postale, assegno. Tutto tranne i contanti. Serve per dimostrare che la spesa &egrave; reale.">metodo tracciabile</Tip> per poter essere detratte. Se paghi in contanti una visita privata, <strong>perdi la detrazione</strong>.</p>

            <div className="tbl-w r">
              <table className="tbl">
                <thead><tr><th>Tipo di spesa</th><th>Contanti</th><th>Carta/Bonifico</th></tr></thead>
                <tbody>
                  <tr><td>Farmaci con ricetta (farmacia)</td><td className="tg">{'\u2705'} S&igrave;</td><td>{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Farmaci da banco senza ricetta</td><td>{'\u274C'} No (dal 2025)</td><td className="tg">{'\u2705'} Obbligatorio</td></tr>
                  <tr><td>Visite in struttura pubblica/SSN</td><td className="tg">{'\u2705'} S&igrave;</td><td>{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Visite in struttura privata accreditata SSN</td><td className="tg">{'\u2705'} S&igrave;</td><td>{'\u2705'} S&igrave;</td></tr>
                  <tr><td>Visite in studio privato</td><td>{'\u274C'} Perdi detrazione</td><td className="tg">{'\u2705'} Obbligatorio</td></tr>
                  <tr><td>Dentista privato</td><td>{'\u274C'} Perdi detrazione</td><td className="tg">{'\u2705'} Obbligatorio</td></tr>
                  <tr><td>Fisioterapista/psicologo privato</td><td>{'\u274C'} Perdi detrazione</td><td className="tg">{'\u2705'} Obbligatorio</td></tr>
                  <tr><td>Occhiali e dispositivi medici</td><td>{'\u274C'} Perdi detrazione</td><td className="tg">{'\u2705'} Obbligatorio</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La regola semplice da ricordare</div>
              <p><strong>In farmacia</strong> puoi pagare in contanti i farmaci con ricetta. <strong>Tutto il resto</strong> (visite private, dentista, fisio, psicologo, occhiali) pagalo con la carta. Se hai dubbi, paga con carta &mdash; non sbagli mai.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Cosa conservare</div>
            <h2>Documenti da tenere</h2>
            <p>Per detrarre le spese mediche devi conservare la documentazione per <strong>5 anni</strong> dalla dichiarazione. Ecco cosa serve:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCDC'}</div><div className="clb"><strong>Scontrini parlanti</strong><span className="note">Per farmaci: devono avere codice fiscale, natura (&quot;farmaco&quot;) e <Tip t="Autorizzazione all'Immissione in Commercio. Un codice numerico che identifica in modo univoco ogni farmaco venduto in Italia. Lo trovi sullo scontrino della farmacia.">codice AIC</Tip></span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCC4'}</div><div className="clb"><strong>Fatture mediche</strong><span className="note">Di medici, dentisti, fisioterapisti, psicologi, laboratori, cliniche</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Ricevuta del pagamento tracciabile</strong><span className="note">Estratto conto, ricevuta bancomat, o annotazione in fattura da parte del medico</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE5'}</div><div className="clb"><strong>Ricevute del ticket SSN</strong><span className="note">Per visite, esami e pronto soccorso nelle strutture pubbliche</span></div></li>
            </ul>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Novit&agrave; 2026: molte spese sono gi&agrave; nel precompilato</div>
              <p>Farmacie, medici, ospedali e laboratori inviano i dati all&apos;Agenzia delle Entrate. Molte spese le trovi gi&agrave; nel <a href="/730">730 <Tip t="La versione del 730 gi&agrave; compilata dall'Agenzia delle Entrate con i dati che ha ricevuto da farmacie, medici, banche e datori di lavoro. Tu devi solo controllare e confermare (o integrare).">precompilato</Tip></a>. Ma <strong>controlla sempre</strong> che siano tutte &mdash; alcune potrebbero mancare (es. spese all&apos;estero, strutture non ancora collegate). Se accetti il precompilato senza modifiche, non ti chiedono i documenti. Se modifichi, tienili pronti.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Gli errori che fanno tutti</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Pagare in contanti il dentista</div><p>Il dentista privato non &egrave; una struttura <Tip t="Servizio Sanitario Nazionale. Il sistema pubblico. Ospedali pubblici e cliniche private convenzionate. Solo in queste strutture puoi pagare in contanti e detrarre lo stesso.">SSN</Tip>. Se lo paghi in contanti, <strong>perdi tutta la detrazione</strong>. Anche se hai la fattura perfetta. Serve il pagamento tracciabile. Questo errore costa centinaia di euro a migliaia di italiani ogni anno.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Detrarre gli integratori</div><p>Gli integratori alimentari (vitamine, omega-3, probiotici) <strong>non sono farmaci</strong> e non sono detraibili. Nemmeno se li ha prescritti il medico. Lo scontrino deve riportare &quot;farmaco&quot; o &quot;medicinale&quot;, non &quot;parafarmaco&quot; o &quot;integratore&quot;.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non controllare il precompilato</div><p>Il 730 precompilato contiene gi&agrave; molte spese mediche, ma <strong>non tutte</strong>. Spese all&apos;estero, strutture non ancora collegate, farmaci online: possono mancare. Se non le aggiungi, perdi la detrazione.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Buttare gli scontrini</div><p>L&apos;Agenzia delle Entrate pu&ograve; chiederti i documenti fino a <strong>5 anni dopo</strong>. Se non ce li hai, ti revocano la detrazione e devi restituire i soldi + interessi. Conserva tutto in una busta anno per anno.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Giulia recupera 319&euro;</h2>

            <p><strong>Giulia ha 34 anni</strong>, vive a Verona e lavora come impiegata (RAL 28.000&euro;). Nel 2025 ha avuto queste spese mediche:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDC8A'}</div><div className="clb"><strong>Farmaci</strong><span className="note">340&euro; tra ricette e farmaci da banco</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83E\uDDB7'}</div><div className="clb"><strong>Dentista</strong><span className="note">Otturazione + pulizia: 480&euro;</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDC53'}</div><div className="clb"><strong>Occhiali da vista</strong><span className="note">Montatura + lenti: 320&euro;</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83E\uDDD1\u200D\u2695\uFE0F'}</div><div className="clb"><strong>Visita dermatologica privata</strong><span className="note">Pagata con carta: 120&euro;</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83E\uDDE0'}</div><div className="clb"><strong>Psicologa (10 sedute)</strong><span className="note">Pagata con bonifico: 550&euro;</span></div></li>
            </ul>

            <h3>Il calcolo</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Totale spese mediche 2025</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">1.810&euro;</span></div>
              <div className="db-row"><span className="db-label">Franchigia</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">-129,11&euro;</span></div>
              <div className="db-row"><span className="db-label">Base detraibile</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">1.680,89&euro;</span></div>
              <div className="db-row"><span className="db-label">Detrazione 19%</span><span className="db-old"></span><span className="db-arrow"></span><span className="db-new">319,37&euro;</span></div>
              <div className="db-row db-total"><span className="db-label">Rimborso in busta paga (luglio)</span><span className="db-val">+319&euro;</span></div>
            </div>

            <p>Giulia riceve <strong>319&euro; in pi&ugrave; nella busta paga di luglio</strong>. Tutto perch&eacute; ha conservato scontrini e fatture e ha pagato con la carta. Se avesse pagato il dentista in contanti (480&euro;), avrebbe perso 91&euro; di detrazione solo su quella voce.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Paga sempre con carta le spese mediche private, conserva tutto, e controlla il precompilato ad aprile. In media gli italiani recuperano <strong>200-400&euro; all&apos;anno</strong> solo di spese mediche. Non sono cifre enormi, ma sono soldi tuoi che lo Stato ti restituisce &mdash; purch&eacute; tu li chieda.</p>
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
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Le spese mediche si scaricano nel 730. Guida completa.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">Con ISEE basso puoi ottenere l&apos;esenzione dal ticket sanitario.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83E\uDEAA'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Ti serve per accedere al 730 precompilato e verificare le spese.</div><span className="rc-ar">{'\u2192'}</span></a>
            </div>
          </div>


        </main>

        <aside className="aside">
          <SidebarToggle />
                    <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/spese-sanitarie" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Agenzia Entrate</div><div className="sbtool-d">Spese sanitarie detraibili</div></div></a>
            <a href="https://sistemats1.sanita.finanze.it/portale/spese-sanitarie-cittadini" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Tessera sanitaria</div><div className="sbtool-d">Consulta le tue spese mediche</div></div></a>
            <a href="https://www.salute.gov.it/" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏥</span><div><div className="sbtool-n">Min. Salute</div><div className="sbtool-d">Informazioni ufficiali</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} Faccio il 730<span className="sbg-ar">{'\u2192'}</span></a>
            <span className="sbguide sbguide-soon">{'\uD83C\uDFE5'} Esenzione ticket<span className="sbg-soon">Presto</span></span>
            <span className="sbguide sbguide-soon">{'\uD83E\uDDE0'} Bonus psicologo<span className="sbg-soon">Presto</span></span>
          </div>
        </aside>
      </div>

      <BrevoForm pageName="spese-mediche" />
      <Footer variant="scheda" />
    </>
    </div>
  );
}
