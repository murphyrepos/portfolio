import type { MetadataRoute } from 'next';
import { PRODUCTION_URL } from '@/utils/helper';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${PRODUCTION_URL}`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/services/web-development`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/services`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/services/mobile-development`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/services/ui-ux-services`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_URL}/services/custom-solutions`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/portfolio`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/workflow`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/about`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/reviews`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${PRODUCTION_URL}/contact`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
