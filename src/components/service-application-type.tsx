import React from 'react';
import CardLayout from './servicesCard';
import { webDevConstants } from '@/utils/constants/services.constant';

const ServiceApplicationType = () => {
  return <CardLayout cards={webDevConstants} />;
};

export default ServiceApplicationType;
