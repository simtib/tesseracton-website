'use client';

import { useId, useState } from 'react';
import { Cpu, Fingerprint, ShieldCheck, Pause, Play } from 'lucide-react';

const layers = [
  { id: 'gpu', label: 'Silicon PUF', title: 'Hardware identity', detail: 'Silicon root / physical compute', Icon: Fingerprint },
  { id: 'tpm', label: 'TPM 2.0', title: 'Measured platform', detail: 'PCR[0..7] Golden Match', Icon: Cpu },
  { id: 'enclave', label: 'Enclave', title: 'Confidential execution', detail: 'SEV-SNP Hardware Root', Icon: ShieldCheck },
] as const;

export function HeroIsometricGraphic() {
  const [activeLayer, setActiveLayer] = useState<'all' | 'tpm' | 'gpu' | 'enclave'>('all');
  const [paused, setPaused] = useState(false);
  const id = useId().replace(/:/g, '');
  return <figure className="system-diagram">
    <figcaption className="system-diagram-header"><span>TAG / Hardware evidence chain</span><span>Illustrative sample</span></figcaption>
    <div className="system-diagram-body">
      <div role="group" aria-label="Hardware layers" className="flex flex-wrap gap-2 mb-6">
        {[{id:'all',label:'All Layers'},...layers].map(layer=><button key={layer.id} type="button" aria-pressed={activeLayer===layer.id} onClick={()=>setActiveLayer(layer.id as typeof activeLayer)} className={`control ${activeLayer===layer.id?'bg-selected border-accent':'border-line text-secondary'}`}>{layer.label}</button>)}
      </div>
      <div className={`tag-evidence-scene ${paused ? 'is-paused' : ''}`}>
        <svg className="enclave-visual" viewBox="0 0 560 450" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
          <title id={`${id}-title`}>TAG three-layer hardware evidence stack</title>
          <desc id={`${id}-desc`}>An exploded isometric stack connects silicon identity, TPM measurements, and confidential execution. The selected layer is highlighted in amber. Animated paths illustrate evidence flow, not live hardware activity.</desc>
          <defs>
            <linearGradient id={`${id}-plate`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#485254"/><stop offset=".5" stopColor="#252e31"/><stop offset="1" stopColor="#111719"/></linearGradient>
            <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#364043"/><stop offset="1" stopColor="#0e1416"/></linearGradient>
            <linearGradient id={`${id}-core`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eac27d"/><stop offset="1" stopColor="#775529"/></linearGradient>
          </defs>
          <ellipse cx="258" cy="396" rx="176" ry="30" fill="#080c0d"/>
          <g fill="none" stroke="#303a3d" transform="translate(0 36)"><path d="m48 330 210 70 210-70M98 314l160 54 160-54"/><path d="m148 365 220-73m-10 73L138 292"/></g>
          <g fill="none" stroke="#6e7c7c" strokeDasharray="3 6"><path d="M118 292V92M398 292V92M258 348V148"/></g>
          {layers.map((layer, index) => {
            const y = 292 - index * 100;
            const selected = activeLayer === 'all' || activeLayer === layer.id;
            const Icon = layer.Icon;
            return <g key={layer.id} data-layer={layer.id} data-highlighted={selected} className="tag-hardware-layer">
              <path d={`M118 ${y} 258 ${y+56} 398 ${y}v14l-140 56-140-56Z`} fill={`url(#${id}-edge)`} stroke={selected?'#b79d6c':'#526064'}/>
              <path d={`M118 ${y} 258 ${y-56} 398 ${y} 258 ${y+56}Z`} fill={`url(#${id}-plate)`} stroke={selected?'#d3b47b':'#728183'}/>
              <path d={`M138 ${y} 258 ${y-48} 378 ${y} 258 ${y+48}Z`} fill="none" stroke="#626f70" strokeWidth=".7"/>
              <g stroke={selected?'#af996e':'#647174'} strokeWidth="1" fill="none"><path d={`m155 ${y} 44 18 29-12M361 ${y}l-44 18-29-12m-104-27 25 10m98-10-25 10`}/></g>
              <path d={`M208 ${y-5} 258 ${y+15} 308 ${y-5}v12l-50 20-50-20Z`} fill={selected?'#70552d':'#252e30'} stroke={selected?'#c9a565':'#667477'}/>
              <path d={`M208 ${y-5} 258 ${y-25} 308 ${y-5} 258 ${y+15}Z`} fill={selected?`url(#${id}-core)`:'#303b3d'} stroke={selected?'#efc888':'#758285'}/>
              <path d={`M224 ${y-5} 258 ${y-19} 292 ${y-5} 258 ${y+9}Z`} fill="#161e20" stroke={selected?'#c1a36e':'#647174'}/>
              <Icon x={247} y={y-19} width={22} height={22} color={selected?'#f1c777':'#a0aaaa'} strokeWidth={1.4}/>
              <path d={`M398 ${y}h24l12-12h92`} fill="none" stroke={selected?'#c9aa6d':'#6b7879'}/>
              <circle cx="398" cy={y} r="3" fill={selected?'#edb65b':'#778487'}/>
              <text x="526" y={y-22} textAnchor="end" className="tag-layer-label" fill={selected?'#edc382':'#a0aaaa'}>0{index+1} / {layer.label}</text>
            </g>;
          })}
          <g fill="none"><path d="M118 292 84 278V78l34 14" stroke="#526264"/><path className="tag-evidence-pulse" d="M118 292 84 278V78l34 14" stroke="#edb65b" strokeWidth="2" pathLength="100" strokeDasharray="13 87" strokeLinecap="round"/></g>
          <text x="258" y="435" textAnchor="middle" fill="#a0aaaa" className="tag-layer-label">Silicon identity / Measurements / Execution</text>
        </svg>
        <div className="enclave-toolbar"><span>Illustrative evidence flow</span><button type="button" className="enclave-motion-control" onClick={()=>setPaused(!paused)} aria-label={paused?'Play TAG animation':'Pause TAG animation'}>{paused?<Play size={14}/>:<Pause size={14}/>}<span>{paused?'Play':'Pause'}</span></button><span className="enclave-reduced-label">Motion reduced</span></div>
      </div>
      <div className="tag-layer-legend">
        {layers.map((layer,index)=><div key={layer.id} className={`tag-layer-summary ${activeLayer===layer.id?'is-selected':''}`}><layer.Icon size={16} className="text-muted"/><div><h3><span className="text-muted font-mono">0{index+1} / </span>{layer.title}</h3><p>{layer.detail}</p></div></div>)}
      </div>
      <dl className="mt-6 border-t border-line pt-4 grid gap-3 text-xs font-mono text-secondary"><div className="flex justify-between gap-4"><dt>Golden match sample</dt><dd>0.04ms</dd></div><div className="flex justify-between gap-4"><dt>Attestation sample</dt><dd>100% Attested</dd></div><div className="flex justify-between gap-4"><dt>Geo-fenced</dt><dd className="text-right">Equinix DC11 (FedRAMP)</dd></div></dl>
    </div>
  </figure>;
}
