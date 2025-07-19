'use client';

import React, { useState } from 'react';
import { enhancedLogout } from '@/shared/utils/auth-integration';

export const LogoutButton: React.FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    
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
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="text-[14px] font-medium hover:text-[#CAB8FF] transition-colors disabled:opacity-50"
    >
      {isLoggingOut ? 'Logging out...' : 'Logout'}
    </button>
  );
}; 