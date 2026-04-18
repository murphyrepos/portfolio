import '@/styles/styles.css';
import Layout from '@/components/layout';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

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
      <body className={spaceGrotesk.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default RootLayout;
