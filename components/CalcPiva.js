'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return n.toLocaleString('it-IT') + '\u20AC'; }

export default function CalcPiva() {
  const [ricavi, setRicavi] = useState(30000);
  const [coeff, setCoeff] = useState(78);
  const [nuova, setNuova] = useState(true);
  const [gs, setGs] = useState(true);

  const result = useMemo(() => {
    const aliquota = nuova ? 0.05 : 0.15;
    const reddito = Math.round(ricavi * coeff / 100);
    let inps;
    if (gs) {
      inps = Math.round(reddito * 0.2623);
    } else {
      const min = 4521;
      inps = reddito > 18808 ? min + Math.round((reddito - 18808) * 0.24) : min;
    }
    const imponibile = Math.max(reddito - inps, 0);
    const imposta = Math.round(imponibile * aliquota);
    const totale = inps + imposta;
    const netto = ricavi - totale;
    return { reddito, inps, imposta, totale, netto };
  }, [ricavi, coeff, nuova, gs]);

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Stima tasse e contributi<br/>in regime forfettario</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Ricavi annui previsti</span>
            <span className="cl2-v">{fmt(ricavi)}</span>
          </div>
          <input type="range" className="cslider" min={5000} max={85000} step={1000} value={ricavi} onChange={e => setRicavi(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Coefficiente di redditivit&agrave;</span>
            <span className="cl2-v">{coeff}%</span>
          </div>
          <input type="range" className="cslider" min={40} max={86} step={1} value={coeff} onChange={e => setCoeff(+e.target.value)} />
        </div>
        <div className="ctrow">
          <label className="ctog">
            <input type="checkbox" checked={nuova} onChange={e => setNuova(e.target.checked)} />
            <span className="ctrack"></span>
          </label>
          <span className="ctog-l">Nuova attivit&agrave; (5% primi 5 anni)</span>
        </div>
        <div className="ctrow">
          <label className="ctog">
            <input type="checkbox" checked={gs} onChange={e => setGs(e.target.checked)} />
            <span className="ctrack"></span>
          </label>
          <span className="ctog-l">Gestione Separata INPS (no minimali)</span>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">Stima tasse + contributi annui</div>
          <div className="cres-n">{fmt(result.totale)}</div>
          <div className="cres-s">Ti restano in tasca circa {fmt(result.netto)}</div>
          <div className="cres-grid">
            <div className="cbi"><span>Reddito imponibile</span><span className="cbv">{fmt(result.reddito)}</span></div>
            <div className="cbi"><span>Contributi INPS</span><span className="cbv">{fmt(result.inps)}</span></div>
            <div className="cbi"><span>Imposta sostitutiva</span><span className="cbv">{fmt(result.imposta)}</span></div>
            <div className="cbi"><span>Netto stimato</span><span className="cbv">{fmt(result.netto)}</span></div>
          </div>
          <a href="/ordina?scheda=piva" className="btni">Personalizza — Gratis</a>
        </div>
      </div>
    </div>
  );
}
