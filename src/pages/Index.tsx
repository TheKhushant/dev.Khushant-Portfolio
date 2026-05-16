import React, { useState, useEffect, useRef } from "react";
import Stars from "../components/Stars";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import JourneySection from "../components/JourneySection";
import CertificatesSection from "../components/CertificatesSection";
import ActivitiesSection from "../components/ActivitiesSection";
import WorkSection from "../components/WorkSection";
// import ContactSection from "../components/ContactSection";
import ContactSection from "../pages/Contact";
import { Mouse, ChevronDown, Rocket, Sparkles } from "lucide-react";

const Index: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const mouseTrailRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number>();

  const allSections = ["home", "skills", "experience", "journey", "certificates", "activities", "work", "contact"];

  // Smooth mouse movement with requestAnimationFrame
  useEffect(() => {
    const trail = mouseTrailRef.current;
    if (!trail) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const smoothFactor = 0.1;
    const animate = () => {
      x += (targetX - x) * smoothFactor;
      y += (targetY - y) * smoothFactor;
      trail.style.transform = `translate(${Math.max(0, x - 5)}px, ${Math.max(0, y - 10)}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll handling without auto-scroll feature
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce the scroll handling
      scrollTimeout.current = setTimeout(() => {
        const currentSection = allSections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeSection]);

  const scrollToNextSection = () => {
    const currentIndex = allSections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % allSections.length;
    const nextSection = document.getElementById(allSections[nextIndex]);
    
    if (nextSection) {
      isScrolling.current = true;
      nextSection.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  // Enhanced star burst effect
  const triggerStarBurst = () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      setTimeout(() => {
        const element = star as HTMLElement;
        element.style.transform = 'scale(1.5)';
        element.style.opacity = '1';
        setTimeout(() => {
          element.style.transform = '';
          element.style.opacity = '';
        }, 400);
      }, index * 15);
    });
  };

  return (
    <div className="min-h-screen bg-cosmic-dark relative overflow-hidden">
      <Stars />
      
      {/* Optimized Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Smooth gradient orb */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl transition-all duration-1500"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(168, 85, 247, 0.15) 30%, transparent 70%)",
            left: `${mousePosition.x - 160}px`,
            top: `${mousePosition.y - 160}px`,
          }}
        />
        
        {/* Static nebula effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-2xl bg-pink-500/10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-5 blur-2xl bg-cyan-500/10" />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800/30">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Smooth Mouse Trail */}
      <div 
        ref={mouseTrailRef}
        className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Main cursor dot */}
        <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
        
        {/* Pulsing ring */}
        <div className="absolute inset-0 w-6 h-6 border-2 border-cyan-400/50 rounded-full animate-ping" />
        
        {/* Trail particles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
              style={{
                animation: `trailFloat 1s ease-out ${i * 0.1}s forwards`,
              }}
            />
          ))}
        </div>
      </div>

      <NavBar />
      
      {/* Section Navigation Helper */}
      <button
        onClick={scrollToNextSection}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center group hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronDown size={18} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
      </button>

      {/* Active Section Indicator */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-3">
          {allSections.map((section) => (
            <button
              key={section}
              onClick={() => {
                isScrolling.current = true;
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  isScrolling.current = false;
                }, 1000);
              }}
              className="relative group"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
                    : "bg-gray-500 hover:bg-cyan-500"
                }`}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-xs text-white bg-black/70 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap capitalize border border-white/10">
                  {section}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
        <Hero name="KHUSHANT WANKHEDE" title="FULLSTACK DEVELOPER" />
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-1">
            <Mouse size={14} className="text-cyan-400/70" />
            <span className="text-xs text-cyan-300/50 tracking-widest">SCROLL</span>
          </div>
        </div>
      </div>

      {/* Content Sections with Subtle Backgrounds */}
      <div id="skills" className="relative py-16">
        <SkillsSection />
      </div>

      <div id="experience" className="relative py-16">
        <ExperienceSection />
      </div>

      <div id="journey" className="relative py-16">
        <JourneySection />
      </div>

      <div id="certificates" className="relative py-16">
        <CertificatesSection />
      </div>

      <div id="activities" className="relative py-16">
        <ActivitiesSection />
      </div>

      <div id="work" className="relative py-16">
        <WorkSection />
      </div>

      <div id="contact" className="relative py-16">
        <ContactSection />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
        <button
          onClick={() => {
            isScrolling.current = true;
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              isScrolling.current = false;
            }, 1000);
          }}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center group hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110"
          title="Scroll to top"
        >
          <Rocket size={18} className="text-cyan-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
        </button>
        
        <button
          onClick={triggerStarBurst}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-purple-500/40 flex items-center justify-center group hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
          title="Sparkle effect"
        >
          <Sparkles size={18} className="text-purple-400 group-hover:text-white transition-colors duration-300" />
        </button>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes trailFloat {
          0% {
            opacity: 0.4;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(
              ${Math.random() * 20 - 10}px,
              ${Math.random() * 20 - 10}px
            ) scale(0);
          }
        }

        @keyframes subtlePulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.08; }
        }

        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='m0 .5h31.5v32'/%3e%3c/svg%3e");
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;