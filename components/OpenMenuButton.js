'use client';

export default function OpenMenuButton() {
  function openMenu() {
    const btn = document.querySelector('.hamburger');
    if (btn && !btn.classList.contains('open')) btn.click();
  }

  return (
    <button className="btn-secondary" onClick={openMenu} style={{ width: '100%', maxWidth: '340px', display: 'block', margin: '32px auto 0', textAlign: 'center' }}>
      Vedi tutte le guide →
    </button>
  );
}
