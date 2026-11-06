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
    <section id="evidence-flow-section" className="py-24 bg-[#090d18] relative border-t border-slate-900 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <span>CONTINUOUS EVIDENCE CHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            From infrastructure signal <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              to regulator-ready proof
            </span>
          </h2>
          <p className="text-base text-slate-400">
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
                className="glass-card p-6 rounded-2xl border border-slate-800/90 bg-slate-950/60 flex flex-col justify-between relative group hover:border-slate-700 hover:bg-slate-900/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                      0{item.step}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-sky-400 font-mono mb-2">{item.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Bottom Micro-Capability Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-xl p-5 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-indigo-950/80 text-indigo-400 flex items-center justify-center mb-3">
              <KeyRound className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Automated Identity Inventory</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cryptographic inventory mapping every CPU, GPU, TPM, and DPU across bare-metal and sovereign cloud instances.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-sky-950/80 text-sky-400 flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Immutable Evidence</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tamper-evident Merkle ledger with non-repudiation guarantees designed to withstand scrutiny by government auditors.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-amber-950/80 text-amber-400 flex items-center justify-center mb-3">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Deviation Detection</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time measurement drift analysis detecting unauthorized driver updates, hypervisor tampering, and location migration.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-purple-950/80 text-purple-400 flex items-center justify-center mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Firmware & Golden State</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enforces silicon-level golden state baselines, locking out untrusted microcode and unauthorized kernel modifications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
