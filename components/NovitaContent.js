'use client';
import { useState } from 'react';
import Link from 'next/link';

const filters = [
  { label: 'Tutti', value: 'all' },
  { label: '💰 Fisco', value: 'fisco' },
  { label: '🏠 Casa', value: 'casa' },
  { label: '👨‍👩‍👧 Famiglia', value: 'famiglia' },
  { label: '💼 Lavoro', value: 'lavoro' },
  { label: '🪪 Documenti', value: 'documenti' },
  { label: '📊 Partita IVA', value: 'piva' },
];

export default function NovitaContent() {
  const [active, setActive] = useState('all');

  const show = (cats) => {
    if (active === 'all') return true;
    return cats.split(' ').includes(active);
  };

  return (
    <>
      {/* HERO */}
      <div className="nov-hero">
        <div className="nov-label">📋 Aggiornato a marzo 2026</div>
        <h1>Cosa cambia nel 2026</h1>
        <p>Tutti i cambiamenti reali della Legge di Bilancio 2026, delle circolari INPS e dell&apos;Agenzia delle Entrate. Solo cose certe, già in vigore. Niente rumor.</p>
      </div>

      {/* FILTERS */}
      <div className="filters">
        {filters.map(f => (
          <a
            key={f.value}
            className={`filter-pill${active === f.value ? ' active' : ''}`}
            href="#"
            onClick={e => { e.preventDefault(); setActive(f.value); }}
          >
            {f.label}
          </a>
        ))}
      </div>

      <div className="posts">

        {/* ── FISCO E 730 ── */}
        {show('fisco') && <>
          <div className="nov-section">
            <div className="nov-section-label">🧾 Fisco e dichiarazione dei redditi</div>
            <Link href="/730" className="nov-guide-link">Guida completa: Faccio il 730 →</Link>
          </div>

          <div className="nov-item">
            <div className="nov-badge nov-badge-big">Importante</div>
            <h3>Tre scaglioni IRPEF definitivi</h3>
            <p>La riforma IRPEF diventa strutturale. I nuovi scaglioni: fino a 28.000€ paghi il <strong>23%</strong>, da 28.001€ a 50.000€ il <strong>33%</strong> (prima era 35%), oltre 50.000€ il <strong>43%</strong>. Per chi guadagna tra 28.000€ e 50.000€ il risparmio è di circa 440€ all&apos;anno.</p>
          </div>

          <div className="nov-item">
            <div className="nov-badge nov-badge-warn">Attenzione</div>
            <h3>Reddito sopra 75.000€: detrazioni ridotte</h3>
            <p>Se guadagni più di 75.000€ lordi, le detrazioni al 19% vengono tagliate progressivamente fino ad azzerarsi a 100.000€. Restano intatte: spese sanitarie, interessi su mutui prima casa (stipulati entro il 2024) e rate di ristrutturazioni già iniziate.</p>
          </div>

          <div className="nov-item">
            <div className="nov-badge nov-badge-warn">Attenzione</div>
            <h3>Figli a carico: limite dei 30 anni</h3>
            <p>I figli possono essere fiscalmente a carico solo fino ai 30 anni (prima non c&apos;era limite). Se tuo figlio ha più di 30 anni e non è disabile, non puoi più detrarlo nel 730.</p>
          </div>

          <div className="nov-item">
            <h3>Detrazione lavoro dipendente aumentata</h3>
            <p>Per chi guadagna meno di 15.000€ lordi all&apos;anno, la detrazione sale da 1.880€ a <strong>1.955€</strong>.</p>
          </div>

          <div className="nov-item">
            <h3>Spese scolastiche: tetto alzato</h3>
            <p>Il tetto massimo per le spese di istruzione passa da 800€ a <strong>1.000€ per figlio</strong>. Il risparmio massimo sale da 152€ a 190€ per figlio.</p>
          </div>

          <div className="nov-item">
            <h3>Bonus affitto per neoassunti</h3>
            <p>Assunto a tempo indeterminato nel 2025 e trasferito per lavoro? I rimborsi del datore per affitto e alloggio non fanno reddito per i primi due anni, fino a 5.000€/anno.</p>
          </div>

          <div className="nov-item">
            <div className="nov-badge nov-badge-warn">Attenzione</div>
            <h3>Farmaci: serve il pagamento tracciabile</h3>
            <p>Dal 2025 anche i farmaci da banco senza ricetta richiedono pagamento con carta, bancomat o bonifico per essere detraibili. Restano detraibili in contanti solo i farmaci con ricetta medica e le visite mediche.</p>
          </div>
        </>}

        {/* ── CASA ── */}
        {show('casa') && <>
          <div className="nov-section">
            <div className="nov-section-label">🏠 Casa e ristrutturazioni</div>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <Link href="/ristrutturare" className="nov-guide-link">Ristrutturare casa →</Link>
              <Link href="/compro-casa" className="nov-guide-link">Compro casa →</Link>
            </div>
          </div>

          <div className="nov-item">
            <div className="nov-badge nov-badge-big">Importante</div>
            <h3>Bonus ristrutturazione: 50% prima casa, 36% seconda</h3>
            <p>La detrazione per ristrutturazione è confermata al <strong>50%</strong> per la prima casa (tetto 96.000€) e scende al <strong>36%</strong> per gli altri immobili. Si recupera in 10 rate annuali. Lo sconto in fattura e la cessione del credito non sono più disponibili.</p>
          </div>

          <div className="nov-item">
            <h3>Ecobonus e Sismabonus: stesse aliquote</h3>
            <p>Anche l&apos;Ecobonus e il Sismabonus seguono la stessa logica: <strong>50%</strong> per la prima casa, <strong>36%</strong> per le altre. Tetti di spesa invariati.</p>
          </div>

          <div className="nov-item">
            <h3>Bonus mobili: confermato al 50%</h3>
            <p>Puoi detrarre il 50% dell&apos;acquisto di mobili e grandi elettrodomestici fino a 5.000€, ma solo se hai una ristrutturazione in corso o conclusa nell&apos;anno.</p>
          </div>
        </>}

        {/* ── FAMIGLIA ── */}
        {show('famiglia') && <>
          <div className="nov-section">
            <div className="nov-section-label">👨‍👩‍👧 Famiglia e figli</div>
            <Link href="/figlio" className="nov-guide-link">Guida: Aspetto un figlio →</Link>
          </div>

          <div className="nov-item">
            <h3>Assegno unico: importi rivalutati</h3>
            <p>Per un figlio minore con ISEE sotto 17.090€ l&apos;importo sale a <strong>200,99€/mese</strong>. Per ISEE oltre 45.574€ l&apos;importo minimo è 57,45€/mese. Se presenti l&apos;ISEE entro il 30 giugno, gli arretrati vengono riconosciuti da gennaio.</p>
          </div>

          <div className="nov-item">
            <h3>Bonus mamme lavoratrici: esteso alle autonome</h3>
            <p>Il bonus contributivo per le madri lavoratrici con 2 o più figli si estende anche alle lavoratrici autonome.</p>
          </div>
        </>}

        {/* ── LAVORO ── */}
        {show('lavoro') && <>
          <div className="nov-section">
            <div className="nov-section-label">💼 Lavoro</div>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <Link href="/naspi" className="nov-guide-link">NASpI →</Link>
              <Link href="/dimissioni" className="nov-guide-link">Dimissioni →</Link>
              <Link href="/tfr" className="nov-guide-link">TFR →</Link>
            </div>
          </div>

          <div className="nov-item">
            <h3>NASpI: nessun cambiamento sostanziale</h3>
            <p>I requisiti e le modalità della NASpI restano invariati nel 2026. Gli importi massimi sono rivalutati annualmente dall&apos;INPS.</p>
          </div>

          <div className="nov-item">
            <h3>Dimissioni online: procedura invariata</h3>
            <p>Le dimissioni volontarie continuano a essere obbligatoriamente telematiche tramite il portale del Ministero del Lavoro (accessibile con SPID).</p>
          </div>
        </>}

        {/* ── DOCUMENTI ── */}
        {show('documenti') && <>
          <div className="nov-section">
            <div className="nov-section-label">🪪 Documenti e digitale</div>
            <Link href="/spid" className="nov-guide-link">Guida: Faccio lo SPID →</Link>
          </div>

          <div className="nov-item">
            <h3>IT Wallet: patente e tessera sanitaria nell&apos;app IO</h3>
            <p>Da marzo 2026 puoi avere patente e tessera sanitaria in formato digitale nell&apos;app IO. Serve lo SPID per attivarle. Sono documenti validi a tutti gli effetti.</p>
          </div>
        </>}

        {/* ── PARTITA IVA ── */}
        {show('piva') && <>
          <div className="nov-section">
            <div className="nov-section-label">📊 Partita IVA</div>
            <Link href="/piva" className="nov-guide-link">Guida: Apro la Partita IVA →</Link>
          </div>

          <div className="nov-item">
            <h3>Forfettario: soglia confermata a 85.000€</h3>
            <p>Il limite di ricavi per restare nel regime forfettario rimane a 85.000€. Nessuna novità sulle aliquote (15% o 5% per i primi 5 anni).</p>
          </div>

          <div className="nov-item">
            <h3>Flat tax incrementale: non rinnovata</h3>
            <p>La flat tax incrementale al 15% sugli incrementi di reddito non è stata rinnovata per il 2026.</p>
          </div>
        </>}

        {/* SUBSCRIBE BOX */}
        <div className="sub-box">
          <div className="sub-icon">📬</div>
          <div className="sub-title">Ricevi gli aggiornamenti</div>
          <div className="sub-desc">Quando cambiano le regole, te lo diciamo noi. Niente spam — solo le cose che ti riguardano davvero.</div>
          <input className="sub-input" type="email" placeholder="la-tua@email.it" />
          <button className="sub-btn">Iscrivimi</button>
        </div>

        {/* FOOTER NOTE */}
        <div className="nov-footer-note">
          <p><strong>Fonti:</strong> Legge di Bilancio 2026 (L. 207/2024), Agenzia delle Entrate, circolari INPS, D.Lgs. 216/2023 (riforma IRPEF). Ultimo aggiornamento: marzo 2026.</p>
          <p>Le informazioni in questa pagina sono a scopo informativo. Per decisioni importanti, consulta sempre un professionista.</p>
        </div>

      </div>
    </>
  );
}
