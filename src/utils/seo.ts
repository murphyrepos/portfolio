import type { Metadata } from 'next';
import common from '@/locales/en/common.json';
import { PRODUCTION_URL } from '@/utils/helper';

type PageMeta = {
  title: string;
  description: string;
  openGraphTitle: string;
};

const siteMeta = common.siteMeta;
const siteName = siteMeta.title;
const defaultImage = '/logos/white.png';
const defaultKeywords = [
  'Murphy Repos',
  'web development agency',
  'mobile app development',
  'UI UX design',
  'software development',
  'digital product agency',
];

export const siteUrl = PRODUCTION_URL;

export function createPageMetadata(path: string, pageMeta: PageMeta): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageMeta.openGraphTitle,
      description: pageMeta.description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.openGraphTitle,
      description: pageMeta.description,
      images: [defaultImage],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteMeta.description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: defaultKeywords,
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteMeta.openGraphTitle,
    description: siteMeta.description,
    url: siteUrl,
    siteName,
    type: 'website',
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.openGraphTitle,
    description: siteMeta.description,
    images: [defaultImage],
  },
};

export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logos/white.png`,
    email: 'hello@murphyrepos.com',
    foundingDate: '2024',
    description: siteMeta.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: siteMeta.description,
    publisher: {
      '@type': 'Organization',
      name: siteName,
    },
  },
];
