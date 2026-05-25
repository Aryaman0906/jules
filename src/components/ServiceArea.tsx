import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Navigation, Search } from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../constants/data';

const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-t from-primary/5 to-transparent -z-10" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="badge-pill">Coverage</div>
              <h2 className="heading-lg text-slate-900 leading-tight">
                Grooming Van <br />
                <span className="text-primary">In Your City</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Currently serving various sectors across {BUSINESS_INFO.location}. Check if your location is within our service range.
              </p>
            </div>

            <div className="relative group max-w-md">
              <div className="absolute inset-y-0 left-6 flex items-center text-slate-400 group-focus-within:text-primary transition-colors">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Enter your sector or area..."
                className="w-full bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white rounded-[24px] py-6 pl-16 pr-8 outline-none transition-all font-bold text-lg shadow-sm"
              />
              <button
                onClick={() => window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, do you provide grooming service in my area?`, '_blank')}
                className="absolute right-3 top-3 bottom-3 px-6 bg-slate-900 text-white rounded-[18px] text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-lg"
              >
                Check
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm">
                  <MapPin size={16} className="text-primary/40" />
                  {area}
                </div>
              ))}
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary/5 border border-primary/10 text-primary font-black text-sm uppercase tracking-widest">
                + More Areas
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Map Placeholder Graphic */}
            <div className="relative bg-slate-100 rounded-[60px] aspect-square overflow-hidden shadow-2xl border-[12px] border-white group">
              {/* Abstract Map Background */}
              <div className="absolute inset-0 bg-paw-pattern opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/20 rounded-full"
                  />
                  <div className="relative w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Navigation size={40} fill="currentColor" className="rotate-45" />
                  </div>
                </div>
              </div>

              {/* Float Pins */}
              {[
                { top: '20%', left: '30%' },
                { top: '60%', left: '70%' },
                { top: '40%', left: '80%' },
                { top: '75%', left: '20%' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                  className="absolute p-3 bg-white rounded-2xl shadow-xl text-primary border border-slate-50"
                  style={pos}
                >
                  <MapPin size={24} fill="currentColor" />
                </motion.div>
              ))}

              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-black text-slate-900 leading-tight">Can't Find <br /> Your Area?</h4>
                  <div className="w-12 h-12 rounded-2xl bg-fresh/10 text-fresh flex items-center justify-center">
                    <MessageCircle size={28} />
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-6">Send us your location on WhatsApp and we'll check our van availability for you.</p>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Check area availability: `} className="btn-primary py-4 rounded-2xl text-[10px]">
                  Message Us Now
                </a>
              </div>
            </div>

            {/* Visual Label */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fresh/10 rounded-full blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
