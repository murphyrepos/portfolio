import React from 'react';
import CardLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { customerServicesConstants } from 'src/utils/constants/services.constant';

const CustomerServices = () => {
  return (
    <>
      <ServiceDetailCard
        data={customerServicesConstants.testimonialConstants}
      />
      <FavoriteChoices data={{ data: customerServicesConstants.favorites }} />
      <CardLayout cards={{ cards: customerServicesConstants.cards }} />
      <Technologies data={customerServicesConstants.technologiesConstant} />
    </>
  );
};

export default CustomerServices;
