import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToDetails = () => {
    const detailsSection = document.getElementById('product-details');
    detailsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Glowing radiant skin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-glow-dark/60 via-glow-dark/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glow-accent/20 border border-glow-accent/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-glow-accent" />
            <span className="text-sm font-medium text-glow-light">Clinically Proven Results</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-glow-light">Glow</span>
            <span className="block bg-gradient-to-r from-glow-accent via-glow-primary to-glow-accent bg-clip-text text-transparent animate-shimmer">
              Maxing
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-glow-light/90 font-light max-w-2xl mx-auto leading-relaxed">
            Transform your skin in just <span className="font-semibold text-glow-accent">7 days</span>
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-4 text-glow-light/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glow-accent" />
              <span>Radiant Glow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glow-accent" />
              <span>Remove Blackheads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-glow-accent" />
              <span>Eliminate Whiteheads</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              onClick={scrollToDetails}
              className="bg-glow-primary hover:bg-glow-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
            >
              Discover Your Glow
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-glow-light/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-glow-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
