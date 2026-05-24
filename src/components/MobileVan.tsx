import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, Sparkles, MessageCircle, Truck, Heart } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/data';

const MobileVan: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle size={32} />,
      title: "Book via WhatsApp",
      description: "Send us your pet's details and preferred slot. We'll confirm your booking instantly.",
      color: "bg-primary"
    },
    {
      icon: <Truck size={32} />,
      title: "Van Arrives",
      description: "Our professional, sanitized grooming van arrives at your doorstep on time.",
      color: "bg-secondary"
    },
    {
      icon: <Heart size={32} />,
      title: "Grooming & Love",
      description: "Your pet gets pampered by expert groomers in a stress-free environment.",
      color: "bg-fresh"
    }
  ];

  return (
    <section id="mobile-van" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-primary rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-secondary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                Mobile Grooming Van
              </div>
              <h2 className="heading-lg mb-8 leading-tight">
                No Travel Stress. <br />
                <span className="text-primary">Grooming Comes Home.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Why wait in stressful salons? Our fully-equipped, climate-controlled mobile grooming van provides a premium experience right in your driveway.
              </p>
            </div>

            <div className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/10">
              <p className="text-2xl font-black mb-10 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                "No travel stress. No waiting rooms. <br /> Grooming comes home."
              </p>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 relative group">
                    {index !== steps.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-[-32px] w-0.5 bg-white/10" />
                    )}
                    <div className={`shrink-0 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-xl shadow-black/20 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">{step.title}</h3>
                      <p className="text-slate-400 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden border-[16px] border-white/5 shadow-2xl">
              <img
                src={BRAND_ASSETS.busImage}
                alt="Mobile Grooming Van Interior"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

              <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl rounded-[40px] p-10 border border-white/10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Sparkles size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">State-of-the-art Equipment</h4>
                    <p className="text-slate-300 text-sm font-medium">Safe, sanitized, and fully-equipped for all breeds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-8 glass-card p-6 bg-primary shadow-2xl"
            >
              <div className="text-4xl font-black mb-1">5000+</div>
              <div className="text-xs font-black uppercase tracking-widest text-white/70">Happy Pets Served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileVan;
