import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import './tg.css';

export const metadata = {
  title: 'Questa Settimana — Notizie su Bonus, Scadenze e Novità Burocratiche',
  description: 'Ogni settimana le notizie burocratiche che ti riguardano: scadenze, bonus, circolari INPS. Spiegate come te le spiegherebbe un amico.',
  alternates: { canonical: 'https://zeroburocrazia.it/tg' },
  openGraph: {
    title: 'Questa Settimana — Notizie Settimanali',
    description: 'Ogni settimana le notizie burocratiche che ti riguardano: scadenze, bonus, circolari. Spiegate come te le spiegherebbe un amico.',
    url: 'https://zeroburocrazia.it/tg',
    type: 'article',
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/oghome.png', width: 1200, height: 630 }],
  },
};

import { weeks } from './weeks';

export default function TGPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Questa Settimana',
    description: 'Notizie settimanali sulla burocrazia italiana: scadenze, bonus, circolari. Spiegate come te le spiegherebbe un amico.',
    url: 'https://zeroburocrazia.it/tg',
    publisher: { '@type': 'Organization', name: 'ZeroBurocrazia', url: 'https://zeroburocrazia.it' },
  };

  return (
    <>
      <Nav variant="home" />
      <ScrollReveal />
      <SchemaOrg schemas={[schema]} />

      <section className="tg-hero">
        <div className="tg-hero-bg"></div>
        <div className="tg-hero-c">
          <div className="tg-label"><span className="tg-dot"></span> Ogni settimana</div>
          <h1><em>Questa</em> settimana</h1>
          <p>Ogni settimana raccogliamo le notizie burocratiche che ti riguardano: scadenze, bonus, circolari. Spiegate in italiano, non in burocratese.</p>
        </div>
      </section>

      <div className="tg-content">
        {weeks.map((w) => (
          <details key={w.num} className={`tg-week${w.latest ? ' tg-latest' : ''}`} open={w.latest || undefined}>
            <summary className="tg-week-header">
              <div className="tg-week-num">{w.num}</div>
              <div className="tg-week-info">
                <div className="tg-week-label">Settimana{w.latest && <span className="tg-badge-latest">Ultima edizione</span>}</div>
                <div className="tg-week-range">{w.range}</div>
                <div className="tg-week-count">{w.news.length} notizi{w.news.length === 1 ? 'a' : 'e'}</div>
              </div>
              <span className="tg-chevron">{'\u25BC'}</span>
            </summary>
            <div className="tg-week-body">
              {w.news.map((n, i) => (
                <div key={i} className={`tg-news tg-c-${n.cat}`}>
                  <div className="tg-news-meta">
                    <span className="tg-news-cat">{n.catLabel}</span>
                    {n.tag && <span className={`tg-news-tag tg-tag-${n.tag}`}>{n.tagLabel}</span>}
                    <span className="tg-news-day">{n.day}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: n.body }} />
                  <div className="tg-news-footer">
                    {n.link && <a href={n.link} className="tg-news-link">{n.linkText} {'\u2192'}</a>}
                    {n.source && <a href={n.source} className="tg-news-source" target="_blank" rel="noopener noreferrer">Fonte: {n.sourceLabel}</a>}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <BrevoForm pageName="tg" />
      <Footer variant="home" />
    </>
  );
}
