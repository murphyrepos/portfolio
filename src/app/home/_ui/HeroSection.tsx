'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Container } from '@/components/container';
import { Badge } from '@/components/ui/badge';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
  const { t } = useTranslation('common', { keyPrefix: 'home.hero' });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <Container className='max-w-none min-w-full bg-linear-to-br from-blue-100 via-white to-gray-50 px-0 py-16'>
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className='relative flex min-h-screen items-center'
      >
        <Container className='relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col gap-6'
          >
            <Badge className='bg-primary-100 flex max-w-max justify-center gap-2 px-4 py-2'>
              <Sparkles size={16} className='text-primary' />
              <span className='text-primary text-base font-normal'>
                {t('badge')}
              </span>
            </Badge>
            <h1 className='max-w-xl text-5xl leading-[1.05] font-bold text-balance text-gray-900 lg:text-7xl'>
              {t('title')}
            </h1>
            <p className='text-xl text-gray-600'>{t('description')}</p>
            <Container className='flex flex-wrap justify-start gap-4 p-0'>
              <Link
                href='/contact'
                className='hover:bg-primary/70 bg-primary inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white transition-colors'
              >
                {t('primaryCta')}
                <ArrowRight size={18} />
              </Link>
              <Link
                href='/services'
                className='inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-800 transition-colors hover:border-gray-300'
              >
                {t('secondaryCta')}
              </Link>
            </Container>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='h-105 overflow-hidden rounded-4xl md:h-[620px]'>
              <DotLottieReact
                src='/assets/hero.lottie'
                autoplay
                loop
                className='h-full w-full'
              />
            </div>
          </motion.div>
        </Container>
      </motion.section>
    </Container>
  );
};

export default HeroSection;
