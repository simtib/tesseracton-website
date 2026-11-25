import React, { useEffect, useRef, useState } from 'react';
import { INITIAL_NODES, INITIAL_EVIDENCE_LOGS, COMPLIANCE_FRAMEWORKS } from '../data/mockData';
import { HardwareNode, EvidenceLog } from '../types';
import { Search, RotateCw, FileCheck2, CheckCircle2, AlertTriangle, Server } from 'lucide-react';

interface InteractiveDashboardSectionProps {
  onOpenEvidenceProof: (node: HardwareNode) => void;
  onOpenPilotModal: () => void;
}

export const InteractiveDashboardSection: React.FC<InteractiveDashboardSectionProps> = ({
  onOpenEvidenceProof,
}) => {
  const [nodes, setNodes] = useState<HardwareNode[]>(INITIAL_NODES);
  const [evidenceLogs] = useState<EvidenceLog[]>(INITIAL_EVIDENCE_LOGS);
  const [selectedClusterFilter, setSelectedClusterFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'nodes' | 'evidence' | 'frameworks'>('nodes');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(INITIAL_NODES[0].id);
  const [notification, setNotification] = useState<string | null>(null);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedClusterFilter('ALL');
    document.getElementById('node-search')?.focus();
  };
  const tabs = ['nodes', 'evidence', 'frameworks'] as const;
  const handleTabKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = tabs.indexOf(activeTab);
    const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length
      : event.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    setActiveTab(tabs[next]);
    document.getElementById(`dashboard-tab-${tabs[next]}`)?.focus();
  };

  // The existing local demonstration never contacts hardware.
  // Trigger Cluster-Wide Attestation Sweep
  const handleTriggerSweep = () => {
    setIsRefreshing(true);
    timers.current.push(setTimeout(() => {
      setIsRefreshing(false);
      setNotification('Demo sweep finished. No hardware was contacted; sample node states are unchanged.');
      timers.current.push(setTimeout(() => setNotification(null), 6000));
    }, 1200));
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

  const selectedNode = filteredNodes.find(node => node.id === selectedNodeId) ?? null;

  const verifiedCount = nodes.filter((n) => n.status === 'VERIFIED').length;
  const driftCount = nodes.filter((n) => n.status === 'DRIFT_DETECTED').length;

  return (
    <section id="interactive-dashboard-section" className="phase-one py-24 bg-canvas relative border-t border-line">
      <div className="page-container">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface border border-line text-accent text-xs font-semibold   mb-4 font-mono">
            <span>Interactive demonstration</span>
          </div>
          <h2 className="type-section text-ink mb-4">
            Interactive Dashboard <br className="hidden sm:inline" />
            <span className="text-muted">See Tesseracton details</span>
          </h2>
          <p className="text-base text-muted">
            Explore sample nodes and evidence. All actions run locally in this demo; no hardware is contacted and no signed evidence is generated.
          </p>
        </div>

        {/* Dashboard Shell / Application Frame */}
        <div className="glass-card rounded-card border border-line bg-canvas  overflow-hidden">

          {/* Top Control Bar with Fleet Metrics */}
          <div className="p-5 sm:p-6 border-b border-line bg-inset flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1">
              <div className="bg-surface border border-line rounded-card p-3">
                <span className="text-xs font-mono text-muted block mb-0.5">Sample fleet compute</span>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-xl font-semibold text-ink font-mono">2,450</span>
                  <span className="text-xs text-accent font-mono">H100/B200</span>
                </div>
              </div>

              <div className="bg-surface border border-line rounded-card p-3">
                <span className="text-xs font-mono text-muted block mb-0.5">Sample attestation rate</span>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-xl font-semibold text-success font-mono">99.8%</span>
                  <span className="text-xs text-muted font-mono">15s loop</span>
                </div>
              </div>

              <div className="bg-surface border border-line rounded-card p-3">
                <span className="text-xs font-mono text-muted block mb-0.5">Verified demo nodes</span>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-xl font-semibold text-ink font-mono">{verifiedCount} / {nodes.length}</span>
                  <span className="text-xs text-success font-mono">Sample</span>
                </div>
              </div>

              <div className="bg-surface border border-line rounded-card p-3">
                <span className="text-xs font-mono text-muted block mb-0.5">Demo quarantines</span>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className={`text-xl font-semibold font-mono ${driftCount > 0 ? 'text-warning' : 'text-muted'}`}>
                    {driftCount} {driftCount === 1 ? 'node' : 'nodes'}
                  </span>
                  <span className="text-xs text-warning font-mono">Cordoned</span>
                </div>
              </div>
            </div>

            {/* Sweep Trigger Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleTriggerSweep}
                disabled={isRefreshing}
                className="control control-primary px-4 py-3  font-mono font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'motion-safe:animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Simulating sweep...' : 'Run demo sweep'}</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          <div role="status" aria-live="polite">
          {notification && (
            <div className="px-6 py-3 bg-raised border-b border-line text-success text-xs font-mono flex items-center justify-between animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>{notification}</span>
              </div>
              <span className="text-xs text-secondary">Simulation</span>
            </div>
          )}

          </div>

          {/* Navigation Sub-Tabs & Filters */}
          <div className="px-5 py-4 border-b border-line bg-inset flex flex-wrap items-center justify-between gap-3">

            {/* View Mode Switcher */}
            <div role="tablist" aria-label="Dashboard views" onKeyDown={handleTabKey} className="flex flex-wrap items-center gap-1 bg-surface p-1 rounded-lg border border-line">
              <button
                id="dashboard-tab-nodes" role="tab" aria-selected={activeTab === 'nodes'} aria-controls="dashboard-panel" tabIndex={activeTab === 'nodes' ? 0 : -1}
                onClick={() => setActiveTab('nodes')}
                className={`min-h-11 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'nodes' ? 'bg-action text-ink font-semibold ' : 'text-muted hover:text-ink'
                }`}
              >
                Node Fleet ({nodes.length})
              </button>
              <button
                id="dashboard-tab-evidence" role="tab" aria-selected={activeTab === 'evidence'} aria-controls="dashboard-panel" tabIndex={activeTab === 'evidence' ? 0 : -1}
                onClick={() => setActiveTab('evidence')}
                className={`min-h-11 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'evidence' ? 'bg-action text-ink font-semibold ' : 'text-muted hover:text-ink'
                }`}
              >
                Evidence Log Feed
              </button>
              <button
                id="dashboard-tab-frameworks" role="tab" aria-selected={activeTab === 'frameworks'} aria-controls="dashboard-panel" tabIndex={activeTab === 'frameworks' ? 0 : -1}
                onClick={() => setActiveTab('frameworks')}
                className={`min-h-11 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === 'frameworks' ? 'bg-action text-ink font-semibold ' : 'text-muted hover:text-ink'
                }`}
              >
                Compliance Mappings
              </button>
            </div>

            {/* Region Cluster Selector & Search */}
            {activeTab === 'nodes' && <div className="flex flex-wrap items-end gap-3 w-full lg:w-auto lg:flex-1 lg:max-w-xl">
              <div className="relative flex-1 min-w-40">
                <label htmlFor="node-search" className="block text-xs text-secondary mb-2">Search sample nodes</label>
                <Search className="w-3.5 h-3.5 text-muted absolute left-3 bottom-3.5" />
                <input
                  type="text"
                  id="node-search"
                  placeholder="Node, cluster, GPU, or ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="field w-full pl-8 pr-3 py-3 border placeholder-muted font-mono"
                />
              </div>

              <div className="flex-1 min-w-40">
              <label htmlFor="node-region" className="block text-xs text-secondary mb-2">Region</label>
              <select
                id="node-region"
                value={selectedClusterFilter}
                onChange={(e) => setSelectedClusterFilter(e.target.value)}
                className="field border w-full min-h-11 px-3 py-2 font-mono cursor-pointer"
              >
                <option value="ALL">All Regions</option>
                <option value="US">US-East FedRAMP</option>
                <option value="EU">EU Frankfurt AI Act</option>
                <option value="UK">UK NHS Enclave</option>
                <option value="APAC">APAC Tokyo Financial</option>
              </select>
              </div>
              {(searchQuery || selectedClusterFilter !== 'ALL') && <button type="button" onClick={resetFilters} className="control min-h-11 px-3 border border-line text-ink hover:bg-raised">Reset filters</button>}
            </div>}
          </div>

          <div id="dashboard-panel" role="tabpanel" aria-labelledby={`dashboard-tab-${activeTab}`} tabIndex={0}>
          {/* MAIN TAB 1: Hardware Fleet & Live Node Table */}
          {activeTab === 'nodes' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">

              {/* Left Column: Node Table (7 cols) */}
              <div className="lg:col-span-7 overflow-x-auto custom-scrollbar">
                <table aria-label="Sample node fleet" className="w-full text-left text-xs text-secondary">
                  <thead className="bg-inset text-xs font-mono  text-muted border-b border-line">
                    <tr>
                      <th scope="col" className="px-4 py-3">Node Identity</th>
                      <th scope="col" className="px-4 py-3">Accelerator & Enclave</th>
                      <th scope="col" className="px-4 py-3">Attestation</th>
                      <th scope="col" className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {filteredNodes.length === 0 && <tr><td colSpan={4} className="p-6 text-center text-sm text-secondary"><p role="status">No sample nodes match your filters.</p><button type="button" onClick={resetFilters} className="control min-h-11 mt-3 px-4 bg-raised hover:bg-selected text-ink">Clear filters</button></td></tr>}
                    {filteredNodes.map((node) => {
                      const isSelected = selectedNode?.id === node.id;
                      const isVerified = node.status === 'VERIFIED';
                      return (
                        <tr
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-raised text-ink' : 'hover:bg-surface'
                          }`}
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <Server className={`w-3.5 h-3.5 ${isVerified ? 'text-success' : 'text-warning'}`} />
                              <div>
                                <button type="button" aria-pressed={isSelected} onClick={() => setSelectedNodeId(node.id)} className="control min-h-11 whitespace-nowrap text-left font-semibold block text-ink underline decoration-slate-600 underline-offset-4">{node.name}<span className="sr-only"> - inspect node</span></button>
                                {isSelected && <span className="block text-xs text-accent">Selected</span>}
                                <span className="text-xs text-muted block">{node.region}</span>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4">
                            <span className="text-ink block truncate max-w-[180px]">{node.accelerator}</span>
                            <span className="text-xs text-muted block truncate max-w-[180px]">{node.cpu}</span>
                          </td>

                          <td className="px-4 py-4">
                            {isVerified ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-raised text-success border border-line text-xs font-semibold">
                                <span className="w-1.5 h-1.5 rounded-md bg-success" />
                                Verified
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-raised text-warning border border-line text-xs font-semibold">
                                <AlertTriangle className="w-2.5 h-2.5 text-warning" />
                                Drift detected
                              </span>
                            )}
                          </td>

                          <td className="px-4 py-4 text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenEvidenceProof(node);
                              }}
                              aria-label={`View sample proof for ${node.name}`}
                              className="control min-h-11 px-3 py-2 rounded bg-raised hover:bg-selected text-accent hover:text-accent border border-line transition-colors mr-1.5"
                            >
                              Proof
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleCordon(node.id);
                              }}
                              aria-label={`${isVerified ? 'Simulate cordon' : 'Simulate re-attestation'} for ${node.name}`}
                              className={`min-h-11 px-3 py-2 rounded text-xs font-semibold border transition-colors ${
                                isVerified
                                  ? 'bg-raised border-line text-danger hover:bg-raised'
                                  : 'bg-raised border-line text-success hover:bg-raised'
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
              <div className="lg:col-span-5 p-5 bg-inset flex flex-col justify-between">
                {selectedNode ? (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
                      <div>
                        <span className="text-xs font-mono  text-muted">Sample node inspector</span>
                        <h4 className="type-label text-ink flex items-center gap-2">
                          {selectedNode.name}
                          <span className="text-xs font-mono font-normal text-muted">({selectedNode.rackId})</span>
                        </h4>
                      </div>
                      <button
                        onClick={() => onOpenEvidenceProof(selectedNode)}
                        className="control min-h-11 px-3 py-2 bg-raised border border-line text-accent hover:text-accent font-mono flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        <span>View sample proof</span>
                      </button>
                    </div>

                    {/* Drift Warning Banner if not verified */}
                    {selectedNode.status === 'DRIFT_DETECTED' && (
                      <div className="p-3 rounded-lg bg-raised border border-line text-xs text-warning font-mono">
                        <span className="font-semibold block text-warning mb-0.5">Demo drift detected</span>
                        {selectedNode.driftDescription}
                      </div>
                    )}

                    {/* Hardware Measurement Register Matrix */}
                    <div className="space-y-2 text-xs font-mono">
                      <div className="bg-surface p-3 rounded-lg border border-line">
                        <span className="text-muted text-xs block mb-0.5">TPM 2.0 PCR[0] (Core Firmware)</span>
                        <span className="text-accent font-mono text-xs break-all">{selectedNode.pcr0Hash}</span>
                      </div>

                      <div className="bg-surface p-3 rounded-lg border border-line">
                        <span className="text-muted text-xs block mb-0.5">TPM 2.0 PCR[7] (Secure Boot Keys)</span>
                        <span className={`font-mono text-xs break-all ${selectedNode.status === 'DRIFT_DETECTED' ? 'text-warning font-semibold' : 'text-accent'}`}>
                          {selectedNode.pcr7Hash}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-surface p-3 rounded-lg border border-line">
                          <span className="text-muted text-xs block mb-0.5">Silicon PUF ID</span>
                          <span className="text-ink text-xs font-semibold">{selectedNode.siliconPufId}</span>
                        </div>
                        <div className="bg-surface p-3 rounded-lg border border-line">
                          <span className="text-muted text-xs block mb-0.5">Facility</span>
                          <span className="text-ink text-xs truncate block">{selectedNode.facility}</span>
                        </div>
                      </div>

                      <div className="bg-surface p-3 rounded-lg border border-line">
                        <span className="text-muted text-xs block mb-0.5">Active Workload Container</span>
                        <span className="text-success font-semibold text-xs truncate block">{selectedNode.activeWorkload}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-muted border-t border-line">
                      <span>Merkle Root: <strong>{selectedNode.evidenceId}</strong></span>
                      <span className="text-secondary">Illustrative data</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted text-xs">
                    {filteredNodes.length ? 'Select a sample node to inspect its measurements.' : 'Clear filters to inspect a sample node.'}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* MAIN TAB 2: Real-Time Evidence Log Feed */}
          {activeTab === 'evidence' && (
            <div className="p-5 space-y-3">
              <div className="text-xs text-muted font-mono mb-2 flex items-center justify-between">
                <span>Sample ledger events</span>
                <span className="text-success font-semibold">Illustrative signatures</span>
              </div>
              <div className="space-y-2.5">
                {evidenceLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-4 rounded-card bg-inset border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            log.status === 'SUCCESS'
                              ? 'bg-raised text-success border border-line'
                              : 'bg-raised text-warning border border-line'
                          }`}
                        >
                          {log.type}
                        </span>
                        <span className="text-ink font-semibold">{log.nodeName}</span>
                        <span className="text-muted text-xs">{log.timestamp}</span>
                      </div>
                      <p className="text-secondary font-sans text-sm">{log.summary}</p>
                      <span className="text-xs text-muted block truncate">
                        Standard: <strong className="text-accent">{log.details.regulatorStandard}</strong> | Signature: {log.signature}
                      </span>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-muted block">Merkle Root</span>
                      <span className="text-accent font-semibold">{log.merkleRoot}</span>
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
                <div key={fw.id} className="p-5 rounded-card bg-inset border border-line space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono  text-muted">{fw.category}</span>
                      <h4 className="type-label text-ink">{fw.name}</h4>
                    </div>
                    <span className="px-3 py-1 rounded bg-raised text-success border border-line text-xs font-mono font-semibold">
                      {fw.coverage}% sample coverage
                    </span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{fw.description}</p>

                  <div className="pt-2 border-t border-line space-y-1.5">
                    <span className="text-xs font-mono  text-muted block font-semibold">
                      Automated Attestation Tests:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                      {fw.requiredChecks.map((chk, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                          <span className="text-xs font-mono">{chk}</span>
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

      </div>
    </section>
  );
};
