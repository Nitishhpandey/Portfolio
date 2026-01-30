"use client"

import { SectionHeader } from "./section-header"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "herAlly",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    image: "/herAlly_Home.png",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Nitishhpandey/herally",
    liveUrl: "#",
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Projects" subtitle="A selection of my recent work and side projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
