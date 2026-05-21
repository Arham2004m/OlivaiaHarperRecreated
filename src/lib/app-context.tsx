"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  isLoaded: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Synchronize with Preloader duration
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={{ isLoaded }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
