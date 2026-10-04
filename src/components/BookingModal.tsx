import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, User, Phone, Mail, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  language?: 'ru' | 'en';
  onOpenPrivacy?: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'all-on-4',
  onOpenPrivacy,
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [selectedDate, setSelectedDate] = useState('2026-10-05');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage('Please provide a valid full name.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 6) {
      setErrorMessage('Please provide a valid contact phone number.');
      return;
    }

    setIsLoading(true);

    // Simulate async submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#B9F53B', '#111419', '#ffffff'],
        });
      } catch {
        // Safe fallback
      }
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsLoading(false);
    setErrorMessage('');
    onClose();
  };

  const timeSlots = ['09:30 AM', '11:00 AM', '02:00 PM', '04:30 PM', '06:00 PM'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-[32px] sm:rounded-[38px] p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-lime-light text-lime-dark text-xs font-bold">
                  Book Consultation
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-[10px] font-semibold border border-neutral-200">
                  Demo Appointment Flow
                </span>
              </div>

              <h2 id="booking-modal-title" className="text-2xl font-bold tracking-tight text-neutral-900">
                Surgical Consultation
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Includes 3D computed tomography and personalized treatment roadmap.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Service / Protocol */}
              <div>
                <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Area of Interest
                </label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 font-medium focus:outline-none focus:border-neutral-900 transition-colors"
                >
                  <option value="all-on-4">All-on-4® Total Restoration</option>
                  <option value="implant-placement">Single Dental Implant (Straumann)</option>
                  <option value="navigated">Navigated 3D Computer Stent Implantation</option>
                  <option value="immediate">Immediate Single-Stage Extraction & Implant</option>
                  <option value="bone-regeneration">Guided Bone Regeneration & Sinus Lift</option>
                  <option value="gum-recession">Gum Recession Closure Microsurgery</option>
                </select>
              </div>

              {/* Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 font-medium focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    id="booking-time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 font-medium focus:outline-none focus:border-neutral-900"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Contact Info */}
              <div className="space-y-3 pt-1">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="Alexander Wright"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email (Optional)
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="patient@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA Button with Loading State */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-4 rounded-full bg-lime-accent hover:bg-lime-hover text-neutral-950 font-bold text-sm tracking-tight shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-75 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Appointment</span>
                    <span>+</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-neutral-400 pt-1 space-y-1">
                <p>
                  By confirming, you agree to our{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="underline text-neutral-600 hover:text-neutral-900"
                  >
                    confidential patient privacy policy
                  </button>
                  .
                </p>
                <p className="text-[10px] text-neutral-400">
                  This showcase demonstration does not create an actual medical appointment.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-lime-light text-lime-dark flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-lime-dark" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold">
              Demo Request Confirmed
            </div>

            <h2 className="text-2xl font-bold text-neutral-900">
              Consultation Request Received!
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {name}! Your surgical consultation slot is reserved for {selectedDate} at {selectedTime}. Our coordinator will contact you at {phone}.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs text-neutral-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Specialist:</span>
                <span className="font-semibold text-neutral-900">Dr. Maxim Bocharov</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Clinic:</span>
                <span className="font-semibold text-neutral-900">Maxillofacial Surgery Center</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Service:</span>
                <span className="font-semibold text-neutral-900">{selectedService}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200/60 pt-2 text-[11px] text-neutral-400">
                <span>Demo Reference:</span>
                <span className="font-mono">#MB-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 italic">
              Note: This showcase demonstration does not transmit personal data to external servers.
            </p>

            <button
              onClick={handleResetAndClose}
              className="mt-4 px-7 py-3 rounded-full bg-neutral-900 text-white font-semibold text-xs hover:bg-black transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
