import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { LOGO } from '../../assets/assets';
import { ROUTES, APP } from '../../constants';
import { IconRenderer } from '../common/IconRenderer';
import { ThemeToggle } from '../common/ThemeToggle';

export const MainLayout = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: ROUTES.HOME },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-deep font-sans selection:bg-brand-burgundy selection:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-border-pink transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Name */}
            <Link to={ROUTES.HOME} className="flex items-center gap-3 group focus:outline-none" id="nav-logo-link">
              <div className="w-14 h-14 rounded-xl bg-white border border-brand-border-pink shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 p-1">
                <img 
                  src={LOGO} 
                  alt={`${APP.NAME} Logo`} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl tracking-[0.2em] font-bold text-brand-deep font-sans uppercase">
                  {APP.NAME}
                </span>
                <span className="text-[10px] tracking-widest text-brand-pink font-bold uppercase">
                  {APP.TAGLINE}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-semibold tracking-wider uppercase transition-colors duration-300 focus:outline-none py-2 border-b-2 ${
                      isActive 
                        ? 'text-brand-burgundy border-brand-burgundy' 
                        : 'text-brand-deep/60 border-transparent hover:text-brand-burgundy'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Theme Toggle Button right after Home */}
              <ThemeToggle layout="header" />
            </nav>

            {/* Mobile Navigation Toggle - Replaced with direct Theme Toggle */}
            <div className="flex md:hidden items-center">
              <ThemeToggle layout="header" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="bg-brand-soft-pink border-t border-brand-border-pink" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Brand details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white border border-brand-border-pink shadow-sm flex items-center justify-center p-0.5">
                  <img 
                    src={LOGO} 
                    alt={`${APP.NAME} Logo`} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-lg tracking-widest font-bold text-brand-deep font-sans uppercase">
                  {APP.NAME}
                </span>
              </div>
              <p className="text-xs text-brand-deep/70 leading-relaxed pr-4 font-sans">
                Premium fashion customization platform. Build and stitch your ultimate visual dream garment with hand-curated materials.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-4 mt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-burgundy/60 hover:text-brand-pink transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <IconRenderer name="instagram" size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-burgundy/60 hover:text-brand-pink transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <IconRenderer name="facebook" size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-burgundy/60 hover:text-brand-pink transition-colors duration-300"
                  aria-label="Follow us on Twitter"
                >
                  <IconRenderer name="share-2" size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-deep mb-6">
                Explore Customization
              </h3>
              <ul className="space-y-4 font-sans text-xs">
                <li>
                  <Link to={ROUTES.CATEGORY} className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 font-medium">
                    Category Selection
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.SKETCH} className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 font-medium">
                    Silhouette Sketches
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.FABRIC_CATEGORY} className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 font-medium">
                    Fabric Categories
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.PREVIEW} className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 font-medium">
                    Garment Previews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Custom Popular Items */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-deep mb-6">
                Popular Custom Outfits
              </h3>
              <ul className="space-y-4 font-sans text-xs">
                <li className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 cursor-pointer font-medium">
                  Georgette Maxi Dresses
                </li>
                <li className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 cursor-pointer font-medium">
                  Satin Co-ord Sets
                </li>
                <li className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 cursor-pointer font-medium">
                  Wedding Guest Outfits
                </li>
                <li className="text-brand-deep/70 hover:text-brand-pink transition-colors duration-300 cursor-pointer font-medium">
                  Festive Vacation Jumpsuits
                </li>
              </ul>
            </div>

            {/* Column 4: Contact/Information */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-deep mb-6">
                Direct Tailor Channels
              </h3>
              <p className="text-xs text-brand-deep/70 leading-relaxed mb-4 font-sans">
                Have specific design sketches? Get immediate assistance from our master tailor team.
              </p>
              <a 
                href="https://wa.me/918767461199" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-pink hover:text-brand-burgundy transition-colors duration-300 uppercase tracking-wider"
              >
                <IconRenderer name="phone" size={14} />
                <span>Chat on WhatsApp (+91 87674 61199)</span>
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-brand-border-pink flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-brand-deep/50 uppercase tracking-widest">
              © {new Date().getFullYear()} {APP.NAME} Tailors Private Limited. All rights reserved.
            </span>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-deep/50">
              <a href="#" className="hover:text-brand-pink transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-brand-pink transition-colors duration-300">Terms of Customization</a>
              <a href="#" className="hover:text-brand-pink transition-colors duration-300">Sizing Guide</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
