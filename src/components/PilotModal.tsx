import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Server, Globe2, FileCheck2, Cpu } from 'lucide-react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const [gpuCount, setGpuCount] = useState<number>(64);
  const [acceleratorType, setAcceleratorType] = useState<string>('NVIDIA H100 SXM5');
  const [region, setRegion] = useState<string>('EU-Central (Frankfurt)');
  const [frameworks, setFrameworks] = useState<string[]>(['EU AI Act Sovereign Compute', 'NIST AI RMF 100-1']);
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleFramework = (fw: string) => {
    if (frameworks.includes(fw)) {
      setFrameworks(frameworks.filter((f) => f !== fw));
    } else {
      setFrameworks([...frameworks, fw]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090d18] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Request Enterprise Pilot</h3>
              <p className="text-xs text-slate-400">Deploy continuous hardware attestation on your AI clusters in &lt; 48 hours.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Pilot Application Received</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for applying. A Tesseracton confidential compute solutions architect will reach out to <strong className="text-sky-300">{email || 'your email'}</strong> to configure your golden attestation baselines.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left font-mono text-xs text-slate-300 max-w-md mx-auto space-y-1">
                <div>Cluster: <span className="text-indigo-400">{gpuCount}x {acceleratorType}</span></div>
                <div>Region: <span className="text-sky-400">{region}</span></div>
                <div>Frameworks: <span className="text-emerald-400">{frameworks.join(', ')}</span></div>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              
              {/* Cluster Size Slider */}
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-200">Pilot GPU Compute Scale:</span>
                  <span className="text-sm font-mono font-bold text-sky-400">{gpuCount} GPUs</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="1024"
                  step="8"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>8 GPUs (Dev Rack)</span>
                  <span>256 GPUs (DGX SuperPOD)</span>
                  <span>1,024 GPUs (Data Center)</span>
                </div>
              </div>

              {/* Accelerator & Hardware Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Accelerator Architecture</label>
                  <select
                    value={acceleratorType}
                    onChange={(e) => setAcceleratorType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-indigo-500 font-mono"
                  >
                    <option value="NVIDIA H100 SXM5">NVIDIA H100 SXM5 (80GB)</option>
                    <option value="NVIDIA B200 NVL">NVIDIA B200 NVL (192GB)</option>
                    <option value="NVIDIA H200 SXM">NVIDIA H200 SXM (141GB)</option>
                    <option value="AMD Instinct MI300X">AMD Instinct MI300X (192GB)</option>
                    <option value="Intel Gaudi 3">Intel Gaudi 3 AI Accelerator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Deployment Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:border-indigo-500 font-mono"
                  >
                    <option value="EU-Central (Frankfurt)">EU-Central (Frankfurt - Sovereign)</option>
                    <option value="US-East (Virginia - FedRAMP)">US-East (Virginia - FedRAMP)</option>
                    <option value="UK-London (Healthcare NHS)">UK-London (Healthcare NHS)</option>
                    <option value="APAC-Tokyo (Financial Cloud)">APAC-Tokyo (Financial Cloud)</option>
                    <option value="On-Premises Bare Metal">On-Premises Air-Gapped Data Center</option>
                  </select>
                </div>
              </div>

              {/* Compliance Frameworks Selection */}
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Compliance Requirements</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'EU AI Act Sovereign Compute',
                    'NIST AI RMF 100-1',
                    'US BIS Export Controls (3A090)',
                    'HIPAA & SOC 2 Type II Confidential',
                  ].map((fw) => (
                    <div
                      key={fw}
                      onClick={() => toggleFramework(fw)}
                      className={`p-2.5 rounded-lg border cursor-pointer flex items-center gap-2 transition-all ${
                        frameworks.includes(fw)
                          ? 'bg-indigo-950/60 border-indigo-500/80 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={frameworks.includes(fw)}
                        onChange={() => {}}
                        className="rounded border-slate-700 text-indigo-600 focus:ring-0"
                      />
                      <span className="font-mono text-[11px]">{fw}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="architect@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Organization / Cloud Provider</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anthropic, Mistral, Lambda, CoreWeave"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
                >
                  <span>Submit Pilot Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
