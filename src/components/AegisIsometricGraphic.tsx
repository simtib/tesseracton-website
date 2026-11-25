import { Lock, ShieldCheck, FileCode } from 'lucide-react';



export function AegisIsometricGraphic() {

  return <figure className="system-diagram"><figcaption className="system-diagram-header"><span>aegis-os / kernel-v3.2.0</span><span>Illustrative architecture</span></figcaption><div className="system-diagram-body">

    <div className="os-blueprint" aria-hidden="true"><div className="os-blueprint-perimeter"><div className="os-blueprint-core"><Lock size={32}/><span>Ring 0</span></div></div><span className="os-blueprint-caption">3D enclave sphere / perimeter schematic</span></div>

    <div className="system-node"><h3>Enclave Sphere: Ring 0 Core</h3><p>360° Zero-Egress Perimeter</p></div>

    <div className="flex flex-wrap gap-4 text-xs text-secondary mt-6"><span className="flex items-center gap-2"><ShieldCheck size={16}/>dm-verity RO / Hardware-Bound</span><span className="flex items-center gap-2"><FileCode size={16}/>NIST 800-53 OSCAL Signed</span></div>

  </div></figure>;

}
