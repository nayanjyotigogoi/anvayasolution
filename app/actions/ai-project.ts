"use server"

import { sendAIProjectInquiryEmail } from "@/lib/email"

export async function submitAIProjectInquiry(formData: FormData) {
  const selectedSolutions = formData.getAll("selectedSolutions") as string[]

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    selectedSolutions,
    primaryGoals: formData.get("primaryGoals") as string,
    budget: formData.get("budget") as string,
    timeline: formData.get("timeline") as string,
  }

  // Basic validation
  if (!data.name || !data.email || !data.phone || !data.company || !data.primaryGoals) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  try {
    const emailResult = await sendAIProjectInquiryEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message: "Your AI project inquiry has been submitted. Our experts will contact you within 24 hours.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send confirmation email. Please try again.",
      }
    }
  } catch (error) {
    console.error("AI project inquiry submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your inquiry. Please try again.",
    }
  }
}
