'use client';
import { useState, useCallback } from 'react';

/**
 * Quiz — quiz interattivo s\u00ec/no
 * @param {Object} props
 * @param {Array<{text: string}>} props.questions - Le domande
 * @param {Function} props.evaluate - (answers: Record<number, 'y'|'n'>) => {type: 'pos'|'neg', text: string} | null
 */
export default function Quiz({ questions = [], evaluate }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleClick = useCallback((qIdx, value) => {
    const next = { ...answers, [qIdx]: value };
    setAnswers(next);
    // Valuta solo quando tutte le domande hanno risposta
    if (Object.keys(next).length === questions.length && evaluate) {
      setResult(evaluate(next));
    } else {
      setResult(null);
    }
  }, [answers, questions.length, evaluate]);

  return (
    <div className="v8-quiz">
      <div className="v8-quiz-card rv-scale rv-d2">
        {questions.map((q, i) => (
          <div className="v8-qq" key={i}>
            <span className="v8-qq-text">{q.text}</span>
            <div className="v8-qq-btns">
              <button
                className={`v8-qq-btn${answers[i] === 'y' ? ' y' : ''}`}
                onClick={() => handleClick(i, 'y')}
              >
                S\u00ec
              </button>
              <button
                className={`v8-qq-btn${answers[i] === 'n' ? ' n' : ''}`}
                onClick={() => handleClick(i, 'n')}
              >
                No
              </button>
            </div>
          </div>
        ))}
        {result && (
          <div className={`v8-quiz-res ${result.type}`} style={{ display: 'block' }}>
            {result.text}
          </div>
        )}
      </div>
    </div>
  );
}
