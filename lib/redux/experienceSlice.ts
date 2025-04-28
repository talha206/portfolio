import { createSlice } from '@reduxjs/toolkit';

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface ExperienceState {
  experiences: Experience[];
  selectedExperience: Experience | null;
}

const initialState: ExperienceState = {
  experiences: [
    {
      id: 1,
      company: 'OM Solutionz',
      position: 'Frontend Developer Intern',
      duration: 'Aug 2023 - Aug 2024',
      description: 'Collaborated with the development team to build and maintain responsive web applications. Implemented new features and improved existing ones using React and modern JavaScript frameworks.',
      technologies: ['React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Redux'],
      achievements: [
        'Developed a dashboard that improved team productivity by 20%',
        'Implemented responsive designs that increased mobile user engagement by 35%',
        'Optimized frontend performance resulting in 40% faster page load times',
        'Collaborated on 5 major feature releases with 0 critical bugs',
      ],
    },
    {
      id: 2,
      company: 'OM SOlutionz',
      position: 'Full Stack Developer Intern',
      duration: 'Aug 2024 - Till now',
      description: 'Worked on full-stack development projects, contributing to both frontend and backend development. Participated in all stages of the development cycle from planning to deployment.',
      technologies: ['Next.js', 'Node.js',  'MSSql', 'RESTful API'],
      achievements: [
        'Built a RESTful API that served data to 3 different client applications',
        'Created a user authentication system that increased security measures',
        'Developed and maintained database schemas that improved data integrity',
        'Participated in code reviews that enhanced team coding standards',
      ],
    },
  ],
  selectedExperience: null,
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    selectExperience: (state, action) => {
      state.selectedExperience = state.experiences.find(exp => exp.id === action.payload) || null;
    },
    clearSelectedExperience: (state) => {
      state.selectedExperience = null;
    },
  },
});

export const { selectExperience, clearSelectedExperience } = experienceSlice.actions;
export default experienceSlice.reducer;