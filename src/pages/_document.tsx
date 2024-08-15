import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider } from '@/components/theme-provider';
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
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  );
}
