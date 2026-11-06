import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  ArrowRight
} from 'lucide-react';
import { NavigationTab } from '../types';

interface CompanyViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPilotModal: () => void;
}

export const CompanyView: React.FC<CompanyViewProps> = ({ onNavigate, onOpenPilotModal }) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Silicon-Rooted Trust',
      desc: 'Security must be anchored in physical silicon measurements—TPM 2.0, AMD SEV-SNP, and NVIDIA Confidential Computing—never in cloud hypervisors or infrastructure operators.'
    },
    {
      icon: ShieldCheck,
      title: 'Continuous Proof Over Paper Audits',
      desc: 'Static compliance checklists expire the moment compute reboots. We replace manual audits with sub-millisecond, cryptographically signed hardware receipts.'
    },
    {
      icon: Lock,
      title: 'Sovereign AI Independence',
      desc: 'Regulated enterprises, national laboratories, and defense entities must verify exactly where foundation model weights execute, guaranteeing zero unauthorized data egress.'
    }
  ];

  const standards = [
    'IETF RATS (RFC 9334)',
    'TCG TPM 2.0 Specification',
    'Confidential Computing Consortium',
    'NIST SP 800-53 High',
    'EU AI Act Art. 15 Assurance'
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center pt-8 pb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
            <Building className="w-4 h-4 text-indigo-400" />
            <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
              ABOUT TESSERACTON
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Provable Trust for the{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Foundation Model Era
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tesseracton develops hardware-rooted attestation gateways and sovereign operating runtimes for confidential AI compute. We eliminate reliance on cloud provider trust by making infrastructure integrity mathematically verifiable.
          </p>
        </div>

        {/* Mission Statement Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 shadow-xl mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold">OUR MISSION</span>
            <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
              "As autonomous and foundation models take over mission-critical decisions, society cannot rely on unverified cloud claims. Every prompt, parameter, and inference must have an unbroken cryptographic chain of custody."
            </blockquote>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">ARCHITECTURAL FOUNDATION</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Standards Alignment Bar */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-6 mb-16">
          <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold block">
            CRYPTOGRAPHIC & REGULATORY STANDARDS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {standards.map((std, idx) => (
              <span key={idx} className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                {std}
              </span>
            ))}
          </div>
        </div>

        {/* Clean CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-sky-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Partner with Tesseracton
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Connect with our team to explore sovereign datacenter attestation, confidential infrastructure pilots, or enterprise deployment.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
