'use client'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function AnimatedSection({ children, id, className }: Props) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
