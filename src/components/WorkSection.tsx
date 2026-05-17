import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
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
    title: 'AI Voice Interview Agent',
    description: 'An AI-powered voice interview agent that conducts automated screening interviews for software engineering candidates through calls, chats, and web interactions.',
    technologies: [
      'AI Voice Agent',
      // 'Java',
      // 'JavaScript',
      // 'React.js',
      // 'MERN Stack',
      // 'NLP'
    ],
    image: ["/Project/ai_agent/ai.png"],
    github: 'https://github.com/TheKhushant/AI-Voice-Interview-Agent',
    liveDemo: 'https://ai-voice-interview-agent.vercel.app/',
    color: "from-cyan-400 to-blue-600",
    features: [
      "AI-powered voice interview conversations",
      "Automated candidate screening process",
      "Supports phone calls, chats & web calls",
      "Technical interview questions for developers",
      "Real-time conversational interaction",
      "Modern and scalable AI workflow"
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
  // const [showAll, setShowAll] = useState(false);

  const INITIAL_SHOW = 3;
  const displayedProjects = projectsData.slice(0, INITIAL_SHOW);
  // const displayedProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_SHOW);

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleClose = () => setActiveImage(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-16 w-full relative overflow-hidden" id="work">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-white/70 text-lg">
            Selected projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid - Now 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="relative group">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setActiveImage({ projectId: project.id, imageIndex: 0 })}
                      className="flex items-center gap-2 text-white bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20 hover:bg-black/80 transition-all"
                    >
                      <Eye size={18} />
                      <span>Preview</span>
                    </button>
                  </div>

                  {project.upcoming && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-xs rounded-lg text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features Toggle */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-6"
                  >
                    {expandedItems.includes(index) ? (
                      <>Hide Details <ChevronUp size={16} /></>
                    ) : (
                      <>View Details <ChevronDown size={16} /></>
                    )}
                  </button>

                  {/* Expanded Features */}
                  {expandedItems.includes(index) && (
                    <ul className="mb-6 space-y-2 text-sm text-white/70">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
                        project.github === '#' 
                          ? 'bg-white/5 text-white/40 cursor-not-allowed' 
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      <Github size={18} />
                      Code
                    </a>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
                        project.liveDemo === '#' 
                          ? 'bg-white/5 text-white/40 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      }`}
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {/* {projectsData.length > INITIAL_SHOW && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 mx-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white font-medium transition-all duration-300"
            >
              {showAll ? (
                <>
                  View Less
                  <ChevronUp className="group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  View More Projects
                  <ChevronDown className="group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )} */}
        {/* View More Projects */}
        <div className="text-center mt-12">
          <Link
            to="/productshowcase"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-white font-medium transition-all duration-300"
          >
            View More Projects
            <ChevronDown className="group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* GitHub Note */}
        <p className="text-center text-white/60 text-sm mt-8">
          More projects and experiments available on my{' '}
          <a href="https://github.com/TheKhushant" target="_blank" className="text-cyan-400 hover:underline">
            GitHub
          </a>
        </p>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={handleClose}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={handleClose}
              className="absolute -top-14 right-0 text-white hover:text-red-400 text-3xl transition-colors"
            >
              ✕
            </button>
            <img
              src={projectsData.find(p => p.id === activeImage.projectId)?.image[0]}
              alt="Project preview"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;