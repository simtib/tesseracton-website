import React from 'react';
import {
  Cpu,
  Binary,
  Layers,
  FileCheck2,
  Lock,
  Search,
  KeyRound,
} from 'lucide-react';

export const EvidenceChainFlow: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Hardware Signal',
      subtitle: 'Continuous Silicon Harvest',
      icon: Cpu,
      summary: 'Silicon root of trust (TPM 2.0, AMD SEV-SNP, Intel TDX, NVIDIA CC) produces signed cryptographic quotes.',
    },
    {
      step: 2,
      title: 'Attestation Engine',
      subtitle: 'Cryptographic Policy Engine',
      icon: Binary,
      summary: 'Tesseracton engine verifies the manufacturer certificate chain and checks measurements against golden policy vectors.',
    },
    {
      step: 3,
      title: 'Immutable Evidence Chain',
      subtitle: 'Merkle Tree Timestamping',
      icon: Layers,
      summary: 'Attestation receipts are aggregated and anchored into a tamper-evident Merkle tree ledger with zero-knowledge proof support.',
    },
    {
      step: 4,
      title: 'Regulator-Ready Proof',
      subtitle: 'Continuous Audit Compliance',
      icon: FileCheck2,
      summary: 'Operators and regulators access real-time dashboards and export mathematically verifiable compliance certificates on demand.',
    },
  ];

  return (
    <section id="evidence-flow-section" className="py-24 bg-canvas relative border-t border-line overflow-hidden">
      {/* Background ambient accents */}



      <div className="page-container relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-line text-accent text-xs font-semibold   mb-4 font-mono">
            <span>CONTINUOUS EVIDENCE CHAIN</span>
          </div>
          <h2 className="type-section text-ink mb-4">
            From infrastructure signal <br className="hidden sm:inline" />
            <span className="text-ink text-ink">
              to regulator-ready proof
            </span>
          </h2>
          <p className="text-base text-muted">
            Tesseracton documents verifiable facts inside high-frequency cryptographic evidence chains.
          </p>
        </div>

        {/* 4-Stage Evidence Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-card border border-line bg-inset flex flex-col justify-between relative group hover:border-line hover:bg-surface transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface text-accent group-hover:bg-raised group-hover:text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-raised text-secondary font-semibold">
                      0{item.step}
                    </span>
                  </div>
                  <h4 className="type-label text-ink mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-accent font-mono mb-2">{item.subtitle}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Bottom Micro-Capability Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-card p-5 border border-line">
            <div className="w-8 h-8 rounded-lg bg-raised text-accent flex items-center justify-center mb-3">
              <KeyRound className="w-4 h-4" />
            </div>
            <h4 className="type-label text-ink mb-1.5">Automated Identity Inventory</h4>
            <p className="text-sm text-muted leading-relaxed">
              Cryptographic inventory mapping every CPU, GPU, TPM, and DPU across bare-metal and sovereign cloud instances.
            </p>
          </div>

          <div className="glass-card rounded-card p-5 border border-line">
            <div className="w-8 h-8 rounded-lg bg-raised text-accent flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="type-label text-ink mb-1.5">Immutable Evidence</h4>
            <p className="text-sm text-muted leading-relaxed">
              Tamper-evident Merkle ledger with non-repudiation guarantees designed to withstand scrutiny by government auditors.
            </p>
          </div>

          <div className="glass-card rounded-card p-5 border border-line">
            <div className="w-8 h-8 rounded-lg bg-raised text-warning flex items-center justify-center mb-3">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="type-label text-ink mb-1.5">Deviation Detection</h4>
            <p className="text-sm text-muted leading-relaxed">
              Real-time measurement drift analysis detecting unauthorized driver updates, hypervisor tampering, and location migration.
            </p>
          </div>

          <div className="glass-card rounded-card p-5 border border-line">
            <div className="w-8 h-8 rounded-lg bg-raised text-secondary flex items-center justify-center mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="type-label text-ink mb-1.5">Firmware & Golden State</h4>
            <p className="text-sm text-muted leading-relaxed">
              Enforces silicon-level golden state baselines, locking out untrusted microcode and unauthorized kernel modifications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
