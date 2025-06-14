"use server"

import { sendGeneralApplicationEmail } from "@/lib/email"

export async function submitGeneralApplication(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    skills: formData.get("skills") as string,
    interestedRoles: formData.get("interestedRoles") as string,
    coverLetter: formData.get("coverLetter") as string,
  }

  // Basic validation
  if (!data.name || !data.email || !data.phone || !data.skills || !data.coverLetter) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  try {
    const emailResult = await sendGeneralApplicationEmail(data)

    if (emailResult.success) {
      return {
        success: true,
        message:
          "Your general application has been submitted successfully. We'll keep your profile in our talent database.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send confirmation email. Please try again.",
      }
    }
  } catch (error) {
    console.error("General application submission error:", error)
    return {
      success: false,
      error: "An error occurred while submitting your application. Please try again.",
    }
  }
}
