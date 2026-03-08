'use client';
import { useState } from 'react';

export default function QuizNaspi() {
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [result, setResult] = useState(null);

  function check(a, b) {
    if (a === null || b === null) return;
    if (a && b) setResult({ type: 'pos', text: '✅ Hai diritto alla NASpI. Continua a leggere — ti spieghiamo come fare domanda, quanto ti spetta e le scadenze da non perdere.' });
    else if (a && !b) setResult({ type: 'neu', text: '🤔 Se hai meno di 13 settimane di contributi negli ultimi 4 anni, potresti non avere i requisiti. Leggi la sezione "Chi può richiederla" per verificare.' });
    else if (!a && b) setResult({ type: 'neu', text: '🤔 La NASpI spetta solo a chi perde il lavoro involontariamente. Se ti sei dimesso volontariamente, non hai diritto — a meno che non siano dimissioni per giusta causa. Leggi la sezione requisiti.' });
    else setResult({ type: 'al', text: '👍 Al momento la NASpI non ti riguarda. Ma tieni questa guida a portata di mano — se la situazione cambia, saprai esattamente come muoverti.' });
  }

  function ans1(val) { setQ1(val); check(val, q2); }
  function ans2(val) { setQ2(val); check(q1, val); }

  return (
    <div className="quiz r" id="quiz-serve">
      <div className="quiz-title">✅ Serve a me?</div>
      <div className="quiz-q">
        Hai perso il lavoro (licenziamento, scadenza contratto, ecc.)?
        <div className="qbtns">
          <button className={`qbtn${q1 === true ? ' sy' : ''}`} onClick={() => ans1(true)}>Sì</button>
          <button className={`qbtn${q1 === false ? ' sn' : ''}`} onClick={() => ans1(false)}>No</button>
        </div>
      </div>
      <div className="quiz-q">
        Hai lavorato come dipendente per almeno 3 mesi negli ultimi 4 anni?
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
