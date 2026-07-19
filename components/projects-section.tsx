'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const projects = [
  {
    title: 'Academy Booking System',
    description:
      'A full booking platform where students browse courses and reserve their seats in real time.',
    image: '/project-academy.png',
    tech: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Portfolio Website',
    description:
      'A sleek, animated personal portfolio built with reusable components and smooth motion.',
    image: '/project-portfolio.png',
    tech: ['React', 'Tailwind'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-center font-mono text-sm tracking-widest text-primary">
          {'// PROJECTS'}
        </p>
        <h2 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Selected Work
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <article className="glass group h-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Preview of the ${project.title} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  View project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
