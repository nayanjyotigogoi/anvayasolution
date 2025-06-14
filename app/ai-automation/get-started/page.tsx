"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { submitAIProjectInquiry } from "@/app/actions/ai-project"

const solutions = [
  "Process Automation",
  "Predictive Analytics",
  "Personalized Customer Experiences",
  "AI-Powered Search",
  "Data Analysis and Visualization",
  "Chatbots and Virtual Assistants",
  "Custom AI Solutions",
]

const industries = ["Healthcare", "Finance", "Retail", "Manufacturing", "Technology", "Education", "Other"]

const companySizes = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]

const budgets = [
  "Less than $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "More than $250,000",
]

const timelines = ["1-3 Months", "3-6 Months", "6-12 Months", "More than 12 Months"]

const GetStartedPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    companySize: "",
    website: "",
    selectedSolutions: [],
    customSolution: "",
    primaryGoals: "",
    specificChallenges: "",
    currentTools: "",
    dataVolume: "",
    integrationNeeds: "",
    complianceRequirements: "",
    budget: "",
    timeline: "",
    urgency: "",
    successMetrics: "",
    technicalTeam: "",
    previousAI: "",
    preferredApproach: "",
    additionalRequirements: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (solution: string) => {
    setFormData((prevFormData) => {
      if (prevFormData.selectedSolutions.includes(solution)) {
        return {
          ...prevFormData,
          selectedSolutions: prevFormData.selectedSolutions.filter((s) => s !== solution),
        }
      } else {
        return {
          ...prevFormData,
          selectedSolutions: [...prevFormData.selectedSolutions, solution],
        }
      }
    })
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("company", formData.company)

    // Add selected solutions as multiple values
    formData.selectedSolutions.forEach((solution) => {
      formDataObj.append("selectedSolutions", solution)
    })

    formDataObj.append("primaryGoals", formData.primaryGoals)
    formDataObj.append("budget", formData.budget)
    formDataObj.append("timeline", formData.timeline)

    try {
      const result = await submitAIProjectInquiry(formDataObj)

      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
          description: result.message,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          position: "",
          industry: "",
          companySize: "",
          website: "",
          selectedSolutions: [],
          customSolution: "",
          primaryGoals: "",
          specificChallenges: "",
          currentTools: "",
          dataVolume: "",
          integrationNeeds: "",
          complianceRequirements: "",
          budget: "",
          timeline: "",
          urgency: "",
          successMetrics: "",
          technicalTeam: "",
          previousAI: "",
          preferredApproach: "",
          additionalRequirements: "",
        })
        setCurrentStep(1)
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Please provide your contact details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position">Your Position</Label>
                <Input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
              <CardDescription>Tell us more about your company.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an industry" defaultValue={formData.industry} />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" defaultValue={formData.companySize} />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="website">Company Website</Label>
                <Input type="url" id="website" name="website" value={formData.website} onChange={handleInputChange} />
              </div>
            </CardContent>
          </>
        )
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle>AI Solutions</CardTitle>
              <CardDescription>Select the AI solutions you're interested in.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label>Select AI Solutions</Label>
                <div className="flex flex-col space-y-2">
                  {solutions.map((solution) => (
                    <div key={solution} className="flex items-center space-x-2">
                      <Checkbox
                        id={solution}
                        checked={formData.selectedSolutions.includes(solution)}
                        onCheckedChange={() => handleCheckboxChange(solution)}
                      />
                      <Label
                        htmlFor={solution}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {solution}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="customSolution">Custom AI Solution</Label>
                <Textarea
                  id="customSolution"
                  name="customSolution"
                  placeholder="Describe your custom AI solution"
                  value={formData.customSolution}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      case 4:
        return (
          <>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Provide details about your AI project.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="primaryGoals">Primary Goals</Label>
                <Textarea
                  id="primaryGoals"
                  name="primaryGoals"
                  placeholder="What are your primary goals for this project?"
                  value={formData.primaryGoals}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="specificChallenges">Specific Challenges</Label>
                <Textarea
                  id="specificChallenges"
                  name="specificChallenges"
                  placeholder="What specific challenges are you facing?"
                  value={formData.specificChallenges}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="currentTools">Current Tools</Label>
                <Textarea
                  id="currentTools"
                  name="currentTools"
                  placeholder="What tools are you currently using?"
                  value={formData.currentTools}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      case 5:
        return (
          <>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
              <CardDescription>Provide technical details about your project.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="dataVolume">Data Volume</Label>
                <Input
                  type="text"
                  id="dataVolume"
                  name="dataVolume"
                  placeholder="What is the volume of data you're working with?"
                  value={formData.dataVolume}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="integrationNeeds">Integration Needs</Label>
                <Textarea
                  id="integrationNeeds"
                  name="integrationNeeds"
                  placeholder="What are your integration needs?"
                  value={formData.integrationNeeds}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="complianceRequirements">Compliance Requirements</Label>
                <Textarea
                  id="complianceRequirements"
                  name="complianceRequirements"
                  placeholder="What compliance requirements do you have?"
                  value={formData.complianceRequirements}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      case 6:
        return (
          <>
            <CardHeader>
              <CardTitle>Budget and Timeline</CardTitle>
              <CardDescription>Provide details about your budget and timeline.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="budget">Budget</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a budget" defaultValue={formData.budget} />
                  </SelectTrigger>
                  <SelectContent>
                    {budgets.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timeline" defaultValue={formData.timeline} />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline} value={timeline}>
                        {timeline}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="urgency">Urgency</Label>
                <Input
                  type="text"
                  id="urgency"
                  name="urgency"
                  placeholder="How urgent is this project?"
                  value={formData.urgency}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      case 7:
        return (
          <>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Provide any additional information about your project.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="successMetrics">Success Metrics</Label>
                <Textarea
                  id="successMetrics"
                  name="successMetrics"
                  placeholder="How will you measure the success of this project?"
                  value={formData.successMetrics}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="technicalTeam">Technical Team</Label>
                <Textarea
                  id="technicalTeam"
                  name="technicalTeam"
                  placeholder="Do you have a technical team in place?"
                  value={formData.technicalTeam}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="previousAI">Previous AI Experience</Label>
                <Textarea
                  id="previousAI"
                  name="previousAI"
                  placeholder="Have you worked with AI before?"
                  value={formData.previousAI}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="preferredApproach">Preferred Approach</Label>
                <Textarea
                  id="preferredApproach"
                  name="preferredApproach"
                  placeholder="Do you have a preferred approach to this project?"
                  value={formData.preferredApproach}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                <Textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  placeholder="Do you have any additional requirements?"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="container py-10">
      <div className="flex justify-center">
        <Card className="w-[90%] md:w-[75%] lg:w-[60%]">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            <CardContent className="flex justify-between">
              {currentStep > 1 && (
                <Button type="button" variant="secondary" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {currentStep < 7 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              )}
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default GetStartedPage
