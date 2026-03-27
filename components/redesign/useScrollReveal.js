'use client';
import { useEffect, useRef } from 'react';

/**
 * Bidirectional scroll reveal.
 * Adds class 'v' when element enters viewport, removes it when it leaves.
 * Usage: const ref = useScrollReveal();  <div ref={ref} className="rv">
 */
export function useScrollReveal(threshold = 0.1, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('v');
        else el.classList.remove('v');
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return ref;
}

/**
 * Observe all children with rv/rv-scale/rv-left/rv-right/rv-tilt classes.
 * Attach to a wrapper element.
 */
export function useScrollRevealAll(threshold = 0.1, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('v');
          else e.target.classList.remove('v');
        });
      },
      { threshold, rootMargin }
    );
    container.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right,.rv-tilt').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return ref;
}
