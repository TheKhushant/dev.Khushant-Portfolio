import React from 'react';
import Stars from '../components/Stars';
import NavBar from '../components/NavBar';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  ariaLabel?: string;
}

const Contact: React.FC = () => {
  // ==================== CONTACT INFO ====================
  const contactInfo: ContactItem[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'wankhedekhushant57@gmail.com',
      href: 'mailto:wankhedekhushant57@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 8007307435',
      href: 'tel:+918007307435',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Nandanvan, Nagpur, Maharashtra, India',
      href: 'https://maps.app.goo.gl/M7h8rEmksVX1sWgj9',
    },
  ];

  // ==================== SOCIAL & CODING PROFILES ====================
  const socialLinks: SocialLink[] = [
    {
      icon: (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/023/986/970/small/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
      ),
      href: 'https://www.linkedin.com/in/khushant-wankhede-b3021824a/',
      label: 'LinkedIn',
    },
    {
      icon: (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/038/447/961/small/ai-generated-instagram-logo-free-png.png"
          alt="Instagram"
          className="w-8 h-8"
        />
      ),
      href: 'https://www.instagram.com/khushantwankhede_/',
      label: 'Instagram',
    },
    {
      icon: (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
          alt="X (Twitter)"
          className="w-8 h-8"
        />
      ),
      href: 'https://x.com/KhushantWnkde57',
      label: 'X (Twitter)',
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-8 h-8"
        />
      ),
      href: 'https://leetcode.com/u/KHUSHANT_WANKHEDE/',
      label: 'LeetCode',
    },
    {
      icon: (
        <img
          src="https://codolio.com/codolio_assets/codolio.svg"
          alt="Codolio"
          className="w-8 h-8"
        />
      ),
      href: 'https://codolio.com/profile/KhushantWankhede',
      label: 'Codolio',
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <Stars />
      <NavBar />

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact <span className="neon-text">Me</span>
            </h1>
            <p className="text-white/70 text-xl">
              Feel free to reach out — I'm always open to new opportunities
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="glassmorphism rounded-3xl p-8 md:p-10 h-fit">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-2 text-white hover:text-cosmic-accent transition-all duration-300 rounded-2xl p-2 -mx-3 hover:bg-white/5 text-sm"
                    aria-label={`Contact via ${item.text}`}
                  >
                    <div className="w-8 h-8 rounded-2xl bg-cosmic-accent/10 flex items-center justify-center group-hover:bg-cosmic-accent/20 transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[15px] break-all">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Profiles */}
            <div className="glassmorphism rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-8">
                Connect With Me
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 rounded-2xl bg-cosmic-accent/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-cosmic-accent hover:to-cosmic-glow hover:scale-110 active:scale-95 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="absolute -bottom-6 text-[10px] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;