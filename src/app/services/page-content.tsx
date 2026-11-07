'use client';

import { ServicesView } from '../../views/ServicesView';
import { useSiteActions } from '../../components/SiteShell';

export default function PageContent() {
  const { openPilot } = useSiteActions();
  return <ServicesView onOpenPilotModal={openPilot} />;
}
