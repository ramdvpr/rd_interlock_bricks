"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Home, Info, Package, ImageIcon, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CONTACT_INFO, WHATSAPP_NUMBER } from "@/lib/constants"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Products", href: "/products", icon: Package },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label="Open main menu"]')
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5 flex items-center gap-2 transition-transform">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
              RD
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground font-[family-name:var(--font-montserrat)] hidden sm:block">
              RD Interlock Bricks
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-1 xl:gap-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent transition-all duration-200">
            <a href={CONTACT_INFO.phone.href} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-green-500 to-green-600 transition-all duration-200">
            <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <Button asChild size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
            <a href={CONTACT_INFO.phone.href} className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Call Now</span>
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost" className="text-green-600 hover:text-green-600 hover:bg-green-500/10">
            <a href={WHATSAPP_NUMBER.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </Button>

          <button
            type="button"
            className={cn(
              "relative inline-flex items-center justify-center rounded-xl p-2.5",
              "bg-gradient-to-br from-primary/15 to-accent/15 hover:from-primary/25 hover:to-accent/25",
              "border border-primary/30 shadow-sm hover:shadow-md",
              "transition-all duration-300 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-primary/40",
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            className={cn(
              "absolute right-4 top-4 w-[calc(100%-2rem)] max-w-sm md:max-w-md",
              "bg-white/75 dark:bg-background/75 backdrop-blur-2xl",
              "rounded-3xl shadow-2xl",
              "border border-primary/30 ring-1 ring-white/20",
              "animate-in slide-in-from-top-4 fade-in duration-300",
              "max-h-[calc(100vh-2rem)] overflow-hidden flex flex-col",
            )}
            style={{
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              backdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-primary/15 bg-gradient-to-r from-primary/8 via-white/10 to-accent/8 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  RD
                </div>
                <div>
                  <div className="text-base font-bold text-foreground leading-tight">RD Interlock</div>
                  <div className="text-xs text-muted-foreground">Premium Bricks</div>
                </div>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-3 px-3">
              <nav className="space-y-1">
                {navigation.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl px-4 py-3.5",
                        "transition-all duration-200",
                        "animate-in slide-in-from-right fade-in",
                        isActive
                          ? "bg-gradient-to-r from-primary/20 to-accent/15 text-primary shadow-sm border border-primary/20"
                          : "text-foreground hover:bg-white/40 dark:hover:bg-white/5 hover:text-primary hover:shadow-sm",
                      )}
                      style={{ animationDelay: `${index * 40}ms`, animationFillMode: "backwards" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-colors",
                          isActive
                            ? "bg-primary/25 text-primary shadow-sm"
                            : "bg-white/60 dark:bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-sm flex-1">{item.name}</span>
                      {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-sm" />}
                    </Link>
                  )
                })}
              </nav>

              {/* Info Section */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-primary/15 via-white/20 to-accent/10 border border-primary/20 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold text-foreground mb-1">Need Assistance?</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get premium interlocking bricks with expert guidance.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="p-4 border-t border-primary/15 bg-white/30 dark:bg-muted/40 backdrop-blur-sm space-y-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href={CONTACT_INFO.phone.href}
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 animate-pulse" />
                  <span className="font-semibold">Call: {CONTACT_INFO.phone.display}</span>
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href={WHATSAPP_NUMBER.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4 animate-pulse" />
                  <span className="font-semibold">WhatsApp Us</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
