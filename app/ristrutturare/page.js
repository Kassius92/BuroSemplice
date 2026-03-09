import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import TOC from '@/components/TOC';
import FAQ from '@/components/FAQ';
import PrintButton from '@/components/PrintButton';
import SidebarToggle from '@/components/SidebarToggle';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import QuizRistrutturare from '@/components/QuizRistrutturare';
import CalcRistrutturare from '@/components/CalcRistrutturare';
import Tip from '@/components/Tip';

export const metadata = {
  title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi',
  description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.',
  alternates: { canonical: 'https://zeroburocrazia.it/ristrutturare' },
  openGraph: {
    title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi',
    description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.',
    url: 'https://zeroburocrazia.it/ristrutturare',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogristrutturare.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Ristrutturare Casa nel 2026: Bonus, Detrazioni, Permessi e Costi', description: 'Ristrutturare casa nel 2026: bonus ristrutturazione 50%, ecobonus, superbonus residuo, permessi comunali, preventivi e detrazioni fiscali. Guida gratuita.', images: ['https://zeroburocrazia.it/ogristrutturare.png'] },
};

const tocItems = [
  { id: 'sintesi', label: 'In sintesi' },
  { id: 'cose', label: "Cos'\u00E8" },
  { id: 'bonus', label: 'Bonus 2026' },
  { id: 'permessi', label: 'Permessi' },
  { id: 'come-fare', label: 'Come fare' },
  { id: 'errori', label: 'Errori', bh: true },
  { id: 'esempio', label: 'Esempio pratico', bh: true },
  { id: 'faq', label: 'FAQ', bh: true },
];

const faqItems = [
  { q: "Posso detrarre la ristrutturazione se sono in affitto?", a: "<strong>S\u00EC, ma al 36% (non al 50%).</strong> Inquilini e comodatari possono detrarre, a condizione di avere il consenso del proprietario e di pagare con bonifico parlante." },
  { q: "Il bonus mobili \u00E8 indipendente dal bonus ristrutturazione?", a: "<strong>No, \u00E8 collegato.</strong> Puoi accedere al bonus mobili (50% fino a 5.000\u20AC) solo se hai lavori di ristrutturazione in corso con regolare pratica edilizia. La data di inizio lavori deve precedere l\u2019acquisto dei mobili." },
  { q: "Se vendo la casa, perdo le detrazioni residue?", a: "<strong>Di default passano al nuovo proprietario.</strong> Per\u00F2 puoi accordarti nell\u2019atto di vendita per mantenerle tu. Mettilo per iscritto dal notaio, altrimenti le perdi automaticamente." },
  { q: "Posso cumulare bonus ristrutturazione ed Ecobonus?", a: "<strong>S\u00EC, ma non sullo stesso intervento.</strong> Esempio: bonus ristrutturazione per rifare il bagno, Ecobonus per cambiare gli infissi. Per lo stesso lavoro devi sceglierne uno solo." },
  { q: "Posso sostituire la caldaia a gas e detrarre?", a: "<strong>No, dal 2025 \u00E8 esclusa.</strong> La sostituzione di caldaie a combustibili fossili non \u00E8 pi\u00F9 agevolabile. Puoi detrarre pompe di calore, caldaie ibride o sistemi a biomassa." },
  { q: "Quanto costa ristrutturare casa al metro quadro?", a: "<strong>Tra 500 e 1.600\u20AC/mq per una ristrutturazione completa</strong>, a seconda della citt\u00E0 e delle finiture. Un rifacimento parziale (bagno + cucina + impianti) si aggira sui 15.000\u201335.000\u20AC per 80 mq. Chiedi sempre un computo metrico dettagliato, non un prezzo \u201Ca corpo\u201D." },
  { q: "Superbonus 110%: \u00E8 ancora attivo?", a: "<strong>No.</strong> Dal 2025 il Superbonus non \u00E8 pi\u00F9 disponibile, salvo casi residuali post-sisma. I lavori che prima rientravano nel Superbonus ora rientrano nelle aliquote ordinarie (50%/36%)." },
  { q: "Dal 2027 le aliquote calano?", a: "<strong>S\u00EC.</strong> Nel 2027 si scende al 36% (prima casa) e 30% (altre). Dal 2028 al 30% per tutti. Se puoi, conviene sostenere le spese entro il 31 dicembre 2026." },
];

export default function Page() {
  const schemas = [
    articleSchema({ title: 'Ristrutturare Casa \u2014 Guida Completa 2026 | ZeroBurocrazia', description: 'Ristrutturare casa nel 2026: bonus ristrutturazione, ecobonus, superbonus, permessi e preventivi. Guida gratuita su detrazioni e pratiche.', url: '/ristrutturare', image: 'ogristrutturare.png', datePublished: '2026-03-04', dateModified: '2026-03-09' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-casa">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"></div><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
        <svg className="ring" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="#0F4C5C" strokeWidth="1"/><circle cx="180" cy="180" r="130" stroke="#0F4C5C" strokeWidth=".8"/><circle cx="180" cy="180" r="90" stroke="#E36414" strokeWidth=".8"/>
          <line x1="10" y1="180" x2="350" y2="180" stroke="#0F4C5C" strokeWidth=".6"/><line x1="180" y1="10" x2="180" y2="350" stroke="#0F4C5C" strokeWidth=".6"/>
          <line x1="60" y1="60" x2="300" y2="300" stroke="#0F4C5C" strokeWidth=".5"/><line x1="300" y1="60" x2="60" y2="300" stroke="#0F4C5C" strokeWidth=".5"/>
          <circle cx="180" cy="10" r="4" fill="#E36414" opacity=".6"/><circle cx="180" cy="350" r="4" fill="#E36414" opacity=".6"/>
          <circle cx="10" cy="180" r="4" fill="#2A9D8F" opacity=".6"/><circle cx="350" cy="180" r="4" fill="#2A9D8F" opacity=".6"/>
        </svg>
        <div className="shimmer-line"></div>
        <div className="hero-c">
          <div className="hero-left">
            <div className="cat-badge">{'\uD83C\uDFE0'} Casa</div>
            <div className="hero-tag"><span className="tag-dot"></span> Guida gratuita completa</div>
            <h1>Ristrutturare <em>casa</em></h1>
            <p className="hero-sub">Bonus, permessi, preventivi e IVA agevolata: tutto quello che devi sapere prima di iniziare i lavori, spiegato come si deve.</p>
            <div className="hero-pills">
              <span className="pill pill-g">{'\u2726'} 100% gratuita</span>
              <span className="pill pill-b">{'\uD83D\uDD50'} 14 min di lettura</span>
              <span className="pill pill-s">{'\u2713'} Aggiornato marzo 2026</span>
            </div>
            <div className="hero-source"><strong>Fonti:</strong> Agenzia delle Entrate · ENEA · DPR 380/2001 · Legge di Bilancio 2026</div>
            <PrintButton />
          </div>
          <div className="hero-right">
            <div className="hstat"><div className="hn">50%</div><div className="hl">detrazione bonus<br/>prima casa 2026</div></div>
            <div className="hstat"><div className="hn">96k€</div><div className="hl">tetto massimo<br/>di spesa</div></div>
            <div className="hstat"><div className="hn">10%</div><div className="hl">IVA agevolata<br/>su lavori e materiali</div></div>
          </div>
        </div>
      </section>

      <TOC items={tocItems} />

      <div className="layout">
        <main className="main">

          {/* PERCORSO */}
          <div className="perc r">
            <span className="perc-label">Percorso</span>
            <div className="perc-steps">
              <a href="/spid" className="ps done">{'\u2713'} SPID</a><span className="pa">{'\u203A'}</span>
              <a href="/isee" className="ps done">{'\u2713'} ISEE</a><span className="pa">{'\u203A'}</span>
              <a href="/730" className="ps done">{'\u2713'} 730</a><span className="pa">{'\u203A'}</span>
              <a href="/ristrutturare" className="ps active">{'\uD83D\uDD28'} Ristrutturare casa</a>
            </div>
          </div>

          {/* SINTESI */}
          <div className="sec r" id="sintesi">
            <div className="sintesi">
              <div className="sintesi-label">{'\u26A1'} In sintesi</div>
              <div className="scards">
                <div className="sc tc r d1"><div className="si">{'\uD83D\uDCB0'}</div><div className="sn">50%</div><div className="sl">detrazione prima casa 2026</div></div>
                <div className="sc sg r d2"><div className="si">{'\uD83C\uDFE0'}</div><div className="sn">36%</div><div className="sl">detrazione seconde case</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83D\uDCC1'}</div><div className="sn">96k€</div><div className="sl">tetto massimo di spesa</div></div>
                <div className="sc    r d1"><div className="si">{'\uD83D\uDCC6'}</div><div className="sn">10</div><div className="sl">rate annuali di detrazione</div></div>
                <div className="sc bl r d2"><div className="si">{'\uD83E\uDDFE'}</div><div className="sn">10%</div><div className="sl">IVA agevolata sui lavori</div></div>
                <div className="sc    r d3"><div className="si">{'\uD83E\uDE91'}</div><div className="sn">5k€</div><div className="sl">tetto bonus mobili (50%)</div></div>
              </div>
            </div>
            <QuizRistrutturare />
          </div>

          {/* COS'È */}
          <div className="sec r" id="cose">
            <div className="sec-tag">Le basi</div>
            <h2>Cos&apos;&egrave; il bonus ristrutturazione (spiegato semplice)</h2>

            <p>Funziona cos&igrave;: ristrutturi casa, paghi tutto tu, e lo Stato ti <strong>restituisce la met&agrave; in 10 anni</strong> attraverso la dichiarazione dei redditi. Non &egrave; uno sconto immediato — &egrave; una <Tip t="Una riduzione delle tasse che paghi. Ogni anno, per 10 anni, paghi meno IRPEF. Se spendi 50.000€ e detrai il 50%, recuperi 2.500€/anno per 10 anni.">detrazione IRPEF</Tip>: ogni anno paghi meno tasse.</p>

            <p>In pratica: se spendi 50.000€ per ristrutturare la tua prima casa, lo Stato ti restituisce 25.000€ in 10 rate da 2.500€/anno. Attenzione: se non paghi abbastanza IRPEF, perdi la parte che non riesci a detrarre.</p>

            <h3>Le parole che devi conoscere</h3>
            <div className="glossary r">
              <div className="gl-item r d1"><strong>Detrazione IRPEF</strong> — Lo Stato ti riduce le tasse che paghi. Non ti d&agrave; soldi in mano: ogni anno paghi meno IRPEF nella dichiarazione dei redditi. Se non paghi abbastanza tasse, perdi la differenza.</div>
              <div className="gl-item r d2"><strong>Bonifico parlante</strong> — Un bonifico speciale che la banca ha gi&agrave; pronto come modulo. Deve indicare: la causale di legge (art. 16-bis DPR 917/86), il tuo codice fiscale e la partita IVA dell&apos;impresa. <strong>Senza questo bonifico, niente detrazione.</strong></div>
              <div className="gl-item r d3"><strong>CILA</strong> — Comunicazione Inizio Lavori Asseverata. Il permesso che serve per la maggior parte dei lavori interni: rifacimento bagno, impianti, tramezzi. La prepara un tecnico (geometra, architetto) e costa 500-1.500€.</div>
              <div className="gl-item r d4"><strong>SCIA</strong> — Segnalazione Certificata di Inizio Attivit&agrave;. Serve per lavori pi&ugrave; pesanti: muri portanti, tetto, solai. La prepara un ingegnere o architetto.</div>
              <div className="gl-item r d1"><strong>ENEA</strong> — L&apos;ente a cui devi comunicare i lavori di efficienza energetica (Ecobonus) entro 90 giorni dalla fine lavori. Se non lo fai, perdi la detrazione.</div>
              <div className="gl-item r d2"><strong>Manutenzione straordinaria</strong> — I lavori che ti danno diritto al bonus: rifare il bagno, cambiare gli impianti, spostare i tramezzi, sostituire gli infissi. La manutenzione <em>ordinaria</em> (tinteggiare, cambiare piastrelle senza toccare impianti) <strong>non</strong> d&agrave; diritto al bonus su un singolo appartamento.</div>
            </div>

            <div className="ib mon r">
              <div className="ib-t">{'\uD83D\uDCB0'} Non &egrave; uno sconto in fattura</div>
              <p>Dal 2025 lo sconto in fattura e la cessione del credito non esistono pi&ugrave; (salvo rarissime eccezioni per condomini). Oggi puoi usare <strong>solo la detrazione in dichiarazione</strong>. Tradotto: devi avere i soldi per pagare tutto, e li recuperi un po&apos; alla volta in 10 anni.</p>
            </div>
          </div>

          {/* BONUS 2026 */}
          <div className="sec r" id="bonus">
            <div className="sec-tag">Agevolazioni 2026</div>
            <h2>Tutti i bonus per ristrutturare nel 2026</h2>
            <p>Nel 2026 il sistema &egrave; pi&ugrave; semplice: <strong>50% per la prima casa</strong>, <strong>36% per tutti gli altri immobili</strong>.</p>

            <div className="tw r">
              <table>
                <thead><tr><th>Bonus</th><th>Prima casa</th><th>Altre</th><th>Tetto spesa</th></tr></thead>
                <tbody>
                  <tr className="hl"><td><strong>Bonus Ristrutturazione</strong> <span className="badge">Principale</span></td><td className="cv">50%</td><td>36%</td><td className="cv">96.000€</td></tr>
                  <tr><td><strong><Tip t="Il bonus per lavori di efficienza energetica: cappotto termico, pompa di calore, infissi, pannelli solari. Stesse aliquote del bonus ristrutturazione.">Ecobonus</Tip></strong></td><td className="cv">50%</td><td>36%</td><td className="cv">30.000–100.000€*</td></tr>
                  <tr><td><strong><Tip t="Il bonus per lavori antisismici: consolidamento strutturale, adeguamento, diagnosi sismica.">Sismabonus</Tip></strong></td><td className="cv">50%</td><td>36%</td><td className="cv">96.000€</td></tr>
                  <tr><td><strong>Bonus Mobili</strong></td><td className="cv" colSpan="2" style={{textAlign:'center'}}>50%</td><td className="cv">5.000€</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{fontSize:'13px',color:'var(--t3)'}}>* Il tetto dell&apos;Ecobonus varia: 30.000€ per caldaie, 60.000€ per cappotto, 100.000€ per riqualificazione globale.</p>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} Dal 2027 le aliquote calano</div>
              <p>2027: <strong>36%</strong> prima casa, <strong>30%</strong> altre. 2028: <strong>30% per tutti</strong>. Se puoi, conviene sostenere le spese entro il 31 dicembre 2026.</p>
            </div>

            <h3>Chi pu&ograve; chiedere il 50%</h3>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDD11'}</div><div className="clb"><strong>Proprietario o titolare di diritto reale</strong><span className="note">Propriet&agrave;, usufrutto, uso, abitazione. L&apos;inquilino ha diritto solo al 36%.</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83C\uDFE0'}</div><div className="clb"><strong>L&apos;immobile &egrave; la tua abitazione principale</strong><span className="note">Devi viverci. Se ristrutturi una seconda casa, hai il 36%.</span></div></li>
            </ul>

            <h3>Cosa puoi detrarre</h3>
            <div className="ucgrid r">
              <div className="uc r d1"><div className="uc-e">{'\uD83D\uDD27'}</div><div className="uc-n"><Tip t="Lavori che modificano l'immobile: rifare il bagno, spostare tramezzi, rifare gli impianti, cambiare infissi. Diversa dalla manutenzione ordinaria (tinteggiare, cambiare piastrelle) che NON dà diritto al bonus.">Manutenzione straordinaria</Tip></div><div className="uc-d">Rifacimento bagno, impianti, tramezzi, pavimenti, infissi.</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83C\uDFD7'}</div><div className="uc-n">Ristrutturazione edilizia</div><div className="uc-d">Demolizione e ricostruzione, ampliamenti, cambio destinazione d&apos;uso.</div></div>
              <div className="uc r d3"><div className="uc-e">{'\uD83C\uDF21'}</div><div className="uc-n">Efficienza energetica</div><div className="uc-d">Cappotto termico, pompa di calore, infissi. No caldaie a gas (escluse dal 2025).</div></div>
              <div className="uc r d4"><div className="uc-e">{'\uD83D\uDEE1'}</div><div className="uc-n">Sicurezza antisismica</div><div className="uc-d">Consolidamento strutturale, adeguamento antisismico, diagnosi sismica.</div></div>
              <div className="uc r d1"><div className="uc-e">{'\u267F'}</div><div className="uc-n">Barriere architettoniche</div><div className="uc-d">Ascensori, rampe, automazione porte.</div></div>
              <div className="uc r d2"><div className="uc-e">{'\uD83E\uDE91'}</div><div className="uc-n">Mobili ed elettrodomestici</div><div className="uc-d">Solo se collegati a una ristrutturazione. Classe A per forni, E per lavatrici.</div></div>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La manutenzione ordinaria non basta</div>
              <p>Tinteggiare le pareti, sostituire piastrelle senza toccare impianti o cambiare una porta interna <strong>non d&agrave; diritto al bonus</strong> su un singolo appartamento. La manutenzione ordinaria &egrave; detraibile solo per le parti comuni condominiali.</p>
            </div>
            <a href="/730" className="xlink r"><span className="xlink-em">{'\uD83E\uDDFE'}</span><div className="xlink-t"><strong>Faccio il 730</strong> — Nella dichiarazione inserisci le rate annuali della detrazione.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* PERMESSI */}
          <div className="sec r" id="permessi">
            <div className="sec-tag">Burocrazia</div>
            <h2>Quale permesso ti serve</h2>
            <p>Il permesso dipende dal tipo di lavoro. Sbagliare significa sanzioni e perdere il bonus.</p>
            <div className="tw r">
              <table>
                <thead><tr><th>Tipo di lavoro</th><th>Permesso</th><th>Serve un tecnico?</th></tr></thead>
                <tbody>
                  <tr><td>Tinteggiatura, pavimenti, infissi (stesse dimensioni)</td><td className="cv">Nessuno (edilizia libera)</td><td>No</td></tr>
                  <tr className="hl"><td><strong>Rifacimento bagno, impianti, tramezzi non portanti</strong></td><td className="cv"><Tip t="Comunicazione Inizio Lavori Asseverata. Il documento più comune: lo prepara un tecnico e lo deposita in Comune. Costa 500-1.500€.">CILA</Tip></td><td className="cfr">S&igrave; (geometra/architetto)</td></tr>
                  <tr><td>Lavori su muri portanti, tetto, solai</td><td className="cv"><Tip t="Segnalazione Certificata di Inizio Attività. Per lavori strutturali più pesanti. La prepara un ingegnere o architetto.">SCIA</Tip></td><td className="cfr">S&igrave; (ingegnere)</td></tr>
                  <tr><td>Ampliamento, demolizione e ricostruzione pesante</td><td className="cv">Permesso di costruire</td><td className="cfr">S&igrave; (ingegnere/architetto)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} La CILA costa, ma non averla costa di pi&ugrave;</div>
              <p>Una CILA costa 500–1.500€ (tecnico incluso). Ma fare lavori senza permesso comporta una sanzione di 1.000€ e, soprattutto, pu&ograve; farti <strong>perdere il diritto al bonus</strong>. Quel risparmio di 1.000€ pu&ograve; costartene 20.000.</p>
            </div>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} IVA agevolata al 10%</div>
              <p>Per lavori di <Tip t="Lavori che modificano l'immobile: rifare bagno, impianti, tramezzi, infissi. La manutenzione ordinaria (tinteggiare, cambiare piastrelle) ha l'IVA al 22%.">manutenzione straordinaria</Tip> e ristrutturazione, l&apos;IVA &egrave; al <strong>10%</strong> invece del 22%. Vale su manodopera e materiali forniti dall&apos;impresa (con limitazioni per &quot;beni significativi&quot; come caldaie e infissi).</p>
            </div>
          </div>

          {/* COME FARE */}
          <div className="sec r" id="come-fare">
            <div className="sec-tag">Passo per passo</div>
            <h2>Come si fa, dall&apos;inizio alla fine</h2>
            <p>Ristrutturare casa senza perdere il bonus richiede di seguire un ordine preciso.</p>
            <div className="steps">
              <div className="step r d1"><div className="stepn">1</div><div className="stepb"><strong>Chiedi almeno 3 preventivi</strong><p>Confronta pi&ugrave; imprese. Il preventivo deve dettagliare ogni voce: manodopera, materiali, smaltimento, spese tecniche. Diffida di chi d&agrave; un prezzo &quot;a corpo&quot; senza voci.</p></div></div>

              {/* AFFILIAZIONE PREVENTIVI */}
              <div className="aff-block r">
                <div className="aff-label">Strumento consigliato</div>
                <div className="aff-body">
                  <div className="aff-left">
                    <div className="aff-title">Ricevi fino a 4 preventivi gratuiti da imprese della tua zona</div>
                    <div className="aff-text">Descrivi i lavori, ricevi preventivi dettagliati da professionisti verificati. Confronti e scegli senza impegno.</div>
                    <div className="aff-note">* Link in partnership — se richiedi preventivi, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
                  </div>
                  <a href="QUI_LINK_AFFILIATO_RISTRUTTURARE_PREV" target="_blank" rel="noopener sponsored" className="aff-btn">Chiedi preventivi {'\u2192'}</a>
                </div>
              </div>

              <div className="step r d2"><div className="stepn">2</div><div className="stepb"><strong>Incarica un tecnico abilitato</strong><p>Geometra, architetto o ingegnere. Prepara la pratica edilizia (<Tip t="Comunicazione Inizio Lavori Asseverata: il permesso per la maggior parte dei lavori interni.">CILA</Tip> o <Tip t="Segnalazione Certificata di Inizio Attività: per lavori strutturali pesanti (muri portanti, tetto).">SCIA</Tip>), il progetto e, se serve, l&apos;asseverazione per l&apos;Ecobonus. Il suo compenso &egrave; detraibile.</p></div></div>
              <div className="step r d3"><div className="stepn">3</div><div className="stepb"><strong>Presenta la pratica in Comune</strong><p>Il tecnico deposita la CILA o SCIA. Per la CILA i lavori possono iniziare subito. Per la SCIA anche, ma il Comune ha 30 giorni per bloccarli.</p></div></div>
              <div className="step r d1"><div className="stepn">4</div><div className="stepb"><strong>Paga sempre con <Tip t="Un bonifico speciale con causale di legge, il tuo codice fiscale e la P.IVA dell'impresa. La banca ha un modulo apposito. Senza questo bonifico, niente detrazione.">bonifico parlante</Tip></strong><p>Il bonifico deve riportare: causale con riferimento di legge (art. 16-bis DPR 917/86), tuo codice fiscale e partita IVA dell&apos;impresa. <strong>Senza bonifico parlante, niente detrazione.</strong></p></div></div>
              <div className="step r d2"><div className="stepn">5</div><div className="stepb"><strong>Comunica all&apos;<Tip t="L'ente nazionale per l'efficienza energetica. Devi comunicargli i lavori energetici (Ecobonus) entro 90 giorni dalla fine lavori. Si fa online con SPID.">ENEA</Tip> (se richiesto)</strong><p>Per lavori di efficienza energetica (Ecobonus) devi inviare la comunicazione entro 90 giorni dalla fine lavori. Per il bonus ristrutturazione &quot;puro&quot; non serve.</p></div></div>
              <div className="step r d3"><div className="stepn">6</div><div className="stepb"><strong>Inserisci la detrazione nel 730</strong><p>Ogni anno per 10 anni, nella dichiarazione dei redditi, indichi la quota annuale. La prima rata parte dall&apos;anno successivo al pagamento.</p></div></div>
            </div>
            <a href="/spid" className="xlink r"><span className="xlink-em">{'\uD83D\uDD10'}</span><div className="xlink-t"><strong>Faccio lo SPID</strong> — Serve per ENEA e per il precompilato dell&apos;Agenzia delle Entrate.</div><span className="xlink-ar">{'\u2192'}</span></a>
          </div>

          {/* DOCUMENTI */}
          <div className="sec breve-hide r" id="documenti">
            <div className="sec-tag">Checklist</div>
            <h2>Documenti da conservare</h2>
            <p>L&apos;Agenzia delle Entrate pu&ograve; chiederti tutto per <strong>10 anni</strong> dopo l&apos;ultima rata. Non buttare niente.</p>
            <ul className="cl">
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCCB'}</div><div className="clb"><strong>Pratica edilizia (CILA/SCIA/PdC)</strong><span className="note">Copia della comunicazione al Comune con ricevuta di deposito</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCB3'}</div><div className="clb"><strong>Bonifici parlanti</strong><span className="note">Tutti i pagamenti con la causale corretta (art. 16-bis)</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83E\uDDFE'}</div><div className="clb"><strong>Fatture dell&apos;impresa</strong><span className="note">Devono corrispondere ai lavori autorizzati e ai bonifici</span></div></li>
              <li className="cli r d1"><div className="ci">{'\uD83D\uDCD0'}</div><div className="clb"><strong>Asseverazione del tecnico</strong><span className="note">Per Ecobonus: attestazione requisiti tecnici. Per Sismabonus: progetto strutturale</span></div></li>
              <li className="cli r d2"><div className="ci">{'\uD83D\uDCCA'}</div><div className="clb"><strong>APE post-lavori</strong><span className="note">Attestato di Prestazione Energetica aggiornato dopo interventi energetici</span></div></li>
              <li className="cli r d3"><div className="ci">{'\uD83D\uDCE8'}</div><div className="clb"><strong>Ricevuta ENEA</strong><span className="note">Per interventi energetici: invio entro 90 giorni dalla fine lavori</span></div></li>
              <li className="cli r d4"><div className="ci">{'\uD83C\uDFE2'}</div><div className="clb"><strong>Delibera e ripartizione spese (condominio)</strong><span className="note">Se i lavori sono su parti comuni: delibera assembleare e tabella millesimale</span></div></li>
            </ul>
          </div>

          {/* ERRORI */}
          <div className="sec breve-hide r" id="errori">
            <div className="sec-tag">Da evitare</div>
            <h2>Errori che fanno perdere il bonus</h2>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Pagare senza bonifico parlante</div><p>Un bonifico ordinario, un assegno o un pagamento in contanti ti fanno perdere <strong>l&apos;intera detrazione</strong> su quella fattura. La banca ha un modulo apposito per il <Tip t="Il bonifico speciale con causale di legge, codice fiscale e P.IVA. Senza questo, niente detrazione.">bonifico parlante</Tip>: usalo sempre.</p></div>
            <div className="ib warn r d1"><div className="ib-t">{'\u26A0\uFE0F'} Fare lavori senza pratica edilizia</div><p>Se l&apos;Agenzia delle Entrate verifica e non trovi la CILA o SCIA, perdi il bonus e prendi una sanzione. Anche un &quot;semplice&quot; rifacimento del bagno richiede la <Tip t="Comunicazione Inizio Lavori Asseverata: il permesso per i lavori interni come bagno, impianti, tramezzi.">CILA</Tip>.</p></div>
            <div className="ib warn r d2"><div className="ib-t">{'\u26A0\uFE0F'} Non comunicare all&apos;ENEA entro 90 giorni</div><p>Per l&apos;<Tip t="Il bonus per lavori di efficienza energetica: cappotto, pompa di calore, infissi. Richiede comunicazione all'ENEA.">Ecobonus</Tip>, se non invii la comunicazione ENEA entro 90 giorni dalla fine lavori, perdi la detrazione. Il termine &egrave; tassativo.</p></div>
            <div className="ib warn r d3"><div className="ib-t">{'\u26A0\uFE0F'} Comprare i mobili prima di iniziare i lavori</div><p>Il bonus mobili &egrave; collegato a una ristrutturazione. La data di inizio lavori (sulla pratica edilizia) deve essere <strong>anteriore</strong> alla data di acquisto dei mobili. Se compri prima, perdi la detrazione.</p></div>
            <div className="ib warn r"><div className="ib-t">{'\u26A0\uFE0F'} Intestare il bonifico a persona diversa</div><p>Chi detrae deve essere chi paga. Se il mutuo &egrave; di tuo marito ma il bonifico parte dal tuo conto, hai un problema. Verifica la coerenza tra pagante e chi chiede la detrazione.</p></div>
          </div>

          {/* ESEMPIO PRATICO */}
          <div className="sec breve-hide r" id="esempio">
            <div className="sec-tag">Caso reale</div>
            <h2>Esempio pratico: Marco e Valentina recuperano 23.750€</h2>

            <p><strong>Marco (38 anni) e Valentina (35 anni)</strong> vivono a Napoli in un appartamento di propriet&agrave; (prima casa) comprato 5 anni fa. Bagno vecchio, cucina da rifare, impianto elettrico non a norma. Decidono di ristrutturare.</p>

            <h3>I lavori</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Rifacimento bagno completo</span><span className="db-new">12.000€</span></div>
              <div className="db-row"><span className="db-label">Rifacimento cucina + impianti</span><span className="db-new">16.000€</span></div>
              <div className="db-row"><span className="db-label">Impianto elettrico a norma</span><span className="db-new">4.500€</span></div>
              <div className="db-row"><span className="db-label">Spese tecniche (CILA + progetto)</span><span className="db-new">2.000€</span></div>
              <div className="db-row"><span className="db-label">Mobili cucina + elettrodomestici</span><span className="db-new">5.000€</span></div>
              <div className="db-row db-total"><span className="db-label">Totale speso</span><span className="db-val">39.500€</span></div>
            </div>

            <h3>Quanto recuperano</h3>
            <div className="dark-block r">
              <div className="db-row"><span className="db-label">Detrazione lavori 50% (su 34.500€)</span><span className="db-new">17.250€</span></div>
              <div className="db-row"><span className="db-label">Detrazione mobili 50% (su 5.000€)</span><span className="db-new">2.500€</span></div>
              <div className="db-row"><span className="db-label">Risparmio IVA (10% vs 22%)</span><span className="db-new">~4.000€</span></div>
              <div className="db-row db-total"><span className="db-label">Totale recuperato</span><span className="db-val">~23.750€</span></div>
            </div>

            <p>Su 39.500€ spesi, Marco e Valentina ne recuperano <strong>23.750€</strong> — il 60% del totale. La detrazione arriva in 10 rate annuali da 1.975€, che si traduce in quasi <strong>165€ in meno di tasse al mese</strong>.</p>

            <h3>Cosa hanno fatto bene</h3>
            <p>1. Hanno chiesto 3 preventivi prima di scegliere l&apos;impresa.<br/>2. Hanno fatto la CILA <em>prima</em> di iniziare i lavori.<br/>3. Hanno pagato <strong>tutto</strong> con bonifico parlante — anche le spese tecniche.<br/>4. Hanno comprato i mobili <em>dopo</em> la data di inizio lavori sulla CILA.<br/>5. Hanno chiesto al tecnico fatture separate per avere le causali corrette.</p>

            <div className="ib tip r">
              <div className="ib-t">{'\uD83D\uDCA1'} La morale</div>
              <p>Il bonus ristrutturazione &egrave; uno dei pi&ugrave; generosi in Italia. La chiave: <strong>CILA prima dei lavori, bonifico parlante per ogni pagamento, e documenti conservati per 10 anni</strong>. Chi segue le regole recupera quasi la met&agrave;. Chi improvvisa perde tutto.</p>
            </div>
          </div>

          {/* CALCOLATORE */}
          <div className="sec breve-hide r" id="calcolatore">
            <div className="sec-tag">Strumento interattivo</div>
            <h2>Stima la tua detrazione</h2>
            <CalcRistrutturare />
          </div>

          {/* AFFILIAZIONE MOBILI */}
          <div className="aff-block r">
            <div className="aff-label">Strumento consigliato</div>
            <div className="aff-body">
              <div className="aff-left">
                <div className="aff-title">Arreda casa nuova con il bonus mobili: fino a 2.500€ di detrazione</div>
                <div className="aff-text">Mobili, divani, letti, elettrodomestici classe A+. Paga con bonifico o carta e detrai il 50% in 10 rate.</div>
                <div className="aff-note">* Link in partnership — se acquisti, ZeroBurocrazia riceve una piccola commissione. Non cambia nulla per te.</div>
              </div>
              <a href="QUI_LINK_AFFILIATO_RISTRUTTURARE_MOBILI" target="_blank" rel="noopener sponsored" className="aff-btn">Scopri l&apos;arredamento {'\u2192'}</a>
            </div>
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
              <a href="/730" className="rc"><span className="rc-e">{'\uD83E\uDDFE'}</span><div className="rc-t">Faccio il 730</div><div className="rc-d">Come inserire le rate di detrazione nella dichiarazione.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/compro-casa" className="rc"><span className="rc-e">{'\uD83C\uDFE0'}</span><div className="rc-t">Compro casa</div><div className="rc-d">Imposte, mutuo e bonus prima casa.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Faccio lo SPID</div><div className="rc-d">Serve per ENEA e la dichiarazione precompilata.</div><span className="rc-ar">{'\u2192'}</span></a>
              <a href="/isee" className="rc"><span className="rc-e">{'\uD83D\uDCCB'}</span><div className="rc-t">Faccio l&apos;ISEE</div><div className="rc-d">L&apos;immobile ristrutturato pu&ograve; cambiare il tuo ISEE.</div><span className="rc-ar">{'\u2192'}</span></a>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="aside">
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDEE0'} Strumenti</div>
            <a href="#calcolatore" className="sbtool"><span className="sbtool-i">{'\uD83E\uDDEE'}</span><div><div className="sbtool-n">Calcolatore detrazione</div><div className="sbtool-d">Stima il tuo bonus</div></div></a>
            <a href="#quiz-serve" className="sbtool"><span className="sbtool-i">{'\u2705'}</span><div><div className="sbtool-n">Quiz &quot;serve a me?&quot;</div><div className="sbtool-d">Scopri il tuo caso</div></div></a>
            <div className="sbtool" style={{opacity:'.5',cursor:'default'}}><span className="sbtool-i">{'\uD83D\uDCCD'}</span><div><div className="sbtool-n">Trova tecnico</div><div className="sbtool-d"><span className="sbadge">Presto</span></div></div></div>
          </div>
          <div className="sbsec">
            <div className="sbsec-t">{'\uD83D\uDCDA'} Guide correlate</div>
            <a href="/730" className="sbguide">{'\uD83E\uDDFE'} Faccio il 730<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/compro-casa" className="sbguide">{'\uD83C\uDFE0'} Compro casa<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/spid" className="sbguide">{'\uD83D\uDD10'} Faccio lo SPID<span className="sbg-ar">{'\u2192'}</span></a>
            <a href="/isee" className="sbguide">{'\uD83D\uDCCB'} Faccio l&apos;ISEE<span className="sbg-ar">{'\u2192'}</span></a>
          </div>
          <SidebarToggle />
        </aside>
      </div>

      <BrevoForm pageName="ristrutturare" />
      <Footer />
    </>
    </div>
  );
}
