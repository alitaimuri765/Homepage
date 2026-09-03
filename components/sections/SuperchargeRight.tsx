import Image from 'next/image'

interface Props {
  heading?: string
  body?: string
}

export default function SuperchargeRight({
  heading = 'Make healthcare inclusive and intelligent.',
  body = 'We develop innovative AI solutions that address the unique challenges of the African healthcare landscape, while also offering robust solutions for our global partners.',
}: Props) {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0">
          {/* Left — gradient panel + doctor image */}
          <div className="relative flex-1 min-h-[300px] lg:min-h-[450px]">
            {/* Dark gradient background */}
            <div
              className="absolute rounded-[6px]"
              style={{
                background: 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
                left: 0,
                right: 30,
                top: 72,
                bottom: 0,
              }}
            />
            {/* Doctor image overlay */}
            <div
              className="absolute rounded-[4px] overflow-hidden"
              style={{ width: 'min(374px, 80%)', height: 'min(450px, calc(100% - 16px))', left: 16, top: 0 }}
            >
              <Image
                src="/images/ai-man-supercharge.png"
                alt="Health professional"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right text column */}
          <div className="flex-1 lg:pl-16 flex flex-col justify-center">
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
        </div>
      </div>
    </section>
  )
}
