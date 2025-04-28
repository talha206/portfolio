'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { 
  filterProjectsByCategory, 
  resetProjectFilter, 
  selectProject,
  clearSelectedProject
} from '@/lib/redux/projectsSlice';
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { 
  ExternalLink, 
  Github,
  X 
} from 'lucide-react';

export function ProjectsSection() {
  const { projects, filteredCategory, selectedProject } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  
  const filterProjects = (category: string | null) => {
    if (category === filteredCategory) {
      dispatch(resetProjectFilter());
    } else {
      dispatch(filterProjectsByCategory(category));
    }
  };

  const handleSelectProject = (id: number) => {
    dispatch(selectProject(id));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedProject());
  };

  const displayedProjects = filteredCategory 
    ? projects.filter(project => project.category.includes(filteredCategory))
    : projects;

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-muted-foreground">
            A showcase of my recent development work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <Button 
            variant={filteredCategory === null ? "default" : "outline"} 
            onClick={() => filterProjects(null)}
          >
            All
          </Button>
          <Button 
            variant={filteredCategory === 'frontend' ? "default" : "outline"} 
            onClick={() => filterProjects('frontend')}
          >
            Frontend
          </Button>
          <Button 
            variant={filteredCategory === 'backend' ? "default" : "outline"} 
            onClick={() => filterProjects('backend')}
          >
            Backend
          </Button>
          <Button 
            variant={filteredCategory === 'fullstack' ? "default" : "outline"} 
            onClick={() => filterProjects('fullstack')}
          >
            Full Stack
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-card border-border hover:border-primary/30 transition-all group">
                <div className="overflow-hidden rounded-t-lg relative">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      variant="secondary"
                      onClick={() => handleSelectProject(project.id)}
                    >
                      View Details
                    </Button>
                  </div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={400}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge 
                      className="absolute top-4 left-4 bg-chart-1 text-white"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-space-grotesk font-bold">{project.title}</h3>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="bg-muted/50">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="flex gap-3">
                    {project.id===2&& (                      
                    
                    <><Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button><Button size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button></>)}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && handleCloseModal()}>
          {selectedProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-space-grotesk">{selectedProject.title}</DialogTitle>
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogClose>
                </div>
              </DialogHeader>
              
              <div className="mt-2 overflow-hidden rounded-lg">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  width={800} 
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedProject.longDescription}</p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="mt-6">
                <div className="flex gap-3">
                   
                  
                </div>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}