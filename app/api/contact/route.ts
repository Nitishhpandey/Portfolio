import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Here you would typically send the email using a service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - etc.

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json({ message: "Message sent successfully! I'll get back to you soon." }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
