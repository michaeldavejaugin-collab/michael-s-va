'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// ============================================================
// TYPES
// ============================================================
interface Platform {
  name: string
  icon?: string
  logo?: string
  category: string
  description: string
  experience: string
  tasks: string[]
}

// ============================================================
// PLATFORMS DATA
// ============================================================
const PLATFORMS: Platform[] = [
  {
    name: 'Google Workspace',
    icon: '🔵',
    category: 'Operations & Productivity',
    description: "Google's suite of cloud-based productivity and collaboration tools used daily for business operations.",
    experience: 'Used extensively across all client engagements for document management, communication, and scheduling.',
    tasks: ['Gmail inbox management', 'Google Docs & Sheets', 'Google Drive organization', 'Calendar scheduling', 'Google Meet coordination', 'Shared workspace setup'],
  },
  {
    name: 'Microsoft 365',
    icon: '🟦',
    category: 'Operations & Productivity',
    description: "Microsoft's enterprise productivity suite including Word, Excel, Outlook, and Teams.",
    experience: 'Proficient in the full Microsoft 365 ecosystem, particularly for clients operating in corporate environments.',
    tasks: ['Excel data management', 'Word document creation', 'Outlook email management', 'PowerPoint presentations', 'OneDrive file management', 'SharePoint coordination'],
  },
  {
    name: 'Monday.com',
    icon: '🟠',
    category: 'Operations & Productivity',
    description: 'A work operating system for project management, team workflows, and operational tracking.',
    experience: 'Managed client projects and team workflows using Monday.com boards and automations.',
    tasks: ['Project board setup', 'Task assignment & tracking', 'Workflow automation', 'Progress reporting', 'Team coordination', 'Deadline management'],
  },
  {
    name: 'Nifty',
    icon: '🟣',
    category: 'Operations & Productivity',
    description: 'A modern project management tool that combines tasks, docs, and team collaboration.',
    experience: 'Used Nifty for managing multi-client operational workflows and milestone tracking.',
    tasks: ['Milestone tracking', 'Task management', 'Team collaboration', 'Document management', 'Progress roadmaps', 'Client reporting'],
  },
  {
    name: 'Slack',
    icon: '💬',
    category: 'Operations & Productivity',
    description: 'The leading business messaging platform for team communication and workflow integration.',
    experience: 'Primary communication tool across most client engagements for real-time updates and team coordination.',
    tasks: ['Channel management', 'Client communication', 'File sharing', 'App integrations', 'Workflow notifications', 'Team announcements'],
  },
  {
    name: 'VS Code',
    icon: '🔷',
    category: 'Operations & Productivity',
    description: 'Visual Studio Code — a powerful code editor used for website development and technical tasks.',
    experience: 'Used for website development, code editing, and technical support tasks across client projects.',
    tasks: ['Website development', 'Code editing & debugging', 'HTML/CSS customization', 'Plugin management', 'Theme development', 'Technical documentation'],
  },
  {
    name: 'Shopify',
    logo: '/logos/shopify.svg',
    category: 'E-commerce Platforms',
    description: "The world's leading e-commerce platform powering millions of online stores globally.",
    experience: 'Extensive Shopify experience across multiple clients including full store management, optimization, and development.',
    tasks: ['Product listing & optimization', 'Store management', 'Theme customization', 'Inventory management', 'Order processing', 'App integration', 'Analytics & reporting', 'Conversion optimization'],
  },
  {
    name: 'Amazon Seller',
    icon: '📦',
    category: 'E-commerce Platforms',
    description: "Amazon's seller platform for managing product listings, inventory, and fulfilment on the world's largest marketplace.",
    experience: 'Managed Amazon seller accounts including listings, inventory coordination, and performance monitoring.',
    tasks: ['Product listing creation', 'Inventory management', 'Order fulfilment tracking', 'Performance monitoring', 'Review management', 'Pricing optimization'],
  },
  {
    name: 'WooCommerce',
    icon: '🛒',
    category: 'E-commerce Platforms',
    description: 'The most popular WordPress e-commerce plugin powering online stores of all sizes.',
    experience: 'Built and managed WooCommerce stores including product management, order processing, and plugin configuration.',
    tasks: ['Product management', 'Order processing', 'Plugin configuration', 'Payment gateway setup', 'Shipping configuration', 'Store maintenance'],
  },
  {
    name: 'eBay',
    icon: '🏪',
    category: 'E-commerce Platforms',
    description: "One of the world's largest online marketplaces for both new and used products.",
    experience: 'Managed eBay seller accounts with focus on listing optimization, customer service, and account health.',
    tasks: ['Product listing creation', 'Listing optimization', 'Customer service handling', 'Order management', 'Account health monitoring', 'Pricing research'],
  },
  {
    name: 'Apollo',
    icon: '🚀',
    category: 'Lead Generation & CRM',
    description: 'A powerful sales intelligence and engagement platform for prospecting and outreach.',
    experience: 'Used Apollo extensively for building targeted lead lists, contact enrichment, and outreach campaign management.',
    tasks: ['Lead list building', 'Prospect research', 'Contact enrichment', 'Email sequence setup', 'Campaign management', 'Data export & CRM sync'],
  },
  {
    name: 'HubSpot',
    icon: '🟧',
    category: 'Lead Generation & CRM',
    description: 'An all-in-one CRM platform for marketing, sales, and customer service operations.',
    experience: 'Managed HubSpot CRM for multiple clients including contact management, pipeline tracking, and reporting.',
    tasks: ['Contact management', 'Deal pipeline tracking', 'Email campaigns', 'Lead scoring', 'Report creation', 'Workflow automation'],
  },
  {
    name: 'Zoho CRM',
    icon: '🔴',
    category: 'Lead Generation & CRM',
    description: 'A comprehensive CRM solution for managing sales pipelines and customer relationships.',
    experience: 'Configured and managed Zoho CRM for sales pipeline management and customer data organization.',
    tasks: ['Lead management', 'Pipeline management', 'Contact data entry', 'Activity logging', 'Report generation', 'Workflow setup'],
  },
  {
    name: 'Salesforce',
    icon: '☁️',
    category: 'Lead Generation & CRM',
    description: "The world's #1 CRM platform used by enterprises globally for sales and operations.",
    experience: 'Supported Salesforce operations including data management, report generation, and record maintenance.',
    tasks: ['Data entry & management', 'Lead record maintenance', 'Report generation', 'Account management', 'Activity tracking', 'Dashboard monitoring'],
  },
  {
    name: 'Lead Scraping',
    icon: '🔍',
    category: 'Lead Generation & CRM',
    description: 'Custom lead scraping systems and tools for building targeted prospect databases.',
    experience: 'Built and managed custom lead generation systems for clients requiring targeted outreach lists.',
    tasks: ['Custom list building', 'Data extraction', 'Contact verification', 'List cleaning & deduplication', 'Industry targeting', 'Prospect qualification'],
  },
  {
    name: 'Zoom',
    icon: '📹',
    category: 'Communication & Collaboration',
    description: 'The leading video conferencing platform for business meetings and client calls.',
    experience: 'Daily use for client meetings, team check-ins, and virtual collaboration across time zones.',
    tasks: ['Client meeting coordination', 'Meeting scheduling', 'Recording management', 'Webinar support', 'Screen sharing', 'Calendar integration'],
  },
  {
    name: 'Google Meet',
    icon: '🎥',
    category: 'Communication & Collaboration',
    description: "Google's video meeting solution integrated with Google Workspace for seamless collaboration.",
    experience: 'Used regularly for internal team meetings and client calls within Google Workspace environments.',
    tasks: ['Video meeting hosting', 'Calendar scheduling', 'Screen sharing', 'Meeting notes', 'Recording coordination', 'Guest management'],
  },
  {
    name: 'Microsoft Teams',
    icon: '👥',
    category: 'Communication & Collaboration',
    description: "Microsoft's unified communication and collaboration platform for enterprise teams.",
    experience: 'Managed communications and project coordination for clients operating in Microsoft environments.',
    tasks: ['Team channel management', 'Meeting scheduling', 'File collaboration', 'Chat management', 'App integrations', 'Meeting recordings'],
  },
  {
    name: 'WordPress',
    icon: '🌐',
    category: 'Marketing & Website Management',
    description: "The world's most popular CMS powering over 40% of all websites globally.",
    experience: 'Built, maintained, and optimized WordPress websites for multiple clients across various industries.',
    tasks: ['Website development', 'Content management', 'Plugin management', 'Theme customization', 'SEO optimization', 'Performance maintenance'],
  },
  {
    name: 'Elementor',
    icon: '⚡',
    category: 'Marketing & Website Management',
    description: 'The leading WordPress page builder for creating professional websites without code.',
    experience: 'Built landing pages and full websites using Elementor for clients requiring visual design control.',
    tasks: ['Page design & layout', 'Landing page creation', 'Template customization', 'Mobile optimization', 'Form integration', 'Widget configuration'],
  },
  {
    name: 'Canva',
    icon: '🎨',
    category: 'Marketing & Website Management',
    description: 'A powerful graphic design platform for creating professional visual content.',
    experience: 'Created marketing materials, social media content, and brand assets for multiple clients.',
    tasks: ['Social media graphics', 'Marketing materials', 'Presentation design', 'Brand asset creation', 'Email graphics', 'Banner & ad design'],
  },
  {
    name: 'Mailchimp',
    icon: '📧',
    category: 'Marketing & Website Management',
    description: 'A leading email marketing platform for creating, sending, and analyzing campaigns.',
    experience: 'Managed email marketing campaigns including list management, template creation, and performance tracking.',
    tasks: ['Campaign creation', 'List management', 'Template design', 'Automation setup', 'Performance reporting', 'A/B testing support'],
  },
  {
    name: 'Klaviyo',
    icon: '📨',
    category: 'Marketing & Website Management',
    description: 'The preferred email & SMS marketing platform for e-commerce businesses.',
    experience: 'Set up and managed Klaviyo flows and campaigns for e-commerce clients to drive repeat purchases.',
    tasks: ['Email flow setup', 'Campaign management', 'Segmentation', 'Shopify integration', 'Performance analytics', 'Template creation'],
  },
  {
    name: 'GoHighLevel',
    icon: '📊',
    category: 'Business Systems & Client Portals',
    description: 'An all-in-one marketing and CRM platform popular with agencies and service businesses.',
    experience: 'Managed GoHighLevel accounts for agency clients including pipeline management and automation setup.',
    tasks: ['Pipeline management', 'Automation workflow setup', 'Contact management', 'Campaign management', 'Reporting dashboards', 'Client portal management'],
  },
  {
    name: 'SuiteDash',
    icon: '🗂️',
    category: 'Business Systems & Client Portals',
    description: 'A comprehensive client portal and business management platform for service businesses.',
    experience: 'Configured and managed SuiteDash client portals for service-based businesses.',
    tasks: ['Client portal setup', 'Project management', 'Invoice management', 'File sharing', 'Contract management', 'Client onboarding'],
  },
  {
    name: 'Data Entry Systems',
    icon: '💾',
    category: 'Business Systems & Client Portals',
    description: 'Advanced data entry systems and custom databases for business record management.',
    experience: 'Managed complex data entry operations across multiple industries with high accuracy standards.',
    tasks: ['High-volume data entry', 'Database management', 'Data cleaning & formatting', 'Record maintenance', 'Quality control', 'Data migration support'],
  },
]

const CATEGORIES = [
  'Show All',
  'Operations & Productivity',
  'E-commerce Platforms',
  'Lead Generation & CRM',
  'Communication & Collaboration',
  'Marketing & Website Management',
  'Business Systems & Client Portals',
]

// ============================================================
// MODAL
// ============================================================
function PlatformModal({ platform, onClose }: { platform: Platform; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative bg-navy-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-gold-400/30 flex items-center justify-center bg-white/5 flex-shrink-0">
  {platform.logo ? (
    <Image
      src={platform.logo}
      alt={platform.name}
      width={40}
      height={40}
      className="object-contain"
    />
  ) : (
    <span className="text-3xl">{platform.icon}</span>
  )}
</div>
            <div>
              <h3 className="font-serif text-2xl text-white font-medium">{platform.name}</h3>
              <p className="font-sans text-xs text-gold-400 tracking-widest uppercase mt-1">{platform.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0 mt-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <div>
            <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">About This Tool</p>
            <p className="font-sans text-sm text-white/65 leading-relaxed">{platform.description}</p>
          </div>
          <div>
            <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">My Experience</p>
            <p className="font-sans text-sm text-white/65 leading-relaxed">{platform.experience}</p>
          </div>
          <div>
            <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">Tasks I Perform</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {platform.tasks.map((task) => (
                <li key={task} className="flex items-center gap-2.5 font-sans text-sm text-white/60">
                  <ChevronRight size={12} className="text-gold-400 flex-shrink-0" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full border border-gold-400/30 text-gold-400 py-3 font-sans text-sm font-medium tracking-wide hover:bg-gold-400 hover:text-navy-900 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================
// CARD — shared between carousel and grid
// ============================================================
function PlatformCard({ platform, onClick }: { platform: Platform; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.07, y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center gap-2.5 bg-navy-900 border border-white/10 hover:border-gold-400/60 hover:shadow-[0_0_28px_rgba(212,175,55,0.22)] transition-all duration-300 cursor-pointer p-5 w-32 h-32 flex-shrink-0"
      aria-label={`Learn more about ${platform.name}`}
    >
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
      <div className="h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
  {platform.logo ? (
    <Image
      src={platform.logo}
      alt={platform.name}
      width={48}
      height={48}
      className="object-contain"
    />
  ) : (
    <span className="text-3xl">{platform.icon}</span>
  )}
</div>
      <span className="font-sans text-xs text-white/55 text-center leading-tight group-hover:text-white transition-colors duration-300">
        {platform.name}
      </span>
      <span className="font-sans text-[9px] text-gold-400/0 group-hover:text-gold-400/70 transition-all duration-300 tracking-wide">
        tap for details
      </span>
    </motion.button>
  )
}

// ============================================================
// CAROUSEL ROW — used only in "Show All" mode
// ============================================================
function CarouselRow({
  items,
  direction = 'left',
  onCardClick,
}: {
  items: Platform[]
  direction?: 'left' | 'right'
  onCardClick: (p: Platform) => void
}) {
  const looped = [...items, ...items, ...items]
  const duration = items.length * 4

  return (
    <div className="relative overflow-hidden mb-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center py-2"
        style={{ width: 'max-content' }}
        animate={{ x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        whileHover={{ animationPlayState: 'paused' } as any}
      >
        {looped.map((platform, i) => (
          <div key={`${platform.name}-${i}`} className="mx-3">
            <PlatformCard platform={platform} onClick={() => onCardClick(platform)} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ============================================================
// GRID VIEW — used when a specific category is selected
// ============================================================
function GridView({
  items,
  onCardClick,
}: {
  items: Platform[]
  onCardClick: (p: Platform) => void
}) {
  return (
    <div className="container-wide">
      <motion.div
        layout
        className="flex flex-wrap justify-center gap-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 16 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
            >
              <PlatformCard
                platform={platform}
                onClick={() => onCardClick(platform)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

// ============================================================
// MAIN EXPORT
// ============================================================
export function PlatformsSection() {
  const [activeCategory, setActiveCategory] = useState('Show All')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const isShowAll = activeCategory === 'Show All'

  const filtered = isShowAll
    ? PLATFORMS
    : PLATFORMS.filter((p) => p.category === activeCategory)

  // For carousel mode: split into two rows
  const mid = Math.ceil(PLATFORMS.length / 2)
  const row1 = PLATFORMS.slice(0, mid)
  const row2 = PLATFORMS.slice(mid)

  return (
    <>
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

        <div className="relative z-10">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 container-wide"
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

          {/* ── Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-12 container-wide"
            role="tablist"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              const count = cat === 'Show All'
                ? PLATFORMS.length
                : PLATFORMS.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    font-sans text-xs font-medium tracking-wide px-4 py-2.5
                    border transition-all duration-300 flex items-center gap-2
                    ${isActive
                      ? 'bg-gold-400 border-gold-400 text-navy-900 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'border-white/15 text-white/55 hover:border-gold-400/40 hover:text-white'
                    }
                  `}
                >
                  {cat}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 ${isActive ? 'bg-navy-900/20 text-navy-900' : 'bg-white/10 text-white/40'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* ── CAROUSEL (Show All) or GRID (category selected) ── */}
          <AnimatePresence mode="wait">

            {isShowAll ? (
              // ── CAROUSEL MODE ──
              <motion.div
                key="carousel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <CarouselRow items={row1} direction="left" onCardClick={setSelectedPlatform} />
                <CarouselRow items={row2} direction="right" onCardClick={setSelectedPlatform} />
              </motion.div>
            ) : (
              // ── GRID MODE ──
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="pb-4"
              >
                <GridView items={filtered} onCardClick={setSelectedPlatform} />
              </motion.div>
            )}

          </AnimatePresence>

          {/* ── Footer hint ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center font-sans text-xs text-white/25 tracking-widest uppercase mt-8 container-wide"
          >
            {isShowAll
              ? `${PLATFORMS.length} platforms across ${CATEGORIES.length - 1} categories · click any card for details`
              : `${filtered.length} platforms in ${activeCategory} · click any card for details`
            }
          </motion.p>

        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedPlatform && (
          <PlatformModal
            platform={selectedPlatform}
            onClose={() => setSelectedPlatform(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
