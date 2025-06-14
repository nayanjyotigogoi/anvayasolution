import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const jobDetails = {
  "1": {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "4-6 years",
    salary: "₹8,00,000 - ₹12,00,000",
    description:
      "We're looking for an experienced full stack developer to join our growing team in Guwahati. You'll work on cutting-edge projects for clients across various industries.",
    fullDescription:
      "As a Senior Full Stack Developer at Anvaya Solution, you'll be at the forefront of building innovative web applications that solve real business problems. You'll work with a diverse team of talented developers, designers, and project managers to deliver high-quality solutions for our clients across Northeast India and beyond. This role offers excellent opportunities for professional growth, technical leadership, and making a significant impact on our growing company.",
    requirements: [
      "4+ years of experience in React, Node.js, and modern web technologies",
      "Experience with cloud platforms (AWS/Azure)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication skills in English and Hindi",
      "Bachelor's degree in Computer Science or related field",
      "Experience with database design and optimization",
      "Knowledge of DevOps practices and CI/CD pipelines",
      "Experience with version control systems (Git)",
    ],
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with design and product teams to implement user interfaces",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers and provide technical guidance",
      "Contribute to architectural decisions and technology choices",
      "Optimize application performance and scalability",
      "Work directly with clients to understand requirements",
      "Lead technical implementation of complex features",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance for employee and family",
      "Flexible working hours and remote work options",
      "Professional development opportunities and conference attendance",
      "Annual team outings and events",
      "Latest hardware and software tools",
      "Career advancement opportunities",
      "Collaborative and innovative work environment",
    ],
    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
      "REST APIs",
      "GraphQL",
      "HTML/CSS",
    ],
    workEnvironment: {
      office: "Modern office in Guwahati with latest technology",
      remote: "Flexible remote work options available",
      team: "Collaborative team of 15+ developers",
      culture: "Innovation-focused with continuous learning",
    },
    growthPath: ["Senior Full Stack Developer", "Technical Lead", "Engineering Manager", "CTO Track"],
  },
  "2": {
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "Dhemaji, Assam (Remote options available)",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹10,00,000 - ₹15,00,000",
    description:
      "Join our AI team to develop intelligent automation solutions for businesses across Northeast India and beyond.",
    fullDescription:
      "As an AI/ML Engineer at Anvaya Solution, you'll be working on cutting-edge artificial intelligence and machine learning projects that directly impact our clients' business operations. You'll have the opportunity to work with the latest AI technologies, develop custom ML models, and implement intelligent automation solutions that drive real business value. This role is perfect for someone passionate about AI and looking to make a significant impact in the growing field of business automation.",
    requirements: [
      "3+ years of experience in Python, TensorFlow/PyTorch",
      "Strong background in machine learning algorithms and statistics",
      "Experience with NLP and computer vision techniques",
      "Knowledge of cloud ML services (AWS SageMaker, Azure ML)",
      "Master's degree in AI/ML, Computer Science, or related field preferred",
      "Experience with data preprocessing and feature engineering",
      "Knowledge of MLOps practices and model deployment",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Design and implement ML models for business automation",
      "Develop AI-powered chatbots and recommendation systems",
      "Optimize model performance and scalability",
      "Research and implement latest AI technologies",
      "Collaborate with clients to understand AI requirements",
      "Deploy and monitor ML models in production",
      "Create technical documentation and presentations",
      "Mentor junior team members on AI/ML best practices",
    ],
    benefits: [
      "Premium salary package with equity options",
      "Conference attendance and training budget (₹1,00,000/year)",
      "Latest hardware and software tools for AI development",
      "Research publication opportunities",
      "Flexible remote work options",
      "Health insurance with mental health coverage",
      "Professional certification sponsorship",
      "Innovation time for personal projects",
    ],
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "NLTK",
      "AWS",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Jupyter",
      "Git",
    ],
    workEnvironment: {
      office: "AI lab with high-performance computing resources",
      remote: "Full remote work options with quarterly team meetings",
      team: "Specialized AI team of 8+ researchers and engineers",
      culture: "Research-oriented with focus on innovation and learning",
    },
    growthPath: ["AI/ML Engineer", "Senior AI Engineer", "AI Research Lead", "Head of AI"],
  },
}

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobDetails[params.id as keyof typeof jobDetails]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/careers">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary">{job.department}</Badge>
            <Badge variant="outline">{job.type}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{job.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              {job.experience}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {job.type}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              {job.salary}
            </div>
          </div>

          <p className="text-xl text-muted-foreground">{job.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About This Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{job.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Requirements & Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Environment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Work Environment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Office</h4>
                  <p className="text-sm text-muted-foreground">{job.workEnvironment.office}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Remote Work</h4>
                  <p className="text-sm text-muted-foreground">{job.workEnvironment.remote}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team</h4>
                  <p className="text-sm text-muted-foreground">{job.workEnvironment.team}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Culture</h4>
                  <p className="text-sm text-muted-foreground">{job.workEnvironment.culture}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Apply */}
            <Card className="business-gradient text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-6 opacity-90">
                  Join our team and make an impact with innovative technology solutions.
                </p>
                <Link href={`/careers/${params.id}/apply`}>
                  <Button size="lg" variant="secondary" className="w-full mb-3">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-primary"
                  >
                    Ask Questions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Skills Required */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Growth */}
            <Card>
              <CardHeader>
                <CardTitle>Career Growth Path</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {job.growthPath.map((role, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${index === 0 ? "bg-primary" : "bg-muted"}`}></div>
                      <span className={`text-sm ${index === 0 ? "font-semibold" : "text-muted-foreground"}`}>
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Department</h4>
                  <p className="text-sm text-muted-foreground">{job.department}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Employment Type</h4>
                  <p className="text-sm text-muted-foreground">{job.type}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience Level</h4>
                  <p className="text-sm text-muted-foreground">{job.experience}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Salary Range</h4>
                  <p className="text-sm text-muted-foreground">{job.salary}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
