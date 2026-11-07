import type { MetadataRoute } from 'next';
import { routes } from '../lib/routes';
import { siteUrl } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes).map(path => ({ url: new URL(path, siteUrl).href }));
}
