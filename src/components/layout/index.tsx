import React from 'react';
import NavigationBar from '../nav-bar';
import Footer from '../footer';
import { Toaster } from '../ui/toaster';
import I18nProvider from '../i18n-provider';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <I18nProvider>
      <div>
        <NavigationBar />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Layout;
