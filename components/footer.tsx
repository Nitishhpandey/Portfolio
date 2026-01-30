"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nitishhpandey",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nitishhpandey",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nitishhpandey",
    icon: Instagram,
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/nitishhpandey",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:nitish@example.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} — Nitish Pandey</p>
        </div>
      </div>
    </footer>
  )
}
