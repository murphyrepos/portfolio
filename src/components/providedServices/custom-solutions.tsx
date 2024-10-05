import React from 'react';
import CradLayout from '../servicesCard';
import {
  customerServicesConstants,
  mobDevConstants,
} from '@/utils/constants/services.constant';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';

const CustomerServices = () => {
  return (
    <>
      <ServiceDetailCard data={customerServicesConstants.testominalConstants} />
      <FavoriteChoices data={customerServicesConstants.favourites} />
      <CradLayout data={customerServicesConstants} />
      <Technologies
        techcologies={customerServicesConstants.technologiesConstant}
      />
    </>
  );
};

export default CustomerServices;
