"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About BALNZ", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Store", href: "/store" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" }
  
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            <Image
              src="https://i.ibb.co/YTdRw0DG/Screenshot-2026-04-14-124526-removebg-preview.png"
              alt="BALNZ Logo"
              width={80}
              height={80}
              className="h-16 w-auto drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          )}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium leading-6 text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground hover:bg-secondary transition-all duration-300 hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <Button
            asChild
            size="lg"
            className="text-base rounded-2xl shadow-xl shadow-primary/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl border-l border-border"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="https://i.ibb.co/YTdRw0DG/Screenshot-2026-04-14-124526-removebg-preview.png"
                    alt="BALNZ Logo"
                    width={60}
                    height={60}
                    className="h-14 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>

              <div className="px-6 py-6 overflow-y-auto h-[calc(100vh-80px)]">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-xl px-4 py-4 text-lg font-medium text-foreground hover:bg-secondary hover:text-primary hover:translate-x-1 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-base rounded-2xl shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                  <p className="mt-4 text-center text-sm text-muted-foreground opacity-80">
                    Strong. Steady. Safe.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}