import { CheckCircle2, Ruler, Weight, Shield, Thermometer, MessageCircle } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_NUMBER } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-montserrat)]">
              Our <span className="text-primary">Premium Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              High-quality interlocking bricks engineered for strength, durability, and sustainable construction.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 6-Inch Product */}
            <div className="space-y-8">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                <img
                  src="/6-inch-interlocking-bricks-stack.jpg"
                  alt="6-Inch Interlocking Bricks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-3 font-[family-name:var(--font-montserrat)]">
                    6-Inch Interlocking Bricks
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ideal for compound walls, godown walls, and partition walls. Our 6-inch interlocking bricks offer
                    the perfect balance of strength and affordability for non-load bearing structures.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                      Key Specifications
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Ruler className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Dimensions:</span> 6 inches (150mm) thickness
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Weight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Weight:</span> Lightweight for easy handling
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Strength:</span> High compressive strength
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Thermal Properties:</span> Good thermal insulation
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                      Best Suited For
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Compound walls and boundary walls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Godown and warehouse construction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Partition walls in commercial spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Garden walls and landscaping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Industrial facility boundaries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Reduces cement consumption by up to 50%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Faster installation saves labor costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Excellent finish requires minimal plastering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Weather resistant and low maintenance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Cost-effective solution for large projects</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Request a Quote for 6-Inch Bricks</Link>
                </Button>
              </div>
            </div>

            {/* 8-Inch Product */}
            <div className="space-y-8">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                <img
                  src="/8-inch-interlocking-bricks-residential-constructio.jpg"
                  alt="8-Inch Interlocking Bricks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-3 font-[family-name:var(--font-montserrat)]">
                    8-Inch Interlocking Bricks
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Perfect for residential and commercial buildings. Our 8-inch interlocking bricks are engineered for
                    superior load-bearing capacity and provide excellent thermal insulation for comfortable living
                    spaces.
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                      Key Specifications
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Ruler className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Dimensions:</span> 8 inches (200mm) thickness
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Weight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Weight:</span> Optimized for structural stability
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Strength:</span> Superior load-bearing capacity
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Thermometer className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Thermal Properties:</span> Excellent insulation performance
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
                      Best Suited For
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Residential home construction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Commercial building projects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Multi-story constructions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Load-bearing wall structures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Premium villa and farmhouse projects</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Superior strength for load-bearing walls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Excellent thermal and sound insulation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Earthquake resistant construction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Energy-efficient homes reduce cooling costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Reduces overall construction time by 30-40%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Request a Quote for 8-Inch Bricks</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-montserrat)]">
                Why Choose Interlocking Bricks?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern construction demands efficiency, sustainability, and quality. Our interlocking bricks deliver all
                three.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">
                    Traditional Bricks vs Interlocking Bricks
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Construction Speed</span>
                      <span className="font-medium text-primary">40% Faster</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Cement Usage</span>
                      <span className="font-medium text-primary">50% Less</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Labor Cost</span>
                      <span className="font-medium text-primary">30% Savings</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Overall Cost</span>
                      <span className="font-medium text-primary">25-30% Lower</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Environmental Impact</span>
                      <span className="font-medium text-primary">Eco-Friendly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Technical Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Precision-engineered interlocking mechanism ensures perfect alignment
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Hollow design provides natural ventilation and insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Easy accommodation for electrical and plumbing lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Uniform dimensions ensure consistent quality across projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">High fire resistance and durability in extreme weather</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-montserrat)]">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Our experts are ready to guide you through product selection, technical specifications, and custom
              requirements for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href={CONTACT_INFO.phone.href}>Call Our Experts</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-green-500 text-white hover:bg-green-600"
                asChild
              >
                <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
