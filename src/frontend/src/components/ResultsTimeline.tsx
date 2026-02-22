import { CheckCircle2 } from 'lucide-react';

const timeline = [
  {
    day: 1,
    title: 'Deep Cleansing Begins',
    description: 'Feel the gentle yet powerful formula working to cleanse your pores and remove surface impurities.',
  },
  {
    day: 2,
    title: 'Pore Refinement',
    description: 'Notice your pores starting to appear smaller as blackheads and whiteheads begin to dissolve.',
  },
  {
    day: 3,
    title: 'Texture Improvement',
    description: 'Your skin feels smoother to the touch as dead skin cells are gently exfoliated away.',
  },
  {
    day: 4,
    title: 'Clarity Emerges',
    description: 'See visible reduction in blemishes and imperfections as your skin tone becomes more even.',
  },
  {
    day: 5,
    title: 'Radiance Boost',
    description: 'Experience the beginning of that coveted glow as your skin reflects light beautifully.',
  },
  {
    day: 6,
    title: 'Enhanced Luminosity',
    description: 'Your natural radiance intensifies, and friends start noticing your glowing complexion.',
  },
  {
    day: 7,
    title: 'Full Transformation',
    description: 'Achieve maximum glow with clear, radiant skin free from blackheads and whiteheads.',
  },
];

export default function ResultsTimeline() {
  return (
    <section className="py-20 md:py-32 bg-glow-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your 7-Day Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch your skin transform day by day with visible results you can see and feel
          </p>
        </div>

        {/* Before/After Image */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/assets/generated/before-after.dim_1200x600.png"
            alt="Before and after transformation"
            className="w-full h-auto"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glow-accent via-glow-primary to-glow-accent md:left-1/2 md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Day Badge */}
                  <div className="absolute left-8 -translate-x-1/2 md:left-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-glow-accent to-glow-primary flex items-center justify-center shadow-glow">
                      <span className="text-white font-bold text-lg">
                        Day {item.day}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-24 md:ml-0 ${
                      index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-glow-accent/20 hover:shadow-glow transition-all duration-300">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-glow-accent flex-shrink-0 mt-1" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
