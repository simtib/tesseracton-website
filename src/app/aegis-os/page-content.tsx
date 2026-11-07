'use client';

import { AegisProductView } from '../../views/AegisProductView';
import { useSiteActions } from '../../components/SiteShell';

export default function PageContent() {
  const { openPilot } = useSiteActions();
  return <AegisProductView onOpenPilotModal={openPilot} />;
}
