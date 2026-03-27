'use client';
import { useScrollRevealAll } from './useScrollReveal';

/**
 * Section — wrapper full-width per sezioni guide
 * @param {Object} props
 * @param {string} [props.bg] - 'warm'|'dark'|'green'|undefined (default: bg chiaro)
 * @param {string} [props.id] - id HTML per navigazione
 * @param {string} [props.title] - Titolo sezione (parte non italic)
 * @param {string} [props.titleEm] - Parte italic del titolo
 * @param {string} [props.subtitle] - Sottotitolo
 * @param {React.ReactNode} props.children
 * @param {string} [props.className] - Classi extra
 */
export default function Section({ bg, id, title, titleEm, subtitle, children, className = '' }) {
  const ref = useScrollRevealAll();

  return (
    <section className={`v8-section${bg ? ` ${bg}` : ''} ${className}`.trim()} id={id} ref={ref}>
      <div className="v8-section-inner">
        {title && (
          <div className="v8-section-head">
            <h2 className="rv">{title}{titleEm && <> <em>{titleEm}</em></>}</h2>
            {subtitle && <p className="rv rv-d1">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
