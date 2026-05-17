import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, Phone, Sparkles, Star, Mouse, Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface HeroProps {
    name: string;
    title: string;
}

const Hero: React.FC<HeroProps> = ({ name, title }) => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayTitle, setDisplayTitle] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);
    const heroRef = useRef<HTMLElement>(null);

    // Typewriter effect logic
    useEffect(() => {
        const titles = ["FULLSTACK DEVELOPER", "TECH ENTHUSIAST", "PROBLEM SOLVER", "CREATIVE CODER"];
        const currentTitle = titles[currentTitleIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayTitle.length < currentTitle.length) {
                        setDisplayTitle(currentTitle.substring(0, displayTitle.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    if (displayTitle.length > 0) {
                        setDisplayTitle(displayTitle.substring(0, displayTitle.length - 1));
                    } else {
                        setIsDeleting(false);
                        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayTitle, isDeleting, currentTitleIndex]);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const createParticles = (x: number, y: number) => {
        const newParticles = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x,
            y,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 1 + 0.5
        }));
        setParticles(prev => [...prev, ...newParticles]);
        
        // Remove particles after animation
        setTimeout(() => {
            setParticles(prev => prev.filter(p => !newParticles.includes(p)));
        }, 600);
    };

    const handleIconHover = (label: string, event: React.MouseEvent) => {
        setHoveredIcon(label);
        const rect = event.currentTarget.getBoundingClientRect();
        createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const socialLinks = [
        { 
            icon: <Github size={24} />, 
            href: 'https://github.com/TheKhushant', 
            label: 'GitHub',
            color: 'from-gray-400 to-white',
            glow: 'hover:shadow-lg hover:shadow-gray-400/30'
        },
        { 
            icon: <Linkedin size={24} />, 
            href: 'https://www.linkedin.com/in/khushant-wankhede-b3021824a/', 
            label: 'LinkedIn',
            color: 'from-blue-400 to-blue-600',
            glow: 'hover:shadow-lg hover:shadow-blue-400/30'
        },
        { 
            icon: <Twitter size={24} />, 
            href: 'https://x.com/KhushantWnkde57', 
            label: 'Twitter',
            color: 'from-sky-400 to-blue-500',
            glow: 'hover:shadow-lg hover:shadow-sky-400/30'
        },
        { 
            icon: <Instagram size={24} />, 
            href: 'https://www.instagram.com/khushantwankhede_/', 
            label: 'Instagram',
            color: 'from-pink-400 to-purple-600',
            glow: 'hover:shadow-lg hover:shadow-pink-400/30'
        },
        { 
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" className="w-8 h-8" alt="" />,
            href: 'https://leetcode.com/u/KHUSHANT_WANKHEDE/', 
            label: 'LeetCode',
            color: 'from-orange-400 to-white-600',
            glow: 'hover:shadow-lg hover:shadow-pink-400/30'
        },
    ];

    return (
        <section ref={heroRef} className="w-full flex items-center justify-center relative overflow-hidden min-h-screen">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute w-64 h-64 rounded-full opacity-5 blur-2xl transition-all duration-1500"
                    style={{
                        background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
                        left: `${mousePosition.x - 128}px`,
                        top: `${mousePosition.y - 128}px`,
                    }}
                />
            </div>

            {/* Animated Particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-400 pointer-events-none"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        animation: `floatAway ${particle.duration}s ease-out forwards`,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Profile Image - Reduced Scroll Speed */}
                    <div
                        data-scroll
                        data-scroll-speed="0.8"
                        className="w-full lg:w-5/12 flex justify-center lg:justify-end relative"
                    >
                        <div className="relative group">
                        {/* Main Image Container */}
                        <div className="relative w-56 h-64 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 bg-black/40 backdrop-blur-sm border-cyan-500/40 group-hover:bg-cyan-500/5 group-hover:scale-105">
                            <img
                                src="/img/PNG.png"
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Subtle Floating Elements */}
                        <div className="absolute -top-[-30px] -left-[-30px] w-5 h-5 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Star size={10} className="text-purple-400" />
                        </div>


                            <div className="absolute -top-[-30px] -left-[-30px] w-5 h-5 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Star size={10} className="text-purple-400" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content - Controlled Scroll Speed */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
                        {/* Name with Controlled Effects */}
                        <h1
                            data-scroll
                            data-scroll-speed="0.5"
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                        >
                            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                                {name}
                            </span>
                        </h1>

                        {/* Typewriter Section */}
                        <div
                            data-scroll
                            data-scroll-speed="0.5"
                            className="relative"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono mt-4 min-h-[1.8em]">
                                <span className="inline-block mr-2">I'M A</span>
                                <span className="inline-block relative">
                                    <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                                        {displayTitle}
                                    </span>
                                    {showCursor && (
                                        <span className="absolute right-0 top-0 w-0.5 h-full bg-cyan-400 animate-pulse ml-1"></span>
                                    )}
                                </span>
                            </h2>
                        </div>

                        {/* Social Icons */}
                        <div
                            data-scroll
                            data-scroll-speed="0.3"
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 py-4"
                        >
                            {socialLinks.map((social, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseEnter={(e) => handleIconHover(social.label, e)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                >
                                    {/* Orbital Ring */}
                                    <div 
                                        className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                                            social.color.split(' ')[0].replace('from-', 'border-')
                                        }`}
                                        style={{
                                            animation: 'orbit 3s linear infinite',
                                            animationDelay: `${index * 0.5}s`,
                                        }}
                                    />
                                    
                                    {/* Main Icon Button */}
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            relative w-12 h-12 rounded-xl flex items-center justify-center
                                            bg-gradient-to-br from-cosmic-dark/80 to-cosmic-darker/90
                                            backdrop-blur-xl border border-white/10
                                            transition-all duration-500 transform
                                            group-hover:scale-110 group-hover:-translate-y-1
                                            ${social.glow}
                                            hover:border-white/30
                                            shadow-lg shadow-black/50
                                        `}
                                        aria-label={social.label}
                                    >
                                        {/* Background Gradient */}
                                        <div 
                                            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                        />
                                        
                                        {/* Animated Sparkle */}
                                        <div 
                                            className={`absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 ${
                                                social.color.split(' ')[0].replace('from-', 'text-')
                                            }`}
                                        >
                                            <Sparkles size={10} className="animate-pulse" />
                                        </div>
                                        
                                        {/* Icon */}
                                        <div 
                                            className={`relative z-10 transition-all duration-500 group-hover:scale-110 ${
                                                social.color.split(' ')[0].replace('from-', 'text-')
                                            }`}
                                        >
                                            {social.icon}
                                        </div>

                                        {/* Pulsing Ring Effect */}
                                        <div 
                                            className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 ${
                                                social.color.split(' ')[0].replace('from-', 'border-')
                                            }`}
                                            style={{
                                                animation: 'pulseRing 2s ease-out infinite',
                                            }}
                                        />
                                    </a>

                                    {/* Tooltip */}
                                    <div 
                                        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2
                                            bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded-md
                                            text-xs font-medium whitespace-nowrap
                                            transition-all duration-300
                                            ${hoveredIcon === social.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                            pointer-events-none
                                        `}
                                    >
                                        {social.label}
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons with Controlled Speed */}
                        <div
                        data-scroll
                        data-scroll-speed="0.3"
                        className="flex flex-wrap gap-3 justify-center lg:justify-start mt- pt-2"
                        >
                        {/* Contact Me Button */}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="relative px-6 py-3 rounded-lg bg-black/40 backdrop-blur-sm border border-cyan-500/40 
                                    text-white font-medium shadow-md hover:shadow-cyan-500/25 
                                    transition-all duration-300 flex items-center gap-2 group hover:scale-110
                                    hover:bg-purple-500/30"
                        >
                            <span>Contact Me</span>
                            <Phone size={18} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
                        </button>

                        {/* View My Work Button */}
                        <button
                            onClick={() => scrollToSection("work")}
                            className="relative px-6 py-3 rounded-lg bg-black/40 backdrop-blur-sm border border-cyan-500/40 
                                    text-white font-medium shadow-md hover:shadow-cyan-500/25 
                                    transition-all duration-300 flex items-center gap-2 group hover:scale-110
                                    hover:bg-purple-500/30"
                        >
                            <span>View My Work</span>
                            <ArrowRight size={18} className="text-cyan-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        {/* Download CV Button */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1ctS8cDLXQExxi2gkK8xWWEs-Dw3ZZRKO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-6 py-3 rounded-lg bg-black/40 backdrop-blur-sm border border-cyan-500/40 
                                    text-white font-medium shadow-md hover:shadow-cyan-500/25 
                                    transition-all duration-300 flex items-center gap-2 group hover:scale-110
                                    hover:bg-purple-500/30"
                        >
                            <span>Download CV</span>
                            <Download size={18} className="text-cyan-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                        </div>

                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 text-cyan-400/50">
                    <Mouse size={16} />
                    <span className="text-xs tracking-widest">SCROLL</span>
                </div> */}
            </div>

            {/* Custom Styles */}
            <style>{`
                /* Smooth animations */
                @keyframes subtle-float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                .group:hover .relative {
                    animation: subtle-float 3s ease-in-out infinite;
                }

                /* Particle animations */
                @keyframes floatAway {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(
                            ${Math.random() * 100 - 50}px,
                            ${Math.random() * -80 - 20}px
                        ) scale(0);
                    }
                }

                @keyframes orbit {
                    0% {
                        transform: rotate(0deg) translateX(15px) rotate(0deg) scale(1.1);
                    }
                    50% {
                        transform: rotate(180deg) translateX(15px) rotate(-180deg) scale(1.2);
                    }
                    100% {
                        transform: rotate(360deg) translateX(15px) rotate(-360deg) scale(1.1);
                    }
                }

                @keyframes pulseRing {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.3);
                        opacity: 0;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-6px);
                    }
                }

                /* Individual floating animations for each icon */
                .group:nth-child(1) { animation: float 6s ease-in-out infinite; }
                .group:nth-child(2) { animation: float 6s ease-in-out infinite 1.5s; }
                .group:nth-child(3) { animation: float 6s ease-in-out infinite 3s; }
                .group:nth-child(4) { animation: float 6s ease-in-out infinite 4.5s; }

                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    .group:hover .relative {
                        animation: none;
                    }
                    .group {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;