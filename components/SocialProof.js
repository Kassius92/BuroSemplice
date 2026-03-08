'use client';

export default function SocialProof({ count = 347 }) {
  return (
    <div className="sp-badge">
      <div className="sp-avatars">
        <div className="sp-avatar" style={{ background: '#2A9D8F' }}>M</div>
        <div className="sp-avatar" style={{ background: '#E36414' }}>L</div>
        <div className="sp-avatar" style={{ background: '#0F4C5C' }}>A</div>
        <div className="sp-avatar" style={{ background: '#8A8A9A' }}>+</div>
      </div>
      <div className="sp-text"><span className="sp-fire">🔥</span> <strong>{count} persone</strong> hanno personalizzato questa guida</div>
    </div>
  );
}
