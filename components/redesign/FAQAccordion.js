'use client';
import { useState } from 'react';

/**
 * FAQAccordion \u2014 accordion domande/risposte
 * @param {Object} props
 * @param {Array<{q: string, a: string}>} props.items - Domande e risposte (a pu\u00f2 contenere HTML)
 * @param {boolean} [props.schema] - Se true, inietta FAQPage schema.org
 */
export default function FAQAccordion({ items = [], schema = false }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <div className="v8-faq-list">
        {items.map((item, i) => (
          <div key={i} className={`v8-faq-item${openIdx === i ? ' open' : ''}`}>
            <button className="v8-faq-q" onClick={() => toggle(i)}>
              {item.q}
              <span className="v8-faq-icon">+</span>
            </button>
            <div className="v8-faq-a">
              <p dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          </div>
        ))}
      </div>

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a.replace(/<[^>]*>/g, ''),
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
