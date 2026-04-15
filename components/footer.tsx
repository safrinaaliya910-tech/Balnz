import Link from "next/link"
import Image from "next/image"

const navigation = {
  programs: [
    { name: "Senior Balance Training", href: "/programs#senior" },
    { name: "Workplace Mobility", href: "/programs#workplace" },
    { name: "Athlete Stability", href: "/programs#athlete" },
    { name: "Home-Based Training", href: "/programs#home" },
  ],
  company: [
    { name: "About BALNZ", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Free Balance Guides", href: "/resources#guides" },
    { name: "Exercise & Training Videos", href: "/resources#videos" },
    { name: "FAQs", href: "/resources#faq" },
    { name: "Educational Articles", href: "/resources#blog" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://i.ibb.co/YTdRw0DG/Screenshot-2026-04-14-124526-removebg-preview.png"
                alt="BALNZ Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-2xl font-bold tracking-tight text-primary">BALNZ</span>
            </Link>

            <p className="text-lg leading-7 text-muted-foreground">
              Strong. Steady. Safe.
            </p>

            <p className="text-base leading-6 text-muted-foreground max-w-xs">
              Science-based balance training designed to help you move with confidence, reduce fall risk, and stay independent at every stage of life.
            </p>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              
              {/* Programs */}
              <div>
                <h3 className="text-base font-semibold leading-6 text-foreground">
                  Programs
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base leading-6 text-muted-foreground hover:text-primary transition-colors"
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
              <h3 className="text-base font-semibold leading-6 text-foreground">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base leading-6 text-muted-foreground hover:text-primary transition-colors"
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
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} BALNZ. All rights reserved. Built for safer, stronger movement.
          </p>
        </div>
      </div>
    </footer>
  )
}