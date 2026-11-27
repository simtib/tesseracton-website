import { products } from './products';

// Reference portfolio copy shared by the homepage and Products overview.
const portfolioCopy = {
  "aegis-os": {
    "layer": "Infrastructure Foundation",
    "name": "Aegis AI OS",
    "status": "Open Core · Apache-2.0",
    "description": "An open-source, immutable operating system for AI—spanning six interoperable planes from a single workstation to sovereign AI factories, with native NVIDIA CUDA and AMD ROCm support alongside Kubernetes and Slurm.",
    "features": [
      "Architecture 6 planes · 5 scale profiles",
      "Boot & Isolation UEFI Secure Boot · TPM 2.0 · SELinux",
      "Provisioning Redfish · PXE/iPXE · A/B rollback"
    ],
    "summary": "Aegis AI OS deploys and standardises the immutable host, accelerators, and Kubernetes or Slurm cluster."
  },
  "infrastructure-intelligence": {
    "layer": "Asset Visibility & Compliance",
    "name": "AI Infrastructure Intelligence Platform",
    "status": "Vendor-Neutral · Standalone",
    "description": "“Know what you own. Understand its condition. Identify its risks.” Consolidates GPU hardware, firmware, driver versions, lifecycle status, and baseline compliance across bare metal, Kubernetes, and Slurm into one system of record.",
    "features": [
      "Architecture 5 API-first modular layers",
      "Accelerators NVIDIA · AMD · Multi-OEM",
      "Capabilities Discovery · Drift · EOL · CVE risk"
    ],
    "summary": "Intelligence Platform discovers heterogeneous hardware, monitors configuration drift, and tracks lifecycle risk."
  },
  "tag": {
    "layer": "Hardware Assurance & Governance",
    "name": "Tesseracton Assurance Grid (TAG)",
    "status": "Cryptographic Root",
    "description": "Continuously proves regulated compute is where it should be, running as approved. Harvests silicon roots of trust into a tamper-evident Merkle tree ledger and cordons compromised or relocated nodes before workloads execute.",
    "features": [
      "Silicon Roots TPM 2.0 · SEV-SNP · TDX · NV CC · PUF",
      "Policy Alignment EU AI Act · NIST RMF · BIS 3A090",
      "Enforcement SPIFFE/SPIRE · Zero-trust cordon"
    ],
    "summary": "Tesseracton TAG cryptographically verifies silicon identity, location, and firmware in a Merkle ledger."
  },
  "ai-trust-fabric": {
    "layer": "Regulator-Facing Assurance Plane",
    "name": "TAG AI Trust Fabric",
    "status": "Concept · Policy-to-Proof",
    "description": "Turns written AI, health data, and research policies into machine-verifiable execution receipts. Connects compute attestation to approved data, signed models, authorised identity, and permitted purpose via the AI Assurance Graph.",
    "features": [
      "Core Construct Living AI Assurance Graph",
      "Domain Concept DoH Abu Dhabi AI / HIE / TRE / Genomics",
      "Privacy Rule Hashes & claims only; zero raw PII"
    ],
    "summary": "TAG AI Trust Fabric binds attested compute to approved data, signed models, and regulator-ready receipts."
  }
};

export const portfolioProducts = products.map(product => ({
  ...product,
  ...portfolioCopy[product.id as keyof typeof portfolioCopy],
}));

