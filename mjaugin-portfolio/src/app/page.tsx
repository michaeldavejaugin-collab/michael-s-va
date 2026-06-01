import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyWorkWithMe } from '@/components/sections/WhyWorkWithMe'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { PortfolioPreview } from '@/components/sections/PortfolioPreview'
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyWorkWithMe />
      <AboutPreview />
      <PortfolioPreview />
      <TestimonialsPreview />
      <CtaSection />
    </>
  )
}
