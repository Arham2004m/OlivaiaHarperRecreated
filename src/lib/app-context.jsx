"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
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
