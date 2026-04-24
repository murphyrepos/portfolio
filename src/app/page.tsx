import type { Metadata } from 'next';
import { redirect, RedirectType } from 'next/navigation';
import common from '@/locales/en/common.json';
import { rootMetadata } from '@/utils/seo';

const siteMeta = common.siteMeta;

export const metadata: Metadata = {
  ...rootMetadata,
  title: siteMeta.title,
};

// reroute to /home

async function Page() {
  redirect('/home', RedirectType.replace);
}

export default Page;
