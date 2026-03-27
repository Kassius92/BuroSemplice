import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import NaspiGuide from './NaspiGuide';

export const metadata = {
  title: 'Come Richiedere la NASpI nel 2026: Requisiti, Importo e Durata',
  description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS entro 68 giorni. Guida gratuita aggiornata.',
  keywords: ['NASpI','NASpI 2026','disoccupazione','come richiedere NASpI','NASpI importo','NASpI durata','NASpI requisiti','NASpI anticipata'],
  alternates: { canonical: 'https://zeroburocrazia.it/naspi' },
  openGraph: { title: 'Come Richiedere la NASpI nel 2026', url: 'https://zeroburocrazia.it/naspi', type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT', images: [{ url: 'https://zeroburocrazia.it/ognaspi.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ognaspi.png'] },
};

const faqItems = [
  { q: "Ho dato le dimissioni: ho diritto alla NASpI?", a: "<strong>Dipende dal motivo.</strong> Dimissioni volontarie normali: no, in nessun caso. Dimissioni per <strong>giusta causa</strong> (il datore non ti paga lo stipendio da almeno 2 mesi, mobbing documentato, molestie, trasferimento immotivato oltre 50 km dalla sede): s\u00ec, hai diritto alla NASpI come se fossi stato licenziato. Dimissioni durante il periodo di maternit\u00e0 o paternit\u00e0, entro il primo anno di vita del figlio: s\u00ec, hai diritto. In tutti gli altri casi, le dimissioni volontarie non danno diritto alla disoccupazione." },
  { q: "Quanto tempo ho per fare domanda?", a: "<strong>68 giorni dalla cessazione del rapporto di lavoro.</strong> Il termine \u00e8 tassativo e non ammette proroghe di nessun tipo, nemmeno per malattia o ricovero. Se lo superi anche di un solo giorno, perdi il diritto alla NASpI anche se avevi tutti i requisiti. Il consiglio: fai domanda il prima possibile, idealmente entro 8 giorni. Se presenti la domanda entro 8 giorni dalla cessazione, la NASpI parte dall\u20198\u00b0 giorno. Se aspetti di pi\u00f9, parte dal giorno dopo la domanda e perdi i giorni intermedi." },
  { q: "Quanto ci mette l\u2019INPS a pagare?", a: "Il primo pagamento arriva generalmente in <strong>30-45 giorni</strong> dalla presentazione della domanda. I pagamenti successivi sono mensili, di solito intorno al 10-15 del mese. Puoi controllare lo stato della tua pratica e le date dei pagamenti accedendo a MyINPS con SPID." },
  { q: "La NASpI si paga l\u2019IRPEF?", a: "<strong>S\u00ec, la NASpI \u00e8 tassata come reddito da lavoro dipendente.</strong> L\u2019INPS trattiene l\u2019IRPEF direttamente prima di versarti l\u2019importo mensile. A fine anno ricevi la CU (Certificazione Unica) dall\u2019INPS che dovrai inserire nel 730. Se nello stesso anno hai percepito sia stipendio che NASpI, il 730 \u00e8 praticamente obbligatorio per ricalcolare correttamente le imposte." },
  { q: "Posso lavorare mentre prendo la NASpI?", a: "<strong>S\u00ec, con limiti precisi.</strong> Lavoro dipendente: il reddito annuo non deve superare 8.500\u20ac. Lavoro autonomo o con partita IVA: il limite scende a 5.500\u20ac annui. In entrambi i casi devi comunicare il nuovo lavoro all\u2019INPS con il modulo NASpI-COM entro 30 giorni dall\u2019inizio dell\u2019attivit\u00e0. Se non comunichi, la NASpI decade completamente e retroattivamente. La NASpI viene ridotta dell\u201980% del reddito che percepisci dal nuovo lavoro." },
  { q: "Se trovo lavoro e poi lo riperdo, cosa succede?", a: "Dipende dalla durata del nuovo contratto. Se il nuovo rapporto dura <strong>meno di 6 mesi</strong>, la NASpI precedente viene sospesa durante il lavoro e poi riprende automaticamente alla fine del contratto. Se il nuovo rapporto dura <strong>pi\u00f9 di 6 mesi</strong>, puoi presentare una nuova domanda di NASpI basata sui nuovi contributi versati. Novit\u00e0 dal 2025: se ti eri dimesso dal lavoro precedente, per avere diritto alla nuova NASpI devi aver lavorato almeno 13 settimane nel nuovo rapporto." },
  { q: "La NASpI conta per la pensione?", a: "<strong>S\u00ec, conta a tutti gli effetti.</strong> Il periodo coperto dalla NASpI viene accreditato con contribuzione figurativa: l\u2019INPS versa automaticamente e gratuitamente i contributi pensionistici per tutta la durata della prestazione. Questi contributi valgono sia per raggiungere i requisiti di anzianit\u00e0 contributiva sia per il calcolo dell\u2019importo della pensione." },
  { q: "Quanto dura la NASpI?", a: "La durata \u00e8 pari alla <strong>met\u00e0 delle settimane lavorate negli ultimi 4 anni</strong>, con un massimo di 24 mesi. Se hai lavorato 4 anni pieni (208 settimane), la NASpI dura il massimo: 104 settimane, cio\u00e8 24 mesi. Se hai lavorato 2 anni (104 settimane), dura 52 settimane cio\u00e8 12 mesi. Se hai lavorato 1 anno (52 settimane), dura 26 settimane cio\u00e8 6 mesi. Le settimane gi\u00e0 utilizzate per una NASpI precedente non si contano di nuovo." },
  { q: "Cos\u2019\u00e8 la NASpI anticipata?", a: "Se vuoi aprire un\u2019attivit\u00e0 autonoma, una ditta individuale, o entrare come socio in una cooperativa, puoi chiedere all\u2019INPS di ricevere tutta la NASpI che ti resterebbe da percepire in un\u2019unica soluzione anticipata, come capitale iniziale per avviare la tua attivit\u00e0. Dal 2026 la NASpI anticipata viene pagata in due tranche: 70% subito dopo l\u2019accoglimento della domanda, 30% al termine della durata teorica. Attenzione: se chiudi l\u2019attivit\u00e0 entro 6 mesi o ti fai riassumere come dipendente, l\u2019INPS pu\u00f2 chiederti di restituire i soldi." },
];

const schemas = [
  articleSchema({ title: 'NASpI 2026: requisiti, importo, durata e come fare domanda', description: 'NASpI 2026: chi ne ha diritto, come si calcola, quanto dura, come fare domanda INPS.', url: '/naspi', image: 'ognaspi.png', datePublished: '2026-03-07', dateModified: '2026-03-27' }),
  faqSchema(faqItems),
];

export default function Page() {
  return (
    <>
      <SchemaOrg schemas={schemas} />
      <NaspiGuide faqItems={faqItems} />
    </>
  );
}
