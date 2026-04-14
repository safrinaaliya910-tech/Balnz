import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

const programs = [
  {
    id: "senior",
    title: "Senior Balance",
    tagline: "Move with confidence at every age",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    features: [
      "Personalized assessment",
      "Low-impact exercises",
      "Fall prevention strategies",
      "Flexible scheduling",
    ],
    duration: "8-12 weeks",
  },
  {
    id: "workplace",
    title: "Workplace Mobility",
    tagline: "Combat desk fatigue, boost productivity",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
    features: [
      "Desk-friendly exercises",
      "Posture correction",
      "Group sessions available",
      "Custom programs",
    ],
    duration: "Ongoing weekly",
  },
  {
    id: "athlete",
    title: "Athlete Stability",
    tagline: "Performance through precision balance",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
    features: [
      "Sport-specific training",
      "Injury prevention",
      "Performance metrics",
      "One-on-one coaching",
    ],
    duration: "Custom schedule",
  },
  {
    id: "home",
    title: "Home Training",
    tagline: "Professional training at home",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop",
    features: [
      "Video-guided exercises",
      "Minimal equipment",
      "Virtual check-ins",
      "Community support",
    ],
    duration: "Self-paced",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop"
          alt="Balance training programs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Our Programs
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Specialized training for every stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List - Large Image Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-[400px] rounded-3xl overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-primary font-medium">{program.duration}</span>
                    <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                      {program.title}
                    </h2>
                    <p className="mt-2 text-xl text-muted-foreground">{program.tagline}</p>
                    <ul className="mt-8 space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-lg text-foreground">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="mt-8 text-lg">
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Background Image */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=800&fit=crop"
          alt="Training consultation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not Sure Which Program?
            </h2>
            <p className="mt-6 text-xl text-white/90">
              Schedule a free consultation and we will recommend the best fit.
            </p>
            <Button asChild size="lg" className="mt-10 text-lg px-8 py-6">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
