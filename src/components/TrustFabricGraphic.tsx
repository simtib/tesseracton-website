'use client';

import { useId, useState } from 'react';
import { Network } from 'lucide-react';

const views = [
  { label: 'Infrastructure', title: 'Verified infrastructure', detail: 'Connect verified compute to approved AI execution and evidence.' },
  { label: 'Context', title: 'Models / datasets / identities', detail: 'Approved models, datasets, and identities' },
  { label: 'Evidence', title: 'Policies / execution evidence', detail: 'Policy-to-proof execution governance' },
];

export function TrustFabricGraphic() {
  const [active, setActive] = useState(0);
  const id = useId();
  return <figure className="system-diagram">
    <figcaption className="system-diagram-header"><span>AI execution governance</span><span>Concept</span></figcaption>
    <div className="system-diagram-body">
      <div role="group" aria-label="Assurance graph views" className="flex flex-wrap gap-2 mb-6">
        {views.map((view,index) => <button key={view.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`control ${active === index ? 'bg-selected border-accent' : 'border-line text-secondary'}`}>{view.label}</button>)}
      </div>
      <svg viewBox="0 0 560 480" className="enclave-visual" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
        <title id={`${id}-title`}>AI Assurance Graph concept</title>
        <desc id={`${id}-desc`}>Verified infrastructure, models, datasets and identities connect to a central policy graph and an execution evidence receipt. An illustrative concept, not a live execution or released capability.</desc>
        <defs>
          <linearGradient id={`${id}-face`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#343e41"/><stop offset="1" stopColor="#151a1c"/></linearGradient>
          <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#394144"/></pattern>
        </defs>
        <rect x="1" y="1" width="558" height="478" rx="8" fill="#0e1112" stroke="#394144"/>
        <rect x="16" y="16" width="528" height="448" fill={`url(#${id}-grid)`}/>
        <text x="24" y="30" fill="#a0aaaa" fontFamily="var(--font-mono)" fontSize="11">AI ASSURANCE GRAPH / REFERENCE CONCEPT</text>
        <ellipse cx="280" cy="335" rx="180" ry="38" fill="#080b0c" opacity=".8" />
        <g fill="none" stroke="#394144" strokeWidth=".8">
          {[0,1,2,3,4,5,6].map(i => <path key={i} d={`M${60+i*28} ${234+i*11}l220-88m-220 88 220 88`} />)}
          {[0,1,2,3,4,5,6].map(i => <path key={i} d={`M${280+i*28} ${146+i*11}l-220 88m220-88 220 88`} />)}
        </g>
        <g fill="none" strokeLinecap="round">
          <path d="M92 139C92 205 430 190 430 260S154 320 154 354" stroke={active === 1 ? '#edb65b' : '#778487'} strokeWidth="2" />
          <path d="M468 139C468 205 130 190 130 260S406 320 406 354" stroke={active === 1 ? '#edb65b' : '#778487'} strokeWidth="2" />
          <path d="M280 110v38m0 168v63" stroke={active === 0 ? '#edb65b' : '#a0aaaa'} strokeWidth="2" strokeDasharray="4 6" />
          <ellipse cx="280" cy="246" rx="196" ry="70" stroke="#8d784f" strokeDasharray="2 7" />
        </g>
        {[
          { x: 38, y: 83, title: 'MODELS', number: '01', detail: 'Signed models' },
          { x: 226, y: 48, title: 'COMPUTE', number: '02', detail: 'Verified infrastructure' },
          { x: 414, y: 83, title: 'DATASETS', number: '03', detail: 'Approved data' },
        ].map(node => <g key={node.title}>
          <path d={`M${node.x} ${node.y}l10-7h108v62l-10 7Z`} fill="#303a3d" stroke="#667477" />
          <rect x={node.x} y={node.y} width="108" height="62" rx="3" fill={`url(#${id}-face)`} stroke={(node.number === '02' ? active === 0 : active === 1) ? '#edb65b' : '#778487'} />
          <text x={node.x+12} y={node.y+20} fill="#a0aaaa" fontSize="9" fontFamily="var(--font-mono)">{node.number} / INPUT</text>
          <text x={node.x+12} y={node.y+43} fill="#edb65b" fontSize="12" fontFamily="var(--font-mono)">{node.title}</text>
        </g>)}
        <path d="M166 222l114-53 114 53v29l-114 54-114-54Z" fill="#111719" stroke="#8d784f" />
        <path d="M166 222l114-53 114 53-114 54Z" fill={`url(#${id}-face)`} stroke="#edb65b" />
        <path d="M185 222l95-44 95 44-95 44Z" fill="none" stroke="#778487" />
        <path d="M223 204l57-27 57 27v20l-57 27-57-27Z" fill="#70552d" stroke="#c9a565" />
        <path d="M223 204l57-27 57 27-57 27Z" fill="#b99b65" stroke="#edc382" />
        <path d="M239 204l41-19 41 19-41 19Z" fill="#151a1c" stroke="#edc382" />
        <path d="M269 200l11-5 11 5v10l-11 5-11-5Z" fill="none" stroke="#edb65b" />
        <rect x="196" y="313" width="168" height="39" rx="4" fill="#0e1112" />
        <text x="280" y="328" textAnchor="middle" fill="#f2f0e9" fontSize="16">Policy &amp; purpose</text>
        <text x="280" y="346" textAnchor="middle" fill="#a0aaaa" fontFamily="var(--font-mono)" fontSize="10">AI ASSURANCE GRAPH</text>
        <g fontFamily="var(--font-mono)" fontSize="10">
          <circle cx="92" cy="246" r="5" fill="#edb65b" />
          <path d="M92 246v40H32" stroke="#b99b65" fill="none" />
          <text x="32" y="302" fill="#c3c8c8">IDENTITY</text>
          <circle cx="468" cy="246" r="5" fill="#edb65b" />
          <path d="M468 246v40h60" stroke="#b99b65" fill="none" />
          <text x="528" y="302" textAnchor="end" fill="#c3c8c8">PERMITTED USE</text>
        </g>
        <path d="M154 354v45h34m218-45v45h-34" stroke={active === 2 ? '#edb65b' : '#667477'} fill="none" />
        <path d="M188 378l10-7h174v78l-10 7H188Z" fill="#303a3d" stroke="#667477" />
        <path d="M188 378h154l20 20v58H188Z" fill={`url(#${id}-face)`} stroke={active === 2 ? '#edb65b' : '#778487'} />
        <path d="M342 378v20h20" fill="#485254" stroke="#778487" />
        <text x="201" y="400" fill="#edb65b" fontSize="10" fontFamily="var(--font-mono)">EXECUTION RECEIPT</text>
        <path d="M201 415h101m-101 10h80m-80 10h94" stroke="#778487" />
        <circle cx="335" cy="429" r="12" fill="#161d1f" stroke="#b99b65" />
        <path d="M329 429l4 4 8-9" fill="none" stroke="#edb65b" />
      </svg>
      <div className="mt-6 border-t border-line pt-6 flex items-start gap-3" aria-live="polite"><Network size={20} className="text-accent mt-1" aria-hidden="true"/><div><h3 className="text-sm font-semibold">{views[active].title}</h3><p className="text-sm text-secondary mt-2">{views[active].detail}</p></div></div>
      <p className="text-xs text-muted mt-6">AI Assurance Graph concept. Illustrative relationships, not live execution evidence.</p>
    </div>
  </figure>;
}
