import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductMasthead, ProductDiagram } from './ProductArchitecture';

export function ProductPreview({ id }: { id: 'infrastructure-intelligence' | 'ai-trust-fabric' }) {
  const product = products.find(product => product.id === id)!;
  return <>
    <ProductMasthead id={id}/>
    <section className="page-container product-hero"><div className="product-hero-grid">
      <div className="product-hero-copy"><span className="eyebrow">{product.layer}</span><h1 className="type-display">{product.name}</h1><p>{product.description}</p><div className="hero-actions"><Link href="/contact" className="control control-primary">Discuss this product <ArrowRight size={16}/></Link><Link href="/products" className="control">Back to product portfolio</Link></div></div>
      <ProductDiagram id={id}/>
    </div></section>
    <section className="page-container portfolio-section"><div className="section-heading"><span className="eyebrow">Product development</span><div><h2 className="type-section">Detailed product page in preparation</h2><p>Designed to operate independently or as part of the integrated Tesseracton stack.</p></div></div><div className="product-notice"><span className="text-xs font-mono text-accent">{product.status} / Product page preview</span><p>{id === 'ai-trust-fabric' ? 'TAG AI Trust Fabric is a commercial concept, not a released capability. The healthcare example in the portfolio document is not endorsed by the Department of Health - Abu Dhabi.' : 'This overview describes the product specification. It does not confirm production availability or released integrations.'}</p></div></section>
  </>;
}
