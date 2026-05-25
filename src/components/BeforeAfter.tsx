import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BEFORE_AFTER_DATA } from '../constants/data';
import { ChevronRight, ArrowLeftRight, Camera, Scissors } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Dogs', 'Cats'];

  const filteredData = filter === 'All'
    ? BEFORE_AFTER_DATA
    : BEFORE_AFTER_DATA.filter(item => item.type === filter);

  return (
    <section id="transformations" className="section-padding bg-soft-bg relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="badge-pill">Visual Proof</div>
            <h2 className="heading-lg text-slate-900">
              Grooming <br />
              <span className="text-secondary">Transformations</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              See the incredible difference professional care makes. Real results from our mobile grooming station.
            </p>
          </div>

          <div className="flex gap-3 bg-white p-2 rounded-[24px] shadow-sm border border-slate-100 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-[18px] text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredData.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="premium-card p-4 md:p-8 space-y-8"
            >
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{item.petName}</h3>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{item.breed} • {item.service}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Scissors size={24} />
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-[40px] aspect-[16/9] md:aspect-[2/1] bg-slate-100">
                <div className="absolute inset-0 flex">
                  {/* Before Side */}
                  <div className="relative flex-1 overflow-hidden border-r-2 border-white/40">
                    <img
                      src={item.before}
                      alt="Before Grooming"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e: any) => {
                        e.target.src = "https://images.unsplash.com/photo-1541364983171-a8ba01d95cfc?auto=format&fit=crop&q=80&w=600";
                        e.target.className = "absolute inset-0 w-full h-full object-cover grayscale opacity-50";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                      Before
                    </div>
                  </div>

                  {/* After Side */}
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={item.after}
                      alt="After Grooming"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e: any) => {
                        e.target.src = "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600";
                        e.target.className = "absolute inset-0 w-full h-full object-cover opacity-80";
                      }}
                    />
                    <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                      After
                    </div>
                  </div>
                </div>

                {/* Slider Indicator */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-2xl z-20">
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary border-4 border-primary/5">
                    <ArrowLeftRight size={20} />
                  </div>
                </div>

                {/* Note for client */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl text-center shadow-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Note: Replace placeholders with real photos in public/assets/before-after/</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 font-medium leading-relaxed italic px-2">
                "{item.story}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-slate-900 rounded-[50px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-paw-pattern opacity-[0.03]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-3xl font-black text-white leading-tight">Want a Similar <br /> <span className="text-primary">Transformation?</span></h4>
              <p className="text-white/60 font-medium text-lg">Give your pet the premium care they deserve.</p>
            </div>
            <a href="#booking" className="btn-primary py-6 px-12 rounded-3xl group shadow-primary/40">
              Book a Makeover <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="absolute -bottom-10 -right-10 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-1000">
            <Camera size={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
