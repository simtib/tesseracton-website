import Link from 'next/link';
import React from 'react';
import {
  Building,
  ShieldCheck,
  Cpu,
  Lock,
  ArrowRight
} from 'lucide-react';

interface CompanyViewProps {
  onOpenPilotModal: () => void;
}

export const CompanyView: React.FC<CompanyViewProps> = ({ onOpenPilotModal }) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Silicon-Rooted Trust',
      desc: 'Security must be anchored in physical silicon measurements—TPM 2.0, AMD SEV-SNP, and NVIDIA Confidential Computing—never in cloud hypervisors or infrastructure operators.'
    },
    {
      icon: ShieldCheck,
      title: 'Continuous Proof Over Paper Audits',
      desc: 'Static compliance checklists expire the moment compute reboots. We replace manual audits with sub-millisecond, cryptographically signed hardware receipts.'
    },
    {
      icon: Lock,
      title: 'Sovereign AI Independence',
      desc: 'Regulated enterprises, national laboratories, and defense entities must verify exactly where foundation model weights execute, guaranteeing zero unauthorized data egress.'
    }
  ];

  const standards = [
    'IETF RATS (RFC 9334)',
    'TCG TPM 2.0 Specification',
    'Confidential Computing Consortium',
    'NIST SP 800-53 High',
    'EU AI Act Art. 15 Assurance'
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}



      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Section */}
        <div className="max-w-3xl text-left pt-8 pb-16 space-y-6">
          <div className="eyebrow">
            <Building className="w-4 h-4 text-accent" />
            <span className=" text-xs font-mono  font-semibold text-accent">
              ABOUT TESSERACTON
            </span>
          </div>

          <h1 className="type-display text-ink">
            Provable Trust for the{' '}
            <span className="text-ink text-ink">
              Foundation Model Era
            </span>
          </h1>

          <p className="text-base sm:text-lg text-secondary leading-relaxed">
            Tesseracton develops hardware-rooted attestation gateways and sovereign operating runtimes for confidential AI compute. We eliminate reliance on cloud provider trust by making infrastructure integrity mathematically verifiable.
          </p>
        </div>

        {/* Mission Statement Callout */}
        <div className="p-8 sm:p-10 rounded-card bg-surface    border border-line  mb-16">
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs font-mono  text-accent  font-semibold">OUR MISSION</span>
            <blockquote className="text-lg sm:text-xl font-medium text-ink leading-relaxed">
              "As autonomous and foundation models take over mission-critical decisions, society cannot rely on unverified cloud claims. Every prompt, parameter, and inference must have an unbroken cryptographic chain of custody."
            </blockquote>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono  text-accent  font-semibold">ARCHITECTURAL FOUNDATION</span>
            <h2 className="type-section text-ink">Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-7 rounded-card bg-surface border border-line hover:border-line transition-colors space-y-4">
                  <div className="w-12 h-12 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="type-card text-ink">{pillar.title}</h3>
                  <p className="text-sm sm:text-sm text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Standards Alignment Bar */}
        <div className="p-8 rounded-card bg-surface border border-line text-center space-y-6 mb-16">
          <span className="text-xs font-mono  text-muted  font-semibold block">
            CRYPTOGRAPHIC & REGULATORY STANDARDS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {standards.map((std, idx) => (
              <span key={idx} className="px-4 py-2 rounded-lg bg-inset border border-line text-xs font-mono text-secondary">
                {std}
              </span>
            ))}
          </div>
        </div>

        {/* Clean CTA */}
        <div className="p-8 sm:p-10 rounded-card bg-surface    border border-line flex flex-col sm:flex-row items-center justify-between gap-6 ">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="type-card text-ink">
              Partner with Tesseracton
            </h3>
            <p className="text-sm sm:text-sm text-muted max-w-xl">
              Connect with our team to explore sovereign datacenter attestation, confidential infrastructure pilots, or enterprise deployment.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="control control-primary px-6 py-3  font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
