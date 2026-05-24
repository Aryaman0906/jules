import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ShieldCheck, Truck, Clock, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const Hero: React.FC = () => {
  const trustBadges = [
    { icon: <Truck size={20} />, text: "Mobile Van Service" },
    { icon: <Heart size={20} />, text: "Dogs & Cats" },
    { icon: <Clock size={20} />, text: "9AM–9PM" },
    { icon: <ShieldCheck size={20} />, text: "Hygienic Grooming" },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-paw-pattern-container">
      {/* Decorative Blobs */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 px-4 py-2 rounded-full shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Premium Pet Grooming</span>
          </div>

          <h1 className="heading-xl text-slate-900">
            Premium Pet Grooming <br />
            <span className="text-primary">at Your Doorstep</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Hum Tum Aur Poonch brings safe, hygienic and loving grooming care for dogs and cats through our fully-equipped mobile grooming van.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#booking" className="btn-primary">
              <Calendar size={20} /> Book Grooming
            </a>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-outline">
              <Phone size={20} /> Call Now
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center p-3 glass-card bg-white/40"
              >
                <div className="text-primary mb-2 bg-primary/10 p-2 rounded-full">
                  {badge.icon}
                </div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Floating Cards for premium feel */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 z-10 glass-card p-4 hidden sm:flex items-center gap-3"
          >
            <div className="bg-fresh/20 p-2 rounded-full text-fresh">
              <ShieldCheck size={24} />
            </div>
            <div className="text-sm font-bold">100% Hygienic</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 z-10 glass-card p-4 hidden sm:flex items-center gap-3"
          >
            <div className="bg-secondary/20 p-2 rounded-full text-secondary">
              <Heart size={24} />
            </div>
            <div className="text-sm font-bold">Gentle Care</div>
          </motion.div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <img
              src="/assets/humtum-bus.png"
              alt="Hum Tum Aur Poonch Mobile Grooming Van"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for better logo visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
