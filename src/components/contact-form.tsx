import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { z } from 'zod';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, FormMessage, Form } from './ui/form';
import { Textarea } from './ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Button } from './ui/button';

const ContactForm = () => {
  const { toast } = useToast();
  const contactForm = useForm<Contact>({
    resolver: zodResolver(contactFormSchema),
  });

  function onContactSubmit(data: Contact) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Card className='w-full flex-col items-center justify-center rounded-2xl bg-white px-5 py-6 md:absolute md:-top-80'>
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
            render={({ field, fieldState: { invalid } }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='text'
                    className={cn(
                      'h-14 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0'
                    )}
                    placeholder='Full Name'
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
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='text'
                    className={cn(
                      'h-12 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0'
                    )}
                    placeholder='Email'
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
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    type='number'
                    className={cn(
                      'h-14 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0'
                    )}
                    placeholder='Phone'
                    {...field}
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
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='Message'
                    className={cn(
                      'min-h-28 w-full border-none bg-neutral-100 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:outline-0 focus-visible:ring-0'
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Submit Now
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
    .min(2)
    .max(50),
  email: z
    .string({
      required_error: 'Please enter your email address',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  number: z.string({
    message: 'Please enter a valid number',
  }),
  message: z.string({
    message: 'Please enter a message',
  }),
});

type Contact = z.infer<typeof contactFormSchema>;
