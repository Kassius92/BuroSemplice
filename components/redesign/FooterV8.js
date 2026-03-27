import Link from 'next/link';
import CookieReset from '@/components/CookieReset';

export default function FooterV8() {
  return (
    <footer className="v8-footer">
      <div className="v8-ft-inner">
        <div className="v8-ft-brand-col">
          <div className="v8-ft-brand">
            <img src="/logo-z.webp" alt="ZeroBurocrazia" width="24" height="24" style={{ borderRadius: '6px' }} />
            ZeroBurocrazia
          </div>
          <p className="v8-ft-desc">La burocrazia italiana spiegata in italiano. Gratis, aggiornato, senza paroloni.</p>
        </div>
        <div className="v8-ft-col">
          <h5>Guide pi\u00f9 cercate</h5>
          <Link href="/730">Modello 730</Link>
          <Link href="/isee">ISEE</Link>
          <Link href="/spid">SPID</Link>
          <Link href="/naspi">NASpI</Link>
          <Link href="/legge-104">Legge 104</Link>
          <Link href="/bonus-bollette">Bonus bollette</Link>
        </div>
        <div className="v8-ft-col">
          <h5>Calcolatori</h5>
          <Link href="/730#calcolatore">Rimborso 730</Link>
          <Link href="/imu#calcolatore">Calcolo IMU</Link>
          <Link href="/naspi#calcolatore">Calcolo NASpI</Link>
          <Link href="/busta-paga#calcolatore">Netto busta paga</Link>
          <Link href="/tfr#calcolatore">Calcolo TFR</Link>
        </div>
        <div className="v8-ft-col">
          <h5>Info</h5>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/contatti">Contatti</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termini">Termini</Link>
          <CookieReset />
        </div>
      </div>
      <div className="v8-ft-btm">&copy; 2026 ZeroBurocrazia.it &mdash; Tutti i diritti riservati</div>
    </footer>
  );
}
