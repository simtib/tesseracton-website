'use client';

import { HomeView } from '../views/HomeView';
import { useSiteActions } from '../components/SiteShell';

export default function PageContent() {
  const { openPilot } = useSiteActions();
  return <HomeView onOpenPilotModal={openPilot} />;
}
