import type { Metadata } from 'next';
import type { NavigationTab } from '../types';
import { routes } from './routes';

// Set SITE_URL to the public origin before building for deployment.
export const siteUrl = new URL(process.env.SITE_URL || 'http://localhost:3003');
export const pageDetails: Record<NavigationTab, { title: string; description: string }> = {
  home: {
    title: 'Tesseracton - Regulated Compute & Infrastructure Compliance',
    description: 'Continuous cryptographic verification, hardware attestation, and policy compliance for regulated AI infrastructure and confidential compute.',
  },
  tag: {
    title: 'TAG — Attestation Gateway',
    description: 'Continuous hardware-rooted attestation, golden PCR matching, and cryptographic evidence chains for regulated AI and sovereign GPU infrastructure.',
  },
  'aegis-os': {
    title: 'Aegis AI OS — Confidential AI Runtime',
    description: 'Protect sensitive AI models with a hardened kernel, encrypted GPU weight vault, confidential execution, and silicon-enforced zero-egress networking.',
  },
  services: {
    title: 'Professional Services',
    description: 'Deploy sovereign AI infrastructure with Tesseracton: air-gapped deployments, custom PCR baseline audits, and infrastructure compliance services.',
  },
  company: {
    title: 'About Tesseracton',
    description: 'Meet Tesseracton, building provable silicon-grade security and continuous compliance for foundation models and sovereign AI infrastructure.',
  },
  contact: {
    title: 'Contact Our Security Architects',
    description: 'Contact Tesseracton to evaluate TAG, deploy Aegis AI OS, or discuss an enterprise pilot for your sovereign GPU infrastructure.',
  },
};

export function pageMetadata(page: NavigationTab): Metadata {
  const { title, description } = pageDetails[page];
  const socialTitle = page === 'home' ? title : `${title} | Tesseracton`;
  return {
    title: page === 'home' ? { absolute: title } : title,
    description,
    alternates: { canonical: routes[page] },
    openGraph: {
      title: socialTitle,
      description,
      url: routes[page],
      siteName: 'Tesseracton',
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Tesseracton — Sovereign & Regulated AI' }],
    },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images: ['/opengraph-image'] },
  };
}
