import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Fingerprint, MapPin, ShieldCheck, FileCheck2 } from 'lucide-react';

export function HomeView({ onOpenPilotModal }: { onOpenPilotModal: () => void }) {
  return <>
    <section className="portfolio-hero">
      <Image src="/images/compute-rack.webp" alt="" fill priority sizes="100vw" className="portfolio-hero-image" />
      <div className="page-container">
        <div className="portfolio-hero-copy">
          <span className="eyebrow">Independent AI compute assurance</span>
          <h1>Trust the silicon. Control the compute. <em>Prove the compliance.</em></h1>
          <p>Independent assurance for export-controlled GPUs, sovereign AI infrastructure and regulated AI workloads. Go beyond asset tracking to evidence-led governance of where compute operates, who can use it and what it is authorised to do.</p>
          <div className="hero-actions">
            <Link href="/contact#inquiry-form" className="control control-primary">Request a Briefing <ArrowRight size={16} /></Link>
            <Link href="/products" className="control">Explore Platform <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
    <div className="portfolio-strip"><div className="page-container portfolio-strip-inner">
      {[
        { label: 'Hardware identity', Icon: Fingerprint },
        { label: 'Geographic assurance', Icon: MapPin },
        { label: 'Authorised execution', Icon: ShieldCheck },
        { label: 'Regulatory evidence', Icon: FileCheck2 },
      ].map(({label, Icon})=><div key={label} className="portfolio-strip-item"><div className="flex items-center gap-3"><Icon size={20} className="text-accent shrink-0" aria-hidden="true" /><strong>{label}</strong></div></div>)}
    </div></div>
    <section aria-label="The challenge" className="page-container portfolio-section">
      <div className="mb-12 border-t border-line pt-8">
        <span className="eyebrow mb-6">The challenge</span>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-16 items-start">
          <h2 className="type-section">Export compliance cannot end at the point of sale.</h2>
          <p className="text-secondary">Advanced AI infrastructure creates a persistent accountability gap. Hardware can move, customers can change, and remote access can cross borders without moving a single accelerator. Static records alone cannot answer these questions.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {[
          { label: 'Risk 01 / Physical diversion', title: 'Where is the hardware?', description: 'Identify assets and corroborate location and custody against approved infrastructure boundaries. Investigate unexpected changes and missing evidence.' },
          { label: 'Risk 02 / Remote access', title: 'Who is using the compute?', description: 'Connect tenant, delegated access and workload permissions to verified compute. Support operator-led checks against approved customer and end-use policies.' },
          { label: 'Risk 03 / Evidence gap', title: 'Can you demonstrate it?', description: 'Move from point in time attestations to traceable evidence of observed state, policy decisions and exceptions, with scope and confidence made explicit.' },
        ].map(risk => <article key={risk.label} className="glass-card p-6 flex flex-col gap-4">
          <span className="eyebrow">{risk.label}</span><h3 className="type-card text-ink">{risk.title}</h3><p className="text-secondary">{risk.description}</p>
        </article>)}
      </div>
      <div className="product-notice mb-10"><div className="flex flex-wrap items-center justify-between gap-4"><div><h3 className="type-label">US Department of Commerce ? 19 November 2026</h3><p>New BIS restrictions address certain overseas data centres providing significant compute access to specified foreign customers.</p></div><a href="https://www.govinfo.gov/app/details/FR-2026-11-19/2026-23529" className="text-accent text-sm inline-flex items-center gap-1">Official rule <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
    </section>
    <section aria-labelledby="architecture-title" className="architecture-section"><div className="page-container">
      <div className="section-heading block! mb-12">
        <span className="eyebrow mb-6">The Tesseracton platform</span>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-16 items-start">
          <h2 id="architecture-title" className="type-section">One trust layer.<br />From silicon to execution.</h2>
          <div><p className="mt-0!">Tesseraction brings manufacturer evidence, infrastructure observations and operator-defined policy together. Its modular architecture is designed to turn verified facts into governed decisions and evidence that authorised parties can review independently.</p><div className="hero-actions"><Link href="/products" className="control control-primary">Explore Platform <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
        </div>
      </div>
      <ol className="architecture-rail lg:grid-cols-5">{[
        { stage: 'Observe', title: 'Identify', description: 'GPU inventory, hardware quotes, rack and location witnesses.' },
        { stage: 'Verify', title: 'Validate', description: 'Evidence integrity, freshness, baseline and confidence.' },
        { stage: 'Decide', title: 'Authorise', description: 'Tenant, region, workload and permit policy evaluation.' },
        { stage: 'Enforce', title: 'Control', description: 'Designed integration with scheduler, key release and gateways.' },
        { stage: 'Prove', title: 'Demonstrate', description: 'Signed outcomes, evidence manifests and selective disclosure.' },
      ].map(step=><li key={step.stage} className="architecture-node"><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
      <p className="text-sm max-w-4xl">Reference architecture. Enforcement and proof features depend on validated integrations and agreed deployment scope.</p>
    </div></section>
    <section className="page-container closing-cta"><div><span className="eyebrow mb-6">Engage Tesseracton</span><h2 className="type-section">Make your AI infrastructure accountable.</h2><p>Request an executive briefing or a technical evaluation of your GPU fleet. Define your assurance objectives, review supported platforms and agree a measurable pilot scope.</p></div><div className="hero-actions"><Link href="/contact" className="control control-primary">Request a briefing <ArrowUpRight size={16} aria-hidden="true" /></Link><button onClick={onOpenPilotModal} className="control">Discuss an enterprise pilot <ArrowUpRight size={16} aria-hidden="true" /></button></div></section>
  </>;
}
