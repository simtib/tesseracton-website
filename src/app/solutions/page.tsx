import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata('solutions');

const audiences = [
  {
    title: 'Governments & regulators',
    description: 'Review scoped evidence of compute identity, location, operator controls and exceptions without routine access to confidential customer payloads.',
    action: 'Discuss regulatory assurance',
  },
  {
    title: 'Semiconductor OEMs & exporters',
    description: 'Support post-sale accountability, asset provenance, customer due diligence and investigations into suspected diversion.',
    action: 'Discuss counter-diversion',
  },
  {
    title: 'AI factories & GPU clouds',
    description: 'Establish a fleet evidence baseline, identify exceptions and evaluate workload authorisation alongside operational controls.',
    action: 'Discuss fleet assurance',
  },
  {
    title: 'Sovereign AI operators',
    description: 'Design jurisdiction-aware placement, local control ownership and independently reviewable evidence within sovereign boundaries.',
    action: 'Discuss sovereign infrastructure',
  },
  {
    title: 'Regulated enterprises',
    description: 'Connect sensitive models, datasets, identities and AI workloads to approved infrastructure and data usage policies.',
    action: 'Discuss AI governance',
  },
  {
    title: 'GPU lessors & financiers',
    description: 'Improve custody visibility, reconcile contracted capacity and define evidence for asset handovers and retirement.',
    action: 'Discuss asset accountability',
  },
];

export default function Page() {
  return <>
    <div className="product-masthead"><div className="page-container product-masthead-inner"><span>Solutions</span><Link href="/contact" className="control">Contact Sales</Link></div></div>
    <section className="page-container product-hero">
      <div className="product-hero-copy"><span className="eyebrow">Solutions</span><h1 className="type-display">Trust that works across the AI supply chain.</h1><p>Designed for organisations that export, operate, finance, govern or rely on advanced computing infrastructure.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {audiences.map(audience => <article key={audience.title} className="border-t border-line pt-6 flex flex-col gap-4">
          <h2 className="type-card text-ink">{audience.title}</h2>
          <p className="text-secondary">{audience.description}</p>
          <Link href="/contact" className="text-accent text-sm font-medium inline-flex items-center gap-1 mt-auto">{audience.action}<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </article>)}
      </div>
    </section>
  </>;
}
