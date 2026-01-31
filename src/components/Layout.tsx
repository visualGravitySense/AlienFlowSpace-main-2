import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ScrollToTop from './ScrollToTop';
import AIChatbot from './AIChatbot';
import { initGoogleTranslate } from '@/lib/translator';
import { assetUrl } from '@/lib/utils';

const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize Google Website Translator once
  useEffect(() => {
    initGoogleTranslate();
  }, []);

  // Map of route backgrounds
  const bgMap: Record<string, string> = {
    '/': assetUrl("/lovable-uploads/EMWBack.png"),
    '/about': assetUrl("/lovable-uploads/AboutBG.png"),
    '/alien-trip': assetUrl("/lovable-uploads/BGRCM.png"),
    '/contact': assetUrl("/lovable-uploads/BGVL.png"),
    '/academy': assetUrl("/lovable-uploads/AcademyBG.png"),
    '/clubs': assetUrl("/lovable-uploads/ClubsBG.png"),
    '/conetworking': assetUrl("/lovable-uploads/CoNetWorKingBG.png"),
  };

  const bgImage = bgMap[location.pathname] || assetUrl("/lovable-uploads/EMWBack.png");

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Dynamic background image */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Dark overlay for better contrast and readability */}
      <div className="fixed inset-0 -z-20 pointer-events-none bg-alien-space-dark/75" />

      <div id="google_translate_element" className="hidden" aria-hidden="true"></div>
      <Header />

      {/* Main content */}
      <main className="flex-1 relative z-10 pt-16 lg:pt-20">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
      <ScrollToTop />
      <AIChatbot />
    </div>
  );
};

export default Layout;
