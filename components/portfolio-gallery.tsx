"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Jatiya Vidyalaya Website",
    client: "Jatiya Vidyalaya, Sonaichapori",
    description:
      "Modern educational website representing the school’s Assamese heritage with responsive design and easy content management.",
    image: "services/web-development.jpg?height=300&width=400",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "CKGeotech Company Website",
    client: "CKGeotech",
    description:
      "Professional website for a construction and geotech firm, showcasing projects, certifications, and service capabilities.",
    image: "/CKGEO/ck1.jpg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Web Development",
  },
  {
    id: 3,
    title: "Ekodus Trek Booking Platform",
    client: "Ekodus Trek",
    description:
      "Adventure travel website with route highlights, booking engine, and immersive media to connect with trekking enthusiasts.",
    image: "/Exodus/ekodus-1.jpg?height=300&width=400",
    tags: ["Next.js", "Stripe", "Cloudinary"],
    category: "Web Development",
  },
  {
    id: 4,
    title: "Paykarloo CRM System",
    client: "Paykarloo",
    description:
      "Custom CRM portal for retail operations across multiple locations, including inventory, sales, and employee management.",
    image: "crm-solutions.jpg?height=300&width=400",
    tags: ["Laravel", "Vue.js", "MySQL"],
    category: "CRM Solutions",
  },
  {
    id: 5,
    title: "Hotel Booking & Restaurant Order App",
    client: "Hilltop Resort",
    description:
      "Flutter-based mobile app allowing hotel owners to manage room bookings and restaurant orders in real-time.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Flutter", "Firebase", "Real-time Database"],
    category: "Mobile Development",
  },
  {
    id: 6,
    title: "UI/UX Redesign for Startup App",
    client: "Confidential Client",
    description:
      "Complete redesign of a mobile-first application to enhance user experience, streamline navigation, and improve conversion.",
    image: "ux-ui.jpg?height=300&width=400",
    tags: ["Figma", "Adobe XD", "User Research"],
    category: "UI/UX Design",
  },
];


const categories = [
  "All",
  "Web Development",
  "CRM Solutions",
  "Mobile Development",
  "UI/UX Design",
];



export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { t } = useLanguage()

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "business-gradient text-white" : ""}
            >
              {category}
            </Button>
          ))}
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
                  <Link href={`/portfolio/${project.id}`}>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </Link>
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
