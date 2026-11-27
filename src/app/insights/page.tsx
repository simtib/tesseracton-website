import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata('insights');

const references = [
  {
    label: 'Regulatory update \u00b7 19 Nov 2026',
    title: 'Addressing Remote Access to Advanced Semiconductors',
    description: 'BIS interim final rule addressing certain remote compute access arrangements and advanced semiconductor diversion risks.',
    action: 'Read the Federal Register',
    href: 'https://www.govinfo.gov/app/details/FR-2026-11-19/2026-23529',
  },
  {
    label: 'Enforcement \u00b7 01 Oct 2026',
    title: '$300 million alleged server diversion case',
    description: 'The US Department of Justice announced charges concerning export-controlled GPU servers allegedly diverted to China.',
    action: 'Read the DOJ release',
    href: 'https://www.justice.gov/usao-cdca/pr/san-gabriel-man-arrested-federal-charges-alleging-he-smuggled-china-more-300-million',
  },
  {
    label: 'Legislative proposal',
    title: 'The Chip Security Act',
    description: 'Proposed legislation targeting chip security mechanisms and diversion verification. A proposal, not an enacted mandate.',
    action: 'View the bill',
    href: 'https://www.congress.gov/bill/119th-congress/house-bill/3447',
  },
  {
    label: 'Industry guidance \u00b7 May 2025',
    title: 'BIS counter-diversion guidance',
    description: 'Due diligence and red flags for advanced computing integrated circuits and systems.',
    action: 'Read BIS guidance',
    href: 'https://www.bis.gov/media/documents/si-counter-diversion-industry-guidance-may-13-2025.pdf',
  },
];

export default function Page() {
  return <>
    <div className="product-masthead"><div className="page-container product-masthead-inner"><span>Insights</span><Link href="/contact" className="control">Contact Sales</Link></div></div>
    <section className="page-container product-hero">
      <span className="eyebrow mb-6">Regulatory intelligence</span>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-16 items-start">
        <h1 className="type-display">The rules are evolving.<br />So must assurance.</h1>
        <p className="text-secondary text-lg">Selected official sources explaining why ongoing compute accountability matters. These references inform the challenge; they do not constitute an endorsement of Tesseracton or legal advice.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {references.map(reference => <article key={reference.href} className="glass-card p-6 flex flex-col gap-4">
          <span className="eyebrow">{reference.label}</span>
          <h2 className="type-card">{reference.title}</h2>
          <p className="text-secondary">{reference.description}</p>
          <a href={reference.href} className="text-accent text-sm font-medium inline-flex items-center gap-1 mt-auto">{reference.action}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>)}
      </div>
      <p className="text-sm text-secondary mt-6">Research snapshot: 26 November 2026. Regulatory obligations depend on the items, transaction, destination, end user, end use and applicable authorisations.</p>
    </section>
  </>;
}
