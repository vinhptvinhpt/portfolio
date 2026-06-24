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
