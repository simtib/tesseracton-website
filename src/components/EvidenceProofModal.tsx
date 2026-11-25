import React, { useState } from 'react';
import { AccessibleDialog } from './AccessibleDialog';
import { HardwareNode } from '../types';
import { X, Download, Copy, Check, FileCheck } from 'lucide-react';

interface EvidenceProofModalProps {
  node: HardwareNode | null;
  onClose: () => void;
}

export const EvidenceProofModal: React.FC<EvidenceProofModalProps> = ({ node, onClose }) =>
  node ? <EvidenceDetails key={node.id} node={node} onClose={onClose} /> : null;

function EvidenceDetails({ node, onClose }: { node: HardwareNode; onClose: () => void }) {
  const [copyState, setCopyState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [capturedAt] = useState(() => new Date().toISOString());
  const verified = node.status === 'VERIFIED';
  const statusLabel = node.status === 'VERIFIED' ? 'Verified' : node.status === 'DRIFT_DETECTED' ? 'Drift detected' : node.status.replaceAll('_', ' ').toLowerCase();

  const rawAttestationPayload = {
    simulation: true,
    notice: 'Illustrative sample only. No hardware verification or cryptographic signing was performed.',
    attestation_version: '2.6.0',
    certificate_id: `CERT-TESS-${node.id.toUpperCase()}-2026`,
    timestamp_utc: capturedAt,
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

  const handleCopyJson = async () => {
    setCopyState('pending');
    try {
      await navigator.clipboard.writeText(JSON.stringify(rawAttestationPayload, null, 2));
      setCopyState('success');
    } catch {
      setCopyState('error');
    }
  };

  const handleDownloadProof = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(rawAttestationPayload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `tesseracton-demo-proof-${node.name}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <AccessibleDialog titleId="evidence-title" descriptionId="evidence-description" onClose={onClose} wide>
      <div className="p-4 sm:p-6 border-b border-line flex items-start justify-between gap-4 bg-inset">
        <div className="min-w-0">
          <h3 id="evidence-title" data-dialog-heading tabIndex={-1} className="type-card text-ink flex items-center gap-2">
            <FileCheck aria-hidden="true" className="w-5 h-5 shrink-0 text-accent" />
            Evidence preview
          </h3>
          <p id="evidence-description" className="text-sm text-secondary mt-2">Simulated data, not a signed certificate or proof of compliance.</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close evidence dialog" className="control min-h-11 min-w-11 flex items-center justify-center shrink-0 text-secondary hover:bg-raised">
          <X aria-hidden="true" className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 min-h-0 space-y-6 text-sm">
        <section aria-labelledby="evidence-summary" className="p-4 rounded-card bg-surface border border-line space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 id="evidence-summary" className="type-label text-ink">Node summary</h4>
            <span className={`px-3 py-1 rounded-lg border ${verified ? 'text-success border-line bg-raised' : 'text-warning border-line bg-raised'}`}>Demo status: {statusLabel}</span>
          </div>
          <p className="text-secondary">{verified
            ? 'This sample node is marked verified in the demo. No live hardware check has been performed.'
            : node.driftDescription || 'This sample node is not marked verified. Review its demo measurements below.'}</p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><dt className="text-muted">Node</dt><dd className="font-mono break-all mt-1">{node.name}</dd></div>
            <div><dt className="text-muted">Facility</dt><dd className="mt-1">{node.facility}</dd></div>
            <div><dt className="text-muted">Hardware</dt><dd className="mt-1">{node.accelerator}</dd></div>
            <div><dt className="text-muted">Evidence ID</dt><dd className="font-mono break-all mt-1">{node.evidenceId}</dd></div>
          </dl>
        </section>

        <section aria-labelledby="evidence-json-heading" className="space-y-3">
          <h4 id="evidence-json-heading" className="type-label text-ink">Sample JSON</h4>
          <p className="text-secondary">Verification and framework fields below illustrate the sample format; they are not independently verified results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button type="button" onClick={handleCopyJson} disabled={copyState === 'pending'} className="control min-h-11 px-4 py-3 bg-raised hover:bg-selected disabled:opacity-60 text-ink flex items-center justify-center gap-2 transition-colors">
              {copyState === 'success' ? <Check aria-hidden="true" className="w-4 h-4" /> : <Copy aria-hidden="true" className="w-4 h-4" />}
              {copyState === 'pending' ? 'Copying...' : copyState === 'success' ? 'Copied' : 'Copy JSON'}
            </button>
            <button type="button" onClick={handleDownloadProof} className="control control-primary min-h-11 px-4 py-3  flex items-center justify-center gap-2 transition-colors">
              <Download aria-hidden="true" className="w-4 h-4" />Download sample JSON
            </button>
          </div>
          <p role="status" className="text-secondary">{copyState === 'success' ? 'Sample JSON copied to clipboard.' : ''}</p>
          {copyState === 'error' && <p role="alert" className="text-warning">Could not copy to clipboard. Try again, download the sample, or select the JSON below.</p>}
          <pre tabIndex={0} aria-label="Sample evidence JSON" className="bg-canvas border border-line rounded-card p-4 font-mono text-sm text-accent max-h-72 overflow-auto whitespace-pre-wrap break-all leading-relaxed">{JSON.stringify(rawAttestationPayload, null, 2)}</pre>
        </section>
      </div>

      <div className="p-4 border-t border-line bg-inset flex flex-wrap items-center justify-between gap-3 text-sm text-secondary">
        <span>For demonstration only</span>
        <button type="button" onClick={onClose} className="control min-h-11 px-4 py-2 bg-raised hover:bg-selected text-ink font-medium">Close Inspector</button>
      </div>
    </AccessibleDialog>
  );
}
