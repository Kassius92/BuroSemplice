'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zb_cookie_consent');
    if (!consent) {
      setShow(true);
    } else if (consent === 'accepted') {
      grantConsent();
    }
  }, []);

  function grantConsent() {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
    }
  }

  function accept() {
    localStorage.setItem('zb_cookie_consent', 'accepted');
    setShow(false);
    grantConsent();
  }

  function reject() {
    localStorage.setItem('zb_cookie_consent', 'rejected');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#1A1A2E', color: '#fff', padding: '16px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 16, flexWrap: 'wrap', fontSize: 13, lineHeight: 1.5,
      borderTop: '1px solid rgba(255,255,255,.1)',
      boxShadow: '0 -4px 24px rgba(0,0,0,.3)',
    }}>
      <p style={{ margin: 0, maxWidth: 600, color: 'rgba(255,255,255,.75)' }}>
        Questo sito usa cookie tecnici e cookie pubblicitari (Google AdSense) per mostrare annunci.
        Leggi la <a href="/privacy" style={{ color: '#E36414', textDecoration: 'underline' }}>privacy policy</a>.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={accept} style={{
          padding: '10px 22px', borderRadius: 50, border: 'none',
          background: '#E36414', color: '#fff', fontSize: 13,
          fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
        }}>Accetta</button>
        <button onClick={reject} style={{
          padding: '10px 22px', borderRadius: 50,
          border: '1px solid rgba(255,255,255,.2)', background: 'transparent',
          color: 'rgba(255,255,255,.6)', fontSize: 13,
          fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
        }}>Rifiuta</button>
      </div>
    </div>
  );
}
