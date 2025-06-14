import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, ArrowLeft, CheckCircle, TrendingUp, Users, Clock } from "lucide-react"
import Link from "next/link"

const guideContents = [
  {
    chapter: "Chapter 1",
    title: "Understanding AI for Business",
    pages: "12 pages",
    topics: [
      "What is AI and Machine Learning?",
      "Types of AI Applications",
      "AI vs Traditional Automation",
      "Common AI Myths Debunked",
    ],
  },
  {
    chapter: "Chapter 2",
    title: "AI Opportunities by Industry",
    pages: "18 pages",
    topics: [
      "Manufacturing & Production",
      "Healthcare & Medical",
      "Finance & Banking",
      "Retail & E-commerce",
      "Education & Training",
      "Logistics & Supply Chain",
    ],
  },
  {
    chapter: "Chapter 3",
    title: "AI Implementation Strategy",
    pages: "15 pages",
    topics: [
      "Assessing AI Readiness",
      "Identifying Use Cases",
      "Building AI Team",
      "Change Management",
      "Risk Mitigation",
    ],
  },
  {
    chapter: "Chapter 4",
    title: "ROI and Business Impact",
    pages: "10 pages",
    topics: ["Measuring AI Success", "Cost-Benefit Analysis", "Real ROI Examples", "Long-term Value Creation"],
  },
  {
    chapter: "Chapter 5",
    title: "Getting Started Guide",
    pages: "8 pages",
    topics: ["First Steps Checklist", "Vendor Selection Criteria", "Implementation Timeline", "Success Metrics"],
  },
]

const caseStudies = [
  {
    company: "Assam Steel Industries",
    industry: "Manufacturing",
    challenge: "Manual quality inspection processes",
    solution: "Computer vision for automated quality control",
    results: ["90% error reduction", "60% faster processing", "₹50L annual savings"],
  },
  {
    company: "Northeast Handicrafts",
    industry: "E-commerce",
    challenge: "Inventory management across vendors",
    solution: "AI-powered demand forecasting",
    results: ["40% inventory optimization", "25% cost reduction", "Improved customer satisfaction"],
  },
  {
    company: "Guwahati Medical Center",
    industry: "Healthcare",
    challenge: "Patient data management",
    solution: "AI-driven patient analytics",
    results: ["50% faster diagnosis", "Improved patient outcomes", "Reduced administrative burden"],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Learn from real case studies showing 40-70% cost savings and productivity improvements",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Insights from 50+ successful AI implementations across various industries",
  },
  {
    icon: Clock,
    title: "Quick Start",
    description: "Actionable steps you can implement immediately to begin your AI journey",
  },
  {
    icon: CheckCircle,
    title: "Practical Approach",
    description: "No-nonsense guide focused on real business applications and measurable outcomes",
  },
]

export default function AIGuidePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/ai-automation">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to AI Automation
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">AI Business Transformation Guide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive guide to understanding, planning, and implementing AI solutions for your business. Based on
            our experience with 50+ successful AI projects across Northeast India.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              63 Pages
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              5 Chapters
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Real Case Studies
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Implementation Checklists
            </Badge>
          </div>

          <Button size="lg" className="business-gradient text-white">
            <Download className="mr-2 h-4 w-4" />
            Download Free Guide (PDF)
          </Button>
        </div>

        {/* Preview Image */}
        <div className="mb-16 text-center">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="AI Guide Preview"
            className="mx-auto rounded-lg shadow-lg border"
          />
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical insights and actionable strategies from real AI implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Table of Contents</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of AI implementation from strategy to execution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guideContents.map((content, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {content.chapter}
                      </Badge>
                      <CardTitle className="text-xl">{content.title}</CardTitle>
                    </div>
                    <Badge variant="secondary">{content.pages}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-sm">
                        <FileText className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real examples from our AI implementations across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{study.company}</CardTitle>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">AI Solution:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Results:</h4>
                    <div className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <TrendingUp className="h-3 w-3 text-green-500 mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download our comprehensive AI guide and start your transformation journey today. No email required - instant
            download.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="business-gradient text-white">
              <Download className="mr-2 h-4 w-4" />
              Download AI Guide (PDF - 2.3MB)
            </Button>
            <Link href="/ai-consultation">
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>No email required</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Updated regularly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
