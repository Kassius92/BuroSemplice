'use client';
import { useState, useCallback } from 'react';

export default function Quiz({ questions, results }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = useCallback((qi, val) => {
    const next = { ...answers, [qi]: val };
    setAnswers(next);

    if (Object.keys(next).length === questions.length) {
      const yesCount = Object.values(next).filter(v => v === 'si').length;
      const ratio = yesCount / questions.length;
      if (ratio >= 0.6) setResult({ type: 'pos', text: results.pos });
      else if (ratio >= 0.3) setResult({ type: 'neu', text: results.neu });
      else setResult({ type: 'neu', text: results.neg });
    }
  }, [answers, questions, results]);

  return (
    <div className="quiz">
      <div className="quiz-title">🎯 Serve a me? Scoprilo in 30 secondi</div>
      {questions.map((q, i) => (
        <div key={i} className="qq">
          <span>{q}</span>
          <div className="qbtns">
            <button
              className={`qbtn${answers[i] === 'si' ? ' sy' : ''}`}
              onClick={() => handleAnswer(i, 'si')}
            >Sì</button>
            <button
              className={`qbtn${answers[i] === 'no' ? ' sn' : ''}`}
              onClick={() => handleAnswer(i, 'no')}
            >No</button>
          </div>
        </div>
      ))}
      {result && <div className={`qres ${result.type}`}>{result.text}</div>}
    </div>
  );
}
