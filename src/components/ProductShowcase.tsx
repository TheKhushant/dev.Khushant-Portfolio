'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, ExternalLink, Award, ArrowRight, X, Search 
} from 'lucide-react';

interface Project {
  _id?: string;
  id?: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  github?: string;
  liveDemo?: string;
  status?: string;
  featured: boolean;
  color?: string;
}

const categories = [
  "All", "Featured", "Major Projects", "Mini Projects", 
  "College Projects", "Government Projects", "Client Projects"
] as const;

const ProductShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Replace with your actual API endpoint
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        } else {
          // Fallback to static data if backend not ready
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    if (activeFilter !== "All") {
      if (activeFilter === "Featured") {
        result = result.filter(p => p.featured);
      } else {
        result = result.filter(p => p.category === activeFilter);
      }
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }

    if (sortBy === "latest") {
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    } else {
      result.sort((a, b) => (a.id || 0) - (b.id || 0));
    }

    return result;
  }, [activeFilter, searchTerm, sortBy, projects]);

  const openModal = (project: Project) => setSelectedProject(project);

  const totalProjects = projects.length;
  const displayedCount = filteredAndSortedProjects.length;

  return (
    <section className="py-12 md:py-20 bg-[#0a0a0f] relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-[radial-gradient(#4f46e520_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Product <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-violet-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Real-world solutions I’ve built</p>
        </motion.div>

        {/* Controls - Optimized for mobile */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8 items-start md:items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 pl-11 py-3 rounded-2xl text-sm focus:outline-none focus:border-purple-500 placeholder-gray-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "oldest")}
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none text-gray-300"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <div className="text-sm text-gray-400 whitespace-nowrap hidden sm:block">
              <span className="text-white font-medium">{displayedCount}</span> of {totalProjects}
            </div>
          </div>
        </div>

        {/* Filter Tabs - Horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto pb-4 hide-scrollbar -mx-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-2xl text-xs md:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0
                ${activeFilter === cat 
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - Single column on mobile */}
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProjects.map((project) => (
                <motion.div
                  key={project._id || project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {project.status && (
                        <div className={`absolute top-3 right-3 text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color || 'from-purple-500 to-violet-500'} text-white`}>
                          {project.status}
                        </div>
                      )}
                    </div>

                    {/* Content - Compact on mobile */}
                    <div className="p-4 md:p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2 leading-tight flex-1">
                          {project.title}
                        </h3>
                        {project.featured && <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />}
                      </div>

                      {/* Description hidden on mobile */}
                      <p className="hidden md:block text-gray-400 text-sm mt-3 line-clamp-3 min-h-[60px]">
                        {project.description}
                      </p>

                      {/* Tech tags - fewer on mobile */}
                      <div className="mt-auto pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 rounded-md text-gray-400">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-[10px] md:text-xs px-2 py-1 bg-white/10 rounded-md text-gray-400">+{project.technologies.length - 3}</span>
                          )}
                        </div>

                        {/* Buttons - Compact on mobile */}
                        <div className="flex gap-2 mt-5">
                          <button
                            onClick={() => openModal(project)}
                            className="flex-1 py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl text-xs md:text-sm font-medium flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.985]"
                          >
                            Details
                            <ArrowRight size={16} className="md:w-[18px]" />
                          </button>

                          {(project.github || project.liveDemo) && (
                            <div className="flex gap-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"
                                >
                                  <Github size={18} />
                                </a>
                              )}
                              {project.liveDemo && (
                                <a
                                  href={project.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2.5 md:p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"
                                >
                                  <ExternalLink size={18} />
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {displayedCount === 0 && !loading && (
          <div className="text-center py-20 text-gray-400">
            No projects found.
          </div>
        )}
      </div>

      {/* Modal - Improved for mobile */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 md:p-4" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#111113] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[94vh] md:max-h-[92vh] overflow-hidden flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-56 md:h-80 flex-shrink-0">
                <img 
                  src={selectedProject.images[0]} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black p-3 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-5 md:p-8 overflow-y-auto flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h1>
                
                <p className="mt-6 text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-300">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-white/5 rounded-xl text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-10">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3.5 rounded-2xl transition-all">
                      <Github size={20} /> GitHub
                    </a>
                  )}
                  {selectedProject.liveDemo && (
                    <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 py-3.5 rounded-2xl transition-all">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Static fallback data (remove once backend is live)
const projectsData: Project[] = [ /* your existing projects here */ ];

export default ProductShowcase;