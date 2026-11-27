import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

export function ProductMasthead({ id, children }: { id: string; children?: ReactNode }) {
  const index=products.findIndex(product=>product.id===id);
  const product=products[index];
  return <div className="product-masthead"><div className="page-container product-masthead-inner"><div className="flex flex-wrap items-center gap-3"><Link href="/products" className="control"><ArrowLeft size={16} aria-hidden="true" />Back to Products</Link><span>{product.name}</span></div><div className="flex flex-wrap items-center gap-3"><span>0{index+1} / {product.status}</span>{children}</div></div></div>;
}

export function ProductDiagram({ id }: { id: string }) {
  const product=products.find(product=>product.id===id)!;
  const labels=id==='ai-trust-fabric'?['Verified infrastructure','Models / datasets / identities','Policies / execution evidence']:product.features;
  return <figure className="system-diagram"><figcaption className="system-diagram-header"><span>{product.layer}</span><span>{id==='ai-trust-fabric'?'Concept':'Architecture'}</span></figcaption><div className="system-diagram-body">{labels.map((label,index)=><div key={label}>{index>0&&<span className="system-connector" aria-hidden="true"/>}<div className="system-node"><span className="text-xs font-mono text-muted">0{index+1}</span><h3 className="mt-2">{label}</h3></div></div>)}<p className="text-xs text-muted mt-6">{product.summary}</p></div></figure>;
}
