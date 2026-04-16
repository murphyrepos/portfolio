import Link from 'next/link';
import { Container } from '@/components/container';
import { IServiceConstant } from '@/utils/constants/services.constant';

interface ServiceDetailHeroSectionProps {
  service: IServiceConstant;
  ServiceIcon: React.ComponentType<{ className?: string }>;
}

const ServiceDetailHeroSection = ({
  service,
  ServiceIcon,
}: ServiceDetailHeroSectionProps) => {
  return (
    <section className='bg-gray-50 py-24 pt-40'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='bg-primary mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white'>
            <ServiceIcon className='h-8 w-8' />
          </div>

          <h1 className='text-5xl leading-[1.05] font-bold text-balance text-gray-900 lg:text-7xl'>
            {service.testimonialConstants.title}
          </h1>
          <p className='mx-auto mt-5 max-w-4xl text-xl text-gray-600 lg:text-2xl'>
            {service.testimonialConstants.description}
          </p>

          <div className='mt-8 flex items-center justify-center'>
            <Link
              href='/home#contact'
              className='bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-xl px-8 py-3 text-lg font-semibold text-white transition-colors'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailHeroSection;
