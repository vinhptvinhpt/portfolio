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
              className="group relative bg-surface border border-border rounded-lg p-5 flex flex-col gap-3 cursor-default transition-shadow duration-200 hover:shadow-[4px_4px_0px_0px_rgba(201,168,76,0.4)] hover:border-accent/50"
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
