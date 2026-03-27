'use client';
import { useScrollRevealAll } from './useScrollReveal';

/**
 * GuideHero — hero per le guide interne
 * @param {Object} props
 * @param {string} props.category - 'fisco'|'casa'|'famiglia'|'salute'|'documenti'|'lavoro'
 * @param {string} props.categoryLabel - es. 'Fisco \u00b7 Aggiornato marzo 2026'
 * @param {string} props.title - Titolo principale (parte non italic)
 * @param {string} [props.titleEm] - Parte in italic
 * @param {string} props.subtitle - Sottotitolo descrittivo
 * @param {Array<{value: string, label: string}>} [props.stats] - Stat cards (max 3)
 * @param {string} [props.id] - id sezione (default: 'hero')
 */
export default function GuideHero({ category, categoryLabel, title, titleEm, subtitle, stats = [], id = 'hero' }) {
  const ref = useScrollRevealAll();

  return (
    <section className="v8-ghero" id={id} ref={ref}>
      <div className="v8-ghero-inner">
        <div className={`v8-ghero-cat ${category} rv`}>{categoryLabel}</div>
        <h1 className="rv rv-d1">
          {title}{titleEm && <> <em>{titleEm}</em></>}
        </h1>
        <p className="v8-ghero-sub rv rv-d2">{subtitle}</p>
        {stats.length > 0 && (
          <div className="v8-ghero-nums">
            {stats.map((s, i) => (
              <div key={i} className={`v8-ghero-num rv-scale rv-d${i + 1}`}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
