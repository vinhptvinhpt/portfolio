export interface ExperienceItem {
  company: string
  period: string
  role: string
  bullets: string[]
}

export interface ProjectItem {
  name: string
  role: string
  teamSize: number
  tech: string[]
  description: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface CertItem {
  name: string
  issuer: string
}

export interface AwardItem {
  title: string
  year: string
}

export interface SiteContent {
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    certifications: string
    contact: string
  }
  hero: {
    name: string
    title: string
    tagline: string
    cta_work: string
    cta_contact: string
  }
  about: {
    heading: string
    bio: string[]
    strengths: string[]
  }
  experience: {
    heading: string
    items: ExperienceItem[]
  }
  skills: {
    heading: string
    groups: SkillGroup[]
  }
  projects: {
    heading: string
    items: ProjectItem[]
  }
  certifications: {
    heading: string
    certs_title: string
    awards_title: string
    certs: CertItem[]
    awards: AwardItem[]
  }
  contact: {
    heading: string
    tagline: string
    name_label: string
    email_label: string
    message_label: string
    submit_label: string
    success_msg: string
    error_msg: string
  }
}
