'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { filterByCategory, resetFilter, type Skill } from '@/lib/redux/skillsSlice';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Database, 
  FileCode, 
  Layers, 
  Palette, 
  Server, 
  Package, 
  GitBranch, 
  Figma,
  Sliders
} from 'lucide-react';

export function SkillsSection() {
  const { skills, filteredCategory } = useAppSelector((state) => state.skills);
  const dispatch = useAppDispatch();
  
  const filterSkills = (category: string | null) => {
    if (category === filteredCategory) {
      dispatch(resetFilter());
    } else {
      dispatch(filterByCategory(category));
    }
  };

  const getIconForSkill = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    
    switch (iconName) {
      case 'react':
        return <Code {...iconProps} />;
      case 'server':
        return <Server {...iconProps} />;
      case 'file-code':
        return <FileCode {...iconProps} />;
      case 'layers':
        return <Layers {...iconProps} />;
      case 'palette':
        return <Palette {...iconProps} />;
      case 'database':
        return <Database {...iconProps} />;
      case 'api':
        return <Sliders {...iconProps} />;
      case 'git-branch':
        return <GitBranch {...iconProps} />;
      case 'figma':
        return <Figma {...iconProps} />;
      case 'package':
        return <Package {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  const displayedSkills = filteredCategory 
    ? skills.filter(skill => skill.category === filteredCategory)
    : skills;

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-muted-foreground">
            A comprehensive list of my technical skills and proficiency
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
            onClick={() => filterSkills(null)}
          >
            All
          </Button>
          <Button 
            variant={filteredCategory === 'frontend' ? "default" : "outline"} 
            onClick={() => filterSkills('frontend')}
          >
            Frontend
          </Button>
          <Button 
            variant={filteredCategory === 'backend' ? "default" : "outline"} 
            onClick={() => filterSkills('backend')}
          >
            Backend
          </Button>
          <Button 
            variant={filteredCategory === 'other' ? "default" : "outline"} 
            onClick={() => filterSkills('other')}
          >
            Other
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <SkillCard skill={skill} getIconForSkill={getIconForSkill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
  getIconForSkill: (iconName: string) => JSX.Element;
}

function SkillCard({ skill, getIconForSkill }: SkillCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-muted w-12 h-12 rounded-lg flex items-center justify-center" style={{ color: skill.color }}>
          {getIconForSkill(skill.icon)}
        </div>
        <div>
          <h3 className="font-medium text-lg">{skill.name}</h3>
          <p className="text-xs text-muted-foreground capitalize">{skill.category}</p>
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between text-sm mb-2">
          <span>Proficiency</span>
          <span>{skill.proficiency}%</span>
        </div>
        <Progress value={skill.proficiency} className="h-2" indicatorClassName={`bg-[${skill.color}]`} />
      </div>
    </div>
  );
}