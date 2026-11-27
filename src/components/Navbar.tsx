import { BrandMark } from './BrandMark';
import Link from 'next/link';
import { products } from '../data/products';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const activeClass = 'bg-raised text-ink border border-control-line';
  const inactiveClass = 'border border-transparent text-secondary hover:text-ink hover:bg-raised';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on resize.
  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false);
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && navRef.current?.contains(focused) && !focused.getClientRects().length) {
        navRef.current.querySelector<HTMLElement>('#brand-logo')?.focus();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
  };

  const isProductActive = activeTab === 'products' || products.some(product => product.id === activeTab);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
      }}
      onKeyDown={event => {
        if (event.key === 'Escape' && mobileMenuOpen) {
          event.preventDefault();
          mobileButtonRef.current?.focus();
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

          <Link href="/products" aria-current={activeTab === 'products' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${isProductActive ? activeClass : inactiveClass}`}>
            Products
          </Link>

          {(['solutions'] as const).map(tab => (
            <Link key={tab} href={`/${tab}`} aria-current={activeTab === tab ? 'page' : undefined} onNavigate={closeMenus}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${activeTab === tab ? activeClass : inactiveClass}`}>
              Solutions
            </Link>
          ))}

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

          <Link href="/insights" aria-current={activeTab === 'insights' ? 'page' : undefined} onNavigate={closeMenus}
            className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${activeTab === 'insights' ? activeClass : inactiveClass}`}>
            Insights
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
              <Link href="/products" aria-current={activeTab === 'products' ? 'page' : undefined} onNavigate={closeMenus} className={`block text-left px-3 py-2 rounded-lg text-sm font-medium ${isProductActive ? activeClass : inactiveClass}`}>Products</Link>
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

          {(['solutions'] as const).map(tab => (
            <Link key={tab} href={`/${tab}`} aria-current={activeTab === tab ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === tab ? activeClass : inactiveClass}`}>
              Solutions
            </Link>
          ))}

            <Link
              href="/services" aria-current={activeTab === 'services' ? 'page' : undefined} onNavigate={closeMenus}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'services' ? activeClass : inactiveClass
              }`}
            >
              Services
            </Link>

          <Link href="/insights" aria-current={activeTab === 'insights' ? 'page' : undefined} onNavigate={closeMenus}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'insights' ? activeClass : inactiveClass}`}>
            Insights
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
