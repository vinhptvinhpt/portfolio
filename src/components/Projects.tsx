'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { content } = useLanguage()
  const { projects } = content

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 0 0 1px #C9A84C40' }}
              className="bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 cursor-default"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-text-primary leading-tight">{project.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-body text-accent">{project.role}</span>
                  <span className="text-xs font-body text-text-muted">· {project.teamSize} members</span>
                </div>
              </div>
              <p className="font-body text-text-muted text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 text-xs font-body text-text-muted bg-primary border border-border rounded">
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
