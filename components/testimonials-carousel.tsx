"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    id: 1,
    name: "Jatiya Vidyalaya, Sonaichapori",
    role: "Education",
    content:
      "Working with Anvaya Solution was a fantastic experience. They helped us modernize our online presence while staying true to our Assamese roots. The new website is seamless, informative, and beautifully represents our institution.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
  {
    id: 2,
    name: "CKGeotech",
    role: "Construction",
    content:
      "Anvaya Solution delivered exactly what we needed—a robust and professional website that showcases our projects and expertise. Their attention to detail and commitment to deadlines impressed us throughout the project.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
  {
    id: 3,
    name: "Ekodus Trek",
    role: "Tourism",
    content:
      "Our website has become the go-to place for trekkers to explore and book their next adventure, thanks to Anvaya Solution. The team captured the spirit of our brand and made it easy for users to navigate and engage.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
  {
    id: 4,
    name: "Paykarloo",
    role: "Retail Technology",
    content:
      "The Anvaya Solution team built us a powerful CRM portal that has completely streamlined our multi-location retail operations. Their understanding of business needs and tech execution is top-notch.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "IndustrialTech",
    content:
      "Anvaya Solution's consulting was a game changer for us. Their deep expertise and smooth implementation helped us transform digitally with confidence. We couldn't be happier with the results.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
  {
    id: 6,
    name: "Raj Sharma",
    role: "StaffPro",
    content:
      "Implementing Anvaya Solution's HR management system has been a huge win for our company. The solution has made processes easier and faster, and their team’s responsiveness made the entire experience smooth.",
    rating: 5,
    avatar: "/profile.jpg?height=60&width=60",
  },
];


export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonials[currentIndex].avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full h-12 w-12 p-0"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full h-12 w-12 p-0"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
