import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Droplets, Leaf, Shield, Sparkles } from 'lucide-react';

export default function ProductDetails() {
  return (
    <section id="product-details" className="py-20 md:py-32 bg-gradient-to-b from-glow-bg to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Product Details
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Glow Maxing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-glow-accent/10 to-glow-primary/10 p-8">
                <img
                  src="/assets/generated/product-main.dim_800x800.png"
                  alt="Glow Maxing Product"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glow-dark/20 to-transparent pointer-events-none" />
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-glow-accent/20">
                  <Droplets className="w-8 h-8 text-glow-accent mb-2" />
                  <p className="text-sm font-medium text-foreground">Hydrating</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-glow-accent/20">
                  <Leaf className="w-8 h-8 text-glow-accent mb-2" />
                  <p className="text-sm font-medium text-foreground">Natural</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-glow-accent/20">
                  <Shield className="w-8 h-8 text-glow-accent mb-2" />
                  <p className="text-sm font-medium text-foreground">Dermatologist Tested</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-glow-accent/20">
                  <Sparkles className="w-8 h-8 text-glow-accent mb-2" />
                  <p className="text-sm font-medium text-foreground">Cruelty Free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Tabs */}
          <div className="order-1 lg:order-2">
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="usage">How to Use</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>

              <TabsContent value="ingredients" className="space-y-4">
                <Card className="border-glow-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Key Ingredients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Niacinamide (Vitamin B3)</h4>
                      <p className="text-muted-foreground text-sm">
                        Brightens skin tone, reduces the appearance of pores, and regulates oil production for a balanced, radiant complexion.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Salicylic Acid</h4>
                      <p className="text-muted-foreground text-sm">
                        Penetrates deep into pores to dissolve blackheads and whiteheads, preventing future breakouts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hyaluronic Acid</h4>
                      <p className="text-muted-foreground text-sm">
                        Provides intense hydration, plumping the skin and enhancing its natural glow.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Vitamin C</h4>
                      <p className="text-muted-foreground text-sm">
                        Powerful antioxidant that brightens skin, evens tone, and protects against environmental damage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tea Tree Oil</h4>
                      <p className="text-muted-foreground text-sm">
                        Natural antibacterial properties help purify skin and reduce blemishes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="usage" className="space-y-4">
                <Card className="border-glow-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Application Instructions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-accent/20 flex items-center justify-center text-glow-accent font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Cleanse</h4>
                        <p className="text-muted-foreground text-sm">
                          Start with a clean, dry face. Wash with your regular cleanser and pat dry.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-accent/20 flex items-center justify-center text-glow-accent font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Apply</h4>
                        <p className="text-muted-foreground text-sm">
                          Take a small amount of Glow Maxing and gently massage onto your face in circular motions, focusing on problem areas.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-accent/20 flex items-center justify-center text-glow-accent font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Absorb</h4>
                        <p className="text-muted-foreground text-sm">
                          Allow the formula to absorb for 2-3 minutes. You may feel a gentle tingling sensation.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-glow-accent/20 flex items-center justify-center text-glow-accent font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Moisturize</h4>
                        <p className="text-muted-foreground text-sm">
                          Follow with your favorite moisturizer to lock in the benefits. Use twice daily for best results.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-glow-accent/10 rounded-lg border border-glow-accent/20">
                      <p className="text-sm text-foreground">
                        <strong>Pro Tip:</strong> For maximum effectiveness, use consistently morning and night. Results are visible within 7 days!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs" className="space-y-4">
                <Card className="border-glow-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Product Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Size</p>
                        <p className="font-semibold text-foreground">50ml / 1.7 fl oz</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="font-semibold text-foreground">30-day supply</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Skin Type</p>
                        <p className="font-semibold text-foreground">All skin types</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">pH Level</p>
                        <p className="font-semibold text-foreground">5.5 (skin-friendly)</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Texture</p>
                        <p className="font-semibold text-foreground">Lightweight gel</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Fragrance</p>
                        <p className="font-semibold text-foreground">Light citrus</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-foreground">Certifications & Testing</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glow-accent" />
                          Dermatologist tested and approved
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glow-accent" />
                          Hypoallergenic and non-comedogenic
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glow-accent" />
                          Cruelty-free and vegan
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glow-accent" />
                          Free from parabens, sulfates, and phthalates
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glow-accent" />
                          Clinically proven results in 7 days
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
