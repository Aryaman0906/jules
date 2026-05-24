import React from 'react';
import { PawPrint, Instagram, Facebook, Mail, Phone, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-soft-bg pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 lg:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <PawPrint size={28} />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">Hum Tum Aur Poonch</span>
            </a>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
              Bringing premium, professional, and loving pet grooming services right to your doorstep with our state-of-the-art mobile van.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-500 font-bold hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-slate-500 font-bold hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="text-slate-500 font-bold hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#booking" className="text-slate-500 font-bold hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 font-bold">
                <Phone size={18} className="text-primary" /> {BUSINESS_INFO.phoneDisplay}
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-bold">
                <Mail size={18} className="text-primary" /> {BUSINESS_INFO.email}
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-bold">
                <Heart size={18} className="text-primary" /> Serving the City
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-bold">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 italic">
            Built with <Heart size={14} className="text-secondary fill-secondary" /> for pet parents
          </p>
          <div className="flex gap-8 uppercase tracking-widest text-[10px] font-black">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
