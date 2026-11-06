import React, { useState } from 'react';
import { SCENARIOS } from '../data/mockData';
import { ScenarioDefinition } from '../types';
import {
  Server,
  Cpu,
  ShieldAlert,
  FileLock2,
  ArrowRight,
} from 'lucide-react';

interface InfrastructureScenariosProps {
  onSelectScenarioForDashboard?: (scenario: ScenarioDefinition) => void;
}

export const InfrastructureScenarios: React.FC<InfrastructureScenariosProps> = ({
  onSelectScenarioForDashboard,
}) => {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioDefinition>(SCENARIOS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Cpu':
        return Cpu;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return FileLock2;
    }
  };

  return (
    <section id="scenarios-section" className="py-24 bg-[#07090e] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <span>DRIFT & THREAT SCENARIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            What happens when <br className="hidden sm:inline" />
            <span className="text-slate-300">infrastructure changes?</span>
          </h2>
          <p className="text-base text-slate-400">
            Physical hardware moves, unapproved maintenance, or rogue code updates instantly trigger cryptographic isolation and verifiable audit logs.
          </p>
        </div>

        {/* 4 Interactive Scenario Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SCENARIOS.map((scenario) => {
            const Icon = getIcon(scenario.iconName);
            const isSelected = selectedScenario.id === scenario.id;
            return (
              <div
                key={scenario.id}
                onClick={() => {
                  setSelectedScenario(scenario);
                }}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 relative group overflow-hidden ${
                  isSelected
                    ? 'border-amber-500/80 bg-slate-900/90 shadow-xl shadow-amber-950/30 ring-1 ring-amber-500/50'
                    : 'hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-semibold">
                      {scenario.detectionLatency}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {scenario.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-amber-400/90 font-medium">{isSelected ? 'Active Scenario' : 'Select Scenario'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-400'} transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Scenario Breakdown Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-[#0a0e1a] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-semibold">
                  {selectedScenario.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Detection Latency: <strong className="text-emerald-400">{selectedScenario.detectionLatency}</strong>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedScenario.title}
              </h3>
            </div>
          </div>

          {/* Detailed Incident Detection Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <span className="text-slate-400 font-mono block mb-1 uppercase text-[10px]">Physical Event</span>
              <p className="text-slate-200 font-medium leading-relaxed">{selectedScenario.details.event}</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <span className="text-slate-400 font-mono block mb-1 uppercase text-[10px]">Raw Hardware Signal</span>
              <p className="text-amber-300 font-mono text-[11px] leading-relaxed">{selectedScenario.details.rawSignal}</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <span className="text-slate-400 font-mono block mb-1 uppercase text-[10px]">Tesseracton Cryptographic Engine</span>
              <p className="text-sky-300 font-medium leading-relaxed">{selectedScenario.details.cryptographicCheck}</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
              <span className="text-slate-400 font-mono block mb-1 uppercase text-[10px]">Remediation & Regulator Verdict</span>
              <p className="text-emerald-400 font-mono text-[11px] font-semibold leading-relaxed">{selectedScenario.details.regulatorVerdict}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
