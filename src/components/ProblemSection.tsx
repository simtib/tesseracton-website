import React from 'react';
import { Clock, FileX2, ShieldAlert, AlertTriangle, ArrowUpRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-canvas relative border-t border-line">
      <div className="page-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="type-section text-ink mb-4">
            Regulated AI infrastructure <br className="hidden sm:inline" />
            <span className="text-muted">cannot rely on periodic audits.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted">
            Traditional compliance frameworks rely on static screenshots and annual point-in-time checks. Modern AI infrastructure evolves dynamically every millisecond.
          </p>
        </div>

        {/* 3 Core Problem Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Infrastructure changes continuously */}
          <div className="glass-card glass-card-hover rounded-card p-7 flex flex-col justify-between relative overflow-hidden group">

            <div>
              <div className="w-12 h-12 rounded-card bg-surface border border-line flex items-center justify-center mb-6 text-accent group-hover:border-line group-hover:text-accent transition-colors ">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="type-card text-ink mb-3">
                Infrastructure changes continuously
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Infrastructure changes dynamically: workloads migrate, accelerators swap, and configurations update across ephemeral cloud instances without notice.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs text-muted font-mono">
              <span className="text-muted">Continuous Drift Risk</span>
              <span className="text-accent font-semibold">Dynamic Fleet</span>
            </div>
          </div>

          {/* Card 2: Traditional compliance is retrospective */}
          <div className="glass-card glass-card-hover rounded-card p-7 flex flex-col justify-between relative overflow-hidden group">

            <div>
              <div className="w-12 h-12 rounded-card bg-surface border border-line flex items-center justify-center mb-6 text-warning group-hover:border-line group-hover:text-warning transition-colors ">
                <FileX2 className="w-6 h-6" />
              </div>
              <h3 className="type-card text-ink mb-3">
                Traditional compliance is retrospective
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Audits happen months after data or hardware state changes, creating an unmonitored window for regulatory breach, data leak, and export control penalties.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs text-muted font-mono">
              <span className="text-muted">Audit Gap</span>
              <span className="text-warning font-semibold">90+ Day Blind Spot</span>
            </div>
          </div>

          {/* Card 3: Infrastructure cannot be its own source of truth */}
          <div className="glass-card glass-card-hover rounded-card p-7 flex flex-col justify-between relative overflow-hidden group">

            <div>
              <div className="w-12 h-12 rounded-card bg-surface border border-line flex items-center justify-center mb-6 text-accent group-hover:border-line group-hover:text-accent transition-colors ">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="type-card text-ink mb-3">
                Infrastructure cannot be its own source of truth
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Self-reporting software, OS kernels, and hypervisors cannot prove their own integrity when compromised. True verification requires cryptographic silicon roots.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-xs text-muted font-mono">
              <span className="text-muted">Zero-Trust Mandate</span>
              <span className="text-accent font-semibold">Silicon Root Required</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
