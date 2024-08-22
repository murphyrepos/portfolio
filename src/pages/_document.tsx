import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <Main />
          <Toaster />
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  );
}
