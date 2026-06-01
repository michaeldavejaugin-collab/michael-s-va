'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Users, Globe2 } from 'lucide-react'

export function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-navy-900 relative overflow-hidden">
              {/* Decorative placeholder (replace with actual photo) */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-serif text-7xl font-medium text-white/10">MDJ</div>
                <div className="mt-4 w-16 h-px bg-gold-400/40" />
                <div className="mt-4 font-sans text-xs text-white/20 tracking-[0.3em] uppercase">Michael Dave Jaugin</div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-gold-400" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-gold-400" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-2xl border-l-2 border-gold-400">
              <div className="font-serif text-4xl text-navy-900 font-medium">4+</div>
              <div className="font-sans text-xs text-charcoal/60 uppercase tracking-wider mt-1">Years of Premium VA Experience</div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">About Me</p>
            <div className="divider-gold mb-6" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy-900 leading-tight text-balance mb-6">
              A Specialist You Can
              <span className="text-gold-400 italic"> Build On</span>
            </h2>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-5">
              With 4+ years as a virtual assistant and 2 years leading teams, I bring the rare combination of hands-on execution ability and strategic operational thinking to every client engagement.
            </p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-8">
              I have built my expertise across e-commerce, Shopify management, lead generation, and website development — working with businesses that needed not just support, but a trusted operational partner.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Briefcase, text: '4+ years of Virtual Assistance excellence' },
                { icon: Users, text: '2 years of Team Leadership experience' },
                { icon: Globe2, text: 'Serving clients in US, UK, Australia & beyond' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-gold-400" />
                  </div>
                  <span className="font-sans text-sm text-charcoal/70">{text}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Read My Story <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
