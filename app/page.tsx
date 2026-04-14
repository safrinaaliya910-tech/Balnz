import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Play, Download, FileText } from "lucide-react"

const programs = [
  {
    title: "Senior Balance",
    description: "Gentle exercises for stability and fall prevention.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    href: "/programs#senior",
  },
  {
    title: "Workplace Mobility",
    description: "Combat desk fatigue and improve posture.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    href: "/programs#workplace",
  },
  {
    title: "Athlete Stability",
    description: "Advanced training for peak performance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    href: "/programs#athlete",
  },
  {
    title: "Home Training",
    description: "Flexible programs from the comfort of home.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
    href: "/programs#home",
  },
]

const services = [
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    href: "/services",
  },
  {
    title: "Group Classes",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&h=400&fit=crop",
    href: "/services",
  },
  {
    title: "Virtual Sessions",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
    href: "/services",
  },
]

const testimonials = [
  {
    content: "After just 8 weeks, I feel so much more confident. The exercises are easy to follow.",
    author: "Margaret T.",
    role: "Senior Balance Program",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    content: "Our office saw a significant decrease in back pain complaints. Highly recommend!",
    author: "David L.",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    content: "The Athlete Stability program improved my form and prevented injuries.",
    author: "Sarah K.",
    role: "Athlete Stability Program",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
  },
]

const resources = [
  {
    title: "Balance Assessment Guide",
    type: "PDF Guide",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
  },
  {
    title: "5-Minute Daily Routine",
    type: "Video",
    icon: Play,
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&h=300&fit=crop",
  },
  {
    title: "Fall Prevention Checklist",
    type: "Download",
    icon: Download,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Clean Split Layout with 30/70 Grid */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-secondary/30 to-accent/20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-4 items-center min-h-[85vh]">
            {/* Left Side - Content (30% = 3/10) */}
            <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-3 flex flex-col justify-center">
              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl text-balance">
                Strong. Steady. Safe.
              </h1>
              
              {/* Subtext */}
              <p className="mt-5 text-base leading-7 text-muted-foreground lg:text-lg max-w-sm mx-auto lg:mx-0">
                Professional balance and mobility training for a confident, independent life.
              </p>
              
              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base px-6 py-5 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                  <Link href="/programs">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-6 py-5 rounded-xl border-2 bg-white hover:bg-secondary transition-all">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Extra Large Cut-out Image (70% = 7/10) */}
<div className="relative order-1 lg:order-2 lg:col-span-7 flex justify-center items-center"><div className="relative w-full flex justify-center items-center">  
  <Image
  src="https://i.ibb.co/Fb2WYBHx/BP4-removebg-preview.png"
  alt="Balance training"
  width={800}
  height={1000}
  priority
className="
  block
  mx-auto

  w-[85%] sm:w-[70%] lg:w-full
  max-w-[420px] sm:max-w-[500px] lg:max-w-none

  object-contain
  h-auto
"
/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Programs Section - Image Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Programs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Specialized training for every stage of life.
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
                      <h3 className="text-xl font-bold text-white">{program.title}</h3>
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
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Multiple ways to train with BALNZ.
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
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop"
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
                    <span className="text-2xl font-bold text-primary">40%</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Reduction in fall risk with proper training</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">8</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Weeks to see significant improvement</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">95%</span>
                  </div>
                  <p className="text-lg text-muted-foreground">Client satisfaction rate</p>
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
              Start your balance journey today.
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
                    <span className="text-sm font-medium text-primary">{resource.type}</span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{resource.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">View All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Profile Images */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
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
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=800&fit=crop"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Find Your Balance?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Schedule a free consultation today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
