import React from 'react';
import CradLayout from '../servicesCard';
import { mobDevConstants } from '@/utils/constants/services.constant';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';

const MobileDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={mobDevConstants.testominalConstants} />
      <FavoriteChoices data={mobDevConstants.favourites} />
      <CradLayout data={mobDevConstants} />
      <Technologies techcologies={mobDevConstants.technologiesConstant} />
    </>
  );
};

export default MobileDevelopment;
