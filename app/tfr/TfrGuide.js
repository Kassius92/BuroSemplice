'use client';
import Link from 'next/link';
import NavV8 from '@/components/redesign/NavV8';
import FooterV8 from '@/components/redesign/FooterV8';
import {
  GuideHero, Section, StepCards, FAQAccordion,
  ExampleBlock, InfoBox, CTABanner, CrossLink
} from '@/components/redesign';
import CalcTfr from '@/components/CalcTfr';

export default function TfrGuide({ faqItems }) {
  return (
    <div className="v8">
      <NavV8 />
      <GuideClient />
      <DotNav sections={[{"id": "cose", "label": "Cos'è"}, {"id": "calcolo", "label": "Come si calcola"}, {"id": "tassazione", "label": "Tassazione"}, {"id": "quando", "label": "Quando lo ricevi"}, {"id": "fondo", "label": "Azienda o fondo"}, {"id": "esempio", "label": "Esempio"}, {"id": "faq", "label": "FAQ"}]} />
      
      <GuideHero
        category="lavoro"
        categoryLabel="Lavoro &middot; Aggiornato marzo 2026"
        title="Il mio"
        titleEm="TFR"
        subtitle="La liquidazione spiegata come te la spiegherebbe un amico. Quanto ti spetta, come si calcola, tassazione e la scelta tra azienda e fondo pensione."
        stats={[
          { value: '6,91%', label: 'della RAL ogni anno' },
          { value: '5 anni', label: 'per richiederlo' },
          { value: 'Sempre', label: 'anche se ti dimetti' },
        ]}
      />

      <Section id="cose" title="Cos'&egrave; il TFR" titleEm="spiegato semplice">
        <div className="v8-prose rv">
          <p>Immagina che ogni mese il tuo datore di lavoro, invece di darti tutto lo stipendio, ne metta un pezzetto da parte in un salvadanaio. Mese dopo mese, anno dopo anno, quel salvadanaio cresce. Quando il rapporto di lavoro finisce &mdash; per qualsiasi motivo &mdash; il datore rompe il salvadanaio e ti d&agrave; tutto quello che c&apos;&egrave; dentro. Quello &egrave; il TFR.</p>
          <p>In numeri: ogni anno il datore accantona circa il <strong>6,91%</strong> della tua RAL &mdash; che corrisponde pi&ugrave; o meno a <strong>una mensilit&agrave; di stipendio</strong>. Dopo 10 anni hai accumulato circa 10 mensilit&agrave;. Quel gruzzolo nel frattempo cresce un po&apos; grazie alla rivalutazione annua: 75% dell&apos;inflazione ISTAT pi&ugrave; un 1,5% fisso.</p>
          <h3 style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'24px',marginTop:'40px',marginBottom:'16px'}}>Le parole che devi conoscere</h3>
          <p><strong>TFR (Trattamento di Fine Rapporto)</strong> &mdash; Il nome ufficiale della &ldquo;liquidazione&rdquo;. Regolato dall&apos;art. 2120 del Codice Civile.</p>
          <p><strong>RAL</strong> &mdash; Retribuzione Annua Lorda. Il TFR si calcola sulla RAL: ogni anno viene accantonato il 6,91% (RAL &divide; 13,5).</p>
          <p><strong>Rivalutazione</strong> &mdash; L&apos;aumento annuo del TFR: 75% inflazione + 1,5% fisso. Sulla rivalutazione si paga il 17% di imposta ogni anno.</p>
          <p><strong>Tassazione separata</strong> &mdash; Il TFR non si somma al reddito dell&apos;anno. Viene tassato con un&apos;aliquota media calcolata sugli ultimi anni, evitando scaglioni IRPEF altissimi.</p>
          <p><strong>Fondo pensione</strong> &mdash; Alternativa all&apos;azienda per il TFR. Tassazione pi&ugrave; bassa (15-9% contro ~23%) ma i soldi sono bloccati fino alla pensione.</p>
          <p><strong>Fondo di Garanzia INPS</strong> &mdash; Se l&apos;azienda fallisce e non pu&ograve; pagarti il TFR, interviene questo fondo. Fai domanda online con il modulo SR52.</p>
        </div>
        <InfoBox type="tip">
          <p><strong>Non &egrave; un regalo del datore.</strong> Il TFR &egrave; retribuzione differita &mdash; sono soldi tuoi, guadagnati mese per mese, pagati dopo invece che subito. Ti spettano <strong>sempre</strong>: dimissioni, licenziamento, pensione, fine contratto. Anche in caso di morte del lavoratore, il TFR va agli eredi.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="calcolo" title="Come si" titleEm="calcola il TFR" subtitle="La formula dell'art. 2120 Codice Civile: RAL &divide; 13,5 ogni anno.">
        <div className="v8-prose rv">
          <p>Ogni anno si accantona <strong>RAL &divide; 13,5</strong>. Con una RAL di 25.000&euro;, la quota &egrave; circa 1.851&euro;/anno. A questa si sottrae il contributo INPS dello 0,5% (125&euro;), quindi la quota netta accantonata &egrave; circa 1.726&euro;/anno.</p>
          <p>Il TFR gi&agrave; accantonato viene rivalutato ogni anno del <strong>75% dell&apos;inflazione ISTAT + 1,5% fisso</strong>. Con inflazione al 2%, la rivalutazione &egrave; del 3%. Sulla rivalutazione si paga il 17% di imposta ogni anno.</p>
        </div>
        <CalcTfr />
      </Section>

      <Section id="tassazione" title="Come viene" titleEm="tassato">
        <div className="v8-prose rv">
          <p>Il TFR ha una <strong>tassazione separata</strong>: non si somma al reddito dell&apos;anno in cui lo ricevi. Se fosse tassato insieme al reddito dell&apos;anno, finiresti in uno scaglione altissimo ricevendo in un colpo anni di stipendio. La tassazione separata evita questo problema.</p>
          <p>Se il TFR resta <strong>in azienda</strong>, la tassazione &egrave; circa il 23% (aliquota media IRPEF calcolata sugli ultimi 5 anni). Se invece hai versato il TFR in un <strong>fondo pensione</strong>, la tassazione scende dal 15% al 9% &mdash; si riduce di 0,3 punti per ogni anno di partecipazione oltre il quindicesimo. La rivalutazione annua invece viene tassata separatamente al 17% fisso ogni anno, non alla cessazione.</p>
        </div>
        <InfoBox type="warn">
          <p>La differenza tra 23% e 9-15% sembra poca, ma su un TFR di 20.000&euro; lordi parliamo di <strong>1.600-2.800&euro; in pi&ugrave; in tasca</strong> se scegli il fondo pensione. Su 40.000&euro; il risparmio raddoppia. Sono soldi veri.</p>
        </InfoBox>
      </Section>

      <Section bg="warm" id="quando" title="Quando ricevi" titleEm="il TFR">
        <div className="v8-prose rv">
          <p>Il TFR viene pagato alla fine del rapporto di lavoro, qualunque sia il motivo. I tempi cambiano parecchio tra settore privato e pubblico. Nel <strong>privato</strong> la prassi &egrave; 30-45 giorni dalla cessazione, anche se la legge non fissa un termine preciso e molti CCNL lo specificano. Nel <strong>pubblico</strong> i tempi sono molto pi&ugrave; lunghi: 12 mesi pi&ugrave; 90 giorni per chi va in pensione, 24 mesi pi&ugrave; 90 giorni per chi si dimette, 105 giorni in caso di inabilit&agrave; o decesso.</p>
        </div>
        <InfoBox type="warn">
          <p><strong>Se il datore non paga:</strong> manda una diffida scritta (raccomandata o PEC). Hai <strong>5 anni</strong> dalla cessazione per far valere il diritto. Se l&apos;azienda &egrave; insolvente o fallita, interviene il <strong>Fondo di Garanzia INPS</strong> &mdash; domanda online con il modulo SR52.</p>
        </InfoBox>
        <div className="v8-section-head" style={{marginTop:'48px'}}>
          <h3 className="rv" style={{fontFamily:'var(--font-sf),Georgia,serif',fontSize:'28px'}}>Anticipo del TFR</h3>
          <p className="rv rv-d1">Non devi aspettare la fine del rapporto &mdash; ma ci sono condizioni precise.</p>
        </div>
        <StepCards steps={[
          { title: '8 anni di servizio', text: 'Devi aver lavorato almeno 8 anni continuativi presso lo stesso datore di lavoro.' },
          { title: 'Massimo 70% del maturato', text: "Non puoi chiedere tutto: solo fino al 70% del TFR accantonato fino a quel momento." },
          { title: 'Una sola volta', text: "L'anticipo si pu\u00f2 chiedere una sola volta durante tutto il rapporto di lavoro." },
        ]} />
        <div className="v8-prose rv" style={{maxWidth:'700px',margin:'24px auto 0'}}>
          <p>Motivi ammessi: <strong>acquisto prima casa</strong> (per te o i tuoi figli), <strong>spese sanitarie straordinarie</strong> (interventi chirurgici, terapie gravi), <strong>congedi parentali o formativi</strong> previsti dalla legge.</p>
        </div>
      </Section>

      <Section id="fondo" title="TFR in azienda" titleEm="o fondo pensione?" subtitle="La scelta pi&ugrave; importante che fai nei primi 60 giorni dall'assunzione.">
        <div className="v8-prose rv">
          <p>Quando vieni assunto, hai <strong>60 giorni</strong> per decidere dove mandare il TFR. Se non scegli, scatta il <strong>silenzio-assenso</strong>: il TFR va automaticamente al fondo pensione di categoria.</p>
          <p>Tenere il TFR <strong>in azienda</strong> significa tassazione al ~23%, rivalutazione garantita (75% inflazione + 1,5%) e anticipo possibile dopo 8 anni fino al 70%. I soldi sono al sicuro anche in caso di fallimento grazie al Fondo di Garanzia INPS, e li ricevi subito alla cessazione del rapporto.</p>
          <p>Versare il TFR in un <strong>fondo pensione</strong> significa tassazione dal 15% al 9% (un risparmio enorme sul lungo periodo), possibilit&agrave; di dedurre ulteriori contributi fino a 5.300&euro;/anno, anticipo fino al 75% dopo 8 anni. Il contro: i soldi sono bloccati fino alla pensione (con alcune eccezioni) e c&apos;&egrave; un rischio di mercato.</p>
        </div>
        <InfoBox type="tip">
          <p>Se sei <strong>giovane e hai un orizzonte lungo</strong> (20+ anni alla pensione), il fondo pensione conviene quasi sempre &mdash; risparmi dal 6% al 14% di tasse e accumuli una pensione integrativa. Se sei <strong>vicino alla pensione o cambi spesso lavoro</strong>, il TFR in azienda ti d&agrave; pi&ugrave; liquidit&agrave; immediata.</p>
        </InfoBox>
      </Section>

      <Section bg="dark" id="esempio">
        <ExampleBlock
          name="Davide"
          story="<strong>Davide ha 38 anni</strong>, tecnico informatico a Milano, 12 anni nella stessa azienda. RAL 32.000&euro;. Ha deciso di cambiare lavoro &mdash; si &egrave; gi&agrave; dimesso. Il TFR non &egrave; mai stato spostato nel fondo pensione. Non ha idea di quanto sia &mdash; pensa &ldquo;saranno un paio di migliaia di euro&rdquo;."
          lines={[
            { label: 'TFR accantonato (12 anni, RAL media 28.000\u20ac)', value: '~23.200\u20ac' },
            { label: 'Rivalutazione accumulata', value: '+2.900\u20ac' },
            { label: 'Imposta rivalutazione (17%)', value: '-493\u20ac' },
            { label: 'Tassazione separata (~23%)', value: '-5.336\u20ac' },
          ]}
          total={{ label: 'TFR netto in tasca', value: '~20.271\u20ac' }}
        />
      </Section>

      <Section bg="warm" id="faq" title="Domande" titleEm="frequenti">
        <FAQAccordion items={faqItems} />
      </Section>

      <Section id="correlate" title="Guide" titleEm="correlate">
        <div className="v8-related">
          <Link href="/dimissioni" className="v8-related-card rv rv-d1"><h4>Dimissioni volontarie</h4><p>Come dimettersi online, preavviso e cosa ti spetta.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/naspi" className="v8-related-card rv rv-d2"><h4>NASpI</h4><p>Se hai perso il lavoro, quanto ti spetta di disoccupazione.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
          <Link href="/busta-paga" className="v8-related-card rv rv-d3"><h4>Busta paga</h4><p>Dove trovare il TFR accantonato ogni mese nel cedolino.</p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></Link>
        </div>
      </Section>

      <CTABanner />
      <FooterV8 />
    </div>
  );
}
