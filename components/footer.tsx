import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, Facebook } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_NUMBER, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary font-[family-name:var(--font-montserrat)]">
              RD Interlock Bricks
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trusted interlocking brick manufacturer delivering quality and sustainable construction solutions since
              2021.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Social Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4" />
                  {SOCIAL_LINKS.youtube.label}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  {SOCIAL_LINKS.instagram.label}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  {SOCIAL_LINKS.facebook.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  {CONTACT_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={CONTACT_INFO.phone.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-600 shrink-0" />
                <a
                  href={WHATSAPP_NUMBER.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-600 transition-colors"
                >
                  +91 {WHATSAPP_NUMBER.number}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={CONTACT_INFO.email.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email.address}
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Business Hours:</span>
              <br />
              {CONTACT_INFO.hours.weekdays.replace(" – ", "-")} | {CONTACT_INFO.hours.time}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RD Interlock Bricks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
