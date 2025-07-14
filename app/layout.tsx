import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PyShotter - Advanced Screenshot Library for Python",
  description:
    "AI-powered screenshot capture with OCR, redaction, and smart features. The complete rebrand of mss with significant enhancements.",
  keywords: "python, screenshot, OCR, AI, automation, testing, documentation",
  authors: [{ name: "Abdoullah Ndao", email: "abdoullahaljersi@gmail.com" }],
  openGraph: {
    title: "PyShotter - Advanced Screenshot Library for Python",
    description: "AI-powered screenshot capture with OCR, redaction, and smart features",
    type: "website",
    url: "https://pyshotter.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "PyShotter - Advanced Screenshot Library for Python",
    description: "AI-powered screenshot capture with OCR, redaction, and smart features",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
