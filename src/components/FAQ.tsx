import React from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../constants/data';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="badge-pill">Got Questions?</div>
          <h2 className="heading-lg text-slate-900">
            Everything You <br />
            <span className="text-primary">Need to Know</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Common questions about our mobile grooming process and how we care for your pets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`premium-card overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-xl scale-[1.01] border-primary/20' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 pt-0 text-lg text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
