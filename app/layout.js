import './globals.css';

export const metadata = {
  title: { default: 'ZeroBurocrazia — La burocrazia spiegata semplice', template: '%s | ZeroBurocrazia' },
  description: 'Guide gratuite e in linguaggio semplice per affrontare la burocrazia italiana: 730, SPID, ISEE, Partita IVA e molto altro.',
  metadataBase: new URL('https://zeroburocrazia.it'),
  openGraph: {
    siteName: 'ZeroBurocrazia',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/oghome.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/appletouchicon.png',
    other: [{ rel: 'icon', url: '/androidchrome192x192.png', sizes: '192x192' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
