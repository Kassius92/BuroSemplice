'use client';
export default function CookieReset() {
  return (
    <button
      onClick={() => { localStorage.removeItem('zb_cookie_consent'); window.location.reload(); }}
      style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,.35)', fontSize: 13, cursor: 'pointer', padding: 0, fontFamily: 'inherit', transition: 'color .2s' }}
      onMouseEnter={e => e.target.style.color = '#fff'}
      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.35)'}
    >Cookie</button>
  );
}
