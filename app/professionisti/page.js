import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';

export const metadata = {
  title: 'Per Professionisti — Ricevi Clienti Qualificati | ZeroBurocrazia',
  description: 'Sei un commercialista, CAF, patronato, broker o consulente? ZeroBurocrazia ti manda clienti già informati nella tua zona. Paghi solo per i contatti ricevuti.',
  alternates: { canonical: 'https://zeroburocrazia.it/professionisti' },
  openGraph: {
    title: 'Per Professionisti — Ricevi Clienti Qualificati | ZeroBurocrazia',
    description: 'Sei un commercialista, CAF, patronato, broker o consulente? ZeroBurocrazia ti manda clienti già informati nella tua zona. Paghi solo per i contatti ricevuti.',
    url: 'https://zeroburocrazia.it/professionisti',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
  },
};

export default function ProfessionistiPage() {
  return (
    <>
      <Nav variant="scheda" />

      <section className="hero" style={{ minHeight: 'auto', paddingTop: '130px', paddingBottom: '60px' }}>
        <div className="hero-mesh"></div>
        <div className="hero-c" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
          <div className="hero-left" style={{ maxWidth: '700px' }}>
            <div className="hero-tag"><span className="tag-dot"></span> Per professionisti</div>
            <h1>Clienti già informati.<br />Nella <em>tua</em> zona.</h1>
            <p className="hero-sub">
              Ogni mese migliaia di italiani leggono le nostre guide su 730, ISEE, partita IVA, mutui, ristrutturazioni.
              Quando decidono che gli serve un professionista, li mettiamo in contatto con te.
            </p>
            <div className="hero-pills">
              <span className="pill pill-g">✦ Zero abbonamenti</span>
              <span className="pill pill-b">📍 Filtrati per zona</span>
              <span className="pill pill-o">🎯 Già informati sulla pratica</span>
            </div>
          </div>
        </div>
      </section>

      <div className="layout">
        <main className="main" style={{ maxWidth: '760px', margin: '0 auto' }}>

          <div className="sec r" style={{ marginTop: '40px' }}>
            <div className="sec-tag">Il problema</div>
            <h2>Acquisire clienti è costoso</h2>
            <p>Se sei un commercialista, un CAF o un broker, lo sai: il passaparola è lento, Google Ads costa troppo, e le piattaforme di lead generation ti vendono contatti freddi che non convertono.</p>
            <p>Noi facciamo una cosa diversa. <strong>Non vendiamo lead freddi.</strong> Ti mandiamo persone che hanno già letto una guida completa, hanno capito cosa gli serve, e hanno chiesto di essere contattate da un professionista nella loro zona.</p>
          </div>

          <div className="sec r">
            <div className="sec-tag">Come funziona</div>
            <h2>Tre passi</h2>
            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Ti registri gratis</strong>
                  <p>Ci dici che tipo di professionista sei, in quale zona operi, e per quali pratiche vuoi ricevere contatti.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Ricevi contatti qualificati</strong>
                  <p>Quando una persona nella tua zona chiede aiuto per una pratica che tratti, ti mandiamo il suo contatto con CAP e tipo di richiesta.</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Paghi solo per i contatti ricevuti</strong>
                  <p>Nessun abbonamento, nessun costo fisso. Paghi una tariffa fissa per ogni contatto. Se non ricevi contatti, non paghi nulla.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sec r">
            <div className="sec-tag">Per chi</div>
            <h2>A chi ci rivolgiamo</h2>
            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">🧾</div><div className="uc-n">Commercialisti</div><div className="uc-d">730, partita IVA, consulenza fiscale</div></div>
              <div className="uc r d2"><div className="uc-e">📋</div><div className="uc-n">CAF e Patronati</div><div className="uc-d">ISEE, 730, NASpI, bonus</div></div>
              <div className="uc r d3"><div className="uc-e">🏦</div><div className="uc-n">Broker mutui</div><div className="uc-d">Mutui prima casa, surroga</div></div>
              <div className="uc r d4"><div className="uc-e">🔨</div><div className="uc-n">Imprese edili</div><div className="uc-d">Ristrutturazioni, bonus edilizi</div></div>
              <div className="uc r d1"><div className="uc-e">📝</div><div className="uc-n">Notai</div><div className="uc-d">Compravendite, successioni</div></div>
              <div className="uc r d2"><div className="uc-e">⚖️</div><div className="uc-n">Consulenti del lavoro</div><div className="uc-d">Dimissioni, TFR, assunzioni</div></div>
            </div>
          </div>

          <div className="sec r">
            <div className="sec-tag">Perché funziona</div>
            <h2>Il vantaggio per te</h2>
            <div className="ib tip r"><div className="ib-t">💡 Clienti già educati</div><p>La persona ha già letto la nostra guida. Sa cosa le serve, quali documenti preparare, quanto costa il servizio. Non devi spiegarle tutto da zero.</p></div>
            <div className="ib mon r"><div className="ib-t">💶 Zero rischio</div><p>Nessun abbonamento mensile, nessun costo fisso. Se non ricevi contatti, non spendi un euro. Paghi solo per quello che ottieni.</p></div>
            <div className="ib tip r"><div className="ib-t">💡 Filtrati per zona</div><p>Ricevi solo contatti di persone che hanno inserito un CAP nella tua area di competenza. Niente perditempo da altre città.</p></div>
          </div>

          <div className="ctab r">
            <h3>Vuoi ricevere clienti qualificati?</h3>
            <p>Compila il form qui sotto. Ti ricontattiamo entro 24 ore per attivare il tuo profilo — gratis e senza impegno.</p>
            <a href="mailto:info@zeroburocrazia.it?subject=Registrazione%20professionista&body=Ciao%2C%20sono%20un%20professionista%20e%20vorrei%20ricevere%20clienti%20tramite%20ZeroBurocrazia.%0A%0ANome%3A%0ATipo%20(commercialista%2C%20CAF%2C%20broker...)%3A%0AZona%3A%0ATelefono%3A" className="btnc">Registrati come professionista →</a>
          </div>

        </main>
      </div>

      <Footer variant="utility" />
    </>
  );
}
