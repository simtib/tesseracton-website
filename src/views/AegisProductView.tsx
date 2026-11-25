import { ProductMasthead } from '../components/ProductArchitecture';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Factory,
  FileCode,
  HardDrive,
  Home,
  Lock,
  Radio,
  RotateCcw,
  Share2,
  Shield,
  ShieldCheck,
  Sliders
} from 'lucide-react';
import { AegisIsometricGraphic } from '../components/AegisIsometricGraphic';

interface AegisProductViewProps {
  onOpenPilotModal: () => void;
}

export const AegisProductView: React.FC<AegisProductViewProps> = ({
  onOpenPilotModal,
}) => {
  const [activeProfile, setActiveProfile] = useState<string>('home');

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

  const currentProfileData = deploymentProfiles.find(p => p.id === activeProfile) || deploymentProfiles[0];

  return (
    <div className="relative pb-20 overflow-hidden">
      <ProductMasthead id="aegis-os" />
      {/* Background illumination */}




      <div className="page-container relative z-10">

        {/* Product Header & Hero - Two Column Grid with 3D Isometric Enclave Visual */}
        <div className="product-hero">
          <div className="product-hero-grid">

            {/* Left Column: Headline, Value Proposition & Actions (7 cols) */}
            <div className="product-hero-copy">
              <div className="eyebrow">
                <Cpu className="w-4 h-4 text-accent" />
                <span className=" text-xs font-mono  font-semibold text-accent">
                  AEGIS AI OS • SOVEREIGN ENCLAVE RUNTIME
                </span>
              </div>

              <h1 className="type-display text-ink">
                One Common Core OS.{' '}
                <span className="text-ink text-ink">
                  Adaptive Deployment Across Any Scale.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
                Aegis AI OS provides <strong className="text-ink">one common core OS architecture</strong> with adaptive deployment profiles. It scales seamlessly across five distinct footprints without forcing a bloated single image onto every machine, backed by hardware-anchored, evidence-first assurance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenPilotModal}
                  className="control control-primary px-6 py-4   font-semibold flex items-center gap-2 transition-colors border border-line group cursor-pointer"
                >
                  <span>Deploy Aegis AI OS in Pilot</span>
                  <ArrowRight className="w-4 h-4  transition-transform" />
                </button>
                <Link
                  href="/tag"
                  className="control px-5 py-4 bg-surface hover:bg-raised text-ink hover:text-ink font-semibold flex items-center gap-2 border border-line hover:border-line transition-colors group cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Pair with TAG Assurance Grid</span>
                  <ArrowRight className="w-4 h-4 text-muted  transition-transform" />
                </Link>
              </div>

              {/* Security Anchor Checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
                <span className="flex items-center gap-1.5 text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  Immutable dm-verity
                </span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  NIST 800-53 OSCAL
                </span>
                <span className="flex items-center gap-1.5 text-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  Zero Host RAM Leak
                </span>
              </div>
            </div>

            {/* Right Column: 3D Isometric Enclave Visual (5 cols) */}
            <div className="w-full">
              <AegisIsometricGraphic />
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW SECTION 1: ONE COMMON CORE ARCHITECTURE • 5 ADAPTIVE DEPLOYMENT PROFILES */}
        {/* ========================================================================= */}
        <div className="my-14 p-8 sm:p-10 rounded-card bg-surface    border border-line  relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-raised border border-line text-accent text-xs font-mono font-semibold mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE & ADAPTIVE FOOTPRINTS</span>
            </div>
            <h2 className="type-section text-ink">
              One Common Core OS. Five Distinct Footprints.
            </h2>
            <p className="text-sm text-secondary mt-2 leading-relaxed">
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
                  className={`p-4 rounded-card text-left border transition-colors cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-raised border-line text-ink   ring-1 ring-accent'
                      : 'bg-surface border-line text-secondary hover:bg-raised hover:border-line'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-action text-muted' : 'bg-raised text-muted'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-inset border border-line text-muted">
                      {prof.gpuScale.split(' ')[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="type-label text-ink">{prof.name}</h4>
                    <p className="text-sm text-muted font-mono mt-0.5">{prof.gpuScale}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Profile Detailed Card */}
          <div className="p-6 sm:p-8 rounded-card bg-inset border border-line  space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-line">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
                  <currentProfileData.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="type-card text-ink">{currentProfileData.name} Profile</h3>
                    <span className="px-3 py-0.5 rounded text-xs font-mono  bg-raised text-accent border border-line font-semibold">
                      Footprint Active
                    </span>
                  </div>
                  <p className="text-sm font-mono text-accent mt-0.5">{currentProfileData.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-surface border border-line text-xs font-mono text-secondary flex items-center gap-2">
                  <span className="text-muted">Target Scale:</span>
                  <span className="text-success font-semibold">{currentProfileData.gpuScale}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-secondary leading-relaxed max-w-4xl">
              {currentProfileData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentProfileData.specs.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-surface border border-line flex items-start gap-3 text-xs text-ink">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW SECTION 2: SECURE-BY-DEFAULT & EVIDENCE-FIRST ASSURANCE */}
        {/* ========================================================================= */}
        <div className="my-16 p-8 sm:p-10 rounded-card bg-surface    border border-line  relative">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-raised border border-line text-accent text-xs font-mono font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURE-BY-DEFAULT & EVIDENCE-FIRST ASSURANCE</span>
            </div>
            <h2 className="type-section text-ink">
              Hardware-Anchored Trust & Machine-Readable OSCAL Evidence
            </h2>
            <p className="text-sm text-secondary mt-2 leading-relaxed">
              Trust is anchored directly in physical silicon from boot through execution. Aegis combines an immutable Linux base, UEFI Secure Boot, TPM 2.0 measured boot, SELinux enforcement, and signed atomic update engines with rollback protection. Built to satisfy high-assurance frameworks (such as NIST 800-53 High baselines) by generating versioned, machine-readable OSCAL audit evidence.
            </p>
          </div>

          {/* 6 Hardware & Software Security Anchors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">Immutable Linux Base</h4>
              <p className="text-sm text-muted leading-relaxed">
                dm-verity protected, read-only root filesystem. Prevents unauthorized persistence, malware implants, and tampering during runtime.
              </p>
              <div className="pt-2 text-xs font-mono text-accent">
                ✓ Read-only signed squashfs
              </div>
            </div>

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">UEFI Secure Boot</h4>
              <p className="text-sm text-muted leading-relaxed">
                Hardware-gated validation of all bootloader and kernel binaries. Only cryptographically signed images execute on bare-metal hardware.
              </p>
              <div className="pt-2 text-xs font-mono text-accent">
                ✓ Custom sovereign PK/KEK keys
              </div>
            </div>

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-success">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">TPM 2.0 Measured Boot</h4>
              <p className="text-sm text-muted leading-relaxed">
                Cryptographic PCR[0..7] registers continuously record firmware, microcode, kernel cmdline, and initramfs hashes for remote attestation.
              </p>
              <div className="pt-2 text-xs font-mono text-success">
                ✓ Continuous quote verification via TAG
              </div>
            </div>

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-secondary">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">SELinux Enforcement</h4>
              <p className="text-sm text-muted leading-relaxed">
                Strict Mandatory Access Control (MAC) domain separation isolating host daemons, GPU drivers, and container workloads with zero privilege escape.
              </p>
              <div className="pt-2 text-xs font-mono text-secondary">
                ✓ Enforcing mode with strict TEE policies
              </div>
            </div>

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-warning">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">Signed Atomic Updates</h4>
              <p className="text-sm text-muted leading-relaxed">
                A/B system partitions with automated rollback protection. If updated images fail cryptographic attestation or self-tests, the node reverts instantly.
              </p>
              <div className="pt-2 text-xs font-mono text-warning">
                ✓ Hardware monotonic counter protection
              </div>
            </div>

            <div className="p-6 rounded-card bg-inset border border-line space-y-3">
              <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-danger">
                <FileCode className="w-5 h-5" />
              </div>
              <h4 className="type-label text-ink">NIST 800-53 & OSCAL Evidence</h4>
              <p className="text-sm text-muted leading-relaxed">
                Native generator for machine-readable OSCAL (Open Security Controls Assessment Language) evidence, automating FedRAMP High and DoD IL5 filings.
              </p>
              <div className="pt-2 text-xs font-mono text-danger">
                ✓ Machine-readable JSON/YAML output
              </div>
            </div>

          </div>

        </div>





        {/* Supported Accelerators Matrix */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono  text-accent  font-semibold">SILICON COMPATIBILITY</span>
            <h2 className="type-section text-ink">
              Supported Confidential Computing Silicon
            </h2>
            <p className="text-sm sm:text-sm text-muted">
              Aegis AI OS is optimized for tier-1 enterprise accelerators with native confidential computing extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-card bg-surface border border-line hover:border-line transition-colors space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono  text-success font-semibold">NVIDIA</span>
                <span className="px-2 py-0.5 rounded bg-raised text-success text-xs font-mono border border-line">Production Ready</span>
              </div>
              <h3 className="type-card text-ink">Hopper & Blackwell (H100/H200/B200)</h3>
              <p className="text-sm text-muted leading-relaxed">
                Direct NVLink Confidential Computing support with hardware encryption across multi-GPU SXM5 clusters.
              </p>
              <div className="text-xs font-mono text-muted pt-2 border-t border-line">
                VBIOS & Driver Attestation via TAG
              </div>
            </div>

            <div className="p-6 rounded-card bg-surface border border-line hover:border-line transition-colors space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono  text-danger font-semibold">AMD</span>
                <span className="px-2 py-0.5 rounded bg-raised text-danger text-xs font-mono border border-line">Production Ready</span>
              </div>
              <h3 className="type-card text-ink">EPYC 9004/9005 & Instinct MI300X</h3>
              <p className="text-sm text-muted leading-relaxed">
                SEV-SNP memory encryption with VMPL0 privileged microkernel enforcement and unified CPU-GPU unified memory.
              </p>
              <div className="text-xs font-mono text-muted pt-2 border-t border-line">
                Hardware Endorsement via AMD KDS
              </div>
            </div>

            <div className="p-6 rounded-card bg-surface border border-line hover:border-line transition-colors space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono  text-accent font-semibold">INTEL</span>
                <span className="px-2 py-0.5 rounded bg-raised text-accent text-xs font-mono border border-line">Certified</span>
              </div>
              <h3 className="type-card text-ink">Xeon 5th/6th Gen & Gaudi 3</h3>
              <p className="text-sm text-muted leading-relaxed">
                Intel Trust Domain Extensions (TDX) and Gaudi 3 confidential accelerator clusters for regulated enterprise inference.
              </p>
              <div className="text-xs font-mono text-muted pt-2 border-t border-line">
                Intel SGX / TDX Quote Verification
              </div>
            </div>
          </div>
        </div>

        {/* Pilot CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-card bg-surface    border border-line flex flex-col sm:flex-row items-center justify-between gap-6 ">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="type-card text-ink">Deploy Aegis AI OS on your cluster</h3>
            <p className="text-sm sm:text-sm text-secondary max-w-xl">
              Evaluate our zero-trust microkernel and confidential enclave runtime on your sovereign or cloud GPU infrastructure.
            </p>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="control control-primary px-6 py-3  font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Request Aegis AI OS Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
