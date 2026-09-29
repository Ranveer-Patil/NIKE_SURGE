import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, ExternalLink, MapPin, HelpCircle } from 'lucide-react';

interface FooterProps {
  onOpenStoreLocator: () => void;
  onOpenFaq: (tab?: 'faq' | 'support' | 'legal') => void;
}

export function Footer({ onOpenStoreLocator, onOpenFaq }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/nike' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/nike' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/nike' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/nike' },
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-900 py-16 md:py-24 overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          {/* Brand Column (Col 1-4) */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Nike Swoosh SVG Logo */}
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="h-9 fill-white"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Nike Logo"
                >
                  <path d="M245.8 511.1c-4.5-2.3-8.7-4.5-12.6-6.5-36.2-18.5-59.9-30.6-79.3-40.5-40.5-20.7-65.3-33.4-98.6-50.4-5-2.5-7.7-5.4-7.7-11.7 0-20.7 31.5-52.2 81.9-81.9 50.4-29.7 99.1-44.1 118-44.1 9.9 0 18 3.6 23.4 10.8 5.9 7.7 9 17.1 9 27.5 0 36.9-42.3 99.5-102.9 194.9-1.4 2.3-1.4 4.5-.5 6.8 1.4 2.3 3.6 3.6 6.3 4.1 16.2 2.3 31.5 1.8 45.9-1.8 14.4-3.6 28.8-9 43.2-16.7 30.6-16.2 61.7-38.3 93.7-66.2 105.7-91.9 216.2-230.8 332.4-417.3 3.2-5 7.7-7.7 13.5-8.1 5.9 0 10.8 1.8 14.9 5.9 3.6 3.6 5.9 8.1 6.8 13.5.5 5.4-.5 10.8-3.2 15.8-77.9 146.8-149.5 267.7-214.4 362.8-64.9 95.1-122.5 163.5-172.9 204.9-50.4 41.9-91.9 62.6-123.9 62.6-13.5 0-25.2-3.6-35.1-10.8-9.9-7.7-17.6-18-22.5-31.1-5-13.5-7.2-28.4-6.8-44.6.5-16.7 3.2-33.8 8.6-51.3 10.8-35.1 29.7-72 56.7-110.8 27-38.3 58.5-76.1 94.6-113 36.2-36.9 73.4-69.4 111.7-97.3 13.5-9.9 27.5-18.9 41.9-27 14.9-8.1 29.3-14.9 43.7-20.7 14.4-5.9 28.4-10.3 41.9-13.5 13.5-3.2 25.7-4.5 36.5-4.5 18.5 0 31.5 5.4 39.6 16.2 8.1 10.8 12.1 23.9 12.1 39.2 0 24.3-8.1 53.1-24.3 86.4-16.2 33.3-39.2 68.5-68.9 105.3-29.7 36.9-63.1 72.9-100 108-36.9 35.1-74.3 66.2-112.1 93.2-38.3 27-75.2 48.1-110.3 63.1-35.1 14.9-66.7 22.5-94.6 22.5-2.3 0-4.5 0-6.8 0z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-black tracking-widest uppercase leading-none">
                    NIKE SURGE
                  </span>
                  <span className="text-orange-500 text-[10px] tracking-widest uppercase font-bold">
                    Air Energy Concept
                  </span>
                </div>
              </div>

              <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
                A high-fidelity design prototype merging sneaker culture lore with clean athlete energy formulation.
                Crafted for Design Paradox - VIT Mumbai CSI Chapter.
              </p>

              {/* Verified Official Nike Social Links */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Official Nike on ${social.name}`}
                    className="w-9 h-9 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 text-white/70 hover:text-white transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products Column (Col 5-7) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/80 mb-5">
              Explore Concept
            </h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('product')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SURGE Formula Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('flavors')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5 Sneaker Colorways
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('experience')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cinematic Experience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('drop')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Limited Drop Reservation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenStoreLocator}
                  className="hover:text-orange-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span>Store Locator (Demo)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Brand & Story Column (Col 8-9) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/80 mb-5">
              Creative Story
            </h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Design Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sneakerhead Inspiration
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFaq('legal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  VIT CSI Hackathon
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFaq('legal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fictional Collaborations
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Documentation Column (Col 10-12) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/80 mb-5">
              Support & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-white/50">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFaq('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3 h-3 text-orange-400" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFaq('support')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Send Design Feedback
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenFaq('legal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Academic Project Details
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenStoreLocator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sample Indian City Stores
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Links & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <button
              type="button"
              onClick={() => onOpenFaq('legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Academic Concept Disclaimer
            </button>
            <button
              type="button"
              onClick={() => onOpenFaq('legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy & Cookies (Demo)
            </button>
            <button
              type="button"
              onClick={() => onOpenFaq('legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use (Demo)
            </button>
          </div>

          <p className="text-xs text-white/40 font-mono">
            © {currentYear} Nike SURGE Prototype. Non-commercial student showcase.
          </p>
        </div>

        {/* Prominent Fictional Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[11px] text-white/35 max-w-3xl mx-auto leading-relaxed">
            <strong>Educational & Design Notice:</strong> This project was conceptualized for Design Paradox — VIT Mumbai CSI Chapter.
            Nike SURGE is a fictional educational UI/UX design project. All Nike brand marks, trademarks, and references to Air Jordan or Travis Scott belong to their respective copyright holders. No physical energy drink is manufactured or sold.
          </p>
        </div>
      </div>
    </footer>
  );
}
