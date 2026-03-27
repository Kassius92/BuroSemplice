'use client';

/**
 * Timeline \u2014 timeline verticale per scadenze
 * @param {Object} props
 * @param {Array<{date: string, text: string, highlight?: boolean}>} props.items
 */
export default function Timeline({ items = [] }) {
  return (
    <div className="v8-timeline">
      {items.map((item, i) => (
        <div key={i} className={`v8-tl-item${item.highlight ? ' hl' : ''} rv rv-d${Math.min(i + 1, 4)}`}>
          <div className="v8-tl-dot" />
          <div className="v8-tl-date">{item.date}</div>
          <div className="v8-tl-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
