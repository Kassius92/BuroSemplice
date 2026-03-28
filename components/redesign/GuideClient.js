'use client';
import { useEffect } from 'react';

/**
 * GuideClient — client-side enhancements per tutte le guide V8
 * - Scroll reveal bidirezionale su tutti .rv, .rv-scale, .rv-left, .rv-right
 * - Progress bar di lettura in cima
 * - FAQ accordion
 */
export default function GuideClient() {
  useEffect(() => {
    // Scroll reveal globale
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('v');
          else e.target.classList.remove('v');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right,.rv-tilt,.r').forEach(el => obs.observe(el));

    // Progress bar
    const prog = document.createElement('div');
    prog.className = 'v8-prog';
    document.body.prepend(prog);
    const onScroll = () => {
      prog.style.width = Math.min(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100
      ) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // FAQ accordion
    document.querySelectorAll('.v8-faq-item').forEach(item => {
      item.querySelector('.v8-faq-q')?.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.v8-faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      prog.remove();
    };
  }, []);

  return null;
}
