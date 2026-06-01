'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-5">Ready to Start?</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight text-balance mb-6">
            Let&rsquo;s Build Something
            <span className="text-gold-400 italic"> Exceptional</span>
          </h2>
          <p className="font-sans text-lg text-white/50 max-w-xl mx-auto mb-10">
            Book a free discovery call and let&rsquo;s explore how I can support your business goals — no pressure, just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Discovery Call <Calendar size={15} />
            </Link>
            <Link href="/pricing" className="btn-outline-white">
              View Pricing <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
