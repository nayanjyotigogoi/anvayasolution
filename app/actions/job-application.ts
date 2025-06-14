"use server"

import { sendJobApplicationEmail } from "@/lib/email"

export async function submitJobApplication(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    jobTitle: formData.get("jobTitle") as string,
    currentPosition: formData.get("currentPosition") as string,
    expectedSalary: formData.get("expectedSalary") as string,
    motivation: formData.get("motivation") as string,
  }

  // Basic validation
  if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.motivation) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  try {
    const emailResult = await sendJobApplicationEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message: "Your application has been submitted successfully. We'll review it within 2-3 business days.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send confirmation email. Please try again.",
      }
    }
  } catch (error) {
    console.error("Job application submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your application. Please try again.",
    }
  }
}
