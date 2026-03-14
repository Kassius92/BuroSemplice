'use client';
import { useState } from 'react';

const SITUATIONS = [
  { key: 'dip', label: 'Lavoro dipendente', emoji: '\uD83D\uDCBC' },
  { key: 'piva', label: 'Ho la partita IVA', emoji: '\uD83D\uDCCA' },
  { key: 'figli', label: 'Ho figli a carico', emoji: '\uD83D\uDC76' },
  { key: 'mutuo', label: 'Ho un mutuo', emoji: '\uD83C\uDFE0' },
  { key: 'affitto', label: 'Pago un affitto', emoji: '\uD83D\uDD11' },
  { key: 'casa2', label: 'Ho una seconda casa', emoji: '\uD83C\uDFD8\uFE0F' },
  { key: 'naspi', label: 'Sono in NASpI', emoji: '\uD83D\uDCB0' },
  { key: 'mediche', label: 'Spese mediche da detrarre', emoji: '\uD83E\uDE7A' },
];

const MONTHS_ORDER = { gen:0,feb:1,mar:2,apr:3,mag:4,giu:5,lug:6,ago:7,set:8,ott:9,nov:10,dic:11 };

const DEADLINES = {
  dip: [
    { d:16, m:'mar', ml:'Marzo', t:'CU 2026 disponibile', desc:'Il datore deve consegnarti la Certificazione Unica.', link:'/730', ln:'Guida 730' },
    { d:30, m:'apr', ml:'Aprile', t:'730 precompilato online', desc:'Puoi consultare il tuo 730 precompilato sul sito dell\u2019Agenzia Entrate.', link:'/730', ln:'Guida 730' },
    { d:20, m:'mag', ml:'Maggio', t:'730: inizio modifiche e invio', desc:'Da oggi puoi modificare e inviare il 730. Prima invii, prima arriva il rimborso.', link:'/730', ln:'Guida 730', warn:'Invia entro giugno per rimborso a luglio' },
    { d:30, m:'set', ml:'Settembre', t:'Scadenza invio 730', desc:'Ultimo giorno per inviare il 730 precompilato o tramite CAF.', link:'/730', ln:'Guida 730', warn:'Scadenza' },
  ],
  piva: [
    { d:16, m:'mar', ml:'Marzo', t:'Saldo IVA anno precedente', desc:'Versamento saldo IVA risultante dalla dichiarazione annuale.', link:'/regime-forfettario', ln:'Guida forfettario' },
    { d:30, m:'giu', ml:'Giugno', t:'Saldo + acconto imposte', desc:'Versamento saldo IRPEF + primo acconto. Puoi posticipare al 30 luglio con maggiorazione 0,40%.', link:'/piva', ln:'Guida P.IVA', warn:'Scadenza' },
    { d:16, m:'set', ml:'Settembre', t:'Contributi INPS (2\u00aa rata)', desc:'Seconda rata dei contributi fissi IVS per artigiani e commercianti.', link:'/piva', ln:'Guida P.IVA' },
    { d:30, m:'nov', ml:'Novembre', t:'Secondo acconto imposte', desc:'Versamento secondo acconto IRPEF e contributi INPS.', link:'/piva', ln:'Guida P.IVA', warn:'Scadenza' },
  ],
  figli: [
    { d:28, m:'feb', ml:'Febbraio', t:'Rinnova ISEE per Assegno Unico', desc:'Senza ISEE aggiornato l\u2019importo si riduce al minimo (58\u20ac) da marzo.', link:'/isee', ln:'Guida ISEE', warn:'Urgente' },
    { d:19, m:'mar', ml:'Marzo', t:'Pagamento Assegno Unico marzo', desc:'Primo pagamento con il nuovo ISEE 2026. Possibili arretrati per rivalutazione.', link:'/assegno-unico', ln:'Guida Assegno Unico' },
    { d:30, m:'giu', ml:'Giugno', t:'Ultimo giorno ISEE per arretrati', desc:'Entro oggi puoi presentare la DSU e recuperare gli arretrati da marzo.', link:'/isee', ln:'Guida ISEE', warn:'Scadenza' },
    { d:30, m:'set', ml:'Settembre', t:'Detrazione figli nel 730', desc:'Inserisci le detrazioni per figli a carico nel 730 prima della scadenza.', link:'/730', ln:'Guida 730' },
  ],
  mutuo: [
    { d:30, m:'apr', ml:'Aprile', t:'Controlla interessi mutuo nel 730', desc:'Gli interessi passivi del mutuo prima casa sono detraibili al 19% fino a 4.000\u20ac.', link:'/mutuo', ln:'Guida Mutuo' },
    { d:30, m:'set', ml:'Settembre', t:'Scadenza 730 con detrazione mutuo', desc:'Ultimo giorno per inserire la detrazione interessi nel 730.', link:'/730', ln:'Guida 730' },
  ],
  affitto: [
    { d:30, m:'apr', ml:'Aprile', t:'Detrazione affitto nel 730', desc:'Se hai un contratto registrato, puoi detrarre fino a 991\u20ac di affitto.', link:'/730', ln:'Guida 730' },
    { d:30, m:'set', ml:'Settembre', t:'Scadenza 730 con detrazione affitto', desc:'Ultimo giorno per inserire la detrazione canone di locazione.', link:'/730', ln:'Guida 730' },
  ],
  casa2: [
    { d:16, m:'giu', ml:'Giugno', t:'Acconto IMU seconda casa', desc:'Prima rata IMU. Calcola l\u2019importo con la rendita catastale.', link:'/imu', ln:'Guida IMU', warn:'Scadenza' },
    { d:16, m:'dic', ml:'Dicembre', t:'Saldo IMU seconda casa', desc:'Seconda rata IMU a saldo. Verifica eventuali variazioni di aliquota.', link:'/imu', ln:'Guida IMU', warn:'Scadenza' },
  ],
  naspi: [
    { d:15, m:'mar', ml:'Marzo', t:'Pagamento NASpI marzo', desc:'Accredito tra il 10 e il 17 marzo. Controlla stato su MyINPS.', link:'/naspi', ln:'Guida NASpI' },
    { d:31, m:'gen', ml:'Gennaio', t:'Comunicazione reddito presunto', desc:'Se lavori durante la NASpI, comunica il reddito annuale presunto all\u2019INPS.', link:'/naspi', ln:'Guida NASpI', warn:'Obbligatorio' },
  ],
  mediche: [
    { d:30, m:'apr', ml:'Aprile', t:'Spese mediche nel precompilato', desc:'Controlla che tutte le spese sanitarie siano caricate. Aggiungi quelle mancanti.', link:'/spese-mediche', ln:'Guida spese mediche' },
    { d:30, m:'set', ml:'Settembre', t:'Scadenza 730 con detrazioni mediche', desc:'Ultimo giorno per detrarre il 19% delle spese sopra la franchigia di 129\u20ac.', link:'/spese-mediche', ln:'Guida spese mediche', warn:'Scadenza' },
  ],
};

export default function ScadenzeTracker() {
  const [selected, setSelected] = useState([]);
  const [results, setResults] = useState(null);

  const toggle = (key) => {
    setSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    setResults(null);
  };

  const generate = () => {
    let items = [];
    selected.forEach(k => { if (DEADLINES[k]) items = items.concat(DEADLINES[k]); });
    items.sort((a, b) => (MONTHS_ORDER[a.m] * 100 + a.d) - (MONTHS_ORDER[b.m] * 100 + b.d));
    const seen = {};
    items = items.filter(it => { const k = it.m + it.d + it.t; if (seen[k]) return false; seen[k] = 1; return true; });
    setResults(items);
  };

  const grouped = results ? results.reduce((acc, it) => {
    if (!acc[it.ml]) acc[it.ml] = [];
    acc[it.ml].push(it);
    return acc;
  }, {}) : {};

  return (
    <>
      <div className="tool-header">
        <div className="tool-eyebrow">Strumento gratuito</div>
        <h1 className="tool-title">Le mie <em>scadenze</em> 2026</h1>
        <p className="tool-sub">Seleziona le situazioni che ti riguardano. Ti mostriamo solo le scadenze importanti per te.</p>
      </div>

      <div className="sc-grid">
        {SITUATIONS.map(s => (
          <button key={s.key} className={`sc-opt${selected.includes(s.key) ? ' sc-on' : ''}`} onClick={() => toggle(s.key)}>
            <span className="sc-emoji">{s.emoji}</span>
            <span className="sc-opt-label">{s.label}</span>
            <span className="sc-check">{selected.includes(s.key) ? '\u2713' : ''}</span>
          </button>
        ))}
      </div>

      <button className="sc-btn" disabled={selected.length === 0} onClick={generate}>
        Vedi le mie scadenze \u2192
      </button>

      {results && (
        <div className="sc-results">
          <div className="sc-count">
            <strong>{results.length}</strong>
            scadenze che ti riguardano nel 2026
          </div>

          {Object.entries(grouped).map(([month, items]) => (
            <div key={month}>
              <div className="sc-month">{month} 2026</div>
              {items.map((it, i) => (
                <div className="sc-item" key={i}>
                  <div className="sc-date">
                    <div className="sc-date-d">{it.d}</div>
                    <div className="sc-date-m">{it.m}</div>
                  </div>
                  <div className="sc-item-body">
                    <div className="sc-item-title">
                      {it.t}
                      {it.warn && <span className="sc-pill">{it.warn}</span>}
                    </div>
                    <div className="sc-item-desc">{it.desc}</div>
                    <a href={it.link} className="sc-item-link">{it.ln} \u2192</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
