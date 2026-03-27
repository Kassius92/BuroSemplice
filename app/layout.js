import './globals.css';
import './redesign.css';
import { DM_Sans, Playfair_Display, DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';

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

/* ── Redesign V8 fonts ── */
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-sf',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sn',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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

import CookieBanner from '@/components/CookieBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${dmSans.variable} ${playfair.variable} ${dmSerif.variable} ${jakarta.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500,
          });
        `}} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7003185964120229"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
