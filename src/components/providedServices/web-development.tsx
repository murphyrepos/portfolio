import React from 'react';
import CardLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { webDevConstants } from 'src/utils/constants/services.constant';

const WebDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={webDevConstants.testimonialConstants} />
      <FavoriteChoices data={{ data: webDevConstants.favorites }} />
      <CardLayout cards={{ cards: webDevConstants.cards }} />
      <Technologies data={webDevConstants.technologiesConstant} />
    </>
  );
};

export default WebDevelopment;
