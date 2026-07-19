import { AnimatedBackground } from '@/components/animated-background'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
