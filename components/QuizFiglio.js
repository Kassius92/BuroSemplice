'use client';
import { useState } from 'react';

export default function QuizFiglio() {
  const [answers, setAnswers] = useState({});
  const pick = (q, val) => setAnswers(prev => ({ ...prev, [q]: val }));

  const done = answers[0] !== undefined && answers[1] !== undefined;
  const q1y = answers[0] === 'y';
  const q2y = answers[1] === 'y';

  let result = null;
  if (done) {
    if (q1y && q2y) {
      result = { cls: 'pos', text: '✅ Perfetto — questa guida è fatta per te. Hai diritto a congedo, assegno unico e probabilmente anche ad altri bonus. Continua a leggere!' };
    } else if (q1y && !q2y) {
      result = { cls: 'pos', text: '✅ Questa guida ti serve! Anche senza lavoro dipendente hai diritto a assegno unico, bonus nuovi nati e assegno di maternità del Comune. Leggi la sezione Bonus.' };
    } else if (!q1y && q2y) {
      result = { cls: 'neu', text: '🤔 Se non stai aspettando un figlio, questa guida ti è utile solo per informarti in anticipo. Tienila da parte per quando sarà il momento!' };
    } else {
      result = { cls: 'neu', text: '🤔 Questa guida è pensata per chi aspetta un figlio o sta pianificando. Dai un\'occhiata alle altre guide per la tua situazione attuale.' };
    }
  }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Questa guida fa per te?</div>
      <div className="quiz-q">
        <span>Stai aspettando un bambino o stai pianificando una gravidanza?</span>
        <div className="qbtns">
          <button className={`qbtn${answers[0] === 'y' ? ' sy' : ''}`} onClick={() => pick(0, 'y')}>Sì</button>
          <button className={`qbtn${answers[0] === 'n' ? ' sn' : ''}`} onClick={() => pick(0, 'n')}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        <span>Lavori come dipendente o autonoma?</span>
        <div className="qbtns">
          <button className={`qbtn${answers[1] === 'y' ? ' sy' : ''}`} onClick={() => pick(1, 'y')}>Sì</button>
          <button className={`qbtn${answers[1] === 'n' ? ' sn' : ''}`} onClick={() => pick(1, 'n')}>No</button>
        </div>
      </div>
      {result && <div className={`quiz-res ${result.cls}`}>{result.text}</div>}
    </div>
  );
}
