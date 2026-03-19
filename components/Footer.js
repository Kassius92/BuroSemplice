import Link from 'next/link';
import CookieReset from './CookieReset';

export default function Footer({ variant = 'scheda' }) {
  return (
    <footer className="footer-dark">
      <div className="flinks-dark">
        <Link href="/novita">Notizie</Link>
        <Link href="/chi-siamo">Chi siamo</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/termini">Termini</Link>
        <Link href="/contatti">Contatti</Link>
        <CookieReset />
      </div>
      <div className="footer-copy">&copy; 2026 ZeroBurocrazia &mdash; La burocrazia italiana, finalmente semplice.</div>
    </footer>
  );
}
