import type { Metadata } from 'next'
import { PricingPageClient } from './PricingPageClient'

export const metadata: Metadata = {
  title: 'Pricing — Transparent, Value-Driven Service Tiers',
  description:
    'Straightforward pricing for virtual operations and e-commerce support. Three tiers — Essential Support, Growth Support, and Operations Partner — built around your business needs.',
  openGraph: {
    title: 'Pricing — Michael Dave Jaugin',
    description: 'Transparent pricing for premium virtual operations and e-commerce support.',
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
