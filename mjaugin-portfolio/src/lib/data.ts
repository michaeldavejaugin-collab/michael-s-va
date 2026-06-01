import type { Service, Testimonial, PricingTier, PortfolioProject, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'virtual-assistance',
    title: 'Virtual Assistance',
    description:
      'Comprehensive executive support that eliminates administrative burden and frees you to focus on what drives your business forward.',
    features: [
      'Calendar & inbox management',
      'Document creation & formatting',
      'Research & data compilation',
      'Meeting coordination',
      'Travel arrangements',
      'CRM management',
    ],
    icon: 'Monitor',
  },
  {
    id: 'ecommerce-operations',
    title: 'E-commerce Operations',
    description:
      'End-to-end operational management of your online store — from inventory oversight to customer experience optimization.',
    features: [
      'Order processing & fulfilment coordination',
      'Inventory tracking & management',
      'Customer service handling',
      'Returns & refund management',
      'Marketplace account management',
      'Performance reporting',
    ],
    icon: 'ShoppingCart',
  },
  {
    id: 'shopify-management',
    title: 'Shopify Management',
    description:
      'Complete Shopify store management and optimization to maximize conversions and deliver a premium buying experience.',
    features: [
      'Product listing & optimization',
      'Theme customization',
      'App integration & management',
      'Conversion rate optimization',
      'Analytics & reporting',
      'Store maintenance',
    ],
    icon: 'Store',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Clean, fast, and conversion-focused websites built on modern platforms that establish a credible professional presence.',
    features: [
      'WordPress & Shopify builds',
      'Landing page creation',
      'Website maintenance',
      'Performance optimization',
      'SEO fundamentals',
      'CMS content management',
    ],
    icon: 'Globe',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description:
      'Strategic prospecting and pipeline building that consistently delivers qualified leads ready for your sales team.',
    features: [
      'Prospect research & list building',
      'LinkedIn outreach management',
      'Email campaign management',
      'CRM data entry & hygiene',
      'Lead qualification',
      'Outreach follow-up sequences',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'operations-support',
    title: 'Operations Support',
    description:
      'Systematic operational support that builds scalable processes, reduces bottlenecks, and enables your business to grow.',
    features: [
      'SOP creation & documentation',
      'Team coordination & oversight',
      'Process optimization',
      'Project management support',
      'Vendor & supplier coordination',
      'KPI tracking & reporting',
    ],
    icon: 'Settings',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    company: 'Luminary Apparel Co.',
    country: 'United States',
    flag: '🇺🇸',
    content:
      'Michael transformed our Shopify operations completely. Revenue increased 40% within three months of working together. He thinks strategically, communicates proactively, and treats the business as his own. Genuinely one of the best investments we\'ve made.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Whitford',
    role: 'Managing Director',
    company: 'Pinnacle Digital Agency',
    country: 'United Kingdom',
    flag: '🇬🇧',
    content:
      'We brought Michael in to manage operations for three of our e-commerce clients simultaneously. His ability to juggle complexity while maintaining quality is remarkable. Our clients noticed the difference immediately. Highly recommended for any serious agency.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma Thornton',
    role: 'E-commerce Director',
    company: 'Coastal Goods Pty Ltd',
    country: 'Australia',
    flag: '🇦🇺',
    content:
      'The lead generation system Michael built for us generates a consistent pipeline of qualified prospects every week. He understood our ICP perfectly and the quality of leads is exceptional. Our sales team is very happy with the results.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Derek Okonkwo',
    role: 'Startup Founder',
    company: 'NovaTech Solutions',
    country: 'United States',
    flag: '🇺🇸',
    content:
      'As a founder, I was drowning in operational tasks. Michael took everything off my plate within the first week. He is thorough, self-directed, and incredibly reliable. I can focus on fundraising and product because I trust him completely with operations.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Head of Growth',
    company: 'Bloom Commerce',
    country: 'United Kingdom',
    flag: '🇬🇧',
    content:
      'Michael managed our entire product catalogue migration to Shopify — over 1,200 SKUs — flawlessly and ahead of schedule. His attention to detail and organisational ability are at a different level to any VA we have worked with before.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Callum Stewart',
    role: 'Business Owner',
    company: 'Stewart Industrial Supplies',
    country: 'Australia',
    flag: '🇦🇺',
    content:
      'We hired Michael for website maintenance and operations support and he quickly became indispensable. He documents everything, trains the team, and proactively identifies issues before they become problems. Absolute professional.',
    rating: 5,
  },
]

export const PRICING: PricingTier[] = [
  {
    id: 'essential',
    name: 'Essential Support',
    tagline: 'For growing businesses',
    price: '$800',
    period: 'per month',
    description:
      'Core virtual assistance and operational support for businesses that need reliable, consistent help without full-time overhead.',
    features: [
      '20 hours per month',
      'Virtual assistance & admin support',
      'Email & calendar management',
      'Basic Shopify management',
      'Weekly progress reports',
      'Email communication',
      '24-hour response time',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth Support',
    tagline: 'Most popular',
    price: '$1,600',
    period: 'per month',
    description:
      'Comprehensive operational and e-commerce support designed to accelerate growth and free up your time for high-leverage activities.',
    features: [
      '40 hours per month',
      'Full e-commerce operations management',
      'Shopify management & optimization',
      'Lead generation & list building',
      'Website maintenance & updates',
      'SOP creation & documentation',
      'Bi-weekly strategy calls',
      'Priority email & Slack support',
      '12-hour response time',
    ],
    highlighted: true,
    cta: 'Start Growing',
  },
  {
    id: 'partner',
    name: 'Operations Partner',
    tagline: 'Full operational coverage',
    price: '$2,800',
    period: 'per month',
    description:
      'A dedicated operations partner embedded in your business — managing teams, driving projects, and ensuring every system runs at peak performance.',
    features: [
      'Up to 80 hours per month',
      'Full operations management',
      'Team leadership & coordination',
      'Advanced Shopify & e-commerce',
      'Full website development support',
      'Lead generation campaigns',
      'Project management',
      'KPI dashboards & reporting',
      'Weekly 1:1 strategy calls',
      'Dedicated Slack channel',
      '4-hour response time',
    ],
    highlighted: false,
    cta: 'Partner With Me',
  },
]

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 'gsworkwear',
    title: 'GS Workwear — Full E-commerce Operations Overhaul',
    client: 'GS Workwear',
    url: 'https://www.gsworkwear.com/',
    tags: ['Shopify', 'E-commerce Operations', 'Product Management', 'CRO'],
    challenge:
      'GS Workwear, a leading Australian workwear retailer, had a growing product catalogue and increasing order volume that was overwhelming their internal team. Product listings were inconsistent, inventory data was unreliable, and the customer experience suffered from slow response times and unresolved disputes.',
    solution:
      'I conducted a full operational audit and implemented a systematic approach to product management, establishing standardised listing templates for all SKUs. I restructured the Shopify backend for clarity, built inventory tracking workflows, established a customer service response system with templated replies, and created SOPs for every recurring operational process.',
    outcome:
      'Operations were stabilised within the first 30 days. The team had clear documentation for every process, product data accuracy improved significantly, and customer response times dropped dramatically. The store was positioned for confident scale without operational bottlenecks.',
    metrics: [
      { label: 'Response Time Reduction', value: '68%' },
      { label: 'Product Listing Accuracy', value: '99%' },
      { label: 'SOPs Created', value: '14' },
      { label: 'Operational Efficiency Gain', value: '45%' },
    ],
    image: '/portfolio-gsworkwear.jpg',
  },
]

export const STATS = [
  { value: '4+', label: 'Years of Experience' },
  { value: '2+', label: 'Years Team Leadership' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
]
