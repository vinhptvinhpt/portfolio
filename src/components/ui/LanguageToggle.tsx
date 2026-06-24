'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage()
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 text-sm font-body text-text-muted hover:text-accent transition-colors"
      aria-label="Toggle language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2 }}
        >
          {lang === 'en' ? 'VI' : 'EN'}
        </motion.span>
      </AnimatePresence>
      <span className="text-border mx-1">|</span>
      <span className="text-accent font-medium">{lang.toUpperCase()}</span>
    </button>
  )
}
