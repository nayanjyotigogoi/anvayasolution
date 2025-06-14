"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Brain,
  Eye,
  FileText,
  MessageSquare,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"

const aiServices = [
  {
    icon: Bot,
    title: "Process Automation",
    description: "Automate repetitive business processes with intelligent workflows and decision-making capabilities.",
    features: [
      "Workflow automation",
      "Document processing",
      "Data entry automation",
      "Email and communication automation",
      "Inventory management automation",
    ],
    pricing: "Starting from ₹1,50,000",
    roi: "40-70% cost savings",
    implementation: "4-8 weeks",
    industries: ["Manufacturing", "Healthcare", "Finance", "Retail"],
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Leverage machine learning to predict trends, customer behavior, and business outcomes.",
    features: [
      "Sales forecasting",
      "Customer churn prediction",
      "Demand planning",
      "Risk assessment",
      "Market trend analysis",
    ],
    pricing: "Starting from ₹3,50,000",
    roi: "30-50% productivity boost",
    implementation: "6-12 weeks",
    industries: ["E-commerce", "Finance", "Manufacturing", "Healthcare"],
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbots",
    description: "Intelligent conversational AI for customer support, sales assistance, and internal operations.",
    features: [
      "24/7 customer support",
      "Multi-language support",
      "Integration with CRM/ERP",
      "Voice and text capabilities",
      "Sentiment analysis",
    ],
    pricing: "Starting from ₹1,50,000",
    roi: "60% faster response time",
    implementation: "3-6 weeks",
    industries: ["Tourism", "E-commerce", "Banking", "Healthcare"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image and video analysis for quality control, security, and process optimization.",
    features: [
      "Quality inspection",
      "Object detection and tracking",
      "Facial recognition",
      "OCR and document scanning",
      "Defect detection",
    ],
    pricing: "Starting from ₹4,00,000",
    roi: "90% error reduction",
    implementation: "8-16 weeks",
    industries: ["Manufacturing", "Security", "Healthcare", "Retail"],
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Intelligent document analysis, extraction, and processing using advanced NLP and OCR.",
    features: [
      "Automated data extraction",
      "Document classification",
      "Invoice processing",
      "Contract analysis",
      "Compliance checking",
    ],
    pricing: "Starting from ₹2,00,000",
    roi: "80% faster processing",
    implementation: "4-10 weeks",
    industries: ["Legal", "Finance", "Insurance", "Government"],
  },
  {
    icon: TrendingUp,
    title: "AI Decision Support",
    description: "Intelligent systems that provide data-driven insights and recommendations for business decisions.",
    features: [
      "Real-time analytics",
      "Recommendation engines",
      "Risk scoring",
      "Performance optimization",
      "Strategic planning support",
    ],
    pricing: "Starting from ₹5,00,000",
    roi: "Enhanced decision accuracy",
    implementation: "10-20 weeks",
    industries: ["Finance", "Healthcare", "Manufacturing", "Logistics"],
  },
]

const caseStudies = [
  {
    title: "Manufacturing Automation",
    client: "Assam Steel Industries",
    challenge: "Manual quality inspection was slow and error-prone",
    solution: "Implemented computer vision for automated quality control",
    results: [
      "90% reduction in inspection errors",
      "60% faster quality control process",
      "₹50 lakhs annual cost savings",
      "24/7 automated monitoring",
    ],
    industry: "Manufacturing",
    technology: "Computer Vision, IoT",
  },
  {
    title: "Customer Service Automation",
    client: "Northeast Tourism Board",
    challenge: "High volume of tourist inquiries in multiple languages",
    solution: "AI chatbot with multilingual support and tourism recommendations",
    results: [
      "80% reduction in response time",
      "Support for English, Hindi, Assamese",
      "24/7 availability",
      "40% increase in tourist satisfaction",
    ],
    industry: "Tourism",
    technology: "NLP, Chatbot, Machine Learning",
  },
  {
    title: "Predictive Maintenance",
    client: "Guwahati Power Corporation",
    challenge: "Unexpected equipment failures causing power outages",
    solution: "AI-powered predictive maintenance system",
    results: [
      "70% reduction in unplanned downtime",
      "30% decrease in maintenance costs",
      "Improved power grid reliability",
      "Proactive equipment replacement",
    ],
    industry: "Utilities",
    technology: "IoT, Machine Learning, Analytics",
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "40-70% reduction in operational costs through intelligent automation",
    metric: "Average 55% savings",
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Significantly faster processing times with 24/7 automated operations",
    metric: "60% faster processing",
  },
  {
    icon: Shield,
    title: "Error Reduction",
    description: "Minimize human errors with consistent, accurate AI-driven processes",
    metric: "90% error reduction",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Easily scale operations without proportional increase in costs",
    metric: "Unlimited scalability",
  },
]

const implementationProcess = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description: "Analyze current processes and identify automation opportunities",
    duration: "1-2 weeks",
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Design custom AI solution tailored to your specific needs",
    duration: "2-3 weeks",
  },
  {
    step: 3,
    title: "Development & Training",
    description: "Build and train AI models with your data and requirements",
    duration: "4-12 weeks",
  },
  {
    step: 4,
    title: "Testing & Validation",
    description: "Rigorous testing to ensure accuracy and reliability",
    duration: "1-2 weeks",
  },
  {
    step: 5,
    title: "Deployment & Integration",
    description: "Seamless integration with existing systems and workflows",
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Training & Support",
    description: "Team training and ongoing support for optimal performance",
    duration: "Ongoing",
  },
]

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">AI Business Automation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with cutting-edge AI and machine learning solutions. From process
            automation to predictive analytics, we help businesses in Assam and beyond achieve unprecedented efficiency
            and growth.
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 business-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{benefit.description}</CardDescription>
                  <div className="text-lg font-semibold text-primary">{benefit.metric}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* AI Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and automation services designed to address your specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
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
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">ROI Impact</div>
                        <div className="font-semibold text-primary">{service.roi}</div>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-semibold">{service.implementation}</div>
                      </div>
                    </div>

                    {/* Industries */}
                    <div>
                      <h4 className="font-semibold mb-2">Industries:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry) => (
                          <Badge key={industry} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href="/ai-automation/get-started">
                      <Button className="w-full business-gradient text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from our AI automation implementations across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  <CardDescription className="font-medium">{study.client}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <TrendingUp className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Badge variant="secondary" className="text-xs">
                      {study.technology}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure successful AI automation deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationProcess.map((phase, index) => (
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

                {index < implementationProcess.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Automation Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-primary">₹2,50,000</div>
                <CardDescription>Perfect for small businesses starting their AI journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic process automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simple chatbot integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document processing (up to 1000/month)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 months support
                  </li>
                </ul>
                <Link href="/ai-automation/get-started">
                  <Button className="w-full business-gradient text-white">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="business-gradient text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-3xl font-bold text-primary">₹7,50,000</div>
                <CardDescription>Comprehensive AI solutions for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced process automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI chatbot with NLP
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Computer vision (basic)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    12 months support
                  </li>
                </ul>
                <Link href="/ai-automation/get-started">
                  <Button className="w-full business-gradient text-white">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-primary">₹15,00,000+</div>
                <CardDescription>Custom AI solutions for large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom AI model development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced computer vision
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time analytics dashboard
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    On-site training & consultation
                  </li>
                </ul>
                <Button className="w-full business-gradient text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the AI revolution and unlock unprecedented efficiency, cost savings, and growth opportunities for your
            business. Our team of AI experts is ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-consultation">
              <Button size="lg" className="business-gradient text-white">
                <Play className="mr-2 h-4 w-4" />
                Schedule AI Consultation
              </Button>
            </Link>
            <Link href="/ai-guide">
              <Button size="lg" variant="outline">
                Download AI Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
