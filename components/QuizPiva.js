'use client';
import { useState } from 'react';

export default function QuizPiva() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '\u2705 S\u00EC, questa guida \u00E8 perfetta per te. Il forfettario \u00E8 probabilmente la scelta giusta \u2014 leggi per scoprire come funziona.' });
    else if (a && !b) setResult({ type: 'neu', text: '\uD83D\uDCCB La guida ti serve. Se pensi di fatturare oltre 85k\u20AC, leggi anche la sezione sull\u2019ordinario \u2014 potrebbe convenirti.' });
    else if (!a && b) setResult({ type: 'neu', text: '\uD83E\uDD14 Se non vuoi lavorare in autonomo, la P.IVA probabilmente non ti serve. Ma se stai valutando, qui trovi tutte le informazioni.' });
    else setResult({ type: 'neu', text: '\uD83E\uDD14 La partita IVA potrebbe non essere la strada giusta per te adesso. Magari guarda la guida al 730 per il lavoro dipendente.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Questa guida fa per te?</div>
      <div className="quiz-q">
        <span>Vuoi lavorare come libero professionista o aprire un&apos;attivit&agrave;?</span>
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        <span>Prevedi di fatturare meno di 85.000&euro; all&apos;anno?</span>
        <div className="qbtns">
          <button className={`qbtn${q2 === true ? ' sy' : ''}`} onClick={() => ans2(true)}>S&igrave;</button>
          <button className={`qbtn${q2 === false ? ' sn' : ''}`} onClick={() => ans2(false)}>No</button>
        </div>
      </div>
      {result && <div className={`quiz-res ${result.type}`}>{result.text}</div>}
    </div>
  );
}
