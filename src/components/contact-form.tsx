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

const ContactForm = () => {
  const { toast } = useToast();

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
        title: 'Aww Snap!',
        description:
          'Looks like we are having some trouble. Please try again later.',
      });
    } catch {
      toast({
        title: 'Aww Snap!',
        description:
          'Looks like we are having some trouble. Please try again later.',
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
    <Card className='w-full !max-w-md flex-col items-center justify-center rounded-2xl bg-white px-5 py-6 md:-top-80 xl:absolute'>
      <p className='my-1 text-center text-xl text-primary'>Say Hello</p>
      <p className='text-neutral-foreground my-1 text-center text-2xl'>
        Contact Us
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
                    placeholder='Full Name'
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
                    placeholder='Email'
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
                    placeholder='Phone'
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
                    placeholder='Message'
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
              <LoaderIcon className='mr-2 animate-spin' />
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;

const contactFormSchema = z.object({
  fullName: z
    .string({
      message: 'Please enter a valid name',
    })
    .min(2, {
      message: 'Name should be at least 2 characters',
    })
    .max(50, {
      message: 'Name should be at most 50 characters',
    }),
  email: z
    .string({
      required_error: 'Please enter your email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  number: z
    .string({
      message: 'Please enter a valid number',
    })
    .regex(new RegExp('\\d{2,}'), 'Please enter a valid phone')
    .optional(),
  message: z.string({
    message: 'Please enter a message',
  }),
});

// .regex(new RegExp('[d]{2,}'), 'Please enter valid phone')
// example of regex for phone number validation
// .regex(new RegExp('^[0-9]{10}$'), 'Please enter valid phone')
// 0-9: any digit between 0 and 9
type Contact = z.infer<typeof contactFormSchema>;
