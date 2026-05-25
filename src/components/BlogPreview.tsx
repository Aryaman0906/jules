import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_PREVIEWS } from '../constants/data';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-soft-bg relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="badge-pill">Pet Care Guide</div>
            <h2 className="heading-lg text-slate-900">
              Expert Tips for <br />
              <span className="text-secondary">Pet Wellness</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Read our latest articles on grooming hygiene, pet health, and stress-free care tips.
            </p>
          </div>
          <button className="btn-outline px-10 py-5 rounded-[24px] self-start lg:self-end group">
            View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_PREVIEWS.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card group h-full flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] m-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10">
                  <BookOpen size={20} />
                </div>
              </div>

              <div className="p-8 pt-4 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  <Clock size={14} /> 5 Min Read • Grooming
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight mb-4">
                  {post.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>
                <a href="#" className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <div className="premium-card p-10 m-3 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 bg-white/50">
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-8">
              <BookOpen size={40} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 leading-tight">More Guides <br /> Coming Soon</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              We are working on more expert pet care content for you. Stay tuned!
            </p>
          </div>
        </div>

        {/* SEO Note for Developers */}
        <div className="mt-16 p-8 border-2 border-dashed border-slate-100 rounded-[40px] text-center">
          <p className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Developer Note: Expand these cards into full blog pages later for SEO optimization</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
