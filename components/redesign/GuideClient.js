'use client';
import { useEffect } from 'react';

export default function Guide730Client() {
  useEffect(() => {
    // ── Scroll reveal (bidirectional) ──
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('v');
          else e.target.classList.remove('v');
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.rv,.rv-scale,.rv-left,.rv-right,.r').forEach(el => obs.observe(el));

    // ── Progress bar ──
    const prog = document.createElement('div');
    prog.className = 'v8-prog';
    document.body.prepend(prog);
    const onScroll = () => {
      const pct = Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100);
      prog.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Quiz logic ──
    const qs = {};
    document.querySelectorAll('.v8-qq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.dataset.q, v = btn.dataset.v;
        qs[q] = v;
        btn.parentElement.querySelectorAll('.v8-qq-btn').forEach(b => b.classList.remove('y', 'n'));
        btn.classList.add(v === 'y' ? 'y' : 'n');
        if (qs[1] && qs[2] && qs[3]) {
          const r = document.getElementById('qRes');
          if (qs[1] === 'n') {
            r.className = 'v8-quiz-res neg';
            r.textContent = 'Il 730 non fa per te. Potresti dover usare il Modello Redditi PF.';
            r.style.display = 'block';
          } else if (qs[2] === 'y' || qs[3] === 'y') {
            r.className = 'v8-quiz-res pos';
            r.textContent = 'S\u00ec, ti conviene! Potresti recuperare un bel rimborso.';
            r.style.display = 'block';
          } else {
            r.className = 'v8-quiz-res pos';
            r.textContent = 'Non obbligatorio, ma conviene: potresti avere un rimborso dalle spese mediche.';
            r.style.display = 'block';
          }
        }
      });
    });

    // ── FAQ accordion ──
    document.querySelectorAll('[data-faq] .v8-faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('[data-faq]').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    // ── Detraction cards toggle ──
    document.querySelectorAll('[data-detr]').forEach(card => {
      card.addEventListener('click', () => card.classList.toggle('open'));
    });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      prog.remove();
    };
  }, []);

  return null;
}
