import OrdinaForm from './OrdinaForm';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Richiedi assistenza gratuita — ZeroBurocrazia',
  description: 'Compila il form e ti ricontattiamo gratis entro 24 ore per aiutarti con la tua pratica burocratica.',
  alternates: { canonical: 'https://zeroburocrazia.it/ordina' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Richiedi assistenza gratuita — ZeroBurocrazia',
    description: 'Compila il form e ti ricontattiamo gratis entro 24 ore per aiutarti con la tua pratica burocratica.',
    url: 'https://zeroburocrazia.it/ordina',
  },
};

export default function OrdinaPage() {
  return (
    <>
      <Nav variant="scheda" />
      <OrdinaForm />
      <Footer variant="utility" />
    </>
  );
}
