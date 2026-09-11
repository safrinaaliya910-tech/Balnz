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
  return null;
}