'use client';

import { CompanyView } from '../../views/CompanyView';
import { useSiteActions } from '../../components/SiteShell';

export default function PageContent() {
  const { openPilot } = useSiteActions();
  return <CompanyView onOpenPilotModal={openPilot} />;
}
