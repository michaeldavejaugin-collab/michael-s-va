'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Globe2, BarChart3, Shield, Zap } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const REASONS = [
  {
    icon: CheckCircle2,
    title: 'Results-Driven Approach',
    description: 'Every task I take on has a clear objective. I measure success in outcomes — not hours logged.',
  },
  {
    icon: Globe2,
    title: 'International Business Fluency',
    description: 'Experienced working with clients across US, UK, and Australian markets — timezone-aware and culturally fluent.',
  },
  {
    icon: Zap,
    title: 'Self-Directed & Proactive',
    description: 'I identify problems before they escalate and surface solutions without being asked. True operational ownership.',
  },
  {
    icon: Clock,
    title: 'Reliable & Responsive',
    description: 'Fast turnarounds, clear communication, and commitments I keep. You will always know where things stand.',
  },
  {
    icon: BarChart3,
    title: 'Systems Thinker',
    description: 'I build documented processes and SOPs that outlast our engagement, leaving your business stronger.',
  },
  {
    icon: Shield,
    title: 'Confidentiality & Trust',
    description: 'I operate with the discretion and professionalism of a trusted executive partner. Your data is safe.',
  },
]

export function WhyWorkWithMe() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container-wide relative z-10">
        <SectionHeader
          label="Why Choose Me"
          title="The Standard You Can"
          titleHighlight="Expect"
          subtitle="Working with me means partnering with someone who takes your business as seriously as you do."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-white/10 p-7 hover:border-gold-400/40 transition-all duration-300 group"
              >
                <Icon
                  size={22}
                  className="text-gold-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-serif text-white text-lg font-medium mb-3">
                  {reason.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
