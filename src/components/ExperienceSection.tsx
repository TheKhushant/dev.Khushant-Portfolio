import React, { useState } from "react";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    year: "Aug 2025 - Current",
    title: "MERN STACK DEVELOPER",
    company: "Align Infotech",
    description:
      "At Align Infotech, I work as a MERN Stack Developer, contributing to the development of modern web applications. My responsibilities include building responsive and reusable front-end components and implementing backend services.",
    responsibilities: [
      "Handled multiple responsibilities in a startup environment including MERN stack client projects, video editing, content creation, and mentoring interns and students in DSA and MERN Stack development",
      "Developed and managed internal company projects along with client-based applications",
      "Collaborated with government clients and contributed to more than 25 government projects",
      "Worked on various company projects mentioned in the work section with end-to-end development involvement",
    ],
  },
  {
    year: "Feb 2022 - Dec 2023",
    title: "Website Developer + Video Editor",
    company: "HNK Securities Pvt. Ltd.",
    description:
      "At HNK Securities Pvt. Ltd., I worked as a Website Developer and Video Editor, contributing to the company's digital presence. My responsibilities included building responsive and reusable front-end components and editing promotional videos for digital marketing campaigns.",
    responsibilities: [
      "Built reusable UI components using React and TailwindCSS",
      "Developed interactive and responsive web pages",
      "Enhanced SEO performance and loading speed",
      "Edited promotional and training videos for company branding",
    ],
  },
  {
    year: "Feb 2022 - Dec 2023",
    title: "Teaching",
    company: "Disha Computer Institute",
    description:
      "At Disha Computer Institute, I taught various programming languages including C, C++, Java, and frontend technologies like HTML, CSS, Bootstrap. I also trained students in software tools such as CorelDRAW, Photoshop, and AutoCAD, helping them build strong foundations in both coding and design.",
    responsibilities: [
     "Taught C, C++, Java, and frontend technologies: HTML, CSS, Bootstrap",
     "Trained students in software tools: CorelDRAW, Photoshop, AutoCAD",
     "Built and deployed mini-projects to enhance practical knowledge",
     "Conducted hands-on sessions to reinforce learning",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  return (
    <section className="py-16 w-full relative overflow-hidden" id="experience">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            data-scroll
            data-scroll-speed="0.5"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Experience</span>
          </h2>
          <p 
            data-scroll
            data-scroll-speed="0.3"
            className="text-white/70 text-lg"
          >
            Where I put my skills into action
          </p>
        </div>

        {/* Experience Timeline */}
        <div 
          data-scroll
          data-scroll-speed="0.8"
          className="space-y-6"
        >
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Timeline Line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 to-purple-400/30"></div>
              )}

              {/* Experience Card */}
              <div 
                className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {/* Timeline Dot */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/70 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono">{item.year}</span>
                      </div>
                      <p className="text-cyan-300 font-medium">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button className="text-white/70 hover:text-white transition-colors duration-300">
                    {isExpanded(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {/* Description - Always Visible */}
                <p className="text-white/80 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities - Expandable */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((point, idx) => (
                        <li 
                          key={idx}
                          className="text-white/70 flex items-start gap-3 transition-all duration-300 hover:text-white/90"
                        >
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Effect */}
              <div 
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500 -z-10"
                style={{
                  transform: 'translateY(0) scale(1)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          data-scroll
          data-scroll-speed="0.3"
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            Looking for my next opportunity to create amazing things
          </p>
        </div>
      </div>

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

export default ExperienceSection;