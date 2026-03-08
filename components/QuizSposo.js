'use client';
import { useState } from 'react';

export default function QuizSposo() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '✅ Matrimonio civile in Comune — la procedura è semplice e veloce. Continua a leggere: ti spieghiamo tutto, dai documenti ai costi.' });
    else if (a && !b) setResult({ type: 'pos', text: '✅ Matrimonio religioso con effetti civili — la procedura burocratica è simile. Leggi la guida per i documenti necessari e le pubblicazioni.' });
    else if (!a && b) setResult({ type: 'neu', text: '🤔 Se non hai ancora una data, questa guida ti aiuta a capire la tempistica giusta: servono almeno 2-3 mesi per le pratiche. Inizia a leggere per pianificare.' });
    else setResult({ type: 'al', text: '👍 Stai solo esplorando? Nessun problema. Questa guida ti dà un\'idea chiara di tutto quello che serve — così quando sarà il momento, saprai già cosa fare.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Serve a me?</div>
      <div className="quiz-q">
        Hai già fissato una data per il matrimonio?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>Sì</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Ti sposerai con rito civile (in Comune)?
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
