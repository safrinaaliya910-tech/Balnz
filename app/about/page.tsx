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
    image: "/images/services_oneonone.png",
  },
  {
    title: "Science",
    image: "/images/science.png",
  },
  {
    title: "Confidence",
    image: "/images/confidence.png",
  },
  {
    title: "Empowered Aging",
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

      {/* Our Story Section - Image + Text */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/about_coach.png"
                alt="BALNZ story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                BALNZ was born from a real-life event that revealed how quickly a
                fall can change a family’s life. After witnessing his mother lose
                her balance and fall, Daniel began to study how common—and how
                dangerous—falls can be for older adults.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                As a physical therapist, Daniel worked across sports and
                geriatrics and discovered something powerful: older adults need
                the same movement principles as athletes, delivered with safety,
                simplicity, and compassion. That insight became the foundation of
                BALNZ.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Today, BALNZ is a comprehensive, science-based system that blends
                physical therapy, neuroscience, Tai Chi principles, and
                yoga-inspired control to help people of all ages move with more
                confidence.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Get in Touch</Link>
              </Button>
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
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="group relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Profile Images */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The BALNZ Foundation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The mission, method, and message behind BALNZ.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="bg-card overflow-hidden group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
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