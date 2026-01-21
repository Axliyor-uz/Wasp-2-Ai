"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'uz' | 'ru';

interface AppContextType {
  theme: Theme;
  lang: Language;
  toggleTheme: () => void;  // ADD THIS
  setLang: (lang: Language) => void;  // ADD THIS (or changeLang if you prefer)
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('en');

  // ADD THIS FUNCTION
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update document class for CSS
    if (typeof document !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <AppContext.Provider value={{ 
      theme, 
      lang, 
      toggleTheme,  // ADD THIS
      setLang       // ADD THIS
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}


