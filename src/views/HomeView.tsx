import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight, 
  Lock, 
  Terminal, 
  CheckCircle2, 
  Server, 
  Activity, 
  FileCheck, 
  ExternalLink,
  Sparkles,
  Database,
  Globe2
} from 'lucide-react';
import { NavigationTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPilotModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenPilotModal }) => {
  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto pt-8 pb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
              SOVEREIGN AI INFRASTRUCTURE SUITE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            The Trust Fabric for{' '}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Sovereign & Regulated AI
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tesseracton delivers mathematically verifiable silicon security for foundation models.
            Enforce confidential runtime isolation with <strong className="text-white">Aegis AI OS</strong>, and generate tamper-evident compliance evidence with <strong className="text-white">TAG</strong>.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('tag')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all border border-indigo-400/30 group cursor-pointer"
            >
              <span>Explore TAG (Attestation Gateway)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('aegis-os')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-700/80 hover:border-slate-600 transition-all shadow-lg group cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Explore Aegis AI OS</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dual Flagship Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          
          {/* Card 1: TAG */}
          <div 
            onClick={() => onNavigate('tag')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-indigo-500/50 p-8 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors" />
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                  Attestation Engine
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  TAG: Tesseracton Attestation Gateway
                </h3>
                <p className="text-xs font-mono text-indigo-400/90 mt-1">Continuous Hardware-Rooted Compliance for GPU Clouds</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                TAG interrogates silicon PUFs, TPM PCRs, and Confidential Computing quotes across distributed GPU clusters. It produces immutable Merkle receipts verifying compute location, firmware integrity, and policy compliance for regulators.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  'Hardware Identity & Geo-fencing via Silicon PUF and TPM 2.0',
                  'Continuous Golden PCR Hash Baseline verification (sub-second drift alerts)',
                  'Automated Cryptographic Evidence Receipts with Merkle root proofs',
                  'Regulator audit-ready exports for EU AI Act Art. 15, FedRAMP, and BSI C5'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Includes Interactive Live Cluster Dashboard</span>
              <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Enter TAG Section <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Aegis AI OS */}
          <div 
            onClick={() => onNavigate('aegis-os')}
            className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-sky-500/50 p-8 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none group-hover:bg-sky-500/20 transition-colors" />
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase bg-sky-500/10 text-sky-300 border border-sky-500/20 font-semibold">
                  Confidential AI OS
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-2">
                  Aegis AI OS
                </h3>
                <p className="text-xs font-mono text-sky-400/90 mt-1">Hardened Kernel & Confidential AI Enclave Runtime</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Purpose-built operating system and hypervisor that executes sensitive models within hardware-encrypted GPU enclaves (NVIDIA CC, AMD SEV-SNP). Weights remain encrypted in transit, at rest, and in GPU HBM3e memory.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  'Encrypted Weight Vault: Zero plaintext weights exposed to host RAM or hypervisor',
                  'Silicon-enforced Zero-Egress networking to prevent token or prompt leakage',
                  'Hardened microkernel with measured boot and tamper-evident runtime guarantees',
                  'Drop-in compatibility with PyTorch, vLLM, TensorRT-LLM, and Kubernetes/Slurm'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">98.2% Bare-Metal Inference Throughput</span>
              <span className="text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Aegis AI OS <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* The Dual-Shield Architecture Synergy Section */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">THE DUAL-SHIELD ARCHITECTURE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              How Aegis AI OS & TAG Work in Harmony
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              True compute sovereignty requires both <strong className="text-white">runtime execution protection</strong> (preventing unauthorized memory access and token exfiltration) and <strong className="text-white">cryptographic verification</strong> (proving to customers and regulators that protection was never breached).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <span className="w-5 h-5 rounded-full bg-sky-950 border border-sky-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>AEGIS RUNTIME ENCLAVE</span>
              </div>
              <h4 className="text-sm font-bold text-white">Execute Inside Enclave</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aegis AI OS initializes on GPU nodes, establishes encrypted HBM memory boundaries, loads encrypted weights, and isolates model execution from the host.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-indigo-500/30 space-y-3 shadow-lg shadow-indigo-950/30">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold">
                <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>CONTINUOUS TAG QUOTE</span>
              </div>
              <h4 className="text-sm font-bold text-white">Cryptographic Interrogation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                TAG periodically triggers hardware attestation quotes (PCR[0..7], silicon PUF, GPU driver signatures), verifying that zero memory drift or unauthorized access occurred.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>AUDIT-READY RECEIPT</span>
              </div>
              <h4 className="text-sm font-bold text-white">Immutable Merkle Proof</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                TAG hashes the quotes into an immutable Merkle tree and generates cryptographic certificates for customers, enterprise tenants, and compliance auditors.
              </p>
            </div>
          </div>
        </div>


        {/* Global CTA Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Ready to deploy mathematically provable AI infrastructure?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Evaluate TAG on your existing GPU nodes or request early deployment access to Aegis AI OS.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPilotModal}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-indigo-600/30 whitespace-nowrap cursor-pointer"
            >
              Request Enterprise Pilot
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-semibold text-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
