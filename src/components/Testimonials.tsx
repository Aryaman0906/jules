import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-primary/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-slate-900 mb-4">What Pet Parents Say</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 -rotate-12 group-hover:text-primary/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed italic mb-8 relative z-10">
                "{t.text}"
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                <p className="text-primary font-medium text-sm">{t.pet}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
