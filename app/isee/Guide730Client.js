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
    document.querySelectorAll('.v8-qq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qs = window._qs = window._qs || {};
        qs[btn.dataset.q] = btn.dataset.v;
        btn.parentElement.querySelectorAll('.v8-qq-btn').forEach(b => b.classList.remove('y','n'));
        btn.classList.add(btn.dataset.v === 'y' ? 'y' : 'n');
        if (qs[1] && qs[2] && qs[3]) {
          const r = document.getElementById('qRes');
          if (qs[1] === 'y') { r.className = 'v8-quiz-res pos'; r.textContent = 'S\u00ec, ti serve. Fallo il prima possibile \u2014 potresti recuperare migliaia di euro.'; r.style.display = 'block'; }
          else if (qs[2] === 'y') { r.className = 'v8-quiz-res pos'; r.textContent = 'Ti conviene comunque: con un ISEE basso risparmi su mensa, nido e bollette.'; r.style.display = 'block'; }
          else { r.className = 'v8-quiz-res neg'; r.textContent = 'Probabilmente non ti serve ora. Ma se la tua situazione cambia, fallo subito.'; r.style.display = 'block'; }
        }
      });
    });
    document.querySelectorAll('[data-faq] .v8-faq-q').forEach(btn => {
      btn.addEventListener('click', () => { const item = btn.parentElement; const was = item.classList.contains('open'); document.querySelectorAll('[data-faq]').forEach(i => i.classList.remove('open')); if (!was) item.classList.add('open'); });
    });
    document.querySelectorAll('[data-detr]').forEach(c => c.addEventListener('click', () => c.classList.toggle('open')));
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); prog.remove(); };
  }, []);
  return null;
}
