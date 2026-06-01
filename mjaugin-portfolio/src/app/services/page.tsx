import type { Metadata } from 'next'
import { ServicesPageClient } from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Services — Virtual Operations & E-commerce Support',
  description:
    'Comprehensive virtual assistance, e-commerce operations, Shopify management, website development, lead generation, and operations support for global businesses.',
  openGraph: {
    title: 'Services — Michael Dave Jaugin',
    description: 'Premium virtual operations and e-commerce services for international businesses.',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
