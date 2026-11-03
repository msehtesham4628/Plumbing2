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
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-slate-200 text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Need rapid leak inspection in Hyderabad?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <a
          href="tel:+919700189654"
          className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="Call +91 97001 89654"
          aria-label="Call +91 97001 89654"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
          aria-label="Chat on WhatsApp +91 97001 89654"
        >
          <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:rotate-12" />
        </a>
      </div>
    </div>
  );
};
