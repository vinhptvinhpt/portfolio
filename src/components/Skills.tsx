'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { content } = useLanguage()
  const { skills } = content

  return (
    <AnimatedSection id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {skills.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.groups.map((group, gi) => (
            <div key={gi} className="bg-primary border border-border rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-accent mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.04 }}
                    className="px-2.5 py-1 text-xs font-body text-text-muted bg-surface border border-border rounded"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
