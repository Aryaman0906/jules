import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Truck, Clock, MessageCircle, Star } from 'lucide-react';
import { BUSINESS_INFO, TRUST_STATS, BRAND_ASSETS } from '../constants/data';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-paw-pattern">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-20" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[10%] -right-[10%] w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[150px] -z-10"
      />

      <div className="container-wide px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 border border-primary/20 pl-2 pr-5 py-2 rounded-full shadow-sm backdrop-blur-sm">
              <div className="bg-primary text-white p-1.5 rounded-full">
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Premium Pet Care Service</span>
            </div>

            <h1 className="heading-xl text-slate-900">
              Luxury Grooming <br />
              <span className="gradient-text">at Your Doorstep</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Hum Tum Aur Poonch brings professional, safe, and loving spa care for your pets via our fully-equipped mobile van.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#booking" className="btn-primary py-5 px-10 group">
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                <span>Book on WhatsApp</span>
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-outline py-5 px-10">
                <Phone size={22} /> Call Now
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200/60">
              {["Doorstep convenience", "Transparent pricing", "Pet-friendly handling"].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-fresh" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Mockup Card */}
            <div className="relative z-10 bg-white rounded-[60px] p-4 md:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
              <div className="relative rounded-[48px] overflow-hidden bg-slate-50 aspect-[4/3] group">
                <img
                  src={BRAND_ASSETS.busImage}
                  alt="Hum Tum Aur Poonch Mobile Grooming Van"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Trust Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-8 z-20 glass-card p-5 rounded-[32px] flex items-center gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                <Truck size={28} />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service</div>
                <div className="text-base font-black text-slate-900">Mobile Van</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 glass-card p-5 rounded-[32px] flex items-center gap-4"
            >
              <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Safety</div>
                <div className="text-base font-black text-slate-900">100% Hygienic</div>
              </div>
            </motion.div>

            {/* Background Paw Decor */}
            <div className="absolute -bottom-16 -right-16 -z-10 opacity-10 animate-pulse">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                <path d="M50 20c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14 8c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm28 0c2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-14 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip Floating */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[40px] shadow-2xl p-8">
          <div className="flex justify-between items-center">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock size={24} /> {/* Would dynamic icon here */}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-lg font-black text-slate-900">{stat.value}</div>
                </div>
                {i < TRUST_STATS.length - 1 && <div className="h-10 w-[1px] bg-slate-100 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
