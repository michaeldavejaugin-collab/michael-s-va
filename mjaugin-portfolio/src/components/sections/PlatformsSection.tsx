'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'

// ============================================================
// TYPES
// ============================================================
interface Platform {
  name: string
  icon: string
  category: string
  description: string
  experience: string
  tasks: string[]
}

// ============================================================
// ALL PLATFORMS DATA WITH DESCRIPTIONS
// ============================================================
const PLATFORMS: Platform[] = [
  // Operations & Productivity
  {
    name: 'Google Workspace',
    icon: '🔵',
    category: 'Operations & Productivity',
    description: 'Google\'s suite of cloud-based productivity and collaboration tools used daily for business operations.',
    experience: 'Used extensively across all client engagements for document management, communication, and scheduling.',
    tasks: ['Gmail inbox management', 'Google Docs & Sheets', 'Google Drive organization', 'Calendar scheduling', 'Google Meet coordination', 'Shared workspace setup'],
  },
  {
    name: 'Microsoft 365',
    icon: '🟦',
    category: 'Operations & Productivity',
    description: 'Microsoft\'s enterprise productivity suite including Word, Excel, Outlook, and Teams.',
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

  // E-commerce Platforms
  {
    name: 'Shopify',
    icon: '🛍️',
    category: 'E-commerce Platforms',
    description: 'The world\'s leading e-commerce platform powering millions of online stores globally.',
    experience: 'Extensive Shopify experience across multiple clients including full store management, optimization, and development.',
    tasks: ['Product listing & optimization', 'Store management', 'Theme customization', 'Inventory management', 'Order processing', 'App integration', 'Analytics & reporting', 'Conversion optimization'],
  },
  {
    name: 'Amazon Seller',
    icon: '📦',
    category: 'E-commerce Platforms',
    description: 'Amazon\'s seller platform for managing product listings, inventory, and fulfilment on the world\'s largest marketplace.',
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
    description: 'One of the world\'s largest online marketplaces for both new and used products.',
    experience: 'Managed eBay seller accounts with focus on listing optimization, customer service, and account health.',
    tasks: ['Product listing creation', 'Listing optimization', 'Customer service handling', 'Order management', 'Account health monitoring', 'Pricing research'],
  },

  // Lead Generation & CRM
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
    description: 'The world\'s #1 CRM platform used by enterprises globally for sales and operations.',
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

  // Communication & Collaboration
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
    description: 'Google\'s video meeting solution integrated with Google Workspace for seamless collaboration.',
    experience: 'Used regularly for internal team meetings and client calls within Google Workspace environments.',
    tasks: ['Video meeting hosting', 'Calendar scheduling', 'Screen sharing', 'Meeting notes', 'Recording coordination', 'Guest management'],
  },
  {
    name: 'Microsoft Teams',
    icon: '👥',
    category: 'Communication & Collaboration',
    description: 'Microsoft\'s unified communication and collaboration platform for enterprise teams.',
    experience: 'Managed communications and project coordination for clients operating in Microsoft environments.',
    tasks: ['Team channel management', 'Meeting scheduling', 'File collaboration', 'Chat management', 'App integrations', 'Meeting recordings'],
  },

  // Marketing & Website Management
  {
    name: 'WordPress',
    icon: '🌐',
    category: 'Marketing & Website Management',
    description: 'The world\'s most popular CMS powering over 40% of all websites globally.',
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

  // Business Systems & Client Portals
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
// MODAL COMPONENT
// ============================================================
function PlatformModal({
  platform,
  onClose,
}: {
  platform: Platform
  onClose: () => void
}) {
  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal box — stop click from closing when clicking inside */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-navy-900 border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gold top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          {/* Header */}
          <div className="flex items-start justify-between p-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-gold-400/30 flex items-center justify-center text-3xl bg-white/5">
                {platform.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white font-medium">
                  {platform.name}
                </h3>
                <p className="font-sans text-xs text-gold-400 tracking-widest uppercase mt-1">
                  {platform.category}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0 mt-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-8 space-y-6">
            {/* Description */}
            <div>
              <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">
                About This Tool
              </p>
              <p className="font-sans text-sm text-white/65 leading-relaxed">
                {platform.description}
              </p>
            </div>

            {/* Experience */}
            <div>
              <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">
                My Experience
              </p>
              <p className="font-sans text-sm text-white/65 leading-relaxed">
                {platform.experience}
              </p>
            </div>

            {/* Tasks */}
            <div>
              <p className="font-sans text-xs font-medium text-gold-400 tracking-[0.2em] uppercase mb-3">
                Tasks I Perform
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {platform.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-center gap-2.5 font-sans text-sm text-white/60"
                  >
                    <ChevronRight size={12} className="text-gold-400 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
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
    </AnimatePresence>
  )
}

// ============================================================
// PLATFORM CARD COMPONENT
// ============================================================
function PlatformCard({
  platform,
  onClick,
}: {
  platform: Platform
  onClick: () => void
}) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.06, y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group relative w-full flex flex-col items-center justify-center gap-3 p-6 bg-navy-900 border border-white/10 hover:border-gold-400/60 hover:shadow-[0_0_28px_rgba(212,175,55,0.2)] transition-all duration-300 cursor-pointer"
      aria-label={`Learn more about ${platform.name}`}
    >
      {/* Gold corner accents on hover */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />

      {/* Icon */}
      <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
        {platform.icon}
      </span>

      {/* Name */}
      <span className="font-sans text-xs text-white/60 text-center leading-tight group-hover:text-white transition-colors duration-300 font-medium">
        {platform.name}
      </span>

      {/* Click hint */}
      <span className="font-sans text-[10px] text-gold-400/0 group-hover:text-gold-400/70 transition-all duration-300 tracking-wide">
        View details
      </span>
    </motion.button>
  )
}

// ============================================================
// MAIN SECTION EXPORT
// ============================================================
export function PlatformsSection() {
  const [activeCategory, setActiveCategory] = useState('Show All')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const filteredPlatforms = activeCategory === 'Show All'
    ? PLATFORMS
    : PLATFORMS.filter((p) => p.category === activeCategory)

  const handleCategoryClick = useCallback((cat: string) => {
    setActiveCategory(cat)
  }, [])

  return (
    <>
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

        <div className="container-wide relative z-10">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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

          {/* ── Category Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
            role="tablist"
            aria-label="Filter by category"
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
                  onClick={() => handleCategoryClick(cat)}
                  className={`
                    relative font-sans text-xs font-medium tracking-wide px-4 py-2.5
                    border transition-all duration-300 flex items-center gap-2
                    ${isActive
                      ? 'bg-gold-400 border-gold-400 text-navy-900 shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                      : 'border-white/15 text-white/55 hover:border-gold-400/40 hover:text-white bg-transparent'
                    }
                  `}
                >
                  {cat}
                  <span className={`
                    text-[10px] font-semibold px-1.5 py-0.5 rounded-sm
                    ${isActive ? 'bg-navy-900/20 text-navy-900' : 'bg-white/10 text-white/40'}
                  `}>
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* ── Platform Grid ── */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredPlatforms.map((platform) => (
                <PlatformCard
                  key={platform.name}
                  platform={platform}
                  onClick={() => setSelectedPlatform(platform)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── Bottom count ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center font-sans text-xs text-white/25 tracking-widest uppercase mt-10"
          >
            Showing {filteredPlatforms.length} of {PLATFORMS.length} platforms &amp; tools
          </motion.p>
        </div>
      </section>

      {/* ── Modal ── */}
      {selectedPlatform && (
        <PlatformModal
          platform={selectedPlatform}
          onClose={() => setSelectedPlatform(null)}
        />
      )}
    </>
  )
}
