import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import PageContent from './page-content';

const baseMetadata = pageMetadata('home');
// Verbatim reference title and hero paragraph; scoped to the homepage only.
const title = 'Tesseracton — AI Infrastructure Stack from Host Provisioning to Regulatory Proof';
const description = 'AI estates routinely stitch together Linux, GPU drivers, schedulers, asset registers, and annual compliance spreadsheets independently. The result is driver drift, unmonitored fleet state, and ninety-day audit blind spots. Tesseracton separates these concerns into four independently deployable products that interlock cleanly across the AI lifecycle.';

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: title },
  description,
  openGraph: { ...baseMetadata.openGraph, title, description },
  twitter: { ...baseMetadata.twitter, title, description },
};

export default function Page() {
  return <PageContent />;
}
