import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Newspaper, CalendarDays, HeartHandshake, CheckCircle } from "lucide-react"

const updates = [
  {
    title: "Why Balance Training Matters More Than Most People Realize",
    category: "Daily News",
    date: "Today",
    image: "/images/community1.png",
    excerpt:
      "Balance affects walking, stairs, posture, and everyday confidence. Training it early can improve safety and long-term independence.",
  },
  {
    title: "Simple Fall-Prevention Habits That Make a Big Difference",
    category: "Community Update",
    date: "This Week",
    image: "/images/community2.png",
    excerpt:
      "Small habits like better lighting, supportive footwear, and safe turning techniques can help reduce fall risk at home.",
  },
  {
    title: "How Better Posture Supports Stability and Daily Movement",
    category: "Wellness Insight",
    date: "This Week",
    image: "/images/community3.png",
    excerpt:
      "Posture plays a key role in how the body balances. Better alignment helps improve movement control and reduce strain.",
  },
  {
    title: "Walking Confidence Starts With Small, Consistent Practice",
    category: "Daily News",
    date: "This Month",
    image: "/images/programs_home.png",
    excerpt:
      "Short balance routines done consistently can help improve confidence during walking, turning, and daily transitions.",
  },
  {
    title: "Healthy Aging Includes Strength, Stability, and Confidence",
    category: "BALNZ Update",
    date: "This Month",
    image: "/images/community4.png",
    excerpt:
      "Aging well is not only about strength. Stability, body awareness, and confidence in movement are just as important.",
  },
]

const stories = [
  {
    name: "Maria, 72",
    role: "BALNZ Participant",
    image: "/images/testimonial_1.png",
    quote:
      "I feel more confident walking around my home. BALNZ made balance training simple and doable.",
  },
  {
    name: "James, 58",
    role: "BALNZ Participant",
    image: "/images/testimonial_2.png",
    quote:
      "The exercises are gentle but effective. I didn’t realize how much my balance could improve.",
  },
  {
    name: "Lauren",
    role: "Physical Therapist",
    image: "/images/testimonial_3.png",
    quote:
      "BALNZ gives people safe, practical routines they can actually use in real life.",
  },
]

const events = [
  {
    title: "Monthly Balance Challenge",
    description: "A guided community challenge focused on simple daily balance habits.",
  },
  {
    title: "Local Workshops",
    description: "Educational sessions on fall prevention, posture, and confident movement.",
  },
  {
    title: "Virtual Community Sessions",
    description: "Online check-ins, guided practice, and supportive movement education.",
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px]">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ Community"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                BALNZ Community
              </h1>
              <p className="mt-5 text-xl text-white/90">
                A movement built on confidence, connection, and steady progress.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Join the Community</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Community That Moves Together
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The BALNZ Community brings together individuals, families, and professionals
              who care about strength, stability, fall prevention, and movement confidence.
              It is a place for learning, encouragement, shared progress, and real-world support.
            </p>
          </div>
        </div>
      </section>

      {/* Community highlights */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <HeartHandshake className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Support & Encouragement</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Build consistency with encouragement, practical guidance, and shared momentum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <CalendarDays className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Challenges & Events</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Join monthly balance challenges, local workshops, and virtual community sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <Newspaper className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Daily News & Updates</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Stay connected with simple updates on movement, safety, healthy aging, and balance education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates / News */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Daily News & Community Updates
              </h2>
              <p className="mt-1 text-muted-foreground">
                Helpful updates related to balance, movement, safety, and healthy aging.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow">
                    {item.category}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-medium text-white/90">{item.date}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <Button asChild variant="outline" className="mt-5">
                    <Link href="/resources">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real People. Real Progress.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stories that reflect steady improvement, confidence, and safe movement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stories.map((story, index) => (
              <Card key={index} className="bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    “{story.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <CalendarDays className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Community Events
              </h2>
              <p className="mt-1 text-muted-foreground">
                Simple ways to stay engaged, informed, and active.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {events.map((event, index) => (
              <Card key={index} className="bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-5 flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-sm text-foreground">
                      Designed to support consistency, awareness, and movement confidence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ community call to action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the BALNZ Community
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Stay connected with balance tips, movement updates, workshops, and steady encouragement.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              <Link href="/contact">Get Connected</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
