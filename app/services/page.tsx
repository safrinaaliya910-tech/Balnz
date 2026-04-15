import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "Individual Balance Assessments",
    image: "/images/services_oneonone.png", // 👤 assessment feel
    price: "BT-Tracks testing, posture analysis, and fall-risk screening",
  },
  {
    title: "One-on-One Balance Training",
    image: "/images/services_oneonone.png", // 👨‍⚕️ personal training
    price: "Private sessions tailored to goals, ability, and comfort level",
  },
  {
    title: "Small Group Classes",
    image: "/images/services_group.png", // 👥 group training
    price: "Supportive group training with individualized attention",
  },
  {
    title: "Workplace Balance & Mobility Programs",
    image: "/images/programs_workplace.png", // 💻 workplace
    price: "On-site or virtual sessions for healthier workplace movement",
  },
  {
    title: "Community Workshops & Events",
    image: "/images/services_group.png", // 👨‍👩‍👧 community vibe
    price: "Educational sessions on balance, falls, and safe movement",
  },
  {
    title: "Online Training & Digital Resources",
    image: "/images/resource_routine.png", // 📱 home/digital learning
    price: "Flexible at-home learning with videos, guides, and routines",
  },
]

const packages = [
  {
    name: "Assessment & Awareness",
    price: "Great Starting Point",
    description: "Understand balance, stability, and fall risk",
    image: "/images/services_oneonone.png", // 👤 evaluation
    features: [
      "Evidence-based balance evaluation",
      "BT-Tracks balance testing",
      "Posture and movement analysis",
      "Personalized recommendations",
    ],
    popular: false,
  },
  {
    name: "Training & Support",
    price: "Most Popular",
    description: "Guided balance improvement for daily confidence",
    image: "/images/services_group.png", // 👥 training
    features: [
      "One-on-one training sessions",
      "Strength and coordination work",
      "Tai Chi and yoga-inspired control",
      "Fall-risk reduction strategies",
      "Safe progressions for all levels",
      "Confidence-building movement practice",
    ],
    popular: true,
  },
  {
    name: "Community & Professional Education",
    price: "Flexible Delivery",
    description: "Programs for groups, teams, and care communities",
    image: "/images/services_group.png", // 👨‍👩‍👧 workshops
    features: [
      "Small group classes and workshops",
      "Workplace mobility sessions",
      "Community education events",
      "Caregiver and clinician training",
      "Evidence-based coaching strategies",
      "Online resources and printable tools",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/services_group.png" // 👈 strong trust hero
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
                Science-Based Balance Training for Every Need
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Safe, accessible services for individuals, families, communities, and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Options
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Multiple ways to improve balance, reduce fall risk, and build confidence in movement.
            </p>
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

      {/* Packages */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How BALNZ Services Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every service is built on physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-card overflow-hidden relative ${
                  pkg.popular ? "ring-2 ring-primary shadow-xl" : ""
                }`}
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

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="/images/cta_background.png" // 🎯 strong CTA
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Get Started
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Whether you’re looking for personal training, group classes, or community education, BALNZ offers a service that fits your needs.
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