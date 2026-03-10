import { NextResponse } from 'next/server';

const BREVO_KEY = process.env.BREVO_KEY;
const BREVO_LIST = 6;
const GSHEET_URL = 'https://script.google.com/macros/s/AKfycbyOhrtxfynjbcyZtSzAzviVZlfAy6d0teRPCrxhKnmWZs4d_4cVckONn63cyUYPuH9kiw/exec';

export async function POST(request) {
  try {
    const { email, pagina } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 });
    }

    // 1. Salva nel foglio Google (prova consenso GDPR)
    const gsheetParams = new URLSearchParams({
      email,
      pagina: pagina || 'sconosciuta',
      consenso: 'si',
    });
    fetch(`${GSHEET_URL}?${gsheetParams.toString()}`).catch(() => {});

    // 2. Aggiungi contatto a Brevo (lista 6)
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST],
        attributes: { PAGINA: pagina || '' },
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok && brevoRes.status !== 204) {
      const err = await brevoRes.text();
      console.error('Brevo error:', err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
