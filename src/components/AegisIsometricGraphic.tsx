'use client';

import { useId, useState } from 'react';
import { ShieldCheck, FileCode, Pause, Play } from 'lucide-react';

export function AegisIsometricGraphic() {
  const [paused, setPaused] = useState(false);
  const id = useId().replace(/:/g, '');
  return (
    <figure className="system-diagram">
      <figcaption className="system-diagram-header"><span>aegis-os / kernel-v3.2.0</span><span>Illustrative architecture</span></figcaption>
      <div className="system-diagram-body">
        <div className={`enclave-scene ${paused ? 'is-paused' : ''}`}>
          <svg className="enclave-visual" viewBox="0 0 560 380" role="img" aria-labelledby={`${id}-title ${id}-description`}>
            <title id={`${id}-title`}>Aegis protected compute core</title>
            <desc id={`${id}-description`}>An exploded isometric hardware stack holds the Ring 0 core inside a spherical zero-egress boundary. The moving perimeter is illustrative, not live telemetry.</desc>
            <defs>
              <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#485254"/><stop offset=".48" stopColor="#222a2d"/><stop offset="1" stopColor="#101719"/></linearGradient>
              <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#343e41"/><stop offset="1" stopColor="#111719"/></linearGradient>
              <linearGradient id={`${id}-chip`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2c67c"/><stop offset=".45" stopColor="#b78436"/><stop offset="1" stopColor="#6b4c25"/></linearGradient>
              <radialGradient id={`${id}-shell`}><stop stopColor="#d6dfd8" stopOpacity="0"/><stop offset=".8" stopColor="#d6dfd8" stopOpacity=".015"/><stop offset="1" stopColor="#d6dfd8" stopOpacity=".09"/></radialGradient>
            </defs>
            <ellipse cx="280" cy="322" rx="176" ry="32" fill="#080c0d"/>
            <g stroke="#30393c" strokeWidth="1" fill="none">
              <path d="m68 290 212 65 212-65M104 275l176 54 176-54M140 260l140 43 140-43"/>
              <path d="m140 312 212-65M210 334l212-65M350 334l-212-65M420 312l-212-65"/>
            </g>
            <g fill={`url(#${id}-edge)`} stroke="#566164" strokeWidth="1">
              <path d="m118 265 162 68 162-68v16l-162 68-162-68Z"/>
              <path d="m118 265 162-68 162 68-162 68Z" fill={`url(#${id}-metal)`}/>
            </g>
            <g stroke="#728183" strokeWidth="1" fill="none" strokeDasharray="3 5" opacity=".65"><path d="M168 257v-69M392 257v-69M280 303v-69"/></g>
            <g className="enclave-deck">
              <path d="m156 214 124 52 124-52v12l-124 52-124-52Z" fill={`url(#${id}-edge)`} stroke="#5c686b"/>
              <path d="m156 214 124-52 124 52-124 52Z" fill={`url(#${id}-metal)`} stroke="#82918e"/>
              <g stroke="#65706a" fill="none" strokeWidth="1"><path d="m180 213 48 20 25-10M380 213l-48 20-25-10M210 194l30 13M350 194l-30 13"/><path d="m194 230 23 10m126 0 23-10"/></g>
              {[0,1,2,3,4,5].map(i=><g key={i} stroke="#ac986b" strokeWidth="3"><path d={`m${222+i*10} ${205+i*4.2} -10 4.2`}/><path d={`m${288+i*10} ${226-i*4.2} 10 4.2`}/></g>)}
              <path d="m218 196 62 26 62-26v16l-62 26-62-26Z" fill="#70552d" stroke="#d8ac62"/>
              <path d="m218 196 62-26 62 26-62 26Z" fill={`url(#${id}-chip)`} stroke="#f5ce8c"/>
              <path d="m235 196 45-19 45 19-45 19Z" fill="#1a2020" stroke="#bda270"/>
              <g transform="translate(280 192)" fill="none" stroke="#f0c478" strokeWidth="1.8"><path d="M-6-2v-5a6 6 0 0 1 12 0v5"/><rect x="-9" y="-2" width="18" height="14" rx="2"/><path d="M0 3v4"/></g>
            </g>
            <circle cx="280" cy="174" r="137" fill={`url(#${id}-shell)`} stroke="#76827d" strokeOpacity=".65"/>
            <g fill="none" stroke="#64736f" strokeWidth=".8" opacity=".5"><ellipse cx="280" cy="174" rx="58" ry="137" transform="rotate(28 280 174)"/><ellipse cx="280" cy="174" rx="58" ry="137" transform="rotate(-28 280 174)"/><ellipse cx="280" cy="174" rx="137" ry="49" transform="rotate(-18 280 174)"/></g>
            <ellipse className="enclave-orbit" cx="280" cy="174" rx="137" ry="49" transform="rotate(-18 280 174)" fill="none" stroke="#edb65b" strokeWidth="2" strokeDasharray="52 560" pathLength="612" strokeLinecap="round"/>
            <g fill="none" stroke="#96a39b" strokeWidth="1"><path d="M167 96h-49l-18-18H48M354 106h69l22-22h65M331 247h89l20 20h70"/><circle cx="167" cy="96" r="3" fill="#131617"/><circle cx="354" cy="106" r="3" fill="#131617"/><circle cx="331" cy="247" r="3" fill="#131617"/></g>
            <g className="enclave-labels" fill="#c3c8c8"><text x="48" y="65">Isolation boundary</text><text x="510" y="71" textAnchor="end">Zero egress</text><text x="510" y="284" textAnchor="end">Hardware root</text></g>
            <text x="280" y="369" textAnchor="middle" fill="#edb65b" className="enclave-labels">Ring 0 / Protected core</text>
          </svg>
          <div className="enclave-toolbar"><span>Illustrative perimeter sweep</span><button type="button" className="enclave-motion-control" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play enclave animation' : 'Pause enclave animation'}>{paused ? <Play size={14}/> : <Pause size={14}/>}<span>{paused ? 'Play' : 'Pause'}</span></button><span className="enclave-reduced-label">Motion reduced</span></div>
        </div>
        <div className="system-node"><h3>Enclave Sphere: Ring 0 Core</h3><p>360&deg; Zero-Egress Perimeter</p></div>
        <div className="flex flex-wrap gap-4 text-xs text-secondary mt-6"><span className="flex items-center gap-2"><ShieldCheck size={16}/>dm-verity RO / Hardware-Bound</span><span className="flex items-center gap-2"><FileCode size={16}/>NIST 800-53 OSCAL Signed</span></div>
      </div>
    </figure>
  );
}
