import '@/styles/styles.css';
import Layout from '@/components/layout';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { rootMetadata, structuredData } from '@/utils/seo';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = rootMetadata;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default RootLayout;
