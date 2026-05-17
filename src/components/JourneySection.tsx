import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, Code, ChevronDown, ChevronUp } from 'lucide-react';

const journeyData = [
    {
      year: '2025 - Present',
      title: 'MERN Stack Developer',
      company: 'Align Infotech',
      description: 'Worked on MERN stack client projects, internal company products, and 25+ government projects | Managed video editing & content creation tasks | Mentored interns and students in DSA & MERN Stack | Skills: MERN Stack, React.js, Node.js, MongoDB, Content Creation, Video Editing, Leadership, Team Collaboration',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "from-orange-400 to-red-500"
    },
    {
      year: '2024 - Present',
      title: 'MCA (AI/ML)',
      company: 'Shree Ramdeobaba University',
      description: 'CGPA: 8.2 | 95.66 MCA-CET Score | AI & ML Specialization | Smart India Hackathon Finalist | GFG ICPC 2.0 Participant | Developed Women Safety Web App & AI-Powered Notes Sharing System | Skills: C++, Java, React.js, DSA, Problem-Solving, Leadership',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "from-cyan-400 to-blue-500"
    },
    {
      year: '2021 - 2024',
      title: 'BCCA',
      company: 'Kamla Nehru Mahavidyalaya',
      description: 'RTMNU | CGPA: 6.9 | Led & Organized PPT Competition 2023 | Participated in KDK Coding Competitions | Skills: JavaScript, Web Development, Git, HTML/CSS, SQL, Linux, Team Collaboration',
      icon: <Code className="w-5 h-5 text-white" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      year: '2019 - 2021',
      title: 'HSC',
      company: 'Dr. Vasantrao Naik Government College',
      description: 'Percentage: 74.5% | Did Preparation for Competitive Exams | Learned NCERT BOOKS',
      icon: <Code className="w-5 h-5 text-white" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      year: '2019',
      title: 'SSC',
      company: 'Priyadarshani Convent',
      description: 'Percentage: 63.5% | Represented school in Jyotiba Prathamik Mahavidyalaya | Built a working model for environmental awareness',
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      color: "from-orange-400 to-amber-500"
    }
];

const JourneySection: React.FC = () => {
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
    <section className="py-16 w-full relative overflow-hidden" id="journey">
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
            My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Journey</span>
          </h2>
          <p 
            data-scroll
            data-scroll-speed="0.3"
            className="text-white/70 text-lg"
          >
            The path that led me to where I am today
          </p>
        </div>

        {/* Timeline */}
        <div 
          data-scroll
          data-scroll-speed="0.8"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/30 via-purple-400/30 to-cyan-400/30 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {journeyData.map((item, index) => (
              <div //box konse side rahega
                key={index} 
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-2 border-white shadow-lg transform -translate-x-1.5 md:-translate-x-1/2 z-10`}>
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                </div>

                {/* Content Card */}
                <div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12'
                  }`}
                >
                  <div 
                    className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer h-full"
                    onClick={() => toggleItem(index)}
                  >
                    {/* Year */}
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-300 font-mono text-sm">{item.year}</span>
                    </div>

                    {/* Title and Company */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        {item.icon}
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-cyan-300 font-medium text-sm">{item.company}</p>
                      </div>
                    </div>

                    {/* Description - Always Visible */}
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expand/Collapse Button */}
                    <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-end'} mt-4`}>
                      <button className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm">
                        {isExpanded(index) ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Additional Details - Expandable */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded(index) ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          Key Highlights
                        </h4>
                        <div className="text-white/70 text-sm space-y-1">
                          {/* You can add more detailed points here if needed */}
                          <p>• Achieved excellent academic performance</p>
                          <p>• Developed practical projects and skills</p>
                          <p>• Participated in competitions and events</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>

                {/* Spacing for alternating sides */}
                <div className="hidden md:block md:w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div 
          data-scroll
          data-scroll-speed="0.3"
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            Continuously learning and growing in my development journey
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index, 0) * 0.15s);
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

export default JourneySection;