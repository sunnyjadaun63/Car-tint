import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './themesData';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('apex_studio_theme');
    return saved && themes.some(t => t.id === saved) ? saved : 'electric-blue';
  });

  useEffect(() => {
    localStorage.setItem('apex_studio_theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.className = `theme-${currentTheme} ${currentTheme}`;
    if (typeof document !== 'undefined' && document.body) {
      document.body.setAttribute('data-theme', currentTheme);
      document.body.className = `theme-${currentTheme} ${currentTheme}`;
    }
  }, [currentTheme]);

  const activeThemeMeta = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme,
      setTheme: setCurrentTheme,
      themes,
      activeThemeMeta,
      isDark: activeThemeMeta.isDark
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
