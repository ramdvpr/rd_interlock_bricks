"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CONTACT_INFO, MAP_LOCATION, WHATSAPP_NUMBER } from "@/lib/constants"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-montserrat)]">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help with all your interlocking brick needs. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out to us through any of the following channels. Our team is ready to assist you
                  with your construction needs.
                </p>
              </div>

              <Card className="border-2 hover:border-primary transition-all duration-300 group">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Phone</h3>
                    <a
                      href={CONTACT_INFO.phone.href}
                      className="text-muted-foreground hover:text-primary transition-colors block text-lg"
                    >
                      {CONTACT_INFO.phone.display}
                    </a>
                    <Button size="sm" className="mt-2" asChild>
                      <a href={CONTACT_INFO.phone.href}>Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all duration-300 group">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">WhatsApp</h3>
                    <a
                      href={WHATSAPP_NUMBER.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-600 transition-colors block text-lg"
                    >
                      +91 {WHATSAPP_NUMBER.number}
                    </a>
                    <Button size="sm" className="mt-2 bg-green-500 hover:bg-green-600" asChild>
                      <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer">Chat Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 group">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Email</h3>
                    <a
                      href={CONTACT_INFO.email.href}
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {CONTACT_INFO.email.address}
                    </a>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent" asChild>
                      <a href={CONTACT_INFO.email.href}>Send Email</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 group">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Address</h3>
                    <address className="text-muted-foreground not-italic leading-relaxed">
                      {CONTACT_INFO.address.line1}
                      <br />
                      {CONTACT_INFO.address.line2}
                      <br />
                      {CONTACT_INFO.address.line3}
                      <br />
                      {CONTACT_INFO.address.line4}
                    </address>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 group">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Business Hours</h3>
                    <div className="text-muted-foreground">
                      <p>{CONTACT_INFO.hours.weekdays}</p>
                      <p className="text-lg font-medium text-primary">{CONTACT_INFO.hours.time}</p>
                      <p className="text-sm mt-2">Sunday: {CONTACT_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-montserrat)]">Find Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Visit our facility to see our manufacturing process and quality standards firsthand.
                </p>
              </div>
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] lg:aspect-square">
                    <iframe
                      src={MAP_LOCATION.embedUrl}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="RD Interlock Bricks Location"
                    />
                  </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Contact us today for a free consultation and quote. Let's build something amazing together with RD
              Interlock Bricks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href={CONTACT_INFO.phone.href}>Call {CONTACT_INFO.phone.display}</a>
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
                <a href={CONTACT_INFO.email.href}>Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
