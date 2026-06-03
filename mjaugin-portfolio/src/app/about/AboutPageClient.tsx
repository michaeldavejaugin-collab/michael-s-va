'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Users, Globe2, Star, CheckCircle2 } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'

const TIMELINE = [
  {
    year: '2020',
    title: 'Started as a Virtual Assistant',
    description:
      'Began my VA career supporting business owners with administrative tasks, calendar management, and research. Quickly developed a reputation for reliability and proactive communication.',
  },
  {
    year: '2021',
    title: 'Expanded into E-commerce Support',
    description:
      'Took on first Shopify management clients, learning the intricacies of e-commerce operations — from product management and order fulfilment to customer service and inventory coordination.',
  },
  {
    year: '2022',
    title: 'Joined OBI Services Company',
    description:
      'Joined the OBI Services team, working on complex multi-client operational support. Developed deeper expertise in business process management, SOP development, and cross-functional coordination.',
  },
  {
    year: '2023',
    title: 'Stepped into Team Leadership',
    description:
      'Was given responsibility for leading a team of virtual assistants — managing workflows, performance, training, and client communication. Developed systems that scaled delivery quality across multiple accounts.',
  },
  {
    year: '2024',
    title: 'International Client Portfolio',
    description:
      'Built a thriving client portfolio spanning the United States, United Kingdom, and Australia — delivering premium operational support, e-commerce management, lead generation, and website development.',
  },
]

const CORE_VALUES = [
  'Ownership Mentality — I treat every client\'s business as my own',
  'Radical Transparency — you always know the status of every task',
  'Continuous Improvement — I seek better ways to do everything',
  'Delivery First — commitments are non-negotiable',
]

export function AboutPageClient() {
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
            <p className="section-label mb-5">About Me</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              The Story Behind
              <span className="text-gold-400 italic"> the Specialist</span>
            </h1>
            <p className="font-sans text-lg text-white/60 leading-relaxed">
              4+ years of virtual operations experience. 2 years of team leadership. A clear mission: to help international businesses operate better, scale smarter, and grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="sticky top-28"
            >
<div className="aspect-[3/4] relative overflow-hidden">
  <Image
    src="/profile.png"
    alt="Michael Dave Jaugin"
    fill
    className="object-cover object-top"
    priority
  />

  <div className="absolute top-0 left-0 w-20 h-1 bg-gold-400" />
  <div className="absolute top-0 left-0 w-1 h-20 bg-gold-400" />
  <div className="absolute bottom-0 right-0 w-20 h-1 bg-gold-400" />
  <div className="absolute bottom-0 right-0 w-1 h-20 bg-gold-400" />
</div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-gray-100 mt-px">
                {[
                  { v: '4+', l: 'Years Experience' },
                  { v: '2+', l: 'Team Leadership' },
                  { v: '50+', l: 'Projects Delivered' },
                  { v: '3', l: 'Countries Served' },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-white p-5 text-center">
                    <div className="font-serif text-3xl text-gold-400 font-medium">{v}</div>
                    <div className="font-sans text-xs text-charcoal/50 mt-1 uppercase tracking-wide">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="section-label">My Story</p>
              <div className="divider-gold" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-medium leading-tight">
                Precision, Ownership &amp;
                <span className="text-gold-400 italic"> Measurable Results</span>
              </h2>

              <div className="space-y-5 font-sans text-base text-charcoal/65 leading-relaxed">
                <p>
                  My journey into virtual operations started in 2020, driven by a desire to help business owners work more effectively and focus on what truly matters — growth, strategy, and vision.
                </p>
                <p>
                  Over four years, I have sharpened my expertise across the full spectrum of virtual operations: executive assistance, e-commerce management, Shopify specialisation, lead generation, website development, and the kind of deep operational support that actually moves the needle.
                </p>
                <p>
                  My time at <strong className="text-navy-900 font-medium">OBI Services Company</strong> was transformative. It exposed me to high-pressure, multi-client environments where precision, documentation, and consistent delivery were non-negotiable. I thrived in that environment and brought those same standards to every engagement since.
                </p>
                <p>
                  Stepping into team leadership was a natural evolution. Managing a team of virtual assistants taught me how to build systems that scale, how to develop people, and how to maintain quality across complex operational environments. I stopped thinking like a task-executor and started thinking like an operations strategist.
                </p>
                <p>
                  Today, I work with e-commerce store owners, agency owners, startup founders, and executives across the United States, United Kingdom, and Australia — bringing the same level of care, ownership, and professionalism to every engagement.
                </p>
              </div>

              {/* Core values */}
              <div className="border-l-2 border-gold-400 pl-6 py-2 mt-8">
                <p className="font-sans text-sm font-medium text-navy-900 mb-4">What I Stand For</p>
                <ul className="space-y-2">
                  {CORE_VALUES.map((v) => (
                    <li key={v} className="flex items-start gap-2.5 font-sans text-sm text-charcoal/65">
                      <CheckCircle2 size={15} className="text-gold-400 flex-shrink-0 mt-0.5" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/services" className="btn-primary">
                  See My Services <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label mb-4">Career Timeline</p>
              <div className="divider-gold mx-auto mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-medium">
                The Path to
                <span className="text-gold-400 italic"> Expertise</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-10">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-8 pl-14 relative"
                  >
                    <div className="absolute left-0 top-0 w-11 h-11 bg-navy-900 border-2 border-gold-400 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-gold-400 text-xs font-medium">{item.year.slice(2)}</span>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-gold-400 tracking-widest uppercase mb-1">{item.year}</p>
                      <h3 className="font-serif text-xl text-navy-900 font-medium mb-2">{item.title}</h3>
                      <p className="font-sans text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
