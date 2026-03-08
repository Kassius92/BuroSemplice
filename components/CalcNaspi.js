'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return Math.round(n).toLocaleString('it-IT') + '\u20AC'; }

export default function CalcNaspi() {
  const [ral, setRal] = useState(24000);
  const [settimane, setSettimane] = useState(104);
  const [over55, setOver55] = useState(false);

  const result = useMemo(() => {
    const retribMedia = ral / 12;
    const soglia = 1456.72;
    const massimale = 1584.70;

    let importoLordo;
    if (retribMedia <= soglia) {
      importoLordo = retribMedia * 0.75;
    } else {
      importoLordo = soglia * 0.75 + (retribMedia - soglia) * 0.25;
    }
    importoLordo = Math.min(importoLordo, massimale);

    const durataSett = Math.min(Math.floor(settimane / 2), 104);
    const durataMesi = Math.round(durataSett / 4.33 * 10) / 10;

    const nettoStimato = importoLordo * 0.78; // stima IRPEF ~22%

    const meseDecalage = over55 ? 8 : 6;

    return { importoLordo, nettoStimato, durataSett, durataMesi, meseDecalage };
  }, [ral, settimane, over55]);

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Stima importo e durata<br/>della tua NASpI</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">RAL (stipendio annuo lordo)</span>
            <span className="cl2-v">{fmt(ral)}</span>
          </div>
          <input type="range" className="cslider" min={8000} max={60000} step={500} value={ral} onChange={e => setRal(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Settimane lavorate negli ultimi 4 anni</span>
            <span className="cl2-v">{settimane}</span>
          </div>
          <input type="range" className="cslider" min={13} max={208} step={1} value={settimane} onChange={e => setSettimane(+e.target.value)} />
        </div>
        <div className="ctrow">
          <label className="ctog">
            <input type="checkbox" checked={over55} onChange={e => setOver55(e.target.checked)} />
            <span className="ctrack"></span>
          </label>
          <span className="ctog-l">Ho compiuto 55 anni</span>
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">Importo mensile lordo stimato</div>
          <div className="cres-n">{fmt(result.importoLordo)}</div>
          <div className="cres-s">Netto stimato ~{fmt(result.nettoStimato)}/mese</div>
          <div className="cres-grid">
            <div className="cbi"><span>Durata stimata</span><span className="cbv">{result.durataMesi} mesi ({result.durataSett} sett.)</span></div>
            <div className="cbi"><span>Riduzione 3%</span><span className="cbv">dal {result.meseDecalage}° mese</span></div>
            <div className="cbi"><span>Massimale 2026</span><span className="cbv">1.584,70€ lordi</span></div>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-3)',marginTop:'12px',lineHeight:'1.4'}}>Stima indicativa. L&apos;importo effettivo dipende dalla retribuzione imponibile INPS, non dalla RAL. Tasse IRPEF stimate al ~22%.</p>
          <a href="/ordina?scheda=naspi" className="btni">Personalizza — Gratis</a>
        </div>
      </div>
    </div>
  );
}
