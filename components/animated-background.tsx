'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
    }[] = []

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles.length = 0
      const count = Math.min(90, Math.floor((width * height) / 18000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(192, 61, 117, ${p.alpha})`
        ctx.fill()
      }
      animationId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const onResize = () => {
      resize()
      createParticles()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base grid */}
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
      {/* Soft pink gradient lights */}
      <div
        className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[150px]"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[130px]"
        aria-hidden
      />
      {/* Floating particles */}
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />
      {/* Vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]"
        aria-hidden
      />
    </div>
  )
}
