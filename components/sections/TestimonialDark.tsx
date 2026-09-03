import Image from 'next/image'

interface TestimonialDarkProps {
  quote?: string
  name?: string
  title?: string
}

const DEFAULT_QUOTE = 'Health.IQ has saved us thousands of hours of work and has unlocked data insights we never thought possible.'
const DEFAULT_NAME = 'Albert Flores'
const DEFAULT_TITLE = 'Product Manager at Jomanar'

export default function TestimonialDark({
  quote = DEFAULT_QUOTE,
  name = DEFAULT_NAME,
  title = DEFAULT_TITLE,
}: TestimonialDarkProps) {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{ background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[92px] relative">
        {/* White border inset box — desktop only */}
        <div className="hidden lg:block absolute inset-0 border border-white/30 mx-[32px]" />

        <div className="relative text-center text-white py-6 lg:py-12">
          {/* Open quote mark */}
          <div className="flex justify-start mb-4 lg:mb-6">
            <svg width="24" height="20" viewBox="0 0 30 25" fill="white" opacity="0.7" className="lg:w-[29px] lg:h-[24px]">
              <path d="M0 24V14.4C0 10.56 1.04 7.04 3.12 3.84C5.28 0.64 8.32 0 11.04 0L12.48 2.88C10.08 3.52 8.24 4.72 6.96 6.48C5.68 8.24 5.04 10.16 5.04 12.24H11.52V24H0ZM17.52 24V14.4C17.52 10.56 18.56 7.04 20.64 3.84C22.8 0.64 25.84 0 28.56 0L30 2.88C27.6 3.52 25.76 4.72 24.48 6.48C23.2 8.24 22.56 10.16 22.56 12.24H29.04V24H17.52Z" />
            </svg>
          </div>

          {/* Quote */}
          <blockquote
            className="text-xl lg:text-[48px] font-bold leading-tight lg:leading-[60px] tracking-[-0.5px] lg:tracking-[-0.96px] mb-8 lg:mb-10 max-w-full lg:max-w-[1216px] mx-auto text-left lg:text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {quote}
          </blockquote>

          {/* Close quote */}
          <div className="flex justify-end -mt-4 mb-8 lg:mb-10">
            <svg width="24" height="20" viewBox="0 0 30 25" fill="white" opacity="0.7" style={{ transform: 'rotate(180deg)' }} className="lg:w-[29px] lg:h-[24px]">
              <path d="M0 24V14.4C0 10.56 1.04 7.04 3.12 3.84C5.28 0.64 8.32 0 11.04 0L12.48 2.88C10.08 3.52 8.24 4.72 6.96 6.48C5.68 8.24 5.04 10.16 5.04 12.24H11.52V24H0ZM17.52 24V14.4C17.52 10.56 18.56 7.04 20.64 3.84C22.8 0.64 25.84 0 28.56 0L30 2.88C27.6 3.52 25.76 4.72 24.48 6.48C23.2 8.24 22.56 10.16 22.56 12.24H29.04V24H17.52Z" />
            </svg>
          </div>

          {/* Avatar + attribution */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden" style={{ background: '#D4B2AF' }}>
              <Image
                src="/images/testimonial-avatar.png"
                alt="Albert Flores"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-[18px] font-medium leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {name}
              </p>
              <p className="text-[16px] leading-[24px] text-white/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
