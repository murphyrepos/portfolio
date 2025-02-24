import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';
import AnimatedCursor from 'react-animated-cursor';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spaceGrotesk.className}>
      <AnimatedCursor
        // innerSize={5}
        outerSize={25}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0.1}
        color='37, 99, 235'
        outerStyle={{
          border: '1px solid hsl(var(--primary))',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
