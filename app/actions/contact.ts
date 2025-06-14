"use server"

import { sendContactFormEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    service: formData.get("service") as string,
    budget: formData.get("budget") as string,
    message: formData.get("message") as string,
  }

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  try {
    const emailResult = await sendContactFormEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send confirmation email. Please try again.",
      }
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your inquiry. Please try again.",
    }
  }
}
