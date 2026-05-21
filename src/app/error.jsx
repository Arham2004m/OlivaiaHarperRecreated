"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-4xl font-serif mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-8">We encountered an error while processing your request.</p>
      <button
        onClick={() => reset()}
        className="uppercase tracking-widest text-xs border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
