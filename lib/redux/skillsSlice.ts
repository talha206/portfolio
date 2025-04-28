import { createSlice } from '@reduxjs/toolkit';

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'other';
  proficiency: number;
  color: string;
  icon: string;
}

interface SkillsState {
  skills: Skill[];
  filteredCategory: string | null;
}

const initialState: SkillsState = {
  skills: [
    {
      id: 1,
      name: 'React',
      category: 'frontend',
      proficiency: 90,
      color: 'hsl(var(--chart-1))',
      icon: 'react',
    },
    {
      id: 2,
      name: 'Next.js',
      category: 'frontend',
      proficiency: 85,
      color: 'hsl(var(--chart-2))',
      icon: 'server',
    },
    {
      id: 3,
      name: 'TypeScript',
      category: 'frontend',
      proficiency: 80,
      color: 'hsl(var(--chart-3))',
      icon: 'file-code',
    },
    {
      id: 4,
      name: 'Redux',
      category: 'backend',
      proficiency: 45,
      color: 'hsl(var(--chart-4))',
      icon: 'layers',
    },
    {
      id: 5,
      name: 'TailwindCSS',
      category: 'frontend',
      proficiency: 90,
      color: 'hsl(var(--chart-5))',
      icon: 'palette',
    },
    {
      id: 6,
      name: 'Node.js',
      category: 'backend',
      proficiency: 75,
      color: 'hsl(var(--chart-1))',
      icon: 'server',
    },
     
    {
      id: 7,
      name: 'MSSql',
      category: 'backend',
      proficiency: 65,
      color: 'hsl(var(--chart-3))',
      icon: 'database',
    },
    {
      id: 8,
      name: 'REST API',
      category: 'backend',
      proficiency: 70,
      color: 'hsl(var(--chart-4))',
      icon: 'api',
    },
    {
      id: 9,
      name: 'Git',
      category: 'other',
      proficiency: 85,
      color: 'hsl(var(--chart-5))',
      icon: 'git-branch',
    },
    {
      id: 10,
      name: 'Figma',
      category: 'other',
      proficiency: 80,
      color: 'hsl(var(--chart-1))',
      icon: 'figma',
    },
    {
      id: 11,
      name: 'React-Native',
      category: 'frontend',
      proficiency: 60,
      color: 'hsl(var(--chart-2))',
      icon: 'react-native',
    },
    {
      id: 12,
      name: 'flutter',
      category: 'frontend',
      proficiency: 60,
      color: 'hsl(var(--chart-2))',
      icon: 'flutter',
    },
  ],
  filteredCategory: null,
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
    resetFilter: (state) => {
      state.filteredCategory = null;
    },
  },
});

export const { filterByCategory, resetFilter } = skillsSlice.actions;
export default skillsSlice.reducer;