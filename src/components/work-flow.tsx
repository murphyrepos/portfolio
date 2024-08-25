import React from 'react';
import WorkFlowCard from './work-flow-card';
import Icons from './icons';

const WorkFlow = () => {
  return (
    <div
      className='mx-auto flex w-full flex-col bg-neutral-100 py-20'
      data-scroll-section
    >
      <div className='mx-auto flex w-[90%] flex-col items-center justify-center space-y-10'>
        <p className='text-2xl font-semibold'>How Murphy Repos Works</p>
        <div className='flex flex-col items-center justify-between md:flex-row md:flex-wrap xl:flex-nowrap'>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-0 z-10'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard
              descriptionClassNames='text-justify'
              invertColor
              title={'Assessment'}
              description="We start by sitting down with potential clients to really understand their business goals. We have in-depth conversations to figure out what they need, what challenges they're facing, and what they hope to achieve with our software. It's essential to get a clear picture of their requirements so we can tailor the solution perfectly."
            />
          </div>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-16 z-10 -scale-y-100'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard
              descriptionClassNames='text-justify'
              title='Development'
              description={
                "Once we have a solid understanding of the client's needs, We dive into the development process. We design the user interface, write the code, and integrate different components. It's an iterative process, so we can make adjustments along the way based on feedback. Once the software is ready, we implement it in the client's environment, ensuring a smooth transition."
              }
            />
          </div>
          <div className='relative md:basis-1/2 xl:basis-1/4'>
            {/* <div className='absolute left-44 top-0 z-10'>
              <Icons.arrows className='p-1 text-primary' />
            </div> */}
            <WorkFlowCard
              descriptionClassNames='text-justify'
              invertColor
              title='Quality Assurance'
              description="Quality is a top priority for us. Throughout the development process, we conduct rigorous testing to identify and fix any bugs. We make sure the software is compatible with different systems and meets all the functional requirements. Our goal is to deliver a product that is reliable and meets the client's expectations."
            />
          </div>
          <div className='md:basis-1/2 xl:basis-1/4'>
            <WorkFlowCard
              descriptionClassNames='text-justify'
              invertColor
              title='Maintenance'
              description="Even after the software is deployed, our commitment to the client doesn't end. We provide ongoing maintenance and support services, including updates, troubleshooting, and ensuring the software remains functional. We maintain regular communication with the client to build a strong relationship and address any concerns they may have."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
