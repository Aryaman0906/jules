import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants/data';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-slate-900 mb-4">Our Professional Services</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            From basic baths to luxury spa treatments, we offer a wide range of services tailored to your pet's specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card bg-white p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
