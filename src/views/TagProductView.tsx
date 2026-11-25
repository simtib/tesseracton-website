import { ProductMasthead } from '../components/ProductArchitecture';
import Link from 'next/link';
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
}

export const TagProductView: React.FC<TagProductViewProps> = ({
  onOpenPilotModal,
  onOpenEvidenceProof,
}) => {
  const handleOpenLiveDashboard = () => {
    const el = document.getElementById('interactive-dashboard-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <ProductMasthead id="tag">
        <Link href="/aegis-os" className="control">Pair with Aegis AI OS</Link>
        <button type="button" className="control" onClick={handleOpenLiveDashboard}>Jump to Live Nodes</button>
      </ProductMasthead>
      <p className="page-container text-sm text-muted pt-4">Continuous Hardware-Rooted Attestation &amp; Cryptographic Evidence Chains for Regulated AI Clusters</p>

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
