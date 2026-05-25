import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO, BRAND_ASSETS } from '../constants/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-paw-pattern opacity-[0.03] -z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />

      <div className="container-wide px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-8">
            <a href="#" className="inline-block">
              <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-white/10">
                <img
                  src={BRAND_ASSETS.logo}
                  alt={BUSINESS_INFO.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-slate-400 font-medium leading-relaxed">
              {BUSINESS_INFO.mission}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Pricing', 'Mobile Van', 'Gallery', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-primary font-bold transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4">
              {['Full Grooming', 'Regular Bath', 'Medical Bath', 'Aroma Spa', 'Haircut', 'Nail Clipping'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-400 hover:text-primary font-bold transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-white font-black group-hover:text-primary transition-colors">{BUSINESS_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-white font-black group-hover:text-secondary transition-colors text-sm break-all">{BUSINESS_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-fresh">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Working Hours</div>
                  <div className="text-white font-black">{BUSINESS_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-sm text-center md:text-left">
            © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Designed for Mobile Pet Grooming.
          </p>
          <div className="flex items-center gap-2 text-slate-500 font-black text-xs uppercase tracking-widest">
            Made with <Heart size={14} className="text-secondary fill-secondary animate-pulse" /> for Pets
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile Only */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden flex gap-3">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
          className="flex-1 bg-fresh text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <MessageCircle size={20} /> WhatsApp
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-16 h-16 bg-white text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center active:scale-95 transition-all border border-slate-100"
        >
          <Phone size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
