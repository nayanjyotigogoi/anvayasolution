"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { submitAIConsultation } from "@/app/actions/ai-consultation"

const AIConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    companySize: "",
    consultationType: "",
    urgency: "",
    businessChallenges: "",
    currentSolutions: "",
    budget: "",
    timeline: "",
    expectations: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("company", formData.company)
    formDataObj.append("consultationType", formData.consultationType)
    formDataObj.append("businessChallenges", formData.businessChallenges)
    formDataObj.append("budget", formData.budget)

    try {
      const result = await submitAIConsultation(formDataObj)

      if (result.success) {
        toast({
          title: "Consultation Scheduled!",
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
          consultationType: "",
          urgency: "",
          businessChallenges: "",
          currentSolutions: "",
          budget: "",
          timeline: "",
          expectations: "",
          additionalInfo: "",
        })
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

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>AI Consultation Request</CardTitle>
          <CardDescription>Fill out the form below to request an AI consultation.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="consultationType">Type of Consultation</Label>
                <Select onValueChange={(value) => handleSelectChange("consultationType", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI Strategy">AI Strategy</SelectItem>
                    <SelectItem value="AI Implementation">AI Implementation</SelectItem>
                    <SelectItem value="AI Training">AI Training</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="businessChallenges">Business Challenges</Label>
                <Textarea
                  id="businessChallenges"
                  name="businessChallenges"
                  value={formData.businessChallenges}
                  onChange={handleChange}
                  placeholder="Describe your business challenges"
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget</Label>
                <Input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Enter your budget"
                />
              </div>

              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AIConsultationPage
