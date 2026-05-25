import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, BUSINESS_INFO } from '../constants/data';
import { Star, Quote, MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-[-20%] translate-y-[-20%]" />

      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="badge-pill">Happy Tails</div>
          <h2 className="heading-lg text-slate-900">
            Trusted by <br />
            <span className="text-secondary">Local Pet Parents</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Real feedback from our wonderful community of pets and their owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 relative flex flex-col h-full"
            >
              <div className="absolute top-8 right-10 text-primary/10">
                <Quote size={60} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD600" className="text-[#FFD600]" />
                ))}
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 italic flex-1">
                "{review.text}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shadow-sm border-2 border-white">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover grayscale opacity-50"
                    onError={(e: any) => e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=" + review.name}
                  />
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 leading-tight">{review.name}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Parent of {review.pet}</div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                  {review.service}
                </span>
                <div className="flex items-center gap-1 text-[10px] font-black text-fresh uppercase tracking-widest">
                  <MessageCircle size={12} fill="currentColor" /> Verified Review
                </div>
              </div>
            </motion.div>
          ))}

          {/* Google Review Placeholder Card */}
          <div className="premium-card p-10 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 bg-slate-50/50">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-5 w-auto object-contain"
              />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-3">Google Reviews</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
              Real-time Google Reviews can be embedded here once the business profile is verified.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I want to leave a review for my pet's grooming session!`}
              className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
            >
              Share Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
