import React from 'react';
import NavigationBar from '../nav-bar';
import { ScrollArea } from '../ui/scroll-area';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <ScrollArea>
      <div className='min-h-[dvh] min-w-[dvh]'>
        <NavigationBar />
        {children}
      </div>
    </ScrollArea>
  );
};

export default Layout;
