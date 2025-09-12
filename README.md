# 🚀 Personal Portfolio – Modern, Secure & Fast

**Hi, I'm Dhirendra Singh Dhami.** This is my personal portfolio where I build, experiment, and share projects across **cybersecurity**, **web development**, **ethical tech**, and **sustainable digital innovation**.

[🌐 Live Website](https://dhirendrasinghdhami.com.np) · [📄 Resume](/public/Dhiren%20Cv.pdf) · [Contact](#contact)

---

## 📌 Overview

This project is a **fast, accessible, privacy-friendly portfolio** focused on performance, strong security headers, structured data for search engines, and a minimal, professional UI. It's designed to rank naturally for my name without keyword stuffing.

### Core Highlights

- ⚡ Vite + React + TypeScript
- 🛡️ CSP, HSTS, anti-bot form protections, input sanitization
- 🔍 Canonical tags, JSON-LD Person schema, Open Graph + Twitter meta
- 🧩 Modular components (shadcn/ui + custom sections)
- 🖼️ Lightweight themed particle system
- 🔒 No tracking scripts (privacy first)

---

## 🧠 Motivation

I wanted a portfolio that feels intentional: clean animations, subtle particles, accessible contrast, and zero bloat. It loads fast globally, works on low-power devices, and reflects my interest in secure, ethical software.

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React + TypeScript |
| Build | Vite (manual chunking, terser minification) |
| Styling | Tailwind CSS + utility layering |
| UI Components | shadcn/ui (Radix primitives) |
| Particles | tsparticles (minimal custom configs) |
| Forms | EmailJS (sanitized + protected) |
| Deployment | Static host / CDN optimized |

---

## ✨ Features

- Fast first load (code-splitting + optimized assets)
- Adaptive particle themes (density scaling without layout shift)
- Secure contact form (honeypot, rate limiting, validation)
- Structured data for entity recognition
- Full metadata coverage (title, description, social cards)
- Accessible UI (semantic + focus-friendly)
- Zero third‑party tracking
- Sustainable UX (low CPU animations)

---

## 🔍 SEO Strategy

Organic and human-first. The site uses best practices instead of stuffing phrases.

| Aspect | Implementation |
|--------|----------------|
| Canonical URL | [https://dhirendrasinghdhami.com.np/](https://dhirendrasinghdhami.com.np/) |
| Structured Data | JSON-LD Person schema |
| Open Graph / Twitter | Social share optimization |
| Sitemap | Minimal + valid |
| robots.txt | Index allowed, scanners discouraged |
| Performance | Reduced JS, font optimization |
| Security | Headers improve trust & crawl stability |

### Sample JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dhirendra Singh Dhami",
  "alternateName": ["Dhirendra", "Dhirendra Singh"],
  "description": "I create secure digital solutions and work on cybersecurity, web development, and sustainable tech projects.",
  "url": "https://dhirendrasinghdhami.com.np/",
  "sameAs": [
    "https://github.com/dhirendraxd",
    "https://x.com/dhirendra_jsx",
    "https://www.linkedin.com/in/dhirendrasinghdhami/"
  ]
}
```

---

## 🛡️ Security Hardening

Implemented defense-in-depth:

- Content Security Policy (strict src controls)
- HSTS + X-Content-Type-Options + Frame protections
- Input sanitization & validation (`src/lib/security.ts`)
- Client-side rate limiting & fingerprinting
- Honeypot + timing-based bot detection
- Server signature removal & sensitive file shielding
- robots.txt discourages automated scanners

---

## 🧩 Project Structure

```text
src/
  components/
    sections/    # Hero, About, Achievements, Contact
    ui/          # Reusable UI primitives
  lib/           # security, particles, utils, integrations
  hooks/         # custom hooks
public/          # static assets, sitemap, resume, robots
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/dhirendraxd/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

---

## 🧪 Customization Tips

| Goal | Location |
|------|----------|
| Particle density | `src/lib/particleConfigs.ts` |
| SEO meta | `index.html` |
| Add a section | `src/components/sections/` |
| Contact form logic | `src/components/sections/ContactSection.tsx` |
| Security utilities | `src/lib/security.ts` |

---

## 📈 Performance Notes

- Fonts preloaded + swap strategy
- Terser removes console & comments
- No runtime analytics overhead
- Particles low-motion and density-tunable
- Vendor chunk separation (react/ui/particles/icons)

---

## 🤝 Contributing

Suggestions welcome—open an issue or fork the repo.

---


## Contact

| Type | Link |
|------|------|
| Email | `dhirendraxd@gmail.com` |
| LinkedIn | [https://www.linkedin.com/in/dhirendrasinghdhami/](https://www.linkedin.com/in/dhirendrasinghdhami/) |
| X (Twitter) | [https://x.com/dhirendra_jsx](https://x.com/dhirendra_jsx) |
| Portfolio | [https://dhirendrasinghdhami.com.np](https://dhirendrasinghdhami.com.np) |

---

## ⭐ Support

If this project helps or inspires you, consider starring it.

---

### 🔄 Future Enhancements

- Theme toggle rework
- MDX-based notes/blog section
- Optional serverless relay for hardened form backend

---

### 📜 License

MIT — Use freely with attribution.

---

> Built with focus, curiosity, and respect for users' time & privacy.
