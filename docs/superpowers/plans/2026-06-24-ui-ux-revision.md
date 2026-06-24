# UI/UX Pro Max Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply UI/UX Pro Max design intelligence to the portfolio — upgrading typography, adding kinetic hero animations, multi-layer parallax, enhanced card interactions, scroll progress bar, timeline pulse, and full accessibility compliance (prefers-reduced-motion, focus rings, cursor-pointer).

**Architecture:** All changes are confined to existing component files and globals.css. No new dependencies needed — Framer Motion already handles all animation upgrades. Font swap from Playfair Display → Archivo and Inter → Space Grotesk via next/font/google. A new `useReducedMotion` hook in `src/hooks/useReducedMotion.ts` gates all animations.

**Tech Stack:** Next.js 16, Tailwind CSS v4, Framer Motion v12, next/font/google (Archivo + Space Grotesk)

## Global Constraints

- Keep dark navy `#0A1628` + gold `#C9A84C` brand colors — do not change
- All animations respect `prefers-reduced-motion` — when reduced, use `opacity` only (no translate/scale)
- Animation durations: micro-interactions 150–300ms, entrance animations 400–600ms
- Use `cursor-pointer` on all clickable elements
- Focus rings: `focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`
- No emoji as icons
- Portfolio root: `E:/Setup/AI/claude/portfolio/`

## Files Modified / Created

| File | Change |
|---|---|
| `src/app/globals.css` | Font swap to Archivo + Space Grotesk, add focus-visible ring, cursor-pointer base, scroll progress CSS |
| `src/app/layout.tsx` | Swap font imports to Archivo + Space Grotesk |
| `src/hooks/useReducedMotion.ts` | New — wraps `useReducedMotion` from Framer Motion |
| `src/components/Navbar.tsx` | Add scroll progress bar |
| `src/components/Hero.tsx` | Kinetic letter-by-letter name, typing title, 3-layer parallax background |
| `src/components/Experience.tsx` | Pulse animation on timeline dot, directional slide entrance |
| `src/components/Projects.tsx` | Staggered masonry-style grid, hard offset shadow hover |
| `src/components/ui/AnimatedSection.tsx` | Add prefers-reduced-motion gate |
| `src/components/About.tsx` | Directional entrance, photo hover parallax tilt |
| `src/components/Skills.tsx` | Faster stagger, accent bar on card title |
| `src/components/Certifications.tsx` | Counter animation on awards year |
| `src/components/Contact.tsx` | Focus ring on inputs, cursor-pointer on button |

---

### Task 1: Font Swap + Global Accessibility Base

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Produces: `font-heading` → Archivo, `font-body` → Space Grotesk, global focus ring, cursor-pointer

- [ ] **Step 1: Update layout.tsx font imports**

Replace the entire `src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Vinh Pham — Senior Scrum Master & Developer',
  description: 'Portfolio of Vinh Pham — Senior Scrum Master, RTE, SAFe 6.0, Full-stack Developer based in Vietnam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Update globals.css — fonts, focus ring, cursor, scroll progress**

Replace `src/app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: #0A1628;
  --color-surface: #1E2D45;
  --color-accent: #C9A84C;
  --color-text-primary: #F0F4F8;
  --color-text-muted: #8B9CB6;
  --color-border: #2D4166;

  --font-heading: var(--font-archivo), sans-serif;
  --font-body: var(--font-space-grotesk), sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0A1628;
  color: #F0F4F8;
}

* {
  box-sizing: border-box;
}

/* Global accessibility */
a, button, [role="button"] {
  cursor: pointer;
}

*:focus-visible {
  outline: 2px solid #C9A84C;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Scroll progress bar */
#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #C9A84C, #F0C060);
  z-index: 100;
  transform-origin: left;
  transition: width 0.1s linear;
}

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Verify build compiles**

```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd "E:/Setup/AI/claude/portfolio" && npx tsc --noEmit 2>&1
```
Expected: No errors (only the npm deprecation warning is fine).

- [ ] **Step 4: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/app/globals.css src/app/layout.tsx && git commit -m "feat(ui): swap fonts to Archivo + Space Grotesk, add global focus ring and cursor-pointer"
```

---

### Task 2: useReducedMotion Hook + AnimatedSection Upgrade

**Files:**
- Create: `src/hooks/useReducedMotion.ts`
- Modify: `src/components/ui/AnimatedSection.tsx`

**Interfaces:**
- Produces: `useReducedMotion(): boolean` — returns true when user prefers reduced motion
- Consumes: nothing

- [ ] **Step 1: Create the hook**

Create `src/hooks/useReducedMotion.ts`:
```ts
'use client'
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}
```

- [ ] **Step 2: Upgrade AnimatedSection to respect reduced motion**

Replace `src/components/ui/AnimatedSection.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function AnimatedSection({ children, id, className }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduced ? 0.2 : 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/hooks/ src/components/ui/AnimatedSection.tsx && git commit -m "feat(a11y): add useReducedMotion hook, gate AnimatedSection animations"
```

---

### Task 3: Navbar Scroll Progress Bar

**Files:**
- Modify: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `@/hooks/useReducedMotion`
- Produces: Navbar with scroll progress bar div `#scroll-progress`

- [ ] **Step 1: Replace Navbar.tsx**

Replace `src/components/Navbar.tsx`:
```tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import LanguageToggle from '@/components/ui/LanguageToggle'

const sectionIds = ['about', 'experience', 'skills', 'projects', 'certifications', 'contact'] as const

export default function Navbar() {
  const { content } = useLanguage()
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrolled(scrollTop > 20)

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }

      const sections = sectionIds.map(id => document.getElementById(id))
      const current = sections.findLast(el => el && el.getBoundingClientRect().top <= 100)
      setActive(current?.id ?? '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLabels: Record<string, string> = {
    about: content.nav.about,
    experience: content.nav.experience,
    skills: content.nav.skills,
    projects: content.nav.projects,
    certifications: content.nav.certifications,
    contact: content.nav.contact,
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-primary/90 border-b border-border' : ''}`}>
      {/* Scroll progress bar */}
      <div ref={progressRef} id="scroll-progress" style={{ width: '0%' }} />

      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-xl font-bold text-accent tracking-widest hover:text-accent/80 transition-colors"
          aria-label="Back to top"
        >
          VP
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {sectionIds.map(id => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`text-sm font-body transition-colors duration-200 ${active === id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}`}
              >
                {navLabels[id]}
              </a>
              {active === id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/components/Navbar.tsx && git commit -m "feat(ui): add scroll progress bar to Navbar"
```

---

### Task 4: Kinetic Hero — Letter Animation + Parallax Background

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `@/hooks/useReducedMotion`, `useLanguage()` from `@/context/LanguageContext`
- Produces: Hero with letter-by-letter name animation, typing title effect, 3-layer parallax background

- [ ] **Step 1: Replace Hero.tsx**

Replace `src/components/Hero.tsx`:
```tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function LetterByLetter({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

function TypingTitle({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setDisplayed(text)
      return
    }
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, 35)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [text, delay, reduced])

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: displayed.length < text.length ? Infinity : 3, duration: 0.6 }}
        className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
      />
    </span>
  )
}

export default function Hero() {
  const { content } = useLanguage()
  const { hero } = content
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -140])
  const y3 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">

      {/* Parallax Layer 1 — subtle dot grid */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          y: y3,
        }}
      />

      {/* Parallax Layer 2 — large faint circle top-right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-accent/5 pointer-events-none"
        aria-hidden="true"
      />

      {/* Parallax Layer 3 — diagonal lines bottom-left */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
          y: y1,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Portfolio
        </motion.p>

        <h1 className="font-heading text-6xl md:text-8xl font-bold text-text-primary mb-5 tracking-tight leading-none">
          <LetterByLetter text={hero.name} delay={0.2} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="font-body text-text-muted text-lg md:text-xl mb-4 tracking-wide min-h-[2rem]"
        >
          <TypingTitle text={hero.title} delay={1.3} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduced ? 0.3 : 2.8 }}
          className="font-body text-text-muted/70 text-base mb-10 max-w-xl mx-auto"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0.4 : 3.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            {hero.cta_work}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/10 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            {hero.cta_contact}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0.5 : 3.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-text-muted text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd "E:/Setup/AI/claude/portfolio" && npx tsc --noEmit 2>&1
```
Expected: No TypeScript errors.

- [ ] **Step 3: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/components/Hero.tsx && git commit -m "feat(ui): kinetic letter-by-letter hero, typing title, 3-layer parallax"
```

---

### Task 5: Experience Timeline — Pulse Dot + Directional Entrance

**Files:**
- Modify: `src/components/Experience.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `@/hooks/useReducedMotion`
- Produces: Timeline with pulsing gold dot on first/active item, cards slide from left

- [ ] **Step 1: Replace Experience.tsx**

Replace `src/components/Experience.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Experience() {
  const { content } = useLanguage()
  const { experience } = content
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="experience" className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {experience.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 top-2 bottom-2 w-px bg-accent/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0.1 : 1.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          <div className="space-y-10">
            {experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: reduced ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : i * 0.1, duration: reduced ? 0.2 : 0.5, ease: 'easeOut' }}
                className="relative pl-12"
              >
                {/* Timeline dot — pulse on first (current) item */}
                <div className="absolute left-[11px] top-1.5">
                  {i === 0 && !reduced && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
                      className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-accent"
                    />
                  )}
                  <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-primary relative z-10" />
                </div>

                <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent/40 transition-colors duration-200 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-200">{item.company}</h3>
                    <span className="text-xs font-body text-text-muted whitespace-nowrap bg-surface border border-border/60 px-2 py-0.5 rounded">{item.period}</span>
                  </div>
                  <p className="font-body text-accent text-sm mb-3 font-medium">{item.role}</p>
                  <ul className="space-y-1.5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="font-body text-text-muted text-sm flex gap-2">
                        <span className="text-accent mt-0.5 shrink-0 text-base leading-5">›</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/components/Experience.tsx && git commit -m "feat(ui): pulse dot on current role, directional slide entrance for timeline"
```

---

### Task 6: Projects Grid — Hard Offset Shadow + Stagger

**Files:**
- Modify: `src/components/Projects.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `@/hooks/useReducedMotion`
- Produces: Project cards with hard offset shadow hover, staggered entrance, featured first card larger

- [ ] **Step 1: Replace Projects.tsx**

Replace `src/components/Projects.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Projects() {
  const { content } = useLanguage()
  const { projects } = content
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="projects" className="py-24 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {projects.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : i * 0.1, duration: reduced ? 0.2 : 0.45, ease: 'easeOut' }}
              whileHover={reduced ? {} : { y: -6, transition: { duration: 0.2 } }}
              className={`group relative bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 cursor-default
                transition-shadow duration-200
                hover:shadow-[4px_4px_0px_0px_rgba(201,168,76,0.4)]
                hover:border-accent/50
                ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Featured badge on first card */}
              {i === 0 && (
                <span className="absolute top-4 right-4 text-[10px] font-body font-semibold text-primary bg-accent px-2 py-0.5 rounded tracking-wider uppercase">
                  Current
                </span>
              )}

              <div>
                <h3 className="font-heading text-base font-bold text-text-primary leading-tight group-hover:text-accent transition-colors duration-200 pr-16">
                  {project.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-body text-accent font-medium">{project.role}</span>
                  <span className="text-xs font-body text-text-muted">· {project.teamSize} members</span>
                </div>
              </div>

              <p className="font-body text-text-muted text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/50">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 text-[11px] font-body text-text-muted bg-primary border border-border rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/components/Projects.tsx && git commit -m "feat(ui): hard offset shadow hover, staggered entrance, featured badge on projects"
```

---

### Task 7: About, Skills, Certifications, Contact Polish

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/Skills.tsx`
- Modify: `src/components/Certifications.tsx`
- Modify: `src/components/Contact.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `@/hooks/useReducedMotion`
- Produces: Photo tilt on hover in About, accent bar on Skill card titles, input focus rings in Contact

- [ ] **Step 1: Update About.tsx — photo tilt, reduced motion gate**

Replace `src/components/About.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function About() {
  const { content } = useLanguage()
  const { about } = content
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {about.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Photo with tilt */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              whileHover={reduced ? {} : { rotate: -2, scale: 1.03 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative cursor-default"
            >
              <div className="w-56 h-56 rounded-lg overflow-hidden border-2 border-accent/30">
                <img
                  src="/photo.jpg"
                  alt="Vinh Pham — Senior Scrum Master and Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-56 h-56 border border-accent/20 rounded-lg -z-10" />
            </motion.div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="font-body text-text-muted leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}

            {/* Strength chips */}
            <div className="flex flex-wrap gap-2 pt-4">
              {about.strengths.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: reduced ? 1 : 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : i * 0.08, duration: reduced ? 0.2 : 0.3 }}
                  className="px-3 py-1 text-xs font-body font-semibold text-accent border border-accent/40 rounded-full bg-accent/5 tracking-wide"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 2: Update Skills.tsx — accent bar on group title**

Replace `src/components/Skills.tsx`:
```tsx
'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Skills() {
  const { content } = useLanguage()
  const { skills } = content
  const reduced = useReducedMotion()

  return (
    <AnimatedSection id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {skills.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.groups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduced ? 0 : gi * 0.15, duration: reduced ? 0.2 : 0.5 }}
              className="bg-primary border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-200"
            >
              {/* Accent bar + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-accent rounded-full shrink-0" />
                <h3 className="font-heading text-lg font-bold text-text-primary">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduced ? 0 : gi * 0.1 + si * 0.04, duration: 0.25 }}
                    className="px-2.5 py-1 text-xs font-body text-text-muted bg-surface border border-border rounded hover:border-accent/30 hover:text-accent transition-colors duration-150"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 3: Update Contact.tsx — focus rings on inputs**

Replace `src/components/Contact.tsx`:
```tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { content } = useLanguage()
  const { contact } = content
  const reduced = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  const inputClass = "w-full bg-surface border border-border rounded px-4 py-2.5 font-body text-text-primary text-sm focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors"

  return (
    <AnimatedSection id="contact" className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-4 text-center">
          {contact.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>
        <p className="font-body text-text-muted text-center mb-12">{contact.tagline}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'vinh.pt.vinh.pt@gmail.com', href: 'mailto:vinh.pt.vinh.pt@gmail.com' },
              { label: 'Phone', value: '0838 474 421', href: 'tel:0838474421' },
              { label: 'LinkedIn', value: 'linkedin.com/in/vpt3103', href: 'https://linkedin.com/in/vpt3103' },
              { label: 'GitHub', value: 'github.com/zeralot', href: 'https://github.com/zeralot' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: reduced ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : i * 0.1, duration: reduced ? 0.2 : 0.4 }}
                className="flex items-start gap-3 p-4 bg-surface border border-border rounded-lg hover:border-accent/40 transition-colors duration-200 group cursor-pointer"
              >
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">{item.label}</p>
                  <p className="font-body text-text-primary text-sm group-hover:text-accent transition-colors duration-200">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="contact-name" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.name_label}
              </label>
              <input
                id="contact-name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.email_label}
              </label>
              <input
                id="contact-email"
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.message_label}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className={inputClass + ' resize-none'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
            >
              {status === 'loading' ? '...' : contact.submit_label}
            </button>

            {status === 'success' && (
              <p role="status" className="font-body text-sm text-green-400 text-center">{contact.success_msg}</p>
            )}
            {status === 'error' && (
              <p role="alert" className="font-body text-sm text-red-400 text-center">{contact.error_msg}</p>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
```

- [ ] **Step 4: Build check**

```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd "E:/Setup/AI/claude/portfolio" && npm run build 2>&1 | tail -20
```
Expected: Build completes with no errors.

- [ ] **Step 5: Commit**

```bash
cd "E:/Setup/AI/claude/portfolio" && git add src/components/About.tsx src/components/Skills.tsx src/components/Contact.tsx && git commit -m "feat(ui): photo tilt in About, accent bar in Skills, accessible inputs in Contact"
```

---

### Task 8: Deploy

**Files:** No code changes

- [ ] **Step 1: Push to GitHub**

```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd "E:/Setup/AI/claude/portfolio" && git push origin master 2>&1
```
Expected: `master -> master` pushed successfully.

- [ ] **Step 2: Verify Vercel auto-deploys**

Vercel watches the `master` branch — a new deployment will start automatically within 30 seconds of the push. Visit the Vercel dashboard to confirm "Building" status then "Ready".

- [ ] **Step 3: Smoke test the live site**

Visit the live URL and verify:
- Fonts look sharper (Space Grotesk body, Archivo headings)
- Hero name animates letter by letter, title types out
- Scroll progress bar appears at top of page
- Timeline first dot pulses gold
- Project cards lift with gold shadow on hover
- Language toggle EN/VI still works
- Contact form inputs show gold focus ring on click
