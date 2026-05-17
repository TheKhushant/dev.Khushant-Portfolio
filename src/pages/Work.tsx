
import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive, animated portfolio website to showcase skills and projects.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    github: '#',
    liveDemo: '#'
  },
  {
    id: 2,
    title: 'Railway Employee Management System',
    description: 'A modern e-commerce solution with cart functionality, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    github: '#',  
    liveDemo: '#'
  },
  {
    id: 3,
    title: 'Women Safty Project',
    description: 'A collaborative task management tool with real-time updates, task assignment, and progress tracking.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    github: '#',
    liveDemo: '#'
  },
  {
    id: 4,
    title: 'Toe India',
    description: 'A weather application providing real-time forecasts, historical data, and location-based weather information.',
    technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    github: '#',
    liveDemo: '#'
  }
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="neon-text">Work</span>
            </h1>
            <p className="text-white/70 text-lg">
              Selected projects that showcase my skills and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="glassmorphism rounded-xl overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-cosmic-accent/10 text-cosmic-accent rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-cosmic-accent transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-cosmic-glow transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
