import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NovitaContent from '@/components/NovitaContent';
import './novita.css';

export const metadata = {
  title: 'Novità e scadenze — ZeroBurocrazia',
  description: 'Novità sulla burocrazia italiana: scadenze, circolari INPS, nuovi bonus e aggiornamenti fiscali spiegati in modo semplice.',
  alternates: { canonical: 'https://zeroburocrazia.it/novita' },
  openGraph: {
    title: 'Novità e scadenze — ZeroBurocrazia',
    description: 'Ogni volta che cambia qualcosa — una circolare INPS, una scadenza, un nuovo bonus — lo spieghiamo qui in parole semplici.',
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
