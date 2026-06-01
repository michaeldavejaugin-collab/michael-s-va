'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { PORTFOLIO } from '@/lib/data'

export function PortfolioPageClient() {
  const project = PORTFOLIO[0]

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
            <p className="section-label mb-5">Portfolio</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              Real Projects,
              <span className="text-gold-400 italic"> Real Results</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed">
              Every engagement tells a story of challenges overcome, systems built, and measurable improvements delivered. Here is a selection of featured work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Featured Case Study</p>
            <div className="divider-gold mb-6" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-medium leading-tight mb-3">
                  {project.title}
                </h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 font-sans text-sm hover:text-gold-300 transition-colors"
                >
                  Visit {project.client} <ExternalLink size={13} />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-sans text-xs bg-navy-900 text-white/70 px-3 py-1.5 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 mb-16"
          >
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white p-8 text-center">
                <div className="font-serif text-4xl md:text-5xl text-gold-400 font-medium">{m.value}</div>
                <div className="font-sans text-xs text-charcoal/50 mt-2 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Case study body */}
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                label: 'The Challenge',
                content: project.challenge,
                accent: false,
              },
              {
                label: 'The Solution',
                content: project.solution,
                accent: false,
              },
              {
                label: 'The Outcome',
                content: project.outcome,
                accent: true,
              },
            ].map(({ label, content, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={accent ? 'bg-navy-900 p-8 -mx-0' : ''}
              >
                <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-4">
                  {label}
                </p>
                <div className="divider-gold mb-5" />
                <p className={`font-sans text-base leading-relaxed ${accent ? 'text-white/70' : 'text-charcoal/65'}`}>
                  {content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visit site */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="font-serif text-xl text-navy-900 font-medium">See the live result</p>
              <p className="font-sans text-sm text-charcoal/50 mt-1">Visit gsworkwear.com to see the operational improvements in action.</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Visit GS Workwear <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Additional projects placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <p className="section-label mb-4">More Work</p>
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-navy-900 font-medium mb-4">
            Additional Projects
            <span className="text-gold-400 italic"> Available on Request</span>
          </h2>
          <p className="font-sans text-base text-charcoal/60 max-w-xl mx-auto mb-8">
            Due to NDA agreements with several clients, not all projects can be publicly showcased. I am happy to discuss additional work samples during a discovery call.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Portfolio Details <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
