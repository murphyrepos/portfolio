import FavoriteChoices from '@/components/favorite-choices';
import HeroSection from '@/components/hero-section';
import ServiceApplicationType from '@/components/service-application-type';
import ServiceDetailCard from '@/components/service-detail-card';
import Technologies from '@/components/technologies';
import React from 'react';

const Service = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center space-y-14'>
      <ServiceDetailCard />
      <FavoriteChoices />
      <ServiceApplicationType />
      <Technologies />
    </div>
  );
};

export default Service;
