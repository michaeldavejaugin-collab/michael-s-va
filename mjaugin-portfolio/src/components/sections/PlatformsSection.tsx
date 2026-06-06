'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

// ============================================================
// ALL PLATFORMS DATA
// ============================================================
const CATEGORIES = [
  {
    label: 'Operations & Productivity',
    items: [
      { name: 'Google Workspace', icon: '🔵', color: '#4285F4' },
      { name: 'Microsoft 365', icon: '🟦', color: '#D83B01' },
      { name: 'Monday.com', icon: '🟠', color: '#FF3D57' },
      { name: 'Nifty', icon: '🟣', color: '#6C63FF' },
      { name: 'Slack', icon: '💬', color: '#4A154B' },
      { name: 'VS Code', icon: '🔷', color: '#007ACC' },
    ],
  },
  {
    label: 'E-commerce Platforms',
    items: [
      { name: 'Shopify', icon: '🛍️', color: '#96BF48' },
      { name: 'Amazon Seller', icon: '📦', color: '#FF9900' },
      { name: 'WooCommerce', icon: '🛒', color: '#7F54B3' },
      { name: 'eBay', icon: '🏪', color: '#E53238' },
    ],
  },
  {
    label: 'Lead Generation & CRM',
    items: [
      { name: 'Apollo', icon: '🚀', color: '#7C3AED' },
      { name: 'HubSpot', icon: '🟧', color: '#FF7A59' },
      { name: 'Zoho CRM', icon: '🔴', color: '#E42527' },
      { name: 'Salesforce', icon: '☁️', color: '#00A1E0' },
      { name: 'Lead Scraping', icon: '🔍', color: '#D4AF37' },
    ],
  },
  {
    label: 'Communication',
    items: [
      { name: 'Zoom', icon: '📹', color: '#2D8CFF' },
      { name: 'Google Meet', icon: '🎥', color: '#00897B' },
      { name: 'Microsoft Teams', icon: '👥', color: '#6264A7' },
    ],
  },
  {
    label: 'Marketing & Web',
    items: [
      { name: 'WordPress', icon: '🌐', color: '#21759B' },
      { name: 'Elementor', icon: '⚡', color: '#92003B' },
      { name: 'Canva', icon: '🎨', color: '#00C4CC' },
      { name: 'Mailchimp', icon: '📧', color: '#FFE01B' },
      { name: 'Klaviyo', icon: '📨', color: '#000000' },
    ],
  },
  {
    label: 'Business Systems',
    items: [
      { name: 'GoHighLevel', icon: '📊', color: '#FF6B35' },
      { name: 'SuiteDash', icon: '🗂️', color: '#1A73E8' },
      { name: 'Data Entry Systems', icon: '💾', color: '#D4AF37' },
    ],
  },
]

// Flatten all items into one big list and duplicate for seamless loop
const ALL_ITEMS = CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.label }))
)
const ROW1 = [...ALL_ITEMS, ...ALL_ITEMS]
const ROW2 = [...ALL_ITEMS].reverse()
const ROW2_DOUBLED = [...ROW2, ...ROW2]

// ============================================================
// SINGLE PLATFORM CARD
// ============================================================
function PlatformCard({ name, icon, color, category }: {
  name: string
  icon: string
  color: string
  category: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex-shrink-0 mx-3"
    >
      <div
        className="
          relative w-32 h-32 flex flex-col items-center justify-center gap-2
          bg-navy-900 border border-white/10
          cursor-default select-none
          transition-all duration-300
          group-hover:border-gold-400/60
          group-hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]
        "
      >
        {/* Gold corner accent on hover */}
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />

        {/* Icon */}
        <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>

        {/* Name */}
        <span className="font-sans text-xs text-white/60 text-center px-2 leading-tight group-hover:text-white transition-colors duration-300">
          {name}
        </span>

        {/* Category label on hover */}
        <div className="
          absolute -bottom-7 left-1/2 -translate-x-1/2
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          whitespace-nowrap
        ">
          <span className="font-sans text-[10px] text-gold-400 tracking-wide">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================
// MARQUEE ROW
// ============================================================
function MarqueeRow({
  items,
  direction = 'left',
  speed = 40,
}: {
  items: typeof ROW1
  direction?: 'left' | 'right'
  speed?: number
}) {
  const duration = items.length * speed * 0.1

  return (
    <div className="relative overflow-hidden group/row mb-10">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <motion.div
        className="flex items-center pb-8"
        animate={{
          x: direction === 'left'
            ? ['0%', '-50%']
            : ['-50%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        // Pause on hover of the entire row
        whileHover={{ animationPlayState: 'paused' }}
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <PlatformCard key={`${item.name}-${i}`} {...item} />
        ))}
      </motion.div>
    </div>
  )
}

// ============================================================
// MAIN SECTION EXPORT
// ============================================================
export function PlatformsSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 container-wide"
        >
          <p className="section-label mb-4">Tech Stack</p>
          <div className="w-12 h-px bg-gold-400 mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-5">
            Supported Platforms &amp;
            <span className="text-gold-400 italic"> Technologies</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Experienced across the tools and platforms that power modern business operations,
            e-commerce, lead generation, project management, and client communication.
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MarqueeRow items={ROW1} direction="left" speed={35} />
          <MarqueeRow items={ROW2_DOUBLED} direction="right" speed={45} />
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container-wide mt-6"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="
                  flex items-center gap-2
                  border border-white/10 px-4 py-2
                  hover:border-gold-400/40 transition-colors duration-300
                "
              >
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                <span className="font-sans text-xs text-white/50 tracking-wide">
                  {cat.label}
                </span>
                <span className="font-sans text-xs text-gold-400 font-medium">
                  {cat.items.length}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Total count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center font-sans text-xs text-white/25 tracking-widest uppercase mt-8"
        >
          {ALL_ITEMS.length}+ platforms &amp; tools across {CATEGORIES.length} categories
        </motion.p>
      </div>
    </section>
  )
}
