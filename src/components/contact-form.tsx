'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { z } from 'zod';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, Form, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation('common');

  const contactFormSchema = React.useMemo(() => createContactFormSchema(t), [t]);

  const contactForm = useForm<Contact>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  async function sendEmail(data: Contact) {
    const apiEndpoint = '/api/contact';
    try {
      await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: t('contactForm.toasts.errorTitle'),
        description: t('contactForm.toasts.errorDescription'),
      });
    } catch {
      toast({
        title: t('contactForm.toasts.errorTitle'),
        description: t('contactForm.toasts.errorDescription'),
      });
    }
  }

  async function onContactSubmit(data: Contact) {
    await sendEmail(data);
    contactForm.setValue('fullName', '');
    contactForm.setValue('email', '');
    contactForm.setValue('number', '');
    contactForm.setValue('message', '');
  }
  return (
    <Card className='w-[90%] flex-col items-center justify-center rounded-2xl bg-white px-5 py-6 lg:absolute lg:-top-80 lg:!max-w-md'>
      <p className='my-1 text-center text-xl text-primary'>
        {t('contactForm.pretitle')}
      </p>
      <p className='text-neutral-foreground my-1 text-center text-2xl'>
        {t('contactForm.title')}
      </p>
      <Form {...contactForm}>
        <form
          onSubmit={contactForm.handleSubmit(onContactSubmit)}
          className='mt-4 flex w-full flex-col items-center justify-center space-y-4'
        >
          <FormField
            control={contactForm.control}
            name='fullName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='text'
                    className={cn(
                      'h-14 w-full border-none bg-neutral-100 outline-none ring-0 focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                    )}
                    placeholder={t('contactForm.placeholders.fullName')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='px-2' />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='text'
                    className={cn(
                      'h-12 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                    )}
                    placeholder={t('contactForm.placeholders.email')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='px-2' />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name='number'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='number'
                    className={cn(
                      'h-14 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                    )}
                    placeholder={t('contactForm.placeholders.phone')}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='px-2' />
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder={t('contactForm.placeholders.message')}
                    className={cn(
                      'min-h-28 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage className='px-2' />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full'
            disabled={contactForm.formState.isSubmitting}
          >
            {contactForm.formState.isSubmitting ? (
              <>
                <LoaderIcon className='mr-2 animate-spin' />
                {t('contactForm.submitting')}
              </>
            ) : (
              t('contactForm.submit')
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;

const createContactFormSchema = (t: TFunction<'common'>) =>
  z.object({
    fullName: z
      .string({
        message: t('contactForm.validation.invalidName'),
      })
      .min(2, {
        message: t('contactForm.validation.nameMin'),
      })
      .max(50, {
        message: t('contactForm.validation.nameMax'),
      }),
    email: z
      .string()
      .min(1, {
        message: t('contactForm.validation.emailRequired'),
      })
      .email({
        message: t('contactForm.validation.invalidEmail'),
      }),
    number: z
      .string({
        message: t('contactForm.validation.invalidPhone'),
      })
      .regex(new RegExp('\\d{2,}'), t('contactForm.validation.phoneRegex'))
      .optional(),
    message: z.string({
      message: t('contactForm.validation.messageRequired'),
    }),
  });

type Contact = z.infer<ReturnType<typeof createContactFormSchema>>;
