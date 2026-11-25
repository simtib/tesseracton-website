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
    <section id="services-section" className="py-24 bg-canvas relative border-t border-line">
      <div className="page-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-line text-accent text-xs font-semibold   mb-4 font-mono">
            <span>OPERATIONAL EXPERTISE</span>
          </div>
          <h2 className="type-section text-ink mb-4">
            Professional Services
          </h2>
          <p className="text-base text-muted">
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
                className="glass-card glass-card-hover rounded-card p-7 flex flex-col justify-between border border-line group"
              >
                <div>
                  <div className="w-12 h-12 rounded-card bg-surface border border-line flex items-center justify-center mb-6 text-accent group-hover:text-accent group-hover:border-line transition-colors ">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="type-card text-ink mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="space-y-2 border-t border-line pt-4">
                    <span className="text-xs font-mono  text-muted font-semibold block">
                      Core Deliverables:
                    </span>
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-line flex items-center justify-between">
                  <button
                    onClick={onOpenPilotModal}
                    className="control font-semibold text-accent group-hover:text-accent flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Engage Enterprise Services</span>
                    <ArrowRight className="w-3.5 h-3.5  transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise SLA & Architecture Guarantee Strip */}
        <div className="glass-card rounded-card p-6 border border-line bg-surface    flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-card bg-raised border border-line flex items-center justify-center text-accent">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="type-label text-ink">Need custom Air-Gapped or Sovereign Cloud Deployment?</h4>
              <p className="text-sm text-muted">Tesseracton operates completely offline with zero data egress and sovereign KMS support.</p>
            </div>
          </div>
          <button
            onClick={onOpenPilotModal}
            className="control control-primary px-5 py-3  font-semibold whitespace-nowrap cursor-pointer transition-colors"
          >
            Schedule Architecture Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
