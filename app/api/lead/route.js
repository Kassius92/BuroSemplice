import { NextResponse } from 'next/server';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzwgeKBMEUseNbkEGq5c8HW_EBc72h3Ls3FBQ6v6N1NzIrgIuiKrYfYv5xKcXwvYWlAQw/exec';

export async function POST(request) {
  try {
    const { guida, cap, contatto } = await request.json();

    if (!cap || !contatto) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 });
    }

    // Log to Google Sheet (fire-and-forget)
    const params = new URLSearchParams({
      tipo: 'lead',
      guida: guida || 'non specificata',
      cap,
      contatto,
      data: new Date().toISOString(),
    });

    fetch(`${SHEET_URL}?${params.toString()}`).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
