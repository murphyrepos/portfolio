import { type GetServerSideProps } from 'next/types';
import { type ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';
import { PRODUCTION_URL } from '@/utils/helper';

export const getServerSideProps: GetServerSideProps = (ctx) => {
  const baseUrl = PRODUCTION_URL;
  const map: ISitemapField[] = [
    {
      loc: `${baseUrl}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${baseUrl}/services/web-development`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${baseUrl}/services/mobile-development`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${baseUrl}/services/ui-ux-services`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/services/custom-solutions`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${baseUrl}/portfolio`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
  return getServerSideSitemapLegacy(ctx, map);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
