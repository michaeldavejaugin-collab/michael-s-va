import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyWorkWithMe } from '@/components/sections/WhyWorkWithMe'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { PlatformsSection } from '@/components/sections/PlatformsSection'
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
      <PlatformsSection />
      <PortfolioPreview />
      <TestimonialsPreview />
      <CtaSection />
    </>
  )
}
