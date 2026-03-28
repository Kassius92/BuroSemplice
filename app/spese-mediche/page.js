import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import SpeseMedicheGuide from './SpeseMedicheGuide';

export const metadata = {
  title: 'Come Scaricare le Spese Mediche nel 730: Elenco 2026, Calcolo e Detrazione',
  description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia 129,11\u20ac, farmaci, dentista, occhiali, fisioterapia. Come pagare, cosa conservare e quanto recuperi.',
  keywords: ['spese mediche detraibili','detrazione spese mediche','franchigia 129 euro','spese mediche 730','farmaci detraibili','dentista detraibile','occhiali detraibili','pagamento tracciabile','scontrino parlante','spese mediche 2026'],
  alternates: { canonical: 'https://zeroburocrazia.it/spese-mediche' },
  openGraph: { title: 'Spese Mediche Detraibili 2026: Elenco, Calcolo e 730', description: 'Spese mediche detraibili nel 730 2026: elenco completo, franchigia, farmaci, dentista, occhiali, fisioterapia. Guida gratuita.', url: 'https://zeroburocrazia.it/spese-mediche', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ogspesemediche.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogspesemediche.png'] },
};

const faqItems = [
  { q: "Qual \u00e8 la franchigia sulle spese mediche?", a: "<strong>129,11\u20ac.</strong> La detrazione del 19% si calcola solo sulla parte che supera questa soglia. Se spendi 500\u20ac, la detrazione si calcola su 370,89\u20ac (= 70,47\u20ac di rimborso). Se spendi meno di 129,11\u20ac non recuperi nulla." },
  { q: "Posso detrarre le spese del dentista?", a: "<strong>S\u00ec</strong>, tutte le spese odontoiatriche finalizzate alla cura: carie, estrazioni, protesi, apparecchi ortodontici, impianti, pulizia. Non sono detraibili i trattamenti puramente estetici (es. sbiancamento). Serve fattura e pagamento tracciabile." },
  { q: "Posso pagare in contanti?", a: "Solo in alcuni casi. <strong>In contanti</strong> puoi pagare farmaci in farmacia (con scontrino parlante) e prestazioni in strutture pubbliche o private accreditate SSN. <strong>Tutto il resto</strong> (visite private, dentista, fisioterapista, psicologo) deve essere pagato con carta, bonifico o assegno." },
  { q: "Gli occhiali da vista sono detraibili?", a: "<strong>S\u00ec.</strong> Occhiali da vista e lenti a contatto sono detraibili come dispositivi medici, purch\u00e9 abbiano la marcatura CE. Conserva lo scontrino o la fattura con il tuo codice fiscale. Anche la soluzione per lenti a contatto \u00e8 detraibile." },
  { q: "Le spese per lo psicologo sono detraibili?", a: "<strong>S\u00ec.</strong> Le prestazioni di psicologi e psicoterapeuti iscritti all\u2019albo sono detraibili al 19%. Serve fattura con pagamento tracciabile (carta, bonifico). Dal 2026 queste spese vengono precaricate nel 730." },
  { q: "Posso detrarre le spese mediche dei miei figli?", a: "<strong>S\u00ec</strong>, se sono fiscalmente a carico (reddito annuo sotto 2.840,51\u20ac, o sotto 4.000\u20ac se hanno meno di 24 anni). Le inserisci nel tuo 730 come se fossero spese tue." },
  { q: "Cosa sono gli integratori? Sono detraibili?", a: "<strong>No.</strong> Integratori alimentari, prodotti fitoterapici e pomate non sono farmaci e non sono detraibili. Lo scontrino deve riportare 'farmaco' o 'medicinale', non 'parafarmaco' o 'integratore'." },
  { q: "E se le spese superano i 15.493\u20ac?", a: "Se il totale delle spese mediche supera <strong>15.493,71\u20ac</strong> in un anno, puoi scegliere di spalmare la detrazione in 4 anni (4 rate uguali). \u00c8 utile se non hai abbastanza IRPEF da compensare tutto in un anno." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Spese mediche detraibili 2026: elenco completo e come scaricarle nel 730', description: 'Guida completa alle spese mediche detraibili nel 730 2026: elenco, franchigia, come pagare, documenti e calcolo del rimborso.', url: '/spese-mediche', image: 'ogspesemediche.png', datePublished: '2026-03-09', dateModified: '2026-03-28' }),
    faqSchema(faqItems),
  ];
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <SpeseMedicheGuide faqItems={faqItems} />
    </>
  );
}
