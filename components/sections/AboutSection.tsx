'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-muted-foreground">
            A brief introduction to who I am and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-space-grotesk font-semibold mb-6">
              Frontend Developer with a passion for creating beautiful user experiences
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I&apos;m Muhammad Talha Naveed, a dedicated Frontend Developer with 2 years of internship experience. I specialize in building responsive, user-friendly web applications using modern technologies like React, Next.js, and TypeScript.
              </p>
              <p>
                My journey in web development began when I discovered my passion for creating visually appealing and functional interfaces. Since then, I&apos;ve been constantly learning and improving my skills to deliver exceptional user experiences.
              </p>
              <p>
                I&apos;m passionate about clean code, performance optimization, and accessibility. I believe that good design should be inclusive and accessible to everyone.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/#contact">
                  <span>Let&apos;s work together</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-1 mb-2">2+</div>
                  <div className="text-lg font-medium">Years Experience</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professional internship experience in frontend development
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-2 mb-2">10+</div>
                  <div className="text-lg font-medium">Projects</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Completed projects, including personal and professional work
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-3 mb-2">15+</div>
                  <div className="text-lg font-medium">Technologies</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Various technologies and frameworks I've worked with
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-chart-4 mb-2">5+</div>
                  <div className="text-lg font-medium">Certifications</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professional certifications in web development and design
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}