import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dog, Cat } from 'lucide-react';
import { DOG_PRICING, CAT_PRICING } from '../constants/data';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat'>('dog');

  return (
    <section id="pricing" className="section-padding bg-soft-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-slate-900 mb-4">Transparent Pricing</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600">Choose your pet type to see our detailed pricing</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-full shadow-lg border border-slate-100">
            <button
              onClick={() => setActiveTab('dog')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                activeTab === 'dog' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Dog size={20} /> Dogs
            </button>
            <button
              onClick={() => setActiveTab('cat')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-bold ${
                activeTab === 'cat' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Cat size={20} /> Cats
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dog' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DOG_PRICING.map((tier, index) => (
                  <div key={index} className="glass-card bg-white overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                    <div className="bg-primary/5 p-8 text-center border-b border-slate-100">
                      <h3 className="text-2xl font-bold text-primary">{tier.category}</h3>
                    </div>
                    <div className="p-8 space-y-4 flex-grow">
                      {tier.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                          <span className="text-slate-700 font-medium">{item.name}</span>
                          <span className="text-primary font-bold">₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-8 pt-0">
                      <a href="#booking" className="btn-outline w-full py-3">Book for {tier.category}</a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-lg mx-auto">
                <div className="glass-card bg-white overflow-hidden flex flex-col border-2 border-primary/20">
                  <div className="bg-primary/5 p-8 text-center border-b border-slate-100">
                    <h3 className="text-2xl font-bold text-primary">{CAT_PRICING[0].category}</h3>
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    {CAT_PRICING[0].items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-slate-700 font-medium">{item.name}</span>
                        <span className="text-primary font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-8 pt-0">
                    <a href="#booking" className="btn-outline w-full py-3">Book for Cat</a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 italic">
            * Prices may vary based on breed, coat condition, and specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
