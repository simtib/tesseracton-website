import React from 'react';
import { 
  ArrowRight,
  CheckCircle2,
  Cpu, 
  FileCode,
  HardDrive,
  Lock, 
  RotateCcw,
  Shield, 
  ShieldCheck
} from 'lucide-react';
import { AegisIsometricGraphic } from '../components/AegisIsometricGraphic';

interface AegisProductViewProps {
  onOpenPilotModal: () => void;
  onNavigateToTag: () => void;
}

export const AegisProductView: React.FC<AegisProductViewProps> = ({
  onOpenPilotModal,
  onNavigateToTag,
}) => {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Product Header & Hero - Two Column Grid with 3D Isometric Enclave Visual */}
        <div className="pt-6 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Value Proposition & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-medium tracking-wide shadow-inner">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-sky-200">
                  AEGIS AI OS • SOVEREIGN ENCLAVE RUNTIME
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-white">
                One Common Core OS.{' '}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Adaptive Deployment Across Any Scale.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Aegis AI OS provides <strong className="text-white">one common core OS architecture</strong> with adaptive deployment profiles. It scales seamlessly across five distinct footprints without forcing a bloated single image onto every machine, backed by hardware-anchored, evidence-first assurance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenPilotModal}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-sky-600/30 hover:shadow-sky-600/50 transition-all border border-sky-400/30 group cursor-pointer"
                >
                  <span>Deploy Aegis AI OS in Pilot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onNavigateToTag}
                  className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-700/80 hover:border-slate-600 transition-all shadow-lg group cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Pair with TAG Gateway</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Security Anchor Checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Immutable dm-verity
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  NIST 800-53 OSCAL
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  Zero Host RAM Leak
                </span>
              </div>
            </div>

            {/* Right Column: 3D Isometric Enclave Visual (5 cols) */}
            <div className="lg:col-span-5 flex justify-center relative w-full">
              <AegisIsometricGraphic />
            </div>

          </div>
        </div>



        {/* ========================================================================= */}
        {/* NEW SECTION 2: SECURE-BY-DEFAULT & EVIDENCE-FIRST ASSURANCE */}
        {/* ========================================================================= */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 shadow-2xl relative">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURE-BY-DEFAULT & EVIDENCE-FIRST ASSURANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hardware-Anchored Trust & Machine-Readable OSCAL Evidence
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Trust is anchored directly in physical silicon from boot through execution. Aegis combines an immutable Linux base, UEFI Secure Boot, TPM 2.0 measured boot, SELinux enforcement, and signed atomic update engines with rollback protection. Built to satisfy high-assurance frameworks (such as NIST 800-53 High baselines) by generating versioned, machine-readable OSCAL audit evidence.
            </p>
          </div>

          {/* 6 Hardware & Software Security Anchors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Immutable Linux Base</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                dm-verity protected, read-only root filesystem. Prevents unauthorized persistence, malware implants, and tampering during runtime.
              </p>
              <div className="pt-2 text-[11px] font-mono text-indigo-400">
                ✓ Read-only signed squashfs
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">UEFI Secure Boot</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hardware-gated validation of all bootloader and kernel binaries. Only cryptographically signed images execute on bare-metal hardware.
              </p>
              <div className="pt-2 text-[11px] font-mono text-sky-400">
                ✓ Custom sovereign PK/KEK keys
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">TPM 2.0 Measured Boot</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cryptographic PCR[0..7] registers continuously record firmware, microcode, kernel cmdline, and initramfs hashes for remote attestation.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">
                ✓ Continuous quote verification via TAG
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">SELinux Enforcement</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict Mandatory Access Control (MAC) domain separation isolating host daemons, GPU drivers, and container workloads with zero privilege escape.
              </p>
              <div className="pt-2 text-[11px] font-mono text-purple-400">
                ✓ Enforcing mode with strict TEE policies
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Signed Atomic Updates</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A/B system partitions with automated rollback protection. If updated images fail cryptographic attestation or self-tests, the node reverts instantly.
              </p>
              <div className="pt-2 text-[11px] font-mono text-amber-400">
                ✓ Hardware monotonic counter protection
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <FileCode className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">NIST 800-53 & OSCAL Evidence</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Native generator for machine-readable OSCAL (Open Security Controls Assessment Language) evidence, automating FedRAMP High and DoD IL5 filings.
              </p>
              <div className="pt-2 text-[11px] font-mono text-rose-400">
                ✓ Machine-readable JSON/YAML output
              </div>
            </div>

          </div>

        </div>





        {/* Supported Accelerators Matrix */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold">SILICON COMPATIBILITY</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Supported Confidential Computing Silicon
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Aegis AI OS is optimized for tier-1 enterprise accelerators with native confidential computing extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold">NVIDIA</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/20">Production Ready</span>
              </div>
              <h3 className="text-lg font-bold text-white">Hopper & Blackwell (H100/H200/B200)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct NVLink Confidential Computing support with hardware encryption across multi-GPU SXM5 clusters.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                VBIOS & Driver Attestation via TAG
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-red-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-red-400 font-semibold">AMD</span>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-300 text-[10px] font-mono border border-red-500/20">Production Ready</span>
              </div>
              <h3 className="text-lg font-bold text-white">EPYC 9004/9005 & Instinct MI300X</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                SEV-SNP memory encryption with VMPL0 privileged microkernel enforcement and unified CPU-GPU unified memory.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                Hardware Endorsement via AMD KDS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 font-semibold">INTEL</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 text-[10px] font-mono border border-sky-500/20">Certified</span>
              </div>
              <h3 className="text-lg font-bold text-white">Xeon 5th/6th Gen & Gaudi 3</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intel Trust Domain Extensions (TDX) and Gaudi 3 confidential accelerator clusters for regulated enterprise inference.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                Intel SGX / TDX Quote Verification
              </div>
            </div>
          </div>
        </div>

        {/* Pilot CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Deploy Aegis AI OS on your cluster</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Evaluate our zero-trust microkernel and confidential enclave runtime on your sovereign or cloud GPU infrastructure.
            </p>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-sky-600/30 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Request Aegis AI OS Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
