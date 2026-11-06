export type NavigationTab = 'home' | 'tag' | 'aegis-os' | 'services' | 'company' | 'contact';

export type AttestationStatus = 'VERIFIED' | 'DRIFT_DETECTED' | 'COMPROMISED' | 'ATTESTING';

export interface HardwareNode {
  id: string;
  name: string;
  cluster: string;
  region: string;
  facility: string;
  rackId: string;
  accelerator: string; // e.g. "8x NVIDIA H100 SXM5 80GB"
  cpu: string; // e.g. "2x AMD EPYC 9654 (SEV-SNP)"
  tpmVersion: string;
  status: AttestationStatus;
  lastAttested: string;
  pcr0Hash: string;
  pcr7Hash: string;
  siliconPufId: string;
  geoCoords: { lat: number; lng: number };
  enclaveMeasurement: string;
  evidenceId: string;
  complianceScore: number;
  activeWorkload: string;
  driftDescription?: string;
}

export interface EvidenceLog {
  id: string;
  timestamp: string;
  nodeId: string;
  nodeName: string;
  type: 'TPM_QUOTE' | 'SEV_SNP_REPORT' | 'GPU_ATTESTATION' | 'GEO_FENCE_CHECK' | 'PCR_INTEGRITY' | 'POLICY_EVALUATION';
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
  summary: string;
  merkleRoot: string;
  signature: string;
  details: {
    pcrMismatch?: boolean;
    expectedHash?: string;
    actualHash?: string;
    locationDeltaKm?: number;
    verifierEndpoint: string;
    regulatorStandard: string;
  };
}

export interface ScenarioDefinition {
  id: string;
  title: string;
  tag: string;
  description: string;
  affectedComponent: string;
  detectionLatency: string;
  actionTaken: string;
  cryptographicProof: string;
  iconName: string;
  details: {
    event: string;
    rawSignal: string;
    cryptographicCheck: string;
    regulatorVerdict: string;
  };
}

export interface ComplianceFramework {
  id: string;
  name: string;
  category: string;
  badge: string;
  coverage: number; // e.g. 100%
  description: string;
  requiredChecks: string[];
}
