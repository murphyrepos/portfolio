import React from 'react';
import CardLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { mobDevConstants } from 'src/utils/constants/services.constant';

const MobileDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={mobDevConstants.testimonialConstants} />
      <FavoriteChoices data={{ data: mobDevConstants.favorites }} />
      <CardLayout cards={{ cards: mobDevConstants.cards }} />
      <Technologies data={mobDevConstants.technologiesConstant} />
    </>
  );
};

export default MobileDevelopment;
