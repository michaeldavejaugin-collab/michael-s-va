import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact — Book a Free Discovery Call',
  description:
    "Ready to work together? Get in touch with Michael Dave Jaugin to discuss your virtual operations and e-commerce needs. Book a free 30-minute discovery call.",
  openGraph: {
    title: 'Contact Michael Dave Jaugin',
    description: 'Book a free discovery call and explore how premium virtual operations support can transform your business.',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
