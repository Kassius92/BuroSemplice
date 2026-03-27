'use client';
import { useState } from 'react';

/**
 * DetractionCards — card espandibili per detrazioni
 * @param {Object} props
 * @param {Array<{pct: string, title: string, subtitle: string, detail: string}>} props.items
 */
export default function DetractionCards({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="v8-detr-grid">
      {items.map((item, i) => (
        <div
          key={i}
          className={`v8-detr rv rv-d${(i % 3) + 1}${openIdx === i ? ' open' : ''}`}
          onClick={() => toggle(i)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
        >
          <div className="v8-detr-pct">{item.pct}</div>
          <h4>{item.title}</h4>
          <p>{item.subtitle}</p>
          <div className="v8-detr-detail">{item.detail}</div>
        </div>
      ))}
    </div>
  );
}
