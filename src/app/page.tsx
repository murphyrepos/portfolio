import type { Metadata } from 'next';
import { redirect, RedirectType } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Murphy Repos',
  description:
    'Transform your vision into reality with cutting-edge design and development solutions.',
  alternates: {
    canonical: 'https://murphyrepos.com',
  },
  openGraph: {
    title: 'Murphy Repos',
    description:
      'Transform your vision into reality with cutting-edge design and development solutions.',
    url: 'https://murphyrepos.com',
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

// reroute to /home

async function Page() {
  redirect('/home', RedirectType.replace);
}

export default Page;
