import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Truck, Clock, Heart, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, TRUST_STATS, BRAND_ASSETS } from '../constants/data';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-paw-pattern-container">
      {/* Parallax Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -left-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 -right-24 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 px-5 py-2.5 rounded-full shadow-sm backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Premium Pet Grooming</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              Gentle Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-flow">at Your Doorstep</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
              Hum Tum Aur Poonch brings professional, safe, and loving grooming care for your furry family members through our fully-equipped mobile van.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#booking" className="group relative btn-primary py-5 px-10 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Calendar size={22} className="relative z-10" />
                <span className="relative z-10">Book Grooming</span>
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-outline py-5 px-10 border-slate-200 text-slate-900 hover:border-primary">
                <Phone size={22} /> Call Now
              </a>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted By Pet Parents</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Truck size={24} />
                  </div>
                  <span className="text-sm font-black text-slate-700">Mobile Van</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Heart size={24} />
                  </div>
                  <span className="text-sm font-black text-slate-700">Dogs & Cats</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-fresh/10 rounded-2xl flex items-center justify-center text-fresh">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-sm font-black text-slate-700">100% Hygienic</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-10"
          >
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-20 glass-card p-6 bg-white/90 flex items-center gap-4 shadow-2xl"
            >
              <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                <MessageCircle size={32} />
              </div>
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">WhatsApp</div>
                <div className="text-lg font-black text-slate-900 leading-tight">Quick Booking</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 glass-card p-6 bg-white/90 flex items-center gap-4 shadow-2xl"
            >
              <div className="bg-fresh/20 p-3 rounded-2xl text-fresh">
                <Clock size={32} />
              </div>
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Available</div>
                <div className="text-lg font-black text-slate-900 leading-tight">9AM - 9PM</div>
              </div>
            </motion.div>

            <div className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(142,36,140,0.3)] group bg-white p-4">
              <div className="relative rounded-[48px] overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={BRAND_ASSETS.busImage}
                  alt="Hum Tum Aur Poonch Mobile Grooming Van"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 mix-blend-overlay" />
              </div>
            </div>

            {/* Background Paw Decor */}
            <div className="absolute -bottom-20 -right-20 -z-10 text-primary/5 select-none">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14 8c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm28 0c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md border-t border-slate-100 py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-primary">•</span>
                <span>{stat.label}</span>
                <span className="text-slate-900 ml-1">{stat.value}</span>
              </div>
            ))}
            <span className="text-primary">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
