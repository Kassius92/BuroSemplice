import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import GuideClient from './Guide730Client';

export const metadata = {
  title: 'Come Scaricare le Spese Mediche nel 730: Elenco 2026, Calcolo e Detrazione',
  description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia 129,11\u20AC, farmaci, dentista, occhiali, fisioterapia. Come pagare, cosa conservare e quanto recuperi.',
  keywords: ['spese mediche detraibili','detrazione spese mediche','franchigia 129 euro','spese mediche 730','farmaci detraibili','dentista detraibile','occhiali detraibili','pagamento tracciabile','scontrino parlante','spese mediche 2026'],
  alternates: { canonical: 'https://zeroburocrazia.it/spese-mediche' },
  openGraph: { title: 'Spese Mediche Detraibili 2026: Elenco, Calcolo e 730', description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia, farmaci, dentista, occhiali, fisioterapia. Guida gratuita.', url: 'https://zeroburocrazia.it/spese-mediche', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogspesemediche.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogspesemediche.png'] },
};

const faqItems = [
  { q: "Qual \u00e8 la franchigia sulle spese mediche?", a: "<strong>129,11\u20AC.</strong> La detrazione del 19% si calcola solo sulla parte che supera questa soglia. Se spendi 500\u20AC, la detrazione si calcola su 370,89\u20AC (= 70,47\u20AC di rimborso). Se spendi meno di 129,11\u20AC non recuperi nulla." },
  { q: "Posso detrarre le spese del dentista?", a: "<strong>S\u00ec</strong>, tutte le spese odontoiatriche finalizzate alla cura sono detraibili: carie, estrazioni, protesi, apparecchi ortodontici, impianti, pulizia dei denti. Non sono detraibili i trattamenti puramente estetici (es. sbiancamento). Serve fattura e pagamento tracciabile." },
  { q: "Posso pagare in contanti?", a: "Solo in alcuni casi. <strong>In contanti</strong> puoi pagare: farmaci in farmacia (con scontrino parlante) e prestazioni in strutture pubbliche o private accreditate SSN. <strong>Tutto il resto</strong> (visite private, dentista, fisioterapista, psicologo) deve essere pagato con carta, bonifico o assegno. Se paghi in contanti una visita privata, perdi la detrazione." },
  { q: "Gli occhiali da vista sono detraibili?", a: "<strong>S\u00ec.</strong> Occhiali da vista e lenti a contatto sono detraibili come dispositivi medici, purch\u00e9 abbiano la marcatura CE. Conserva lo scontrino o la fattura con il tuo codice fiscale. Anche la soluzione per lenti a contatto \u00e8 detraibile." },
  { q: "Le spese per lo psicologo sono detraibili?", a: "<strong>S\u00ec.</strong> Le prestazioni di psicologi e psicoterapeuti iscritti all\u2019albo sono detraibili al 19%. Serve fattura con pagamento tracciabile (carta, bonifico). Dal 2026 queste spese vengono precaricate nel 730." },
  { q: "Posso detrarre le spese mediche dei miei figli?", a: "<strong>S\u00ec</strong>, se sono fiscalmente a carico (reddito annuo sotto 2.840,51\u20AC, o sotto 4.000\u20AC se hanno meno di 24 anni). Le inserisci nel tuo 730 come se fossero spese tue." },
  { q: "Cosa sono gli integratori? Sono detraibili?", a: "<strong>No.</strong> Integratori alimentari, prodotti fitoterapici e pomate non sono farmaci e non sono detraibili. Lo scontrino deve riportare \u201cfarmaco\u201d o \u201cmedicinale\u201d, non \u201cparafarmaco\u201d o \u201cintegratore\u201d." },
  { q: "E se le spese superano i 15.493\u20AC?", a: "Se il totale delle spese mediche supera <strong>15.493,71\u20AC</strong> in un anno, puoi scegliere di spalmare la detrazione in 4 anni (4 rate uguali). \u00c8 utile se non hai abbastanza IRPEF da compensare tutto in un anno." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Spese mediche detraibili 2026: elenco completo e come scaricarle nel 730', description: 'Guida completa alle spese mediche detraibili nel 730 2026: elenco, franchigia, come pagare, documenti e calcolo del rimborso.', url: '/spese-mediche', image: 'ogspesemediche.png', datePublished: '2026-03-09', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="v8">
      <SchemaOrg schemas={schemas} />
      <GuideClient />
      <NavV8 />

      <section className="v8-ghero" id="hero" style={{'--glow1':'rgba(45,138,110,.06)'}}>
        <div className="v8-ghero-inner">
          <div className="v8-ghero-cat fisco rv">Fisco &middot; Aggiornato marzo 2026</div>
          <h1 className="rv rv-d1">Spese mediche <em>detraibili</em></h1>
          <p className="v8-ghero-sub rv rv-d2">Quali spese puoi scaricare nel 730, come pagarle, cosa conservare e quanto recuperi. Con l&apos;elenco completo di farmaci, dentista, occhiali e fisioterapia.</p>
          <div className="v8-ghero-nums">
            <div className="v8-ghero-num rv-scale rv-d1"><strong>19%</strong><span>detrazione sulle spese</span></div>
            <div className="v8-ghero-num rv-scale rv-d2"><strong>129&euro;</strong><span>franchigia minima</span></div>
            <div className="v8-ghero-num rv-scale rv-d3"><strong>Carta</strong><span>quasi sempre obbligatoria</span></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="cose">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Come funziona <em>la detrazione</em></h2></div>
          <div className="v8-prose rv">
            <p>Ogni volta che vai dal dottore, compri un farmaco, fai un esame o porti i bambini dal dentista, stai spendendo soldi per la salute. Lo Stato ti permette di <strong>recuperare il 19%</strong> di queste spese nella dichiarazione dei redditi. In pratica ti restituisce quasi un quinto di quello che hai speso.</p>
            <p>Per&ograve; c&apos;&egrave; una soglia minima: i primi <strong>129,11&euro;</strong> di spese mediche dell&apos;anno restano a carico tuo. La <Tip t="Il minimo che resta a tuo carico. La detrazione del 19% si calcola solo sulla parte che supera i 129,11&euro;. Se spendi 200&euro;, detrai il 19% di 70,89&euro; (= 13,47&euro;).">franchigia</Tip> funziona cos&igrave;: se in un anno spendi 500&euro; di spese mediche, la detrazione non si calcola su 500 ma su 370,89&euro; (500 meno 129,11). Il 19% di 370,89&euro; fa circa <strong>70&euro; di rimborso</strong>.</p>
            <p>Questo rimborso ti arriva come minor <Tip t="Imposta sul Reddito delle Persone Fisiche. La tassa principale che paghi sui tuoi guadagni. Le detrazioni riducono l&apos;IRPEF che devi pagare.">IRPEF</Tip> da pagare oppure come soldi in pi&ugrave; nella busta paga di luglio, quando il datore fa il <Tip t="Il ricalcolo che il datore fa a luglio dopo aver ricevuto il risultato del tuo 730. Se hai diritto a un rimborso, te lo mette direttamente in busta paga.">conguaglio</Tip> dopo il <a href="/730">730</a>.</p>

            <div className="v8-info tip" style={{maxWidth:'700px',margin:'28px auto'}}>
              <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <div><p><strong>Le spese mediche sono &ldquo;intoccabili&rdquo;.</strong> A differenza di altre detrazioni, le spese mediche <strong>non sono soggette al tetto per i redditi alti</strong> introdotto dalla Legge di Bilancio 2025. Anche se guadagni pi&ugrave; di 75.000&euro;, puoi detrarle per intero.</p></div>
            </div>

            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'20px'}}>Le parole che devi conoscere</h3>
            <p><strong>Detrazione</strong> &mdash; Uno sconto diretto sulle tasse. Se hai 100&euro; di detrazione, paghi 100&euro; di IRPEF in meno. Le spese mediche danno una detrazione del 19%.</p>
            <p><strong>Franchigia</strong> &mdash; I primi 129,11&euro; di spese mediche restano a tuo carico. La detrazione del 19% si calcola solo sulla parte che supera questa soglia.</p>
            <p><strong>Scontrino parlante</strong> &mdash; Lo scontrino della farmacia con: natura del prodotto (&ldquo;farmaco&rdquo; o &ldquo;medicinale&rdquo;), il codice AIC e il tuo codice fiscale. Senza queste informazioni non puoi detrarre.</p>
            <p><strong>Pagamento tracciabile</strong> &mdash; Carta di credito, bancomat, carta prepagata, bonifico o assegno. Tutto tranne i contanti. Obbligatorio per quasi tutte le spese mediche private dal 2020.</p>
            <p><strong>Dispositivo medico</strong> &mdash; Un prodotto con marcatura CE usato a scopo medico: occhiali, lenti a contatto, misuratori di pressione, plantari, aerosol. Detraibile al 19%.</p>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="elenco">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Cosa puoi <em>detrarre</em></h2><p className="rv rv-d1">Elenco completo aggiornato 2026.</p></div>

          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Farmaci e medicinali</h3>
          </div>
          <div style={{maxWidth:'700px',margin:'0 auto 24px'}}>
            <div className="v8-info tip rv rv-d1" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Farmaci con ricetta medica</strong> &mdash; <Tip t="Lo scontrino della farmacia con: tipo di prodotto ('farmaco'), codice AIC del medicinale e codice fiscale. Senza queste tre informazioni non puoi detrarre.">Scontrino parlante</Tip> con codice fiscale. Pagamento anche in contanti consentito.</p></div></div>
            <div className="v8-info tip rv rv-d2" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Farmaci da banco (senza ricetta)</strong> &mdash; Scontrino parlante. Dal 2025: <strong>pagamento tracciabile obbligatorio</strong>.</p></div></div>
            <div className="v8-info warn rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Integratori, parafarmaci, fitoterapici</strong> &mdash; NON detraibili. Non sono farmaci. Lo scontrino non riporta &ldquo;farmaco&rdquo;.</p></div></div>
          </div>

          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Visite e prestazioni sanitarie</h3>
          </div>
          <div style={{maxWidth:'700px',margin:'0 auto 24px'}}>
            <div className="v8-info tip rv rv-d1" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Visite mediche generiche e specialistiche</strong> &mdash; Anche omeopatiche. Fattura + pagamento tracciabile.</p></div></div>
            <div className="v8-info tip rv rv-d2" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Esami diagnostici e analisi</strong> &mdash; Sangue, urine, ecografie, TAC, risonanze, radiografie. Pagamento tracciabile.</p></div></div>
            <div className="v8-info tip rv rv-d3" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Cure odontoiatriche</strong> &mdash; Carie, estrazioni, protesi, apparecchi, pulizia. No sbiancamento puramente estetico. Serve fattura e carta.</p></div></div>
            <div className="v8-info tip rv rv-d4" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Fisioterapia, logopedia, riabilitazione</strong> &mdash; Da professionisti abilitati e iscritti all&apos;albo. Pagamento tracciabile.</p></div></div>
            <div className="v8-info tip rv rv-d1" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Psicologo e psicoterapeuta</strong> &mdash; Iscritto all&apos;albo. Dal 2026 precaricato nel 730. Pagamento tracciabile.</p></div></div>
            <div className="v8-info tip rv rv-d2"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Ticket SSN</strong> &mdash; Per visite, esami e pronto soccorso nelle strutture pubbliche. Consentito il contante.</p></div></div>
          </div>

          <div className="v8-prose rv">
            <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Dispositivi medici</h3>
          </div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info tip rv rv-d1" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Occhiali da vista e lenti a contatto</strong> &mdash; Con <Tip t="Conformit&agrave; Europea. Un marchio che certifica che il prodotto rispetta gli standard di sicurezza europei.">marcatura CE</Tip>. Anche la soluzione per lenti. Scontrino con codice fiscale.</p></div></div>
            <div className="v8-info tip rv rv-d2" style={{marginBottom:'12px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Apparecchi acustici, misuratori di pressione, aerosol</strong> &mdash; Con marcatura CE e scontrino/fattura.</p></div></div>
            <div className="v8-info tip rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><div><p><strong>Plantari, protesi, ausili ortopedici</strong> &mdash; Su prescrizione medica.</p></div></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="pagamento">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">La regola del <em>pagamento tracciabile</em></h2><p className="rv rv-d1">Dal 2020 quasi tutte le spese mediche private devono essere pagate con carta o bonifico.</p></div>

          <div className="v8-table-wrap rv" style={{maxWidth:'750px',margin:'0 auto 24px'}}>
            <table className="v8-table">
              <thead><tr><th>Tipo di spesa</th><th>Contanti</th><th>Carta/Bonifico</th></tr></thead>
              <tbody>
                <tr><td>Farmaci con ricetta (farmacia)</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; S&igrave;</td><td>&#10003; S&igrave;</td></tr>
                <tr><td>Farmaci da banco senza ricetta</td><td style={{color:'var(--v8-coral)'}}>&#10005; No (dal 2025)</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; Obbligatorio</td></tr>
                <tr><td>Visite in struttura pubblica/SSN</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; S&igrave;</td><td>&#10003; S&igrave;</td></tr>
                <tr><td>Visite in studio privato</td><td style={{color:'var(--v8-coral)'}}>&#10005; Perdi detrazione</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; Obbligatorio</td></tr>
                <tr><td>Dentista privato</td><td style={{color:'var(--v8-coral)'}}>&#10005; Perdi detrazione</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; Obbligatorio</td></tr>
                <tr><td>Fisioterapista/psicologo privato</td><td style={{color:'var(--v8-coral)'}}>&#10005; Perdi detrazione</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; Obbligatorio</td></tr>
                <tr><td>Occhiali e dispositivi medici</td><td style={{color:'var(--v8-coral)'}}>&#10005; Perdi detrazione</td><td style={{color:'var(--v8-green)',fontWeight:'600'}}>&#10003; Obbligatorio</td></tr>
              </tbody>
            </table>
          </div>

          <div className="v8-info tip rv" style={{maxWidth:'700px',margin:'0 auto'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <div><p><strong>La regola semplice da ricordare:</strong> in farmacia puoi pagare in contanti i farmaci con ricetta. <strong>Tutto il resto</strong> &mdash; visite private, dentista, fisio, psicologo, occhiali &mdash; pagalo con la carta. Se hai dubbi, paga con carta: non sbagli mai.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section warm" id="documenti">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Documenti da <em>conservare</em></h2><p className="rv rv-d1">Tieni tutto per 5 anni dalla dichiarazione. L&apos;Agenzia delle Entrate pu&ograve; chiederli in qualsiasi momento.</p></div>
          <div className="v8-steps">
            <div className="v8-step rv rv-d1"><div className="v8-step-num">1</div><h3>Scontrini parlanti</h3><p>Per farmaci: devono avere codice fiscale, natura (&ldquo;farmaco&rdquo;) e codice AIC. Senza queste tre informazioni, la farmacia deve rifare lo scontrino.</p></div>
            <div className="v8-step rv rv-d2"><div className="v8-step-num">2</div><h3>Fatture mediche</h3><p>Di medici, dentisti, fisioterapisti, psicologi, laboratori, cliniche. Devono riportare il tuo codice fiscale.</p></div>
            <div className="v8-step rv rv-d3"><div className="v8-step-num">3</div><h3>Ricevuta pagamento</h3><p>Estratto conto, ricevuta bancomat, o annotazione in fattura da parte del medico. Dimostra che hai pagato con metodo tracciabile.</p></div>
            <div className="v8-step rv rv-d4"><div className="v8-step-num">4</div><h3>Ricevute ticket SSN</h3><p>Per visite, esami e pronto soccorso nelle strutture pubbliche.</p></div>
          </div>
          <div className="v8-info warn rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
            <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><p><strong>Novit&agrave; 2026: molte spese sono gi&agrave; nel precompilato.</strong> Farmacie, medici, ospedali e laboratori inviano i dati all&apos;Agenzia delle Entrate. Molte spese le trovi gi&agrave; nel <a href="/730">730 precompilato</a>. Ma <strong>controlla sempre</strong> &mdash; spese all&apos;estero, strutture non collegate e farmaci online possono mancare.</p></div>
          </div>
        </div>
      </section>

      <section className="v8-section dark" id="esempio">
        <div className="v8-esempio-inner">
          <h2 className="rv">L&apos;esempio di <em>Giulia</em></h2>
          <div className="v8-esempio-story">
            <p className="rv rv-d1"><strong style={{color:'var(--v8-bg)'}}>Giulia ha 34 anni</strong>, vive a Verona e lavora come impiegata (RAL 28.000&euro;). Nel 2025 ha avuto: farmaci 340&euro;, dentista 480&euro;, occhiali 320&euro;, visita dermatologica privata (carta) 120&euro;, psicologa 10 sedute (bonifico) 550&euro;. Totale: 1.810&euro;.</p>
          </div>
          <div className="v8-esempio-math">
            <div className="v8-esempio-line rv rv-d1"><span>Totale spese mediche 2025</span><span>1.810&euro;</span></div>
            <div className="v8-esempio-line rv rv-d2"><span>Franchigia</span><span>-129,11&euro;</span></div>
            <div className="v8-esempio-line rv rv-d3"><span>Base detraibile</span><span>1.680,89&euro;</span></div>
            <div className="v8-esempio-line v8-esempio-total rv"><span>Rimborso (19% in busta paga luglio)</span><span>+319&euro;</span></div>
          </div>
          <p className="rv" style={{fontSize:'15px',color:'rgba(250,250,247,.4)',marginTop:'24px',lineHeight:'1.7'}}>Giulia riceve <strong style={{color:'#E4F3ED'}}>319&euro; in pi&ugrave; nella busta paga di luglio</strong>. Tutto perch&eacute; ha conservato scontrini e fatture e ha pagato con la carta. Se avesse pagato il dentista in contanti (480&euro;), avrebbe perso 91&euro; di detrazione solo su quella voce.</p>
        </div>
      </section>

      <section className="v8-section warm" id="errori">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Gli errori <em>che fanno tutti</em></h2></div>
          <div style={{maxWidth:'700px',margin:'0 auto'}}>
            <div className="v8-info warn rv" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Pagare in contanti il dentista.</strong> Il dentista privato non &egrave; una struttura SSN. Se lo paghi in contanti, <strong>perdi tutta la detrazione</strong>. Anche con la fattura perfetta. Questo errore costa centinaia di euro a migliaia di italiani ogni anno.</p></div></div>
            <div className="v8-info warn rv rv-d1" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Detrarre gli integratori.</strong> Gli integratori alimentari <strong>non sono farmaci</strong> e non sono detraibili. Nemmeno se li ha prescritti il medico. Lo scontrino deve riportare &ldquo;farmaco&rdquo;, non &ldquo;parafarmaco&rdquo;.</p></div></div>
            <div className="v8-info warn rv rv-d2" style={{marginBottom:'16px'}}><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Non controllare il precompilato.</strong> Il 730 precompilato contiene gi&agrave; molte spese mediche, ma non tutte. Spese all&apos;estero e strutture non collegate possono mancare. Se non le aggiungi, perdi la detrazione.</p></div></div>
            <div className="v8-info warn rv rv-d3"><svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><div><p><strong>Buttare gli scontrini.</strong> L&apos;Agenzia delle Entrate pu&ograve; chiederti i documenti fino a <strong>5 anni dopo</strong>. Conserva tutto in una busta o cartella digitale, anno per anno.</p></div></div>
          </div>
        </div>
      </section>

      <section className="v8-section" id="faq">
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

      <section className="v8-section warm" id="correlate">
        <div className="v8-section-inner">
          <div className="v8-section-head"><h2 className="rv">Guide <em>correlate</em></h2></div>
          <div className="v8-related">
            <a href="/730" className="v8-related-card rv rv-d1"><h4>Faccio il 730</h4><p>Le spese mediche si scaricano nel 730. Guida completa.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/isee" className="v8-related-card rv rv-d2"><h4>Faccio l&apos;ISEE</h4><p>Con ISEE basso puoi ottenere l&apos;esenzione dal ticket sanitario.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
            <a href="/spid" className="v8-related-card rv rv-d3"><h4>Faccio lo SPID</h4><p>Ti serve per accedere al 730 precompilato e verificare le tue spese.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></a>
          </div>
        </div>
      </section>

      <FooterV8 />
    </div>
  );
}
