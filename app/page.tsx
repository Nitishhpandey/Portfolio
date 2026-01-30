import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { SocialLinks } from "@/components/social-links"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SocialLinks />
      <ContactSection />
    </>
  )
}
