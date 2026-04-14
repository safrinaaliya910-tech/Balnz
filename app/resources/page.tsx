"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FileText, PlayCircle, HelpCircle, BookOpen, Download, ChevronDown, ChevronUp, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const guides = [
  {
    title: "Balance Assessment Guide",
    type: "PDF Guide",
    description: "Comprehensive self-assessment tools",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Fall Prevention Checklist",
    type: "PDF Checklist",
    description: "Home safety evaluation guide",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "5-Minute Daily Routine",
    type: "PDF Guide",
    description: "Quick exercises for every morning",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&h=400&fit=crop",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
  {
    title: "Nutrition for Balance",
    type: "PDF Guide",
    description: "Foods that support stability",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    downloadUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
  },
]

const videos = [
  {
    title: "Beginner Balance Exercises",
    duration: "3:47",
    description: "Start your balance journey here",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Chair-Based Routine",
    duration: "2:30",
    description: "Safe seated exercises",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Standing Progressions",
    duration: "4:15",
    description: "Build confidence on your feet",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Core Strength Training",
    duration: "5:00",
    description: "Strengthen your foundation",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
]

const faqs = [
  {
    question: "How often should I practice balance exercises?",
    answer: "We recommend practicing at least 3-4 times per week. Even short daily sessions of 5-10 minutes can make a significant difference in your stability and confidence. Consistency is key to seeing results.",
  },
  {
    question: "Is it normal to feel unsteady when starting?",
    answer: "Yes, this is completely normal. Balance training challenges your body in new ways, and it takes time for your neuromuscular system to adapt. Always prioritize safety by staying near a wall or sturdy surface when starting out.",
  },
  {
    question: "Can balance training help after a fall?",
    answer: "Absolutely. Balance training is one of the most effective ways to prevent future falls and rebuild confidence after an incident. Our programs are specifically designed to progressively restore your stability and reduce fall risk.",
  },
  {
    question: "How long until I see results?",
    answer: "Many people notice improvements within 2-4 weeks of consistent practice. Significant changes in balance, coordination, and confidence typically occur within 8-12 weeks. Your progress will depend on your starting point and training frequency.",
  },
  {
    question: "Do I need any special equipment?",
    answer: "No special equipment is required to start. Most of our exercises use bodyweight only. As you progress, simple items like resistance bands or balance pads can be added, but they are optional.",
  },
]

const blogPosts = [
  {
    title: "Understanding the Science of Balance",
    excerpt: "Discover how your vestibular system, vision, and proprioception work together.",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
  },
  {
    title: "Top 10 Balance Exercises for Seniors",
    excerpt: "Simple, effective exercises you can do at home.",
    date: "March 8, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
  },
  {
    title: "How Desk Work Affects Your Balance",
    excerpt: "The hidden impact of sedentary work on your stability.",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
  },
  {
    title: "Balance Training for Athletes",
    excerpt: "How improved balance enhances athletic performance.",
    date: "February 20, 2026",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground pr-4">{question}</span>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-base text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

function VideoModal({ video, onClose }: { video: typeof videos[0]; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Close video"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full aspect-video"
          >
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
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop"
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
                Free Resources
              </h1>
              <p className="mt-4 text-xl text-white/90">
                Guides, videos, and articles to support your balance journey.
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
                Downloadable Guides
              </h2>
              <p className="text-muted-foreground mt-1">Click to download PDF guides</p>
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
                Exercise Videos
              </h2>
              <p className="text-muted-foreground mt-1">Click to watch and follow along</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
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
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{video.title}</h3>
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
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
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
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Link 
                key={index} 
                href="#"
                className="group"
              >
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
                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-white/90 transition-colors">{post.title}</h3>
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
          src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1920&h=800&fit=crop"
          alt="Training session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want Personalized Guidance?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Schedule a free consultation with our balance experts.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 text-lg px-8 py-6 rounded-xl shadow-lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal 
          video={activeVideo} 
          onClose={() => setActiveVideo(null)} 
        />
      )}
    </div>
  )
}
