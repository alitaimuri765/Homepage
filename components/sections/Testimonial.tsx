import Image from 'next/image'

interface Props {
  pullQuote?: string
  body?: string
  name?: string
  title?: string
  buttonText?: string
}

export default function Testimonial({
  pullQuote = 'Health.IQ changed how I think about my health.',
  body = 'I used to ignore my health until something went wrong. Now I track my habits daily, get personalized insights, and feel more in control than ever. Health.IQ made that simple.',
  name = 'Amina Y.',
  title = 'Health.IQ User, Dar es Salaam',
  buttonText = 'Read Success Story',
}: Props) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left — photo with overlay */}
          <div
            className="flex-shrink-0 relative rounded-[20px] overflow-hidden w-full lg:w-[598px]"
            style={{ height: 485 }}
          >
            <div className="lg:hidden absolute inset-0">
              <Image
                src="/images/testimonial-bg.png"
                alt="Albert Flores"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:block absolute inset-0">
              <Image
                src="/images/testimonial-bg.png"
                alt="Albert Flores"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom gradient overlay */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: 134, background: 'linear-gradient(360deg, #000000 0%, rgba(0,0,0,0) 100%)' }}
            />
            {/* Name + title */}
            <div className="absolute bottom-0 left-0 px-6 lg:px-9 pb-5 lg:pb-7">
              <p
                className="font-semibold text-[16px] lg:text-[18px] leading-[24px] text-white mb-1"
                style={{ letterSpacing: '-0.5px' }}
              >
                {name}
              </p>
              <p className="text-[13px] lg:text-[14px] leading-[22px]" style={{ color: '#A1A1AA' }}>
                {title}
              </p>
            </div>
          </div>

          {/* Right — quote */}
          <div className="flex-1 pt-0 lg:pt-4">
            {/* Quote mark */}
            <div className="mb-4 lg:mb-5 select-none" style={{ color: '#CBD5E1', fontSize: 48, lineHeight: 1, fontWeight: 700 }}>&ldquo;</div>

            <blockquote
              className="text-xl lg:text-[28px] font-medium leading-[30px] lg:leading-[38px] mb-5 lg:mb-8"
              style={{ color: '#090914', maxWidth: 592 }}
            >
              {pullQuote}
            </blockquote>

            <p
              className="text-[16px] lg:text-[21px] leading-[26px] lg:leading-[34px] mb-8 lg:mb-10"
              style={{ color: '#52525B', maxWidth: 599 }}
            >
              {body}
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
