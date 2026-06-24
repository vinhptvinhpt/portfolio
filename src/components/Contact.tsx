'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { content } = useLanguage()
  const { contact } = content
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-surface border border-border rounded-lg hover:border-accent/40 transition-colors group"
              >
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">{item.label}</p>
                  <p className="font-body text-text-primary text-sm group-hover:text-accent transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1">{contact.name_label}</label>
              <input
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-surface border border-border rounded px-4 py-2.5 font-body text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1">{contact.email_label}</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-surface border border-border rounded px-4 py-2.5 font-body text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs text-text-muted uppercase tracking-wider block mb-1">{contact.message_label}</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-surface border border-border rounded px-4 py-2.5 font-body text-text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-3 bg-accent text-primary font-body font-semibold text-sm tracking-wider uppercase rounded hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : contact.submit_label}
            </button>

            {status === 'success' && (
              <p className="font-body text-sm text-green-400 text-center">{contact.success_msg}</p>
            )}
            {status === 'error' && (
              <p className="font-body text-sm text-red-400 text-center">{contact.error_msg}</p>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
