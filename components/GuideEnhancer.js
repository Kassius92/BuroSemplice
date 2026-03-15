'use client';
import { useEffect, useRef } from 'react';

export default function GuideEnhancer() {
  const barRef = useRef(null);

  useEffect(() => {
    /* ── PROGRESS BAR (all screens) ── */
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current && docHeight > 0) {
        barRef.current.style.width = Math.min(100, (scrollTop / docHeight) * 100) + '%';
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* ── COLLAPSIBLE CHAPTERS (mobile only) ── */
    if (window.innerWidth > 768) return () => window.removeEventListener('scroll', updateProgress);

    const mainEl = document.querySelector('.main');
    if (!mainEl) return () => window.removeEventListener('scroll', updateProgress);

    /* Hide bottom related section on mobile */
    const relatedEl = mainEl.querySelector('.related');
    if (relatedEl) relatedEl.style.display = 'none';

    const sections = mainEl.querySelectorAll('.sec');
    let chapterNum = 0;

    sections.forEach((sec) => {
      const secTag = sec.querySelector('.sec-tag');
      const h2 = sec.querySelector('h2');
      if (!h2) return;

      chapterNum++;
      const num = chapterNum;

      /* Create collapsible header */
      const header = document.createElement('div');
      header.className = 'ge-ch-header';
      header.innerHTML =
        '<div class="ge-ch-num">' + num + '</div>' +
        '<div class="ge-ch-info">' +
          '<div class="ge-ch-title">' + h2.textContent + '</div>' +
          (secTag ? '<div class="ge-ch-sub">' + secTag.textContent + '</div>' : '') +
        '</div>' +
        '<span class="ge-ch-arrow' + (num <= 1 ? ' open' : '') + '">\u203A</span>';

      /* Wrap existing content in collapsible body */
      const body = document.createElement('div');
      body.className = 'ge-ch-body' + (num <= 1 ? ' open' : '');

      /* Move all children of .sec into body */
      while (sec.firstChild) {
        body.appendChild(sec.firstChild);
      }

      /* Also grab orphan siblings that follow this .sec
         (dblocks, ib boxes, etc. that aren't inside a .sec) */
      var next = sec.nextElementSibling;
      while (next && !next.classList.contains('sec') && !next.classList.contains('related') && !next.classList.contains('perc')) {
        var grab = next;
        next = next.nextElementSibling;
        body.appendChild(grab);
      }

      /* Hide original sec-tag and h2 inside the body */
      var origTag = body.querySelector('.sec-tag');
      var origH2 = body.querySelector('h2');
      if (origTag) origTag.style.display = 'none';
      if (origH2) origH2.style.display = 'none';

      /* Assemble */
      sec.appendChild(header);
      sec.appendChild(body);
      sec.classList.add('ge-enhanced');

      /* Toggle handler */
      header.addEventListener('click', function() {
        var isOpen = body.classList.contains('open');
        body.classList.toggle('open');
        header.querySelector('.ge-ch-arrow').classList.toggle('open');
        if (!isOpen) {
          setTimeout(function() {
            header.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      });
    });

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="ge-progress-wrap">
      <div className="ge-progress-bar" ref={barRef} />
    </div>
  );
}
