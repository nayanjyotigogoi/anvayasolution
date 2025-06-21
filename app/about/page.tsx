import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Award, Lightbulb, Heart, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are committed to delivering solutions that create real value and drive meaningful business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Our clients success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We aim to make a positive impact on businesses and communities worldwide through technology.",
  },
]

const stats = [
  { number: "25+", label: "Projects Completed" },
  { number: "20+", label: "Happy Clients" },
  { number: "1+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Anvaya Solution</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive
            in the digital age through innovative solutions and expert guidance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, Anvaya Solution emerged from a simple yet powerful vision: to bridge the gap between
                  cutting-edge technology and practical business solutions. Our founders, coming from diverse
                  backgrounds in technology, design, and business strategy, recognized the need for a more holistic
                  approach to digital transformation.
                </p>
                <p>
                  We've helped startups launch their first products, assisted
                  enterprises in modernizing their systems, and guided organizations through complex digital
                  transformations.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, embracing emerging technologies like AI
                  and machine learning while maintaining our commitment to delivering practical, results-driven
                  solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="Logo/Anvaya-Light.png?height=400&width=600"
                alt="Our team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
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

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="business-gradient text-white">
            <CardHeader>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg opacity-90">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage in an ever-evolving digital landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <div className="w-16 h-16 business-gradient rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                To be the leading technology partner that transforms ideas into reality, helping businesses navigate the
                future with confidence and innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
