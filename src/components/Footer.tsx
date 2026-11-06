import React from 'react';
import { ShieldCheck, Github, Twitter, Linkedin, Globe2, ArrowRight } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPilotModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const handleNav = (tab: NavigationTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070b] border-t border-slate-900 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-sky-400 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight font-sans">
                Tesseracton
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Provable silicon-grade security for foundation models and sovereign AI infrastructure. Enforce confidential execution with Aegis AI OS and verify compliance with TAG.
            </p>
            <div className="flex items-center gap-3 text-slate-500 pt-2">
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Attestation Mesh Operational
              </span>
            </div>
          </div>

          {/* Products Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('tag')}
                  className="hover:text-white text-indigo-400 transition-colors flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span>TAG (Attestation Gateway)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('aegis-os')}
                  className="hover:text-white text-sky-400 transition-colors flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span>Aegis AI OS</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Services Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300 hover:text-white"
                >
                  Professional Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:text-slate-200"
                >
                  Air-Gapped Sovereign Deployment
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:text-slate-200"
                >
                  Custom PCR Baseline Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:text-slate-200"
                >
                  EU AI Act Certification
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Company & Inquiries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('company')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300 hover:text-white"
                >
                  About Tesseracton
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-300 hover:text-white"
                >
                  Contact Security Architects
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; 2026 Tesseracton Inc. All rights reserved. Cryptographically anchored.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy & Sovereign Telemetry</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">RFC 9334 Attestation Spec</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
