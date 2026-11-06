import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCode
} from 'lucide-react';

export const AegisIsometricGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none group">
      {/* Background ambient neon spherical glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/25 via-indigo-600/20 to-purple-600/15 rounded-3xl filter blur-3xl -z-10 group-hover:scale-105 transition-transform duration-700" />

      {/* Modern Secure OS Console Window */}
      <div className="relative rounded-2xl bg-[#060a12]/95 border border-sky-500/40 shadow-[0_25px_60px_rgba(2,132,199,0.3)] overflow-hidden backdrop-blur-2xl">
        
        {/* Window Header / OS Titlebar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-300 font-semibold tracking-wide flex items-center gap-1.5">
              <span className="text-sky-400">aegis-os</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">kernel-v3.2.0</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-semibold text-emerald-400 shadow-sm shadow-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              3D ENCLAVE SPHERE
            </span>
          </div>
        </div>

        {/* Main Central Visual Display - Clean 3D Sphere Animation */}
        <div className="relative p-4 sm:p-6 flex flex-col items-center justify-center min-h-[350px]">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_20px_45px_rgba(2,132,199,0.35)]" fill="none">
              <defs>
                {/* Sphere 3D Spherical Volume Lighting (Light source at top-left) */}
                <radialGradient id="sphereVolumetricGlow" cx="35%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#0284c7" stopOpacity="0.5" />
                  <stop offset="65%" stopColor="#1e1b4b" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#030712" stopOpacity="0.9" />
                </radialGradient>

                {/* Inner Radiant Kernel Core Glow */}
                <radialGradient id="kernelCoreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="25%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="65%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>

                {/* Cyber Shield Gradient */}
                <linearGradient id="sphereShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="45%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>

                <filter id="sphereGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="coreFlare" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="9" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer Ground Perspective Grid (Subtle) */}
              <g opacity="0.35">
                <ellipse cx="200" cy="335" rx="160" ry="32" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 6" />
                <ellipse cx="200" cy="335" rx="110" ry="22" stroke="#0ea5e9" strokeWidth="0.8" strokeOpacity="0.4" />
              </g>

              {/* Outer Holographic Radar Sweep / Scanning Arc */}
              <circle cx="200" cy="200" r="165" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 8" opacity="0.3" />
              <circle cx="200" cy="200" r="150" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="16 10" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite" />
              </circle>

              {/* ============================================================== */}
              {/* 3D SPHERICAL BODY (VOLUMETRIC GLASS ENCLAVE SHELL)              */}
              {/* ============================================================== */}
              <g>
                {/* Outer Rim Halo */}
                <circle cx="200" cy="200" r="128" stroke="#38bdf8" strokeWidth="1.8" opacity="0.7" filter="url(#sphereGlow)" />
                
                {/* Main Translucent Volumetric Glass Sphere */}
                <circle cx="200" cy="200" r="126" fill="url(#sphereVolumetricGlow)" />

                {/* 3D Latitude Curvature Arcs (Horizontal parallels showing spherical curvature) */}
                {/* Northern Hemispheric Latitude (+45 deg) */}
                <ellipse cx="200" cy="140" rx="105" ry="32" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.65" />
                {/* Equator (0 deg) */}
                <ellipse cx="200" cy="200" rx="125" ry="40" stroke="#7dd3fc" strokeWidth="1.6" filter="url(#sphereGlow)">
                  <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </ellipse>
                {/* Southern Hemispheric Latitude (-45 deg) */}
                <ellipse cx="200" cy="260" rx="105" ry="32" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.5" />

                {/* 3D Longitude Meridian Arcs (Vertical polar ellipses showing spherical curvature) */}
                {/* Prime Meridian */}
                <ellipse cx="200" cy="200" rx="42" ry="125" stroke="#0ea5e9" strokeWidth="1.2" opacity="0.7" />
                {/* Oblique Meridian (+45 deg) */}
                <ellipse cx="200" cy="200" rx="86" ry="125" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                {/* Polar Axis Line */}
                <line x1="200" y1="74" x2="200" y2="326" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
              </g>

              {/* 3D GYROSCOPIC GIMBAL RING (Tilted at 25 degrees around Sphere) */}
              <g transform="rotate(-25 200 200)">
                <ellipse cx="200" cy="200" rx="148" ry="46" stroke="#818cf8" strokeWidth="2" strokeDasharray="14 8" opacity="0.85" filter="url(#sphereGlow)">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
                </ellipse>
                
                {/* Orbiting Security Anchor Satellites on Gimbal */}
                <g transform="translate(60, 195)">
                  <circle cx="0" cy="0" r="4.5" fill="#38bdf8" filter="url(#sphereGlow)" />
                  <circle cx="0" cy="0" r="9" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                </g>
                <g transform="translate(340, 205)">
                  <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="url(#sphereGlow)" />
                  <circle cx="0" cy="0" r="9" stroke="#10b981" strokeWidth="1" opacity="0.6" />
                </g>
              </g>

              {/* ============================================================== */}
              {/* INNER RADIANT KERNEL CORE NUCLEUS (Ring 0 Microkernel)          */}
              {/* ============================================================== */}
              <g>
                {/* Core Radiant Aura */}
                <circle cx="200" cy="200" r="58" fill="url(#kernelCoreGlow)" filter="url(#coreFlare)" />
                <circle cx="200" cy="200" r="54" stroke="#10b981" strokeWidth="1.8" opacity="0.9" />

                {/* Centered Holographic Sovereign Shield Inside the Sphere */}
                <g transform="translate(178, 172)" filter="url(#sphereGlow)">
                  {/* Shield Outer Silhouette */}
                  <path
                    d="M 22 7 L 37 13 V 26 C 37 36 22 43 22 43 C 22 43 7 36 7 26 V 13 L 22 7 Z"
                    fill="#030712"
                    stroke="url(#sphereShieldGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Inner Security Keylock / Check Icon */}
                  <path d="M 16 25 L 20 29 L 28 19" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>

              {/* Top & Bottom Polar Optical Emitters */}
              <circle cx="200" cy="74" r="5" fill="#10b981" filter="url(#coreFlare)" />
              <circle cx="200" cy="74" r="10" stroke="#10b981" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="5;14;5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle cx="200" cy="326" r="4" fill="#38bdf8" filter="url(#sphereGlow)" />

              {/* Surface Specular Flare (Gloss highlight on top-left of sphere) */}
              <ellipse cx="160" cy="155" rx="35" ry="18" fill="#ffffff" opacity="0.25" transform="rotate(-30 160 155)" filter="url(#sphereGlow)" />
            </svg>

            {/* Spaced Floating Telemetry Badges Around the Sphere */}
            <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-sky-500/40 text-[10px] font-mono text-sky-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Enclave Sphere: <strong className="text-white">Ring 0 Core</strong></span>
            </div>

            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>360° Zero-Egress Perimeter</span>
            </div>

            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>dm-verity RO • Hardware-Bound</span>
            </div>

            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-purple-500/40 text-[10px] font-mono text-purple-300 shadow-xl backdrop-blur-md flex items-center gap-1.5 z-20">
              <FileCode className="w-3.5 h-3.5 text-purple-400" />
              <span>NIST 800-53 OSCAL Signed</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
