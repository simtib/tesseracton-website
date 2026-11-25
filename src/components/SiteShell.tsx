'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PilotModal } from './PilotModal';
import { EvidenceProofModal } from './EvidenceProofModal';
import { routes } from '../lib/routes';
import type { HardwareNode, NavigationTab } from '../types';

interface SiteActions {
  openPilot: () => void;
  openEvidence: (node: HardwareNode) => void;
}
const SiteContext = createContext<SiteActions | null>(null);

export function useSiteActions() {
  const actions = useContext(SiteContext);
  if (!actions) throw new Error('Site actions require SiteShell.');
  return actions;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedProofNode, setSelectedProofNode] = useState<HardwareNode | null>(null);
  const activeTab = (Object.keys(routes) as NavigationTab[]).find(tab => routes[tab] === pathname);

  useEffect(() => {
    // Hashes are never sent to the server. Upgrade old shared links after hydration.
    const migrateHash = () => {
      const tab = window.location.hash.slice(1).toLowerCase();
      if (Object.hasOwn(routes, tab)) router.replace(routes[tab as NavigationTab]);
    };
    migrateHash();
    window.addEventListener('hashchange', migrateHash);
    return () => window.removeEventListener('hashchange', migrateHash);
  }, [router]);

  return (
    <SiteContext.Provider value={{ openPilot: () => setIsPilotModalOpen(true), openEvidence: setSelectedProofNode }}>
      <div className="min-h-screen bg-canvas text-ink selection:bg-action selection:text-ink font-sans antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar key={pathname} activeTab={activeTab} onOpenPilotModal={() => setIsPilotModalOpen(true)} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <PilotModal isOpen={isPilotModalOpen} onClose={() => setIsPilotModalOpen(false)} />
        <EvidenceProofModal node={selectedProofNode} onClose={() => setSelectedProofNode(null)} />
      </div>
    </SiteContext.Provider>
  );
}
