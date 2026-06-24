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
