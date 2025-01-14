import React from 'react';
import NavigationBar from '../nav-bar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // <ScrollArea>
    <div className='relative'>
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
