export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-4xl font-serif mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="uppercase tracking-widest text-xs border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors">
        Return Home
      </a>
    </div>
  );
}
