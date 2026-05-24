import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dog, Cat, Check, Star, Sparkles } from 'lucide-react';
import { DOG_PRICES, CAT_PRICES } from '../constants/data';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat'>('dog');

  return (
    <section id="pricing" className="section-padding bg-soft-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Transparent Pricing
          </motion.div>
          <h2 className="heading-lg text-slate-900 mb-8">
            Simple, Fair <br />
            <span className="text-secondary">Service Rates</span>
          </h2>

          {/* Custom Toggle */}
          <div className="inline-flex bg-white p-2 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 relative z-10">
            <button
              onClick={() => setActiveTab('dog')}
              className={`flex items-center gap-3 px-10 py-4 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all ${
                activeTab === 'dog'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Dog size={20} /> Dogs
            </button>
            <button
              onClick={() => setActiveTab('cat')}
              className={`flex items-center gap-3 px-10 py-4 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all ${
                activeTab === 'cat'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Cat size={20} /> Cats
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'dog' ? (
            <motion.div
              key="dog-pricing"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {Object.entries(DOG_PRICES).map(([size, items], i) => (
                <PricingCard
                  key={size}
                  title={`${size.charAt(0).toUpperCase() + size.slice(1)} Dog`}
                  items={items}
                  highlight={size === 'medium'}
                  index={i}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="cat-pricing"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-2xl mx-auto"
            >
              <PricingCard title="Cat Grooming" items={CAT_PRICES} highlight index={0} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-primary" /> Prices may vary based on pet coat condition and behavior.
          </p>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  items: { item: string; price: number }[];
  highlight?: boolean;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items, highlight, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-[48px] overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl ${
        highlight
        ? 'border-primary shadow-[0_40px_80px_-20px_rgba(142,36,140,0.15)] z-10 scale-105'
        : 'border-slate-100 hover:border-primary/20'
      }`}
    >
      {highlight && (
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-secondary" />
      )}

      <div className={`p-10 pb-6 ${highlight ? 'bg-primary/5' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-2xl font-black ${highlight ? 'text-primary' : 'text-slate-900'}`}>{title}</h3>
          {highlight && (
            <div className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Most Booked
            </div>
          )}
        </div>
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Starting From</p>
      </div>

      <div className="p-10 pt-0 space-y-4">
        {items.map((service, i) => (
          <div key={i} className="flex justify-between items-center group/item py-2">
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlight ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                <Check size={12} />
              </div>
              <span className="text-slate-700 font-medium group-hover/item:text-primary transition-colors">{service.item}</span>
            </div>
            <span className="font-black text-slate-900">₹{service.price}</span>
          </div>
        ))}
      </div>

      <div className="p-10 pt-0">
        <a
          href="#booking"
          className={`w-full py-5 rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
            highlight
            ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90'
            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'
          }`}
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
};

export default Pricing;
