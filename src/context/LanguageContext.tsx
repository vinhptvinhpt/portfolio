'use client'
import { createContext, useContext, useState } from 'react'
import { en } from '@/data/en'
import { vi } from '@/data/vi'
import type { SiteContent } from '@/data/types'

interface LanguageContextValue {
  content: SiteContent
  lang: 'en' | 'vi'
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'en' | 'vi'>('en')
  const content = lang === 'en' ? en : vi
  const toggle = () => setLang(l => l === 'en' ? 'vi' : 'en')
  return (
    <LanguageContext.Provider value={{ content, lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
