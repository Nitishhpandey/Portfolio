"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  index: number
}

export function ProjectCard({ title, description, image, techStack, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
