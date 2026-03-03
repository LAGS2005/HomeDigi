import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { PricingSection } from '@/components/landing/pricing-section'
import { LeadershipSection } from '@/components/landing/leadership-section'
import { ScheduleSection } from '@/components/landing/schedule-section'
import { CTASection } from '@/components/landing/cta-section'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <LeadershipSection />
        <ScheduleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
