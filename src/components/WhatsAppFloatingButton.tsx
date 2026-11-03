import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  const whatsappUrl =
    'https://wa.me/919700189654?text=' +
    encodeURIComponent(
      'Hello, I am interested in thermal water leakage detection services. Please contact me.'
    );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-300 text-neutral-800 text-xs shadow-xl animate-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>Need rapid leak inspection in Hyderabad?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-500 hover:text-black p-0.5 ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Quick Call Button */}
        <a
          href="tel:+919700189654"
          className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 text-black border border-neutral-300 flex items-center justify-center shadow-lg transition-all hover:scale-105"
          title="Call +91 97001 89654"
          aria-label="Call +91 97001 89654"
        >
          <Phone className="w-5 h-5 text-black" />
        </a>

        {/* WhatsApp Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black text-white hover:bg-neutral-800 shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-black/10 border border-neutral-900"
          aria-label="Chat on WhatsApp +91 97001 89654"
        >
          <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};
