import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO, BRAND_ASSETS } from '../constants/data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Mobile Van', href: '#mobile-van' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="relative group">
            <div className="bg-white rounded-2xl p-2 md:p-2.5 shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
              <img
                src={BRAND_ASSETS.logo}
                alt={BUSINESS_INFO.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary text-sm font-black uppercase tracking-widest transition-all hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden xl:flex items-center gap-2 text-slate-900 font-black"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm tracking-tighter">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#booking"
                className="btn-primary px-8 py-3.5 rounded-2xl text-xs"
              >
                Book Grooming
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-900 text-lg font-black py-3 border-b border-slate-50 flex justify-between items-center"
                >
                  {link.name}
                  <div className="w-2 h-2 rounded-full bg-primary/20" />
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-50 text-slate-900 font-black"
                >
                  <Phone size={20} className="text-primary" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary py-5 rounded-2xl"
                >
                  Book Grooming Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
