import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';

export const metadata = {
  title: 'Prossimamente | ZeroBurocrazia',
};

export default function ComingSoon() {
  return (
    <div>
      <Nav variant="novita" />
      <div className="tool-page" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{'\uD83D\uDEA7'}</div>
        <h1 className="tool-title" style={{ marginBottom: '12px' }}>Prossimamente</h1>
        <p className="tool-sub">Questo strumento \u00e8 in arrivo. Iscriviti alla newsletter per essere avvisato.</p>
      </div>
      <BrevoForm pageName="coming-soon" />
      <Footer />
    </div>
  );
}
