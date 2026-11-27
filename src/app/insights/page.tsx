import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata('insights');

export default function Page() {
  return <>
    <div className="product-masthead"><div className="page-container product-masthead-inner"><span>Insights</span><Link href="/contact" className="control">Contact Sales</Link></div></div>
    <section className="page-container product-hero">
      <div className="product-hero-copy"><span className="eyebrow">Tesseracton</span><h1 className="type-display">Insights</h1></div>
    </section>
    <section className="page-container portfolio-section">
      <div className="section-heading"><span className="eyebrow">Latest insights</span><div><h2 className="type-section">No insights published yet</h2><p>Explore our product portfolio in the meantime.</p><div className="hero-actions"><Link href="/solutions" className="control control-primary">Explore Solutions <ArrowRight size={16}/></Link></div></div></div>
    </section>
  </>;
}
