import React from 'react';
import NavigationBar from '../nav-bar';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-[dvh] min-w-[dvh]'>
      <div className='fixed left-1/2 top-5 z-50 -translate-x-1/2 transform rounded-full bg-[#f6f6f6] bg-opacity-30 backdrop-blur-sm md:left-5 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2'>
        <NavigationBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
