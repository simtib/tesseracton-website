import React, { useState } from 'react';
import {
  ShieldCheck,
  RefreshCw,
  GitBranch,
  BellRing,
  CheckSquare,
  Fingerprint,
  FileCheck,
  HardDrive,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'feature-attestation',
      icon: ShieldCheck,
      color: 'text-sky-400',
      borderColor: 'border-sky-500/30',
      title: 'Real-Time Cryptographic Attestation',
      description:
        'Continuous hardware-rooted attestation across TPM 2.0, AMD SEV-SNP, Intel TDX, and NVIDIA Confidential Computing.',
      details:
        'Harvests hardware quotes every 15 seconds, matching cryptographic PCR hashes against mathematically signed manufacturer baselines without host OS overhead.',
    },
    {
      id: 'feature-drift',
      icon: RefreshCw,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      title: 'Drift & Baseline Management',
      description:
        'Immediate detection of boot parameter deviations, kernel module changes, or unapproved microcode revisions.',
      details:
        'Maintains immutable golden configuration baselines. Any delta in Secure Boot certificates or BIOS parameters triggers instantaneous alerts and isolation.',
    },
    {
      id: 'feature-decisions',
      icon: GitBranch,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      title: 'Compliance Decisions & Gateways',
      description:
        'Automated zero-trust admission controllers that cordon untrusted compute nodes before models or weights are scheduled.',
      details:
        'Integrates natively with Kubernetes, Slurm, Ray, and OpenShift to dynamically block workloads from executing on non-attested hardware blades.',
    },
    {
      id: 'feature-alerting',
      icon: BellRing,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      title: 'Alerting and SIEM Monitoring',
      description:
        'Granular telemetry streaming to Splunk, Datadog, AWS Security Hub, and dedicated regulator auditor channels.',
      details:
        'Generates sub-second incident dispatches with cryptographic proof packets containing exact register delta logs and geo-triangulation telemetry.',
    },
    {
      id: 'feature-policy',
      icon: CheckSquare,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      title: 'Policy Verifications',
      description:
        'Turnkey policy templates mapped to the EU AI Act (Articles 53 & 55), NIST AI RMF, ISO 42001, and US Export Controls.',
      details:
        'Enforces jurisdiction fencing, memory encryption standards, and cryptographic model provenance without requiring custom rule scripting.',
    },
    {
      id: 'feature-identity',
      icon: Fingerprint,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      title: 'Confidential Identity',
      description:
        'Binds silicon Physical Unclonable Function (PUF) certificates to SPIFFE/SPIRE workload identities.',
      details:
        'Ensures that sensitive AI model weights can only be decrypted inside certified physical hardware in authorized data center cages.',
    },
    {
      id: 'feature-evidence',
      icon: FileCheck,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      title: 'Verifiable Evidence State',
      description:
        'Immutable cryptographic evidence chain anchored in a verifiable Merkle tree ledger for instant audit clearance.',
      details:
        'Provides regulators with one-click verifiable zero-knowledge proofs demonstrating compliance across the entire model training and inference lifecycle.',
    },
    {
      id: 'feature-firmware',
      icon: HardDrive,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/30',
      title: 'Firmware & Microcode Slots',
      description:
        'Hardware supply chain integrity protection verifying OEM certificates against manufacturer golden ledgers.',
      details:
        'Guards PCIe slots, BMC controllers, and accelerator firmware against malicious physical implants, grey-market swaps, and side-channel tampering.',
    },
  ];

  return (
    <section id="features-section" className="py-24 bg-[#07090e] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <span>PRODUCT FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Everything you need for compliance.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Tesseracton hyper-scales continuous attestation across heterogeneous AI clusters, bare-metal GPUs, and confidential enclaves in real time.
          </p>
        </div>

        {/* Features 3-4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            const isSelected = activeFeature === f.id;
            return (
              <div
                key={f.id}
                onClick={() => setActiveFeature(isSelected ? null : f.id)}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 relative group overflow-hidden ${
                  isSelected
                    ? 'border-indigo-500/80 bg-slate-900/90 shadow-lg shadow-indigo-900/30 ring-1 ring-indigo-500/50'
                    : 'hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-sky-200 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {f.description}
                  </p>

                  {/* Expanded deep details if clicked */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono animate-in fade-in duration-200 bg-slate-950/40 p-2.5 rounded-lg border">
                      <span className="text-sky-400 font-semibold block mb-1">Architecture Specification:</span>
                      {f.details}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{isSelected ? 'Click to collapse' : 'Click to inspect'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
