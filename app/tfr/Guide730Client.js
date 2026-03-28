'use client';
import { useEffect } from 'react';
export default function GuideClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { e.isIntersecting ? e.target.classList.add('v') : e.target.classList.remove('v'); }); },
      { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right,.r').forEach(el => obs.observe(el));
    const prog = document.createElement('div'); prog.className = 'v8-prog'; document.body.prepend(prog);
    const onScroll = () => { prog.style.width = Math.min((scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100, 100) + '%'; };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.querySelectorAll('[data-faq] .v8-faq-q').forEach(btn => {
      btn.addEventListener('click', () => { const item = btn.parentElement; const was = item.classList.contains('open'); document.querySelectorAll('[data-faq]').forEach(i => i.classList.remove('open')); if (!was) item.classList.add('open'); });
    });
    document.querySelectorAll('[data-detr]').forEach(c => c.addEventListener('click', () => c.classList.toggle('open')));
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); prog.remove(); };
  }, []);
  return null;
}
