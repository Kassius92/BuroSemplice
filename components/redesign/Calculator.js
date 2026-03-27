'use client';
import { useState, useCallback } from 'react';

/**
 * Calculator — calcolatore con slider su sfondo scuro
 * @param {Object} props
 * @param {Array<{id: string, label: string, min: number, max: number, step: number, initial: number, prefix?: string}>} props.sliders
 * @param {Array<{id: string, label: string, initial?: boolean}>} [props.toggles]
 * @param {Function} props.compute - (values: Record<string, number>, toggles: Record<string, boolean>) => {total: string, breakdown: string}
 */
export default function Calculator({ sliders = [], toggles = [], compute }) {
  const [values, setValues] = useState(() => {
    const v = {};
    sliders.forEach(s => { v[s.id] = s.initial; });
    return v;
  });
  const [togState, setTogState] = useState(() => {
    const t = {};
    toggles.forEach(tog => { t[tog.id] = tog.initial || false; });
    return t;
  });

  const result = compute ? compute(values, togState) : { total: '\u20AC 0', breakdown: '' };

  const handleSlider = useCallback((id, val) => {
    setValues(prev => ({ ...prev, [id]: Number(val) }));
  }, []);

  const handleToggle = useCallback((id) => {
    setTogState(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <div className="v8-calc">
      <div className="v8-calc-grid rv rv-d2">
        {sliders.map(s => (
          <div className="v8-calc-field" key={s.id}>
            <div className="v8-calc-label">
              {s.label}
              <span className="v8-calc-val">{s.prefix || '\u20AC'} {values[s.id]}</span>
            </div>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={values[s.id]}
              onChange={e => handleSlider(s.id, e.target.value)}
            />
          </div>
        ))}
      </div>

      {toggles.length > 0 && (
        <div className="v8-calc-toggles rv rv-d3">
          {toggles.map(tog => (
            <button key={tog.id} className="v8-calc-tog" onClick={() => handleToggle(tog.id)}>
              <div className={`v8-calc-tog-switch${togState[tog.id] ? ' on' : ''}`} />
              <span>{tog.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="v8-calc-result rv rv-d4">
        <div>
          <div className="v8-calc-result-left">Rimborso stimato</div>
          <div className="v8-calc-breakdown">{result.breakdown}</div>
        </div>
        <div className="v8-calc-total">{result.total}</div>
      </div>
    </div>
  );
}
