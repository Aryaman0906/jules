import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants/data';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    petType: 'Dog',
    petSize: 'Small',
    service: 'Full Grooming',
    date: '',
    address: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Booking Request*\n\n` +
      `*Owner:* ${formData.ownerName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Pet:* ${formData.petType} (${formData.petSize})\n` +
      `*Service:* ${formData.service}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Address:* ${formData.address}\n` +
      `*Notes:* ${formData.notes || 'N/A'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-soft-bg to-white" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card bg-white p-8 md:p-12 shadow-2xl border-primary/10">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-slate-900 mb-4">Book Your Session</h2>
            <p className="text-slate-600">Fill the form below, and we'll confirm your slot via WhatsApp!</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Owner Name</label>
              <input
                required
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your mobile number"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Pet Type</label>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Pet Size</label>
              <select
                name="petSize"
                value={formData.petSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="Small">Small (0-10kg)</option>
                <option value="Medium">Medium (11-20kg)</option>
                <option value="Large">Large (21kg+)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Service Required</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
              >
                {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Preferred Date</label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Address</label>
              <textarea
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Where should our van arrive?"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Notes / Special Requirements</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any skin issues, aggression or specific requests?"
                rows={2}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="btn-primary w-full py-4 text-lg"
              >
                Confirm via WhatsApp <MessageCircle size={22} className="ml-2" />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 uppercase tracking-widest font-bold">
                By clicking, you will be redirected to WhatsApp
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
