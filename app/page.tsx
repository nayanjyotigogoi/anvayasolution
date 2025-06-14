import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ContactCTA } from "@/components/contact-cta"
import { AdSlot } from "@/components/ad-slot"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AdSlot position="after-hero" />
      <ServicesPreview />
      <PortfolioGallery />
      <AdSlot position="mid-content" />
      <TestimonialsCarousel />
      <ContactCTA />
    </main>
  )
}
