'use client';
import { useState } from 'react';

export default function QuizRistrutturare() {
  const [answers, setAnswers] = useState({});
  const pick = (q, val) => setAnswers(prev => ({ ...prev, [q]: val }));

  const done = answers[0] !== undefined && answers[1] !== undefined;
  const q1y = answers[0] === 'y';
  const q2y = answers[1] === 'y';

  let result = null;
  if (done) {
    if (q1y && q2y) {
      result = { cls: 'pos', text: '✅ Perfetto! Hai diritto al bonus al 50%. Leggi tutto — questa guida è per te.' };
    } else if (q1y && !q2y) {
      result = { cls: 'pos', text: '✅ Hai comunque diritto al bonus, ma al 36%. Continua a leggere, i passaggi sono gli stessi.' };
    } else {
      result = { cls: 'neu', text: '🤔 Se non stai facendo lavori, guarda le altre guide. Quando inizierai, torna qui!' };
    }
  }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Questa guida fa per te?</div>
      <div className="qq">
        <span>Stai per fare lavori di ristrutturazione o manutenzione straordinaria?</span>
        <div className="qbtns">
          <button className={`qbtn${answers[0] === 'y' ? ' sy' : ''}`} onClick={() => pick(0, 'y')}>Sì</button>
          <button className={`qbtn${answers[0] === 'n' ? ' sn' : ''}`} onClick={() => pick(0, 'n')}>No</button>
        </div>
      </div>
      <div className="qq">
        <span>L&apos;immobile è la tua abitazione principale?</span>
        <div className="qbtns">
          <button className={`qbtn${answers[1] === 'y' ? ' sy' : ''}`} onClick={() => pick(1, 'y')}>Sì</button>
          <button className={`qbtn${answers[1] === 'n' ? ' sn' : ''}`} onClick={() => pick(1, 'n')}>No</button>
        </div>
      </div>
      {result && <div className={`quiz-res ${result.cls}`}>{result.text}</div>}
    </div>
  );
}
