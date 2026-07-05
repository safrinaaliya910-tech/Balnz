"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"

const interests = [
  "General Inquiry",
  "Balance Assessment or Training Session",
  "Workplace Program",
  "Community Workshop or Event",
  "Media or Collaboration",
  "Resources or Programs",
]

export function ContactForm() {
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
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
      {isSubmitted ? (
        <Card className="bg-card">
          <CardContent className="p-8 text-center">
            <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="/images/testimonial_2.png"
                alt="Thank you"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
            <p className="mt-2 text-muted-foreground">
              We will get back to you within 1–2 business days.
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
                  Preferred Contact Method / Phone (Optional)
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
                  I am reaching out about
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
                  placeholder="Tell us about your goals, questions, or the type of support you need..."
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
  )
}