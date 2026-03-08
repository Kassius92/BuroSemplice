'use client';
import { useState } from 'react';

export default function QuizIsee() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    const yes = (a ? 1 : 0) + (b ? 1 : 0);
    if (yes === 2) setResult({ type: 'pos', text: '\u2705 L\u2019ISEE ti serve sicuramente. Continua a leggere \u2014 ti spieghiamo come farlo e quali bonus puoi ottenere.' });
    else if (yes === 1) setResult({ type: 'pos', text: '\u2705 Probabilmente ti conviene farlo. Costa 0\u20AC al CAF e ci metti 30 minuti \u2014 meglio averlo e non usarlo che perdere un bonus.' });
    else setResult({ type: 'neu', text: '\uD83E\uDD14 Forse non ti serve adesso. Ma se in futuro avrai bisogno di bonus, mensa scolastica, universit\u00E0 agevolata o contributi, sappi che l\u2019ISEE \u00E8 il primo passo.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\uD83C\uDFAF'} Serve a me?</div>
      <div className="quiz-q">
        Vuoi chiedere bonus, agevolazioni, o riduzioni su tasse e servizi?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>S&igrave;</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Hai figli, sei studente, o il tuo reddito familiare &egrave; sotto i 40.000&euro;?
        <div className="qbtns">
          <button className={`qbtn${q2 === true ? ' sy' : ''}`} onClick={() => ans2(true)}>S&igrave;</button>
          <button className={`qbtn${q2 === false ? ' sn' : ''}`} onClick={() => ans2(false)}>No</button>
        </div>
      </div>
      {result && (
        <div className={`quiz-res ${result.type}`}>{result.text}</div>
      )}
    </div>
  );
}
