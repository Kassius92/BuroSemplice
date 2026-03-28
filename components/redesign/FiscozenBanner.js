'use client';
import { useEffect, useState } from 'react';

const FZ_LINK = 'https://fiscozen.it/invitoZEROBUROCRAZIA50A';

/**
 * FiscozenBanner — banner affiliazione inline V8
 * Si inserisce nel punto della guida dove l'utente capisce che ha bisogno di un commercialista/servizio.
 */
export function FiscozenBanner() {
  return (
    <div className="v8-fz-banner rv">
      <div className="v8-fz-inner">
        <div className="v8-fz-badge">Partner ZeroBurocrazia</div>
        <img src="/fiscozen-logo.png" alt="Fiscozen" className="v8-fz-logo" width="130" height="26" />
        <h3 className="v8-fz-title">Gestisci la partita IVA senza pensieri</h3>
        <p className="v8-fz-text">Apertura P.IVA inclusa, commercialista dedicato, fatturazione elettronica, dichiarazione dei redditi. Tutto in un unico servizio online.</p>
        <div className="v8-fz-perks">
          <span className="v8-fz-perk">&#10003; Commercialista dedicato</span>
          <span className="v8-fz-perk">&#10003; Fatturazione inclusa</span>
          <span className="v8-fz-perk">&#10003; Dichiarazione redditi</span>
          <span className="v8-fz-perk">&#10003; Apertura P.IVA gratis</span>
        </div>
        <div className="v8-fz-offer">Consulenza gratuita + 50&euro; di sconto per i lettori di ZeroBurocrazia</div>
        <a href={FZ_LINK} target="_blank" rel="noopener sponsored" className="v8-fz-btn">
          Ottieni lo sconto di 50&euro;
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
        </a>
        <p className="v8-fz-note">Link in partnership &mdash; a te non cambia nulla sul prezzo, anzi risparmi.</p>
      </div>
    </div>
  );
}

/**
 * FiscozenSticky — barra sticky che appare dopo scroll
 */
export function FiscozenSticky() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="v8-fz-sticky">
      <div className="v8-fz-sticky-inner">
        <div className="v8-fz-sticky-left">
          <img src="/fiscozen-logo.png" alt="Fiscozen" width="90" height="18" style={{opacity:.9}} />
          <span>Consulenza gratuita + sconto 50&euro;</span>
        </div>
        <a href={FZ_LINK} target="_blank" rel="noopener sponsored" className="v8-fz-sticky-btn">
          Scopri l&apos;offerta &rarr;
        </a>
      </div>
    </div>
  );
}
