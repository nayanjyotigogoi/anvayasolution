import { Resend } from "resend"

const resend = new Resend("re_BV597krc_EbvBhrvkbtBdZsYBGJaouUbQ")

const ADMIN_EMAIL = "workwithnayan27@gmail.com"

export async function sendContactFormEmail(data: {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}) {
  try {
    // Send confirmation email to user
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [data.email],
      subject: "Thank you for contacting Anvaya Solution",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Anvaya Solution</h1>
            <p style="color: white; margin: 10px 0 0 0;">Thank you for reaching out!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Hi ${data.name},</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for contacting Anvaya Solution. We have received your inquiry and our team will review it carefully.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Your Inquiry Details:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
              ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
              ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ""}
              ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ""}
              <p><strong>Message:</strong></p>
              <p style="background: #f5f5f5; padding: 15px; border-radius: 4px;">${data.message}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              <strong>What happens next?</strong><br>
              • We'll review your inquiry within 24 hours<br>
              • Our team will contact you to discuss your requirements<br>
              • We'll provide a customized solution proposal
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              If you have any urgent questions, feel free to call us at +91 98765 43210.
            </p>
            
            <p style="color: #666;">
              Best regards,<br>
              <strong>Anvaya Solution Team</strong>
            </p>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2024 Anvaya Solution. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `New Contact Form Submission - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #dc2626; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🚨 New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Contact Details:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ""}
              ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
              ${data.service ? `<p><strong>Service Interested:</strong> ${data.service}</p>` : ""}
              ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
              
              <h3 style="color: #333; margin-top: 20px;">Message:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.message}</div>
            </div>
            
            <p style="color: #666;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendJobApplicationEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  currentPosition?: string
  expectedSalary?: string
  motivation: string
}) {
  try {
    // Send confirmation email to applicant
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [data.email],
      subject: `Application Received - ${data.jobTitle} Position`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Anvaya Solution</h1>
            <p style="color: white; margin: 10px 0 0 0;">Application Received Successfully!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Hi ${data.firstName},</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for applying for the <strong>${data.jobTitle}</strong> position at Anvaya Solution. 
              We have successfully received your application and our HR team will review it carefully.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Application Summary:</h3>
              <p><strong>Position:</strong> ${data.jobTitle}</p>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.currentPosition ? `<p><strong>Current Position:</strong> ${data.currentPosition}</p>` : ""}
              ${data.expectedSalary ? `<p><strong>Expected Salary:</strong> ${data.expectedSalary}</p>` : ""}
            </div>
            
            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1976d2; margin-top: 0;">📋 What Happens Next?</h3>
              <div style="color: #666;">
                <p><strong>1. Application Review</strong> - We'll review your application within 2-3 business days</p>
                <p><strong>2. Initial Screening</strong> - Phone/video call to discuss your background</p>
                <p><strong>3. Technical Interview</strong> - Technical assessment and team interview</p>
                <p><strong>4. Final Decision</strong> - Offer discussion and onboarding</p>
              </div>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              We appreciate your interest in joining our team. If you have any questions about the process, 
              feel free to reach out to us.
            </p>
            
            <p style="color: #666;">
              Best regards,<br>
              <strong>Anvaya Solution HR Team</strong>
            </p>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2024 Anvaya Solution. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `New Job Application - ${data.jobTitle} - ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">💼 New Job Application</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Application Details:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Position:</strong> ${data.jobTitle}</p>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              ${data.currentPosition ? `<p><strong>Current Position:</strong> ${data.currentPosition}</p>` : ""}
              ${data.expectedSalary ? `<p><strong>Expected Salary:</strong> ${data.expectedSalary}</p>` : ""}
              
              <h3 style="color: #333; margin-top: 20px;">Motivation:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.motivation}</div>
            </div>
            
            <p style="color: #666;">
              <strong>Action Required:</strong> Please review the complete application and resume in your HR system.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendAIConsultationEmail(data: {
  name: string
  email: string
  phone: string
  company: string
  consultationType: string
  businessChallenges: string
  budget?: string
}) {
  try {
    // Send confirmation email to user
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [data.email],
      subject: "AI Consultation Scheduled - Anvaya Solution",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🤖 Anvaya Solution</h1>
            <p style="color: white; margin: 10px 0 0 0;">AI Consultation Scheduled!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Hi ${data.name},</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for scheduling an AI consultation with Anvaya Solution. We're excited to help you 
              explore how artificial intelligence can transform your business operations.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Consultation Details:</h3>
              <p><strong>Type:</strong> ${data.consultationType}</p>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2e7d32; margin-top: 0;">🎯 What to Expect:</h3>
              <div style="color: #666;">
                <p><strong>1. Confirmation</strong> - We'll confirm your consultation within 24 hours</p>
                <p><strong>2. Preparation</strong> - Receive preparation materials and agenda</p>
                <p><strong>3. Consultation</strong> - In-depth discussion with our AI experts</p>
                <p><strong>4. Follow-up</strong> - Detailed recommendations and next steps</p>
              </div>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Our AI experts will contact you within 24 hours to schedule the consultation at your convenience.
            </p>
            
            <p style="color: #666;">
              Best regards,<br>
              <strong>Anvaya Solution AI Team</strong>
            </p>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2024 Anvaya Solution. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `New AI Consultation Request - ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c3aed; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🤖 New AI Consultation Request</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Consultation Request:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Consultation Type:</strong> ${data.consultationType}</p>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Contact Person:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
              
              <h3 style="color: #333; margin-top: 20px;">Business Challenges:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.businessChallenges}</div>
            </div>
            
            <p style="color: #666;">
              <strong>Action Required:</strong> Please contact the client within 24 hours to schedule the consultation.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendAIProjectInquiryEmail(data: {
  name: string
  email: string
  phone: string
  company: string
  selectedSolutions: string[]
  primaryGoals: string
  budget?: string
  timeline?: string
}) {
  try {
    // Send confirmation email to user
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [data.email],
      subject: "AI Project Inquiry Received - Anvaya Solution",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🚀 Anvaya Solution</h1>
            <p style="color: white; margin: 10px 0 0 0;">AI Project Inquiry Received!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Hi ${data.name},</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for your AI project inquiry. We're excited about the opportunity to help transform 
              your business with cutting-edge AI solutions.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Project Inquiry Summary:</h3>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Contact:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
              ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ""}
              
              ${
                data.selectedSolutions.length > 0
                  ? `
                <h4 style="color: #333; margin-top: 15px;">Selected AI Solutions:</h4>
                <ul style="color: #666;">
                  ${data.selectedSolutions.map((solution) => `<li>${solution}</li>`).join("")}
                </ul>
              `
                  : ""
              }
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #856404; margin-top: 0;">⚡ What Happens Next?</h3>
              <div style="color: #666;">
                <p><strong>1. Review & Analysis</strong> - Our AI experts review your requirements within 24 hours</p>
                <p><strong>2. Initial Consultation</strong> - Free consultation call to discuss your needs in detail</p>
                <p><strong>3. Custom Proposal</strong> - Detailed proposal with timeline, pricing, and ROI projections</p>
                <p><strong>4. Project Kickoff</strong> - Begin your AI transformation journey with our expert team</p>
              </div>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Our AI specialists will contact you within 24 hours to discuss your project requirements in detail.
            </p>
            
            <p style="color: #666;">
              Best regards,<br>
              <strong>Anvaya Solution AI Team</strong>
            </p>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2024 Anvaya Solution. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `New AI Project Inquiry - ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #059669; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🚀 New AI Project Inquiry</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Project Inquiry Details:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Contact Person:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ""}
              ${data.timeline ? `<p><strong>Preferred Timeline:</strong> ${data.timeline}</p>` : ""}
              
              ${
                data.selectedSolutions.length > 0
                  ? `
                <h3 style="color: #333; margin-top: 20px;">Selected AI Solutions:</h3>
                <ul>
                  ${data.selectedSolutions.map((solution) => `<li>${solution}</li>`).join("")}
                </ul>
              `
                  : ""
              }
              
              <h3 style="color: #333; margin-top: 20px;">Primary Business Goals:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.primaryGoals}</div>
            </div>
            
            <p style="color: #666;">
              <strong>Action Required:</strong> Please contact the client within 24 hours to discuss their AI project requirements.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendGeneralApplicationEmail(data: {
  name: string
  email: string
  phone: string
  skills: string
  interestedRoles?: string
  coverLetter: string
}) {
  try {
    // Send confirmation email to applicant
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [data.email],
      subject: "General Application Received - Anvaya Solution",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Anvaya Solution</h1>
            <p style="color: white; margin: 10px 0 0 0;">General Application Received!</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Hi ${data.name},</h2>
            <p style="color: #666; line-height: 1.6;">
              Thank you for your interest in joining Anvaya Solution. We have received your general application 
              and added your profile to our talent database.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Application Summary:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.interestedRoles ? `<p><strong>Interested Roles:</strong> ${data.interestedRoles}</p>` : ""}
            </div>
            
            <div style="background: #e1f5fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0277bd; margin-top: 0;">📋 What Happens Next?</h3>
              <div style="color: #666;">
                <p><strong>1. Application Review</strong> - We'll review your application within 1-2 weeks</p>
                <p><strong>2. Talent Pool</strong> - Your profile will be added to our talent database</p>
                <p><strong>3. Future Opportunities</strong> - We'll contact you when suitable positions open up</p>
              </div>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              We'll keep your application on file and reach out when we have opportunities that match your profile.
            </p>
            
            <p style="color: #666;">
              Best regards,<br>
              <strong>Anvaya Solution HR Team</strong>
            </p>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2024 Anvaya Solution. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Anvaya Solution <noreply@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `New General Application - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #7c2d12; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">📝 New General Application</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Application Details:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              ${data.interestedRoles ? `<p><strong>Interested Roles:</strong> ${data.interestedRoles}</p>` : ""}
              
              <h3 style="color: #333; margin-top: 20px;">Key Skills:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.skills}</div>
              
              <h3 style="color: #333; margin-top: 20px;">Cover Letter:</h3>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.coverLetter}</div>
            </div>
            
            <p style="color: #666;">
              <strong>Action Required:</strong> Please review the complete application and add to talent database.
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: "Failed to send email" }
  }
}
