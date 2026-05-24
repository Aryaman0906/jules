import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[400px] font-black absolute -top-40 -left-20 leading-none">"</span>
        <span className="text-[400px] font-black absolute -bottom-40 -right-20 leading-none">"</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-fresh/10 text-fresh text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Testimonials
          </motion.div>
          <h2 className="heading-lg text-slate-900 mb-8">
            Loved by Pets, <br />
            <span className="text-fresh">Trusted by Parents</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Read what our happy clients have to say about our doorstep grooming service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-soft-bg rounded-[48px] p-10 md:p-12 border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-10">
                  <Quote size={40} className="absolute -top-4 -left-4 text-primary/5 -z-10" />
                  <p className="text-xl text-slate-700 font-medium leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-slate-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-black text-2xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm font-bold">{testimonial.pet}</p>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mt-1">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
