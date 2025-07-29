import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Users,
  TrendingUp,
  ExternalLink,
  Github,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    results: [
      "Seamless user experience",
      "Improved engagement",
      "Cultural preservation",
    ],
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
    title: "Smart Guard Edge Enterprise",
    client: "Smart Guard Edge",
    description:
      "A fully dynamic enterprise website built to represent Smart Guard Edge’s services, expertise, and vision—optimized for performance and usability.",
    fullDescription:
      "Smart Guard Edge required a high-impact, professional website that would reflect their identity in the security and surveillance industry. We delivered a dynamic and scalable web platform, complete with service showcase, testimonial sliders, gallery, animated transitions, and a custom CMS for effortless content updates.",
    image: "services/smartguard-edge.jpg?height=600&width=800",
    gallery: [
      "/smartguard1.jpg",
      "/smartguard2.jpg",
      "/smartguard3.jpg",
      "/smartguard4.jpg",
    ],
    tags: ["Enterprise", "Dynamic Website", "CMS"],
    category: "Enterprise Solutions",
    industry: "Security & Surveillance",
    duration: "1 months",
    teamSize: "2 developers",
    budget: "1,50,000",
    results: [
      "Improved brand visibility",
      "Faster client acquisition",
      "Simplified content management",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    year: "2025",
    challenges: [
      "Conveying technical services visually",
      "Maintaining brand consistency",
      "Enabling client-side content control",
    ],
    solutions: [
      "Custom-built CMS for full content control",
      "Framer Motion & Tailwind-based animations",
      "Modular component architecture for flexibility",
    ],
    features: [
      "Service Showcase",
      "Testimonial Slider",
      "Photo & Video Gallery",
      "CMS Integration",
      "Responsive Design",
      "SEO Optimization",
    ],
    testimonial: {
      quote:
        "Anvaya Solution transformed our vision into a digital experience that truly speaks for our brand. The execution, design quality, and performance have exceeded our expectations.",
      author: "Smart Guard Edge",
      position: "Security Solutions Provider",
    },
  },
  "5": {
    title: "Dihingia Hotel & Restaurant Cum Bar Website + App",
    client: "Dihingia Hotel",
    description:
      "A complete digital presence for Dihingia Hotel, including a fully dynamic website and cross-platform mobile app for room booking, restaurant services, and real-time management.",
    fullDescription:
      "Dihingia Hotel needed a modern and seamless digital solution to manage bookings, display menus, and engage customers. We developed both a responsive website and a Flutter-based mobile app powered by Laravel and Vue.js, ensuring smooth management of hospitality operations with real-time updates, ease of content control, and a polished user experience.",
    image: "/services/dihingia-hotel.jpg?height=600&width=800",
    gallery: [
      "/dihingia1.jpg",
      "/dihingia2.jpg",
      "/dihingia3.jpg",
      "/dihingia4.jpg",
    ],
    tags: ["Hospitality", "Booking System", "Mobile Integration"],
    category: "Web Development & Mobile Development",
    industry: "Hospitality",
    duration: "2 months",
    teamSize: "3 developers",
    budget: "₹2,00,000",
    results: [
      "Improved direct booking flow",
      "Unified management of hotel and restaurant services",
      "Enhanced customer experience through mobile access",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "Flutter"],
    year: "2025",
    challenges: [
      "Syncing restaurant orders and room booking data",
      "Designing a user-friendly dual-platform experience",
      "Real-time content and menu updates",
    ],
    solutions: [
      "Integrated backend API for both web and app",
      "Mobile-first UI with responsive web design",
      "Dynamic CMS modules for easy updates",
    ],
    features: [
      "Room Booking Module",
      "Restaurant Order Management",
      "Gallery & Menu Display",
      "Contact & Location Info",
      "Mobile App Integration",
      "Admin CMS Dashboard",
    ],
    testimonial: {
      quote:
        "Anvaya Solution delivered exactly what we needed—a smooth, modern website and app that helps us manage operations and reach more guests. Great work and communication throughout.",
      author: "Dihingia Hotel",
      position: "Management Team",
    },
  },

  //new addition
};

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectDetails[params.id as keyof typeof projectDetails];

  if (!project) {
    notFound();
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
            <Badge className="business-gradient text-white">
              {project.year}
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {project.title}
          </h1>
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
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
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
                <blockquote className="text-lg italic mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">
                      {project.testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.testimonial.position}
                    </div>
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
                  <p className="text-sm text-muted-foreground">
                    {project.client}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Duration</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.duration}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Size</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.teamSize}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Budget</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.budget}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.industry}
                  </p>
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
                <h3 className="text-xl font-bold mb-4">
                  Interested in Similar Project?
                </h3>
                <p className="mb-6 opacity-90">
                  Let's discuss how we can help transform your business.
                </p>
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
  );
}
