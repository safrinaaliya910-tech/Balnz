import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Award, Clock, Users, Target } from "lucide-react"

const team = [
  {
    name: "Dr. Emily Chen",
    role: "Founder & Lead Balance Specialist",
    bio: "20+ years in physical therapy and geriatric care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Torres",
    role: "Senior Balance Coach",
    bio: "Certified PT specializing in fall prevention.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Williams",
    role: "Workplace Wellness Director",
    bio: "Corporate wellness expert.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Park",
    role: "Athletic Performance Coach",
    bio: "Former professional athlete.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
]

const stats = [
  { value: "10,000+", label: "Clients Served", icon: Users },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "98%", label: "Satisfaction", icon: Award },
  { value: "40%", label: "Fall Risk Reduction", icon: Target },
]

const values = [
  {
    title: "Compassion",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "Excellence",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
  },
  {
    title: "Accessibility",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&h=400&fit=crop",
  },
  {
    title: "Empowerment",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop"
          alt="BALNZ team helping clients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                About BALNZ
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Helping people move with confidence since 2010.
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
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                alt="Founder Dr. Emily Chen with client"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                BALNZ was founded in 2010 by Dr. Emily Chen after witnessing her grandmother 
                struggle with balance issues that led to a life-altering fall.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                What started as a small practice has grown into a comprehensive wellness 
                organization serving thousands through in-person sessions, workplace programs, 
                and home training.
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
              Meet Our Team
            </h2>
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
          src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1920&h=800&fit=crop"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Join the BALNZ Family
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Start your journey to better balance today.
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
