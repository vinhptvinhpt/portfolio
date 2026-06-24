'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { content } = useLanguage()
  const { contact } = content
  const reduced = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  const inputClass = "w-full bg-surface border border-border rounded px-4 py-2.5 font-body text-text-primary text-sm focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 transition-colors"

  return (
    <AnimatedSection id="contact" className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl font-bold text-text-primary mb-4 text-center">
          {contact.heading}
          <div className="w-16 h-px bg-accent mx-auto mt-4" />
        </h2>
        <p className="font-body text-text-muted text-center mb-12">{contact.tagline}</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'vinh.pt.vinh.pt@gmail.com', href: 'mailto:vinh.pt.vinh.pt@gmail.com' },
              { label: 'Phone', value: '0838 474 421', href: 'tel:0838474421' },
              { label: 'LinkedIn', value: 'linkedin.com/in/vpt3103', href: 'https://linkedin.com/in/vpt3103' },
              { label: 'GitHub', value: 'github.com/zeralot', href: 'https://github.com/zeralot' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: reduced ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : i * 0.1, duration: reduced ? 0.2 : 0.4 }}
                className="flex items-start gap-3 p-4 bg-surface border border-border rounded-lg hover:border-accent/40 transition-colors duration-200 group"
              >
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">{item.label}</p>
                  <p className="font-body text-text-primary text-sm group-hover:text-accent transition-colors duration-200">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="contact-name" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.name_label}
              </label>
              <input
                id="contact-name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.email_label}
              </label>
              <input
                id="contact-email"
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1.5">
                {contact.message_label}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className={inputClass + ' resize-none'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
            >
              {status === 'loading' ? '...' : contact.submit_label}
            </button>

            {status === 'success' && (
              <p role="status" className="font-body text-sm text-green-400 text-center">{contact.success_msg}</p>
            )}
            {status === 'error' && (
              <p role="alert" className="font-body text-sm text-red-400 text-center">{contact.error_msg}</p>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
