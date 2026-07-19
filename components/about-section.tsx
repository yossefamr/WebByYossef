'use client'

import { Code2, Palette } from 'lucide-react'
import { Reveal } from './reveal'

const cards = [
  {
    icon: Code2,
    title: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: Palette,
    title: 'UI Design',
    items: ['Modern layouts', 'Responsive design', 'User experience'],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-center font-mono text-sm tracking-widest text-primary">
          {'// ABOUT'}
        </p>
        <h2 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Who is Yossef?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
          A young frontend developer focused on creating beautiful, fast and
          responsive websites that feel effortless to use.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1}>
            <div className="glass group h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
