import { pageMetadata } from '../../lib/seo';
import PageContent from './page-content';

export const metadata = pageMetadata('tag');

export default function Page() {
  return <PageContent />;
}
