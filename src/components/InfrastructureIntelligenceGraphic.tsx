'use client';

import { useId, useState } from 'react';
import { Server, ScanLine, ClipboardCheck } from 'lucide-react';

const views = [
  { id: 'inventory', label: 'Inventory', title: 'Hardware discovery and inventory', detail: 'Discover assets', Icon: Server },
  { id: 'configuration', label: 'Configuration', title: 'Configuration drift and firmware monitoring', detail: 'Monitor configuration', Icon: ScanLine },
  { id: 'lifecycle', label: 'Lifecycle', title: 'Lifecycle management and compliance visibility', detail: 'Track lifecycle risk', Icon: ClipboardCheck },
] as const;

export function InfrastructureIntelligenceGraphic() {
  const [active, setActive] = useState(0);
  const id = useId();
  const selected = views[active];
  const Icon = selected.Icon;
  return <figure className="system-diagram">
    <figcaption className="system-diagram-header"><span>Infrastructure visibility</span><span>Illustrative architecture</span></figcaption>
    <div className="system-diagram-body">
      <div role="group" aria-label="Infrastructure views" className="flex flex-wrap gap-2 mb-6">
        {views.map((view, index) => <button key={view.id} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`control ${active === index ? 'bg-selected border-accent' : 'border-line text-secondary'}`}>{view.label}</button>)}
      </div>
      <svg viewBox="0 0 560 440" className="enclave-visual" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
        <title id={`${id}-title`}>Fleet visibility and infrastructure intelligence</title>
        <desc id={`${id}-desc`}>Three hardware racks connect to a shared inventory register. A monitoring rail connects inventory, configuration, and lifecycle views. The selected view is highlighted. This is an illustrative architecture, not live fleet data.</desc>
        <defs>
          <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#394144" /></pattern>
          <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#2a3235" /><stop offset="1" stopColor="#151a1c" /></linearGradient>
          <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#485254" /><stop offset="1" stopColor="#2a3235" /></linearGradient>
        </defs>
        <rect x="1" y="1" width="558" height="438" rx="8" fill="#0e1112" stroke="#394144" />
        <rect x="16" y="16" width="528" height="408" fill={`url(#${id}-grid)`} opacity=".5" />
        <g fontFamily="var(--font-mono)" fontSize="11" fill="#a0aaaa">
          <text x="24" y="32">01 / FLEET DISCOVERY</text><text x="536" y="32" textAnchor="end">HETEROGENEOUS HOSTS</text>
        </g>
        {[52, 224, 396].map((x, rack) => <g key={x}>
          <ellipse cx={x + 65} cy="170" rx="66" ry="10" fill="#080b0c" opacity=".7" />
          <path d={`M${x} 54l14-10h112l-14 10Z`} fill={`url(#${id}-top)`} stroke="#778487" />
          <path d={`M${x + 112} 54l14-10v110l-14 10Z`} fill="#111719" stroke="#526064" />
          <rect x={x} y="54" width="112" height="110" rx="3" fill={`url(#${id}-face)`} stroke="#778487" />
          <text x={x + 12} y="74" fill="#a0aaaa" fontSize="10" fontFamily="var(--font-mono)">HOST / 0{rack + 1}</text>
          {[84, 108, 132].map(y => <g key={y}>
            <rect x={x + 10} y={y} width="92" height="18" rx="2" fill="#0e1112" stroke="#394144" />
            <path d={`M${x + 18} ${y + 6}h28m-28 5h28`} stroke="#778487" />
            <circle cx={x + 88} cy={y + 9} r="2" fill="#edb65b" />
          </g>)}
          <path d={`M${x + 56} 164v25H280v25`} fill="none" stroke="#b99b65" />
          <circle cx={x + 56} cy="164" r="3" fill="#edb65b" />
        </g>)}
        <rect x="108" y="224" width="366" height="116" rx="6" fill="#080b0c" opacity=".7" />
        <path d="M100 214l12-8h360l-12 8Z" fill={`url(#${id}-top)`} stroke="#b99b65" />
        <path d="M460 214l12-8v114l-12 8Z" fill="#141a1c" stroke="#8d784f" />
        <rect x="100" y="214" width="360" height="114" rx="3" fill={`url(#${id}-face)`} stroke="#edb65b" />
        <path d="M100 246h360" stroke="#394144" />
        <text x="116" y="235" fill="#edb65b" fontSize="11" fontFamily="var(--font-mono)">02 / SHARED INVENTORY REGISTER</text>
        <g fontSize="11" fontFamily="var(--font-mono)" fill="#c3c8c8">
          <text x="116" y="267">HARDWARE</text><text x="234" y="267">FIRMWARE</text><text x="352" y="267">LIFECYCLE</text>
          {[116, 234, 352].map((x,index) => <g key={x} stroke={active === index ? '#edb65b' : '#526064'}><path d={`M${x} 282h80m-80 12h56m-56 12h68`} /><rect x={x-4} y="254" width="92" height="62" rx="2" fill="none" opacity={active === index ? '.6' : '0'} /></g>)}
        </g>
        <path d="M280 328v22M108 350h344M108 350v18m172-18v18m172-18v18" stroke="#778487" fill="none" />
        {views.map((view,index) => <g key={view.id}>
          <rect x={44 + index * 172} y="376" width="140" height="42" rx="4" fill="#080b0c" opacity=".7" />
          <path d={`M${40 + index * 172} 368l8-6h136l-8 6Z`} fill={`url(#${id}-top)`} stroke={active === index ? '#b99b65' : '#526064'} />
          <path d={`M${176 + index * 172} 368l8-6v42l-8 6Z`} fill="#111719" stroke={active === index ? '#8d784f' : '#394144'} />
          <rect x={40 + index * 172} y="368" width="136" height="42" rx="4" fill={active === index ? '#343b3e' : '#191d1f'} stroke={active === index ? '#edb65b' : '#394144'} />
          <text x={108 + index * 172} y="394" textAnchor="middle" fill={active === index ? '#edb65b' : '#a0aaaa'} fontSize="11" fontFamily="var(--font-mono)">{view.label.toUpperCase()}</text>
        </g>)}
      </svg>
      <div className="mt-6 border-t border-line pt-6 flex items-start gap-3" aria-live="polite">
        <Icon size={20} className="text-accent mt-1" aria-hidden="true" />
        <div><h3 className="text-sm font-semibold text-ink">{selected.title}</h3><p className="text-sm text-secondary mt-2">{selected.detail}</p></div>
      </div>
      <p className="text-xs text-muted mt-6">Discover assets, monitor configuration, and track lifecycle risk.</p>
    </div>
  </figure>;
}
