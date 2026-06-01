import type { Metadata } from 'next'
import { AboutPageClient } from './AboutPageClient'

export const metadata: Metadata = {
  title: 'About — The Story Behind the Specialist',
  description:
    'Learn about Michael Dave Jaugin — a Virtual Operations & E-commerce Specialist with 4+ years of experience, 2 years of team leadership, and a track record of delivering results for international clients.',
  openGraph: {
    title: 'About Michael Dave Jaugin — Virtual Operations & E-commerce Specialist',
    description: '4+ years VA experience, 2+ years team leadership. Serving US, UK, Australian & global businesses.',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
