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
