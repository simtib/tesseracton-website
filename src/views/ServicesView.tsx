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
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center pt-8 pb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
              ENTERPRISE SERVICES & SOVEREIGN SOLUTIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Specialized Engineering for{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              High-Assurance Infrastructure
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our cryptographic solutions architects deploy dedicated attestation nodes, perform custom PCR baseline audits, and accelerate sovereign AI regulatory certifications.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenPilotModal}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2 mx-auto cursor-pointer"
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
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">Key Deliverables:</span>
                  {svc.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Phase Delivery Framework */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">ENGAGEMENT LIFECYCLE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              How We Deliver Sovereign High-Assurance Compute
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              A structured 4-phase methodology designed to bring your GPU clusters into continuous compliance without operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-indigo-400">{phase.step}</span>
                  <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {phase.duration}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{phase.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action bar */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-sky-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Need Custom Attestation Policies or On-Premise HSM Setup?
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Our cryptographic solutions architects deploy dedicated attestation nodes, perform custom PCR baseline audits, and assist with sovereign AI regulatory filings.
            </p>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
