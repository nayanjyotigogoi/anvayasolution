import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const jobDetails = {
  "1": {
    title: "UI/UX Designer",
    department: "Design",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3,00,000 - ₹5,00,000",
    description:
      "We're seeking a talented UI/UX Designer to craft beautiful and intuitive digital experiences across web and mobile platforms for our diverse client base.",
    fullDescription:
      "As a UI/UX Designer at Anvaya Solution, you will play a critical role in shaping user experiences for websites, mobile apps, and enterprise systems. You’ll collaborate closely with developers, product managers, and clients to bring ideas to life — from wireframes to high-fidelity prototypes. Your work will impact real users and businesses across the Northeast and beyond. If you’re passionate about design thinking, detail-oriented, and love solving real-world problems through visuals, this is the perfect opportunity for you.",
    requirements: [
      "2+ years of experience in UI/UX design",
      "Strong portfolio showcasing web and mobile product designs",
      "Proficiency in design tools like Figma, Adobe XD, Illustrator, Photoshop",
      "Understanding of user research and usability testing",
      "Familiarity with responsive and mobile-first design principles",
      "Basic knowledge of HTML/CSS for design-developer collaboration",
      "Experience with design systems and accessibility standards",
      "Excellent communication and presentation skills",
    ],
    responsibilities: [
      "Design user interfaces and experiences for websites, mobile apps, and dashboards",
      "Create wireframes, mockups, and interactive prototypes",
      "Conduct user research, interviews, and usability tests",
      "Work closely with developers to ensure accurate implementation of designs",
      "Maintain and evolve the company’s design system",
      "Participate in brainstorming sessions and client meetings",
      "Continuously iterate designs based on feedback and analytics",
      "Ensure all designs meet accessibility and UX best practices",
    ],
    benefits: [
      "Creative freedom and ownership over design projects",
      "Opportunity to work across industries and project types",
      "Access to premium design tools and software",
      "Workshops and training sessions for upskilling",
      "Collaborative work environment with tech and product teams",
      "Performance-based salary increments and bonuses",
      "Flexible working hours and work-from-home flexibility",
      "Supportive, design-led culture",
    ],
    skills: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "User Research",
      "Prototyping",
      "Wireframing",
      "UI Design",
      "UX Design",
      "Accessibility",
      "Design Systems",
      "Responsive Design",
    ],
    workEnvironment: {
      office: "Modern studio setup in Guwahati with collaborative workspaces",
      remote: "Remote and hybrid work options available",
      team: "Design-focused team with cross-functional collaboration",
      culture: "Creative, feedback-driven, and user-centric",
    },
    growthPath: [
      "UI/UX Designer",
      "Senior Designer",
      "Design Lead",
      "Creative Director",
    ],
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
    growthPath: [
      "AI/ML Engineer",
      "Senior AI Engineer",
      "AI Research Lead",
      "Head of AI",
    ],
  },
  "3": {
    title: "Senior React Developer",
    department: "Frontend Engineering",
    location: "Guwahati, Assam (Hybrid options available)",
    type: "Full-time",
    experience: "2+ years",
    salary: "₹3,00,000 - ₹5,00,000 (Negotiable based on experience)",
    description:
      "We're looking for a skilled React developer to help build modern, high-performance user interfaces for cutting-edge web applications.",
    fullDescription:
      "As a Senior React Developer at Anvaya Solution, you'll be responsible for creating responsive and dynamic front-end experiences that users love. You'll work closely with our UI/UX designers and backend engineers to bring visual designs to life and deliver intuitive, scalable interfaces for both client and internal products. You’ll also have the opportunity to take ownership of frontend architecture, implement best practices, and mentor junior developers as we build the next generation of digital solutions from the Northeast.",
    requirements: [
      "2+ years of experience in React.js development",
      "Strong knowledge of JavaScript (ES6+), HTML, and CSS",
      "Experience with state management tools like Redux or Context API",
      "Familiarity with RESTful APIs and integrating backend services",
      "Understanding of component-based architecture and reusable UI patterns",
      "Experience with Git and version control workflows",
      "Basic knowledge of testing libraries like Jest or React Testing Library",
      "Good communication and problem-solving skills",
    ],
    responsibilities: [
      "Develop high-quality, reusable components using React.js",
      "Collaborate with UI/UX designers to translate wireframes into working interfaces",
      "Optimize applications for performance, speed, and scalability",
      "Ensure responsive design across desktop and mobile devices",
      "Maintain clean, modular code with documentation",
      "Participate in code reviews and technical planning sessions",
      "Assist in mentoring junior team members and interns",
      "Contribute to improving frontend workflows and tooling",
    ],
    benefits: [
      "Negotiable salary based on skill and experience",
      "Creative freedom and ownership of key projects",
      "Flexible working hours with hybrid work support",
      "Learning & growth through peer code reviews and workshops",
      "Access to premium development tools",
      "Collaborative and inclusive work culture",
      "Opportunities to work on diverse client projects",
    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Redux",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
      "Responsive Design",
      "Component Architecture",
      "React Hooks",
    ],
    workEnvironment: {
      office: "Guwahati office with modern workstations and dev tools",
      remote: "Hybrid flexibility for qualified candidates",
      team: "Agile, friendly team of frontend and full-stack developers",
      culture: "Open, feedback-driven, and innovation-focused",
    },
    growthPath: [
      "Senior React Developer",
      "Lead Frontend Developer",
      "Frontend Architect",
      "Engineering Manager",
    ],
  },
  "4": {
    title: "Business Development Intern",
    department: "Sales & Growth",
    location: "Guwahati, Assam (WFH / Field Outreach Optional)",
    type: "Internship (Fixed + Commission-Based)",
    experience: "No prior experience required",
    salary: "Fixed + High Commission per Conversion",
    description:
      "Join our growth team to help find and convert leads for our web, mobile, and automation solutions. Ideal for students and freshers looking to earn while learning.",
    fullDescription:
      "As a Business Development Intern at Anvaya Solution, you will work on identifying and approaching potential clients who can benefit from our digital services — including websites, mobile apps, AI automation, and more. You'll receive guidance from our core team and use a performance-driven model to earn commissions for each successful client conversion. Perfect for college students, freshers, or anyone passionate about tech outreach and sales. This is your chance to gain hands-on business experience with real earning potential.",
    requirements: [
      "Strong communication skills in English, Hindi, and Assamese",
      "Ability to explain services clearly and confidently",
      "Smartphone, internet access, and a willingness to learn",
      "Confidence in approaching businesses or pitching via call/DM",
      "Target-oriented mindset and motivation to perform",
      "No prior experience needed; training provided",
    ],
    responsibilities: [
      "Identify and connect with potential leads via calls, field visits, or social media",
      "Explain Anvaya Solution’s offerings in simple terms (web, app, automation, AI)",
      "Capture and share lead details with the internal team for follow-up",
      "Maintain lead pipelines and assist in nurturing client conversations",
      "Give feedback to help improve client approach strategies",
      "Achieve conversion targets to maximize incentives",
    ],
    benefits: [
      "Fixed stipend + High commission per closed client (₹2,000–₹25,000 per deal)",
      "Flexible work hours and location (WFH or field)",
      "Weekly mentorship and digital training support",
      "Bonuses and perks for consistent performance",
      "Opportunity to grow into full-time roles (Sales/Marketing/BD)",
      "Certificate of completion and LinkedIn recommendation",
    ],
    skills: [
      "Lead Generation",
      "Client Communication",
      "Sales Pitching",
      "Basic Digital Marketing",
      "Cold Calling",
      "Networking",
      "Presentation Skills",
    ],
    workEnvironment: {
      office: "No office attendance required; remote and flexible",
      remote: "Full freedom to work at your pace, with weekly check-ins",
      team: "Sales mentoring team and performance tracking support",
      culture: "Fast-paced, friendly, and performance-focused startup culture",
    },
    growthPath: [
      "Business Development Intern",
      "Sales Executive",
      "Business Development Executive",
      "Sales Manager",
      "Growth & Partnerships Lead",
    ],
  },
};

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobDetails[params.id as keyof typeof jobDetails];

  if (!job) {
    notFound();
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
                <p className="text-muted-foreground leading-relaxed">
                  {job.fullDescription}
                </p>
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
                  <p className="text-sm text-muted-foreground">
                    {job.workEnvironment.office}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Remote Work</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.workEnvironment.remote}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.workEnvironment.team}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.workEnvironment.culture}
                  </p>
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
                  Join our team and make an impact with innovative technology
                  solutions.
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
                      <div
                        className={`w-3 h-3 rounded-full mr-3 ${index === 0 ? "bg-primary" : "bg-muted"}`}
                      ></div>
                      <span
                        className={`text-sm ${index === 0 ? "font-semibold" : "text-muted-foreground"}`}
                      >
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
                  <p className="text-sm text-muted-foreground">
                    {job.department}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Employment Type</h4>
                  <p className="text-sm text-muted-foreground">{job.type}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience Level</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.experience}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Salary Range</h4>
                  <p className="text-sm text-muted-foreground">{job.salary}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
