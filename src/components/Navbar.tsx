import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Menu, X, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { NavigationTab } from '../types';

interface NavbarProps {
  activeTab?: NavigationTab;
  onOpenPilotModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onOpenPilotModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenus = () => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  const isProductActive = activeTab === 'tag' || activeTab === 'aegis-os';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/95 border-b border-slate-800/80 backdrop-blur-xl py-3 shadow-2xl shadow-slate-950/70'
          : 'bg-[#07090e]/80 border-b border-slate-800/40 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Matched to User's Screenshot */}
        <Link
          href="/" onNavigate={closeMenus}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          {/* Logo Icon with 3 stacked layers gradient */}
          <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-sky-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Tesseracton
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm font-medium">
          
          {/* Home Tab - Pill style when active (exact match to screenshot) */}
          <Link
            href="/" onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-all text-sm font-semibold ${
              activeTab === 'home'
                ? 'bg-slate-800/90 text-white shadow-sm border border-slate-700/60'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 text-sm font-medium ${
                isProductActive
                  ? 'bg-indigo-950/60 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Menu */}
            {productsOpen && (
              <div
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-slate-900/95 border border-slate-800 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                {/* Option 1: TAG */}
                <Link
                  href="/tag" onNavigate={closeMenus}
                  className={`w-full p-3 rounded-xl text-left transition-all flex items-start gap-3 group cursor-pointer ${
                    activeTab === 'tag'
                      ? 'bg-indigo-950/70 border border-indigo-500/40 text-white'
                      : 'hover:bg-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">TAG</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Gateway</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      Hardware-rooted attestation, golden PCR matching & evidence chains for GPU clouds.
                    </p>
                  </div>
                </Link>

                <div className="my-1 border-t border-slate-800/80" />

                {/* Option 2: Aegis AI OS */}
                <Link
                  href="/aegis-os" onNavigate={closeMenus}
                  className={`w-full p-3 rounded-xl text-left transition-all flex items-start gap-3 group cursor-pointer ${
                    activeTab === 'aegis-os'
                      ? 'bg-sky-950/70 border border-sky-500/40 text-white'
                      : 'hover:bg-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">Aegis AI OS</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Enclave OS</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      Hardened microkernel, encrypted GPU weight vault & zero-egress sandboxing.
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Services Tab */}
          <Link
            href="/services" onNavigate={closeMenus}
            className={`px-3.5 py-2 rounded-lg transition-all text-sm font-medium ${
              activeTab === 'services'
                ? 'bg-slate-800/90 text-white shadow-sm border border-slate-700/60'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Services
          </Link>

          {/* Company Tab */}
          <Link
            href="/company" onNavigate={closeMenus}
            className={`px-3.5 py-2 rounded-lg transition-all text-sm font-medium ${
              activeTab === 'company'
                ? 'bg-slate-800/90 text-white shadow-sm border border-slate-700/60'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Company
          </Link>

          {/* Contact Us Tab */}
          <Link
            href="/contact" onNavigate={closeMenus}
            className={`px-3.5 py-2 rounded-lg transition-all text-sm font-medium ${
              activeTab === 'contact'
                ? 'bg-slate-800/90 text-white shadow-sm border border-slate-700/60'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenPilotModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/40 rounded-lg transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 group cursor-pointer"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenPilotModal}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
          >
            Pilot
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090d18] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/" onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'home' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            {/* Products Group on Mobile */}
            <div className="pt-1 pb-1">
              <span className="px-3 text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider">Products</span>
              <div className="mt-1 pl-2 space-y-1">
                <Link
                  href="/tag" onNavigate={closeMenus}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                    activeTab === 'tag' ? 'bg-indigo-950/80 text-indigo-300 font-semibold border border-indigo-500/40' : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>TAG (Attestation Gateway)</span>
                </Link>
                <Link
                  href="/aegis-os" onNavigate={closeMenus}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                    activeTab === 'aegis-os' ? 'bg-sky-950/80 text-sky-300 font-semibold border border-sky-500/40' : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>Aegis AI OS</span>
                </Link>
              </div>
            </div>

            <Link
              href="/services" onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'services' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Services
            </Link>

            <Link
              href="/company" onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'company' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Company
            </Link>

            <Link
              href="/contact" onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'contact' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-indigo-600 rounded-lg"
            >
              Request a Pilot
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
