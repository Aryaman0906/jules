import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="badge-pill">Contact Us</div>
              <h2 className="heading-lg text-slate-900 leading-tight">
                Let's Give Your Pet <br />
                <span className="text-primary">Some Extra Love</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Have questions about our service or want to book a grooming session? We're just a message away.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone size={24} />,
                  label: "Call Now",
                  value: BUSINESS_INFO.phoneDisplay,
                  href: `tel:${BUSINESS_INFO.phone}`,
                  color: "bg-primary"
                },
                {
                  icon: <MessageCircle size={24} />,
                  label: "WhatsApp",
                  value: "Chat with Us",
                  href: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
                  color: "bg-fresh"
                },
                {
                  icon: <Mail size={24} />,
                  label: "Email",
                  value: "Send Message",
                  href: `mailto:${BUSINESS_INFO.email}`,
                  color: "bg-secondary"
                },
                {
                  icon: <Clock size={24} />,
                  label: "Working Hours",
                  value: BUSINESS_INFO.hours,
                  href: "#",
                  color: "bg-slate-900"
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="premium-card p-8 group flex flex-col items-center text-center space-y-4 hover:border-primary/20 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-black text-slate-900 leading-tight">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-6 items-center">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Follow Us</span>
              <div className="h-[1px] flex-1 bg-slate-100" />
              <div className="flex gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map/Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[60px] overflow-hidden aspect-square lg:aspect-auto lg:h-full bg-slate-100 shadow-2xl border-[16px] border-white group">
              <img
                src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800"
                alt="Pet Grooming Contact"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />

              {/* Overlay Card */}
              <div className="absolute inset-x-8 bottom-8 bg-slate-900 rounded-[40px] p-8 md:p-10 text-white shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-[28px] bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 flex-shrink-0 animate-float">
                    <MapPin size={36} />
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-2xl font-black">Our Service Hub</h4>
                    <p className="text-white/60 font-medium leading-relaxed">
                      Based in {BUSINESS_INFO.location}, our mobile van reaches you wherever you are.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developer Note */}
              <div className="absolute top-10 left-10 right-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] font-black uppercase tracking-widest">Replace with real location photo or Google Map screenshot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
