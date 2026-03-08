'use client';
import { useState, useMemo } from 'react';

function fmt(n) { return Math.round(n).toLocaleString('it-IT') + '\u20AC'; }

export default function CalcTfr() {
  const [ral, setRal] = useState(25000);
  const [anni, setAnni] = useState(5);

  const result = useMemo(() => {
    const quotaAnnua = ral / 13.5;
    const contributoInps = ral * 0.005;
    const quotaNetta = quotaAnnua - contributoInps;
    const tfrLordo = quotaNetta * anni;

    // Stima rivalutazione media ~2.5%/anno composto
    const rivalutazione = tfrLordo * 0.025 * (anni / 2);
    const tfrRivalutato = tfrLordo + rivalutazione;

    // Tassazione separata: aliquota media stimata ~23%
    const aliquotaMedia = 0.23;
    const tasseSulTfr = (tfrLordo) * aliquotaMedia;
    const tasseSuRival = rivalutazione * 0.17;
    const tfrNetto = tfrRivalutato - tasseSulTfr - tasseSuRival;

    return { quotaAnnua: quotaNetta, tfrLordo, rivalutazione, tfrRivalutato, tfrNetto };
  }, [ral, anni]);

  return (
    <div className="calc">
      <div className="calc-hd">
        <div className="calc-tag">Calcolatore</div>
        <h3>Stima del tuo TFR<br/>lordo e netto</h3>
      </div>
      <div className="calc-bd">
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">RAL (stipendio annuo lordo)</span>
            <span className="cl2-v">{fmt(ral)}</span>
          </div>
          <input type="range" className="cslider" min={10000} max={80000} step={500} value={ral} onChange={e => setRal(+e.target.value)} />
        </div>
        <div className="cg">
          <div className="cl2">
            <span className="cl2-t">Anni di lavoro</span>
            <span className="cl2-v">{anni}</span>
          </div>
          <input type="range" className="cslider" min={1} max={40} step={1} value={anni} onChange={e => setAnni(+e.target.value)} />
        </div>
        <div className="cdiv"></div>
        <div className="cres">
          <div className="cres-l">TFR netto stimato</div>
          <div className="cres-n">{fmt(result.tfrNetto)}</div>
          <div className="cres-s">TFR lordo rivalutato ~{fmt(result.tfrRivalutato)}</div>
          <div className="cres-grid">
            <div className="cbi"><span>Quota annua accantonata</span><span className="cbv">~{fmt(result.quotaAnnua)}</span></div>
            <div className="cbi"><span>TFR lordo ({anni} anni)</span><span className="cbv">{fmt(result.tfrLordo)}</span></div>
            <div className="cbi"><span>Rivalutazione stimata</span><span className="cbv">+{fmt(result.rivalutazione)}</span></div>
            <div className="cbi"><span>TFR netto stimato</span><span className="cbv">{fmt(result.tfrNetto)}</span></div>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-3)',marginTop:'12px',lineHeight:'1.4'}}>Stima indicativa. L&apos;importo reale dipende dalla retribuzione utile TFR (non sempre uguale alla RAL), dalla rivalutazione ISTAT effettiva e dall&apos;aliquota media IRPEF calcolata dall&apos;Agenzia delle Entrate.</p>
          <a href="/ordina?scheda=tfr" className="btni">Personalizza — Gratis</a>
        </div>
      </div>
    </div>
  );
}
