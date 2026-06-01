'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { TESTIMONIALS } from '@/lib/data'

export function TestimonialsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-label mb-5">Client Testimonials</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              Trusted by Businesses
              <span className="text-gold-400 italic"> Worldwide</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed">
              Honest words from business owners and executives who have experienced the difference that premium operational support makes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aggregate rating */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="font-serif text-6xl text-navy-900 font-medium">5.0</div>
              <div className="flex items-center justify-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-sans text-xs text-charcoal/50 mt-2 tracking-wide">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block" />
            {[
              { value: '🇺🇸 USA', label: 'United States' },
              { value: '🇬🇧 UK', label: 'United Kingdom' },
              { value: '🇦🇺 AUS', label: 'Australia' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl text-navy-900 font-medium">{value}</div>
                <p className="font-sans text-xs text-charcoal/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="border border-gray-100 p-8 relative group hover:shadow-lg hover:border-gold-400/20 transition-all duration-300 flex flex-col"
              >
                <Quote
                  size={32}
                  className="text-gold-400/15 absolute top-6 right-6 group-hover:text-gold-400/30 transition-colors duration-300"
                />
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <div className="font-sans font-medium text-navy-900 text-sm">{t.name}</div>
                  <div className="font-sans text-xs text-charcoal/50 mt-0.5">{t.role}</div>
                  <div className="font-sans text-xs text-charcoal/40">{t.company}</div>
                  <div className="font-sans text-xs text-gold-400 mt-2 font-medium">
                    {t.flag} {t.country}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
