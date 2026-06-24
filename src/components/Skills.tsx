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
