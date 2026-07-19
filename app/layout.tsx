import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web by Yossef — Frontend Developer & Web Designer',
  description:
    'Yossef is a frontend developer and web designer crafting beautiful, fast and responsive modern websites with React, Tailwind CSS and clean UI/UX.',
  keywords: [
    'Yossef',
    'Web by Yossef',
    'Frontend Developer',
    'Web Designer',
    'React',
    'Tailwind CSS',
    'UI/UX Design',
    'Portfolio',
  ],
  authors: [{ name: 'Yossef' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Web by Yossef — Frontend Developer & Web Designer',
    description:
      'Frontend developer crafting modern, fast and responsive websites.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#171717',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
