import React from 'react';
import {
  Building2,
  Wrench,
  FileText,
  ShieldCheck,
  GraduationCap,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Server,
  Lock,
  Globe2,
  Calendar
} from 'lucide-react';

interface ServicesViewProps {
  onOpenPilotModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenPilotModal }) => {
  const serviceOfferings = [
    {
      icon: Server,
      title: 'Sovereign Datacenter & Air-Gapped Deployment',
      badge: 'Architecture',
      description: 'Turnkey deployment of TAG and Aegis AI OS in fully air-gapped, zero-egress environments with local Hardware Security Modules (HSMs) and sovereign key management.',
      deliverables: [
        'Zero-egress architecture design & network topology review',
        'Offline air-gapped TAG attestation cluster installation',
        'Hardware Security Module (HSM) PKCS#11 integration'
      ]
    },
    {
      icon: Wrench,
      title: 'Custom PCR Baselining & Golden State Auditing',
      badge: 'Hardware Engineering',
      description: 'Physical audit and measurement of your bare-metal server fleet to establish golden cryptographic baselines across UEFI, microcode, OS kernel, and GPU firmware.',
      deliverables: [
        'Silicon PUF and TPM 2.0 endorsement key certification',
        'Golden hash matrix for multi-node GPU clusters',
        'Automated drift alert policy configuration'
      ]
    },
    {
      icon: FileText,
      title: 'EU AI Act & FedRAMP High Certification Fast-Track',
      badge: 'Regulatory Compliance',
      description: 'Work directly with our regulatory compliance architects to map TAG cryptographic evidence receipts into required filings for EU AI Act Article 15 and US FedRAMP High.',
      deliverables: [
        'Gap assessment against European AI Office standards',
        'Pre-configured Merkle evidence export templates',
        'Dedicated audit representation & technical testimony'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'Private Attestation Node Provisioning',
      badge: 'Dedicated Infrastructure',
      description: 'Provisioning of dedicated, high-availability hardware attestation verifier nodes operating strictly within your sovereign jurisdiction or on-premise perimeter.',
      deliverables: [
        'Sub-millisecond local attestation quote verification',
        'Private Merkle log storage with HSM signing keys',
        'High-availability geo-replicated attestation pair'
      ]
    },
    {
      icon: Headphones,
      title: '24/7 Cryptographic Incident Response & Drift Monitoring',
      badge: 'Managed SLA',
      description: 'Continuous monitoring of your cluster attestation stream with 15-minute SLA on hardware drift, unexpected reboot events, or memory boundary violations.',
      deliverables: [
        '24/7/365 dedicated cryptographic operations center (SOC)',
        'Immediate root-cause forensic analysis on signature failures',
        'Quarterly re-baselining audits after firmware updates'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Enterprise Staff Training & Red-Teaming Labs',
      badge: 'Enablement',
      description: 'Deep-dive technical workshops for your infrastructure security engineers covering Confidential Computing, TPM 2.0 attestation, and hardware threat models.',
      deliverables: [
        'Hands-on lab simulating firmware tampering & drift attacks',
        'Confidential container orchestration best practices',
        'Certificate of Completion for Sovereign AI Security'
      ]
    }
  ];

  const phases = [
    {
      step: '01',
      title: 'Discovery & Threat Modeling',
      duration: 'Weeks 1-2',
      desc: 'We inspect your GPU hardware fleet, firmware versions, hypervisors, and sovereign regulatory mandates to construct a comprehensive threat model.'
    },
    {
      step: '02',
      title: 'Silicon Baselining & PoC',
      duration: 'Weeks 3-4',
      desc: 'Deployment in an evaluation node cluster. We extract silicon PUF IDs, calibrate TPM PCR golden values, and validate confidential GPU memory isolation.'
    },
    {
      step: '03',
      title: 'Production Hardening',
      duration: 'Weeks 5-8',
      desc: 'Full rollout across your production GPU cluster. We connect local HSMs, configure automated attestation daemons, and establish zero-egress enforcement.'
    },
    {
      step: '04',
      title: 'Continuous Compliance SLA',
      duration: 'Ongoing',
      desc: 'Automated 24/7 verification with audit-ready Merkle proof exports, 15-minute incident response SLAs, and firmware update re-certification.'
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}



      <div className="page-container relative z-10">

        {/* Header */}
        <div className="max-w-5xl text-left pt-8 pb-10 sm:pb-12 space-y-6">
          <div className="eyebrow">
            <Building2 className="w-4 h-4 text-accent" />
            <span className=" text-xs font-mono  font-semibold text-accent">
              ENTERPRISE SERVICES & SOVEREIGN SOLUTIONS
            </span>
          </div>

          <h1 className="type-display text-ink">
            Specialized Engineering for{' '}
            <span className="text-ink text-ink">
              High-Assurance Infrastructure
            </span>
          </h1>

          <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Our cryptographic solutions architects deploy dedicated attestation nodes, perform custom PCR baseline audits, and accelerate sovereign AI regulatory certifications.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenPilotModal}
              className="control control-primary px-6 py-4 font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {serviceOfferings.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-card bg-surface border border-line hover:border-line transition-colors flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-0.5 rounded text-xs font-mono  bg-raised text-accent border border-line font-semibold">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="type-card text-ink">{svc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{svc.description}</p>
                </div>

                <div className="pt-4 border-t border-line space-y-2">
                  <span className="text-xs font-mono  text-muted font-semibold">Key Deliverables:</span>
                  {svc.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Phase Delivery Framework */}
        <div className="my-16 p-8 sm:p-10 rounded-card bg-surface    border border-line">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono  text-accent  font-semibold">ENGAGEMENT LIFECYCLE</span>
            <h2 className="type-section text-ink mt-1">
              How We Deliver Sovereign High-Assurance Compute
            </h2>
            <p className="text-sm text-secondary mt-1">
              A structured 4-phase methodology designed to bring your GPU clusters into continuous compliance without operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div key={idx} className="p-5 rounded-card bg-inset border border-line space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold font-mono text-accent">{phase.step}</span>
                  <span className="text-xs font-mono text-muted px-2 py-0.5 rounded bg-surface border border-line">
                    {phase.duration}
                  </span>
                </div>
                <h4 className="type-label text-ink">{phase.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action bar */}
        <div className="mt-14 p-8 rounded-card bg-surface    border border-line flex flex-col sm:flex-row items-center justify-between gap-6 ">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="type-label text-ink">
              Need Custom Attestation Policies or On-Premise HSM Setup?
            </h4>
            <p className="text-sm text-muted max-w-xl">
              Our cryptographic solutions architects deploy dedicated attestation nodes, perform custom PCR baseline audits, and assist with sovereign AI regulatory filings.
            </p>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="control control-primary px-6 py-3  font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
