'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const experienceLinks = [
  { label: 'Finest Tables', href: '/finest-tables' },
  { label: 'Wine Tasting', href: '/wine-tasting' },
  { label: 'Cooking Classes', href: '/cooking-classes' },
  { label: 'Villa by Boat', href: '/villa-boat' },
  { label: 'Concierge', href: '/concierge' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    handler() // capture initial scroll position (e.g. browser back-forward)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Anchor links (Philosophy, Contact) scroll smoothly on homepage,
  // navigate to the homepage anchor from any other page.
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  const navText = scrolled ? 'text-[#1C2B35]' : 'text-white/85'
  const expText = scrolled ? 'text-[#1C2B35]/70' : 'text-white/65'
  const sep    = scrolled ? 'bg-[#B8966E]/35' : 'bg-white/25'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F4]/96 backdrop-blur-sm shadow-[0_1px_0_0_rgba(28,43,53,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-base tracking-[0.18em] uppercase shrink-0 transition-colors duration-500 ${
            scrolled ? 'text-[#1C2B35]' : 'text-white'
          }`}
        >
          Bellagio Italy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">

          <a
            href="/#philosophy"
            onClick={(e) => handleAnchor(e, 'philosophy')}
            className={`font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[#B8966E] ${navText}`}
          >
            Philosophy
          </a>

          <span className={`w-px h-3 shrink-0 transition-colors duration-500 ${sep}`} />

          {experienceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#B8966E] ${expText}`}
            >
              {link.label}
            </Link>
          ))}

          <span className={`w-px h-3 shrink-0 transition-colors duration-500 ${sep}`} />

          <a
            href="/#contact"
            onClick={(e) => handleAnchor(e, 'contact')}
            className={`font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[#B8966E] ${navText}`}
          >
            Contact
          </a>

          <a
            href="/#contact"
            onClick={(e) => handleAnchor(e, 'contact')}
            className="font-body text-[10px] tracking-[0.18em] uppercase bg-[#B8966E] text-white px-5 py-2.5 hover:bg-[#9A7A58] transition-colors duration-300 shrink-0"
          >
            Talk to Us
          </a>
        </nav>

        {/* Mobile CTA */}
        <a
          href="/#contact"
          onClick={(e) => handleAnchor(e, 'contact')}
          className="lg:hidden font-body text-[10px] tracking-[0.15em] uppercase bg-[#B8966E] text-white px-4 py-2 hover:bg-[#9A7A58] transition-colors shrink-0"
        >
          Talk to Us
        </a>
      </div>
    </header>
  )
}
