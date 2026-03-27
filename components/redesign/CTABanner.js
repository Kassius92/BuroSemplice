'use client';
import Link from 'next/link';
import { useScrollRevealAll } from './useScrollReveal';

/**
 * CTABanner \u2014 banner call-to-action verde
 * @param {Object} props
 * @param {string} [props.title] - Titolo (parte non italic)
 * @param {string} [props.titleEm] - Parte italic
 * @param {string} [props.subtitle]
 * @param {string} [props.buttonText]
 * @param {string} [props.buttonHref]
 */
export default function CTABanner({
  title = 'Ti \u00e8 stata',
  titleEm = 'utile?',
  subtitle = 'Ne abbiamo altre 46. Trova quella che ti serve.',
  buttonText = 'Esplora tutte le guide',
  buttonHref = '/guide',
}) {
  const ref = useScrollRevealAll();

  return (
    <section className="v8-cta" ref={ref}>
      <div className="v8-cta-box rv-scale">
        <h2>{title} <em>{titleEm}</em></h2>
        <p>{subtitle}</p>
        <Link href={buttonHref} className="v8-cta-btn">{buttonText}</Link>
      </div>
    </section>
  );
}
