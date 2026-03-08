'use client';
import { useState, useEffect } from 'react';

export default function VersionToggle() {
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
    <div className="tog">
      <button className={breve ? 'on' : ''} onClick={() => toggle(true)}>Breve</button>
      <button className={!breve ? 'on' : ''} onClick={() => toggle(false)}>Completa</button>
    </div>
  );
}
