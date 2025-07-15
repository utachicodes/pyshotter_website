"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

export default function PyShotter() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <span className="text-2xl font-light tracking-wider">PYSHOTTER</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide">FEATURES</a>
              <a href="#docs" className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide">DOCUMENTATION</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-24 px-4 bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-950">
        <div className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
          <div className="flex items-center h-10 px-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-green-400 inline-block" />
            </div>
            <span className="ml-4 text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wide select-none">PyShotter</span>
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
          <div className="p-12 text-center">
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 leading-none">Welcome to PyShotter</h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Effortless screenshots, annotation, and sharing. Fast, smart, and easy to use.
            </p>
            <Button
              size="lg"
              className="gap-3 px-10 py-5 text-lg bg-black text-white hover:bg-gray-900 font-light tracking-wide"
              asChild
            >
              <a href="https://pypi.org/project/pyshotter/" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-center text-gray-400 text-sm font-light">
        <div>2025 PyShotter. MIT License. By Abdoullah Ndao.</div>
      </footer>
    </div>
  )
}
