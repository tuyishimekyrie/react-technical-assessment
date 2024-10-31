import React, { PropsWithChildren, useEffect } from 'react';
import useThemeStore from '../store/themeStore';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
