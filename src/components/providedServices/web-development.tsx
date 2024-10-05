import React from 'react';
import CradLayout from '../servicesCard';
import { webDevConstants } from '@/utils/constants/services.constant';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';

const WebDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={webDevConstants.testominalConstants} />
      <FavoriteChoices data={webDevConstants.favourites} />
      <CradLayout data={webDevConstants} />
      <Technologies techcologies={webDevConstants.technologiesConstant} />
    </>
  );
};

export default WebDevelopment;
