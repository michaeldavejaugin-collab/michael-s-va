'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/lib/data'

export function TestimonialsPreview() {
  const featured = TESTIMONIALS.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          label="Client Voices"
          title="What Clients Say About"
          titleHighlight="Working Together"
          subtitle="Real results from real businesses across three continents."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-100 p-8 relative group hover:border-gold-400/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote
                size={28}
                className="text-gold-400/20 absolute top-6 right-6 group-hover:text-gold-400/40 transition-colors duration-300"
              />
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5">
                <div className="font-sans font-medium text-navy-900 text-sm">{t.name}</div>
                <div className="font-sans text-xs text-charcoal/50 mt-0.5">{t.role}, {t.company}</div>
                <div className="font-sans text-xs text-gold-400 mt-1">
                  {t.flag} {t.country}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/testimonials" className="btn-outline">
            Read All Testimonials <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
