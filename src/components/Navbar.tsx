import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, Activity } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Logo Wordmark (Left) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg p-1 cursor-pointer"
            aria-label="HydroScan Engineering Home"
          >
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-black flex items-center gap-1.5 font-display leading-none">
                HYDROSCAN
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-neutral-100 text-neutral-800 border border-neutral-300">
                  HYD
                </span>
              </span>
              <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase mt-1">
                Diagnostics & Plumbing
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
            <button
              onClick={() => handleLinkClick('/')}
              className={`hover:text-black transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/' ? 'text-black font-semibold underline underline-offset-8 decoration-black' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`hover:text-black transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/about' ? 'text-black font-semibold underline underline-offset-8 decoration-black' : ''
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('/services')}
                className={`flex items-center gap-1 hover:text-black transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  currentPath.startsWith('/services') ? 'text-black font-semibold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-black transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-white border border-neutral-200 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                    Thermal Diagnostics
                  </div>
                  <button
                    onClick={() => handleLinkClick('/services/thermal-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Thermal Leakage Detection
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/bathroom-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Bathroom Leakage (No Demolition)
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/pipeline-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Concealed Pipeline Leakage
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/wall-seepage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Wall Seepage & Rising Damp
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/terrace-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Terrace & Roof Slab Diagnostics
                  </button>

                  <div className="mt-2 pt-2 border-t border-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                    Plumbing Contracting
                  </div>
                  <button
                    onClick={() => handleLinkClick('/services/plumbing-installation')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    New Piping Installation
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/plumbing-repair')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Precision Plumbing Repair
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/projects')}
              className={`hover:text-black transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/projects' ? 'text-black font-semibold underline underline-offset-8 decoration-black' : ''
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('/faq')}
              className={`hover:text-black transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/faq' ? 'text-black font-semibold underline underline-offset-8 decoration-black' : ''
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className={`hover:text-black transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/contact' ? 'text-black font-semibold underline underline-offset-8 decoration-black' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: CTA Buttons (Right) - Call Now & WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+919700189654"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 transition-all hover:scale-[1.02]"
              title="Call HydroScan Hyderabad"
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              <span>+91 97001 89654</span>
            </a>

            <a
              href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 transition-all hover:scale-[1.02]"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="hidden xl:flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-black hover:bg-neutral-800 text-white transition-all hover:scale-[1.02] shadow-md shadow-black/10 cursor-pointer"
            >
              <span>Book Inspection</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+919700189654"
              className="p-2 rounded-lg bg-neutral-100 text-black border border-neutral-200"
              aria-label="Call +91 97001 89654"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200 hover:text-black"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-white border-b border-neutral-200 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('/services')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black font-semibold text-black"
            >
              All Services
            </button>
            <div className="pl-4 flex flex-col gap-1 border-l border-neutral-200 ml-3 my-1">
              <button
                onClick={() => handleLinkClick('/services/thermal-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Thermal Leakage Detection
              </button>
              <button
                onClick={() => handleLinkClick('/services/bathroom-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Bathroom Leakage (No Tile Breaking)
              </button>
              <button
                onClick={() => handleLinkClick('/services/pipeline-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Concealed Pipeline Leakage
              </button>
              <button
                onClick={() => handleLinkClick('/services/wall-seepage-detection')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Wall Seepage & Moisture
              </button>
              <button
                onClick={() => handleLinkClick('/services/terrace-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Terrace & Roof Slab
              </button>
              <button
                onClick={() => handleLinkClick('/services/plumbing-services')}
                className="text-left py-1.5 px-2 text-xs text-neutral-600 hover:text-black"
              >
                Plumbing Contracting
              </button>
            </div>
            <button
              onClick={() => handleLinkClick('/projects')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('/faq')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black"
            >
              FAQs
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-neutral-100 hover:text-black"
            >
              Contact
            </button>

            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-neutral-200">
              <a
                href="tel:+919700189654"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 text-xs font-semibold text-neutral-900 border border-neutral-200"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-900"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="mt-2 w-full py-2.5 rounded-xl bg-black text-xs font-bold text-white shadow-md"
            >
              Book an Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
