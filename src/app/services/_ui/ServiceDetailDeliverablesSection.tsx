import {
  AppWindow,
  CheckCircle2,
  Cloud,
  Code2,
  DraftingCompass,
  Layers3,
  Palette,
  Rocket,
  ServerCog,
  Smartphone,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/container';
import { IServiceConstant } from '@/utils/constants/services.constant';
import { Card } from '@/components/ui/card';

interface ServiceDetailDeliverablesSectionProps {
  service: IServiceConstant;
}

function getDeliverableIcon(title: string): LucideIcon {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('interface') || normalizedTitle.includes('(ui)')) {
    return Palette;
  }

  if (normalizedTitle.includes('experience') || normalizedTitle.includes('(ux)')) {
    return UsersRound;
  }

  if (normalizedTitle.includes('responsive') || normalizedTitle.includes('native')) {
    return Smartphone;
  }

  if (
    normalizedTitle.includes('wirefram') ||
    normalizedTitle.includes('prototype')
  ) {
    return DraftingCompass;
  }

  if (normalizedTitle.includes('progressive')) {
    return Rocket;
  }

  if (normalizedTitle.includes('single page') || normalizedTitle.includes('hybrid')) {
    return Layers3;
  }

  if (normalizedTitle.includes('server') || normalizedTitle.includes('api')) {
    return ServerCog;
  }

  if (normalizedTitle.includes('cloud') || normalizedTitle.includes('migration')) {
    return Cloud;
  }

  if (normalizedTitle.includes('platform') || normalizedTitle.includes('saas')) {
    return AppWindow;
  }

  return Code2;
}

const ServiceDetailDeliverablesSection = ({
  service,
}: ServiceDetailDeliverablesSectionProps) => {
  return (
    <section className='bg-white py-20 lg:py-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold leading-tight text-gray-900 lg:text-5xl'>
            What We Deliver
          </h2>
          <p className='mt-5 text-xl text-gray-600'>
            Purpose-built capabilities tailored to your business goals.
          </p>
        </div>

        <div className='mt-14 grid gap-8 lg:grid-cols-2'>
          {service.cards.map((serviceCard) => (
            <Card
              key={serviceCard.title}
              className='hover:border-primary h-full rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-none transition-colors hover:shadow-lg'
            >
              <div className='bg-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white'>
                {(() => {
                  const CardIcon = getDeliverableIcon(serviceCard.title);
                  return <CardIcon className='h-6 w-6' />;
                })()}
              </div>

              <h3 className='text-2xl font-bold text-gray-900 lg:text-3xl'>
                {serviceCard.title}
              </h3>

              <ul className='mt-6 space-y-3'>
                {serviceCard.points.data.map((point) => (
                  <li
                    key={point}
                    className='flex items-start gap-2 text-base text-gray-700'
                  >
                    <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-primary' />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailDeliverablesSection;
