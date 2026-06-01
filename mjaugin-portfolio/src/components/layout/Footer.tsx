import Link from 'next/link'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-5 inline-block">
              <span className="font-serif text-white text-2xl font-medium">Michael Dave Jaugin</span>
              <span className="font-sans text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mt-1">
                Virtual Operations & E-commerce Specialist
              </span>
            </Link>
            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-sm mt-4">
              Delivering premium operational support and e-commerce expertise to ambitious businesses across the US, UK, Australia, and beyond.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:hello@michaeldavejaugin.com"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold-400 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-gold-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {['Virtual Assistance', 'E-commerce Operations', 'Shopify Management', 'Website Development', 'Lead Generation', 'Operations Support'].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © {year} Michael Dave Jaugin. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@michaeldavejaugin.com"
              className="font-sans text-xs text-white/40 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1"
            >
              hello@michaeldavejaugin.com <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
