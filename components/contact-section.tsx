'use client'

import { useState } from 'react'
import type { SVGProps } from 'react'
import { Send, Check, Loader2, Phone, Mail, Copy, ExternalLink } from 'lucide-react'
import { Reveal } from './reveal'

function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-1.42c.29-.16.57-.37.84-.6a1.65 1.65 0 1 0 .25 2.6c0 .08 0 .17-.02.25 0 1.36-1.1 2.46-2.46 2.46a2.46 2.46 0 0 1-2.46-2.46 2.46 2.46 0 0 1 2.46-2.46c.27 0 .53.04.78.13V5.5A8.04 8.04 0 0 0 1 14.26v3.68a8 8 0 0 0 14.55-3.36c.32-.9.52-1.85.56-2.84.22.14.44.27.67.38v-3.2c-.32.1-.66.15-1 .15z" />
    </svg>
  )
}

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.45 3l-.24.5a18.27 18.27 0 0 1 4.3 1.4 16.5 16.5 0 0 0-5.5-1.76 15.06 15.06 0 0 0-4.02 0A16.5 16.5 0 0 0 4.5 4.9a18.27 18.27 0 0 1 4.3-1.4L8.55 3a19.8 19.8 0 0 0-4.87 1.37C1.05 8.28.34 12.08.7 15.82a19.9 19.9 0 0 0 6.06 3.06l.77-1.24c-.68-.25-1.32-.56-1.93-.94.16-.12.32-.25.47-.38a14.2 14.2 0 0 0 12.13 0c.15.14.31.26.47.38-.61.38-1.26.69-1.94.94l.77 1.24a19.9 19.9 0 0 0 6.06-3.06c.42-4.33-.72-8.1-3-11.45zM8.68 13.53c-1.18 0-2.15-1.08-2.15-2.4 0-1.32.95-2.4 2.15-2.4 1.2 0 2.17 1.08 2.15 2.4 0 1.32-.95 2.4-2.15 2.4zm6.64 0c-1.18 0-2.15-1.08-2.15-2.4 0-1.32.95-2.4 2.15-2.4 1.2 0 2.17 1.08 2.15 2.4 0 1.32-.95 2.4-2.15 2.4z" />
    </svg>
  )
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '01101706205',
    copyable: true,
    link: null,
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'ya2190069@gmail.com',
    copyable: true,
    link: null,
  },
  {
    icon: TiktokIcon,
    title: 'TikTok',
    value: '@webbyyossef',
    copyable: false,
    link: 'https://tiktok.com/@webbyyossef',
  },
  {
    icon: DiscordIcon,
    title: 'Discord',
    value: 'Join Server',
    copyable: false,
    link: 'https://discord.gg/KXvXeptuaK',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copied, setCopied] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xaqrjwlq', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-center font-mono text-sm tracking-widest text-primary">
          {'// CONTACT'}
        </p>
        <h2 className="text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
          Have a project in mind or want to collaborate? Send me a message and I&apos;ll get back
          to you as soon as possible.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="glass flex flex-col gap-6 rounded-3xl p-8">
            {/* Success Message */}
            {status === 'success' && (
              <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3">
                <Check className="h-5 w-5 text-green-500" />
                <p className="text-sm text-green-300">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                <p className="text-sm text-red-300">
                  Failed to send message. Please try again.
                </p>
              </div>
            )}

            {/* Name & Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  aria-label="Full Name"
                  className={`rounded-2xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.name ? 'border-red-500/50' : 'border-border'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  aria-label="Email Address"
                  className={`rounded-2xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.email ? 'border-red-500/50' : 'border-border'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                aria-label="Phone Number"
                className="rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject <span className="text-primary">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this about?"
                aria-label="Subject"
                className={`rounded-2xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.subject ? 'border-red-500/50' : 'border-border'
                }`}
              />
              {errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or collaboration..."
                rows={4}
                aria-label="Message"
                className={`resize-none rounded-2xl border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.message ? 'border-red-500/50' : 'border-border'
                }`}
              />
              {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>

        {/* Contact Information Cards */}
        <Reveal delay={0.2} className="flex flex-col gap-4">
          {contactInfo.map((info) => {
            const Icon = info.icon
            const key = info.title.toLowerCase()
            const isCopied = copied === key

            return (
              <div
                key={info.title}
                className="glass group flex items-start gap-4 rounded-2xl border border-border p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary/25">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {info.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{info.value}</p>
                </div>
                {info.copyable ? (
                  <button
                    onClick={() => handleCopy(info.value, key)}
                    className="mt-1 flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary"
                    aria-label={`Copy ${info.title}`}
                    title={`Copy ${info.title}`}
                  >
                    <Copy size={16} />
                  </button>
                ) : info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/15 hover:text-primary"
                    aria-label={`Open ${info.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : null}
                {isCopied && (
                  <div className="absolute right-4 top-4 rounded-lg bg-green-500/20 px-2 py-1 text-xs text-green-400">
                    Copied!
                  </div>
                )}
              </div>
            )
          })}
        </Reveal>
      </div>

      {/* Footer */}
      <Reveal delay={0.3} className="mt-16">
        <footer className="text-center text-sm text-muted-foreground">
          <p>
            Web by <span className="font-semibold text-foreground">Yossef</span> — Frontend
            Developer &amp; Web Designer
          </p>
        </footer>
      </Reveal>
    </section>
  )
}
