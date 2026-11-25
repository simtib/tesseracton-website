import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SiteShell } from '../components/SiteShell';
import { siteUrl } from '../lib/seo';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'Tesseracton', template: '%s | Tesseracton' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-canvas text-ink antialiased selection:bg-action selection:text-ink overflow-x-hidden font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
