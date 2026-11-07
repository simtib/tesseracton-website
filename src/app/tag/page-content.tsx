'use client';

import { TagProductView } from '../../views/TagProductView';
import { useSiteActions } from '../../components/SiteShell';

export default function PageContent() {
  const { openPilot, openEvidence } = useSiteActions();
  return <TagProductView onOpenPilotModal={openPilot} onOpenEvidenceProof={openEvidence} />;
}
