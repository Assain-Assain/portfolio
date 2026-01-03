import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}