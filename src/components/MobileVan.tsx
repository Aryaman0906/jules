import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, Sparkles, MessageCircle, Truck, Heart } from 'lucide-react';
import { BRAND_ASSETS } from '../constants/data';

const MobileVan: React.FC = () => {
  const steps = [
    {
      icon: <CalendarCheck size={32} />,
      title: "Book a Slot",
      description: "Request a time through our website or WhatsApp. We'll confirm your session instantly.",
      color: "bg-primary"
    },
    {
      icon: <Truck size={32} />,
      title: "Van Arrives",
      description: "Our fully-equipped grooming van reaches your doorstep at the scheduled time.",
      color: "bg-secondary"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Pet Groomed",
      description: "Your pet gets safe, hygienic, and professional grooming right outside your home.",
      color: "bg-fresh"
    }
  ];

  return (
    <section id="mobile-van" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-paw-pattern opacity-[0.03] -z-10" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <div className="badge-pill">How It Works</div>
          <h2 className="heading-lg text-slate-900">
            Professional Grooming <br />
            <span className="text-primary">Delivered to You</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            No more stressful car rides or waiting rooms. We bring the entire grooming salon to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[20%] left-0 w-full h-[2px] bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center space-y-8"
            >
              <div className={`w-24 h-24 rounded-[32px] ${step.color} text-white flex items-center justify-center shadow-2xl shadow-slate-200 relative z-10 group hover:scale-110 transition-transform duration-500`}>
                {step.icon}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white text-slate-900 border-4 border-slate-50 flex items-center justify-center font-black text-sm">
                  0{index + 1}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[60px] overflow-hidden border-[16px] border-white/5 shadow-2xl">
              <img
                src={BRAND_ASSETS.busImage}
                alt="Mobile Grooming Van Interior"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="badge-pill">Inside the Van</div>
              <h2 className="heading-lg text-slate-900 leading-tight">
                Safety & Hygiene <br />
                <span className="text-secondary">Are Our Priority</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Our van is designed to provide a calm and clinical environment for grooming. Every inch is sanitized between sessions.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Hot & Cold Water", desc: "Temperature controlled baths for comfort." },
                { title: "Climate Control", desc: "AC/Heating to keep pets relaxed in all seasons." },
                { title: "Full Power Backup", desc: "Silent generators for uninterrupted grooming." },
                { title: "Sanitized Tools", desc: "UV-sterilized equipment for every pet." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#booking" className="btn-primary py-5 px-12 group">
              <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
              Book the Van Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileVan;
