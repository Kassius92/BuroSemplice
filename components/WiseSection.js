'use client';
import { useState } from 'react';

export default function WiseSection({ children, expandText, expandLabel }) {
  const [open, setOpen] = useState(false);
  if (!expandText) return <>{children}</>;

  return (
    <>
      {children}
      <button
        className={`ws-expand${open ? ' ws-open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Chiudi ↑' : (expandLabel || 'Leggi di più ↓')}
      </button>
      {open && <div className="ws-body">{expandText}</div>}
    </>
  );
}

export function WiseFAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <div className="ws-faq">
      {items.map((f, i) => (
        <div key={i} className="ws-faq-item">
          <button
            className="ws-faq-q"
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <span>{f.q}</span>
            <span className={`ws-faq-icon${openIdx === i ? ' ws-faq-icon-open' : ''}`}>+</span>
          </button>
          {openIdx === i && (
            <div className="ws-faq-a" dangerouslySetInnerHTML={{ __html: f.a }} />
          )}
        </div>
      ))}
    </div>
  );
}
