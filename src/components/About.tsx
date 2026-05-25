import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, Truck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, BRAND_ASSETS } from '../constants/data';

const About: React.FC = () => {
  const points = [
    { title: "Gentle Handling", text: "We treat every pet like family, with patience and love." },
    { title: "Hygienic Process", text: "Sanitized tools and fresh towels for every session." },
    { title: "Doorstep Convenience", text: "No travel stress or waiting rooms for your pets." },
    { title: "Expert Groomers", text: "Trained professionals for both dogs and cats." }
  ];

  return (
    <section id="about" className="section-padding bg-soft-bg relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl group">
              <img
                src={BRAND_ASSETS.busImage}
                alt="Hum Tum Aur Poonch Mobile Van"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-[32px] border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                    <Truck size={24} />
                  </div>
                  <div className="text-slate-900 font-black text-lg leading-tight">
                    Fully Equipped <br /> Grooming Station
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Paw */}
            <div className="absolute -top-10 -right-10 w-32 h-32 text-primary/10 animate-float">
              <ShieldCheck size={120} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="badge-pill">Our Story</div>
              <h2 className="heading-lg text-slate-900 leading-tight">
                Grooming with <span className="text-secondary">Love & Care</span> <br />
                Right at Your Door.
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                {BUSINESS_INFO.mission} Hum Tum Aur Poonch was born out of a simple goal: to make professional grooming accessible and stress-free for pets and their parents in the city.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fresh/10 text-fresh flex items-center justify-center mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-widest text-xs">{point.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#booking" className="btn-secondary py-5 px-10 inline-flex items-center gap-3">
                <Heart size={20} fill="currentColor" />
                Book Your First Session
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
