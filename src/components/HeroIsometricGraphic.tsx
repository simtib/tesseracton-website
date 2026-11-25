import { useState } from 'react';
import { Cpu, Fingerprint, ShieldCheck } from 'lucide-react';

const layers = [
  { id: 'gpu', label: 'Silicon PUF', title: 'Hardware identity', detail: 'Silicon root / physical compute', Icon: Fingerprint },
  { id: 'tpm', label: 'TPM 2.0', title: 'Measured platform', detail: 'PCR[0..7] Golden Match', Icon: Cpu },
  { id: 'enclave', label: 'Enclave', title: 'Confidential execution', detail: 'SEV-SNP Hardware Root', Icon: ShieldCheck },
] as const;

export function HeroIsometricGraphic() {
  const [activeLayer, setActiveLayer] = useState<'all' | 'tpm' | 'gpu' | 'enclave'>('all');
  return <figure className="system-diagram">
    <figcaption className="system-diagram-header"><span>TAG / Hardware evidence chain</span><span>Illustrative sample</span></figcaption>
    <div className="system-diagram-body">
      <div role="group" aria-label="Hardware layers" className="flex flex-wrap gap-2 mb-6">
        {[{id:'all',label:'All Layers'},...layers].map(layer=><button key={layer.id} type="button" aria-pressed={activeLayer===layer.id} onClick={()=>setActiveLayer(layer.id as typeof activeLayer)} className={`control ${activeLayer===layer.id?'bg-selected border-accent':'border-line text-secondary'}`}>{layer.label}</button>)}
      </div>
      {layers.map((layer,index)=><div key={layer.id}>{index>0&&<span className="system-connector" aria-hidden="true"/>}<div className={`system-node ${activeLayer!=='all'&&activeLayer!==layer.id?'border-l-line':'border-l-accent'}`}><div className="flex items-center gap-3"><layer.Icon size={18} className="text-muted"/><span className="text-xs font-mono text-muted">0{index+1}</span><h3>{layer.title}</h3></div><p>{layer.detail}</p></div></div>)}
      <dl className="mt-6 border-t border-line pt-4 grid gap-3 text-xs font-mono text-secondary"><div className="flex justify-between gap-4"><dt>Golden match sample</dt><dd>0.04ms</dd></div><div className="flex justify-between gap-4"><dt>Attestation sample</dt><dd>100% Attested</dd></div><div className="flex justify-between gap-4"><dt>Geo-fenced</dt><dd className="text-right">Equinix DC11 (FedRAMP)</dd></div></dl>
    </div>
  </figure>;
}
