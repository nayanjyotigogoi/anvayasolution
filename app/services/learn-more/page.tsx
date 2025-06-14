import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Bot,
  Users,
  Smartphone,
  Database,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  TrendingUp,
  Clock,
  Award,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    pricing: "Starting from ₹99,000",
    timeline: "4-10 weeks",
    features: [
      "Responsive Design across all devices",
      "SEO Optimization for better rankings",
      "Performance Optimization",
      "Content Management Systems",
      "E-commerce Integration",
      "Payment Gateway Setup",
      "Analytics Implementation",
      "Ongoing Maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    industries: ["E-commerce", "Corporate", "Healthcare", "Education"],
    projects: "25+ completed",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent automation solutions for business processes",
    pricing: "Starting from ₹1,99,000",
    timeline: "8-16 weeks",
    features: [
      "Process Automation",
      "Machine Learning Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Chatbot Development",
      "Document Processing",
      "Real-time Monitoring",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "AWS", "Docker", "Kubernetes"],
    industries: ["Manufacturing", "Healthcare", "Finance", "Retail"],
    projects: "15+ implementations",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    pricing: "Starting from ₹99,000",
    timeline: "8-14 weeks",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "API Integration",
      "Analytics Integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    industries: ["Banking", "Healthcare", "E-commerce", "Education"],
    projects: "12+ apps launched",
  },
  {
    icon: Users,
    title: "Business Consulting",
    description: "Strategic guidance for digital transformation",
    pricing: "Starting from ₹15,900/hour",
    timeline: "4-12 weeks",
    features: [
      "Digital Strategy Planning",
      "Technology Assessment",
      "Process Optimization",
      "Change Management",
      "ROI Analysis",
      "Implementation Roadmap",
      "Training & Support",
      "Performance Monitoring",
    ],
    technologies: ["Agile", "DevOps", "Cloud", "Analytics", "Business Intelligence"],
    industries: ["All Industries", "Startups", "SMEs", "Enterprises"],
    projects: "10+ consultations",
  },
]

const additionalServices = [
  {
    icon: Database,
    title: "Database Solutions",
    description: "Scalable and secure data management",
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Maximum performance and scalability",
    features: ["Code Optimization", "Infrastructure Scaling", "Monitoring Setup", "Load Testing"],
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Cloud migration and management",
    features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"],
  },
]

const serviceProcess = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description: "Understanding your business needs and technical requirements",
    duration: "1-2 weeks",
  },
  {
    step: 2,
    title: "Strategy & Planning",
    description: "Creating detailed project roadmap and technical architecture",
    duration: "1-2 weeks",
  },
  {
    step: 3,
    title: "Design & Prototyping",
    description: "UI/UX design and interactive prototypes for validation",
    duration: "2-3 weeks",
  },
  {
    step: 4,
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance",
    duration: "4-12 weeks",
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description: "Production deployment with monitoring and support setup",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and performance optimization",
    duration: "Ongoing",
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "50+ successful projects with 4.8/5 client satisfaction rating",
    metric: "99.9% uptime",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Delivering tangible business outcomes and ROI",
    metric: "40-70% efficiency gains",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Consistent project delivery within agreed timelines",
    metric: "95% on-time delivery",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep industry knowledge",
    metric: "15+ team members",
  },
]

export default function ServicesLearnMorePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/services">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            From web development to AI automation, we deliver results that matter.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Anvaya Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and proven track record of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 business-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    <div className="text-lg font-semibold text-primary">{item.metric}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our primary service offerings with detailed capabilities and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 business-gradient rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-lg font-semibold text-primary">{service.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-semibold">{service.timeline}</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Experience</div>
                        <div className="font-semibold">{service.projects}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 6 && (
                          <div className="text-sm text-muted-foreground">
                            +{service.features.length - 6} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div>
                      <h4 className="font-semibold mb-2">Industries Served:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry) => (
                          <Badge key={industry} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="w-full business-gradient text-white">Learn More About {service.title}</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized services to complement your core technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 business-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 business-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {phase.step}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {phase.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives real business results.
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
