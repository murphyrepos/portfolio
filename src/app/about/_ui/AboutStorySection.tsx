'use client';

import { Container } from '@/components/container';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutStorySection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'aboutPage.story' });
  const shouldReduceMotion = useReducedMotion();

  const paragraphsRaw = t('paragraphs', { returnObjects: true });
  const paragraphs = Array.isArray(paragraphsRaw)
    ? (paragraphsRaw as string[])
    : [];

  return (
    <section className='bg-white py-20 lg:pb-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12'>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          >
            <h3 className='text-2xl font-bold text-gray-900'>{t('title')}</h3>
            <div className='text-md mt-6 space-y-5 leading-relaxed text-gray-600 lg:text-lg'>
              {paragraphs.map((paragraph, index) => (
                <p key={`about-story-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          >
            <div className='h-[360px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 lg:h-[500px]'>
              <DotLottieReact
                src='/assets/about-us.lottie'
                autoplay
                loop
                className='h-full w-full'
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStorySection;
