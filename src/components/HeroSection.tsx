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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Pill Badge matching the design */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
                INFRASTRUCTURE IDENTITY & ATTESTATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Prove your regulated compute is where it should be,{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-indigo-400 bg-clip-text text-transparent">
                running as approved.
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Tesseracton continuously verifies compute location, hardware identity,
              configuration and policy state, creating tamper-evident evidence for
              operators and regulators.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenLiveDashboard}
                id="btn-hero-live-demo"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-semibold text-sm flex items-center gap-2.5 shadow-xl shadow-indigo-700/30 hover:shadow-indigo-600/50 transition-all border border-indigo-400/30 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
                </div>
                <span>View Live Demo</span>
              </button>

              <button
                onClick={onOpenPilotModal}
                id="btn-hero-request-pilot"
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 border border-slate-700 hover:border-slate-600 transition-all shadow-md group cursor-pointer"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Trust Badges & Verified Standards */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>EU AI Act Art. 53/55</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>NIST AI RMF 100-1</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>NVIDIA H100/B200 CC</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>US BIS 3A090 Provenance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Isometric Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroIsometricGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};
