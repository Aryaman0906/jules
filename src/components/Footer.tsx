import React from 'react';
import { PawPrint } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tight flex items-center">
                <span className="text-primary">Hum Tum Aur</span>
                <span className="text-secondary ml-1.5">Poonch</span>
                <PawPrint className="text-secondary ml-1" size={24} fill="currentColor" />
              </span>
            </a>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed mb-8">
              {BUSINESS_INFO.tagline} Providing premium mobile grooming services for your beloved dogs and cats.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#booking" className="text-slate-500 hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-slate-500">
              <li>{BUSINESS_INFO.phoneDisplay}</li>
              <li>{BUSINESS_INFO.email}</li>
              <li>{BUSINESS_INFO.hours}</li>
              <li>{BUSINESS_INFO.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Hum Tum Aur Poonch. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
