import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: '/assets/generated/glow-icon.dim_128x128.png',
    title: 'Radiant Facial Glow',
    description: 'Experience luminous, healthy-looking skin that radiates from within. Our advanced formula enhances your natural glow, giving you that coveted dewy complexion.',
  },
  {
    icon: '/assets/generated/blackhead-icon.dim_128x128.png',
    title: 'Blackhead Removal',
    description: 'Say goodbye to stubborn blackheads. Our deep-cleansing formula penetrates pores to dissolve impurities and prevent future buildup for clearer, smoother skin.',
  },
  {
    icon: '/assets/generated/whitehead-icon.dim_128x128.png',
    title: 'Whitehead Elimination',
    description: 'Gently removes whiteheads while balancing skin texture. Our gentle yet effective ingredients work to unclog pores and reveal a flawless, even complexion.',
  },
];

export default function ProductBenefits() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-glow-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Triple-Action Formula
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of three transformative benefits in one revolutionary product
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-glow-accent/20"
            >
              <CardContent className="p-8 text-center space-y-4">
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-glow-accent/20 to-glow-primary/20 p-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-foreground">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
