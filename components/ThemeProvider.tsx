'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect } from 'react';
import { useAppSelector } from '@/lib/redux/hooks';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { darkMode } = useAppSelector((state) => state.theme);
  
  useEffect(() => {
    // Force dark mode based on redux state
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}