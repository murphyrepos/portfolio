import React from 'react';
import CradLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { webDevConstants } from 'src/utils/constants/services.constant';

const WebDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={webDevConstants.testominalConstants} />
      <FavoriteChoices data={webDevConstants.favourites} />
      <CradLayout cards={webDevConstants.cards} />
      <Technologies techcologies={webDevConstants.technologiesConstant} />
    </>
  );
};

export default WebDevelopment;
