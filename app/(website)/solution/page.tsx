import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import StepsSection from '@/components/sections/StepsSection'
import SolutionFeatureCards from '@/components/sections/SolutionFeatureCards'
import TestimonialDark from '@/components/sections/TestimonialDark'
import Footer from '@/components/Footer'

export const metadata = { title: 'Solution — Health.IQ' }

export default function SolutionPage() {
  return (
    <main>
      <Hero
        title="Revolutionizing Healthcare with Digital & AI"
        subtitle="For anyone anywhere!"
        bgImage="/images/solution-hero-bg.png"
      />

      {/* Specialty cards */}
      <SolutionFeatureCards cards={undefined} />

      <StepsSection heading={undefined} steps={undefined} />

      {/* Stats section: dark gradient, left text+stats, right photo */}
      <section
        className="relative overflow-hidden py-12 lg:py-20"
        style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Left: heading + stats */}
          <div className="flex-1 text-white">
            <h2
              className="text-2xl lg:text-[50px] font-bold leading-tight lg:leading-[60px] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {'Empowering healthier lives across Africa and beyond.'}
            </h2>
            <p
              className="text-[16px] lg:text-[18px] leading-[28px] text-white/70 mb-8 lg:mb-12"
              style={{ fontFamily: 'Poppins, sans-serif', maxWidth: 764 }}
            >
              {'From individuals tracking their daily health to healthcare institutions using AI for better outcomes, Health.IQ is making an impact.'}
            </p>
            <div className="grid grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-6 lg:gap-y-8">
              {([
                { num: '35K+', label: 'Active users' },
                { num: '95%', label: 'User satisfaction rate' },
                { num: '20+', label: 'Healthcare partners' },
                { num: '35+', label: 'Countries reached' },
              ] as { num: string; label: string }[]).map((stat, i) => (
                <div key={i}>
                  <p className="text-[32px] lg:text-[44px] font-bold leading-[42px] lg:leading-[54px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {stat.num}
                  </p>
                  <p className="text-[14px] lg:text-[18px] leading-[22px] lg:leading-[30px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: doctor photo — hidden on mobile */}
          <div
            className="hidden lg:block relative flex-shrink-0 rounded-[4px] overflow-hidden"
            style={{ width: 510, height: 620 }}
          >
            <Image
              src="/images/happy-user.jpeg"
              alt="Happy Health.IQ user"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Still Confused CTA */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: photo */}
          <div
            className="relative w-full lg:w-[520px] lg:flex-shrink-0 rounded-[4px] overflow-hidden"
            style={{ aspectRatio: '520/391' }}
          >
            <Image
              src="/images/solution-cta-photo.png"
              alt="Healthcare professional"
              fill
              className="object-cover"
            />
          </div>
          {/* Right: text */}
          <div className="flex-1">
            <h2
              className="text-2xl lg:text-[48px] font-bold leading-tight lg:leading-[60px] tracking-[-0.5px] lg:tracking-[-1px] mb-4"
              style={{ color: '#1A1A1A', fontFamily: "'Poppins', sans-serif" }}
            >
              {'Ready to take control of your health?'}
            </h2>
            <p
              className="text-[16px] leading-[26px] mb-8 tracking-[-0.25px]"
              style={{ color: '#505050', fontFamily: "'Poppins', sans-serif" }}
            >
              {'Download Health.IQ today and start your journey to a healthier, smarter life.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://apps.apple.com/us/app/health-iq/id6535649551" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <Image src="/images/btn-appstore.png" alt="Download on the App Store" width={140} height={42} className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity" unoptimized />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.healthiq&hl=en_US" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <Image src="/images/btn-googleplay.png" alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialDark
        quote="Health.IQ gave me the insights I needed to finally take my health seriously."
        name="Kwame A."
        title="Health.IQ User, Nairobi"
      />
      <Footer />
    </main>
  )
}
