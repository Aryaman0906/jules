import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_DATA, BUSINESS_INFO } from '../constants/data';
import { Scissors, Heart, Sparkles } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-soft-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="badge-pill">Professional Team</div>
            <h2 className="heading-lg text-slate-900">
              Meet Our <br />
              <span className="text-primary">Expert Groomers</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              A team of passionate animal lovers trained in gentle handling and professional pet styling.
            </p>
          </div>

          <div className="p-8 rounded-[40px] bg-white shadow-sm border border-slate-100 max-w-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-fresh/10 text-fresh flex items-center justify-center flex-shrink-0">
                <Heart size={24} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                "We don't just groom pets; we build bonds. Every session is handled with the utmost patience."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-4 group"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-slate-100 mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e: any) => {
                    e.target.src = "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=600";
                    e.target.className = "w-full h-full object-cover opacity-60 grayscale";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Visual Note for Client */}
                <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">Replace with real team photo in public/assets/team/</p>
                </div>
              </div>

              <div className="px-6 pb-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 leading-tight">{member.name}</h4>
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{member.role}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <Scissors size={20} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {member.specialty.split('&').map((spec, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                      {spec.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-slate-500 font-medium text-sm leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Join Team Card */}
          <div className="premium-card p-12 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 bg-slate-50/50">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8">
              <Sparkles size={40} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">Love Pets? <br /> Join Our Team!</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 max-w-[200px] mx-auto">
              We are always looking for passionate pet groomers to join the family.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I am interested in joining your grooming team!`}
              className="btn-outline px-10 py-4 text-xs"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
