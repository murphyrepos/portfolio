import type { Metadata } from 'next';
import { redirect, RedirectType } from 'next/navigation';
import { getServerTranslation } from '@/i18n/server';
import { rootMetadata } from '@/utils/seo';

export const metadata: Metadata = {
  ...rootMetadata,
  title: getServerTranslation('siteMeta.title'),
};

// reroute to /home

async function Page() {
  redirect('/home', RedirectType.replace);
}

export default Page;
