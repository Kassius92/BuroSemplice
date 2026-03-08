'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function Calculator730() {
  const [reddito, setReddito] = useState(25000);
  const [mediche, setMediche] = useState(300);
  const [hasAffitto, setHasAffitto] = useState(false);
  const [affitto, setAffitto] = useState(500);
  const [hasMutuo, setHasMutuo] = useState(false);
  const [mutuo, setMutuo] = useState(2000);
  const [trasporti, setTrasporti] = useState(0);
  const [figli, setFigli] = useState(0);
  const [scuola, setScuola] = useState(500);
  const [sport, setSport] = useState(200);

  const result = useMemo(() => {
    const aliquota = reddito <= 15000 ? 0.23 : reddito <= 28000 ? 0.25 : reddito <= 50000 ? 0.35 : 0.43;
    const detMed = mediche > 129.11 ? Math.round((mediche - 129.11) * 0.19) : 0;
    let detAff = 0;
    if (hasAffitto) {
      if (reddito <= 15494) detAff = 495;
      else if (reddito <= 30987) detAff = 247;
    }
    const detMut = hasMutuo ? Math.round(Math.min(mutuo, 4000) * 0.19) : 0;
    const detTra = Math.round(Math.min(trasporti, 250) * 0.19);
    let detScu = 0, detSpo = 0;
    if (figli > 0) {
      detScu = Math.round(Math.min(scuola, 800 * figli) * 0.19);
      detSpo = Math.round(Math.min(sport, 210 * figli) * 0.19);
    }
    const totale = detMed + detAff + detMut + detTra + detScu + detSpo;
    return { totale, detMed, detAff, detMut, detTra, detScu, detSpo };
  }, [reddito, mediche, hasAffitto, affitto, hasMutuo, mutuo, trasporti, figli, scuola, sport]);

  const fmt = (v) => v > 0 ? `${v}\u20AC` : '\u2014';

  return (
    <div className="calc-w r">
      <div className="calc-h"><span>Stimatore</span><h3>Quanto potresti recuperare con il 730?</h3></div>
      <div className="calc-b">
        <div className="calc-g">
          <div className="calc-l"><span className="calc-lt">Reddito lordo annuo</span><span className="calc-lv">{reddito.toLocaleString('it-IT')}&euro;</span></div>
          <input type="range" min="8000" max="80000" step="500" value={reddito} onChange={e => setReddito(+e.target.value)} />
          <div className="calc-hint">Il reddito lordo che trovi nella CU</div>
        </div>
        <div className="calc-g">
          <div className="calc-l"><span className="calc-lt">🦷 Spese mediche annue</span><span className="calc-lv">{mediche.toLocaleString('it-IT')}&euro;</span></div>
          <input type="range" min="0" max="5000" step="50" value={mediche} onChange={e => setMediche(+e.target.value)} />
          <div className="calc-hint">Dentista, visite, farmaci, occhiali, psicologo</div>
        </div>
        <div className="calc-g">
          <div className="calc-tog-row">
            <label className="calc-tog"><input type="checkbox" checked={hasAffitto} onChange={e => setHasAffitto(e.target.checked)} /><span className="calc-track"></span></label>
            <span className="calc-tog-label">🏠 Pago l&apos;affitto</span>
          </div>
          {hasAffitto && (
            <div className="calc-sub">
              <div className="calc-l"><span className="calc-lt">Affitto mensile</span><span className="calc-lv">{affitto.toLocaleString('it-IT')}&euro;</span></div>
              <input type="range" min="200" max="1500" step="25" value={affitto} onChange={e => setAffitto(+e.target.value)} />
            </div>
          )}
        </div>
        <div className="calc-g">
          <div className="calc-tog-row">
            <label className="calc-tog"><input type="checkbox" checked={hasMutuo} onChange={e => setHasMutuo(e.target.checked)} /><span className="calc-track"></span></label>
            <span className="calc-tog-label">🏦 Ho un mutuo prima casa</span>
          </div>
          {hasMutuo && (
            <div className="calc-sub">
              <div className="calc-l"><span className="calc-lt">Interessi annui del mutuo</span><span className="calc-lv">{mutuo.toLocaleString('it-IT')}&euro;</span></div>
              <input type="range" min="500" max="5000" step="100" value={mutuo} onChange={e => setMutuo(+e.target.value)} />
              <div className="calc-hint">Li trovi nel documento della banca</div>
            </div>
          )}
        </div>
        <div className="calc-g">
          <div className="calc-l"><span className="calc-lt">🚇 Abbonamento trasporti annuo</span><span className="calc-lv">{trasporti.toLocaleString('it-IT')}&euro;</span></div>
          <input type="range" min="0" max="500" step="10" value={trasporti} onChange={e => setTrasporti(+e.target.value)} />
        </div>
        <div className="calc-div"></div>
        <div className="calc-g">
          <div className="calc-l"><span className="calc-lt">👶 Figli a carico (5–18 anni)</span></div>
          <div className="calc-cnt-row">
            <button className="calc-cnt-btn" onClick={() => setFigli(Math.max(0, figli - 1))}>−</button>
            <span className="calc-cnt-val">{figli}</span>
            <button className="calc-cnt-btn" onClick={() => setFigli(Math.min(5, figli + 1))}>+</button>
          </div>
        </div>
        {figli > 0 && (
          <div className="calc-sub">
            <div className="calc-g">
              <div className="calc-l"><span className="calc-lt">🏫 Spese scolastiche totali</span><span className="calc-lv">{scuola.toLocaleString('it-IT')}&euro;</span></div>
              <input type="range" min="0" max="5000" step="50" value={scuola} onChange={e => setScuola(+e.target.value)} />
              <div className="calc-hint">Rette, mensa, gite — per tutti i figli insieme</div>
            </div>
            <div className="calc-g">
              <div className="calc-l"><span className="calc-lt">⚽ Spese sportive totali</span><span className="calc-lv">{sport.toLocaleString('it-IT')}&euro;</span></div>
              <input type="range" min="0" max="2000" step="25" value={sport} onChange={e => setSport(+e.target.value)} />
            </div>
          </div>
        )}
        <div className="calc-res">
          <div className="calc-res-label">Il tuo rimborso stimato</div>
          <div className="calc-res-amt">{result.totale.toLocaleString('it-IT')}&euro;</div>
          <div className="calc-res-sub">che potresti recuperare con il 730</div>
          <div className="calc-bd730">
            <div className="calc-bd-it"><span>Spese mediche</span><span className={`bdv${result.detMed === 0 ? ' z' : ''}`}>{fmt(result.detMed)}</span></div>
            <div className="calc-bd-it"><span>Affitto</span><span className={`bdv${result.detAff === 0 ? ' z' : ''}`}>{fmt(result.detAff)}</span></div>
            <div className="calc-bd-it"><span>Mutuo</span><span className={`bdv${result.detMut === 0 ? ' z' : ''}`}>{fmt(result.detMut)}</span></div>
            <div className="calc-bd-it"><span>Trasporti</span><span className={`bdv${result.detTra === 0 ? ' z' : ''}`}>{fmt(result.detTra)}</span></div>
            <div className="calc-bd-it"><span>Scuola figli</span><span className={`bdv${result.detScu === 0 ? ' z' : ''}`}>{fmt(result.detScu)}</span></div>
            <div className="calc-bd-it"><span>Sport figli</span><span className={`bdv${result.detSpo === 0 ? ' z' : ''}`}>{fmt(result.detSpo)}</span></div>
          </div>
          <Link href="/ordina?scheda=730" className="btni">Personalizza — Gratis</Link>
          <div className="calc-dis">Stima indicativa basata sulle aliquote 2026. Non considera tutte le casistiche.</div>
        </div>
      </div>
    </div>
  );
}
