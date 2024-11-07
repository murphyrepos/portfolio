import React from 'react';
import NavigationBar from '../nav-bar';
// import { ScrollArea } from '../ui/scroll-area';

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
    // </ScrollArea>
  );
};

export default Layout;
