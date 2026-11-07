import { pageMetadata } from '../lib/seo';
import PageContent from './page-content';

export const metadata = pageMetadata('home');

export default function Page() {
  return <PageContent />;
}
