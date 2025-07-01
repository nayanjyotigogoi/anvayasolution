import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, TrendingUp, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectDetails = {
  "1": {
    title: "Jatiya Vidyalaya Website",
    client: "Jatiya Vidyalaya, Sonaichapori",
    description:
      "Modern educational website representing the school’s Assamese heritage with responsive design and easy content management.",
    fullDescription:
      "We developed a culturally rooted educational website for Jatiya Vidyalaya that honors Assamese heritage while leveraging modern web technologies. Designed with simplicity and usability in mind, the platform allows staff to manage content effortlessly while providing a seamless browsing experience for students and parents.",
    image: "/JV/school1.jpg?height=600&width=800",
    gallery: [
      "/JV/school1.jpg",
      "/JV/school2.jpg",
      "/JV/school3.jpg",
      "/JV/school4.jpg",
    ],
    tags: ["Education", "CMS", "Responsive Design"],
    category: "Education Solutions",
    industry: "Education",
    duration: "1 month (ongoing)",
    teamSize: "2 developers",
    budget: "₹1,00,000",
    results: ["Seamless user experience", "Improved engagement", "Cultural preservation"],
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    year: "2025",
    challenges: [
      "Creating a simple CMS for non-technical users",
      "Balancing modern design with cultural identity",
      "Optimizing for low-bandwidth areas",
    ],
    solutions: [
      "Custom admin panel for effortless content updates",
      "Design elements inspired by Assamese motifs",
      "Lightweight assets and optimized performance",
    ],
    features: [
      "News & Announcement Module",
      "Photo Gallery",
      "Event Calendar",
      "Multilingual Support",
      "Mobile Responsive Design",
    ],
    testimonial: {
      quote:
        "Working with Anvaya Solution was a fantastic experience. They helped us modernize our online presence while staying true to our Assamese roots. The new website is seamless, informative, and beautifully represents our institution.",
      author: "Jatiya Vidyalaya, Sonaichapori",
      position: "Education",
    },
  },
  "2": {
    title: "CKGeotech Company Website",
    client: "CKGeotech",
    description:
      "Professional website for a construction and geotech firm, showcasing projects, certifications, and service capabilities.",
    fullDescription:
      "CKGeotech needed a sleek, informative website to reflect their technical expertise and growing portfolio. We created a corporate website that highlights certifications, case studies, and company values, giving potential clients and partners a trustworthy digital first impression.",
    image: "/CKGEO/ck1.jpg?height=600&width=800",
    gallery: [
      "/CKGEO/ck1.jpg",
      "/CKGEO/ck2.jpg",
      "/CKGEO/ck3.jpg",
      "/CKGEO/ck4.jpg",
    ],
    tags: ["Construction", "Portfolio", "Corporate Website"],
    category: "Web Development",
    industry: "Construction",
    duration: "2 months (ongoing)",
    teamSize: "2 developers",
    budget: "₹2,50,000",
    results: ["Better project visibility", "Improved brand credibility"],
    technologies: ["React", "Node.js", "MongoDB"],
    year: "2025",
    challenges: [
      "Presenting technical content clearly",
      "Creating project showcase structure",
      "Maintaining corporate branding",
    ],
    solutions: [
      "Modular project showcase with filters",
      "Clean, grid-based layout for readability",
      "Custom branding integration",
    ],
    features: [
      "Project Portfolio",
      "Service Listing",
      "Certifications Section",
      "Client Testimonials",
      "Contact Form",
    ],
    testimonial: {
      quote:
        "Anvaya Solution delivered exactly what we needed—a robust and professional website that showcases our projects and expertise. Their attention to detail and commitment to deadlines impressed us throughout the project.",
      author: "CKGeotech",
      position: "Construction",
    },
  },
  "3": {
    title: "Ekodus Trek Booking Platform",
    client: "Ekodus Trek",
    description:
      "Adventure travel website with route highlights, booking engine, and immersive media to connect with trekking enthusiasts.",
    fullDescription:
      "We collaborated with Ekodus Trek to build a visually rich and user-friendly booking platform tailored for adventure seekers. The site highlights trekking routes, provides travel guides, and integrates a seamless booking experience with immersive media and a focus on user engagement.",
    image: "/Exodus/ekodus-1.jpg?height=600&width=800",
    gallery: [
      "/Exodus/ekodus-1.jpg",
      "/Exodus/ekodus-2.jpg",
      "/Exodus/ekodus-3.jpg",
      "/Exodus/ekodus-4.jpg",
    ],
    tags: ["Tourism", "Booking", "Adventure"],
    category: "Web Development",
    industry: "Tourism",
    duration: "3 months (ongoing)",
    teamSize: "3 developers",
    budget: "₹1,00,000",
    results: ["Increased bookings", "Engaging visual design", "Improved UX"],
    technologies: ["Next.js", "Stripe", "Cloudinary"],
    year: "2025",
    challenges: [
      "Designing for adventure-driven visuals",
      "Handling seasonal traffic spikes",
      "Integrating secure and flexible booking",
    ],
    solutions: [
      "Dynamic route showcases with images & maps",
      "Scalable backend architecture",
      "Stripe-based secure payment system",
    ],
    features: [
      "Trek Route Explorer",
      "Online Booking & Payments",
      "Media Gallery",
      "User Reviews",
      "Admin CMS for Trip Listings",
    ],
    testimonial: {
      quote:
        "Our website has become the go-to place for trekkers to explore and book their next adventure, thanks to Anvaya Solution. The team captured the spirit of our brand and made it easy for users to navigate and engage.",
      author: "Ekodus Trek",
      position: "Tourism",
    },
  },
  "4": {
    title: "Paykarloo CRM System",
    client: "Paykarloo",
    description:
      "Custom CRM portal for retail operations across multiple locations, including inventory, sales, and employee management.",
    fullDescription:
      "Paykarloo needed a robust CRM tailored to the retail domain. We built a modular CRM system covering sales, inventory, employee performance, and location-based tracking—improving operations across their physical outlets while offering a single dashboard for decision-making.",
    image: "services/crm-solutions.jpg?height=600&width=800",
    gallery: [
      "/crm1.jpg",
      "/crm2.jpg",
      "/crm3.jpg",
      "/crm4.jpg",
    ],
    tags: ["Retail", "CRM", "Multi-location"],
    category: "CRM Solutions",
    industry: "Retail Technology",
    duration: "5 months",
    teamSize: "4 developers",
    budget: "₹6,00,000",
    results: ["Streamlined operations", "Better sales tracking", "Centralized control"],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    year: "2024",
    challenges: [
      "Managing data across branches",
      "Custom role permissions",
      "Inventory and sales sync",
    ],
    solutions: [
      "Role-based access control system",
      "Integrated inventory & sales workflows",
      "Analytics dashboard with real-time metrics",
    ],
    features: [
      "Sales & Inventory Module",
      "Employee Management",
      "Real-time Reporting",
      "Role-Based Access Control",
      "Branch Performance Comparison",
    ],
    testimonial: {
      quote:
        "The Anvaya Solution team built us a powerful CRM portal that has completely streamlined our multi-location retail operations. Their understanding of business needs and tech execution is top-notch.",
      author: "Paykarloo",
      position: "Retail Technology",
    },
  },
  "5": {
    title: "StaffPro HR Management System",
    client: "Raj Sharma",
    description:
      "Robust HR management platform with employee onboarding, attendance, leave tracking, and performance evaluation features.",
    fullDescription:
      "We created a comprehensive HR solution for StaffPro to handle every aspect of employee lifecycle management. From onboarding to performance tracking, the platform offers a centralized hub with real-time analytics and automation to streamline HR tasks.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/hr1.jpg",
      "/hr2.jpg",
      "/hr3.jpg",
      "/hr4.jpg",
    ],
    tags: ["HR", "Automation", "Staff Management"],
    category: "Enterprise Solutions",
    industry: "Professional Services",
    duration: "4 months",
    teamSize: "4 developers",
    budget: "₹5,00,000",
    results: ["Process automation", "Time saving", "Enhanced reporting"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    challenges: [
      "Complex attendance policies",
      "Employee self-service access",
      "Handling performance data securely",
    ],
    solutions: [
      "Modular leave and attendance tracking",
      "Secure employee portal",
      "Customizable performance KPIs",
    ],
    features: [
      "Employee Onboarding",
      "Attendance & Leave Management",
      "Performance Evaluation Tools",
      "HR Analytics Dashboard",
      "Self-Service Portal",
    ],
    testimonial: {
      quote:
        "Implementing Anvaya Solution's HR management system has been a huge win for our company. The solution has made processes significantly more efficient and transparent.",
      author: "Raj Sharma",
      position: "StaffPro",
    },
  },
};


interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectDetails[params.id as keyof typeof projectDetails]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.industry}</Badge>
            <Badge className="business-gradient text-white">{project.year}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.client}</p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {project.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              {project.teamSize}
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              {project.budget}
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-secondary/30">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-4">"{project.testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Client</h4>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Duration</h4>
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Size</h4>
                  <p className="text-sm text-muted-foreground">{project.teamSize}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Budget</h4>
                  <p className="text-sm text-muted-foreground">{project.budget}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry</h4>
                  <p className="text-sm text-muted-foreground">{project.industry}</p>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="business-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Interested in Similar Project?</h3>
                <p className="mb-6 opacity-90">Let's discuss how we can help transform your business.</p>
                <div className="space-y-3">
                  <Button size="lg" variant="secondary" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="w-full">
                      Start Your Project
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
