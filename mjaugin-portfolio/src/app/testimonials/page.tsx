import type { Metadata } from 'next'
import { TestimonialsPageClient } from './TestimonialsPageClient'

export const metadata: Metadata = {
  title: 'Testimonials — What Clients Say',
  description:
    'Read client testimonials from business owners across the United States, United Kingdom, and Australia who have worked with Michael Dave Jaugin.',
  openGraph: {
    title: 'Testimonials — Michael Dave Jaugin',
    description: 'Real feedback from real clients across three continents.',
  },
}

export default function TestimonialsPage() {
  return <TestimonialsPageClient />
}
