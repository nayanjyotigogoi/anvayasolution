import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Clock, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
    pricing: "Starting from ₹2,99,000",
    duration: "6-12 weeks",
    teamSize: "3-5 developers",
    features: [
      "Responsive Design across all devices",
      "SEO Optimization for better search rankings",
      "Performance Optimization for fast loading",
      "Cross-browser Compatibility",
      "Content Management System (CMS)",
      "E-commerce Integration",
      "Payment Gateway Integration",
      "Analytics and Tracking Setup",
      "Security Implementation",
      "Ongoing Maintenance Support",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    process: [
      {
        step: "Discovery & Planning",
        description: "Understanding your requirements, target audience, and business goals",
        duration: "1-2 weeks",
      },
      {
        step: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes",
        duration: "2-3 weeks",
      },
      {
        step: "Development",
        description: "Building the application with clean, scalable code",
        duration: "4-8 weeks",
      },
      {
        step: "Testing & QA",
        description: "Comprehensive testing across devices and browsers",
        duration: "1-2 weeks",
      },
      {
        step: "Deployment & Launch",
        description: "Going live with monitoring and support",
        duration: "1 week",
      },
    ],
    benefits: [
      "Professional online presence",
      "Increased customer engagement",
      "Better search engine visibility",
      "Mobile-friendly experience",
      "Scalable architecture",
    ],
    caseStudy: {
      client: "Northeast Handicrafts",
      challenge: "Needed an e-commerce platform to showcase traditional Assamese handicrafts online",
      solution: "Built a multi-vendor e-commerce platform with integrated payment gateway",
      results: ["300% increase in online sales", "50% reduction in order processing time", "4.8/5 customer rating"],
    },
  },
  "ai-automation": {
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by machine learning to streamline your business processes and increase efficiency.",
    pricing: "Starting from ₹4,99,000",
    duration: "8-16 weeks",
    teamSize: "4-6 specialists",
    features: [
      "Process Automation",
      "Machine Learning Models",
      "Data Analytics and Insights",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Chatbot Development",
      "Document Processing",
      "Workflow Optimization",
      "Real-time Monitoring",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "AWS", "Docker", "Kubernetes"],
    process: [
      {
        step: "Process Analysis",
        description: "Identifying automation opportunities and current workflow analysis",
        duration: "2-3 weeks",
      },
      {
        step: "AI Model Design",
        description: "Designing custom AI models for your specific needs",
        duration: "3-4 weeks",
      },
      {
        step: "Development & Training",
        description: "Building and training AI models with your data",
        duration: "4-8 weeks",
      },
      {
        step: "Integration & Testing",
        description: "Integrating with existing systems and comprehensive testing",
        duration: "2-3 weeks",
      },
      {
        step: "Deployment & Monitoring",
        description: "Going live with continuous monitoring and optimization",
        duration: "1-2 weeks",
      },
    ],
    benefits: [
      "40-70% cost reduction",
      "90% error reduction",
      "24/7 automated operations",
      "Improved decision making",
      "Scalable solutions",
    ],
    caseStudy: {
      client: "Assam Steel Industries",
      challenge: "Manual quality inspection was slow and error-prone",
      solution: "Implemented computer vision for automated quality control",
      results: ["90% reduction in inspection errors", "60% faster quality control", "₹50 lakhs annual savings"],
    },
  },
  "mobile-development": {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces and robust functionality.",
    pricing: "Starting from ₹3,99,000",
    duration: "8-14 weeks",
    teamSize: "3-4 developers",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "API Integration",
      "Payment Integration",
      "Analytics Integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    process: [
      {
        step: "App Strategy",
        description: "Defining app goals, target audience, and platform selection",
        duration: "1-2 weeks",
      },
      {
        step: "UI/UX Design",
        description: "Creating intuitive and engaging mobile interfaces",
        duration: "2-3 weeks",
      },
      {
        step: "Development",
        description: "Building the mobile application with native performance",
        duration: "6-10 weeks",
      },
      {
        step: "Testing",
        description: "Comprehensive testing on multiple devices and OS versions",
        duration: "1-2 weeks",
      },
      {
        step: "App Store Launch",
        description: "Publishing to App Store and Google Play with optimization",
        duration: "1 week",
      },
    ],
    benefits: [
      "Reach mobile-first audience",
      "Enhanced user engagement",
      "Offline accessibility",
      "Push notification capabilities",
      "App store presence",
    ],
    caseStudy: {
      client: "Dhemaji Cooperative Bank",
      challenge: "Needed mobile banking solution for rural customers",
      solution: "Developed secure mobile banking app with offline capabilities",
      results: ["50% increase in digital transactions", "Enhanced security", "Rural banking accessibility"],
    },
  },
  "business-consulting": {
    title: "Business Consulting",
    description:
      "Strategic guidance and expert consultation to help your business navigate digital transformation and achieve growth.",
    pricing: "Starting from ₹19,900/hour",
    duration: "4-12 weeks",
    teamSize: "2-3 consultants",
    features: [
      "Strategy Planning",
      "Digital Transformation",
      "Process Optimization",
      "Technology Assessment",
      "Market Analysis",
      "Competitive Analysis",
      "ROI Analysis",
      "Implementation Roadmap",
      "Change Management",
      "Training and Support",
    ],
    technologies: ["Agile", "DevOps", "Cloud", "Analytics", "Business Intelligence", "CRM"],
    process: [
      {
        step: "Business Assessment",
        description: "Comprehensive analysis of current business processes and challenges",
        duration: "1-2 weeks",
      },
      {
        step: "Strategy Development",
        description: "Creating customized digital transformation strategy",
        duration: "2-3 weeks",
      },
      {
        step: "Implementation Planning",
        description: "Detailed roadmap with timelines and resource allocation",
        duration: "1-2 weeks",
      },
      {
        step: "Execution Support",
        description: "Ongoing guidance during implementation phase",
        duration: "4-8 weeks",
      },
      {
        step: "Performance Review",
        description: "Measuring results and optimizing strategies",
        duration: "Ongoing",
      },
    ],
    benefits: [
      "Strategic clarity",
      "Improved efficiency",
      "Cost optimization",
      "Competitive advantage",
      "Future-ready business",
    ],
    caseStudy: {
      client: "Guwahati Legal Associates",
      challenge: "Needed digital transformation for law firm operations",
      solution: "Implemented CRM system with case management and billing integration",
      results: ["40% improvement in client management", "Automated billing", "Enhanced case tracking"],
    },
  },
}

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{service.description}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-secondary/30 rounded-lg px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              {service.duration}
            </div>
            <div className="flex items-center bg-secondary/30 rounded-lg px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              {service.teamSize}
            </div>
            <div className="flex items-center bg-primary/10 rounded-lg px-4 py-2">
              <span className="font-semibold text-primary">{service.pricing}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Process</CardTitle>
                <CardDescription>How we deliver exceptional results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 business-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{step.step}</h4>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Case Study */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Success Story</CardTitle>
                <CardDescription>Real results from our {service.title.toLowerCase()} projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Client: {service.caseStudy.client}</h4>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{service.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <div className="space-y-2">
                    {service.caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="business-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">Let's discuss your project requirements and create a custom solution.</p>
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="w-full">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
