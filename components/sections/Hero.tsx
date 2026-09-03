import Image from 'next/image'
import Navbar from '@/components/Navbar'

interface HeroProps {
  title?: string
  subtitle?: string
  bgImage?: string
  hideCta?: boolean
}

export default function Hero({
  title = 'Our team helps you get your life back on track.',
  subtitle = 'Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limited to, your work and home stressors.',
  bgImage,
  hideCta = false,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={!bgImage ? { background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' } : undefined}
    >
      {bgImage && (
        <>
          <Image src={bgImage} alt="" fill className="object-cover" style={{ zIndex: 0 }} />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.15) 100%)',
              zIndex: 1,
            }}
          />
        </>
      )}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <div className={`max-w-[1440px] mx-auto px-4 lg:px-[60px] pt-[100px] lg:pt-[80px] ${hideCta ? 'pb-10 lg:pb-[60px]' : 'pb-12 lg:pb-[80px]'}`}>
          <h1 className="text-3xl lg:text-[40px] font-bold leading-[114.5%] text-white max-w-full lg:max-w-[673px] mb-4 lg:mb-6">
            {title}
          </h1>
          <p className={`text-[16px] leading-[142%] text-white max-w-full lg:max-w-[647px] ${hideCta ? '' : 'mb-8 lg:mb-10'}`}>
            {subtitle}
          </p>
          {!hideCta && (
            <div className="flex flex-wrap gap-3">
              <a href="https://apps.apple.com/us/app/health-iq/id6535649551" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <Image
                  src="/images/btn-appstore.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity"
                  unoptimized
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.healthiq&hl=en_US" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <Image
                  src="/images/btn-googleplay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto object-contain hover:opacity-90 transition-opacity"
                  unoptimized
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
