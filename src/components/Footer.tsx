import { BrandMark } from './BrandMark';
import Link from 'next/link';
import React from 'react';
import { products } from '../data/products';

export const Footer = () => {
  return (
    <footer className="site-footer phase-one text-muted text-sm">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-line">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
          <BrandMark /><span className="brand-name">Tesseracton</span>
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              AI infrastructure operations, asset intelligence, hardware assurance, and AI execution governance. Four independent products designed to work together.
            </p>

          </div>

          {/* Products Col */}
          <div className="space-y-3">
            <h4 className="type-label text-ink">
              <Link href="/products" className="hover:text-ink transition-colors">Products</Link>
            </h4>
            <ul className="space-y-2 text-sm">
              {products.map(product => <li key={product.id}><Link href={product.href} className="hover:text-ink text-secondary transition-colors">{product.name}</Link></li>)}
            </ul>
          </div>

          {/* Solutions & Services Col */}
          <div className="space-y-3">
            <h4 className="type-label text-ink">
              Solutions & Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-ink transition-colors cursor-pointer text-secondary hover:text-ink"
                >
                  Solutions &amp; Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-ink transition-colors cursor-pointer text-muted hover:text-ink"
                >
                  Air-Gapped Sovereign Deployment
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-ink transition-colors cursor-pointer text-muted hover:text-ink"
                >
                  Custom PCR Baseline Audits
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-ink transition-colors cursor-pointer text-muted hover:text-ink"
                >
                  EU AI Act Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact Col */}
          <div className="space-y-3">
            <h4 className="type-label text-ink">
              Company & Inquiries
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/insights" className="hover:text-ink text-secondary transition-colors">Insights</Link></li>
              <li>
                <Link
                  href="/company"
                  className="hover:text-ink transition-colors cursor-pointer text-secondary hover:text-ink"
                >
                  About Tesseracton
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-ink transition-colors cursor-pointer text-secondary hover:text-ink"
                >
                  Contact Security Architects
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <div>
            &copy; 2026 Tesseracton Inc. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
