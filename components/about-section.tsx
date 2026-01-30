"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "./section-header"
import { Github, ExternalLink } from "lucide-react"

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git/GitHub",
  "Data Structures & Algorithms",
  "API Development",
  "Responsive Design",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me and my journey" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-card border border-border rounded-2xl overflow-hidden">
                <Image src="/nitishimage.jpeg" alt="Nitish Pandey" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate and results-driven Web Developer with a strong foundation in computer science, holding
              both <span className="text-foreground font-medium">BCA (2024)</span> and{" "}
              <span className="text-foreground font-medium">MCA degrees</span> from the University of Allahabad. My
              expertise lies in designing, developing, and deploying scalable, user-friendly web applications that solve
              real business problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in{" "}
              <span className="text-primary">JavaScript, TypeScript, React.js, Node.js, Express.js, and MongoDB</span>,
              I bring both front-end finesse and back-end efficiency to every project. I have also strengthened my
              problem-solving abilities through Data Structures and Algorithms, enabling me to write optimized,
              maintainable, and performance-oriented code.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/Nitishhpandey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://vercel.com/nitish-pandeys-projects-ca4de52f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Vercel
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
