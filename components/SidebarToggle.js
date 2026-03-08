'use client';
import { useState, useEffect } from 'react';

export default function SidebarToggle() {
  const [breve, setBreve] = useState(false);

  useEffect(() => {
    const handler = (e) => setBreve(e.detail);
    window.addEventListener('versionchange', handler);
    return () => window.removeEventListener('versionchange', handler);
  }, []);

  const toggle = (val) => {
    setBreve(val);
    document.body.classList.toggle('breve', val);
    window.dispatchEvent(new CustomEvent('versionchange', { detail: val }));
  };

  return (
    <div className="sbsec" style={{ textAlign: 'center' }}>
      <div className="sbsec-t">Versione guida</div>
      <div className="tog" style={{ display: 'inline-flex' }}>
        <button
          onClick={() => toggle(true)}
          style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: '600',
            border: 'none', background: breve ? '#FFFFFF' : 'transparent', cursor: 'pointer',
            padding: '6px 16px', borderRadius: '16px',
            color: breve ? '#0F4C5C' : '#8A8A9A',
            boxShadow: breve ? '0 1px 4px rgba(15,76,92,.12)' : 'none',
            transition: 'all .2s',
          }}
        >Breve</button>
        <button
          onClick={() => toggle(false)}
          style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: '600',
            border: 'none', background: !breve ? '#FFFFFF' : 'transparent', cursor: 'pointer',
            padding: '6px 16px', borderRadius: '16px',
            color: !breve ? '#0F4C5C' : '#8A8A9A',
            boxShadow: !breve ? '0 1px 4px rgba(15,76,92,.12)' : 'none',
            transition: 'all .2s',
          }}
        >Completa</button>
      </div>
    </div>
  );
}
