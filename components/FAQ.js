'use client';
import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faql">
      {items.map((item, i) => (
        <div key={i} className={`faqi${openIndex === i ? ' open' : ''}`}>
          <button className="faqq" onClick={() => toggle(i)}>
            {item.q}
            <span className="faqic">+</span>
          </button>
          <div className="faqa" style={openIndex === i ? { maxHeight: '600px' } : {}}>
            <div className="faqa-i" dangerouslySetInnerHTML={{ __html: item.a }} />
          </div>
        </div>
      ))}
    </div>
  );
}
