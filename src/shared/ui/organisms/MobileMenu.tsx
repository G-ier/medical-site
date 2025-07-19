"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { enhancedLogout } from '@/shared/utils/auth-integration';

const navLinks = [
  { label: 'Subscriptions', href: '/subscriptions' },
  { label: "Appointments", href: "/appointments" },
  { label: 'Profile', href: '/profile' },
  { label: 'Support', href: '/contact' },
];

const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    setMenuOpen(false);
    
    try {
      await enhancedLogout();
      // The enhancedLogout function will handle the redirect
    } catch (error) {
      console.error('Logout failed:', error);
      // Fallback: direct redirect to Auth0 logout
      window.location.href = '/auth/logout';
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <button
        className="ml-2 flex md:hidden flex-col items-center justify-center w-11 h-11 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-gray-900 rounded mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-900 rounded mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-900 rounded"></span>
      </button>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <button 
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 border-none cursor-default" 
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        tabIndex={-1}
      >
        <button
          className="absolute top-4 right-4 text-2xl w-11 h-11 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <div className="mt-20 px-6" role="menu" aria-orientation="vertical">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg font-medium hover:text-[#CAB8FF] transition-colors py-3"
              onClick={() => setMenuOpen(false)}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="block text-lg font-medium hover:text-[#CAB8FF] transition-colors text-left disabled:opacity-50 py-3"
            role="menuitem"
          >
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 