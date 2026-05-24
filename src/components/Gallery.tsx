import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  // Client can replace these with actual images later
  const placeholders = [
    { id: 1, label: 'Happy Dog After Grooming' },
    { id: 2, label: 'Clean & Tidy Cat' },
    { id: 3, label: 'Aroma Spa Session' },
    { id: 4, label: 'Precise Haircut' },
    { id: 5, label: 'Gentle Bath' },
    { id: 6, label: 'Happy Client' },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-slate-900 mb-4">Happy Tails Gallery</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600">See some of our happy furry clients after their grooming session.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {placeholders.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-3xl bg-slate-100 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-center p-4">
                {/*
                   NOTE TO CLIENT: Replace these divs with <img> tags
                   Example: <img src="/assets/gallery/pet-1.jpg" alt="..." className="..." />
                */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{item.label}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">View Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
