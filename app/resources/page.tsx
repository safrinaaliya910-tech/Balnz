"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FileText, PlayCircle, HelpCircle, BookOpen, Download, ChevronDown, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const guides = [
  {
    title: "Home Safety Checklist",
    type: "Printable Guide",
    description: "A room-by-room guide to reducing fall risks at home.",
    image: "/images/resource_guide.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Beginner Balance Routine",
    type: "Printable Routine",
    description: "Simple step-by-step exercises using a chair or countertop.",
    image: "/images/resource_routine.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Daily Balance Tracker",
    type: "Printable Tracker",
    description: "A simple way to notice patterns in steadiness and confidence.",
    image: "/images/resource_check.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Weekly Movement Planner",
    type: "Printable Planner",
    description: "Build consistency and stay motivated through the week.",
    image: "/images/programs_workplace.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
]

const videos = [
  {
    title: "5-Minute Warm-Up for Stability",
    duration: "5:00",
    description: "A gentle warm-up to prepare the body for safe movement.",
    image: "/images/programs_home.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Beginner Tai Chi Flow",
    duration: "4:20",
    description: "Slow, controlled movements to improve awareness and calm.",
    image: "/images/services_group.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Safe Turning Techniques",
    duration: "3:15",
    description: "Simple techniques to help you stay steady during turns.",
    image: "/images/programs_athlete.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Daily Mobility Routine",
    duration: "6:00",
    description: "A gentle full-body routine to reduce stiffness and support balance.",
    image: "/images/programs_senior.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
]

const faqs = [
  {
    question: "What is BALNZ?",
    answer:
      "BALNZ is a science-based balance training system created to help people improve stability, reduce fall risk, and move with confidence. It blends physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control.",
  },
  {
    question: "Who are these resources for?",
    answer:
      "These resources are designed for seniors who want to stay independent, adults who feel unsteady, family members supporting aging parents, caregivers, and anyone beginning a balance-training journey.",
  },
  {
    question: "Do I need experience or special equipment?",
    answer:
      "No. Most BALNZ resources are built for beginners and use simple support like a chair, wall, or countertop. No gym equipment or previous experience is required.",
  },
  {
    question: "Is BALNZ safe for beginners or older adults?",
    answer:
      "Yes. BALNZ resources are designed to be gentle, accessible, and grounded in physical therapy principles. Safety is the foundation of every routine, especially for seniors and beginners.",
  },
  {
    question: "How do I know where to start?",
    answer:
      "A good place to begin is with the Home Safety Checklist, Balance Self-Check, or Beginner Balance Routine. These simple tools help you build awareness, confidence, and a safe starting point.",
  },
]

const blogPosts = [
  {
    title: "Why Balance Declines After 50",
    excerpt: "A clear explanation of the physical and neurological changes that affect stability—and what can help.",
    date: "BALNZ Guide",
    image: "/images/programs_senior.png",
  },
  {
    title: "Understanding Fall Risk",
    excerpt: "Learn the most common causes of falls and how simple changes can reduce risk.",
    date: "BALNZ Guide",
    image: "/images/services_education.png",
  },
  {
    title: "How Balance Training Works",
    excerpt: "An introduction to the BALNZ method and how science-based movement supports confidence.",
    date: "BALNZ Guide",
    image: "/images/hero_home.png",
  },
  {
    title: "Medication & Dizziness Awareness",
    excerpt: "A simple awareness guide to help notice habits or factors that may affect balance.",
    date: "BALNZ Guide",
    image: "/images/resource_check.png",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground pr-4">{question}</span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

function VideoModal({
  video,
  onClose,
}: {
  video: typeof videos[0]
  onClose: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Close video"
        >
          <X className="h-8 w-8" />
        </button>

        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video ref={videoRef} src={video.videoUrl} controls autoPlay className="w-full aspect-video">
            Your browser does not support the video tag.
          </video>
          <div className="p-4 bg-foreground">
            <h3 className="text-lg font-semibold text-white">{video.title}</h3>
            <p className="text-white/70 text-sm mt-1">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null)

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Resources Library
              </h1>
              <p className="mt-4 text-xl text-white/90">
                Free tools to help you move with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Guides Section */}
      <section id="guides" className="py-16 lg:py-24 bg-background scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Printable Tools
              </h2>
              <p className="text-muted-foreground mt-1">
                Click to download simple, practical BALNZ resources.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="bg-card overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg"
                onClick={() => handleDownload(guide.downloadUrl, `${guide.title}.pdf`)}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 rounded-full px-3 py-1 text-xs font-medium text-primary shadow">
                    PDF
                  </div>
                </div>
                <CardContent className="p-5">
                  <span className="text-sm text-primary font-medium">{guide.type}</span>
                  <h3 className="mt-1 font-semibold text-foreground text-lg">{guide.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{guide.description}</p>
                  <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:underline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Videos Section */}
      <section id="videos" className="py-16 lg:py-24 bg-secondary/50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <PlayCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Videos & Demonstrations
              </h2>
              <p className="text-muted-foreground mt-1">
                Click to watch simple movement guidance and routines.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setActiveVideo(video)}>
                <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-8 w-8 text-primary fill-primary/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-background scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden lg:sticky lg:top-24 shadow-xl">
              <Image
                src="/images/about_coach.png"
                alt="Fitness professional helping with balance exercises"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="bg-card rounded-2xl p-2 shadow-lg">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 lg:py-24 bg-secondary/50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Educational Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Link key={index} href="#" className="group">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-white/80 text-sm">{post.date}</span>
                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28">
        <Image
          src="/images/cta_background.png"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start With What You Need Most
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Whether you want to make your home safer, begin a gentle routine, or learn more about balance, BALNZ gives you tools you can use today.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 text-lg px-8 py-6 rounded-xl shadow-lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  )
}