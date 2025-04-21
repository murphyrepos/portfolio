import React from 'react';
import { ArrowRight } from 'lucide-react';

import ContactForm from './contact-form';
import { cn } from '@/lib/utils';

interface FooterProps {
  invertColors?: boolean;
}
const Footer = ({ invertColors }: FooterProps) => {
  return (
    <div
      className={cn(
        'mb-0 mt-10 flex w-full flex-col items-center justify-center bg-neutral-100 py-16',
        invertColors && 'bg-white'
      )}
      id='footer'
    >
      <div className='mx-auto flex h-full w-[90%] max-w-7xl flex-col items-center justify-between md:flex-row lg:space-x-5'>
        <div className='flex w-full flex-col items-start justify-center space-y-6 md:mx-5 md:w-1/2'>
          <div className='flex w-full flex-col items-center justify-center space-y-6 md:w-[100%]'>
            <p className='text-center text-2xl md:text-left md:text-5xl'>
              We will get back to you soon!
            </p>
            <div className='my-8 flex flex-col space-y-4 text-muted-foreground'>
              <div className='my-4 grid grid-cols-12 text-center md:text-left'>
                <ArrowRight
                  className='col-span-1 mt-1 text-primary'
                  size={18}
                />
                <p className='col-span-10 ml-2'>
                  Leave the required information and your queries in the given
                  contact us form.
                </p>
              </div>
              <div className='my-4 grid grid-cols-12 text-center md:text-left'>
                <ArrowRight
                  className='col-span-1 mt-1 text-primary'
                  size={18}
                />
                <p className='col-span-10 ml-2'>
                  Our team will reach you out with the relevant information
                  about your query
                </p>
              </div>
              <div className='my-4 grid grid-cols-12 text-center md:text-left'>
                <ArrowRight
                  className='col-span-1 mt-1 text-primary'
                  size={18}
                />
                <p className='col-span-10 ml-2'>
                  Our team is 24/7 available to assist, address your queries,
                  explore new opportunities to provide some value and turn your
                  ideas into digital reality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-2 mt-10 flex w-full items-center justify-center md:relative md:mx-5 md:mt-0 md:w-1/2 md:justify-end'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
