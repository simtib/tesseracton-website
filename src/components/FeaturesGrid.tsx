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
      color: 'text-accent',
      borderColor: 'border-line',
      title: 'Real-Time Cryptographic Attestation',
      description:
        'Continuous hardware-rooted attestation across TPM 2.0, AMD SEV-SNP, Intel TDX, and NVIDIA Confidential Computing.',
      details:
        'Harvests hardware quotes every 15 seconds, matching cryptographic PCR hashes against mathematically signed manufacturer baselines without host OS overhead.',
    },
    {
      id: 'feature-drift',
      icon: RefreshCw,
      color: 'text-accent',
      borderColor: 'border-line',
      title: 'Drift & Baseline Management',
      description:
        'Immediate detection of boot parameter deviations, kernel module changes, or unapproved microcode revisions.',
      details:
        'Maintains immutable golden configuration baselines. Any delta in Secure Boot certificates or BIOS parameters triggers instantaneous alerts and isolation.',
    },
    {
      id: 'feature-decisions',
      icon: GitBranch,
      color: 'text-success',
      borderColor: 'border-line',
      title: 'Compliance Decisions & Gateways',
      description:
        'Automated zero-trust admission controllers that cordon untrusted compute nodes before models or weights are scheduled.',
      details:
        'Integrates natively with Kubernetes, Slurm, Ray, and OpenShift to dynamically block workloads from executing on non-attested hardware blades.',
    },
    {
      id: 'feature-alerting',
      icon: BellRing,
      color: 'text-warning',
      borderColor: 'border-line',
      title: 'Alerting and SIEM Monitoring',
      description:
        'Granular telemetry streaming to Splunk, Datadog, AWS Security Hub, and dedicated regulator auditor channels.',
      details:
        'Generates sub-second incident dispatches with cryptographic proof packets containing exact register delta logs and geo-triangulation telemetry.',
    },
    {
      id: 'feature-policy',
      icon: CheckSquare,
      color: 'text-secondary',
      borderColor: 'border-line',
      title: 'Policy Verifications',
      description:
        'Turnkey policy templates mapped to the EU AI Act (Articles 53 & 55), NIST AI RMF, ISO 42001, and US Export Controls.',
      details:
        'Enforces jurisdiction fencing, memory encryption standards, and cryptographic model provenance without requiring custom rule scripting.',
    },
    {
      id: 'feature-identity',
      icon: Fingerprint,
      color: 'text-accent',
      borderColor: 'border-line',
      title: 'Confidential Identity',
      description:
        'Binds silicon Physical Unclonable Function (PUF) certificates to SPIFFE/SPIRE workload identities.',
      details:
        'Ensures that sensitive AI model weights can only be decrypted inside certified physical hardware in authorized data center cages.',
    },
    {
      id: 'feature-evidence',
      icon: FileCheck,
      color: 'text-accent',
      borderColor: 'border-line',
      title: 'Verifiable Evidence State',
      description:
        'Immutable cryptographic evidence chain anchored in a verifiable Merkle tree ledger for instant audit clearance.',
      details:
        'Provides regulators with one-click verifiable zero-knowledge proofs demonstrating compliance across the entire model training and inference lifecycle.',
    },
    {
      id: 'feature-firmware',
      icon: HardDrive,
      color: 'text-danger',
      borderColor: 'border-line',
      title: 'Firmware & Microcode Slots',
      description:
        'Hardware supply chain integrity protection verifying OEM certificates against manufacturer golden ledgers.',
      details:
        'Guards PCIe slots, BMC controllers, and accelerator firmware against malicious physical implants, grey-market swaps, and side-channel tampering.',
    },
  ];

  return (
    <section id="features-section" className="py-24 bg-canvas relative border-t border-line">
      <div className="page-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-line text-secondary text-xs font-semibold   mb-4 font-mono">
            <span>PRODUCT FEATURES</span>
          </div>
          <h2 className="type-section text-ink mb-4">
            Everything you need for compliance.
          </h2>
          <p className="text-base text-muted leading-relaxed">
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
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveFeature(isSelected ? null : f.id); } }}
                onClick={() => setActiveFeature(isSelected ? null : f.id)}
                className={`glass-card rounded-card p-6 flex flex-col justify-between cursor-pointer transition-colors duration-150 relative group overflow-hidden ${
                  isSelected
                    ? 'border-line bg-surface   ring-1 ring-accent'
                    : 'hover:border-line hover:bg-surface'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-card bg-surface border border-line flex items-center justify-center mb-4  transition-transform">
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 className="type-card text-ink mb-2 group-hover:text-accent transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {f.description}
                  </p>

                  {/* Expanded deep details if clicked */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-line text-xs text-muted font-mono animate-in fade-in duration-150 bg-inset p-3 rounded-lg border">
                      <span className="text-accent font-semibold block mb-1">Architecture Specification:</span>
                      {f.details}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-line flex items-center justify-between text-xs text-muted font-mono">
                  <span>{isSelected ? 'Click to collapse' : 'Click to inspect'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 text-muted group-hover:text-ink transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
