import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  Globe2, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Cpu,
  FileCheck
} from 'lucide-react';
import { NavigationTab } from '../types';

interface CompanyViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenPilotModal: () => void;
}

export const CompanyView: React.FC<CompanyViewProps> = ({ onNavigate, onOpenPilotModal }) => {
  const tenets = [
    {
      title: 'Zero Trust in Hypervisors',
      desc: 'We never trust cloud control planes, host hypervisors, or infrastructure operators. Security must be rooted directly in physical silicon measurements (TPM, PUFs, and TEEs).'
    },
    {
      title: 'Proof Over Paper Audits',
      desc: 'Static annual compliance checklists are obsolete the moment a kernel reboots or GPU microcode drifts. Continuous, cryptographic verification is the only viable model for regulated compute.'
    },
    {
      title: 'Sovereign AI Independence',
      desc: 'Nations, regulated enterprises, and defense organizations must be able to verify where foundation model weights execute, ensuring zero unauthorized exfiltration.'
    },
    {
      title: 'Near-Zero Compute Overhead',
      desc: 'Provable security must not cripple inference economics. Our hardware pipelines deliver complete cryptographic verification with under 1.8% performance delta vs bare-metal.'
    }
  ];

  const leaders = [
    {
      name: 'Dr. Elena Rostova',
      role: 'Chief Scientist & Cryptographic Architect',
      bio: 'Pioneer in formal verification of hardware roots of trust and confidential memory enclaves. Former research lead at CERN and Swiss Federal Institute of Technology (ETH Zurich).',
      badge: 'Zurich'
    },
    {
      name: 'Marcus Vance',
      role: 'VP of Sovereign Cloud Infrastructure',
      bio: '20+ years designing air-gapped supercomputing centers and high-assurance defense clusters. Former infrastructure security architect for DoD IL5 and FedRAMP High enclaves.',
      badge: 'Washington D.C.'
    },
    {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Head of Confidential Hardware Systems',
      bio: 'Expert in silicon Physical Unclonable Functions (PUFs) and GPU microcode security. Co-author of multiple patents in cryptographic memory encryption.',
      badge: 'Frankfurt'
    },
    {
      name: 'Sophia Chen',
      role: 'Director of Regulatory & Compliance Standards',
      bio: 'Technical advisor on AI risk classification frameworks and cryptographic evidence standards for the European AI Office and NIST.',
      badge: 'Brussels / Zurich'
    }
  ];

  const offices = [
    {
      city: 'Zurich, Switzerland',
      type: 'Global HQ & Cryptographic Research Lab',
      address: 'Technoparkstrasse 1, 8005 Zurich',
      region: 'Sovereign Tier 1'
    },
    {
      city: 'Frankfurt, Germany',
      type: 'EU Sovereign Cloud Operations Hub',
      address: 'Mainzer Landstraße 180, 60327 Frankfurt',
      region: 'EU AI Act Compliance Lab'
    },
    {
      city: 'Washington D.C., USA',
      type: 'FedRAMP & Defense Enclave Center',
      address: '1401 Pennsylvania Avenue NW, Washington, DC 20004',
      region: 'DoD IL5 & US Gov'
    },
    {
      city: 'Singapore',
      type: 'Asia-Pacific Sovereign AI Hub',
      address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
      region: 'APAC Operations'
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center pt-8 pb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
            <Building className="w-4 h-4 text-indigo-400" />
            <span className="uppercase text-[11px] font-mono tracking-wider font-semibold text-indigo-200">
              ABOUT TESSERACTON
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Provable Trust for the{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Foundation Model Era
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tesseracton was founded with a singular conviction: as AI systems power the world's most critical decisions, society cannot rely on vendor trust or annual paper audits. Trust must be rooted in immutable mathematics and silicon physics.
          </p>
        </div>

        {/* Security Tenets */}
        <div className="my-10">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">CORE PRINCIPLES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Architectural Tenets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tenets.map((tenet, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-xs font-mono font-bold text-indigo-400">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">{tenet.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Advisory */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider font-semibold">LEADERSHIP & RESEARCH</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Cryptographic & Systems Architects</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Built by researchers, defense computing specialists, and confidential computing pioneers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((lead, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 via-slate-800 to-sky-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-base">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-950 border border-slate-800">
                      {lead.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{lead.name}</h4>
                    <p className="text-xs font-mono text-indigo-400 mt-0.5">{lead.role}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{lead.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Sovereign Labs & Facilities */}
        <div className="my-16 p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold">GLOBAL PRESENCE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Sovereign Testing Labs & Hubs</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Operating dedicated hardware testbeds and air-gapped evaluation clusters across sovereign jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800/90 space-y-2.5">
                <div className="flex items-center gap-2 text-indigo-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <h4 className="text-sm font-bold text-white">{office.city}</h4>
                </div>
                <p className="text-xs text-sky-300 font-medium">{office.type}</p>
                <p className="text-[11px] text-slate-400">{office.address}</p>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-emerald-400">
                  ● {office.region}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Standards Alignment */}
        <div className="my-14 text-center space-y-6">
          <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">COMPLIANCE & CRYPTOGRAPHIC STANDARDS</span>
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              IETF RATS (RFC 9334)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              TCG TPM 2.0 Profile
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Confidential Computing Consortium (CCC)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              EU AI Act Art. 15 Ready
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              US FedRAMP High Ready
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-sky-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Interested in partnering or evaluating Tesseracton?
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Connect with our leadership team for sovereign datacenter partnerships, academic research collaborations, or enterprise pilots.
            </p>
          </div>
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
  );
};
