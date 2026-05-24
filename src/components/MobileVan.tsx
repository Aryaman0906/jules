import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MapPin, Sparkles } from 'lucide-react';

const MobileVan: React.FC = () => {
  const steps = [
    {
      icon: <CalendarCheck size={32} />,
      title: "Book a Slot",
      description: "Choose your preferred date and time through our website or WhatsApp."
    },
    {
      icon: <MapPin size={32} />,
      title: "Van Arrives",
      description: "Our fully equipped mobile grooming van arrives right at your doorstep."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Pet Gets Groomed",
      description: "Your pet receives professional care in a safe and hygienic environment."
    }
  ];

  return (
    <section id="mobile-van" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-lg mb-6">Mobile Grooming Van</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We bring the salon to you! Our mobile van is designed to provide a premium grooming experience without the stress of travel for your pets.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="bg-primary/20 p-4 rounded-2xl text-primary h-fit">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-primary/10">
               <img
                src="/assets/humtum-bus.png"
                alt="Mobile Van Interior"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileVan;
