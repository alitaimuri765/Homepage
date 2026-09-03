import Hero from '@/components/sections/Hero'
import VideoSection from '@/components/sections/VideoSection'
import ValuePropSection from '@/components/sections/ValuePropSection'
import PartnerLogos from '@/components/sections/PartnerLogos'
import SuperchargeRight from '@/components/sections/SuperchargeRight'
import FeatureCards from '@/components/sections/FeatureCards'
import StatsSection from '@/components/sections/StatsSection'
import Testimonial from '@/components/sections/Testimonial'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Your Digital Health Companion!"
        subtitle="Take control of your health. Start your journey today!"
      />
      <VideoSection />
      <ValuePropSection />
      <SuperchargeRight />
      <FeatureCards />
      <StatsSection />
      <PartnerLogos />
      <Testimonial />
      <FAQSection />
      <Footer />
    </main>
  )
}
