'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { categoriesGuide, allGuides } from './categoriesData';

export default function GuideFilter() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'tutte';
  const [filter, setFilter] = useState(initialCat);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setFilter(cat);
  }, [searchParams]);

  const catNames = ['tutte', ...categoriesGuide.filter(c => c.guides.length > 0).map(c => c.slug)];
  const catLabels = { tutte: `Tutte (${allGuides.length})` };
  categoriesGuide.forEach(c => { if (c.guides.length > 0) catLabels[c.slug] = c.title; });

  const displayed = filter === 'tutte'
    ? allGuides
    : allGuides.filter(g => g.catSlug === filter);

  return (
    <>
      <div className="gf-filters">
        {catNames.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`gf-btn${filter === c ? ' gf-btn-active' : ''}`}
          >
            {catLabels[c]}
          </button>
        ))}
      </div>
      <div className="gf-grid">
        {displayed.map((g, i) => (
          <Link key={i} href={g.href} className="gf-card">
            <div className="gf-card-top">
              <span className="gf-emoji">{g.emoji}</span>
              <span className="gf-tag">{g.tag}</span>
            </div>
            <div className="gf-name">{g.name}</div>
            <div className="gf-desc">{g.desc}</div>
            <div className="gf-cat" style={{ color: g.catColor }}>{g.cat}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
