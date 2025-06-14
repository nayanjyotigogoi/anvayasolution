import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Bot, Users, Smartphone, Database, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
    technologies: ["Laravel", "React", "Next.js", "Node.js", "TypeScript"],
    pricing: "Starting from ₹99,000",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by machine learning to streamline your business processes and increase efficiency.",
    features: ["Process Automation", "Machine Learning Models", "Data Analytics", "Predictive Analytics"],
    technologies: ["Python", "TensorFlow", "OpenAI", "AWS"],
    pricing: "Starting from ₹1,99,000",
  },
  {
    icon: Users,
    title: "Business Consulting",
    description:
      "Strategic guidance and expert consultation to help your business navigate digital transformation and achieve growth.",
    features: ["Strategy Planning", "Digital Transformation", "Process Optimization", "Technology Assessment"],
    technologies: ["Agile", "DevOps", "Cloud", "Analytics"],
    pricing: "Starting from ₹15,900/hour",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces and robust functionality.",
    features: ["Native Development", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    pricing: "Starting from ₹99,000",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Comprehensive database design, optimization, and management services for scalable and secure data storage.",
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"],
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS RDS"],
    pricing: "Starting from ₹39,000",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your business from cyber threats and ensure data privacy compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    technologies: ["OWASP", "ISO 27001", "GDPR", "SOC 2"],
    pricing: "Starting from ₹69,999",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your applications and systems for maximum performance, scalability, and reliability.",
    features: ["Code Optimization", "Infrastructure Scaling", "Monitoring Setup", "Load Testing"],
    technologies: ["CDN", "Caching", "Load Balancers", "Monitoring"],
    pricing: "Starting from ₹49,999",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and management services to leverage the power of cloud computing for your business.",
    features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    pricing: "Starting from ₹40,000",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 business-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <div className="text-lg font-semibold text-primary mt-1">{service.pricing}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="w-full business-gradient text-white">Get Started</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="business-gradient text-white">
                Start Your Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
