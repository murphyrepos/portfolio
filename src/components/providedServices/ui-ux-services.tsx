import React from 'react';
import CradLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { uiDevConstants } from 'src/utils/constants/services.constant';

const UiUxDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={uiDevConstants.testominalConstants} />
      <FavoriteChoices data={uiDevConstants.favourites} />
      <CradLayout cards={uiDevConstants.cards} />
      <Technologies techcologies={uiDevConstants.technologiesConstant} />
    </>
  );
};

export default UiUxDevelopment;
