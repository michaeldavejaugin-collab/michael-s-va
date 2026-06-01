import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://michaeldavejaugin.com'),
  title: {
    default: 'Michael Dave Jaugin — Virtual Operations & E-commerce Specialist',
    template: '%s | Michael Dave Jaugin',
  },
  description:
    'Premium virtual operations and e-commerce support for global businesses. Shopify management, website development, lead generation, and operational excellence — delivered by a specialist with 4+ years of experience.',
  keywords: [
    'virtual assistant',
    'e-commerce specialist',
    'Shopify management',
    'virtual operations',
    'lead generation',
    'website development',
    'remote operations manager',
    'e-commerce support',
    'Michael Dave Jaugin',
  ],
  authors: [{ name: 'Michael Dave Jaugin' }],
  creator: 'Michael Dave Jaugin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://michaeldavejaugin.com',
    siteName: 'Michael Dave Jaugin',
    title: 'Michael Dave Jaugin — Virtual Operations & E-commerce Specialist',
    description:
      'Premium virtual operations and e-commerce support for global businesses. 4+ years of experience, trusted by clients in the US, UK, and Australia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Dave Jaugin — Virtual Operations & E-commerce Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Dave Jaugin — Virtual Operations & E-commerce Specialist',
    description: 'Premium virtual operations and e-commerce support for global businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
