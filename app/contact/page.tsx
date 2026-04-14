"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Balance Street", "Portland, OR 97201"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(503) 555-0123"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@balnz.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 8am-6pm", "Sat: 9am-2pm"],
  },
]

const interests = [
  "Senior Balance Program",
  "Workplace Mobility Program",
  "Athlete Stability Program",
  "Home Training Program",
  "Corporate Programs",
  "General Inquiry",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width image */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
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
                Contact Us
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Ready to start your balance journey?
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1200&fit=crop"
                alt="BALNZ team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                <p className="mt-2 text-white/90">
                  Our team is ready to help you find the perfect program.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              {isSubmitted ? (
                <Card className="bg-card">
                  <CardContent className="p-8 text-center">
                    <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
                        alt="Thank you"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      We will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          interest: "",
                          message: "",
                        })
                      }}
                      variant="outline"
                      className="mt-6"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-base font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="text-base py-3"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-base font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="text-base py-3"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="text-base py-3"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2">
                          Phone (Optional)
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="text-base py-3"
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-base font-medium text-foreground mb-2">
                          I am interested in
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select an option</option>
                          {interests.map((interest) => (
                            <option key={interest} value={interest}>
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your goals..."
                          className="text-base resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
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
              Prefer to Talk?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Call us directly at (503) 555-0123
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-10 text-lg px-8 py-6">
              <a href="tel:+15035550123">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
