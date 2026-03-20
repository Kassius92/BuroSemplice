const INDEXNOW_KEY = 'da27d6dd7203e59bf0dac08291c50b44';
const HOST = 'zeroburocrazia.it';
const SECRET = 'zb2026ping';

// All site URLs
const URLS = [
  '/',
  '/guide',
  '/730',
  '/isee',
  '/spid',
  '/assegno-unico',
  '/compro-casa',
  '/figlio',
  '/piva',
  '/ristrutturare',
  '/naspi',
  '/dimissioni',
  '/tfr',
  '/mi-sposo',
  '/spese-mediche',
  '/fattura-elettronica',
  '/regime-forfettario',
  '/imu',
  '/busta-paga',
  '/passaporto',
  '/pec',
  '/cie',
  '/bonus-mobili',
  '/congedo-parentale',
  '/bonus-nido',
  '/bonus-bollette',
  '/mutuo',
  '/cambio-residenza',
  '/cedolare-secca',
  '/esenzione-ticket',
  '/bonus-psicologo',
  '/novita',
  '/chi-siamo',
  '/contatti',
  '/privacy',
  '/termini',
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (key !== SECRET) {
    return Response.json({ error: 'Chiave non valida' }, { status: 403 });
  }

  const urlList = URLS.map(u => `https://${HOST}${u}`);

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const results = {};

  // Submit to IndexNow (Bing + Yandex + others)
  const endpoints = [
    { name: 'Bing', url: 'https://www.bing.com/indexnow' },
    { name: 'IndexNow API', url: 'https://api.indexnow.org/IndexNow' },
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      });
      results[endpoint.name] = {
        status: res.status,
        ok: res.ok,
        statusText: res.statusText,
      };
    } catch (err) {
      results[endpoint.name] = { error: err.message };
    }
  }

  return Response.json({
    message: `Inviate ${urlList.length} URL a IndexNow`,
    urls: urlList.length,
    results,
    timestamp: new Date().toISOString(),
  });
}
