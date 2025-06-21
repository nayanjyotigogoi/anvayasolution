"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const projects = [
  {
    id: 1,
    title: "Jatiya Vidyalaya Website",
    client: "Jatiya Vidyalaya, Sonaichapori",
    description:
      "Modern educational website representing the school’s Assamese heritage with responsive design and easy content management.",
    image: "/JV/school1.jpg?height=400&width=600",
    tags: ["Education", "CMS", "Responsive Design"],
    category: "Education Solutions",
    industry: "Education",
    duration: "1 months",
    teamSize: "2 developers",
    results: ["Seamless user experience", "Improved engagement", "Cultural preservation"],
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    year: "2025",
  },
  {
    id: 2,
    title: "CKGeotech Company Website",
    client: "CKGeotech",
    description:
      "Professional website for a construction and geotech firm, showcasing projects, certifications, and service capabilities.",
    image: "/CKGEO/ck1.jpg?height=400&width=600",
    tags: ["Construction", "Portfolio", "Corporate Website"],
    category: "Web Development",
    industry: "Construction",
    duration: "2 months",
    teamSize: "2 developers",
    results: ["Better project visibility", "Improved brand credibility"],
    technologies: ["React", "Node.js", "MongoDB"],
    year: "2025",
  },
  {
    id: 3,
    title: "Ekodus Trek Booking Platform",
    client: "Ekodus Trek",
    description:
      "Adventure travel website with route highlights, booking engine, and immersive media to connect with trekking enthusiasts.",
    image: "//Exodus/ekodus-1.jpg?height=400&width=600",
    tags: ["Tourism", "Booking", "Adventure"],
    category: "Web Development",
    industry: "Tourism",
    duration: "3 months",
    teamSize: "3 developers",
    results: ["Increased bookings", "Engaging visual design", "Improved UX"],
    technologies: ["Next.js", "Stripe", "Cloudinary"],
    year: "2025",
  },
  {
    id: 4,
    title: "Paykarloo CRM System",
    client: "Paykarloo",
    description:
      "Custom CRM portal for retail operations across multiple locations, including inventory, sales, and employee management.",
    image: "services/crm-solutions.jpg?height=400&width=600",
    tags: ["Retail", "CRM", "Multi-location"],
    category: "CRM Solutions",
    industry: "Retail Technology",
    duration: "5 months",
    teamSize: "4 developers",
    results: ["Streamlined operations", "Better sales tracking", "Centralized control"],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    year: "2024",
  },
  {
    id: 5,
    title: "StaffPro HR Management System",
    client: "Raj Sharma",
    description:
      "Robust HR management platform with employee onboarding, attendance, leave tracking, and performance evaluation features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["HR", "Automation", "Staff Management"],
    category: "Enterprise Solutions",
    industry: "Professional Services",
    duration: "4 months",
    teamSize: "4 developers",
    results: ["Process automation", "Time saving", "Enhanced reporting"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
  },
  {
    id: 6,
    title: "UI/UX Redesign for Startup App",
    client: "Confidential Client",
    description:
      "Complete redesign of a mobile-first application to enhance user experience, streamline navigation, and improve conversion.",
    image: "ux-ui.jpg?height=400&width=600",
    tags: ["UI/UX", "Design Thinking", "Mobile App"],
    category: "UI/UX Design",
    industry: "Startup",
    duration: "1.5 months",
    teamSize: "2 designers",
    results: ["45% increase in user retention", "Improved NPS score", "Cleaner interface"],
    technologies: ["Figma", "Adobe XD", "UserTesting"],
    year: "2024",
  },
];

const categories = [
  "All",
  "Web Development",
  "CRM Solutions",
  "Enterprise Solutions",
  "Education Solutions",
  "UI/UX Design",
];

const industries = [
  "All",
  "Education",
  "Construction",
  "Tourism",
  "Retail Technology",
  "Professional Services",
  "Startup",
];


export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const { t } = useLanguage()

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const industryMatch = selectedIndustry === "All" || project.industry === selectedIndustry
    return categoryMatch && industryMatch
  })

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our successful projects across various industries. From manufacturing ERP systems to AI-powered
            solutions, we've helped businesses in Assam and beyond achieve digital transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "business-gradient text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Industry</h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={selectedIndustry === industry ? "business-gradient text-white" : ""}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" onClick={() => setSelectedProject(project)}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{project.year}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.industry}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Client: {project.client}</p>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {project.teamSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  {project.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-center text-xs text-muted-foreground">
                      <TrendingUp className="h-3 w-3 mr-2 text-green-500" />
                      {result}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{selectedProject.title}</CardTitle>
                    <CardDescription className="text-lg">Client: {selectedProject.client}</CardDescription>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Duration:</strong> {selectedProject.duration}
                      </div>
                      <div>
                        <strong>Team Size:</strong> {selectedProject.teamSize}
                      </div>
                      <div>
                        <strong>Industry:</strong> {selectedProject.industry}
                      </div>
                      <div>
                        <strong>Category:</strong> {selectedProject.category}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <TrendingUp className="h-3 w-3 mr-2 text-green-500" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Project Description</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="business-gradient text-white">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
