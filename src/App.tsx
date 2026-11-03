/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { servicesData } from './data/servicesData';
import { getRouteMeta } from './utils/seo';

export default function App() {
  // Client-side router using standard browser window.location.pathname & popstate
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  // Handle route changes and update browser history + document title & SEO
  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      updateSeoMetadata(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      updateSeoMetadata(path);
    };

    window.addEventListener('popstate', handlePopState);
    updateSeoMetadata(currentPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const updateSeoMetadata = (path: string) => {
    const meta = getRouteMeta(path);
    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', meta.description);
      document.head.appendChild(metaDesc);
    }

    // Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  };

  const handleOpenBookingModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || 'General Thermal Inspection');
    setBookingModalOpen(true);
  };

  // Route Resolver
  const renderContent = () => {
    // Normalize path by removing trailing slash (except root)
    const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

    // 1. Root / Home
    if (normalizedPath === '' || normalizedPath === '/') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenBookingModal={handleOpenBookingModal}
        />
      );
    }

    // 2. About
    if (normalizedPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigate}
          onOpenBookingModal={() => handleOpenBookingModal('Engineering Inspection')}
        />
      );
    }

    // 3. Services Index
    if (normalizedPath === '/services') {
      return (
        <ServicesIndexPage
          onNavigate={navigate}
          onOpenBookingModal={handleOpenBookingModal}
        />
      );
    }

    // 4. Detailed Service Routes: /services/:slug
    if (normalizedPath.startsWith('/services/')) {
      const slug = normalizedPath.replace('/services/', '');
      const matchedService = servicesData.find((s) => s.slug === slug);
      if (matchedService) {
        return (
          <ServiceDetailPage
            service={matchedService}
            onNavigate={navigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        );
      }
    }

    // 5. Case Studies / Projects
    if (normalizedPath === '/projects') {
      return (
        <ProjectsPage
          onNavigate={navigate}
          onOpenBookingModal={handleOpenBookingModal}
        />
      );
    }

    // 6. Contact
    if (normalizedPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 7. FAQ
    if (normalizedPath === '/faq') {
      return (
        <FaqPage
          onNavigate={navigate}
          onOpenBookingModal={() => handleOpenBookingModal('General Thermal Inspection')}
        />
      );
    }

    // 8. Legal: Privacy Policy & Terms
    if (normalizedPath === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigate} />;
    }
    if (normalizedPath === '/terms-and-conditions') {
      return <LegalPage type="terms" onNavigate={navigate} />;
    }

    // 9. Custom 404 Fallback
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Seamless Transparent Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Content View */}
      <main className="flex-grow">{renderContent()}</main>

      {/* Multi-Column Engineering Footer */}
      <Footer onNavigate={navigate} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Global Booking & Lead Capture Modal */}
      <ContactModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        serviceName={selectedServiceForModal}
      />
    </div>
  );
}
