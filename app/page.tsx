import Link from "next/link"
import { CONTACT_INFO, STATISTICS, WHATSAPP_NUMBER } from "@/lib/constants"
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Clock,
  IndianRupee,
  Award,
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Building2,
  Hammer,
  Factory,
  Phone,
  Truck,
  HeadphonesIcon,
  Settings,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 lg:py-32">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="hidden xl:block absolute top-20 right-20 w-16 h-16 border-4 border-primary/30 rounded-lg rotate-45 animate-float" />
        <div
          className="hidden xl:block absolute bottom-32 left-16 w-12 h-12 bg-accent/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm border border-primary/20 animate-slide-up hover:scale-105 transition-transform cursor-default">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Trusted Since 2021
            </div>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance font-[family-name:var(--font-montserrat)] animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Strong, Eco-Friendly & Cost-Effective Construction Starts with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RD Interlock Bricks
              </span>
            </h1>

            <p
              className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              Premium interlocking bricks designed for durability, faster construction, and sustainable living. Building
              the future of construction in Tamil Nadu.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href={CONTACT_INFO.phone.href} className="flex items-center gap-2">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                asChild
              >
                <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary/5 hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 group bg-transparent"
                asChild
              >
                <Link href="/products" className="flex items-center gap-2">
                  View Products <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold font-[family-name:var(--font-montserrat)] group-hover:scale-110 transition-transform duration-300">
                {STATISTICS.projectsCompleted.value}
              </div>
              <div className="text-primary-foreground/90 font-medium flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {STATISTICS.projectsCompleted.label}
              </div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold font-[family-name:var(--font-montserrat)] group-hover:scale-110 transition-transform duration-300">
                {STATISTICS.projectsOngoing.value}
              </div>
              <div className="text-primary-foreground/90 font-medium flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                {STATISTICS.projectsOngoing.label}
              </div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold font-[family-name:var(--font-montserrat)] group-hover:scale-110 transition-transform duration-300">
                {STATISTICS.moneySaved.value}
              </div>
              <div className="text-primary-foreground/90 font-medium flex items-center justify-center gap-2">
                <IndianRupee className="h-5 w-5" />
                {STATISTICS.moneySaved.label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow" />
        <div className="hidden lg:block absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-lg rotate-45 animate-float" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose RD Interlock Bricks?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver superior quality interlocking bricks that transform construction projects with unmatched
              benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 space-y-4 relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="h-7 w-7 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  High Durability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our interlocking bricks are engineered for exceptional strength and long-lasting performance,
                  withstanding the test of time in all weather conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 space-y-4 relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Leaf className="h-7 w-7 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  Eco-Friendly
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manufactured using sustainable processes with minimal environmental impact. Our bricks reduce cement
                  usage and promote green construction practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 space-y-4 relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Clock className="h-7 w-7 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  Faster Construction
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interlocking design eliminates the need for mortar joints, significantly reducing construction time by
                  up to 40% compared to traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 space-y-4 relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IndianRupee className="h-7 w-7 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  Cost Savings
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Save up to 30% on construction costs with reduced cement, labor, and construction time. Get more value
                  for your investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Construction Process */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-lg rotate-45 animate-float" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Construction Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A streamlined approach to deliver excellence at every stage of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Consultation",
                description: "Free expert consultation to understand your construction needs and requirements.",
              },
              {
                icon: Shield,
                title: "Quality Check",
                description: "Rigorous quality testing ensures every brick meets our high standards.",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Timely doorstep delivery with proper handling and installation support.",
              },
              {
                icon: Building2,
                title: "Installation",
                description: "Professional on-site guidance and support for seamless construction.",
              },
            ].map((step, index) => (
              <div key={step.title} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="relative border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="pt-6 space-y-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20 font-[family-name:var(--font-montserrat)]">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow" />
        <div className="hidden lg:block absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-lg rotate-45 animate-float" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete support from consultation to installation for your construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Premium Interlocking Bricks Supply",
                description:
                  "High-quality 6-inch and 8-inch interlocking bricks manufactured using advanced technology and quality materials.",
              },
              {
                icon: Users,
                title: "Technical Consultation & Guidance",
                description:
                  "Expert advice on product selection, structural requirements, and construction best practices.",
              },
              {
                icon: Truck,
                title: "Doorstep Delivery",
                description:
                  "Reliable delivery service ensuring your bricks arrive safely and on time at your construction site.",
              },
              {
                icon: HeadphonesIcon,
                title: "On-Site Installation Support",
                description: "Professional guidance and support during installation to ensure perfect results.",
              },
              {
                icon: Settings,
                title: "Custom Design Mix Options",
                description:
                  "Tailored solutions to meet your specific construction requirements and design preferences.",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="group border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="pt-6 space-y-4 relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="group">
              <Link href="/contact" className="flex items-center gap-2">
                Learn More About Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Additional Benefits
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover more advantages of choosing RD Interlock Bricks for your construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Factory,
                title: "State-of-the-Art Manufacturing",
                description:
                  "Modern facilities with advanced technology ensure consistent quality and precision in every brick.",
              },
              {
                icon: Shield,
                title: "Weather Resistant",
                description:
                  "Superior resistance to rain, heat, and extreme weather conditions for long-lasting durability.",
              },
              {
                icon: Hammer,
                title: "Easy Installation",
                description: "Interlocking design makes installation quick and requires minimal skilled labor.",
              },
              {
                icon: Leaf,
                title: "Zero Waste Construction",
                description: "Precise dimensions reduce material wastage and promote sustainable building practices.",
              },
              {
                icon: IndianRupee,
                title: "Cost Transparency",
                description: "Clear pricing with no hidden costs. Get detailed quotes before starting your project.",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Trusted by 295+ satisfied clients across Tamil Nadu with excellent project outcomes.",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-xl border-2 border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <benefit.icon className="h-10 w-10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Premium Products
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              High-quality interlocking bricks available in multiple sizes for all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img
                  src="/6-inch-interlocking-bricks.jpg"
                  alt="6-Inch Interlocking Bricks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  6-Inch Interlocking Bricks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for compound walls, godown walls, and partition walls. Lightweight yet strong, ideal for
                  non-load bearing structures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>Ideal for compound walls</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>Suitable for godown construction</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>Cost-effective solution</span>
                  </li>
                </ul>
                <Button className="w-full group-hover:shadow-lg transition-all" asChild>
                  <Link href="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <img
                  src="/8-inch-interlocking-bricks.jpg"
                  alt="8-Inch Interlocking Bricks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors">
                  8-Inch Interlocking Bricks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engineered for residential and commercial buildings. Superior load-bearing capacity and thermal
                  insulation for comfortable living.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>Perfect for residential homes</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>High load-bearing capacity</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm group/item hover:text-primary transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span>Excellent thermal insulation</span>
                  </li>
                </ul>
                <Button className="w-full group-hover:shadow-lg transition-all" asChild>
                  <Link href="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden animate-gradient text-primary-foreground">
        <div className="hidden md:block absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse" />
        <div
          className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-4 border-white/20 rounded-lg rotate-45 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-[family-name:var(--font-montserrat)] animate-slide-up">
              Ready to Start Your Construction Project?
            </h2>
            <p
              className="text-lg text-primary-foreground/90 leading-relaxed animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Contact us today for a free consultation and quote. Our team of experts is ready to help you build
              stronger, faster, and more sustainably.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href={CONTACT_INFO.phone.href} className="flex items-center gap-2">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Call {CONTACT_INFO.phone.display}
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-green-500 text-white hover:bg-green-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 bg-transparent transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
