"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-border" />
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-px w-12 bg-border" />
      </div>
    </motion.div>
  )
}
