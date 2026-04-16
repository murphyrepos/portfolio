import '@/styles/globals.css';
import Layout from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://murphyrepos.com'),
  title: {
    default: 'Murphy Repos',
    template: '%s | Murphy Repos',
  },
  description: 'Creative solutions for modern businesses',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Layout>{children}</Layout>
    </html>
  );
}

export default RootLayout;
