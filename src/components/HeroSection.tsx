import React from 'react';
import { HeroIsometricGraphic } from './HeroIsometricGraphic';
import { ShieldCheck, Play, ArrowRight, CheckCircle2, Lock, Cpu, Globe2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenPilotModal: () => void;
  onOpenLiveDashboard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPilotModal,
  onOpenLiveDashboard,
}) => {
  return (
    <section className="product-hero">
      {/* Background ambient lighting and grid pattern */}




      <div className="page-container relative z-10">
        <div className="product-hero-grid">

          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="product-hero-copy">

            {/* Pill Badge matching the design */}
            <div className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-md bg-action " />
              <span className=" text-xs font-mono  font-semibold text-accent">
                INFRASTRUCTURE IDENTITY & ATTESTATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="type-display text-ink">
              Prove your regulated compute is where it should be,{' '}
              <span className="text-ink text-ink">
                running as approved.
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed font-normal">
              Tesseracton continuously verifies compute location, hardware identity,
              configuration and policy state, creating tamper-evident evidence for
              operators and regulators.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenLiveDashboard}
                id="btn-hero-live-demo"
                className="control control-primary px-6 py-4   font-semibold flex items-center gap-3 transition-colors border border-line group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center  transition-transform">
                  <Play className="w-3 h-3 fill-white text-ink translate-x-0.5" />
                </div>
                <span>View Live Demo</span>
              </button>

              <button
                onClick={onOpenPilotModal}
                id="btn-hero-request-pilot"
                className="control px-6 py-4 bg-surface hover:bg-raised text-ink hover:text-ink font-semibold flex items-center gap-2 border border-line hover:border-line transition-colors group cursor-pointer"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-ink  transition-colors" />
              </button>
            </div>

            {/* Trust Badges & Verified Standards */}
            <div className="pt-6 border-t border-line w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-muted font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>EU AI Act Art. 53/55</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
                <span>NIST AI RMF 100-1</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent flex-shrink-0" />
                <span>NVIDIA H100/B200 CC</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>US BIS 3A090 Provenance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Isometric Visual */}
          <div className="w-full">
            <HeroIsometricGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};
