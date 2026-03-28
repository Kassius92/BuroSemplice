import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import TfrGuide from './TfrGuide';

export const metadata = {
  title: 'Come Calcolare il TFR nel 2026: Tassazione, Anticipo e Quando Spetta',
  description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione. Guida gratuita aggiornata.',
  keywords: ['TFR','trattamento fine rapporto','liquidazione','calcolo TFR','TFR tassazione','anticipo TFR','fondo pensione','TFR in busta paga','quando arriva TFR','TFR dimissioni'],
  alternates: { canonical: 'https://zeroburocrazia.it/tfr' },
  openGraph: { title: 'Come Calcolare il TFR nel 2026: Tassazione, Anticipo e Quando Spetta', description: 'TFR 2026: come si calcola la liquidazione, quanto ti spetta, tassazione separata, anticipo dopo 8 anni, TFR in azienda vs fondo pensione.', url: 'https://zeroburocrazia.it/tfr', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogtfr.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogtfr.png'] },
};

const faqItems = [
  { q: "Il TFR spetta anche se mi dimetto?", a: "<strong>S\u00ec, sempre.</strong> Il TFR ti spetta indipendentemente dal motivo: dimissioni volontarie, licenziamento, fine contratto, pensionamento, anche licenziamento per giusta causa. \u00c8 un tuo diritto maturato \u2014 non pu\u00f2 essere negato." },
  { q: "Quanto tempo ha il datore per pagare il TFR?", a: "La legge non fissa un termine preciso. La prassi \u00e8 <strong>30-45 giorni</strong> dalla cessazione. Molti CCNL lo specificano. Se il datore ritarda, manda un sollecito formale (PEC) e, se serve, rivolgiti a un sindacato o avvocato del lavoro." },
  { q: "Il TFR si prescrive?", a: "<strong>S\u00ec, in 5 anni.</strong> Se il datore non ti paga il TFR, hai 5 anni dalla cessazione per richiederlo legalmente. Dopo, il diritto si prescrive e perdi tutto." },
  { q: "Posso chiedere un anticipo del TFR?", a: "S\u00ec, dopo <strong>8 anni di servizio</strong> continuativo presso lo stesso datore. Puoi chiedere fino al <strong>70% del TFR maturato</strong>, ma solo per: acquisto prima casa, spese sanitarie gravi, congedi parentali/formativi. L\u2019anticipo si pu\u00f2 chiedere <strong>una sola volta</strong>." },
  { q: "Conviene lasciare il TFR in azienda o metterlo nel fondo pensione?", a: "Dipende. Il <strong>fondo pensione</strong> ha tassazione dal 15% al 9% (contro ~23% in azienda), deducibilit\u00e0 e rendimenti potenzialmente superiori. Il TFR <strong>in azienda</strong> \u00e8 pi\u00f9 accessibile e senza rischio di mercato. Se sei giovane e hai 20+ anni alla pensione, il fondo conviene quasi sempre." },
  { q: "Cosa succede al TFR se l\u2019azienda fallisce?", a: "Interviene il <strong>Fondo di Garanzia INPS</strong>. Puoi fare domanda all\u2019INPS per recuperare il TFR non pagato. Le aziende con pi\u00f9 di 50 dipendenti versano gi\u00e0 il TFR al Fondo Tesoreria INPS, quindi il pagamento \u00e8 comunque garantito." },
  { q: "Come si legge il TFR in busta paga?", a: "Cerca le voci \u2018TFR maturato\u2019, \u2018Fondo TFR\u2019 o \u2018Accantonamento TFR\u2019. Trovi la <strong>quota maturata nel mese</strong>, il <strong>totale accantonato</strong> e la <strong>rivalutazione</strong>. Se non le trovi, chiedi all\u2019ufficio paghe." },
  { q: "Il TFR va dichiarato nel 730?", a: "<strong>No.</strong> Il TFR ha tassazione separata, applicata direttamente dal datore (o dall\u2019INPS). Non va nel 730. Per\u00f2 compare nella CU (Certificazione Unica) che ricevi a marzo." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'TFR 2026: calcolo, tassazione, anticipo e quando spetta', description: 'TFR 2026: come si calcola la liquidazione, tassazione, anticipo e confronto azienda vs fondo pensione.', url: '/tfr', image: 'ogtfr.png', datePublished: '2026-03-07', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <TfrGuide faqItems={faqItems} />
    </>
  );
}
