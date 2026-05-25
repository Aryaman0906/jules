import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dog, Cat, CheckCircle2, Phone, Calendar, Clock, ArrowRight } from 'lucide-react';
import { DOG_PRICES, CAT_PRICES, BUSINESS_INFO } from '../constants/data';

const Pricing: React.FC = () => {
  const [petType, setPetType] = useState<'Dog' | 'Cat'>('Dog');
  const [dogSize, setDogSize] = useState<'small' | 'medium' | 'large'>('small');

  const currentPrices = petType === 'Dog' ? DOG_PRICES[dogSize] : CAT_PRICES;

  return (
    <section id="pricing" className="section-padding bg-soft-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="badge-pill">Pricing</div>
          <h2 className="heading-lg text-slate-900">
            Transparent <br />
            <span className="text-secondary">Value Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Premium grooming shouldn't be a mystery. Choose your pet type and size to see our base rates. Final pricing may vary based on coat condition.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex flex-col items-center gap-10 mb-16">
          {/* Pet Type Toggle */}
          <div className="bg-white p-2 rounded-[32px] shadow-sm border border-slate-100 flex">
            {['Dog', 'Cat'].map((type) => (
              <button
                key={type}
                onClick={() => setPetType(type as any)}
                className={`flex items-center gap-3 px-10 py-5 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all ${
                  petType === type
                  ? 'bg-slate-900 text-white shadow-xl'
                  : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {type === 'Dog' ? <Dog size={20} /> : <Cat size={20} />}
                {type}
              </button>
            ))}
          </div>

          {/* Dog Size Toggle */}
          <AnimatePresence mode="wait">
            {petType === 'Dog' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-white/50 backdrop-blur-sm p-2 rounded-[28px] border border-white flex"
              >
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setDogSize(size)}
                    className={`px-8 py-3 rounded-[20px] text-[10px] font-black uppercase tracking-widest transition-all ${
                      dogSize === size
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPrices.map((item, index) => (
            <motion.div
              layout
              key={item.item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="premium-card p-8 group relative"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting from</div>
                    <div className="text-3xl font-black text-slate-900">₹{item.price}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">{item.item}</h3>
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <Clock size={14} /> Duration varies
                  </div>
                </div>

                <ul className="space-y-3 pt-4 border-t border-slate-50">
                  <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-fresh" /> Mobile Van Service
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-fresh" /> Doorstep Convenience
                  </li>
                </ul>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I want to book ${item.item} for my ${petType}.`}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-50 text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all"
                >
                  Book on WhatsApp <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-16 p-10 bg-slate-900 rounded-[50px] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-paw-pattern opacity-[0.03]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 text-white">
              <Phone size={32} className="text-primary" />
              <div className="text-left">
                <div className="text-xs font-black text-white/50 uppercase tracking-widest">Custom Quotes</div>
                <div className="text-xl font-black">Call for Special Packages</div>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4 text-white text-left">
              <Calendar size={32} className="text-secondary" />
              <div className="text-left">
                <div className="text-xs font-black text-white/50 uppercase tracking-widest">Availability</div>
                <div className="text-xl font-black">Mon - Sun (9AM-9PM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
