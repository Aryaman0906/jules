import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Bath, Stethoscope, Sparkles, ShieldAlert, Palette, Clock, CheckCircle2, X, ChevronRight, MessageCircle } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants/data';

const iconMap: any = {
  Scissors: <Scissors />,
  Bath: <Bath />,
  Stethoscope: <Stethoscope />,
  Sparkles: <Sparkles />,
  ShieldAlert: <ShieldAlert />,
  Palette: <Palette />
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-white">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/4" />

      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="badge-pill">Our Expertise</div>
          <h2 className="heading-lg text-slate-900">
            Professional Care for <br />
            <span className="text-primary">Happy & Healthy Pets</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            From essential hygiene to luxury spa treatments, we provide a wide range of mobile grooming services tailored to your pet's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8 group relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] -z-10 group-hover:bg-primary/10 transition-colors" />

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(iconMap[service.icon], { size: 32 })}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <Clock size={14} />
                    {service.duration}
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] bg-white rounded-[40px] shadow-2xl z-[70] overflow-hidden flex flex-col"
            >
              <div className="relative h-48 bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-paw-pattern opacity-10" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 w-full p-8 flex items-end gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-primary shadow-xl">
                    {React.cloneElement(iconMap[selectedService.icon], { size: 40 })}
                  </div>
                  <div className="mb-2">
                    <h4 className="text-3xl font-black text-white">{selectedService.title}</h4>
                    <span className="text-white/70 font-black uppercase tracking-[0.2em] text-[10px]">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                <div className="space-y-4">
                  <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest">Description</h5>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {selectedService.description}
                  </p>
                  <div className="p-4 rounded-2xl bg-fresh/5 border border-fresh/10 text-fresh flex items-center gap-3">
                    <CheckCircle2 size={20} />
                    <span className="font-bold text-sm">Best for: {selectedService.bestFor}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest">What's Included</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.inclusions.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 group">
                        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:scale-150 transition-transform" />
                        <span className="text-slate-700 font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900 text-white">
                  <div className="flex-1">
                    <div className="text-xs text-white/50 font-black uppercase tracking-widest mb-1">Duration</div>
                    <div className="text-xl font-black">{selectedService.duration}</div>
                  </div>
                  <div className="h-10 w-[1px] bg-white/10" />
                  <div className="flex-1">
                    <div className="text-xs text-white/50 font-black uppercase tracking-widest mb-1">Experience</div>
                    <div className="text-xl font-black">Doorstep Van</div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
                <a
                  href="#booking"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-primary py-5 rounded-[20px]"
                >
                  <MessageCircle size={20} /> Book This Service
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-16 h-16 rounded-[20px] bg-white border border-slate-200 flex items-center justify-center text-slate-900 hover:border-primary transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
