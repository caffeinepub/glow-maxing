import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'glow-maxing'
  );

  return (
    <footer className="bg-glow-dark text-glow-light py-12 border-t border-glow-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-glow-accent to-glow-primary bg-clip-text text-transparent">
              Glow Maxing
            </h3>
            <p className="text-sm text-glow-light/60 mt-2">
              Transform your skin in 7 days
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-glow-accent/30 to-transparent" />

          {/* Attribution */}
          <div className="flex items-center justify-center gap-2 text-sm text-glow-light/70">
            <span>© {currentYear} Glow Maxing. Built with</span>
            <Heart className="w-4 h-4 text-glow-accent fill-glow-accent" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-glow-accent hover:text-glow-primary transition-colors underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
