import React from 'react';
import CradLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { customerServicesConstants } from 'src/utils/constants/services.constant';

const CustomerServices = () => {
  return (
    <>
      <ServiceDetailCard data={customerServicesConstants.testominalConstants} />
      <FavoriteChoices data={customerServicesConstants.favourites} />
      <CradLayout cards={customerServicesConstants.cards} />
      <Technologies
        techcologies={customerServicesConstants.technologiesConstant}
      />
    </>
  );
};

export default CustomerServices;