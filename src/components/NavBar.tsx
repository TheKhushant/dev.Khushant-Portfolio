import React, { useState, useEffect } from "react";
import { Menu, X, Rocket, Sparkles, Briefcase, Star, Trophy, Activity, Code, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "experience",
        "journey",
        "certificates",
        "activities",
        "work",
        "contact",
      ];

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills"},
    { name: "Experience", id: "experience"},
    { name: "Journey", id: "journey"},
    { name: "Certificates", id: "certificates"},
    { name: "Activities", id: "activities"},
    { name: "Work", id: "work"},
    { name: "Contact", id: "contact"},
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  // Calculate mouse distance for magnetic effect
  const getMagneticEffect = (element: HTMLElement | null) => {
    if (!element) return { x: 0, y: 0 };
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mousePosition.x - centerX;
    const distanceY = mousePosition.y - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 100;
    
    if (distance < maxDistance) {
      const force = (1 - distance / maxDistance) * 0.5;
      return {
        x: distanceX * force * 0.3,
        y: distanceY * force * 0.3,
      };
    }
    
    return { x: 0, y: 0 };
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Animated Background Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Animated Logo with Magnetic Effect */}
          <Link
            to="/"
            className="relative group"
            id="logo-link"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="relative z-10">
                  <Rocket 
                    className={`transition-all duration-500 ${
                      scrolled ? "text-cyan-400 size-6" : "text-white size-7"
                    } group-hover:rotate-45`}
                  />
                </div>
                {/* Orbiting particles */}
                <div className="absolute -top-1 -right-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" />
                </div>
                <div className="absolute -bottom-1 -left-1">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>
              
              <span
                className={`text-2xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent transition-all duration-500 ${
                  scrolled ? "text-lg" : "text-xl"
                } group-hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400`}
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}
              >
                PORTFOLIO
              </span>
            </div>
            
            {/* Trail effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Desktop Navigation with Magnetic Buttons */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-5 py-3 rounded-2xl transition-all duration-500 group overflow-hidden ${
                  activeSection === link.id
                    ? "text-white bg-gradient-to-br from-cyan-500/30 to-purple-500/30 shadow-2xl shadow-cyan-500/20"
                    : "text-gray-300 hover:text-white bg-white/5 backdrop-blur-sm"
                }`}
                id={`nav-${link.id}`}
              >
                {/* Hover shine effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
                
                {/* Border animation */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 p-[1px] transition-opacity duration-500 ${
                    activeSection === link.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-full bg-gray-900 rounded-2xl" />
                </div>

                <div className="relative z-10 flex items-center space-x-2">
                  {/* <span className="text-sm">{link.icon}</span> */}
                  <span className="font-semibold text-sm tracking-tight">
                    {link.name}
                  </span>
                </div>
                
                {/* Active section particle burst */}
                {activeSection === link.id && (
                  <>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className={`md:hidden relative p-3 rounded-2xl transition-all duration-500 ${
              isOpen 
                ? "bg-gradient-to-br from-cyan-500/30 to-purple-500/30 text-white rotate-180 scale-110" 
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
            onClick={toggleMenu}
          >
            <div className="relative">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
            
            {/* Orbiting dots */}
            {!isOpen && (
              <>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
              </>
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation with 3D Effect */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 blur-0"
              : "max-h-0 opacity-0 -translate-y-8 blur-sm"
          }`}
        >
          <div className="py-6 mt-4 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="grid grid-cols-2 gap-3 px-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative p-4 rounded-xl transition-all duration-500 transform ${
                    activeSection === link.id
                      ? "bg-gradient-to-br from-cyan-500/40 to-purple-500/40 scale-105 text-white shadow-lg"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                  } ${
                    isOpen
                      ? `translate-y-0 opacity-100 rotate-0`
                      : `translate-y-4 opacity-0 rotate-12`
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 80}ms` : "0ms",
                  }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {/* <span className="text-lg">{link.icon}</span> */}
                    <span className="font-medium text-sm text-center">
                      {link.name}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === link.id && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-3px) rotate(1deg); }
            66% { transform: translateY(2px) rotate(-1deg); }
        }

        .group:hover .floating {
            animation: float 2s ease-in-out infinite;
        }

        /* Magnetic effect styles */
        .magnetic-item {
            transition: transform 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }
    `}</style>

    </nav>
  );
};

export default NavBar;