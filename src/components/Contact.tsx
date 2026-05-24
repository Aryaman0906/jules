import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-soft-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-lg text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Have questions about our services or want to book a grooming session for your pet?
              Reach out to us through any of these channels.
            </p>

            <div className="space-y-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                <div className="bg-fresh/10 p-4 rounded-2xl text-fresh">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Service Area</p>
                  <p className="text-lg font-bold text-slate-900">{BUSINESS_INFO.serviceArea}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

             <h3 className="text-3xl font-bold mb-6 relative z-10">Follow Our Journey</h3>
             <p className="text-slate-400 mb-10 text-lg relative z-10">
               Check out our latest grooming sessions and happy pets on social media.
             </p>

             <div className="flex gap-4 relative z-10">
               <a href="#" className="w-16 h-16 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center transition-colors">
                 <Instagram size={28} />
               </a>
               <a href="#" className="w-16 h-16 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center transition-colors">
                 <Facebook size={28} />
               </a>
             </div>

             <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
               <p className="text-sm text-slate-500 uppercase tracking-[0.2em] font-black mb-4">Quick Booking</p>
               <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-2xl font-bold hover:text-primary transition-colors"
               >
                 WhatsApp Now <MessageCircle size={24} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
