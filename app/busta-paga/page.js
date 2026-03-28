import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import BustaPagaGuide from './BustaPagaGuide';

export const metadata = {
  title: 'Come Leggere la Busta Paga nel 2026: Voci, Lordo al Netto e Calcolo',
  description: 'Busta paga 2026: come leggerla voce per voce, dal lordo al netto, trattenute IRPEF, contributi INPS, detrazioni, TFR, ferie e nuove aliquote. Guida gratuita.',
  keywords: ['busta paga','come leggere busta paga','busta paga 2026','lordo netto','stipendio netto','trattenute busta paga','IRPEF busta paga','contributi INPS','calcolo stipendio netto','cedolino'],
  alternates: { canonical: 'https://zeroburocrazia.it/busta-paga' },
  openGraph: { title: 'Busta Paga 2026: Come Leggerla, Voci, Dal Lordo al Netto', description: 'Busta paga 2026: come leggerla, dal lordo al netto, IRPEF, INPS, detrazioni. Guida gratuita.', url: 'https://zeroburocrazia.it/busta-paga', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogbustapaga.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbustapaga.png'] },
};

const faqItems = [
  { q: "Perch\u00e9 il mio netto \u00e8 cos\u00ec diverso dal lordo?", a: "Perch\u00e9 dal lordo vengono tolti: <strong>contributi INPS</strong> (~9,19%), <strong>IRPEF</strong> (dal 23% al 43% a scaglioni), <strong>addizionali regionali e comunali</strong>. In pratica, su 2.000\u20ac lordi restano circa 1.500-1.600\u20ac netti." },
  { q: "Cos\u2019\u00e8 la RAL?", a: "La <strong>Retribuzione Annua Lorda</strong>: \u00e8 il tuo stipendio lordo annuo, comprese tredicesima e quattordicesima. \u00c8 il numero nei contratti di lavoro e quello che le banche chiedono per il mutuo." },
  { q: "Cosa sono gli scatti di anzianit\u00e0?", a: "Sono <strong>aumenti automatici</strong> del tuo stipendio base che maturano ogni 2-3 anni di lavoro nella stessa azienda (la cadenza dipende dal CCNL). Non sono enormi (20-30\u20ac lordi), ma si accumulano nel tempo." },
  { q: "Perch\u00e9 a dicembre il netto \u00e8 pi\u00f9 basso?", a: "Per il <strong>conguaglio fiscale</strong>. A dicembre il datore ricalcola le tasse sull\u2019intero anno. Se durante l\u2019anno hai pagato poca IRPEF, a dicembre trattengono la differenza. Pu\u00f2 funzionare anche al contrario: se hai pagato troppo, ricevi un rimborso." },
  { q: "Dove trovo ferie e permessi residui?", a: "Di solito nella <strong>parte bassa della busta paga</strong>. Trovi: ferie maturate, ferie godute, ferie residue. Stessa cosa per ROL, ex festivit\u00e0 e banca ore. Controlla ogni mese." },
  { q: "Il TFR dove lo vedo?", a: "Nella <strong>terza parte della busta paga</strong>, tra i dati riepilogativi. Trovi il TFR maturato nel mese e il totale accantonato. Se lo destini a un fondo pensione, vedrai il versamento al fondo." },
  { q: "Cos\u2019\u00e8 il trattamento integrativo?", a: "\u00c8 l\u2019ex \u201cbonus Renzi\u201d. Per redditi fino a 15.000\u20ac spettano <strong>fino a 1.200\u20ac/anno</strong> (100\u20ac/mese). Per redditi tra 15.000\u20ac e 28.000\u20ac spetta in misura ridotta. Lo trovi come voce a parte nella busta paga." },
  { q: "Posso chiedere al datore di lavoro di spiegarmi la busta paga?", a: "<strong>S\u00ec, \u00e8 un tuo diritto.</strong> Il datore \u00e8 obbligato a consegnartela e a spiegarti le voci se lo chiedi. Se non ottieni chiarimenti, rivolgiti a un consulente del lavoro o al sindacato." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Busta paga 2026: come leggerla, dal lordo al netto', description: 'Come leggere la busta paga nel 2026: voci, trattenute IRPEF, contributi INPS, detrazioni, TFR.', url: '/busta-paga', image: 'ogbustapaga.png', datePublished: '2026-03-11', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <BustaPagaGuide faqItems={faqItems} />
    </>
  );
}
