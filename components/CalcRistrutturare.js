'use client';
import { useState } from 'react';

function fmt(n) { return n.toLocaleString('it-IT') + ' €'; }

export default function CalcRistrutturare() {
  const [importo, setImporto] = useState(40000);
  const [primaCasa, setPrimaCasa] = useState(true);
  const [mobili, setMobili] = useState(false);

  const aliq = primaCasa ? 0.50 : 0.36;
  const detLavori = Math.round(importo * aliq);
  const detMobili = mobili ? Math.round(5000 * 0.50) : 0;
  const tot = detLavori + detMobili;
  const rata = Math.round(tot / 10);

  return (
    <div className="calc" id="calcolatore-tool">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore ZeroBurocrazia</div>
        <h3>Bonus ristrutturazione 2026</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2"><span className="cl2-t">Importo lavori</span><span className="cl2-v">{fmt(importo)}</span></div>
          <input type="range" className="cslider" min="5000" max="96000" step="1000" value={importo} onChange={e => setImporto(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="ctrow">
            <label className="ctog">
              <input type="checkbox" checked={primaCasa} onChange={() => setPrimaCasa(!primaCasa)} />
              <span className="ctrack"></span>
            </label>
            <span className="ctog-l">🏠 È la mia abitazione principale</span>
          </div>
          <div className="ctrow">
            <label className="ctog">
              <input type="checkbox" checked={mobili} onChange={() => setMobili(!mobili)} />
              <span className="ctrack"></span>
            </label>
            <span className="ctog-l">🪑 Acquisto anche mobili/elettrodomestici</span>
          </div>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">Totale che recuperi in 10 anni</div>
          <div className="cres-n">{fmt(tot)}</div>
          <div className="cres-s">recuperati in 10 rate da {fmt(rata)}/anno</div>
          <div className="cres-grid">
            <div className="cbi"><span>Detrazione lavori</span><span className="cbv">{fmt(detLavori)}</span></div>
            <div className="cbi"><span>Rata annuale</span><span className="cbv">{fmt(rata)}/anno</span></div>
            <div className="cbi"><span>Aliquota applicata</span><span className="cbv">{primaCasa ? '50%' : '36%'}</span></div>
            <div className="cbi"><span>Bonus mobili</span><span className="cbv">{mobili ? fmt(detMobili) : 'N/A'}</span></div>
          </div>
          <a href="/ordina?scheda=ristrutturare" className="btni">Personalizza — Gratis</a>
          <p style={{fontSize:'11px',color:'var(--t3)',marginTop:'14px',lineHeight:'1.6'}}>⚠️ Stima indicativa. La detrazione effettiva dipende dalla capienza IRPEF. Se paghi meno tasse della rata annuale, perdi la differenza.</p>
        </div>
      </div>
    </div>
  );
}
