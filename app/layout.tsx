import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nitish Pandey | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in JavaScript, TypeScript, React.js, Node.js, and MongoDB. Building scalable, user-friendly web applications.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Node.js", "TypeScript", "JavaScript", "MongoDB"],
  authors: [{ name: "Nitish Pandey" }],
  creator: "Nitish Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nitish Pandey | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in JavaScript, TypeScript, React.js, Node.js, and MongoDB.",
    siteName: "Nitish Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Pandey | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in JavaScript, TypeScript, React.js, Node.js, and MongoDB.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
