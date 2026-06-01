'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Monitor, ShoppingCart, Store, Globe, TrendingUp, Settings, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CtaSection } from '@/components/sections/CtaSection'
import { SERVICES } from '@/lib/data'

const ICONS: Record<string, React.ElementType> = {
  Monitor, ShoppingCart, Store, Globe, TrendingUp, Settings,
}

export function ServicesPageClient() {
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
            <p className="section-label mb-5">Services</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              Premium Support for
              <span className="text-gold-400 italic"> Ambitious Businesses</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed max-w-2xl">
              Every service is delivered with the same standard: meticulous attention, proactive communication, and outcomes that actually move your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-px bg-gray-100">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white grid md:grid-cols-2 lg:grid-cols-5"
                >
                  {/* Left */}
                  <div className="lg:col-span-2 p-10 border-r border-gray-100">
                    <div className="w-12 h-12 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-6">
                      <Icon size={20} />
                    </div>
                    <h2 className="font-serif text-2xl text-navy-900 font-medium mb-4">{service.title}</h2>
                    <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-6">{service.description}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-sans font-medium tracking-wide hover:gap-3 transition-all duration-200">
                      Get Started <ArrowRight size={13} />
                    </Link>
                  </div>
                  {/* Right — features */}
                  <div className="lg:col-span-3 p-10 bg-gray-50/50">
                    <p className="font-sans text-xs text-gold-400 tracking-[0.2em] uppercase mb-5">What&rsquo;s Included</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-charcoal/65">
                          <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <SectionHeader
            label="How It Works"
            title="A Simple, Structured"
            titleHighlight="Onboarding Process"
            subtitle="Getting started is easy. Here is how we go from first conversation to full operational support."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {[
              { step: '01', title: 'Discovery Call', desc: 'We discuss your needs, goals, and current challenges in a free 30-minute call.' },
              { step: '02', title: 'Proposal & Agreement', desc: 'I put together a tailored scope of work and pricing proposal for your review.' },
              { step: '03', title: 'Onboarding', desc: 'Access is granted, SOPs are documented, and we align on communication protocols.' },
              { step: '04', title: 'Execution & Reporting', desc: 'I begin work immediately, reporting progress regularly and proactively.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-navy-900 p-8 lg:p-10"
              >
                <div className="font-serif text-5xl text-gold-400/20 font-medium mb-5">{s.step}</div>
                <h3 className="font-serif text-white text-xl font-medium mb-3">{s.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
