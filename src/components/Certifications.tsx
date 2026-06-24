'use client'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Certifications() {
  const { content } = useLanguage()
  const { certifications: c } = content

  return (
    <AnimatedSection id="certifications" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-12 text-center">
          {c.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-6">{c.certs_title}</h3>
            <div className="space-y-4">
              {c.certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-primary border border-border rounded-lg"
                >
                  <span className="text-accent text-lg mt-0.5">✦</span>
                  <div>
                    <p className="font-body text-text-primary text-sm font-medium">{cert.name}</p>
                    <p className="font-body text-text-muted text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-6">{c.awards_title}</h3>
            <div className="space-y-3">
              {c.awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start justify-between gap-4 py-3 border-b border-border"
                >
                  <p className="font-body text-text-muted text-sm">{award.title}</p>
                  <span className="font-body text-accent text-sm font-medium shrink-0">{award.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
