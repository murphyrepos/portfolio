import React from 'react';
import CardLayout from './services-card';
import { webDevConstants } from '@/utils/constants/services.constant';

const ServiceApplicationType = () => {
  return <CardLayout cards={webDevConstants} />;
};

export default ServiceApplicationType;
