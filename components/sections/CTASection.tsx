import Image from 'next/image'
import Link from 'next/link'

interface Props {
  label?: string
  heading?: string
  body?: string
  buttonText?: string
}

export default function CTASection({
  label = 'Ready to start your journey?',
  heading = 'Download Now!',
  body = 'Join thousands of people already using Health.IQ to live happier, healthier lives. Available on iOS and Android.',
  buttonText = 'Request a demo',
}: Props) {
  return (
    <section
      id="demo"
      className="relative overflow-hidden rounded-[6px] mx-4 lg:mx-[60px] my-0"
      style={{
        background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
        minHeight: 400,
      }}
    >
      {/* Right image — on desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[703px]">
        <Image
          src="/images/cta-photo.png"
          alt=""
          fill
          sizes="703px"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 px-6 py-16 lg:px-[55px] lg:py-[130px] max-w-full lg:max-w-[460px]">
        {/* White accent bar */}
        <div className="w-[75px] h-1 rounded-full mb-5" style={{ background: '#FFFFFF' }} />
        <p
          className="text-xl lg:text-[30px] font-medium leading-tight lg:leading-[45px] text-white mb-2"
        >
          {label}
        </p>
        <h2
          className="text-3xl lg:text-[50px] font-bold leading-tight lg:leading-[60px] text-white mb-3"
        >
          {heading}
        </h2>
        <p
          className="text-[16px] lg:text-[18px] leading-[28px] text-white mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {body}
        </p>
        <Link
          href="#demo"
          className="inline-flex items-center gap-2 px-[10px] py-[8px] rounded-[87px] text-[16px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-black"
          style={{ border: '1px solid #FFFFFF', width: 183, justifyContent: 'space-between' }}
        >
          <span>{buttonText}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}
