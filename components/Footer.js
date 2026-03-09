import Link from 'next/link';

export default function Footer({ variant = 'scheda' }) {
  if (variant === 'home') {
    return (
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Zero<span>Burocrazia</span></div>
            <div className="footer-text" style={{ marginTop: 4 }}>La burocrazia italiana, semplificata.</div>
          </div>
          <div className="footer-links">
            <Link href="/tg">Notizie</Link>
            <Link href="/chi-siamo">Chi siamo</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/termini">Termini</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="fi">
        <Link href="/" className="fbrand" style={{ textDecoration: 'none' }}>
          Zero<span>Burocrazia</span>
        </Link>
        <div className="flinks">
          <Link href="/tg">Notizie</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termini">Termini</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
        {variant === 'utility' && (
          <div className="fcopy">© 2026 ZeroBurocrazia — Le informazioni sul sito sono indicative e non sostituiscono la consulenza professionale.</div>
        )}
      </div>
    </footer>
  );
}
