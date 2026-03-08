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
  { label: '⚠️ Scadenze', value: 'scadenza' },
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
        <div className="nov-label">📢 Aggiornamenti</div>
        <h1>Novità e scadenze</h1>
        <p>Ogni volta che cambia qualcosa — una circolare INPS, una scadenza, un nuovo bonus — lo spieghiamo qui in parole semplici.</p>
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

      {/* POSTS */}
      <div className="posts">

        {/* FEATURED */}
        {show('fisco') && (
          <div className="post-feat" data-category="fisco">
            <div className="pf-tag"><span className="pf-dot" /> In evidenza</div>
            <div className="pf-title">Reddito sopra 75.000€? Le detrazioni 2026 cambiano. Ecco cosa devi sapere.</div>
            <div className="pf-excerpt">La Legge di Bilancio 2025 taglia le detrazioni al 19% per chi guadagna oltre 75.000€. Ma non tutte: spese sanitarie, mutui e ristrutturazioni restano. Ti spieghiamo chi è colpito e cosa fare.</div>
            <div className="pf-meta">5 marzo 2026 · 3 min di lettura</div>
            <a href="#" className="pf-read">Leggi tutto</a>
          </div>
        )}

        {/* POST 1 */}
        {show('scadenza fisco') && (
          <a href="#" className="post-card" data-category="scadenza fisco">
            <div className="pc-top">
              <span className="pc-cat cat-scadenza">⚠️ Scadenza</span>
              <span className="pc-date">4 marzo 2026</span>
            </div>
            <div className="pc-title">730 precompilato: disponibile dal 2 maggio. Ecco cosa fare prima.</div>
            <div className="pc-excerpt">L&apos;Agenzia delle Entrate pubblica il precompilato dal 2 maggio. Ma conviene preparare i documenti adesso. Ecco la checklist delle cose da raccogliere nelle prossime settimane.</div>
            <div className="pc-guide">Collegato alla guida: Faccio il 730</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 2 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* POST 2 */}
        {show('famiglia') && (
          <a href="#" className="post-card" data-category="famiglia">
            <div className="pc-top">
              <span className="pc-cat cat-famiglia">👨‍👩‍👧 Famiglia</span>
              <span className="pc-date">1 marzo 2026</span>
            </div>
            <div className="pc-title">Assegno unico 2026: importi aggiornati e nuove soglie ISEE.</div>
            <div className="pc-excerpt">L&apos;INPS ha pubblicato le nuove tabelle. Per un figlio minore con ISEE sotto 17.090€ l&apos;importo sale a 200,99€/mese. Ecco tutti gli scaglioni aggiornati.</div>
            <div className="pc-guide">Collegato alla guida: Aspetto un figlio</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 2 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* POST 3 */}
        {show('casa') && (
          <a href="#" className="post-card" data-category="casa">
            <div className="pc-top">
              <span className="pc-cat cat-casa">🏠 Casa</span>
              <span className="pc-date">27 febbraio 2026</span>
            </div>
            <div className="pc-title">Bonus ristrutturazione 2026: confermato al 50% ma con nuovi limiti.</div>
            <div className="pc-excerpt">La detrazione resta al 50% su un massimo di 96.000€ per la prima casa. Per la seconda casa scende al 36%. Ecco cosa cambia per chi deve iniziare i lavori quest&apos;anno.</div>
            <div className="pc-guide">Collegato alla guida: Ristrutturare casa</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 3 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* POST 4 */}
        {show('documenti') && (
          <a href="#" className="post-card" data-category="documenti">
            <div className="pc-top">
              <span className="pc-cat cat-documenti">🪪 Documenti</span>
              <span className="pc-date">25 febbraio 2026</span>
            </div>
            <div className="pc-title">IT Wallet: patente e tessera sanitaria arrivano sull&apos;app IO.</div>
            <div className="pc-excerpt">Da marzo 2026 puoi avere patente e tessera sanitaria digitali nell&apos;app IO. Serve lo SPID per attivarle. Ecco come funziona e cosa cambia nella pratica.</div>
            <div className="pc-guide">Collegato alla guida: Faccio lo SPID</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 2 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* POST 5 */}
        {show('fisco scadenza') && (
          <a href="#" className="post-card" data-category="fisco scadenza">
            <div className="pc-top">
              <span className="pc-cat cat-fisco">💰 Fisco</span>
              <span className="pc-date">20 febbraio 2026</span>
            </div>
            <div className="pc-title">ISEE 2026: attenzione alla scadenza del 30 giugno per l&apos;assegno unico.</div>
            <div className="pc-excerpt">Se presenti l&apos;ISEE entro il 30 giugno, gli arretrati dell&apos;assegno unico ti vengono riconosciuti da gennaio. Ma se lo fai dopo, perdi i mesi precedenti.</div>
            <div className="pc-guide">Collegato alla guida: Faccio l&apos;ISEE</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 2 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* SUBSCRIBE BOX */}
        <div className="sub-box">
          <div className="sub-icon">📬</div>
          <div className="sub-title">Non perderti le scadenze</div>
          <div className="sub-desc">Ricevi le novità importanti direttamente nella tua email. Niente spam — solo quando cambia qualcosa che ti riguarda.</div>
          <input className="sub-input" type="email" placeholder="la-tua@email.it" />
          <button className="sub-btn">Iscrivimi</button>
        </div>

        {/* POST 6 */}
        {show('lavoro') && (
          <a href="#" className="post-card" data-category="lavoro">
            <div className="pc-top">
              <span className="pc-cat cat-lavoro">💼 Lavoro</span>
              <span className="pc-date">18 febbraio 2026</span>
            </div>
            <div className="pc-title">Bonus mamme lavoratrici 2026: confermato, ma cambia la platea.</div>
            <div className="pc-excerpt">Il bonus contributivo per le madri lavoratrici con 2+ figli resta anche nel 2026. Novità: si estende anche alle autonome. Ecco chi ne ha diritto e come si attiva.</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 2 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        {/* POST 7 */}
        {show('casa') && (
          <a href="#" className="post-card" data-category="casa">
            <div className="pc-top">
              <span className="pc-cat cat-casa">🏠 Casa</span>
              <span className="pc-date">15 febbraio 2026</span>
            </div>
            <div className="pc-title">Mutui: i tassi fissi scendono ancora. Conviene surrogare?</div>
            <div className="pc-excerpt">I tassi fissi sono scesi sotto il 3% per la prima volta da due anni. Se hai un mutuo a tasso variabile sopra il 4%, potrebbe essere il momento di valutare la surroga.</div>
            <div className="pc-guide">Collegato alla guida: Compro casa</div>
            <div className="pc-footer">
              <span className="pc-time">⏱ 3 min</span>
              <span className="pc-link">Leggi</span>
            </div>
          </a>
        )}

        <div className="load-more">
          <button className="load-more-btn">Carica altri articoli</button>
        </div>

      </div>
    </>
  );
}
