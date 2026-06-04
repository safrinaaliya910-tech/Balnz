import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Award, Clock, Users, Target } from "lucide-react"

const team = [
  {
    name: "A Moment That Sparked a Mission",
    role: "The Beginning of BALNZ",
    bio: "BALNZ was born from a real-life event that revealed how quickly a fall can change a family’s life and why balance training matters.",
    image: "/images/sparked.png",
  },
  {
    name: "A Physical Therapist’s Journey",
    role: "From Sports to Geriatrics",
    bio: "Daniel began as a sports physical therapist and later discovered that older adults need the same movement principles as athletes—delivered with safety and compassion.",
    image: "/images/contact_support.png",
  },
  {
    name: "The Creation of BALNZ",
    role: "Science-Based Movement",
    bio: "BALNZ blends physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control into one simple, safe, and accessible system.",
    image: "/images/creation.png",
  },
  {
    name: "A Message From Daniel",
    role: "Movement for Life",
    bio: "Balance is not just a physical skill—it’s independence, safety, and quality of life. BALNZ was created to help people move with confidence.",
    image: "/images/message.png",
  },
]

const stats = [
  { value: "1,000+", label: "Adults Tested", icon: Users },
  { value: "50+", label: "Ages Studied", icon: Clock },
  { value: "4", label: "Core Disciplines Blended", icon: Award },
  { value: "1", label: "Mission: Prevent Falls", icon: Target },
]

const values = [
  {
    title: "Simplicity",
    description: "Movement should be clear, accessible, and doable.",
    image: "/images/services_oneonone.png",
  },
  {
    title: "Science",
    description: "Every method is grounded in physical therapy and neuroscience.",
    image: "/images/science.png",
  },
  {
    title: "Confidence",
    description: "Training should build trust in one's own body.",
    image: "/images/confidence.png",
  },
  {
    title: "Movement",
    description: "Small steps create lifelong change.",
    image: "/images/balance.png",
  },
  {
    title: "Dignity",
    description: "Every person deserves to feel steady and safe.",
    image: "/images/dignity.png",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[60vh] min-h-[400px]">
  <Image
    src="/images/about.png"
    alt="BALNZ about page hero"
    fill
    priority
    quality={100}
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/30" />

  <div className="absolute inset-0 flex items-center">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-white sm:text-6xl">
          About BALNZ
        </h1>
        <p className="mt-6 text-xl text-white/90">
          Science-based. Confidence-building. Movement for life.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
<section className="py-20 lg:py-28 bg-background">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16 text-center">
      Our Story
    </h2>

    {/* Part 1 - Image Left, Text Right */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-20">
      <div className="relative h-[400px] rounded-3xl overflow-hidden">
        <Image src="/images/sparked.png" alt="A Moment That Sparked a Mission" fill className="object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">A Moment That Sparked a Mission</h3>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          BALNZ was born from a real-life event that revealed how quickly a fall can change a family's life. During a busy celebration, Daniel witnessed his mother lose her balance and fall while stepping out of a church. She recovered with only minor injuries, but the experience opened his eyes to how common — and how dangerous — falls can be for older adults.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          In the months that followed, Daniel began observing seniors in everyday environments and documented multiple fall events among adults ages 50 to 90. He noticed a clear pattern: women fell more often than men, and even people who exercised regularly struggled with balance.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          This moment became the foundation for what would eventually grow into BALNZ.
        </p>
      </div>
    </div>

    {/* Part 2 - Text Left, Image Right */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-20">
      <div className="lg:order-1 order-2">
        <h3 className="text-2xl font-bold text-foreground">A Physical Therapist's Journey</h3>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Daniel began his career as a sports physical therapist, working with an international soccer team and training athletes to move with precision, control, and power. Over time, he transitioned into geriatrics, where he discovered something profound: older adults need the same movement principles as athletes — delivered with safety, simplicity, and compassion.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          After testing more than 1,000 adults using a BT-Tracks portable balance testing system, the results were unmistakable:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "Most adults over 50 failed basic balance tests",
            "Even regular gym-goers showed significant instability",
            "Balance decline was widespread, silent, and rarely addressed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          These findings confirmed what he had already seen firsthand: balance is a hidden crisis.
        </p>
      </div>
      <div className="relative h-[400px] rounded-3xl overflow-hidden lg:order-2 order-1">
        <Image src="/images/about_coach.png" alt="A Physical Therapist's Journey" fill className="object-cover" />
      </div>
    </div>

    {/* Part 3 - Image Left, Text Right */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
      <div className="relative h-[400px] rounded-3xl overflow-hidden">
        <Image src="/images/creation.png" alt="The Creation of BALNZ" fill className="object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">The Creation of BALNZ</h3>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          BALNZ was developed as a comprehensive, science-based approach to improving balance for people of all ages. The program blends:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "Ancient Tai Chi principles",
            "Yoga-inspired control and awareness",
            "Modern physical therapy",
            "Neuroscience and evidence-based balance training",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          The result is a simple, safe, and accessible system designed to help anyone move with more confidence. BALNZ is built on a core philosophy: Science-based. Confidence-building. Movement for life.
        </p>
        
      </div>
    </div>

  </div>
</section>

      {/* Our Values Section - Image Grid */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Clear principles guide every BALNZ program and service.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {values.map((value, index) => (
              <div key={index} className="group">
  <div className="relative h-56 rounded-2xl overflow-hidden">
    <Image
      src={value.image}
      alt={value.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>
  <h3 className="mt-4 text-xl font-bold text-foreground">{value.title}</h3>
  <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
</div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Mission & Vision */}
<section className="py-20 lg:py-28 bg-background">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Mission */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Mission</h2>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        To empower individuals to improve their balance through education, awareness, and science-based training programs — helping people stay strong, steady, and safe in their daily lives.
      </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/about.png" alt="BALNZ mission" fill className="object-cover" />
      </div>
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/programs_senior.png" alt="Senior training" fill className="object-cover" />
      </div>
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/services_group.png" alt="Group training" fill className="object-cover" />
      </div>
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/programs_workplace.png" alt="Workplace training" fill className="object-cover" />
      </div>
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/confidence.png" alt="Confidence" fill className="object-cover" />
      </div>
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <Image src="/images/dignity.png" alt="Dignity" fill className="object-cover" />
      </div>
    </div>
{/* Vision */}
<div className="mt-20 mb-16">
  <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8 text-center">Vision</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left side - single image */}
    <div className="relative h-[350px] rounded-3xl overflow-hidden">
      <Image src="/images/community1.png" alt="BALNZ Vision" fill className="object-cover" />
    </div>

    {/* Right side - bullet points */}
    <div>
      <p className="text-lg text-muted-foreground">BALNZ envisions a world where:</p>
      <div className="mt-6 space-y-4">
        {[
          "Falls are preventable, not inevitable",
          "Balance training is part of everyday life",
          "Seniors feel confident, independent, and in control",
          "Communities understand the science of movement",
          "BALNZ becomes a global movement for lifelong stability",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
            <p className="text-lg text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>


  </div>
</section>

      {/* CTA Section - Background Image */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ movement training"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Move With Confidence
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Take your first step toward stronger, steadier, safer movement.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-10 text-lg px-8 py-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}