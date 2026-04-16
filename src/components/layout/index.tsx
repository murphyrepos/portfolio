import React from 'react';
import NavigationBar from '../nav-bar';
import Footer from '../footer';
import { Space_Grotesk } from 'next/font/google';
import { Toaster } from '../ui/toaster';
import I18nProvider from '../i18n-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <body className={spaceGrotesk.className}>
      <I18nProvider>
        <div>
          <NavigationBar />
          <Toaster />
          <main>{children}</main>
          <Footer />
        </div>
      </I18nProvider>
    </body>
  );
};

export default Layout;
