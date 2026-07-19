'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16 text-center"
    >
      {/* Curved "web by" text logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <svg
          viewBox="0 0 300 90"
          className="h-16 w-56 sm:h-20 sm:w-64"
          role="img"
          aria-label="web by"
        >
          <defs>
            <path id="curve" d="M 20 80 A 150 150 0 0 1 280 80" fill="none" />
          </defs>
          <text
            className="font-sans font-bold"
            style={{ fill: 'var(--primary)' }}
            fontSize="34"
            letterSpacing="10"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              WEB BY
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Floating developer illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative my-2"
      >
        <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-float">
          <Image
            src="/hero-illustration.png"
            alt="Futuristic illustration of a developer workspace with a monitor, code symbols and a settings gear in pink tones"
            width={360}
            height={360}
            priority
            className="h-56 w-56 object-contain sm:h-72 sm:w-72 [mask-image:radial-gradient(circle,black_55%,transparent_78%)]"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-balance text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl"
      >
        Yossef
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-4 max-w-md text-pretty text-base text-muted-foreground sm:text-lg"
      >
        Frontend Developer crafting modern websites
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
        >
          View My Work
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
        <a
          href="#contact"
          className="glass flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:border-primary/40"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}
