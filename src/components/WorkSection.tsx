import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive, animated portfolio website to showcase skills, projects, and professional experience.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: ["img/port.png"],
    github: 'https://github.com/TheKhushant/online-resume-crafter',
    liveDemo: 'https://portfolionew-orcin-pi.vercel.app/',
    color: "from-purple-400 to-pink-500",
    features: [
      "Responsive design",
      "Smooth animations",
      "Interactive components",
      "Modern UI/UX"
    ]
  },
  {
    id: 2,
    title: 'Swiggy Clone',
    description: 'A full-stack food delivery application with user authentication, restaurant listings, and food ordering functionality.',
    technologies: ['React.js', 'Tailwind CSS', 'Custom API', 'Node.js'],
    image: ["img/swi.png"],
    github: 'https://github.com/TheKhushant/Swiggy-CLone-Practice',
    liveDemo: 'https://swiggy-c-lone-practice-psi.vercel.app/',
    color: "from-cyan-400 to-blue-500",
    features: [
      "User authentication system",
      "Restaurant and menu listings",
      "Food ordering functionality",
      "Responsive design"
    ]
  },
  {
    id: 3,
    title: 'Image Filter Website',
    description: 'A web application that applies various filters to images using computer vision algorithms.',
    technologies: ['HTML/CSS', 'JavaScript', 'Python', 'OpenCV', 'NumPy', 'Flask'],
    image: ["img/IP.png"],
    github: 'https://github.com/TheKhushant/Image_Filter',
    liveDemo: 'https://image-filter-4pce.onrender.com/',
    color: "from-green-400 to-emerald-500",
    features: [
      "Multiple image filter options",
      "Real-time filter preview",
      "Image upload and download",
      "Backend processing with Flask"
    ]
  },
  {
    id: 4,
    title: 'Railway Employee Management System',
    description: 'An advanced system for managing railway employee duties, auto-scheduling, and administrative tasks.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'APIs', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Socket.io', 'Redux'],
    image: ["img/rail.jpg"],
    github: '#',
    liveDemo: '#',
    color: "from-orange-400 to-amber-500",
    features: [
      "Employee duty scheduling",
      "Real-time notifications",
      "Automated task assignment",
      "Comprehensive admin dashboard"
    ],
    upcoming: true
  },
];

const WorkSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeImage, setActiveImage] = useState<{ projectId: number; imageIndex: number } | null>(null);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  return (
    <section className="py-16 w-full relative overflow-hidden" id="work">
      {/* Background Elements - Same as Skills Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            data-scroll
            data-scroll-speed="0.5"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Projects</span>
          </h2>
          <p 
            data-scroll
            data-scroll-speed="0.3"
            className="text-white/70 text-lg"
          >
            Selected projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          data-scroll
          data-scroll-speed="0.8"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="relative group"
            >
              {/* Project Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveImage({ projectId: project.id, imageIndex: 0 })}
                      className="flex items-center gap-2 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-black/70 transition-all duration-300"
                    >
                      <Eye size={16} />
                      <span>View Image</span>
                    </button>
                  </div>

                  {/* Upcoming Badge */}
                  {project.upcoming && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Coming Soon
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2.5 py-1 bg-white/10 text-white/90 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Features */}
                  <div className="mb-4">
                    <button 
                      onClick={() => toggleItem(index)}
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                    >
                      {isExpanded(index) ? (
                        <>
                          <span>Hide Features</span>
                          <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          <span>View Features</span>
                          <ChevronDown size={14} />
                        </>
                      )}
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded(index) ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="text-white/70 text-sm flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 transition-all duration-300 ${
                        project.github === '#' 
                          ? 'text-white/40 cursor-not-allowed' 
                          : 'text-white hover:text-cyan-300'
                      }`}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 transition-all duration-300 ${
                        project.liveDemo === '#' 
                          ? 'text-white/40 cursor-not-allowed' 
                          : 'text-white hover:text-green-300'
                      }`}
                    >
                      <span className="text-sm">Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div 
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>

              {/* Floating Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-cosmic-dark rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div 
          data-scroll
          data-scroll-speed="0.3"
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            More projects and contributions available on my GitHub profile
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-300"
            >
              <span className="text-lg">✕</span>
            </button>
            <img 
              src={projectsData.find(p => p.id === activeImage.projectId)?.image[activeImage.imageIndex]} 
              alt="Project preview" 
              className="rounded-lg max-h-[80vh] w-auto max-w-full"
            />
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index, 0) * 0.1s);
        }

        /* Smooth transitions for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none;
          }
          * {
            transition-duration: 0.1s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkSection;