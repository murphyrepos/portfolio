import React from 'react';
import CardComponent from '@/components/portfolio-projects-card';
import { details } from '@/utils/constants/portfolio.content';

const Portfolio = () => {
  return (
    <div className='flex min-h-dvh w-full flex-col items-center justify-start space-y-10 bg-neutral-100 px-6 py-16 lg:px-16'>
      {details.map((detail, index) => (
        <CardComponent
          key={index}
          title={detail.title}
          description={detail.description}
          technologies={detail.technologies}
          image={detail.image}
        />
      ))}
    </div>
  );
};

export default Portfolio;
