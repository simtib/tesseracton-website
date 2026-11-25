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
    <section id="scenarios-section" className="py-24 bg-canvas relative border-t border-line">
      <div className="page-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-line text-warning text-xs font-semibold   mb-4 font-mono">
            <span>DRIFT & THREAT SCENARIOS</span>
          </div>
          <h2 className="type-section text-ink mb-4">
            What happens when <br className="hidden sm:inline" />
            <span className="text-secondary">infrastructure changes?</span>
          </h2>
          <p className="text-base text-muted">
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
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedScenario(scenario); } }}
                onClick={() => {
                  setSelectedScenario(scenario);
                }}
                className={`glass-card rounded-card p-6 flex flex-col justify-between cursor-pointer transition-colors duration-150 relative group overflow-hidden ${
                  isSelected
                    ? 'border-line bg-surface   ring-1 ring-accent'
                    : 'hover:border-line hover:bg-surface'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-card flex items-center justify-center ${
                        isSelected ? 'bg-raised text-warning' : 'bg-surface text-muted'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono  px-2 py-0.5 rounded bg-inset text-muted border border-line font-semibold">
                      {scenario.detectionLatency}
                    </span>
                  </div>

                  <h3 className="type-card text-ink mb-2 group-hover:text-warning transition-colors">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-3 leading-relaxed">
                    {scenario.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-line flex items-center justify-between text-xs font-mono text-muted">
                  <span className="text-warning font-medium">{isSelected ? 'Active Scenario' : 'Select Scenario'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-warning translate-x-1' : 'text-muted'} transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Scenario Breakdown Card */}
        <div className="glass-card rounded-card p-6 sm:p-8 border border-line bg-canvas  relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-line">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-0.5 rounded-md bg-raised text-warning border border-line text-xs font-mono font-semibold">
                  {selectedScenario.tag}
                </span>
                <span className="text-xs font-mono text-muted">
                  Detection Latency: <strong className="text-success">{selectedScenario.detectionLatency}</strong>
                </span>
              </div>
              <h3 className="type-card text-ink">
                {selectedScenario.title}
              </h3>
            </div>
          </div>

          {/* Detailed Incident Detection Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs">
            <div className="bg-inset border border-line rounded-card p-4">
              <span className="text-muted font-mono block mb-1  text-xs">Physical Event</span>
              <p className="text-ink font-medium leading-relaxed">{selectedScenario.details.event}</p>
            </div>

            <div className="bg-inset border border-line rounded-card p-4">
              <span className="text-muted font-mono block mb-1  text-xs">Raw Hardware Signal</span>
              <p className="text-warning font-mono text-sm leading-relaxed">{selectedScenario.details.rawSignal}</p>
            </div>

            <div className="bg-inset border border-line rounded-card p-4">
              <span className="text-muted font-mono block mb-1  text-xs">Tesseracton Cryptographic Engine</span>
              <p className="text-accent font-medium leading-relaxed">{selectedScenario.details.cryptographicCheck}</p>
            </div>

            <div className="bg-inset border border-line rounded-card p-4">
              <span className="text-muted font-mono block mb-1  text-xs">Remediation & Regulator Verdict</span>
              <p className="text-success font-mono text-sm font-semibold leading-relaxed">{selectedScenario.details.regulatorVerdict}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
