'use client';
import { useState } from 'react';

export default function Tip({ children, t }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tip-wrap"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(s => !s)}
    >
      <span className="tip-word">{children}</span>
      {show && (
        <span className="tip-bubble">{t}</span>
      )}
    </span>
  );
}
