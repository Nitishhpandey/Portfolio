"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-sm text-primary font-medium mb-4 tracking-wider uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Hi, I'm <span className="text-primary">Nitish Pandey</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable, user-friendly, and impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
          >
            View My Work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Link>
          <Link
            href="/Nitish.pdf"
            target="_blank"
            className="group inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-full font-medium hover:bg-muted transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
