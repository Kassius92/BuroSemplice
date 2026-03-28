'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CTABanner
} from '@/components/redesign';

export default function SpeseMedicheGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Come funziona"}, {"id": "elenco", "label": "Cosa detrarre"}, {"id": "pagamento", "label": "Come pagare"}, {"id": "documenti", "label": "Documenti"}, {"id": "errori", "label": "Errori comuni"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      
      <GuideHero
        category="fisco"
        categoryLabel="Fisco &middot; Aggiornato marzo 2026"
        title="Spese mediche"
        titleEm="detraibili"
        subtitle="Quali spese puoi scaricare nel 730, come pagarle, cosa conservare e quanto recuperi. Con l'elenco completo di farmaci, dentista, occhiali e fisioterapia."
        stats={[
          { value: '19%', label: 'detrazione sulle spese' },
          { value: '129\u20ac', label: 'franchigia minima' },
          { value: 'Carta', label: 'quasi sempre obbligatoria' },
        ]}
      />

      <Section id="cose" title="Come funziona" titleEm="la detrazione">
        <div className="v8-prose rv">
          <p>Ogni volta che vai dal dottore, compri un farmaco, fai un esame o porti i bambini dal dentista, stai spendendo soldi per la salute. Lo Stato ti permette di <strong>recuperare il 19%</strong> di queste spese nella dichiarazione dei redditi. In pratica ti restituisce quasi un quinto di quello che hai speso.</p>
          <p>Per&ograve; c&apos;&egrave; una soglia minima: i primi <strong>129,11&euro;</strong> di spese mediche dell&apos;anno restano a tuo carico. La <strong>franchigia</strong> funziona cos&igrave;: se in un anno spendi 500&euro; di spese mediche, il 19% si calcola su 370,89&euro; (500 meno 129,11), per circa <strong>70&euro; di rimborso</strong>.</p>
          <p>Questo rimborso ti arriva come minor IRPEF da pagare, oppure come soldi in pi&ugrave; nella busta paga di luglio dopo il conguaglio del <Link href="/730">730</Link>.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>Detrazione</strong> &mdash; Uno sconto diretto sulle tasse. Se hai 100&euro; di detrazione, paghi 100&euro; di IRPEF in meno. Le spese mediche danno una detrazione del 19%.</p>
          <p><strong>Franchigia</strong> &mdash; I primi 129,11&euro; di spese mediche restano a tuo carico. Il 19% si calcola solo sulla parte che supera questa soglia.</p>
          <p><strong>Scontrino parlante</strong> &mdash; Lo scontrino della farmacia con: natura del prodotto (&ldquo;farmaco&rdquo; o &ldquo;medicinale&rdquo;), il codice AIC e il tuo codice fiscale. Senza queste informazioni non puoi detrarre.</p>
          <p><strong>Pagamento tracciabile</strong> &mdash; Carta di credito, bancomat, bonifico o assegno. Tutto tranne i contanti. Obbligatorio per quasi tutte le spese mediche private dal 2020.</p>
          <p><strong>Dispositivo medico</strong> &mdash; Prodotto con marcatura CE usato a scopo medico: occhiali, lenti a contatto, misuratori di pressione, plantari. Detraibile al 19%.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Le spese mediche sono &ldquo;intoccabili&rdquo;.</strong> A differenza di altre detrazioni, le spese mediche <strong>non sono soggette al tetto per i redditi alti</strong> introdotto dalla Legge di Bilancio 2025. Anche se guadagni pi&ugrave; di 75.000&euro;, puoi detrarle per intero.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="elenco" title="Cosa puoi" titleEm="detrarre" subtitle="Elenco completo aggiornato 2026.">
        <div className="v8-prose rv">
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginBottom:'12px'}}>Farmaci e medicinali</h3>
          <p><strong>Farmaci con ricetta medica</strong> &mdash; Scontrino parlante con codice fiscale. Pagamento anche in contanti consentito.</p>
          <p><strong>Farmaci da banco (senza ricetta)</strong> &mdash; Scontrino parlante. Dal 2025: pagamento tracciabile obbligatorio.</p>
          <p><strong>Farmaci omeopatici classificati come medicinali</strong> &mdash; Con dicitura &ldquo;omeopatico&rdquo; sullo scontrino.</p>
          <p><strong>Integratori, parafarmaci, fitoterapici</strong> &mdash; NON detraibili. Non sono farmaci.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Visite e prestazioni sanitarie</h3>
          <p><strong>Visite mediche generiche e specialistiche</strong> &mdash; Anche omeopatiche. Fattura + pagamento tracciabile.</p>
          <p><strong>Esami diagnostici e analisi</strong> &mdash; Sangue, urine, ecografie, TAC, risonanze, radiografie.</p>
          <p><strong>Cure odontoiatriche</strong> &mdash; Carie, estrazioni, protesi, apparecchi, pulizia. No sbiancamento puramente estetico.</p>
          <p><strong>Fisioterapia, logopedia, riabilitazione</strong> &mdash; Da professionisti abilitati iscritti all&apos;albo.</p>
          <p><strong>Psicologo e psicoterapeuta</strong> &mdash; Iscritto all&apos;albo. Dal 2026 precaricato nel 730. Pagamento tracciabile.</p>
          <p><strong>Ticket SSN</strong> &mdash; Per visite, esami e pronto soccorso nelle strutture pubbliche. Consentito il contante.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'22px',marginTop:'32px',marginBottom:'12px'}}>Dispositivi medici</h3>
          <p><strong>Occhiali da vista e lenti a contatto</strong> &mdash; Con marcatura CE. Anche la soluzione per lenti.</p>
          <p><strong>Apparecchi acustici, misuratori di pressione, aerosol</strong> &mdash; Con marcatura CE e scontrino/fattura.</p>
          <p><strong>Plantari, protesi, ausili ortopedici</strong> &mdash; Su prescrizione medica.</p>
        </div>
      </Section>

      <Section id="pagamento" title="La regola del" titleEm="pagamento tracciabile" subtitle="Dal 2020 quasi tutte le spese mediche private devono essere pagate con carta o bonifico.">
        <div className="v8-prose rv">
          <p>La regola &egrave; semplice: <strong>in farmacia</strong> puoi pagare in contanti i farmaci con ricetta e le prestazioni nelle strutture pubbliche o private accreditate SSN. <strong>Tutto il resto</strong> &mdash; visite private, dentista, fisioterapista, psicologo, occhiali &mdash; deve essere pagato con carta, bancomat o bonifico. Se paghi in contanti una visita privata, <strong>perdi tutta la detrazione</strong>, anche se hai la fattura perfetta.</p>
          <p>Dal 2025 anche i farmaci da banco senza ricetta richiedono pagamento tracciabile. Se hai dubbi su cosa pagare in che modo, la risposta sicura &egrave; sempre: paga con la carta.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Attenzione al dentista.</strong> Il dentista privato non &egrave; una struttura SSN. Se lo paghi in contanti, perdi tutta la detrazione. Questo errore costa centinaia di euro a migliaia di italiani ogni anno.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="documenti" title="Documenti da" titleEm="conservare" subtitle="Tieni tutto per 5 anni dalla dichiarazione.">
        <StepCards steps={[
          { title: 'Scontrini parlanti', text: "Per farmaci: devono avere codice fiscale, natura ('farmaco') e codice AIC. Senza queste tre informazioni la farmacia deve rifare lo scontrino." },
          { title: 'Fatture mediche', text: 'Di medici, dentisti, fisioterapisti, psicologi, laboratori, cliniche. Devono riportare il tuo codice fiscale.' },
          { title: 'Ricevuta del pagamento tracciabile', text: 'Estratto conto, ricevuta bancomat, o annotazione in fattura da parte del medico. Dimostra che hai pagato con metodo tracciabile.' },
          { title: 'Ricevute ticket SSN', text: 'Per visite, esami e pronto soccorso nelle strutture pubbliche.' },
        ]} />
        <InfoBox type="warn">
          <p><strong>Novit&agrave; 2026: molte spese sono gi&agrave; nel precompilato.</strong> Farmacie, medici, ospedali e laboratori inviano i dati all&apos;Agenzia delle Entrate. Molte spese le trovi gi&agrave; nel 730 precompilato. Ma <strong>controlla sempre</strong> &mdash; spese all&apos;estero, strutture non collegate e farmaci online possono mancare.</p>
        </InfoBox>
      </Section>

      <Section id="errori" title="Gli errori" titleEm="che fanno tutti">
        <InfoBox type="warn">
          <p><strong>Pagare in contanti il dentista.</strong> Il dentista privato non &egrave; una struttura SSN. Se lo paghi in contanti, <strong>perdi tutta la detrazione</strong>. Anche con la fattura perfetta.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Detrarre gli integratori.</strong> Gli integratori alimentari <strong>non sono farmaci</strong> e non sono detraibili. Lo scontrino deve riportare &ldquo;farmaco&rdquo;, non &ldquo;parafarmaco&rdquo; o &ldquo;integratore&rdquo;.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Non controllare il precompilato.</strong> Il 730 precompilato contiene gi&agrave; molte spese mediche, ma non tutte. Se non aggiungi quelle mancanti, perdi la detrazione.</p>
        </InfoBox>
        <InfoBox type="warn">
          <p><strong>Buttare gli scontrini.</strong> L&apos;Agenzia delle Entrate pu&ograve; chiederti i documenti fino a <strong>5 anni dopo</strong>. Conserva tutto in una busta o cartella digitale, anno per anno.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Giulia"
          story="<strong>Giulia ha 34 anni</strong>, vive a Verona e lavora come impiegata (RAL 28.000&euro;). Nel 2025: farmaci 340&euro;, dentista (pagato con carta) 480&euro;, occhiali 320&euro;, visita dermatologica privata (carta) 120&euro;, psicologa 10 sedute (bonifico) 550&euro;. Totale: 1.810&euro;."
          lines={[
            { label: 'Totale spese mediche 2025', value: '1.810\u20ac' },
            { label: 'Franchigia', value: '\u2212129,11\u20ac' },
            { label: 'Base detraibile', value: '1.680,89\u20ac' },
          ]}
          total={{ label: 'Rimborso 19% (busta paga luglio)', value: '+319\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/730" className="v8-related-card rv rv-d1"><h4>Faccio il 730</h4><p>Le spese mediche si scaricano nel 730. Guida completa.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/isee" className="v8-related-card rv rv-d2"><h4>Faccio l&apos;ISEE</h4><p>Con ISEE basso puoi ottenere l&apos;esenzione dal ticket sanitario.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/spid" className="v8-related-card rv rv-d3"><h4>Faccio lo SPID</h4><p>Ti serve per accedere al 730 precompilato e verificare le spese.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
