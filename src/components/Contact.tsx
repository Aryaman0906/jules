import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[80px] overflow-hidden shadow-2xl relative">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">

            <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                Contact Us
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Let's Groom Your <br />
                <span className="text-primary">Happy Pet!</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                Reach out through any of these channels to book your slot or ask questions. We're here to help!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex flex-col p-8 bg-white/5 rounded-[40px] hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Call Us</p>
                  <p className="text-xl font-black text-white">{BUSINESS_INFO.phoneDisplay}</p>
                </a>

                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex flex-col p-8 bg-white/5 rounded-[40px] hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Us</p>
                  <p className="text-lg font-black text-white truncate">{BUSINESS_INFO.email}</p>
                </a>
              </div>
            </div>

            <div className="p-12 md:p-20 flex flex-col justify-center space-y-10">
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Working Hours</p>
                    <p className="text-2xl font-black text-white">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-xl font-black text-white">{BUSINESS_INFO.serviceArea}</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-8">Follow Our Journey</p>
                <div className="flex gap-6">
                  <a href="#" className="w-16 h-16 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center text-white transition-all hover:-translate-y-2">
                    <Instagram size={32} />
                  </a>
                  <a href="#" className="w-16 h-16 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center text-white transition-all hover:-translate-y-2">
                    <Facebook size={32} />
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                    target="_blank"
                    className="flex-1 bg-primary hover:bg-primary/90 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-white transition-all hover:-translate-y-2 shadow-xl shadow-primary/20"
                  >
                    <MessageCircle size={24} /> WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
