import React, { useState } from "react";
import { Code, Database, Globe, Palette, PenTool, Laptop } from "lucide-react";

const SkillsSection: React.FC = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    
    const skills = [
        {
            category: "Frontend",
            icon: <Globe className="w-6 h-6 text-white" />,
            items: ["React", "Tailwind CSS", "HTML5/CSS3", "Bootstrap", "JavaScript"],
            color: "from-cyan-400 to-blue-500"
        },
        {
            category: "Backend",
            icon: <Database className="w-6 h-6 text-white" />,
            items: ["Node.js", "Python", "Express.js", "MongoDB", "MySQL"],
            color: "from-green-400 to-emerald-500"
        },
        {
            category: "Programming",
            icon: <Code className="w-6 h-6 text-white" />,
            items: ["JavaScript", "Java", "C++", "C", "Python", "SQL"],
            color: "from-green-400 to-emerald-500"
        },
        {
            category: "Design",
            icon: <Palette className="w-6 h-6 text-white" />,
            items: ["Adobe Photoshop", "CoralDraw", "Canva", "Capcut", "VN Video Editor"],
            color: "from-purple-400 to-pink-500"
        },
        {
            category: "Tools",
            icon: <Laptop className="w-6 h-6 text-white" />,
            items: ["Git", "VS Code", "GitHub", "Postman", "MongoDB Compass", "Antigravity"],
            color: "from-orange-400 to-red-500"
        },
        {
            category: "Operating Systems",
            icon: <PenTool className="w-6 h-6 text-black" />,
            items: ["Windows", "Linux", "Ubuntu"],
            color: "from-yellow-400 to-amber-500"
        },
    ];

    return (
        <section id="skills" className="py-16 w-full relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header - Controlled Scroll Speed */}
                <div className="text-center mb-12">
                    <h2
                        data-scroll
                        data-scroll-speed="0.5"
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        My <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Skills</span>
                    </h2>
                    <p 
                        data-scroll
                        data-scroll-speed="0.3"
                        className="text-white/70 text-lg max-w-2xl mx-auto"
                    >
                        Here's a comprehensive overview of my technical expertise and professional capabilities
                    </p>
                </div>

                {/* Skills Grid - Controlled Scroll Speed */}
                <div
                    data-scroll
                    data-scroll-speed="0.8"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
                >
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCategory(skillGroup.category)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className="relative group"
                        >
                            {/* Card Container */}
                            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                                {/* Hover Gradient Background */}
                                <div 
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />
                                
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center shadow-lg`}>
                                        <div className="text-white">
                                            {skillGroup.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-2.5 py-1.5 rounded-lg text-sm font-medium bg-white/10 text-white/90 hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/5"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Subtle Hover Effect */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                                    <div className="w-full h-full bg-cosmic-dark rounded-xl" />
                                </div>
                            </div>

                            {/* Floating Animation */}
                            <div 
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10"
                                style={{
                                    transform: hoveredCategory === skillGroup.category ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Custom Styles */}
            <style >{`
                @keyframes subtle-float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-3px);
                    }
                }

                .group:hover .relative {
                    animation: subtle-float 3s ease-in-out infinite;
                }

                /* Smooth transitions for reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .group:hover .relative {
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

export default SkillsSection;