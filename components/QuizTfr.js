'use client';
import { useState } from 'react';

export default function QuizTfr() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '✅ Il tuo TFR è in azienda — ti verrà liquidato alla cessazione del rapporto. Continua a leggere per capire quanto ti spetta e come viene tassato.' });
    else if (a && !b) setResult({ type: 'pos', text: '✅ Hai versato il TFR in un fondo pensione — la tassazione sarà più vantaggiosa (dal 15% al 9%). Leggi la sezione "TFR e fondo pensione" per i dettagli.' });
    else if (!a && b) setResult({ type: 'neu', text: '🤔 Se non hai ancora un lavoro dipendente, il TFR non ti riguarda ancora. Tieni questa guida per quando inizierai — sapere dove destinarlo è una delle prime decisioni importanti.' });
    else setResult({ type: 'al', text: '👍 Il TFR riguarda solo i lavoratori dipendenti. Se sei un autonomo o freelance, questa guida non fa per te — ma dai un\'occhiata alla guida sulla <a href="/piva">partita IVA</a>.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Serve a me?</div>
      <div className="quiz-q">
        Sei (o sei stato) un lavoratore dipendente?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>Sì</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Il tuo TFR è rimasto in azienda (non l&apos;hai versato in un fondo pensione)?
        <div className="qbtns">
          <button className={`qbtn${q2 === true ? ' sy' : ''}`} onClick={() => ans2(true)}>Sì</button>
          <button className={`qbtn${q2 === false ? ' sn' : ''}`} onClick={() => ans2(false)}>No</button>
        </div>
      </div>
      {result && (
        <div className={`quiz-res ${result.type}`} dangerouslySetInnerHTML={{ __html: result.text }} />
      )}
    </div>
  );
}
