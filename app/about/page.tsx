import { CheckCircle2, Target, Eye, Award, Factory, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-montserrat)]">
              About <span className="text-primary">RD Interlock Bricks</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building a sustainable future, one brick at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-montserrat)]">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  RD Interlock Bricks is a trusted interlocking brick manufacturer delivering quality and sustainable
                  construction solutions since 2021. Based in Salem, Tamil Nadu, we have established ourselves as a
                  leading provider of premium interlocking bricks for residential, commercial, and industrial
                  construction projects.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility combines advanced technology with skilled craftsmanship to
                  produce interlocking bricks that meet the highest quality standards. We are committed to innovation,
                  sustainability, and customer satisfaction in everything we do.
                </p>
                <p>
                  With over 295 completed projects and ₹2 crore saved for our clients in construction costs, we have
                  proven our commitment to delivering exceptional value. Our eco-friendly manufacturing processes and
                  durable products make us the preferred choice for builders and homeowners across Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/modern-brick-manufacturing-factory.jpg"
                alt="RD Interlock Bricks Factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)]">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To reduce construction time and cost while maintaining superior strength and quality. We strive to
                  make sustainable construction accessible and affordable for everyone, revolutionizing the building
                  industry with innovative interlocking brick solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)]">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted interlocking brick brand across Tamil Nadu and beyond. We envision a future where
                  sustainable, cost-effective, and high-quality construction is the standard, not the exception, setting
                  new benchmarks in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-montserrat)]">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence and innovation makes us the preferred choice for quality construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Premium Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every brick undergoes rigorous quality checks to ensure consistent strength, durability, and
                  dimensional accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Factory className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Advanced Manufacturing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  State-of-the-art machinery and modern production techniques ensure precision and efficiency in every
                  brick we produce.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Expert Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our experienced team provides technical guidance, consultation, and on-site support throughout your
                  construction journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Timely Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We understand project timelines are critical. Our efficient logistics ensure on-time doorstep delivery
                  to your construction site.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Competitive Pricing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get the best value for your investment with our competitive pricing without compromising on quality or
                  service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)]">Eco-Friendly Process</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our sustainable manufacturing reduces environmental impact, conserves natural resources, and promotes
                  green construction practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-montserrat)]">
              Partner With Us for Your Next Project
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Join hundreds of satisfied clients who have chosen RD Interlock Bricks for their construction needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
