import React, { useState } from 'react';
import { HardwareNode } from '../types';
import { X, ShieldCheck, Download, Copy, Check, FileCheck, Key, Lock, Globe2, QrCode } from 'lucide-react';

interface EvidenceProofModalProps {
  node: HardwareNode | null;
  onClose: () => void;
}

export const EvidenceProofModal: React.FC<EvidenceProofModalProps> = ({ node, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!node) return null;

  const rawAttestationPayload = {
    attestation_version: '2.6.0',
    certificate_id: `CERT-TESS-${node.id.toUpperCase()}-2026`,
    timestamp_utc: new Date().toISOString(),
    node_metadata: {
      hostname: node.name,
      cluster_identifier: node.cluster,
      datacenter_facility: node.facility,
      rack_unit: node.rackId,
      hardware_accelerators: node.accelerator,
      host_cpu_enclave: node.cpu,
    },
    cryptographic_measurements: {
      tpm_pcr0_firmware_core: node.pcr0Hash,
      tpm_pcr7_secure_boot_policy: node.pcr7Hash,
      silicon_puf_fingerprint: node.siliconPufId,
      enclave_mrenclave: node.enclaveMeasurement,
      geo_coordinates: node.geoCoords,
    },
    verification_proof: {
      status: node.status,
      merkle_root: `0x${node.pcr0Hash.slice(0, 32)}...`,
      signature_algorithm: 'ECDSA_P384_SHA384_NIST_CURVE',
      attestation_authority: 'Tesseracton Cryptographic Verifier Oracle v2.6',
      manufacturer_root_ca_verified: true,
      regulator_frameworks_satisfied: [
        'EU AI Act Sovereign Compute (Article 53)',
        'NIST AI Risk Management Framework 100-1',
        'US BIS Export Controls Jurisdiction Whitelist (3A090)',
      ],
    },
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(rawAttestationPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadProof = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(rawAttestationPayload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `tesseracton-proof-${node.name}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#090d18] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">Cryptographic Proof & Merkle Receipt</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                  VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Node: {node.name} | Evidence: {node.evidenceId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5 text-xs">
          
          {/* Certificate Summary Card */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-slate-400 text-[10px] font-mono block uppercase">Physical Facility</span>
              <span className="text-slate-200 font-medium">{node.facility}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] font-mono block uppercase">Silicon PUF ID</span>
              <span className="text-indigo-400 font-mono font-bold">{node.siliconPufId}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] font-mono block uppercase">Attestation Oracle</span>
              <span className="text-emerald-400 font-mono font-bold">ECDSA-P384 Verified</span>
            </div>
          </div>

          {/* Raw JSON Code Block */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 font-semibold uppercase">
                Raw Signed Proof Object (RFC 9334 RATS Architecture)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyJson}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
                <button
                  onClick={handleDownloadProof}
                  className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .JSON</span>
                </button>
              </div>
            </div>

            <div className="bg-[#05070b] border border-slate-800 rounded-xl p-4 font-mono text-xs text-sky-300/90 max-h-72 overflow-y-auto custom-scrollbar">
              <pre className="leading-relaxed whitespace-pre-wrap">
                {JSON.stringify(rawAttestationPayload, null, 2)}
              </pre>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Non-repudiation Hash: <strong className="text-slate-200">SHA-384 Merkle Root Anchor</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
