"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.careers": "Careers",
    "nav.ai-automation": "AI Automation",

    // Hero Section
    "hero.title": "Modern Business Solutions",
    "hero.subtitle": "Empowering your business with cutting-edge technology and innovative solutions",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions for your business needs",
    "services.web-dev": "Web Development",
    "services.ai-automation": "AI Automation",
    "services.consulting": "Business Consulting",
    "services.mobile-dev": "Mobile Development",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Showcasing our successful projects and client solutions",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real feedback from satisfied customers",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to start your project? Contact us today",
    "contact.cta": "Contact Us",

    // Footer
    "footer.company": "Anvaya Solution",
    "footer.description": "Modern business solutions with cutting-edge technology",
    "footer.rights": "All rights reserved.",
  },
  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.portfolio": "पोर्टफोलियो",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क",
    "nav.careers": "करियर",
    "nav.ai-automation": "AI ऑटोमेशन",

    // Hero Section
    "hero.title": "आधुनिक व्यावसायिक समाधान",
    "hero.subtitle": "अत्याधुनिक तकनीक और नवाचार समाधानों के साथ आपके व्यवसाय को सशक्त बनाना",
    "hero.cta.primary": "शुरू करें",
    "hero.cta.secondary": "और जानें",

    // Services
    "services.title": "हमारी सेवाएं",
    "services.subtitle": "आपकी व्यावसायिक आवश्यकताओं के लिए व्यापक समाधान",
    "services.web-dev": "वेब डेवलपमेंट",
    "services.ai-automation": "AI ऑटोमेशन",
    "services.consulting": "व्यावसायिक परामर्श",
    "services.mobile-dev": "मोबाइल डेवलपमेंट",

    // Portfolio
    "portfolio.title": "हमारा पोर्टफोलियो",
    "portfolio.subtitle": "हमारी सफल परियोजनाओं और ग्राहक समाधानों का प्रदर्शन",

    // Testimonials
    "testimonials.title": "हमारे ग्राहक क्या कहते हैं",
    "testimonials.subtitle": "संतुष्ट ग्राहकों से वास्तविक प्रतिक्रिया",

    // Contact
    "contact.title": "संपर्क में रहें",
    "contact.subtitle": "अपनी परियोजना शुरू करने के लिए तैयार हैं? आज ही हमसे संपर्क करें",
    "contact.cta": "हमसे संपर्क करें",

    // Footer
    "footer.company": "अन्वया सॉल्यूशन",
    "footer.description": "अत्याधुनिक तकनीक के साथ आधुनिक व्यावसायिक समाधान",
    "footer.rights": "सभी अधिकार सुरक्षित।",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
