'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { PRICING } from '@/lib/data'
import { cn } from '@/lib/utils'

const FAQ = [
  {
    q: 'Can I start with a smaller commitment?',
    a: 'Absolutely. The Essential Support tier is designed for businesses that want to test the engagement before scaling up. You can upgrade at any time.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'All engagements are month-to-month. I earn your continued business through results, not lock-in clauses. 30 days notice is all that is required.',
  },
  {
    q: 'What time zone do you work in?',
    a: 'I am based in the Philippines (PHT) but work flexibly with clients across US, UK, and Australian time zones. We agree on overlap hours during onboarding.',
  },
  {
    q: 'What tools and platforms do you use?',
    a: 'Shopify, WordPress, Asana, Trello, Notion, HubSpot, Slack, Google Workspace, Canva, and many more. I adapt to your existing stack quickly.',
  },
  {
    q: 'Do hours roll over?',
    a: 'Hours do not roll over between months, but I always work efficiently to ensure every hour delivers maximum value. Unused hours are rare.',
  },
]

export function PricingPageClient() {
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
            <p className="section-label mb-5">Pricing</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              Transparent Investment,
              <span className="text-gold-400 italic"> Clear Value</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed max-w-2xl">
              No hidden fees, no surprises. Three tiers built around where your business is and where you want to go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {PRICING.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'flex flex-col p-10',
                  tier.highlighted ? 'bg-navy-900' : 'bg-white'
                )}
              >
                {/* Badge */}
                {tier.highlighted && (
                  <div className="inline-flex items-center self-start bg-gold-400 text-navy-900 px-3 py-1 text-xs font-sans font-medium tracking-wide mb-5">
                    {tier.tagline}
                  </div>
                )}
                {!tier.highlighted && (
                  <div className="h-7 mb-5" />
                )}

                <p className={cn(
                  'font-sans text-xs tracking-[0.2em] uppercase mb-2 font-medium',
                  tier.highlighted ? 'text-gold-400' : 'text-gold-400'
                )}>
                  {tier.name}
                </p>

                <div className="mb-4">
                  <span className={cn(
                    'font-serif text-5xl font-medium',
                    tier.highlighted ? 'text-white' : 'text-navy-900'
                  )}>
                    {tier.price}
                  </span>
                  <span className={cn(
                    'font-sans text-sm ml-1',
                    tier.highlighted ? 'text-white/50' : 'text-charcoal/50'
                  )}>
                    {tier.period}
                  </span>
                </div>

                <p className={cn(
                  'font-sans text-sm leading-relaxed mb-8',
                  tier.highlighted ? 'text-white/60' : 'text-charcoal/60'
                )}>
                  {tier.description}
                </p>

                <div className={cn(
                  'w-full h-px mb-8',
                  tier.highlighted ? 'bg-white/10' : 'bg-gray-100'
                )} />

                <ul className="space-y-3 flex-1 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className={cn(
                        'font-sans text-sm',
                        tier.highlighted ? 'text-white/70' : 'text-charcoal/65'
                      )}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    'w-full text-center py-3.5 font-sans font-medium text-sm tracking-wide transition-all duration-300',
                    tier.highlighted
                      ? 'bg-gold-400 text-navy-900 hover:bg-gold-300'
                      : 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                  )}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center font-sans text-xs text-charcoal/40 mt-6">
            All prices in USD. Custom scopes available — <Link href="/contact" className="text-gold-400 hover:underline">let&rsquo;s talk</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-4">FAQ</p>
            <div className="divider-gold mx-auto mb-5" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-medium">
              Common
              <span className="text-gold-400 italic"> Questions</span>
            </h2>
          </div>
          <div className="space-y-px bg-gray-200">
            {FAQ.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-7"
              >
                <h3 className="font-serif text-navy-900 text-lg font-medium mb-2">{item.q}</h3>
                <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-sans text-sm text-charcoal/60 mb-4">Have a question not answered here?</p>
            <Link href="/contact" className="btn-primary">
              Ask Me Directly <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
