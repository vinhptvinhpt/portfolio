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

  const done = displayed.length >= text.length

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
        />
      )}
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
        style={{
          y: y3,
          backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
      />

      {/* Parallax Layer 2 — large faint circle top-right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-accent/5 pointer-events-none"
        aria-hidden="true"
      />

      {/* Parallax Layer 3 — diagonal lines bottom-left */}
      <motion.div
        style={{
          y: y1,
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
        className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
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
            className="px-8 py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 active:scale-95 transition-all duration-150"
          >
            {hero.cta_work}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/10 active:scale-95 transition-all duration-150"
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
