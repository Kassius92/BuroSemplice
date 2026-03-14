import './globals.css';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import BottomNav from '@/components/BottomNav';
import PWARegister from '@/components/PWARegister';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

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
    <html lang="it" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F4C5C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
        <BottomNav />
        <PWARegister />
      </body>
    </html>
  );
}
