'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Monitor, ShoppingCart, Store, Globe, TrendingUp, Settings, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SERVICES } from '@/lib/data'

const ICONS: Record<string, React.ElementType> = {
  Monitor,
  ShoppingCart,
  Store,
  Globe,
  TrendingUp,
  Settings,
}

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          label="What I Do"
          title="Specialist Services for"
          titleHighlight="Global Businesses"
          subtitle="From day-to-day operational support to full e-commerce management — I provide the expertise your business needs to run smoothly and scale with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-8 lg:p-10 group hover:bg-navy-900 transition-all duration-500"
              >
                <div className="w-10 h-10 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                  <Icon size={18} className="group-hover:text-navy-900 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-medium text-navy-900 group-hover:text-white transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-charcoal/60 group-hover:text-white/60 transition-colors duration-300 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-sans font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={13} />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline">
            View All Services <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
