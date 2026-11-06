import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { TagProductView } from './views/TagProductView';
import { AegisProductView } from './views/AegisProductView';
import { ServicesView } from './views/ServicesView';
import { CompanyView } from './views/CompanyView';
import { ContactView } from './views/ContactView';
import { PilotModal } from './components/PilotModal';
import { EvidenceProofModal } from './components/EvidenceProofModal';
import { Footer } from './components/Footer';
import { HardwareNode, NavigationTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedProofNode, setSelectedProofNode] = useState<HardwareNode | null>(null);

  // Sync with URL hash if user refreshes or shares direct link
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'tag', 'aegis-os', 'services', 'company', 'contact'].includes(hash)) {
        setActiveTab(hash as NavigationTab);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Fixed Header with Dropdown Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenPilotModal={() => setIsPilotModalOpen(true)}
      />

      {/* Main Page Content based on Active Section */}
      <main>
        {activeTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
          />
        )}

        {activeTab === 'tag' && (
          <TagProductView
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
            onOpenEvidenceProof={(node) => setSelectedProofNode(node)}
            onNavigateToAegis={() => handleNavigate('aegis-os')}
          />
        )}

        {activeTab === 'aegis-os' && (
          <AegisProductView
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
            onNavigateToTag={() => handleNavigate('tag')}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
          />
        )}

        {activeTab === 'company' && (
          <CompanyView
            onNavigate={handleNavigate}
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            onOpenPilotModal={() => setIsPilotModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPilotModal={() => setIsPilotModalOpen(true)}
      />

      {/* Enterprise Pilot Request Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
      />

      {/* Cryptographic Evidence Proof & Merkle Receipt Modal */}
      <EvidenceProofModal
        node={selectedProofNode}
        onClose={() => setSelectedProofNode(null)}
      />
    </div>
  );
}
