import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

const programs = [
  {
    id: "senior",
    title: "Senior Balance & Fall Prevention",
    tagline: "Gentle routines to stay steady, confident, and independent",
    description: "A gentle, accessible program designed to help older adults stay steady, confident, and independent. Movements are simple, safe, and easy to follow, with clear progressions for all ability levels.",
    image: "/images/programs_senior.png",
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
    description: "A practical program for professionals who spend long hours sitting, standing, or moving repetitively. These routines improve balance, reduce strain, and support healthier movement throughout the workday.",
    image: "/images/programs_workplace.png",
    features: [
      "Reducing aches, stiffness, and fatigue",
      "Improving posture and body awareness",
      "Enhancing balance during daily tasks",
      "Preventing workplace-related injuries",
    ],
    duration: "Ideal for: Office workers, healthcare workers, teachers, and anyone with repetitive or sedentary jobs",
  },
  {
    id: "athlete",
    title: "Athlete Stability & Agility",
    tagline: "Build control, coordination, and injury-resistant movement",
    description: "A performance-focused program built on the same principles Daniel used with international soccer athletes. It enhances control, coordination, and injury-resistant movement.",
    image: "/images/programs_athlete.png",
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
    description: "A simple, safe program designed for people who prefer to train in their own space. No special equipment is required — just a chair, a wall, or a countertop for support.",
    image: "/images/programs_home.png",
    features: [
      "Building daily balance habits",
      "Improving strength and coordination",
      "Creating a safe, steady foundation for movement",
      "Supporting long-term mobility",
    ],
    duration: "Ideal for: Anyone who wants a flexible, home-based routine",
  },
  {
    id: "kids",
    title: "Balance for Kids & Teens",
    tagline: "Build coordination, confidence, and movement skills early",
    description: "A fun, engaging program designed to help young people develop body awareness, coordination, and movement confidence from an early age.",
    image: "/images/programs_athlete.png",
    features: [
      "Developing coordination and body awareness",
      "Building confidence in physical activity",
      "Improving focus and reaction time",
      "Creating healthy movement habits early in life",
    ],
    duration: "Ideal for: Children and teens ages 6–17, active youth, and young athletes",
  },
  {
    id: "rehab",
    title: "Rehab & Recovery",
    tagline: "Rebuild strength, stability, and confidence after injury or illness",
    description: "A supportive program designed to help people regain balance, strength, and confidence following injury, surgery, or illness.",
    image: "/images/individual3.png",
    features: [
      "Rebuilding balance after injury or surgery",
      "Restoring confidence in movement",
      "Strengthening stabilizing muscles safely",
      "Supporting recovery from neurological conditions",
    ],
    duration: "Ideal for: Post-surgery recovery, stroke rehabilitation, and injury comebacks",
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
         <div className="text-center mb-16 py-12">
  <p className="text-base font-semibold tracking-widest text-primary uppercase mb-4">BALNZ Programs</p>
  <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
    Science-Based Training for Every Stage of Life
  </h2>
  <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    BALNZ offers simple, science-based training programs designed to improve balance, strength, and confidence at any age. Each program blends physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control to create safe, effective routines that fit real life.
  </p>
  <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    Whether someone is preventing falls, moving better at work, or enhancing athletic performance, BALNZ meets people exactly where they are.
  </p>
</div>
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
  <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
    {program.title}
  </h2>

  <p className="mt-2 text-xl text-muted-foreground">
    {program.tagline}
  </p>

  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
    {program.description}
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

  <p className="mt-4 text-base text-primary font-medium">{program.duration}</p>

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

      {/* How BALNZ Programs Work */}
<section className="py-20 lg:py-28 bg-secondary/50">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
      <div>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          How BALNZ Programs Work
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Each program is built on the BALNZ method — a blend of:
        </p>
        <div className="mt-6 space-y-3">
          {[
            "Physical therapy and neuroscience",
            "Tai Chi principles",
            "Yoga-inspired awareness",
            "Evidence-based balance training",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-lg text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Movements are designed to be clear, safe, and accessible for all levels. Every routine focuses on improving stability, confidence, and real-world movement.
        </p>
      </div>
      <div className="relative h-[400px] rounded-3xl overflow-hidden">
        <Image
          src="/images/programs_senior.png"
          alt="How BALNZ Programs Work"
          fill
          className="object-cover"
        />
      </div>
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