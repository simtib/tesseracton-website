import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { EvidenceChainFlow } from '../components/EvidenceChainFlow';
import { InfrastructureScenarios } from '../components/InfrastructureScenarios';
import { InteractiveDashboardSection } from '../components/InteractiveDashboardSection';
import { HardwareNode } from '../types';
import { ShieldCheck, Cpu, Database, Award, ArrowRight } from 'lucide-react';

interface TagProductViewProps {
  onOpenPilotModal: () => void;
  onOpenEvidenceProof: (node: HardwareNode) => void;
  onNavigateToAegis?: () => void;
}

export const TagProductView: React.FC<TagProductViewProps> = ({
  onOpenPilotModal,
  onOpenEvidenceProof,
  onNavigateToAegis,
}) => {
  const handleOpenLiveDashboard = () => {
    const el = document.getElementById('interactive-dashboard-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Product Banner Bar */}
      <div className="pt-24 pb-4 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white tracking-tight">TAG: Tesseracton Attestation Gateway</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  Product Core
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Continuous Hardware-Rooted Attestation & Cryptographic Evidence Chains for Regulated AI Clusters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onNavigateToAegis && (
              <button
                onClick={onNavigateToAegis}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5 group"
              >
                <span>Pair with Aegis AI OS</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
            <button
              onClick={handleOpenLiveDashboard}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-indigo-300 bg-indigo-950/50 border border-indigo-500/30 hover:bg-indigo-900/50 transition-colors"
            >
              Jump to Live Nodes
            </button>
          </div>
        </div>
      </div>

      {/* Main Existing Landing Page Content */}
      <div>
        {/* Section 1: Hero with 3D Cyber Isometric Enclave Graphic */}
        <HeroSection
          onOpenPilotModal={onOpenPilotModal}
          onOpenLiveDashboard={handleOpenLiveDashboard}
        />

        {/* Section 2: Core Problem (Regulated AI infrastructure cannot rely on periodic audits) */}
        <ProblemSection />

        {/* Section 3: Product Features Matrix (Everything you need for compliance) */}
        <FeaturesGrid />

        {/* Section 4: Architecture Flow (From infrastructure signal to regulator-ready proof) */}
        <EvidenceChainFlow />

        {/* Section 5: Threat & Drift Scenarios (What happens when infrastructure changes?) */}
        <InfrastructureScenarios />

        {/* Section 6: Live Interactive Compliance & Regulated Compute Dashboard */}
        <InteractiveDashboardSection
          onOpenEvidenceProof={onOpenEvidenceProof}
          onOpenPilotModal={onOpenPilotModal}
        />
      </div>
    </div>
  );
};
