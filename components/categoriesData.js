/* ═══════════════════════════════════════
   categoriesData.js — Dati guide per categorie
   Usato da: homepage, /guide, /strumenti, Nav
   ═══════════════════════════════════════ */

export const categoriesGuide = [
  {
    emoji: '\u{1F4B0}', title: 'Fisco e soldi', slug: 'fisco',
    color: '#E36414', bg: '#FFF0E0',
    guides: [
      { emoji: '\u{1F9FE}', name: 'Modello 730', href: '/730', desc: 'Detrazioni, documenti e rimborso', tag: '\u{1F4C5} Scadenza' },
      { emoji: '\u{1F4CB}', name: 'ISEE', href: '/isee', desc: 'Calcolo e rinnovo annuale', tag: '\u2726 Base' },
      { emoji: '\u{1F4BC}', name: 'Partita IVA', href: '/piva', desc: 'Aprire e gestire', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F4CA}', name: 'Regime forfettario', href: '/regime-forfettario', desc: 'Vantaggi e limiti', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F9FE}', name: 'Fattura elettronica', href: '/fattura-elettronica', desc: 'Come emetterla', tag: '\u{1F4DD} Procedura' },
      { emoji: '\u{1F3E1}', name: 'Cedolare secca', href: '/cedolare-secca', desc: 'Tassazione affitti', tag: '\u{1F527} Calcolatore' },
      { emoji: '\u{1F3DB}\uFE0F', name: 'IMU', href: '/imu', desc: 'Calcolo e scadenze', tag: '\u{1F527} Calcolatore' },
      { emoji: '\u{1FA7A}', name: 'Spese mediche', href: '/spese-mediche', desc: 'Detrazioni sanitarie', tag: '\u{1F4B0} Detrazione' },
    ],
  },
  {
    emoji: '\u{1F3E0}', title: 'Casa', slug: 'casa',
    color: '#0F4C5C', bg: '#E0EDEB',
    guides: [
      { emoji: '\u{1F3E1}', name: 'Compro casa', href: '/compro-casa', desc: 'Guida completa all\u2019acquisto', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F3E6}', name: 'Mutuo', href: '/mutuo', desc: 'Calcola rata e confronta', tag: '\u{1F527} Calcolatore' },
      { emoji: '\u{1F528}', name: 'Ristrutturare', href: '/ristrutturare', desc: 'Bonus e detrazioni', tag: '\u{1F4B0} Bonus' },
      { emoji: '\u{1F6CB}\uFE0F', name: 'Bonus mobili', href: '/bonus-mobili', desc: 'Acquisti agevolati', tag: '\u{1F4B0} Bonus' },
      { emoji: '\u{1F4CD}', name: 'Cambio residenza', href: '/cambio-residenza', desc: 'Procedura completa', tag: '\u{1F4DD} Procedura' },
    ],
  },
  {
    emoji: '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}', title: 'Famiglia', slug: 'famiglia',
    color: '#9B5DE5', bg: '#F0E8FA',
    guides: [
      { emoji: '\u{1F476}', name: 'Aspetto un figlio', href: '/figlio', desc: 'Tutto dalla A alla Z', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F468}\u200D\u{1F467}', name: 'Assegno unico', href: '/assegno-unico', desc: 'Importi e domanda', tag: '\u{1F4B0} Bonus' },
      { emoji: '\u{1F469}\u200D\u{1F466}', name: 'Congedo parentale', href: '/congedo-parentale', desc: 'Durata e retribuzione', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F3EB}', name: 'Bonus nido', href: '/bonus-nido', desc: 'Fino a 3.600\u20AC/anno', tag: '\u{1F4B0} Bonus' },
      { emoji: '\u{1F48D}', name: 'Mi sposo', href: '/mi-sposo', desc: 'Documenti e procedura', tag: '\u{1F4D6} Completa' },
    ],
  },
  {
    emoji: '\u{1FAAA}', title: 'Documenti', slug: 'documenti',
    color: '#2A9D8F', bg: '#E0F2EF',
    guides: [
      { emoji: '\u{1FAAA}', name: 'SPID', href: '/spid', desc: 'Identit\u00e0 digitale gratis', tag: '\u{1F680} 15 min' },
      { emoji: '\u{1F4B3}', name: 'CIE', href: '/cie', desc: 'Carta d\u2019identit\u00e0 elettronica', tag: '\u{1F4DD} Procedura' },
      { emoji: '\u{1F4E7}', name: 'PEC', href: '/pec', desc: 'Posta certificata', tag: '\u{1F680} Veloce' },
      { emoji: '\u2708\uFE0F', name: 'Passaporto', href: '/passaporto', desc: 'Richiesta e rinnovo', tag: '\u{1F4DD} Procedura' },
    ],
  },
  {
    emoji: '\u{1F4BC}', title: 'Lavoro', slug: 'lavoro',
    color: '#D97706', bg: '#FEF3C7',
    guides: [
      { emoji: '\u270B', name: 'Dimissioni', href: '/dimissioni', desc: 'Procedura telematica', tag: '\u{1F4DD} Procedura' },
      { emoji: '\u{1F4C4}', name: 'Busta paga', href: '/busta-paga', desc: 'Leggere ogni voce', tag: '\u{1F4D6} Completa' },
      { emoji: '\u{1F4C9}', name: 'NASpI', href: '/naspi', desc: 'Disoccupazione', tag: '\u{1F527} Calcolatore' },
      { emoji: '\u{1F4B0}', name: 'TFR', href: '/tfr', desc: 'Liquidazione', tag: '\u{1F527} Calcolatore' },
    ],
  },
  {
    emoji: '\u{1F3E5}', title: 'Salute', slug: 'salute',
    color: '#DC2626', bg: '#FEE2E2',
    guides: [],
  },
  {
    emoji: '\u{1F697}', title: 'Auto', slug: 'auto',
    color: '#4F46E5', bg: '#EEF2FF',
    guides: [],
  },
  {
    emoji: '\u{1F9D3}', title: 'Pensione', slug: 'pensione',
    color: '#7C3AED', bg: '#F3E8FF',
    guides: [],
  },
];

export const totalGuides = categoriesGuide.reduce((sum, c) => sum + c.guides.length, 0);

export const allGuides = categoriesGuide.flatMap(c =>
  c.guides.map(g => ({ ...g, cat: c.title, catColor: c.color, catSlug: c.slug }))
);

