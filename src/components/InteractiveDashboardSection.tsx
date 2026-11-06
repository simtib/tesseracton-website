import React, { useState } from 'react';
import { INITIAL_NODES, INITIAL_EVIDENCE_LOGS, COMPLIANCE_FRAMEWORKS } from '../data/mockData';
import { HardwareNode, EvidenceLog } from '../types';
import {
  ShieldCheck,
  ShieldAlert,
  Activity,
  Cpu,
  Search,
  Filter,
  Download,
  RotateCw,
  SlidersHorizontal,
  FileCheck2,
  Lock,
  Layers,
  Terminal,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Server
} from 'lucide-react';

interface InteractiveDashboardSectionProps {
  onOpenEvidenceProof: (node: HardwareNode) => void;
  onOpenPilotModal: () => void;
}

export const InteractiveDashboardSection: React.FC<InteractiveDashboardSectionProps> = ({
  onOpenEvidenceProof,
  onOpenPilotModal,
}) => {
  const [nodes, setNodes] = useState<HardwareNode[]>(INITIAL_NODES);
  const [evidenceLogs, setEvidenceLogs] = useState<EvidenceLog[]>(INITIAL_EVIDENCE_LOGS);
  const [selectedClusterFilter, setSelectedClusterFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'nodes' | 'evidence' | 'frameworks'>('nodes');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedNode, setSelectedNode] = useState<HardwareNode | null>(INITIAL_NODES[0]);
  const [notification, setNotification] = useState<string | null>(null);

  // Trigger Cluster-Wide Attestation Sweep
  const handleTriggerSweep = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setNotification('Cluster attestation sweep completed. All 6 nodes re-verified against manufacturer roots.');
      setTimeout(() => setNotification(null), 4000);
    }, 1200);
  };

  // Cordon or Remediate node
  const handleToggleCordon = (nodeId: string) => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === nodeId) {
          const isDrift = n.status === 'DRIFT_DETECTED';
          return {
            ...n,
            status: isDrift ? 'VERIFIED' : 'DRIFT_DETECTED',
            complianceScore: isDrift ? 100 : 65,
            driftDescription: isDrift ? undefined : 'Manually cordoned for security audit quarantine.',
          };
        }
        return n;
      })
    );
  };

  // Filtered nodes
  const filteredNodes = nodes.filter((n) => {
    const matchesCluster =
      selectedClusterFilter === 'ALL' ||
      (selectedClusterFilter === 'US' && n.region.includes('us-east')) ||
      (selectedClusterFilter === 'EU' && n.region.includes('eu-central')) ||
      (selectedClusterFilter === 'UK' && n.region.includes('europe-west2')) ||
      (selectedClusterFilter === 'APAC' && n.region.includes('ap-northeast'));

    const matchesSearch =
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.cluster.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.accelerator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCluster && matchesSearch;
  });

  const verifiedCount = nodes.filter((n) => n.status === 'VERIFIED').length;
  const driftCount = nodes.filter((n) => n.status === 'DRIFT_DETECTED').length;

  return (
    <section id="interactive-dashboard-section" className="py-24 bg-[#07090e] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>LIVE INTERACTIVE OPERATIONAL DASHBOARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Interactive Dashboard <br className="hidden sm:inline" />
            <span className="text-slate-400">See Tesseracton details</span>
          </h2>
          <p className="text-base text-slate-400">
            Real-time cryptographic telemetry, continuous hardware attestation, and instant regulator compliance evidence.
          </p>
        </div>

        {/* Dashboard Shell / Application Frame */}
        <div className="glass-card rounded-2xl border border-slate-800 bg-[#090d18] shadow-2xl overflow-hidden">
          
          {/* Top Control Bar with Fleet Metrics */}
          <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Fleet Compute</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-white font-mono">2,450</span>
                  <span className="text-[10px] text-sky-400 font-mono">H100/B200</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Attestation Rate</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-emerald-400 font-mono">99.8%</span>
                  <span className="text-[10px] text-slate-400 font-mono">15s loop</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Verified Nodes</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-white font-mono">{verifiedCount} / {nodes.length}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Online</span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">Active Quarantines</span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xl font-bold font-mono ${driftCount > 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                    {driftCount} Node
                  </span>
                  <span className="text-[10px] text-amber-400/80 font-mono">Cordoned</span>
                </div>
              </div>
            </div>

            {/* Sweep Trigger Button */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleTriggerSweep}
                disabled={isRefreshing}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Attesting Fleet...' : 'Run Attestation Sweep'}</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {notification && (
            <div className="px-6 py-2.5 bg-emerald-950/60 border-b border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-between animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{notification}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Consensus 100%</span>
            </div>
          )}

          {/* Navigation Sub-Tabs & Filters */}
          <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('nodes')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'nodes' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Node Fleet ({nodes.length})
              </button>
              <button
                onClick={() => setActiveTab('evidence')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'evidence' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Evidence Log Feed
              </button>
              <button
                onClick={() => setActiveTab('frameworks')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'frameworks' ? 'bg-indigo-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Compliance Mappings
              </button>
            </div>

            {/* Region Cluster Selector & Search */}
            <div className="flex items-center gap-2.5 flex-1 max-w-md justify-end">
              <div className="relative flex-1 max-w-xs">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by node, GPU, or hash..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-900/90 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>

              <select
                value={selectedClusterFilter}
                onChange={(e) => setSelectedClusterFilter(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500 font-mono cursor-pointer"
              >
                <option value="ALL">All Regions</option>
                <option value="US">US-East FedRAMP</option>
                <option value="EU">EU Frankfurt AI Act</option>
                <option value="UK">UK NHS Enclave</option>
                <option value="APAC">APAC Tokyo Financial</option>
              </select>
            </div>
          </div>

          {/* MAIN TAB 1: Hardware Fleet & Live Node Table */}
          {activeTab === 'nodes' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              
              {/* Left Column: Node Table (7 cols) */}
              <div className="lg:col-span-7 overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950/80 text-[11px] font-mono uppercase text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="px-4 py-3">Node Identity</th>
                      <th className="px-4 py-3">Accelerator & Enclave</th>
                      <th className="px-4 py-3">Attestation</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {filteredNodes.map((node) => {
                      const isSelected = selectedNode?.id === node.id;
                      const isVerified = node.status === 'VERIFIED';
                      return (
                        <tr
                          key={node.id}
                          onClick={() => setSelectedNode(node)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-indigo-950/40 text-white' : 'hover:bg-slate-900/40'
                          }`}
                        >
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-2">
                              <Server className={`w-3.5 h-3.5 ${isVerified ? 'text-emerald-400' : 'text-amber-400'}`} />
                              <div>
                                <span className="font-bold block text-white">{node.name}</span>
                                <span className="text-[10px] text-slate-400 block">{node.region}</span>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-3.5">
                            <span className="text-slate-200 block truncate max-w-[180px]">{node.accelerator}</span>
                            <span className="text-[10px] text-slate-400 block truncate max-w-[180px]">{node.cpu}</span>
                          </td>

                          <td className="px-4 py-3.5">
                            {isVerified ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                100% ATTESTED
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                                <AlertTriangle className="w-2.5 h-2.5 text-amber-400" />
                                DRIFT DETECTED
                              </span>
                            )}
                          </td>

                          <td className="px-4 py-3.5 text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenEvidenceProof(node);
                              }}
                              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-[11px] border border-slate-700 transition-colors mr-1.5"
                            >
                              Proof
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleCordon(node.id);
                              }}
                              className={`px-2 py-1 rounded text-[11px] font-semibold border transition-colors ${
                                isVerified
                                  ? 'bg-rose-950/40 border-rose-800/60 text-rose-300 hover:bg-rose-900/60'
                                  : 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60'
                              }`}
                            >
                              {isVerified ? 'Cordon' : 'Re-attest'}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Right Column: Selected Node Hardware Deep Inspector (5 cols) */}
              <div className="lg:col-span-5 p-5 bg-slate-950/70 flex flex-col justify-between">
                {selectedNode ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400">Node Inspector</span>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          {selectedNode.name}
                          <span className="text-xs font-mono font-normal text-slate-400">({selectedNode.rackId})</span>
                        </h4>
                      </div>
                      <button
                        onClick={() => onOpenEvidenceProof(selectedNode)}
                        className="px-3 py-1 rounded-lg bg-sky-950/60 border border-sky-500/40 text-sky-400 hover:text-sky-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>Export Cert</span>
                      </button>
                    </div>

                    {/* Drift Warning Banner if not verified */}
                    {selectedNode.status === 'DRIFT_DETECTED' && (
                      <div className="p-3 rounded-lg bg-amber-950/50 border border-amber-500/40 text-xs text-amber-200 font-mono">
                        <span className="font-bold block text-amber-300 mb-0.5">SECURITY DRIFT DETECTED</span>
                        {selectedNode.driftDescription}
                      </div>
                    )}

                    {/* Hardware Measurement Register Matrix */}
                    <div className="space-y-2 text-xs font-mono">
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 text-[10px] block mb-0.5">TPM 2.0 PCR[0] (Core Firmware)</span>
                        <span className="text-sky-300 font-mono text-[11px] break-all">{selectedNode.pcr0Hash}</span>
                      </div>

                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 text-[10px] block mb-0.5">TPM 2.0 PCR[7] (Secure Boot Keys)</span>
                        <span className={`font-mono text-[11px] break-all ${selectedNode.status === 'DRIFT_DETECTED' ? 'text-amber-400 font-bold' : 'text-sky-300'}`}>
                          {selectedNode.pcr7Hash}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 text-[10px] block mb-0.5">Silicon PUF ID</span>
                          <span className="text-slate-200 text-[11px] font-bold">{selectedNode.siliconPufId}</span>
                        </div>
                        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                          <span className="text-slate-400 text-[10px] block mb-0.5">Facility</span>
                          <span className="text-slate-200 text-[11px] truncate block">{selectedNode.facility}</span>
                        </div>
                      </div>

                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400 text-[10px] block mb-0.5">Active Workload Container</span>
                        <span className="text-emerald-400 font-semibold text-[11px] truncate block">{selectedNode.activeWorkload}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800">
                      <span>Merkle Root: <strong>{selectedNode.evidenceId}</strong></span>
                      <span className="text-emerald-400 font-bold">100% Non-Repudiation</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    Select a node from the left table to inspect hardware registers.
                  </div>
                )}
              </div>

            </div>
          )}

          {/* MAIN TAB 2: Real-Time Evidence Log Feed */}
          {activeTab === 'evidence' && (
            <div className="p-5 space-y-3">
              <div className="text-xs text-slate-400 font-mono mb-2 flex items-center justify-between">
                <span>Cryptographically Signed Ledger Events</span>
                <span className="text-emerald-400 font-bold">SHA-384 / Ed25519 Anchored</span>
              </div>
              <div className="space-y-2.5">
                {evidenceLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            log.status === 'SUCCESS'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-950 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {log.type}
                        </span>
                        <span className="text-white font-bold">{log.nodeName}</span>
                        <span className="text-slate-400 text-[10px]">{log.timestamp}</span>
                      </div>
                      <p className="text-slate-300 font-sans text-xs">{log.summary}</p>
                      <span className="text-[10px] text-slate-400 block truncate">
                        Standard: <strong className="text-sky-300">{log.details.regulatorStandard}</strong> | Signature: {log.signature}
                      </span>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-[10px] text-slate-400 block">Merkle Root</span>
                      <span className="text-sky-400 font-bold">{log.merkleRoot}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MAIN TAB 3: Compliance Framework Mappings */}
          {activeTab === 'frameworks' && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {COMPLIANCE_FRAMEWORKS.map((fw) => (
                <div key={fw.id} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400">{fw.category}</span>
                      <h4 className="text-base font-bold text-white">{fw.name}</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                      {fw.coverage}% Attested
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{fw.description}</p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      Automated Attestation Tests:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                      {fw.requiredChecks.map((chk, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="text-[11px] font-mono">{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
