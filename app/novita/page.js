import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NovitaContent from '@/components/NovitaContent';
import './novita.css';

export const metadata = {
  title: 'Cosa Cambia nel 2026 — Novità Fiscali, Bonus, IRPEF | ZeroBurocrazia',
  description: 'Tutti i cambiamenti 2026: nuovi scaglioni IRPEF, detrazioni ridotte sopra 75.000€, bonus ristrutturazione, assegno unico aggiornato. Legge di Bilancio spiegata semplice.',
  alternates: { canonical: 'https://zeroburocrazia.it/novita' },
  openGraph: {
    title: 'Cosa Cambia nel 2026 — Novità Fiscali e Bonus | ZeroBurocrazia',
    description: 'Tutti i cambiamenti della Legge di Bilancio 2026 spiegati in modo semplice: IRPEF, detrazioni, bonus casa, assegno unico, partita IVA.',
    url: 'https://zeroburocrazia.it/novita',
    images: [{ url: '/oghome.png', width: 1200, height: 630 }],
  },
};

export default function NovitaPage() {
  return (
    <>
      <Nav variant="novita" />
      <NovitaContent />
      <Footer variant="home" />
    </>
  );
}
