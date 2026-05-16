import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {

  // ==================== CONTACT INFO ====================
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-yellow-500" />,
      text: 'wankhedekhushant57@gmail.com',
      href: 'mailto:wankhedekhushant57@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-yellow-500" />,
      text: '+91 8007307435',
      href: 'tel:+918007307435'
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-500" />,
      text: 'Nandanvan, Nagpur, Maharashtra, India',
      href: 'https://maps.app.goo.gl/M7h8rEmksVX1sWgj9'
    }
  ];

  // ==================== SOCIAL & CODING PROFILES ====================
  const socialLinks = [
    {
      icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/970/small/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" className="w-10 h-10" />,
      href: 'https://www.linkedin.com/in/khushant-wankhede-b3021824a/',
      label: 'LinkedIn'
    },
    {
      icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/038/447/961/small/ai-generated-instagram-logo-free-png.png" alt="Instagram" className="w-8 h-8" />,
      href: 'https://www.instagram.com/khushantwankhede_/',
      label: 'Instagram'
    },
    {
      icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="X (Twitter)" className="w-8 h-8" />,
      href: 'https://x.com/KhushantWnkde57',
      label: 'X (Twitter)'
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="LeetCode" className="w-8 h-8" />,
      href: 'https://leetcode.com/u/KHUSHANT_WANKHEDE/',
      label: 'LeetCode'
    },
    {
      icon: <img src="https://codolio.com/codolio_assets/codolio.svg" alt="Codolio" className="w-8 h-8" />,
      href: 'https://codolio.com/profile/KhushantWankhede',
      label: 'Codolio'
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar />
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact <span className="neon-text">Me</span>
            </h1>
            <p className="text-white/70 text-xl">
              Feel free to reach out
            </p>
          </div>

          {/* Contact Information */}
          <div className="glassmorphism rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center justify-center gap-4 text-white hover:text-cosmic-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-cosmic-accent/10 flex items-center justify-center group-hover:bg-cosmic-accent/20 transition-colors">
                    {info.icon}
                  </div>
                  <span className="text-xl">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social & Profiles */}
          <div className="glassmorphism rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white mb-8">Connect With Me</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-cosmic-accent/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-cosmic-accent hover:to-cosmic-glow hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;