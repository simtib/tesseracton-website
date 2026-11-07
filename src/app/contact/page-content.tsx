'use client';

import { ContactView } from '../../views/ContactView';
import { useSiteActions } from '../../components/SiteShell';

export default function PageContent() {
  const { openPilot } = useSiteActions();
  return <ContactView onOpenPilotModal={openPilot} />;
}
