// Updated CardComponent.tsx
import React from 'react';
import { CardProps } from './type';

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className='m-6 mx-auto max-w-4xl rounded-lg border bg-white p-6 shadow-md'>
      <h2 className='mb-2 text-2xl font-semibold'>{title}</h2>
      <p className='mb-4 text-gray-600'>{description}</p>
      <h3 className='mb-1 font-semibold'>Technologies</h3>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
