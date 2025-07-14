# PyShotter Website

Welcome to the website for **PyShotter** an AI-powered, ultra-fast Python screenshot library for smart detection, annotation, sharing, and automation.

---

## What is PyShotter?

**PyShotter** is a powerful tool designed to supercharge your screenshot workflows in Python. It provides:

- **Smart Detection**: Auto-detect code blocks, windows, and UI elements using computer vision
- **OCR Text Extraction**: Extract text from screenshots with high accuracy
- **Rich Annotation**: Add text, shapes, arrows, highlights, and more
- **Easy Sharing**: Copy to clipboard, generate shareable links, or upload to the cloud
- **Sensitive Data Redaction**: Automatically blur emails, phone numbers, credit cards, and more
- **Multi-Monitor Panorama**: Stitch all monitors into one seamless panoramic image
- **Change Detection**: Highlight changes between screenshots
- **Customizable Hotkeys**: Set global hotkeys for capture and annotation
- **Screenshot History & Search**: Searchable history with metadata and OCR text indexing
- **High Performance**: Ultra-fast, cross-platform, and optimized for speed

---

## About This Website
Here you can:

- **Explore Features**: Learn what PyShotter can do for your projects
- **Read Documentation**: Find installation guides, requirements, and troubleshooting tips
- **Get Support**: Access common error solutions and platform-specific advice
- **Stay Updated**: Get the latest news and release information
- **Find Links**: Quickly access the PyPI and GitHub pages for installation and advanced usage

---

## Quick Links
- **PyShotter on PyPI**: [https://pypi.org/project/pyshotter/](https://pypi.org/project/pyshotter/)
- **PyShotter GitHub**: [https://github.com/utachicodes/pyshotter_website](https://github.com/utachicodes/pyshotter_website)

---

## Requirements & Installation
- Python 3.8+
- Optional: Tesseract for OCR, additional dependencies for advanced features

For most users, install with:

```bash
pip install pyshotter
```

**With OCR features:**
```bash
pip install pyshotter[ocr]
```

**With annotation features:**
```bash
pip install pyshotter[annotation]
```

**All features:**
```bash
pip install pyshotter[ocr,annotation,sharing,cloud]
```

---

## Quick Start

```python
from pyshotter import pyshotter

# The simplest use - save a screenshot
with pyshotter() as sct:
    sct.shot()
```

---

## Troubleshooting & Support
- No C++ build tools required for most features
- For advanced backends or platform-specific issues, see the [GitHub Issues](https://github.com/utachicodes/pyshotter_website/issues) page
- Windows users: Consider using WSL for easier native code compilation if needed
- Common errors and solutions are documented on GitHub

---

## Documentation
Full documentation, usage examples, and advanced configuration are available on:
- This website (see navigation)
- [PyShotter GitHub README](https://github.com/utachicodes/pyshotter_website)

---

## License
MIT © Abdoullah Ndao <abdoullahaljersi@gmail.com> 
