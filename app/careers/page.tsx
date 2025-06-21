"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Briefcase,
  Heart,
  Zap,
  Globe,
  Award,
  Upload,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "UI/UX Designer",
    department: "Design",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3,00,000 - ₹5,00,000",
    description:
      "Create beautiful and intuitive user experiences for our diverse range of client projects, from mobile apps to enterprise software.",
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user research methodologies",
      "Knowledge of design systems and accessibility",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
      "Present design concepts to clients",
    ],
    benefits: [
      "Creative freedom and diverse project exposure",
      "Design tools and software licenses",
      "Skill development workshops",
      "Collaborative work environment",
      "Performance-based salary increments",
    ],
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "Dhemaji, Assam (Remote options available)",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹10,00,000 - ₹15,00,000",
    description:
      "Join our AI team to develop intelligent automation solutions for businesses across Northeast India and beyond.",
    requirements: [
      "3+ years of experience in Python, TensorFlow/PyTorch",
      "Strong background in machine learning algorithms",
      "Experience with NLP and computer vision",
      "Knowledge of cloud ML services",
      "Master's degree in AI/ML or related field preferred",
    ],
    responsibilities: [
      "Design and implement ML models for business automation",
      "Develop AI-powered chatbots and recommendation systems",
      "Optimize model performance and scalability",
      "Research and implement latest AI technologies",
      "Collaborate with clients to understand AI requirements",
    ],
    benefits: [
      "Premium salary package with equity options",
      "Conference attendance and training budget",
      "Latest hardware and software tools",
      "Research publication opportunities",
      "Flexible remote work options",
    ],
  },
  {
    id: 3,
    title: "Senior React Developer",
    department: "Frontend Development",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "2+ years",
    salary: "₹3,00,000 - ₹5,00,000 (Negotiable based on experience)",
    description:
      "Build modern and high-performance user interfaces for a wide range of projects, from startup websites to large-scale enterprise platforms.",
    requirements: [
      "2+ years of experience in React.js development",
      "Strong understanding of JavaScript (ES6+), HTML5, and CSS3",
      "Experience with state management libraries like Redux or Context API",
      "Familiarity with RESTful APIs and integrating backend services",
      "Basic understanding of frontend performance optimization",
    ],
    responsibilities: [
      "Develop and maintain scalable web applications using React.js",
      "Work closely with designers to implement clean, responsive UIs",
      "Collaborate with backend developers for seamless data integration",
      "Write reusable and maintainable frontend components",
      "Participate in code reviews and contribute to team knowledge-sharing",
    ],
    benefits: [
      "Opportunity to work on impactful client projects",
      "Flexible working hours and hybrid work options",
      "Access to premium development tools and resources",
      "Supportive team culture and learning environment",
      "Performance-based growth opportunities",
    ],
  },
  {
    id: 4,
    title: "Lead Generation Associate",
    department: "Sales",
    location: "Guwahati, Assam (Remote/Field Work Possible)",
    type: "Commission-Based",
    experience: "No prior experience required",
    salary: "Commission-Based (High incentive per conversion)",
    description:
      "Kickstart your career by helping us find potential clients and generate leads for our IT and digital services. Perfect for freshers or career switchers looking to enter the tech marketing space.",
    requirements: [
      "Good communication skills in English, Hindi, and Assamese",
      "Basic understanding of digital services like websites, apps, or marketing",
      "Motivation to learn and earn through performance",
      "Smartphone and internet access",
      "Confidence in talking to local businesses or over the phone",
    ],
    responsibilities: [
      "Identify and approach potential leads through field visits, calls, or social media",
      "Explain our services in simple terms to potential clients",
      "Collect and submit lead details to the sales team",
      "Follow up with interested leads to encourage conversion",
      "Work with the core team to align outreach efforts",
    ],
    benefits: [
      "High commission per successful lead conversion",
      "Flexible work hours and location",
      "Sales guidance and training support",
      "Performance-based bonuses and rewards",
      "Opportunity to grow into full-time sales or marketing roles",
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description:
      "Continuous learning opportunities, conference attendance, and skill development",
  },
  {
    icon: Globe,
    title: "Work-Life Balance",
    description:
      "Flexible working hours, remote work options, and generous leave policies",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Performance bonuses, employee recognition programs, and career advancement",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<
    (typeof jobOpenings)[0] | null
  >(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description:
        "Thank you for your interest. We'll review your application and get back to you soon.",
    });

    setApplicationData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      position: "",
      coverLetter: "",
      resume: null,
    });
    setSelectedJob(null);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of Anvaya Solution's mission to transform businesses through
            innovative technology. We're looking for passionate individuals to
            join our growing team in Assam.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, growth, and work-life
              balance while making a real impact in Northeast India's tech
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 business-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {job.description}
                  </CardDescription>

                  <div className="flex gap-4">
                    <Link href={`/careers/${job.id}`}>
                      <Button className="flex-1 business-gradient text-white">
                        Apply Now
                      </Button>
                    </Link>
                    <Link href={`/careers/${job.id}`}>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedJob(null)}
          >
            <Card
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      Apply for {selectedJob.title}
                    </CardTitle>
                    <CardDescription>
                      {selectedJob.department} • {selectedJob.location}
                    </CardDescription>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedJob(null)}>
                    ×
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={applicationData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={applicationData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        value={applicationData.experience}
                        onValueChange={(value) =>
                          handleInputChange("experience", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-8">5-8 years</SelectItem>
                          <SelectItem value="8+">8+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={(e) =>
                        handleInputChange("coverLetter", e.target.value)
                      }
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop your resume
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setApplicationData((prev) => ({
                              ...prev,
                              resume: file,
                            }));
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-2"
                        onClick={() =>
                          document.getElementById("resume")?.click()
                        }
                      >
                        Choose File
                      </Button>
                      {applicationData.resume && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {applicationData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full business-gradient text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Company Info */}
        <div className="text-center bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented
            individuals. Send us your resume and we'll keep you in mind for
            future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers/general-application">
              <Button size="lg" className="business-gradient text-white">
                Send General Application
              </Button>
            </Link>
            <Link href="/about/learn-more">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
