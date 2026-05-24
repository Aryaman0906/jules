import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, ChevronRight, Info } from 'lucide-react';
import { GALLERY_DATA } from '../constants/data';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_DATA[0] | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedItem]);

  return (
    <section id="gallery" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Gallery
          </motion.div>
          <h2 className="heading-lg text-slate-900 mb-8">
            Happy Tails & <br />
            <span className="text-primary">Fresh Transformations</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Explore some of our recent grooming sessions. We take pride in making every pet look and feel their absolute best.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-[40px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${
                item.size === 'large' ? 'lg:row-span-2 lg:col-span-2' :
                item.size === 'medium' ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest mb-3">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm font-bold">{item.subtitle}</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Info size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-medium italic">
            *Real pet images will be updated as per client gallery.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[60px] overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-2xl bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <X size={24} className="text-slate-900" />
              </button>

              <div className="lg:w-3/5 bg-slate-100 relative overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: selectedItem.color }}
                />
              </div>

              <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit">
                  {selectedItem.badge}
                </div>

                <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {selectedItem.title}
                </h3>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary">
                      <ChevronRight size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Pet Type</p>
                      <p className="text-lg font-bold text-slate-700">{selectedItem.petType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary">
                      <ChevronRight size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Service Provided</p>
                      <p className="text-lg font-bold text-slate-700">{selectedItem.service}</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
                  {selectedItem.description}
                </p>

                <a
                  href="#booking"
                  onClick={() => setSelectedItem(null)}
                  className="btn-primary py-5 w-full shadow-2xl shadow-primary/30"
                >
                  <Calendar size={22} /> Book Similar Grooming
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
