import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, TrendingUp, Globe, Heart, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

const companyHighlights = [
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "Headquartered in Dhemaji, Assam with branch office in Guwahati",
    details: [
      "Main office in Dhemaji for cost-effective operations",
      "Guwahati branch for client meetings and business development",
      "Pan-India service delivery capabilities",
      "Strong regional expertise in Northeast India",
    ],
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified developers and consultants with deep industry expertise",
    details: [
      "10+ experienced developers and consultants",
      "Certified professionals in latest technologies",
      "Continuous upskilling and training programs",
      "Strong focus on innovation and R&D",
    ],
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Track record of successful project delivery and client satisfaction",
    details: [
      "50+ successful projects completed",
      "100+ long-term client relationships",
      "4.8/5 average client satisfaction rating",
      "99.9% uptime on hosted services",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Delivering measurable results and ROI for our clients",
    details: [
      "40-70% cost savings from automation",
      "30-50% productivity boost",
      "90% error reduction in processes",
      "60% faster processing times",
    ],
  },
]

const industries = [
  {
    name: "Manufacturing",
    description: "Automation & ERP solutions for manufacturing operations",
    projects: "15+ projects",
    expertise: ["Production Planning", "Quality Control", "Inventory Management", "Process Automation"],
  },
  {
    name: "Retail & E-commerce",
    description: "Online platforms and digital commerce solutions",
    projects: "12+ projects",
    expertise: ["E-commerce Platforms", "Payment Integration", "Inventory Systems", "Customer Analytics"],
  },
  {
    name: "Healthcare",
    description: "Data management and patient care systems",
    projects: "8+ projects",
    expertise: ["Patient Management", "Telemedicine", "Medical Records", "Appointment Systems"],
  },
  {
    name: "Finance",
    description: "Secure and scalable financial systems",
    projects: "10+ projects",
    expertise: ["Banking Solutions", "Payment Systems", "Risk Management", "Compliance Tools"],
  },
  {
    name: "Education",
    description: "Learning management and digital education portals",
    projects: "6+ projects",
    expertise: ["LMS Development", "Student Portals", "Online Learning", "Assessment Systems"],
  },
  {
    name: "Logistics",
    description: "Optimization tools and fleet management",
    projects: "7+ projects",
    expertise: ["Route Optimization", "Fleet Tracking", "Warehouse Management", "Supply Chain"],
  },
]

const futureRoadmap = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI capabilities for intelligent business automation",
    timeline: "2024-2025",
    focus: ["Deep Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics"],
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud migration and management services",
    timeline: "2024",
    focus: ["Multi-cloud Strategy", "Serverless Architecture", "Cloud Security", "Cost Optimization"],
  },
  {
    title: "IoT Integration",
    description: "Smart business solutions with Internet of Things",
    timeline: "2025",
    focus: ["Industrial IoT", "Smart Sensors", "Real-time Monitoring", "Edge Computing"],
  },
  {
    title: "Blockchain Development",
    description: "Secure and transparent blockchain solutions",
    timeline: "2025-2026",
    focus: ["Smart Contracts", "Supply Chain Transparency", "Digital Identity", "Cryptocurrency Integration"],
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions and consulting",
    timeline: "2024-2025",
    focus: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
  },
  {
    title: "Data Analytics & BI",
    description: "Advanced analytics and business intelligence dashboards",
    timeline: "2024",
    focus: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "Data Visualization"],
  },
]

const partnerships = [
  "AWS Partner Network",
  "Microsoft Azure Certified",
  "Google Cloud Partner",
  "MongoDB Partner",
  "React Certified Developers",
  "Node.js Foundation Member",
]

export default function LearnMorePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Anvaya Solution</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our journey, expertise, and commitment to transforming businesses through innovative
            technology solutions across Northeast India and beyond.
          </p>
        </div>

        {/* Company Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Anvaya Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique combination of technical expertise, regional knowledge, and client-centric approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 business-gradient rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{highlight.title}</CardTitle>
                        <CardDescription>{highlight.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {highlight.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep domain knowledge across multiple industries with proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {industry.projects}
                    </Badge>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Future Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our strategic vision for expanding capabilities and service offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureRoadmap.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge className="business-gradient text-white text-xs">{item.timeline}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Focus Areas:</h4>
                    <ul className="space-y-1">
                      {item.focus.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center text-xs">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Partnerships */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified partnerships with leading technology providers
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {partnerships.map((partnership) => (
              <Badge key={partnership} variant="secondary" className="text-sm px-4 py-2">
                {partnership}
              </Badge>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description:
                  "Committed to delivering solutions that create real value and drive meaningful business outcomes.",
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Embracing cutting-edge technologies and creative approaches to solve complex challenges.",
              },
              {
                icon: Heart,
                title: "Client-Centric",
                description:
                  "Our clients' success is our success. We build lasting partnerships based on trust and results.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Making a positive impact on businesses and communities worldwide through technology.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 business-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing list of successful businesses that have transformed their operations with our innovative
            solutions.
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
