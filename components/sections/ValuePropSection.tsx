import Image from 'next/image'

interface Props {
  heading?: string
  body?: string
}

export default function ValuePropSection({
  heading = 'Empowering you to take control of your health.',
  body = 'We believe everyone deserves control over their health, regardless of location or socioeconomic background. Health.IQ uses AI to make that a reality.',
}: Props) {

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
          {/* Left text column */}
          <div className="flex-1 lg:pr-16 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
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
            <h2
              className="text-2xl lg:text-[50px] font-bold leading-tight lg:leading-[60px] mb-6"
              style={{ color: '#1A1A1A' }}
            >
              {heading}
            </h2>
            <p
              className="text-[16px] lg:text-[18px] leading-[28px]"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#505050', maxWidth: 496 }}
            >
              {body}
            </p>
          </div>

          {/* Right — dark gradient panel with phone + laptop mockup */}
          <div className="relative flex-1 min-h-[280px] lg:min-h-[460px]">
            {/* Dark gradient background */}
            <div
              className="absolute rounded-[6px] top-[28px] left-[16px] right-0 bottom-0 lg:top-[54px] lg:left-[40px]"
              style={{
                background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
              }}
            />
            {/* Phone + laptop — phone in front, laptop overlaps behind */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center z-10">
              <Image
                src="/images/valueprop-phone.png"
                alt="Health.IQ Mobile App"
                width={231}
                height={465}
                className="object-contain relative z-10 flex-shrink-0 -mr-[80px]"
                style={{ width: 'clamp(120px, 18vw, 231px)', height: 'auto' }}
              />
              <Image
                src="/images/valueprop-laptop.png"
                alt="Health.IQ Web App"
                width={430}
                height={275}
                className="object-contain flex-shrink-0"
                style={{ width: 'clamp(220px, 38vw, 430px)', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
