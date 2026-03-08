'use client';
import { useState } from 'react';

export default function QuizComproCasa() {
  const [answers, setAnswers] = useState([null, null, null]);
  const [result, setResult] = useState(null);

  function ans(qi, val) {
    const next = [...answers];
    next[qi] = val;
    setAnswers(next);
    if (next.every(v => v !== null)) {
      const yes = next[0]; // q1: stai comprando?
      setResult(yes
        ? { type: 'pos', text: '\u2705 S\u00EC, questa guida fa per te. Continua a leggere.' }
        : { type: 'neu', text: '\uD83E\uDD14 Se non stai comprando un immobile, guarda le altre schede.' }
      );
    }
  }

  const qs = [
    'Stai comprando un immobile da privato o da costruttore?',
    'Sar\u00E0 la tua residenza principale (prima casa)?',
    "Hai bisogno di un mutuo per finanziare l'acquisto?",
  ];

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">{'\u2705'} Questa guida fa per te?</div>
      {qs.map((q, i) => (
        <div key={i} className="quiz-q">
          <span>{q}</span>
          <div className="qbtns">
            <button className={`qbtn${answers[i] === true ? ' sy' : ''}`} onClick={() => ans(i, true)}>S&igrave;</button>
            <button className={`qbtn${answers[i] === false ? ' sn' : ''}`} onClick={() => ans(i, false)}>No</button>
          </div>
        </div>
      ))}
      {result && <div className={`quiz-res ${result.type}`}>{result.text}</div>}
    </div>
  );
}
