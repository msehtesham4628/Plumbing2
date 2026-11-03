import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, ShieldCheck, Activity } from 'lucide-react';

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
  const [isMonochrome, setIsMonochrome] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hydroscan_theme') === 'bw';
    }
    return false;
  });

  useEffect(() => {
    if (isMonochrome) {
      document.documentElement.classList.add('theme-bw');
      document.body.classList.add('theme-bw');
      localStorage.setItem('hydroscan_theme', 'bw');
    } else {
      document.documentElement.classList.remove('theme-bw');
      document.body.classList.remove('theme-bw');
      localStorage.setItem('hydroscan_theme', 'navy');
    }
  }, [isMonochrome]);

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
          ? 'bg-[#070e1e]/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#070e1e]/80 via-[#070e1e]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Logo Wordmark (Left) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            aria-label="HydroScan Engineering Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-display leading-none">
                HYDROSCAN
                <span className="text-xs px-1.5 py-0.5 rounded font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  HYD
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                Diagnostics & Plumbing
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleLinkClick('/')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/about' ? 'text-amber-400 font-semibold' : ''
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
                className={`flex items-center gap-1 hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  currentPath.startsWith('/services') ? 'text-amber-400 font-semibold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                    Thermal Diagnostics
                  </div>
                  <button
                    onClick={() => handleLinkClick('/services/thermal-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Thermal Leakage Detection
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/bathroom-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Bathroom Leakage (No Tile Breaking)
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/pipeline-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Concealed Pipeline Leakage
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/wall-seepage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Wall Moisture & Seepage
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/terrace-leakage-detection')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Terrace & Roof Slab Inspection
                  </button>

                  <div className="my-1.5 border-t border-slate-800" />
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                    Plumbing Contracting
                  </div>
                  <button
                    onClick={() => handleLinkClick('/services/plumbing-services')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Civil Plumbing Contracting
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/plumbing-installation')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    New Piping Installation
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/plumbing-repair')}
                    className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
                  >
                    Precision Plumbing Repair
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/projects')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/projects' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('/faq')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/faq' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className={`hover:text-amber-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/contact' ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: CTA Buttons (Right) - Call Now & WhatsApp & Theme */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setIsMonochrome(!isMonochrome)}
              className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-mono font-bold rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all hover:scale-[1.02] cursor-pointer"
              title={isMonochrome ? 'Switch to Signature Navy' : 'Switch to White & Black Mode'}
              aria-label="Toggle White and Black theme"
            >
              <span className={`w-2.5 h-2.5 rounded-full inline-block ${isMonochrome ? 'bg-white shadow' : 'bg-amber-400'}`} />
              <span className="hidden xl:inline">{isMonochrome ? 'W & B Active' : 'White & Black'}</span>
              <span className="xl:hidden">{isMonochrome ? 'W&B' : 'B&W'}</span>
            </button>

            <a
              href="tel:+919700189654"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all hover:scale-[1.02] shadow-sm"
              title="Call HydroScan Hyderabad"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 97001 89654</span>
            </a>

            <a
              href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all hover:scale-[1.02] shadow-md shadow-emerald-500/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="hidden xl:flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all hover:scale-[1.02] shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <span>Book Inspection</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+919700189654"
              className="p-2 rounded-lg bg-slate-800/90 text-amber-400 border border-slate-700"
              aria-label="Call +91 97001 89654"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#070e1e]/98 border-b border-slate-800 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick('/services')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 font-semibold text-amber-400"
            >
              All Services
            </button>
            <div className="pl-4 flex flex-col gap-1 border-l border-slate-800 ml-3 my-1">
              <button
                onClick={() => handleLinkClick('/services/thermal-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Thermal Leakage Detection
              </button>
              <button
                onClick={() => handleLinkClick('/services/bathroom-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Bathroom Leakage (No Tile Breaking)
              </button>
              <button
                onClick={() => handleLinkClick('/services/pipeline-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Concealed Pipeline Leakage
              </button>
              <button
                onClick={() => handleLinkClick('/services/wall-seepage-detection')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Wall Seepage & Moisture
              </button>
              <button
                onClick={() => handleLinkClick('/services/terrace-leakage-detection')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Terrace & Roof Slab
              </button>
              <button
                onClick={() => handleLinkClick('/services/plumbing-services')}
                className="text-left py-1.5 px-2 text-xs text-slate-400 hover:text-amber-300"
              >
                Plumbing Contracting
              </button>
            </div>
            <button
              onClick={() => handleLinkClick('/projects')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('/faq')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              FAQs
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Contact
            </button>

            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800">
              <a
                href="tel:+919700189654"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919700189654?text=Hello%2C%20I%20am%20interested%20in%20thermal%20water%20leakage%20detection%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-xs font-bold text-slate-950"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="mt-2 w-full py-2.5 rounded-xl bg-amber-400 text-xs font-bold text-slate-950"
            >
              Book an Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
