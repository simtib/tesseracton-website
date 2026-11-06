import React, { useState } from 'react';
import { 
  Cpu, 
  Shield, 
  Lock, 
  Server, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Copy, 
  Check, 
  AlertCircle,
  Network,
  Zap,
  HardDrive,
  Home,
  Briefcase,
  Radio,
  Share2,
  Factory,
  FileCode,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Database
} from 'lucide-react';
import { NavigationTab } from '../types';
import { AegisIsometricGraphic } from '../components/AegisIsometricGraphic';

interface AegisProductViewProps {
  onOpenPilotModal: () => void;
  onNavigateToTag: () => void;
}

export const AegisProductView: React.FC<AegisProductViewProps> = ({
  onOpenPilotModal,
  onNavigateToTag,
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(2);
  const [activeProfile, setActiveProfile] = useState<string>('sovereign-factory');
  const [showOscalRaw, setShowOscalRaw] = useState<boolean>(false);
  const [copiedOscal, setCopiedOscal] = useState<boolean>(false);

  // 5 Adaptive Deployment Profiles matching user specification
  const deploymentProfiles = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      gpuScale: '1–2 GPUs',
      tagline: 'Local LLMs, desktop assistants, and experimentation',
      description: 'Ultra-lean deployment profile tailored for local desktop developers, privacy researchers, and local model experimentation without bloated cloud dependencies.',
      specs: [
        'Footprint: Sub-450MB immutable rootfs image',
        'Hardware: 1–2 GPUs (NVIDIA RTX 4090, Ada Lovelace, Apple Silicon or AMD Radeon)',
        'Storage: Encrypted local KV-cache and model weight vault',
        'Telemetry: Zero outbound network activity (strict offline mode)'
      ],
      cmd: 'aegis-deploy --profile home --gpus 2 --local-llm'
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Briefcase,
      gpuScale: 'Multi-GPU Workstation',
      tagline: 'Multi-GPU workstations for lab fine-tuning and inference',
      description: 'High-performance workstation profile engineered for machine learning labs, R&D teams, and quantized model validation with fast checkpointing and local hardware attestation.',
      specs: [
        'Footprint: Lean developer-tuned container runtime',
        'Hardware: 4–8 Workstation GPUs (RTX 6000 Ada, dual/quad H100 NVL)',
        'Isolation: Hardware memory encryption & local PCR verification',
        'Optimization: Zero-copy DMA for LoRA / QLoRA fine-tuning'
      ],
      cmd: 'aegis-deploy --profile pro --workstation --fine-tune'
    },
    {
      id: 'edge',
      name: 'Edge',
      icon: Radio,
      gpuScale: 'Rugged & Disconnected',
      tagline: 'Rugged, disconnected deployments for remote inference and offline fleet ops',
      description: 'Hardened, resilient OS image for austere, disconnected, or mobile environments (defense vehicles, tactical edge, industrial robotics, hospital edge nodes) with zero external network requirement.',
      specs: [
        'Footprint: Read-only signed flash firmware image',
        'Hardware: Ruggedized Jetson Thor, Drive Thor, or edge GPU enclosures',
        'Resilience: Autonomous boot without external key servers; physical tamper lock bound to TPM',
        'Fleet Ops: Encrypted local store-and-forward batch logs'
      ],
      cmd: 'aegis-deploy --profile edge --air-gapped --disconnected-mode'
    },
    {
      id: 'cluster',
      name: 'Cluster',
      icon: Share2,
      gpuScale: 'Multi-Node Enterprise',
      tagline: 'Lab and enterprise environments with shared job scheduling and tenancy',
      description: 'Multi-tenant enterprise profile providing dynamic GPU slicing, workload isolation, and seamless orchestration across shared Kubernetes and Slurm environments.',
      specs: [
        'Footprint: Slurm & Kubernetes CRI-O native plugin runtime',
        'Hardware: 8–256 GPUs with InfiniBand / RoCE v2 low-latency fabric',
        'Multi-Tenancy: Cryptographic hardware memory barriers between tenant containers',
        'Scheduling: Integrated with Slurm fair-share and Kubernetes priority preemption'
      ],
      cmd: 'aegis-deploy --profile cluster --k8s --multi-tenant'
    },
    {
      id: 'sovereign-factory',
      name: 'Sovereign AI Factory',
      icon: Factory,
      gpuScale: 'Thousands of Hosts',
      tagline: 'Scale-out environments spanning thousands of hosts with out-of-band provisioning and attestable host states',
      description: 'Massive scale-out profile for national sovereign AI datacenters, hyperscale cloud enclaves, and foundation model training clusters with fleet-wide automated attestation and out-of-band management.',
      specs: [
        'Footprint: Zero-touch network boot (PXE/Redfish) with signed immutable rootfs',
        'Hardware: 1,000+ to 32,000+ H100/H200/B200 GPUs with NVLink multi-node clusters',
        'Out-of-Band: Automated BMC/IPMI out-of-band firmware measurement and golden provisioning',
        'Attestation Mesh: Continuous fleet-wide TAG attestation with real-time drift self-healing'
      ],
      cmd: 'aegis-deploy --profile sovereign-factory --out-of-band --mesh-attest'
    }
  ];

  // Sample OSCAL machine-readable JSON artifact representing NIST 800-53 High evidence
  const sampleOscalJson = {
    "oscal-version": "1.1.0",
    "assessment-results": {
      "uuid": "7c8e9b04-3d21-4f11-9a72-88f01b7a9c33",
      "metadata": {
        "title": "Aegis AI OS - Automated NIST 800-53 High Cryptographic Audit Evidence",
        "last-modified": "2026-11-05T03:51:00Z",
        "version": "3.2.0-sovereign",
        "framework": "NIST SP 800-53 Rev. 5 (High Baseline)",
        "attestation-engine": "TAG / TPM 2.0 Silicon Root"
      },
      "results": [
        {
          "control-id": "SI-7",
          "control-title": "Software, Firmware, and Information Integrity",
          "status": "PASS",
          "verification-mechanism": "TPM 2.0 PCR[0..7] + dm-verity Immutable Rootfs",
          "golden-hash": "0x9f83a04c...721b",
          "measured-hash": "0x9f83a04c...721b",
          "drift-detected": false
        },
        {
          "control-id": "SC-28",
          "control-title": "Protection of Information at Rest (GPU Memory Vault)",
          "status": "PASS",
          "verification-mechanism": "NVIDIA Hopper/Blackwell CC + AMD SEV-SNP AES-256-XTS",
          "hbm-encryption": "ACTIVE_HARDWARE",
          "host-ram-leak": "0_BYTES"
        },
        {
          "control-id": "AC-3",
          "control-title": "Access Enforcement & Containment",
          "status": "PASS",
          "verification-mechanism": "SELinux Enforcing + Zero-Egress Silicon Gateway",
          "policy-state": "STRICT_SOVEREIGNTY"
        },
        {
          "control-id": "SI-2",
          "control-title": "Flaw Remediation & Rollback Protection",
          "status": "PASS",
          "verification-mechanism": "Signed Atomic A/B Update Engine with TPM Monotonic Counter",
          "rollback-protection": "HARDWARE_ENFORCED"
        }
      ]
    }
  };

  const copyOscalToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleOscalJson, null, 2));
    setCopiedOscal(true);
    setTimeout(() => setCopiedOscal(false), 2000);
  };

  const layers = [
    {
      id: 0,
      name: 'Silicon Root of Trust',
      badge: 'Hardware Root',
      color: 'emerald',
      description: 'Physical silicon roots: TPM 2.0 chips, AMD SEV-SNP hardware keys, and NVIDIA Hopper/Blackwell Confidential Computing hardware extensions.',
      specs: ['Hardware PUF & Endorsement Keys', 'AMD SEV-SNP VMPL0 Isolation', 'NVIDIA CC VBIOS & Microcode Locks']
    },
    {
      id: 1,
      name: 'Aegis Hardened Microkernel',
      badge: 'Kernel Layer',
      color: 'sky',
      description: 'Minimalist attack-surface microkernel that replaces bloated generic host OSes with immutable, measured boot images and zero host dependencies.',
      specs: ['Read-only cryptographically signed rootfs', 'Measured boot from UEFI to userspace', 'Integrated TAG Attestation Daemon']
    },
    {
      id: 2,
      name: 'GPU Memory Vault (HBM3e)',
      badge: 'Memory Protection',
      color: 'indigo',
      description: 'Weights, KV caches, and activation tensors are decrypted solely within isolated GPU High-Bandwidth Memory. Host RAM never observes plaintext.',
      specs: ['AES-256 Hardware Enclave Cryptography', 'Zero DMA snooping from host OS', 'Immediate cryptographic memory wipe on fault']
    },
    {
      id: 3,
      name: 'Confidential Container Runtime',
      badge: 'Execution Layer',
      color: 'purple',
      description: 'Native Kubernetes & Slurm drop-in runner for unmodified PyTorch, vLLM, TensorRT-LLM, and Triton Inference Server workloads.',
      specs: ['100% PyTorch & Triton API compatible', 'Kubernetes CRI-O / containerd runtime', 'Under 1.8% performance delta vs bare-metal']
    },
    {
      id: 4,
      name: 'Silicon Zero-Egress Gateway',
      badge: 'Network Boundary',
      color: 'rose',
      description: 'Hardware-enforced packet inspection and network gates that guarantee prompts, embeddings, and generated tokens cannot be silently exfiltrated.',
      specs: ['Hardware-gated egress filter', 'Encrypted TLS with mTLS attestation tokens', 'Regulator audit logging via TAG']
    }
  ];

  const currentProfileData = deploymentProfiles.find(p => p.id === activeProfile) || deploymentProfiles[4];

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
        {/* NEW SECTION 1: ONE COMMON CORE ARCHITECTURE • 5 ADAPTIVE DEPLOYMENT PROFILES */}
        {/* ========================================================================= */}
        <div className="my-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 border border-sky-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE & ADAPTIVE FOOTPRINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              One Common Core OS. Five Distinct Footprints.
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Rather than maintaining fractured operating systems or deploying bloated multi-gigabyte images everywhere, Aegis AI OS uses a single, cryptographically proven microkernel base that adapts dynamically to the target environment's memory, compute, and connectivity constraints.
            </p>
          </div>

          {/* 5 Profile Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {deploymentProfiles.map((prof) => {
              const Icon = prof.icon;
              const isSelected = activeProfile === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => setActiveProfile(prof.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-sky-950/80 border-sky-400 text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-400'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                      {prof.gpuScale.split(' ')[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{prof.name}</h4>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{prof.gpuScale}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Profile Detailed Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <currentProfileData.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{currentProfileData.name} Profile</h3>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-sky-500/10 text-sky-300 border border-sky-500/20 font-semibold">
                      Footprint Active
                    </span>
                  </div>
                  <p className="text-xs font-mono text-sky-400/90 mt-0.5">{currentProfileData.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <span className="text-slate-500">Target Scale:</span>
                  <span className="text-emerald-400 font-semibold">{currentProfileData.gpuScale}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              {currentProfileData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentProfileData.specs.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
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

          {/* Interactive Machine-Readable OSCAL Evidence Viewer */}
          <div className="rounded-xl bg-[#07090e] border border-slate-800 shadow-2xl overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-indigo-400" />
                <div>
                  <span className="text-xs font-bold text-white block">OSCAL Continuous Compliance Assessment Artifact</span>
                  <span className="text-[10px] font-mono text-slate-400">NIST SP 800-53 Rev. 5 High Baseline • Versioned Evidence</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowOscalRaw(!showOscalRaw)}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-750 text-[11px] font-mono text-slate-300 transition-colors"
                >
                  {showOscalRaw ? 'View Formatted Table' : 'View Raw OSCAL JSON'}
                </button>
                <button
                  onClick={copyOscalToClipboard}
                  className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedOscal ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedOscal ? 'Copied' : 'Copy OSCAL'}</span>
                </button>
              </div>
            </div>

            {showOscalRaw ? (
              <pre className="p-5 font-mono text-[11px] text-emerald-400/90 overflow-x-auto max-h-80 custom-scrollbar bg-slate-950">
                {JSON.stringify(sampleOscalJson, null, 2)}
              </pre>
            ) : (
              <div className="p-5 overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-[11px] text-slate-400 uppercase">
                      <th className="pb-3 font-semibold">Control ID</th>
                      <th className="pb-3 font-semibold">Control Title</th>
                      <th className="pb-3 font-semibold">Verification Mechanism</th>
                      <th className="pb-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {sampleOscalJson["assessment-results"].results.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                        <td className="py-3 font-bold text-indigo-400">{res["control-id"]}</td>
                        <td className="py-3 text-white font-sans text-xs font-medium">{res["control-title"]}</td>
                        <td className="py-3 text-[11px] text-slate-400">{res["verification-mechanism"]}</td>
                        <td className="py-3 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                            <Check className="w-3 h-3" />
                            {res.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Architecture Stack Explorer */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold">INTERACTIVE ARCHITECTURE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Aegis AI OS Layer Stack
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Click each layer to inspect the hardware boundaries and security guarantees enforced by Aegis AI OS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Layer Stack Selector */}
            <div className="lg:col-span-6 space-y-3">
              {layers.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-800/90 border-sky-500/60 shadow-lg shadow-sky-500/10'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                        isActive ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        L{layer.id + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{layer.name}</h4>
                        <span className="text-[10px] font-mono text-slate-400">{layer.badge}</span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-sky-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                );
              })}
            </div>

            {/* Selected Layer Deep Dive */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-slate-950 border border-sky-500/30 space-y-5 shadow-xl relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 font-semibold">
                  Layer {activeLayer + 1}: {layers[activeLayer].badge}
                </span>
                <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[11px] font-mono font-semibold">
                  ACTIVE ISOLATION
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {layers[activeLayer].name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {layers[activeLayer].description}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">Enforced Specifications:</span>
                {layers[activeLayer].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Cryptographic verification: Continuous with TAG</span>
                <span className="text-emerald-400 font-semibold">Attested</span>
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
