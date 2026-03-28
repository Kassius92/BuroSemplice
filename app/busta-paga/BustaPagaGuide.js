'use client';
import GuideClient from '@/components/redesign/GuideClient';
import DotNav from '@/components/redesign/DotNav';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CTABanner
} from '@/components/redesign';
import CalcBustaPaga from '@/components/CalcBustaPaga';

export default function BustaPagaGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "parti", "label": "Le 3 parti"}, {"id": "lordo-netto", "label": "Lordo al netto"}, {"id": "novita", "label": "Novità 2026"}, {"id": "calcolatore", "label": "Calcolatore"}, {"id": "voci", "label": "Voci"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      
      <GuideHero
        category="lavoro"
        categoryLabel="Lavoro &middot; Aggiornato marzo 2026"
        title="La mia"
        titleEm="busta paga"
        subtitle="Come leggere il cedolino nel 2026: tutte le voci spiegate in modo semplice, dal lordo al netto, trattenute, contributi, detrazioni e novit&agrave;."
        stats={[
          { value: '~35%', label: 'perdi dal lordo al netto' },
          { value: '33%', label: 'nuovo 2\u00b0 scaglione IRPEF 2026' },
          { value: '3 parti', label: 'struttura del cedolino' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; la busta paga" titleEm="e come leggerla">
        <div className="v8-prose rv">
          <p>La busta paga (o <strong>cedolino</strong>) &egrave; il documento che il tuo datore di lavoro ti d&agrave; ogni mese insieme allo stipendio. Spiega, voce per voce, come si arriva dal tuo stipendio <strong>lordo</strong> (quello scritto nel contratto) al <strong>netto</strong> (quello che trovi sul conto).</p>
          <p>Sembra un foglio pieno di numeri incomprensibili, ma segue una logica semplice: <strong>Lordo &minus; Contributi INPS &minus; IRPEF &minus; Addizionali + Detrazioni = Netto</strong>.</p>
          <p>&Egrave; un documento <strong>obbligatorio per legge</strong>: il datore deve consegnartelo ogni mese. Conservalo: ti serve per il 730, per chiedere un mutuo, per l&apos;ISEE e per verificare che tutto sia corretto.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il tuo stipendio annuo lordo, comprensivo di tredicesima/quattordicesima.</p>
          <p><strong>IRPEF</strong> &mdash; L&apos;imposta sui redditi. &Egrave; progressiva: pi&ugrave; guadagni, pi&ugrave; paghi. Nel 2026: 23% fino a 28.000&euro;, 33% fino a 50.000&euro;, 43% oltre.</p>
          <p><strong>Contributi INPS</strong> &mdash; La quota che paghi per la pensione e le tutele. Circa il 9,19% del lordo.</p>
          <p><strong>Imponibile fiscale</strong> &mdash; Il lordo meno i contributi INPS. &Egrave; la base su cui si calcola l&apos;IRPEF.</p>
          <p><strong>Detrazioni</strong> &mdash; Sconti sull&apos;IRPEF per lavoro dipendente e familiari a carico.</p>
          <p><strong>Conguaglio</strong> &mdash; Il ricalcolo di fine anno. A dicembre il datore verifica se hai pagato la giusta quantit&agrave; di tasse.</p>
          <p><strong>TFR</strong> &mdash; Trattamento di Fine Rapporto. Una quota accantonata ogni mese che ricevi quando lasci il lavoro.</p>
        </div>
      </Section>

      <Section bg="warm" id="parti" title="Le 3 parti" titleEm="della busta paga">
        <StepCards steps={[
          { title: 'Intestazione', text: "In alto: dati dell'azienda (nome, P.IVA, posizione INPS/INAIL) e i tuoi dati (nome, codice fiscale, data assunzione, qualifica, livello, CCNL). Controlla che siano corretti: un livello sbagliato significa uno stipendio sbagliato." },
          { title: 'Competenze (il lordo)', text: "Tutte le voci che formano il lordo: paga base, contingenza, scatti di anzianit\u00e0, superminimo, straordinari, indennit\u00e0, premi, ferie godute, malattia, permessi. La somma di tutto \u00e8 il totale lordo del mese." },
          { title: 'Trattenute e netto', text: "Qui si passa dal lordo al netto: contributi INPS (~9,19%), IRPEF, addizionali regionali e comunali, eventuali detrazioni e il trattamento integrativo. In fondo: il netto in busta e i dati riepilogativi (TFR, ferie residue)." },
        ]} />
      </Section>

      <Section id="lordo-netto" title="Dal lordo" titleEm="al netto" subtitle="Come si arriva dal lordo al netto: la formula passo per passo.">
        <div className="v8-prose rv">
          <p>Partiamo da un esempio concreto con uno stipendio lordo di 2.000&euro;. Prima si sottraggono i <strong>contributi INPS</strong> (~9,19%), circa 184&euro;: si ottiene l&apos;imponibile fiscale di 1.816&euro;. Su questo si calcola l&apos;<strong>IRPEF lorda</strong> per scaglioni, circa 365&euro;. Poi si aggiungono le <strong>detrazioni</strong> per lavoro dipendente (~130&euro;) e si tolgono le <strong>addizionali</strong> regionali e comunali (~30&euro;). Il risultato finale &egrave; un <strong>netto in busta di circa 1.551&euro;</strong>.</p>
          <p>Questo significa che su 2.000&euro; lordi, le trattenute totali sono circa 449&euro;, pari al 22% del lordo. Chi guadagna di pi&ugrave; paga una percentuale maggiore, perch&eacute; l&apos;IRPEF &egrave; progressiva.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Aliquote IRPEF 2026 (3 scaglioni):</strong> 23% fino a 28.000&euro; &mdash; <strong>33%</strong> da 28.001&euro; a 50.000&euro; (era 35% nel 2024) &mdash; 43% oltre 50.000&euro;. La riduzione dal 35% al 33% del secondo scaglione &egrave; la novit&agrave; 2026: qualche euro in pi&ugrave; in busta per chi guadagna tra 28.000 e 50.000&euro;.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="novita" title="Novit&agrave;" titleEm="in busta paga 2026">
        <InfoBox type="tip">
          <p><strong>2&deg; scaglione IRPEF: dal 35% al 33%.</strong> Per i redditi tra 28.001&euro; e 50.000&euro;, l&apos;aliquota scende di 2 punti. Impatto concreto: circa <strong>20-40&euro; in pi&ugrave; al mese</strong> per chi ricade in quella fascia.</p>
        </InfoBox>
        <InfoBox type="tip">
          <p><strong>Taglio del cuneo fiscale strutturale.</strong> Lo sgravio contributivo diventa strutturale. Per redditi fino a ~35.000&euro;, i contributi INPS a carico del lavoratore sono ridotti, aumentando il netto.</p>
        </InfoBox>
        <InfoBox type="tip">
          <p><strong>Bonus fino a 960&euro; per redditi sotto 20.000&euro;.</strong> Per i lavoratori dipendenti con reddito fino a 20.000&euro;, importo variabile fino a 960&euro;/anno escluso dalla base imponibile. Lo troverai come voce specifica nel cedolino.</p>
        </InfoBox>
      </Section>

      <Section id="calcolatore" title="Calcola il tuo" titleEm="netto in busta" subtitle="Inserisci la tua RAL per avere una stima del netto mensile.">
        <CalcBustaPaga />
      </Section>

      <Section bg="warm" id="voci" title="Le voci" titleEm="da controllare ogni mese">
        <div className="v8-prose rv">
          <p><strong>Paga base + contingenza</strong> &mdash; Il minimo previsto dal tuo CCNL per il tuo livello. Se il tuo stipendio &egrave; sotto questo importo, c&apos;&egrave; un problema.</p>
          <p><strong>Superminimo</strong> &mdash; La parte in pi&ugrave; rispetto al minimo contrattuale, concordata individualmente. Pu&ograve; essere &ldquo;assorbibile&rdquo; (sparisce con gli aumenti CCNL) o &ldquo;non assorbibile&rdquo; (resta fisso).</p>
          <p><strong>Straordinari</strong> &mdash; Le ore lavorate oltre l&apos;orario contrattuale. Sono maggiorate: dal +15% al +50% a seconda del CCNL e del tipo di ora (feriale, notturna, festiva).</p>
          <p><strong>Ferie e ROL</strong> &mdash; Ferie maturate, godute e residue. I ROL (Riduzione Orario di Lavoro) sono i permessi retribuiti. Controlla che siano corretti ogni mese.</p>
          <p><strong>Trattamento integrativo</strong> &mdash; L&apos;ex &ldquo;bonus Renzi&rdquo;. Fino a 100&euro;/mese per redditi sotto 15.000&euro;, in misura ridotta fino a 28.000&euro;.</p>
          <p><strong>TFR maturato</strong> &mdash; La quota accantonata nel mese (circa 1/13,5 del lordo). Si accumula e lo ricevi quando lasci il lavoro.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Conserva tutte le buste paga.</strong> Tieni una copia digitale di ogni cedolino per almeno 5 anni. Ti servono per il 730, per il CU e in caso di contenzioso col datore. Molte aziende usano portali online: salvali regolarmente.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Laura"
          story="<strong>Laura lavora come impiegata</strong> con CCNL Commercio, livello 4. RAL 28.000&euro;, 14 mensilit&agrave;. Single, nessun figlio a carico."
          lines={[
            { label: 'Paga base + contingenza + superminimo', value: '2.000\u20ac lordi' },
            { label: 'Contributi INPS (9,19%)', value: '\u2212184\u20ac' },
            { label: 'IRPEF lorda \u2212 detrazioni + addizionali', value: '\u2212265\u20ac' },
            { label: 'TFR maturato nel mese', value: '~148\u20ac' },
          ]}
          total={{ label: 'Netto in busta (annuo netto: ~21.700\u20ac)', value: '~1.551\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/730" className="v8-related-card rv rv-d1"><h4>Faccio il 730</h4><p>Recupera le detrazioni che non vedi in busta paga.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/tfr" className="v8-related-card rv rv-d2"><h4>TFR</h4><p>Quanto hai accantonato e come funziona la liquidazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/dimissioni" className="v8-related-card rv rv-d3"><h4>Dimissioni</h4><p>Cosa succede alla busta paga quando te ne vai.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
