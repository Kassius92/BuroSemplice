import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import Tip from '@/components/Tip';
import VersionToggle from '@/components/VersionToggle';
import SchemaOrg, { articleSchema, faqSchema, howToSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'Come Fare il Passaporto nel 2026: Costi, Documenti e Tempi',
  description: 'Passaporto 2026: come richiederlo online, costo 116\u20ac, documenti necessari, tempi, prenotazione in Questura e novit\u00e0 PagoPA. Guida gratuita passo per passo.',
  keywords: ["passaporto", "passaporto 2026", "come fare passaporto", "costo passaporto", "rinnovo passaporto", "passaporto elettronico", "prenotazione passaporto", "documenti passaporto", "passaporto online", "passaporto urgente"],
  alternates: { canonical: 'https://zeroburocrazia.it/passaporto' },
  openGraph: {
    type: 'article',
    title: 'Passaporto 2026: Come Richiederlo, Costi, Documenti e Tempi',
    description: 'Passaporto 2026: come richiederlo, costo 116\u20ac, documenti, tempi, prenotazione. Guida gratuita.',
    url: 'https://zeroburocrazia.it/passaporto',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogpassaporto.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogpassaporto.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos\u2019\u00e8" },
  { id: 'documenti', label: 'Documenti necessari' },
  { id: 'costi', label: 'Quanto costa', bh: true },
  { id: 'come', label: 'Come prenotare e richiederlo' },
  { id: 'tempi', label: 'Tempi e urgenze' },
  { id: 'minori', label: 'Passaporto per minori' },
  { id: 'esempio', label: 'Esempio pratico' },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Quanto costa il passaporto nel 2026?", a: "<strong>116,20\u20ac in totale:</strong> 42,70\u20ac di contributo amministrativo (pagamento via PagoPA dal 2026) + 73,50\u20ac di contrassegno telematico (marca da bollo, in tabaccheria). Pi\u00f9 le foto tessera (~5-10\u20ac). Se vuoi la consegna a domicilio: +9,53\u20ac." },
  { q: "Quanto tempo ci vuole per avere il passaporto?", a: "In condizioni normali, <strong>10-15 giorni lavorativi</strong> dalla presentazione della domanda. Nei periodi di punta (estate, Natale) pu\u00f2 allungarsi a 3-4 settimane. Il problema vero \u00e8 trovare l\u2019appuntamento: nelle grandi citt\u00e0 pu\u00f2 servire prenotare con mesi di anticipo." },
  { q: "Il passaporto si rinnova?", a: "<strong>No, dal 2014 non esiste pi\u00f9 il rinnovo.</strong> Quando scade (o viene smarrito/rubato), devi fare un passaporto nuovo da zero: stessa procedura, stessi costi, stessi documenti. L\u2019unica differenza: consegni il vecchio passaporto." },
  { q: "Posso prenotare l\u2019appuntamento per qualcun altro?", a: "S\u00ec. Puoi accedere al portale con il tuo SPID e in fase di prenotazione selezionare <strong>\u201caltro richiedente\u201d</strong>, inserendo i dati della persona che deve fare il passaporto. Utile per genitori, coniugi o familiari senza SPID." },
  { q: "Non trovo appuntamenti disponibili online, come faccio?", a: "Prova a collegarti <strong>nelle prime ore del mattino</strong> (6-8): \u00e8 quando vengono rilasciati i nuovi slot. Se hai urgenza documentata (biglietto aereo, motivi di lavoro/salute), puoi accedere all\u2019<strong>agenda prioritaria</strong> o presentarti direttamente in Questura con la documentazione." },
  { q: "Posso fare il passaporto in Posta?", a: "S\u00ec, dal 2024 con il <strong>Progetto Polis</strong>. Per ora il servizio \u00e8 disponibile nei comuni sotto 15.000 abitanti, ma si sta estendendo. Presenti i documenti all\u2019ufficio postale, la Questura lavora la pratica e il passaporto ti viene spedito o va ritirato in posta." },
  { q: "Serve il passaporto per viaggiare in Europa?", a: "<strong>No, per i Paesi UE basta la carta d\u2019identit\u00e0</strong> valida per l\u2019espatrio (CIE). Il passaporto serve per i Paesi extra-UE: USA, UK, Giappone, Australia, ecc. Attenzione: dal 3 agosto 2026 la carta cartacea non vale pi\u00f9 per l\u2019espatrio." },
  { q: "Il passaporto per i minori come funziona?", a: "Anche i <strong>minorenni devono avere un passaporto individuale</strong>. Servono entrambi i genitori presenti o l\u2019autorizzazione del giudice. Validit\u00e0: 3 anni (sotto i 3 anni), 5 anni (3-18 anni). Sotto i 14 anni devono viaggiare con un accompagnatore." },
];

export default function PaginaPassaporto() {
  const schemas = [
    articleSchema({
      title: 'Passaporto 2026: come richiederlo, costi, documenti e tempi',
      description: 'Come richiedere il passaporto nel 2026: prenotazione, documenti, costo 116\u20ac, tempi di rilascio e urgenze.',
      url: '/passaporto',
      image: 'ogpassaporto.png',
      datePublished: '2026-03-11',
      dateModified: '2026-03-11',
    }),
    faqSchema(faqItems),
    howToSchema({
      name: 'Come richiedere il passaporto italiano nel 2026',
      description: 'Procedura completa per richiedere il passaporto: prenotazione online, documenti, pagamento e ritiro.',
      totalTime: 'P30D',
      image: 'ogpassaporto.png',
      steps: [
        { name: 'Prenota l\'appuntamento online', text: 'Vai su passaportonline.poliziadistato.it, accedi con SPID o CIE, scegli la Questura, seleziona giorno e ora. Stampa la ricevuta.' },
        { name: 'Prepara documenti e pagamenti', text: 'Compra la marca da bollo da 73,50\u20ac in tabaccheria. Paga i 42,70\u20ac via PagoPA. Fai 2 fototessera formato ICAO. Compila il modulo di richiesta.' },
        { name: 'Presentati in Questura', text: 'Il giorno dell\'appuntamento consegna i documenti, rilascio delle impronte digitali e firma. Ricevi una ricevuta con il numero della pratica.' },
        { name: 'Ritira il passaporto', text: 'Dopo 10-15 giorni lavorativi ritiralo in Questura con la ricevuta, oppure ricevilo a casa con Passaporto a domicilio (9,53\u20ac extra).' },
      ],
    }),
  ];

  return (
    <div className="cat-documenti">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none"><circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/><line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/><line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/><circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/></svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">📄 Documenti e identit&agrave;</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Faccio il <em>passaporto</em></h1>
            <p className="hero-sub">Come richiedere il passaporto nel 2026: prenotazione online, documenti necessari, costo totale, tempi di rilascio e cosa fare se non trovi appuntamenti.</p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ 100% gratuita</span>
              <span className="pill pill-b">🕐 12 min di lettura</span>
              <span className="pill pill-o">💰 Costo totale: 116,20&euro;</span>
              <span className="pill pill-s">✓ Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Polizia di Stato &middot; Ministero Esteri &middot; Poste Italiane (Progetto Polis)</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">116&euro;</div><div className="hl">costo totale<br/>(contributo + marca da bollo)</div></div>
            <div className="hstat"><div className="hn">10-15</div><div className="hl">giorni lavorativi<br/>per il rilascio</div></div>
            <div className="hstat"><div className="hn">10</div><div className="hl">anni di validit&agrave;<br/>per i maggiorenni</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/cie" className="ps">🪪 Carta d&apos;identit&agrave; (CIE)</a>
              <a href="/spid" className="ps">🪪 Faccio lo SPID</a>
              <a href="/cambio-residenza" className="ps">📄 Cambio residenza</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://passaportonline.poliziadistato.it" target="_blank" rel="noopener noreferrer" className="ps">🏛 Prenota appuntamento</a>
              <a href="https://www.poliziadistato.it/articolo/il-rilascio" target="_blank" rel="noopener noreferrer" className="ps">📋 Polizia di Stato</a>
              <a href="https://www.viaggiaresicuri.it" target="_blank" rel="noopener noreferrer" className="ps">🌍 Viaggiare Sicuri</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">⚡ In sintesi</div>
              <div className="scards">
                <div className="sc tc-bg r d1"><div className="si">🛂</div><div className="sn">Passaporto</div><div className="sl">documento per viaggiare fuori dall&apos;UE</div></div>
                <div className="sc sg-bg r d2"><div className="si">💰</div><div className="sn">116,20&euro;</div><div className="sl">42,70 contributo + 73,50 marca da bollo</div></div>
                <div className="sc r d3"><div className="si">📅</div><div className="sn">10-15 gg</div><div className="sl">tempi di rilascio normali</div></div>
                <div className="sc r d1"><div className="si">📱</div><div className="sn">Online</div><div className="sl">prenotazione con SPID o CIE</div></div>
                <div className="sc bl-bg r d2"><div className="si">🏤</div><div className="sn">Anche in Posta</div><div className="sl">Progetto Polis nei comuni piccoli</div></div>
                <div className="sc r d3"><div className="si">⏱</div><div className="sn">10 anni</div><div className="sl">validit&agrave; per i maggiorenni</div></div>
              </div>
            </div>
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il passaporto e quando serve</h2>
            <p>Il passaporto &egrave; il documento che ti permette di viaggiare <strong>fuori dall&apos;Unione Europea</strong>. Dentro l&apos;UE basta la carta d&apos;identit&agrave; valida per l&apos;espatrio (<Link href="/cie">CIE</Link>), ma per il resto del mondo &mdash; USA, UK, Giappone, Thailandia, Australia &mdash; serve il passaporto.</p>
            <p>&Egrave; un libretto di <strong>48 pagine</strong> con un <Tip t="Un chip a radiofrequenza integrato nella copertina. Contiene i tuoi dati, la foto e le impronte digitali. Rende il passaporto molto difficile da falsificare.">microchip</Tip> nella copertina che contiene i tuoi dati biometrici (foto e impronte). Dal 2006 tutti i passaporti italiani sono elettronici.</p>
            <p>Attenzione: il passaporto <strong>non si &quot;rinnova&quot;</strong> pi&ugrave;. Quando scade, ne fai uno nuovo da zero. Stessa procedura, stessi costi.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>VALIDIT&Agrave; DEL PASSAPORTO</div>
              <div className="db-row"><span>Adulti (18+ anni)</span><span><strong>10 anni</strong></span></div>
              <div className="db-row"><span>Ragazzi (3-17 anni)</span><span><strong>5 anni</strong></span></div>
              <div className="db-row"><span>Bambini (0-3 anni)</span><span><strong>3 anni</strong></span></div>
              <div className="db-row db-total"><span>Over 70</span><span><strong>Illimitata</strong> (per la CIE, non per il passaporto)</span></div>
            </div>

            <div className="ib warn r" style={{ marginTop: '16px' }}><div className="ib-t">⚠️ Attenzione alla &quot;regola dei 6 mesi&quot;</div>
              <p>Molti Paesi (USA, Thailandia, Brasile, Indonesia e altri) richiedono che il passaporto sia valido per almeno <strong>6 mesi dalla data di ingresso</strong>. Se il tuo passaporto scade tra 5 mesi, potresti essere respinto alla frontiera anche se il documento &egrave; tecnicamente ancora valido. Controlla sempre i requisiti del Paese di destinazione su <strong>viaggiaresicuri.it</strong>.</p>
            </div>

            <div className="ib tip r"><div className="ib-t">📖 Parole che incontrerai in questa guida</div>
              <p><strong>Passaporto elettronico</strong> &mdash; l&apos;unico tipo rilasciato dal 2006. Ha il chip con dati biometrici.</p>
              <p><strong>Contributo amministrativo</strong> &mdash; i 42,70&euro; che paghi allo Stato per il rilascio. Dal 2026 si paga solo via PagoPA.</p>
              <p><strong>Contrassegno telematico</strong> &mdash; la &quot;marca da bollo&quot; da 73,50&euro;. Si compra in tabaccheria.</p>
              <p><strong>Agenda Passaporti</strong> &mdash; il portale della Polizia di Stato dove prenoti l&apos;appuntamento in Questura.</p>
              <p><strong>Progetto Polis</strong> &mdash; l&apos;iniziativa di Poste Italiane che permette di richiedere il passaporto negli uffici postali (per ora nei comuni sotto 15.000 abitanti).</p>
              <p><strong>ICAO</strong> &mdash; lo standard internazionale per le foto del passaporto: sfondo bianco, viso al 70%, niente occhiali da sole.</p>
            </div>
          </div>

          {/* DOCUMENTI */}
          <div className="sec r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti necessari</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Modulo di richiesta</strong> &mdash; lo scarichi dal portale Passaporto Online dopo la prenotazione, oppure lo trovi in Questura. Compilalo prima di andare.</div>
              <div className="gl-item"><strong>Documento di identit&agrave;</strong> &mdash; carta d&apos;identit&agrave; (CIE) o altro documento valido, in originale + fotocopia.</div>
              <div className="gl-item"><strong>2 fototessera</strong> &mdash; formato ICAO (35&times;45mm), recenti, sfondo bianco, viso frontale. Come quelle del passaporto precedente.</div>
              <div className="gl-item"><strong>Ricevuta pagamento 42,70&euro;</strong> &mdash; via PagoPA (in posta, online su poste.it, o con app). Causale: rilascio passaporto elettronico.</div>
              <div className="gl-item"><strong>Contrassegno telematico 73,50&euro;</strong> &mdash; la marca da bollo. Si compra in tabaccheria.</div>
              <div className="gl-item"><strong>Vecchio passaporto</strong> &mdash; se ne hai uno (scaduto, danneggiato). Se smarrito/rubato: denuncia alle forze dell&apos;ordine.</div>
            </div>
            <div className="ib warn r"><div className="ib-t">⚠️ Per i minorenni servono anche</div>
              <p><strong>Presenza di entrambi i genitori</strong> allo sportello (o autorizzazione del giudice tutelare se un genitore non pu&ograve;/non vuole). Assenso all&apos;espatrio firmato. Sotto i 12 anni non servono le impronte digitali.</p>
            </div>
          </div>

          {/* COSTI */}
          <div className="sec bh r" id="costi">
            <div className="sec-tag">I soldi</div>
            <h2>Quanto costa il passaporto nel 2026</h2>
            <div className="dblock">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>RIEPILOGO COSTI</div>
              <div className="dgrid">
                <div className="dcard"><div className="dcard-l">Contributo amministrativo</div><div className="dcard-v">42,70&euro; (via PagoPA)</div></div>
                <div className="dcard"><div className="dcard-l">Contrassegno telematico</div><div className="dcard-v">73,50&euro; (in tabaccheria)</div></div>
                <div className="dcard"><div className="dcard-l">Foto tessera (2 pezzi)</div><div className="dcard-v">~5-10&euro; (fotografo o cabina)</div></div>
                <div className="dcard"><div className="dcard-l">Consegna a domicilio (facolt.)</div><div className="dcard-v">9,53&euro; (Poste Italiane)</div></div>
              </div>
              <div className="dtotals" style={{ marginTop: '16px' }}>
                <div className="dt-col"><div className="dt-l" style={{ color: 'var(--blue)' }}>Totale minimo</div><div className="dt-n" style={{ color: 'var(--cream)' }}>~121&euro;</div></div>
                <div className="dt-col"><div className="dt-l" style={{ color: 'rgba(251,248,241,.5)' }}>Con spedizione a casa</div><div className="dt-n" style={{ color: 'var(--blue)' }}>~131&euro;</div></div>
              </div>
            </div>

            <div className="ib tip r" style={{ marginTop: '24px' }}><div className="ib-t">💡 Novit&agrave; 2026: pagamento solo PagoPA</div>
              <p>Dal 1&deg; dicembre 2025 i 42,70&euro; si pagano <strong>solo tramite PagoPA</strong>: in posta allo sportello, online su poste.it, con l&apos;app Poste, o tramite qualsiasi banca/PSP abilitato. I vecchi bollettini postali non sono pi&ugrave; accettati.</p>
            </div>
          </div>

          {/* COME PRENOTARE */}
          <div className="sec r" id="come">
            <div className="sec-tag">Procedura</div>
            <h2>Come prenotare e richiedere il passaporto</h2>

            <div className="steps">
              <div className="step r"><div className="step-n">1</div><div className="step-body"><div className="step-title">Prenota l&apos;appuntamento online</div><p>Vai su <strong>passaportonline.poliziadistato.it</strong>, accedi con SPID o CIE. Scegli la Questura o il Commissariato, seleziona giorno e ora. Stampa la ricevuta. Nei comuni piccoli puoi anche prenotare in ufficio postale (Progetto Polis).</p></div></div>
              <div className="step r"><div className="step-n">2</div><div className="step-body"><div className="step-title">Prepara i documenti e i pagamenti</div><p>Compra la <strong>marca da bollo da 73,50&euro;</strong> in tabaccheria. Paga i <strong>42,70&euro;</strong> via PagoPA (in posta o online). Fai le <strong>2 fototessera</strong>. Compila il modulo di richiesta. Porta tutto + documento di identit&agrave;.</p></div></div>
              <div className="step r"><div className="step-n">3</div><div className="step-body"><div className="step-title">Presentati in Questura</div><p>Il giorno dell&apos;appuntamento: consegna i documenti, rilascio delle <strong>impronte digitali</strong>, firma. Ti danno una ricevuta con il numero della pratica.</p></div></div>
              <div className="step r"><div className="step-n">4</div><div className="step-body"><div className="step-title">Ritira il passaporto</div><p>Dopo <strong>10-15 giorni lavorativi</strong> puoi ritirarlo in Questura (portando la ricevuta) oppure riceverlo a casa con &quot;Passaporto a domicilio&quot; (9,53&euro; extra, paghi al postino). Puoi delegare un&apos;altra persona per il ritiro.</p></div></div>
            </div>
          </div>

          {/* TEMPI */}
          <div className="sec r" id="tempi">
            <div className="sec-tag">Tempistiche</div>
            <h2>Tempi di rilascio e procedure d&apos;urgenza</h2>
            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>TEMPI REALI</div>
              <div className="db-row"><span>Trovare un appuntamento</span><span>Da 1 giorno a diversi mesi (citt&agrave; grandi)</span></div>
              <div className="db-row"><span>Rilascio dopo la domanda</span><span>10-15 giorni lavorativi</span></div>
              <div className="db-row"><span>Periodi di punta</span><span>Fino a 3-4 settimane</span></div>
              <div className="db-row db-total"><span>Consiglio</span><span>Prenota almeno 2-3 mesi prima del viaggio</span></div>
            </div>

            <div className="ib tip r" style={{ marginTop: '20px' }}><div className="ib-t">🚨 Procedure d&apos;urgenza</div>
              <p>Se parti entro pochi giorni e hai documentazione che lo prova (biglietto aereo, lettera del datore di lavoro, certificato medico), puoi accedere all&apos;<strong>Agenda Prioritaria</strong> sul portale o presentarti <strong>direttamente in Questura</strong> con i documenti di urgenza. La Questura valuter&agrave; caso per caso.</p>
            </div>
          </div>

          {/* MINORI */}
          <div className="sec r" id="minori">
            <div className="sec-tag">Bambini e ragazzi</div>
            <h2>Passaporto per minori (0-17 anni)</h2>
            <p>Dal 2012 ogni minore deve avere il <strong>proprio passaporto individuale</strong> &mdash; non &egrave; pi&ugrave; possibile iscrivere i figli nel passaporto del genitore. Ecco le regole specifiche:</p>

            <div className="glossary">
              <div className="gl-item"><strong>Validit&agrave; ridotta</strong> &mdash; 0-3 anni: vale <strong>3 anni</strong>. 3-18 anni: vale <strong>5 anni</strong>. Dai 18 in poi: 10 anni. Il motivo: i tratti del viso dei bambini cambiano rapidamente.</div>
              <div className="gl-item"><strong>Consenso di entrambi i genitori</strong> &mdash; servono le firme di <strong>mamma e pap&agrave;</strong> davanti al pubblico ufficiale. Se un genitore non pu&ograve; essere presente, deve firmare un atto di assenso con copia del documento, autenticato.</div>
              <div className="gl-item"><strong>Se un genitore non d&agrave; il consenso</strong> &mdash; ci si rivolge al <Tip t="Giudice tutelare: magistrato del Tribunale ordinario che decide sulle questioni relative ai minori, quando i genitori non sono d'accordo (es. rilascio passaporto, viaggi all'estero).">Giudice tutelare</Tip>, che pu&ograve; autorizzare il rilascio. &Egrave; una procedura non rapidissima: metti in conto alcune settimane.</div>
              <div className="gl-item"><strong>Costo</strong> &mdash; identico a quello degli adulti: 73,50&euro; marca da bollo + 42,70&euro; PagoPA = <strong>116,20&euro;</strong>.</div>
            </div>

            <div className="ib warn r"><div className="ib-t">⚠️ Minori che viaggiano con un solo genitore</div>
              <p>Se tuo figlio viaggia con te ma senza l&apos;altro genitore, &egrave; consigliato (e in alcuni Paesi <strong>richiesto</strong>) portare una <strong>dichiarazione di accompagnamento</strong> firmata dall&apos;altro genitore. Per i viaggi extra-UE, alcuni Paesi la richiedono tassativamente alla frontiera.</p>
            </div>
          </div>

          {/* RINNOVO E SMARRIMENTO */}
          <div className="sec r">
            <div className="sec-tag">Situazioni particolari</div>
            <h2>Rinnovo, smarrimento e furto</h2>
            <div className="glossary">
              <div className="gl-item"><strong>Passaporto scaduto</strong> &mdash; non si &quot;rinnova&quot;: si fa una <strong>nuova domanda</strong> da zero, come se fosse la prima volta. Stessi documenti, stessi costi (116,20&euro;). Il vecchio passaporto viene ritirato.</div>
              <div className="gl-item"><strong>Smarrimento</strong> &mdash; presenta <strong>denuncia di smarrimento</strong> alla Polizia o ai Carabinieri. Con la copia della denuncia, vai in Questura per richiedere un nuovo passaporto. Se lo smarrisci all&apos;estero, rivolgiti al Consolato italiano.</div>
              <div className="gl-item"><strong>Furto</strong> &mdash; stessa procedura dello smarrimento: denuncia di furto + nuova richiesta. Se il furto avviene all&apos;estero, il Consolato pu&ograve; rilasciare un <strong>documento di viaggio provvisorio</strong> (ETD) per rientrare in Italia.</div>
              <div className="gl-item"><strong>Pagine esaurite</strong> &mdash; se hai finito le pagine per i timbri, devi richiedere un nuovo passaporto. Non &egrave; possibile aggiungere pagine a quello esistente.</div>
            </div>
          </div>

          {/* ESEMPIO */}
          <div className="sec r" id="esempio">
            <div className="sec-tag">Esempio concreto</div>
            <h2>Esempio pratico: Francesco deve andare negli USA</h2>
            <p>Francesco, 30 anni, ha prenotato un volo per New York a giugno. Non ha il passaporto. Ecco come fa.</p>

            <div className="dark-block">
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>TIMELINE DI FRANCESCO</div>
              <div className="db-row"><span>Marzo</span><span>Prenota su passaportonline.poliziadistato.it</span></div>
              <div className="db-row"><span>Stessa settimana</span><span>Marca da bollo 73,50&euro; + pagamento PagoPA 42,70&euro; + foto</span></div>
              <div className="db-row"><span>Aprile (appuntamento)</span><span>Va in Questura con tutto, impronte e firma</span></div>
              <div className="db-row"><span>Dopo 12 giorni</span><span>Passaporto arriva a casa (ha scelto domicilio)</span></div>
              <div className="db-row"><span>Maggio</span><span>Richiede l&apos;ESTA online per gli USA</span></div>
              <div className="db-row db-total"><span>Giugno</span><span>Parte per New York ✓</span></div>
            </div>

            <div className="dark-block" style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(251,248,241,.5)', fontWeight: '600', marginBottom: '16px' }}>COSTI DI FRANCESCO</div>
              <div className="db-row"><span>Contributo PagoPA</span><span>42,70&euro;</span></div>
              <div className="db-row"><span>Marca da bollo</span><span>73,50&euro;</span></div>
              <div className="db-row"><span>Foto tessera (cabina)</span><span>6&euro;</span></div>
              <div className="db-row"><span>Spedizione a domicilio</span><span>9,53&euro;</span></div>
              <div className="db-row db-total"><span>Totale</span><span>131,73&euro;</span></div>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec r" id="errori">
            <div className="sec-tag">Attenzione</div>
            <h2>Errori comuni da evitare</h2>
            <div className="ib warn r"><div className="ib-t">❌ Aspettare l&apos;ultimo momento</div><p>Nelle grandi citt&agrave; (Roma, Milano, Napoli) trovare un appuntamento pu&ograve; richiedere <strong>mesi</strong>. Se hai un viaggio programmato, prenota subito &mdash; non a ridosso della partenza.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Presentarsi con il bollettino postale vecchio</div><p>Dal 2026 il pagamento dei 42,70&euro; si fa <strong>solo via PagoPA</strong>. Se arrivi con il vecchio bollettino compilato a mano, non te lo accettano e perdi l&apos;appuntamento.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Foto non conformi</div><p>Le foto devono rispettare lo standard ICAO: sfondo bianco, viso frontale al 70%, niente occhiali da sole, niente sorriso esagerato. Se le foto non vanno bene, la pratica viene bloccata.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Non portare il consenso dell&apos;altro genitore (per minori)</div><p>Se richiedi il passaporto per tuo figlio e l&apos;altro genitore non viene all&apos;appuntamento, devi portare il suo <strong>atto di assenso autenticato</strong> con copia del documento. Senza questa documentazione, la pratica viene rifiutata e dovrai prendere un nuovo appuntamento.</p></div>
            <div className="ib warn r"><div className="ib-t">❌ Non controllare la scadenza prima di prenotare il viaggio</div><p>Prenota il volo solo <strong>dopo aver verificato</strong> che il passaporto sia valido (e con almeno 6 mesi di margine per molti Paesi). Se &egrave; scaduto o in scadenza, avvia subito la pratica per il nuovo.</p></div>
          </div>

          {/* FAQ */}
          <div className="sec bh r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* RELATED */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/cie" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Carta d&apos;identit&agrave; (CIE)</div><div className="rc-d">Per viaggiare in UE basta la CIE.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc"><span className="rc-e">🪪</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per prenotare l&apos;appuntamento online.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cambio-residenza" className="rc"><span className="rc-e">📄</span><div className="rc-t">Cambio residenza</div><div className="rc-d">Il passaporto si richiede nella Questura di residenza.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>
        </main>

        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">🔗 Link utili</div>
            <a href="https://passaportonline.poliziadistato.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🏛</span><div><div className="sbtool-n">Prenota appuntamento</div><div className="sbtool-d">Agenda Passaporti online</div></div></a>
            <a href="https://www.poliziadistato.it/articolo/il-rilascio" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">📋</span><div><div className="sbtool-n">Polizia di Stato</div><div className="sbtool-d">Info ufficiali sul rilascio</div></div></a>
            <a href="https://www.viaggiaresicuri.it" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">🌍</span><div><div className="sbtool-n">Viaggiare Sicuri</div><div className="sbtool-d">Documenti per ogni Paese</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">📚 Guide correlate</div>
            <a href="/cie" className="sbguide">🪪 Carta d&apos;identit&agrave; (CIE)<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">🪪 Faccio lo SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/cambio-residenza" className="sbguide">📄 Cambio residenza<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer />
    </>
    </div>
  );
}
