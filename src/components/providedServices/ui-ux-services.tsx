import React from 'react';
import CardLayout from '../servicesCard';
import ServiceDetailCard from '../service-detail-card';
import Technologies from '../technologies';
import FavoriteChoices from '../favorite-choices';
import { uiDevConstants } from 'src/utils/constants/services.constant';

const UiUxDevelopment = () => {
  return (
    <>
      <ServiceDetailCard data={uiDevConstants.testimonialConstants} />
      <FavoriteChoices data={{ data: uiDevConstants.favorites }} />
      <CardLayout cards={{ cards: uiDevConstants.cards }} />
      <Technologies data={uiDevConstants.technologiesConstant} />
    </>
  );
};

export default UiUxDevelopment;
