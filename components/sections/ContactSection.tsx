'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser'; // <- Import emailjs
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
} from 'lucide-react';

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_29i387d',  // ✨ Replace with your Service ID
        'template_7x9lgw5', // 🔥 Replace this with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        '3-LrI7_sLt4G5E2Fs'  // 🔥 Replace this with your EmailJS public key
      );

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I will get back to you soon.',
      });

      form.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      toast.error('Something went wrong!', {
        description: 'Unable to send your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-muted-foreground">
            Have a project in mind? Lets&apos; discuss how I can help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left side Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-space-grotesk font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out if you have any questions or want to work together. I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="lg:justify-between lg:flex space-y-6 lg:space-y-0">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:ctalha512@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      ctalha512@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+923114439901" className="text-muted-foreground hover:text-primary transition-colors">
                      +923114439901
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-medium mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {/* Github, LinkedIn, Twitter icons here */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
             
          </motion.div>
        </div>
      </div>
    </section>
  );
}




