import { Container } from '@/components/container';
import { IServiceConstant } from '@/utils/constants/services.constant';
import { Card } from '@/components/ui/card';

interface ServiceDetailTechnologySectionProps {
  service: IServiceConstant;
}

const ServiceDetailTechnologySection = ({
  service,
}: ServiceDetailTechnologySectionProps) => {
  return (
    <section className='bg-gray-50 py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold leading-tight text-gray-900 lg:text-5xl'>
            Technology Stack
          </h2>
          <p className='mt-5 text-xl text-gray-600'>
            Modern tools and frameworks we use to build reliable products.
          </p>
        </div>

        <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
          {service.technologiesConstant.data.map((technology) => (
            <span
              key={technology}
              className='bg-primary-100 text-primary-700 rounded-full border border-blue-200 px-4 py-2 text-base font-medium'
            >
              {technology}
            </span>
          ))}
        </div>

        <div className='mx-auto mt-14 max-w-5xl'>
          <h3 className='text-center text-3xl font-bold text-gray-900 lg:text-4xl'>
            Our Favorite Choices
          </h3>
          <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
            {service.favorites.map((favorite) => (
              <Card
                key={favorite}
                className='hover:border-primary h-full rounded-2xl border border-gray-200 px-4 py-5 text-center shadow-none transition-colors hover:shadow-lg'
              >
                <p className='text-base font-semibold text-gray-800 lg:text-lg'>
                  {favorite}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailTechnologySection;
