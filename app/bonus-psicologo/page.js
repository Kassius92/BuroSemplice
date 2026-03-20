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
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: "Come Richiedere il Bonus Psicologo nel 2026: fino a 1.500€ e Domanda INPS",
  description: "Bonus psicologo 2026: fino a 1.500€ per sedute di psicoterapia. Requisiti ISEE, importi per fascia, come fare domanda sul portale INPS e graduatorie.",
  keywords: ["bonus psicologo 2026","bonus psicologo","bonus psicologo INPS","bonus psicologo ISEE","bonus psicologo importi","bonus psicologo domanda","contributo psicoterapia","bonus psicologo come richiederlo"],
  alternates: { canonical: 'https://zeroburocrazia.it/bonus-psicologo' },
  openGraph: {
    title: "Come Richiedere il Bonus Psicologo nel 2026: fino a 1.500€ e Domanda INPS",
    description: "Bonus psicologo 2026: fino a 1.500€ per sedute di psicoterapia. Requisiti ISEE, importi per fascia, come fare domanda sul portale INPS e graduatorie.",
    url: 'https://zeroburocrazia.it/bonus-psicologo',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogbonuspsicologo.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://zeroburocrazia.it/ogbonuspsicologo.png'] },
};

const tocItems = [
  { id: 'sintesi', label: "In sintesi" },
  { id: 'cose', label: "Cos'è" },
  { id: 'importi', label: "Importi" },
  { id: 'requisiti', label: "Requisiti" },
  { id: 'domanda', label: "Come fare domanda" },
  { id: 'graduatoria', label: "Graduatorie", bh: true },
  { id: 'uso', label: "Come usarlo", bh: true },
  { id: 'errori', label: "Errori comuni", bh: true },
  { id: 'faq', label: "FAQ", bh: true }
];

const faqItems = [
  { q: "Quando si può fare domanda per il bonus psicologo 2026?", a: "La data non è ancora stata comunicata. Nel 2025 la finestra era dal 15 settembre al 14 novembre. Per il 2026 si stima un periodo simile. <strong>Monitora il sito INPS</strong> per l'apertura ufficiale." },
  { q: "Serve una diagnosi medica per richiedere il bonus?", a: "<strong>No.</strong> Non serve nessuna prescrizione o diagnosi. Basta dichiarare un disagio psicologico (ansia, stress, depressione, fragilità emotiva) e avere un ISEE valido." },
  { q: "Il bonus vale anche per sedute online?", a: "<strong>Sì.</strong> Il bonus copre anche sedute di psicoterapia online, purché il professionista sia iscritto all'Albo e abbia aderito all'iniziativa INPS." },
  { q: "Posso richiedere il bonus per mio figlio minorenne?", a: "<strong>Sì.</strong> La domanda va presentata dal genitore o tutore legale. L'ISEE utilizzato è quello del nucleo familiare del minore." },
  { q: "Quanto tempo ho per usare il bonus dopo l'ammissione?", a: "Hai <strong>270 giorni</strong> dall'accoglimento per usare tutto l'importo. Ma attenzione: devi fare almeno una seduta entro 60 giorni, altrimenti il bonus decade." },
  { q: "Se non rientro in graduatoria, posso essere ammesso dopo?", a: "<strong>Sì.</strong> L'INPS procede allo scorrimento delle graduatorie quando qualcuno non usa il bonus o decade per mancato utilizzo nei 60 giorni. Potresti essere ammesso anche mesi dopo." },
  { q: "Posso scegliere qualsiasi psicologo?", a: "<strong>No.</strong> Il professionista deve essere iscritto all'Albo degli Psicologi e aver aderito all'iniziativa. L'elenco è disponibile sul portale INPS e sul sito del CNOP." },
  { q: "Il bonus psicologo è compatibile con la detrazione IRPEF?", a: "Le spese di psicoterapia <strong>non coperte dal bonus</strong> (es. la differenza tra 50€ e la tariffa reale) possono essere portate in detrazione al 19% nel 730. Le spese coperte dal bonus no, perché le ha già pagate lo Stato." }
];

export default function GuidePage() {
  const schemas = [
    articleSchema({
      title: "Come Richiedere il Bonus Psicologo nel 2026: fino a 1.500€, requisiti ISEE e domanda INPS",
      description: "Bonus psicologo 2026: fino a 1.500€ per sedute di psicoterapia. Requisiti ISEE, importi per fascia, come fare domanda sul portale INPS e graduatorie.",
      url: '/bonus-psicologo',
      image: 'ogbonuspsicologo.png',
      datePublished: '2026-03-19',
      dateModified: '2026-03-19',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-salute">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/>
          <circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/>
          <circle cx="180" cy="180" r="90"  stroke="#E36414" strokeWidth=".8"/>
          <line x1="10"  y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="180" y1="10"  x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <circle cx="180" cy="10"  r="4" fill="#E36414" opacity=".6"/>
          <circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10"  cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
          <circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83C\uDFE5'} Salute</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Bonus <em>Psicologo</em></h1>
            <p className="hero-sub">Fino a 1.500&euro; per sedute di psicoterapia. Chi pu&ograve; richiederlo, quanto vale in base all&apos;ISEE, come fare domanda e come funzionano le graduatorie.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 7 min di lettura</span>
              <span className="pill pill-w">{'\uD83D\uDCB0'} Fino a 1.500€</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> INPS &middot; Legge di Bilancio 2026 (L. 199/2025) &middot; D.M. 10 luglio 2025</div>
            <div className="hero-actions"><PrintButton /><VersionToggle /></div>
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">1.500&euro;</div><div className="hl">importo massimo<br/>con ISEE sotto 15.000&euro;</div></div>
            <div className="hstat"><div className="hn">50&euro;</div><div className="hl">massimo a seduta<br/>lo Stato paga il professionista</div></div>
            <div className="hstat"><div className="hn">50.000&euro;</div><div className="hl">soglia ISEE massima<br/>per accedere al bonus</div></div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <TOC items={tocItems} />

      {/* CONTENT */}
      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Guide correlate</span>
            <div className="perc-steps">
              <a href="/isee" className="ps">{'\uD83D\uDCCB'} ISEE</a>
              <a href="/spid" className="ps">{'\uD83D\uDD10'} SPID</a>
            </div>
          </div>

          <div className="perc r">
            <span className="perc-label">Link utili</span>
            <div className="perc-steps">
              <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.contributo-per-sostenere-le-spese-relative-a-sessioni-di-psicoterapia-bonus-psicologo.html" target="_blank" rel="noopener noreferrer" className="ps">{'\uD83C\uDFE6'} INPS &mdash; Domanda bonus psicologo</a>
            </div>
          </div>


          {/* GLOSSARIO */}
          <div className="sec r" id="glossario">
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Bonus psicologo</strong> &mdash; contributo economico dell&apos;INPS per pagare sedute di psicoterapia. Fino a 50&euro; a seduta, massimo 1.500&euro; totali. Reso strutturale dal 2024.</div>
              <div className="gl-item r d2"><strong>Codice univoco</strong> &mdash; codice alfanumerico che l&apos;INPS ti assegna se la domanda viene accolta. Lo comunichi allo psicoterapeuta per ogni seduta &mdash; lui lo usa per farsi pagare dall&apos;INPS.</div>
              <div className="gl-item r d3"><strong>Graduatoria regionale</strong> &mdash; l&apos;INPS stila una graduatoria per ogni Regione. Priorit&agrave;: ISEE pi&ugrave; basso. A parit&agrave; di ISEE: chi ha fatto domanda prima.</div>
              <div className="gl-item r d4"><strong>Psicoterapeuta aderente</strong> &mdash; professionista iscritto all&apos;Albo degli Psicologi che ha comunicato all&apos;INPS la propria adesione. Solo questi possono accettare il bonus.</div>
              <div className="gl-item r d1"><strong>Click day</strong> &mdash; il giorno in cui si aprono le domande sul portale INPS. Non vince chi arriva primo (conta l&apos;ISEE), ma conviene essere pronti.</div>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc bl r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">1.500&euro;</div><div className="sl">importo massimo<br/>con ISEE sotto 15.000&euro;</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83E\uDDD1\u200D\u2695\uFE0F'}</div><div className="sn">50&euro;</div><div className="sl">massimo a seduta<br/>copre lo psicoterapeuta</div></div>
                <div className="sc tc r d3"><div className="si">{'\uD83D\uDCCB'}</div><div className="sn">ISEE</div><div className="sl">fino a 50.000&euro;<br/>obbligatorio e valido</div></div>
                <div className="sc r d4"><div className="si">{'\uD83D\uDD10'}</div><div className="sn">SPID</div><div className="sl">per fare domanda<br/>sul portale INPS</div></div>
                <div className="sc r d1"><div className="si">{'\uD83D\uDCC5'}</div><div className="sn">Set-Nov</div><div className="sl">finestra domande<br/>(stima, da confermare)</div></div>
                <div className="sc r d2"><div className="si">{'\u23F0'}</div><div className="sn">270 gg</div><div className="sl">per usare il codice<br/>+ 1ª seduta entro 60 gg</div></div>
              </div>
            </div>
          </div>

          {/* COSE */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il bonus psicologo</h2>
            <p>Il <strong>bonus psicologo</strong> &egrave; un contributo dell&apos;INPS che ti aiuta a pagare le sedute di psicoterapia. Non &egrave; un rimborso: lo Stato paga <strong>direttamente il professionista</strong>, fino a 50&euro; a seduta. Tu non anticipi nulla per la parte coperta dal bonus.</p>

            <p>Nato nel 2022 come risposta all&apos;emergenza psicologica post-pandemia, &egrave; stato <strong>reso strutturale dal 2024</strong>. Per il 2026 sono stati stanziati 8,5 milioni di euro (Legge di Bilancio 2026). I fondi non bastano per tutti: l&apos;INPS stila una graduatoria e assegna il bonus a chi ha l&apos;ISEE pi&ugrave; basso.</p>

            <p>Non serve una diagnosi medica. Non serve una prescrizione. Basta <strong>dichiarare un disagio psicologico</strong> (ansia, stress, depressione, fragilit&agrave;) e avere un ISEE valido sotto i 50.000&euro;.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Funziona anche online</div>
              <p>Il bonus &egrave; valido anche per <strong>sedute di psicoterapia online</strong>, purch&eacute; il professionista sia iscritto all&apos;Albo e abbia aderito all&apos;iniziativa INPS. Puoi fare le sedute da casa &mdash; non devi per forza andare in studio.</p>
            </div>
          </div>

          {/* IMPORTI */}
          <div className="sec r" id="importi">
            <div className="sec-tag">Quanto vale</div>
            <h2>Importi per fascia ISEE</h2>
            <p>L&apos;importo dipende dal tuo ISEE. Pi&ugrave; &egrave; basso, pi&ugrave; ricevi. In tutti i casi, il tetto &egrave; <strong>50&euro; a seduta</strong>.</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Fascia ISEE</th><th>Importo massimo</th><th>Sedute coperte (a 50&euro;)</th></tr></thead>
                <tbody>
                  <tr className="hl"><td className="cv">Fino a 15.000&euro;</td><td className="cv cfr">1.500&euro; <span className="badge">Max</span></td><td>fino a 30 sedute</td></tr>
                  <tr><td>Da 15.001&euro; a 30.000&euro;</td><td className="cv">1.000&euro;</td><td>fino a 20 sedute</td></tr>
                  <tr><td>Da 30.001&euro; a 50.000&euro;</td><td className="cv">500&euro;</td><td>fino a 10 sedute</td></tr>
                  <tr><td>Oltre 50.000&euro;</td><td>Non ammesso</td><td>&mdash;</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} Se lo psicologo costa pi&ugrave; di 50&euro; a seduta</div>
              <p>Il bonus copre <strong>massimo 50&euro; per seduta</strong>. Se il tuo professionista chiede 70&euro;, i 20&euro; di differenza li paghi tu. Consiglio: cerca psicoterapeuti che applicano tariffe in linea con il bonus, oppure chiedi se fanno una tariffa agevolata per i beneficiari.</p>
            </div>

            <div className="dark-block r">
              <h3>{'\uD83D\uDCA1'} Esempio: Giulia, ISEE 12.000&euro;</h3>
              <p>Giulia ha 28 anni e soffre di ansia. Ha un ISEE di <strong>12.000&euro;</strong>. Fa domanda sul portale INPS e rientra in graduatoria.</p>
              <p>Importo assegnato: <strong>1.500&euro;</strong></p>
              <p>Costo seduta dal suo psicoterapeuta: <strong>50&euro;</strong></p>
              <p>Sedute coperte interamente dal bonus: <strong>30</strong></p>
              <p>Costo per Giulia: <strong>0&euro;</strong> per 30 sedute di psicoterapia.</p>
              <p>Se il suo psicoterapeuta chiedesse 65&euro; a seduta, Giulia pagherebbe 15&euro; di tasca sua per ogni seduta &mdash; ma le prime 50&euro; le copre lo Stato.</p>
            </div>
          </div>

          {/* REQUISITI */}
          <div className="sec r" id="requisiti">
            <div className="sec-tag">Chi pu&ograve; richiederlo</div>
            <h2>Requisiti</h2>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83C\uDDEE\uD83C\uDDF9'}</div><div className="clb"><strong>Residente in Italia</strong><span className="note">Al momento della presentazione della domanda.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>ISEE valido non superiore a 50.000&euro;</strong><span className="note">Deve essere in corso di validit&agrave; al momento della domanda. Se &egrave; scaduto o errato, la domanda viene respinta.</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDD10'}</div><div className="clb"><strong>SPID, CIE o CNS</strong><span className="note">Per accedere al portale INPS e presentare la domanda online. Non si pu&ograve; fare di persona.</span></div></li>
              <li className="cli r d4"><div className="ci">{'\u2764\uFE0F'}</div><div className="clb"><strong>Nessuna diagnosi o prescrizione medica</strong><span className="note">Basta dichiarare un disagio psicologico (ansia, stress, depressione, fragilit&agrave;). Non serve un certificato.</span></div></li>
            </ul>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Anche per i minorenni</div>
              <p>Il bonus pu&ograve; essere richiesto anche per <strong>figli minorenni</strong>. La domanda va presentata dal genitore o tutore legale. L&apos;ISEE utilizzato &egrave; quello del nucleo familiare del minore.</p>
            </div>

            <a href="/isee" className="xlink r"><span className="xlink-em">{'\uD83D\uDCCB'}</span><div className="xlink-t"><strong>Faccio l&apos;ISEE</strong> &mdash; Senza ISEE valido la domanda viene respinta. Fallo subito, gratis al CAF o online.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DOMANDA */}
          <div className="sec r" id="domanda">
            <div className="sec-tag">Procedura</div>
            <h2>Come fare domanda</h2>
            <p>La domanda si presenta <strong>solo online</strong> sul portale INPS, durante la finestra temporale che l&apos;INPS comunica ogni anno. Per il 2025 era dal 15 settembre al 14 novembre. Per il 2026 la data non &egrave; ancora stata comunicata &mdash; si stima un periodo simile (settembre-novembre 2026).</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Prepara tutto in anticipo</strong>
                  <p>ISEE 2026 valido (fallo adesso se non l&apos;hai), SPID o CIE funzionante, email e cellulare aggiornati su MyINPS. Quando la finestra si apre, devi essere pronto.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Accedi al portale INPS</strong>
                  <p>Vai su inps.it &rarr; cerca &ldquo;Contributo sessioni psicoterapia&rdquo; &rarr; accedi con SPID/CIE/CNS. Oppure chiama il numero verde 803.164 (da fisso, gratuito).</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Compila la domanda</strong>
                  <p>Inserisci o conferma i tuoi dati. Il sistema verifica in automatico il tuo ISEE. Se non &egrave; valido, la domanda non va avanti.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Attendi la graduatoria</strong>
                  <p>Dopo la chiusura della finestra, l&apos;INPS stila le graduatorie regionali (circa 3 settimane). Ricevi l&apos;esito via SMS, email o App IO. Se sei ammesso, ricevi il codice univoco.</p>
                </div>
              </div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB6'} Il consiglio di ZeroBurocrazia</div>
              <p><strong>Non aspettare l&apos;apertura della finestra per fare l&apos;ISEE.</strong> Nel 2025 sono state presentate oltre 245.000 domande e i fondi si sono esauriti rapidamente. Avere gi&agrave; l&apos;ISEE pronto ti permette di fare domanda il primo giorno, evitando problemi tecnici dell&apos;ultimo minuto. Fai l&apos;ISEE adesso &mdash; &egrave; gratis al CAF.</p>
            </div>

            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> &mdash; Serve per accedere al portale INPS e fare domanda. Come farlo gratis in 15 minuti.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* GRADUATORIA */}
          <div className="sec breve-hide r" id="graduatoria">
            <div className="sec-tag">Come funziona</div>
            <h2>Le graduatorie</h2>
            <p>Il bonus non &egrave; &ldquo;primo arrivato, primo servito&rdquo;. L&apos;INPS stila <strong>graduatorie regionali</strong> con due criteri, in quest&apos;ordine:</p>

            <ul className="cl">
              <li className="cli r d1"><div className="ci">1</div><div className="clb"><strong>ISEE pi&ugrave; basso = priorit&agrave;</strong><span className="note">Chi ha l&apos;ISEE pi&ugrave; basso viene ammesso per primo. Questo &egrave; il criterio principale.</span></div></li>
              <li className="cli r d2"><div className="ci">2</div><div className="clb"><strong>A parit&agrave; di ISEE: ordine cronologico</strong><span className="note">Se due persone hanno lo stesso ISEE, passa prima chi ha fatto domanda prima (orario di protocollo).</span></div></li>
            </ul>

            <p>I fondi per il 2026 sono <strong>8,5 milioni di euro</strong> (meno dei 9,5 milioni del 2025). Con 245.000 domande nel 2025, i fondi si esauriscono in fretta. Chi ha un ISEE basso ha buone probabilit&agrave;; chi ha un ISEE vicino ai 50.000&euro; ne ha pochissime.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} Scorrimento graduatorie</div>
              <p>Se qualcuno non usa il bonus entro i 270 giorni (o non fa la prima seduta entro 60 giorni), il suo posto viene assegnato al successivo in graduatoria. Quindi anche se non rientri subito, potresti essere ammesso pi&ugrave; tardi tramite scorrimento.</p>
            </div>
          </div>

          {/* USO */}
          <div className="sec breve-hide r" id="uso">
            <div className="sec-tag">Dopo l&apos;ammissione</div>
            <h2>Come usare il bonus</h2>
            <p>Se la tua domanda viene accolta, ecco cosa fare:</p>

            <div className="steps r">
              <div className="step r d1">
                <div className="stepn">1</div>
                <div className="stepb">
                  <strong>Ricevi il codice univoco</strong>
                  <p>L&apos;INPS ti comunica l&apos;ammissione e ti assegna un codice alfanumerico via SMS, email o App IO. Lo trovi anche nella sezione &ldquo;Ricevute e provvedimenti&rdquo; del portale INPS.</p>
                </div>
              </div>
              <div className="step r d2">
                <div className="stepn">2</div>
                <div className="stepb">
                  <strong>Scegli lo psicoterapeuta (aderente)</strong>
                  <p>Deve essere iscritto all&apos;Albo degli Psicologi e aver aderito all&apos;iniziativa. L&apos;elenco &egrave; sul portale INPS o sul sito del CNOP (Consiglio Nazionale Ordine Psicologi).</p>
                </div>
              </div>
              <div className="step r d3">
                <div className="stepn">3</div>
                <div className="stepb">
                  <strong>Fai la prima seduta entro 60 giorni</strong>
                  <p>Dal 2025 &egrave; obbligatorio effettuare almeno una seduta entro 60 giorni dall&apos;accoglimento. Se non lo fai, <strong>perdi il bonus</strong> e il contributo viene assegnato al successivo in graduatoria.</p>
                </div>
              </div>
              <div className="step r d4">
                <div className="stepn">4</div>
                <div className="stepb">
                  <strong>Usa il codice a ogni seduta</strong>
                  <p>Comunica il codice univoco al professionista. Lui lo inserisce nel sistema INPS per farsi pagare direttamente. Tu non anticipi nulla (per la parte coperta dal bonus). Hai <strong>270 giorni</strong> in totale per usare tutto l&apos;importo.</p>
                </div>
              </div>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'⚠️'} I 60 giorni sono tassativi</div>
              <p>Se non fai almeno una seduta entro 60 giorni dall&apos;accoglimento, <strong>il bonus decade automaticamente</strong>. Non ci sono proroghe. Quindi appena ricevi il codice, prenota subito la prima seduta.</p>
            </div>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che fanno perdere il bonus</h2>
            <div className="ib warn r"><div className="ib-t">{'⚠️'} ISEE scaduto o non valido</div><p>L&apos;errore pi&ugrave; comune. Se il tuo ISEE non &egrave; in corso di validit&agrave; al momento della domanda, <strong>la domanda viene respinta</strong>. Fai l&apos;ISEE 2026 prima dell&apos;apertura della finestra.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'⚠️'} Non fare la prima seduta entro 60 giorni</div><p>Dal 2025, chi non effettua almeno una seduta entro 60 giorni dall&apos;accoglimento <strong>perde il diritto al bonus</strong>. Il contributo viene riassegnato al successivo in graduatoria.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'⚠️'} Scegliere uno psicologo non aderente</div><p>Il bonus funziona solo con professionisti che hanno aderito all&apos;iniziativa INPS. Se vai da uno psicologo che non &egrave; nell&apos;elenco, <strong>paghi tutto tu</strong>. Verifica sempre prima sul portale INPS o sul sito CNOP.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'⚠️'} Aspettare l&apos;ultimo giorno per fare domanda</div><p>Non &egrave; un click-day puro (conta l&apos;ISEE, non chi arriva primo). Per&ograve; a parit&agrave; di ISEE conta l&apos;ordine di arrivo. E il primo giorno il sito INPS potrebbe avere rallentamenti. Meglio fare domanda nei primi giorni della finestra.</p></div>
          </div>

          {/* FAQ */}
          <div className="sec breve-hide r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          {/* GUIDE CORRELATE */}
          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/isee" className="rc r d1"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l'ISEE</div><div className="rc-d">Senza ISEE valido la domanda viene respinta. Fallo adesso.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid" className="rc r d2"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per accedere al portale INPS e fare domanda.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/esenzione-ticket" className="rc r d3"><span className="rc-e">{'\uD83D\uDC8A'}</span><div className="rc-t">Esenzione ticket</div><div className="rc-d">Se hai reddito basso, potresti non pagare visite ed esami.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <SidebarToggle />
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDD17'} Link utili</div>
            <a href="https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.contributo-per-sostenere-le-spese-relative-a-sessioni-di-psicoterapia-bonus-psicologo.html" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83C\uDFE6'}</span><div><div className="sbtool-n">INPS</div><div className="sbtool-d">Domanda bonus psicologo</div></div></a>
            <a href="https://www.psy.it/bonus-psicologico" target="_blank" rel="noopener noreferrer" className="sbtool"><span className="sbtool-i">{'\uD83E\uDDD1\u200D\u2695\uFE0F'}</span><div><div className="sbtool-n">CNOP</div><div className="sbtool-d">Elenco psicoterapeuti aderenti</div></div></a>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} ISEE<span className="sbg-ar">&rarr;</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} SPID<span className="sbg-ar">&rarr;</span></a>
            <a href="/esenzione-ticket" className="sbguide">{'\uD83D\uDC8A'} Esenzione ticket<span className="sbg-ar">&rarr;</span></a>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} 730<span className="sbg-ar">&rarr;</span></a>
          </div>
        </aside>
      </div>

      <Footer variant="scheda" />
    </>
    </div>
  );
}
