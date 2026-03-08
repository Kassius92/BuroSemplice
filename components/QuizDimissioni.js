'use client';
import { useState } from 'react';

export default function QuizDimissioni() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '✅ Sei un dipendente privato a tempo indeterminato — la procedura standard è quella telematica. Continua a leggere per la guida passo per passo.' });
    else if (a && !b) setResult({ type: 'neu', text: '🤔 Se hai un contratto a termine, non puoi dimetterti prima della scadenza — salvo giusta causa o accordo con il datore. Leggi la sezione "Casi particolari".' });
    else if (!a && b) setResult({ type: 'neu', text: '🤔 Se lavori nel pubblico impiego, nel lavoro domestico o sei in periodo di prova, la procedura è diversa da quella telematica standard. Leggi la sezione eccezioni.' });
    else setResult({ type: 'al', text: '👍 Se non sei un dipendente privato e non hai un contratto a tempo indeterminato, questa guida potrebbe non riguardarti direttamente. Dai un\'occhiata comunque alla sezione "Chi è escluso".' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Serve a me?</div>
      <div className="quiz-q">
        Sei un dipendente del settore privato?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>Sì</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Hai un contratto a tempo indeterminato?
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
