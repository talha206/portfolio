import { createSlice } from '@reduxjs/toolkit';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string[];
  technologies: string[];
  githubUrl: string;
  featured: boolean;
}

interface ProjectsState {
  projects: Project[];
  filteredCategory: string | null;
  selectedProject: Project | null;
}

const initialState: ProjectsState = {
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
      longDescription: 'This comprehensive e-commerce platform features user authentication, product catalog management, cart and checkout functionality, payment processing integration, and order management. Built with React on the frontend and Node.js/Express on the backend, with MongoDB for data storage. Implements responsive design for optimal viewing on all devices. Features include: product filtering and search, user profiles, admin dashboard, payment integration, and order tracking.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['frontend', 'backend', 'fullstack'],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'TailwindCSS'],
      githubUrl: 'https://github.com/',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A sleek task management application with drag-and-drop functionality, task categorization, and user collaboration.',
      longDescription: 'This task management application allows users to create, organize, and track tasks with intuitive drag-and-drop functionality. Features include task categorization, due date setting, priority flags, and user collaboration. The application uses React with Redux for state management on the frontend and a Node.js/Express backend with MongoDB. Real-time updates are implemented using Socket.io. The app includes user authentication, task filtering, progress tracking, and a responsive design.',
      image: 'https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['frontend', 'backend', 'fullstack'],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/talha206/Db-Project-Ticket-app.git',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that provides real-time weather data, forecasts, and historical weather information.',
      longDescription: 'This weather dashboard application fetches and displays real-time weather data, forecasts, and historical weather information using the OpenWeatherMap API. Built with React and Redux, the application features a clean, intuitive interface with responsive design. Users can search for locations, view current weather conditions, 5-day forecasts, and historical weather data. The dashboard includes interactive charts for temperature, humidity, and precipitation trends, as well as weather alerts and notifications.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['frontend'],
      technologies: ['React', 'Redux', 'API Integration', 'TailwindCSS', 'Chart.js'],
      githubUrl: 'https://github.com/',
      featured: false,
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A full-stack blog platform with article creation, commenting, and user authentication.',
      longDescription: 'This blog platform allows users to create, edit, and publish articles with rich text formatting. Features include user authentication, commenting system, article categorization and tagging, and social media sharing. Built with React and Next.js on the frontend and Node.js/Express on the backend, with MongoDB for data storage. The platform includes an admin dashboard for content management, analytics tracking, and SEO optimization tools. The responsive design ensures optimal viewing on all devices.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['frontend', 'backend', 'fullstack'],
      technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/',
      featured: false,
    },
  ],
  filteredCategory: null,
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterProjectsByCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
    resetProjectFilter: (state) => {
      state.filteredCategory = null;
    },
    selectProject: (state, action) => {
      state.selectedProject = state.projects.find(project => project.id === action.payload) || null;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
});

export const { 
  filterProjectsByCategory, 
  resetProjectFilter,
  selectProject,
  clearSelectedProject 
} = projectsSlice.actions;

export default projectsSlice.reducer;