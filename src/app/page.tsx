import type { Metadata } from 'next';
import { redirect, RedirectType } from 'next/navigation';
import common from '@/locales/en/common.json';

const siteMeta = common.siteMeta;

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: siteMeta.canonical,
  },
  openGraph: {
    title: siteMeta.openGraphTitle,
    description: siteMeta.description,
    url: siteMeta.canonical,
    siteName: siteMeta.title,
    type: 'website',
  },
};

// reroute to /home

async function Page() {
  redirect('/home', RedirectType.replace);
}

export default Page;
