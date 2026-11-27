import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProducts } from '../../data/portfolio';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata('products');

export default function Page() {
  return <>
    <div className="product-masthead"><div className="page-container product-masthead-inner"><span>Products</span><Link href="/contact" className="control">Contact Sales</Link></div></div>
    <section className="page-container product-hero">
      <div className="product-hero-grid">
        <div className="product-hero-copy"><span className="eyebrow">Product portfolio</span><h1 className="type-display">Built for the entire AI compute lifecycle.</h1></div>
        <p className="text-secondary text-lg">Four platform disciplines and ten specialised TAG product programmes. Start with infrastructure assurance, then extend to authorisation, private evidence, sovereign federation and commercial accountability.</p>
      </div>
    </section>
    <section aria-label="Product portfolio" className="page-container portfolio-section">
      {portfolioProducts.map((product, index) => <Link key={product.id} href={product.href} className="portfolio-row">
        <span className="portfolio-index">0{index + 1}</span>
        <div><p className="eyebrow mb-4">{product.layer}</p><h2>{product.name}</h2><span className="portfolio-status">{product.status}</span></div>
        <div className="portfolio-row-details"><p>{product.description}</p><ul>{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
        <div className="portfolio-next"><ArrowUpRight size={24}/><span>Explore product</span></div>
      </Link>)}
    </section>
  </>;
}
