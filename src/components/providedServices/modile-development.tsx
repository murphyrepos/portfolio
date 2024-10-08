import React from 'react';
import CradLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { mobDevConstants } from 'src/utils/constants/services.constant';

const MobileDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={mobDevConstants.testominalConstants} />
      <FavoriteChoices data={mobDevConstants.favourites} />
      <CradLayout cards={mobDevConstants.cards} />
      <Technologies techcologies={mobDevConstants.technologiesConstant} />
    </>
  );
};

export default MobileDevelopment;
