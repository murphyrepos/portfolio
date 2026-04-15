import React from 'react';
import NavigationBar from '../nav-bar';
import Footer from '../footer';
import { Space_Grotesk } from 'next/font/google';
import { Toaster } from '../ui/toaster';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${spaceGrotesk.className} flex min-h-screen flex-col`}>
      <NavigationBar />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
