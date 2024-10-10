// pages/profile/index.tsx

import React from 'react';
import { details } from '@/utils/constants/portfolio.content';
import CardComponent from '@/components/portfolio-projects-card';

const ProfilePage = () => {
  return (
    <div>
      {details.map(({ title, description, technologies }, index) => {
        return (
          <CardComponent
            key={index}
            title={title}
            description={description}
            technologies={{ data: technologies }}
          />
        );
      })}
    </div>
  );
};

export default ProfilePage;
