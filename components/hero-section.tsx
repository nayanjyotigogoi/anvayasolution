"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const slides = [
  {
    title: "Modern Business Solutions",
    subtitle: "Empowering your business with cutting-edge technology and innovative solutions",
    image: "hero-slide2.jpg?height=600&width=1200",
    cta: "Get Started",
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Transform your workflow with intelligent automation and machine learning",
    image: "hero-slide.jpg?height=600&width=1200",
    cta: "Explore AI Solutions",
  },
  {
    title: "Expert Consulting",
    subtitle: "Strategic guidance from industry experts to accelerate your growth",
    image: "hero-slide3.jpg?height=600&width=1200",
    cta: "Book Consultation",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">{t("hero.title")}</h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-slide-up">{t("hero.subtitle")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button size="lg" className="business-gradient text-white hover:opacity-90 transition-opacity">
            {t("hero.cta.primary")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            {t("hero.cta.secondary")}
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
