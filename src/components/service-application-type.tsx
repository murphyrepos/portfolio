import React from 'react';
import CradLayout from './servicesCard';
import { webDevConstants } from '@/utils/constants/services.constant';

const ServiceApplicationType = () => {
  return <CradLayout data={webDevConstants} />;
};

export default ServiceApplicationType;
