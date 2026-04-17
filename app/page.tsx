import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Play, Download, FileText } from "lucide-react"

const programs = [
  {
    title: "Senior Balance & Fall Prevention",
    description: "Gentle, effective routines to stay steady, confident, and independent.",
    image: "/images/programs_senior.png",
    href: "/programs#senior",
  },
  {
    title: "Workplace Balance & Mobility",
    description: "Reduce strain, improve posture, and move better throughout the day.",
    image: "/images/programs_workplace.png",
    href: "/programs#workplace",
  },
  {
    title: "Balnace & Agility Training",
    description: "Enhance performance, coordination, and injury-resistant movement.",
    image: "/images/programs_athlete.png",
    href: "/programs#athlete",
  },
  {
    title: "At-Home Balance Training",
    description: "Simple, safe routines you can do confidently in your own space.",
    image: "/images/programs_home.png",
    href: "/programs#home",
  },
]

const services = [
  {
    title: "Balance Assessments",
    image: "/images/services_oneonone.png",
    href: "/services",
  },
  {
    title: "Small Group Classes",
    image: "/images/services_group.png",
    href: "/services",
  },
  {
    title: "Community Workshops",
    image: "/images/services_education.png",
    href: "/services",
  },
]

const testimonials = [
  {
    content:
      "I feel more confident walking around my home. BALNZ made balance training simple and doable.",
    author: "Maria, 72",
    role: "BALNZ Participant",
    image: "/images/testimonial_1.png",
    rating: 5,
  },
  {
    content:
      "The exercises are gentle but effective. I didn’t realize how much my balance could improve.",
    author: "James, 58",
    role: "BALNZ Participant",
    image: "/images/testimonial_2.png",
    rating: 5,
  },
  {
    content:
      "As a PT, I recommend BALNZ to clients who want safe, practical routines they can do at home.",
    author: "Lauren",
    role: "Physical Therapist",
    image: "/images/testimonial_3.png",
    rating: 5,
  },
]

const resources = [
  {
    title: "Home Safety Checklist",
    type: "Printable Guide",
    icon: FileText,
    image: "/images/resource_guide.png",
  },
  {
    title: "Balance Self-Check",
    type: "Self-Check",
    icon: Play,
    image: "/images/resource_check.png",
  },
  {
    title: "Beginner Balance Routine",
    type: "Download",
    icon: Download,
    image: "/images/resource_routine.png",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Fixed for BOTH Light and Dark themes */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-secondary/30 to-accent/20 dark:from-zinc-400 dark:via-zinc-950 dark:to-black overflow-hidden transition-colors duration-300">
        
        {/* Padding added to clear the navbar */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-8 lg:pt-32 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-center min-h-[75vh]">
            
            {/* Left Side - Content (30% = 3/10) */}
            <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center">
              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-5xl lg:text-6xl text-balance drop-shadow-sm dark:drop-shadow-md">
                Strong.<br />
                Steady.<br />
                Safe.
              </h1>

              {/* Subtext */}
              <p className="mt-5 text-base leading-7 text-muted-foreground dark:text-zinc-200 lg:text-lg max-w-sm mx-auto lg:mx-0 drop-shadow-sm">
                Balance is the foundation of every confident step. BALNZ helps
                you stay strong, steady, and safe with simple, science-based
                training designed for everyday life.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 justify-center lg:justify-start max-w-[280px] mx-auto lg:mx-0">
                <Button
                  asChild
                  size="lg"
                  className="text-base font-medium px-6 py-6 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all w-full shadow-lg"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base font-medium px-6 py-6 rounded-2xl border border-zinc-300 bg-white/50 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-500 dark:bg-black/40 dark:text-white dark:hover:bg-black/60 backdrop-blur-sm transition-all w-full"
                >
                  <Link href="/resources">Take a Balance Test</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Extra Large Cut-out Image (70% = 7/10) */}
            <div className="relative order-1 lg:order-2 lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/Fb2WYBHx/BP4-removebg-preview.png"
                  alt="Balance training"
                  width={800}
                  height={1000}
                  priority
                  className="
                    block
                    mx-auto
                    w-full
                    max-w-[420px] sm:max-w-[550px] lg:max-w-[750px]
                    max-h-[60vh] lg:max-h-[70vh]
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Image Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Programs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Training for every stage of life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <Link key={program.title} href={program.href} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{program.description}</p>
                    <span className="mt-3 inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Grid with Images */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Better balance for every body.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center text-white/90 font-medium">
                      View details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Balance Matters - Image + Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/balance.png"
                alt="Balance training in action"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Balance Matters
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Balance affects walking, stairs, reaching, and everyday
                    movement.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Training balance helps reduce fall risk and supports
                    independence.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Small improvements can make a big difference in confidence
                    and mobility.
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="mt-10">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Image Thumbnails */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Free Resources
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn, practice, and improve at home.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resources.map((resource) => (
              <Link key={resource.title} href="/resources" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <span className="text-sm font-medium text-primary">
                      {resource.type}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {resource.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Profile Images */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real People. Real Progress.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Background Image */}
      <section className="relative py-24 lg:py-32">
        <Image
          src="/images/cta_background.png"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Feel More Steady?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Take your first step toward better balance today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">Get Started with BALNZ</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}