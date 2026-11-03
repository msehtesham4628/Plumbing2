import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { ContactSection } from './ContactSection';
import { ContactFormData } from '../types/index';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  const [toast, setToast] = useState<{
    visible: boolean;
    refId: string;
    customerName: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSuccess = (ref: string, data: ContactFormData) => {
    setToast({
      visible: true,
      refId: ref,
      customerName: data.fullName || 'Customer',
    });
  };

  const handleClose = () => {
    setToast(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Floating Animated Toast Notification for Visual Feedback */}
      {toast && toast.visible && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-md animate-in slide-in-from-top-4 fade-in duration-300"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-300 shadow-2xl backdrop-blur-xl text-neutral-900">
            {/* Animated Checkmark Badge */}
            <div className="relative shrink-0 flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-black/10 animate-ping" />
              <div className="relative w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                <Check className="w-5 h-5 stroke-[3] animate-in zoom-in-75 duration-300 text-white" />
              </div>
            </div>

            {/* Notification Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-black uppercase tracking-wider">
                  Request Confirmed
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-neutral-100 text-neutral-800 border border-neutral-300">
                  {toast.refId}
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-0.5 truncate">
                Dispatched to Hyderabad diagnostic team for {toast.customerName}
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setToast(null)}
              className="p-1 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Dismiss confirmation notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Modal Container: White background with black text */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-neutral-200 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-2 sm:p-4">
          <ContactSection
            preselectedService={serviceName}
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
};
