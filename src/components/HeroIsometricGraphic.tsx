import React, { useState } from 'react';
import { ShieldCheck, Lock, Cpu, Server, CheckCircle2, Zap } from 'lucide-react';

export const HeroIsometricGraphic: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'tpm' | 'gpu' | 'enclave'>('all');

  return (
    <div className="relative w-full max-w-[560px] aspect-[4/3] mx-auto flex items-center justify-center select-none">
      {/* Background ambient neon glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-purple-600/10 rounded-3xl filter blur-3xl -z-10 animate-pulse" />
      
      {/* Interactive Layer Switcher Chips */}
      <div className="absolute top-2 right-2 z-30 flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-700/60 backdrop-blur-md rounded-lg text-xs">
        <button
          onClick={() => setActiveLayer('all')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeLayer === 'all' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          All Layers
        </button>
        <button
          onClick={() => setActiveLayer('gpu')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeLayer === 'gpu' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Silicon PUF
        </button>
        <button
          onClick={() => setActiveLayer('tpm')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeLayer === 'tpm' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          TPM Quote
        </button>
        <button
          onClick={() => setActiveLayer('enclave')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeLayer === 'enclave' ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Enclave
        </button>
      </div>

      {/* Main Isometric Visual Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <svg
          viewBox="0 0 540 400"
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(30,58,138,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Isometric Grid Gradients */}
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.75" />
            </linearGradient>

            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#312e81" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Perspective Ground Grid */}
          <g opacity="0.6">
            {/* Isometric grid lines */}
            <path d="M 50 200 L 270 330 L 490 200 L 270 70 Z" stroke="url(#gridGrad)" strokeWidth="1.5" />
            <path d="M 90 200 L 270 310 L 450 200 L 270 90 Z" stroke="#38bdf8" strokeOpacity="0.15" strokeWidth="1" />
            <path d="M 130 200 L 270 285 L 410 200 L 270 115 Z" stroke="#38bdf8" strokeOpacity="0.15" strokeWidth="1" />
            <path d="M 170 200 L 270 260 L 370 200 L 270 140 Z" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="1" />

            {/* Grid Crosslines */}
            <line x1="270" y1="70" x2="270" y2="330" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50" y1="200" x2="490" y2="200" stroke="#6366f1" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
          </g>

          {/* Holographic Wireframe Boundary Box */}
          <g opacity="0.7">
            {/* Front vertical pillars */}
            <line x1="120" y1="120" x2="120" y2="280" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.6" />
            <line x1="420" y1="120" x2="420" y2="280" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.6" />
            <line x1="270" y1="30" x2="270" y2="190" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.4" />
            <line x1="270" y1="210" x2="270" y2="370" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.8" />
            
            {/* Upper perimeter */}
            <path d="M 120 120 L 270 30 L 420 120 L 270 210 Z" stroke="#00f0ff" strokeWidth="1.2" opacity="0.4" />
            {/* Lower perimeter */}
            <path d="M 120 280 L 270 190 L 420 280 L 270 370 Z" stroke="#00f0ff" strokeWidth="1.2" opacity="0.4" />
          </g>

          {/* BASE LEVEL: Physical Silicon Cluster & Server Rack Slabs */}
          <g className="transition-opacity duration-300" opacity={activeLayer === 'all' || activeLayer === 'gpu' ? '1' : '0.2'}>
            {/* Sub-node Base 1 (Left) */}
            <g transform="translate(140, 205)">
              <polygon points="0,20 40,0 80,20 40,40" fill="url(#cubeTop)" opacity="0.6" />
              <polygon points="0,20 40,40 40,55 0,35" fill="url(#cubeLeft)" stroke="#38bdf8" strokeWidth="0.5" />
              <polygon points="40,40 80,20 80,35 40,55" fill="url(#cubeRight)" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="40" cy="20" r="3" fill="#38bdf8" filter="url(#glow)" />
            </g>

            {/* Sub-node Base 2 (Right) */}
            <g transform="translate(320, 205)">
              <polygon points="0,20 40,0 80,20 40,40" fill="url(#cubeTop)" opacity="0.6" />
              <polygon points="0,20 40,40 40,55 0,35" fill="url(#cubeLeft)" stroke="#38bdf8" strokeWidth="0.5" />
              <polygon points="40,40 80,20 80,35 40,55" fill="url(#cubeRight)" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="40" cy="20" r="3" fill="#38bdf8" filter="url(#glow)" />
            </g>

            {/* Sub-node Base 3 (Bottom center) */}
            <g transform="translate(230, 255)">
              <polygon points="0,20 40,0 80,20 40,40" fill="url(#cubeTop)" opacity="0.7" />
              <polygon points="0,20 40,40 40,55 0,35" fill="url(#cubeLeft)" stroke="#38bdf8" strokeWidth="0.5" />
              <polygon points="40,40 80,20 80,35 40,55" fill="url(#cubeRight)" stroke="#6366f1" strokeWidth="0.5" />
              <circle cx="40" cy="20" r="3" fill="#10b981" filter="url(#glow)" />
            </g>
          </g>

          {/* MAIN CENTRAL TESSERACT CORE (Confidential Hardware Enclave) */}
          <g className="transition-transform duration-500 ease-out" opacity={activeLayer === 'all' || activeLayer === 'tpm' || activeLayer === 'enclave' ? '1' : '0.3'}>
            {/* Core Isometric Cube */}
            {/* Top Face */}
            <polygon
              points="270,105 345,150 270,195 195,150"
              fill="url(#cubeTop)"
              stroke="#67e8f9"
              strokeWidth="1.5"
              className="filter drop-shadow-[0_0_15px_rgba(56,189,248,0.7)]"
            />
            {/* Left Face */}
            <polygon
              points="195,150 270,195 270,270 195,225"
              fill="url(#cubeLeft)"
              stroke="#6366f1"
              strokeWidth="1.5"
            />
            {/* Right Face */}
            <polygon
              points="270,195 345,150 345,225 270,270"
              fill="url(#cubeRight)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />

            {/* Inner Holographic Micro-Cube (Floating Core) */}
            <polygon
              points="270,135 305,155 270,175 235,155"
              fill="#ffffff"
              opacity="0.9"
              filter="url(#strongGlow)"
            />
            <line x1="270" y1="135" x2="270" y2="105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

            {/* Circuit pattern tracks on cube surfaces */}
            <g stroke="#38bdf8" strokeWidth="1" opacity="0.7">
              <path d="M 215 160 L 245 178 L 245 240" />
              <circle cx="215" cy="160" r="2" fill="#38bdf8" />
              <circle cx="245" cy="240" r="2" fill="#38bdf8" />

              <path d="M 325 160 L 295 178 L 295 240" />
              <circle cx="325" cy="160" r="2" fill="#67e8f9" />
              <circle cx="295" cy="240" r="2" fill="#67e8f9" />
            </g>

            {/* Central Verifier Shield Badge Floating on Top-Left Axis */}
            <g transform="translate(155, 175)" filter="url(#glow)">
              <rect x="0" y="0" width="38" height="46" rx="8" fill="#091428" stroke="#10b981" strokeWidth="2" opacity="0.9" />
              <path
                d="M 19 8 L 30 13 V 24 C 30 31 19 38 19 38 C 19 38 8 31 8 24 V 13 L 19 8 Z"
                fill="none"
                stroke="url(#shieldGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M 14 23 L 17 26 L 24 19" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* Cryptographic Light Beams & Attestation Pulses */}
          <g>
            {/* Vertical Attestation Beam */}
            <line x1="270" y1="40" x2="270" y2="105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" filter="url(#glow)">
              <animate attributeName="stroke-dashoffset" values="0;20" dur="1.5s" repeatCount="indefinite" />
            </line>
            
            {/* Top Anchor Point */}
            <circle cx="270" cy="40" r="4" fill="#38bdf8" filter="url(#strongGlow)" />
            <circle cx="270" cy="40" r="8" stroke="#38bdf8" strokeWidth="1" opacity="0.6">
              <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Left Beam Connector */}
            <path d="M 180 220 L 230 245" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            {/* Right Beam Connector */}
            <path d="M 360 220 L 310 245" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
          </g>
        </svg>

        {/* Floating Telemetry Callout Pill 1 (Top Left) */}
        <div className="absolute top-12 left-4 px-3 py-1.5 bg-slate-900/90 border border-emerald-500/40 rounded-lg backdrop-blur-md shadow-lg shadow-emerald-950/40 text-[11px] font-mono flex items-center gap-2 text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">PCR[0..7] Golden Match</span>
          <span className="text-slate-400 text-[10px]">0.04ms</span>
        </div>

        {/* Floating Telemetry Callout Pill 2 (Bottom Right) */}
        <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-slate-900/90 border border-indigo-500/40 rounded-lg backdrop-blur-md shadow-lg shadow-indigo-950/40 text-[11px] font-mono flex items-center gap-2 text-indigo-300">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-medium text-slate-200">SEV-SNP Hardware Root</span>
          <span className="text-emerald-400 font-bold">100% Attested</span>
        </div>

        {/* Floating Telemetry Callout Pill 3 (Bottom Left) */}
        <div className="absolute bottom-4 left-6 px-3 py-1.5 bg-slate-900/90 border border-cyan-500/30 rounded-lg backdrop-blur-md text-[11px] font-mono flex items-center gap-2 text-cyan-300">
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-300">Geo-fenced:</span>
          <span className="text-cyan-400 font-semibold">Equinix DC11 (FedRAMP)</span>
        </div>
      </div>
    </div>
  );
};
