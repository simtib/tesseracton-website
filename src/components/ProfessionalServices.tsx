import React from 'react';
import { Shield, FileCheck2, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProfessionalServicesProps {
  onOpenPilotModal: () => void;
}

export const ProfessionalServices: React.FC<ProfessionalServicesProps> = ({
  onOpenPilotModal,
}) => {
  const services = [
    {
      id: 'service-assurance',
      icon: Shield,
      title: 'Assurance & Architecture Verification',
      description:
        'Design continuous attestation architectures for multi-cloud, bare-metal GPU clusters, and sovereign confidential enclaves.',
      deliverables: [
        'Confidential compute threat modeling',
        'Hardware root of trust validation',
        'Custom TPM/SEV-SNP PCR baseline formulation',
      ],
    },
    {
      id: 'service-compliance',
      icon: FileCheck2,
      title: 'Compliance Integration & Readiness',
      description:
        'Bridge cryptographic telemetry into existing governance pipelines, automated audit gates, and regulatory filing workflows.',
      deliverables: [
        'EU AI Act Article 53 & 55 mapping',
        'US BIS 3A090 jurisdiction telemetry',
        'SIEM & Kubernetes admission controller hooks',
      ],
    },
    {
      id: 'service-onboarding',
      icon: Cpu,
      title: 'Infrastructure Onboarding & Silicon Certification',
      description:
        'Full lifecycle provisioning, OEM silicon key harvesting, and supply-chain golden master baseline deployment.',
      deliverables: [
        'NVIDIA H100/B200 CC provisioning',
        'Physical cage & chassis sensor calibration',
        'Automated firmware drift remediation hooks',
      ],
    },
  ];

  return (
    <section id="services-section" className="py-24 bg-[#090d18] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <span>OPERATIONAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Professional Services
          </h2>
          <p className="text-base text-slate-400">
            Expert operational services to deploy Tesseracton on dedicated AI infrastructure.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-slate-800/80 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/40 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                      Core Deliverables:
                    </span>
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={onOpenPilotModal}
                    className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Engage Enterprise Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise SLA & Architecture Guarantee Strip */}
        <div className="glass-card rounded-2xl p-6 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need custom Air-Gapped or Sovereign Cloud Deployment?</h4>
              <p className="text-xs text-slate-400">Tesseracton operates completely offline with zero data egress and sovereign KMS support.</p>
            </div>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold whitespace-nowrap shadow-md cursor-pointer transition-all"
          >
            Schedule Architecture Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
