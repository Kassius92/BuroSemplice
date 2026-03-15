import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GuideFilter from '@/components/GuideFilter';
import { totalGuides } from '@/components/categoriesData';
import './guide.css';
import './guide.css';

export const metadata = {
  title: 'Tutte le guide \u2014 ZeroBurocrazia',
  description: `${totalGuides} guide gratuite sulla burocrazia italiana: 730, ISEE, SPID, NASpI, mutui, P.IVA e molto altro.`,
  alternates: { canonical: 'https://zeroburocrazia.it/guide' },
};

export default function GuidePage() {
  return (
    <>
      <Nav variant="home" />
      <section className="guide-page">
        <h1 className="gp-title">Tutte le guide</h1>
        <p className="gp-sub">{totalGuides} guide gratuite sulla burocrazia italiana</p>
        <Suspense fallback={<div style={{ minHeight: 400 }} />}>
          <GuideFilter />
        </Suspense>
      </section>
      <Footer />
    </>
  );
}
