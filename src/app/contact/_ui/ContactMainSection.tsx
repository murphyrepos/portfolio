'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  LoaderIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { Container } from '@/components/container';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type ContactPageChannel = {
  key: 'email' | 'phone' | 'address';
  label: string;
  value: string;
};

const channelIconMap: Record<ContactPageChannel['key'], LucideIcon> = {
  email: Mail,
  phone: Phone,
  address: MapPin,
};

const createContactFormSchema = (t: TFunction<'common'>) =>
  z.object({
    fullName: z
      .string({ message: t('contactPage.form.validation.invalidName') })
      .trim()
      .min(2, { message: t('contactPage.form.validation.nameMin') })
      .max(50, { message: t('contactPage.form.validation.nameMax') }),
    email: z
      .string()
      .trim()
      .min(1, { message: t('contactPage.form.validation.emailRequired') })
      .email({ message: t('contactPage.form.validation.invalidEmail') }),
    subject: z
      .string()
      .trim()
      .min(1, { message: t('contactPage.form.validation.subjectRequired') })
      .min(2, { message: t('contactPage.form.validation.subjectMin') })
      .max(120, { message: t('contactPage.form.validation.subjectMax') }),
    number: z.preprocess(
      (value) => {
        if (typeof value !== 'string') {
          return value;
        }

        const trimmedValue = value.trim();
        return trimmedValue.length === 0 ? undefined : trimmedValue;
      },
      z
        .string({ message: t('contactPage.form.validation.invalidPhone') })
        .regex(
          new RegExp('\\d{2,}'),
          t('contactPage.form.validation.phoneRegex')
        )
        .optional()
    ),
    message: z
      .string({ message: t('contactPage.form.validation.messageRequired') })
      .trim()
      .min(10, { message: t('contactPage.form.validation.messageMin') }),
  });

type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;

const infoCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactMainSection = () => {
  const { t } = useTranslation('common');
  const { toast } = useToast();
  const shouldReduceMotion = useReducedMotion();

  const contactFormSchema = React.useMemo(
    () => createContactFormSchema(t),
    [t]
  );

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      number: '',
      message: '',
    },
  });

  const channelsRaw = t('contactPage.information.channels', {
    returnObjects: true,
  });
  const channels = Array.isArray(channelsRaw)
    ? (channelsRaw as ContactPageChannel[])
    : [];

  async function onContactSubmit(data: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      toast({
        title: t('contactPage.form.toasts.successTitle'),
        description: t('contactPage.form.toasts.successDescription'),
      });
      contactForm.reset();
    } catch {
      toast({
        title: t('contactPage.form.toasts.errorTitle'),
        description: t('contactPage.form.toasts.errorDescription'),
      });
    }
  }

  return (
    <section id='contact' className='py-20 lg:pb-24'>
      <Container className='max-w-7xl px-6 lg:px-12'>
        <div className='grid items-start gap-10 lg:grid-cols-2 lg:gap-14'>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          >
            <h4 className='text-2xl leading-tight font-bold text-gray-900 lg:text-4xl'>
              {t('contactPage.form.title')}
            </h4>

            <Form {...contactForm}>
              <form
                onSubmit={contactForm.handleSubmit(onContactSubmit)}
                className='mt-8 space-y-6'
              >
                <FormField
                  control={contactForm.control}
                  name='fullName'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel>
                        {t('contactPage.form.labels.fullName')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='text'
                          placeholder={t(
                            'contactPage.form.placeholders.fullName'
                          )}
                          className='focus-visible:ring-primary/40 h-11 rounded-xl bg-gray-50 px-5 text-gray-900 placeholder:text-gray-500'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel>
                        {t('contactPage.form.labels.email')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder={t('contactPage.form.placeholders.email')}
                          className='focus-visible:ring-primary/40 h-11 rounded-xl bg-gray-50 px-5 text-gray-900 placeholder:text-gray-500'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name='subject'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel>
                        {t('contactPage.form.labels.subject')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='text'
                          placeholder={t(
                            'contactPage.form.placeholders.subject'
                          )}
                          className='focus-visible:ring-primary/40 h-11 rounded-xl bg-gray-50 px-5 text-gray-900 placeholder:text-gray-500'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name='number'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel>
                        {t('contactPage.form.labels.number')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder={t(
                            'contactPage.form.placeholders.number'
                          )}
                          className='focus-visible:ring-primary/40 h-11 rounded-xl bg-gray-50 px-5 text-gray-900 placeholder:text-gray-500'
                          value={field.value ?? ''}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel>
                        {t('contactPage.form.labels.message')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t(
                            'contactPage.form.placeholders.message'
                          )}
                          className='focus-visible:ring-primary/40 min-h-20 rounded-xl bg-gray-50 px-5 text-gray-900 placeholder:text-gray-500'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type='submit'
                  className='group bg-primary-500 hover:bg-primary-600 inline-flex h-11 w-full items-center gap-2 rounded-xl px-8 py-4 text-white transition-colors'
                  disabled={contactForm.formState.isSubmitting}
                >
                  {contactForm.formState.isSubmitting ? (
                    <>
                      <LoaderIcon className='mr-2 h-5 w-5 animate-spin' />
                      {t('contactPage.form.submitting')}
                    </>
                  ) : (
                    <>
                      {t('contactPage.form.submit')}
                      <Send className='ml-2 h-5 w-5' />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            className='space-y-6'
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          >
            <h2 className='text-2xl leading-tight font-bold text-gray-900 lg:text-4xl'>
              {t('contactPage.information.title')}
            </h2>
            <p className='text-base text-gray-600 lg:text-lg'>
              {t('contactPage.information.description')}
            </p>

            <div className='space-y-6'>
              {channels.map((channel, index) => {
                const Icon = channelIconMap[channel.key];

                return (
                  <motion.div
                    key={`${channel.key}-${index}`}
                    variants={shouldReduceMotion ? undefined : infoCardVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    whileInView={shouldReduceMotion ? undefined : 'visible'}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 0.35, delay: index * 0.08 }
                    }
                  >
                    <Card className='flex items-start gap-4 rounded-2xl border-none bg-gray-50 p-5 shadow-none'>
                      <div className='bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white'>
                        <Icon className='h-6 w-6' />
                      </div>
                      <div>
                        <p className='text-lg font-bold text-gray-900'>
                          {channel.label}
                        </p>
                        <p className='mt-1 text-gray-600'>{channel.value}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Card className='rounded-2xl border-0 bg-linear-to-r from-blue-500 to-blue-600 p-8 text-white shadow-none'>
              <h3 className='text-xl leading-tight font-bold lg:text-2xl'>
                {t('contactPage.officeHours.title')}
              </h3>
              <div className='mt-4 space-y-2 text-base lg:text-lg'>
                <p>{t('contactPage.officeHours.weekdays')}</p>
                <p>{t('contactPage.officeHours.saturday')}</p>
                <p>{t('contactPage.officeHours.sunday')}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMainSection;
