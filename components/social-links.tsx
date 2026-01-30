"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "./section-header";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Download,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nitishhpandey",
    icon: Github,
    color: "hover:bg-[#333] hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nitishhpandey",
    icon: Linkedin,
    color: "hover:bg-[#0077b5] hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nitishhpandey",
    icon: Instagram,
    color: "hover:bg-[#e4405f] hover:text-white",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/nitishhpandey",
    icon: Twitter,
    color: "hover:bg-[#1da1f2] hover:text-white",
  },
  {
    name: "Email",
    href: "mailto:nitishpandey3108@gmail.com",
    icon: Mail,
    color: "hover:bg-primary hover:text-primary-foreground",
  },
];

export function SocialLinks() {
  return (
    <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Let's Connect"
          subtitle="Feel free to reach out through any of these platforms"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
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
                className={`flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl transition-all duration-300 ${link.color}`}
              >
                <link.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/Nitish.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
