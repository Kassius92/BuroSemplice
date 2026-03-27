'use client';

/**
 * StepCards — griglia card numerate per i percorsi
 * @param {Object} props
 * @param {Array<{title: string, text: string}>} props.steps
 */
export default function StepCards({ steps = [] }) {
  return (
    <div className="v8-steps">
      {steps.map((s, i) => (
        <div key={i} className={`v8-step rv rv-d${i + 1}`}>
          <div className="v8-step-num">{i + 1}</div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
