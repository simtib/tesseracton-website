import { BrandMark } from './BrandMark';
import Link from 'next/link';
import { products } from '../data/products';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Menu, X, ShieldCheck, Cpu } from 'lucide-react';
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
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const activeClass = 'bg-raised text-ink border border-control-line';
  const inactiveClass = 'border border-transparent text-secondary hover:text-ink hover:bg-raised';
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
    const handleResize = () => {
      setProductsOpen(false);
      setMobileMenuOpen(false);
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && navRef.current?.contains(focused) && !focused.getClientRects().length) {
        navRef.current.querySelector<HTMLElement>('#brand-logo')?.focus();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenus = () => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  const isProductActive = products.some(product => product.id === activeTab);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
      }}
      onKeyDown={event => {
        if (event.key === 'Escape' && (productsOpen || mobileMenuOpen)) {
          event.preventDefault();
          if (productsOpen) productsButtonRef.current?.focus();
          else mobileButtonRef.current?.focus();
          closeMenus();
        }
      }}
      className={`phase-one fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        scrolled
          ? 'bg-canvas border-b border-line  py-3  '
          : 'bg-canvas border-b border-line  py-4'
      }`}
    >
      <div className="page-container flex items-center justify-between">

        {/* Brand Logo - Matched to User's Screenshot */}
        <Link
          href="/" onNavigate={closeMenus}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <BrandMark /><span className="brand-name">Tesseracton</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm font-medium">

          {/* Home Tab - Pill style when active (exact match to screenshot) */}
          <Link
            href="/" aria-current={activeTab === 'home' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-semibold ${
              activeTab === 'home'
                ? activeClass : inactiveClass
            }`}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef} onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false);
          }}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              ref={productsButtonRef}
              aria-expanded={productsOpen}
              aria-controls="products-navigation"
              onKeyDown={event => {
                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  setProductsOpen(true);
                  requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLAnchorElement>('a')?.focus());
                }
              }}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 text-sm font-medium ${
                isProductActive
                  ? activeClass : inactiveClass
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${productsOpen ? 'rotate-180 text-ink' : 'text-muted'}`} />
            </button>

            {/* Dropdown Menu */}
            {productsOpen && (
              <div
                id="products-navigation"
                className="absolute top-full left-0 mt-2 w-[480px] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-card bg-surface border border-line p-2   animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                {products.map(product => (
                  <Link key={product.id} href={product.href} aria-label={product.name} aria-current={activeTab === product.id ? 'page' : undefined} onNavigate={closeMenus}
                    className={`w-full p-3 rounded-card text-left transition-colors flex items-start gap-3 group ${activeTab === product.id ? activeClass : inactiveClass}`}>
                    <span className="text-xs font-mono text-muted mt-1">0{products.indexOf(product)+1}</span>
                    <div className="min-w-0">
                      <span className="text-sm font-semibold text-ink">{product.name}</span>
                      <p className="text-sm text-secondary mt-1 leading-relaxed">{product.layer} / {product.status}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Tab */}
          <Link
            href="/services" aria-current={activeTab === 'services' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              activeTab === 'services'
                ? activeClass : inactiveClass
            }`}
          >
            Services
          </Link>

          {/* Company Tab */}
          <Link
            href="/company" aria-current={activeTab === 'company' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              activeTab === 'company'
                ? activeClass : inactiveClass
            }`}
          >
            Company
          </Link>

          {/* Contact Us Tab */}
          <Link
            href="/contact" aria-current={activeTab === 'contact' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              activeTab === 'contact'
                ? activeClass : inactiveClass
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenPilotModal}
            className="control px-4 py-2 font-semibold text-ink bg-surface border border-line transition-colors flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="w-3.5 h-3.5  transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => { closeMenus(); onOpenPilotModal(); }}
            className="control control-primary min-h-11 px-3 py-1.5 font-semibold "
          >
            Pilot
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="control min-h-11 min-w-11 p-2 text-muted hover:text-ink bg-surface border border-line"
            ref={mobileButtonRef}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto lg:hidden border-b border-line bg-canvas px-4 pt-3 pb-6 space-y-3  animate-in slide-in-from-top-4 duration-150">
          <div className="flex flex-col space-y-1">
            <Link
              href="/" aria-current={activeTab === 'home' ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'home' ? activeClass : inactiveClass
              }`}
            >
              Home
            </Link>

            {/* Products Group on Mobile */}
            <div className="pt-1 pb-1">
              <span className="px-3 text-xs font-mono  text-muted font-semibold ">Products</span>
              <div className="mt-1 pl-2 space-y-1">
                {products.map(product => (
                  <Link key={product.id} href={product.href} aria-label={product.name} aria-current={activeTab === product.id ? 'page' : undefined} onNavigate={closeMenus}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-start gap-2 ${activeTab === product.id ? activeClass : inactiveClass}`}>
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span>{product.name}<span className="block text-xs text-secondary">{product.status}</span></span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services" aria-current={activeTab === 'services' ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'services' ? activeClass : inactiveClass
              }`}
            >
              Services
            </Link>

            <Link
              href="/company" aria-current={activeTab === 'company' ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'company' ? activeClass : inactiveClass
              }`}
            >
              Company
            </Link>

            <Link
              href="/contact" aria-current={activeTab === 'contact' ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'contact' ? activeClass : inactiveClass
              }`}
            >
              Contact Us
            </Link>
          </div>


        </div>
      )}
    </nav>
  );
};
