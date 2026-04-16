"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  ChevronDown,
  Download,
  FileText,
  HelpCircle,
  PlayCircle,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    image: "/images/resource_1.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Daily Balance Tracker",
    type: "Printable Tracker",
    description: "A simple way to notice patterns in steadiness and confidence.",
    image: "/images/resource_3.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Weekly Movement Planner",
    type: "Printable Planner",
    description: "Build consistency and stay motivated through the week.",
    image: "/images/resource_4.png",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
]

const videos = [
  {
    title: "5-Minute Warm-Up for Stability",
    duration: "5:00",
    description: "A gentle warm-up to prepare the body for safe movement.",
    image: "/images/video_1.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Beginner Tai Chi Flow",
    duration: "4:20",
    description: "Slow, controlled movements to improve awareness and calm.",
    image: "/images/video_2.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Safe Turning Techniques",
    duration: "3:15",
    description: "Simple techniques to help you stay steady during turns.",
    image: "/images/video_3.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Daily Mobility Routine",
    duration: "6:00",
    description: "A gentle full-body routine to reduce stiffness and support balance.",
    image: "/images/video_4.png",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
]

const faqs = [
  {
    question: "What is BALNZ?",
    answer:
      "BALNZ is a science-based balance training system created by physical therapist Daniel. It blends physical therapy, neuroscience, Tai Chi principles, and yoga-inspired control to help people improve stability, reduce fall risk, and move with confidence at any age.",
  },
  {
    question: "Who is BALNZ for?",
    answer:
      "BALNZ is designed for adults of all ages, especially seniors who want to stay steady and independent, adults who feel unsteady or have had a recent fall, people with balance concerns due to aging, inactivity, or injury, athletes who want better control and stability, and anyone who wants to improve movement confidence. The programs are safe, simple, and adaptable for all ability levels.",
  },
  {
    question: "Do I need experience or special equipment?",
    answer:
      "No. BALNZ is built to be accessible. Most exercises require only a chair, a wall, or a countertop. No gym equipment or prior experience is needed.",
  },
  {
    question: "Is BALNZ safe for beginners or older adults?",
    answer:
      "Yes. BALNZ was designed specifically with seniors and beginners in mind. Movements are gentle, controlled, and supported by physical therapy principles. Safety is the foundation of every routine.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "Most people begin noticing improvements in stability, confidence, posture, and daily movement within a few weeks of consistent practice. Results vary by individual, but even small improvements can make a meaningful difference.",
  },
  {
    question: "What makes BALNZ different from regular exercise programs?",
    answer:
      "BALNZ focuses on balance first, not just strength or fitness. It combines physical therapy, neuroscience, Tai Chi, yoga-inspired awareness, and real-world movement patterns. This creates a unique, evidence-based approach that improves both the body and the brain’s ability to stay steady.",
  },
  {
    question: "Can BALNZ help prevent falls?",
    answer:
      "BALNZ cannot guarantee fall prevention, but it is designed to significantly reduce fall risk by improving stability, strength, coordination, reaction time, and movement confidence. These are the key factors that influence fall risk in daily life.",
  },
  {
    question: "Where are BALNZ services offered?",
    answer:
      "BALNZ is based in Austin, Texas, and offers in-person assessments and training, small group classes, workplace and community programs, and online training and digital resources. Virtual options make BALNZ accessible from anywhere.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "The Programs page provides clear descriptions of each option. Individuals who want personalized guidance can schedule a balance assessment to determine the safest and most effective starting point.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can begin by exploring the BALNZ programs or contacting the team directly for guidance. Starting with a balance assessment is often the best first step.",
  },
]

const blogPosts = [
  {
    title: "Why Balance Declines After 50",
    excerpt:
      "A clear explanation of the physical and neurological changes that affect stability—and what can help.",
    date: "BALNZ Guide",
    image: "/images/education1.png",
  },
  {
    title: "Understanding Fall Risk",
    excerpt:
      "Learn the most common causes of falls and how simple changes can reduce risk.",
    date: "BALNZ Guide",
    image: "/images/services_education.png",
  },
  {
    title: "How Balance Training Works",
    excerpt:
      "An introduction to the BALNZ method and how science-based movement supports confidence.",
    date: "BALNZ Guide",
    image: "/images/education3.png",
  },
  {
    title: "Medication & Dizziness Awareness",
    excerpt:
      "A simple awareness guide to help notice habits or factors that may affect balance.",
    date: "BALNZ Guide",
    image: "/images/education4.png",
  },
]

type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  const id = useId()
  const buttonId = `faq-button-${id}`
  const panelId = `faq-panel-${id}`

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
      >
        <span className="pr-4 text-lg font-medium text-foreground">{question}</span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

type VideoModalProps = {
  video: (typeof videos)[number]
  onClose: () => void
}

function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-4 w-full max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white transition-colors hover:text-white/80"
          aria-label="Close video"
        >
          <X className="h-8 w-8" />
        </button>

        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            className="aspect-video w-full"
          >
            Your browser does not support the video tag.
          </video>
          <div className="bg-foreground p-4">
            <h3 className="text-lg font-semibold text-white">{video.title}</h3>
            <p className="mt-1 text-sm text-white/70">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null)

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
      <section className="relative min-h-[350px] h-[50vh]">
        <Image
          src="/images/cta_background.png"
          alt="BALNZ resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
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

      <section id="guides" className="scroll-mt-24 bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Printable Tools
              </h2>
              <p className="mt-1 text-muted-foreground">
                Click to download simple, practical BALNZ resources.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-0 bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => handleDownload(guide.downloadUrl, `${guide.title}.pdf`)}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="translate-y-4 transform rounded-full bg-white p-4 shadow-lg transition-transform group-hover:translate-y-0">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-primary shadow">
                    PDF
                  </div>
                </div>

                <CardContent className="p-5">
                  <span className="text-sm font-medium text-primary">{guide.type}</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{guide.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{guide.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:underline">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="scroll-mt-24 bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <PlayCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Videos & Demonstrations
              </h2>
              <p className="mt-1 text-muted-foreground">
                Click to watch simple movement guidance and routines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <button
                key={index}
                type="button"
                className="group cursor-pointer text-left"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative h-52 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                      <PlayCircle className="h-8 w-8 fill-primary/20 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-xl lg:sticky lg:top-24 lg:h-[550px]">
              <Image
                src="/images/about_coach.png"
                alt="Fitness professional helping with balance exercises"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="rounded-2xl bg-card p-2 shadow-lg">
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

      <section id="blog" className="scroll-mt-24 bg-secondary/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
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
                <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm text-white/80">{post.date}</span>
                    <h3 className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-white/90">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/70">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              Whether you want to make your home safer, begin a gentle routine, or
              learn more about balance, BALNZ gives you tools you can use today.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 rounded-xl px-8 py-6 text-lg shadow-lg"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {activeVideo ? (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      ) : null}
    </div>
  )
}