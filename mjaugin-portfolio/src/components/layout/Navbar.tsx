'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/data'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-white text-xl font-medium tracking-tight group-hover:text-gold-400 transition-colors duration-300">
              Michael Dave
            </span>
            <span className="font-sans text-gold-400 text-xs tracking-[0.25em] uppercase font-medium">
              Jaugin
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.filter(item => item.href !== '/').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-sans text-sm font-medium tracking-wide transition-all duration-200 relative group',
                  pathname === item.href
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300',
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-xs"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-gold-400 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-sans text-base font-medium transition-colors duration-200',
                pathname === item.href ? 'text-gold-400' : 'text-white/70 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm w-fit mt-2">
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}
