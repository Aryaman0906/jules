import React from 'react';
import { motion } from 'framer-motion';
import {
  Scissors,
  Bath,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  Palette,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../constants/data';

const iconMap: Record<string, any> = {
  Scissors,
  Bath,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  Palette,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-soft-bg to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-slate-900 mb-8"
          >
            Professional Care <br />
            <span className="text-primary">Tailored for Every Pet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium"
          >
            From essential hygiene to luxury spa treatments, we provide a full range of grooming services in the comfort of your driveway.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-soft-bg rounded-[40px] p-10 border border-slate-100 hover:border-primary/20 hover:shadow-[0_30px_60px_-15px_rgba(142,36,140,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />

                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={36} />
                  </div>
                  {service.badge && (
                    <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-secondary/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-slate-200/50">
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-fresh" /> Professional Handling
                  </li>
                  <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-fresh" /> Premium Products
                  </li>
                </ul>

                <div className="mt-8 flex items-center text-primary font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
