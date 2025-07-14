"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  FileText,
  Shield,
  Monitor,
  GitCompare,
  PenTool,
  History,
  Keyboard,
  Share2,
  Sparkles,
  Download,
  Github,
  Star,
  GitFork,
  ExternalLink,
  Code,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  Play,
  Copy,
  Palette,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function PyShotter() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Eye,
      title: "Smart Detection",
      description: "Automatically detect code blocks, windows, and UI elements using computer vision",
      code: "detector.detect_code_regions(screenshot)",
    },
    {
      icon: FileText,
      title: "OCR Text Extraction",
      description: "Extract text from screenshots using Tesseract OCR engine with high accuracy",
      code: "ocr.extract_text(screenshot)",
    },
    {
      icon: Palette,
      title: "Rich Annotation",
      description: "Add text, shapes, arrows, highlights with custom fonts, colors, and layers",
      code: "annotator.add_text(screenshot, 'Hello!', (100, 100))",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Copy to clipboard, generate shareable links, or upload to cloud services",
      code: "sharer.copy_to_clipboard(screenshot)",
    },
    {
      icon: Shield,
      title: "Sensitive Data Redaction",
      description: "Automatically blur emails, phone numbers, credit cards, and SSNs",
      code: "redaction.redact_sensitive_data(screenshot)",
    },
    {
      icon: Monitor,
      title: "Multi-Monitor Panorama",
      description: "Stitch all monitors into one seamless panoramic image",
      code: "panorama.create_panorama(screenshots)",
    },
    {
      icon: GitCompare,
      title: "Change Detection",
      description: "Highlight changes between screenshots with configurable sensitivity",
      code: "detector.detect_changes(current, previous)",
    },
    {
      icon: Keyboard,
      title: "Customizable Hotkeys",
      description: "Set global hotkeys for screenshot capture and annotation",
      code: "pyshotter.set_hotkey('ctrl+shift+s')",
    },
    {
      icon: History,
      title: "Screenshot History & Search",
      description: "Searchable history with metadata and OCR text indexing",
      code: "history.search_history('work')",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Ultra-fast cross-platform library optimized for speed using ctypes",
      code: "with pyshotter() as sct: sct.shot()",
    },
  ]

  const useCases = [
    {
      title: "Documentation & Tutorials",
      description: "Create professional documentation with smart annotations and code region detection",
      icon: FileText,
    },
    {
      title: "Bug Reporting",
      description: "Capture and highlight issues with automatic change detection and annotations",
      icon: GitCompare,
    },
    {
      title: "Content Creation",
      description: "Perfect for social media, blogs, presentations with rich annotation tools",
      icon: PenTool,
    },
    {
      title: "Quality Assurance",
      description: "Automated testing workflows with visual regression and change detection",
      icon: CheckCircle,
    },
    {
      title: "Privacy Protection",
      description: "Enterprise-grade sensitive data redaction for secure sharing",
      icon: Shield,
    },
    {
      title: "Multi-Monitor Workflows",
      description: "Panorama stitching for ultra-wide desktop setups and presentations",
      icon: Monitor,
    },
  ]

  const targetAudience = [
    {
      title: "Developers",
      description: "API integration, automation, and testing workflows with comprehensive SDK",
      icon: Code,
    },
    {
      title: "Content Creators",
      description: "Social media, tutorials, and documentation with professional annotation tools",
      icon: Users,
    },
    {
      title: "QA Engineers",
      description: "Testing, bug reporting, and visual regression testing automation",
      icon: CheckCircle,
    },
    {
      title: "Researchers",
      description: "Data collection, analysis, and academic documentation workflows",
      icon: Eye,
    },
    {
      title: "Privacy-Conscious Users",
      description: "Automatic redaction and secure sharing with enterprise-grade security",
      icon: Shield,
    },
    {
      title: "Power Users",
      description: "Advanced features, extensive customization, and workflow automation",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-wider text-black dark:text-white">PYSHOTTER</span>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                FEATURES
              </a>
              <a
                href="#use-cases"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                USE CASES
              </a>
              <a
                href="#docs"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                DOCUMENTATION
              </a>
              <a
                href="https://github.com/utachicodes/pyshotter"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                GITHUB
              </a>
            </div>

            <div className="flex items-center space-x-4">
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
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide"
              >
                FEATURES
              </a>
              <a
                href="#use-cases"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide"
              >
                USE CASES
              </a>
              <a
                href="#docs"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide"
              >
                DOCUMENTATION
              </a>
              <a
                href="https://github.com/utachicodes/pyshotter"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm font-light tracking-wide"
              >
                GITHUB
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-desktop dark:bg-desktop-dark mt-16">
        {/* Desktop background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-white to-gray-300 dark:from-gray-900 dark:via-black dark:to-gray-950" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
          {/* Screenshot window mockup */}
          <div className="w-full max-w-3xl rounded-xl shadow-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center h-10 px-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-400 inline-block" />
                <span className="h-3 w-3 rounded-full bg-green-400 inline-block" />
              </div>
              <span className="ml-4 text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wide select-none">PyShotter Screenshot</span>
              <div className="flex-1" />
              {/* Light/Dark toggle visually clear */}
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
            {/* Screenshot content */}
            <div className="p-12 text-center">
              <Badge
                variant="outline"
                className="mb-8 px-6 py-2 text-sm font-light tracking-widest border-gray-600 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-transparent"
              >
                SMART, ANNOTATED, AND SHAREABLE SCREENSHOTS
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-none">
                ULTRA-FAST<br />SCREENSHOT<br /><span className="text-gray-400">LIBRARY</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Smart detection, rich annotation, and easy sharing. Cross-platform screenshot automation with AI-powered features for Python.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <div className="group relative">
                  <div className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm flex items-center gap-3 min-w-[220px]">
                    <span className="text-gray-500">$</span>
                    <span className="text-white">pip install pyshotter</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 hover:bg-gray-800 text-gray-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="gap-3 px-10 py-5 text-lg bg-white text-black hover:bg-gray-200 font-light tracking-wide"
                >
                  INSTALL NOW
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center">
                <Button variant="ghost" className="text-gray-400 hover:text-white font-light tracking-wide">
                  SCROLL TO EXPLORE
                  <ArrowRight className="h-4 w-4 ml-2 rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Install Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light mb-6 tracking-tight">QUICK START</h2>
              <p className="text-xl text-gray-400 font-light">Get up and running in under 60 seconds</p>
            </div>

            <Tabs defaultValue="install" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-transparent p-0 h-auto border-b border-gray-800">
                <TabsTrigger
                  value="install"
                  className="rounded-none py-4 px-8 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent font-light tracking-wide"
                >
                  INSTALLATION
                </TabsTrigger>
                <TabsTrigger
                  value="basic"
                  className="rounded-none py-4 px-8 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent font-light tracking-wide"
                >
                  BASIC USAGE
                </TabsTrigger>
                <TabsTrigger
                  value="annotation"
                  className="rounded-none py-4 px-8 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent font-light tracking-wide"
                >
                  ANNOTATION
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-none py-4 px-8 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white border-b-2 border-transparent font-light tracking-wide"
                >
                  ADVANCED
                </TabsTrigger>
              </TabsList>

              <TabsContent value="install" className="mt-12">
                <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-light">
                      <Download className="h-6 w-6" />
                      INSTALLATION
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg font-light">
                      Get started with PyShotter and optional dependencies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded p-8 font-mono text-sm mb-8 border border-gray-800">
                      <div className="text-gray-500 mb-3"># Recommended installation</div>
                      <div className="text-white mb-6">python -m pip install -U --user pyshotter</div>

                      <div className="text-gray-500 mb-3"># With OCR features</div>
                      <div className="text-blue-400 mb-6">pip install pyshotter[ocr]</div>

                      <div className="text-gray-500 mb-3"># With annotation features</div>
                      <div className="text-purple-400 mb-6">pip install pyshotter[annotation]</div>

                      <div className="text-gray-500 mb-3"># All features</div>
                      <div className="text-cyan-400">pip install pyshotter[ocr,annotation,sharing,cloud]</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded border border-gray-700">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span className="font-light">Windows 10+</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded border border-gray-700">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span className="font-light">macOS 10.14+</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded border border-gray-700">
                        <CheckCircle className="h-5 w-5 text-white" />
                        <span className="font-light">Linux (X11/Wayland)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="basic" className="mt-12">
                <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-light">
                      <Play className="h-6 w-6" />
                      BASIC USAGE
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg font-light">
                      Simple screenshot capture in just a few lines
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded p-8 font-mono text-sm border border-gray-800">
                      <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                      <div className="text-blue-400">import</div> <span className="text-yellow-400">pyshotter</span>
                      <br />
                      <br />
                      <div className="text-gray-500"># The simplest use - save a screenshot</div>
                      <div>
                        <span className="text-blue-400">with</span> pyshotter(){" "}
                        <span className="text-blue-400">as</span> sct:
                      </div>
                      <div className="ml-4">
                        sct.<span className="text-white">shot</span>()
                      </div>
                      <br />
                      <div className="text-gray-500"># Screenshot all monitors</div>
                      <div>
                        <span className="text-blue-400">with</span> pyshotter(){" "}
                        <span className="text-blue-400">as</span> sct:
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-400">for</span> i, monitor <span className="text-blue-400">in</span>{" "}
                        <span className="text-blue-400">enumerate</span>
                        (sct.monitors):
                      </div>
                      <div className="ml-8">
                        sct.<span className="text-white">shot</span>(mon=i)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="annotation" className="mt-12">
                <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-light">
                      <Palette className="h-6 w-6" />
                      RICH ANNOTATION
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg font-light">
                      Add text, shapes, and highlights to screenshots
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded p-8 font-mono text-sm border border-gray-800">
                      <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                      <div className="text-blue-400">import</div> <span className="text-yellow-400">pyshotter</span>,{" "}
                      <span className="text-yellow-400">AnnotationFeature</span>
                      <br />
                      <br />
                      <div>
                        <span className="text-blue-400">with</span> pyshotter(){" "}
                        <span className="text-blue-400">as</span> sct:
                      </div>
                      <div className="ml-4">screenshot = sct.grab(sct.monitors[0])</div>
                      <br />
                      <div className="ml-4">annotator = AnnotationFeature()</div>
                      <div className="ml-4">
                        annotated = annotator.<span className="text-white">add_text</span>(
                      </div>
                      <div className="ml-8">
                        screenshot, <span className="text-green-400">"Important!"</span>, (100, 100)
                      </div>
                      <div className="ml-4">)</div>
                      <br />
                      <div className="ml-4">
                        annotated = annotator.<span className="text-white">add_rectangle</span>(
                      </div>
                      <div className="ml-8">annotated, (50, 50), (400, 200)</div>
                      <div className="ml-4">)</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advanced" className="mt-12">
                <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-light">
                      <Sparkles className="h-6 w-6" />
                      ADVANCED FEATURES
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg font-light">
                      Smart detection, OCR, and change detection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded p-8 font-mono text-sm border border-gray-800">
                      <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                      <div className="text-blue-400">import</div>{" "}
                      <span className="text-yellow-400">SmartDetectionFeature</span>,{" "}
                      <span className="text-yellow-400">OCRFeature</span>
                      <br />
                      <br />
                      <div className="text-gray-500"># Smart detection and OCR</div>
                      <div>detector = SmartDetectionFeature()</div>
                      <div>
                        code_regions = detector.<span className="text-white">detect_code_regions</span>
                        (screenshot)
                      </div>
                      <br />
                      <div>ocr = OCRFeature()</div>
                      <div>
                        text = ocr.<span className="text-white">extract_text</span>(screenshot)
                      </div>
                      <br />
                      <div className="text-gray-500"># Sensitive data redaction</div>
                      <div>
                        clean = redaction.<span className="text-white">redact_sensitive_data</span>(screenshot)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light mb-6 tracking-tight text-black dark:text-white">API REFERENCE</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                Simple, powerful API for all your screenshot needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">BASIC CAPTURE</h3>
                <div className="bg-gray-900 dark:bg-black rounded p-6 font-mono text-sm border border-gray-300 dark:border-gray-800 mb-8">
                  <div className="text-blue-400">import</div> <span className="text-yellow-400">pyshotter</span>
                  <br />
                  <br />
                  <div className="text-gray-500"># Capture entire screen</div>
                  <div>
                    <span className="text-blue-400">with</span> pyshotter.PyShotter(){" "}
                    <span className="text-blue-400">as</span> sct:
                  </div>
                  <div className="ml-4">
                    screenshot = sct.<span className="text-white">shot</span>()
                  </div>
                  <br />
                  <div className="text-gray-500"># Capture specific region</div>
                  <div>
                    region = {"{"}x: 100, y: 100, width: 800, height: 600{"}"}
                  </div>
                  <div>
                    screenshot = sct.<span className="text-white">shot</span>(region)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">SMART FEATURES</h3>
                <div className="bg-gray-900 dark:bg-black rounded p-6 font-mono text-sm border border-gray-300 dark:border-gray-800 mb-8">
                  <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                  <div className="text-blue-400">import</div> <span className="text-yellow-400">SmartCapture</span>
                  <br />
                  <br />
                  <div className="text-gray-500"># Auto-detect windows</div>
                  <div>smart = SmartCapture()</div>
                  <div>
                    windows = smart.<span className="text-white">detect_windows</span>()
                  </div>
                  <br />
                  <div className="text-gray-500"># OCR text extraction</div>
                  <div>
                    text = smart.<span className="text-white">extract_text</span>(screenshot)
                  </div>
                  <div>
                    <span className="text-blue-400">print</span>(text)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">ANNOTATION</h3>
                <div className="bg-gray-900 dark:bg-black rounded p-6 font-mono text-sm border border-gray-300 dark:border-gray-800 mb-8">
                  <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                  <div className="text-blue-400">import</div> <span className="text-yellow-400">Annotator</span>
                  <br />
                  <br />
                  <div>annotator = Annotator(screenshot)</div>
                  <div>
                    annotator.<span className="text-white">add_text</span>(
                    <span className="text-green-400">"Important!"</span>, (100, 100))
                  </div>
                  <div>
                    annotator.<span className="text-white">add_arrow</span>((50, 50), (200, 200))
                  </div>
                  <div>
                    annotator.<span className="text-white">add_highlight</span>((0, 0, 300, 50))
                  </div>
                  <div>
                    result = annotator.<span className="text-white">save</span>(
                    <span className="text-green-400">"annotated.png"</span>)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">PRIVACY & SHARING</h3>
                <div className="bg-gray-900 dark:bg-black rounded p-6 font-mono text-sm border border-gray-300 dark:border-gray-800 mb-8">
                  <div className="text-blue-400">from</div> <span className="text-yellow-400">pyshotter</span>{" "}
                  <div className="text-blue-400">import</div> <span className="text-yellow-400">Privacy</span>,{" "}
                  <span className="text-yellow-400">Share</span>
                  <br />
                  <br />
                  <div className="text-gray-500"># Auto-redact sensitive data</div>
                  <div>privacy = Privacy()</div>
                  <div>
                    clean = privacy.<span className="text-white">redact_all</span>(screenshot)
                  </div>
                  <br />
                  <div className="text-gray-500"># Share to clipboard</div>
                  <div>
                    Share.<span className="text-white">to_clipboard</span>(clean)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-8 tracking-tight">POWERFUL FEATURES</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Everything you need for advanced screenshot capture and processing, powered by cutting-edge AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent relative overflow-hidden"
              >
                <CardHeader className="relative pb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded group-hover:bg-gray-200 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-xl font-light tracking-wide">{feature.title.toUpperCase()}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400 text-base leading-relaxed font-light">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="bg-gray-950 rounded p-4 font-mono text-sm text-gray-300 border border-gray-800">
                    {feature.code}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-8 tracking-tight">USE CASES</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Perfect for various workflows and industries, from development to content creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="text-center group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent relative overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="mx-auto p-4 bg-white rounded w-fit group-hover:bg-gray-200 transition-colors duration-300 mb-8">
                    <useCase.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl mb-4 font-light tracking-wide">{useCase.title.toUpperCase()}</CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed font-light">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-8 tracking-tight">WHO IT'S FOR</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Built for professionals who demand advanced screenshot capabilities and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <Card
                key={index}
                className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent relative overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded group-hover:bg-gray-200 transition-colors duration-300">
                      <audience.icon className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-xl font-light tracking-wide">{audience.title.toUpperCase()}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400 text-base leading-relaxed font-light">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light mb-8 tracking-tight">DOCUMENTATION & RESOURCES</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Everything you need to get started and master PyShotter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent">
              <CardHeader>
                <div className="p-3 bg-white rounded w-fit mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="font-light tracking-wide">API REFERENCE</CardTitle>
                <CardDescription className="text-gray-400 font-light">
                  Complete API documentation with examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-transparent hover:bg-white hover:text-black border-gray-600 font-light tracking-wide"
                >
                  <ExternalLink className="h-4 w-4" />
                  VIEW DOCS
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent">
              <CardHeader>
                <div className="p-3 bg-white rounded w-fit mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <Code className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="font-light tracking-wide">EXAMPLES GALLERY</CardTitle>
                <CardDescription className="text-gray-400 font-light">
                  Real-world examples and code snippets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-transparent hover:bg-white hover:text-black border-gray-600 font-light tracking-wide"
                >
                  <ExternalLink className="h-4 w-4" />
                  BROWSE EXAMPLES
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent">
              <CardHeader>
                <div className="p-3 bg-white rounded w-fit mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <CheckCircle className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="font-light tracking-wide">BEST PRACTICES</CardTitle>
                <CardDescription className="text-gray-400 font-light">
                  Tips and tricks for optimal usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-transparent hover:bg-white hover:text-black border-gray-600 font-light tracking-wide"
                >
                  <ExternalLink className="h-4 w-4" />
                  LEARN MORE
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 bg-transparent">
              <CardHeader>
                <div className="p-3 bg-white rounded w-fit mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="font-light tracking-wide">COMMUNITY</CardTitle>
                <CardDescription className="text-gray-400 font-light">Get help and share your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-transparent hover:bg-white hover:text-black border-gray-600 font-light tracking-wide"
                >
                  <ExternalLink className="h-4 w-4" />
                  JOIN COMMUNITY
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GitHub Integration Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8 tracking-tight">OPEN SOURCE & COMMUNITY</h2>
            <p className="text-xl text-gray-400 mb-20 font-light leading-relaxed">
              Join our growing community of developers building amazing things with PyShotter
            </p>

            <div className="text-center p-12 bg-gray-900/50 rounded border border-gray-800 max-w-md mx-auto mb-20">
              <Github className="h-16 w-16 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-light mb-4 tracking-wide">OPEN SOURCE</h3>
              <p className="text-gray-400 font-light">PyShotter is open source and available on GitHub</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                size="lg"
                className="gap-3 px-12 py-6 text-lg bg-white text-black hover:bg-gray-200 font-light tracking-wide"
              >
                <Github className="h-5 w-5" />
                VIEW REPOSITORY
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-12 py-6 text-lg border-gray-600 hover:bg-white hover:text-black font-light tracking-wide bg-transparent"
              >
                <Star className="h-5 w-5" />
                STAR ON GITHUB
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 px-12 py-6 text-lg border-gray-600 hover:bg-white hover:text-black font-light tracking-wide bg-transparent"
              >
                <GitFork className="h-5 w-5" />
                FORK PROJECT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light mb-8 tracking-tight">READY TO GET STARTED?</h2>
          <p className="text-xl mb-16 text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Join thousands of developers using PyShotter for advanced screenshot capabilities and automation
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="bg-gray-900 border border-gray-700 rounded p-6 font-mono text-sm flex items-center gap-4 min-w-[300px]">
              <span className="text-gray-500">$</span>
              <span className="text-white">pip install pyshotter</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <Button
              size="lg"
              className="gap-3 px-12 py-6 text-lg bg-white text-black hover:bg-gray-200 font-light tracking-wide"
            >
              INSTALL NOW
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-xl font-light tracking-wider text-white">PYSHOTTER</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                Ultra-fast cross-platform screenshot library with smart detection, rich annotation, and easy sharing.
              </p>
              <div className="text-sm text-gray-500 space-y-2 font-light">
                <div>Version 1.0.0</div>
                <div>By Abdoullah Ndao</div>
              </div>
            </div>

            <div>
              <h3 className="font-light mb-8 text-lg tracking-wide">RESOURCES</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Best Practices
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-light mb-8 text-lg tracking-wide">COMMUNITY</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>
                  <a href="https://github.com/utachicodes/pyshotter" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://pypi.org/project/pyshotter/" className="hover:text-white transition-colors">
                    PyPI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contributing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-light mb-8 text-lg tracking-wide">SUPPORT</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Troubleshooting
                  </a>
                </li>
                <li>
                  <a href="mailto:abdoullahaljersi@gmail.com" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 font-light">
            <p>2025 PyShotter. MIT License. Built by Abdoullah Ndao.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
