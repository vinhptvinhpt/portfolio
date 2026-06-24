import type { SiteContent } from './types'

export const en: SiteContent = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
  },
  hero: {
    name: 'VINH PHAM',
    title: 'Senior Scrum Master · RTE · Delivery Manager · Developer',
    tagline: 'Bridging agile leadership and technical depth to deliver at scale.',
    cta_work: 'View My Work',
    cta_contact: 'Contact Me',
  },
  about: {
    heading: 'About Me',
    bio: [
      'I am a Senior Scrum Master and Release Train Engineer with over 7 years of experience leading agile transformations in banking, education, and technology sectors.',
      'Currently at ABBANK, I lead 5 squads across 6 ARTs in a SAFe 6.0 environment, managing 190+ in-house and outsourced team members in the Retail Digital Banking division.',
      'My background spans both delivery leadership and full-stack development — giving me a rare ability to align business strategy, engineering teams, and product outcomes.',
    ],
    strengths: ['SAFe 6.0 RTE', 'PSM II', 'LeSS', 'Full-stack Dev', '7+ Years', '190+ Team Members'],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        company: 'ABBANK',
        period: 'Apr 2024 – Present',
        role: 'Senior Scrum Master / RTE — Retail Digital Banking ART · SAFe 6.0',
        bullets: [
          'Concurrently served as Project Manager of eKYC/OCR integration project.',
          'Applied SAFe 6.0 to drive agile transformation across 190+ team members.',
          'Managed 5 squads (13 members/squad) across Onboarding, eKYC, RAR-C06, S&I, Lending, Account, and Family Banking.',
          'Led ART across 6 squads — drove synchronized PI Planning, cross-squad delivery, and continuous alignment.',
        ],
      },
      {
        company: 'OpenCommerce Group',
        period: 'Mar 2023 – Mar 2024',
        role: 'Senior Scrum Master · LeSS',
        bullets: [
          'Managed 3 teams (45 members total): Front (Storefront), Plusbase, and Printbase.',
          'Oversaw full lifecycle of multiple projects using Scrum methodology.',
          'Collaborated with business stakeholders (CSM, Operations) and engineering teams to define deliverables and schedules.',
        ],
      },
      {
        company: 'TinhVan Education',
        period: 'May 2019 – Mar 2023',
        role: 'Project Manager / Scrum Master · Full-stack Developer',
        bullets: [
          'Led 6 projects as Scrum Master or Project Manager for private enterprises and government agencies.',
          'Transitioned QA department from Waterfall to Agile Scrum methodology.',
          'Managed Jira and Confluence implementation company-wide.',
          'Full-stack developer on 8 projects — design, coding, unit testing, defect resolution, server deployment.',
        ],
      },
      {
        company: 'FPT Software',
        period: 'Apr 2018 – May 2019',
        role: 'Developer',
        bullets: [
          'Developed J-PROCURE (JFE system, e-commerce & internal management) — team of 40, Struts 1, Oracle.',
          'Developed TRMS for Toppan Printing Co. (internal report system) — team of 20, Django, Angular 7.',
        ],
      },
      {
        company: 'Information Security Project',
        period: 'Nov 2018 – May 2019',
        role: 'Team Leader',
        bullets: [
          'Led security impact assessment of Drupalgeddon 2 on the Internet.',
          'Collected 10M+ sites dataset; filtered 140K Drupal sites; developed CVE 2018-7600 / 2019-6340 detection tool.',
        ],
      },
      {
        company: 'CMC Infosec',
        period: 'Nov 2017 – Apr 2018',
        role: 'Penetration Tester (Internship)',
        bullets: [
          'Conducted comprehensive security evaluations of computer systems and web applications.',
          'Performed risk assessments on Linux, Kali, Windows Server networks and security devices.',
        ],
      },
      {
        company: 'Freelancer',
        period: 'Ongoing',
        role: 'Team Leader / Developer',
        bullets: [
          'Led small teams building landing pages, e-commerce platforms, and e-learning portals.',
          'Stack: WooCommerce, WordPress, Moodle, PHP, Python, MySQL, MongoDB, Docker, Nginx.',
        ],
      },
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        title: 'Agile & Delivery',
        skills: ['SAFe 6.0', 'Scrum', 'LeSS', 'Kanban', 'PI Planning', 'OKR', 'Spotify Model', 'Risk Management', 'Stakeholder Management'],
      },
      {
        title: 'Technical',
        skills: ['PHP', 'Python', 'Java Core', 'C', 'Laravel', 'Vue.js', 'Django', 'Docker', 'MySQL', 'MongoDB', 'Oracle', 'Nginx', 'Apache', 'Git'],
      },
      {
        title: 'Tools',
        skills: ['Jira', 'Confluence', 'Figma', 'Miro', 'Postman', 'JMeter', 'OWASP ZAP', 'Trello', 'ClickUp', 'MS Office', 'Canva'],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    items: [
      {
        name: 'Retail Digital Banking ART — ABBANK',
        role: 'RTE',
        teamSize: 80,
        tech: ['SAFe 6.0', 'Jira', 'Confluence'],
        description: 'Led 6 squads across Onboarding, eKYC, S&I, Lending, Account & Family Banking in synchronized PI Planning.',
      },
      {
        name: 'eKYC/OCR Integration — ABBANK',
        role: 'Project Manager',
        teamSize: 13,
        tech: ['eKYC', 'OCR', 'Agile'],
        description: 'Managed end-to-end delivery of digital onboarding identity verification system for retail banking.',
      },
      {
        name: 'Libol Bookworm — Vietnam National University',
        role: 'Project Manager',
        teamSize: 15,
        tech: ['Libol', '.NET'],
        description: 'Library management system for Vietnam National University.',
      },
      {
        name: "Etesting — People's Security Academy",
        role: 'Scrum Master',
        teamSize: 12,
        tech: ['MongoDB', 'Docker', 'Laravel', 'HiFace TinhVan'],
        description: "Online examination platform for the People's Security Academy.",
      },
      {
        name: 'ULIS Elearning System',
        role: 'Team Leader',
        teamSize: 13,
        tech: ['C#', 'Laravel', 'VMware vCenter', 'HAProxy', 'Nginx', 'MySQL'],
        description: 'E-learning system for the University of Languages and International Studies.',
      },
      {
        name: 'AIC Smartschool — 13 Northern Provinces',
        role: 'Developer',
        teamSize: 13,
        tech: ['Laravel', 'Amazon S3', 'Docker'],
        description: 'Smart school platform deployed across 13 northern provinces of Vietnam.',
      },
    ],
  },
  certifications: {
    heading: 'Certifications & Awards',
    certs_title: 'Certifications',
    awards_title: 'Honors & Awards',
    certs: [
      { name: 'Professional Scrum Master™ II (PSM II)', issuer: 'Scrum.org' },
      { name: 'IBM IT Scrum Master', issuer: 'IBM' },
      { name: 'SQL (Advanced) Certificate', issuer: 'HackerRank' },
    ],
    awards: [
      { title: 'Transformation Star — Digital & Core Tech Workstream', year: '2024' },
      { title: 'Best Team of Open Commerce Group #front team', year: '2023' },
      { title: 'Best Project Manager — TinhVan Group', year: '2021' },
      { title: 'Top 5 IT Student — Student Achievement Award Summer Semester', year: '2019' },
      { title: 'High Performance Developer — J-PROCURE Project, FPT Software', year: '2018' },
      { title: 'Java Red Developer — FPT University', year: '2016' },
      { title: 'C Red Developer — FPT University', year: '2016' },
    ],
  },
  contact: {
    heading: 'Get In Touch',
    tagline: 'Open to new opportunities and interesting projects.',
    name_label: 'Your Name',
    email_label: 'Your Email',
    message_label: 'Message',
    submit_label: 'Send Message',
    success_msg: "Message sent! I'll get back to you soon.",
    error_msg: 'Something went wrong. Please try again or email me directly.',
  },
}
