export const categories = [
  {
    emoji: '💰', title: 'Fisco e soldi',
    subs: [
      { title: 'Dichiarazione redditi', links: [
        { name: '730', href: '/730' },
        { name: 'Spese mediche detraibili', href: '/spese-mediche' },
        { name: '730 precompilato', href: '#', soon: true },
        { name: '730 senza sostituto', href: '#', soon: true },
      ]},
      { title: 'ISEE e bonus', links: [
        { name: 'ISEE', href: '/isee' },
        { name: 'Bonus bollette luce e gas', href: '/bonus-bollette' },
        { name: 'ISEE corrente', href: '#', soon: true },
        { name: 'Bonus e detrazioni 2026', href: '#', soon: true },
        { name: 'Assegno di inclusione (ADI)', href: '/assegno-inclusione' },
      ]},
      { title: 'Tasse e imposte', links: [
        { name: 'Partita IVA', href: '/piva' },
        { name: 'Regime forfettario', href: '/regime-forfettario' },
        { name: 'Fattura elettronica', href: '/fattura-elettronica' },
        { name: 'Cedolare secca', href: '/cedolare-secca' },
        { name: 'IMU', href: '/imu' },
      ]},
    ]
  },
  {
    emoji: '🏠', title: 'Casa',
    subs: [
      { title: 'Comprare e vendere', links: [
        { name: 'Compro casa', href: '/compro-casa' },
        { name: 'Mutuo', href: '/mutuo' },
        { name: 'Vendo casa', href: '#', soon: true },
      ]},
      { title: 'Lavori e bonus', links: [
        { name: 'Ristrutturare', href: '/ristrutturare' },
        { name: 'Bonus mobili', href: '/bonus-mobili' },
        { name: 'Bonus caldaia', href: '#', soon: true },
      ]},
      { title: 'Vivere in casa', links: [
        { name: 'Cambio residenza', href: '/cambio-residenza' },
        { name: 'Affitto', href: '#', soon: true },
        { name: 'Voltura utenze', href: '#', soon: true },
      ]},
    ]
  },
  {
    emoji: '👨‍👩‍👧', title: 'Famiglia',
    subs: [
      { title: 'Figli', links: [
        { name: 'Aspetto un figlio', href: '/figlio' },
        { name: 'Assegno unico', href: '/assegno-unico' },
        { name: 'Congedo parentale', href: '/congedo-parentale' },
        { name: 'Bonus nido', href: '/bonus-nido' },
      ]},
      { title: 'Coppia', links: [
        { name: 'Mi sposo', href: '/mi-sposo' },
        { name: 'Divorzio', href: '#', soon: true },
        { name: 'Successione ed eredità', href: '/successione' },
      ]},
      { title: 'Eredità', links: [
        { name: 'Successione', href: '#', soon: true },
        { name: 'Testamento', href: '#', soon: true },
      ]},
    ]
  },
  {
    emoji: '🪪', title: 'Documenti',
    subs: [
      { title: 'Identità digitale', links: [
        { name: 'SPID', href: '/spid' },
        { name: 'CIE', href: '/cie' },
        { name: 'PEC', href: '/pec' },
      ]},
      { title: 'Documenti personali', links: [
        { name: 'Passaporto', href: '/passaporto' },
        { name: 'Codice fiscale', href: '#', soon: true },
        { name: 'Tessera sanitaria', href: '#', soon: true },
        { name: 'Codice fiscale', href: '/codice-fiscale' },
      ]},
    ]
  },
  {
    emoji: '💼', title: 'Lavoro',
    subs: [
      { title: 'Iniziare e cambiare', links: [
        { name: 'Primo lavoro', href: '#', soon: true },
        { name: 'Dimissioni', href: '/dimissioni' },
        { name: 'Busta paga', href: '/busta-paga' },
      ]},
      { title: 'Perdere il lavoro', links: [
        { name: 'NASpI', href: '/naspi' },
        { name: 'TFR', href: '/tfr' },
      ]},
    ]
  },
  {
    emoji: '🏥', title: 'Salute',
    subs: [
      { title: 'Servizio sanitario', links: [
        { name: 'Medico di base', href: '#', soon: true },
        { name: 'Esenzione ticket', href: '#', soon: true },
        { name: 'Fascicolo sanitario', href: '#', soon: true },
        { name: 'Esenzione ticket', href: '/esenzione-ticket' },
        { name: 'Bonus psicologo', href: '/bonus-psicologo' },
      ]},
      { title: 'Disabilità e assistenza', links: [
        { name: 'Invalidità civile', href: '#', soon: true },
        { name: 'Legge 104', href: '#', soon: true },
      ]},
    ]
  },
  {
    emoji: '🚗', title: 'Auto',
    subs: [
      { title: 'Comprare e vendere', links: [
        { name: 'Auto usata', href: '#', soon: true },
        { name: 'Passaggio proprietà', href: '#', soon: true },
      ]},
      { title: 'Documenti e tasse', links: [
        { name: 'Patente', href: '#', soon: true },
        { name: 'Bollo', href: '#', soon: true },
      ]},
    ]
  },
  {
    emoji: '🧓', title: 'Pensione',
    subs: [
      { title: 'Andare in pensione', links: [
        { name: 'Quando', href: '#', soon: true },
        { name: 'Anticipata', href: '#', soon: true },
      ]},
      { title: 'Prepararsi', links: [
        { name: 'Riscatto laurea', href: '#', soon: true },
        { name: 'Integrativa', href: '#', soon: true },
      ]},
    ]
  },
];
