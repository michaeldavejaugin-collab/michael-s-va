'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PORTFOLIO } from '@/lib/data'

export function PortfolioPreview() {
  const project = PORTFOLIO[0]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <SectionHeader
          label="Featured Work"
          title="Results That"
          titleHighlight="Speak Loudly"
          subtitle="Case studies from real client engagements with measurable outcomes."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-0 bg-navy-900 overflow-hidden"
        >
          {/* Left — project info */}
          <div className="p-10 lg:p-14">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs bg-white/10 text-white/60 px-3 py-1 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-4 leading-snug">
              {project.title}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-sans tracking-wide hover:text-gold-300 transition-colors mb-8"
            >
              {project.client} <ExternalLink size={11} />
            </a>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.metrics.map((m) => (
                <div key={m.label} className="border border-white/10 p-4">
                  <div className="font-serif text-2xl text-gold-400 font-medium">{m.value}</div>
                  <div className="font-sans text-xs text-white/40 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <Link href="/portfolio" className="btn-outline">
              Read Full Case Study <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — challenge/solution */}
          <div className="border-l border-white/10 p-10 lg:p-14 flex flex-col gap-7">
            {[
              { label: 'Challenge', content: project.challenge },
              { label: 'Solution', content: project.solution },
            ].map(({ label, content }) => (
              <div key={label}>
                <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">
                  {label}
                </p>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {content.substring(0, 180)}…
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
