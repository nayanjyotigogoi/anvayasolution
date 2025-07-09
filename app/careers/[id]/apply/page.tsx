"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Send, ArrowLeft, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { notFound } from "next/navigation";
import { submitJobApplication } from "@/app/actions/job-application";

const jobDetails = {
  "1": {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Guwahati, Assam",
    type: "Full-time",
    salary: "₹8,00,000 - ₹12,00,000",
  },
  "2": {
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "Dhemaji, Assam (Remote options available)",
    type: "Full-time",
    salary: "₹10,00,000 - ₹15,00,000",
  },
  "3": {
    title: "Senior React Developer",
    department: "Frontend Development",
    location: "Guwahati, Assam",
    type: "Full-time",
    experience: "2+ years",
    salary: "₹3,00,000 - ₹5,00,000 (Negotiable based on experience)",
  },
  "4": {
    title: "Business Development Intern",
    department: "Sales & Growth",
    location: "Guwahati, Assam (WFH / Field Outreach Optional)",
    type: "Internship (Fixed + Commission-Based)",
    salary: "Fixed + High Commission per Conversion",
  },
};

interface JobApplicationPageProps {
  params: {
    id: string;
  };
}

export default function JobApplicationPage({
  params,
}: JobApplicationPageProps) {
  const job = jobDetails[params.id as keyof typeof jobDetails];

  if (!job) {
    notFound();
  }

  const [applicationData, setApplicationData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Professional Information
    currentPosition: "",
    currentCompany: "",
    totalExperience: "",
    relevantExperience: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",

    // Education
    highestQualification: "",
    university: "",
    graduationYear: "",
    additionalCertifications: "",

    // Job Specific
    motivation: "",
    keyStrengths: "",
    technicalSkills: "",
    projectExperience: "",

    // Preferences
    workMode: "",
    relocate: false,
    remoteWork: false,

    // Documents
    resume: null as File | null,
    coverLetter: null as File | null,
    portfolio: "",
    linkedinProfile: "",
    githubProfile: "",

    // Additional
    referralSource: "",
    additionalInfo: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("firstName", applicationData.firstName);
    formDataObj.append("lastName", applicationData.lastName);
    formDataObj.append("email", applicationData.email);
    formDataObj.append("phone", applicationData.phone);
    formDataObj.append("jobTitle", job.title);
    formDataObj.append("currentPosition", applicationData.currentPosition);
    formDataObj.append("expectedSalary", applicationData.expectedSalary);
    formDataObj.append("motivation", applicationData.motivation);

    try {
      const result = await submitJobApplication(formDataObj);

      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: result.message,
        });

        // Reset form
        setApplicationData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          currentPosition: "",
          currentCompany: "",
          totalExperience: "",
          relevantExperience: "",
          currentSalary: "",
          expectedSalary: "",
          noticePeriod: "",
          highestQualification: "",
          university: "",
          graduationYear: "",
          additionalCertifications: "",
          motivation: "",
          keyStrengths: "",
          technicalSkills: "",
          projectExperience: "",
          workMode: "",
          relocate: false,
          remoteWork: false,
          resume: null,
          coverLetter: null,
          portfolio: "",
          linkedinProfile: "",
          githubProfile: "",
          referralSource: "",
          additionalInfo: "",
          newsletter: false,
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setApplicationData((prev) => ({ ...prev, [field]: file }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link href={`/careers/${params.id}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Job Details
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl sm:text-5xl font-bold">
              Apply for Position
            </h1>
          </div>
          <div className="bg-secondary/30 rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {job.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>{job.department}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.type}</span>
              <span>•</span>
              <span>{job.salary}</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete this application form to be considered for the {job.title}{" "}
            position at Anvaya Solution. All fields marked with * are required.
          </p>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Job Application Form</CardTitle>
            <CardDescription>
              Please fill out all sections completely. Your information will be
              kept confidential and used only for recruitment purposes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={applicationData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="Your complete address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={applicationData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="Your city"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={applicationData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      placeholder="Your state"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      value={applicationData.pincode}
                      onChange={(e) =>
                        handleInputChange("pincode", e.target.value)
                      }
                      placeholder="PIN Code"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Professional Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPosition">Current Position *</Label>
                    <Input
                      id="currentPosition"
                      value={applicationData.currentPosition}
                      onChange={(e) =>
                        handleInputChange("currentPosition", e.target.value)
                      }
                      placeholder="Your current job title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCompany">Current Company *</Label>
                    <Input
                      id="currentCompany"
                      value={applicationData.currentCompany}
                      onChange={(e) =>
                        handleInputChange("currentCompany", e.target.value)
                      }
                      placeholder="Your current company name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="totalExperience">Total Experience *</Label>
                    <Select
                      value={applicationData.totalExperience}
                      onValueChange={(value) =>
                        handleInputChange("totalExperience", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select total experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8-10">8-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relevantExperience">
                      Relevant Experience *
                    </Label>
                    <Select
                      value={applicationData.relevantExperience}
                      onValueChange={(value) =>
                        handleInputChange("relevantExperience", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select relevant experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentSalary">Current Salary (₹)</Label>
                    <Select
                      value={applicationData.currentSalary}
                      onValueChange={(value) =>
                        handleInputChange("currentSalary", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Current salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-3">₹0 - ₹3,00,000</SelectItem>
                        <SelectItem value="3-5">
                          ₹3,00,000 - ₹5,00,000
                        </SelectItem>
                        <SelectItem value="5-8">
                          ₹5,00,000 - ₹8,00,000
                        </SelectItem>
                        <SelectItem value="8-12">
                          ₹8,00,000 - ₹12,00,000
                        </SelectItem>
                        <SelectItem value="12-15">
                          ₹12,00,000 - ₹15,00,000
                        </SelectItem>
                        <SelectItem value="15+">₹15,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedSalary">
                      Expected Salary (₹) *
                    </Label>
                    <Select
                      value={applicationData.expectedSalary}
                      onValueChange={(value) =>
                        handleInputChange("expectedSalary", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Expected salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">
                          ₹3,00,000 - ₹5,00,000
                        </SelectItem>
                        <SelectItem value="5-8">
                          ₹5,00,000 - ₹8,00,000
                        </SelectItem>
                        <SelectItem value="8-12">
                          ₹8,00,000 - ₹12,00,000
                        </SelectItem>
                        <SelectItem value="12-15">
                          ₹12,00,000 - ₹15,00,000
                        </SelectItem>
                        <SelectItem value="15-20">
                          ₹15,00,000 - ₹20,00,000
                        </SelectItem>
                        <SelectItem value="20+">₹20,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="noticePeriod">Notice Period *</Label>
                    <Select
                      value={applicationData.noticePeriod}
                      onValueChange={(value) =>
                        handleInputChange("noticePeriod", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Notice period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="15-days">15 days</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="2-months">2 months</SelectItem>
                        <SelectItem value="3-months">3 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Education & Qualifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="highestQualification">
                      Highest Qualification *
                    </Label>
                    <Select
                      value={applicationData.highestQualification}
                      onValueChange={(value) =>
                        handleInputChange("highestQualification", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/Institution *</Label>
                    <Input
                      id="university"
                      value={applicationData.university}
                      onChange={(e) =>
                        handleInputChange("university", e.target.value)
                      }
                      placeholder="University or institution name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year *</Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      min="1990"
                      max="2030"
                      value={applicationData.graduationYear}
                      onChange={(e) =>
                        handleInputChange("graduationYear", e.target.value)
                      }
                      placeholder="YYYY"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalCertifications">
                    Additional Certifications
                  </Label>
                  <Textarea
                    id="additionalCertifications"
                    value={applicationData.additionalCertifications}
                    onChange={(e) =>
                      handleInputChange(
                        "additionalCertifications",
                        e.target.value
                      )
                    }
                    placeholder="List any relevant certifications, courses, or training programs..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Job Specific Questions */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Job-Specific Questions
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    Why do you want to work at Anvaya Solution? *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={applicationData.motivation}
                    onChange={(e) =>
                      handleInputChange("motivation", e.target.value)
                    }
                    placeholder="Tell us what interests you about our company and this role..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keyStrengths">
                    What are your key strengths for this role? *
                  </Label>
                  <Textarea
                    id="keyStrengths"
                    value={applicationData.keyStrengths}
                    onChange={(e) =>
                      handleInputChange("keyStrengths", e.target.value)
                    }
                    placeholder="Describe your key strengths and how they align with this position..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="technicalSkills">
                    Technical Skills & Technologies *
                  </Label>
                  <Textarea
                    id="technicalSkills"
                    value={applicationData.technicalSkills}
                    onChange={(e) =>
                      handleInputChange("technicalSkills", e.target.value)
                    }
                    placeholder="List your technical skills, programming languages, frameworks, tools, etc..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectExperience">
                    Relevant Project Experience *
                  </Label>
                  <Textarea
                    id="projectExperience"
                    value={applicationData.projectExperience}
                    onChange={(e) =>
                      handleInputChange("projectExperience", e.target.value)
                    }
                    placeholder="Describe 2-3 relevant projects you've worked on, including technologies used and your role..."
                    rows={5}
                    required
                  />
                </div>
              </div>

              {/* Work Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Work Preferences
                </h3>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Preferred Work Mode *</Label>
                    <RadioGroup
                      value={applicationData.workMode}
                      onValueChange={(value) =>
                        handleInputChange("workMode", value)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="office" id="office" />
                        <Label htmlFor="office">
                          Office-based (Guwahati/Dhemaji)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid (Office + Remote)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote">Fully Remote</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="relocate"
                      checked={applicationData.relocate}
                      onCheckedChange={(checked) =>
                        handleInputChange("relocate", checked as boolean)
                      }
                    />
                    <Label htmlFor="relocate" className="text-sm">
                      I am willing to relocate to Guwahati/Dhemaji, Assam if
                      required
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remoteWork"
                      checked={applicationData.remoteWork}
                      onCheckedChange={(checked) =>
                        handleInputChange("remoteWork", checked as boolean)
                      }
                    />
                    <Label htmlFor="remoteWork" className="text-sm">
                      I am open to remote work arrangements
                    </Label>
                  </div>
                </div>
              </div>

              {/* Documents & Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Documents & Professional Links
                </h3>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">
                    Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload your resume/CV
                    </p>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size <= 5 * 1024 * 1024) {
                          handleFileUpload("resume", file);
                        } else if (file) {
                          toast({
                            title: "File too large",
                            description:
                              "Please upload a file smaller than 5MB",
                            variant: "destructive",
                          });
                        }
                      }}
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("resume")?.click()}
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

                {/* Cover Letter Upload */}
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">
                    Cover Letter (Optional - PDF, DOC, DOCX - Max 5MB)
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload your cover letter
                    </p>
                    <Input
                      id="coverLetter"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size <= 5 * 1024 * 1024) {
                          handleFileUpload("coverLetter", file);
                        } else if (file) {
                          toast({
                            title: "File too large",
                            description:
                              "Please upload a file smaller than 5MB",
                            variant: "destructive",
                          });
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("coverLetter")?.click()
                      }
                    >
                      Choose File
                    </Button>
                    {applicationData.coverLetter && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {applicationData.coverLetter.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Professional Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio Website</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      value={applicationData.portfolio}
                      onChange={(e) =>
                        handleInputChange("portfolio", e.target.value)
                      }
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
                    <Input
                      id="linkedinProfile"
                      type="url"
                      value={applicationData.linkedinProfile}
                      onChange={(e) =>
                        handleInputChange("linkedinProfile", e.target.value)
                      }
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="githubProfile">GitHub Profile</Label>
                    <Input
                      id="githubProfile"
                      type="url"
                      value={applicationData.githubProfile}
                      onChange={(e) =>
                        handleInputChange("githubProfile", e.target.value)
                      }
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Additional Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="referralSource">
                    How did you hear about this position?
                  </Label>
                  <Select
                    value={applicationData.referralSource}
                    onValueChange={(value) =>
                      handleInputChange("referralSource", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Company Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="job-portal">Job Portal</SelectItem>
                      <SelectItem value="referral">
                        Employee Referral
                      </SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    value={applicationData.additionalInfo}
                    onChange={(e) =>
                      handleInputChange("additionalInfo", e.target.value)
                    }
                    placeholder="Any additional information you'd like to share..."
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={applicationData.newsletter}
                    onCheckedChange={(checked) =>
                      handleInputChange("newsletter", checked as boolean)
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for job updates and company news
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full business-gradient text-white"
                  disabled={isSubmitting || !applicationData.resume}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application for {job.title}
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  By submitting this application, you agree to our privacy
                  policy and terms of service.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <div className="mt-12 text-center bg-secondary/30 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="w-8 h-8 business-gradient rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                1
              </div>
              <p>
                <strong>Application Review</strong>
                <br />
                We'll review your application within 2-3 business days
              </p>
            </div>
            <div>
              <div className="w-8 h-8 business-gradient rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                2
              </div>
              <p>
                <strong>Initial Screening</strong>
                <br />
                Phone/video call to discuss your background
              </p>
            </div>
            <div>
              <div className="w-8 h-8 business-gradient rounded-full flex items-center justify-center text-white font-bold mx-2">
                3
              </div>
              <p>
                <strong>Technical Interview</strong>
                <br />
                Technical assessment and team interview
              </p>
            </div>
            <div>
              <div className="w-8 h-8 business-gradient rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                4
              </div>
              <p>
                <strong>Final Decision</strong>
                <br />
                Offer discussion and onboarding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
