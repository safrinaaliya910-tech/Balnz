import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

const navigation = {
  programs: [
    { name: "Senior Balance", href: "/programs#senior" },
    { name: "Workplace Mobility", href: "/programs#workplace" },
    { name: "Athlete Stability", href: "/programs#athlete" },
    { name: "Home-Based Training", href: "/programs#home" },
    { name: "Kids & Teens", href: "/programs#kids" },
    { name: "Rehab & Recovery", href: "/programs#rehab" },
  ],
  company: [
    { name: "About BALNZ", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Store", href: "/store" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Free Balance Guides", href: "/resources#guides" },
    { name: "Exercise & Training Videos", href: "/resources#videos" },
    { name: "FAQs", href: "/resources#faq" },
    { name: "Educational Articles", href: "/resources#blog" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/balnz", icon: "Instagram" },
    { name: "Facebook", href: "https://facebook.com/balnz", icon: "Facebook" },
    { name: "YouTube", href: "https://youtube.com/balnz", icon: "Youtube" },
    { name: "LinkedIn", href: "https://linkedin.com/company/balnz", icon: "Linkedin" },
  ],
}

const socialIcons = {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://i.ibb.co/YTdRw0DG/Screenshot-2026-04-14-124526-removebg-preview.png"
                alt="BALNZ Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-2xl font-bold tracking-tight text-primary">
                BALNZ
              </span>
            </Link>

            <p className="text-lg text-muted-foreground">
              Strong. Steady. Safe.
            </p>

            <p className="text-base text-muted-foreground max-w-xs">
              Science-based balance training designed to help you move with confidence,
              reduce fall risk, and stay independent at every stage of life.
            </p>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">

            <div className="md:grid md:grid-cols-2 md:gap-8">

              {/* Programs */}
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Programs
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold text-foreground">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
                {/* Bottom */}
        <div className="mt-6 border-t border-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}  BALNZ, Inc. &bull; All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span className="text-muted-foreground/30">|</span>
            {navigation.social.map((item) => {
              const Icon = socialIcons[item.icon as keyof typeof socialIcons]
              return (
                  <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}