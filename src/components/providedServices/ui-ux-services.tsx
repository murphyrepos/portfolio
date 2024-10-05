import React from 'react';
import CradLayout from '../servicesCard';
import { uiDevConstants } from '@/utils/constants/services.constant';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';

const UiUxDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={uiDevConstants.testominalConstants} />
      <FavoriteChoices data={uiDevConstants.favourites} />
      <CradLayout data={uiDevConstants} />
      <Technologies techcologies={uiDevConstants.technologiesConstant} />
    </>
  );
};

export default UiUxDevelopment;
