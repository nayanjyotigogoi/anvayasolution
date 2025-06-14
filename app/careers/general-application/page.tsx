"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { submitGeneralApplication } from "@/app/actions/general-application"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  location: z.string().optional(),
  experience: z.string().optional(),
  skills: z.string().optional(),
  interestedRoles: z.string().optional(),
  availability: z.string().optional(),
  workPreference: z.string().optional(),
  expectedSalary: z.string().optional(),
  portfolioUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  coverLetter: z.string().optional(),
  newsletter: z.boolean().default(false).optional(),
})

const GeneralApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    interestedRoles: "",
    availability: "",
    workPreference: "",
    expectedSalary: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    coverLetter: "",
    newsletter: false,
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      skills: "",
      interestedRoles: "",
      availability: "",
      workPreference: "",
      expectedSalary: "",
      portfolioUrl: "",
      linkedinUrl: "",
      githubUrl: "",
      coverLetter: "",
      newsletter: false,
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("skills", formData.skills)
    formDataObj.append("interestedRoles", formData.interestedRoles)
    formDataObj.append("coverLetter", formData.coverLetter)

    try {
      const result = await submitGeneralApplication(formDataObj)

      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: result.message,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          experience: "",
          skills: "",
          interestedRoles: "",
          availability: "",
          workPreference: "",
          expectedSalary: "",
          portfolioUrl: "",
          linkedinUrl: "",
          githubUrl: "",
          coverLetter: "",
          newsletter: false,
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
    <div className="container max-w-2xl">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@example.com"
                    type="email"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123-456-7890"
                    type="tel"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List your skills"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestedRoles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interested Roles</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What roles are you interested in?"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, interestedRoles: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Letter</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a cover letter"
                    {...field}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default GeneralApplicationForm
