'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '@/lib/redux/hooks';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export function ExperienceSection() {
  const { experiences } = useAppSelector((state) => state.experience);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-muted-foreground">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-muted space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] bg-background p-1.5 rounded-full border-2 border-muted">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-xl font-space-grotesk font-bold">{experience.position}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                    </div>
                    <p className="text-lg font-medium text-muted-foreground">{experience.company}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{experience.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-chart-1 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-muted/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}