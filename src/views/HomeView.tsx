import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';

export function HomeView({ onOpenPilotModal }: { onOpenPilotModal: () => void }) {
  return <>
    <section className="portfolio-hero">
      <Image src="/images/compute-rack.webp" alt="" fill priority sizes="100vw" className="portfolio-hero-image" />
      <div className="page-container">
        <div className="portfolio-hero-copy">
          <span className="eyebrow">Tesseracton / Sovereign AI infrastructure suite</span>
          <h1>The trust fabric for sovereign &amp; regulated AI</h1>
          <p>Four independently deployable products span AI infrastructure operations, asset intelligence, cryptographic hardware assurance, and AI execution governance. Use each on its own or combine them into an integrated stack.</p>
          <div className="hero-actions">
            <Link href="/tag" className="control control-primary">Explore TAG (Assurance Grid) <ArrowRight size={16} /></Link>
            <Link href="/aegis-os" className="control">Explore Aegis AI OS <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
      <span className="image-caption">Illustrative compute infrastructure</span>
    </section>
    <div className="portfolio-strip"><div className="page-container portfolio-strip-inner">
      {products.map((product,index)=><div key={product.id} className="portfolio-strip-item"><span>0{index+1} / {product.layer}</span><strong>{['Aegis AI OS','Infrastructure Intelligence','Assurance Grid','AI Trust Fabric'][index]}</strong></div>)}
    </div></div>
    <section aria-label="Product portfolio" className="page-container portfolio-section">
      <div className="section-heading"><span className="eyebrow">01 / Product portfolio</span><div><h2 className="type-section">Four disciplines.<br />One accountable infrastructure.</h2><p>From the operating system to execution evidence, each product addresses a distinct layer of the AI infrastructure lifecycle.</p></div></div>
      {products.map((product,index)=><Link key={product.id} href={product.href} className="portfolio-row">
        <span className="portfolio-index">0{index+1}</span>
        <div><p className="eyebrow mb-4">{product.layer}</p><h2>{product.name}</h2><span className="portfolio-status">{product.status}</span></div>
        <div className="portfolio-row-details"><p>{product.description}</p><ul>{product.features.map(feature=><li key={feature}>{feature}</li>)}</ul></div>
        <div className="portfolio-next"><ArrowUpRight size={24}/><span>{index===0||index===2?'Explore product':'View product preview'}</span></div>
      </Link>)}
    </section>
    <section aria-labelledby="architecture-title" className="architecture-section"><div className="page-container">
      <div className="section-heading"><span className="eyebrow">02 / Four-product architecture</span><div><h2 id="architecture-title" className="type-section">Independent products.<br />An integrated stack.</h2><p>Each product addresses a distinct operational need without requiring the others. The Intelligence Platform can inventory third-party Linux and bare-metal fleets without Aegis or TAG. Aegis exposes open attestation interfaces without requiring TAG.</p></div></div>
      <ol className="architecture-rail">{products.map((product,index)=><li key={product.id} className="architecture-node"><span>0{index+1} / {product.layer}</span><h3>{product.name}</h3><p>{product.summary}</p></li>)}</ol>
      <p className="text-sm max-w-4xl">This is the proposed integration architecture, not a production availability statement. Aegis is described in an architecture proposal, the Intelligence Platform and TAG in product specifications, and TAG AI Trust Fabric as a concept. The TAG dashboard on this website uses simulated data.</p>
    </div></section>
    <section className="page-container closing-cta"><div><span className="eyebrow mb-6">03 / Start a conversation</span><h2 className="type-section">Ready to deploy mathematically provable AI infrastructure?</h2><p>Evaluate TAG on your existing GPU nodes or request early deployment access to Aegis AI OS.</p></div><div className="hero-actions"><button onClick={onOpenPilotModal} className="control control-primary">Request Enterprise Pilot <ArrowRight size={16}/></button><Link href="/contact" className="control">Contact Sales</Link></div></section>
  </>;
}
