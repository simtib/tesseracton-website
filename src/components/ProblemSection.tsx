import React from 'react';
import { Clock, FileX2, ShieldAlert, AlertTriangle, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            Regulated AI infrastructure <br className="hidden sm:inline" />
            <span className="text-slate-400">cannot rely on periodic audits.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Traditional compliance frameworks rely on static screenshots and annual point-in-time checks. Modern AI infrastructure evolves dynamically every millisecond.
          </p>
        </div>

        {/* 3 Core Problem Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Infrastructure changes continuously */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-6 text-sky-400 group-hover:border-sky-500/50 group-hover:text-sky-300 transition-all shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Infrastructure changes continuously
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Infrastructure changes dynamically: workloads migrate, accelerators swap, and configurations update across ephemeral cloud instances without notice.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-slate-400">Continuous Drift Risk</span>
              <span className="text-sky-400 font-semibold">Dynamic Fleet</span>
            </div>
          </div>

          {/* Card 2: Traditional compliance is retrospective */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-6 text-amber-400 group-hover:border-amber-500/50 group-hover:text-amber-300 transition-all shadow-md">
                <FileX2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Traditional compliance is retrospective
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Audits happen months after data or hardware state changes, creating an unmonitored window for regulatory breach, data leak, and export control penalties.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-slate-400">Audit Gap</span>
              <span className="text-amber-400 font-semibold">90+ Day Blind Spot</span>
            </div>
          </div>

          {/* Card 3: Infrastructure cannot be its own source of truth */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-6 text-indigo-400 group-hover:border-indigo-500/50 group-hover:text-indigo-300 transition-all shadow-md">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Infrastructure cannot be its own source of truth
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Self-reporting software, OS kernels, and hypervisors cannot prove their own integrity when compromised. True verification requires cryptographic silicon roots.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-slate-400">Zero-Trust Mandate</span>
              <span className="text-indigo-400 font-semibold">Silicon Root Required</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
