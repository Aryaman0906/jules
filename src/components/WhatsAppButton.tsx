import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
