import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Info, ChevronRight, MessageCircle, Heart, Star } from 'lucide-react';
import { GALLERY_DATA, BUSINESS_INFO } from '../constants/data';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/4" />

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="badge-pill">Gallery</div>
            <h2 className="heading-lg text-slate-900 leading-tight">
              Moments of <br />
              <span className="text-primary">Happy Tails</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Explore our collection of freshly groomed pets. Every photo tells a story of care, patience, and professional styling.
            </p>
          </div>

          <div className="p-8 rounded-[40px] bg-soft-bg border border-slate-100 max-w-sm hidden lg:block">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                <Star size={24} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">
                Click on any photo to see the transformation details and service used.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-[40px] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${
                item.size === 'large' ? 'lg:col-span-2 lg:row-span-2' :
                item.size === 'medium' ? 'lg:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e: any) => {
                  e.target.src = "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800";
                  e.target.className = "w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="px-3 py-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <Heart size={14} /> {item.petType}
                    </div>
                    <div className="h-4 w-[1px] bg-white/20" />
                    <button className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                      Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Note for client */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-[110] bg-white rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              {/* Close Button Mobile */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900 lg:hidden"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="flex-[1.5] relative bg-slate-100 overflow-hidden group">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.target.src = "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                <div className="absolute top-10 left-10 hidden lg:block">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-white/20">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Developer Note</p>
                    <p className="text-sm font-bold text-slate-700">Replace this placeholder image with a real <br /> high-resolution client photo in public/assets/gallery/</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-10 md:p-16 flex flex-col justify-between bg-white overflow-y-auto">
                <div className="space-y-12">
                  <div className="flex justify-between items-start hidden lg:flex">
                    <div className="badge-pill">{selectedImage.badge}</div>
                    <button onClick={() => setSelectedImage(null)} className="text-slate-400 hover:text-primary transition-colors">
                      <X size={32} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <h3 className="heading-lg text-slate-900">{selectedImage.title}</h3>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 rounded-[32px] bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pet Breed</div>
                      <div className="text-lg font-black text-slate-900">{selectedImage.petType}</div>
                    </div>
                    <div className="p-6 rounded-[32px] bg-slate-50 border border-slate-100">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Service Package</div>
                      <div className="text-lg font-black text-slate-900">{selectedImage.service}</div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/10 flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20">
                      <Info size={32} />
                    </div>
                    <p className="text-slate-700 font-bold leading-relaxed">
                      This transformation was achieved in a single mobile session right at the client's home.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-100">
                  <a
                    href="#booking"
                    onClick={() => setSelectedImage(null)}
                    className="flex-1 btn-primary py-5 rounded-[24px]"
                  >
                    <MessageCircle size={20} /> Book Similar Service
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="btn-outline py-5 px-8 rounded-[24px]"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
