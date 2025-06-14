"use server"

import { sendAIConsultationEmail } from "@/lib/email"

export async function submitAIConsultation(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    consultationType: formData.get("consultationType") as string,
    businessChallenges: formData.get("businessChallenges") as string,
    budget: formData.get("budget") as string,
  }

  // Basic validation
  if (!data.name || !data.email || !data.phone || !data.company || !data.businessChallenges) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  try {
    const emailResult = await sendAIConsultationEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message: "Your AI consultation request has been submitted. We'll contact you within 24 hours to schedule.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send confirmation email. Please try again.",
      }
    }
  } catch (error) {
    console.error("AI consultation submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your request. Please try again.",
    }
  }
}
