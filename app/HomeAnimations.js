'use client';
import { useEffect } from 'react';

/**
 * HomeAnimations \u2014 attiva le animazioni scroll bidirezionali
 * per tutti gli elementi .rv, .rv-scale, .rv-left, .rv-right, .rv-tilt
 */
export default function HomeAnimations() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('v');
          else e.target.classList.remove('v');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right,.rv-tilt').forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
