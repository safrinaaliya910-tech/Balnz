import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

const programs = [
  {
    id: "senior",
    title: "Senior Balance & Fall Prevention",
    tagline: "Gentle routines to stay steady, confident, and independent",
    image: "/images/programs_senior.png", // 👴 BEST MATCH (old age)
    features: [
      "Reducing fall risk",
      "Improving stability and posture",
      "Building confidence in daily movement",
      "Supporting long-term independence",
    ],
    duration: "Ideal for: Adults 55+, beginners, and anyone who feels unsteady",
  },
  {
    id: "workplace",
    title: "Workplace Mobility & Injury Prevention",
    tagline: "Move better, feel better, and reduce strain throughout the workday",
    image: "/images/programs_workplace.png", // 💻 workplace feel
    features: [
      "Reducing aches, stiffness, and fatigue",
      "Improving posture and body awareness",
      "Enhancing balance during daily tasks",
      "Preventing workplace-related injuries",
    ],
    duration: "Ideal for: Office workers, healthcare workers, teachers, and repetitive or sedentary jobs",
  },
  {
    id: "athlete",
    title: "Balance & Agility Training",
    tagline: "Build control, coordination, and injury-resistant movement",
    image: "/images/programs_athlete.png", // 🏃 athletic feel
    features: [
      "Improving single-leg stability",
      "Enhancing agility and reaction time",
      "Strengthening neuromuscular control",
      "Reducing risk of ankle, knee, and hip injuries",
    ],
    duration: "Ideal for: Recreational and competitive athletes of all ages",
  },
  {
    id: "home",
    title: "At-Home Balance Training",
    tagline: "Simple exercises you can do safely in your own space",
    image: "/images/programs_home.png", // 🏠 home environment
    features: [
      "Building daily balance habits",
      "Improving strength and coordination",
      "Creating a safe, steady foundation for movement",
      "Supporting long-term mobility",
    ],
    duration: "Ideal for: Anyone who wants a flexible, home-based routine",
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/dignity.png" // 👈 clean hero (safe choice)
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
                Programs for Every Stage of Life
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Science-based balance training designed to improve strength, confidence, and real-world movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={program.id} id={program.id} className="scroll-mt-24">
                <div
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative h-[400px] rounded-3xl overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-primary font-medium">
                      {program.duration}
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                      {program.title}
                    </h2>

                    <p className="mt-2 text-xl text-muted-foreground">
                      {program.tagline}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-lg text-foreground"
                        >
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

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="/images/services_group.png" // 👈 strong trust image
          alt="Training consultation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Find the Right Program for You
            </h2>
            <p className="mt-6 text-xl text-white/90">
              Whether you’re just beginning or looking to enhance performance, BALNZ has a program that fits your goals.
            </p>
            <Button asChild size="lg" className="mt-10 text-lg px-8 py-6">
              <Link href="/contact">Explore Your Best Fit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}