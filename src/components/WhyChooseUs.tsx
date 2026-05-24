import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, Heart, BadgeCheck, Zap, Scissors } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Home className="text-primary" size={28} />,
      title: "Doorstep Convenience",
      description: "No more traffic or stressful car rides. We come to your location."
    },
    {
      icon: <Shield className="text-primary" size={28} />,
      title: "Clean & Hygienic",
      description: "Strict sanitation protocols for the van and all grooming tools."
    },
    {
      icon: <Heart className="text-primary" size={28} />,
      title: "Pet-Friendly Handling",
      description: "Our groomers are trained to handle pets with love and patience."
    },
    {
      icon: <BadgeCheck className="text-primary" size={28} />,
      title: "Transparent Pricing",
      description: "No hidden charges. Clear and upfront pricing for every service."
    },
    {
      icon: <Scissors className="text-primary" size={28} />,
      title: "Professional Care",
      description: "Experienced groomers who understand different breed requirements."
    },
    {
      icon: <Zap className="text-primary" size={28} />,
      title: "Easy Booking",
      description: "Quick and simple booking process via web, call, or WhatsApp."
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-slate-900 mb-4">Why Pet Parents Trust Us</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a stress-free grooming experience that prioritizes your pet's comfort and hygiene above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
