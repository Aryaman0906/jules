import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    petType: 'Dog',
    petSize: 'Small',
    service: 'Full Grooming',
    date: '',
    address: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Booking Request - Hum Tum Aur Poonch*%0A%0A` +
      `*Owner:* ${formData.ownerName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Pet:* ${formData.petType} (${formData.petSize})%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Address:* ${formData.address}%0A` +
      `*Notes:* ${formData.notes}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-soft-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
              Book a Slot
            </div>
            <h2 className="heading-lg text-slate-900 mb-8 leading-tight">
              Ready to Give Your Pet a <br />
              <span className="text-primary">Spa Day at Home?</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Fill out the form to request a booking. We'll finalize the details with you on WhatsApp.
            </p>

            <div className="space-y-6">
              {[
                { icon: <CheckCircle2 className="text-fresh" />, text: "No online payment required" },
                { icon: <CheckCircle2 className="text-fresh" />, text: "Confirm details on WhatsApp" },
                { icon: <CheckCircle2 className="text-fresh" />, text: "Flexible rescheduling" },
                { icon: <CheckCircle2 className="text-fresh" />, text: "Transparent pricing" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart size={120} />
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Need Help?</h4>
                <p className="text-white/80 font-medium mb-8">Not sure which service is right for your pet? Call us directly.</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-3 bg-white text-primary font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-slate-100 transition-colors">
                  <ShieldCheck size={24} /> Call: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[60px] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Owner Name</label>
                  <input
                    required
                    type="text"
                    name="ownerName"
                    placeholder="Your Name"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Pet Type</label>
                  <select
                    name="petType"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold appearance-none cursor-pointer"
                    onChange={handleChange}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Pet Size</label>
                  <select
                    name="petSize"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold appearance-none cursor-pointer"
                    onChange={handleChange}
                  >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                <select
                  name="service"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold appearance-none cursor-pointer"
                  onChange={handleChange}
                >
                  <option>Full Grooming</option>
                  <option>Regular Bath</option>
                  <option>Medical Bath</option>
                  <option>Aroma Spa</option>
                  <option>Tick Removal</option>
                  <option>Haircut</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
                <input
                  required
                  type="date"
                  name="date"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold cursor-pointer"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Address</label>
                <textarea
                  required
                  name="address"
                  rows={3}
                  placeholder="Grooming location"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Notes (Optional)</label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Any special needs for your pet?"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-[24px] py-4 px-6 outline-none transition-all font-bold resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-6 rounded-[24px] shadow-2xl shadow-primary/30 group"
              >
                <MessageCircle size={24} className="group-hover:scale-125 transition-transform" />
                Book via WhatsApp
              </button>

              <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-6">
                Directly opens WhatsApp with your details
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
