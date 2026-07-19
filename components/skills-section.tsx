'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 92 },
  { name: 'JavaScript', level: 88 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git', level: 80 },
  { name: 'UI Design', level: 87 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-center font-mono text-sm tracking-widest text-primary">
          {'// SKILLS'}
        </p>
        <h2 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tools I Work With
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.05}>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + i * 0.05,
                    ease: 'easeOut',
                  }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
