"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Nitishhpandey",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nitishpandey",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nitishpandey",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/nitishpandey",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Email",
    href: "mailto:nitish@example.com",
    icon: <Mail className="h-5 w-5" />,
  },
]

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
