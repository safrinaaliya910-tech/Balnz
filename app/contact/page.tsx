import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact",
  description: "Get in touch with BALNZ for questions, booking requests, workplace programs, or collaboration opportunities. We respond within 1–2 business days.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Austin, Texas", "Serving locally and online"],
  },
  {
    icon: Phone,
    title: "Response Time",
    details: ["Within 1–2 business days"],
  },
  {
    icon: Mail,
    title: "General Inquiries",
    details: ["info@balnz.com"],
  },
  {
    icon: Clock,
    title: "Stay Connected",
    details: ["Instagram • Facebook", "YouTube • LinkedIn"],
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="/images/contact_support.png"
          alt="Contact BALNZ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Get in Touch with BALNZ
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Connect with us for questions, booking requests, or collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards - Image Style */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card text-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{info.title}</h3>
                <div className="mt-2 space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Image Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Image Side */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden lg:sticky lg:top-24">
              <Image
                src="/images/about_coach.png"
                alt="BALNZ team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white">We're Here to Help</h3>
                <p className="mt-2 text-white/90">
                  Whether you're just beginning your balance journey or looking to bring BALNZ to your community, reaching out is the first step.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
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
              Ready to Take the First Step?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              BALNZ is ready to support you with stronger, steadier movement.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-10 text-lg px-8 py-6">
              <a href="mailto:info@balnz.com">Email BALNZ</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}