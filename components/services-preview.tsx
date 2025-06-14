"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Bot, Users, Smartphone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    pricing: "Starting from ₹99,000",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions to streamline your business processes.",
    features: ["Process Automation", "Machine Learning", "Data Analytics"],
    pricing: "Starting from ₹1,99,000",
  },
  {
    icon: Users,
    title: "Business Consulting",
    description: "Strategic guidance to help your business grow and succeed in the digital age.",
    features: ["Strategy Planning", "Digital Transformation", "Growth Optimization"],
    pricing: "Starting from ₹15,900/hour",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["Native Apps", "Cross-Platform", "UI/UX Design"],
    pricing: "Starting from ₹99,000",
  },
]

export function ServicesPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 business-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium mb-4">{service.pricing}</p>
                  <Link href="/services/learn-more">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="business-gradient text-white">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
