'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { content } = useLanguage()
  const { hero } = content

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background grid decoration */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-6xl md:text-8xl font-bold text-text-primary mb-4 tracking-tight"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-text-muted text-lg md:text-xl mb-4 tracking-wide"
        >
          {hero.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-text-muted/70 text-base mb-10 max-w-xl mx-auto"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 transition-colors"
          >
            {hero.cta_work}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/10 transition-colors"
          >
            {hero.cta_contact}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
