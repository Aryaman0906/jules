import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, ShieldCheck, Heart, Dog, Cat, MapPin, Calendar, Clock, PlusCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants/data';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    petName: '',
    petBreed: '',
    petType: 'Dog',
    petSize: 'Small',
    service: 'Full Grooming',
    date: '',
    timeSlot: 'Morning (9AM-12PM)',
    address: '',
    notes: '',
  });

  const [addOns, setAddOns] = useState<string[]>([]);

  const handleAddOnToggle = (id: string) => {
    if (addOns.includes(id)) {
      setAddOns(addOns.filter(a => a !== id));
    } else {
      setAddOns([...addOns, id]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Booking Request - Hum Tum Aur Poonch*\n\n` +
      `*OWNER DETAILS*\n` +
      `Name: ${formData.ownerName}\n` +
      `Phone: ${formData.phone}\n\n` +
      `*PET DETAILS*\n` +
      `Name: ${formData.petName}\n` +
      `Type: ${formData.petType} (${formData.petSize})\n` +
      `Breed: ${formData.petBreed}\n\n` +
      `*SERVICE DETAILS*\n` +
      `Package: ${formData.service}\n` +
      `Add-ons: ${addOns.length > 0 ? addOns.join(', ') : 'None'}\n\n` +
      `*APPOINTMENT*\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.timeSlot}\n` +
      `Address: ${formData.address}\n\n` +
      `*NOTES*\n` +
      `${formData.notes || 'No extra notes'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const extraServices = [
    { id: 'Nail Clipping', price: '₹150+' },
    { id: 'Ear Cleaning', price: '₹50+' },
    { id: 'Teeth Cleaning', price: '₹150+' },
    { id: 'Tick Removal', price: '₹300+' },
    { id: 'Aroma Spa', price: '₹300+' },
  ];

  return (
    <section id="booking" className="section-padding bg-soft-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Content Left (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-10"
          >
            <div className="space-y-6">
              <div className="badge-pill">Reserve a Slot</div>
              <h2 className="heading-lg text-slate-900 leading-[1.1]">
                Book Your Pet's <br />
                <span className="text-primary">Spa Day at Home</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Fill out the request form and our team will get back to you on WhatsApp to confirm the final slot and pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { icon: <CheckCircle2 className="text-fresh" />, text: "No online payment required" },
                { icon: <CheckCircle2 className="text-fresh" />, text: "Confirm details on WhatsApp" },
                { icon: <CheckCircle2 className="text-fresh" />, text: "Flexible rescheduling" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-black text-slate-700 uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-900 rounded-[50px] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart size={120} fill="currentColor" />
              </div>
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-black">Need Help?</h4>
                <p className="text-white/60 font-medium leading-relaxed">Not sure which package is right for your pet? Call our experts directly.</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-3 bg-white text-slate-900 font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-primary hover:text-white transition-all group">
                  <ShieldCheck size={24} className="text-primary group-hover:text-white transition-colors" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Right (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[60px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-12">

              {/* Owner Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">1</div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Your Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="ownerName"
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Pet Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-black text-xs">2</div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Pet Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pet's Name</label>
                    <input
                      required
                      type="text"
                      name="petName"
                      placeholder="Buddy, Snowy, etc."
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pet Type</label>
                    <div className="flex gap-4">
                      {['Dog', 'Cat'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, petType: type})}
                          className={`flex-1 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                            formData.petType === type
                            ? 'bg-slate-900 text-white shadow-xl'
                            : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                          }`}
                        >
                          {type === 'Dog' ? <Dog size={18} /> : <Cat size={18} />}
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Breed</label>
                    <input
                      required
                      type="text"
                      name="petBreed"
                      placeholder="Breed name"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Size</label>
                    <select
                      name="petSize"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold appearance-none cursor-pointer"
                      onChange={handleChange}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-fresh/10 text-fresh flex items-center justify-center font-black text-xs">3</div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Select Package</h3>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Package</label>
                  <select
                    name="service"
                    className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold appearance-none cursor-pointer"
                    onChange={handleChange}
                  >
                    {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Add-ons (Optional)</label>
                  <div className="flex flex-wrap gap-3">
                    {extraServices.map((addon) => (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => handleAddOnToggle(addon.id)}
                        className={`px-6 py-4 rounded-[20px] font-bold text-xs flex items-center gap-3 border-2 transition-all ${
                          addOns.includes(addon.id)
                          ? 'bg-primary/5 border-primary text-primary'
                          : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                        }`}
                      >
                        {addOns.includes(addon.id) ? <CheckCircle2 size={16} /> : <PlusCircle size={16} />}
                        {addon.id} <span className="opacity-40">{addon.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Appointment Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">4</div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest">Appointment</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Calendar size={12} /> Preferred Date
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold cursor-pointer"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Clock size={12} /> Preferred Time
                    </label>
                    <select
                      name="timeSlot"
                      className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[24px] py-5 px-8 outline-none transition-all font-bold appearance-none cursor-pointer"
                      onChange={handleChange}
                    >
                      <option>Morning (9AM-12PM)</option>
                      <option>Afternoon (12PM-4PM)</option>
                      <option>Evening (4PM-9PM)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <MapPin size={12} /> Grooming Address
                  </label>
                  <textarea
                    required
                    name="address"
                    rows={3}
                    placeholder="Where should the van arrive?"
                    className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[32px] py-6 px-8 outline-none transition-all font-bold resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Special Notes</label>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="Any health issues or nervous behavior?"
                    className="w-full bg-slate-50 border-2 border-slate-50 focus:border-primary/20 focus:bg-white rounded-[32px] py-6 px-8 outline-none transition-all font-bold resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full btn-primary py-7 rounded-[32px] shadow-2xl shadow-primary/30 group text-base"
                >
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                  Confirm Request via WhatsApp
                </button>
                <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-8">
                  No direct payment required • Opens WhatsApp
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
