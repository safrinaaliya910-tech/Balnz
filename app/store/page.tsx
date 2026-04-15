import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, BookOpen, Package, Activity, MonitorPlay, CheckCircle } from "lucide-react"

const products = [
  {
    title: "BALNZ Balance Book",
    price: "$29",
    image: "/images/book.png",
    description: "A complete guide to balance training and fall prevention.",
    features: ["Beginner friendly", "Fall prevention", "Daily routines"],
  },
  {
    title: "Resistance Bands Set",
    price: "$25",
    image: "/images/bands.png",
    description: "Improve strength and stability with guided resistance training.",
    features: ["Multiple resistance levels", "Portable", "Safe training"],
  },
  {
    title: "Balance Board Trainer",
    price: "$49",
    image: "/images/board.png",
    description: "Train coordination, core strength, and stability.",
    features: ["Core activation", "Ankle stability", "Physio approved"],
  },
  {
    title: "Balance Disc",
    price: "$35",
    image: "/images/disc.png",
    description: "Improve posture and balance using an unstable surface.",
    features: ["Inflatable", "Lightweight", "Beginner safe"],
  },
  {
    title: "Foam Balance Pad",
    price: "$39",
    image: "/images/foam.png",
    description: "Safe balance training surface used in rehabilitation.",
    features: ["Soft surface", "Fall prevention", "Joint friendly"],
  },
  {
    title: "Agility Ladder",
    price: "$29",
    image: "/images/ladder.png",
    description: "Improve coordination, speed, and foot control.",
    features: ["Lightweight", "Quick drills", "Coordination training"],
  },
  {
    title: "Step Platform",
    price: "$59",
    image: "/images/step.png",
    description: "Train step movement and lower body strength safely.",
    features: ["Adjustable height", "Stable base", "Home use"],
  },
  {
    title: "BALNZ Digital Program",
    price: "$39",
    image: "/images/digital.png",
    description: "Guided routines and training plans accessible anywhere.",
    features: ["Video lessons", "Printable guides", "Flexible training"],
  },
]

const highlights = [
  {
    icon: BookOpen,
    title: "BALNZ Book",
    text: "Learn the principles of balance, confidence, and fall prevention in a clear, practical format.",
  },
  {
    icon: Package,
    title: "Balance Kits",
    text: "Simple products designed to support safe training at home, in the clinic, or in the community.",
  },
  {
    icon: Activity,
    title: "Stability Tools",
    text: "Use supportive tools to improve posture, coordination, and everyday movement control.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Programs",
    text: "Access guided routines and resources anytime, with flexible tools built for real life.",
  },
]

export default function StorePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src="/images/cta_background.png"
          alt="Shop BALNZ"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <ShoppingBag className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Shop BALNZ
              </h1>
              <p className="mt-5 text-xl text-white/90">
                Discover products designed to help you train safely and effectively at home,
                in the clinic, or on the go.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Buy Now</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tools to Support Your Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              BALNZ products are designed to support stronger, steadier movement through
              simple, science-based tools and guidance. Whether you are just starting out
              or looking for supportive materials to keep progressing, this store brings
              together practical options for safe, confidence-building movement.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Carefully selected BALNZ tools for safer, smarter movement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow">
                    {product.category}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-2xl font-bold text-white">{product.price}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-6 w-full" size="lg">
                    <Link href="/contact">Buy Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop BALNZ */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about_coach.png"
                alt="BALNZ training products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Shop BALNZ?
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Every BALNZ product is designed with the same purpose as the rest of the
                brand: to help people train safely, move with more confidence, and build
                long-term balance in everyday life.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-base text-foreground">
                    Built around physical therapy, neuroscience, and real-world movement.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-base text-foreground">
                    Senior-friendly, beginner-friendly, and easy to use at home.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-base text-foreground">
                    Designed to support strength, steadiness, and safe progression.
                  </p>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Ask About a Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ store call to action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Train Safely and Effectively?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Explore BALNZ products designed to support better balance, stronger movement,
              and more confidence every day.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 text-lg px-8 py-6 rounded-xl shadow-lg">
              <Link href="/contact">Buy Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}