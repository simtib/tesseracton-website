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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
