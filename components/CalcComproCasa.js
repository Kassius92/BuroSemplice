'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return n.toLocaleString('it-IT') + ' \u20AC'; }

export default function CalcComproCasa() {
  const [prezzo, setPrezzo] = useState(200000);
  const [primaCasa, setPrimaCasa] = useState(true);
  const [mutuo, setMutuo] = useState(true);
  const [agenzia, setAgenzia] = useState(true);

  const result = useMemo(() => {
    const vc = Math.round(prezzo * 0.4);
    const imp = Math.max(Math.round(vc * (primaCasa ? 0.02 : 0.09) / 100) * 100, 1000) + 100;
    const not = prezzo < 150000 ? 1600 : prezzo < 300000 ? 2200 : 2800;
    const cag = agenzia ? Math.round(prezzo * 0.03) : 0;
    const cmu = mutuo ? 600 : 0;
    const tot = imp + not + cag + cmu;
    return { imp, not, cag, cmu, tot };
  }, [prezzo, primaCasa, mutuo, agenzia]);

  return (
    <div className="calc r">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore ZeroBurocrazia</div>
        <h3>Costi acquisto casa 2026</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Prezzo della casa</span>
            <span className="cl2-v">{fmt(prezzo)}</span>
          </div>
          <input
            type="range"
            className="cslider"
            min={50000}
            max={800000}
            step={5000}
            value={prezzo}
            onChange={e => setPrezzo(parseInt(e.target.value))}
          />
        </div>
        <div className="cg">
          <div className="ctrow">
            <label className="ctog">
              <input type="checkbox" checked={primaCasa} onChange={e => setPrimaCasa(e.target.checked)} />
              <span className="ctrack"></span>
            </label>
            <span className="ctog-l">{'\uD83C\uDFE0'} &Egrave; la mia prima casa</span>
          </div>
          <div className="ctrow">
            <label className="ctog">
              <input type="checkbox" checked={mutuo} onChange={e => setMutuo(e.target.checked)} />
              <span className="ctrack"></span>
            </label>
            <span className="ctog-l">{'\uD83C\uDFE6'} Ho bisogno di un mutuo</span>
          </div>
          <div className="ctrow">
            <label className="ctog">
              <input type="checkbox" checked={agenzia} onChange={e => setAgenzia(e.target.checked)} />
              <span className="ctrack"></span>
            </label>
            <span className="ctog-l">{'\uD83E\uDD1D'} Tramite agenzia immobiliare</span>
          </div>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">Costi aggiuntivi stimati</div>
          <div className="cres-n">{fmt(result.tot)}</div>
          <div className="cres-s">oltre al prezzo di {fmt(prezzo)}</div>
          <div className="cres-grid">
            <div className="cbi"><span>Imposte</span><span className="cbv">{fmt(result.imp)}</span></div>
            <div className="cbi"><span>Notaio</span><span className="cbv">~{fmt(result.not)}</span></div>
            <div className="cbi"><span>Agenzia</span><span className="cbv">{agenzia ? fmt(result.cag) : 'N/A'}</span></div>
            <div className="cbi"><span>Costi mutuo</span><span className="cbv">{mutuo ? fmt(result.cmu) : 'N/A'}</span></div>
          </div>
          <a href="/ordina?scheda=compro-casa" className="btni">Calcolo preciso — Gratis</a>
          <p style={{fontSize:'11px',color:'var(--text-3)',marginTop:'14px',lineHeight:'1.6'}}>{'\u26A0\uFE0F'} Stima indicativa. Le imposte si calcolano sul valore catastale rivalutato, non sul prezzo.</p>
        </div>
      </div>
    </div>
  );
}
