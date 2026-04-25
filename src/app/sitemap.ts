import type { MetadataRoute } from 'next';
import { siteUrl } from '@/utils/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: '/home', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/workflow', priority: 0.8 },
    { path: '/about', priority: 0.8 },
    { path: '/reviews', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }));
}
