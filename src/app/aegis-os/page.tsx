import { pageMetadata } from '../../lib/seo';
import PageContent from './page-content';

export const metadata = pageMetadata('aegis-os');

export default function Page() {
  return <PageContent />;
}
