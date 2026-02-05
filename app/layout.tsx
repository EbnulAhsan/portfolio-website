import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Portfolio - Creative Full-Stack Developer',
  description: 'Stunning personal portfolio featuring modern web design, smooth Framer Motion animations, and premium SaaS-inspired aesthetics. Showcasing projects, skills, and experience.',
  keywords: 'portfolio, web developer, full-stack, React, Next.js, animations',
  generator: 'v0.app',
  openGraph: {
    title: 'Modern Portfolio - Creative Developer',
    description: 'Stunning personal portfolio with smooth animations and modern design',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
