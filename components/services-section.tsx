'use client'

import { Globe, Rocket, LayoutDashboard } from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Building fast modern websites that load quickly and scale.',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'High converting landing pages designed for businesses.',
  },
  {
    icon: LayoutDashboard,
    title: 'UI/UX Design',
    description: 'Clean interfaces with a modern user experience.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-center font-mono text-sm tracking-widest text-primary">
          {'// SERVICES'}
        </p>
        <h2 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          What I Can Do For You
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
