// pages/profile/index.tsx
import CardComponent from '@/components/profile-card';
import React from 'react';
import { details } from '@/utils/constants/portfolio.content';

const ProfilePage = () => {
  return (
    <div>
      {details.map(({ title, description, technologies }, index) => {
        return (
          <CardComponent
            key={index}
            title={title}
            description={description}
            technologies={technologies}
          />
        );
      })}
    </div>
  );
};

export default ProfilePage;
