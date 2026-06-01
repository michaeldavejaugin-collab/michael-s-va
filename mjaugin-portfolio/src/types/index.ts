export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  country: string
  flag: string
  content: string
  rating: number
}

export interface PricingTier {
  id: string
  name: string
  tagline: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface PortfolioProject {
  id: string
  title: string
  client: string
  url: string
  tags: string[]
  challenge: string
  solution: string
  outcome: string
  metrics: { label: string; value: string }[]
  image: string
}

export interface NavItem {
  label: string
  href: string
}
