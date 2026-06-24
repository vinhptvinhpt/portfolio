export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-primary text-center">
      <p className="font-body text-text-muted text-xs">
        © {new Date().getFullYear()} Vinh Pham · Built with Next.js & Framer Motion
      </p>
    </footer>
  )
}
