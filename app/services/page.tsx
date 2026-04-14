import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Individual Assessment",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    price: "Starting at $150",
  },
  {
    title: "One-on-One Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    price: "Starting at $85/session",
  },
  {
    title: "Virtual Sessions",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
    price: "Starting at $65/session",
  },
  {
    title: "Group Classes",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&h=400&fit=crop",
    price: "Starting at $25/class",
  },
  {
    title: "Corporate Programs",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    price: "Custom pricing",
  },
  {
    title: "Home Visits",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    price: "Starting at $125/session",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$399",
    description: "Perfect for beginners",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    features: [
      "Initial assessment",
      "4 one-on-one sessions",
      "Personalized exercise plan",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Foundation",
    price: "$749",
    description: "Most popular choice",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    features: [
      "Comprehensive assessment",
      "8 one-on-one sessions",
      "Personalized exercise plan",
      "Progress reassessment",
      "Mobile app access (3 months)",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Transformation",
    price: "$1,299",
    description: "Maximum results",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    features: [
      "Comprehensive assessment",
      "12 one-on-one sessions",
      "Monthly reassessments",
      "Mobile app access (6 months)",
      "Home safety assessment",
      "Family training session",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=1080&fit=crop"
          alt="BALNZ services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Flexible options to fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Image Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Options
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link key={index} href="/contact" className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section - Large Image Cards */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Training Packages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Save with our bundled packages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-card overflow-hidden relative ${pkg.popular ? 'ring-2 ring-primary shadow-xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-white/90">{pkg.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-foreground">{pkg.price}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full mt-8" 
                    size="lg"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Background Image */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1920&h=800&fit=crop"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Contact us for a free consultation.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-10 text-lg px-8 py-6">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
