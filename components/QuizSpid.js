'use client';
import { useState } from 'react';

export default function QuizSpid() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'al', text: '👍 Ce l\u2019hai già — perfetto! Vai direttamente alle guide ISEE o 730.' });
    else if (a && !b) setResult({ type: 'al', text: '👍 Ce l\u2019hai già e per ora non ti serve. Tienilo — prima o poi ti servirà per quasi tutto.' });
    else if (!a && b) setResult({ type: 'pos', text: '✅ Lo SPID ti serve. Continua a leggere — ti spieghiamo come farlo in 15 minuti.' });
    else setResult({ type: 'neu', text: '🤔 Per ora potresti farne a meno, ma nel 2026 quasi tutto passa dal digitale. Farlo ora ti costa 0€ e 15 minuti — meglio averlo pronto.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Serve a me?</div>
      <div className="quiz-q">
        Hai già lo SPID attivo?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>Sì</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Devi accedere a servizi online della PA? (INPS, 730, ISEE, bonus...)
        <div className="qbtns">
          <button className={`qbtn${q2 === true ? ' sy' : ''}`} onClick={() => ans2(true)}>Sì</button>
          <button className={`qbtn${q2 === false ? ' sn' : ''}`} onClick={() => ans2(false)}>No</button>
        </div>
      </div>
      {result && (
        <div className={`quiz-res ${result.type}`}>{result.text}</div>
      )}
    </div>
  );
}
