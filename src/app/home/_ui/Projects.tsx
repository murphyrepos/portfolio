'use client';

import { Container } from '@/components/container';
import { details } from '@/utils/constants/portfolio.content';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const featuredProjects = [
  { key: 'cureforu', image: details[0].image },
  { key: 'nalaPrep', image: details[2].image },
  { key: 'savora', image: details[3].image },
  { key: 'strike', image: details[4].image },
] as const;

const Projects = () => {
  const { t } = useTranslation('common', { keyPrefix: 'home.projects' });

  return (
    <section className='bg-gray-50 py-16'>
      <Container className='px-6 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 text-4xl font-bold text-gray-900 lg:text-5xl'>
            {t('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            {t('description')}
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='cursor-pointer'
            >
              <Link href='/portfolio' className='group block'>
                <div className='relative overflow-hidden rounded-2xl shadow-lg'>
                  <Image
                    src={project.image}
                    alt={t(`items.${project.key}.title`)}
                    className='h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent'>
                    <div className='p-6 text-white'>
                      <p className='text-primary-300 mb-2 text-sm'>
                        {t(`items.${project.key}.category`)}
                      </p>
                      <h3 className='text-2xl font-bold'>
                        {t(`items.${project.key}.title`)}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 text-center'
        >
          <Link
            href='/contact'
            className='group bg-primary-500 hover:bg-primary-600 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-white transition-colors'
          >
            {t('cta')}
            <ArrowRight
              size={20}
              className='transition-transform group-hover:translate-x-1'
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
