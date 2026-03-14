import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScadenzeTracker from '@/components/ScadenzeTracker';

export const metadata = {
  title: 'Le Mie Scadenze 2026 \u2014 Calendario Personalizzato',
  description: 'Seleziona la tua situazione e scopri tutte le scadenze fiscali e burocratiche che ti riguardano nel 2026. Calendario personalizzato con promemoria via email.',
  alternates: { canonical: 'https://zeroburocrazia.it/le-mie-scadenze' },
  openGraph: {
    title: 'Le Mie Scadenze 2026 \u2014 Calendario Personalizzato',
    description: 'Scopri tutte le scadenze fiscali e burocratiche che ti riguardano nel 2026.',
    url: 'https://zeroburocrazia.it/le-mie-scadenze',
  },
};

export default function ScadenzePage() {
  return (
    <div>
      <Nav variant="novita" />
      <div className="tool-page">
        <ScadenzeTracker />
      </div>
      <BrevoForm pageName="scadenze" />
      <Footer />
    </div>
  );
}
