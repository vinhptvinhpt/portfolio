'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function AnimatedSection({ children, id, className }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduced ? 0.2 : 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
