import { pageMetadata } from '../../lib/seo';
import PageContent from './page-content';

export const metadata = pageMetadata('company');

export default function Page() {
  return <PageContent />;
}
