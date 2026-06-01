import type { Metadata } from 'next'
import { PortfolioPageClient } from './PortfolioPageClient'

export const metadata: Metadata = {
  title: 'Portfolio — Real Projects, Real Results',
  description:
    'Case studies and featured projects from Michael Dave Jaugin — including e-commerce operations, Shopify management, and business operations for international clients.',
  openGraph: {
    title: 'Portfolio — Michael Dave Jaugin',
    description: 'Case studies and real client results across e-commerce, operations, and Shopify.',
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
